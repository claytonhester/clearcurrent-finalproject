# ENGIE Impact (Adam Zavadsky)

# Generated: 2026-04-17T15:31:11.775098

---

# ENGIE IMPACT — INTELLIGENCE CARD

_Prepared from Adam Zavadsky interview, April 14, 2026_

---

## COMPANY SNAPSHOT

| Field                    | Detail                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Company**              | ENGIE Impact (formerly ENGIE Insight / Ecova)                                                                                                                                                                            |
| **Industry**             | Outsourced Utility Bill Processing & Sustainability Consulting                                                                                                                                                           |
| **Size**                 | Enterprise-scale; processes 10,000+ accounts per month across multi-site commercial clients                                                                                                                              |
| **Annual Energy Spend**  | Not direct — they _manage_ energy spend for clients; Panda Restaurant Group (~2,600+ sites) is one named account                                                                                                         |
| **Current Energy Tools** | Proprietary client-facing portal (billing/consumption data); separate sustainability/emissions portal; OCR scanning hardware; electronic data feeds from large utilities; script-based web scraping for mid-tier vendors |
| **Currently Using AI**   | Yes — narrowly. Internal invoice processing only: scraping bill data to reduce manual keying, improve accuracy, and reduce labor. No AI deployed on client-facing analytics or consultative deliverables.                |

---

## WHO WAS ON THE CALL

**Adam Zavadsky**

- **Title:** Senior Account Manager, ENGIE Impact
- **Background:** Finance-first, not engineering. Spent ~10 years in investment banking (Piper Jaffray) before transitioning to energy consulting ~18 years ago through a college friend. His lens is operational scale, client relationships, and business model — not equipment specs or grid engineering.
- **Area of Ownership:** Manages enterprise client portfolios including Panda Restaurant Group. Responsible for the full service relationship: bill processing, waste consulting, sustainability advisory, and energy procurement consulting. Sits at the intersection of ENGIE's data infrastructure and client strategy conversations.

---

## THEIR ENERGY CALENDAR

ENGIE Impact does not operate on a traditional seasonal energy calendar in the way an end-use operator like Panda does. Their rhythm is continuous and volume-driven rather than cyclical. As Adam described it, the work never stops:

**Daily / Monthly (Always On):**

> _"Every site's probably got an electric bill, at least one electric bill, one natural gas bill, a water sewer bill, and a waste bill. So just think — you're thinking four or five accounts minimum per site. So now you're getting upwards of 10,000 accounts that need to be processed for payment a month."_

Invoice intake, OCR processing, manual keying, exception flagging, and payment runs happen continuously every month across the entire client portfolio. There is no "slow season" — the machine runs year-round.

**Reactive Moments (Triggered by Anomalies):**
When an incoming bill falls outside the historical tolerance range, ENGIE Impact goes into reactive mode — alerting the client, waiting for the client to investigate at the site level, and resolving the exception before payment. Adam gave two vivid examples:

> _"Is there a gas leak? Is there a water leak? Is something happening?"_

> _"Let's say water spiked on this past month's bill. Well, that doesn't necessarily mean there's a problem. So you can go to the site and say, hey, water jumped up 200% in this past month. Is everything okay? Do you guys have a leak? Like, oh, yes, we had to clean our pool."_

**Proactive Moments (Client-Dependent, Not Calendar-Driven):**
Energy management projects — lighting retrofits, HVAC prioritization, waste right-sizing, energy procurement bidding — are initiated based on client subscriptions and strategic conversations, not a fixed annual calendar. Panda, specifically, handles most proactive energy management in-house and uses ENGIE Impact primarily for bill processing and waste consulting rather than a full managed energy program.

> _"From an energy management perspective for Panda, not necessarily. I think they handle a lot of that in-house, quite honestly."_

**Long-Horizon Awareness:**
Adam volunteered a structural macro view that shapes ENGIE's business context regardless of season:

> _"The long-term outlook for energy in the United States is that prices are increasing. This is happening next five years — that is locked in. We cannot build enough supply to keep up with demand."_

---

## THEIR BIGGEST STRUGGLES (Verbatim Evidence)

