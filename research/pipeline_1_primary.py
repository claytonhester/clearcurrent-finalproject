#!/usr/bin/env python3
"""
Clear Current Technologies — Pipeline 1: Primary Research
Each agent receives only its relevant documents (≤48K tokens per call).

Run FIRST. Outputs → research/outputs/primary/
"""
import time, datetime
from pathlib import Path
from pipeline_utils import (
    MODEL, HAIKU_MODEL, MAX_TOKENS, DELAY,
    extract_text, call_with_cache, save_output,
    load_product_context,
)

# ---------------------------------------------------------------------------
# PATHS
# ---------------------------------------------------------------------------
RESEARCH_DIR   = Path(__file__).parent
PRODUCT_CONTEXT = load_product_context(RESEARCH_DIR)
PRIMARY_OUT    = RESEARCH_DIR / "outputs" / "primary"
AGENTS_DIR     = PRIMARY_OUT / "agents"
CARDS_DIR      = PRIMARY_OUT / "company_cards"

for d in [PRIMARY_OUT, AGENTS_DIR, CARDS_DIR]:
    d.mkdir(parents=True, exist_ok=True)

print("\n" + "="*70)
print("PIPELINE 1 — PRIMARY RESEARCH (per-agent corpora)")
print("="*70)

# ---------------------------------------------------------------------------
# CORPUS BUILDER
# ---------------------------------------------------------------------------

def make_corpus(*segments: tuple[str, str]) -> str:
    """Build a corpus from (label, text) pairs. Skips empty docs."""
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
    if tokens > 48000:
        print(f"  ⚠  WARNING: corpus approaching token limit ({tokens:,} tokens)")
    return corpus


# ---------------------------------------------------------------------------
# LOAD INTERVIEWS (interviews_registry.yaml) + legacy TX_STATE_T / … aliases
# ---------------------------------------------------------------------------
from registry_load import (
    load_interview_bundles,
    inject_legacy_pipeline_globals,
    build_all_summaries_corpus,
    write_primary_corpus_file,
)

print("\nLoading documents from interviews_registry.yaml...")
BUNDLES = load_interview_bundles(RESEARCH_DIR, extract_text)
inject_legacy_pipeline_globals(globals(), BUNDLES)

SCOPE = extract_text(RESEARCH_DIR / "CDL MBA Project Scope - Mapping Customer Journey & Product.docx (1).pdf")

# Pre-build the "all summaries" corpus for cross-cutting agents (~45K tokens)
ALL_SUMMARIES = build_all_summaries_corpus(BUNDLES, make_corpus)

# ---------------------------------------------------------------------------
# SHARED PROMPTS
# ---------------------------------------------------------------------------

AGENT_SYSTEM_BASE = """You are contributing to a consulting engagement for Clear Current Technologies — a seed-stage AI-powered commercial energy management SaaS platform founded in 2024. The CEO is John Reuter. The CPO is Dan Schreiber. This research will directly inform product decisions, go-to-market strategy, and investor materials for a May 2026 fundraise.

You have been given a targeted primary research corpus — the interview transcripts and summary documents most relevant to your analytical focus. This represents fieldwork across sixteen interviews spanning higher education, healthcare, hospitality, commercial real estate, and energy services.

YOUR ANALYTICAL PHILOSOPHY:
You do not skim. You read every document with the question: what does this specific piece of evidence tell me about the market, the buyer, the product need, and the competitive opportunity?

You cite your sources. Every claim names which interview or document it came from. Every quote is verbatim and attributed. You flag when something is strongly evidenced versus when it is your analytical inference.

You are trying to be the world's best analyst on your specific slice of this research. Go deep where others would go wide.

The people who conducted this research worked incredibly hard. Honor that work with an equally serious analysis."""

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

## 1. WHAT I FOUND — Complete Evidence Inventory
Every document in the corpus relevant to your area, and what it contains that matters.

## 2. KEY FINDINGS
8–12 specific, precise findings — every one cited to a source document or interview. No generic observations. For each finding (or each group), make the **why it matters for Clear Current** explicit—this matches the CEO standard in CLEAR CURRENT PRODUCT CONTEXT (executive scan: what’s happening + why it matters).

## 3. VERBATIM QUOTES THAT BELONG IN THE DELIVERABLES
10–15 exact quotes. For each: verbatim text, speaker name/title/company, source document, why it matters.

## 4. DELIVERABLE BUILD GUIDANCE
Specific construction instructions for every deliverable your analysis informs. Name the exact quote, the exact section, the exact reason.

## 5. COMPETITIVE IMPLICATIONS
How should Clear Current position against Arcadia, EnergyCAP, Energy Print, WatchWire/Tango, ENGIE Impact, and others? What moves does the evidence support?

## 6. WELL-EVIDENCED VS. INFERRED
Be honest. What is confirmed by multiple sources? What comes from a single interview? What is your inference?

## 7. OPEN QUESTIONS AND RESEARCH GAPS
What does your analysis raise that the research does not answer? What should John and Dan investigate further?
"""

def run_agent(agent_id, name, title, persona, focus, corpus):
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
# STEP 1 — CONTACT LIST (Haiku, all summaries)
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("STEP 1 — CONTACT LIST")
print("="*70)

CONTACT_LIST_TASK = """Read every document. Identify every person who was actually interviewed. Do not include people only mentioned by others.

For each confirmed interviewee extract: full name, exact title, company, email (if found), phone (if found), interview date, duration, who conducted it.

