import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { changelogs } from "./_changelogs/logs";

function ChangeTypeBadge({
  type,
}: {
  type: "added" | "changed" | "fixed" | "coming soon";
}) {
  const colors = {
    added: "bg-green-100 text-green-800",
    changed: "bg-blue-100 text-blue-800",
    fixed: "bg-red-100 text-red-800",
    "coming soon": "bg-violet-100 text-violet-800",
  };

  return <Badge className={`${colors[type]} capitalize`}>{type}</Badge>;
}

export default function ChangelogsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Changelogs</h1>
      <Alert className="mb-8">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Stay Updated</AlertTitle>
        <AlertDescription>
          Welcome to our changelogs page. Here you&apos;ll find all the latest
          updates, improvements, and fixes to FeedbackThing. We&apos;re
          constantly working to enhance your experience and appreciate your
          feedback!
        </AlertDescription>
      </Alert>
      <div className="space-y-8">
        {changelogs.map((log) => (
          <Card key={log.version}>
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <CardTitle className="text-2xl">
                  Version {log.version}
                </CardTitle>
                <span className="text-sm text-gray-500">{log.date}</span>
              </div>
              <p className="italic text-gray-600">{log.message}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {log.changes.map((change, index) => (
                  <li key={index} className="flex items-start">
                    <ChangeTypeBadge type={change.type} />
                    <span className="ml-2">{change.description}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
