import Link from "next/link";
import { DISCLAIMER_SHORT } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted">
        <p className="max-w-3xl leading-relaxed">{DISCLAIMER_SHORT}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/" className="hover:text-foreground">
            Map
          </Link>
          <Link href="/quiz" className="hover:text-foreground">
            Quiz
          </Link>
          <Link href="/digest" className="hover:text-foreground">
            Weekly digest
          </Link>
          <Link href="/legal/disclaimer" className="hover:text-foreground">
            Disclaimer
          </Link>
        </div>
        <p className="font-mono text-xs tracking-wide text-muted/80">
          No payments. No WhatsApp groups. Educational map only.
        </p>
      </div>
    </footer>
  );
}
