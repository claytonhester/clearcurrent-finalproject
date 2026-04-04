# Tech stack and repository

## Specified stack

| Layer | Choice |
|-------|--------|
| Framework | React with **Vite** |
| Styling | **Tailwind CSS** |
| Charts | **Recharts** (preferred) or Chart.js |
| Routing | **React Router v6** — one route per main tab |
| Icons | **Lucide React** (spec references icons such as `LayoutDashboard`, `Zap`, `Calendar`) |
| Deployment | **Vercel** — GitHub repo connected, deploy on push to `main` |

## Bootstrap commands (from spec)

```bash
npm create vite@latest clear-current-portal -- --template react
npm install tailwindcss recharts react-router-dom lucide-react
```

Follow Tailwind’s Vite install steps (init config, `@tailwind` directives in CSS, content paths).

## Current repo state (April 2026)

The workspace **`clear-current-portal`** already exists with:

- Vite + React (**React 19** in `package.json`)
- **No** Tailwind, Recharts, React Router, or Lucide installed yet
- Default `src/App.jsx`, `main.jsx`, `index.css`

**Action:** Add the dependencies above and Tailwind configuration before building layout and pages. React 19 is compatible with current React Router and Recharts; verify peer dependency warnings during `npm install`.

## Recharts notes (heatmap page)

The **Opportunity Heatmap** calls for a scatter plot: **Value (x)** vs **Frequency (y)**, **bubble size = Strategic Impact**. Recharts supports this with:

- `ScatterChart` + `Scatter` + `ZAxis` for bubble radius, or  
- Custom `shape` on `Scatter` for consistent bubble rendering  

Quadrant labels (“High Priority”, “Niche”, “High Volume”, “Noise”) are typically implemented with absolute-positioned labels over the chart or a background layer—not hardcoded inside a generic chart wrapper without props from data/config.

## Deployment checklist

1. Create GitHub repository; push this project.  
2. Import project in Vercel; framework preset: Vite.  
3. Production branch: `main`; enable automatic deployments.  
4. Confirm build command `npm run build` and output directory `dist`.  
5. Share production URL with stakeholders before April 19, 2026.

## Optional tooling (not in spec)

- **ESLint** — already present; keep rules aligned with React hooks.  
- **TypeScript** — spec says plain JS for data; app can stay `.jsx` or migrate later; not required for v1.  
- **Prettier** — team preference; not mandated by spec.
