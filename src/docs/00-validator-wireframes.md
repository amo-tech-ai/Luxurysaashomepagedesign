# Validator Flow — Chat → Test → Report

**Route:** `/validate` → `/validator/run/:id` → `/validator/report/:id`  
**Purpose:** Turn conversation into validated startup profile  
**Status:** ✅ Production Ready  
**Updated:** February 10, 2026

---

## Mental Model

```
Talk → Structure → Test → Explain → Act
```

**Core Rule:** AI suggests. User decides. System explains why.

---

## User Journey (6 screens)

```
1. Landing
   ↓
2. Chat Intake (8 topics, depth tracking)
   ↓
3. Readiness Check (user control checkpoint)
   ↓
4. Validator Running (7 agents, visible progress)
   ↓
5. Validation Report (scores + gaps + next steps)
   ↓
6. Next Actions (canvases, plans, re-run)
```

---

## Screen 1 — Landing / Entry

**URL:** `/validate`

```
┌─────────────────────────────────────────────┐
│  StartupAI                                  │
├─────────────────────────────────────────────┤
│                                             │
│     From idea to execution                  │
│     in one guided flow                      │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │ Describe your startup idea...        │  │
│  │                                       │  │
│  │                               [Send]  │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  Example: "I'm building an AI scheduling   │
│  tool for dental practices..."             │
│                                             │
└─────────────────────────────────────────────┘
```

**Logic:**
- User types freely
- Enter = send first message
- Navigate to Chat Intake

---

## Screen 2 — Chat Intake

**URL:** `/validate`  
**Layout:** 3-panel responsive

```
┌────────────┬─────────────────────┬────────────┐
│ CONTEXT    │  CHAT               │ EXTRACTION │
│            │                     │            │
│ Progress   │  ╔═══════════════╗  │ Readiness  │
│  ◉ 65%     │  ║ AI: What      ║  │  ◉ 65%     │
│  ▰▰▰▰▰▰▱▱  │  ║ problem are   ║  │  ▰▰▰▰▰▰▱▱  │
│            │  ║ you solving?  ║  │            │
│ Coverage:  │  ╚═══════════════╝  │ Extracted: │
│            │                     │            │
│ ◉ Problem  │  ┌───────────────┐  │ Problem:   │
│   ████▓    │  │ User: Manual  │  │ ◉◉◉ High   │
│   Deep     │  │ scheduling... │  │ Manual     │
│            │  └───────────────┘  │ dental...  │
│ ◉ Customer │                     │            │
│   ████░    │  ╔═══════════════╗  │ Customer:  │
│   Shallow  │  ║ AI: Who are   ║  │ ◉◉◎ Medium │
│            │  ║ your target   ║  │ 1-5        │
│ ○ Compete  │  ║ customers?    ║  │ dentists   │
│   ░░░      │  ╚═══════════════╝  │            │
│   None     │                     │ Solution:  │
│            │  ┌───────────────┐  │ ◉◉◉ High   │
│ [8 topics] │  │ Type...       │  │ AI tool    │
│            │  └───────────────┘  │            │
│            │                     │ Actions:   │
│ Guidance:  │  [✦ Generate]      │ ➕ Add     │
│ • Compete  │  [Skip ↓]          │ ✏️ Edit    │
│ • Research │                     │            │
└────────────┴─────────────────────┴────────────┘
```

**8 Coverage Topics:**
1. Problem
2. Customer
3. Competitors
4. Websites (research)
5. Innovation
6. Uniqueness
7. Demand
8. Research

**Depth Levels:**
- `░░░` None (gray)
- `▓▓▓` Shallow (orange)
- `███` Deep (green)

**AI Techniques:**
1. Probing: "Tell me more about..."
2. Quantifying: "What's the market size?"
3. Challenging: "What about [competitor]?"
4. Deepening: "What evidence supports that?"
5. Pivoting: Shift to uncovered topic

**Readiness Rules:**
- **Rule 1:** 3+ msgs AND 5+ shallow AND 2+ deep
- **Rule 2:** 4+ msgs AND 4+ deep
- **Rule 3:** 8+ msgs (safety net)

