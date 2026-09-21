import { NextResponse } from "next/server";
import { getBottleneckSlugs } from "@/lib/bottlenecks";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 180;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Expected JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Expected an object." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const email = typeof record.email === "string" ? record.email.trim().toLowerCase() : "";
  const bottleneck =
    typeof record.bottleneck === "string" ? record.bottleneck.trim() : "";
  const source = typeof record.source === "string" ? record.source.slice(0, 80) : "unknown";

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  const allowed = getBottleneckSlugs();
  if (bottleneck && !allowed.includes(bottleneck)) {
    return NextResponse.json(
      { ok: false, error: "Unknown bottleneck focus." },
      { status: 400 },
    );
  }

  const payload = {
    email,
    bottleneck: bottleneck || null,
    source,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.DIGEST_WEBHOOK_URL;
  if (webhook) {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!forwarded.ok) {
      return NextResponse.json(
        { ok: false, error: "Webhook did not accept the signup." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    stub: !webhook,
    message: webhook
      ? "Forwarded to DIGEST_WEBHOOK_URL."
      : "Stubbed. Set DIGEST_WEBHOOK_URL to forward this JSON.",
  });
}
