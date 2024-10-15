// app/dashboard/settings/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  fetchUserSettings,
  updateUserSettings,
  type UserSettings,
} from "@/actions/settings";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";

export default function SettingsPage() {
  const { isLoaded, isSignedIn } = useUser();
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchUserSettings()
        .then((data) => {
          if (data) {
            setSettings(data);
          } else {
            console.error("User settings not found");
            toast({
              title: "Error",
              description:
                "Failed to load user settings. Please try again later.",
              variant: "destructive",
            });
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [isLoaded, isSignedIn]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!settings) return;

    setSaving(true);
    try {
      await updateUserSettings({
        firstName: settings.firstName,
        lastName: settings.lastName,
      });
      toast({
        title: "Settings updated",
        description: "Your settings have been successfully updated.",
      });
    } catch (error) {
      console.error("Failed to update settings:", error);
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (!isLoaded ?? loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-8 w-3/4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="h-10 w-1/4" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isSignedIn) {
    return <div>Please sign in to view your settings.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Input
                id="firstName"
                value={settings?.firstName ?? ""}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev!,
                    firstName: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                value={settings?.lastName ?? ""}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev!,
                    lastName: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={settings?.email ?? ""}
                disabled
                className="bg-gray-100"
              />
              <p className="mt-1 text-sm text-gray-500">
                Email cannot be changed here. Contact support if you need to
                update your email.
              </p>
            </div>
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
