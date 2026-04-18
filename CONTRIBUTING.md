# Contributing

## Where to read first

- **[apps/final-presentation/README.md](apps/final-presentation/README.md)** — briefing portal architecture, traceability tests, content locations.
- **[docs/planning/DELIVERY.md](docs/planning/DELIVERY.md)** — what shipped and how it is structured.
- **[docs/planning/REMAINING.md](docs/planning/REMAINING.md)** — open items before presentation and launch.

## Content updates (briefing portal)

1. **Edit content modules, not layout** — Narrative, quotes, and deliverable data live under `apps/final-presentation/src/content/` (`quotes.ts`, `sources.ts`, `deliverables/*.js`, appendix data). Prefer updating those so pages stay thin shells.
2. **Quotes ↔ sources** — Every quote must reference a valid `sourceId` in `sources.ts`. Run `npm run test -w @clear-current/final-presentation` before opening a PR.
3. **Navigation order** — Deliverable tabs are defined in `apps/final-presentation/src/navConfig.js`; routes in `apps/final-presentation/src/App.jsx`.

## Environment & deploy

- **`VITE_SITE_URL`** — Set on the **final presentation** Vercel project for production builds when you need absolute OG/canonical URLs. See [README.md](README.md) and [`apps/final-presentation/.env.example`](apps/final-presentation/.env.example).
- **Plausible** — Optional; set `VITE_PLAUSIBLE_DOMAIN`. [`apps/final-presentation/vercel.json`](apps/final-presentation/vercel.json) CSP allows `plausible.io`.

## Quality gates before a PR

- `npm run format:check`
- `npm run lint`
- `npm run test`
- `npm run build`

CI runs the same checks on pull requests to `main`.

## Dependency updates

[Dependabot](.github/dependabot.yml) opens weekly npm update PRs. Review changelogs; run `npm audit` after merges.
