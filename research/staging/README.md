# Staging — pre-portal review

Artifacts here are **drafts**. Nothing in this folder is consumed by the portal at build time unless you intentionally copy merged content into `apps/final-presentation`.

## Folder contract

Use one directory per batch:

```
staging/incoming_YYYY-MM-DD/
  manifest.json       # optional: run id, git sha, pipeline version
  candidates.json     # required schema (see agents/README.md)
  REVIEW.md           # human-readable summary (optional; can be generated)
```

## `candidates.json` (top-level schema)

| Field            | Type   | Description                                                                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `version`        | number | Schema version (currently `1`)                                                                                         |
| `generated_at`   | string | ISO-8601 timestamp                                                                                                     |
| `quotes`         | array  | Objects with `id`, `text`, `speaker`, `role`, `org`, `sourceId`, `quoteBankSection`, `attribution`, optional `context` |
| `sources_to_add` | array  | Optional new rows for `SOURCES` in portal (same shape as portal expects: `id`, `kind`, `title`, `file`)                |
| `warnings`       | array  | Strings e.g. near-duplicate ids                                                                                        |

After review, merge approved quotes manually or via [`scripts/publish_portal_draft.py`](../scripts/publish_portal_draft.py).

## Git

Ignore large scratch dirs if needed; default is to **commit** small JSON review packets only when useful for audit.
