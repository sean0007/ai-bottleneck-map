import Link from "next/link";
import { bottlenecks } from "@/lib/bottlenecks";

export function BottleneckMap() {
  return (
    <section aria-label="Interactive bottleneck map" className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/80 p-4 sm:p-8">
        <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          Six nodes · click any constraint
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bottlenecks.map((item) => (
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
