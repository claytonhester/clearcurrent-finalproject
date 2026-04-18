# Intermountain Health

# Generated: 2026-04-17T15:27:23.349956

---

# INTELLIGENCE CARD: INTERMOUNTAIN HEALTH

---

## COMPANY SNAPSHOT

**Company:** Intermountain Health | **Industry:** Nonprofit Healthcare (Hospital System) | **Size:** Large multi-state system; Utah headquarters, facilities in Utah and Colorado | **Annual Energy Spend:** Not disclosed; Colorado facility alone had a single bill spike from ~$40K to ~$140K, suggesting system-wide spend in the tens of millions | **Current Energy Tools:** SkySpark analytics platform (14 billion data points), building automation systems (BAS) across all facilities, Siemens and JCI controls platforms, 24/7 Remote Operations Center (ROC), third-party utility bill processor (which failed to catch the $100K anomaly) | **Currently Using AI:** No — actively being pitched by AI vendors (described as "6 AI developers coming at us every single week") but have not adopted an AI platform; analytical work is currently rules-based algorithms written by Matt's team

---

## WHO WAS ON THE CALL

**Ross Snow**
_Director of Energy Management_
Remote from East Tennessee. Strategic lead for the entire program — resource allocation, sustainability goals, stakeholder management, and organizational investment philosophy. Has been at Intermountain long enough to have watched the program scale to 14 people. Speaks in frameworks: he introduced the two-layer model (optimization vs. capital replacement), the seasonal calendar, and the AI value/gap distinction. The decision-maker in this conversation. If Clear Current gets a contract with Intermountain, Ross is the person who said yes.

**Matt Wilson**
_Manager, Remote Operations Center (ROC)_
Based in Salt Lake City. Owns the technical analytics layer — SkySpark platform, the 14 billion data points, the algorithms that flag equipment failures, and the dispatch workflow to on-site facilities teams. Most technically specific voice on the call. Demonstrated live during the interview how a VAV damper failure gets flagged, diagnosed, and routed. Has the deepest hands-on understanding of where AI tooling would and would not help. Secondary buyer — would be a champion if the product integrates cleanly into the ROC workflow.

**Bart Peacock**
_Manager, Support Services_
Based in Spanish Fork, UT. Electrician by original trade; background in higher education and commercial construction before Intermountain. Owns the monitoring platform for critical care spaces, sensitive areas, and refrigeration. Also oversees project engineers managing capital improvement and efficiency projects, and controls specialists on Siemens and JCI platforms. Most operationally grounded voice on the call — introduced the shoulder season complexity and the capital replacement scheduling logic. Influencer, not primary buyer, but his sign-off on operational fit matters.

---

## THEIR ENERGY CALENDAR

**Winter:**
Heating systems are the operational priority — optimizing boilers, heat pumps, and heating sequences across facilities. Because cooling equipment is offline, this is when capital replacement of chillers and air conditioning equipment is scheduled. Ross: _"In the winter, you use more natural gas to heat"_ and capital cooling replacement happens simultaneously because _"we can't take our cooling equipment out in the middle of the summer."_

**Spring and Fall (Shoulder Seasons):**
Most complex and most reactive periods of the year. Systems are switching between heating and cooling modes, and the team is optimizing for outside air utilization — what Ross calls economizer mode. Bart named this explicitly: _"Shoulder seasons are the difficult ones — you may be heating in the morning, cooling in the afternoon."_ This is when equipment behaves unpredictably, anomalies are hardest to isolate, and the ROC generates the most noise. Matt's algorithms are most stressed during these transitions.

**Summer:**
Cooling optimization is the operational focus. Heating equipment — boilers, heat pumps — goes offline and that is when capital replacement of the heating side is planned. Ross: _"In the summer, you use more electricity to cool"_ and _"we're replacing our heating equipment"_ during this period.

**Year-Round (ROC):**
Matt's Remote Operations Center runs 24/7 continuously regardless of season. SkySpark analytics are always running, flagging issues, and routing work orders to on-site facilities teams. Utility data is pulled alongside HVAC and equipment data. This is the layer where the $40K–$140K Colorado billing anomaly should have been caught — and wasn't.

**Year-Round (Capital and Procurement):**
Capital improvement projects run on the opposite schedule from seasonal operations. Natural gas procurement strategy is managed actively by the facility management team, seeking favorable pricing windows. This is a live procurement activity, not a passive bill-pay function.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Utility billing anomalies are falling through the cracks — even with a paid third party watching.**
Ross: _"We had in Colorado earlier, or late last year, a few utility bills that, you know, typically they're $40,000 and they came in at $140,000 kind of thing, right? And one of our accountants flagged that. We actually pay a third party company that should have flagged it and they didn't even flag it."_ This is the clearest and most self-identified gap in their current stack. They are paying for external oversight and it failed. An internal accountant — not the tool, not the vendor — caught a $100,000 monthly billing error.

**2. AI vendors are abundant; problem-solvers are not. The bottleneck is physical execution, not data.**
Matt: _"We have a glutton of AI developers and a vacuum of problem solvers right now."_ Ross: _"I cannot overstate how short that staffing is across our country right now. We would literally hire somebody tomorrow if they could fill those skill sets — well into six figures, no college degree needed."_ The risk for any AI vendor pitching Intermountain on inside-the-meter diagnostics is that this team already has that covered. They do not need more problem-identifiers. They need the person to turn the wrench.

