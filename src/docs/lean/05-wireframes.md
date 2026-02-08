# Lean Canvas to 90-Day Execution - ASCII Wireframes

## Overview

This document provides complete ASCII wireframes for the full validation system: **Startup Profile Validator → Lean Canvas → Opportunity Canvas → 90-Day Kanban Plan**.

---

# 1. SCREEN 1 — Startup Profile Validator (Entry)

**Purpose:** Establish baseline + primary constraint  
**AI Output:** Scores + risk focus

```
┌──────────────────────────────────────────────────────────────┐
│ Startup Profile Validator                                    │
├──────────────────────────────────────────────────────────────┤
│ Startup Name:  __________________________                    │
│ One-line Description:                                        │
│ "AI tool that helps founders validate ideas in 90 days"      │
│                                                              │
│ Target Customer:  Early-stage SaaS founders                  │
│ Business Model:  B2B SaaS ($99/mo)                            │
│                                                              │
│ [ Run Validation ]                                           │
└──────────────────────────────────────────────────────────────┘
```

**AI Result Panel**

```
┌──────────────────────────────────────────────────────────────┐
│ Validation Results                                           │
├──────────────────────────────────────────────────────────────┤
│ Clarity        ████████░░  8/10                               │
│ Desirability   ██████░░░░  6/10                               │
│ Feasibility    █████████░  9/10                               │
│ Viability      █████░░░░░  5/10                               │
│ Defensibility  ████░░░░░░  4/10                               │
│ Timing         ███████░░░  7/10                               │
│ Mission        ████████░░  8/10                               │
│                                                              │
│ 🔴 Primary Constraint: WILLINGNESS TO PAY                    │
│                                                              │
│ → Next: Structure hypothesis with Lean Canvas                │
│ [ Go to Lean Canvas ]                                        │
└──────────────────────────────────────────────────────────────┘
```

**User Actions:**
- Enter startup details
- Click "Run Validation"
- Review AI scores
- Click "Go to Lean Canvas"

**AI Processing:**
- ValidatorAgent analyzes description
- Scores 7 dimensions (0-10 each)
- Identifies weakest area
- Suggests next action

---

# 2. SCREEN 2 — Lean Canvas (AI-Enhanced)

**Purpose:** Turn idea into testable hypothesis  
**AI role:** Improve questions + quantify answers

```
┌──────────────────────────────────────────────────────────────┐
│ Lean Canvas                                                  │
├───────────────┬───────────────┬─────────────────────────────┤
│ PROBLEM       │ SOLUTION      │ UNIQUE VALUE PROP            │
│ "Founders     │ "Guided AI    │ "Validate your startup in    │
│ waste months  │ validation"   │ 90 days or kill it fast"     │
│ building"     │               │                              │
├───────────────┼───────────────┼─────────────────────────────┤
│ CUSTOMER SEG. │ CHANNELS      │ REVENUE                      │
│ Early founders│ LinkedIn,     │ $99/mo SaaS                  │
│ pre-PMF       │ cold email    │                              │
├───────────────┼───────────────┼─────────────────────────────┤
│ KEY METRICS   │ COSTS         │ UNFAIR ADVANTAGE             │
│ Paid pilots   │ AI infra      │ Validation playbooks + data  │
│ Conversion %  │ Founder time  │                              │
└───────────────┴───────────────┴─────────────────────────────┘
```

**AI Insight Panel**

```
┌──────────────────────────────────────────────────────────────┐
│ AI Canvas Analysis                                           │
├──────────────────────────────────────────────────────────────┤
│ ⚠️ Risk detected:                                            │
│ - Will founders pay before seeing value?                     │
│ - "Early founders pre-PMF" is too broad                      │
│                                                              │
│ 💡 Suggestions:                                              │
│ - Narrow to "founders with failed MVPs in last 6 months"     │
│ - Test willingness to pay with paid pilot offer              │
│                                                              │
│ → Recommend Opportunity Canvas to focus validation           │
│ [ Continue to Opportunity Canvas ]                           │
└──────────────────────────────────────────────────────────────┘
```

**User Actions:**
- Fill 9 canvas blocks
- Review AI improvements
- Accept/edit AI suggestions
- Click "Continue to Opportunity Canvas"

**AI Processing:**
- CanvasAgent analyzes each block
- Flags vague or risky statements
- Suggests specific language
- Quantifies claims where possible

---