**Logic:**
- AI asks contextual questions
- Coverage fills in real-time
- Extracted fields show confidence (Low/Med/High)
- Generate button enables when ready
- User controls when to proceed

---

## Screen 3 — Ready to Validate

**State:** Chat panel when readiness = 65%+

```
┌─────────────────────────────────────────────┐
│                                             │
│  ✓ Ready to Generate Validation Report     │
│                                             │
│  Coverage: 65%                              │
│  • 6 shallow topics                         │
│  • 2 deep topics                            │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │  ✦ Generate Validation Report         │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  or continue chatting to deepen insights   │
│                                             │
└─────────────────────────────────────────────┘
```

**Logic:**
- User clicks Generate
- System creates `validator_sessions` record
- Navigate to `/validator/run/:sessionId`
- Nothing runs automatically

---

## Screen 4 — Validator Running

**URL:** `/validator/run/:sessionId`  
**Purpose:** Visible agent pipeline

```
┌─────────────────────────────────────────────┐
│  StartupAI  >  Validation Pipeline          │
├─────────────────────────────────────────────┤
│                                             │
│  Running 7 AI Agents...                     │
│                                             │
│  ✓ 1. Extract Profile                       │
│    Structured startup data from chat        │
│    Duration: 3.2s                           │
│                                             │
│  ⚙ 2. Market Research                       │
│    Analyzing industry trends & data...      │
│    Checking: Market size, growth rate       │
│                                             │
│  ○ 3. Competitor Analysis                   │
│    Pending...                               │
│                                             │
│  ○ 4. Validation Scoring                    │
│    Pending...                               │
│                                             │
│  ○ 5. MVP Recommendation                    │
│    Pending...                               │
│                                             │
│  ○ 6. Compose Report                        │
│    Pending...                               │
│                                             │
│  ○ 7. Verify & Ground                       │
│    Pending...                               │
│                                             │
│  Estimated time: 45-60 seconds              │
│                                             │
└─────────────────────────────────────────────┘
```

**Agent Status:**
- ✓ Complete (green)
- ⚙ Running (emerald, animated)
- ○ Pending (gray)

**Logic:**
- Agents run sequentially
- Real-time status updates (SSE/polling)
- Shows what each agent is checking
- Auto-redirects to report when complete

---

## Screen 5 — Validation Report

**URL:** `/validator/report/:reportId`

