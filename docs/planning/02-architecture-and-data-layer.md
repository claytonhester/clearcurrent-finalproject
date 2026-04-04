# Architecture and data layer

## Core principle: data / UI separation

- **All narrative content, stats, chart series, axis labels, and structured entities** live in **`/src/data/`** as plain JavaScript modules exporting objects or arrays.
- **Components** import data and render; they do not embed copy that belongs in the research deliverable.

This allows updates to research outputs **without** editing component logic beyond occasional new fields.

## Config-driven navigation

- A single module (spec suggests **`/src/navConfig.js`**) exports an array such as `NAV_ITEMS`.
- Each item includes at least: **`id`**, **`label`**, **`icon`** (Lucide component name or key resolved by the sidebar).
- **Sidebar** maps over `NAV_ITEMS` only — **no hardcoded tab names or order** in `Sidebar.jsx`.
- React Router paths should derive from `id` (e.g. `overview` → `/`, `trigger-map` → `/triggers`) in one place (`App.jsx` or a small route map) so reordering nav is a one-line change in config.

### Example shape (conceptual)

```js
export const NAV_ITEMS = [
  { id: 'overview', label: 'Executive Summary', path: '/', icon: 'LayoutDashboard' },
  { id: 'trigger-map', label: 'Engagement Triggers', path: '/triggers', icon: 'Zap' },
  // ...
];
```

*Use consistent `path` + `id` pairing; the PDF excerpt had a truncated icon string—ensure valid Lucide imports.*

## Directory layout (target)

```
src/
  navConfig.js
  data/
    overview.js
    triggerMap.js
    seasonalCalendar.js
    journeyMaps.js
    opportunityHeatmap.js
    productModules.js
    quotes.js          # may be imported piecemeal by page via tags
  components/
    layout/
      Sidebar.jsx
      TopBar.jsx
      Layout.jsx
    shared/
      StatCard.jsx
      PullQuote.jsx
      SectionHeader.jsx
      ChartCard.jsx
      Badge.jsx
  pages/
    Overview.jsx
    TriggerMap.jsx
    SeasonalCalendar.jsx
    JourneyMaps.jsx
    OpportunityHeatmap.jsx
    ProductModules.jsx
  App.jsx
  main.jsx
```

## Page composition

- Each **page** is a vertical stack of **section subcomponents** where helpful (e.g. `OverviewHero`, `OverviewStats`, `OverviewFindings`) so new sections can be inserted without rewriting the whole page.
- Route-level files stay **thin**: render `Layout` + one page component.

## Status and placeholders

- Entities that support it should include **`status: "placeholder" | "final"`** (per spec).
- Optional: **`import.meta.env.DEV`**-only badge on placeholder cards for internal QA.

## Charts and config

- **Axis labels, tick counts, color mappings for series**, and legend keys should live in **data** (or a small chart config object next to the series), not buried inside chart components as literals.
- Chart components accept props derived from data so when research changes, **data files** update first.

## Extensibility

- **Seventh tab:** Add one object to `NAV_ITEMS`, add one data file if needed, add one page component and route.
- **Tab order:** Reorder the `NAV_ITEMS` array only.
