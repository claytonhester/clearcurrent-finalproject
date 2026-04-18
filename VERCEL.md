# Vercel deployment (monorepo)

Use **two separate Vercel projects** on this repo (different Root Directory):

| Site              | Root Directory              | Framework | Output |
| ----------------- | --------------------------- | --------- | ------ |
| Final presentation app | **`apps/final-presentation`** | Vite      | `dist` |
| Public marketing site | **`apps/website`**          | Vite      | `dist` |

The legacy path **`apps/portal`** was removed; if deploys fail with “Root Directory apps/portal does not exist”, update the project setting to **`apps/final-presentation`**.

Environment variables for the presentation app live in **`apps/final-presentation/.env.example`** (`VITE_SITE_URL`, optional `VITE_PLAUSIBLE_DOMAIN`).
