import Link from "next/link";
import { getMapBottlenecks } from "@/lib/bottlenecks";

export function NumberedThread() {
  return (
    <ol className="space-y-0 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-panel/60">
      {getMapBottlenecks().map((item) => (
        <li key={item.slug}>
          <Link
            href={`/b/${item.slug}`}
            className="flex gap-4 px-5 py-5 transition hover:bg-white/5 sm:gap-6 sm:px-7"
          >
            <span
              className="font-mono text-sm tracking-[0.2em]"
              style={{ color: item.color }}
            >
              {item.number}
            </span>
            <span>
              <span className="block font-medium text-foreground">
                {item.title}
                {item.featured ? (
                  <span className="ml-2 font-mono text-[10px] tracking-[0.18em] text-[#ff6b4a] uppercase">
                    Hero
                  </span>
                ) : null}
              </span>
              <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-muted">
                {item.threadLine}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