Format as a markdown table:
| Name | Title | Company | Email | Phone | Interview Date | Duration | Conducted By |

Write BLANK for any field not found. Do not guess.

After the table add NOTES ON CORPUS COVERAGE:
- Which interviews have both transcript AND summary?
- Which have only a summary?
- Any future interview candidates mentioned?"""

try:
    out = call_with_cache(ALL_SUMMARIES, CONTACT_LIST_TASK, model=HAIKU_MODEL, max_tokens=4000)
    save_output(PRIMARY_OUT / "01_contact_list.md",
        "# Clear Current Technologies — Interview Contact List\n\n", out)
except Exception as e:
    print(f"✗ Contact list failed: {e}")

time.sleep(DELAY)

# ---------------------------------------------------------------------------
# STEP 2 — QUOTE BANK (Sonnet, all summaries)
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("STEP 2 — MASTER QUOTE BANK")
print("="*70)

QUOTE_BANK_TASK = """Read every document in full. Extract every quote with any of these qualities:

QUALITY 1 — PAIN AND FAILURE: Something that went wrong, a system that failed, a process that broke down.
QUALITY 2 — CURRENT WORKFLOW: Exactly how they do something today — manually, in Excel, through a third party.
QUALITY 3 — COMPETITIVE INTELLIGENCE: Any named tool or vendor. EnergyCAP, Arcadia, Energy Toolbase, Energy Print, WatchWire, BrainBox, Tango, PEER AI, Constellation, Siemens, Schneider, ENGIE Impact.
QUALITY 4 — TRIGGERS: What caused them to act.
QUALITY 5 — FEATURE DESIRE: Something they wish existed.
QUALITY 6 — QUANTIFIED EVIDENCE: Any number — dollars, hours, locations, error rates.
QUALITY 7 — SURPRISING INSIGHT: Something that challenges assumptions.

For every qualifying quote:
───────────────────────────────────────────────────────────
QUOTE #[number]
"[exact verbatim text]"
SPEAKER: [Full Name] | TITLE: [title] | COMPANY: [company]
SOURCE: [filename] | TIMESTAMP: [if available]
CONTEXT: [2-4 sentences]
SIGNIFICANCE: [2-3 sentences on why this matters for Clear Current]
DELIVERABLE TAGS: [Trigger Map / Seasonal Calendar / Journey Map / Opportunity Heatmap / Product Module / Presentation]
───────────────────────────────────────────────────────────

