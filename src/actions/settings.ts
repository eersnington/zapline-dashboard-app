// app/dashboard/settings/actions.ts
"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export interface UserSettings {
  firstName: string | null;
  lastName: string | null;
  email: string;
}

export interface UpdateUserSettings {
  firstName: string | null;
  lastName: string | null;
}

export async function fetchUserSettings(): Promise<UserSettings | undefined> {
  const userAuth = await currentUser();

  if (!userAuth) {
    throw new Error("Unauthorized");
  }

  const user = await db
    .select({
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
    })
    .from(users)
    .where(eq(users.id, userAuth.id))
    .limit(1);

  return user[0];
}

export async function updateUserSettings(
  settings: UpdateUserSettings,
): Promise<void> {
  const userAuth = await currentUser();

  if (!userAuth) {
    throw new Error("Unauthorized");
  }

  await db
    .update(users)
    .set({
      firstName: settings.firstName,
      lastName: settings.lastName,
    })
    .where(eq(users.id, userAuth.id));
}