#!/usr/bin/env python3
"""
Validate interviews_registry.yaml: every glob resolves to at least one file.
Exit 1 on errors. Warnings print to stderr.
"""
from __future__ import annotations

import sys
from pathlib import Path

RESEARCH_DIR = Path(__file__).resolve().parent

try:
    from registry_load import validate_registry_files_exist
except ImportError as e:  # pragma: no cover
    print(e, file=sys.stderr)
    sys.exit(2)


def main() -> int:
    warnings = validate_registry_files_exist(RESEARCH_DIR)
    if warnings:
        for w in warnings:
            print(f"WARN: {w}", file=sys.stderr)
    if any("matched no files" in w for w in warnings):
        print("validate_research.py: FAILED (missing files)", file=sys.stderr)
        return 1
    print("validate_research.py: OK — all registry globs resolve.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
