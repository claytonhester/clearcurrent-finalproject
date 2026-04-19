---
name: Deliverable evidence verifier
description: Reconciles each D0–D8 portal deliverable against collected research (transcripts, interview summaries, synthesis, secondary sources). Use when publishing or after editing apps/final-presentation/src/content/deliverables.
---

## Goal

Ensure statements and quotes on a deliverable page are supported by the collected research. This repo runs a **local heuristic pass** first; you complete **human judgment** on anything flagged.

## Step 1 — Refresh research index + JSON reports (deterministic)

From the repo root:

```bash
npm run verify:deliverables
```

- **Indexed research cache:** `research/outputs/verification/corpus.json` (all `research/**/*.md`, `.txt`, `.docx` except this folder).
- **Per deliverable:** `research/outputs/verification/<brief|d1|…|d8>-verification.json`
- **Roll-up:** `research/outputs/verification/summary.json` (`needsReview` = blockers; `humanReviewQueue` = broader quote/partial/stat triage)
- **Claim register:** `claims-register.csv` / `claims-register.json`
- **Substance gaps:** `research/outputs/verification/KNOWN_GAPS.md`

Rebuild the research index only:

```bash
npm run verify:deliverables:corpus
```

Verify without rebuilding the index (uses existing `corpus.json`):

```bash
npm run verify:deliverables:verify
```

Single deliverable:

```bash
node packages/deliverable-verification/src/cli.mjs verify --only d3
```

## Step 2 — How to read the JSON

Each claim entry includes:

- `status`: `supported` | `partially_supported` | `weak_match` | `unsupported` (heuristic; not legal proof).
- `evidence`: top matching chunks with `file`, `excerpt`, and scores.
- `attributionHint` / `matchedInterviewIds`: from `primarySource` / `speaker` vs `research/interviews_registry.yaml`.
- `inExpectedSourceFile`: whether the best chunk lives on a registry-resolved transcript/summary path for that hint (when matching worked).

Prioritize review where:

- `status` is `unsupported` or `weak_match`
- `kind` is `quote` but `inExpectedSourceFile` is `false`
- Text contains hard stats (`$`, `%`, multi-digit claims) and evidence is only `synthesis` or `secondary`

## Step 3 — Subagent / human deep pass

For each flagged claim:

1. Open the cited `evidence[0].file` under `research/` (or the transcript/summary implied by the interview roster).
2. Confirm, correct, or soften the portal wording in the matching `src/content/deliverables/*.js` field (`jsonPath` in the report mirrors the object path).
3. If the quote is accurate but the heuristic failed, optionally tune thresholds in `packages/deliverable-verification/src/scoring.mjs` — do not “fix” content solely to satisfy the scorer.

## Limits (explicit)

- Heuristics can **false negative** (correct but rare phrasing) and **false positive** (common words matching unrelated chunks). Treat JSON as a **triage queue**, not ground truth.
- Full semantic verification still requires reading the source when stakes are high (legal, fundraising, named attributions).
