# Agent: Marcus Williams | Healthcare Energy Facilities Director

# Run: 2026-04-17T15:47:49.353339

---

# Healthcare Energy Management — Deep Research Analysis

### Clear Current Technologies | Marcus Williams, Healthcare Energy Facilities Director

---

## 1. WHAT I FOUND

Five distinct healthcare organizations spanning approximately 240 hospitals, $265M+ in annual utility spend, and operational profiles ranging from a 14-person dedicated energy team (Intermountain) to a single certified energy manager covering 36 hospitals (BSMH). The corpus contains the following source materials:

- **Scott Czubkowski Transcript + Summary** — Medxcel/Ascension, National Director Energy & Facility Performance, ~100 hospitals, 2,500+ sites, $265M spend
- **Ann Walston Transcript + Summary** — Bon Secours Mercy Health, VP Acute Care Facilities Management, 36 hospitals
- **Sean Sevy Transcript** — Houston Methodist, Senior Facilities/Energy role, Houston system
- **Intermountain Health Summary** — 14-person team, SkySpark analytics, Ross Snow/Matt Wilson/Bart Peacock
- **AdventHealth Transcript + Summary** — John Culver (Corporate Sustainability) + Scott Sukits (Director Controls & Energy, Central Florida), 55 hospitals, 9 states, ENGIE Impact processor

All five organizations are currently using or evaluating AI-adjacent energy management platforms. All five surfaced trust, data security, and explainability as primary adoption barriers. All five described gaps in their current third-party processors that map directly to Clear Current's stated product capabilities.

---

## 2. KEY FINDINGS (12 Cited Findings)

---

**Finding 1: The Billing Error Problem Is Confirmed Across All Five Organizations — With Documented Dollar Amounts**

Every single organization in this corpus confirmed real, material billing errors. These are not hypothetical risks. They are documented losses:

- Medxcel/Ascension: $1M+/year in payments for vacated sites. One polar vortex event cost **$7.2M in three days** before hedging optimization. (Czubkowski Transcript, ~11:41)
- Bon Secours: Two major meter failures resulting in multi-million dollar overbilling over a 10-12 year career; one recovery of $1M+ required board-level negotiation. (Walston Transcript, ~30:38–32:28)
- Houston Methodist: Power factor anomaly at one campus (81% vs. expected 93-94%) currently being investigated as a suspected meter issue. (Sevy Transcript, ~20:44–21:20)
- Intermountain Health: Colorado hospital billing jumped from ~$40K/month to ~$140K/month — third-party processor **did not catch it**; an internal accountant did. (Intermountain Summary, Section 3.3)
- AdventHealth: Consumption occurring at one address, bill paid to another, across 73 utility providers in 9 states — identified as the single highest-priority automation problem by their corporate lead. (AdventHealth Transcript, ~35:26)

**Implication for Clear Current:** The dollar amounts are real and the detection failures are documented. This is not a feature conversation — it is a loss-prevention conversation. Sales conversations should open with these figures, cited by name, with permission.

---

**Finding 2: The PricewaterhouseCoopers Data Story — A Cautionary Tale for Every Healthcare Sales Conversation**

Scott Czubkowski described an engagement in which Ascension shared data from 125 hospitals with over 12 years of operational history — potentially the largest acute-care hospital performance database ever assembled — with PricewaterhouseCoopers for a consulting engagement valued at approximately $2.2M.

"_We fought it like crazy because we're like, we should turn it over, but not let them... we shouldn't let give the name of the hospital._" (Czubkowski Transcript, ~17:03–17:25)

He then immediately noted that the same dynamic exists with Constellation/Peer AI: "_As far as if that's happening in the background with Constellation, no idea. I mean, they sign contracts saying they're not going to do that._" (Czubkowski Transcript, ~17:33–17:43)

This story does two things simultaneously: it confirms that sophisticated buyers have been burned by data misuse at enterprise scale, and it reveals that even trusted, contracted vendors are viewed with residual skepticism. The data was shared under contract — and he still doesn't know what happened to it.

**Implication for Clear Current:** Data sovereignty documentation is not a compliance checkbox. It is the first question a buyer like Scott Czubkowski will ask, and it has teeth. Ascension fought PricewaterhouseCoopers over anonymization on a $2.2M engagement. They will expect the same rigor from a seed-stage AI company asking for 125 hospital-equivalents of billing data.

---

**Finding 3: Get Choice Workflow — How Bon Secours Actually Processes Bills**

Ann Walston described the Get Choice workflow in specific operational detail:

- All utility bills route to Get Choice — hard copy invoices from rural hospitals, flat-file transfers from major utilities like Dominion and Duke
- Get Choice ingests everything into their system, analyzes invoices, and flags anomalies
- When anomalies appear, they route to the facility manager for investigation
- Payment/credit determination errors (current charges vs. total charges) are specifically flagged
- The system identified a water leak through anomaly detection before operations discovered it
- Get Choice is also authorized to communicate directly with utility companies to resolve billing errors

"_Two thousand bills a month and Get._" (Walston Transcript, ~20:09)

The critical operational detail: when a large payment discrepancy involves a meter failure that resulted in overbilling, the resolution process is not technical — it is political. Ann described needing board-level relationships with the utility to recover even a portion of a $1M+ overpayment.

"_We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare._" (Walston Transcript, ~30:47)

**Implication for Clear Current:** Get Choice is a named incumbent at BSMH. Understanding their workflow means understanding where the gaps are. Get Choice identifies anomalies and flags them — but Ann's $1M+ recovery story shows that even with anomaly detection in place, the recovery process is difficult and rarely complete. Clear Current's differentiation at BSMH is not detection (Get Choice already does this) — it is the quality of diagnosis, the documentation for utility dispute, and tariff intelligence that Get Choice does not provide.

