"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  CreditCard,
  Settings,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchUsageData } from "@/actions/subscriptions";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface UsageData {
  feedbackItems: number;
  feedbackLimit: string;
  projects: number;
  projectLimit: string;
  message: string;
  isPaid: boolean;
}

function NavItem({
  href,
  pathname,
  icon: Icon,
  children,
}: {
  href: string;
  pathname: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  const isActive =
    pathname === href ||
    (href !== "/dashboard" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
      )}
    >
      <Icon
        className={cn(
          "mr-3 h-5 w-5",
          isActive
            ? "text-gray-700 dark:text-white"
            : "text-gray-400 dark:text-gray-400",
        )}
      />
      {children}
    </Link>
  );
}

function UsageDisplay() {
  const [usageData, setUsageData] = useState<UsageData | null>(null);

  useEffect(() => {
    fetchUsageData().then(setUsageData).catch(console.error);
  }, []);

  if (!usageData) return null;

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span>Feedback</span>
          <span>
            {usageData.feedbackItems} / {usageData.feedbackLimit}
          </span>
        </div>
        <Progress
          value={
            (usageData.feedbackItems / parseInt(usageData.feedbackLimit)) * 100
          }
          className="h-2"
        />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span>Projects</span>
          <span>
            {usageData.projects} / {usageData.projectLimit}
          </span>
        </div>
        <Progress
          value={(usageData.projects / parseInt(usageData.projectLimit)) * 100}
          className="h-2"
        />
      </div>
      {!usageData.isPaid ? (
        <Button
          className="w-full bg-violet-600 text-white hover:bg-violet-700"
          asChild
        >
          <Link href="/dashboard/subscription">
            <Star className="mr-2 h-4 w-4" />
            Upgrade Now
          </Link>
        </Button>
      ) : (
        <Button
          className="w-full bg-violet-600 text-white hover:bg-violet-700"
          asChild
        >
          <Link href="/dashboard/subscription">
            <Star className="mr-2 h-4 w-4" />
            You&apos;re a Pro
          </Link>
        </Button>
      )}
    </div>
  );
}

function UsageSkeleton() {
  return (
    <div className="space-y-4">
      <div>
        <div className="mb-1 flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-2 w-full" />
      </div>
      <div>
        <div className="mb-1 flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-2 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 overflow-y-auto border-r border-gray-200 bg-white px-5 py-8 dark:border-gray-800 dark:bg-gray-800 lg:block">
      <div className="flex h-full flex-col">
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/apple-touch-icon.png"
              alt="FeedbackThing Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              FeedbackThing
            </span>
          </div>
          <nav className="mt-10 space-y-1">
            <NavItem
              pathname={pathname}
              href="/dashboard"
              icon={LayoutDashboard}
            >
              Dashboard
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/projects"
              icon={FolderOpen}
            >
              Projects
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/feedback"
              icon={MessageSquare}
            >
              Feedback
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/subscription"
              icon={CreditCard}
            >
              Subscription
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/settings"
              icon={Settings}
            >
              Settings
            </NavItem>
          </nav>
        </div>
        <div className="mt-auto pt-6">
          <Suspense fallback={<UsageSkeleton />}>
            <UsageDisplay />
          </Suspense>
        </div>
      </div>
    </aside>
  );
}
