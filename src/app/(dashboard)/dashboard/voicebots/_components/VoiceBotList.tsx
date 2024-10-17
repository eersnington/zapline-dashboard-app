// app/dashboard/voicebots/VoicebotsList.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { toast } from "@/components/ui/use-toast";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { deleteVoicebot, type Voicebot } from "@/actions/voicebots";
import CreateVoiceBotBtn from "./CreateVoiceBot";

export default function VoicebotsList({
  initialVoicebots,
}: {
  initialVoicebots: Voicebot[];
}) {
  const [voicebots, setVoicebots] = useState(initialVoicebots);

  const handleDelete = async (id: string) => {
    const formData = new FormData();
    formData.append("voicebotId", id);

    const result = await deleteVoicebot(formData);

    if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else {
      setVoicebots((prev) => prev.filter((bot) => bot.id !== id));
      toast({
        title: "Voicebot deleted",
        description: "The voicebot has been successfully deleted.",
      });
    }
  };

  return (
    <>
      {voicebots.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center space-y-4 pt-6 text-center">
            <p>You haven&apos;t created any voicebots yet.</p>
            <CreateVoiceBotBtn />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {voicebots.map((bot) => (
            <VoicebotCard key={bot.id} bot={bot} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  );
}

function VoicebotCard({
  bot,
  onDelete,
}: {
  bot: Voicebot;
  onDelete: (id: string) => Promise<void>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{bot.name}</span>
          <div>
            <Link href={`/dashboard/voicebots/${bot.id}/edit`}>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => onDelete(bot.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{bot.storeUrl}</p>
        <p className="mt-2 text-sm">
          Status: <span className="font-semibold">{bot.status}</span>
        </p>
      </CardContent>
    </Card>
  );
}