**3. Symptoms appear in one system; the root cause is in a completely different intertwined system.**
Ross: _"What gets forgotten is that these systems are intertwined. You might write an algorithm that identifies a problem with one piece of equipment or one section. But then a lot of times as we really get into diagnosing, we see the symptom here, but the actual problem was over here on an intertwined system... Facility teams will see the symptom here and they'll get stuck trying to fix that symptom rather than taking a step back and looking at all of that data integrated."_ Days are lost chasing the wrong system because no one is looking at the full picture simultaneously.

**4. Work orders arrive without diagnostic pre-work, costing technician time before they've even touched the equipment.**
Matt: _"When somebody calls them up and says the room is hot, the first thing they do is go to the building automation system and see if it's a new problem or if it's an existing problem. And then they start to do some basic diagnostics — is the damper open and closed type of thing."_ Every ticket starts from zero. There is no layer that pre-qualifies the complaint, checks whether it's recurring or new, or surfaces the most likely cause before a technician is dispatched.

**5. Scale makes manual oversight impossible — 14 billion data points, thousands of facilities, no shortage of flagged issues.**
Matt: _"There's a million of these. If you go back to the chart and you bring it up for every facility, it's immediately overwhelming. Like we have no shortage of issues like this that could point it out. What we have is, or what we need to help with, is boots on the ground."_ The ROC is already generating more actionable flags than the field team can process. Adding more flagging capability is not the constraint. Prioritization and triage — knowing which fires to fight first — is.

**6. The team is exceptional, but it operates against a market baseline of mediocrity — and leadership comparisons create pressure.**
Matt: _"A lot of what you'll see in energy management programs is the people who just like go put locking covers on the thermostats and turn off boilers in the middle of the summertime... that just gives you a bad rap and then people start to hate you."_ Ross: _"I don't know of any other organizations with 14 people on staff just in energy management."_ Intermountain's program is an outlier. Leadership elsewhere in the organization may benchmark against less sophisticated programs and undervalue what this team does — making ROI documentation and financial proof points internally important.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Day One — Utility Anomaly Detection:**
The $40K–$140K Colorado spike is the product demo. Clear Current connects to Intermountain's utility accounts, ingests historical billing data, and immediately surfaces any anomalies above a configurable threshold. The third-party processor that missed it gets replaced or supplemented. Ross would use this first because it addresses the specific, self-identified failure that already happened. The ask is simple: _"Flag what your current third party missed."_

**Workflow Change That Happens Immediately:**
Currently, utility bill review is a passive, reactive process — the accountant catches it manually or the third party (unreliably) flags it. With Clear Current, the ROC gains an automated feed of billing anomalies alongside equipment anomalies. Matt's team can correlate: does a utility spike align with a known equipment failure they were already tracking? That cross-referencing is currently not happening.

**What They Would Show the CFO:**
The Colorado story quantified. _"We were paying a third party to catch billing errors. They missed a $100,000 month. Here is a system that would have caught it, and here is every other anomaly it has flagged across our portfolio in the last 12 months."_ Ross has already established that the program must save more than it costs — he will frame Clear Current the same way. The CFO conversation is: this tool costs X per year, it has already identified Y in billing errors we were not catching, and it does not require headcount.

**Longer-Term — Procurement Intelligence:**
Ross mentioned active natural gas procurement strategy — _"strategic purchasing of natural gas to try to get the best price."_ If Clear Current can layer rate optimization or procurement timing intelligence on top of billing data, that becomes a second value conversation for Ross at the director level. It moves the tool from reactive (catch errors) to proactive (optimize what you pay before the bill arrives).

**What They Would Not Use Clear Current For:**
Inside-the-meter diagnostics — VAV dampers, airflow analytics, equipment cycling. That is SkySpark's domain and Matt's team is already best-in-class there. Any pitch that tries to compete with or replace the ROC's analytical capabilities will immediately lose the room.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"We actually pay a third party company that should have flagged it and they didn't even flag it, right? So AI could sure do that."_
— Ross Snow, Director of Energy Management

This is not a hypothetical pain point. Ross is describing a real failure, in a real month, from a vendor they are currently paying. The gap is live, documented, and already costs them money. Clear Current does not need to convince Intermountain that billing anomaly detection has value — Ross already believes it. The product just needs to demonstrate it works better than what they already have in place.

---

## BUYER READINESS

**Score: MEDIUM — trending HIGH with the right entry point**

**Why MEDIUM and not HIGH:**
Intermountain has a 14-person internal energy team, a deeply built analytics stack, and strong internal capability. They are not a buyer who will adopt a new platform because it sounds impressive. Ross, Matt, and Bart are sophisticated enough to immediately identify when a tool duplicates what they already do — and they will say so directly. They are also resource-constrained on the physical execution side, which means any new software investment faces internal scrutiny: _"Does this free up our technicians or is it just another dashboard?"_

**What would make them a paying customer in 6 months:**
A focused, scoped demo built around the Colorado billing anomaly story — showing Clear Current connecting to their actual utility accounts (or a comparable data set), surfacing the $40K–$140K type spike automatically, and demonstrating that the detection would have triggered before their accountant caught it manually. The pitch must be explicitly supply-side (outside the meter) and must not try to compete with SkySpark. If Dan and John can show that Clear Current integrates alongside the ROC rather than replacing any part of it, the conversation changes from _"do we need this?"_ to _"why don't we already have this?"_

**What would kill the deal:**
Positioning the product as a replacement for or improvement on Intermountain's inside-the-meter analytics. The moment a demo slides into HVAC diagnostics, equipment performance, or anything that sounds like _"we can tell you where your buildings are inefficient,"_ Ross or Matt will shut it down — they have heard that pitch six times this week and they are done with it. The second deal-killer is inability to integrate with or sit alongside their existing SkySpark and BAS infrastructure. Clear Current must be additive to a stack this team has spent years building, not a replacement for it.
