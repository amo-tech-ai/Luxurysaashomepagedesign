# Screen 09: Experiments Lab

> **Question this screen answers:** "What must be true for this to work?"
> **Status:** NEW — not built | **Priority:** P1 (highest value new screen)

---

## What This Screen Does (Plain English)

The Experiments Lab is where guessing stops and testing begins. Every risky assumption from the validation report, lean canvas, and opportunity canvas gets converted into a structured experiment with clear success/failure criteria.

This is the screen that separates StartupAI from other planning tools. Most tools help you plan. This one helps you prove whether your plan is right. It is based on the Lean Startup principle: build-measure-learn.

Each experiment has four parts: (1) the assumption being tested, (2) the experiment design, (3) the success criteria, and (4) the evidence collected.

---

## ASCII Wireframe (with sample data — TaskFlow AI)

    +---------------------------+----------------------------------------------+---------------------------+
    |  ASSUMPTION TYPES         |  EXPERIMENTS LAB                             |  AI EXPERIMENT COACH      |
    |                           |                                              |                           |
    |  Filter by type:          |  EXPERIMENT 1                   [RUNNING]    |  RISKIEST ASSUMPTION      |
    |  [x] Demand (2)           |  ==========================================  |                           |
    |  [x] Adoption (2)         |                                              |  "Will founders pay       |
    |  [ ] Pricing (1)          |  ASSUMPTION                                  |  $29/mo for AI planning?" |
    |  [ ] Retention (1)        |  "Solo founders will pay $29/mo for an AI    |                           |
    |  [ ] Technical (0)        |  tool that replaces their Notion planning     |  Risk level: FATAL        |
    |                           |  workflow."                                   |  (if wrong, no business)  |
    |  Filter by status:        |                                              |                           |
    |  [x] Planned (3)          |  Type: DEMAND          Risk: FATAL           |  TEST TYPE SUGGESTION     |
    |  [x] Running (1)          |                                              |                           |
    |  [ ] Validated (1)        |  EXPERIMENT DESIGN                           |  For this assumption,     |
    |  [ ] Failed (1)           |  "Create a landing page at taskflow.ai with  |  the best test is a       |
    |                           |  pricing ($29/mo and $79/mo). Drive 200      |  landing page with        |
    |  ---------------------    |  visitors from 3 Twitter threads about solo   |  real pricing. This is    |
    |                           |  founder productivity. Track signups."        |  better than interviews   |
    |  EXPERIMENT STATS         |                                              |  because people say they  |
    |                           |  Duration: 2 weeks                           |  will pay but do not      |
    |  Total: 6                 |  Sample: 200 visitors                        |  pull out their wallet.   |
    |  Planned: 3               |  Cost: $0 (organic traffic)                  |                           |
    |  Running: 1               |                                              |  SAMPLE SIZE              |
    |  Validated: 1             |  SUCCESS CRITERIA                            |                           |
    |  Failed: 1                |  "10+ email signups from 200 visitors        |  200 visitors is enough   |
    |                           |  (5% conversion). At least 3 respond to      |  for a 5% conversion      |
    |  ---------------------    |  'would you pay?' follow-up email."          |  test. You need at least  |
    |                           |                                              |  10 signups to have       |
    |  QUICK ADD                |  EVIDENCE COLLECTED                          |  statistical meaning.     |
    |                           |  - Landing page live since Feb 1             |                           |
    |  Assumption:              |  - 147 visitors so far (day 10 of 14)        |  TIMELINE                 |
    |  [                     ]  |  - 8 email signups (5.4% conversion)         |                           |
    |                           |  - 2 replied "yes would pay"                 |  Day 10 of 14             |
    |  [+ Quick add]            |  - 1 replied "maybe, needs more features"    |  On track for success.    |
    |                           |                                              |  8 signups with 4 days    |
    |                           |  Progress: ████████░░ 74%                    |  remaining. Likely to     |
    |                           |                                              |  hit 10+ target.          |
    |                           |  ==========================================  |                           |
    |                           |                                              |  CONFIDENCE               |
    |                           |  EXPERIMENT 2                   [VALIDATED]  |  Current: 74%             |
    |                           |  ==========================================  |  (will increase if 10+    |
    |                           |                                              |  signups confirmed)       |
    |                           |  ASSUMPTION                                  |                           |
    |                           |  "Founders experience planning paralysis     |  -------------------------+
    |                           |  weekly, not just occasionally."             |                           |
    |                           |                                              |  WHAT TO DO NEXT          |
    |                           |  Type: DEMAND          Risk: IMPORTANT       |                           |
    |                           |                                              |  When Experiment 1        |
    |                           |  EXPERIMENT DESIGN                           |  finishes:                |
    |                           |  "Interview 15 solo founders. Ask: How       |  - If PASS: Start         |
    |                           |  often do you feel stuck on what to build     |    Experiment 3           |
    |                           |  next? Daily? Weekly? Monthly?"              |    (pricing test)         |
    |                           |                                              |  - If FAIL: Pivot to      |
    |                           |  SUCCESS CRITERIA                            |    weekly planning        |
    |                           |  "12 of 15 say weekly or more often"         |    tool ($9/mo) or        |
    |                           |                                              |    interview to find      |
    |                           |  RESULT: VALIDATED                           |    why they won't pay.    |
    |                           |  12 of 15 founders said "at least weekly."   |                           |
    |                           |  3 said "daily." None said "rarely."         |  [Create Kanban card ->]  |
    |                           |                                              |                           |
    |                           |  [+ Add New Experiment]                      |                           |
    +---------------------------+----------------------------------------------+---------------------------+

