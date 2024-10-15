import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "../_components/code-blocks";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Globe, Code } from "lucide-react";
import { env } from "@/env";

async function getProject(id: string) {
  const user = await currentUser();
  if (!user) return null;

  const project = await db.query.projects.findFirst({
    where: eq(projects.id, id),
  });

  if (!project || project.userId !== user.id) {
    return null;
  }

  return project;
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);

  if (!project) {
    notFound();
  }

  const htmlCode = `
<script
  async
  src="${env.NEXT_PUBLIC_APP_URL}/api/widget?projectId=${project.id}"
></script>
<feedback-thing
  project-id="${project.id}"
></feedback-thing>
  `.trim();

  const reactCode = `
  "use client";
import React, { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "feedback-thing": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "project-id": string;
      };
    }
  }
}

interface FeedbackWidgetProps {
  projectId: string;
}

const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ projectId }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = \`${env.NEXT_PUBLIC_APP_URL}/api/widget?projectId=${project.id}\`;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [projectId]);

  if (!scriptLoaded) {
    return null; // or a loading indicator
  }

  return <feedback-thing project-id={projectId} />;
};

export default FeedbackWidget;
  `.trim();

  return (
    <div className="space-y-8 px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-violet-800">{project.name}</h1>
        <Button
          variant="outline"
          className="border-violet-300 text-violet-600 hover:bg-violet-50"
        >
          <Globe className="mr-2 h-4 w-4" />
          {project.domain}
        </Button>
      </div>

      <Card className="border-violet-200 bg-gradient-to-br from-violet-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl text-violet-700">
            Integration Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            Follow these steps to integrate FeedbackThing into your project.
            Choose the method that best suits your tech stack.
          </p>
          <Tabs defaultValue="html" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="react">NextJS (TSX)</TabsTrigger>
            </TabsList>
            <TabsContent value="html">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-violet-600">
                    HTML Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={htmlCode} language="html" />
                  {/* <Button
                    onClick={() => navigator.clipboard.writeText(htmlCode)}
                    className="mt-4 bg-violet-100 text-violet-700 hover:bg-violet-200"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Code
                  </Button> */}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="react">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-violet-600">
                    NextJS (TSX) Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={reactCode} language="typescript" />
                  {/* <Button
                    onClick={() => navigator.clipboard.writeText(reactCode)}
                    className="mt-4 bg-violet-100 text-violet-700 hover:bg-violet-200"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Code
                  </Button> */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border-violet-200">
        <CardHeader>
          <CardTitle className="text-xl text-violet-700">Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              Copy the integration code for your preferred method (HTML or
              React).
            </li>
            <li>
              Paste the code into your project where you want the feedback
              widget to appear.
            </li>
            <li>
              Deploy your changes and test the integration on your live site.
            </li>
            <li>
              Visit the FeedbackThing dashboard to start receiving and managing
              feedback!
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