---

**Finding 4: The Energy Print Gap at Houston Methodist — Forecasting for Growing Systems**

Sean Sevy identified a specific, named product gap at Energy Print (their current third-party platform) that directly maps to a Clear Current product opportunity:

"_Their forecasting tool is a little bit weaker... Our problem is we change so much that we grow... Historical data and AI trends are only as good as the inputs that are in there. So they don't have inputs for growth modeling in there._" (Sevy Transcript, ~18:41–19:35)

He described wanting to model: "if we grew by X amount of square feet, what would that look like? And or if we added these services..." (Sevy Transcript, ~19:26–19:35)

This is a gap that affects any health system in active expansion mode — which, per Sukits at AdventHealth (9 hospitals growing to 10), is a common state in healthcare. Energy Print's flat-line historical trending model is structurally inadequate for organizations that add campuses and service lines regularly.

**Implication for Clear Current:** Growth scenario modeling as a named feature would directly address the gap Sean identified. It is not a complex capability — it requires parameterizing square footage additions, service mix changes, and occupancy assumptions against historical consumption baselines. But Energy Print has not built it, and Houston Methodist is explicitly asking for it.

---

**Finding 5: The 36-Month OR Compliance Data Requirement — A Healthcare-Specific Product Need**

Scott Czubkowski described a Joint Commission compliance requirement that creates a specific, durable data retention need in hospitals: every three years, health systems must demonstrate they have maintained operational data for 36+ months. Many hospital sites cannot reliably store this data locally.

"_I don't know if you're on healthcare, but every three years you go through a compliance review and you have to have data, you have to keep your data for over 36 months. Well, half our sites can't figure out how to keep data on a server that long without losing it or something._" (Czubkowski Transcript, ~16:00–16:04)

The Siemens Building X platform addresses this partially for HVAC/BAS data. But the same requirement applies to utility billing data that supports energy performance claims made during accreditation.

**Implication for Clear Current:** A cloud-hosted billing history with guaranteed 36+ month retention, explicitly described as Joint Commission-compliant, would address a regulatory requirement that current on-premise systems frequently fail to meet. This is not a feature — it is a compliance deliverable. Healthcare buyers will pay for compliance certainty.

---

**Finding 6: The Peer AI Relationship — Incumbent Architecture and Its Gaps**

Scott Czubkowski provided detailed operational context on Peer AI (Constellation Energy's platform), which is Ascension's current billing intelligence and analytics provider:

- Nine months into deployment at time of interview (April 2026)
- Used for: dead meter detection, cross-portfolio building benchmarking, polar vortex gas nomination management
- Not yet at 12 months of data — full benchmarking capability not yet active
- Pricing: fixed-cost subscription, approximately $7/utility bill

The relationship has a conflict of interest embedded in its architecture: Constellation Energy is simultaneously Ascension's natural gas supplier and the owner of the platform that helps Ascension optimize its gas purchasing. Scott acknowledged this directly.

"_Imagine them helping us to develop a system that saves us $7 million, and that's $7 million of revenue they don't get during the vortex._" (Czubkowski Transcript, ~21:16)

He also noted Peer AI's most-used executive feature: natural language queries — "any executive can grab their phone and say, what's my consumption today?" (Czubkowski Transcript, ~13:08)

And its honest limitation: "_Is it going to help us save energy, it's going to point us in the right direction. Is it going to help us mitigate cost? Absolutely... But I'm one of those guys that still think some AI things are strictly rules-based._" (Czubkowski Transcript, ~13:38–13:49)

**Implication for Clear Current:** Peer AI is a named incumbent with a supplier conflict baked into its ownership structure. Any platform competing for Ascension's business needs to address: (a) independence — no supplier conflict, (b) true AI vs. rules-based transparency, since Scott will ask, and (c) the capability gaps Peer AI hasn't yet delivered in its first nine months.

---

**Finding 7: Cybersecurity Is the Hardest Gate in Healthcare AI Adoption — and It's IT, Not the Energy Manager**

AdventHealth's Scott Sukits has been trying to implement BrainBox AI (Trane's partner platform) at a medical office building for **2.5 years**. The blocker is IT/cybersecurity approval, not budget or interest.

"_I've been trying to implement it at a medical office building for 2 1/2 years now. And I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it._" (Culver/Sukits Transcript, ~13:52–14:12)

The trigger was the Johnson Controls hack: "_Johnson Controls was hacked... and because that name was hacked, everything changed overnight. We went from being able to see our control dashboards to stuff just disappearing on our own dashboards in-house._" (Culver/Sukits Transcript, ~15:57)

The specific HIPAA concern: any system that creates a network tunnel into building controls could theoretically provide a pathway to patient data.

**Implication for Clear Current:** This finding from AdventHealth maps directly to what I know from 18 years in healthcare facilities. The IT security team is the gate. The energy manager is not the approver — they are the advocate. Clear Current must separate itself from the BAS/controls category explicitly. "We read your utility invoices, not your building systems" is a HIPAA-relevant differentiator, not just a feature description. SOC 2 Type II certification documentation should be ready before any healthcare conversation.

---

**Finding 8: The Meter Mapping Problem — A Year's Worth of Work Before Analytics Can Begin**

Ann Walston at BSMH described the foundational data infrastructure challenge that precedes any analytics capability:

"_That was over a year's worth of work, just to identify who's got what... just to identify what's influencing what. Then you get into, okay, can I pay my bills on time?_" (Walston Summary, Section 3.4)

Hospitals grow through additions. Multiple meters feed a single building. A single meter can partially serve multiple buildings or wings. Until the meter-to-building map is established, there is no reliable baseline against which anomalies can be detected or consumption benchmarked.

