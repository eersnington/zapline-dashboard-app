// app/dashboard/projects/ProjectList.tsx
import { Suspense } from "react";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ProjectSkeletonList } from "./pl-skeleton";
import { DeleteConfirmationDialog } from "./delete-project-btn";

async function getProjects() {
  const user = await currentUser();
  if (!user) return null;

  return db
    .select()
    .from(projects)
    .where(eq(projects.userId, user.id))
    .orderBy(desc(projects.createdAt));
}

async function ProjectListContent() {
  const projectList = await getProjects();

  if (projectList === null) {
    return (
      <div className="text-center">
        <p className="mt-1 text-sm text-gray-500">
          You need to be logged in to view projects.
        </p>
      </div>
    );
  }

  if (projectList.length === 0) {
    return (
      <div className="text-center">
        <p className="mt-1 text-sm text-gray-500">
          You haven&apos;t created any projects yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectList.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-500">{project.domain}</p>
            <Link className="mr-2" href={`/dashboard/projects/${project.id}`}>
              <Button
                variant="outline"
                className="bg-violet-500 text-white hover:bg-violet-800 hover:text-white"
              >
                View Details
              </Button>
            </Link>
            <DeleteConfirmationDialog
              projectId={project.id}
              projectName={project.name}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ProjectList() {
  return (
    <Suspense fallback={<ProjectSkeletonList />}>
      <ProjectListContent />
    </Suspense>
  );
}
