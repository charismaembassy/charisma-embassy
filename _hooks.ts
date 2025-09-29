"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = async (text: string): Promise<void> => {
    if (typeof window === "undefined" || !navigator?.clipboard) {
      toast.error("Clipboard not supported in this environment");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      setIsCopied(false);
      toast.error("Failed to copy");
    }
  };

  return { isCopied, copy };
}
