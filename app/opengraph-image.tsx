import { ogSize, renderOgCard } from "@/lib/og";
import { SITE_TAGLINE } from "@/lib/site";

export const alt = SITE_TAGLINE;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    title: SITE_TAGLINE,
    body: "Free interactive map of compute, memory, optics, power, space, and servers. Educational only.",
  });
}
