// app/dashboard/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/server/db";
import { users, voicebots } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateVoiceBotBtn from "./voicebots/_components/CreateVoiceBot";

async function getDashboardData(userId: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  const userVoicebots = await db.query.voicebots.findMany({
    where: eq(voicebots.userId, userId),
  });

  return { user, voicebots: userVoicebots };
}

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const { user, voicebots } = await getDashboardData(userId);

  // if (!user?.storeName) redirect("/onboard");

  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Store Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Placeholder</p>
              <p className="text-sm text-gray-600">{"Placeholder"}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Voicebots</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{voicebots.length}</p>
              <p className="text-sm text-gray-600">Active Voicebots</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm text-gray-600">Total Conversations</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Your Voicebots</h2>
          {voicebots.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {voicebots.map((bot) => (
                <Card key={bot.id} className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      {bot.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{bot.storeUrl}</p>
                    <p className="mt-2 text-sm font-semibold">
                      Status: {bot.status}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              You haven&apos;t created any voicebots yet.
            </p>
          )}
        </div>

        <div className="mt-8">
          <CreateVoiceBotBtn />
        </div>
      </main>
    </div>
  );
}
