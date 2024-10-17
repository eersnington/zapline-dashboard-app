"use client";
import { useState } from "react";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";
import { createVoicebot } from "@/actions/voicebots";

// Define the schema for form validation
const voicebotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().url("Invalid URL"),
});

export default function CreateVoiceBotBtn() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Validate the form data
      voicebotSchema.parse(data);
      setErrors([]);

      const result = await createVoicebot(formData);

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        setIsDialogOpen(false);
        toast({
          title: "Voicebot created",
          description: "The new voicebot has been successfully created.",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors);
      }
    }
  };

  return (
    <div className="mb-6 flex justify-between">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create New Voicebot
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Voicebot</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreate}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <div className="col-span-3">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Store"
                    required
                  />
                  {errors.find((e) => e.path[0] === "name") && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.find((e) => e.path[0] === "name")?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="url" className="text-right">
                  Url
                </label>
                <div className="col-span-3">
                  <Input
                    id="url"
                    name="url"
                    placeholder="https://your-store.com"
                    required
                  />
                  {errors.find((e) => e.path[0] === "url") && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.find((e) => e.path[0] === "url")?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit">Create Voicebot</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
