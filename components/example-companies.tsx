import type { Bottleneck } from "@/lib/bottlenecks";
import { COMPANY_EDUCATION_LABEL } from "@/lib/site";

export function ExampleCompanies({ bottleneck }: { bottleneck: Bottleneck }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-display text-3xl tracking-tight">Example public names</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {COMPANY_EDUCATION_LABEL}
        </p>
      </div>
      <ul className="grid gap-3 md:grid-cols-3">
        {bottleneck.examples.map((company) => (
          <li
            key={company.ticker}
            className="rounded-2xl border border-line bg-panel p-4"
          >
            <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              {company.venue}
            </p>
            <p className="mt-2 font-mono text-lg text-amber">{company.ticker}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{company.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{company.whyCited}</p>
          </li>
        ))}
      </ul>
      {bottleneck.privateOrAdjacent ? (
        <p className="text-sm leading-relaxed text-muted">{bottleneck.privateOrAdjacent}</p>
      ) : null}
    </section>
  );
}
