# Delivery — Clear Current GTM Intelligence Portal

What was built, how it is structured, and where things live. For **what is left before go-live**, see **[REMAINING.md](./REMAINING.md)**.

---

## Purpose

Static React (Vite) portal for **Clear Current Technologies** — GTM Intelligence Report used as:

1. **Live companion** during the CDL Texas MBA final presentation (April 20, 2026).
2. **Leave-behind** hosted URL for John Reuter and Dan Schreiber.

**Stakeholders:** Clear Current (John, Dan); Texas A&M CDL Consulting Team; build: Clayton Hester.

---

## What shipped (engineering)

| Area               | Implementation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**      | React 19, Vite 8, React Router 7, Tailwind CSS v4 (`@tailwindcss/vite`), Recharts, Lucide                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Navigation**     | Eight sections from [`src/navConfig.js`](../../apps/portal/src/navConfig.js) (Executive Summary, **CEO brief**, five research areas, bonus)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Content**        | All narrative and chart inputs in [`src/data/`](../../apps/portal/src/data/) — plain JS objects/arrays, no database                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Layout**         | 260px navy sidebar (`lg`), horizontal nav strip on small viewports; [`Layout`](../../apps/portal/src/components/layout/Layout.jsx) with skip link, [`HashScroll`](../../apps/portal/src/components/HashScroll.jsx), print-only `<h1>`, [`SiteFooter`](../../apps/portal/src/components/layout/SiteFooter.jsx) (build date via `__APP_BUILD_TIME__` in [`vite.config.js`](../../apps/portal/vite.config.js)), [`SiteSearch`](../../apps/portal/src/components/SiteSearch.jsx) (⌘K) + Print in [`TopBar`](../../apps/portal/src/components/layout/TopBar.jsx) |
| **Charts**         | Trigger donut, seasonal bars, journey line, heatmap scatter + ZAxis; HTML [`ChartDataTable`](../../apps/portal/src/components/shared/ChartDataTable.jsx) under charts for accessibility; optional **Export CSV** via [`downloadCsv`](../../apps/portal/src/utils/csv.js)                                                                                                                                                                                                                                                                                    |
| **CEO / async UX** | [`/brief`](../../apps/portal/src/pages/CeoBrief.jsx) + [`ceoBrief.js`](../../apps/portal/src/data/ceoBrief.js); section **anchors** + [`CopySectionLink`](../../apps/portal/src/components/shared/CopySectionLink.jsx) on CEO brief; **resume** banner on home reads `localStorage` last non-home route (see [`Layout`](../../apps/portal/src/components/layout/Layout.jsx))                                                                                                                                                                                |
| **Find in portal** | Curated [`searchIndex.js`](../../apps/portal/src/data/searchIndex.js) for client-side search (no backend)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Print / PDF**    | `@media print` in [`index.css`](../../apps/portal/src/index.css); sidebar/top bar hidden; browser **Print → Save as PDF**                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Performance**    | Lazy-loaded route chunks; `chunkSizeWarningLimit` in Vite config                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Hosting**        | [`vercel.json`](../../apps/portal/vercel.json) — SPA rewrite, CSP + security headers; Plausible allowed in CSP                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **SEO**            | [`public/robots.txt`](../../apps/portal/public/robots.txt) (default noindex), [`public/sitemap.xml`](../../apps/portal/public/sitemap.xml) template                                                                                                                                                                                                                                                                                                                                                                                                         |
| **OG / canonical** | Build-time injection via [`vite.config.js`](../../apps/portal/vite.config.js) when `VITE_SITE_URL` is set; see [`.env.example`](../../apps/portal/.env.example)                                                                                                                                                                                                                                                                                                                                                                                             |
| **Analytics**      | Optional Plausible via [`Analytics.jsx`](../../apps/portal/src/components/Analytics.jsx) + `VITE_PLAUSIBLE_DOMAIN`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **CI**             | [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) — format, lint, test, build; Dependabot for npm                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **License**        | [`LICENSE`](../../LICENSE) (proprietary / engagement)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

---

## Routes and data

| Route       | Page (lazy)        | Data module                |
| ----------- | ------------------ | -------------------------- |
| `/`         | Overview           | `overview.js`, `quotes.js` |
| `/brief`    | CeoBrief           | `ceoBrief.js`              |
| `/triggers` | TriggerMap         | `triggerMap.js`            |
| `/calendar` | SeasonalCalendar   | `seasonalCalendar.js`      |
| `/journeys` | JourneyMaps        | `journeyMaps.js`           |
| `/heatmap`  | OpportunityHeatmap | `opportunityHeatmap.js`    |
| `/modules`  | ProductModules     | `productModules.js`        |
| `/bonus`    | BonusDeliverables  | `bonus.js`                 |

Shared quotes: [`src/data/quotes.js`](../../apps/portal/src/data/quotes.js).

---

## Design (summary)

- **Colors:** Navy `#0A1628`, yellow `#F5C518`, light gray `#F4F5F7`, mid gray `#6B7280`, body `#1A1A2E`.
- **Type:** Inter (Google Fonts).
- **Components:** Stat cards, pull quotes, section headers, chart cards, badges — [`src/components/shared/`](../../apps/portal/src/components/shared/).

---

## Operations

1. **Repo:** Push to GitHub; connect **Vercel** for the portal with root directory **`apps/portal`** — framework Vite, output `dist`, `npm run build`.
2. **Env (Vercel):** Set **`VITE_SITE_URL`** to the production origin (no trailing slash) for absolute Open Graph and canonical URLs. Optional: **`VITE_PLAUSIBLE_DOMAIN`** for analytics.
3. **Local:** Copy `apps/portal/.env.example` to `apps/portal/.env.local` (gitignored).

Runbook: **[README.md](../../README.md)** and **[CONTRIBUTING.md](../../CONTRIBUTING.md)**.

---

_Last updated: planning docs consolidated; see [REMAINING.md](./REMAINING.md) for open items._
