import type { Metadata } from "next";
import { Suspense } from "react";
import { DigestCta } from "@/components/digest-cta";
import { QuizFlow } from "@/components/quiz-flow";

export const metadata: Metadata = {
  title: "Where’s your AI stack most constrained?",
  description:
    "Five questions. One shareable educational result: compute, memory, optics, power, space, or servers. Not investment advice.",
};

export default function QuizPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-16">
      <Suspense fallback={<p className="text-muted">Loading quiz…</p>}>
        <QuizFlow />
      </Suspense>
      <div className="mt-16">
        <DigestCta />
      </div>
    </div>
  );
}
