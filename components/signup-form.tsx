"use client";

import { useState, type FormEvent } from "react";
import { bottlenecks } from "@/lib/bottlenecks";

export function SignupForm({ defaultBottleneck }: { defaultBottleneck?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          bottleneck: String(data.get("bottleneck") ?? ""),
          source: "digest-form",
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Could not save that email. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You’re on the list. This is a free digest stub — no spam, no WhatsApp.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-12 rounded-full border border-white/15 bg-black/40 px-5 text-sm text-foreground outline-none placeholder:text-muted focus:border-amber"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-12 rounded-full bg-amber px-6 text-sm font-semibold text-black hover:bg-amber/90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Get the weekly map"}
        </button>
      </div>
      <label className="block text-sm text-muted">
        Optional focus
        <select
          name="bottleneck"
          defaultValue={defaultBottleneck ?? ""}
          className="mt-2 h-11 w-full rounded-full border border-white/10 bg-black/40 px-4 text-sm text-foreground"
        >
          <option value="">Whole map</option>
          {bottlenecks.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.number} {item.title}
            </option>
          ))}
        </select>
      </label>
      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-300" : "text-cyan-200"}`}>
          {message}
        </p>
      ) : (
        <p className="text-sm text-muted">
          Email digest only. JSON/webhook stub on the server. No paid upsell.
        </p>
      )}
    </form>
  );
}
