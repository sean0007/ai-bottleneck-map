"use client";

import { useState } from "react";

function absoluteUrl(url?: string) {
  if (!url) return window.location.href;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${window.location.origin}${url.startsWith("/") ? url : `/${url}`}`;
}

export function CopyLink({
  url,
  text,
  label = "Copy link",
}: {
  url?: string;
  text?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const href = absoluteUrl(url);
    const value = text ? `${text}\n${href}` : href;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-foreground hover:bg-white/10"
    >
      {copied ? "Copied" : label}
    </button>
  );
}

export function NativeShare({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url?: string;
}) {
  async function share() {
    const href = absoluteUrl(url);
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url: href });
      } catch {
        // User canceled or the share sheet failed; keep the card on screen.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${text}\n${href}`);
    } catch {
      // Ignore clipboard failure; the card itself is still screenshot-friendly.
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="rounded-full bg-amber px-4 py-2 text-sm font-medium text-black hover:bg-amber/90"
    >
      Share card
    </button>
  );
}