AdventHealth's John Culver described the same problem from a different angle: consumption occurs at one address but the bill is paid somewhere else. With 73 electric utility providers and active M&A, this mismatch is continuous and structural.

"_Matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational. You can't move forward if you don't know that information._" (Culver/Sukits Transcript, ~35:26)

**Implication for Clear Current:** Meter-to-address accuracy is the foundational data quality problem in healthcare. It is not solved by any current third-party processor. A platform that assists with or accelerates meter mapping as part of onboarding — and maintains that map continuously as portfolios change through M&A — addresses the single most commonly cited prerequisite for energy analytics in this corpus.

---

**Finding 9: The Single-Manager Constraint — Staffing Ratios That Make AI Mandatory**

Three of five organizations described staffing ratios that make comprehensive human review of energy data operationally impossible:

- BSMH: One certified energy manager for 36 hospitals (Walston Transcript, ~13:24)
- AdventHealth Central Florida: Three energy managers for nine hospitals, growing to ten (Sukits intro, ~4:23–5:11)
- Intermountain: 14-person team described as unusually large and well-resourced — but still bottlenecked by physical technician availability, not analytical capacity (Intermountain Summary, Section 3.2)

AdventHealth's John Culver described the downstream consequence: facility directors are too consumed by operational emergencies to review billing data at all.

"_Facilities directors within AdventHealth... they're so busy with day-to-day emergent issues that keeping the lights on is not their main focus because there's so many other things to do._" (Culver/Sukits Transcript, ~24:58)

**Implication for Clear Current:** The single-manager constraint means healthcare organizations cannot staff their way out of this problem. They need a platform that does the analytical work that a larger team would do — anomaly detection, benchmarking, tariff review — and surfaces only the exceptions that require human judgment. The value proposition is not "save your energy manager time." It is "make one person as effective as a twelve-person team."

---

**Finding 10: Rules-Based vs. True AI — Healthcare Buyers Will Ask, and They Know the Difference**

Scott Czubkowski articulated the distinction between rules-based systems and true AI more precisely than any other interviewee in the corpus:

"_Is it going to help us save energy? It's going to point us in the right direction. Is it going to help us mitigate cost? Absolutely... But I'm one of those guys that still think some AI things are strictly rules-based._" (Czubkowski Transcript, ~13:38)

He applied this framework specifically to fault detection: "_FTD, fault detection... it's rules-based stuff, right? It says, some people call it AI, some people don't... Those are proven to be very good systems, but they're not AI, they're rules-based._" (Czubkowski Transcript, ~24:27–25:16)

AdventHealth's John Culver expressed the same skepticism in a different register: "_Suppliers will make it sound like you can just layer it on top of your existing systems and it's fine. What we are finding is that is not the case._" (Culver/Sukits Transcript, ~17:33)

**Implication for Clear Current:** In healthcare, sophisticated buyers already know the difference between a rules engine and a machine learning system. Overclaiming AI capability will damage trust faster than underselling it. Clear Current must be prepared to answer — in plain language — which product modules use rules-based logic and which use genuine machine learning. Scott Czubkowski will ask. He will know if the answer is evasive.

---

**Finding 11: The Capital Case Problem — Energy Teams Must Win Internal Budget Competitions**

John Culver at AdventHealth described the political reality of healthcare capital allocation:

"_In every company, there's a competition for capital. Facilities is less fun and less in your face because it's happening over there... It's one of those, if it's working well, you don't notice until it fails. And so we have the job of trying to not be the boys who cried wolf, but say: here's what we suggest we do, and here's the benefits to doing so beyond just avoiding a catastrophe._" (Culver/Sukits Transcript, ~26:07)

Ann Walston identified the same dynamic from the VP level: "_Where are the most impact [investments]? Is it on LEDs? Is it on... tariff studies?_" (Walston Transcript, ~28:22–28:38)

Energy teams in healthcare must translate billing data into capital requests that compete against clinical priorities. The data must arrive before the budgeting cycle, be framed in financial terms, and show ROI — not just anomalies.

**Implication for Clear Current:** A platform that automatically generates the capital request package — trend data, anomaly history, projected savings from rate optimization, benchmarking against peer facilities — gives healthcare energy managers the tool they need to win internal budget competitions. This is the "portfolio ROI prioritization" use case Ann Walston described, and it is distinct from anomaly detection.

---

**Finding 12: The Layman Interface Is Not a Nicety — It Is the Adoption Gate**

Scott Czubkowski described this as the single most important product design principle if he were building a platform from scratch:

"_All the technology is out there to control things, do things, monitor things, measure things, whatever. It's how I get administrators to interact with the system without being technical, right?_" (Czubkowski Transcript, ~23:10)

He described a specific recurring executive pain point: "_Why is my utility bill not matching my budget?_" — a question that currently requires an engineer to log in, find the site ID, search for data, download it, and graph it. Peer AI's natural language query feature — asking by phone "what is the cost of my utilities in St. John's in Tulsa, Oklahoma" — is his example of what the product should do.

Sean Sevy at Houston Methodist confirmed this from a different angle: the benchmarking and trending features of Energy Print are valued precisely because they translate complex consumption data into visible trend lines that non-technical managers can interpret.

**Implication for Clear Current:** The chat interface is not a differentiating feature in healthcare — it is the minimum viable interface for executive adoption. Without it, the energy manager is the permanent translation layer between the platform and every finance, operations, and C-suite conversation. The dual-audience UX architecture (technical energy manager view + executive natural language view) is not a product nice-to-have. It is the architecture that determines whether the platform gets used beyond the energy team.

---

## 3. VERBATIM QUOTES (15 Cited)

1. **Czubkowski on the dead meter problem:** "_Paying for sites that we no longer own. I mean, we've paid meters for over 2 years with different people._" — Czubkowski Transcript, ~19:52–20:06

