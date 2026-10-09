import type { Metadata } from "next";
import Link from "next/link";
import { BottleneckMap } from "@/components/bottleneck-map";
import { DigestCta } from "@/components/digest-cta";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { NumberedThread } from "@/components/numbered-thread";
import { RATE_LIMIT } from "@/lib/agent-api";
import { DISCLAIMER_SHORT, PUBLIC_URL, SITE_NAME } from "@/lib/site";

const title = "What bottlenecks the AI boom besides chips? Free interactive map";
const description =
  "Free interactive educational map of AI infrastructure bottlenecks: compute, memory/HBM, optics, power/electricity, space/satellite, and servers. Power is the hero node. Click a node, take the quiz, or call the keyless API.";

export const metadata: Metadata = {
  title: { absolute: `${title} · ${SITE_NAME}` },
  description,
  alternates: { canonical: `${PUBLIC_URL}/` },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${PUBLIC_URL}/`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: `${PUBLIC_URL}/`,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any (web browser)",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description,
};

const faq: FaqItem[] = [
  {
    q: "What is the biggest bottleneck for AI data centers?",
    a: "This map treats power / electricity as the hero constraint. The public line it highlights: chip production for data centers can scale exponentially, while electrical output outside China is relatively flat — there is no magical electricity fairy. Megawatts do not appear because accelerators were allocated. Interconnection queues, substations, transformers, and cooling sit on the same node.",
  },
  {
    q: "What bottlenecks the AI boom besides chips?",
    a: "Six physical nodes: compute (accelerators and allocation), memory/HBM (high-bandwidth memory and packaging), optics (lasers, transceivers, cluster fabric), power (grid, interconnects, heat rejection), space/satellite (sites, fiber, remote coverage), and servers (racks, cooling loops, assembly). When one eases, the constraint often slides to another — that is why the map has six nodes, not one.",
  },
  {
    q: "Why is power / electricity the hero node?",
    a: "Because AI halls draw continuous, dense electricity and dump it as heat. Land with fiber is not enough; the site needs a path to generation, transmission, substations, and transformers on a human timescale. Accelerators can be ordered; interconnection queues cannot. Cooling (liquid loops, heat rejection) is part of the same power story on this map.",
  },
  {
    q: "What is HBM and why does memory bottleneck AI?",
    a: "High-bandwidth memory (HBM) stacked on or beside the compute die keeps accelerators fed with bytes, not just FLOPs. HBM needs through-silicon vias, stacking yields, and packaging that can attach memory to an expensive logic die. Public commentary often treats a \"GPU shortage\" as partly a memory-and-packaging shortage.",
  },
  {
    q: "How does the AI bottleneck quiz work?",
    a: "The quiz at /quiz asks five multiple-choice questions: \"Where's your AI stack most constrained?\" Each option maps to a bottleneck slug (compute, memory, optics, power, space, or servers). Scoring picks the slug chosen most often and shows that node's one-liner and shareable card. Educational self-check, not a portfolio recommendation.",
  },
  {
    q: "Are the company tickers investment recommendations?",
    a: `${DISCLAIMER_SHORT} Company names and tickers are examples of firms often mentioned in public AI-infrastructure discussion. Inclusion is not an endorsement, not a rating, and not a suggestion that any security is undervalued or likely to produce any return. Tickers are labels, not a shopping list.`,
  },
  {
    q: "Is there an API for AI agents?",
    a: `Yes, free and keyless, with CORS open. GET ${PUBLIC_URL}/api/bottlenecks returns all six nodes (add ?slug=power for one). GET ${PUBLIC_URL}/api/quiz returns the questions, or score with ?answers=power,power,memory,optics,power. Every response includes a disclaimer field. Fair use is about ${RATE_LIMIT} requests per minute per IP. OpenAPI: ${PUBLIC_URL}/openapi.json.`,
  },
  {
    q: "Can my AI assistant use this through MCP?",
    a: "Yes. The tools ai_infrastructure_bottlenecks and ai_bottleneck_quiz are on the free remote MCP server at https://free-agent-tools.vercel.app/mcp (streamable HTTP, no auth), together with the maker's other free tools. Add that URL to Claude, Cursor, ChatGPT, or another MCP client.",
  },
  {
    q: "Is this free? Do I need an account?",
    a: "Yes — free, no login, no payment, no WhatsApp groups. Click a bottleneck for a plain-language explainer and shareable card, take the quiz, or call the JSON API. Stay for the optional free digest if you want the map when it updates.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
      <section className="max-w-4xl">
        <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
          If you’re under 45 · free educational map
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          What bottlenecks the AI boom besides chips?
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Elon Musk’s sarcastic public line: chip production for data centers can
          scale exponentially, while electrical output outside China is relatively
          flat. There is no magical electricity fairy. This map treats{" "}
          <Link href="/b/power" className="text-foreground underline decoration-[#ff6b4a]/70 underline-offset-4">
            power / electricity
          </Link>{" "}
          as the hero constraint. Educational only — not a stock pick.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/b/power"
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-black hover:bg-amber/90"
          >
            Start with electricity
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:bg-white/5"
          >
            Where’s your stack constrained?
          </Link>
        </div>
      </section>

      <div className="mt-8">
        <BottleneckMap />
      </div>

      <section className="mt-16 space-y-4">
        <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          The numbered list · same six nodes
        </p>
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          A map you can send to a friend.
        </h2>
        <NumberedThread />
      </section>

      <section className="mt-16 rounded-3xl border border-line bg-panel/50 p-6 sm:p-8">
        <h2 className="font-display text-3xl tracking-tight">How to use this</h2>
        <ol className="mt-5 grid gap-4 text-sm leading-relaxed text-muted sm:grid-cols-3 sm:text-base">
          <li>
            <span className="block font-mono text-amber">01</span>
            Click a bottleneck. Read why it binds in qualitative language — no
            invented revenue figures.
          </li>
          <li>
            <span className="block font-mono text-amber">02</span>
            See example public companies that are often cited in that discussion.
            Tickers are labels, not a shopping list.
          </li>
          <li>
            <span className="block font-mono text-amber">03</span>
            Screenshot or copy the card. Tell a friend. Stay for the free digest
            if you want the map when it updates.
          </li>
        </ol>
      </section>

      <div className="mt-16">
        <DigestCta defaultBottleneck="power" />
      </div>

      <FaqSection items={faq} heading="AI bottleneck questions" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
