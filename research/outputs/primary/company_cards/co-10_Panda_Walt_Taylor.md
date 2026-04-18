# Panda Restaurant Group (Walt Taylor)

# Generated: 2026-04-17T15:34:06.680976

---

## COMPANY SNAPSHOT

**Company:** Panda Restaurant Group | **Industry:** Quick Service Restaurant (QSR) | **Size:** ~2,300 locations, U.S., Puerto Rico, and international | **Annual Energy Spend:** Not disclosed; implied 8-figure given portfolio scale | **Current Energy Tools:** ENGIE Impact (bill review + outlier flagging), Arcadia (underlying electronic bill aggregation inside ENGIE), EMS rollout in progress (remote thermostat + lighting control), smart water sensors at most locations | **Currently Using AI:** None. Zero. Explicitly confirmed.

---

## WHO WAS ON THE CALL

**Walt Taylor**

- **Title:** Energy Manager (Contractor)
- **Background:** ~25 years in restaurant energy management. Client-side roles at Panda Express, Red Robin, and Taco Bell. Also led energy advisory at E4E Solutions. Founder/owner of GWT2Energy, an independent consulting firm serving QSR franchisees in parallel with his Panda engagement. Successfully petitioned a state Public Service Commission to change a utility rate — one of the only practitioners in this research program with that specific credential.
- **Area of ownership:** Full portfolio energy management across all ~2,300 Panda locations. Responsible for bill oversight, EMS rollout, outlier investigation, peak demand management, operator education, water and gas monitoring, and annual budgeting. Operates with contractor candor — he is not a corporate employee protecting a department.

---

## THEIR ENERGY CALENDAR

**October:** Annual budget build for the January–December fiscal year. Only concentrated planning activity of the year.

**Daily, year-round:** Outlier management. "As far as finding outliers and doing things like that, that's every day." Walt and the team receive exception alerts from ENGIE and from the EMS water/HVAC sensors and react to whatever surfaces. No seasonal concentration outside of budgeting.

**Reactive spikes:** Operator calls. A franchisee in Philadelphia calls because their stores are billing differently and they only see the total dollar amount on their P&L — not usage, not rate structure. Walt has to manually download bills, cross-reference utilities, and reconstruct the explanation. This happens unpredictably throughout the year and consumes significant time.

**Ongoing background project:** EMS rollout. This is a multi-year initiative actively underway. Not seasonal — it advances as locations are onboarded.

**Reactive utility disputes:** Ad hoc, whenever an outlier investigation surfaces a likely billing error. Walt described a Puerto Rico water billing discrepancy identified during a routine water usage report review. These are opportunistic, not scheduled.

**The honest summary in his own words:** "It just depends on what comes across my inbox, basically."

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Errors will always exist — the goal is 90%, not 100%**
"Even at that point, their OCR recognition doesn't work 100% of the time. There's, you're never going to catch every mistake. So what we shoot to do is try to catch 90% of them."
The accepted standard at one of the most sophisticated QSR energy operations in the country is that 10% of errors are simply lost. No one has a credible path to closing that gap.

**2. Rate heterogeneity makes automation feel impossible**
"Alabama Power probably has 45 rates. So is it really going to go through every time and say, let me check all 45 rates? Well, that's going to be a waste of time because we're probably already on the best rate."
Walt's skepticism toward AI tools is not technophobia — it's a specific, justified concern that no existing system has demonstrated accuracy across thousands of rate permutations at scale. He drew a sharp line: "Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills and usage and all the different things."

**3. The operator explanation problem consumes expert time**
"It'd be nice to go in and just ask that question... instead of going, downloading the bills, reviewing the bills, and saying, OK, well, here's the difference. You're on three different utilities. Two of the utilities have their own rate and another one you're on the contracted rate. Also, your usage is different at all three locations... you've got different rates... this one charges you this for peak and the other one charges this for peak and you're hitting different peaks."
Walt spent more time describing this specific workflow than almost any other pain point. It is manual, expert-dependent, and happens constantly.

**4. Ratchet rates create silent, compounding exposure**
"Whatever your peak demand is for the hottest day in June... we're going to charge you that for nine months. And then in the wintertime, we're going to charge you 90% of that."
A single 15-minute spike in July becomes a charge baked into every bill through the following March. Walt confirmed this is the kind of thing most operators never see coming. His words on the research program's pilot example: "Correct." — validating that this exact failure mode is real and active.

**5. Sewer overbilling is structural, systematic, and uncontested**
"There's no meter about how much water is actually leaving the restaurant... at a restaurant, knowing that most people take their drinks and go somewhere else to relieve themselves... we probably don't use near as much sewage as we're being billed for. But there's no way to prove that."
This is a new finding from this interview. Utilities bill sewer charges based on water intake. For restaurants — where ice, drinks, and food leave the building — the actual sewage discharge is a fraction of intake. Walt acknowledged this is legally accepted, currently un-disputable, and worst on the West Coast where remediation costs are highest.

