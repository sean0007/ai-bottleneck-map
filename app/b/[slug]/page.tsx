import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DigestCta } from "@/components/digest-cta";
import { ExampleCompanies } from "@/components/example-companies";
import { ShareableCard } from "@/components/shareable-card";
import {
  getBottleneck,
  getNeighborBottlenecks,
  getBottleneckSlugs,
} from "@/lib/bottlenecks";
import { COMPANY_EDUCATION_LABEL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBottleneckSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bottleneck = getBottleneck(slug);
  if (!bottleneck) return { title: "Bottleneck" };
  return {
    title: `${bottleneck.number} ${bottleneck.title}`,
    description: bottleneck.oneLiner,
  };
}

export default async function BottleneckPage({ params }: Props) {
  const { slug } = await params;
  const bottleneck = getBottleneck(slug);
  if (!bottleneck) notFound();
  const neighbors = getNeighborBottlenecks(slug);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-16">
      <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
        Node {bottleneck.number} / 06 · educational map
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-7xl">
        {bottleneck.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        {bottleneck.threadLine}
      </p>

      <div className="mt-10">
        <ShareableCard bottleneck={bottleneck} path={`/b/${bottleneck.slug}`} />
      </div>

      <section className="mt-14 max-w-3xl space-y-4">
        <h2 className="font-display text-3xl tracking-tight">{bottleneck.whyHeadline}</h2>
        {bottleneck.why.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
            {paragraph}
          </p>
        ))}
      </section>

      <div className="mt-14">
        <ExampleCompanies bottleneck={bottleneck} />
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
          {COMPANY_EDUCATION_LABEL}
        </p>
      </div>

      <nav className="mt-14 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm">
        {neighbors.prev ? (
          <Link href={`/b/${neighbors.prev.slug}`} className="hover:text-amber">
            ← {neighbors.prev.number} {neighbors.prev.title}
          </Link>
        ) : null}
        {neighbors.next ? (
          <Link href={`/b/${neighbors.next.slug}`} className="hover:text-amber">
            {neighbors.next.number} {neighbors.next.title} →
          </Link>
        ) : null}
      </nav>

      <div className="mt-14">
        <DigestCta defaultBottleneck={bottleneck.slug} />
      </div>
    </div>
  );
}