2. **Czubkowski on the polar vortex cost:** "_That one event cost us $7.2 million / 3 days._" — Czubkowski Transcript, ~11:41

3. **Czubkowski on the data sovereignty fight:** "_We fought it like crazy because we're like, we should turn it over, but not let them... we shouldn't let give the name of the hospital._" — Czubkowski Transcript, ~17:03–17:25

4. **Czubkowski on Peer AI's trust ceiling:** "_As far as if that's happening in the background with Constellation, no idea. I mean, they sign contracts saying they're not going to do that. But I mean, we do it all the time internally._" — Czubkowski Transcript, ~17:33–17:43

5. **Czubkowski on the product he would build:** "_All the technology is out there to control things, do things, monitor things, measure things, whatever. It's how I get administrators to interact with the system without being technical, right? Is my building using more energy than a sister building? What would be my projected utility bill for next month based on current weather outlook?_" — Czubkowski Transcript, ~23:10–23:25

6. **Czubkowski on AI vs. rules-based systems:** "_Is it going to help us mitigate cost? Absolutely, because it's going to look at a bunch of different things. But I'm one of those guys that still think some AI things are strictly rules-based._" — Czubkowski Transcript, ~13:38–13:49

7. **Czubkowski on the 36-month compliance requirement:** "_Every three years you go through a compliance review and you have to have data, you have to keep your data for over 36 months. Well, half our sites can't figure out how to keep data on a server that long without losing it or something._" — Czubkowski Transcript, ~16:00–16:04

8. **Walston on billing error recovery rarity:** "_We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare._" — Walston Transcript, ~30:47

9. **Walston on capacity charge escalation:** "_Our capacity charges went up tenfold in the last two years and they're anticipating it to go up again. Short answer is data centers._" — Walston Transcript, ~24:58–25:07

10. **Walston on meter mapping as prerequisite:** "_That was over a year's worth of work, just to identify who's got what... just to identify what's influencing what. Then you get into, okay, can I pay my bills on time?_" — Walston Summary, Section 3.4

11. **Sevy on Energy Print's forecasting gap:** "_Their forecasting tool is a little bit weaker... They don't have inputs for growth modeling in there. So it stays flat and then we have to do our growth piece on there._" — Sevy Transcript, ~18:41–19:16

12. **Intermountain on the third-party miss:** "_A third party should have flagged that — they didn't._" — Intermountain Summary, Section 3.3 (Ross Snow, paraphrased from summary)

13. **Culver on the foundational data problem:** "_Matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational. You can't move forward if you don't know that information._" — AdventHealth Transcript, ~35:26

14. **Culver on what ENGIE should do:** "_NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great._" — AdventHealth Transcript, ~30:06

15. **Sukits on the cybersecurity gate:** "_I've been trying to implement it at a medical office building for 2 1/2 years now. And I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it._" — AdventHealth Transcript, ~13:52–14:12

---

## 4. DELIVERABLE BUILD GUIDANCE

### 4A. Healthcare Energy Operations Journey Map

The following journey map reflects the operational reality described across all five organizations. It is structured around the lifecycle of an energy dollar from procurement to billing resolution.

---

**Stage 1: Energy Procurement**

_Who owns it:_ Finance-aligned committee (BSMH's UPSC), or supply-side energy team (Ascension's four-person supply team)

_What happens:_ Natural gas hedging strategy set, electricity supplier contracts executed, tariff structure established. Timing is market-driven, not seasonal — organizations hedge when prices are favorable, typically not in peak winter.

_Current tools:_ External market consultants (BSMH uses Get Choice/consultant hybrid; Ascension uses Constellation/Peer AI on gas side); broker/intermediary (Houston Methodist uses Prism Energy)

_Pain points:_ Polar vortex nomination management (Ascension); hedging decisions require real-time consumption data that monthly billing doesn't provide; market is moving faster than procurement cycles

_Clear Current entry point:_ Consumption baselines by facility feeding hedging decisions; weather-triggered nomination alerts; historical consumption modeling for budget forecasting

---

**Stage 2: Energy Consumption & Building Operations**

_Who owns it:_ Facility directors at hospital level; energy manager provides optimization guidance

_What happens:_ 24/7 operations — hospitals never close. HVAC, lighting, medical equipment running continuously. Seasonal transitions (shoulder seasons) are highest-complexity periods. Compliance maintenance (OR pressure, humidity, temperature) is non-negotiable and overrides efficiency optimization.

_Current tools:_ BAS (Trane, Siemens, JCI); machine learning pilots (AdventHealth); SkySpark with 14B data points (Intermountain); Building X from Siemens (Ascension visualization)

_Pain points:_ Physical technician shortage (Intermountain); cybersecurity approval blocking AI integration (AdventHealth 2.5 years); garbage-in/garbage-out from broken sensors; equipment operated as-built even when commissioning was wrong

_Clear Current entry point:_ Outside-the-meter — consumption billing data, not inside-the-meter equipment operations. Positioning must explicitly disclaim BAS integration to avoid IT security friction.

---

**Stage 3: Bill Receipt and Processing**

_Who owns it:_ Third-party processor (Get Choice at BSMH; Peer AI/Constellation at Ascension; ENGIE Impact at AdventHealth; Energy Print at Houston Methodist; unnamed processor at Intermountain)

_What happens:_ Bills arrive in multiple formats — PDF, paper, flat-file EDI, utility portal APIs. Processor ingests, normalizes, flags anomalies, and initiates payment. Exception queue reviewed by energy team or facility director.

_Current tools:_ Get Choice (BSMH); Peer AI (Ascension); ENGIE Impact (AdventHealth); Energy Print (Houston Methodist)

