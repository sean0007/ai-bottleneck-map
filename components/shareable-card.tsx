"use client";

import { CopyLink, NativeShare } from "@/components/copy-link";
import type { Bottleneck } from "@/lib/bottlenecks";
import { DISCLAIMER_SHORT } from "@/lib/site";

export function ShareableCard({
  bottleneck,
  kicker = "AI Bottleneck Map",
  headline,
  path,
}: {
  bottleneck: Bottleneck;
  kicker?: string;
  headline?: string;
  path: string;
}) {
  const shareText = `${kicker}\n${headline ?? bottleneck.title}: ${bottleneck.oneLiner}\n\n${DISCLAIMER_SHORT}`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <NativeShare title={`${bottleneck.title} · AI Bottleneck Map`} text={shareText} url={path} />
        <CopyLink url={path} />
        <CopyLink url={path} text={shareText} label="Copy summary" />
      </div>
      <article
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d12] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8"
        style={{ boxShadow: `0 30px 80px rgba(0,0,0,0.45), inset 4px 0 0 ${bottleneck.color}` }}
      >
        <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          {kicker}
        </p>
        <p
          className="mt-6 font-mono text-5xl leading-none sm:text-7xl"
          style={{ color: bottleneck.color }}
        >
          {bottleneck.number}
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          {headline ?? bottleneck.title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {bottleneck.oneLiner}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {bottleneck.examples.map((company) => (
            <span
              key={company.ticker}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-foreground/85"
            >
              {company.ticker}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-[11px] leading-relaxed text-muted/80">
          Tickers are educational examples of names often cited in public AI-infra
          discussions. {DISCLAIMER_SHORT}
        </p>
      </article>
    </div>
  );
}
