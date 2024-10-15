// app/dashboard/projects/page.tsx
import { Suspense } from "react";
import CreateProjectButton from "./_components/create-project-btn";
import ProjectList from "./_components/project-list";

export default async function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <CreateProjectButton />
      </div>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
