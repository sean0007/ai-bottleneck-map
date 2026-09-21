"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShareableCard } from "@/components/shareable-card";
import { getBottleneck } from "@/lib/bottlenecks";
import { quizQuestions, resultCopy, scoreQuiz } from "@/lib/quiz";

export function QuizFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sharedSlug = searchParams.get("r");
  const shared = sharedSlug ? getBottleneck(sharedSlug) : undefined;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [localResult, setLocalResult] = useState(shared);

  const done = Boolean(localResult);
  const path = localResult ? `/quiz?r=${localResult.slug}` : "/quiz";

  function pick(slug: string) {
    const nextAnswers = [...answers, slug];
    if (step >= quizQuestions.length - 1) {
      const winner = scoreQuiz(nextAnswers);
      setLocalResult(winner);
      router.replace(`/quiz?r=${winner.slug}`, { scroll: false });
      return;
    }
    setAnswers(nextAnswers);
    setStep((value) => value + 1);
  }

  function retake() {
    setAnswers([]);
    setStep(0);
    setLocalResult(undefined);
    router.replace("/quiz", { scroll: false });
  }

  if (done && localResult) {
    const copy = resultCopy(localResult);
    return (
      <div className="space-y-8">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
            Result · educational only
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
            {copy.headline}
          </h1>
        </div>
        <ShareableCard
          bottleneck={localResult}
          kicker="Where’s your AI stack most constrained?"
          headline={localResult.title}
          path={path}
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/b/${localResult.slug}`}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
          >
            Read the {localResult.shortTitle} node
          </Link>
          <button
            type="button"
            onClick={retake}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:bg-white/5"
          >
            Retake quiz
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[step];
  if (!question) return null;

  return (
    <div className="space-y-8">
      <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
        Start with electricity · then the rest of the stack
      </p>
      <div className="flex items-end justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          Question {step + 1} / {quizQuestions.length}
        </p>
        <div className="h-1 max-w-40 flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-amber"
            style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>
      <h1 className="max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
        {question.prompt}
      </h1>
      <ul className="grid gap-3">
        {question.options.map((option) => (
          <li key={option.id}>
            <button
              type="button"
              onClick={() => pick(option.slug)}
              className="w-full rounded-2xl border border-white/10 bg-panel px-5 py-4 text-left text-base leading-snug hover:border-amber/60 hover:bg-white/5"
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
