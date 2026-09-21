import Link from "next/link";
import { BottleneckMap } from "@/components/bottleneck-map";
import { DigestCta } from "@/components/digest-cta";
import { NumberedThread } from "@/components/numbered-thread";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
      <section className="max-w-4xl">
        <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
          If you’re under 45 · free educational map
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          The AI boom isn’t just chips — it’s the bottlenecks.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Elon Musk’s public version of the bind: data-center chip production can
          ramp, while electrical output outside China stays relatively flat.
          This map treats{" "}
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
    </div>
  );
}
