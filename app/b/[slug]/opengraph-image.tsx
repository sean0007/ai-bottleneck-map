import { getBottleneck, getBottleneckSlugs } from "@/lib/bottlenecks";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "AI bottleneck node";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getBottleneckSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bottleneck = getBottleneck(slug);
  if (!bottleneck) {
    return renderOgCard({
      title: "Unknown node",
      body: "That bottleneck is not on the map.",
    });
  }

  return renderOgCard({
    number: bottleneck.number,
    title: bottleneck.title,
    body: bottleneck.oneLiner,
    color: bottleneck.color,
  });
}
