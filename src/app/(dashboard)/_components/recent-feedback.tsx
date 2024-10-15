import { db } from "@/server/db";
import { feedbackItems, forms, projects, users } from "@/server/db/schema";
import { desc, eq, and } from "drizzle-orm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { currentUser } from "@clerk/nextjs/server";

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

async function getRecentFeedback(userId: string) {
  return db
    .select({
      id: feedbackItems.id,
      type: feedbackItems.type,
      feedback: feedbackItems.feedback,
      createdAt: feedbackItems.createdAt,
      projectName: projects.name,
      projectDomain: projects.domain,
      formTitle: forms.title,
    })
    .from(feedbackItems)
    .innerJoin(forms, eq(feedbackItems.formId, forms.id))
    .innerJoin(projects, eq(forms.projectId, projects.id))
    .innerJoin(users, eq(projects.userId, users.id))
    .where(eq(users.id, userId))
    .orderBy(desc(feedbackItems.createdAt))
    .limit(5);
}

export default async function RecentFeedbackTable() {
  const user = await currentUser();
  if (!user) return null;

  const userId = user.id;

  if (!userId) {
    return <div>Please log in to view your recent feedback.</div>;
  }

  const recentFeedback = await getRecentFeedback(userId);

  if (recentFeedback.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No feedback yet
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Once you receive feedback, it will appear here.
            </p>
            <div className="mt-6">
              <Link href="/dashboard/projects">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add a Project
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Domain</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Feedback</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentFeedback.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.projectName}</TableCell>
            <TableCell>{item.projectDomain}</TableCell>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
