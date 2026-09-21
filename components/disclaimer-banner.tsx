export function DisclaimerBanner({ text }: { text: string }) {
  return (
    <div className="sticky top-0 z-50 border-b border-amber-400/30 bg-[#1a1408] px-4 py-2.5 text-center">
      <p className="mx-auto max-w-5xl text-[13px] font-medium leading-snug text-amber-100 sm:text-sm">
        {text}{" "}
        <a
          href="/legal/disclaimer"
          className="underline decoration-amber-400/70 underline-offset-2 hover:text-white"
        >
          Full disclaimer
        </a>
      </p>
    </div>
  );
}
