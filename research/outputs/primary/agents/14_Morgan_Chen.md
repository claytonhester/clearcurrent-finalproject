# Agent: Morgan Chen | Energy Services Industry & Channel Strategy Expert

# Run: 2026-04-17T15:52:57.568008

---

# ENGIE Impact Channel Analysis & Energy Services GTM Strategy

## Morgan Chen | Clear Current Technologies Engagement

---

## 1. WHAT I FOUND

Reading every word of the Zavadsky transcript against the Taylor and Goldstein summaries, and cross-referencing the Trane interviews, a coherent structural picture emerges that is more actionable than anything the student interviewers recognized in their summaries.

ENGIE Impact is not a competitor to Clear Current. It is the distribution channel.

Here is the architecture as I now understand it from the corpus:

ENGIE Impact's business model is built on outsourced bill processing as the anchor — the "labor avoidance" function Zavadsky describes. On top of that data repository they stack consulting services: energy procurement, waste optimization, sustainability reporting, emissions inventories. The data is the moat. The consulting is the margin. The software portal is the wrapper that keeps clients from leaving.

But the software is not AI-native. Zavadsky confirmed AI is used internally for invoice ingestion — OCR augmentation and web scraping — not for client-facing analytics. Walt Taylor confirmed the client-facing anomaly detection is threshold-based: "they flag the outlier, we investigate." Roger Goldstein confirmed the same: a meter paid a neighbor's electricity for an entire year before anyone caught it, because the charge had established a new baseline that the threshold system never tripped.

This is the gap. ENGIE has the data. Clear Current has the intelligence layer. Neither has both.

The Trane angle is structurally different. Don Johnson and Phil Combs are not bill processors — they are building automation and HVAC contractors with energy analytics capabilities. Trane's recent acquisition of BrainBox AI signals they are moving toward building-level AI optimization, not portfolio-level billing intelligence. These are adjacent but non-overlapping markets. Trane is not a competitor; it is a downstream referral channel for Clear Current's highest-value alert category: HVAC degradation driving electricity creep.

---

## 2. KEY FINDINGS (Cited, 12 findings)

**Finding 1: ENGIE Impact's client-facing AI is nonexistent — by design.**

Zavadsky drew a clear line: "We're using AI to scrape data off of bills, to get invoices into our system more efficiently, without errors, less labor. We're not using it as much on the client deliverable side because those require a subject matter expert to collaborate with you on what we're going to do." (Zavadsky Transcript, ~12:08)

This is not a technology lag — it is a deliberate product decision. ENGIE's consulting model requires human consultants on client deliverables because that is where they bill hours. Automating the client-facing insight layer would cannibalize their consulting revenue. Clear Current has no such conflict.

**Finding 2: The data moat is real, but it is built on Arcadia — not proprietary infrastructure.**

Taylor confirmed: "NG actually uses Arcadia to get their electronic bills and then they get the paper bills, you know, mailed to them and they run through the OCR." (Taylor Transcript, ~21:45)

This is the most significant competitive intelligence in the corpus. ENGIE's data collection capability is not vertically integrated — it is licensed from Arcadia for electronic bills and patched with OCR for paper. Their "20 years of Panda data" moat is real, but their ongoing data collection pipeline has a seam at the Arcadia integration layer.

**Finding 3: OCR coverage is approximately 90%, not 100%. The 10% is the problem.**

Taylor: "Their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them." (Taylor Transcript, ~5:48)

Zavadsky confirmed the problem from the ENGIE side: small municipalities — approximately 30,000 in the U.S. — have no electronic infrastructure, still send paper bills, and have no standard format. "Every bill is different." (Zavadsky Transcript, ~16:57) Phil Combs confirmed from the Trane side: "Utilities are still so varied and different... it can be frustrating because what they put on a bill and the format they put it on a bill, it can just vary." (Combs Summary, direct quote)

**Finding 4: Threshold-based anomaly detection misses the most expensive error class.**

