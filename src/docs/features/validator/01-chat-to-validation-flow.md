# Chat-to-Validation Flow — Wireframes & Plan

**Feature:** Conversational Validator Entry  
**Route:** Chat → `/startup-validator-v3`  
**Date:** February 4, 2026

---

## Overview

User describes their startup idea in a chat interface. AI asks 4-6 smart questions. After completion, an animated transition loads the full validation report at `/startup-validator-v3` with all fields pre-populated.

---

## User Flow

```
[Landing Page]
    ↓
[Chat Interface] — User describes idea
    ↓
[AI Questions] — 4-6 contextual questions
    ↓
[Processing Animation] — "Analyzing your idea..."
    ↓
[/startup-validator-v3] — Full report loaded
```

---

## Screen 1: Chat Entry

**Purpose:** Capture idea context conversationally

**Layout:**
```
┌─────────────────────────────────────────┐
│  [Logo]              [Go to Dashboard]  │
├─────────────────────────────────────────┤
│                                         │
│     From idea to execution.             │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ SYSTEM READY                      │  │
│  │                                   │  │
│  │ Describe your startup idea,      │  │
│  │ problem, or goal.                 │  │
│  │ I'll help turn it into a clear    │  │
│  │ plan.                             │  │
│  │                                   │  │
│  │ [Text input area]                 │  │
│  │ "I'm thinking about building..."  │  │
│  │                                   │  │
│  │ Press Enter to initiate protocol  │  │
│  │                        [Generate →]│  │
│  └───────────────────────────────────┘  │
│                                         │
│  AI suggests: You decide.               │
│  No credit card required.               │
└─────────────────────────────────────────┘
```

**Components:**
- Hero headline: "From idea to execution."
- Chat card with rounded border
- System status: "SYSTEM READY"
- Placeholder text guides user
- Generate button (disabled until input)

**Behavior:**
- User types description
- Press Enter or click Generate
- Fade to question mode

---

## Screen 2: AI Questions (Chat Mode)

**Purpose:** Gather validation inputs through conversation

**Layout:**
```
┌─────────────────────────────────────────┐
│  [Logo]              [Go to Dashboard]  │
├─────────────────────────────────────────┤
│                                         │
│  Step 2 of 6  ━━━━━━━━━━░░░░░░         │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 💬 User: "I'm building a SaaS..." │  │
│  │                                   │  │
│  │ 🤖 AI: "Got it. Who specifically  │  │
│  │     experiences this problem?"    │  │
│  │                                   │  │
│  │ [Input field...]                  │  │
│  │                        [Send →]   │  │
│  └───────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

**AI Question Sequence:**

1. **Problem Clarity**
   - "What specific problem are you solving?"
   - "Who experiences this problem most acutely?"

2. **Solution Approach**
   - "How does your solution work in one sentence?"
   - "What makes it different from existing options?"

3. **Market Context**
   - "Who is your ideal first customer?"
   - "What market or industry are you targeting?"

4. **Business Goal**
   - "What's your goal for the next 90 days?"
   - "What would success look like in 6 months?"

**Behavior:**
- Progress bar shows Step X of 6
- AI responds after each answer
- Conversational tone, not form-like
- User can skip questions (optional)
- Final question triggers validation

---

## Screen 3: Processing Animation

**Purpose:** Build anticipation while AI generates report

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│            🧠 Analyzing...              │
│                                         │
│     Validating your idea against        │
│     12,000+ startup patterns            │
│                                         │
│          [Loading spinner]              │
│                                         │
│     • Market sizing...          ✓       │
│     • Competitive analysis...   ⏳      │
│     • Risk assessment...                │
│                                         │
└─────────────────────────────────────────┘
```

**Animation Steps:**
1. Fade out chat interface
2. Show analysis status (1-2 seconds)
3. Fade to validator page

**Messages (rotate):**
- "Analyzing market size..."
- "Assessing competitive landscape..."
- "Evaluating business model..."
- "Calculating validation score..."

**Duration:** 2-3 seconds (perceived work)

---

## Screen 4: Validation Report (/startup-validator-v3)