```
┌─────────────────────────────────────────────────────────┐
│  StartupAI  >  Validation Report                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  AI Dental Scheduling Tool                              │
│  Validated: Feb 10, 2026                                │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Overall Score: 72/100                            │  │
│  │  ▰▰▰▰▰▰▰▱▱▱                                      │  │
│  │                                                   │  │
│  │  Strong problem-solution fit                     │  │
│  │  Needs deeper competitive analysis               │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  Section Scores:                                        │
│                                                         │
│  ◉ Problem Clarity          85/100  ▰▰▰▰▰▰▰▰▱▱        │
│  ◉ Customer Understanding   78/100  ▰▰▰▰▰▰▰▱▱▱        │
│  ◉ Solution Validation      68/100  ▰▰▰▰▰▰▱▱▱▱        │
│  ◉ Market Opportunity       62/100  ▰▰▰▰▰▰▱▱▱▱        │
│  ◉ Competitive Position     45/100  ▰▰▰▰▱▱▱▱▱▱        │
│  ◉ MVP Readiness            80/100  ▰▰▰▰▰▰▰▰▱▱        │
│                                                         │
│  ┌─ Validated Claims ────────────────────────────────┐  │
│  │ ✓ Manual scheduling wastes 2-3hrs/day (verified) │  │
│  │ ✓ 15% no-show rate common in dental (verified)   │  │
│  │ ✓ 1-5 dentist practices = 68% of market          │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─ Gaps & Risks ────────────────────────────────────┐  │
│  │ ⚠ No competitor pricing research                  │  │
│  │ ⚠ Unclear differentiation vs Calendly + Dentrix   │  │
│  │ ⚠ No customer validation interviews mentioned     │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─ Recommended MVP ──────────────────────────────────┐ │
│  │ Build: AI appointment scheduler                   │  │
│  │ Skip: Billing integration, patient records        │  │
│  │ Test: 3 pilot practices, 30-day trial             │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  Next Actions:                                          │
│  [ Update Lean Canvas ]  [ View Value Prop ]           │
│  [ Generate 90-Day Plan ]  [ Re-run Validation ]       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Sections:**
1. Overall Score (0-100)
2. 6 Section Scores (weighted)
3. Validated Claims (with sources)
4. Gaps & Risks (what's missing)
5. Recommended MVP (what to build)
6. Next Actions (canvases, plans)

**Logic:**
- Everything traceable to inputs
- No generic advice
- Clear evidence vs assumptions
- Actionable next steps

---

## Screen 6 — Next Actions

**Triggered from:** Report page actions

```
┌─────────────────────────────────────────────┐
│  What would you like to do next?            │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  📋 Update Lean Canvas              │    │
│  │  Pre-fill with validated insights   │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  💎 View Value Proposition          │    │
│  │  See customer-benefit mapping       │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  🎯 Generate 90-Day Plan            │    │
│  │  Step-by-step execution roadmap     │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  🔄 Re-run Validation               │    │
│  │  Add more context, test again       │    │
│  └─────────────────────────────────────┘    │
│                                             │
└─────────────────────────────────────────────┘
```

**Routes:**
- Lean Canvas → `/lean-canvas`
- Value Prop → `/value-proposition`
- 90-Day Plan → `/90-day-plan`
- Re-run → `/validate` (new session)

---

## Data Flow (simple)

```
Chat messages
  ↓
Extract structured profile (Agent 1)
  ↓
Store assumptions + claims
  ↓
Agents 2-5 enrich & test
  ↓
Scores + explanations (Agent 4)
  ↓
Report + canvas updates (Agent 6-7)
```

**Stored:**
- `validator_sessions` (chat, coverage, extracted)
- `validator_reports` (scores, claims, gaps)
- `startup_profiles` (structured data)

---

## 7 Agents (what they do)

| # | Agent            | Responsibility                     | Duration |
|---|------------------|------------------------------------|----------|
| 1 | Extract Profile  | Chat → structured startup data     | 2-4s     |
| 2 | Market Research  | Industry size, trends, growth      | 8-12s    |
| 3 | Competitors      | Alternatives, positioning, pricing | 6-10s    |
| 4 | Validation Score | Weighted scoring across 6 areas    | 3-5s     |
| 5 | MVP Recommend    | What to build first (scope)        | 5-8s     |
| 6 | Compose Report   | Human-readable insights            | 6-10s    |
| 7 | Verify & Ground  | Check claims, add citations        | 4-6s     |

**Total:** 45-60 seconds

---

## Edge Functions (server-side)

```
/validator-followup
  → AI follow-up questions
  → Coverage tracking
  → Field extraction

/validator-extract-profile
  → Chat → structured profile
  → Store in startup_profiles

/validator-run-pipeline
  → Orchestrates 7 agents
  → Sequential execution
  → SSE status updates

/validator-market-research
  → Industry analysis
  → Market size, trends

/validator-competitors
  → Competitive landscape
  → Positioning gaps

/validator-score
  → 6-dimension scoring
  → Weighted formula

/validator-mvp
  → MVP recommendations
  → Scope definition

/validator-compose-report
  → Human-readable report
  → Insights + next steps

/validator-verify
  → Ground claims
  → Add citations
```

**All AI runs server-side.**  
**User always triggers actions.**

---

## Real-World Example

**Input (Chat):**
```
User: I'm building an AI scheduling tool for 
independent dental practices (1-5 dentists). 
The current manual booking wastes 2-3 hours/day 
and causes 15% no-shows.

AI: What differentiates your AI from tools like 
Calendly or existing dental software like Dentrix?

