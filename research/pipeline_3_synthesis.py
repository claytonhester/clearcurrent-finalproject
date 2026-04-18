#!/usr/bin/env python3
"""
Clear Current Technologies — Pipeline 3: Synthesis & Deliverables

Each deliverable gets: Synthesis Brief (foundation) + 2-3 targeted agent outputs.
Target: ~20K tokens per call, safely under 30K/min rate limit.

Run THIRD. Outputs → research/outputs/synthesis/
"""
import time, datetime
from pathlib import Path
from pipeline_utils import (
    MODEL, MAX_TOKENS, DELAY,
    call_with_cache, save_output,
    load_product_context,
)

# ---------------------------------------------------------------------------
# PATHS
# ---------------------------------------------------------------------------
RESEARCH_DIR     = Path(__file__).parent
PRIMARY_AGENTS   = RESEARCH_DIR / "outputs" / "primary" / "agents"
SECONDARY_AGENTS = RESEARCH_DIR / "outputs" / "secondary" / "agents"
SEC_DATA         = RESEARCH_DIR / "SECONDARY DATA"
SYNTHESIS_OUT    = RESEARCH_DIR / "outputs" / "synthesis"
SYNTHESIS_OUT.mkdir(parents=True, exist_ok=True)

print("\n" + "="*70)
print("PIPELINE 3 — SYNTHESIS & DELIVERABLES")
print("="*70)

# ---------------------------------------------------------------------------
# LOAD SYNTHESIS BRIEF (shared foundation for all deliverables)
# ---------------------------------------------------------------------------
SYNTHESIS_BRIEF_PATH = SEC_DATA / "CC_Research_Synthesis_Brief.md"
if SYNTHESIS_BRIEF_PATH.exists():
    SYNTHESIS_BRIEF = SYNTHESIS_BRIEF_PATH.read_text(encoding="utf-8", errors="replace")
    print(f"✓ Synthesis Brief loaded — {len(SYNTHESIS_BRIEF):,} chars")
else:
    SYNTHESIS_BRIEF = ""
    print("⚠  Synthesis Brief not found")

PRODUCT_CONTEXT = load_product_context(RESEARCH_DIR)
if PRODUCT_CONTEXT:
    print(f"✓ Product context loaded — {len(PRODUCT_CONTEXT):,} chars")

# ---------------------------------------------------------------------------
# AGENT OUTPUT LOADER
# ---------------------------------------------------------------------------

def load_agent(folder: Path, pattern: str, max_chars: int) -> str:
    matches = sorted(folder.glob(f"*{pattern}*"))
    if not matches:
        print(f"  ⚠  Not found: {pattern}")
        return f"[NOT FOUND: {pattern}]"
    text = matches[0].read_text(encoding="utf-8", errors="replace")
    return f"\n\n═══ AGENT: {matches[0].stem} ═══\n{text[:max_chars]}\n═══ END ═══\n"

P = PRIMARY_AGENTS
S = SECONDARY_AGENTS

def make_corpus(brief_chars: int, *agent_specs: tuple[Path, str, int]) -> str:
    """Build corpus from synthesis brief + agent outputs."""
    parts = []
    # Always include synthesis brief first
    if SYNTHESIS_BRIEF:
        brief = SYNTHESIS_BRIEF[:brief_chars]
        parts.append(f"\n\n═══ FOUNDATION: Research Synthesis Brief ═══\n{brief}\n═══ END ═══\n")
    # Add agent outputs
    for folder, pattern, max_chars in agent_specs:
        parts.append(load_agent(folder, pattern, max_chars))
    corpus = "\n".join(parts)
    tokens = len(corpus) // 4
    print(f"  Corpus: {len(corpus):,} chars | ~{tokens:,} tokens")
    return corpus

# ---------------------------------------------------------------------------
# SYNTHESIS SYSTEM PROMPT
# ---------------------------------------------------------------------------