# 3. SCREEN 3 — Opportunity Canvas (Your Slide)

**Purpose:** Decide WHAT to validate first  
**This selects the 90-day plan**

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Opportunity Canvas                                                      │
├───────────────┬────────────────┬────────────────┬──────────────────────┤
│ Users         │ Problems       │ Solution Ideas │ How Users Use It      │
│ Early SaaS    │ "Unsure if     │ Wizard-of-Oz   │ 1. Book session       │
│ founders      │ idea is worth  │ validation     │ 2. Get roadmap        │
│               │ building"      │ coaching       │ 3. Decide to pay      │
├───────────────┼────────────────┼────────────────┼──────────────────────┤
│ Solutions     │ Adoption       │ Metrics        │ Business Challenge   │
│ Today         │ Strategy       │ Conversion to  │ Low willingness to   │
│ Gut feel,     │ Direct outreach│ paid pilot %   │ pay before proof     │
│ advisors      │ founder network│                │                      │
├───────────────┼────────────────┼────────────────┼──────────────────────┤
│ Budget        │ Business Benefits               │                      │
│ Founder-led,  │ Faster kill/validate decisions  │                      │
│ <$500, 2 wks  │ Save 3-6 months wasted build    │                      │
└─────────────────────────────────────────────────────────────────────────┘
```

**AI Decision Panel**

```
┌──────────────────────────────────────────────────────────────┐
│ Opportunity Analysis                                         │
├──────────────────────────────────────────────────────────────┤
│ Primary Opportunity Selected:                                │
│ → Validate willingness to pay via paid pilot                 │
│                                                              │
│ Recommended Campaign Type: Mafia Offer Campaign              │
│ "Get first 10 customers to pre-pay for validation coaching"  │
│                                                              │
│ Risk Score: 8/10 (High - untested monetization)              │
│                                                              │
│ Next: Generate 90-day sprint plan focused on this risk       │
│ [ Generate 90-Day Plan ]                                     │
└──────────────────────────────────────────────────────────────┘
```

**User Actions:**
- Fill 10 opportunity blocks
- Review AI risk analysis
- Select primary opportunity
- Click "Generate 90-Day Plan"

**AI Processing:**
- RiskAgent ranks all assumptions
- Identifies highest risk (willingness to pay)
- Suggests campaign type (Mafia Offer)
- Maps opportunity blocks to sprint goals

---

# 4. SCREEN 4 — 90-Day Plan Overview

**Purpose:** Convert opportunity → execution system

```
┌──────────────────────────────────────────────────────────────┐
│ 90-Day Validation Cycle                                      │
├──────────────────────────────────────────────────────────────┤
│ Goal: First 10 paying customers                              │
│ Constraint: Willingness to Pay                               │
│ Strategy: Mafia Offer Campaign                               │
│                                                              │
│ Sprint Map (2 weeks each):                                   │
│ ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐                  │
│ │  S1  │ → │  S2  │ → │  S3  │ → │  S4  │                  │
│ │Discov│   │Narrow│   │ Demo │   │Pitch │                  │
│ └──────┘   └──────┘   └──────┘   └──────┘                  │
│                                                              │
│ ┌──────┐   ┌──────┐                                         │
│ │  S5  │ → │  S6  │                                         │
│ │Optim.│   │Decide│                                         │
│ └──────┘   └──────┘                                         │
│                                                              │
│ Total Cards: 24 (4 per sprint)                               │
│ Evidence Required: Interviews, metrics, payments             │
│                                                              │
│ [ Open Kanban Board ]                                        │
└──────────────────────────────────────────────────────────────┘
```

**Sprint Breakdown**

```
┌──────────────────────────────────────────────────────────────┐
│ Sprint Details                                               │
├──────────────────────────────────────────────────────────────┤
│ Sprint 1 (Week 1-2): Problem Discovery                       │
│ - Interview 15 founders                                      │
│ - Validate pain frequency + cost                             │
│ - Document current workarounds                               │
│ - Goal: 70%+ confirm pain is weekly + costly                 │
│                                                              │
│ Sprint 2 (Week 3-4): Segment Narrowing                       │
│ - Identify founders with failed MVPs (last 6mo)              │
│ - Test messaging: "validate before you build"                │
│ - Goal: 30%+ respond to outreach                             │
│                                                              │
│ Sprint 3 (Week 5-6): Demo Validation Coaching                │
│ - Run 10 Wizard-of-Oz sessions (manual roadmaps)             │
│ - Measure perceived value (NPS)                              │
│ - Goal: 8+/10 average score                                  │
│                                                              │
│ Sprint 4 (Week 7-8): Pitch Paid Pilot                        │
│ - Offer $100 paid pilot (3 sessions)                         │
│ - Test conversion: demo → paid                               │
│ - Goal: 20%+ convert                                         │
│                                                              │
│ Sprint 5 (Week 9-10): Optimize Conversion                    │
│ - A/B test pricing ($99 vs $149)                             │
│ - Test delivery (sync vs async)                              │
│ - Goal: 30%+ conversion rate                                 │
│                                                              │
│ Sprint 6 (Week 11-12): Go/No-Go Decision                     │
│ - Review: 10 paying customers acquired?                      │
│ - Evidence: Stripe revenue, retention, NPS                   │
│ - Decision: Build product / pivot / stop                     │
└─────────────────────────────────────────���────────────────────┘
```

**User Actions:**
- Review sprint map
- Understand goals per sprint
- Click "Open Kanban Board"

**AI Processing:**
- PlannerAgent generates 24 cards from opportunity canvas
- Maps cards to 6 sprints (4 cards per sprint)
- Sets success criteria per card
- Orders by risk (riskiest first)

---

# 5. SCREEN 5 — Kanban Board (Core Execution UI)

**Purpose:** Daily execution + learning

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 90-Day Kanban Board                                      Sprint: 1 of 6 │
├─────────────────────────────────────────────────────────────────────────┤
│ Goal: Problem Discovery - Validate pain frequency + cost                │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┬─────────────┐
│ Backlog      │ To Do        │ Doing        │ Done         │ Learnings   │
├──────────────┼──────────────┼──────────────┼──────────────┼─────────────┤
│ [Card 1]     │ [Card 2]     │ [Card 3]     │ [Card 4]     │             │
│ Interview 15 │ Outreach 10  │ Conduct 3    │ Interview 2  │ ✅ Pain >   │
│ founders     │ founders     │ interviews   │ founders     │ $500/mo     │
│              │ (LinkedIn)   │              │ (completed)  │ confirmed   │
│ Source:      │              │              │              │             │
│ Problems     │ Source:      │ Source:      │ Source:      │ ⚠️ Some say │
│              │ Adoption     │ Problems     │ Problems     │ "nice to    │
│ Risk: High   │              │              │              │ have"       │
│              │ Risk: Medium │ Risk: High   │ Risk: High   │             │
├──────────────┼──────────────┼──────────────┼──────────────┼─────────────┤
│ [Card 5]     │              │              │              │             │
│ Document     │              │              │              │             │
│ workarounds  │              │              │              │             │
│              │              │              │              │             │
│ Source:      │              │              │              │             │
│ Solutions    │              │              │              │             │
│ Today        │              │              │              │             │
│              │              │              │              │             │
│ Risk: Low    │              │              │              │             │
└──────────────┴──────────────┴──────────────┴──────────────┴─────────────┘

Progress: ██░░░░░░░░ 2/24 cards complete (8%)
```

