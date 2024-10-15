import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/server/db";
import { projects, forms, feedbackItems } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { utapi } from "@/server/uploadthing";
import {
  MAX_FREE_FEEDBACK_LIMIT,
  getUserFeedbackCount,
  isUserPaid,
} from "@/server/quota";

const feedbackSchema = z.object({
  projectId: z.string().uuid(),
  type: z.string().max(20),
  rating: z.number().int().min(1).max(5).optional(),
  feedback: z.string(),
});

function isSubdomainOf(subdomain: string, domain: string): boolean {
  const subdomainParts = subdomain.split('.').reverse();
  const domainParts = domain.split('.').reverse();

  if (subdomainParts.length < domainParts.length) {
    return false;
  }

  for (let i = 0; i < domainParts.length; i++) {
    if (domainParts[i] !== subdomainParts[i]) {
      return false;
    }
  }

  return true;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const projectId = formData.get("projectId") as string;
    const type = formData.get("type") as string;
    const rating = formData.get("rating")
      ? Number(formData.get("rating"))
      : undefined;
    const feedback = formData.get("feedback") as string;
    const screenshot = formData.get("screenshot") as File | null;

    const validatedData = feedbackSchema.parse({
      projectId,
      type,
      rating,
      feedback,
    });

    // Extract the domain from the Referer or Origin header
    const referer = req.headers.get("referer");
    const origin = req.headers.get("origin");
    const requestDomain = referer
      ? new URL(referer).hostname
      : (origin ?? "Unknown");

    // Check if the project exists and the domain is authorized
    const project = await db.query.projects.findFirst({
      where: eq(projects.id, validatedData.projectId),
    });

    if (!project) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid project ID" },
        { status: 403 },
      );
    }

    if (requestDomain == "localhost") {
      return NextResponse.json(
        {
          error: `Unauthorized: Feedback submissions are only allowed from ${project.domain}. Localhost submissions are not allowed!`,
        },
        { status: 403 },
      );
    }

    if (!isSubdomainOf(requestDomain, project.domain)) {
      return NextResponse.json(
        {
          error: `Unauthorized: Feedback submissions are only allowed from ${project.domain} and its subdomains.`,
        },
        { status: 403 },
      );
    }

    // Check user's subscription status and feedback count
    const isPaid = await isUserPaid(project.userId);
    if (!isPaid) {
      const feedbackCount = await getUserFeedbackCount(project.userId);

      if (feedbackCount >= MAX_FREE_FEEDBACK_LIMIT) {
        return NextResponse.json(
          {
            error:
              "Monthly feedback submission limit reached. Please upgrade for more.",
          },
          { status: 403 },
        );
      }
    }

    // Find the form associated with the project
    const form = await db.query.forms.findFirst({
      where: eq(forms.projectId, validatedData.projectId),
    });

    if (!form) {
      return NextResponse.json(
        { error: "No form found for this project" },
        { status: 400 },
      );
    }

    let screenshotUrl = null;
    if (screenshot) {
      // Upload the screenshot to uploadthing
      const uploadResponse = await utapi.uploadFiles([screenshot]);
      console.log("Upload response:", uploadResponse);

      if (Array.isArray(uploadResponse) && uploadResponse[0]?.data) {
        screenshotUrl = uploadResponse[0].data.url;
      } else {
        console.error("Failed to upload screenshot:", uploadResponse);
      }
    }

    // Insert the feedback into the database
    await db.insert(feedbackItems).values({
      formId: form.id,
      type: validatedData.type,
      rating: validatedData.rating,
      feedback: validatedData.feedback,
      screenshot: screenshotUrl,
    });

    console.log(`Feedback submitted successfully.`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error submitting feedback:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
