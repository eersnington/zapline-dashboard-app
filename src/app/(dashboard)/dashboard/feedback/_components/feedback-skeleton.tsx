// app/dashboard/feedback/_components/FeedbackTableSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function FeedbackTableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead><Skeleton className="h-4 w-[100px]" /></TableHead>
          <TableHead><Skeleton className="h-4 w-[80px]" /></TableHead>
          <TableHead><Skeleton className="h-4 w-[200px]" /></TableHead>
          <TableHead><Skeleton className="h-4 w-[100px]" /></TableHead>
          <TableHead><Skeleton className="h-4 w-[80px]" /></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
        {[...Array(5)].map((_, i) => (
          <TableRow key={i}>
            <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}