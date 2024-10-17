"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  BarChart2,
  Link as LinkIcon,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 overflow-y-auto border-r border-gray-200 bg-white px-5 py-8 dark:border-gray-800 dark:bg-gray-800 lg:block">
      <div className="flex h-full flex-col">
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/apple-touch-icon.png"
              alt="Zapline AI Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Zapline AI
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
            <NavItem pathname={pathname} href="/dashboard/voicebots" icon={Bot}>
              Voicebots
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/conversations"
              icon={MessageSquare}
            >
              Conversations
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/analytics"
              icon={BarChart2}
            >
              Analytics
            </NavItem>
            <NavItem
              pathname={pathname}
              href="/dashboard/integrations"
              icon={LinkIcon}
            >
              Integrations
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
      </div>
    </aside>
  );
}