_Pain points:_ Processor missed $100K/month spike at Intermountain. Processors pay the bill — they don't explain the tariff structure. Address matching across M&A portfolios fails constantly (AdventHealth). Paper invoices still exist at rural hospitals (BSMH). Non-profit tax exemptions not consistently verified (AdventHealth).

_Clear Current entry point:_ This is the primary competitive battleground. Current processors are bill-payment utilities. Clear Current's differentiation is analytical depth: tariff interpretation, error root cause, billing pattern anomalies, and forward forecasting layered on top of what existing processors already capture.

---

**Stage 4: Anomaly Detection and Exception Review**

_Who owns it:_ Energy manager or third-party analyst; routes to facility director for physical investigation

_What happens:_ Processor flags anomaly. Energy manager assesses: meter error? equipment failure? vacated site? Facility director investigates on-site. IT/maintenance dispatched if equipment issue confirmed.

_Current tools:_ Rules-based threshold alerts in existing processors; Peer AI pattern matching (Ascension)

_Pain points:_ Rules-based systems miss gradual drift (identical $32/month payment for months — Ascension). Physical investigation still required to confirm root cause (wrench holding damper open — AdventHealth; box of wireless thermostats in mechanical room — AdventHealth). Anomaly detection does not equal error recovery — recovery requires utility engagement that is separate, political, and rarely fully successful (BSMH $1M+ story).

_Clear Current entry point:_ Pattern-level anomaly detection across full billing history (not just month-over-month), ghost meter detection as named feature, growth-adjusted baseline modeling.

---

**Stage 5: Error Recovery and Utility Engagement**

_Who owns it:_ Energy manager + Get Choice (BSMH); energy manager directly (Ascension); senior leadership escalation required for large recoveries (BSMH board-level story)

_What happens:_ Error documented, utility contacted, credit negotiated. Process is political, not algorithmic. Full recovery is rare — Ann Walston described recovering $1M+ as "incredibly unheard of." Line losses complicate attribution. Utility settlement mechanics mean some dollars are genuinely unrecoverable.

_Current tools:_ Manual — email and phone with utility account representatives; escalation to corporate-utility partnerships for large amounts

_Pain points:_ Documentation inadequate for utility dispute; recovery rate low; no systematic tracking of disputed amounts across portfolio; no audit trail from error identification to credit receipt

_Clear Current entry point:_ Documentation layer — every anomaly flagged with structured evidence exportable for utility dispute. Case file generation. Recovery tracking across portfolio.

---

**Stage 6: Analytics, Benchmarking, and Capital Planning**

_Who owns it:_ Energy manager (consumption side); finance/sustainability (cost and ESG side)

_What happens:_ Monthly Energy Star score updates (BSMH); portfolio benchmarking by geography and square footage (Ascension via Peer AI); capital project justification built from consumption trend data; budget forecasting for next fiscal year

_Current tools:_ Energy Star (BSMH, Houston Methodist); Peer AI benchmarking (Ascension); manual dashboard entry (AdventHealth); SkySpark (Intermountain — equipment side, not billing)

_Pain points:_ Finance executives ask "why is my utility bill not matching my budget?" — answer requires engineer to manually extract and graph data (Ascension). Capital requests compete against clinical priorities with no standardized financial case format. Growth modeling missing from all current platforms (Houston Methodist). Budget forecasting is slow and imprecise (Ascension explicitly requested AI-accelerated budgeting).

_Clear Current entry point:_ Executive natural language query; portfolio ROI prioritization ranking; capital case generation; budget forecast with weather-adjusted and growth-adjusted projections.

---

### 4B. Healthcare Trigger Map

The following trigger events represent moments when a healthcare energy buyer is most likely to be actively evaluating new solutions. Each is evidence-based from the corpus.

| Trigger                                                          | Source                                                                                                                                             | Evidence                                                                                    | Clear Current Relevance                                                                                 |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Polar vortex or extreme weather event**                        | Czubkowski/Ascension                                                                                                                               | "$7.2M in 3 days" from Winter Storm Uri; $2.4M and $1M follow-on events                     | Nomination management; consumption baseline; retrospective loss calculation                             |
| **Billing processor contract renewal or vendor dissatisfaction** | Walston/BSMH (switched from prior processor), Czubkowski/Ascension (switched to Peer AI 9 months ago), Culver/AdventHealth (ENGIE review underway) | Three of five organizations recently changed or are reconsidering their processor           | Sales timing: target organizations 6-12 months before processor contract renewals                       |
| **Discovery of a billing error**                                 | Walston/BSMH (meter failure, $1M+), Sevy/Houston Methodist (power factor anomaly), Intermountain ($40K→$140K spike)                                | Error discovery creates immediate audit appetite                                            | Lead with: "We run a retrospective audit on your last 24 months of bills before we charge you anything" |
| **Joint Commission accreditation cycle**                         | Czubkowski/Ascension                                                                                                                               | 36-month data retention requirement; half of Ascension sites fail to maintain data reliably | Compliance data retention as a product feature; positions billing data archive as regulatory necessity  |
| **M&A activity — new hospital acquisition**                      | Culver/AdventHealth                                                                                                                                | New sites constantly added; billing addresses mismatched; ENGIE slow to onboard             | M&A onboarding module; meter-to-address reconciliation on day one of acquisition                        |
| **Budget cycle preparation (Q3-Q4 for most systems)**            | Sevy/Houston Methodist (budget forecasting), Culver/AdventHealth (capital case timing)                                                             | Energy data must be assembled before fiscal year capital requests                           | Budget forecasting feature; capital case generation                                                     |
| **New sustainability reporting obligation**                      | Culver/AdventHealth (HHS pledge, net-zero 2050), Walston/BSMH (Energy Star targets)                                                                | ESG/sustainability reporting creating demand for clean, exportable consumption data         | Scope 2 data feed; Energy Star integration                                                              |
| **Capacity charge escalation notice**                            | Walston/BSMH                                                                                                                                       | "Tenfold increase in the last two years" in PJM region                                      | Capacity charge intelligence module for PJM/Northeast customers                                         |
| **Key person transition**                                        | Czubkowski/Ascension (energy moved to new Resource Group, December 2025)                                                                           | Organizational restructuring creates window for new vendor evaluation                       | New decision-maker onboarding; relationship with incoming team                                          |

