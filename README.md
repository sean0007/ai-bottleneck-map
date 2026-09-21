# AI Bottleneck Map

Free interactive educational map of AI infrastructure bottlenecks — compute, memory/HBM, optics, power, space/satellite, and servers.

**Not investment advice. Not a recommendation to buy/sell. Educational only. Do your own research.**

Click a bottleneck (or finish the 5-question quiz) to get a shareable card. There is no payment, no WhatsApp group, and no “get rich” claim.

## Pages

- `/` — hook + clickable six-node map
- `/b/[slug]` — one page per bottleneck, with copy-link card
- `/quiz` — “Where’s your AI stack most constrained?”
- `/digest` — free email digest signup (JSON/webhook stub)
- `/legal/disclaimer`

## Local

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

must pass before deploy.

## Deploy on Vercel (Hobby)

This is a standard Next.js App Router app. The free [Vercel Hobby](https://vercel.com/docs/accounts/plans/hobby) plan is enough.

1. Push this repo to GitHub (already: `sean0007/ai-bottleneck-map`).
2. In [Vercel](https://vercel.com/new), click **Add New… → Project** and **Import** the GitHub repository.
3. Framework preset: **Next.js**. Build command: `npm run build`. Output: default.
4. Environment variables (optional):
   - `NEXT_PUBLIC_SITE_URL` — canonical origin, e.g. `https://your-project.vercel.app`
   - `DIGEST_WEBHOOK_URL` — if set, `POST /api/digest` forwards `{ email, bottleneck, source, receivedAt }` as JSON. If unset, the signup is stubbed and still returns `{ ok: true, stub: true }`.
5. Deploy. Hobby is free for this traffic pattern; do not add a paid integration for launch.

## Digest stub

`POST /api/digest` with `{ "email": "you@example.com", "bottleneck": "memory" }`.

No store is bundled. Wire the webhook to the email tool you actually use later.

## Content rules baked in

- Tickers are labeled as names often cited in public AI-infra discussions.
- No invented revenue numbers.
- No 10x / get-rich / guaranteed-return language.
