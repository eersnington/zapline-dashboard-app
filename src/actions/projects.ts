"use server";

import { z } from "zod";
import { db } from "@/server/db";
import { projects, forms, feedbackItems } from "@/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import {
  MAX_FREE_PROJECTS,
  getUserProjectCount,
  isUserPaid,
} from "@/server/quota";

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required").max(255),
  domain: z
    .string()
    .min(1, "Domain is required")
    .regex(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/, "Invalid domain format"),
});

const deleteProjectSchema = z.object({
  projectId: z.string().uuid(),
});

export async function createProject(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const validatedFields = projectSchema.safeParse({
    name: formData.get("name"),
    domain: formData.get("domain"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, domain } = validatedFields.data;

  try {
    // Check if the user is paid
    const isPaid = await isUserPaid(user.id);

    // If not paid, check project count
    if (!isPaid) {
      const projectCount = await getUserProjectCount(user.id);
      if (projectCount >= MAX_FREE_PROJECTS) {
        return {
          error: `Free users are limited to ${MAX_FREE_PROJECTS} project. Please upgrade to create more projects.`,
        };
      }
    }

    const result = await db.transaction(async (tx) => {
      const [newProject] = await tx
        .insert(projects)
        .values({
          userId: user.id,
          name,
          domain,
        })
        .returning();

      if (newProject) {
        await tx.insert(forms).values({
          projectId: newProject.id,
          title: `${name} Feedback Form`,
          description: `Default feedback form for ${name}`,
        });
      }

      return newProject;
    });

    revalidatePath("/dashboard/projects");
    return { success: true, project: result };
  } catch (error) {
    console.error("Failed to create project and form:", error);
    return { error: "Failed to create project and form. Please try again." };
  }
}

export async function deleteProject(formData: FormData) {
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  const validatedFields = deleteProjectSchema.safeParse({
    projectId: formData.get("projectId"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid project ID" };
  }

  const { projectId } = validatedFields.data;

  try {
    await db.transaction(async (tx) => {
      // Delete associated feedback items first
      await tx
        .delete(feedbackItems)
        .where(
          eq(
            feedbackItems.formId,
            db
              .select({ id: forms.id })
              .from(forms)
              .where(eq(forms.projectId, projectId))
              .limit(1),
          ),
        );

      // Delete associated form
      await tx.delete(forms).where(eq(forms.projectId, projectId));

      // Delete the project
      await tx.delete(projects).where(eq(projects.id, projectId));
    });

    revalidatePath("/dashboard/projects");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete project:", error);
    return { error: "Failed to delete project. Please try again." };
  }
}
