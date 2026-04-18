# Clear Current — monorepo

This repository contains two apps:

| App                    | Path                                                 | Stack                | Purpose                                                                                  |
| ---------------------- | ---------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| **Final presentation** | [`apps/final-presentation`](apps/final-presentation) | React + Vite + TS    | Confidential executive deliverables (Decision Brief + D1–D8), appendix, traceable quotes |
| **Public website**     | [`apps/website`](apps/website)                       | Next.js (App Router) | Marketing / public site scaffold (separate UI from the briefing portal)                  |

## Requirements

- **Node.js** 20+ (CI uses Node 22)

## Commands (repo root)

Install once from the repository root (npm workspaces):

```bash
npm install
```

| Command                  | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `npm run dev:portal`     | Vite dev server for **`@clear-current/final-presentation`** |
| `npm run dev:website`    | Next.js dev server for the public site                      |
| `npm run build`          | Production build for **all** workspaces                     |
| `npm run lint`           | ESLint in each app                                          |
| `npm run format`         | Prettier write                                              |
| `npm run format:check`   | Prettier check (CI)                                         |
| `npm run test`           | Vitest for **`@clear-current/final-presentation`**          |
| `npm run typecheck`      | `tsc --noEmit` for **`@clear-current/final-presentation`**  |
| `npm run preview:portal` | Preview final-presentation production build (`dist/`)       |

Workspace-only commands: `npm run dev -w @clear-current/final-presentation`, etc.

## Portal — environment variables

Copy [`apps/final-presentation/.env.example`](apps/final-presentation/.env.example) to `apps/final-presentation/.env.local` for local builds. On **Vercel**, set the same keys on the portal project (**Root Directory:** `apps/final-presentation`).

| Variable                | Required | Purpose                                                                                                                        |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `VITE_SITE_URL`         | No       | Production origin **without trailing slash**. Injected at **build** into `og:url`, `og:image`, `canonical` where configured.   |
| `VITE_PLAUSIBLE_DOMAIN` | No       | Plausible hostname. CSP in [`apps/final-presentation/vercel.json`](apps/final-presentation/vercel.json) allows `plausible.io`. |

## Deployment (Vercel)

Use **two Vercel projects** pointing at the same repo with different **Root Directory** settings:

1. **Portal** — Root Directory: **`apps/final-presentation`**. Framework: **Vite**. Output: **`dist`**. [`apps/final-presentation/vercel.json`](apps/final-presentation/vercel.json) has SPA rewrites and security headers.
2. **Website** — Root Directory: `apps/website`. Framework: **Next.js**.

Set `VITE_SITE_URL` (and optional Plausible) on the portal project.

## Planning & documentation

- **[apps/final-presentation/README.md](apps/final-presentation/README.md)** — architecture, content layout, tests.
- **[docs/planning/DELIVERY.md](docs/planning/DELIVERY.md)** — what shipped (final presentation app).
- **[docs/planning/REMAINING.md](docs/planning/REMAINING.md)** — launch / content checklist.
- [docs/planning/README.md](docs/planning/README.md) — index.

## Security note

There is **no backend** in the portal. Curated copy in `apps/final-presentation/src/content/` ships in the public JS bundle—treat the deployed URL as **public** unless you add access control elsewhere.

## License

See [LICENSE](LICENSE). Private / internal to the engagement unless Clear Current publishes otherwise.
