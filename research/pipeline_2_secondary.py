#!/usr/bin/env python3
"""
Clear Current Technologies — Pipeline 2: Secondary Research
Each agent receives: Synthesis Brief (shared) + 1 targeted document.
Target: ~21K tokens per call, safely under 30K/min rate limit.

Run SECOND. Outputs → research/outputs/secondary/
"""
import time, datetime
from pathlib import Path
from pipeline_utils import (
    MODEL, MAX_TOKENS, DELAY,
    extract_text, call_with_cache, save_output,
    load_product_context,
)

# ---------------------------------------------------------------------------
# PATHS
# ---------------------------------------------------------------------------
RESEARCH_DIR   = Path(__file__).parent
PRODUCT_CONTEXT = load_product_context(RESEARCH_DIR)
SEC_DATA       = RESEARCH_DIR / "SECONDARY DATA"
SECONDARY_OUT  = RESEARCH_DIR / "outputs" / "secondary"
AGENTS_DIR     = SECONDARY_OUT / "agents"

for d in [SECONDARY_OUT, AGENTS_DIR]:
    d.mkdir(parents=True, exist_ok=True)

print("\n" + "="*70)
print("PIPELINE 2 — SECONDARY RESEARCH")
print("="*70)

# ---------------------------------------------------------------------------
# LOAD DOCUMENTS
# ---------------------------------------------------------------------------
print("\nLoading documents...")

def load(folder: Path, glob: str, cap: int = 45000) -> str:
    matches = sorted(folder.glob(glob))
    if not matches:
        print(f"  ⚠  Not found: {glob}")
        return ""
    fpath = matches[0]
    try:
        text = extract_text(fpath)
        text = text[:cap]
        print(f"  ✓ {fpath.name} — {len(text):,} chars")
        return text
    except Exception as e:
        print(f"  ✗ {fpath.name} — {e}")
        return ""

# Synthesis brief is small — load in full as the shared foundation for every agent
SYNTHESIS_BRIEF = load(SEC_DATA, "CC_Research_Synthesis_Brief.md", cap=999999)

# Targeted secondary documents (capped at 45K chars each)
ARCADIA       = load(SEC_DATA, "Arcadia Competitive Intelligence*")
CLAIM_VERIFY  = load(SEC_DATA, "Claim Verification Report*")
MARKET_RPT_1  = load(SEC_DATA, "Clear Current Technologies  Commercial Energy Management SaaS Market Research Report.md")
MARKET_RPT_2  = load(SEC_DATA, "Clear Current Technologies  Commercial Energy Management SaaS — Market Research Report.md")
DEEP_RESEARCH = load(SEC_DATA, "Clear Current Technologies  Deep Secondary Research*")
GTM_INTEL     = load(SEC_DATA, "Clear Current Technologies  GTM Strategy*")
COMPASS       = load(SEC_DATA, "compass_artifact*")

def make_corpus(*segments: tuple[str, str]) -> str:
    """Build corpus from (label, text) pairs. Skips empty docs."""
    parts = []
    total = 0
    for label, text in segments:
        if not text:
            continue
        chunk = f"\n\n═══ SOURCE: {label} ═══\n{text}\n═══ END: {label} ═══\n"
        parts.append(chunk)
        total += len(chunk)
    corpus = "\n".join(parts)
    tokens = len(corpus) // 4
    print(f"  Corpus: {total:,} chars | ~{tokens:,} tokens")
    return corpus

# ---------------------------------------------------------------------------
# SHARED SYSTEM PROMPT
# ---------------------------------------------------------------------------

AGENT_SYSTEM_BASE = """You are contributing to a consulting engagement for Clear Current Technologies — a seed-stage AI-powered commercial energy management SaaS platform founded in 2024. The CEO is John Reuter. The CPO is Dan Schreiber. This research will directly inform product decisions, go-to-market strategy, and investor materials for a May 2026 fundraise.

You have been given a research synthesis brief (consolidating primary + secondary findings) and a targeted secondary research document. Your job is to go deeper on your specific area using both sources.

YOUR ANALYTICAL PHILOSOPHY:
You work from documented evidence only. You flag the difference between what a research report claims vs. what it cites as a primary source. You distrust statistics with no citation chain. You are trying to produce the most defensible, investor-grade analysis possible.

You cite your sources. Every claim names which document it came from.

The deliverables you are helping to build will go to John Reuter (CEO) and Dan Schreiber (CPO). They will use them to make real decisions. Make it count."""

if PRODUCT_CONTEXT:
    AGENT_SYSTEM_BASE += (
        "\n\n━━━ CLEAR CURRENT PRODUCT CONTEXT (authoritative for what we build) ━━━\n"
        f"{PRODUCT_CONTEXT}\n"
        "━━━ END PRODUCT CONTEXT ━━━\n"
    )

