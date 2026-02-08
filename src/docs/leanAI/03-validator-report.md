# Screen 03: Validator Report

> **Question this screen answers:** "Should I build this? What are the risks?"
> **Status:** BUILT ⚠️ (UI complete, AI agents are mock data) | **Route:** `/startup-validator-v4` | **File:** `page.tsx`  
> **Note:** Production UI exists at `/app/startup-validator-v4/page.tsx`. All validation data is currently hardcoded mock data. AI agents not implemented.

---

## What This Screen Does (Plain English)

This is the core output of the validation system. After you complete your startup profile, 7 AI agents analyze your idea from different angles (market, competition, pricing, team, risk, timing, go-to-market). Each agent produces a scored section with evidence and recommendations.

Think of it like a VC investment memo meets a consulting report — structured, data-backed, actionable. The report gives you a clear "Build / Don't Build / Pivot" recommendation with reasoning.

---

## ASCII Wireframe (with sample data)

```
+---------------------------+--------------------------------------------+---------------------------+
|  REPORT NAVIGATION        |  VALIDATION REPORT                         |  NEXT ACTIONS             |
|                           |                                            |                           |
|  Overall Score:           |  +--------------------------------------+  |  RECOMMENDATION           |
|  ████████░░ 78/100        |  | TASKFLOW AI                          |  |                           |
|  STRONG BUILD             |  | AI 90-day planner for solo founders  |  |  ✅ BUILD                 |
|                           |  | Validated: Feb 6, 2026               |  |                           |
|  Sections:                |  +--------------------------------------+  |  Confidence: 78%          |
|  ✅ Market (85)           |                                            |  (Strong signal)          |
|  ✅ Competition (72)      |  OVERALL ASSESSMENT                        |                           |
|  ✅ Pricing (80)          |  +--------------------------------------+  |  Key strengths:           |
|  ⚠️  Team (65)            |  | STRONG BUILD (78/100)                |  |  • Clear pain point       |
|  ⚠️  Risk (60)            |  |                                      |  |  • Validated demand       |
|  ✅ Timing (88)           |  | This is a validated problem with     |  |  • Weak competition       |
|  ✅ GTM (75)              |  | strong demand signals. The market is |  |                           |
|                           |  | ready, competition is weak, and the  |  |  Top risks:               |
|                           |  | pricing strategy is sound.           |  |  • Solo founder risk      |
|                           |  |                                      |  |  • Distribution unclear   |
|                           |  | Main risks: Solo founder bandwidth,  |  |                           |
|                           |  | distribution strategy needs clarity. |  |  [Export PDF]             |
|  Jump to:                 |  +--------------------------------------+  |  [Share Report]           |
|  [Market Analysis]        |                                            |  [Create Lean Canvas ->]  |
|  [Competition Map]        |  +--------------------------------------+  |                           |
|  [Pricing Model]          |  | 📊 MARKET ANALYSIS             85/100|  |  -------------------------+
|  [Team Assessment]        |  +--------------------------------------+  |                           |
|  [Risk Matrix]            |                                            |  BENCHMARKS               |
|  [Timing Analysis]        |  Market Size (TAM/SAM/SOM)                 |                           |
|  [GTM Strategy]           |  • TAM: $4.7B (4.7M solo founders)         |  Your score: 78/100       |
|                           |  • SAM: $1.2B (1.2M building software)     |                           |
|                           |  • SOM: $12M (1% of SAM in Year 1)         |  Similar startups:        |
|                           |                                            |  • Notion:      82/100    |
|  [Download Report]        |  ✅ Strong: Market is $1B+ addressable     |  • Linear:      79/100    |
|  [Share Link]             |  ✅ Strong: 15 customer interviews         |  • Superhuman:  76/100    |
|                           |  ⚠️  Watch: TAM assumes $1K ACV (verify)   |  • Coda:        74/100    |
|                           |                                            |                           |
|                           |  Evidence:                                 |  You're in the top 20%    |
|                           |  • SBA: 4.7M solo entrepreneurs (2024)     |  of validated ideas.      |
|                           |  • IndieHackers: 1.2M building software    |                           |
|                           |  • Your research: 15 interviews, 12 said   |                           |
|                           |    they'd pay                              |                           |
|                           |                                            |                           |
|                           |  Recommendation:                           |                           |
|                           |  "Market is validated. Proceed to pricing  |                           |
|                           |   and distribution strategy."              |                           |
|                           |                                            |                           |
|                           |  +--------------------------------------+  |                           |
|                           |  | 🎯 COMPETITION ANALYSIS        72/100|  |                           |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |                           |
|                           |  Competitive Landscape                     |                           |
|                           |  • Direct: None (planning for founders)    |                           |
|                           |  • Indirect: Notion AI, Motion, Linear     |                           |
|                           |                                            |                           |
|                           |  ✅ Strong: No direct competitor           |                           |
|                           |  ⚠️  Watch: Notion could add this feature  |                           |
|                           |  ❌ Concern: How will you win vs Notion?   |                           |
|                           |                                            |                           |
|                           |  Competition Matrix:                       |                           |
|                           |  ┌─────────────┬────────┬─────────────┐   |                           |
|                           |  │ Competitor  │ Overlap│ Weakness    │   |                           |
|                           |  ├─────────────┼────────┼─────────────┤   |                           |
|                           |  │ Notion AI   │ 40%    │ Generic     │   |                           |
|                           |  │ Motion      │ 30%    │ Calendar    │   |                           |
|                           |  │ Linear      │ 20%    │ Teams only  │   |                           |
|                           |  └─────────────┴────────┴─────────────┘   |                           |
|                           |                                            |                           |
|                           |  Recommendation:                           |                           |
|                           |  "Position as 'Notion for founders who     |                           |
|                           |   hate planning.' Speed to market is key." |                           |
|                           |                                            |                           |
|                           |  [See full competition map ->]             |                           |
|                           |                                            |                           |
|                           |  +--------------------------------------+  |                           |
|                           |  | 💰 PRICING STRATEGY            80/100|  |                           |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |                           |
|                           |  Proposed Model                            |                           |
|                           |  • Starter: $29/mo (solo founders)         |                           |
|                           |  • Pro: $79/mo (teams, agencies)           |                           |
|                           |                                            |                           |
|                           |  ✅ Strong: Priced below Notion ($10)      |                           |
|                           |  ✅ Strong: Premium vs Motion ($34)        |                           |
|                           |  ⚠️  Watch: $29 may leave money on table   |                           |
|                           |                                            |                           |
|                           |  Benchmark:                                |                           |
|                           |  Solo SaaS tools: $19-49/mo avg           |                           |
|                           |  You: $29 (market rate ✓)                 |                           |
|                           |                                            |                           |
|                           |  Recommendation:                           |                           |
|                           |  "Test $39 Starter / $99 Pro. Founders     |                           |
|                           |   pay for ROI, not features."              |                           |
|                           |                                            |                           |
|                           |  +--------------------------------------+  |                           |
|                           |  | 👥 TEAM ASSESSMENT             65/100|  |                           |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |                           |
|                           |  Current Team                              |                           |
|                           |  • Solo technical founder                  |                           |
|                           |  • No co-founder, no advisors              |                           |
|                           |                                            |                           |
|                           |  ⚠️  Concern: Solo founder risk (45% fail) |                           |
|                           |  ❌ Gap: Marketing/distribution expertise  |                           |
|                           |  ⚠️  Watch: Burnout risk at 60+ hrs/week   |                           |
|                           |                                            |                           |
|                           |  Recommendation:                           |                           |
|                           |  "Add a growth advisor within 30 days.     |                           |
|                           |   Consider co-founder for distribution."   |                           |
|                           |                                            |                           |
|                           |  [See team builder tool ->]                |                           |
|                           |                                            |                           |
|                           |  (continues with Risk, Timing, GTM...)     |                           |
|                           |                                            |                           |
+---------------------------+--------------------------------------------+---------------------------+
```