Goldstein's most expensive example — paying a neighbor's electricity for a full year — was not caught by ENGIE's threshold system because the charge had established a new baseline. (Goldstein Summary, Section 3.1) Taylor confirmed the same structural limitation: ENGIE flags outliers above the threshold, but "catching 90% of them" means systematic baseline drift goes undetected. (Taylor Transcript, ~5:48)

This is the primary product gap Clear Current should position against.

**Finding 5: ENGIE's fee structure is anchored on labor avoidance, not software value.**

Zavadsky described the core value proposition explicitly: "You're outsourcing the payables, and so that's kind of like a labor avoidance type situation." (Zavadsky Transcript, ~4:09) Goldstein quantified this: without NG Insight, Panda would need four to six dedicated accounting headcount just to manage bill intake. (Goldstein Summary, Section 2.1)

The implication: ENGIE's pricing is calibrated to the labor it replaces, not to the analytics value it creates. Clear Current's pricing can be calibrated against the billing errors it catches — a fundamentally different ROI conversation that ENGIE cannot have without competing with its own consulting arm.

**Finding 6: ENGIE's competitive moat is articulated by Zavadsky himself — and it has a crack.**

Zavadsky: "Arcadia — they don't pay bills, right? So how would they provide this service? They would need to either partner with someone who does pay bills, or they would need a centralized repository." (Zavadsky Transcript, ~29:25)

He is right about Arcadia. He is also right that the data collection function is the hard part. But Taylor revealed that ENGIE's data collection is already partially outsourced to Arcadia. The moat Zavadsky describes is therefore more fragile than he believes — at least on the electronic bill side.

**Finding 7: ENGIE clients are explicitly asking for an LLM layer that ENGIE hasn't built.**

Taylor: "It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on." (Taylor Transcript, ~24:20)

This is a client telling their incumbent vendor to add what Clear Current sells. If Clear Current gets to Panda's procurement before ENGIE builds it, Clear Current wins a customer. If ENGIE builds it first using Anthropic or a similar provider, the window closes. The client pull is visible to both parties.

**Finding 8: Trane's BrainBox AI acquisition creates a building-level AI wedge, not a billing intelligence wedge.**

Don Johnson confirmed: "Trane purchased BrainBox AI, which can implement AI solutions with any controls, not just Trane controls. So we can offer AI building optimization even to customers who don't have our BAS." (Johnson Transcript)

BrainBox AI optimizes HVAC scheduling and setpoints in real time using building sensor data. It does not analyze utility bills, tariff structures, or portfolio-level billing anomalies. These are non-overlapping product categories. Trane is not a competitor to Clear Current.

**Finding 9: Trane energy managers are doing billing analysis in Excel and it takes 10–15 minutes per meter.**

Combs: "Time per meter approximately 10-15 minutes per meter to pull, enter, and review the appropriate data from a utility bill. For a client with 12 meters, that's roughly two hours of manual work per month on data collection alone." (Combs Summary, Section 2)

This quantifies the manual labor Clear Current replaces for the energy engineering channel. At Trane's scale, with hundreds of client sites, the labor savings are material. This is the entry point for a Trane channel conversation.

**Finding 10: Regulatory intelligence — monitoring PUC filings and rate hike proposals — is the killer feature no competitor has.**

Combs: "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board — they're putting a price increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time." (Combs Summary, direct quote)

Neither ENGIE Impact nor Arcadia nor Energy Toolbase offers this. It is a forward-looking capability that building automation systems like BrainBox cannot provide.

**Finding 11: The sewer overbilling category is untracked and structurally embedded.**

Taylor surfaced a category of systematic overbilling that no other interviewee addressed: sewer charges billed based on water intake rather than actual discharge. For restaurants, where most water leaves as ice and drinks consumed offsite, the actual sewage discharge is materially lower than what utilities bill. "There's no meter about how much water is actually leaving the restaurant." (Taylor Transcript, ~10:24) This is legal under current tariff structures but factually incorrect as a measure of actual use.

