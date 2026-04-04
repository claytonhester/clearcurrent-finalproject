# Clear Current — GTM Intelligence Portal (planning docs)

This folder breaks the **Clear Current GTM Intelligence Portal** Cursor build specification (PDF: `clear_current_site_spec.md.pdf`) into actionable planning documents for implementation and stakeholder alignment.

## Documents

| Doc | Purpose |
|-----|---------|
| [00-project-brief.md](./00-project-brief.md) | Goals, audience, timeline, success criteria, out of scope |
| [01-tech-stack-and-repo.md](./01-tech-stack-and-repo.md) | Dependencies, tooling, deployment, repo status |
| [02-architecture-and-data-layer.md](./02-architecture-and-data-layer.md) | Data/UI separation, `navConfig`, folder structure, flexibility rules |
| [03-design-system.md](./03-design-system.md) | Brand tokens, layout, shared components |
| [04-data-schemas.md](./04-data-schemas.md) | Shapes for each `/src/data/*.js` file |
| [05-pages-and-routes.md](./05-pages-and-routes.md) | Route map, page sections, interactivity, charts |
| [06-implementation-phases.md](./06-implementation-phases.md) | Phased build order through April 19, 2026 |
| [07-open-questions.md](./07-open-questions.md) | Decisions needed, assumptions, research notes |

## Quick facts (from spec)

- **Purpose:** Live companion during the CDL Texas MBA consulting final presentation (April 20, 2026) and a hosted leave-behind for the founding team.
- **Stakeholders:** John Reuter, Dan Schreiber (Clear Current); builder: Clayton Hester.
- **Deadline:** Site populated by **April 19, 2026**; hosting on **Vercel**.
- **Stack:** React (Vite), Tailwind CSS, Recharts (or Chart.js), React Router v6, Lucide icons.

Start with **00-project-brief** and **06-implementation-phases** for schedule; use **04-data-schemas** and **05-pages-and-routes** when scaffolding and filling content.
