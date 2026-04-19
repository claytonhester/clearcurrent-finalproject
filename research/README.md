# Clear Current — research workspace

This folder holds **raw evidence**, **pipelines**, and **generated outputs**. The executive portal (`apps/final-presentation`) is **published separately**: it bundles TypeScript content and does not read these files at runtime.

## Folder roles

| Path                                                                   | Purpose                                                                         |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`Call Transcripts/`](Call Transcripts/)                               | Raw call recordings / transcripts (.txt, .docx, …)                              |
| [`Interview Summary Documents/`](Interview%20Summary%20Documents/)     | Interview summary documents (.docx)                                             |
| [`SECONDARY DATA/`](SECONDARY%20DATA/)                                 | Secondary research inputs                                                       |
| [`outputs/primary/`](outputs/primary/)                                 | Pipeline 1 outputs (agents, quote bank, company cards, `00_primary_corpus.txt`) |
| [`outputs/secondary/`](outputs/secondary/)                             | Pipeline 2 outputs                                                              |
| [`outputs/synthesis/`](outputs/synthesis/)                             | Pipeline 3 synthesis (Decision Brief, D1–D8 markdown)                           |
| [`outputs/02_quote_bank.md`](outputs/02_quote_bank.md)                 | Master quote bank when produced by orchestrator / merge step                    |
| [`staging/`](staging/)                                                 | Human-reviewed drafts before portal merge (see below)                           |
| [`CLEAR_CURRENT_PRODUCT_CONTEXT.md`](CLEAR_CURRENT_PRODUCT_CONTEXT.md) | Product anchor consumed by pipeline agents                                      |

## Quote bank policy (two files)

- **`outputs/02_quote_bank.md`** — Broad / merged **master** quote inventory when your workflow writes it here (leadership-facing editorial spine).
- **`outputs/primary/02_quote_bank.md`** — Output of **Pipeline 1 Step 2** (primary summaries only).

Do not treat both as interchangeable without an explicit merge rule. Prefer one canonical file for **portal curation** into [`apps/final-presentation/src/content/quotes.ts`](../apps/final-presentation/src/content/quotes.ts).

## Interview registry (new interviews)

**[`interviews_registry.yaml`](interviews_registry.yaml)** drives Pipeline 1 discovery. To add an interview:

1. Drop transcript and summary files under `Call Transcripts/` and `Interview Summary Documents/` (consistent naming helps).
2. Append a new `interviews:` row with `transcript_glob`, `summary_glob`, and `portal_source_id` (must match a new entry in [`apps/final-presentation/src/content/sources.ts`](../apps/final-presentation/src/content/sources.ts) before quotes can trace).
3. Run `python pipeline_1_primary.py` from this directory (after `pip install -r requirements.txt`).

Legacy per-file `load("CC Research - …")` wiring has been removed; **YAML is the switchboard.**

## Python dependencies

```bash
pip install -r research/requirements.txt
```

Requires `ANTHROPIC_API_KEY` in the repo-root `.env` for live pipeline runs.

## Validation

```bash
python research/validate_research.py
```

Checks that registry globs resolve to at least one file on disk.

### Portal deliverable evidence check (Node)

Heuristic pass: extract claims from `apps/final-presentation/src/content/deliverables/*.js`, match against all research `.md` / `.txt` / `.docx` (except `research/outputs/verification/`), write JSON under `research/outputs/verification/`.

```bash
npm run verify:deliverables
```

Outputs include `summary.json` (with `humanReviewQueue`), per-deliverable `*-verification.json`, `claims-register.csv`, and `KNOWN_GAPS.md` in `research/outputs/verification/`. Refresh registers only: `npm run verify:deliverables:export`.

See `.cursor/agents/deliverable-evidence-verifier.md` for how to use the reports with a review subagent.

## Portal publish path (human-in-the-loop)

1. Approve candidates under [`staging/`](staging/) (JSON review packet).
2. Run `python research/scripts/publish_portal_draft.py --dry-run` to print suggested TypeScript snippets.
3. Merge into `apps/final-presentation`, run `npm run test -w @clear-current/final-presentation`.

## Pipelines (order)

1. `pipeline_1_primary.py` — primary agents, contact list, primary quote bank, company cards, **`outputs/primary/00_primary_corpus.txt`**
2. `pipeline_2_secondary.py` — secondary agents
3. `pipeline_3_synthesis.py` — D0–D8 synthesis markdown

Orchestration may also exist in [`pipeline.py`](pipeline.py) for stitching combined research outputs.

## Agent prompts (human + CI)

See [`agents/README.md`](agents/README.md) for Extractor / Reconciler prompt templates and staging JSON schema.