**Card Detail View (Click to Expand)**

```
┌──────────────────────────────────────────────────────────────┐
│ CARD: Interview Early SaaS Founders                          │
├──────────────────────────────────────────────────────────────┤
│ Canvas Source: Opportunity → Problems                        │
│ Sprint: 1 (Problem Discovery)                                │
│                                                              │
│ Assumption Being Tested:                                     │
│ "Founders feel strong pain about validating ideas before     │
│ building, and this pain is frequent + costly"                │
│                                                              │
│ Success Criteria:                                            │
│ - Complete 15 interviews                                     │
│ - ≥70% describe pain unprompted (without leading questions)  │
│ - Pain occurs weekly or more frequently                      │
│ - Pain costs $500+/month (time or money)                     │
│                                                              │
│ AI Coach Tip:                                                │
│ "Ask about their LAST failed idea, not hypotheticals.        │
│ Real stories reveal true pain."                              │
│                                                              │
│ Evidence Upload:                                             │
│ [ Attach Interview Notes ]                                   │
│ [ Attach Recordings (if consent) ]                           │
│                                                              │
│ Status: [To Do] [Doing] [Done] [Validated] [Invalidated]    │
│                                                              │
│ [ Move to Doing ]  [ Mark Complete ]                         │
└──────────────────────────────────────────────────────────────┘
```

