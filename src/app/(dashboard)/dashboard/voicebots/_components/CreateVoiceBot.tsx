"use client";

import { useState } from "react";
import { z } from "zod";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createVoicebot } from "@/actions/voicebots";

const voicebotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().url("Invalid URL"),
});

export default function CreateVoiceBotBtn() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
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
          title: "Success",
          description: "The new voicebot has been successfully created.",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Create New Voicebot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Voicebot</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new voicebot for your store.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreate}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Store's Voicebot"
                required
              />
              {errors.find((e) => e.path[0] === "name") && (
                <p className="text-sm text-destructive">
                  {errors.find((e) => e.path[0] === "name")?.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="url">Store URL</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://your-store.com"
                required
              />
              {errors.find((e) => e.path[0] === "url") && (
                <p className="text-sm text-destructive">
                  {errors.find((e) => e.path[0] === "url")?.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Voicebot"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
