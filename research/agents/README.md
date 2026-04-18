# Research agents (prompts + staging workflow)

These are **design-time / operator** prompts—not runtime services. Use them inside Cursor, Claude Code, or any LLM harness pointed at this repo.

## 1. Ingest validator

**Goal:** New files dropped under `research/` match registry expectations.

**Prompt skeleton:**

```
You are validating new primary research files against research/interviews_registry.yaml.
List any interview id in the registry whose transcript_glob or summary_glob matches zero files.
Flag duplicate filenames or conflicting portal_source_id values.
Output: markdown checklist + exit-worthy errors vs warnings.
```

Run programmatic validation with: `python research/validate_research.py`

## 2. Extractor

**Inputs:** One transcript path + optional summary path + `CLEAR_CURRENT_PRODUCT_CONTEXT.md`.

**Output:** JSON matching `research/staging/candidates.json` schema (see staging README): candidate quotes with `sourceId` (must exist in portal or appear in `sources_to_add`), `quoteBankSection` one of the portal [`QuoteBankSectionKey`](../../apps/final-presentation/src/content/types.ts), `attribution`: full | paraphrase | do-not-use.

**Prompt skeleton:**

```
Extract up to N high-signal quotes for Clear Current's portal quote bank.
Each quote: verbatim text, speaker, role, organization, suggested quoteBankSection,
attribution class, and 1–2 sentence context including the interviewer question if stated.
Map each quote to portal sourceId from interviews_registry portal_source_id or propose a new cc-* id and file path for sources_to_add.
Output valid JSON only, schema version 1.
```

## 3. Reconciler

**Inputs:** `staging/.../candidates.json` + path to `apps/final-presentation/src/content/quotes.ts`.

**Output:** Markdown report: duplicate/near-duplicate texts, conflicting claims, ids already in QUOTES.

**Prompt skeleton:**

```
Compare proposed quotes JSON to the existing QUOTES object in quotes.ts.
Flag duplicate ids, overlapping text (>85% similarity), and quotes that contradict the same theme.
Do not edit files; produce REVIEW.md sections: APPROVE, MERGE, REJECT with reasons.
```

## 4. Portal publisher (dry-run)

Implemented as [`scripts/publish_portal_draft.py`](../scripts/publish_portal_draft.py). Reads approved `candidates.json`, prints TypeScript snippets for manual paste or future automation.