**1. The Paper Bill / Municipality Data Intake Problem**
The single most operationally painful issue Adam described. Roughly 30,000 municipalities in the U.S. bill for water and sewer with no digital infrastructure, inconsistent formats, and paper delivery. ENGIE runs a large-volume scanner, applies OCR, and still requires human data entry staff to manually match and key bill values into billing templates — because no two municipal bills look the same.

> _"The biggest piece is because of the municipalities — they still send a lot of paper bills and they don't have electronic capabilities all the time. So in those cases, what we're doing often is we're still getting bills in snail mail and we have a big $1,000,000 scanner... someone still has to eyeball it to make sure."_

> _"There is no consistency or standard format. Like everyone has a different one. So there's no rhyme or reason. So it makes technology plays like that on our end extra difficult because there is no one size fits all. Every bill is different."_

**2. Exception Detection Is Threshold-Based, Not Pattern-Based**
ENGIE's anomaly monitoring compares each incoming bill against historical range. It catches spikes. It does not catch gradual baseline drift, slow-creep errors, or multi-month trends that never trigger the tolerance threshold. Adam acknowledged this limitation directly — they can flag, but cannot diagnose.

> _"We're looking at past history to see if it's within a certain tolerance or range. If it's out of range, we'll alert Panda to like, hey, normally your water is X and this bill we just got in is Y — is something wrong?"_

> _"We can only tell you that something seems wrong and then it would be up to the client to kind of run that down and see if that's if it makes sense or if there's a problem that needs to be addressed."_

**3. No Operational Visibility Into Site-Level Context**
ENGIE can see the numbers but has no window into what caused them. When a bill looks wrong, they can only ask the client — they cannot self-diagnose. This creates friction, delays, and dependence on client-side follow-through that isn't always fast.

> _"We don't know — we don't know why. Let's say I used to work with a lot of like hotelier type companies. So let's say water spiked on this past month's bill. Well, that doesn't necessarily mean there's a problem... we can only tell you that something seems wrong."_

**4. AI Adoption Is Constrained by Mission Tension**
As a sustainability company, ENGIE Impact is internally conflicted about deploying AI broadly because of AI's own energy footprint. This creates organizational friction around expansion of AI capabilities — a brake that isn't present at most technology firms.

> _"There's legitimate concerns about our use of AI and adding to the already overloaded grids... there are internal conversations about thoughtful decisions being made on how we as a company want to use it and present it to the marketplace because we want to be good stewards of the environment as well."_

**5. Competitive Pressure From AI-Native Dashboard Companies Without the Data Moat**
Adam is watching competitors like Arcadia build attractive client-facing analytics platforms and go to market with them. His concern isn't about the dashboards — it's that clients might not understand the data access dependency that makes those dashboards possible.

> _"Lots of people can take data and put it into a pretty dashboard. The hard part, the part that's not sexy or isn't fun, is in order to get that dashboard, you have to collect the data."_

> _"Arcadia — they don't pay bills, right? So how would they provide this service? They would need to either partner with someone who does pay bills, or they would need a centralized repository."_

**6. Consultative Services Require Human Bodies, Not Software**
ENGIE's higher-margin advisory work — scope 1/2/3 inventory building, energy procurement strategy, waste contract optimization — requires subject matter experts collaborating directly with clients. AI cannot currently replace this, which limits ENGIE's ability to scale its most valuable services.

> _"A lot of like the consultative services that we provide aren't necessarily... they require a body. They require like a subject matter expert to collaborate with you, the client, on what we're going to do."_

---

## HOW THEY WOULD USE CLEAR CURRENT

ENGIE Impact is not a direct end-user of energy — they are the _infrastructure_ through which energy data flows to end-users. That distinction shapes exactly how Clear Current fits into this relationship.

**Module Priority 1: AI-Powered Bill Ingestion (Day One Operational Win)**
The municipality paper bill problem is ENGIE's most acute operational pain and the one most directly solvable by Clear Current. If Clear Current's AI can reliably extract structured data from inconsistent paper bill formats — replacing or dramatically reducing the manual keying step — this is a direct labor cost savings pitch with measurable ROI from week one.

