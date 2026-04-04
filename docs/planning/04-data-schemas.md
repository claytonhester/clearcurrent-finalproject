# Data schemas (`/src/data/`)

All files export plain JS structures. Use **`status: "placeholder"`** or **`"final"`** where entities can be swapped when research lands.

---

## `navConfig.js` (or `src/navConfig.js`)

Exports **`NAV_ITEMS`**: array of `{ id, label, path, icon }` (icon as string key for Lucide resolver or direct component reference—pick one pattern project-wide).

---

## `overview.js`

Executive summary landing content.

| Field | Type | Description |
|-------|------|-------------|
| `meta.title` | string | e.g. “Clear Current Technologies — GTM Intelligence Report” |
| `meta.dateRange` | string | Project date range for hero |
| `stats` | array | Four items: interviews completed, contacts reached, personas identified, deliverables produced |
| `stats[].label` | string | Short label for stat card |
| `stats[].value` | string \| number | Display value |
| `stats[].status` | optional | placeholder/final |
| `findings` | array | 3–4 cards: icon key, headline, ~2 sentence summary |
| `featuredQuoteId` | string | References `quotes.js` id |
| `interviewRoster` | array | `{ name, title, company, date, status? }` |
| `cta` | object | Copy for bottom CTA, e.g. “Explore the deliverables →” |

**Placeholder defaults (spec):** e.g. 4 interviews, 60+ contacts, 3 personas, 6 deliverables — confirm with stakeholders before marking final.

---

## `triggerMap.js`

Engagement triggers with filtering.

| Field | Type | Description |
|-------|------|-------------|
| `intro` | string | 2–3 sentence intro |
| `filters` | string[] | e.g. `['all', 'reactive', 'proactive', 'system']` — align with UI |
| `triggers` | array | Each: `id`, `name`, `type` (reactive \| proactive \| system-initiated), `persona`, `action`, `capability`, `status` |
| `chart` | object | Series for donut/bar: counts or percentages by type; colors from tokens |
| `quoteIds` | string[] | Pull quotes (Don Johnson / Phil Combs for reactive behavior) |

---

## `seasonalCalendar.js`

12-month energy calendar.

| Field | Type | Description |
|-------|------|-------------|
| `intro` | string | Brief intro |
| `months` | array | Length 12, order Jan–Dec (or explicit `monthIndex`): `label`, `seasonTag` (budgeting / procurement / sustainability / capital planning), `customerActivity`, `clearCurrentEntry`, `isPeakOpportunity`, `detail` (longer text for expanded panel), `status` |
| `chart` | object | Horizontal timeline config: bands per month, colors — **data-driven** |
| `quoteIds` | string[] | Budget/procurement timing |

---

## `journeyMaps.js`

Multiple persona journeys.

| Field | Type | Description |
|-------|------|-------------|
| `journeys` | array | 4–6 maps; spec allows 2 full placeholders + 2–3 shells |
| Each journey | object | `id`, `persona: { name, title, companyType, painLevel }`, `trigger`, `stages[]`, `clearCurrentStageId`, `emotionalSeries` (numbers per stage for line chart), `quoteId`, `status` |
| `stages[]` | array | `{ id, title, shortLabel, description, kind? }` — horizontal flow |

---

## `opportunityHeatmap.js`

Scatter / bubble chart data.

| Field | Type | Description |
|-------|------|-------------|
| `intro` | string | Axis explanation |
| `opportunities` | array | `{ id, name, value, frequency, strategicImpact, label?, status }` — all numeric scales defined once in `scales` |
| `scales` | object | Min/max for x, y; bubble radius mapping |
| `quadrants` | object | Labels + optional coordinate thresholds for “High Priority”, “Niche”, “High Volume”, “Noise” |
| `quoteIds` | string[] | Prioritization rationale |

**Placeholder:** 5–6 points with approximate scores (per spec).

---

## `productModules.js`

Module recommendations.

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | 3–5 modules; spec: 3 full placeholders + 2 empty slots |
| Each module | object | `id`, `title`, `status`, `problem`, `persona`, `businessValue`, `frequency`, `differentiation`, `mvpScope`, `badge`, `quoteId` |

**Named placeholders (spec):** Bill Error Detection, Contract Intelligence, Budget Forecasting.

---

## `quotes.js`

Central quote list for attribution and filtering.

| Field | Type | Description |
|-------|------|-------------|
| `quotes` | array | `{ id, text, source, title, tag, page, status }` |

- **`page`:** which route/page this quote is associated with (`overview`, `trigger-map`, etc.).
- **`tag`:** for filtering or thematic grouping.

**Finalized sources cited in spec:** Don Johnson, Andee Chamberlain, Phil Combs (use real fragments from interview summaries — **content owner must supply exact approved text**).

---

## Cross-file references

Prefer **string ids** (`featuredQuoteId`, `quoteIds`) to avoid duplication. Single source of truth for quote text stays in `quotes.js`.
