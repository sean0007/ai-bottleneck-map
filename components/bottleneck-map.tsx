import Link from "next/link";
import { getFeaturedBottleneck, getMapBottlenecks } from "@/lib/bottlenecks";

export function BottleneckMap() {
  const featured = getFeaturedBottleneck();
  const rest = getMapBottlenecks().filter((item) => item.slug !== featured.slug);

  return (
    <section aria-label="Interactive bottleneck map" className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/80 p-4 sm:p-8">
        <p className="mb-4 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          Hero node · electricity · then the rest of the map
        </p>
        <Link
          href={`/b/${featured.slug}`}
          className="group relative mb-3 flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl border border-orange-400/30 bg-black/40 p-5 transition hover:-translate-y-0.5 hover:border-orange-300/50 sm:min-h-[180px] sm:p-6"
          style={{ boxShadow: `inset 4px 0 0 ${featured.color}` }}
        >
          <div
            className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full blur-3xl"
            style={{ background: featured.colorSoft }}
          />
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] tracking-[0.22em] text-[#ff6b4a] uppercase">
              Hero bottleneck · {featured.number} {featured.title}
            </span>
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: featured.color, boxShadow: `0 0 16px ${featured.color}` }}
            />
          </div>
          <div className="mt-4 max-w-3xl">
            <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              There is no magical electricity fairy.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              Chip production for data centers can scale exponentially.
              Electrical output outside China is relatively flat. Click the
              hero node — educational, not a buy list.
            </p>
          </div>
          <span className="mt-6 font-mono text-[11px] tracking-[0.18em] text-foreground/80 uppercase group-hover:text-foreground">
            Open the power node →
          </span>
        </Link>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <Link
              key={item.slug}
              href={`/b/${item.slug}`}
              className="group relative flex min-h-[168px] flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-black/35 p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-black/50"
              style={{ boxShadow: `inset 0 0 0 1px ${item.color}22` }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full blur-2xl"
                style={{ background: item.colorSoft }}
              />
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs tracking-[0.2em]"
                  style={{ color: item.color }}
                >
                  {item.number}
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}
                />
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-muted">
                  {item.threadLine}
                </p>
              </div>
              <span className="mt-4 font-mono text-[11px] tracking-[0.18em] text-foreground/70 uppercase group-hover:text-foreground">
                Open node →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
