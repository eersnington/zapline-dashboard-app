// actions/voicebots.ts
"use server";

import { db } from "@/server/db";
import { voicebots } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export type Voicebot = typeof voicebots.$inferSelect;

const deleteVoicebotSchema = z.object({
  voicebotId: z.string().uuid(),
});

export async function fetchVoicebots(): Promise<Voicebot[]> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const userId = user.id;

  const voicebotsList = await db
    .select()
    .from(voicebots)
    .where(eq(voicebots.userId, userId));

  return voicebotsList;
}

export async function deleteVoicebot(formData: FormData) {
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  const validatedFields = deleteVoicebotSchema.safeParse({
    voicebotId: formData.get("voicebotId"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid voicebot ID" };
  }

  const { voicebotId } = validatedFields.data;

  try {
    await db.transaction(async (tx) => {
      // Delete the voicebot
      const result = await tx
        .delete(voicebots)
        .where(eq(voicebots.id, voicebotId))
        .returning({ deletedId: voicebots.id });

      if (result.length === 0) {
        throw new Error(
          "Voicebot not found or you don't have permission to delete it",
        );
      }
    });

    revalidatePath("/dashboard/voicebots");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete voicebot:", error);
    return { error: "Failed to delete voicebot. Please try again." };
  }
}

const createVoicebotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().url("Invalid URL"),
});

export async function createVoicebot(formData: FormData) {
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  const validatedFields = createVoicebotSchema.safeParse({
    name: formData.get("name"),
    url: formData.get("url"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid input" };
  }

  const { name, url } = validatedFields.data;

  try {
    const newVoicebot = await db
      .insert(voicebots)
      .values({
        name,
        storeUrl: url,
        userId: user.id,
        status: "active",
      })
      .returning();

    revalidatePath("/dashboard/voicebots");
    return { success: true, voicebot: newVoicebot[0] };
  } catch (error) {
    console.error("Failed to create voicebot:", error);
    return { error: "Failed to create voicebot. Please try again." };
  }
}