REQUIRED_OUTPUT_STRUCTURE = """
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIRED OUTPUT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. SOURCE INVENTORY
What's in each document you were given and what matters most for your focus.

## 2. KEY FINDINGS
8–12 specific, precise findings — every one cited to a source. No generic claims. Where useful, add a short **why it matters for Clear Current** line per finding—aligned with the CEO executive-scan standard in CLEAR CURRENT PRODUCT CONTEXT.

## 3. STATISTICS THAT ARE DEFENSIBLE
For each statistic: the number, its source document, that document's citation (if any), and your confidence rating (HIGH / MEDIUM / LOW). Flag any with no citation chain.

## 4. COMPETITIVE INTELLIGENCE
Everything the documents reveal about named competitors — capabilities, pricing, positioning, weaknesses.

## 5. DELIVERABLE BUILD GUIDANCE
Specific construction instructions for the deliverables your analysis informs.

## 6. WHAT THE RESEARCH PROVES vs. WHAT IT MERELY CLAIMS
Which findings are grounded in cited evidence? Which are analytical assertions?

## 7. GAPS AND OPEN QUESTIONS
What important questions does this research NOT answer?
"""

def run_agent(agent_id: str, name: str, title: str, persona: str, focus: str, corpus: str) -> str:
    print(f"\n{'='*60}")
    print(f"AGENT {agent_id}: {name} | {title}")
    print(f"Time: {datetime.datetime.now().strftime('%H:%M:%S')}")
    print(f"{'='*60}")
    system = f"You are {name}, {title}.\n\n{persona}\n\n{AGENT_SYSTEM_BASE}"
    task = (
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        f"YOUR ANALYTICAL TASK\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"{focus}\n\n{REQUIRED_OUTPUT_STRUCTURE}"
    )
    try:
        output = call_with_cache(corpus, task, system=system)
        fpath = AGENTS_DIR / f"{agent_id}_{name.replace(' ', '_')}.md"
        save_output(fpath,
            f"# Agent: {name} | {title}\n"
            f"# Run: {datetime.datetime.now().isoformat()}\n\n---\n\n",
            output)
        return output
    except Exception as e:
        print(f"✗ FAILED: {e}")
        return f"AGENT FAILED: {e}"

# ---------------------------------------------------------------------------
# 6 SECONDARY RESEARCH AGENTS
# Each gets: Synthesis Brief + 1 targeted document (~21K tokens per call)
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("SECONDARY RESEARCH AGENTS")
print("="*70)

