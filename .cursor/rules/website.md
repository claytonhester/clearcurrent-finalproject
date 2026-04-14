# Clear Current Marketing Website — Cursor Rules

This file encodes the non-negotiable constraints from the Website Build Spec (v1.0).
Every chat that touches `apps/website/` must respect these rules.

## Stack

- React 18 + Vite (NOT Next.js)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin — NO `tailwind.config.js`
- react-router-dom v6
- Framer Motion for all animation
- lucide-react for icons
- @fontsource packages for fonts (zero CDN)

## Design tokens

All colors and fonts come from CSS custom properties in `src/index.css`.
Never hardcode hex values — use `var(--navy)`, `var(--gold)`, etc.

## Gold rules (non-negotiable)

- Gold (`#F5C518`) appears ONLY on: primary CTA button fill, section label text, stat numbers on dark backgrounds, one border/accent line per section max
- Gold NEVER appears as a background on large areas
- Gold NEVER appears on body text
- Gold NEVER appears more than 3 times in any single page section
- On ALL backgrounds: gold CTAs always have navy text

## Typography

- Headlines: DM Serif Display — NEVER Inter, NEVER system sans
- Body/UI: Geist — NEVER Inter
- No Inter font anywhere in the codebase

## Animation

- Import ALL motion variants from `src/lib/motion.js` — never define inline
- Use `viewportOptions` for scroll-triggered animations
- Respect `prefers-reduced-motion`

## Copy and voice

- Primary CTA: always "Request Demo →" — no variation
- Secondary CTA: "See how it works" or "Learn more" — never "Click here" or "Find out more"
- NEVER use "Get in Touch" — too soft for enterprise
- NEVER use "Schedule a Call"
- NEVER use "AI-powered" in any headline (eyebrow/label exceptions only)
- Banned words: "cutting-edge", "revolutionary", "state-of-the-art", "game-changing", "robust", "seamless"

## Anti-patterns (reject on sight)

- No purple or teal anywhere (competitor colors)
- No carousel for testimonials — always static 3-column grid
- No centered layout for entire pages — mix left-aligned and centered
- No bullet points on solution page body copy — prose only
- No stock photos of people at computers
- No equal-size cards in grids — at least one card must break symmetry
- No default shadcn/ui components — everything custom to design system

## Section 8 TODOs

Flag every placeholder with `{/* TODO: [description] — confirm with John/Dan */}` in JSX.
These must be resolved before launch.
