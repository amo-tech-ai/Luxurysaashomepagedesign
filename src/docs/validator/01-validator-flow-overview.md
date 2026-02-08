# Validator Flow - Implementation Overview

**Document:** 01-validator-flow-overview.md  
**Status:** Planning  
**Screens:** 5 | **Agents:** 7 | **Report Sections:** 14  
**Date:** February 6, 2026

---

## Purpose

Create a conversational startup validation system that guides founders from idea description to actionable 14-section validation report using 7 AI agents running in parallel pipeline.

**Core Principle:** Decision-first, evidence on demand. Show verdict + tradeoffs immediately, deep analysis on expand.

---

## User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  HOME → "Validate My Idea"                                      │
│     ↓                                                           │
│  [1] VALIDATE IDEA (Hero + Chat Entry)                         │
│     ↓ Type idea description                                    │
│  [2] VALIDATOR CHAT (AI Q&A, 2-7 exchanges)                    │
│     ↓ Click "Generate"                                         │
│  [3] VALIDATOR PROGRESS (7 agents, 30-80s)                     │
│     ↓ Auto-navigate when complete                              │
│  [4] VALIDATOR REPORT (Decision blocks + 14 sections)          │
│     ↓ Click section to expand                                  │
│  [5] SECTION DEEP-DIVE (Detailed evidence + citations)         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Flow Architecture

### Screen 1: Validate Idea (Entry Point)

**Route:** `/validator`  
**Purpose:** Hero + embedded chat component  
**Components:** ValidatorChat (embedded)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│          🎯 Validate My Idea                        │
│                                                     │
│  From idea to execution. Know if your startup       │
│  is worth building.                                 │
│                                                     │
│  ┌───────────────────────────────────────────┐      │
│  │                                           │      │
│  │    [ValidatorChat Component]              │      │
│  │    See Screen 2 for details               │      │
│  │                                           │      │
│  └───────────────────────────────────────────┘      │
│                                                     │
│  AI suggests. You decide. — No credit card.         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Data Flow:**
- If `?hasIdea=true` → pre-fill from sessionStorage
- Otherwise → start fresh

---

### Screen 2: Validator Chat (Conversation)

**Component:** `ValidatorChat.tsx` (reusable)  
**AI Agent:** `validator-followup` edge function  
**Model:** Gemini Flash (fast, cheap)

```
┌─────────────────────────────────────────────────────┐
│  🎯 Idea Validator      ● Ready to generate        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🤖 Tell me about your startup idea.                │
│     What problem are you solving and for whom?      │
│                                                     │
│      ┌──────────────────────────────────────┐       │
│      │ I'm building an AI task manager...   │       │
│      └──────────────────────────────────────┘       │
│                                                     │
│  🤖 Who specifically are you targeting?             │
│                                                     │
│      ┌──────────────────────────────────────┐       │
│      │ Early-stage startups, 5-20 people... │       │
│      └──────────────────────────────────────┘       │
│                                                     │
│  🤖 What alternatives have they tried?              │
│                                                     │
│  ┌────────────────────────────────────────────┐     │
│  │ Type your answer...        [ Generate ▶ ] │     │
│  └────────────────────────────────────────────┘     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Coverage Tracking (8 topics):**
- ✅ Customer segment
- ✅ Problem/pain
- ⬜ Competitors/alternatives
- ⬜ Innovation/differentiation
- ⬜ Demand signals
- ⬜ Research/data
- ⬜ Uniqueness
- ⬜ Websites to research

**Rules:**
- MIN 2 exchanges before Generate enabled
- MAX 7 exchanges (auto-ready)
- Generate button → calls `validator-start`

---

### Screen 3: Validator Progress (Pipeline Tracking)

**Route:** `/validator/run/:sessionId`  
**Polling:** `validator-status` every 2s  
**Duration:** 30-80 seconds total

```
┌─────────────────────────────────────────────────────┐
│  ← Back                                             │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Validating Your Startup Idea                    │
│     ████████████░░░░░░░░  57%    ● RUNNING         │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  │  ✅ Extract Profile    ExtractorAgent   3.2s  │  │
│  │     Structured data from description          │  │
│  │                                               │  │
│  │  ✅ Market Research    ResearchAgent   12.4s  │  │
│  │     TAM/SAM/SOM + citations          📎       │  │
│  │                                               │  │
│  │  ✅ Competitor Analysis CompetitorAgent 18.7s │  │
│  │     Direct & indirect competitors    📎       │  │
│  │                                               │  │
│  │  ⏳ Scoring            ScoringAgent     ...    │  │
│  │     7-dimension deep analysis                 │  │
│  │                                               │  │
│  │  ○  MVP Plan           MVPAgent         —     │  │
│  │     3-phase roadmap + next steps              │  │
│  │                                               │  │
│  │  ○  Compose Report     ComposerAgent    —     │  │
│  │     14-section validation report              │  │
│  │                                               │  │
│  │  ○  Verify             VerifierAgent    —     │  │
│  │     Check completeness + citations            │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│     Estimated: ~80 seconds total                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Status Icons:**
- ○ Queued (gray)
- ⏳ Running (blue, pulse)
- ✅ Complete (green)
- ⚠️ Partial (amber)
- ❌ Failed (red)