_Workflow change, day one:_ Paper bills from municipalities are scanned and routed through Clear Current's extraction layer instead of to a data entry queue. Output is a clean, structured billing record that populates directly into ENGIE's billing templates. Staff who currently eyeball and key are redeployed or reduced.

**Module Priority 2: Pattern Deviation Detection (The Gap ENGIE's Own System Misses)**
ENGIE's threshold-based anomaly system catches spikes. It misses baseline drift — the slow-burn errors that Roger Goldstein at Panda experienced firsthand (paying a neighbor's electricity bill for an entire year without triggering an alert). Clear Current's pattern deviation model, operating on ENGIE's 20-year data repository, would add a second detection layer that catches what the tolerance system cannot.

_Workflow change, day one:_ ENGIE's exception queue now includes not just spike alerts but drift alerts — flagged accounts where the trend line has shifted upward over 30/60/90 days without any single bill crossing the threshold. These become proactive client conversations rather than reactive catch-up.

**What They Would Show a CFO:**
Two numbers: (1) labor hours eliminated from manual bill entry — translatable to headcount cost and error rate reduction; (2) incremental anomaly catch rate — how many billing errors Clear Current's pattern detection found that ENGIE's threshold system missed, expressed as recovered dollars across the client portfolio.

**The Partnership / Licensing Frame:**
Clear Current's most strategic entry point here is not as a competing product but as a white-labeled or API-integrated intelligence layer inside ENGIE Impact's existing client portal. ENGIE has the data. Clear Current has the detection capability. Adam's own framing of the competitive landscape makes clear that this is the correct structure:

> _"We can stack all of this work on top of the data we already have."_

Clear Current becomes the AI layer that ENGIE stacks — without ENGIE needing to build it, and without Clear Current needing to solve the data access problem on its own.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

> _"You can't manage what you can't measure. We can't help you if we don't pay your bills because otherwise we'd have no idea what we're doing."_

**Why this quote matters:** Adam is describing his own company's moat, but he is also describing exactly where Clear Current must embed itself. The data lives inside ENGIE Impact. Anyone who wants to do AI-powered energy intelligence for large multi-site commercial operators has to either partner with ENGIE Impact or displace them. There is no third option at enterprise scale. This quote is the strategic argument for a licensing or channel partnership conversation — not a competitive one.

---

## BUYER READINESS

**Score: MEDIUM — with HIGH partnership potential**

**Why Medium, not High:**
ENGIE Impact is not a direct energy buyer — they are a data infrastructure and services firm. A "sale" here is a B2B technology partnership or licensing agreement, not a software subscription. Adam is a Senior Account Manager, not a product or technology decision-maker. He can open doors and advocate internally, but he cannot sign a deal. The actual buyer conversation would need to reach ENGIE's product, technology, or operations leadership.

**What it would take to become a paying customer / partner in 6 months:**

1. A warm introduction to ENGIE Impact's product or operations leadership — ideally through Roger Goldstein at Panda (who sits at the intersection of both relationships) or through Adam himself.
2. A concrete proof-of-concept demonstrating that Clear Current's AI can extract structured data from 50–100 varied municipal paper bill formats with accuracy that outperforms ENGIE's current OCR + manual keying workflow. This is a technical demo with measurable output, not a pitch deck.
3. A pattern detection demonstration using ENGIE's own historical data (or a sanitized representative dataset) showing drift detection catches that the threshold system misses — expressed in recovered dollars per client portfolio.
4. A commercial structure that doesn't require ENGIE to displace anything they currently do — Clear Current enters as an additive AI layer, not a replacement product.

**What would kill the deal:**

- Approaching ENGIE as a competitor rather than a technology partner
- Framing the pitch around client-facing dashboards (ENGIE already has those — this is not the gap)
- Requiring ENGIE to share raw client data in ways that violate their client agreements or data governance policies
- Any AI deployment framing that conflicts with ENGIE's sustainability mission and internal ESG standards around energy consumption
- Arriving without a credible answer to: _"How does your extraction accuracy on municipal paper bills compare to our current process, in measurable terms?"_
