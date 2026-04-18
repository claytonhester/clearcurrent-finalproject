# ENGIE Impact (Adam Zavadsky)

# Generated: 2026-04-17T10:57:36.173955

---

## COMPANY SNAPSHOT

**Company:** ENGIE Impact (formerly ENGIE Insight / Ecova)
**Industry:** Outsourced utility bill processing, energy consulting, and sustainability services
**Size:** ~1,000 employees at Spokane HQ; 900+ multi-site enterprise clients; manages approximately $20B in annual utility expenses across client portfolios; processes roughly 10,000+ bills/month for Panda alone
**Annual Energy Spend:** Not applicable — ENGIE Impact is a service provider, not an energy consumer. They manage energy spend on behalf of clients.
**Current Energy Tools:** Proprietary client-facing portal (utility data and accounting); separate sustainability/emissions portal; Arcadia (confirmed by Walt Taylor, Panda's energy contractor) for electronic bill data aggregation; large-volume OCR scanner plus manual data entry for paper bills; direct EDI feeds from large utilities (e.g., Pacific Gas & Electric); threshold-based exception alerting system built into their platform
**Currently Using AI:** Yes — narrowly. AI is being used internally to improve bill ingestion workflows: scraping data off scanned bills, reducing manual keying errors, and accelerating invoice processing. It is explicitly **not** being used on the client-facing deliverable side. Adam stated: _"We're not using it as much on the client deliverable side because a lot of the consultative services that we provide require a body — they require a subject matter expert to collaborate with you on what we're going to do."_

---

## WHO WAS ON THE CALL

**Adam Zavadsky — Senior Account Manager, ENGIE Impact**
Background: Finance-first career path. Spent roughly 10 years in investment banking (Piper Jaffray) before a college friend in energy consulting pulled him into the sector approximately 18 years ago. Joined a firm that was subsequently acquired into ENGIE's family. His finance lens gives him a distinctly commercial and ROI-oriented perspective compared to the engineering-trained energy managers in the rest of this research program. He manages a portfolio of large multi-site enterprise clients, with Panda Restaurant Group as his named anchor account — a relationship Panda has held with ENGIE for approximately 20 years. He handles the full service relationship: bill pay, data aggregation, waste consulting, and sustainability services. Not a software product manager — an account relationship owner who sees the operational reality of energy management at multi-site scale daily.

---

## THEIR ENERGY CALENDAR

ENGIE Impact's calendar is client-driven rather than seasonally structured. Because their core function is bill processing and payment, the rhythm is monthly and continuous — not annual or seasonal. Adam described it this way: _"Not necessarily [doing proactive energy management programs for Panda]. We can provide them with the details. We can provide them what they are doing, what they are using. But I think they handle a lot of that in-house."_

The key operational calendar points are:

**Daily/Monthly (core function):** Bill receipt, ingestion, OCR or EDI processing, exception flagging, and consolidated payment run. This is the heartbeat of the business — never stops.

**As-needed (consulting overlay):** Energy procurement strategy (e.g., Texas deregulated market: _"Let's take all of your energy out to the marketplace and have all the Constellations and direct energy third-party energy suppliers bid on that"_) requires human-led strategic conversations. These happen when contracts are expiring or market conditions change — not on a fixed calendar.

**Waste optimization:** Right-sizing and recycling/diversion consulting is episodic — triggered when the client wants to run a portfolio review, not on a recurring schedule.

**Sustainability reporting:** Scope 1/2/3 emissions inventories are annual, typically aligned to each client's fiscal year and reporting obligations.

**Where they feel pressure:** The most acute operational stress comes from paper bill municipalities — the ~30,000 small U.S. cities and rural co-ops that don't have digital infrastructure. These require physical mail, physical scanning, and human review. Adam named this explicitly as the persistent bottleneck: _"The biggest piece is because of the municipalities... they still send a lot of paper bills and they don't have electronic capabilities all the time. So in those cases... we still get bills in snail mail and we have a big $1,000,000 scanner."_

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. The paper bill problem is structurally unsolved.**
Even with a $1 million industrial scanner and OCR technology, paper bills from small municipalities require human review because there is no standard format. _"Every bill is different. There's no rhyme or reason. So it makes like technology plays like that on our end extra difficult because there is no one size fits all."_ OCR can scan the image; someone still has to verify the keyed output. Walt Taylor, Panda's energy contractor, confirmed this from the client side: _"Their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them."_

**2. Anomaly detection is threshold-based — it catches spikes but misses drift.**
ENGIE's exception system compares incoming bills against historical averages and flags anything outside a tolerance band. Adam described it clearly: _"We're looking at past history to see if it's within a certain tolerance or range. If it's out of range, we'll alert Panda to like, hey, normally your water is X and this bill we just got in is Y — is something wrong?"_ The limitation he acknowledged directly: _"We don't know, like, we don't know why."_ They can flag the anomaly but cannot diagnose the cause. And critically — as Roger Goldstein at Panda confirmed — this system missed a whole year of Panda paying a neighbor's electricity bill because the error had become the new baseline.

**3. Client-facing AI is philosophically and operationally constrained.**
ENGIE is a sustainability company that has internal concerns about AI's energy footprint. Adam raised this unprompted: _"There's legitimate concerns about our use of AI and adding to the already overloaded grids... there are internal conversations about like, you know, there's thoughtful decisions being made on how we as a company want to use it."_ This is a genuine organizational brake on their AI roadmap that a more agile competitor does not have.

**4. The data moat creates defensive posture, not offensive capability.**
Adam's competitive framing revealed that ENGIE sees its data aggregation as its core defensible asset — not its analytics. When shown Arcadia's dashboard, his response was: _"Any, I want to put this with some crappy, like lots of people can take data and put it into a pretty dashboard. The hard part, the part that's not sexy or isn't fun, is in order to get that dashboard, you have to collect the data."_ This is accurate — but it also reveals that ENGIE's analytics layer is not where they invest or compete. They compete on data access, not on insight quality.

**5. Consulting services cannot scale with AI because they require human expertise.**
Adam was explicit that ENGIE's high-value services — scope 1/2/3 inventory builds, energy procurement strategy, waste optimization — are not candidates for AI automation in the near term. _"Those require a body. They require like a subject matter expert to collaborate with you, the client, on what we're going to do."_ This means ENGIE's headcount-intensive consulting model cannot compress its cost structure through AI the way a software-first competitor can.

**6. Large utilities have structured data feeds; small ones do not — and the small ones are growing.**
The 30,000+ municipalities in the United States represent the most labor-intensive bill category and the one with the least infrastructure. As these municipalities gain new customers (from climate migration, suburban expansion, or corporate portfolio growth), the volume of paper bill processing at ENGIE grows — and the per-bill cost does not decrease the way it would with electronic data.

---

## HOW THEY WOULD USE CLEAR CURRENT

ENGIE Impact is not a buyer of energy management software — they are a potential **channel partner or licensing target**. The intelligence card here is about partnership positioning, not direct sales.

**The specific use case ENGIE needs and cannot build fast enough:** Pattern deviation detection on top of existing bill data. ENGIE has 20 years of Panda's utility data. Their threshold system catches spikes. It misses baseline drift — the slow-burn errors that become the new normal. Clear Current's anomaly detection, layered on ENGIE's existing data repository via API or white-label arrangement, would directly improve ENGIE's exception quality without requiring ENGIE to rebuild its core platform.

**What ENGIE's clients would actually pay for:** Walt Taylor named this directly: _"It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on."_ The client-side demand for an LLM interface on top of ENGIE's data is visible and articulated. ENGIE is the obvious next step, not Clear Current going around them.

**What would change on day one for ENGIE:** Paper bill OCR quality. If Clear Current's document parsing can reliably extract data from non-standard municipal bill formats without manual keying, that reduces ENGIE's single largest operational cost and bottleneck. This is a direct cost-of-goods-sold improvement, not just a feature addition.

**What ENGIE would show its clients:** A platform that catches what the threshold system missed — specifically the "baseline drift" errors that cost Panda a year of a neighbor's electricity bill. That story, told with ENGIE's data, is ENGIE's client retention argument.

**The module that maps most directly:** Clear Current's billing error recovery and pattern deviation detection module. Not the regulatory intelligence module, not the procurement advisory module — ENGIE already does those. The gap is in the AI-powered anomaly detection layer they do not currently have.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

> _"You can't manage what you can't measure. We can't help you if we don't pay your bills because otherwise we'd have no idea what we're doing."_

**— Adam Zavadsky, Senior Account Manager, ENGIE Impact**

**Why it lands:** This quote is ENGIE's entire competitive thesis in one sentence — and it reveals the structural opening for Clear Current. ENGIE's moat is data collection through bill processing. Their implicit acknowledgment is that analytics and insight are secondary to the data itself. For Clear Current, this is not a threat — it is a partnership argument. ENGIE has the data but not the AI intelligence layer. Clear Current has the AI intelligence layer but needs data at scale. The quote frames the opportunity: whoever controls the bill processing controls the data, and whoever controls the data needs a better way to turn it into insight. That's the licensing conversation.

---

## BUYER READINESS

**Score:** LOW (as a direct software customer) / HIGH (as a channel partner target)

**Why:** ENGIE Impact will not buy energy management software — they are energy management software, at least from the bill processing perspective. The path to revenue through ENGIE is not a direct sale; it is a licensing or white-label arrangement where Clear Current's pattern detection and LLM interface sit on top of ENGIE's existing data repositories. The single thing that would accelerate this conversation is demonstrating that Clear Current can reliably process the paper bill formats ENGIE currently handles manually — that is a direct cost reduction argument ENGIE's operations team would bring to leadership. The deal killer is if Clear Current approaches ENGIE as a competitor to their data aggregation business rather than as an enhancement to their analytics layer. Adam's competitive framing is defensive about the data; Clear Current must position as additive to the data, not a replacement for how it's collected.
