# Clear Current — Product & strategy context for research agents

**Purpose:** Ground every pipeline stage so outputs prioritize _new_ insight from research—not generic advice or capabilities the team already ships. **Edit this file** when reality changes; `pipeline_*.py` loads it automatically.

**Last tightened:** April 2026 (internal slides + public site + engineering summary).

---

## One story (read this first)

- **Buyer reality** comes from interviews and secondary research. **Product reality** comes from this file. If they conflict, **say both** and tag implications (`[FITS CURRENT PRODUCT]` / `[EXTENDS ROADMAP]` / `[NET NEW / RESEARCH-ONLY]`).
- **Spot ≠ resolve. Identify ≠ realize.** Shipped value today is overwhelmingly **detection, explanation, and assistance**—not unattended utility disputes or guaranteed recoveries.
- **Site / invoice association** is the **strongest automation story relative to other capabilities** (including proactive behavior in internal maturity views) but is **not “finished forever”**: coverage, edge cases, and onboarding still earn **“increase focus”** in planning. That is **not** a contradiction with “working toward richer automatic association”—it is **relative maturity + continued investment**.
- **Invoice organization** (ingest, consolidate, surface attention items) **exists**; it is **deprioritized for strategic narrative and roadmap airtime**—do not center deliverables on “build filing cabinets” unless research proves a acute gap. Mention only when it unblocks something higher-value.

---

## Company snapshot

- **Clear Current** — AI-native energy intelligence for large energy consumers; **Albuquerque, NM**; **founded 2024**; seed **$4M+** (2025): Rho Ignition (lead), Coreline Ventures, Avesta Fund; **co-built with Montauk Climate**. Public: **virtual energy manager** / **EERP** — “nerve center” for energy ops.
- **Leadership (public):** John Reuter (CEO), Jake Masters (CTO), Dan Schreiber (CPO); press also cites Eric Hines (COO). **Pilot / program references:** AB InBev, **100+ Accelerator** (verify claims against corpus before repeating in investor-grade text).

---

## Executive & portal standard — what John (CEO) cares about most

When producing **final deliverables**, **portal copy**, or anything leadership will scan: optimize for what the CEO emphasized on the closing call—**not** dense academic write-ups.

1. **High-level insight at every stage** — For each major section (and tables where practical), make obvious **what is happening** in the research and **why it matters** for Clear Current (decisions, narrative, risk, or GTM). A busy reader should get the takeaway without reading every cell first.
2. **Customer voice** — **Verbatim quotes** are first-class evidence: pull the strongest quotes into deliverables, attribute **name, role, organization**, and tie each quote to **so what** for Clear Current. Do not bury quotes in appendices only when they belong in the body.
3. **Interview summaries + transcripts** — The project includes **per-interview summary documents** alongside transcripts. Use **both**: summaries for fast orientation and synthesis; transcripts for **exact** wording when quoting. If a summary **infers** something not said verbatim in the transcript, **flag it** (summary inference vs. direct quote).

Primary agents already output quote inventories; synthesis and deliverable agents must **elevate** quotes and **executive “why it matters”** lines into the main narrative.

---

## Marketing modules ↔ CC Engine (for narrative alignment only)

Use this so deliverables **name real surfaces** without inventing new product lines. If a mapping is wrong for a specific pilot, **the corpus wins** for that sentence.

| Customer-facing (site) | Typical CC Engine tie-in                                                        |
| ---------------------- | ------------------------------------------------------------------------------- |
| **Rate Analyst**       | Invoice validation, variance detection, scenario / “what-if” on rates and usage |
| **Energy HQ**          | Map- and portfolio-style operational visibility                                 |
| **Deal Center**        | Procurement workflow: RFPs, responses, PPA / supply decisions                   |
| **Build Engine**       | Site viability: power, connectivity, property constraints                       |

---

## Who the product is for (internal UX intent)

- **Primary:** Capable **business people and operators**, not only “seasoned energy managers.” Financially material decisions should feel **approachable** without requiring deep tariff fluency up front.
- **Trust:** Enterprise-grade feel—**transparent numbers**, explainable outputs, **2FA** and credible security expectations—not black-box scores.

---

## Three-tier delivery model

1. **Chat — React to user** — NL access, fast answers, low intrusion; teaches what the system can do (e.g. suggested prompts).
2. **Dashboard — Push to user** — Proactive, **prioritized** signals; must earn the interruption.
3. **Autonomous agent — Do for user** — Highest impact; needs **authorization** and hard product work; **not** the default assumption for “what ships today.”

When recommending UX or roadmap moves, **name the tier** when possible.

---

## CC Engine — maturity ladder (for honest claims)