**Auto-navigation:** 2s after complete → `/validator/report/:reportId`

---

### Screen 4: Validator Report (Decision-First)

**Route:** `/validator/report/:reportId`  
**Layout:** 5 decision blocks → 14 expandable sections

```
┌─────────────────────────────────────────────────────┐
│  ← Back    TaskFlow           [Trace] [PDF]        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ╔═══════════════════════════════════════════════╗  │
│  ║  BLOCK 1: VERDICT                            ║  │
│  ║                                              ║  │
│  ║   ┌─────┐                                    ║  │
│  ║   │ 72  │  CAUTION                           ║  │
│  ║   │/100 │  Worth Pursuing  ✅ Verified        ║  │
│  ║   └─────┘                                    ║  │
│  ║                                              ║  │
│  ║  Strong problem-solution fit. Address pricing║  │
│  ║  validation before committing full resources.║  │
│  ║                                              ║  │
│  ╚═══════════════════════════════════════════════╝  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  BLOCK 2: TRADEOFFS                          │  │
│  │                                               │  │
│  │  ✅ Strengths        │  ⚠️ Concerns            │  │
│  │  ─────────────      │  ──────────             │  │
│  │  Clear pain point   │  Crowded market         │  │
│  │  Simple setup       │  No mobile yet          │  │
│  │  $12B market        │  Pricing unvalidated    │  │
│  │  Team has expertise │  8-month runway         │  │
│  │                     │                          │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  BLOCK 3: SCORES MATRIX (Radar Chart)        │  │
│  │                                               │  │
│  │       Problem 85   Business Model 75          │  │
│  │           \     /                             │  │
│  │  Timing 88──●──78 Solution                    │  │
│  │           /     \                             │  │
│  │     Team 80   Competition 70                  │  │
│  │                                               │  │
│  │              Market 82                        │  │
│  │                                               │  │
│  │  Overall: 72/100 (weighted)                   │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  BLOCK 4: NEXT STEPS (Top 7)                 │  │
│  │                                               │  │
│  │  1. Validate pricing with 10 beta signups    │  │
│  │  2. Build mobile prototype                   │  │
│  │  3. Competitor teardown (Linear, Monday)     │  │
│  │  4. Interview 5 more teams                   │  │
│  │  5. Landing page A/B test                    │  │
│  │  6. Map acquisition channels                 │  │
│  │  7. Draft investor pitch                     │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  BLOCK 5: EVIDENCE (14 Sections)             │  │
│  │                                               │  │
│  │  ┌─ Problem Clarity ─── 85/100 ─── [▶] ───┐  │  │
│  │  │  Clear pain. 15 interviews confirm...    │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  │                                               │  │
│  │  ┌─ Customer & Use Case ─ 82/100 ── [▶] ──┐  │  │
│  │  │  5-20 person teams, daily pain...        │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  │                                               │  │
│  │  ┌─ Market Sizing ────── $12B ───── [▶] ──┐  │  │
│  │  │  TAM $12B · SAM $2.4B · SOM $24M         │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  │                                               │  │
│  │  ... 11 more sections (see doc 03)           │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│    [ Export PDF ] [ Share Link ] [ New Validation ] │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Verdict Scale:**
- 75-100 → GO (Green, "Strong Yes")
- 50-74 → CAUTION (Amber, "Worth Pursuing")
- 0-49 → NO-GO (Red, "High Risk")

---

### Screen 5: Section Deep-Dive (Expanded)

Each section expands inline with full details.

**Example: Market Sizing Expanded**

```
┌─ Market Sizing ──────────── $12B TAM ──── [▼] ──┐
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   TAM    │  │   SAM    │  │   SOM    │       │
│  │  $12B    │  │  $2.4B   │  │  $24M    │       │
│  │  Total   │  │  SMB SaaS│  │  Year 1  │       │
│  └──────────┘  └──────────┘  └──────────┘       │
│                                                  │
│  Growth: 15% CAGR                                │
│  Method: Top-down from Gartner report            │
│                                                  │
│  Citations:                                      │
│  📎 Gartner Project Mgmt Market 2025             │
│  📎 Statista Remote Work Report                 │
│  📎 McKinsey Future of Work 2025                │
│                                                  │
│  Source: ResearchAgent (Search + URL Context)   │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## AI Agent Pipeline

