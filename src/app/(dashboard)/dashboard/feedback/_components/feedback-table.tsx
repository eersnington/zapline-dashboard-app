// app/dashboard/feedback/_components/FeedbackTable.tsx
import { db } from "@/server/db";
import { feedbackItems, forms, projects } from "@/server/db/schema";
import { desc, eq, like, and, type SQL } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type FeedbackType = "feature" | "bug" | "question" | "other";

interface FeedbackTypeOption {
  value: FeedbackType;
  label: string;
  color: string;
}

const feedbackTypes: FeedbackTypeOption[] = [
  { value: "feature", label: "Feature", color: "bg-yellow-500" },
  { value: "bug", label: "Bug", color: "bg-red-400" },
  { value: "question", label: "General Question", color: "bg-blue-400" },
  { value: "other", label: "Other", color: "bg-teal-400" },
];

async function getFeedback(domain?: string, type?: string) {
  const user = await currentUser();
  if (!user) return [];

  const conditions: SQL[] = [eq(projects.userId, user.id)];

  if (domain) {
    conditions.push(like(projects.domain, `%${domain}%`));
  }
  if (type) {
    conditions.push(eq(feedbackItems.type, type));
  }

  return db
    .select({
      id: feedbackItems.id,
      type: feedbackItems.type,
      feedback: feedbackItems.feedback,
      createdAt: feedbackItems.createdAt,
      domain: projects.domain,
    })
    .from(feedbackItems)
    .innerJoin(forms, eq(feedbackItems.formId, forms.id))
    .innerJoin(projects, eq(forms.projectId, projects.id))
    .where(and(...conditions))
    .orderBy(desc(feedbackItems.createdAt))
    .limit(10);
}

export default async function FeedbackTable({
  searchParams,
}: {
  searchParams: { domain?: string; type?: string };
}) {
  const feedback = await getFeedback(searchParams.domain, searchParams.type);

  if (feedback.length === 0) {
    return <p>No feedback found.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Domain</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Feedback</TableHead>
          <TableHead>Date {"(mm/dd/yyyy)"}</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {feedback.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.domain}</TableCell>
            <TableCell>
              <Badge
                className={`${feedbackTypes.find((f) => f.value === item.type)?.color ?? "bg-gray-500"}`}
              >
                {feedbackTypes.find((f) => f.value === item.type)?.label ??
                  "Unknown"}
              </Badge>
            </TableCell>
            <TableCell className="max-w-xs truncate">{item.feedback}</TableCell>
            <TableCell>
              {new Date(item.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <Link href={`/dashboard/feedback/${item.id}`}>
                <Button variant="default" size="sm">
                  View
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
