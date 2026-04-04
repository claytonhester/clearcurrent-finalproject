# Project brief

## Summary

**Clear Current Technologies — GTM Intelligence Portal** is a desktop-first, single-page-application style portal (multi-route) that presents go-to-market research in a navigable, chart-rich format. It supports two modes:

1. **Live companion** — Open during the final CDL Texas MBA consulting presentation (April 20, 2026), navigated alongside slides.
2. **Leave-behind** — A polished, always-on URL the founding team can revisit after the presentation.

## Stakeholders

| Role | Name / entity |
|------|----------------|
| Client / founding team | John Reuter, Dan Schreiber (Clear Current Technologies) |
| Academic engagement | Texas A&M CDL Consulting Team |
| Build | Clayton Hester (solo, Cursor) |

## Timeline

| Milestone | Date |
|-----------|------|
| Planning / scaffold | April 2026 (now) |
| Content freeze / site populated | **April 19, 2026** |
| Presentation | **April 20, 2026** |

## Success criteria

- All six primary sections are implemented with **config-driven navigation** and **no marketing copy hardcoded in presentational components** (content lives under `/src/data/`).
- Visual design matches the agreed **navy / yellow** brand system and reads clearly on a projector during the talk.
- **Realistic placeholder or final** research content (not lorem ipsom); quotes from named interviews where the spec lists finalized sources.
- **Vercel** deployment with auto-deploy from `main`; URL shared with John and Dan before April 19.

## Explicitly out of scope (v1)

- Authentication or password protection  
- Mobile responsiveness (desktop-first; presentation context)  
- CMS or admin panel  
- PDF export  
- Backend or database  

*A seventh nav item for bonus deliverables (e.g. wireframes, AI chat flows) may be added later via `navConfig` only.*

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Research data still changing | `status: "placeholder" \| "final"` on entities; optional dev-only badges; axis/chart labels driven from data files |
| Last-minute section adds | Vertical stack of section subcomponents per page; thin route wrappers |
| Presentation-day tech | Static hosting on Vercel; offline rehearsal with production build |
