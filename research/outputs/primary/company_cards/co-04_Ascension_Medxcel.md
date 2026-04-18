# Ascension / Medxcel (Scott Czubkowski)

# Generated: 2026-04-17T15:20:46.606337

---

## COMPANY SNAPSHOT

**Company:** Medxcel (facilities management subsidiary of Ascension Health) | **Industry:** Healthcare (Acute Care / Health Systems) | **Size:** ~100 hospitals, 2,500+ care sites across FL, IN, IL, WI, TX, TN, OK | **Annual Energy Spend:** ~$265M/year | **Current Energy Tools:** Peer AI (Constellation Energy) — bill processing, anomaly detection, cross-portfolio benchmarking, natural gas nomination management; Siemens Building X — real-time BAS visualization, compliance data archiving; DDC/BAS network across facilities | **Currently Using AI:** Yes — actively deployed via Peer AI for 9 months at time of interview; using it for dead meter detection, building benchmarking, polar vortex nomination alerts, and executive natural language querying; explicitly still "scratching the surface"

---

## WHO WAS ON THE CALL

**Scott Czubkowski, PE, CHC, CEM, CDSM, BEP, CIAQP**
National Director, Energy & Facility Performance, Medxcel
Background spans nuclear submarine propulsion testing (Newport News Shipbuilding, 1990–1994), Siemens energy services across U.S., Canada, and Switzerland (1994–2009), mechanical HVAC design-build, and healthcare facility performance. Holds a BS in Mechanical Engineering from Milwaukee School of Engineering and an MPM from Keller Graduate School. Licensed general contractor, solar contractor, and mechanical contractor in Florida. Adjunct professor and conference speaker. Previously served as National Energy Manager for all of Ascension from 2019 through December 2025 — directly managing the $265M utility portfolio before energy functions were reorganized into an internal Resource Group. At time of interview, his scope had shifted to national engineering and HVAC construction programs, though he retained deep institutional knowledge of every energy system, vendor relationship, and program outcome across the portfolio. He is the architect of the team structure, the Peer AI transition, the natural gas hedging program, and the Facilities Performance training initiative that produced 11% energy savings. He is the most credentialed interviewee in this research program.

---

## THEIR ENERGY CALENDAR

Ascension's energy calendar is shaped by two rhythms: the corporate fiscal/budget cycle and the natural gas hedging window, with weather volatility layered on top as the unpredictable forcing function.

**Budget Season (fiscal year planning cycle):** Scott confirmed that utility budget forecasting follows the organization's fiscal calendar, whenever that falls. This is a period of high proactive engagement — pulling historical consumption data, building projections, and explaining variance to finance leadership. He noted this explicitly as an area where AI could accelerate the process: _"one thing AI could help with is budgeting going much quicker."_ This is a recurring, predictable window where accurate forecasting tools have direct value.

**Hedging Window (fall / low-price markets):** Natural gas hedging decisions are ideally made when markets are cheap — which means proactive positioning typically happens in fall or when forward prices are favorable, not during winter peaks. Scott described it: _"the last thing you want to do is hedge in the middle of winter when it's cold. So you would probably hedge when gas prices are cheap and you can start looking at outlooks."_ Ascension spends approximately $45M/year on natural gas and hedges a portion of that through futures nominations. This window requires real-time consumption data, market outlook access, and the ability to act quickly.

**Polar Vortex / Extreme Weather (reactive, high-stakes):** The most acute reactive period. Scott described the Winter Storm Uri equivalent event: _"that one event cost us $7.2 million over three days."_ The Peer AI program is specifically designed to shift this from reactive to proactive — monitoring forecasts and alerting the trading desk 24 hours in advance to increase gas nominations before prices spike. Post-Uri, there have been a $2.4M event and a $1M event, against an $850K total program investment.

**Ongoing / Year-Round:** Bill processing, anomaly detection, and dead meter identification run continuously through the third-party system. Cross-portfolio benchmarking is being built out as Peer AI accumulates 12+ months of data. Compliance data archiving through Siemens Building X is also continuous — healthcare requires 36 months of building data retention, and many sites historically couldn't maintain it reliably.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Ghost meters — paying for sites they no longer occupy**
Scott's answer to "where do you find the most frequent billing errors" was immediate: _"Paying for sites that we no longer own. I mean, that's big for us, right? Because you think about, we have over 2,500 sites of care. And at any one time, we could be moving out of a building or a real estate property or a strip mall or whatever that is. We've paid meters for over 2 years with different people."_ The old threshold-based exception system couldn't catch it because a consistent $32/month payment never triggered an anomaly alert — it looked stable. Peer AI's pattern-matching caught it. Business case on this category alone: $1M/year in savings.

**2. Finance and administration can't access or interpret technical energy data**
Scott's most elaborated product pain: _"Is it going to help us mitigate cost? Absolutely. But all the technology is out there to control things, do things, monitor things, measure things, whatever. It's how I get administrators to interact with the system without being technical, right? Is my building using more energy than a sister building? What would be my projected utility bill for next month based on the current weather outlook?"_ His engineers had to log into the system, find a site ID, search for data, download it, graph it. The CEO couldn't do it. Peer AI's natural language query closed that gap — and it became the feature Scott cited most enthusiastically.

**3. The recurring administration conversation: why doesn't my bill match my budget?**
Scott flagged this as one of his most frequent and frustrating interactions with hospital leadership: _"A lot of what I deal with administration is: 'Why is my utility bill not matching my budget?'"_ This is not an engineering problem — it is a communication and interface problem. The system had the answer but couldn't surface it in a form that finance could use without an engineer in the loop.