| Capability                                        | How to describe it honestly                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Identify invoices of interest                     | Strong for **layperson**-style questions                                                                                                      |
| Associate invoices with **sites**                 | **Lead capability on automation** (including proactive behaviors in internal views); still **actively improved** for scale and edge cases     |
| Spot **errors**                                   | Strong for layperson queries                                                                                                                  |
| **Resolve** errors                                | **Assists** manual completion—**not** hands-off resolution by default                                                                         |
| Spot **opportunities**                            | Stronger when framed with **expert**-level prompts / context                                                                                  |
| **Realize** opportunities                         | **Assists** manual completion                                                                                                                 |
| Spot / **predict** trends, budget, retrospectives | **Expert-oriented** analysis; **spot/predict trends** are **strategically deprioritized** vs opportunity + site work—even if partially usable |

**Hard rule:** Never describe **autonomous** dispute filing, credit tracking, or **closed-loop** utility recovery as standard shipped behavior unless the **research corpus explicitly says** that behavior is live for a named customer.

---

## What exists today (engineering-facing)

Check here before proposing a **new** module:

- AI-assisted **invoice ingestion**; consolidate multi-site; **surface** what needs attention (organization exists; see “One story”).
- **Spot errors** on bills (rates, demand, tariff misapplication, etc.) from uploaded data.
- **Spot opportunities** (overpay / under-optimization); useful in **channel** contexts (e.g. before equipment or performance-contract pitches).
- **Chat + tariff & contract engine** — NL Q&A with **actionable**, explainable outputs.
- **Stack direction:** chat + file management + tariff/contract engine; **AI agent (MCP → SQL)** for structured retrieval/analysis.

---

## Strategic focus (“speed through focus”)

**Increase focus**

- **Spot opportunities**
- **Associate sites** (multi-site linkage—critical for portfolios and performance-style workflows)

**Maintain & improve**

- Chat + file + tariff/contract engine
- AI agent (MCP → SQL)
- **Spot errors** (core)

**Human-in-the-loop for now (assist, don’t pretend full automation)**

- **Resolve** errors
- **Realize** opportunities

**Deprioritize for roadmap narrative (byproduct improvements OK)**

- **Organize invoices** as a _hero_ bet
- **Spot trends** / **predict trends** as _center_ bets

If research **demands** reprioritization, **say so explicitly** and tag `[NET NEW / RESEARCH-ONLY]` or `[EXTENDS ROADMAP]` with evidence.

---

## Roadmap themes (directional — not automatic customer promises)

- **Close the loop** on errors: disputes, credits, workflow—needs process, trust, permissions.
- **Richer automatic site association** across locations and messy real-world data.
- **Forecasting / M&V-friendly** baselines and budgeting.
- **Full autonomous loop:** monitor → flag → resolve → report with minimal effort (long-horizon; tie to tier 3).

---

## Research → deliverable routing

| Research theme        | Deliverable job                                                 |
| --------------------- | --------------------------------------------------------------- |
| Triggers, seasonality | _When_ to engage; calendar; GTM                                 |
| Personas, workflows   | Journeys; **which tier** (chat / push / agent)                  |
| Incumbents, gaps      | Competitive, heatmap—**positioning**, not feature dumps         |
| ROI / module ideas    | Product recs—**extend or repackage** what exists; tag every row |

---

## All agents (primary & secondary)

1. Treat this file as **product fact** unless the corpus **directly contradicts** it—then **flag the contradiction**.
2. Do **not** pack “DELIVERABLE BUILD GUIDANCE” with restatements of the capability list unless research adds **segment nuance, sequencing, packaging, or messaging**.
3. Every major recommendation: prefix **`[FITS CURRENT PRODUCT]`**, **`[EXTENDS ROADMAP]`**, or **`[NET NEW / RESEARCH-ONLY]`** in deliverable build guidance.
4. Follow **Executive & portal standard — what John (CEO) cares about most** (above): takeaway + why it matters; quotes with attribution; summaries vs transcripts discipline.

---

## Synthesis / final deliverables

1. **Assume** John, Dan, and board know the baseline product. Lead with **implications**: prioritize, position, de-risk, **what proof to collect**.
2. **CEO scan:** Obey **Executive & portal standard** in every major section—insight first, customer voice in the narrative, not quote graveyards at the end only.
3. Tie sections to **Rate Analyst / Energy HQ / Deal Center / Build Engine** and/or **CC Engine** bullets where it clarifies—not as filler.
4. **Mandatory close:** `## Implications for Clear Current (tagged)` — bullets, each tagged.
5. **Investor / diligence pressure:** Where research raises **identified vs realized** dollars (errors found vs credits received), **do not** imply the product closes that gap today unless the corpus proves it—call out **proof** leadership needs (case studies, utility letters, recovered $).

---

_Single source of truth for pipeline injection. Update when product, focus, or pilot claims change._
