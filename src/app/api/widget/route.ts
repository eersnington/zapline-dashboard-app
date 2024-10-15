// api/widget/route.ts
// serves the widget component to users

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Extract the domain from the Referer or Origin header
  const referer = req.headers.get("referer");
  const origin = req.headers.get("origin");
  const requestDomain = referer
    ? new URL(referer).hostname
    : (origin ?? "Unknown");

  console.log(`FeedbackWidget: Request received from domain: ${requestDomain}`);

  // Extract project ID from query parameters
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  // Check if the domain is localhost, Unknown, or associated with the project
  let isValidDomain =
    requestDomain === "localhost" || requestDomain === "Unknown";

  if (!isValidDomain && projectId) {
    // If not localhost or Unknown, check if the domain is associated with the project
    const project = await db.query.projects.findFirst({
      where: eq(projects.id, projectId),
    });

    if (project && project.domain === requestDomain) {
      isValidDomain = true;
    }
  }

  if (!isValidDomain && !projectId) {
    return createErrorResponse("Unauthorized: Invalid project ID or domain");
  }

  const filePath = path.join(process.cwd(), "public", "widget.umd.js");

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    console.log(`FeedbackWidget: Serving widget to domain: ${requestDomain}`);

    return new NextResponse(fileContents, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error(
      `FeedbackWidget: Error serving widget to ${requestDomain}:`,
      error,
    );

    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.error(
        `FeedbackWidget: Widget file not found. Request was from: ${requestDomain}`,
      );
      return createErrorResponse("Widget file not found");
    }

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

function createErrorResponse(errorMessage: string): NextResponse {
  const errorScript = `
    (function() {
      var style = document.createElement('style');
      style.textContent = \`
        .feedback-thing-error-toast {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #7c3aed;
          color: white;
          padding: 16px;
          border-radius: 8px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          z-index: 10000;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 300px;
        }
        .feedback-thing-error-toast button {
          background-color: white;
          color: #f44336;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          margin-left: 12px;
        }
      \`;
      document.head.appendChild(style);

      var toast = document.createElement('div');
      toast.className = 'feedback-thing-error-toast';
      toast.innerHTML = \`
        <span>${errorMessage}</span>
        <button onclick="window.open('https://feedbackthing.pro', '_blank')">
          Visit FeedbackThing
        </button>
      \`;
      document.body.appendChild(toast);
    })();
  `;

  return new NextResponse(errorScript, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
