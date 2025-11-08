import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface XMLViewerProps {
  xml: string;
}

export function XMLViewer({ xml }: XMLViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(xml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/50">
        <h2 className="text-lg font-semibold text-card-foreground">
          XML Configuration
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono bg-code-bg text-code-text p-4 rounded-lg overflow-x-auto">
          {xml}
        </pre>
      </div>
    </Card>
  );
}