No current vendor — ENGIE, Arcadia, or any named competitor — is actively contesting or tracking this category.

**Finding 12: Sustainability tension at ENGIE creates an AI adoption brake that Clear Current can turn into a positioning advantage.**

Zavadsky: "There are legitimate concerns about our use of AI and adding to the already overloaded grids... There's thoughtful decisions being made on how we as a company want to use it and present it to the marketplace." (Zavadsky Transcript, ~18:26)

This is an organizational headwind for ENGIE's AI development timeline. Clear Current can position its platform as energy-efficiency enabling — reducing wasted energy spend rather than adding to grid load — which resolves the sustainability tension that is slowing ENGIE's internal AI development.

---

## 3. VERBATIM QUOTES (15 quotes, sourced)

**On ENGIE's core value prop and data moat:**

> "You can't manage what you can't measure. We can't help you if we don't pay your bills because otherwise we'd have no idea what we're doing."
> — Adam Zavadsky, ENGIE Impact (Zavadsky Transcript, ~5:25)

**On AI being internal-only, not client-facing:**

> "We're using AI to scrape data off of bills, to get invoices into our system more efficiently, without errors, less labor. We're not using it as much on the client deliverable side because those require a subject matter expert to collaborate with you on what we're going to do."
> — Adam Zavadsky, ENGIE Impact (Zavadsky Transcript, ~12:08)

**On the competitor access problem:**

> "Arcadia — they don't pay bills, right? So how would they provide this service? They would need to either partner with someone who does pay bills, or they would need a centralized repository."
> — Adam Zavadsky, ENGIE Impact (Zavadsky Transcript, ~29:25)

**On ENGIE's actual data dependency — the competitive crack:**

> "NG actually uses Arcadia to get their electronic bills and then they get the paper bills, you know, mailed to them and they run through the OCR."
> — Walt Taylor, Panda Restaurant Group (Taylor Transcript, ~21:45)

**On OCR coverage and the 10% gap:**

> "Their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them."
> — Walt Taylor, Panda Restaurant Group (Taylor Transcript, ~5:48)

**On the client's explicit request for an LLM layer on ENGIE's data:**

> "It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on."
> — Walt Taylor, Panda Restaurant Group (Taylor Transcript, ~24:20)

**On threshold detection missing baseline drift:**

> "It does happen. It can go on for a while and then accounting or operations will catch something like that. It's like, hey, how come I haven't had any electric charges on my P&L for six months, or why were the last four months so expensive?"
> — Roger Goldstein, Panda Restaurant Group (Goldstein Summary, Section 3.1)

**On what the dashboard actually solves:**

> "Normally your water is X and this bill we just got in is Y, like is something wrong? So it's a proactive alert system, we'll say."
> — Adam Zavadsky, ENGIE Impact (Zavadsky Transcript, ~22:06)

**On the sustainability-AI tension inside ENGIE:**

> "There are legitimate concerns about our use of AI and adding to the already overloaded grids... There's thoughtful decisions being made on how we as a company want to use it and present it to the marketplace."
> — Adam Zavadsky, ENGIE Impact (Zavadsky Transcript, ~18:26)

**On what the regulatory intelligence feature would be worth:**

> "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board — they're putting a price increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time."
> — Phil Combs, Trane Technologies (Combs Summary, direct quote)

**On the manual labor cost at the Trane level:**

> "Time per meter approximately 10-15 minutes per meter to pull, enter, and review the appropriate data from a utility bill. For a client with 12 meters, that's roughly two hours of manual work per month on data collection alone."
> — Phil Combs, Trane Technologies (Combs Summary, Section 2)

**On tariff complexity as an AI opportunity:**

> "If it can summarize that — because if you've looked at them, it's like reading a legal document. Just get to the punch line. But then also have it make recommendations — for this customer, the utility just implemented a time-of-use rate, and based on the client's last 24 months of energy use, which one is more beneficial for them?"
> — Phil Combs, Trane Technologies (Combs Summary, direct quote)

**On the hard part of the data problem:**