### Sequential Execution (with parallel research)

```
START
  ↓
1. ExtractorAgent (3-5s)
   Input: Raw conversation text
   Output: Structured StartupProfile (9 fields)
   Model: Gemini Flash
   Tools: None
  ↓
2. PARALLEL EXECUTION ─────────────────┐
   │                                   │
   2a. ResearchAgent (8-12s)       2b. CompetitorAgent (8-12s)
       TAM/SAM/SOM + citations          Direct/indirect competitors
       Model: Gemini Flash              Model: Gemini Flash
       Tools: Search + URL Context      Tools: Search + URL Context
   │                                   │
   └───────────────┬───────────────────┘
  ↓
3. ScoringAgent (5-8s)
   7-dimension scoring + risks
   Model: Gemini Flash
   Thinking: HIGH
  ↓
4. MVPAgent (3-5s)
   3-phase plan + 7 next steps
   Model: Gemini Flash
  ↓
5. ComposerAgent (5-8s)
   Assemble 14-section report
   Model: Gemini Flash
   Thinking: MEDIUM
  ↓
6. VerifierAgent (<1s)
   Check completeness + citations
   Pure logic (no AI)
  ↓
COMPLETE (30-80s total)
```

**Critical Path:** 3 + max(12, 12) + 8 + 5 + 8 + 1 = 37s (optimistic)  
**Expected:** 50-80s with network latency

---

## Database Schema

### Tables

**1. validator_sessions**
```
id              uuid PRIMARY KEY
user_id         uuid (optional, for logged-in users)
input_text      text (raw conversation)
status          text (draft, running, complete, partial, failed)
progress        int (0-100)
created_at      timestamp
updated_at      timestamp
```

**2. validator_runs**
```
id              uuid PRIMARY KEY
session_id      uuid REFERENCES validator_sessions
agent_name      text (ExtractorAgent, ResearchAgent, etc.)
status          text (queued, running, ok, partial, failed)
output_json     jsonb (agent-specific output)
error_message   text (if failed)
duration_ms     int
has_citations   bool
created_at      timestamp
```

**3. validation_reports**
```
id              uuid PRIMARY KEY
session_id      uuid REFERENCES validator_sessions
score           int (0-100)
verdict         text (GO, CAUTION, NO-GO)
summary_verdict text (3-sentence summary)
highlights      jsonb (4 strengths)
red_flags       jsonb (4 concerns)
scores_matrix   jsonb (7 dimensions)
next_steps      jsonb (7 actions)
details         jsonb (14-section report)
verified        bool
verification_json jsonb (warnings, missing sections)
created_at      timestamp
```

---

## Edge Functions

### 1. validator-followup

**Purpose:** AI asks next question based on conversation  
**Model:** Gemini Flash  
**Timeout:** 10s

```
POST /functions/v1/validator-followup
Body: {
  messages: [{role: "user", content: "..."}, ...]
}

Response: {
  action: "ask" | "ready",
  question: "What alternatives have they tried?",
  coverage: {
    customer: true,
    problem: true,
    competitors: false,
    innovation: false,
    demand: false,
    research: false,
    uniqueness: false,
    websites: false
  },
  questionNumber: 3
}
```

