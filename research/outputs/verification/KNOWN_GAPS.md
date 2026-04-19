# Known gaps and verification posture (D0–D8)

This note complements `summary.json`, `humanReviewQueue`, and `claims-register.csv`. It records **substance gaps** the research itself calls out, not just heuristic matcher scores.

## What automated verification does not prove

- **100% factual accuracy** or correct attribution for every line. The Node pipeline is token overlap + chunk retrieval over indexed files.
- **Numeric claims** ($, %, counts) unless a human ties them to a specific passage.
- That **“supported”** means “verbatim in one interview” — synthesis and compiled research files can still count as support for the automated check.

## Primary research gaps (called out in synthesis or brief)

- **Documented dollar recovery:** Decision Brief open question — whether pilot findings have become **documented** utility credits/refunds is not settled in the research; do not imply closed-loop recovery without a citable case.
- **IT / security gate timing:** SOC 2 and hospital IT approval patterns appear, but **Clear Current–specific** enterprise security review timelines are not documented in available research.
- **P-06 (new energy manager):** Industry pattern only in D1 synthesis; **no primary sound bite**. Portal copy now tracks synthesis language; validate with one customer story before centering GTM on it.
- **P-07 (ESG deadline):** Primary is **thin**; precision statement leans on **regulatory secondary** and passing primary mention. Do not overstate as “buyer said ESG sold the platform.”
- **Arcadia / competitor windows:** Time-bounded claims need periodic refresh against funding and customer lists (secondary + optional primary).

## Corpus / file hygiene

- Some files use a **`.docx` extension but contain UTF-8 text** (not Office Open XML). The verification indexer falls back to plain-text read so they are still searchable; prefer renaming to `.md` / `.txt` long term to avoid confusion.
- **Hyatt:** Registry may lack a transcript glob; rely on summary + other verticals for depth.

## How to use the artifacts

1. **`needsReview`** in `summary.json` — heuristic blockers (unsupported / weak_match).
2. **`humanReviewQueue`** — broader second-pass list (partial quotes, attribution file mismatch flags, weak numeric matches).
3. **`claims-register.csv`** — full claim inventory for spreadsheet review or sign-off columns (`human_ok`, `source_span`, `notes`).

Re-run after any change to research or deliverable modules:

`npm run verify:deliverables`

## Last full pass (automated triage)

After aligning portal copy to synthesis/secondary sources and fixing claim-extract/classification noise, `summary.json` **`humanReviewQueue` was empty** and **`needsReview` was empty** — rerun verification after your next edit; this is not a permanent guarantee.