AGENTS = [
    {
        "id": "s01", "name": "Victor Hale", "title": "Competitive Intelligence Specialist",
        "corpus": make_corpus(
            ("Research Synthesis Brief",           SYNTHESIS_BRIEF),
            ("Arcadia Competitive Intelligence",   ARCADIA),
        ),
        "persona": "You have spent 18 years in competitive intelligence for enterprise B2B SaaS — at two energy software companies, one strategic consulting firm, and now independently. You have personally conducted win/loss analyses on over 400 enterprise software deals in the commercial energy management space. You understand EnergyCAP's install base and customer retention dynamics. You know exactly what Arcadia's pivot to enterprise means for the mid-market. You do not make competitive claims you cannot document.",
        "focus": """The Research Synthesis Brief gives you an integrated view of how primary and secondary research align on competitive positioning. Now go deeper with the Arcadia Competitive Intelligence Report.

Read the Arcadia Report completely. Extract every documented fact about Arcadia: product capabilities by module, pricing approach, target customer, weaknesses as documented, GTM motion, their enterprise pivot timeline, what their current customers say about them (Trustpilot 2.6/5 noted in synthesis brief — find the details), their capital position ($649M raised), and what it means that they're actively migrating customers from the legacy Urjanet/Arc platform.

From the Synthesis Brief: cross-reference what Marc Spieler said about Arcadia as the primary competitive threat and what Don Johnson said about Clear Current's billing intelligence being complementary to building ops.

For all other named competitors (EnergyCAP, Energy Print, WatchWire, Tango, BrainBox AI, PEER AI, Constellation, ENGIE Impact, Energy Toolbase), extract every claim made in either document — capabilities, pricing, weaknesses, positioning.

Build the complete competitive matrix: for each competitor, product focus, primary verticals, pricing model (if known), key weaknesses documented, and the specific win condition for Clear Current.

Flag every competitive claim that lacks a citation chain.""",
    },
    {
        "id": "s02", "name": "Dana Park", "title": "Market Sizing & TAM/SAM/SOM Analyst",
        "corpus": make_corpus(
            ("Research Synthesis Brief",                SYNTHESIS_BRIEF),
            ("Market Research Report (Full Version)",   MARKET_RPT_1),
        ),
        "corpus_note": "Also reference: Claim Verification Report findings cited in Synthesis Brief",
        "persona": "You have spent 14 years doing market sizing and TAM/SAM/SOM analysis for B2B SaaS companies preparing for seed and Series A fundraises. You have had the uncomfortable conversation with founders 50+ times where you had to tell them their market size slide was built on a chain of uncited statistics that would fall apart under VC due diligence. You are ruthless about citation chains.",
        "focus": """The Research Synthesis Brief documents specific market statistics that have already been verified — use these as your starting foundation. Now go deeper with the full Market Research Report.

From the Synthesis Brief, note the verified statistics: DOE demand charges represent 30-70% of commercial bills; NREL ratchet calculation; 5.9% commercial energy CAGR vs 3% budgeted escalator; 660+ district energy systems in US. These have been through a claim verification process.

From the Market Research Report: extract every market size number — TAM for commercial energy management SaaS, commercial building energy spend, billing error rates, energy waste percentages, number of commercial buildings, utility spend by vertical.

For each number: (1) what is the claim; (2) what document makes it; (3) what source does that document cite; (4) confidence rating HIGH/MEDIUM/LOW.

Build the defensible TAM/SAM/SOM model using only statistics that survive citation chain scrutiny. For any number you cannot fully verify, flag it: 'UNVERIFIED — requires primary source before use in investor materials.'

Assess: does the combined research support a $1B+ TAM story? What framing makes the most defensible large-market case?""",
    },
    {
        "id": "s03", "name": "Priya Nair", "title": "Billing Error & Utility Overcharge Researcher",
        "corpus": make_corpus(
            ("Research Synthesis Brief",   SYNTHESIS_BRIEF),
            ("Claim Verification Report",  CLAIM_VERIFY),
        ),
        "persona": "You have spent 12 years researching utility billing errors from the academic and policy research side — first at an energy policy institute, then as a research director at a commercial energy management industry association. You have reviewed every major published study on commercial utility billing errors. You know the difference between 'billing errors occur in 3% of commercial accounts' (a real number with a citation chain) and 'billing errors cost commercial customers $X billion annually' (usually a back-of-envelope claim).",
        "focus": """The Synthesis Brief documents specific billing error evidence from primary research: Texas State's 'weird multiplier,' $10M in identified errors across Clear Current's 12 pilots, FERC's $108M FirstEnergy mischarged audit, RI PUC finding that 83% of internally flagged billing exceptions were still sent to customers. Now use the Claim Verification Report to find every additional billing error statistic and assess its defensibility.

Cross-reference every billing error claim across both documents. For each statistic: the number, its source, that source's citation chain, and your confidence rating.

For Marc Spieler's $10M across 12 pilots: does the Claim Verification Report or secondary research provide market-level context that validates the scale of this finding? What does industry data say about the percentage of commercial bills containing errors?

Produce the Billing Error Evidence Brief: all credible statistics with full citation chains, confidence ratings, and the recommended investor-ready framing that is both compelling and defensible.

Be explicit about the Harvard Law (2025) structural information asymmetry finding cited in the synthesis brief — find it in the Claim Verification Report and verify it.""",
    },
    {
        "id": "s04", "name": "Simone Laurent", "title": "ESG, Regulatory Pressure & Policy Intelligence Analyst",
        "corpus": make_corpus(
            ("Research Synthesis Brief",  SYNTHESIS_BRIEF),
            ("Deep Secondary Research",   DEEP_RESEARCH),
        ),
        "persona": "You have spent 13 years tracking ESG policy, building performance standards, carbon reporting mandates, and their commercial impact. You covered NYC Local Law 97, California SB 253/261, the SEC climate disclosure rule, CSRD in Europe, and the ENERGY STAR program. You know exactly which regulations create buying urgency — and the difference between regulations that create hard compliance requirements (high urgency) and voluntary reporting opportunities (lower urgency).",
        "focus": """The Synthesis Brief documents the regulatory intelligence finding in detail: Phil Combs called it 'super powerful — nobody does it'; Andi Ault's budget timing gap (submitted March before City of Austin finalizes rates); Ohio PUC 275-day timelines; AES Ohio 9% rate increase; PPL PA rate case filed Oct 2025 with July 1 2026 decision (same day universities begin FY); Boston University locks budget in March. Zero competitors offer PUC docket monitoring.

Now go deeper with the Deep Secondary Research (Four Strategic Intelligence Modules). Find the regulatory intelligence module and extract every additional data point.

For each regulation or standard mentioned: mandate, who it applies to, financial penalty for non-compliance, timeline, and what software capability it requires.

Build the complete regulatory pressure section: buying urgency tier (hard compliance deadline vs. soft pressure), verticals most exposed to near-term financial penalties, and the regulatory intelligence product module specification enriched with secondary data.

Produce the ESG/regulatory landscape summary for the investor narrative — specifically quantifying the budget timing gap (how much money is at risk when a rate case is approved after budget lock).""",
    },
    {
        "id": "s05", "name": "Carlos Mendez", "title": "GTM & Sales Intelligence Research Lead",
        "corpus": make_corpus(
            ("Research Synthesis Brief",               SYNTHESIS_BRIEF),
            ("GTM Strategy & Competitive Intelligence", GTM_INTEL),
        ),
        "persona": "You have spent 16 years in B2B SaaS GTM strategy and sales intelligence research — at one energy software company (where you ran competitive sales enablement), one enterprise sales consulting firm, and now independently. You know what a land-and-expand GTM motion looks like when it works vs. when it fails. You are particularly focused on the channel question: when does selling through ESCOs and energy services firms accelerate growth vs. dilute margin?",
        "focus": """The Synthesis Brief documents Marc Spieler's three GTM tracks: (1) land via billing error audit ROI, (2) expand via anomaly alerts, (3) retain via regulatory intelligence. It also documents the university buying cycle (Fall awareness → Winter budget proposals → Spring RFP → Summer execution) and notes that IT security is a real enterprise adoption gate requiring SOC 2 Type II.

Now go deeper with the GTM Strategy document. Read it completely.

Extract: every ICP definition, every GTM motion recommendation, every channel strategy recommendation, every pricing model discussed, every sales cycle analysis, every land-and-expand framework.

Critically assess the GTM document against the Synthesis Brief's primary research findings. Which GTM recommendations are confirmed by what interviewees actually said? Which are theoretical and need validation?

Produce the GTM Intelligence Brief: ICP by vertical (healthcare, higher ed, multi-site hospitality/restaurant, CRE), recommended entry point by vertical, sales motion and cycle estimate, channel strategy assessment (direct vs. ESCO channel — under what conditions does each work?), pricing model recommendation with evidence, and the three most important unanswered GTM questions.""",
    },
    {
        "id": "s06", "name": "Felix Werner", "title": "Energy Technology & Product Landscape Analyst",
        "corpus": make_corpus(
            ("Research Synthesis Brief",  SYNTHESIS_BRIEF),
            ("Compass Market Analysis",   COMPASS),
        ),
        "persona": "You have spent 11 years as a technology analyst covering the commercial energy management software market — first at a research firm, then at an energy tech venture fund, now independently. You know what AI features have been announced vs. what actually ships. You have a practiced skepticism toward 'AI-powered' claims and know exactly what questions to ask to find out if a company's AI capability is real or marketing.",
        "focus": """The Synthesis Brief documents key technology landscape findings: Excel is the real incumbent for sophisticated energy analysts; Verdantix 2023 confirms all 15 leading EMS vendors incorporating AI; only 4% of commercial buildings have full BEMS deployed; Arcadia has no natural language chat interface. Dan Schreiber's three-tier product model (Chat/React, Dashboard/Push, Autonomous/Do) maps to the identified user personas.

Now go deeper with the Compass Market Analysis document. Extract every technology and product landscape intelligence point.

Assess: where does AI add genuine value vs. where is it a label? What is the current state of anomaly detection in commercial energy management — accuracy, false positive rates, data requirements? What does the market say about NLP/chat interfaces for energy management?

From the Synthesis Brief: the finding that 'the bar for adoption is faster and more insightful than my well-structured Excel workbook' (Phil Combs) — what does this mean for Clear Current's product design? What AI capability claims are defensible given what the market research reveals about current state of technology?

Produce the technology landscape section for Clear Current's competitive positioning and investor narrative. Be specific about what 'AI-powered' means in the context of each of Clear Current's five proposed modules.""",
    },
]

for i, agent in enumerate(AGENTS):
    output = run_agent(
        agent["id"], agent["name"], agent["title"],
        agent["persona"], agent["focus"], agent["corpus"],
    )
    if i < len(AGENTS) - 1:
        print(f"  Waiting {DELAY}s...")
        time.sleep(DELAY)

# ---------------------------------------------------------------------------
# DONE
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("PIPELINE 2 COMPLETE")
print("="*70)
files = list(SECONDARY_OUT.rglob("*.md")) + list(SECONDARY_OUT.rglob("*.txt"))
print(f"\nOutput files: {len(files)}")
for f in sorted(files):
    print(f"  {f.relative_to(SECONDARY_OUT)}  ({f.stat().st_size // 1024} KB)")
print(f"\n✓ All outputs → {SECONDARY_OUT}")
print("→ Run pipeline_3_synthesis.py next")