**User Actions:**
- Drag cards between columns
- Click card to expand details
- Upload evidence (interview notes, data, screenshots)
- Mark card as validated/invalidated
- View AI coach tips

**AI Processing:**
- CoachAgent provides contextual tips per card
- Tracks progress across all sprints
- Flags cards with missing evidence
- Suggests next action based on current status

---

# 6. SCREEN 6 — Sprint Review (PDCA)

**Purpose:** Decide what happens next

```
┌──────────────────────────────────────────────────────────────┐
│ Sprint 1 Review: Problem Discovery                          │
├──────────────────────────────────────────────────────────────┤
│ Hypothesis:                                                  │
│ "Founders feel strong pain about idea validation and will    │
│ pay for help"                                                │
│                                                              │
│ Results:                                                     │
│ - 12/15 interviews completed (80%)                           │
│ - 9/12 confirmed weekly pain (75% ✅)                        │
│ - Average cost: $800/month in wasted time                    │
│ - BUT: Only 3/12 willing to pre-pay for solution (25% ⚠️)   │
│                                                              │
│ Evidence:                                                    │
│ ✅ Interview notes (12 docs)                                 │
│ ✅ Recorded calls (8 calls, consent given)                   │
│ ⚠️ Pricing survey (only 3 responses)                         │
│                                                              │
│ AI Analysis:                                                │
│ "Pain is validated (75% confirm). Willingness to pay is LOW. │
│ Possible reasons:                                            │
│ 1. Timing: They want help BEFORE starting, not after        │
│ 2. Format: They prefer async tools, not 1:1 coaching         │
│ 3. Price: $100 is too high for unproven value"              │
│                                                              │
│ Decision:                                                    │
│ [✓] Persevere   [ ] Pivot   [ ] Pause                        │
│                                                              │
│ AI Recommendation:                                          │
│ → Narrow segment to "founders with failed MVP in last 6mo"   │
│ → Test lower price point ($49 for single session)            │
│ → Offer money-back guarantee to reduce risk                  │
│                                                              │
│ Next Sprint Focus:                                           │
│ Sprint 2 - Narrow segment + test new offer                   │
│                                                              │
│ [ Start Sprint 2 ]  [ Adjust Canvas ]  [ Export Report ]     │
└──────────────────────────────────────────────────────────────┘
```

**Decision Matrix**

```
┌──────────────────────────────────────────────────────────────┐
│ Sprint Decision Framework (PDCA)                             │
├──────────────────────────────────────────────────────────────┤
│ PERSEVERE if:                                                │
│ ✅ Success criteria met (≥70%)                               │
│ ✅ Evidence is strong (qualitative + quantitative)           │
│ ✅ Risk decreased from previous sprint                       │
│                                                              │
│ PIVOT if:                                                    │
│ ⚠️ Success criteria partially met (40-69%)                   │
│ ⚠️ Evidence suggests different segment/offer                 │
│ ⚠️ Assumption invalidated but fixable                        │
│                                                              │
│ PAUSE if:                                                    │
│ ❌ Success criteria failed (<40%)                            │
│ ❌ Evidence shows no real pain or willingness to pay         │
│ ❌ Multiple sprints failed in a row                          │
└──────────────────────────────────────────────────────────────┘
```

**User Actions:**
- Review sprint results
- Read AI analysis
- Make decision (Persevere/Pivot/Pause)
- Adjust canvas if pivoting
- Start next sprint

**AI Processing:**
- CoachAgent analyzes all evidence
- Compares results to success criteria
- Identifies patterns (e.g., 3/12 willing to pay is 25%, below 30% target)
- Recommends specific pivots based on data
- Updates risk ranking for remaining sprints

---

# 7. AGENT LOGIC (Simple, Explicit)

## Agent Summary

