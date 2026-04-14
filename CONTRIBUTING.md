# Contributing

## Where to read first

- **[docs/planning/DELIVERY.md](docs/planning/DELIVERY.md)** — overview of the shipped app and data layout.
- **[docs/planning/REMAINING.md](docs/planning/REMAINING.md)** — open items before presentation and content that still needs stakeholder lock-in.

## Content updates

1. **Edit data, not layout** — Narrative, stats, quotes, and chart-friendly series live under `apps/portal/src/data/`. Prefer updating those files so pages stay thin.
2. **Placeholder vs final** — Entities may include `status: "placeholder"` or `"final"`. Flip to `"final"` only after the stakeholder team approves copy.
3. **Quotes** — Keep a single source of truth in `apps/portal/src/data/quotes.js`. Reference quotes by `id` from page data.
4. **Nav order** — Reorder tabs by editing `NAV_ITEMS` in `apps/portal/src/navConfig.js` only.

## Environment & deploy

- **`VITE_SITE_URL`** — Set on the **portal** Vercel project for production builds so Open Graph and canonical URLs are absolute. See [README.md](README.md) and [`apps/portal/.env.example`](apps/portal/.env.example).
- **Plausible** — Optional; set `VITE_PLAUSIBLE_DOMAIN`. [`apps/portal/vercel.json`](apps/portal/vercel.json) CSP allows `plausible.io`.
- **`robots.txt` / `sitemap.xml`** — Under `apps/portal/public/`. Defaults discourage indexing; replace `SITE_URL` in `sitemap.xml` and switch `robots.txt` to `Allow: /` if the site should be public.

## Quality gates before a PR

- `npm run format:check`
- `npm run lint`
- `npm run test`
- `npm run build`

CI runs the same checks on pull requests to `main`.

## Dependency updates

[Dependabot](.github/dependabot.yml) opens weekly npm update PRs. Review changelogs; run `npm audit` after merges.