**Fallback:** If fails, use 3 hardcoded questions:
1. "What problem are you solving and for whom?"
2. "How do they solve it today?"
3. "What makes your approach different?"

---

### 2. validator-start

**Purpose:** Create session + trigger pipeline  
**Timeout:** 150s  

```
POST /functions/v1/validator-start
Body: {
  input_text: "I'm building an AI task manager..."
}

Response: {
  session_id: "uuid",
  status: "running",
  message: "Validation pipeline started"
}
```

**What it does:**
1. Creates `validator_sessions` record (status: running)
2. Creates 7 `validator_runs` records (status: queued)
3. Executes agents sequentially (with parallel research)
4. Updates status after each agent
5. Creates `validation_reports` record when complete
6. Returns session_id immediately (async processing)

---

### 3. validator-status

**Purpose:** Poll pipeline progress  
**Timeout:** 5s

```
GET /functions/v1/validator-status?session_id=uuid

Response: {
  session_id: "uuid",
  status: "running",
  progress: 57,
  steps: [
    {agent: "ExtractorAgent", status: "ok", duration_ms: 3200, has_citations: false},
    {agent: "ResearchAgent", status: "ok", duration_ms: 12400, has_citations: true},
    {agent: "CompetitorAgent", status: "ok", duration_ms: 18700, has_citations: true},
    {agent: "ScoringAgent", status: "running", duration_ms: null, has_citations: false},
    {agent: "MVPAgent", status: "queued", duration_ms: null, has_citations: false},
    {agent: "ComposerAgent", status: "queued", duration_ms: null, has_citations: false},
    {agent: "VerifierAgent", status: "queued", duration_ms: null, has_citations: false}
  ],
  report: null
}
```

When complete:
```
{
  session_id: "uuid",
  status: "complete",
  progress: 100,
  steps: [...all with status "ok" or "partial"],
  report: {
    report_id: "uuid",
    score: 72,
    verdict: "CAUTION",
    verified: true
  }
}
```

---

## Success Metrics

### Performance
- **Pipeline execution:** <80s for 90% of runs
- **Followup response:** <3s per question
- **Status polling:** <500ms response time

### Quality
- **Verification pass rate:** >80% of reports fully verified
- **Citation coverage:** >90% of research includes sources
- **User satisfaction:** >70% find report actionable

### Engagement
- **Completion rate:** >60% who start chat finish validation
- **Section expansion:** >50% expand ≥3 sections
- **Return rate:** >30% validate 2nd idea within 7 days

---

## Mobile Adaptations

```
Desktop (1024px+)          Mobile (<768px)
─────────────────          ───────────────
Chat: 1100px centered      Chat: Full-width
Progress: Card layout      Progress: Stacked cards
Report: 2-column blocks    Report: 1-column stacked
Trace: Right drawer        Trace: Bottom sheet
Sections: Inline expand    Sections: Full-width expand
```

---

## Phase Breakdown

### Phase 1: Core Flow (MVP)
- ✅ ValidatorChat component
- ✅ validator-followup edge function
- ✅ validator-start edge function
- ✅ validator-status edge function
- ✅ ValidatorProgress page
- ✅ ValidatorReport page (blocks 1-5)
- ✅ 7 AI agents (sequential + parallel)
- ✅ 14-section report generation

### Phase 2: Enhancements
- ⬜ PDF export
- ⬜ Share link (public report)
- ⬜ Save report to account
- ⬜ Compare multiple validations
- ⬜ Regenerate individual sections

### Phase 3: Advanced
- ⬜ Team collaboration (comments)
- ⬜ Investor view mode
- ⬜ Integration with Lean Canvas
- ⬜ Historical trend analysis

---

## Next Documents

- **02:** Screen-by-screen specifications (detailed wireframes)
- **03:** 14-section report structure (content + AI prompts)
- **04:** AI agent specifications (prompts + schemas)
- **05:** Component patterns (reusable UI)
- **06:** Data flow & state management
- **07:** Error handling & edge cases
- **08:** Testing strategy

---

**Status:** Planning document complete  
**Next:** Create detailed screen specs (doc 02)
