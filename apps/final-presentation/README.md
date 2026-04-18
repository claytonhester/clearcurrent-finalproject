# Clear Current — Final presentation

`@clear-current/final-presentation` is the confidential **executive deliverable** experience: Decision Brief (D0) plus D1–D8, with an evidence appendix and full quote-to-source traceability in tests.

## Run

```bash
# from repo root (npm workspaces)
npm install
npm run dev:portal                    # or: npm run -w @clear-current/final-presentation dev
npm run -w @clear-current/final-presentation build
npm run -w @clear-current/final-presentation preview
npm run -w @clear-current/final-presentation test
```

Default dev server: **http://localhost:5174** (see `package.json` `dev` script).

## What lives where

```
apps/final-presentation/
├── src/
│   ├── content/              content-as-data registry
│   │   ├── sources.ts        every cited source
│   │   ├── quotes.ts         curated quote library w/ explicit attribution
│   │   ├── deliverables/     D0–D8 structured page data
│   │   ├── searchIndex.js    curated Cmd+K jump index
│   │   └── …
│   ├── components/
│   │   ├── shared/           SourceLink, ClaimTag, evidence UI, …
│   │   └── layout/           Sidebar, TopBar, WalkFooter, Layout
│   ├── context/              FiltersContext (+ URL sync), EvidenceContext
│   ├── pages/                deliverable + appendix pages
│   └── test/                 traceability, attribution, routing, banned-stats
├── vercel.json               SPA rewrites + security headers (Vercel)
└── .env.example              VITE_SITE_URL, VITE_PLAUSIBLE_DOMAIN
```

## Site map (main + appendix)

**Deliverables** (see `src/navConfig.js` for labels):

- `/` — Decision Brief
- `/triggers` — D1
- `/calendar` — D2
- `/journeys` — D3
- `/modules` — D4
- `/market` — D5
- `/competition` — D6
- `/investor` — D7
- `/gtm` — D8

Legacy paths like `/d2-calendar` **redirect** to the short slugs above.

**Appendix**

- `/appendix/quotes`
- `/appendix/interviews`
- `/appendix/companies`
- `/appendix/sources`

## Architecture (summary)

- **Content-as-data** — Pages are thin; copy and structure live in `src/content/`.
- **Traceability** — `traceability.test.ts` requires every `quote.sourceId` to exist in `SOURCES`.
- **Attribution** — `attribution.test.ts` enforces policy on quote objects.
- **Filters** — `?industry=&persona=` on supported pages (see `FiltersContext`).
- **Print** — Top bar print; `@media print` in `index.css`.

## Deploy

Vercel: set **Root Directory** to `apps/final-presentation`, framework **Vite**, output **`dist`**. Use [`vercel.json`](vercel.json) in this package. Optional: copy [`.env.example`](.env.example) to `.env.local` and set `VITE_SITE_URL` for production metadata.
