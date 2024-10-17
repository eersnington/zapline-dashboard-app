// app/onboard/page.tsx
import { Suspense } from "react";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import OnboardForm from "./_components/OnboardForm";
import { Skeleton } from "@/components/ui/skeleton";

async function CheckOnboardStatus() {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  // if (user?.storeName && user?.storeUrl) {
  //   redirect("/dashboard");
  // }

  return <OnboardForm />;
}

export default function OnboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Suspense fallback={<OnboardSkeleton />}>
        <CheckOnboardStatus />
      </Suspense>
    </div>
  );
}

function OnboardSkeleton() {
  return (
    <div className="w-[350px] space-y-4">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-1/2" />
    </div>
  );
}