```
┌──────────────────────────────────────────────────────────────┐
│ AI Agent Roles                                               │
├──────────────────────────────────────────────────────────────┤
│ 1. Validator Agent → finds weakest dimension                 │
│    Input: Startup description                                │
│    Output: 7 scores + primary constraint                     │
│                                                              │
│ 2. Canvas Agent → improves inputs + clarity                  │
│    Input: User-entered canvas blocks                         │
│    Output: Enhanced blocks + risk flags                      │
│                                                              │
│ 3. Risk Agent → selects riskiest assumption                  │
│    Input: Completed opportunity canvas                       │
│    Output: Top 5 risks, ordered by severity                  │
│                                                              │
│ 4. Planner Agent → generates sprint plan                     │
│    Input: Opportunity canvas + risk ranking                  │
│    Output: 6 sprints with 24 Kanban cards                    │
│                                                              │
│ 5. Research Agent → injects benchmarks                       │
│    Input: Industry + problem space                           │
│    Output: Market sizing, competitors, adoption patterns     │
│                                                              │
│ 6. Coach Agent → explains why each task exists               │
│    Input: Kanban card + context                              │
│    Output: Plain-English rationale for task                  │
└──────────────────────────────────────────────────────────────┘
```

## Agent Flow Diagram

```
User Input
    ↓
┌─────────────────┐
│ ValidatorAgent  │ → Scores + weak areas
└─────────────────┘
    ↓
┌─────────────────┐
│  CanvasAgent    │ → Enhanced Lean Canvas
└─────────────────┘
    ↓
┌─────────────────┐
│  CanvasAgent    │ → Enhanced Opportunity Canvas
└─────────────────┘
    ↓
┌─────────────────┐
│   RiskAgent     │ → Top 5 risks ranked
└─────────────────┘
    ↓
┌─────────────────┐
│ PlannerAgent    │ → 90-day plan (6 sprints × 4 cards)
└─────────────────┘
    ↓
┌─────────────────┐
│ ResearchAgent   │ → Market benchmarks (optional)
└─────────────────┘
    ↓
┌─────────────────┐
│  CoachAgent     │ → Contextual tips per card
└─────────────────┘
    ↓
Sprint Execution (User + AI Coach)
    ↓
┌─────────────────┐
│  CoachAgent     │ → Sprint review + pivot recommendation
└─────────────────┘
    ↓
Decision: Persevere / Pivot / Pause
```

---

# 8. WHY THIS WORKS (One Sentence Per Benefit)

## Core Benefits

```
┌──────────────────────────────────────────────────────────────┐
│ Why This System Works                                        │
├──────────────────────────────────────────────────────────────┤
│ 1. Forces Learning Before Building                           │
│    → Can't skip to Sprint 3 without validating Sprint 1      │
│                                                              │
│ 2. Reduces Risk Systematically                               │
│    → Tests riskiest assumption first (week 2, not month 6)   │
│                                                              │
│ 3. Clear Decision Points                                     │
│    → Every sprint ends with pivot/persevere/stop             │
│                                                              │
│ 4. AI as Coach, Not Oracle                                   │
│    → Explains WHY each task exists, teaches validation       │
│                                                              │
│ 5. Evidence-Driven                                           │
│    → Every card requires evidence (no opinions)              │
│                                                              │
│ 6. Time-Boxed Sprints                                        │
│    → 2 weeks per sprint = 90 days total, no endless planning │
│                                                              │
│ 7. Canvas-to-Kanban Traceability                             │
│    → Every task maps back to opportunity block               │
│                                                              │
│ 8. Fail Fast or Scale Fast                                   │
│    → Know by day 90 if you have a business                   │
└──────────────────────────────────────────────────────────────┘
```

## One-Sentence Summary

**Every screen reduces uncertainty, every card tests reality, and every 90-day cycle ends with a real business decision.**

---

# 9. NAVIGATION MAP

```
Flow Map:

[Profile Validator]
        ↓
   (Scores shown)
        ↓
[ Go to Lean Canvas ] ← Button
        ↓
[Lean Canvas Entry]
        ↓
   (AI enhances blocks)
        ↓
[ Continue to Opportunity ] ← Button
        ↓
[Opportunity Canvas]
        ↓
   (AI ranks risks)
        ↓
[ Generate 90-Day Plan ] ← Button
        ↓
[Plan Overview]
        ↓
   (Shows sprint map)
        ↓
[ Open Kanban Board ] ← Button
        ↓
[Kanban Execution]
        ↓
   (User drags cards, uploads evidence)
        ↓
Sprint complete? → [Sprint Review]
        ↓
Decision: [Persevere] [Pivot] [Pause]
        ↓
If Persevere → [Next Sprint]
If Pivot → [Update Canvas] → [Regenerate Plan]
If Pause → [Export Report] → [End]
```

---

# 10. RESPONSIVE DESIGN NOTES

## Desktop (1440px+)

