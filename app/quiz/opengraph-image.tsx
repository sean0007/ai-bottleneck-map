import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Where’s your AI stack most constrained?";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "QUIZ · EDUCATIONAL ONLY",
    title: "Where’s your AI stack most constrained?",
    body: "Start with electricity. Chip production can scale exponentially; the grid cannot. Then memory, optics, compute, servers, space.",
    color: "#ff6b4a",
  });
}
