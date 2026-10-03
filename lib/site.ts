export const SITE_NAME = "AI Bottleneck Map";

export const SITE_TAGLINE =
  "The AI boom isn’t just chips — it’s the bottlenecks.";

export const DISCLAIMER_SHORT =
  "Not investment advice. Not a recommendation to buy/sell. Educational only. Do your own research.";

export const DISCLAIMER_LONG = `${DISCLAIMER_SHORT}

This site is a free, interactive educational map of physical and industrial constraints that often appear in public discussions of AI infrastructure. Company names and tickers are included only as examples of firms that are frequently mentioned in that public conversation. Inclusion is not an endorsement, not a rating, and not a suggestion that any security is undervalued, overvalued, or likely to produce any return.

Nothing here is a financial, legal, or tax recommendation. Nothing here is an offer to buy or sell any security. Past public narratives about “AI infrastructure” have been wrong, incomplete, or quickly outdated. Constraints ease, shift, or get overstated. Do your own research from primary filings, reputable reporting, and qualified advisors.

We do not guarantee outcomes. We do not claim you will get rich. We do not claim any bottleneck “must” produce investment returns.`;

export const COMPANY_EDUCATION_LABEL =
  "Example public names often cited in AI infrastructure discussions — not a buy list, not a rating.";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

/** Other free tools by the same maker, shown in the footer. */
export const SIBLING_TOOLS = [
  { href: "https://fund-fix-flee.vercel.app", label: "Founder Scorecard" },
  { href: "https://japan-trip-brain.vercel.app", label: "Japan Trip Brain" },
  { href: "https://hotel-ota-calculator.vercel.app", label: "Hotel OTA Calculator" },
  { href: "https://saas-bill-cutter.vercel.app", label: "SaaS Bill Cutter" },
  { href: "https://ads-risk-check.vercel.app", label: "Ads Risk Check" },
  { href: "https://faceless-yt-risk-check.vercel.app", label: "Faceless YT Reality Check" },
  { href: "https://appgate-pack.vercel.app/check", label: "AppGate Pack" },
  { href: "https://viral-attention-map.vercel.app", label: "Viral Attention Map" },
] as const;