User: Calendly is generic. Dentrix has scheduling 
but no AI. We use dental-specific logic for 
appointment types and insurance.

AI: Have you validated demand with any dental 
practices? What feedback did they give?

User: Talked to 5 practices. All said they'd pay 
$200/month to save 2+ hours daily.
```

**Extracted Profile:**
```json
{
  "problem": "Manual dental scheduling wastes 2-3hrs/day, 15% no-shows",
  "customer": "Independent dental practices, 1-5 dentists",
  "solution": "AI scheduling tool with dental-specific logic",
  "differentiation": "vs Calendly (generic), vs Dentrix (no AI)",
  "demand": "5 practices, $200/month willingness-to-pay",
  "competitors": "Calendly, Dentrix",
  "business_model": "SaaS, $200/month",
  "websites": []
}
```

**Validation Report:**
```
Overall Score: 72/100

Section Scores:
- Problem Clarity: 85/100 ✓
- Customer Understanding: 78/100 ✓
- Solution Validation: 68/100
- Market Opportunity: 62/100
- Competitive Position: 45/100 ⚠
- MVP Readiness: 80/100 ✓

Validated Claims:
✓ 2-3hrs/day waste (verified via industry reports)
✓ 15% no-show rate (verified, common in dental)
✓ 1-5 dentist practices = 68% of US dental market

Gaps & Risks:
⚠ No competitor pricing research
⚠ Unclear why practices wouldn't use Calendly + Dentrix together
⚠ Only 5 validation interviews (need 15-20)

Recommended MVP:
Build: AI appointment scheduler with dental logic
Skip: Billing, patient records, insurance verification
Test: 3 pilot practices, 30-day trial, measure time saved

Next Steps:
1. Update Lean Canvas with validated insights
2. Run 10 more customer interviews
3. Research Calendly + Dentrix integration costs
```

---

## Core Product Principles

1. **AI suggests. User decides. System explains why.**
2. **No automatic actions** — user controls all triggers
3. **Everything traceable** — scores link to inputs
4. **No generic advice** — all insights context-specific
5. **Visible reasoning** — show agent work, not black box

---

## Mobile Flow (simplified)

```
┌───────────────┐
│ Chat          │
│               │
│ ╔═══════════╗ │
│ ║ AI: What  ║ │
│ ║ problem?  ║ │
│ ╚═══════════╝ │
│               │
│ ┌───────────┐ │
│ │ User...   │ │
│ └───────────┘ │
│               │
│ [Type...]     │
│               │
│ [✦ Generate]  │
│               │
├───────────────┤
│ [Chat] [📊] [✓] │
│   ◉     ○    ○  │
└───────────────┘

Tap [📊] = Coverage
Tap [✓] = Extracted
```

**Mobile Tabs:**
- Chat (default)
- Coverage (context panel)
- Extracted (extraction panel)

---

## Technical Stack

**Frontend:**
- React + TypeScript
- Tailwind CSS (beige/emerald theme)
- React Router (client-side routing)

**Backend:**
- Supabase (PostgreSQL)
- Edge Functions (Deno)
- Gemini 3 Flash (AI model)

**Tables:**
- `validator_sessions` (chat + coverage)
- `validator_reports` (scores + insights)
- `startup_profiles` (structured data)

---

## Status: ✅ Production Ready

**Built:**
- ✅ Chat Intake (3-panel layout)
- ✅ Coverage tracking (8 topics, 3 depths)
- ✅ AI follow-up (5 techniques)
- ✅ Readiness rules (3 paths)
- ✅ Extraction panel (confidence badges)
- ✅ Fallback resilience
- ✅ Session persistence

**In Progress:**
- 🔄 Validator pipeline (7 agents)
- 🔄 Report generation
- 🔄 Next actions routing

**Next:**
- 📋 Connect to Lean Canvas
- 🎯 Connect to 90-Day Plan
- 💎 Connect to Value Proposition

---

## One-Line Summary

**Talk → Structure → Test → Explain → Act**