> "The hard part, the part that's not sexy or isn't fun, is in order to get that dashboard, you have to collect the data."
> — Adam Zavadsky, ENGIE Impact (Zavadsky Transcript, ~29:13)

**On Trane's building AI — non-overlapping with billing intelligence:**

> "Trane purchased BrainBox AI, which can implement AI solutions with any controls, not just Trane controls. So we can offer AI building optimization even to customers who don't have our BAS."
> — Don Johnson, Trane Technologies (Johnson Transcript)

**On the right metric for restaurant energy — an industry flaw nobody has fixed:**

> "Square footage has nothing to do with how much energy. It's your cubic footage that has everything to do with how much energy is used, because you don't heat a space by the floor. You heat a space like a cube."
> — Walt Taylor, Panda Restaurant Group (Taylor Transcript, ~15:08)

---

## 4. DELIVERABLE BUILD GUIDANCE

### 4.1 Channel Architecture for the GTM Plan

Based on everything in this corpus, I am recommending a three-track channel architecture for Clear Current. These are not sequential — they run simultaneously at different velocity.

---

**TRACK 1: Direct Enterprise QSR (Proof-of-Concept Revenue)**

_Target:_ Multi-site QSR operators with 50–500 locations who use a bill processing service but do not have ENGIE Impact's scale of data infrastructure — or who use ENGIE but want an intelligence layer their current portal doesn't provide.

_Entry motion:_ The energy manager or facilities director. Phil Combs' hierarchy is correct: energy managers first, facilities directors second, accounting third. (Combs Summary, Section 5.1) Never lead with the CEO.

_Pitch framing:_ "What H2NO did for your water, we do for your entire utility bill stack." (Derived from Goldstein Summary, Section 3.3 — Roger already trusts this model.) Lead with operational risk reduction (shutoffs, missed bills, wrong charges), then layer in the savings opportunity. This sequence matches Roger Goldstein's concern hierarchy.

_Proof requirement:_ One documented case of baseline drift detection that ENGIE's threshold system missed. Roger's neighbor-electricity story is the archetype. If Clear Current can demonstrate it caught something ENGIE didn't, the sale is structurally proven.

