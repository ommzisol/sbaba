"use client";

import { useState } from "react";

type ShareButtonProps = {
  title: string;
  text: string;
  url?: string;
  className?: string;
};

export function ShareButton({ title, text, url, className }: ShareButtonProps) {
  const [status, setStatus] = useState<"idle" | "shared" | "copied">("idle");

  async function handleShare() {
    const rawUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
    const targetUrl =
      typeof window !== "undefined" && rawUrl.startsWith("/")
        ? `${window.location.origin}${rawUrl}`
        : rawUrl;
    const sharePayload = {
      title,
      text,
      url: targetUrl
    };

    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share(sharePayload);
        setStatus("shared");
      } else if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${title}\n${text}\n${targetUrl}`.trim());
        setStatus("copied");
      }
    } catch {
      return;
    }

    window.setTimeout(() => {
      setStatus("idle");
    }, 1800);
  }

  return (
    <button type="button" onClick={handleShare} className={className}>
      {status === "shared" ? "Shared" : status === "copied" ? "Copied" : "Share"}
    </button>
  );
}