---

## Real-World Example: FashionOS Experiments

FashionOS has 7 experiments across 4 assumption types:

**Experiment 1: DEMAND — "Fashion event organizers want an all-in-one tool" [RUNNING]**

Assumption: Fashion event organizers currently use 8+ disconnected tools and want to consolidate into one platform.

Experiment design: Attend 2 fashion networking events in NYC. Set up a demo booth showing FashionOS AI brief wizard. Offer to plan attendees' next event for free using the tool. Track how many accept.

Success criteria: 15 of 30 attendees accept the free event plan. 5 of 15 ask for continued access.

Evidence so far: Event 1 complete. 18 attendees visited booth. 11 accepted free plan. 4 asked "when can I buy this?" 2 said "I already have a system that works."

Status: On track. Event 2 next week.

---

**Experiment 2: ADOPTION — "Teams will invite colleagues" [PLANNED]**

Assumption: If one person on a fashion team signs up, they will invite at least 2 team members within the first week.

Experiment design: Give 10 beta users free accounts. Track team invitations over 14 days. Do not prompt them to invite — let it happen naturally.

Success criteria: 6 of 10 users invite at least 2 team members within 14 days.

---

**Experiment 3: PRICING — "Event organizers will pay $149/mo" [PLANNED]**

Assumption: PR agencies managing 10+ events per year will pay $149/mo for an all-in-one fashion event planning tool.

Experiment design: Landing page with 3 pricing tiers ($49, $149, $499). Drive 500 visitors from fashion industry Instagram ads. Track tier selection and signup rate.

Success criteria: 3%+ signup rate. 40%+ of signups choose $149 tier (not just $49).

---

**Experiment 4: PRICING — "Indie designers prefer per-event pricing" [PLANNED]**

Assumption: Independent designers doing 4-6 events per year prefer per-event pricing ($99-199/event) over monthly SaaS ($49/mo).

Experiment design: A/B test two landing pages: Page A shows monthly pricing, Page B shows per-event pricing. Each gets 250 visitors. Compare signup rates.

Success criteria: Per-event page has 2x+ higher signup rate.

---

**Experiment 5: DEMAND — "AI brief wizard is faster than manual planning" [VALIDATED]**

Result: 8 of 10 beta users completed an event brief in under 5 minutes using AI wizard. Manual method (Google Sheets template) took 45-90 minutes. Users described it as "magical" and "like having an assistant."

---

**Experiment 6: RETENTION — "Users come back for their next event" [FAILED]**

