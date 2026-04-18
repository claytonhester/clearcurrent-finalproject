"""
Load interviews_registry.yaml and resolve transcript/summary text from disk.
Used by pipeline_1_primary.py — add new interviews by editing the YAML only.
"""
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError as e:  # pragma: no cover
    raise ImportError(
        "PyYAML is required. Install research dependencies: pip install -r research/requirements.txt",
    ) from e


@dataclass
class InterviewBundle:
    """Resolved text for one registry interview."""

    id: str
    portal_source_id: str
    company_card_id: str | None
    transcript: str
    summary: str
    label_transcript: str
    label_summary: str
    include_in_all_summaries_corpus: bool


def _load_yaml(path: Path) -> dict[str, Any]:
    raw = path.read_text(encoding="utf-8", errors="replace")
    return yaml.safe_load(raw)


def _first_glob_text(folder: Path, pattern: str, extract_text_fn) -> str:
    if not pattern or not pattern.strip():
        return ""
    matches = sorted(folder.glob(pattern))
    if not matches:
        print(f"  ⚠  Not found: {folder.name}/{pattern}")
        return ""
    fpath = matches[0]
    try:
        text = extract_text_fn(fpath)
        print(f"  ✓ {fpath.name} — {len(text):,} chars")
        return text
    except Exception as e:  # pragma: no cover
        print(f"  ✗ {fpath.name} — {e}")
        return ""


def load_interview_bundles(research_dir: Path, extract_text_fn) -> dict[str, InterviewBundle]:
    """
    Read interviews_registry.yaml and load all transcript/summary bodies.
    extract_text_fn: typically pipeline_utils.extract_text (handles docx, txt, pdf).
    """
    reg_path = research_dir / "interviews_registry.yaml"
    if not reg_path.exists():
        raise FileNotFoundError(f"Missing {reg_path}")

    data = _load_yaml(reg_path)
    meta = data.get("metadata") or {}
    tdir = research_dir / meta.get("transcripts_dir", "Call Transcripts")
    sdir = research_dir / meta.get("summaries_dir", "Interview Summary Documents")

    bundles: dict[str, InterviewBundle] = {}
    for row in data.get("interviews") or []:
        iid = row["id"]
        tg = row.get("transcript_glob") or ""
        sg = row.get("summary_glob") or ""
        labels = row.get("corpus_labels") or {}
        lt = labels.get("transcript", f"{iid} Transcript")
        ls = labels.get("summary", f"{iid} Summary")

        print(f"\n  [{iid}]")
        transcript = _first_glob_text(tdir, tg, extract_text_fn) if tg else ""
        summary = _first_glob_text(sdir, sg, extract_text_fn) if sg else ""

        bundles[iid] = InterviewBundle(
            id=iid,
            portal_source_id=row.get("portal_source_id", ""),
            company_card_id=row.get("company_card_id"),
            transcript=transcript,
            summary=summary,
            label_transcript=lt,
            label_summary=ls,
            include_in_all_summaries_corpus=bool(row.get("include_in_all_summaries_corpus", True)),
        )
    return bundles


# Maps registry interview id -> legacy global variable names used in pipeline_1_primary.py
_LEGACY_TRANSCRIPT_VARS: dict[str, str] = {
    "texas-state": "TX_STATE_T",
    "ut-austin-finance": "ANDI_AULT_T",
    "ut-austin-ops": "TROY_NEVELS_T",
    "medxcel-ascension": "SCOTT_CZUB_T",
    "bon-secours": "ANN_WALSTON_T",
    "houston-methodist": "SEAN_SEVY_T",
    "intermountain": "INTERMOUNTAIN_T",
    "adventhealth": "ADVENTHEALTH_T",
    "panda-roger": "ROGER_T",
    "panda-walt": "WALT_T",
    "jll": "JAMARE_T",
    "nvidia-spieler": "MARC_SPIELER_T",
    "engie-zavadsky": "ADAM_ZAVADSKY_T",
    "trane-johnson": "DON_JOHNSON_T",
}