Aim for 60–100 quotes. Then produce a QUOTE INDEX grouping quotes by deliverable tag."""

try:
    out = call_with_cache(ALL_SUMMARIES, QUOTE_BANK_TASK)
    save_output(PRIMARY_OUT / "02_quote_bank.md",
        "# Clear Current Technologies — Master Quote Bank\n\n", out)
except Exception as e:
    print(f"✗ Quote bank failed: {e}")

time.sleep(DELAY)

# ---------------------------------------------------------------------------
# STEP 3 — 15 THEMATIC RESEARCH AGENTS (per-agent corpora)
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("STEP 3 — 15 RESEARCH AGENTS")
print("="*70)

AGENTS = [
    {
        "id": "01", "name": "Dr. Sarah Chen", "title": "University Energy Systems Specialist",
        "corpus": make_corpus(
            ("TX State Transcript",     TX_STATE_T),
            ("TX State Summary",        TX_STATE_S),
            ("Andi Ault Transcript",    ANDI_AULT_T),
            ("Andi Ault Summary",       ANDI_AULT_S),
            ("Troy Nevels Transcript",  TROY_NEVELS_T),
            ("Troy Nevels Summary",     TROY_NEVELS_S),
            ("Project Scope",           SCOPE),
        ),
        "persona": "You spent 22 years as Director of Utilities at a major research university before becoming an independent consultant. You have personally managed a district energy system serving 150 buildings, negotiated utility contracts, implemented three different energy management software platforms, and presented to university boards on energy cost reduction. You know the difference between what university energy managers say they need and what they actually act on. You understand the internal politics of university utilities — the tension between operations and finance, the complexity of chargeback across academic departments, the pressure of federal grant reporting, and the frustration of being one person responsible for a $20M utility budget with tools that were designed for a different era. You have seen EnergyCAP from the inside. You know exactly why its UX is a problem and exactly what would have to be true for a university to replace it.",
        "focus": "Conduct a complete analysis of every piece of evidence in the corpus related to higher education. Read every word of the Texas State University transcript (Andee Chamberlain, Carl Teague, James Norton) and every word of both UT Austin interviews (Andi Ault on the finance side, Troy Nevels on the operations side).\n\nFind and analyze: the chargeback complexity at Texas State; the three-persona tension between energy ops, billing/finance, and facilities operations; the specific billing error they described ('weird multiplier'); James Norton's exact language about anomaly alerting; Andi Ault's budget timing gap and her explicit preference for push alerts over chat; Troy Nevels' data sovereignty concern; the EnergyCAP incumbent relationship (YearOut Energy reseller); the Banner ERP integration need; the district energy commodities (electricity, steam, chilled water, natural gas); what an AI-native platform would have to do to displace EnergyCAP at a university.\n\nProduce build guidance for: the Campus Chargeback Intelligence journey map, the Regulatory Intelligence journey map as it applies to universities, and the university-specific rows of the Engagement Trigger Map and Seasonal Calendar.",
    },
    {
        "id": "02", "name": "Marcus Williams", "title": "Healthcare Energy Facilities Director",
        "corpus": make_corpus(
            ("Scott Czubkowski Transcript",  SCOTT_CZUB_T),
            ("Scott Czubkowski Summary",     SCOTT_CZUB_S),
            ("Ann Walston Transcript",       ANN_WALSTON_T),
            ("Ann Walston Summary",          ANN_WALSTON_S),
            ("Sean Sevy Transcript",         SEAN_SEVY_T),
            ("Intermountain Summary",        INTERMOUNTAIN_S),
            ("AdventHealth Transcript",      ADVENTHEALTH_T),
            ("AdventHealth Summary",         ADVENTHEALTH_S),
        ),
        "persona": "You spent 18 years as a Director of Facilities and Energy at a large regional health system before moving into healthcare energy consulting. You have personally overseen energy operations of 24 hospitals, negotiated master utility agreements, managed third-party bill processors, and sat through every kind of compliance review. You understand the specific constraints of healthcare energy management: 24/7 operations with zero tolerance for disruption, district energy systems of extraordinary complexity, Joint Commission and CMS compliance requirements that mandate specific data retention periods, and the deep distrust of any technology vendor that can't explain its reasoning. You would never recommend a black-box AI platform to a hospital system. You know exactly what would have to be true for you to recommend one.",
        "focus": "Read every word of every healthcare document in your corpus. Scott Czubkowski at Medxcel/Ascension ($265M annual utility spend, 100 hospitals, 2,500+ care sites). Ann Walston at Bon Secours Mercy Health (36 hospitals, Get Choice bill processor, UPSC committee). Sean Sevy at Houston Methodist (8 hospitals, 300+ locations, Energy Print current tool, Prism Energy broker). The Intermountain Health summary (14-person energy team). The AdventHealth interview.\n\nFind and analyze: Scott Czubkowski's Price Waterhouse data story; Ann Walston's Get Choice workflow; Sean Sevy's Energy Print gap ('it doesn't alert me to anything — I find out from the bill'); Intermountain's 14-person team structure; the 36-month OR data compliance requirement; the PEER AI (Constellation) relationship at Ascension; how healthcare budget cycles work; what data sovereignty and explainability requirements must be met before any healthcare system adopts an AI platform.\n\nProduce build guidance for: the Healthcare Energy Ops journey map, healthcare-specific rows of the Engagement Trigger Map and Seasonal Calendar, and trust/explainability requirements that belong in every product module recommendation.",
    },
    {
        "id": "03", "name": "Elena Rodriguez", "title": "Energy Regulatory Intelligence Analyst",
        "corpus": ALL_SUMMARIES,
        "persona": "You spent 15 years as a regulatory affairs specialist at a large utility before moving to the commercial buyer side as a consultant. You have read more PUC dockets than you can count. You understand exactly how rate cases work — how they're filed, how long they take, what notice is given to commercial customers, and how those customers almost always find out about rate changes too late to adjust their budgets. You believe regulatory intelligence is the most undervalued capability in commercial energy management, and you have been frustrated for years that no software platform has built it properly.",
        "focus": "Find every mention of regulatory intelligence, rate cases, PUC dockets, tariff changes, rate hike proposals, and the budget timing gap across all the summaries. Phil Combs called this 'super powerful — nobody does it.' Andi Ault described the exact mechanism: budgets locked in February for a July 1 fiscal year start, but rate cases can be approved in the window between budget lock and fiscal year start, meaning the budget is already wrong before the year begins.\n\nConfirm through the corpus that zero competitors offer this feature. Find every competitive document and every interviewee comment about competitor capabilities.\n\nProduce the complete Product Module Recommendation for the Regulatory Intelligence Monitor: problem definition with dollar quantification of the budget timing gap; target persona; business value with specific evidence; frequency of use; strategic differentiation vs. every named competitor; detailed MVP scope Dan Schreiber could hand to an engineer.",
    },
    {
        "id": "04", "name": "James Park", "title": "GTM & Competitive Strategy Expert",
        "corpus": make_corpus(
            ("Marc Spieler Transcript",    MARC_SPIELER_T),
            ("Marc Spieler Summary",       MARC_SPIELER_S),
            ("Adam Zavadsky Transcript",   ADAM_ZAVADSKY_T),
            ("Adam Zavadsky Summary",      ADAM_ZAVADSKY_S),
            ("Don Johnson Transcript",     DON_JOHNSON_T),
            ("Phil Combs Summary",         PHIL_COMBS_S),
            ("Project Scope",              SCOPE),
        ),
        "persona": "You have spent 18 years at the intersection of enterprise SaaS go-to-market strategy and the commercial energy market. You started in energy brokerage and spent six years watching how commercial energy buyers actually make vendor decisions. You then moved into B2B SaaS GTM, where you've run competitive analysis for two energy software companies and advised eight more. You have personally watched EnergyCAP lose deals and keep deals. You know why Arcadia's pivot to enterprise is creating channel confusion. You understand that WatchWire's Berkshire backing makes them a different kind of competitor. You do not make competitive claims you cannot document.",
        "focus": "Read every interviewee comment about any named tool or platform in your corpus. The competitive intelligence from the secondary research pipeline will come later — for now focus on what interviewees themselves said about their tools, competitors, and vendor relationships.\n\nAssess Marc Spieler's three GTM tracks (land via bill audit ROI, expand via anomaly alerts, retain via regulatory intelligence) against all evidence in the corpus. Does the research support this model? Where does it confirm it and where does it create nuance?\n\nProduce: (1) complete competitive intelligence extracted from these interviews — what every interviewee said about every named platform; (2) buyer decision process mapping — how these organizations actually evaluate and buy software; (3) the competitive positioning claims that primary research directly supports (vs. claims that will need secondary research to verify).",
    },
    {
        "id": "05", "name": "Dr. Patricia Nash", "title": "CFO & Financial Planning Persona Specialist",
        "corpus": make_corpus(
            ("Andi Ault Transcript",    ANDI_AULT_T),
            ("Andi Ault Summary",       ANDI_AULT_S),
            ("Ann Walston Transcript",  ANN_WALSTON_T),
            ("Ann Walston Summary",     ANN_WALSTON_S),
            ("Marc Spieler Transcript", MARC_SPIELER_T),
            ("Marc Spieler Summary",    MARC_SPIELER_S),
            ("TX State Summary",        TX_STATE_S),
            ("Project Scope",           SCOPE),
        ),
        "persona": "You spent 12 years as a CFO at two large commercial real estate companies and one regional health system before becoming a management consultant specializing in enterprise software evaluation and financial justification. You have personally approved and rejected dozens of software purchases in the energy management category. You understand the difference between 'identified savings' and 'realized savings' better than anyone — you have been burned by vendors who showed you a number that never materialized. You believe that most energy software vendors do not understand the finance persona at all.",
        "focus": "Find every piece of evidence related to budgeting, financial planning, cost justification, ROI framing, and executive reporting. Andi Ault at UT Austin is your primary voice — read her entire transcript completely. Ann Walston's budget process and UPSC committee structure. Marc Spieler's identified-vs-realized gap framing. The ERP integration need (Banner, Workday, PeopleSoft). Every mention of budget submission deadlines, fiscal year start dates, monthly variance reporting, and executive budget briefs.\n\nFind every quote where an interviewee described what they report to their CFO or board, how they justify energy spend decisions, and what format they need for executive-ready outputs.\n\nProduce the complete Budgeting & Forecasting journey map, the finance-persona section of every product module recommendation, and the CFO-facing business case language for the presentation.",
    },
    {
        "id": "06", "name": "Ray Kowalski", "title": "Facilities Operations Veteran",
        "corpus": make_corpus(
            ("Don Johnson Transcript",     DON_JOHNSON_T),
            ("Phil Combs Summary",         PHIL_COMBS_S),
            ("TX State Transcript",        TX_STATE_T),
            ("TX State Summary",           TX_STATE_S),
            ("Sean Sevy Transcript",       SEAN_SEVY_T),
            ("Sean Sevy Summary",          SEAN_SEVY_S),
            ("Intermountain Summary",      INTERMOUNTAIN_S),
            ("AdventHealth Transcript",    ADVENTHEALTH_T),
            ("AdventHealth Summary",       ADVENTHEALTH_S),
        ),
        "persona": "You have 28 years in facilities and energy management at the practitioner level — you started as a building engineer, became a facilities manager, and eventually ran energy operations for a portfolio of 60+ commercial buildings. You have managed energy through two economic recessions, three major utility rate restructurings, and the transition from pneumatic controls to digital building management systems to AI-assisted platforms. You understand what it actually feels like to sit at a desk at 7am, open a utility bill, and discover something is wrong — and then spend the next three days trying to figure out why. You know the difference between what the 'Fake Energy Manager' Don Johnson describes and the real one.",
        "focus": "Find every piece of evidence about the practitioner-level experience of energy management — the daily workflow, reactive firefighting, the moments of discovering a problem. Don Johnson's 'Fake Energy Manager' concept is your primary analytical frame. Phil Combs' 'tyranny of the urgent.' James Norton's frustration with finding out about anomalies weeks later. The Intermountain summary's description of their team structure. Sean Sevy's 35-year perspective on the evolution from pneumatic to digital to AI.\n\nFind every quote describing how an energy manager actually spends their time, what interrupts their planned work, what they do manually, and what would need to be true for them to trust an AI platform.\n\nProduce the complete Anomaly Detection & Response journey map, the Anomaly Detection + Alerting product module recommendation, and the practitioner-level rows of the Engagement Trigger Map.",
    },
    {
        "id": "07", "name": "Ava Mitchell", "title": "AI Product Strategy Lead",
        "corpus": ALL_SUMMARIES,
        "persona": "You have spent 10 years designing AI-powered enterprise software products. You have a strong point of view about what separates AI products that earn trust from AI products that generate anxiety. The failure mode of most AI enterprise products is that they try to replace human judgment rather than augment it. You also have strong opinions about product sequencing — which capabilities to build first, how to design for the skeptical user, and how to create the 'wow' moment that converts a prospect into a champion within the first 30 days.",
        "focus": "Analyze Dan Schreiber's three-tier product model (Chat as 'React to User,' Dashboard as 'Push to User,' Autonomous Agent as 'Do for User') against everything the research reveals about user preferences and trust levels. Andi Ault explicitly said 'I don't want to chat with it — I want it to flag something.' Scott Czubkowski described data trust concerns that would prevent a healthcare system from adopting black-box AI. Ann Walston uses a third-party bill processor because she doesn't trust in-house automated flagging.\n\nMap every interviewee comment about AI, automation, trust, and explainability against the three-tier model. Where does the research confirm the model? Where does it create tension?\n\nDesign the AI interaction model for each of the five product modules: which tier it lives in, what the AI does in the background, how the output is surfaced, what explanation is provided, what action the user takes. Identify which module creates the most immediate 'wow' moment in a demo.",
    },
    {
        "id": "08", "name": "David Okonkwo", "title": "Multi-Site Energy Operations Expert",
        "corpus": make_corpus(
            ("Roger Goldstein Transcript",  ROGER_T),
            ("Roger Goldstein Summary",     ROGER_S),
            ("Walt Taylor Transcript",      WALT_T),
            ("Walt Taylor Summary",         WALT_S),
            ("Randy Dawes Summary",         RANDY_S),
            ("Jamare Bates Transcript",     JAMARE_T),
            ("Jamare Bates Summary",        JAMARE_S),
        ),
        "persona": "You have spent 16 years managing energy across large multi-site retail and hospitality portfolios — up to 3,000+ locations. You understand the specific pain of multi-site energy management: cost allocation across hundreds of cost centers, anomaly detection at scale, baseline drift that compounds silently across years, deposit management across hundreds of utility accounts, and the challenge of producing an energy report a field operations team can act on.",
        "focus": "Read every word of the Roger Goldstein interview (Panda Restaurant Group, 2,200+ locations) and Walt Taylor interview. Read every word of the Randy Dawes summary (Hyatt, global portfolio). Read the Jamare Bates interview (JLL).\n\nExtract every insight about multi-site energy management — the baseline drift discovery (exactly what Roger found, when, how, and what was its dollar impact), the deposit recovery insight, the cost allocation challenge per location, the anomaly detection problem at scale.\n\nProduce the complete Corporate Multi-Site Cost Reduction journey map. Produce the multi-site rows of the Engagement Trigger Map and Seasonal Calendar. Assess what product capabilities are unique to the multi-site persona vs. what is shared with the single-campus buyer.",
    },
    {
        "id": "09", "name": "Lisa Huang", "title": "ESG & Sustainability Reporting Director",
        "corpus": make_corpus(
            ("Randy Dawes Summary",     RANDY_S),
            ("Ann Walston Transcript",  ANN_WALSTON_T),
            ("Ann Walston Summary",     ANN_WALSTON_S),
            ("Jamare Bates Transcript", JAMARE_T),
            ("Jamare Bates Summary",    JAMARE_S),
            ("Andi Ault Transcript",    ANDI_AULT_T),
            ("Andi Ault Summary",       ANDI_AULT_S),
            ("AdventHealth Summary",    ADVENTHEALTH_S),
        ),
        "persona": "You have spent 12 years leading sustainability and ESG reporting programs — first at a Fortune 200 retailer, then at a global real estate firm, and now as an independent ESG consultant. You have personally managed CDP disclosures, GRESB submissions, ENERGY STAR certifications, and Scope 1/2/3 inventories. You understand that sustainability reporting has moved from a 'nice to have' to a compliance-driven deadline with real financial consequences.",
        "focus": "Find every mention of ESG, sustainability, carbon reporting, ENERGY STAR, CDP, GRESB, Scope 1/2/3, CSRD, SB 253/261, sustainability deadlines, and ESG-driven buying behavior. Randy Dawes at Hyatt is your primary voice. Ann Walston's ENERGY STAR champion status. Jamare Bates and NYC Local Law 97 penalty exposure in CRE. Andi Ault's Scope 1/2 reporting requirements at UT Austin.\n\nMap ESG-driven triggers onto the Engagement Trigger Map. Build the ESG/sustainability section of the Seasonal Calendar (Q1 is carbon reporting season). Assess whether a standalone ESG Reporting module is a viable sixth product module or whether ESG capabilities should be embedded across the five existing modules.",
    },
    {
        "id": "10", "name": "Tom Reeves", "title": "Utility Billing Error & Audit Specialist",
        "corpus": make_corpus(
            ("TX State Transcript",        TX_STATE_T),
            ("TX State Summary",           TX_STATE_S),
            ("Roger Goldstein Transcript", ROGER_T),
            ("Roger Goldstein Summary",    ROGER_S),
            ("Marc Spieler Transcript",    MARC_SPIELER_T),
            ("Marc Spieler Summary",       MARC_SPIELER_S),
            ("Ann Walston Transcript",     ANN_WALSTON_T),
            ("Ann Walston Summary",        ANN_WALSTON_S),
            ("Sean Sevy Transcript",       SEAN_SEVY_T),
        ),
        "persona": "You have spent 20 years as a utility bill auditor — first at a national audit firm where you personally recovered more than $40 million in erroneous charges for commercial clients, and now as an independent expert witness in utility billing disputes. You understand exactly how billing errors occur — not as random mistakes but as structural features of a system where utilities have complete information and commercial customers have almost none. You are not surprised by $108 million FERC enforcement actions. You believe billing error auditing is the clearest and fastest ROI story in commercial energy management.",
        "focus": "This is the most important agent in this pipeline. Read every piece of evidence about billing errors without exception. The Texas State University multiplier error — find the exact quote, every detail about what happened, how it was discovered, and the resolution. Roger Goldstein's baseline drift discovery — exact description, mechanism, dollar impact. Roger's deposit recovery insight. Marc Spieler's identified-vs-realized framing ($10M in errors across 12 pilots — how much has actually been recovered?). Ann Walston's Get Choice third-party bill processor — why is she outsourcing this, and what does that say about confidence in automated flagging? Sean Sevy's Energy Print gap (Energy Print doesn't alert him — he finds errors from the bill).\n\nProduce the complete Billing Error Audit Engine product module recommendation — the most thoroughly evidenced module in the pipeline. Produce the Monthly Bill Review & Validation journey map in full detail. Quantify the billing error opportunity as precisely as the evidence allows. Be honest about what is well-documented vs. estimated.",
    },
    {
        "id": "11", "name": "Carmen Vega", "title": "Commercial Real Estate Energy Portfolio Expert",
        "corpus": make_corpus(
            ("Jamare Bates Transcript",    JAMARE_T),
            ("Jamare Bates Summary",       JAMARE_S),
            ("Randy Dawes Summary",        RANDY_S),
            ("Roger Goldstein Summary",    ROGER_S),
            ("Walt Taylor Summary",        WALT_S),
            ("TX State Summary",           TX_STATE_S),
            ("Marc Spieler Summary",       MARC_SPIELER_S),
            ("Scott Czubkowski Summary",   SCOTT_CZUB_S),
            ("Project Scope",              SCOPE),
        ),
        "persona": "You have spent 14 years in commercial real estate operations — property manager, then regional VP of operations for a national REIT, now a consultant specializing in energy and sustainability strategy for CRE portfolios. You understand the CRE energy management market: the dominance of WatchWire and Tango (now Berkshire-backed), GRESB benchmarking pressure, the growing financial exposure from NYC Local Law 97 and similar building performance standards.",
        "focus": "Read every word of the Jamare Bates (JLL) interview and summary. Extract precisely: what Jamare's actual role is; every tool or platform he named and what he said about each; how JLL tracks energy across its portfolio; every mention of WatchWire, Tango, or other CRE platforms; his description of NYC Local Law 97 exposure; any language about what a software platform would need to be useful to a firm like JLL; his buyer readiness signals.\n\nNote that the primary research has only one CRE interview and it is from a property services firm (JLL), not a CRE owner. Assess what can be claimed vs. what is inference given this limitation.\n\nProduce an honest assessment: should CRE be Clear Current's beachhead, a parallel expansion target, or a later-stage opportunity? What would Clear Current need to prove or build before CRE becomes a primary vertical?",
    },
    {
        "id": "12", "name": "Alex Sterling", "title": "Energy Procurement & Contracting Expert",
        "corpus": make_corpus(
            ("Ann Walston Transcript",    ANN_WALSTON_T),
            ("Ann Walston Summary",       ANN_WALSTON_S),
            ("Sean Sevy Transcript",      SEAN_SEVY_T),
            ("Sean Sevy Summary",         SEAN_SEVY_S),
            ("Roger Goldstein Transcript",ROGER_T),
            ("Roger Goldstein Summary",   ROGER_S),
            ("Randy Dawes Summary",       RANDY_S),
            ("Adam Zavadsky Summary",     ADAM_ZAVADSKY_S),
            ("Marc Spieler Summary",      MARC_SPIELER_S),
            ("Project Scope",             SCOPE),
        ),
        "persona": "You have spent 17 years in energy procurement — at a Fortune 500 company, then at an energy brokerage, now as an independent consultant. You understand energy contract cycles: how electricity contracts are structured, how natural gas hedging works, when procurement decisions happen, and what triggers an RFP. You have watched brokers do 'cursory' bill reviews for years and known they were missing errors because cursory is what you get when your fee is embedded in the supply contract.",
        "focus": "Extract every piece of evidence about procurement cycles, energy contracts, brokers, hedging strategies, and RFP processes. Ann Walston's UPSC committee structure and natural gas hedging process. Sean Sevy's Prism Energy broker relationship and the 'cursory' bill review. Roger Goldstein's procurement approach for 2,200+ locations. Randy Dawes' procurement challenge across 70+ countries.\n\nBuild the procurement-specific section of the Seasonal Energy Management Calendar. Produce the procurement-specific trigger rows for the Engagement Trigger Map. Assess the RFP Builder as a potential product module — is there enough primary evidence to recommend it, or is it too early-stage?",
    },
    {
        "id": "13", "name": "Nina Patel", "title": "Enterprise Data Architecture & Integration Lead",
        "corpus": ALL_SUMMARIES,
        "persona": "You have spent 15 years as a data architect focused on complex operational data environments — utilities, energy management, building systems, and IoT. You understand the full stack of how energy data flows: from smart meters through AMI infrastructure to utility billing systems to EDI feeds to third-party aggregators to energy management platforms to ERP systems. You understand enterprise data governance — the real reason large organizations hesitate to share their data with software vendors.",
        "focus": "Find every mention of data architecture, data integration, interval data, ERP systems, data sovereignty, API access, EDI feeds, AMI infrastructure, and data security across all summaries. Troy Nevels' data sovereignty concern. Scott Czubkowski's Price Waterhouse data-sharing story (the most important data trust anecdote in the corpus — find the exact reference). Ann Walston's Get Choice bill processor data flow. The Banner ERP integration need at Texas State and UT Austin.\n\nThen answer the most important GTM question in your domain: how long does it take to get a customer's data connected and usable? Search for every mention of data onboarding, setup time, implementation timelines, and time-to-first-value. Identify the top 5 data onboarding obstacles that will kill deals if not addressed in the product roadmap, ordered by likelihood.",
    },
    {
        "id": "14", "name": "Morgan Chen", "title": "Energy Services Industry & Channel Strategy Expert",
        "corpus": make_corpus(
            ("Adam Zavadsky Transcript",  ADAM_ZAVADSKY_T),
            ("Adam Zavadsky Summary",     ADAM_ZAVADSKY_S),
            ("Don Johnson Transcript",    DON_JOHNSON_T),
            ("Phil Combs Summary",        PHIL_COMBS_S),
            ("Walt Taylor Transcript",    WALT_T),
            ("Walt Taylor Summary",       WALT_S),
            ("Roger Goldstein Summary",   ROGER_S),
        ),
        "persona": "You have spent 22 years in the energy services industry — 10 years at a large ESCO, 7 years at an energy consulting firm like ENGIE Impact, and 5 years advising SaaS companies on how to sell into and alongside the ESCO channel. You understand the ESCO business model at a granular level: how they make money, why they resist technology that commoditizes their expertise, and under what conditions they become willing channel partners. You know what ENGIE Impact does that software can't replicate — and exactly where their workflow breaks down in ways an AI-native platform could fix.",
        "focus": "Read every word of the Adam Zavadsky (ENGIE Impact) transcript — it is one of the longest in the corpus and contains the most detailed description of how a major energy services firm actually operates. Then read the Don Johnson and Phil Combs documents.\n\nExtract from Zavadsky: ENGIE Impact's current workflow and toolset; what software they use internally; where their process is manual; what they charge and how they justify fees; his comments about AI and automation; his language about what Clear Current does that ENGIE Impact cannot; any signal about whether ENGIE Impact would partner, compete, or acquire.\n\nExtract from Don Johnson and Phil Combs: Trane's angle on building automation vs. energy management software; how they position against pure SaaS; what their customers say about energy data and billing.\n\nProduce a full partner vs. compete analysis for the energy services channel. Name specific firms. Be direct about the risks. Also produce the channel strategy section for Clear Current's GTM plan.",
    },
    {
        "id": "15", "name": "Jordan Rivers", "title": "Investor Readiness & Narrative Strategy Lead",
        "corpus": ALL_SUMMARIES,
        "persona": "You spent six years as a partner at a seed-stage B2B SaaS fund focused on climate and energy technology, reviewing over 600 decks and leading 12 investments. You have evaluated AI energy management pitches from at least 30 companies in the last 18 months. You know every cliché in this space. You understand what the best climate tech VCs (Breakthrough Energy Ventures, Congruent, Prelude Ventures, Lowercarbon Capital, Energize) want to see at seed. You know the standard objections and how to answer them.",
        "focus": "Read the entire corpus through one lens: what would make a sophisticated seed investor say yes to Clear Current in May 2026?\n\nFrom the primary research: find the most investor-compelling findings — things genuinely surprising, never heard in other pitches, that prove specific product-market fit. The $10M in identified billing errors across 12 pilots — what does that imply about ARR potential? Roger Goldstein's baseline drift discovery — what does that prove about the scale of the problem? Phil Combs' 'nobody does it' comment — what does that prove about competitive white space?\n\nBuild the objection response framework: for each of the 5 most common investor objections to an AI energy management SaaS company, show how the primary research addresses it. Be honest about where the research does and does not answer the objection.\n\nProduce: (1) the investor narrative arc from the primary research alone; (2) the 5 most defensible data points from primary research; (3) the 3 quotes that belong in the pitch; (4) the gaps in the investor story that secondary research will need to fill.",
    },
]

all_outputs = {}
for i, agent in enumerate(AGENTS):
    output = run_agent(
        agent["id"], agent["name"], agent["title"],
        agent["persona"], agent["focus"], agent["corpus"],
    )
    all_outputs[agent["id"]] = output
    if i < len(AGENTS) - 1:
        print(f"  Waiting {DELAY}s...")
        time.sleep(DELAY)

# ---------------------------------------------------------------------------
# STEP 4 — COMPANY INTELLIGENCE CARDS (per-company corpora)
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("STEP 4 — COMPANY INTELLIGENCE CARDS")
print("="*70)

CARD_TEMPLATE = """For the company and interviewee(s) listed below, read every document in the corpus involving them. Produce a single intelligence card:

