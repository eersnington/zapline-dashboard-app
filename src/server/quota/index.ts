import "server-only";
import { db } from "@/server/db";
import { users, projects, forms, feedbackItems } from "@/server/db/schema";
import { eq, and, sql } from "drizzle-orm";

export const MAX_FREE_PROJECTS = 2;
export const MAX_FREE_FEEDBACK_LIMIT = 20;

export async function getUserProjectCount(userId: string): Promise<number> {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(projects)
    .where(eq(projects.userId, userId));

  if (!result[0]) return 0;

  return result[0].count;
}

export async function isUserPaid(userId: string): Promise<boolean> {
  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
    columns: { subscriptionId: true },
  });
  return user?.subscriptionId ? true : false;
}

export async function getUserFeedbackCount(userId: string): Promise<number> {
  const result = await db
    .select({ count: sql<number>`cast(count(*) as int)` })
    .from(feedbackItems)
    .innerJoin(forms, eq(feedbackItems.formId, forms.id))
    .innerJoin(projects, eq(forms.projectId, projects.id))
    .where(
      and(
        eq(projects.userId, userId),
        sql`${feedbackItems.createdAt} >= date_trunc('month', current_date)`,
      ),
    );

  return result[0]?.count ?? 0;
}