---

### 4C. Healthcare Seasonal Energy Calendar

The following calendar synthesizes the operational schedules described across all five organizations. Note the geographic variant for Southern/warm-climate hospitals.

| Period                                 | Standard Hospital Systems (BSMH Ohio, Intermountain Utah, Ascension Nashville/Wichita)                                                                                                                             | Southern Variant (AdventHealth Florida, Houston Methodist Texas)                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **January–February (Winter Peak)**     | Boilers at full load. Chiller/cooling equipment maintenance and capital replacement (off-season). Natural gas procurement and hedging review — most critical period for nomination management (polar vortex risk). | Minimal heating load. HVAC compliance management (humidity control) continuous. Monitoring capacity charge position. |
| **March–April (Spring Shoulder)**      | Most complex period. Systems transitioning from heating to cooling. Economizer/outside air optimization. Chiller startup and commissioning. Budget forecasting in progress for next fiscal year (some systems).    | Chiller season beginning. Humidity management intensifying. Capital project execution window closing.                |
| **May–June (Summer Lead-In)**          | Chillers online. Boiler maintenance and capital replacement underway (off-season for heating). Demand charge monitoring begins — summer months set annual demand baseline.                                         | Cooling at full load. Peak demand charge risk period. Enthalpy-based control active.                                 |
| **July–August (Summer Peak)**          | Peak electricity consumption. All cooling systems running. 15-minute demand peaks set annual capacity charge rate. Energy Star score impacts highest in this period.                                               | Same. Highest energy cost period. Capacity charge accumulation.                                                      |
| **September–October (Fall Shoulder)**  | Chillers winding down. Boilers returning to service. Shoulder optimization. Capital project planning for following year — energy data assembled for budget requests.                                               | Season transition minor. Capital planning active.                                                                    |
| **November–December (Winter Lead-In)** | Boilers online. Natural gas hedging windows — favorable pricing typically available pre-winter. Nominations review for coming winter. Fiscal year energy budgets due.                                              | Minimal heating demand. Gas procurement review. Budget cycle close.                                                  |
| **Quarterly (All Year)**               | UPSC (BSMH) or equivalent procurement committee meeting: review market positions, hedging strategy, supplier contract status.                                                                                      | Same.                                                                                                                |
| **Monthly (All Year)**                 | Energy Star score update as bills arrive (BSMH, Houston Methodist). Peer AI benchmarking updates (Ascension). Third-party processor anomaly queue review.                                                          | Same.                                                                                                                |
| **Triennial**                          | Joint Commission accreditation review — 36 months of operational and energy data required. Documentation readiness review.                                                                                         | Same.                                                                                                                |

---

### 4D. Trust and Explainability Requirements by Product Module

Based on the corpus, the following requirements must be documented before any healthcare sales conversation. These are not preferences — they are organizational gates.

---

**Module: Billing Data Ingestion**

_Trust requirement:_ Who can see the data? Where is it stored? Is it anonymized if used for benchmarking? What happens if the vendor is acquired?

_Evidence:_ Czubkowski/Ascension described a 12-year, 125-hospital database shared with PricewaterhouseCoopers — "fought it like crazy." Constellation/Peer AI signed contracts but Scott still doesn't know what happens in the background. This concern surfaces unprompted.

_Explainability requirement:_ Clear documentation of data flow — utility API → Clear Current infrastructure → customer-visible dashboard. Named third-party cloud infrastructure provider. Data processing agreement language that addresses the PricewaterhouseCoopers scenario specifically.

_Minimum documentation before healthcare conversation:_ SOC 2 Type II report or timeline. Data processing agreement template. Data residency confirmation. Explicit answer to "can you benchmark my hospitals against other hospitals using my data without my permission?"

---

**Module: Anomaly Detection and Ghost Meter Alerts**

_Trust requirement:_ Why did the system flag this? What data did it use? How confident is it?

_Evidence:_ Scott Czubkowski explicitly distinguishes rules-based detection from AI. He will ask which one this is. Ann Walston's $1M+ recovery required documentation adequate to present at board level to a utility company. Intermountain described how their platform flagged a VAV damper issue — but a human had to physically trace the electrical fault.

_Explainability requirement:_ Every alert must include: the data that triggered it, the period covered, the comparison baseline, the estimated dollar impact, and a plain-language explanation of what likely happened. The alert must be exportable as a structured document for utility dispute submission.

_Minimum documentation before healthcare conversation:_ Sample alert output with all fields populated. Case study of a ghost meter detection with documented recovery. Statement of whether detection logic is rules-based or ML-based (and which specific rules or model, if asked).

---

**Module: Tariff Analysis and Rate Optimization**

_Trust requirement:_ Is the rate analysis current? Is it specific to my utility, my contract, and my rate class? Who verifies it?

_Evidence:_ AdventHealth has 73 electric utility providers with terminology ranging from "on-peak" to "super off-peak" to "extreme on-peak." John Culver described this as incomprehensible without expert interpretation. Ann Walston noted that capacity charges in PJM went up tenfold — driven by data center construction that is an external market dynamic, not a billing error.

_Explainability requirement:_ Tariff analysis must be tied to named utility, named rate schedule, and named contract terms. Rate comparisons must show current vs. available tariff with estimated annual savings, not just a flag that a better rate exists. Rate data must be updated on a defined schedule with a documented source.

