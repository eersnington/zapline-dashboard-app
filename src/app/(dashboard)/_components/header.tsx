"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import { Bell, Settings, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";
import { Suspense, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { changelogs } from "../dashboard/changelogs/_changelogs/logs";

function UserAvatar() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user.imageUrl} alt={`@${user.username}`} />
      <AvatarFallback>
        {user.firstName?.[0]}
        {user.lastName?.[0]}
      </AvatarFallback>
    </Avatar>
  );
}

function UserMenu() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{user.fullName}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <Link href="/dashboard/settings" passHref legacyBehavior>
        <DropdownMenuItem asChild>
          <a>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </a>
        </DropdownMenuItem>
      </Link>
      <SignOutButton>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </SignOutButton>
    </DropdownMenuContent>
  );
}

function UserAvatarWithSuspense() {
  return (
    <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
      <UserAvatar />
    </Suspense>
  );
}

function UserMenuWithSuspense() {
  return (
    <Suspense fallback={<Skeleton className="h-24 w-56" />}>
      <UserMenu />
    </Suspense>
  );
}

export function ChangelogNotificationButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/changelogs");
  };

  const recentChangelogs = changelogs.slice(0, 3); // Show only the 3 most recent changelogs

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={handleClick}
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Changelog notifications</span>
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 rounded-xl border-2 border-gray-200 shadow-lg dark:border-gray-700"
        side="bottom"
        align="end"
        sideOffset={5}
        alignOffset={-15}
      >
        <div className="space-y-4">
          {recentChangelogs.map((log) => (
            <div
              key={log.version}
              className="space-y-1 rounded-md bg-slate-100 p-2"
            >
              <h4 className="text-sm font-semibold">Version {log.version}</h4>
              <p className="text-sm text-muted-foreground">{log.date}</p>
              <p className="line-clamp-2 text-sm">{log.message}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="/dashboard/changelogs"
            className="text-sm font-medium text-blue-400 text-primary hover:underline"
          >
            View all changelogs
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function Header() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <header className="z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <ChangelogNotificationButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <UserAvatarWithSuspense />
            </Button>
          </DropdownMenuTrigger>
          <UserMenuWithSuspense />
        </DropdownMenu>
      </div>
    </header>
  );
}
