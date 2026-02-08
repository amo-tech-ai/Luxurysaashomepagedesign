# Screen 01: Chat Intake

> **Question this screen answers:** "What are you building and why?"
> **Status:** BUILT ✅ | **Route:** `/chat-intake` | **File:** `page.tsx`  
> **Implementation:** `/app/chat-intake/page.tsx` (~450 LOC)  
> **Note:** Production-ready. AI extraction uses keyword matching (LLM integration pending).

---

## What This Screen Does (Plain English)

This is the front door of StartupAI. A founder arrives, types their startup idea in plain English, and the AI extracts structured data through a guided conversation. Think of it like talking to a smart friend who asks the right follow-up questions.

The founder doesn't fill out a boring form. They just talk. The AI listens, asks clarifying questions, and builds a structured startup profile behind the scenes.

---

## ASCII Wireframe (with sample data)

```
+---------------------------+------------------------------------+---------------------------+
|  CONTEXT PANEL            |  CHAT INTAKE                       |  AI EXTRACTION            |
|  (auto-fills as you chat) |                                    |  (live, updates as you    |
|                           |                                    |   type)                   |
|  Detected so far:         |  "Tell me about your startup       |                           |
|                           |   idea. What problem are you       |  EXTRACTION STATUS        |
|  Industry:                |   solving?"                        |  =====================    |
|    [SaaS] (87% conf)      |                                    |  Problem:     [||||||||.] |
|                           |  YOU: "I'm building an AI tool     |  ICP:         [|||||||..] |
|  ICP:                     |  that helps solo SaaS founders     |  Solution:    [||||||...] |
|    [Solo founders]        |  figure out what to work on each   |  Market:      [||||.....] |
|    (92% conf)             |  day. Right now they waste 10+     |  Competition: [||.......] |
|                           |  hours a week deciding what to     |                           |
|  Problem:                 |  do next instead of building."     |  Confidence: 68%          |
|    [Planning paralysis]   |                                    |  (need: competition,      |
|    (85% conf)             |  AI: "That's a real problem.       |   pricing model)          |
|                           |  A few follow-ups:"                |                           |
|  Solution:                |                                    |  -------------------------+
|    [AI 90-day planner]    |  1. "How do these founders         |  SUGGESTED QUESTIONS      |
|    (78% conf)             |     currently plan their weeks?"   |                           |
|                           |                                    |  "What's your pricing     |
|  Stage:                   |  2. "Have you talked to any        |   model?"                 |
|    [Idea stage]           |     founders about this?"          |                           |
|                           |                                    |  "Who are the main        |
|  Missing:                 |  3. "What would the output look    |   competitors?"           |
|    - Competition          |     like? A daily to-do list?      |                           |
|    - Pricing              |     A Kanban board? A calendar?"   |  "What makes this         |
|    - Team                 |                                    |   different from Notion   |
|                           |  [Type your response...]           |   or Trello?"             |
|                           |                                    |                           |
|                           |  [Skip chat, use form instead ->]  |  [Validate Now ->]        |
+---------------------------+------------------------------------+---------------------------+
```

---

## UI Microcopy (exact on-screen text)

| Element | Text |
|---------|------|
| Page title | "Validate Your Startup Idea" |
| Chat greeting | "Tell me about your startup idea. What problem are you solving?" |
| Chat placeholder | "Type your response..." |
| Skip link | "Skip chat, use form instead" |
| Validate button | "Validate Now" (disabled until confidence >= 60%) |
| Confidence label | "Confidence: 68% (need: competition, pricing model)" |
| Missing fields hint | "The more context you share, the better your validation report." |

---

## AI Agent Prompt (Intake Agent)

```
You are a Startup Intake Analyst.

Your job is to extract structured startup information from a natural conversation.
Ask 3-5 follow-up questions to fill gaps. Be friendly, concise, practical.

Extract these fields:
- Problem: What specific pain does the user solve?
- ICP: Who experiences this pain? (role, company size, industry)
- Solution: What does the product do?
- Market: How big is the opportunity? (TAM if mentioned)
- Competition: Who else solves this? How?
- Stage: Idea / Pre-revenue / Revenue / Growth
- Pricing: What model? What price point?
- Team: Solo founder? Co-founders? Employees?

For each field, output a confidence score (0-100).
If confidence is below 60% for any field, generate a follow-up question.

Tone: Conversational, encouraging, like a smart co-founder.
Do NOT lecture. Do NOT give advice yet. Just listen and extract.
```

---

## Sample Data (TaskFlow AI — Complete)

**Chat transcript:**

> **AI:** Tell me about your startup idea. What problem are you solving?
>
> **Founder:** I'm building an AI tool that helps solo SaaS founders figure out what to work on each day. Right now they waste 10+ hours a week deciding what to do next instead of building.
>
> **AI:** That's a real problem. A few follow-ups:
> 1. How do these founders currently plan their weeks?
> 2. Have you talked to any founders about this?
> 3. What would the output look like? A daily to-do list? A Kanban board?
>
> **Founder:** They use Notion docs and spreadsheets mostly. I've talked to 15 founders and 12 said they'd pay for this. The output would be a prioritized 90-day plan broken into 2-week sprints, with daily tasks.
>
> **AI:** Got it — that's strong signal from 15 interviews. Two more questions:
> 1. Who are the closest competitors you've seen?
> 2. What would you charge?
>
> **Founder:** Closest would be Notion AI and Motion app. I'd charge $29/month for solo founders, $79/month for teams.

**Extracted profile:**

| Field | Value | Confidence |
|-------|-------|:----------:|
| Problem | Solo founders waste 10+ hrs/week on planning instead of building | 92% |
| ICP | Solo SaaS founders, pre-revenue, bootstrapped | 88% |
| Solution | AI-generated 90-day plan with 2-week sprints and daily tasks | 85% |
| Market | 4.7M solo founders in US (SBA data) | 72% |
| Competition | Notion AI (broad), Motion (scheduling), no direct competitor for founder planning | 75% |
| Stage | Idea stage, 15 founder interviews completed | 90% |
| Pricing | $29/mo Starter, $79/mo Pro | 82% |
| Team | Solo technical founder | 95% |

---

## Figma-Ready Prompt

```
Design a startup idea intake screen for an AI validation platform.

Layout: 3-panel
- Left panel (240px, collapsible): "Context" — shows auto-extracted fields
  updating live as the founder chats. Each field has a confidence badge
  (green 80%+, amber 60-79%, red <60%). Missing fields listed at bottom.
- Center panel (main): Chat interface — AI greeting at top, message bubbles,
  text input at bottom with send button. "Skip to form" link below input.
- Right panel (280px, collapsible): "AI Extraction" — progress bars per field,
  overall confidence percentage, suggested follow-up questions as clickable chips.

Style: Calm, modern SaaS. Light background. Chat bubbles with subtle shadows.
AI messages in neutral gray, user messages in brand blue. Confidence badges
use semantic colors (green/amber/red). "Validate Now" button prominent at
bottom-right, disabled state until confidence threshold met.

Typography: Inter or system font. 14px body, 12px labels, 18px headings.
```

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Output -> | Screen 02: Startup Profile | Extracted fields auto-populate the profile |
| Output -> | Screen 03: Validator Report | Full extraction feeds the 7-agent pipeline |