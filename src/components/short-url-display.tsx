"use client";

import { notify } from "@/lib/toast";
import { useState } from "react";

interface ShortURLDisplayProps {
  url: string;
}

export function ShortURLDisplay({ url }: ShortURLDisplayProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if (url) {
      try {
        await navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      } catch {
        notify.error("Failed to copy URL to clipboard");
      }
    }
  };

  return (
    <div
      onClick={copyToClipboard}
      className="mt-6 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
    >
      <p className="text-center text-lg font-medium text-gray-900 mb-1">
        {url}
      </p>
      <p className="text-center text-sm text-gray-500">
        {isCopied ? "Copied" : "Click to copy."}
      </p>
    </div>
  );
}
