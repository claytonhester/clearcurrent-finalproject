# Delivery — Final presentation app

What was built, how it is structured, and where things live. For **launch and content checklist**, see **[REMAINING.md](./REMAINING.md)**.

---

## Purpose

Static React (Vite + TypeScript) app in **`apps/final-presentation`**: nine executive deliverables (Decision Brief + D1–D8), evidence appendix (quotes, roster, company cards, sources), filters synced to the URL, and traceability tests so quotes always resolve to registered sources.

---

## What shipped (engineering)

| Area           | Implementation                                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**  | React 19, Vite 8, React Router 7, Tailwind CSS v4, Recharts, Lucide                                                                                                                     |
| **Navigation** | Sidebar + mobile nav driven by [`navConfig.js`](../../apps/final-presentation/src/navConfig.js); routes in [`App.jsx`](../../apps/final-presentation/src/App.jsx)                       |
| **Content**    | Structured modules under [`src/content/`](../../apps/final-presentation/src/content/) — TypeScript registries (`quotes.ts`, `sources.ts`) and deliverable bundles (`deliverables/*.js`) |
| **Layout**     | [`Layout.jsx`](../../apps/final-presentation/src/components/layout/Layout.jsx): skip link, sidebar, top bar, walk footer, print-friendly main                                           |
| **Search**     | Curated [`searchIndex.js`](../../apps/final-presentation/src/content/searchIndex.js) for ⌘K jump-to-section                                                                             |
| **Evidence**   | `EvidenceContext` + source/quote drawers; every quote has `sourceId` → `SOURCES`                                                                                                        |
| **Tests**      | Vitest: routing smoke, quote ↔ source traceability, attribution policy, banned-stats scan                                                                                               |
| **Hosting**    | [`vercel.json`](../../apps/final-presentation/vercel.json) — SPA rewrite, CSP + security headers                                                                                        |
| **CI**         | [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) — format, lint, test, typecheck, build                                                                                     |

---

## Main routes (abbrev.)

Canonical paths use short slugs (e.g. `/calendar`, `/market`). Legacy `/d*-` URLs redirect.

| Path           | Deliverable                                |
| -------------- | ------------------------------------------ |
| `/`            | Decision Brief                             |
| `/triggers`    | D1 Engagement Trigger Map                  |
| `/calendar`    | D2 Seasonal Energy Calendar                |
| `/journeys`    | D3 Customer Journey Maps                   |
| `/modules`     | D4 Product Module Recommendations          |
| `/market`      | D5 Market Opportunity Heatmap              |
| `/competition` | D6 Competitive Intelligence Brief          |
| `/investor`    | D7 Investor Narrative & Pitch              |
| `/gtm`         | D8 GTM Strategy Playbook                   |
| `/appendix/*`  | Quote bank, interviews, companies, sources |

Full detail: **[apps/final-presentation/README.md](../../apps/final-presentation/README.md)**.

---

## Operations

1. **Repo:** Push to GitHub; connect **Vercel** with root directory **`apps/final-presentation`** — framework Vite, output **`dist`**, `npm run build`.
2. **Env:** Set **`VITE_SITE_URL`** on Vercel when you need absolute Open Graph / canonical URLs. Optional: **`VITE_PLAUSIBLE_DOMAIN`**.
3. **Local:** Copy [`apps/final-presentation/.env.example`](../../apps/final-presentation/.env.example) to `apps/final-presentation/.env.local` (gitignored).

Runbook: **[README.md](../../README.md)** and **[CONTRIBUTING.md](../../CONTRIBUTING.md)**.

---

_Last updated: legacy `apps/portal` (v1) removed; this doc describes **`apps/final-presentation`** only._
