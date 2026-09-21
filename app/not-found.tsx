import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-20">
      <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">
        That node isn’t on the map.
      </h1>
      <p className="mt-4 text-muted">
        The bottleneck may have moved, or the link is incomplete.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-black"
      >
        Back to the map
      </Link>
    </div>
  );
}