---

## UI Microcopy (exact on-screen text)

| Element | Text |
|---------|------|
| Page title | "Validation Report" |
| Overall score label | "Overall Score: 78/100 — STRONG BUILD" |
| Recommendation badge | "✅ BUILD (Confidence: 78%)" |
| Section score format | "📊 Market Analysis — 85/100" |
| Evidence intro | "Evidence:" |
| Recommendation intro | "Recommendation:" |
| Expand button | "See full analysis" |
| Export button | "Export PDF" |
| Share button | "Share Report" |
| Next action CTA | "Create Lean Canvas" |
| Benchmark intro | "Benchmarks: You're in the top 20% of validated ideas." |

---

## AI Agent Prompt (Validator Orchestrator)

```
You are the Startup Validator Orchestrator.

Your job is to coordinate 7 specialized agents to validate a startup idea.
Each agent analyzes one dimension and produces a scored section (0-100).

The 7 agents:
1. Market Agent: TAM/SAM/SOM, demand signals, growth trends
2. Competition Agent: Direct/indirect competitors, positioning gaps
3. Pricing Agent: Pricing model validation, willingness to pay, benchmarks
4. Team Agent: Founder skills, gaps, solo founder risk, advisory needs
5. Risk Agent: Top 5 risks with likelihood + impact scores
6. Timing Agent: Market readiness, technology maturity, regulatory landscape
7. GTM Agent: Distribution strategy, CAC:LTV, first 100 customers plan

For each agent:
- Run analysis using the startup profile as input
- Output: Score (0-100), Evidence (3-5 bullets), Recommendation (1 sentence)

Then aggregate:
- Overall score: weighted average (Market 20%, Competition 15%, Pricing 15%,
  Team 15%, Risk 15%, Timing 10%, GTM 10%)
- Recommendation: BUILD (75+) | PIVOT (50-74) | DON'T BUILD (<50)
- Confidence: % based on data completeness and agent agreement

Output: Structured JSON report with all sections.
```