_SYNTHESIS_CORE = """You are the lead analyst on a consulting engagement for Clear Current Technologies — a seed-stage AI-powered commercial energy management SaaS platform. The CEO is John Reuter. The CPO is Dan Schreiber.

You have been given a research synthesis brief (primary + secondary findings already cross-referenced) and targeted deep analysis from specialist research agents. Your job is to integrate these into a single, polished, investor-ready deliverable.

SYNTHESIS PRINCIPLES:
1. Integrate — do not just concatenate. Weave evidence into a unified, coherent narrative.
2. Prioritize — optimize for the specific audience of each deliverable.
3. Be specific — every claim cites its source. No generic assertions.
4. Flag conflicts — when primary interviews and secondary research disagree, say so explicitly.
5. Be honest about gaps — if evidence is thin, say so rather than overstating confidence.

The output will be used in real board presentations, investor meetings, and product planning sessions.

MANDATORY DELIVERABLE RULES:
- **CEO scan standard (John):** At every major stage/section, lead with **what is happening** in the evidence and **why it matters** for Clear Current—executive takeaway first. Weave **verbatim customer quotes** (name, role, org) into the body, not only appendices. Use **interview summaries** for orientation and **transcripts** for exact quotes; flag when a summary infers beyond the transcript.
- Use the CLEAR CURRENT PRODUCT CONTEXT block below as authoritative for what Clear Current ships, strategic focus, and maturity (spot vs resolve, chat vs dashboard vs autonomous tier). Interview evidence describes buyer reality; the product context describes your product reality—hold both and flag tension when they diverge.
- Do not waste space restating baseline capabilities the leadership team already knows unless the research adds segment-specific nuance, sequencing, or messaging. Lead with *implications*: what to prioritize, how to position, what proof to gather, what risks to name.
- Close every deliverable with a section titled exactly: ## Implications for Clear Current (tagged). Each bullet must start with one of: [FITS CURRENT PRODUCT] | [EXTENDS ROADMAP] | [NET NEW / RESEARCH-ONLY].
- Do not describe autonomous utility dispute resolution, full closed-loop credits/refunds, or unattended "the platform resolves errors" behavior as today's default shipped product unless the corpus explicitly states that capability is live for a customer.
- Where helpful, tie recommendations to named surfaces: Rate Analyst, Energy HQ, Deal Center, Build Engine, and/or the three-tier model (chat = react to user, dashboard = push to user, autonomous agent = do for user).
"""

SYNTHESIS_SYSTEM = _SYNTHESIS_CORE
if PRODUCT_CONTEXT:
    SYNTHESIS_SYSTEM += (
        "\n━━━ CLEAR CURRENT PRODUCT CONTEXT ━━━\n"
        f"{PRODUCT_CONTEXT}\n"
        "━━━ END PRODUCT CONTEXT ━━━\n"
    )
else:
    SYNTHESIS_SYSTEM += (
        "\n(No CLEAR_CURRENT_PRODUCT_CONTEXT.md — add research/CLEAR_CURRENT_PRODUCT_CONTEXT.md "
        "to avoid generic deliverables.)\n"
    )

def build_deliverable(deliverable_id: str, title: str, corpus: str, task: str) -> None:
    print(f"\n{'='*60}")
    print(f"DELIVERABLE {deliverable_id}: {title}")
    print(f"Time: {datetime.datetime.now().strftime('%H:%M:%S')}")
    print(f"{'='*60}")
    fname = f"{deliverable_id}_{title.replace(' ', '_').replace('/', '-')}.md"
    fpath = SYNTHESIS_OUT / fname
    try:
        output = call_with_cache(corpus, task, system=SYNTHESIS_SYSTEM)
        save_output(fpath,
            f"# {title}\n"
            f"# Generated: {datetime.datetime.now().isoformat()}\n\n---\n\n",
            output)
    except Exception as e:
        print(f"✗ FAILED: {e}")
    time.sleep(DELAY)

# ---------------------------------------------------------------------------
# DELIVERABLE 1 — ENGAGEMENT TRIGGER MAP
# Synthesis Brief + Ray Kowalski (ops triggers) + Elena Rodriguez (regulatory)
# + Dr. Sarah Chen (university triggers)
# ---------------------------------------------------------------------------

D1_CORPUS = make_corpus(
    20000,  # brief chars
    (P, "Ray_Kowalski",     15000),
    (P, "Elena_Rodriguez",  15000),
    (P, "Dr._Sarah_Chen",   15000),
)