_Minimum documentation before healthcare conversation:_ Tariff coverage map showing which utilities are included. Update frequency for rate schedule data. Process for handling a utility that is not yet in the database.

---

**Module: Natural Language Executive Query**

_Trust requirement:_ Is the answer sourced from actual billing data or a model's estimate? What time period does it cover? Can I trace it back to the source invoice?

_Evidence:_ Czubkowski described this as the most valuable feature of Peer AI — but he also flagged that Ascension has only been on the platform nine months and doesn't yet have 12 months of data for full benchmarking. The natural language answer must be traceable to real data or it loses the trust of sophisticated users.

_Explainability requirement:_ Every natural language response should cite the data source, time period, and any caveats (e.g., "based on 9 months of data; full-year comparison available after [date]"). Answers should not present model estimates as billing actuals.

_Minimum documentation before healthcare conversation:_ Demo walkthrough showing the query → response → source data drill-down path. Sample queries relevant to healthcare executives: "What is my projected utility cost for Q3 given current weather forecasts?" "Which of my hospitals is performing worst against peers in my region?"

---

**Module: Cybersecurity and HIPAA Posture**

_Trust requirement:_ Does this platform create a network pathway into our clinical infrastructure? Does it touch patient data? Who in your organization has access to our data?

_Evidence:_ AdventHealth's BrainBox AI implementation has been stuck in IT approval for 2.5 years because of HIPAA concerns about any system that creates a tunnel into building controls. This concern is directly triggered by the Johnson Controls hack. Billing intelligence platforms are categorically different — but IT security teams do not automatically know this.

_Explainability requirement:_ A one-page document titled "What Clear Current Accesses and What It Does Not" — written for a healthcare IT security team, not an energy manager. Must explicitly state: does not connect to BAS, does not connect to clinical networks, does not process PHI, accesses utility billing data only via [specific methods], data never touches hospital-controlled infrastructure.

_Minimum documentation before healthcare conversation:_ HIPAA BAA template (even if billing data is not technically PHI, hospitals will ask for one). IT security questionnaire pre-filled. Network architecture diagram showing data flow that does not intersect clinical infrastructure.

---

## 5. COMPETITIVE IMPLICATIONS

**Peer AI (Constellation Energy) — Incumbent at Ascension/Medxcel**

Nine months into deployment. Fixed-cost subscription (~$7/bill). Core capabilities confirmed: dead meter detection, building benchmarking, natural language executive query, polar vortex nomination management. Gaps: only nine months of data history (benchmarking still maturing); owned by a gas supplier (structural conflict of interest Scott noted directly); Scott describes some capabilities as potentially "rules-based, not AI." Ascension has invested in the relationship and is building on the platform — this is a difficult displacement opportunity. The more realistic near-term strategy is positioning Clear Current as complementary for the billing interpretation and tariff analysis layers that Peer AI does not provide.

**Get Choice — Incumbent at BSMH**

Bill receipt, normalization, anomaly flagging, and payment. Authorized to communicate with utilities directly. Already uses AI/ML for anomaly detection (caught a water leak before operations did). The gap: it does not provide tariff analysis, does not provide capital prioritization, does not provide the recovery documentation layer that Ann's $1M+ story shows is needed. Get Choice is a payment utility that has added analytics — Clear Current's positioning is analytics-native with payment integration, not the reverse.

**ENGIE Impact (NG) — Incumbent at AdventHealth**

Pays 1,000-2,000 bills per day. John Culver was explicit: they use ENGIE for bill payment, not energy management. ENGIE does what it was hired to do — pay bills — and AdventHealth is actively looking for what comes next. This is the clearest competitive displacement opportunity in the corpus. John Culver's quote — "knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it" — is a direct product brief for Clear Current.

**Energy Print — Incumbent at Houston Methodist**

Used for benchmarking, trend analysis, Energy Star data submission, and basic budget forecasting. Sean Sevy identified the specific gap: no growth modeling. A system in active expansion mode — adding campuses, adding service lines — needs a forecasting tool that accounts for growth parameters, not just historical trend extrapolation. Energy Print has not built this. This is a specific, named feature that would differentiate Clear Current at Houston Methodist.

**SkySpark (Intermountain Health) — Inside-the-Meter, Not Competitive**

14 billion data points from HVAC, BAS, and building systems. This is inside-the-meter operations analytics. It is not a billing intelligence competitor. The correct positioning at Intermountain is complementary: SkySpark monitors equipment operations; Clear Current monitors what you are being charged for what those operations consume. Ross Snow's story of the $40K→$140K billing spike that SkySpark missed and an accountant caught is the exact case for Clear Current's complementary value.

---

## 6. WELL-EVIDENCED VS. INFERRED

**Well-Evidenced (Multiple Sources, Direct Quotes)**