**4. Polar vortex exposure — $7.2M in three days**
_"We think that program's worth a couple million dollars. I can tell you one polar vortex that happened, the big one in Texas — that one event cost us $7.2 million over three days."_ The underlying problem is the mismatch between fixed gas nominations and extreme weather demand spikes. The AI program is designed to close the 24-hour advance notice gap that would allow Ascension to up nominations before the event, not after.

**5. Data security and third-party data handling**
Scott raised this unprompted, referencing a PricewaterhouseCoopers engagement: _"Price Waterhouse came in probably five years ago and said, Ascension, we can help you save $30 million. And we ended up turning over 125 hospitals of data that had over 12 years of points. I mean, it's probably the biggest profile database of acute care hospitals. And we fought it like crazy."_ Regarding Peer AI: _"As far as if that's happening in the background with Constellation — no idea. I mean, they sign contracts saying they're not going to do that."_ He acknowledged accepting the risk but clearly views data handling as an ongoing institutional concern, not a solved problem.

**6. The market changes faster than healthcare procurement cycles**
On failed pilots: _"By the time we got it on the system, and six months later I was talking about it, people were like, what are you talking about? This is the name of our company. And I'm like, who are you guys? Well, we bought that product."_ Healthcare energy procurement is slow. The AI/energy vendor market is fast. Scott has watched pilots become irrelevant before they concluded. This creates real skepticism about vendor stability and a preference for established platforms with clear ownership.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Day One — Ghost Meter Detection Module**
The single highest-value, fastest-to-prove use case for Ascension/Medxcel is identifying meters still active at vacated sites. Scott's existing system now catches these, but the category itself — 2,500+ sites in constant flux, multi-year exposure windows, $1M+ annual impact — is purpose-built for a dedicated alert type. Clear Current should offer a named "ghost meter" detection feature that flags consistent low-level payments at sites showing no corresponding operational activity. This is the first number Scott would bring to a budget conversation.

**Week One — Natural Language Executive Query Interface**
Scott described this as the feature he values most in Peer AI today. An executive picking up their phone and asking _"what is the cost of my utilities in St. John's in Tulsa, Oklahoma"_ and getting a direct answer — without routing through an engineer — is the product moment that matters. Clear Current's demo for this account should open with exactly this scenario. Not a chart. Not a tariff comparison. A CEO-level question answered in plain English, live, on a phone.

**Month One — Budget Variance Explanation Engine**
The recurring administration conversation — "why is my utility bill not matching my budget" — is a workflow that currently requires engineer involvement and produces delayed, technical answers. A Clear Current module that automatically generates a natural language explanation of budget variance (weather-adjusted consumption shift, tariff change, unoccupied site still active, equipment performance degradation) would directly replace that loop. Scott would show this to his CFO as the answer to the question they ask every month.

**Ongoing — Cross-Portfolio Benchmarking and Anomaly Flagging**
Once 12+ months of data are accumulated, Scott wants to compare similar hospitals across geographies, adjust for climate and square footage, and identify underperforming buildings. Clear Current's benchmarking capability would plug directly into this workflow. Anomaly flagging for billing errors (erroneous bills, demand charge spikes, broken meters) would run continuously through the third-party processing layer.

**Future — Polar Vortex / Weather-Driven Nomination Alert**
Scott is building this with Peer AI now. A Clear Current integration that monitors weather forecasts, projects heating demand, and triggers an alert to the trading desk 24–48 hours before an extreme event — with the recommended nomination adjustment quantified in dollars — would be the highest-dollar proof point in the entire relationship. Scott already has the ROI math: $850K invested, $7.2M event avoided, two subsequent events materially reduced.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"All the technology is out there to control things, do things, monitor things, measure things, whatever. It's how I get administrators to interact with the system without being technical, right? Is my building using more energy than a sister building? What would be my projected utility bill for next month based on the current weather outlook? A lot of what I deal with administration is: 'Why is my utility bill not matching my budget?'"_

---

## BUYER READINESS

**Score: MEDIUM**

**Why:** Scott is the most sophisticated energy manager in this research program and is already nine months into a relationship with Peer AI (Constellation Energy), which covers the core bill processing, anomaly detection, and natural language query functions that Clear Current would offer. He is not in immediate pain — his current stack is working and he is still in the early stages of extracting value from it. His team structure also changed in December 2025, meaning he no longer directly owns the utility spend; energy moved to a new internal Resource Group under a different manager. This is a significant organizational complication — Scott is the institutional knowledge, but he may not be the current budget authority for energy software.

**What it would take to become a paying customer in 6 months:**
The path is not displacing Peer AI — it is identifying what Peer AI doesn't do yet. Scott noted Ascension has only been on Peer AI nine months and is still "scratching the surface." A Clear Current conversation should be structured around specific capability gaps: Does Peer AI have a named ghost meter alert with cross-referencing against lease/occupancy status? Does it offer budget variance narrative generation in natural language? Does it have a weather-driven gas nomination alert that integrates with a trading desk workflow? If Clear Current can identify even one of those as a genuine gap — and demonstrate it in a 15-minute live demo — Scott is the kind of buyer who will carry the conversation internally. The $265M spend and the documented $7.2M event exposure give him all the ROI math he needs.

**What would kill the deal:**
Three things. First, inability to produce clean data security documentation before the first serious conversation — Scott raised this unprompted and Ascension has institutional trauma around third-party data exposure. SOC 2 compliance and explicit data anonymization terms are table stakes, not differentiators. Second, any perception that Clear Current is a features-forward AI platform making claims it can't substantiate — Scott is precise about the rules-based vs. true AI distinction and will disengage immediately if he senses overselling. Third, vendor instability — he has watched pilots collapse mid-stream because companies got acquired or rebranded. Clear Current needs to demonstrate clear ownership, financial stability, and a roadmap that will still exist in 18 months.
