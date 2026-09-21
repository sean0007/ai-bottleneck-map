import { SignupForm } from "@/components/signup-form";

export function DigestCta({ defaultBottleneck }: { defaultBottleneck?: string }) {
  return (
    <section className="rounded-3xl border border-amber/30 bg-[#16110a] p-6 sm:p-8">
      <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
        Free weekly map update
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
        Get the bottleneck map in your inbox.
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        A short educational note when the map changes. No paid course. No WhatsApp
        blast. Email only.
      </p>
      <div className="mt-6">
        <SignupForm defaultBottleneck={defaultBottleneck} />
      </div>
    </section>
  );
}
