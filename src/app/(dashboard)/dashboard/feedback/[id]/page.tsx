import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/server/db";
import { feedbackItems } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Maximize2 } from "lucide-react";
import Image from "next/image";

type FeedbackType = "feature" | "bug" | "question" | "other";

interface FeedbackTypeOption {
  value: FeedbackType;
  label: string;
  color: string;
  bgColor: string;
}

const feedbackTypes: FeedbackTypeOption[] = [
  {
    value: "feature",
    label: "Feature",
    color: "text-yellow-800",
    bgColor: "bg-yellow-100",
  },
  { value: "bug", label: "Bug", color: "text-red-800", bgColor: "bg-red-100" },
  {
    value: "question",
    label: "General Question",
    color: "text-blue-800",
    bgColor: "bg-blue-100",
  },
  {
    value: "other",
    label: "Other",
    color: "text-teal-800",
    bgColor: "bg-teal-100",
  },
];

async function getFeedbackItem(id: string) {
  const user = await currentUser();
  if (!user) return null;

  const feedbackItem = await db.query.feedbackItems.findFirst({
    where: eq(feedbackItems.id, id),
    with: {
      form: {
        with: {
          project: true,
        },
      },
    },
  });

  if (!feedbackItem || feedbackItem.form.project.userId !== user.id) {
    return null;
  }

  return feedbackItem;
}

function FeedbackTypeBadge({ type }: { type: FeedbackType }) {
  const feedbackType = feedbackTypes.find((t) => t.value === type);
  if (!feedbackType) return null;

  return (
    <Badge
      className={`text-base ${feedbackType.bgColor} ${feedbackType.color}`}
    >
      {feedbackType.label}
    </Badge>
  );
}

export default async function FeedbackItem({
  params,
}: {
  params: { id: string };
}) {
  const feedbackItem = await getFeedbackItem(params.id);

  if (!feedbackItem) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl border-violet-200 shadow-lg">
        <CardHeader className="border-b border-violet-200 bg-gradient-to-r from-violet-50 to-violet-100">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-violet-800">
              Feedback Details
            </CardTitle>
            <FeedbackTypeBadge type={feedbackItem.type as FeedbackType} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Project</h3>
              <p className="mt-1 text-lg font-semibold text-violet-700">
                {feedbackItem.form.project.name}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Form</h3>
              <p className="mt-1 text-lg font-semibold text-violet-700">
                {feedbackItem.form.title}
              </p>
            </div>
          </div>

          <Separator className="bg-violet-100" />

          {feedbackItem.rating && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Rating</h3>
              <div className="mt-1 flex items-center">
                {/* eslint-disable-next-line
                @typescript-eslint/no-unsafe-assignment */}
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < feedbackItem.rating!
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-lg font-semibold text-violet-700">
                  {feedbackItem.rating} / 5
                </span>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-gray-500">Feedback</h3>
            <p className="mt-2 whitespace-pre-wrap rounded-md bg-violet-50 p-4 text-gray-700">
              {feedbackItem.feedback}
            </p>
          </div>

          {feedbackItem.screenshot && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Screenshot</h3>
              <div className="group relative mt-2 h-64 w-full overflow-hidden rounded-md bg-violet-50">
                <Image
                  src={feedbackItem.screenshot}
                  alt="Feedback Screenshot"
                  layout="fill"
                  objectFit="contain"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30 group-hover:opacity-100">
                  <Maximize2 className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center text-gray-500">
            <Calendar className="mr-2 h-5 w-5" />
            <span className="text-sm">
              Submitted on {new Date(feedbackItem.createdAt).toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
