"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Copy } from "lucide-react";

export default function CopyButton({ value }: { value: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    toast.success("Copied!");

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 text-gray-500 hover:text-white hover:bg-gray-700 rounded-md transition"
    >
      <Copy className="w-4 h-4" />
    </button>
  );
}
