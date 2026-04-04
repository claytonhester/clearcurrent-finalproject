# Implementation phases (through April 19, 2026)

Phases build dependency order: tooling → shell → shared UI → data stubs → pages → polish → deploy.

## Phase 0 — Tooling and baseline (0.5–1 day)

- [ ] Install: `tailwindcss`, `@tailwindcss/vite` (or PostCSS path per Tailwind v4 docs), `recharts`, `react-router-dom`, `lucide-react`
- [ ] Configure Tailwind content paths for `./index.html`, `./src/**/*.{js,jsx}`
- [ ] Add Inter via `@import` in CSS or `<link>` in `index.html`
- [ ] Define CSS variables for brand colors in `:root` (see `03-design-system.md`)
- [ ] Smoke test: `npm run dev`, `npm run build`

## Phase 1 — App shell (1 day)

- [ ] Create `navConfig.js` with all six tabs + paths + icon keys
- [ ] `Layout.jsx`: sidebar + main column + `Outlet`
- [ ] `Sidebar.jsx`: map `NAV_ITEMS`, `NavLink` active styles (yellow border + text)
- [ ] `TopBar.jsx` if needed for page title mirror (optional; spec emphasizes sidebar)
- [ ] `App.jsx`: `Routes` / `Route` tree matching table in `05-pages-and-routes.md`
- [ ] Placeholder `pages/*.jsx` returning section title only

## Phase 2 — Shared components (0.5–1 day)

- [ ] `StatCard`, `PullQuote`, `SectionHeader`, `ChartCard`, `Badge`
- [ ] Optional: `PlaceholderBadge` when `import.meta.env.DEV && status === 'placeholder'`

## Phase 3 — Data layer stubs (1–2 days)

- [ ] Create all files under `src/data/` with **realistic** placeholder content (not lorem ipsum)
- [ ] Populate `quotes.js` with **stakeholder-approved** strings for Don Johnson, Andee Chamberlain, Phil Combs
- [ ] `overview.js`: stats, findings, roster entries, featured quote id
- [ ] `triggerMap.js`, `seasonalCalendar.js`, `journeyMaps.js`, `opportunityHeatmap.js`, `productModules.js` per `04-data-schemas.md`

## Phase 4 — Pages vertical implementation (2–4 days)

Suggested order:

1. **Overview** — fastest path to a compelling `/`; validates cards + quotes  
2. **Trigger Map** — filter state + chart + grid  
3. **Seasonal Calendar** — month selection + panel + timeline chart  
4. **Journey Maps** — persona switch + stages + emotional line chart  
5. **Opportunity Heatmap** — scatter + panel + quadrants  
6. **Product Modules** — horizontal nav + detail panel  

## Phase 5 — Polish and presentation pass (1 day)

- [ ] Typographic spacing, card alignment, chart legends readable at 1280px+  
- [ ] Run through live narrative: “companion to slides” — reduce clutter on key pages  
- [ ] Replace remaining `placeholder` with `final` where content is locked  
- [ ] Remove or gate dev-only badges

## Phase 6 — Deploy (0.5 day)

- [ ] GitHub remote, push `main`  
- [ ] Vercel project, env none required for static site  
- [ ] Verify production URL; share with John and Dan  

## Milestone checklist (April 19)

| Item | Done |
|------|------|
| All six routes functional | |
| All charts render from data | |
| Nav 100% config-driven | |
| No lorem ipsum | |
| Vercel live | |
