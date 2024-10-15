// app/dashboard/subscriptions/actions.ts
"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import {
  getUserFeedbackCount,
  getUserProjectCount,
  isUserPaid,
  MAX_FREE_FEEDBACK_LIMIT,
  MAX_FREE_PROJECTS,
} from "@/server/quota";

export interface SubscriptionData {
  subscriptionId: string | null;
  plan: "Free" | "Pro";
  subscriptionNextBilledAt: Date | null;
}

export interface UsageData {
  feedbackItems: number;
  feedbackLimit: string;
  projects: number;
  projectLimit: string;
  message: string;
  isPaid: boolean;
}

export async function fetchSubscriptionData(): Promise<SubscriptionData> {
  const userAuth = await currentUser();

  if (!userAuth) {
    throw new Error("Unauthorized");
  }

  const user = await db
    .select({
      subscriptionId: users.subscriptionId,
      subscriptionNextBilledAt: users.subscriptionNextBilledAt,
    })
    .from(users)
    .where(eq(users.id, userAuth.id))
    .limit(1);

  if (!user || user.length === 0) {
    throw new Error("User not found");
  }

  const userData = user[0];

  if (userData == undefined) {
    return {
      subscriptionId: null,
      plan: "Free",
      subscriptionNextBilledAt: null,
    };
  }

  return {
    subscriptionId: userData.subscriptionId,
    plan: userData.subscriptionId ? "Pro" : "Free",
    subscriptionNextBilledAt: userData.subscriptionNextBilledAt,
  };
}

export async function fetchUsageData(): Promise<UsageData> {
  const userAuth = await currentUser();

  if (!userAuth) {
    throw new Error("Unauthorized");
  }

  const userProjectCount = await getUserProjectCount(userAuth.id);

  const userFeedbackCount = await getUserFeedbackCount(userAuth.id);

  const userPaidBool = await isUserPaid(userAuth.id);

  if (userPaidBool) {
    return {
      feedbackItems: userFeedbackCount,
      feedbackLimit: "unlimited",
      projects: userProjectCount,
      projectLimit: "unlimited",
      message: "Thank you for being a Pro user!",
      isPaid: true,
    };
  }

  return {
    feedbackItems: userFeedbackCount,
    feedbackLimit: MAX_FREE_FEEDBACK_LIMIT.toString(),
    projects: userProjectCount,
    projectLimit: MAX_FREE_PROJECTS.toString(),
    message: "Upgrade to access more projects and feedback",
    isPaid: false,
  };
}
