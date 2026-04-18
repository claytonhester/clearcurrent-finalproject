# Remaining work

Everything below is **content, approvals, and launch** for the **`apps/final-presentation`** briefing portal — not new engineering unless noted. Curated copy and quotes live in **`apps/final-presentation/src/content/`** (TypeScript + JS modules). There is **no database** and **no API** for portal content.

---

## Before the presentation / handoff

- [ ] **Production URL** — Deploy on Vercel (root **`apps/final-presentation`**), confirm HTTPS, share with stakeholders.
- [ ] **`VITE_SITE_URL`** — Set on Vercel if you need absolute Open Graph / canonical URLs; redeploy after changes.
- [ ] **Smoke test** — Walk every sidebar item and appendix link; refresh on deep links (e.g. `/calendar`, `/appendix/quotes`).
- [ ] **Print** — Use **Print** in the top bar; confirm chrome hides and body content paginates sensibly.
- [ ] **Tests** — `npm run test -w @clear-current/final-presentation` passes locally before go-live.

---

## Content & stakeholder decisions

Lock these so `src/content/` can be updated once without rework:

1. **Quotes** — Verbatim-approved text and attribution class in [`quotes.ts`](../../apps/final-presentation/src/content/quotes.ts); each quote’s `sourceId` must exist in [`sources.ts`](../../apps/final-presentation/src/content/sources.ts).
2. **Deliverables** — Narrative edits per page in [`src/content/deliverables/`](../../apps/final-presentation/src/content/deliverables/).
3. **Interview roster / company cards** — Appendix pages and backing data files under `src/content/` and `src/pages/appendix/`.
4. **GitHub / Vercel** — Who administers the project and environment variables.

### Where to edit (quick map)

| Area                          | Location                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Quotes & attribution          | [`quotes.ts`](../../apps/final-presentation/src/content/quotes.ts)                                                       |
| Source registry               | [`sources.ts`](../../apps/final-presentation/src/content/sources.ts)                                                     |
| Decision Brief + D1–D8 bodies | [`deliverables/*.js`](../../apps/final-presentation/src/content/deliverables/)                                           |
| Cmd+K search targets          | [`searchIndex.js`](../../apps/final-presentation/src/content/searchIndex.js)                                             |
| Nav labels & routes           | [`navConfig.js`](../../apps/final-presentation/src/navConfig.js), [`App.jsx`](../../apps/final-presentation/src/App.jsx) |

Research pipeline outputs that feed editorial updates live under **`research/`** — merge into portal content manually after review (see `research/README.md`).

---

## Optional later

- **Analytics** — Set `VITE_PLAUSIBLE_DOMAIN` on Vercel if you use Plausible.
- **Dependabot PRs** — Review periodically; run `npm audit` after upgrades.

---

## Reference

- **[DELIVERY.md](./DELIVERY.md)** — Stack, routes, operations.
- **[apps/final-presentation/README.md](../../apps/final-presentation/README.md)** — Architecture and tests.
