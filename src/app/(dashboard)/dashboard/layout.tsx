// app/dashboard/layout.tsx
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Sidebar } from "../_components/sidebar";
import { Header } from "../_components/header";

export const metadata: Metadata = {
  title: "Dashboard | Zapline AI",
  description: "Dashboard for Zapline AI",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-50 p-6 dark:bg-gray-900">
          {children}
        </div>
      </main>
    </div>
  );
}
