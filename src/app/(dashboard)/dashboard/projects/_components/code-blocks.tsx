"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";

export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  return (
    <div className="relative">
      <pre className={`language-${language} rounded-md bg-gray-100 p-4`}>
        <code>{code}</code>
      </pre>
      <Button
        variant="outline"
        size="sm"
        className="absolute right-2 top-2 bg-violet-100 text-violet-700 hover:bg-violet-200"
        onClick={copyToClipboard}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}
