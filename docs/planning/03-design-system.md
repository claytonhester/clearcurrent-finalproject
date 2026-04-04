# Design system

## Brand colors (CSS variables recommended)

| Token | Hex | Usage |
|-------|-----|--------|
| Navy | `#0A1628` | Primary dark, sidebar, headers |
| Yellow | `#F5C518` | Accent, highlights, active nav states |
| White | `#FFFFFF` | Content surfaces |
| Light gray | `#F4F5F7` | Page background, card fills where specified |
| Mid gray | `#6B7280` | Secondary text, borders |
| Dark text | `#1A1A2E` | Body copy |

**Trigger map coding (from spec):**

- Reactive → **navy**
- Proactive → **yellow**
- System-initiated → **gray / mid**

## Typography

- **Font:** Inter (Google Fonts) — professional, readable on projectors.
- **Headings:** bold, slightly letter-spaced (`tracking-tight` or custom per design pass).
- **Body:** normal weight, relaxed leading (`leading-relaxed`).
- **Pull quotes:** italic, larger than body; **thick yellow left border**; attribution in navy below.

## Layout

| Element | Spec |
|---------|------|
| Sidebar | Fixed **260px**, full viewport height, **navy** background |
| Content | Fills remainder; **light gray** page background |
| Content max width | **1100px**, centered in the content column |
| Cards | White bg, `rounded-xl`, `shadow-sm` |

## Sidebar

- **Top:** Clear Current logo — SVG if available; else **text lockup**: bold “CLEAR CURRENT” in white, small yellow dot or icon.
- **Nav:** Icon + label per `NAV_ITEMS`; **active:** yellow left border + yellow text (per spec).
- **Footer:** “Texas A&M CDL Consulting Team” + project year.

## Shared components (behaviors)

| Component | Role |
|-----------|------|
| `StatCard` | Muted small label, large bold metric; **yellow top border** accent on stat cards |
| `PullQuote` | Large italic quote, yellow left border, navy attribution |
| `SectionHeader` | Navy, bold, **short yellow underline** under title |
| `ChartCard` | White card: title top-left, legend top-right, chart area padded |
| `Badge` | Status labels (“High Priority”, “MVP Ready”, placeholder dev badge) |

## Spec vs. user rules note

The PDF specifies **Inter**. Your editor user preferences sometimes favor distinctive display fonts for marketing sites; **for this engagement, follow the PDF** unless stakeholders explicitly approve a change (presentation consistency).

## Desktop-first

Mobile layouts are **out of scope** for v1; avoid spending time on breakpoints unless there is spare capacity before April 19.
