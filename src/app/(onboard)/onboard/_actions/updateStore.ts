// app/actions/updateStoreInfo.ts
"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function updateStoreInfo(formData: FormData) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const storeName = formData.get("storeName") as string;
  const storeUrl = formData.get("storeUrl") as string;

  if (!storeName || !storeUrl) {
    throw new Error("Store name and URL are required");
  }

  try {
    await db
      .update(users)
      .set({ storeName, storeUrl })
      .where(eq(users.id, userId));

    return { success: true };
  } catch (error) {
    console.error("Failed to update store info:", error);
    throw new Error("Failed to update store info");
  }
}
