import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-4 h-4 w-1/2" />
        <Skeleton className="h-10 w-28" />
      </CardContent>
    </Card>
  );
}

export function ProjectSkeletonList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
      {[...Array(6)].map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  );
}
