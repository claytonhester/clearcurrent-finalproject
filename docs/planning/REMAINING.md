# Remaining work

Everything below is **content, approvals, and launch** — not new engineering. The site is a **static** frontend: copy and numbers live in plain JavaScript modules under [`apps/portal/src/data/`](../../apps/portal/src/data/). There is **no database**, **no API**, and **no separate schema layer** — edit the data files directly when research is final.

---

## Before the presentation

- [ ] **Production URL** — Deploy on Vercel (or host of choice), confirm HTTPS, share with John Reuter and Dan Schreiber.
- [ ] **`VITE_SITE_URL`** — Set on Vercel so Open Graph and canonical URLs are absolute; redeploy.
- [ ] **Smoke test** — All routes in Chrome (and Safari if you can): click every nav item, refresh on a deep link (e.g. `/heatmap`, `/brief`, `/heatmap#priority-map`).
- [ ] **CEO brief** — Review [`ceoBrief.js`](../../apps/portal/src/data/ceoBrief.js): decision asks, methodology, limitations, privacy copy; set `status` to `"final"` when approved.
- [ ] **Search / resume / CSV** — Try **Search** (⌘K / Ctrl+K), **Continue where you left off** on home after visiting another tab, **Export CSV** under chart tables.
- [ ] **Print** — Use **Print / Save PDF** in the top bar; confirm sidebar is hidden and [`SiteFooter`](../../apps/portal/src/components/layout/SiteFooter.jsx) shows the long privacy line on the printed page.
- [ ] **Projector** — Check readability at **1080p** from the back of the room; adjust zoom if needed.
- [ ] **Placeholder → final** — In `apps/portal/src/data/`, change `status: "placeholder"` to `"final"` only where copy is approved (see below).

---

## Stakeholder decisions & content to lock

Answer these so `apps/portal/src/data/` can be updated once without rework:

1. **Hero date range** — Exact string for the overview hero (e.g. “January – April 2026”) → [`overview.js`](../../apps/portal/src/data/overview.js) `meta.dateRange`.
2. **Interview roster** — Final names, titles, companies, dates for [`overview.js`](../../apps/portal/src/data/overview.js) `interviewRoster`. Confirm whether stats (**4** interviews, **60+** contacts, **3** personas, **6** deliverables) stay as-is.
3. **Quotes** — Verbatim approved text for Don Johnson, Andee Chamberlain, Phil Combs (and anyone else) in [`quotes.js`](../../apps/portal/src/data/quotes.js).
4. **Logo** — Official SVG/PNG for the sidebar, or keep the **text lockup** only.
5. **GitHub / Vercel** — Repo location and who administers the Vercel project (for handoff).
6. **Bonus tab** — Will wireframes or AI-flow assets ship before launch? If yes, add images/links in [`bonus.js`](../../apps/portal/src/data/bonus.js) and/or [`BonusDeliverables.jsx`](../../apps/portal/src/pages/BonusDeliverables.jsx).
7. **Presentation tech** — Target resolution (1080p vs 4K) and browser for a final pass.
8. **EnergyCAP** — Preferred spelling / trademark (e.g. “EnergyCAP®”) in module differentiation copy → [`productModules.js`](../../apps/portal/src/data/productModules.js).

### Research content still editable in data files

When the team finalizes research, update the matching files (no new “schema” docs needed):

| Area                                        | File                                                                        |
| ------------------------------------------- | --------------------------------------------------------------------------- |
| Triggers (types, copy)                      | [`triggerMap.js`](../../apps/portal/src/data/triggerMap.js)                 |
| Seasonal calendar months / peaks            | [`seasonalCalendar.js`](../../apps/portal/src/data/seasonalCalendar.js)     |
| Journey personas and stages                 | [`journeyMaps.js`](../../apps/portal/src/data/journeyMaps.js)               |
| Heatmap scores and labels                   | [`opportunityHeatmap.js`](../../apps/portal/src/data/opportunityHeatmap.js) |
| Module narratives                           | [`productModules.js`](../../apps/portal/src/data/productModules.js)         |
| Executive summary, stats, findings          | [`overview.js`](../../apps/portal/src/data/overview.js)                     |
| CEO brief (decisions, methodology, privacy) | [`ceoBrief.js`](../../apps/portal/src/data/ceoBrief.js)                     |
| Search keywords / section index             | [`searchIndex.js`](../../apps/portal/src/data/searchIndex.js)               |

---

## Optional later

- **Indexing** — If the site should appear in search engines: edit [`public/robots.txt`](../../apps/portal/public/robots.txt) and replace `SITE_URL` in [`public/sitemap.xml`](../../apps/portal/public/sitemap.xml); set `Allow: /`.
- **Analytics** — Already wired: set `VITE_PLAUSIBLE_DOMAIN` on Vercel if you use Plausible.
- **Dependabot PRs** — Review and merge periodically; run `npm audit` after upgrades.

---

## Reference

- **[DELIVERY.md](./DELIVERY.md)** — What was built and how the app is organized.
- Original PDF spec (if you still have it): `clear_current_site_spec.md.pdf` — not stored in this repo.