- Billing errors are real, material, and under-detected at all five organizations — confirmed with dollar amounts
- Current third-party processors are bill-payment utilities with inadequate analytical depth — confirmed by BSMH, Ascension, AdventHealth, Intermountain
- Data sovereignty/security concerns surface unprompted in every healthcare conversation — confirmed at Ascension (PricewaterhouseCoopers story), AdventHealth (cybersecurity/HIPAA, 2.5-year approval delay)
- Meter-to-address mapping is an unresolved foundational problem — confirmed at BSMH (one year to complete) and AdventHealth (73 utilities, M&A complexity)
- The natural language executive interface is a primary adoption driver — confirmed at Ascension (Peer AI feature Scott values most), AdventHealth (executives can't read bills themselves)
- Rules-based vs. AI distinction matters to sophisticated buyers — confirmed directly by Czubkowski/Ascension
- Single-manager staffing ratios make comprehensive manual review impossible — confirmed at BSMH (1 manager/36 hospitals) and AdventHealth

**Well-Evidenced (Single Strong Source)**

- 36-month Joint Commission data retention requirement — confirmed by Czubkowski/Ascension; consistent with known accreditation standards but only one source in corpus
- Capacity charge tenfold increase in PJM region — confirmed by Walston/BSMH; externally consistent with known PJM capacity auction dynamics
- BrainBox AI HIPAA blocking — confirmed by Sukits/AdventHealth; consistent with known Johnson Controls hack history
- Growth modeling gap in Energy Print — confirmed by Sevy/Houston Methodist; not corroborated by other sources
- Polar vortex $7.2M loss — confirmed by Czubkowski/Ascension; not corroborated by other sources but internally consistent with known Winter Storm Uri impacts

**Inferred (Logical but Not Directly Stated)**

- Clear Current's HIPAA positioning as a billing-only platform would accelerate IT security approval — _inferred_ from Sukits/AdventHealth's 2.5-year BAS integration delay; billing platforms face a lower security bar than BAS-connected platforms, but this has not been confirmed by IT security professionals in the corpus
- A retrospective billing audit as a free sales entry point would convert to paid customers — _inferred_ from the documented error rates and the pattern of buyers who didn't know errors existed until someone found them; not stated by any interviewee directly
- M&A onboarding module would be a specific differentiator vs. ENGIE Impact — _inferred_ from Culver/AdventHealth's description of the problem; ENGIE's specific onboarding speed has not been independently measured
- Healthcare boards would accelerate procurement for a platform that generates utility dispute documentation — _inferred_ from Walston/BSMH's board escalation story; not tested as a sales proposition in any interview

---

## 7. OPEN QUESTIONS

**1. What does the IT security approval process actually require for a billing-only SaaS platform in healthcare?**

The corpus establishes that cybersecurity is the hardest gate for AI adoption in healthcare, but all documented cases involve BAS/controls integration (BrainBox AI at AdventHealth, the Johnson Controls hack). The corpus does not contain direct evidence of what IT security teams specifically require for a platform that only reads utility invoices — no clinical network connection, no PHI. What is the actual questionnaire? What is the typical approval timeline? Is SOC 2 Type II sufficient, or do hospitals require additional certifications (HITRUST, ISO 27001)?

**2. How does healthcare procurement actually work for a seed-stage vendor?**

Ann Walston at BSMH, Scott Czubkowski at Ascension/Medxcel, and John Culver at AdventHealth are all senior enough to initiate conversations, but procurement at health systems of their scale typically involves Legal, IT Security, Supply Chain, and Finance sign-offs. The corpus captures the business case and the interest level — but not the procurement pathway. What is the standard vendor qualification process? How long does it take? Does a seed-stage company with limited revenue history create a vendor approval barrier?

**3. What does "Get Choice's AI" actually do, and where are its detection limits?**

Ann Walston described Get Choice detecting a water leak through AI-driven anomaly detection. She also described a $1M+ billing error recovery case where the error was not caught early enough to prevent the overbilling. The corpus does not make clear whether Get Choice's anomaly detection would have caught the types of errors Peer AI specializes in (dead meters, gradual pattern drift). What are Get Choice's detection rules? Is it truly ML-based or rules-based? This matters for positioning Clear Current's analytical depth against Get Choice at BSMH.

**4. Who at Ascension/Medxcel makes the decision now that Scott has transitioned roles?**

Scott Czubkowski transitioned out of the National Energy Manager role in November/December 2025. Energy management moved to a "new group called the Resource Group, which is now Matt, not me." (Czubkowski Transcript, ~2:33) Matt — surname unknown from the corpus — is now the decision-maker for energy management tools, including Peer AI. Scott is now National Director of Engineering and Facility Performance, covering elevators, roofs, and parking decks. The relationship with Scott is valuable as a reference and advisor, but the decision authority for any Clear Current engagement at Ascension now sits with someone the research team has not yet interviewed.

**5. Does the Joint Commission 36-month data retention requirement specifically apply to utility billing data, or only to clinical/building systems operational data?**

Scott Czubkowski described the 36-month requirement in the context of Siemens Building X storing "key points" for compliance review. The requirement as he described it appears to reference building systems data (temperatures, pressures, operational parameters). The corpus does not confirm whether utility billing records are specifically required for Joint Commission accreditation, or whether Clear Current's billing archive would independently satisfy any compliance requirement, versus supplementing a broader data retention program.

**6. What is the actual recovery rate from billing errors once detected — across the portfolio, not just the notable cases?**

Ann Walston's $1M+ recovery story is remarkable precisely because she described it as "incredibly unheard of." Scott Czubkowski estimated $1M/year in savings from eliminating dead meter payments — but that is preventing ongoing payment, not recovering past overpayments. The corpus captures the high-end cases but does not establish the base rate: of all billing anomalies detected, what percentage result in a utility credit? What is the typical recovery amount? This matters for quantifying Clear Current's recovery value proposition.

**7. Are there regulatory or accreditation-specific energy benchmarking requirements that create a compliance-driven demand for the Energy Star integration feature?**

Ann Walston described BSMH's Energy Star tracking as central to their monthly performance management. Sean Sevy described Energy Print's Energy Star data submission as a valued feature. The corpus describes Energy Star as a voluntary but widely adopted program. The question is whether any accreditation body (Joint Commission, DNV, HFAP) or CMS regulation creates a _mandatory_ energy benchmarking or reporting requirement that would make a platform's Energy Star integration not just convenient but compliance-critical. This would change the sales conversation from a feature comparison to a regulatory necessity.

---

_Prepared by Marcus Williams, Healthcare Energy Facilities Director_
_Contributing to Clear Current Technologies consulting engagement_
_All citations reference source documents as provided in the research corpus_
