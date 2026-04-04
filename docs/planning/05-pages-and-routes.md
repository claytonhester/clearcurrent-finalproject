# Pages and routes

Base path: **`/`** (Vite + React Router on Vercel: `BrowserRouter` with `basename` if ever needed; default `/`).

Recommended path scheme (align with `navConfig`):

| Route | Page | Data file |
|-------|------|-----------|
| `/` | Executive Summary | `overview.js` |
| `/triggers` | Engagement Trigger Map | `triggerMap.js` |
| `/calendar` | Seasonal Energy Calendar | `seasonalCalendar.js` |
| `/journeys` | User Journey Maps | `journeyMaps.js` |
| `/heatmap` | Opportunity Heatmap | `opportunityHeatmap.js` |
| `/modules` | Product Module Recommendations | `productModules.js` |

---

## Page 1 — Executive Summary (`/`)

**Purpose:** Frame the work: key numbers, what was done, who was interviewed, top findings.

**Sections:**

1. Hero: title + project date range  
2. Stat row: 4 `StatCard`s (interviews, contacts, personas, deliverables)  
3. “What We Found”: 3–4 finding cards (icon, headline, short summary)  
4. Featured `PullQuote` (most impactful — by id from data)  
5. Interview roster: small cards (name, title, company, date)  
6. Scroll CTA: “Explore the deliverables →” (anchor or focus to sidebar/nav)

**Interactivity:** Minimal; optional smooth scroll to nav.

---

## Page 2 — Engagement Trigger Map (`/triggers`)

**Purpose:** What drives customers to engage — reactive, proactive, system-initiated.

**Sections:**

1. Short intro  
2. Filters: **All | Reactive | Proactive | System-Initiated**  
3. Grid of trigger cards (3 columns desktop), **color-coded by type**  
4. Card fields: trigger name, persona, action, CC capability  
5. Pull quote (reactive behavior — Don or Phil)  
6. Chart: **donut or bar** — distribution by type  

**Interactivity:** Filter updates visible cards **and** chart. Implementation: derived subset in React state from `triggerMap.js`.

---

## Page 3 — Seasonal Energy Calendar (`/calendar`)

**Purpose:** Annual cycle of customer energy work and where Clear Current fits.

**Sections:**

1. Intro  
2. **12-month** visualization: horizontal timeline or circular (data-driven layout props)  
3. Per month: label, season tag, customer activity, CC entry point; **peak months** highlighted (yellow)  
4. Pull quote (budget/procurement)  
5. Chart: horizontal timeline, color-coded activity bands  

**Interactivity:** Click month → **detail panel** below with full description and CC role.

---

## Page 4 — User Journey Maps (`/journeys`)

**Purpose:** Persona-level flows for energy management tasks and CC insertion points.

**Sections:**

1. **Persona switcher** (tabs or dropdown) for 4–6 journeys  
2. Per journey: persona header (name, title, company type, pain)  
3. Trigger  
4. Horizontal stages: Trigger → Actions → Decision → Output (or project-specific steps)  
5. **Emotional arc:** line or dot chart (frustration/confidence per step) — spec suggests animated line  
6. Highlight stage where CC intervenes  
7. Pull quote from relevant interviewee  

**Interactivity:** Switch persona; **hover** stage for full description; emotional chart animates on persona change (Recharts `LineChart` or custom).

---

## Page 5 — Opportunity Heatmap (`/heatmap`)

**Purpose:** Prioritize opportunities by Value, Frequency, Strategic Impact.

**Sections:**

1. Intro (axis definitions)  
2. **ScatterChart:** x = Value, y = Frequency, **size = Strategic Impact**  
3. Quadrant labels  
4. Click bubble → **side panel** with details  
5. Pull quote on prioritization  

**Interactivity:** Click + hover tooltips (name + scores). Panel state from selected opportunity id.

---

## Page 6 — Product Modules (`/modules`)

**Purpose:** 3–5 modules with full detail.

**Sections:**

1. **Horizontal module selector** (cards)  
2. Active module: title, badge, problem, persona, business value, frequency, differentiation vs EnergyCAP/spreadsheets, MVP scope  
3. Supporting pull quote  

**Interactivity:** Clicking top card updates detail panel; prefer smooth transition (CSS or light motion).

---

## Future — Page 7 (optional)

Wireframes, AI chat flows, or other bonus deliverables: new `NAV_ITEMS` entry + `pages/Bonus.jsx` + optional `data/bonus.js`.