Result: Only 2 of 8 users who completed their first event plan returned for their second event. Reason: next event was 3+ months away. The tool feels valuable during event planning but users forget about it between events.

Pivot insight: Add "always-on" features between events — content calendar, brand asset library, sponsor relationship tracking — so users have a reason to log in weekly, not just during event planning.

---

## UI Microcopy

| Element | Text |
|---------|------|
| Page title | "Experiments Lab" |
| Page subtitle | "Turn guesses into proof. One experiment at a time." |
| Assumption prompt | "What must be true for your startup to work?" |
| Experiment prompt | "How will you test this? Be specific." |
| Success criteria prompt | "What result means this assumption is correct?" |
| Evidence prompt | "What have you observed so far?" |
| Status: Planned | "PLANNED — not started yet" |
| Status: Running | "RUNNING — collecting evidence" |
| Status: Validated | "VALIDATED — assumption confirmed" |
| Status: Failed | "FAILED — assumption was wrong. What did you learn?" |
| Risk: Fatal | "FATAL — if wrong, the business doesn't work" |
| Risk: Important | "IMPORTANT — affects success but not fatal" |
| Risk: Minor | "MINOR — nice to know but won't kill you" |

---

## What the AI Does (Experiment Designer Agent)

The Experiment Designer performs five jobs:

**Job 1: Assumption extraction.** The agent scans the validation report (Key Questions section), Lean Canvas (weak blocks), and Opportunity Canvas (adoption risks) to compile a list of assumptions ranked by risk level.

**Job 2: Experiment design.** For each assumption, the agent recommends the fastest, cheapest experiment type: landing page test, founder interviews, concierge MVP, A/B test, survey, smoke test, or prototype walkthrough. It explains why this test type is best for this assumption.

**Job 3: Sample size calculation.** The agent recommends how many people or how much traffic is needed for the experiment to be statistically meaningful. It uses simple heuristics: 15+ interviews for qualitative, 200+ visitors for landing page tests, 10+ users for usability tests.

**Job 4: Progress monitoring.** As the founder logs evidence, the agent tracks whether the experiment is on track to meet success criteria. It provides a confidence score and a projected outcome.

**Job 5: Next step recommendation.** When an experiment finishes, the agent recommends what to do next: if validated, which experiment to run next. If failed, whether to pivot, adjust, or re-test.

---

## Figma-Ready Prompt

Design an experiments and validation planning screen for an AI startup planning platform.

Layout: 3-panel.
Left panel (240px) shows assumption type filters with counts, status filters with counts, experiment stats summary, and a "Quick add" mini-form for new assumptions.
Center panel (main) shows experiment cards stacked vertically. Each card has: assumption text in a highlight box, type badge and risk badge, experiment design text, success criteria text, evidence collected (if any), and a progress bar. Cards have a status badge in the top-right corner (Planned = gray, Running = blue, Validated = green, Failed = red). Validated experiments have a green left border and a checkmark. Failed experiments have a red left border and a cross icon with a "What did you learn?" prompt.
Right panel (280px) shows AI Experiment Coach with: (1) Riskiest Assumption with risk badge, (2) Test Type Suggestion with reasoning, (3) Sample Size recommendation, (4) Timeline tracker, (5) Confidence score, (6) "What to Do Next" with conditional branching (if pass, if fail). A button at bottom links to 90-Day Plan.

Style: Scientific but friendly. Experiment cards should feel like lab notebooks — clean borders, structured sections, light gray backgrounds. Status badges use strong semantic colors. Risk badges use red (fatal), amber (important), green (minor). Progress bars are thin and clean. Evidence section uses a timeline-style layout. Overall feel: structured experimentation — serious about data but accessible to non-scientists.

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 03: Validator Report | Key Questions section becomes assumptions |
| Input <- | Screen 05: Lean Canvas | Weak blocks become testable assumptions |
| Input <- | Screen 06: Opportunity Canvas | Adoption risks become experiments |
| Input <- | Screen 08: Story Map | Drop-off risks become experiments |
| Output -> | Screen 10: 90-Day Plan | Validated experiments become sprint tasks; failed experiments trigger pivots |
