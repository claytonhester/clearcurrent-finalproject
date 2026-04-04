# Open questions, assumptions, and research

## Questions for you (stakeholder / builder)

Please answer these so planning and content can lock without rework:

1. **Hero date range** — Exact string for the hero bar (e.g. “Engagement: Jan–Apr 2026”)?  
2. **Interview roster** — Final list of names, titles, companies, and **interview dates** for `overview.js`? (Spec mentions multiple interviews; placeholder counts are 4 / 60+ / 3 / 6 — are those approved for the deck and site?)  
3. **Quote approval** — Do you have a single doc with **verbatim approved** quotes for Don Johnson, Andee Chamberlain, and Phil Combs (and any others)? Legal/PR sign-off?  
4. **Clear Current logo** — Is there an official SVG/PNG, or do we ship **text lockup only** for v1?  
5. **GitHub** — Org/repo name and who owns the Vercel team (personal vs org)?  
6. **Seventh tab** — Any chance wireframes or AI flows ship **before April 19**? If yes, rough scope (embed images vs new sections).  
7. **Presentation tech** — Expected resolution (1080p vs 4K) and browser (Chrome vs Safari) for a quick compatibility check?  
8. **EnergyCAP** — Any trademark styling when mentioned in differentiation copy (e.g. “EnergyCAP®”)?  

## Assumptions (confirm or correct)

- **Desktop-only** is acceptable for the audience room and post-talk laptop viewing.  
- **No auth** means the URL is semi-public; stakeholders accept obscurity unless they add Vercel password later (out of spec).  
- **React 19** in the current repo is fine; no need to downgrade.  

## Research notes (filled from spec + common patterns)

- **Recharts + bubbles:** `ScatterChart`, `XAxis`, `YAxis`, `ZAxis`, `Scatter`, `Tooltip`, `Cell` — bubble size from third metric.  
- **Vercel + SPA:** Client-side routes need rewrites so `/triggers` loads `index.html` (Vercel default for Vite often works with fallback; verify in preview).  
- **Tailwind v4:** If using `@tailwindcss/vite`, follow current docs for `vite.config.js` plugin — align Phase 0 tasks with installed major version.  

## Content gaps until you provide data

- Exact **trigger** list and categorization (reactive/proactive/system)  
- **12-month** calendar narrative (which months are “peak” for CC)  
- **Journey** personas beyond placeholder names (“Fake Energy Manager”, “University Facilities”)  
- **Heatmap** opportunity names and numeric scores  
- **Module** long-form fields (differentiation, MVP scope)  

Once the above are answered, update **`04-data-schemas.md`** only if new fields are required, then implement in data files first.
