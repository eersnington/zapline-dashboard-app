// app/dashboard/page.tsx
import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import FeedbackStats from "../_components/feedback-stats";
import RecentFeedbackTable from "../_components/recent-feedback";

export default function DashboardPage() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Overview</h2>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Suspense fallback={<FeedbackStatsSkeleton />}>
          <FeedbackStats />
        </Suspense>
      </div>

      {/* Recent Feedback Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<RecentFeedbackTableSkeleton />}>
            <RecentFeedbackTable />
          </Suspense>
        </CardContent>
      </Card>
    </>
  );
}

function RecentFeedbackTableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[80px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[150px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[80px]" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5].map((i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[150px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[80px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function FeedbackStatsSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-4 rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-7 w-[60px]" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