```
┌────────────────────────────────────────────────────┐
│ Header / Progress Bar                              │
├──────────────┬─────────────────────────────────────┤
│              │                                     │
│ Left Panel   │ Main Content                        │
│ (Canvas/     │ (Forms, Cards, Results)             │
│  AI Tips)    │                                     │
│              │                                     │
│              │                                     │
├──────────────┴─────────────────────────────────────┤
│ Footer                                             │
└────────────────────────────────────────────────────┘
```

## Tablet (768px - 1439px)

```
┌────────────────────────────────────────┐
│ Header / Progress Bar                  │
├────────────────────────────────────────┤
│ Main Content (full width)              │
│ AI Tips collapse to accordion          │
│                                        │
│                                        │
├────────────────────────────────────────┤
│ Footer                                 │
└────────────────────────────────────────┘
```

## Mobile (< 768px)

```
┌──────────────────────┐
│ Header (compact)     │
├──────────────────────┤
│ Main Content         │
│ (stacked vertically) │
│                      │
│ AI Tips → Bottom     │
│ sheet                │
│                      │
├──────────────────────┤
│ Footer (simplified)  │
└──────────────────────┘
```

---

# 11. INTERACTION STATES

## Card States

```
[ ] Not Started (gray border)
[→] In Progress (blue border, pulse animation)
[✓] Complete (green border)
[✓] Validated (green background, checkmark)
[✗] Invalidated (red background, X mark)
```

## Button States

```
[ Primary ]         ← Default (emerald green)
[ Primary :hover ]  ← Hover (darker green)
[ Primary :active ] ← Click (pressed effect)
[ Primary :disabled] ← Disabled (gray, no pointer)
```

## Progress Indicators

```
Sprint Progress: ██████░░░░ 60% (3/5 cards done)
Overall Progress: ███░░░░░░░ 30% (Sprint 2 of 6)
```

---

# 12. AI COACH PANEL (Always Visible)

```
┌──────────────────────────────────────┐
│ 💡 AI Coach                          │
├──────────────────────────────────────┤
│ Current Context: Sprint 1, Card 3    │
│                                      │
│ Why this task:                       │
│ "You're testing if the pain is real  │
│ and frequent. If <70% confirm, pivot │
│ to a different problem."             │
│                                      │
│ Tips:                                │
│ • Ask about last failed idea         │
│ • Don't lead with your solution      │
│ • Listen for unprompted pain         │
│                                      │
│ Common mistakes:                     │
│ • Talking more than listening        │
│ • Asking "would you use X?"          │
│                                      │
│ [ Ask AI a Question ]                │
└──────────────────────────────────────┘
```

---

# 13. EXPORT OPTIONS

## End of Sprint 6

```
┌──────────────────────────────────────────────────────────────┐
│ 90-Day Cycle Complete                                        │
├──────────────────────────────────────────────────────────────┤
│ Final Results:                                               │
│ - Paying customers: 8/10 target (80%)                        │
│ - Revenue: $800 MRR                                          │
│ - Retention: 75% (6/8 still active)                          │
│ - NPS: 45 (Promoters - Detractors)                           │
│                                                              │
│ Decision: [✓] BUILD PRODUCT                                  │
│                                                              │
│ Export Options:                                              │
│ [ Download Full Report (PDF) ]                               │
│ [ Export to Notion ]                                         │
│ [ Share with Co-founder ]                                    │
│ [ Generate Pitch Deck ]                                      │
│                                                              │
│ Next Steps:                                                  │
│ [ Start Product Roadmap ]                                    │
│ [ Set Up Development Kanban ]                                │
└──────────────────────────────────────────────────────────────┘
```

---

## End of Document

**Summary:** These wireframes provide a complete blueprint for implementing the full validation system from Profile Validator through to 90-Day Execution Plan with AI guidance at every step.

**Key Design Principles:**
1. Progressive disclosure (show context when needed)
2. Clear CTAs at every decision point
3. Evidence requirements visible upfront
4. AI as coach, not black box
5. Traceable from canvas block → Kanban card → evidence → decision

**Implementation Priority:**
1. Screen 1: Profile Validator (Week 1-2)
2. Screen 2: Lean Canvas (Week 3-4)
3. Screen 3: Opportunity Canvas (Week 5-6)
4. Screen 4-5: Kanban Board (Week 7-10)
5. Screen 6: Sprint Review (Week 11-12)
