import type { Metadata } from "next";
import { DISCLAIMER_LONG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Not investment advice. Not a recommendation to buy or sell. Educational only. Do your own research.",
};

export default function DisclaimerPage() {
  const paragraphs = DISCLAIMER_LONG.trim().split("\n\n");

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-16">
      <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
        Legal
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">Disclaimer</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Example tickers and company names are included solely so readers can
          recognize names that often appear in public AI-infrastructure
          discussions. They are not research reports. They omit prices, targets,
          and return claims on purpose.
        </p>
        <p>
          The quiz result is a shareable educational framing of which constraint
          you said felt tightest. It is not a personalized investment profile.
        </p>
      </div>
    </div>
  );
}