**Purpose:** Display comprehensive validation with pre-filled data

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  [Logo] [Home] [Canvas] [Validator*] [Coach]           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🏆 Validation Score: 72/100                           │
│  ━━━━━━━━━━━━━━━━━━━━━━░░░░░░░                        │
│  Top 15% of validated ideas                            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ EXECUTIVE SUMMARY                               │   │
│  │                                                 │   │
│  │ [AI-generated summary based on chat...]         │   │
│  │                                                 │   │
│  │ ✅ Verdict: CAUTION - Address key risks        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ KEY RECOMMENDATIONS                             │   │
│  │                                                 │   │
│  │ 1. [HIGH] Validate pricing with 10 customers   │   │
│  │ 2. [MED]  Build MVP feature set                │   │
│  │ 3. [MED]  Research top 3 competitors           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Signal Board] [Scorecard] [Market Size] ...          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Pre-filled Sections:**
1. Executive Summary
2. Validation Score (0-100)
3. Key Recommendations
4. Signal Board (strengths/risks)
5. Market Overview (TAM/SAM/SOM)
6. Competitive Landscape
7. Target Customer Personas
8. Risk Assessment
9. All 14 validation sections

**Behavior:**
- Page loads with smooth fade-in
- All sections expanded by default
- User can edit any field
- "Create Tasks" button enabled
- Export/share options available

---

## Data Mapping (Chat → Validator)

| Chat Input | Validator Field | Section |
|------------|-----------------|---------|
| Problem description | Problem Analysis | Section 2 |
| Target customer | Target Customer | Section 8 |
| Solution approach | Solution Assessment | Section 3 |
| Market/industry | Market Size | Section 4 |
| Differentiation | Competition | Section 5 |
| 90-day goal | Recommendations | Section 13 |

**AI Agents Used:**
- Idea Intake Agent (chat)
- Validation Scoring Agent (score calculation)
- Market Research Agent (TAM/SAM/SOM)
- Strategy Agent (recommendations)
- Risk Analysis Agent (red flags)
- Evaluation Agent (scorecard)

---

## Visual Design

**Chat Interface:**
- Cream background (#FAF9F7)
- Chat card: white with subtle border
- AI messages: light green tint (#DCF9E3)
- User messages: white
- Progress bar: emerald (#0d5f4e)

**Animation:**
- Chat fade out: 300ms ease
- Processing spinner: 2s
- Report fade in: 500ms ease
- Smooth, calm, professional

**Typography:**
- Headlines: Serif (elegant)
- Body: Sans-serif (modern)
- Monospace for data points

---

## Navigation States

**During Chat:**
- Header shows: Logo + "Go to Dashboard"
- No validator navigation visible

**After Validation:**
- Full header: Home | Canvas | Validator | Coach
- Validator tab highlighted
- User can navigate away and return

---

## Error Handling

**Insufficient Input:**
```
⚠️ I need a bit more detail to validate your idea.
Could you describe the problem you're solving?
```

**Network Error:**
```
❌ Couldn't complete validation. 
[Retry] or [Save Progress]
```

**Validation Timeout:**
```
⏱️ This is taking longer than expected.
We'll email your report when ready.
```

---

## Mobile Considerations

**Chat (Mobile):**
- Single column
- Fixed input at bottom
- Progress bar at top
- Scrollable conversation

**Report (Mobile):**
- Collapsed sections by default
- Sticky score header
- Swipeable sections
- Bottom CTA bar

---

## Success Metrics

**Completion Rate:**
- % users who finish all 6 questions

**Time to Report:**
- Average: 90-120 seconds

**Engagement:**
- % users who edit fields after generation
- % users who create tasks

**Quality:**
- Validation score distribution
- User satisfaction (post-report survey)

---

## Implementation Notes

**State Management:**
- Chat history stored in session
- Validator data persists to database
- User can resume if interrupted

**AI Prompts:**
- See flowchart for 36 AI prompts
- Each section has dedicated prompt template
- Weighted scoring algorithm applied

**Database:**
- `validation_reports` table
- `validation_sections` for 14 sections
- Links to `lean_canvas` if exists

---

## Future Enhancements

- Voice input for chat
- Multi-language support
- Industry-specific question sets
- Comparison to similar validated ideas
- Investor-ready PDF export

---

**Status:** Design complete, ready for implementation  
**Next:** Build chat interface + validator integration
