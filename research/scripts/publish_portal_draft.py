#!/usr/bin/env python3
"""
Read staging candidates.json and print TypeScript snippets for final-presentation merge.
Does not modify files unless --write-snippets PATH is passed (writes snippet file only).

Usage:
  python research/scripts/publish_portal_draft.py research/staging/incoming_2026-04-17/candidates.json
  python research/scripts/publish_portal_draft.py candidates.json --write-snippets /tmp/portal_snippets.txt
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
QUOTES_TS = REPO_ROOT / "apps" / "final-presentation" / "src" / "content" / "quotes.ts"


def load_existing_quote_ids(quotes_path: Path) -> set[str]:
    if not quotes_path.exists():
        return set()
    text = quotes_path.read_text(encoding="utf-8")
    return set(re.findall(r"'([a-z0-9][-a-z0-9]*)':\s*\{\s*\n\s*id:", text))


def escape_ts_string(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def quote_to_ts_block(q: dict) -> str:
    qid = q["id"]
    lines = [
        f"  '{qid}': {{",
        f"    id: '{qid}',",
        f"    text: '{escape_ts_string(q['text'])}',",
        f"    speaker: '{escape_ts_string(q['speaker'])}',",
        f"    role: '{escape_ts_string(q['role'])}',",
        f"    org: '{escape_ts_string(q['org'])}',",
        f"    sourceId: '{q['sourceId']}',",
    ]
    if q.get("industry"):
        lines.append(f"    industry: '{q['industry']}',")
    if q.get("persona"):
        lines.append(f"    persona: '{q['persona']}',")
    if q.get("attribution"):
        lines.append(f"    attribution: '{q['attribution']}',")
    if q.get("context"):
        lines.append(f"    context: '{escape_ts_string(q['context'])}',")
    lines.append(f"    quoteBankSection: '{q['quoteBankSection']}',")
    lines.append("  },")
    return "\n".join(lines)


def main() -> int:
    ap = argparse.ArgumentParser(description="Generate portal quote snippets from staging JSON")
    ap.add_argument("candidates", type=Path, help="Path to candidates.json")
    ap.add_argument("--write-snippets", type=Path, default=None, help="Write output to file")
    args = ap.parse_args()

    path = args.candidates
    if not path.is_file():
        print(f"Not found: {path}", file=sys.stderr)
        return 1

    data = json.loads(path.read_text(encoding="utf-8"))
    quotes = data.get("quotes") or []
    existing = load_existing_quote_ids(QUOTES_TS)

    out_lines: list[str] = [
        "// Paste into apps/final-presentation/src/content/quotes.ts inside QUOTES = { ... }",
        "// Then run: npm run test -w @clear-current/final-presentation",
        "",
    ]

    dup = []
    for q in quotes:
        qid = q.get("id")
        if not qid:
            print("SKIP: quote missing id", file=sys.stderr)
            continue
        if qid in existing:
            dup.append(qid)
        out_lines.append(quote_to_ts_block(q))
        out_lines.append("")

    if dup:
        out_lines.insert(3, f"// WARNING: ids already in quotes.ts (resolve before merge): {dup}")
        out_lines.insert(4, "")

    sources_add = data.get("sources_to_add") or []
    if sources_add:
        out_lines.append("// --- Optional new SOURCES rows (apps/final-presentation/src/content/sources.ts) ---")
        out_lines.append(json.dumps(sources_add, indent=2))

    text = "\n".join(out_lines)
    print(text)
    if args.write_snippets:
        args.write_snippets.write_text(text, encoding="utf-8")
        print(f"\nWrote {args.write_snippets}", file=sys.stderr)

    return 1 if dup else 0


if __name__ == "__main__":
    raise SystemExit(main())