**6. Benchmarking is built on the wrong unit — everyone is measuring the wrong thing**
"Square footage has nothing to do with how much energy. It's your cubic footage that has everything to do with how much energy is used, because you don't heat a space by the floor. You heat a space like a cube. The reason we have square footage is because that's how we sell them... that's the industry standard, but that's wholly wrong."
Every peer comparison, every benchmark report, every outlier threshold in the industry is calculated on a metric that Walt believes is structurally incorrect. This means the entire industry's baseline is flawed, and tools that inherit square-footage benchmarks inherit the flaw.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Day one — operator explanation workflow**
The single most time-pressured workflow Walt described is answering operator calls about bill discrepancies. A franchisee operator sees a total dollar amount on their P&L, calls Walt, and Walt has to manually reconstruct an explanation across multiple utilities, rate structures, and usage profiles. A document-chat interface with all Panda bills loaded would allow Walt — or eventually the operator directly — to ask _why is my Philadelphia store billing differently than my other two?_ and receive a structured breakdown immediately. This replaces a manual process that currently takes hours and requires Walt's specific expertise.

**Outlier prioritization and root-cause scaffolding**
Walt's team already identifies top outliers. What they cannot do efficiently is explain _why_ the outlier exists. "We can identify the top 10 outliers, let's say, but what can we do to impact that?" Clear Current's anomaly detection, cross-referenced against rate structure data and historical usage patterns, would give Walt the next step — not just a flag, but a probable cause and a recommended action.

**Ratchet rate monitoring and peak demand alerts**
"We're looking at... peak demand because that's becoming a bigger and bigger factor." A system that tracks 15-minute interval demand across locations, maps it against each utility's ratchet mechanism, and flags when a location is approaching a threshold that will lock in elevated charges for nine months is precisely what Walt described needing — and does not currently have. This is the module with the clearest ROI story.

**What he would show a CFO**
The ratchet rate finding from the research program's pilot — one 15-minute consumption spike triggering a year of inflated charges — is the exact narrative. Walt confirmed it: "Correct." Frame it as: _here is a documented instance where a 15-minute event cost a peer operator $1 million over 12 months and no existing tool caught it. Here is how Clear Current would have flagged it in real time._ That is the CFO conversation.

**Longer-term — EMS data marriage**
Walt explicitly described his in-progress goal: "We're in the process of trying to marry those two things so we can do more of what you're asking about — how do we dig deeper into what's causing these issues?" The EMS generates interval-level HVAC and lighting data. The bills generate cost outcomes. Connecting them is the analytical gap he is trying to close. Clear Current positioned as the layer that correlates EMS sensor data with billing outcomes is a direct fit for where Panda is heading architecturally.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

> _"It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on."_

Walt is telling you, unprompted, that your most direct competitor is one product decision away from closing the gap you are trying to open. He sees the LLM layer as the obvious next move for ENGIE — and he is describing it from inside the customer base. The window is not permanent.

---

## BUYER READINESS

**Score: MEDIUM**

**Why this is not LOW:** Walt expressed genuine, specific desire for the capabilities Clear Current offers. He described concrete workflows — operator explanations, ratchet rate monitoring, outlier root-cause — where the tool would replace manual expert time. He has no AI tools today. He confirmed ENGIE's data architecture is not proprietary. He said the concept is "nice." He is not resistant to the category.

**Why this is not HIGH:** Walt's skepticism is precise and earned. He will not adopt a tool he cannot trust at scale. His exact words: "To have any confidence in it, it would take a lot for me to have confidence that there's a single large language model or whatever else that actually could handle the complexity of that with any accuracy." He also noted that vendors who claim to solve restaurant energy without understanding the operating environment — hoods, pressure balancing, kitchen equipment — consistently fail and then walk back the claim. He has watched this pattern repeat.

**What would it take to become a paying customer in 6 months:**

- A live demonstration using Panda's actual bills — not a demo dataset, not a retail analog — that surfaces a real error or a real missed savings opportunity he did not already know about. The bar is: show me something I missed.
- Demonstrated accuracy on rate structure identification across at least two or three of Panda's highest-complexity utilities — not a claim that it works, but a working example.
- A clear answer to the scale question: how does this work across 2,300 locations with paper bills, with utilities that don't offer direct feeds, and with the 45-rate-structure problem Walt raised explicitly?
- A pilot structure that starts with a subset of locations — he suggested 25-location franchisee scale as the credible starting point. Meeting him there rather than overselling enterprise capability from day one is the right approach.

**What would kill the deal:**

- Overpromising accuracy on rate optimization without demonstrating it on real Panda data. Walt has seen too many vendors fail this test to forgive it twice.
- Inability to handle paper bills or utilities that don't provide electronic feeds. If the tool only works on Arcadia-accessible data, it has the same coverage ceiling as ENGIE.
- Any positioning that ignores the restaurant-specific operating environment — hoods, peak demand windows tied to operating hours, cubic versus square footage, operator behavior as the primary driver of variance. Walt will immediately categorize a vendor who doesn't know these things as one of the many who have already tried and retreated.
