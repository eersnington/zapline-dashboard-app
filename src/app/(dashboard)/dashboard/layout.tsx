// app/dashboard/layout.tsx
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Sidebar } from "../_components/sidebar";
import { Header } from "../_components/header";
import FeedbackThing from "@/components/feedbackthing";

export const metadata: Metadata = {
  title: "Dashboard | FeedbackThing",
  description: "Manage your feedback and projects with FeedbackThing",
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
        <FeedbackThing projectId="d3baab1d-56fc-4742-acb7-aecbbc52ee0e" />
      </main>
    </div>
  );
}