_LEGACY_SUMMARY_VARS: dict[str, str] = {
    "texas-state": "TX_STATE_S",
    "ut-austin-finance": "ANDI_AULT_S",
    "ut-austin-ops": "TROY_NEVELS_S",
    "medxcel-ascension": "SCOTT_CZUB_S",
    "bon-secours": "ANN_WALSTON_S",
    "houston-methodist": "SEAN_SEVY_S",
    "intermountain": "INTERMOUNTAIN_S",
    "adventhealth": "ADVENTHEALTH_S",
    "panda-roger": "ROGER_S",
    "panda-walt": "WALT_S",
    "hyatt": "RANDY_S",
    "jll": "JAMARE_S",
    "nvidia-spieler": "MARC_SPIELER_S",
    "engie-zavadsky": "ADAM_ZAVADSKY_S",
    "trane-combs": "PHIL_COMBS_S",
}


def inject_legacy_pipeline_globals(target_globals: dict, bundles: dict[str, InterviewBundle]) -> None:
    """Set TX_STATE_T, ANDI_AULT_T, … on the pipeline module globals dict."""
    for iid, var in _LEGACY_TRANSCRIPT_VARS.items():
        b = bundles.get(iid)
        target_globals[var] = b.transcript if b else ""
    for iid, var in _LEGACY_SUMMARY_VARS.items():
        b = bundles.get(iid)
        target_globals[var] = b.summary if b else ""


# Same segment order as legacy pipeline_1 ALL_SUMMARIES (contact list + quote bank inputs).
_ALL_SUMMARIES_ORDER: tuple[str, ...] = (
    "texas-state",
    "ut-austin-finance",
    "ut-austin-ops",
    "medxcel-ascension",
    "bon-secours",
    "houston-methodist",
    "intermountain",
    "adventhealth",
    "panda-walt",
    "jll",
    "nvidia-spieler",
    "engie-zavadsky",
    "trane-combs",
    "panda-roger",
)


def build_all_summaries_corpus(
    bundles: dict[str, InterviewBundle],
    make_corpus_fn,
) -> str:
    """Ordered segments for STEP 1 contact list + shared summary-only agents."""
    segments: list[tuple[str, str]] = []
    for iid in _ALL_SUMMARIES_ORDER:
        b = bundles.get(iid)
        if not b or not b.summary or not b.include_in_all_summaries_corpus:
            continue
        segments.append((b.label_summary, b.summary))
    return make_corpus_fn(*segments)


def write_primary_corpus_file(
    research_dir: Path,
    bundles: dict[str, InterviewBundle],
    primary_out: Path,
) -> Path:
    """Append-friendly full primary text dump for agents / search (not the same as pipeline.py master)."""
    parts: list[str] = []
    for b in bundles.values():
        if b.transcript:
            parts.append(f"\n\n═══ SOURCE: {b.label_transcript} ═══\n{b.transcript}\n═══ END: {b.label_transcript} ═══\n")
        if b.summary:
            parts.append(f"\n\n═══ SOURCE: {b.label_summary} ═══\n{b.summary}\n═══ END: {b.label_summary} ═══\n")
    body = "\n".join(parts)
    out = primary_out / "00_primary_corpus.txt"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(body, encoding="utf-8")
    print(f"\n✓ Primary corpus bundle written → {out} ({len(body):,} chars)")
    return out


def validate_registry_files_exist(research_dir: Path) -> list[str]:
    """
    Return list of warning strings for missing globs (for validate_research.py).
    """
    reg_path = research_dir / "interviews_registry.yaml"
    data = _load_yaml(reg_path)
    meta = data.get("metadata") or {}
    tdir = research_dir / meta.get("transcripts_dir", "Call Transcripts")
    sdir = research_dir / meta.get("summaries_dir", "Interview Summary Documents")
    warnings: list[str] = []
    for row in data.get("interviews") or []:
        iid = row["id"]
        tg = row.get("transcript_glob") or ""
        sg = row.get("summary_glob") or ""
        if tg and not list(tdir.glob(tg)):
            warnings.append(f"{iid}: transcript_glob '{tg}' matched no files under {tdir.name}/")
        if sg and not list(sdir.glob(sg)):
            warnings.append(f"{iid}: summary_glob '{sg}' matched no files under {sdir.name}/")
    return warnings
