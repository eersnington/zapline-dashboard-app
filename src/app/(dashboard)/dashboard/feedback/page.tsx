// app/dashboard/feedback/page.tsx
import { Suspense } from "react";
import FeedbackSearch from "./_components/feedback-search";
import { FeedbackTableSkeleton } from "./_components/feedback-skeleton";
import FeedbackTable from "./_components/feedback-table";

export default function FeedbackPage({
  searchParams,
}: {
  searchParams: { domain?: string; type?: string };
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Feedbacks</h1>

      <FeedbackSearch
        initialDomain={searchParams.domain}
        initialType={searchParams.type}
      />

      <Suspense fallback={<FeedbackTableSkeleton />}>
        <FeedbackTable searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
