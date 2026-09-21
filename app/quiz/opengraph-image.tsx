import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Where’s your AI stack most constrained?";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "QUIZ · EDUCATIONAL ONLY",
    title: "Where’s your AI stack most constrained?",
    body: "Five questions. One shareable result: Memory, Power, Optics, Compute, Servers, or Space.",
    color: "#3ee0c5",
  });
}
