#!/usr/bin/env python3
"""
Lightweight reconcile: compare staging candidates.json quote ids + text fingerprints
against apps/final-presentation/src/content/quotes.ts. Prints markdown to stdout.

Usage:
  python research/scripts/reconcile_quotes.py research/staging/incoming_*/candidates.json
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
QUOTES_TS = REPO_ROOT / "apps" / "final-presentation" / "src" / "content" / "quotes.ts"


def extract_quotes_from_ts(path: Path) -> dict[str, str]:
    """Best-effort: map id -> text from quotes.ts entries."""
    text = path.read_text(encoding="utf-8")
    blocks = re.split(r"'([a-z0-9][-a-z0-9]*)':\s*\{", text)
    out: dict[str, str] = {}
    for i in range(1, len(blocks), 2):
        qid = blocks[i]
        body = blocks[i + 1] if i + 1 < len(blocks) else ""
        m = re.search(r"text:\s*'((?:\\'|[^'])*)'", body)
        if m:
            raw = m.group(1).replace("\\'", "'")
            out[qid] = raw
    return out


def norm(s: str) -> str:
    return hashlib.sha256(s.strip().lower().encode()).hexdigest()[:16]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("candidates", type=Path)
    args = ap.parse_args()

    data = json.loads(args.candidates.read_text(encoding="utf-8"))
    proposed = data.get("quotes") or []
    existing = extract_quotes_from_ts(QUOTES_TS)

    lines = ["# Reconcile report", "", "## ID collisions", ""]
    collisions = [q["id"] for q in proposed if q.get("id") in existing]
    lines.append(", ".join(collisions) if collisions else "_None_")

    lines.extend(["", "## Near-duplicate text (same normalized hash)", ""])
    inv: dict[str, list[str]] = {}
    for qid, txt in existing.items():
        inv.setdefault(norm(txt), []).append(qid)
    for q in proposed:
        t = q.get("text") or ""
        h = norm(t)
        peers = inv.get(h, [])
        if len(peers) > 1 or (peers and peers[0] != q.get("id")):
            lines.append(f"- proposed `{q.get('id')}` ~ existing `{peers}`")

    if len(lines) < 5 or lines[-1].startswith("- proposed"):
        lines.append("_None detected (heuristic)._")

    print("\n".join(lines))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
