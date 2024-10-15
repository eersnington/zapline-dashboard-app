// app/dashboard/projects/_components/create-project-btn.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createProject } from "@/actions/projects";
import { useToast } from "@/components/ui/use-toast";

export default function CreateProjectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(formData: FormData) {
    setIsLoading(true);
    const result = await createProject(formData);
    setIsLoading(false);

    if (result.error) {
      toast({
        title: "Error",
        description:
          typeof result.error === "string"
            ? result.error
            : "Failed to create project. Please check your inputs.",
        variant: "destructive",
      });
    } else if (result.success) {
      setIsOpen(false);
      toast({
        title: "Success",
        description: "Project created successfully!",
      });
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Create New Project</SheetTitle>
          <SheetDescription>
            Add a new project to your dashboard. Fill out the details below.
          </SheetDescription>
        </SheetHeader>
        <form action={onSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="My Awesome Project"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Project Domain</Label>
            <Input
              id="domain"
              name="domain"
              placeholder="example.com"
              required
            />
          </div>
          <SheetFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Project"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
