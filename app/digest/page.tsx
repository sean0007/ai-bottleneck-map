import type { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Free weekly map update",
  description:
    "Email digest signup for AI Bottleneck Map. Free educational notes only. Not investment advice. No WhatsApp.",
};

export default function DigestPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:py-16">
      <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
        Email only · free · no WhatsApp
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
        Weekly map update
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        When this educational map of AI infrastructure bottlenecks changes, we
        can send a short note. This page posts JSON to a webhook stub. It is not
        a paid product, not a chat group, and not a stock-tip list.
      </p>
      <div className="mt-8 rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <SignupForm />
      </div>
    </div>
  );
}