---

## Sample Data (TaskFlow AI — Validation Report)

**Overall Assessment:**
- Score: 78/100
- Recommendation: STRONG BUILD
- Confidence: 78%
- Top Strength: Clear validated problem
- Top Risk: Solo founder bandwidth

**Section Scores:**

| Agent | Score | Grade | Status |
|-------|:-----:|:-----:|:------:|
| Market | 85/100 | A | ✅ Strong |
| Competition | 72/100 | B | ✅ Good |
| Pricing | 80/100 | A- | ✅ Strong |
| Team | 65/100 | C+ | ⚠️ Concern |
| Risk | 60/100 | C | ⚠️ Watch |
| Timing | 88/100 | A | ✅ Excellent |
| GTM | 75/100 | B+ | ✅ Good |

**Key Insights:**

Market (85/100):
- Evidence: $4.7B TAM, 15 interviews, 12/15 would pay
- Recommendation: "Market validated. Proceed to distribution."

Competition (72/100):
- Evidence: No direct competitor, Notion/Motion are indirect
- Recommendation: "Position as 'Notion for founders who hate planning.'"

Pricing (80/100):
- Evidence: $29 is market rate, but may leave money on table
- Recommendation: "Test $39 Starter / $99 Pro."

Team (65/100):
- Evidence: Solo technical founder, no marketing expertise
- Recommendation: "Add growth advisor within 30 days."

Risk (60/100):
- Top Risks: Solo founder (80% likelihood, HIGH impact), Distribution unclear (60%, MED), Notion builds this (40%, HIGH)
- Recommendation: "Mitigate solo founder risk first."

Timing (88/100):
- Evidence: AI adoption up 300% in 2024-25, founders seeking AI tools
- Recommendation: "Strike now — market is hot."

GTM (75/100):
- Evidence: ICP is clear, channels identified (Twitter, IndieHackers, Reddit)
- Recommendation: "Start with community-led growth."

**Next Actions:**
1. Create Lean Canvas (pre-filled with profile data)
2. Build 90-day plan focusing on distribution
3. Add growth advisor to mitigate solo founder risk

---

## Figma-Ready Prompt

```
Design a startup validation report screen for an AI platform.

Layout: 3-panel
- Left panel (240px): Sticky navigation with overall score at top (large
  circular progress indicator), followed by clickable section list with
  color-coded scores (green 75+, amber 50-74, red <50). Quick actions at
  bottom: Download, Share.
- Center panel (main, scrollable): Report content organized as expandable
  cards, one per agent. Each card shows: section title, score badge,
  quick summary (2-3 bullets), evidence list, recommendation callout,
  and "See full analysis" expand button.
- Right panel (280px, sticky): "Next Actions" with recommendation badge
  at top (BUILD/PIVOT/DON'T BUILD), key strengths/risks summary, benchmark
  comparison, and CTA buttons (Export, Share, Create Lean Canvas).

Style: Professional report aesthetic. Use cards with subtle shadows.
Score badges are large, prominent. Evidence uses bullet points with
checkmarks (✅ Strong, ⚠️ Watch, ❌ Concern). Recommendation callouts
have colored left border. Overall tone is calm, data-driven, not alarmist.

Typography: Inter. 16px body, 14px evidence, 20px section titles, 32px
overall score.
```

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 02: Startup Profile | Full profile data feeds 7 agents |
| Output -> | Screen 05: Lean Canvas | "Create Lean Canvas" button pre-fills canvas |
| Output -> | Screen 06: 90-Day Plan | Top risks become sprint 1 tasks |
| Output -> | Screen 08: Advisor Match | Team gaps trigger advisor suggestions |