import Link from "next/link";

const links = [
  { href: "/", label: "Map" },
  { href: "/quiz", label: "Quiz" },
  { href: "/digest", label: "Digest" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-line/80">
      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span className="font-mono text-[11px] tracking-[0.22em] text-amber uppercase">
            Free
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
            AI Bottleneck Map
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm text-muted sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-1 hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
