# Clear Current — monorepo

This repository contains two apps:

| App                         | Path                           | Stack                | Purpose                                                                                                    |
| --------------------------- | ------------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| **GTM Intelligence Portal** | [`apps/portal`](apps/portal)   | React + Vite         | Client deliverable presentation (executive summary, triggers, calendar, journeys, heatmap, modules, bonus) |
| **Public website**          | [`apps/website`](apps/website) | Next.js (App Router) | Future marketing / public site (scaffold; separate UI from the portal)                                     |

## Requirements

- **Node.js** 20+ (CI uses Node 22)

## Commands (repo root)

Install once from the repository root (npm workspaces):

```bash
npm install
```

| Command                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `npm run dev:portal`     | Vite dev server for the portal              |
| `npm run dev:website`    | Next.js dev server for the public site      |
| `npm run build`          | Production build for **all** workspaces     |
| `npm run lint`           | ESLint in each app                          |
| `npm run format`         | Prettier write                              |
| `npm run format:check`   | Prettier check (CI)                         |
| `npm run test`           | Vitest for the portal                       |
| `npm run typecheck`      | `tsc --noEmit` for the portal               |
| `npm run preview:portal` | Preview the portal `dist/` (SPA deep links) |

Portal-only scripts are also available via `npm run <script> -w @clear-current/portal` after `cd apps/portal` if you prefer.

## Portal — environment variables

Copy [`apps/portal/.env.example`](apps/portal/.env.example) to `apps/portal/.env.local` for local use. On **Vercel**, set the same keys on the **portal** project (root directory `apps/portal`).

| Variable                | Required | Purpose                                                                                                     |
| ----------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `VITE_SITE_URL`         | No       | Production origin **without trailing slash**. Injected at **build** into `og:url`, `og:image`, `canonical`. |
| `VITE_PLAUSIBLE_DOMAIN` | No       | Plausible hostname. CSP in [`apps/portal/vercel.json`](apps/portal/vercel.json) allows Plausible.           |

If `VITE_SITE_URL` is unset, Open Graph image stays relative (`/og-image.svg`) and the `og:url` meta tag is omitted.

## Deployment (Vercel)

Use **two Vercel projects** pointing at the same repo with different **Root Directory** settings:

1. **Portal** — Root Directory: `apps/portal`. Framework: **Vite**. Output: **`dist`**. Build: `npm run build` (default when Vercel runs from that directory). [`apps/portal/vercel.json`](apps/portal/vercel.json) has SPA rewrites and security headers.
2. **Website** — Root Directory: `apps/website`. Framework: **Next.js**. Build: `npm run build` (Next on Vercel is auto-detected).

Set `VITE_SITE_URL` (and optional Plausible) only on the portal project.

## SEO & indexing (portal)

- [`apps/portal/public/robots.txt`](apps/portal/public/robots.txt) defaults to **`Disallow: /`** for a semi-private deliverable.
- [`apps/portal/public/sitemap.xml`](apps/portal/public/sitemap.xml) is a template: replace `SITE_URL` when opening indexing.

## Planning & documentation

- **[docs/planning/DELIVERY.md](docs/planning/DELIVERY.md)** — stack, routes, data layout.
- **[docs/planning/REMAINING.md](docs/planning/REMAINING.md)** — launch checklist and open content.
- [docs/planning/README.md](docs/planning/README.md) — index.

## Security note

There is **no backend** in the portal. Research copy in `apps/portal/src/data/` ships in the public JS bundle—treat the deployed portal URL as **public** unless you add access control elsewhere.

## License

See [LICENSE](LICENSE). Private / internal to the engagement unless Clear Current publishes otherwise.
