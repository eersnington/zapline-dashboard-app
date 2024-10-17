// app/dashboard/voicebots/page.tsx
import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import VoicebotsList from "./_components/VoiceBotList";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchVoicebots } from "@/actions/voicebots";
import CreateVoiceBotBtn from "./_components/CreateVoiceBot";

export default async function VoicebotsPage() {
  const { userId } = auth();

  if (!userId) {
    return <div>Please sign in to view your voicebots.</div>;
  }

  const voicebots = await fetchVoicebots();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Voicebots</h1>
        {voicebots.length > 0 && <CreateVoiceBotBtn />}
      </div>
      <Suspense fallback={<VoicebotsSkeleton />}>
        <VoicebotsList initialVoicebots={voicebots} />
      </Suspense>
    </div>
  );
}

function VoicebotsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {[...Array(3)].map((_, i) => (
        <Card key={i}>
          <CardContent className="pt-6">
            <Skeleton className="mb-2 h-6 w-3/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
