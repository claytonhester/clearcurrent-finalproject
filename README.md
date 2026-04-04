# Clear Current — GTM Intelligence Portal

Static **React + Vite** site for the Clear Current Technologies GTM Intelligence Report: executive summary, engagement triggers, seasonal calendar, user journey maps, opportunity heatmap, product module recommendations, and optional bonus deliverables. Content is driven from `src/data/`; navigation from `src/navConfig.js`.

## Requirements

- **Node.js** 20+ (CI uses Node 22)

## Commands

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm install`          | Install dependencies                |
| `npm run dev`          | Local dev server (Vite)             |
| `npm run build`        | Production build → `dist/`          |
| `npm run preview`      | Serve `dist/` (test SPA deep links) |
| `npm run lint`         | ESLint                              |
| `npm run format`       | Prettier write                      |
| `npm run format:check` | Prettier check (CI)                 |
| `npm run test`         | Vitest (once)                       |
| `npm run test:watch`   | Vitest watch                        |
| `npm run typecheck`    | `tsc --noEmit` (JS + TS tooling)    |

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local` for local use. On **Vercel**, set the same keys under Project → Settings → Environment Variables.

| Variable                | Required | Purpose                                                                                                                                          |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `VITE_SITE_URL`         | No       | Production origin **without trailing slash** (e.g. `https://your-app.vercel.app`). Injected at **build** into `og:url`, `og:image`, `canonical`. |
| `VITE_PLAUSIBLE_DOMAIN` | No       | Plausible [domain](https://plausible.io) (hostname only). Enables [`Analytics.jsx`](src/components/Analytics.jsx). CSP already allows Plausible. |

If `VITE_SITE_URL` is unset, Open Graph image stays **relative** (`/og-image.svg`) and the `og:url` meta tag is omitted.

## Deployment (Vercel)

1. Connect the GitHub repo to [Vercel](https://vercel.com).
2. Framework preset: **Vite**. Build: `npm run build`. Output: **`dist`**.
3. Set **`VITE_SITE_URL`** to your production URL for best link previews.
4. Production branch: `main` (or your default).
5. [vercel.json](vercel.json) includes SPA rewrites and security headers.

## SEO & indexing

- [public/robots.txt](public/robots.txt) defaults to **`Disallow: /`** (no indexing)—appropriate for a semi-private client deliverable. Edit if you want the site public.
- [public/sitemap.xml](public/sitemap.xml) is a **template**: replace `SITE_URL` with your real host when you open indexing.

## Planning & documentation

- **[docs/planning/DELIVERY.md](docs/planning/DELIVERY.md)** — what we built: stack, routes, `src/data/` layout, operations.
- **[docs/planning/REMAINING.md](docs/planning/REMAINING.md)** — launch checklist, stakeholder questions, and content still to finalize in data files.
- [docs/planning/README.md](docs/planning/README.md) — short index of the two docs above.

## Presentation checklist (before go-live)

- [ ] Confirm **production URL** loads over HTTPS.
- [ ] Set **`VITE_SITE_URL`** on Vercel and redeploy so OG tags use absolute URLs.
- [ ] Smoke test in **Chrome** (and Safari if available): all sidebar routes, refresh on a deep link (e.g. `/heatmap`).
- [ ] **Projector / screen:** verify legibility at **1080p** from the back of the room; bump browser zoom if needed.
- [ ] Replace any remaining `status: "placeholder"` content in `src/data/` with **`"final"`** after stakeholder sign-off ([CONTRIBUTING.md](CONTRIBUTING.md)). Full list: **[REMAINING.md](docs/planning/REMAINING.md)**.

## Security note

There is **no backend**. All research copy in `src/data/` ships in the public JS bundle—treat the deployed URL as **public** unless you add access control elsewhere.

## License

See [LICENSE](LICENSE). Private / internal to the engagement unless Clear Current publishes otherwise.
# clearcurrent-finalproject
