# Clear Current — Final presentation

`@clear-current/final-presentation` is the confidential **executive deliverable** experience: Decision Brief (D0) plus D1–D8, with an evidence appendix and full quote-to-source traceability in tests.

## Run

```bash
# from repo root (npm workspaces)
npm install
npm run dev:portal                    # or: npm run -w @clear-current/final-presentation dev
npm run -w @clear-current/final-presentation build
npm run -w @clear-current/final-presentation preview
npm run -w @clear-current/final-presentation test
```

Default dev server: **http://localhost:5174** (see `package.json` `dev` script).

## What lives where

```
apps/final-presentation/
├── src/
│   ├── content/              content-as-data registry
│   │   ├── sources.ts        every cited source
│   │   ├── quotes.ts         curated quote library w/ explicit attribution
│   │   ├── deliverables/     D0–D8 structured page data
│   │   ├── searchIndex.js    curated Cmd+K jump index
│   │   └── …
│   ├── components/
│   │   ├── shared/           SourceLink, ClaimTag, evidence UI, …
│   │   └── layout/           Sidebar, TopBar, WalkFooter, Layout
│   ├── context/              FiltersContext (+ URL sync), EvidenceContext
│   ├── pages/                deliverable + appendix pages
│   └── test/                 traceability, attribution, routing, banned-stats
├── vercel.json               SPA rewrites + security headers (Vercel)
└── .env.example              VITE_SITE_URL, VITE_PLAUSIBLE_DOMAIN
```

## Site map (main + appendix)

**Deliverables** (see `src/navConfig.js` for labels):

- `/` — Decision Brief
- `/triggers` — D1
- `/calendar` — D2
- `/journeys` — D3
- `/modules` — D4
- `/market` — D5
- `/competition` — D6
- `/investor` — D7
- `/gtm` — D8

Legacy paths like `/d2-calendar` **redirect** to the short slugs above.

**Appendix**

- `/appendix/quotes`
- `/appendix/interviews`
- `/appendix/companies`
- `/appendix/sources`

**Research Assistant**

- `/chat` — full-page chat with the research corpus
- Floating chat bubble appears on every page (bottom-right)

## Architecture (summary)

- **Content-as-data** — Pages are thin; copy and structure live in `src/content/`.
- **Traceability** — `traceability.test.ts` requires every `quote.sourceId` to exist in `SOURCES`.
- **Attribution** — `attribution.test.ts` enforces policy on quote objects.
- **Filters** — `?industry=&persona=` on supported pages (see `FiltersContext`).
- **Print** — Top bar print; `@media print` in `index.css`.

## Deploy

Vercel: set **Root Directory** to `apps/final-presentation`, framework **Vite**, output **`dist`**. Use [`vercel.json`](vercel.json) in this package. Optional: copy [`.env.example`](.env.example) to `.env.local` and set `VITE_SITE_URL` for production metadata.

## Research Assistant (chat)

A grounded chat assistant lives at `/chat` and as a floating bubble on every page. It uses RAG (BM25 retrieval over a prebuilt index) and Anthropic Claude (Haiku 4.5 default, Sonnet 4.5 escalation for complex synthesis queries).

### How it works

```
User question
  → BM25 retrieval over api/_data/research-index.json (top 6 chunks)
  → Topic focus boosts chunks from the user's selected topic
  → Claude (Haiku 4.5 or Sonnet 4.5 by routing rules)
  → Streaming SSE back to the browser
```

### Required env var

`ANTHROPIC_API_KEY` — set in Vercel **Project Settings → Environment Variables** for both Production and Preview. The `/api/chat` serverless function reads it at runtime; the key is never exposed to the browser.

For **local** chat, set `ANTHROPIC_API_KEY` in `apps/final-presentation/.env` or `.env.local`, or put it in the **monorepo root** `.env` — the Vite dev server copies that key into the process for `POST /api/chat` (see `vite-plugin-local-chat-api.mjs`). If the key is missing, `/api/chat` returns **500**, not “Failed to fetch.”

**Local dev:** `npm run dev` from this app now serves **`POST /api/chat`** via a small Vite plugin (`vite-plugin-local-chat-api.mjs`), so chat works at **http://localhost:5174** without the Vercel CLI.

**Optional:** `npm run dev:vercel` still runs the full Vercel dev environment (useful if you want parity with production). Requires `vercel login`.

### Knowledge sources (indexed)

- 9 deliverables (`src/content/deliverables/*.js` → D0–D8)
- 14 founder interview transcripts (`research/Call Transcripts/Clear Current — *.md`)
- All secondary research (`research/SECONDARY DATA/*.md`)
- Product context (`research/CLEAR_CURRENT_PRODUCT_CONTEXT.md`)

The presentation script PDF is intentionally excluded.

### Rebuilding the index

Run any time research files or deliverables change:

```bash
npm run -w @clear-current/final-presentation build:research-index
```

Output: `apps/final-presentation/api/_data/research-index.json` (~4 MB, 970 chunks at last build). The file is not committed — it's regenerated on demand and bundled with the serverless function on deploy.

### Generating starter questions (optional)

Default starter questions live in `src/components/chat/starters.js`. To regenerate them via Claude based on the current research:

```bash
ANTHROPIC_API_KEY=sk-... npm run -w @clear-current/final-presentation generate:starters
```

### Files

```
api/
├── chat.js                 POST /api/chat (streaming SSE)
├── _data/
│   └── research-index.json prebuilt BM25 index (gitignored)
└── _lib/
    ├── retrieval.js        BM25 search with topic-focus boost
    ├── prompts.js          system prompt + context formatter
    ├── routing.js          Haiku ↔ Sonnet routing rules
    └── topics.js           topic catalog (mirrors src/components/chat/topics.js)

src/
├── components/chat/
│   ├── ChatBubble.jsx      floating launcher
│   ├── ChatPanel.jsx       picker + transcript + input
│   ├── TopicPicker.jsx     11 topic cards
│   ├── MessageList.jsx
│   ├── MessageInput.jsx
│   ├── topics.js           UI topic catalog
│   └── starters.js         starter questions per topic
├── hooks/useChat.js        SSE streaming client
└── pages/ChatPage.jsx      /chat full-page version

scripts/
├── build-research-index.mjs
└── generate-starters.mjs
```