## COMPANY SNAPSHOT
**Company:** | **Industry:** | **Size:** | **Annual Energy Spend:** | **Current Energy Tools:** | **Currently Using AI:**

## WHO WAS ON THE CALL
For each person: name, exact title, background, specific area of ownership within energy management.

## THEIR ENERGY CALENDAR
Walk through the year as this organization actually lives it. When are they most reactive vs. proactive? Use their exact words.

## THEIR BIGGEST STRUGGLES (verbatim evidence)
Top 4–6 problems — not generic pain points but specifically what they said. Every item must include a direct quote or specific detail.

## HOW THEY WOULD USE CLEAR CURRENT
Which modules would they use first and why? What workflow changes day one? What would they show their CFO?

## THE QUOTE JOHN AND DAN NEED TO HEAR
One verbatim quote — the single most powerful thing this person said.

## BUYER READINESS
**Score:** HIGH / MEDIUM / LOW
**Why:** What would it take to become a paying customer in 6 months? What would kill the deal?"""

COMPANY_CARDS = [
    {
        "id": "co-01", "name": "Texas_State_University",
        "label": "Texas State University",
        "corpus": make_corpus(("TX State Transcript", TX_STATE_T), ("TX State Summary", TX_STATE_S)),
    },
    {
        "id": "co-02", "name": "UT_Austin_Finance",
        "label": "UT Austin — Finance (Andi Ault)",
        "corpus": make_corpus(("Andi Ault Transcript", ANDI_AULT_T), ("Andi Ault Summary", ANDI_AULT_S)),
    },
    {
        "id": "co-03", "name": "UT_Austin_Operations",
        "label": "UT Austin — Operations (Troy Nevels)",
        "corpus": make_corpus(("Troy Nevels Transcript", TROY_NEVELS_T), ("Troy Nevels Summary", TROY_NEVELS_S)),
    },
    {
        "id": "co-04", "name": "Ascension_Medxcel",
        "label": "Ascension / Medxcel (Scott Czubkowski)",
        "corpus": make_corpus(("Scott Czubkowski Transcript", SCOTT_CZUB_T), ("Scott Czubkowski Summary", SCOTT_CZUB_S)),
    },
    {
        "id": "co-05", "name": "Bon_Secours_Mercy_Health",
        "label": "Bon Secours Mercy Health (Ann Walston)",
        "corpus": make_corpus(("Ann Walston Transcript", ANN_WALSTON_T), ("Ann Walston Summary", ANN_WALSTON_S)),
    },
    {
        "id": "co-06", "name": "Houston_Methodist",
        "label": "Houston Methodist (Sean Sevy)",
        "corpus": make_corpus(("Sean Sevy Transcript", SEAN_SEVY_T), ("Sean Sevy Summary", SEAN_SEVY_S)),
    },
    {
        "id": "co-07", "name": "Intermountain_Health",
        "label": "Intermountain Health",
        "corpus": make_corpus(("Intermountain Transcript", INTERMOUNTAIN_T), ("Intermountain Summary", INTERMOUNTAIN_S)),
    },
    {
        "id": "co-08", "name": "AdventHealth",
        "label": "AdventHealth",
        "corpus": make_corpus(("AdventHealth Transcript", ADVENTHEALTH_T), ("AdventHealth Summary", ADVENTHEALTH_S)),
    },
    {
        "id": "co-09", "name": "Panda_Roger_Goldstein",
        "label": "Panda Restaurant Group (Roger Goldstein)",
        "corpus": make_corpus(("Roger Goldstein Transcript", ROGER_T), ("Roger Goldstein Summary", ROGER_S)),
    },
    {
        "id": "co-10", "name": "Panda_Walt_Taylor",
        "label": "Panda Restaurant Group (Walt Taylor)",
        "corpus": make_corpus(("Walt Taylor Transcript", WALT_T), ("Walt Taylor Summary", WALT_S)),
    },
    {
        "id": "co-11", "name": "Hyatt_Randy_Dawes",
        "label": "Hyatt (Randy Dawes)",
        "corpus": make_corpus(("Randy Dawes Summary", RANDY_S)),
    },
    {
        "id": "co-12", "name": "JLL_Jamare_Bates",
        "label": "JLL (Jamare Bates)",
        "corpus": make_corpus(("Jamare Bates Transcript", JAMARE_T), ("Jamare Bates Summary", JAMARE_S)),
    },
    {
        "id": "co-13", "name": "NVIDIA_Marc_Spieler",
        "label": "NVIDIA (Marc Spieler)",
        "corpus": make_corpus(("Marc Spieler Transcript", MARC_SPIELER_T), ("Marc Spieler Summary", MARC_SPIELER_S)),
    },
    {
        "id": "co-14", "name": "ENGIE_Impact_Adam_Zavadsky",
        "label": "ENGIE Impact (Adam Zavadsky)",
        "corpus": make_corpus(("Adam Zavadsky Transcript", ADAM_ZAVADSKY_T), ("Adam Zavadsky Summary", ADAM_ZAVADSKY_S)),
    },
    {
        "id": "co-15", "name": "Trane_Don_Johnson",
        "label": "Trane (Don Johnson)",
        "corpus": make_corpus(("Don Johnson Transcript", DON_JOHNSON_T)),
    },
    {
        "id": "co-16", "name": "Trane_Phil_Combs",
        "label": "Trane (Phil Combs)",
        "corpus": make_corpus(("Phil Combs Summary", PHIL_COMBS_S)),
    },
]

for company in COMPANY_CARDS:
    print(f"\n  → {company['label']}")
    task = (
        f"COMPANY: {company['label']}\n\n"
        f"{CARD_TEMPLATE}"
    )
    try:
        output = call_with_cache(company["corpus"], task, max_tokens=4000)
        fpath = CARDS_DIR / f"{company['id']}_{company['name']}.md"
        save_output(fpath,
            f"# {company['label']}\n"
            f"# Generated: {datetime.datetime.now().isoformat()}\n\n---\n\n",
            output)
    except Exception as e:
        print(f"  ✗ FAILED: {e}")
    time.sleep(DELAY)

# ---------------------------------------------------------------------------
# PRIMARY CORPUS DUMP (full registry — search / agent reconciliation)
# ---------------------------------------------------------------------------
write_primary_corpus_file(RESEARCH_DIR, BUNDLES, PRIMARY_OUT)

# ---------------------------------------------------------------------------
# DONE
# ---------------------------------------------------------------------------
print("\n" + "="*70)
print("PIPELINE 1 COMPLETE")
print("="*70)
files = list(PRIMARY_OUT.rglob("*.md")) + list(PRIMARY_OUT.rglob("*.txt"))
print(f"\nOutput files: {len(files)}")
for f in sorted(files):
    print(f"  {f.relative_to(PRIMARY_OUT)}  ({f.stat().st_size // 1024} KB)")
print(f"\n✓ All outputs → {PRIMARY_OUT}")
print("→ Run pipeline_2_secondary.py next")