_Revenue model:_ SaaS subscription per location, tiered by portfolio size. Pricing anchored against the billing errors caught, not against the labor replaced (that's ENGIE's anchor, not Clear Current's).

---

**TRACK 2: ENGIE Impact Partnership / White-Label Intelligence Layer**

_Target:_ ENGIE Impact corporate — specifically the product and technology team, not the account management team Zavadsky represents.

_Rationale:_ ENGIE has the data. Clear Current has the AI intelligence layer. Neither can build the other's capability at the same cost or speed. Zavadsky's own framing makes the case: "we can stack all of this work on it" — referring to the service layers built on top of bill data. Clear Current is the next service layer. (Zavadsky Transcript, ~30:12)

The sustainability tension Zavadsky described is actually a pathway: if Clear Current's AI is positioned as reducing wasted energy spend (therefore reducing grid draw), not as a compute-heavy AI system, ENGIE's internal ethics review may clear it faster. (Zavadsky Transcript, ~18:26)

_Partnership structure options, in order of preference:_

1. **OEM/white-label** — Clear Current's anomaly detection and tariff intelligence engine embedded in ENGIE's client portal under ENGIE's brand. ENGIE pays a per-location SaaS fee. This is the fastest path to scale because ENGIE's client base is already captive.

2. **Data licensing** — ENGIE grants Clear Current access to aggregated, anonymized billing data (with client consent) in exchange for revenue sharing on errors caught. This requires more legal scaffolding but gives Clear Current training data at a scale it cannot otherwise achieve.

3. **Referral channel** — ENGIE account managers like Zavadsky refer clients who want more analytics capability than ENGIE's portal provides. Revenue split per referred deal. Lowest friction to initiate; lowest revenue per deal.

_Entry point:_ Roger Goldstein offered to connect the team with his ENGIE account lead. (Goldstein Summary, Section 5) That is a warm introduction to Zavadsky's peer, not Zavadsky himself. Use it to get to ENGIE's technology or product leadership, not to the account management layer.

_Risk:_ ENGIE can and may decide to build this internally. Walt Taylor's explicit suggestion to "bolt on" Anthropic is something ENGIE's product team has almost certainly heard internally. (Taylor Transcript, ~24:20) The window is open but not permanently. I estimate 18–24 months before ENGIE's internal AI roadmap reaches client-facing capability at any meaningful depth, given the organizational brakes Zavadsky described (sustainability ethics review, consulting revenue protection, labor replacement fear).

---

**TRACK 3: Trane Technologies Channel — Energy Services Division**

_Target:_ Trane's energy services and digital services teams — specifically Phil Combs' network and his named contacts (Erin Daley, Casey Borst).

_Rationale:_ Trane's energy engineers are doing manual bill analysis in Excel at 10–15 minutes per meter. They are the ones who would use Clear Current's chat interface, not just consume its outputs. (Combs Summary, Section 2) More importantly, Trane's guaranteed energy performance contracts require Measurement & Verification work that is currently done with Abraxas Option C. Clear Current's AI layer could accelerate the pre-contract energy baselining that Trane does before offering a performance guarantee.

_Pitch framing for Trane:_ "We turn the two-hour Excel baselining session into a ten-minute query. Your engineers go from data entry to analysis."

_Specific features that map to Trane use cases:_

- Automated energy profile generation across time periods (replaces manual Excel work)
- Peak demand flagging with ratchet rate impact modeling (maps to Don Johnson's most specific request — Johnson Transcript)
- Regulatory intelligence for PUC filings (maps to Phil Combs' most enthusiastic feature request — Combs Summary, Section 3.2)
- Tariff summarization and rate switch recommendations (Combs' second most enthusiastic request — Combs Summary, Section 3.4)

_BrainBox AI relationship:_ Trane's building-level AI and Clear Current's portfolio-level billing AI are not competing. They are complementary. A Trane client using BrainBox AI for HVAC optimization who also uses Clear Current for billing intelligence gets better ROI documentation for both. BrainBox proves consumption went down; Clear Current proves the bill reflected it correctly.

_Channel structure:_ Referral partnership. Trane energy engineers recommend Clear Current to clients who need billing analysis. Clear Current analysts flag HVAC degradation patterns that trigger Trane service dispatch. Mutual referral revenue split.

_Entry point:_ Phil Combs offered to be an ongoing contact and expressed strong interest in piloting the product. (Combs Summary, Section 7) Erin Daley and Casey Borst are the corporate-level contacts for any formal partnership conversation.

---

**TRACK 4 (Secondary): Arcadia Integration**

_Target:_ Arcadia's business development team.

_Rationale:_ ENGIE uses Arcadia for electronic bill aggregation. (Taylor Transcript, ~21:45) If Clear Current integrates directly with Arcadia's data layer, it can offer any Arcadia client (including ENGIE's clients, through Arcadia's platform) an AI intelligence layer without needing ENGIE's permission. Arcadia's published documentation already treats ENGIE Insight as an "indirect" data source with a defined integration pathway. (Taylor Summary, Section 3.1)

_Risk:_ This is a flanking move that may poison the ENGIE partnership track if ENGIE perceives Clear Current as going around them to their clients via Arcadia. Sequence matters: initiate ENGIE partnership conversation first; Arcadia integration is the fallback if ENGIE declines.

---

### 4.2 Specific Partner Candidates with Contact Intelligence

| Partner                | Contact                                           | Role                                     | Entry Point              | Track         |
| ---------------------- | ------------------------------------------------- | ---------------------------------------- | ------------------------ | ------------- |
| ENGIE Impact           | Via Roger Goldstein's ENGIE account lead referral | Account management → product team        | Roger's warm intro       | Track 2       |
| Trane Technologies     | Phil Combs (direct offer to pilot)                | Sr. Digital Services Engineer            | Phil's pilot offer       | Track 3       |
| Trane Technologies     | Erin Daley                                        | M&V Engineering Leader                   | Phil's referral          | Track 3       |
| Trane Technologies     | Casey Borst (casey.borst@trane.com)               | Energy Engineering & Project Development | Phil's referral          | Track 3       |
| Arcadia                | Business development (cold)                       | Bill aggregation platform                | LinkedIn/direct outreach | Track 4       |
| Panda Restaurant Group | Walt Taylor (walt.taylor@pandarg.com)             | Energy Manager, Contractor               | Interview relationship   | Track 1 pilot |
| Panda Restaurant Group | Roger Goldstein                                   | Executive Director, Facilities & Energy  | Interview relationship   | Track 1 pilot |

---

### 4.3 Pricing Architecture Guidance

ENGIE's pricing is anchored to labor avoidance — it replaces four to six FTEs for Panda. (Goldstein Summary, Section 2.1) This means ENGIE's pricing conversation is a headcount ROI conversation. Clear Current's pricing conversation is a billing error recovery and avoidance ROI conversation. These are different buyers (accounting vs. operations) and different ROI frames.

For the partner tracks:

- White-label to ENGIE: price per location per month, bundled into ENGIE's existing client contract. ENGIE marks up to the client. Clear Current never touches the client pricing conversation.
- Direct enterprise: price per location per month, with a minimum portfolio size. Comparable to H2NO's per-location water monitoring subscription — Roger already understands and has approved this pricing model for a comparable product.

---

## 5. COMPETITIVE IMPLICATIONS

### 5.1 ENGIE Impact — Partner, Not Competitor (With a Time Limit)

The analysis is unambiguous: ENGIE Impact is the most natural channel partner for Clear Current in the enterprise QSR and multi-site retail segment. They have the data, the client relationships, and a demonstrated inability to build the AI intelligence layer that Clear Current offers — for structural reasons (consulting revenue protection) and organizational reasons (sustainability ethics review, internal AI friction).

However, the window is not permanent. Walt Taylor's comment about "bolting on" Anthropic is not a hypothetical — it is a description of what ENGIE's clients are asking for and what any competent ENGIE product manager has already put on a roadmap. (Taylor Transcript, ~24:20) The urgency of the ENGIE partnership conversation is 12–18 months. If Clear Current does not have a partnership term sheet with ENGIE in that window, ENGIE will build a version of this internally (probably worse, but good enough to prevent Clear Current from accessing ENGIE's client base).

### 5.2 Arcadia — Infrastructure Partner, Latent Competitor

Arcadia is not currently a competitor to Clear Current. It is a bill aggregation utility — it pipes data, it does not analyze it. But Arcadia has 15 years of utility data infrastructure and a business development team that absolutely understands that the analytics layer is where the margin is. If Arcadia decides to build an AI intelligence layer, it would have a data advantage over Clear Current that would be very difficult to close.

The strategic move: partner with Arcadia before Arcadia decides to compete. An Arcadia integration deal that routes Clear Current's AI output back through Arcadia's platform creates a mutual dependency that makes Arcadia less likely to build a competing analytics product.

### 5.3 Energy Toolbase — Direct Competitor on Tariff Intelligence

Phil Combs named Energy Toolbase as "the closest" existing product for tariff and rate switch modeling. (Combs Summary, Section 3.4) Energy Toolbase does rate database and tariff modeling, but does not do billing anomaly detection, portfolio-level exception monitoring, or regulatory intelligence (PUC monitoring). Clear Current's concept exceeds Energy Toolbase on every dimension Combs described.

Competitive action: conduct a detailed product teardown of Energy Toolbase. Specifically map where their tariff modeling ends and where Clear Current's concept begins. The gap is the product pitch.

### 5.4 Trane/BrainBox AI — Complementary, Referral Relationship

BrainBox AI optimizes building-level HVAC scheduling. Clear Current analyzes portfolio-level utility billing. These do not compete. A building with BrainBox generates consumption data; Clear Current verifies that the billing correctly reflects that consumption. They are sequential in the value chain. The referral relationship is natural: Trane dispatches after Clear Current flags an HVAC degradation signal in the billing data.

### 5.5 Excel — The True Incumbent

Phil Combs was explicit: energy professionals do most of their analysis in Excel. (Combs Summary, Section 6, Recommendation 6) The adoption threshold is not "better than ENGIE's portal" — it is "better than a well-structured Excel workbook built by someone who has been doing this for 20 years." The chat interface must deliver in minutes what Combs produces in two hours. That is the adoption bar.

---

## 6. WELL-EVIDENCED VS. INFERRED

### Strongly Evidenced (multiple sources, direct quotes)

| Claim                                                                    | Sources                                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| ENGIE's AI is internal-only, not client-facing                           | Zavadsky Transcript (~12:08); confirmed structurally by Taylor and Goldstein                                 |
| ENGIE uses Arcadia for electronic bill aggregation                       | Taylor Transcript (~21:45); confirmed by Arcadia's own technical documentation (Taylor Summary, Section 3.1) |
| ENGIE's anomaly detection is threshold-based, misses baseline drift      | Zavadsky Transcript (~22:06); Goldstein Summary (Section 3.1); Taylor Transcript (~5:48)                     |
| OCR coverage is approximately 90%, not complete                          | Taylor Transcript (~5:48); Zavadsky Transcript (~16:57)                                                      |
| Panda clients are asking for an LLM layer on ENGIE's data                | Taylor Transcript (~24:20) — direct, unprompted client statement                                             |
| Regulatory intelligence is a requested feature with no current provider  | Combs Summary (Section 3.2, direct quote)                                                                    |
| Trane's BrainBox AI addresses building-level HVAC, not billing analytics | Johnson Transcript (direct)                                                                                  |

### Reasonably Inferred (single source or logical extension)

| Claim                                                                           | Basis                                                                                                                                            | Confidence                                        |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| ENGIE's consulting revenue protection is a structural brake on client-facing AI | Logical extension of Zavadsky's comment that consulting "requires a subject matter expert to collaborate with you" (Zavadsky Transcript, ~12:35) | High                                              |
| ENGIE partnership window is 12–18 months                                        | My 22-year read of how long large energy services firms take to build new product capabilities from internal discussion to deployment            | Medium — this is experience-based, not data-based |
| Arcadia may eventually compete on analytics                                     | Inference from their 15-year data advantage and general industry dynamics                                                                        | Medium                                            |
| Sewer overbilling could be an addressable category for Clear Current            | Taylor surfaced the issue (Taylor Transcript, ~10:24); no current vendor addresses it                                                            | Medium — addressable legally is unclear           |
| White-label ENGIE partnership is preferred over direct competition              | Strategic logic + Zavadsky's data moat framing                                                                                                   | High                                              |

### Not Evidenced (requires further research)

- ENGIE's internal AI roadmap timeline and budget — Zavadsky gave signals but no specifics
- Whether ENGIE has had any acquisition conversations about AI analytics companies
- Arcadia's revenue model and whether analytics is on their roadmap
- Whether the sewer overbilling category is legally contestable at scale
- Energy Toolbase's current product capabilities versus what Combs described

---

## 7. OPEN QUESTIONS

**Q1: What is ENGIE Impact's internal AI roadmap, and who owns it?**

Zavadsky is a Senior Account Manager — a revenue-facing role. He knows what AI is used for internally but almost certainly does not have visibility into product roadmap decisions. Before Clear Current initiates a partnership conversation with ENGIE, it needs to know whether ENGIE's product team has already scoped an LLM integration. This is the highest-urgency intelligence gap in the corpus.

_How to get this:_ LinkedIn search for ENGIE Impact product management and technology roles. LinkedIn job postings for ENGIE Impact — any postings for LLM, AI, or data science roles would signal roadmap movement. Patent filings.

---

**Q2: Does ENGIE Impact's white-label or licensing model have precedent?**

Has ENGIE ever embedded a third-party analytics product in its client portal? If so, what were the commercial terms? If not, the partnership conversation requires building the precedent. Zavadsky's interview suggests ENGIE is comfortable relying on third parties for data infrastructure (Arcadia), so there may be appetite for a similar arrangement on the analytics side.

_How to get this:_ ENGIE's technology partner page (if public). Conversations with former ENGIE product or technology staff on LinkedIn.

---

**Q3: What does Arcadia's commercial model look like, and is there a Clear Current integration pathway?**

Arcadia's developer documentation is cited in the Taylor Summary as confirming the ENGIE Insight integration pathway. But Taylor Summary does not describe Arcadia's API pricing or commercial terms for a SaaS integration. If Arcadia charges per-bill or per-location, the economics of a Clear Current → Arcadia integration need to be modeled before committing to this as a data strategy.

_How to get this:_ Arcadia's developer documentation (Taylor Summary cites it as accessible). Direct outreach to Arcadia's API/developer relations team.

---

**Q4: Is the sewer overbilling category legally and commercially addressable?**

Walt Taylor described this as a structural issue with no current remedy — "there's no way to prove" actual discharge. (Taylor Transcript, ~10:49) But Walt also described getting a utility rate changed through a state Public Service Commission by making a quantitative case. (Taylor Summary, Section 1) Is there a class of utility jurisdiction where a sufficiently documented case for sewer discharge measurement would get traction?

_Why this matters:_ If Clear Current can be the first to document and aggregate evidence of this overbilling category across a national QSR portfolio, it creates a potential litigation or regulatory claim value that no current billing product addresses. This could be a significant differentiator or a future product module.

_How to get this:_ Interview a utility regulatory attorney. Review whether any MUSH-sector clients (municipalities, universities) have successfully contested sewer charges.

---

**Q5: What is Phil Combs' actual budget authority for a Clear Current pilot at Trane?**

Phil offered to pilot the product and provided two corporate contacts (Erin Daley, Casey Borst). But his own role — Senior Digital Services Engineer — is likely technical, not procurement. His enthusiasm is valuable but may not translate directly into a purchase order without Daley's or Borst's involvement. Understanding the procurement path at Trane before initiating a pilot conversation would avoid a stalled deal.

_How to get this:_ Follow-up conversation with Phil directly — ask him to characterize the decision-making process for a technology evaluation at Trane's energy services division.

---

**Q6: What is the minimum viable feature set for the ENGIE partnership track versus the direct enterprise track?**

The ENGIE white-label track requires a different product interface than the direct enterprise track. For ENGIE, Clear Current is an embedded module in an existing portal — the UX must be designed for ENGIE's portal architecture and ENGIE's client expectation. For direct enterprise, Clear Current controls the full UX. Building both simultaneously is expensive. Which should be scoped first, and what does each require?

_This is a product question for Dan Schreiber, not a research question — but it needs to be answered before the partnership conversation with ENGIE begins, because ENGIE's product team will ask it in the first meeting._

---

**Q7: At what portfolio size does Clear Current's value proposition break even against ENGIE's threshold-based system?**

Walt Taylor suggested the AI billing tool concept is more credible for a 25-location franchisee than for Panda at 2,300 locations. (Taylor Transcript, ~20:39) But Roger Goldstein described a year-long billing error at Panda's scale that ENGIE's system missed. The value of pattern detection over threshold detection presumably increases with portfolio size, not decreases. Understanding the crossover point — where Clear Current's accuracy advantage over ENGIE's threshold system generates enough provable dollar value to justify a SaaS subscription on top of an existing ENGIE contract — is essential for pricing and positioning.

_How to get this:_ Model it. Take Roger's neighbor-electricity example (one year of a location's electricity bill paid to the wrong entity), multiply by the probability of similar errors across 2,600 locations, and compare to Clear Current's annual subscription cost. That is the ROI calculation ENGIE's clients need to see.