D1_TASK = """Build the Complete Engagement Trigger Map for Clear Current Technologies.

This map answers: WHAT SPECIFIC EVENTS cause a commercial energy manager to open a laptop, pick up a phone, or log into a new platform? These are the moments Clear Current must be present at.

For each trigger event:
| Trigger Event | Trigger Type | Verbatim Evidence | Vertical(s) | Seasonal Timing | Clear Current Entry Point |

TRIGGER TYPES: REACTIVE | PROACTIVE | RELATIONSHIP | REGULATORY | FINANCIAL

For each trigger:
1. State the trigger precisely (not "high utility bill" but "monthly bill arrives showing cost 15% above budget with no explanation from the utility")
2. Name the interview source(s) that confirmed it
3. Provide the verbatim quote that best captures it
4. Identify which Clear Current module is the entry point
5. Name the persona who experiences this trigger

Target: 30–45 specific trigger events organized by vertical and trigger type.

Close with STRATEGIC IMPLICATIONS: the top 5 trigger patterns that should shape Clear Current's sales playbook and marketing calendar."""

build_deliverable("D1", "Engagement Trigger Map", D1_CORPUS, D1_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 2 — SEASONAL ENERGY MANAGEMENT CALENDAR
# Synthesis Brief + Patricia Nash (finance/budget timing) + Alex Sterling (procurement)
# + Elena Rodriguez (regulatory timeline)
# ---------------------------------------------------------------------------

D2_CORPUS = make_corpus(
    20000,
    (P, "Dr._Patricia_Nash", 15000),
    (P, "Alex_Sterling",     15000),
    (P, "Elena_Rodriguez",   15000),
)

D2_TASK = """Build the Seasonal Energy Management Calendar for Clear Current Technologies.

This calendar shows: when commercial energy managers are busiest, what they focus on each month, when budget and procurement decisions happen, when regulatory deadlines hit, and when Clear Current should position specific capabilities.

For each month (January–December):
**[MONTH]**
- Primary energy management focus
- Key events/deadlines (by vertical)
- Budget/procurement activity
- Regulatory milestones
- Clear Current's recommended touchpoint or capability highlight
- Verbatim evidence (at least one quote per quarter)

VERTICALS: Higher Education (July 1 FY) | Healthcare (October FY) | Hospitality (calendar year) | Restaurant/Retail (calendar year) | Commercial Real Estate

KEY MOMENTS TO CAPTURE:
- University fiscal year prep (Feb–April: budget lock, rate case window — Andi Ault's exact mechanism)
- Carbon reporting season (Q1: CDP, ENERGY STAR, GRESB submissions)
- Natural gas hedging cycles (Ann Walston's UPSC committee)
- Utility contract renewals
- Building Performance Standards deadlines (NYC Local Law 97, CA SB 253)
- Summer peak demand season

Close with SALES CALENDAR IMPLICATIONS: which modules to lead with by season, which months to run outreach campaigns."""

build_deliverable("D2", "Seasonal Energy Management Calendar", D2_CORPUS, D2_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 3 — CUSTOMER JOURNEY MAPS (5 maps)
# Synthesis Brief + Tom Reeves (billing/monthly) + Ray Kowalski (anomaly)
# + Dr. Sarah Chen (campus chargeback)
# ---------------------------------------------------------------------------

D3_CORPUS = make_corpus(
    20000,
    (P, "Tom_Reeves",      15000),
    (P, "Ray_Kowalski",    15000),
    (P, "Dr._Sarah_Chen",  15000),
)

D3_TASK = """Build five complete Customer Journey Maps for Clear Current Technologies.

Each map follows an energy manager through a specific workflow — from the triggering moment to resolution — and shows where Clear Current adds value at each stage.

BUILD THESE FIVE MAPS:

MAP 1: Monthly Bill Review & Validation
Persona: Commercial energy manager receiving monthly utility bills

MAP 2: Anomaly Detection & Response
Persona: Energy ops manager discovering an unexpected cost spike

MAP 3: Campus Chargeback & Departmental Billing (Higher Education)
Persona: University utility billing manager (Andee Chamberlain / Texas State model)

MAP 4: Regulatory Intelligence & Budget Impact
Persona: Energy manager or finance director managing rate case exposure (Andi Ault model)

MAP 5: Budgeting & Forecasting (Annual Cycle)
Persona: Energy manager + finance owner doing annual energy budget

For EACH map produce:

**TRIGGER**: The exact event that starts this journey. Verbatim quote.

**STAGE 1 — DISCOVERY** (without Clear Current): How they find out there's a problem. Tools, manual steps, time required, frustration, verbatim quote capturing the pain.

**STAGE 2 — INVESTIGATION** (without Clear Current): How they figure out what's happening. Tools, where they get stuck, key frustration moment.

**STAGE 3 — RESOLUTION** (without Clear Current): What they do to fix it. Who gets involved, what gets communicated upward, time to resolution, what falls through the cracks.

**STAGE 4 — WITH CLEAR CURRENT**: The same journey with Clear Current. What the platform does at each stage, which module handles it, time saved, specific output.

**EMOTIONAL ARC**: Stress level HIGH/MEDIUM/LOW at each stage, before and after.

**EVIDENCE**: Every stage must cite specific interviews. At least 3 verbatim quotes per map."""

build_deliverable("D3", "Customer Journey Maps", D3_CORPUS, D3_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 4 — PRODUCT MODULE RECOMMENDATIONS
# Synthesis Brief + Tom Reeves (billing) + Elena Rodriguez (regulatory)
# + Ava Mitchell (AI product design) + Felix Werner secondary (tech landscape)
# ---------------------------------------------------------------------------

D4_CORPUS = make_corpus(
    15000,
    (P, "Tom_Reeves",       15000),
    (P, "Elena_Rodriguez",  12000),
    (P, "Ava_Mitchell",     12000),
    (S, "Felix_Werner",     12000),
)

D4_TASK = """Build five complete Product Module Recommendations for Clear Current Technologies.

These recommendations will be used by Dan Schreiber (CPO) to prioritize the product roadmap and by John Reuter (CEO) to explain the product to investors. Every recommendation must be grounded in specific customer evidence.

BUILD THESE FIVE MODULES:

MODULE 1: Billing Error Audit Engine
MODULE 2: Anomaly Detection & Alerting
MODULE 3: Regulatory Intelligence Monitor
MODULE 4: Tariff Optimization Engine
MODULE 5: Campus Chargeback Intelligence

For EACH module:

**PROBLEM DEFINITION**: The specific documented problem this module solves. Who experiences it? Verbatim quote capturing the problem at its most acute.

**EVIDENCE BASE**: Every interview source that provided evidence. The 3-4 most compelling verbatim quotes.

**TARGET PERSONA**: Primary user (daily), secondary user (reports), economic buyer. Specific titles from research.

**BUSINESS VALUE**: Quantified where evidence allows. What is the ROI calculation a buyer uses to justify purchase?

**PRODUCT SPECIFICATION — MVP**: What would an engineer build in the first sprint? What data is required? What is the output? What AI capability does it use?

**AI INTERACTION MODEL**: Which of Dan's three tiers? (Chat/React, Dashboard/Push, Autonomous/Do) What does AI do in background? How is output surfaced? What explanation is provided?

**COMPETITIVE DIFFERENTIATION**: Does any competitor offer this? What specifically does Clear Current do differently?

**SEQUENCING RECOMMENDATION**: Should this be Module 1? What must be built before this can work?

Close with RECOMMENDED MODULE PRIORITY ORDER with full rationale."""

build_deliverable("D4", "Product Module Recommendations", D4_CORPUS, D4_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 5 — MARKET OPPORTUNITY HEATMAP
# Synthesis Brief + James Park (GTM/competitive) + Jordan Rivers (investor)
# + Dana Park secondary (market sizing)
# ---------------------------------------------------------------------------

D5_CORPUS = make_corpus(
    15000,
    (P, "James_Park",    15000),
    (P, "Jordan_Rivers", 15000),
    (S, "Dana_Park",     15000),
)

D5_TASK = """Build the Market Opportunity Heatmap for Clear Current Technologies.

This document helps John and Dan answer: which vertical, buyer type, and product module combination represents the fastest path to $1M ARR — and which represents the biggest long-term opportunity?

SECTION 1: VERTICAL OPPORTUNITY MATRIX
Score each vertical on 5 dimensions (1–5 scale):
- Problem severity: How acute is the energy management pain?
- Buyer readiness: How ready are these buyers to evaluate and pay for software?
- Deal size potential: What ACV is defensible?
- Competitive intensity (inverted: 5 = low competition)
- Data access: How hard to get the data needed to deliver value?

Verticals: Higher Education | Healthcare | Multi-Site Restaurant | Hospitality | Commercial Real Estate | Energy Services

For every score: cite the specific evidence. Do not use generic market logic.

SECTION 2: BUYER PERSONA MATRIX
For each persona (energy ops manager, sustainability director, finance/budget owner, C-suite, procurement):
- How often they buy software vs. have it decided for them
- Typical budget authority
- Evidence-based buying triggers
- Access strategy

SECTION 3: MODULE × VERTICAL FIT
Grid: which product modules create the strongest value in which verticals. Evidence-based only.

SECTION 4: PATH TO $1M ARR
What is the most defensible sequence of wins? What does the first cohort of paying customers look like? ACV? Sales cycle?

SECTION 5: LONG-TERM PLATFORM OPPORTUNITY
Where does Clear Current's market position go in 18 months if the beachhead succeeds?"""

build_deliverable("D5", "Market Opportunity Heatmap", D5_CORPUS, D5_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 6 — COMPETITIVE INTELLIGENCE BRIEF
# Synthesis Brief + James Park (competitive from interviews)
# + Victor Hale secondary (competitive research)
# ---------------------------------------------------------------------------

D6_CORPUS = make_corpus(
    20000,
    (P, "James_Park",   15000),
    (P, "Morgan_Chen",  12000),
    (S, "Victor_Hale",  15000),
)

D6_TASK = """Build the Complete Competitive Intelligence Brief for Clear Current Technologies.

SECTION 1: COMPETITIVE LANDSCAPE OVERVIEW
The current state of the commercial energy management software market — key segments, acquisition activity, venture investment, consolidation trends.

SECTION 2: COMPETITOR PROFILES
One full profile per named competitor. Prioritize: EnergyCAP, Arcadia, WatchWire/Tango, Energy Print, BrainBox AI, PEER AI/Constellation, ENGIE Impact, Energy Toolbase.

For each:
- Company type: (public/private/PE-backed/VC-backed)
- Primary market: (verticals and customer size)
- Core product capabilities: (what it actually does)
- AI/automation capability: (documented vs. claimed)
- Pricing model: (if known)
- Known weaknesses: (documented from research, not assumption)
- Recent moves: (acquisitions, pivots, funding)
- Clear Current's win condition: (exactly how Clear Current beats this competitor, with evidence)
- Quote from primary research: (what an interviewee actually said about this tool)

SECTION 3: COMPETITIVE WHITE SPACE MAP
Where is the market genuinely underserved? Which gaps are confirmed by real customer pain vs. theoretical?

SECTION 4: POSITIONING STATEMENT OPTIONS
Three positioning options from most to least aggressive. For each: the claim, the evidence that supports it, what can be challenged and how to respond.

SECTION 5: COMPETITIVE OBJECTION RESPONSES
The 5 most common competitive objections Clear Current will face, with evidence-based responses.

SECTION 6: INVESTOR COMPETITIVE NARRATIVE
How to tell the competitive story to a sophisticated energy tech investor who has seen 30 pitches in this space."""

build_deliverable("D6", "Competitive Intelligence Brief", D6_CORPUS, D6_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 7 — INVESTOR NARRATIVE & PITCH FRAMEWORK
# Synthesis Brief + Jordan Rivers (investor readiness) + Dana Park secondary (TAM)
# + Priya Nair secondary (billing error stats)
# ---------------------------------------------------------------------------

D7_CORPUS = make_corpus(
    20000,
    (P, "Jordan_Rivers", 15000),
    (S, "Dana_Park",     12000),
    (S, "Priya_Nair",    12000),
)

D7_TASK = """Build the Investor Narrative Framework for Clear Current Technologies' May 2026 seed fundraise.

SECTION 1: THE NARRATIVE ARC
The complete story of why Clear Current exists and why now — in investor-ready language. 3–4 paragraphs. Every claim backed by specific evidence.

SECTION 2: THE MARKET OPPORTUNITY — DEFENSIBLE VERSION
The TAM/SAM/SOM story using only verified statistics. Show your work: what the number is, where it comes from, why it holds up under diligence. Flag any numbers that need additional verification.

SECTION 3: THE CUSTOMER EVIDENCE
The 8 most compelling data points for investors. For each: the finding, the source, and why it proves product-market fit or market size.

SECTION 4: THE 3 QUOTES THAT BELONG IN THE PITCH
Verbatim. Speaker name, title, company. Why this quote belongs on a slide.

SECTION 5: THE PILOT DATA STORY
Marc Spieler's $10M in identified billing errors across 12 pilots. Build the complete investor-ready version. What does it say about value delivery? What does it imply about ARR potential? What caveats maintain credibility?

SECTION 6: INVESTOR OBJECTION FRAMEWORK
The 7 most common objections a seed investor will raise about an AI energy management SaaS company. For each: the standard objection, how the research addresses it, what remains unanswered, the recommended response.

SECTION 7: COMPETITIVE MOAT ARGUMENT
What is Clear Current's defensible advantage 3 years from now? Data network effects, switching costs, proprietary data assets, workflow integration depth.

SECTION 8: GAPS IN THE INVESTOR STORY
What questions will investors ask that current research cannot answer? What additional proof points should John and Dan build before May 2026?"""

build_deliverable("D7", "Investor Narrative and Pitch Framework", D7_CORPUS, D7_TASK)

# ---------------------------------------------------------------------------
# DELIVERABLE 8 — GTM STRATEGY PLAYBOOK
# Synthesis Brief + James Park (GTM strategy) + Carlos Mendez secondary (GTM intel)
# ---------------------------------------------------------------------------

D8_CORPUS = make_corpus(
    20000,
    (P, "James_Park",   15000),
    (P, "Nina_Patel",   12000),
    (S, "Carlos_Mendez", 15000),
)

D8_TASK = """Build the GTM Strategy Playbook for Clear Current Technologies.

This is an operational document — specific, concrete, and actionable. John Reuter and the team should be able to read this and know exactly what to do in the next 90 days to close their first five paying customers.

SECTION 1: IDEAL CUSTOMER PROFILE (ICP)
One ICP per vertical for the three priority verticals. For each:
- Company description, energy spend range, decision-maker titles (specific names from research as examples)
- Buying trigger that makes them ready NOW
- Disqualifiers (what makes a prospect NOT a fit)
- Ideal pilot structure

SECTION 2: THE THREE GTM TRACKS (Marc Spieler's framework, evidence-validated)
Track 1: Land via Billing Error Audit ROI
Track 2: Expand via Anomaly Alerting
Track 3: Retain via Regulatory Intelligence

For each track: entry message, entry evidence (specific quotes), expansion trigger, retention lever.

SECTION 3: SALES PROCESS & CYCLE
Based on what interviewees said about how they buy software: who is involved, what do they need to see to say yes, what kills deals, typical timeline.

SECTION 4: PRICING MODEL RECOMMENDATION
Evidence-based pricing: model (per-location, per-user, utility-spend percentage, flat enterprise), price range, pilot structure. What did interviewees say about willingness to pay?

SECTION 5: CHANNEL STRATEGY
Direct vs. ESCO/energy consultant channel. Under what conditions does the ESCO channel accelerate vs. complicate? Specific partner candidates from the interviews.

SECTION 6: DATA ONBOARDING PLAYBOOK
Based on Nina Patel's data architecture analysis: the top 5 onboarding obstacles, how to address each, and what Clear Current must build to make onboarding a competitive advantage.

SECTION 7: THE FIRST 90-DAY SALES PLAYBOOK
Week-by-week — what John and Dan should actually do to convert pipeline to pilots to paying customers.

SECTION 8: KEY METRICS TO TRACK
The 5–7 leading indicators that will tell John and Dan if GTM is working within 60 days."""

build_deliverable("D8", "GTM Strategy Playbook", D8_CORPUS, D8_TASK)

# ---------------------------------------------------------------------------
# DECISION BRIEF — CEO/CPO SYNTHESIS
# Synthesis Brief + all 21 agents at 2K chars each
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("DECISION BRIEF — CEO/CPO SYNTHESIS")
print("="*70)

BRIEF_SPECS = [
    (P, "Dr._Sarah_Chen",    2000),
    (P, "Marcus_Williams",   2000),
    (P, "Elena_Rodriguez",   2000),
    (P, "James_Park",        2000),
    (P, "Dr._Patricia_Nash", 2000),
    (P, "Ray_Kowalski",      2000),
    (P, "Ava_Mitchell",      2000),
    (P, "David_Okonkwo",     2000),
    (P, "Lisa_Huang",        2000),
    (P, "Tom_Reeves",        2000),
    (P, "Carmen_Vega",       2000),
    (P, "Alex_Sterling",     2000),
    (P, "Nina_Patel",        2000),
    (P, "Morgan_Chen",       2000),
    (P, "Jordan_Rivers",     2000),
    (S, "Victor_Hale",       2000),
    (S, "Dana_Park",         2000),
    (S, "Priya_Nair",        2000),
    (S, "Simone_Laurent",    2000),
    (S, "Carlos_Mendez",     2000),
    (S, "Felix_Werner",      2000),
]

BRIEF_CORPUS = make_corpus(20000, *BRIEF_SPECS)

BRIEF_TASK = """Write the Executive Decision Brief for John Reuter (CEO) and Dan Schreiber (CPO) of Clear Current Technologies.

This brief integrates findings from 15 primary research agents and 6 secondary research agents, cross-referenced against the Research Synthesis Brief. It is written for people who have already done the work. It surfaces what the full synthesis reveals that no single agent could see, and gives them the exact language they need for investors and customers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: THE 5 THINGS THE RESEARCH PROVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Not "suggests" — proves. Multi-source evidence chain for each. Why it matters for strategy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: THE 3 THINGS THE RESEARCH DOES NOT ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The most important open questions. What John and Dan should do to get the answers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: THE BEACHHEAD RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Which vertical and buyer type gives Clear Current the fastest path to 5 paying customers? Specific ICP. Entry product. Pilot structure. Show your reasoning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: THE MODULE PRIORITY DECISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
What is the first module Dan should pour engineering effort into, and why? Trade-offs vs. alternatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: WHAT CHANGES IF YOU ARE WRONG ABOUT X
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The three assumptions with highest consequence if wrong. Evidence base for each. What changes if the assumption is false.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: 30-DAY DECISION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decisions John and Dan must make in the next 30 days, ranked by urgency. For each: options, evidence, recommended choice, owner.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: THE SINGLE MOST IMPORTANT THING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
If John and Dan can only act on one thing from this entire research program, what is it? State it directly. Don't hedge."""

print(f"\n{'='*60}")
print("DECISION BRIEF")
print(f"Time: {datetime.datetime.now().strftime('%H:%M:%S')}")
print(f"{'='*60}")
try:
    output = call_with_cache(BRIEF_CORPUS, BRIEF_TASK, system=SYNTHESIS_SYSTEM, max_tokens=16000)
    fpath = SYNTHESIS_OUT / "00_decision_brief.md"
    save_output(fpath,
        f"# Clear Current Technologies — Executive Decision Brief\n"
        f"# Generated: {datetime.datetime.now().isoformat()}\n\n---\n\n",
        output)
except Exception as e:
    print(f"✗ FAILED: {e}")

# ---------------------------------------------------------------------------
# DONE
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("PIPELINE 3 COMPLETE — ALL DELIVERABLES GENERATED")
print("="*70)
files = list(SYNTHESIS_OUT.rglob("*.md"))
print(f"\nOutput files: {len(files)}")
for f in sorted(files):
    print(f"  {f.name}  ({f.stat().st_size // 1024} KB)")
print(f"\n✓ All outputs → {SYNTHESIS_OUT}")
print("\nFull research pipeline complete.")
print("Primary outputs:   outputs/primary/")
print("Secondary outputs: outputs/secondary/")
print("Deliverables:      outputs/synthesis/")
