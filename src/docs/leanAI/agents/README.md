# LeanAI AI Agents - Implementation Guide

**Version:** 1.0  
**Date:** February 6, 2026  
**Status:** Specification Complete, Implementation Pending  
**Purpose:** Complete technical specifications for all 12 AI agents

---

## 🤖 OVERVIEW

The LeanAI system relies on **12 specialized AI agents** to transform StartupAI from a planning tool into an intelligent operating system. Each agent analyzes specific aspects of a startup and provides actionable recommendations.

**Current Status:** 🔴 0/12 implemented (all mock data in current UI)

---

## 📊 AGENT ARCHITECTURE

```
┌─────────────────────────────────────────────────────────┐
│               AI ORCHESTRATOR                           │
│         (Coordinates all 12 agents)                     │
└─────────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
   ┌──────────┐    ┌──────────┐    ┌──────────┐
   │  PHASE 1 │    │  PHASE 2 │    │  PHASE 3 │
   │VALIDATION│    │ PLANNING │    │EXECUTION │
   └──────────┘    └──────────┘    └──────────┘
         │                │                │
         │                │                │
   ┌─────┴─────┐    ┌─────┴─────┐   ┌─────┴─────┐
   │           │    │           │   │           │
   ▼           ▼    ▼           ▼   ▼           ▼
Chat         Market  Canvas    Opp   Idea      Card
Analyst      Research Coach    Risk  Strategy  Generator
   │         Agent    Agent    Agent  Agent     Agent
Profile      │        │         │     │         │
Builder   Competitor  │         │   Journey    │
   │       Agent       │         │   Coach      │
   │         │         │         │   Agent      │
   │      Demand       │         │     │        │
   │      Validator    │         │     │        │
   │         │         │         │     │        │
   │      Problem      │         │  Experiment  │
   │      Validator    │         │  Designer    │
   │         │         │         │  Agent       │
   │      ICP          │         │              │
   │      Validator    │         │              │
   │         │         │         │              │
   └─────────┴─────────┴─────────┴──────────────┘
```

---

## 📋 AGENT INVENTORY

### Phase 1: Validation Agents (Screens 01-04)

| # | Agent | Purpose | Input | Output | Priority |
|---|-------|---------|-------|--------|----------|
| 01 | Chat Analyst | Extract structured data from conversation | Raw chat text | Startup profile JSON | P1 |
| 02 | Profile Builder | Build complete startup profile | Chat data + manual input | Profile object | P1 |
| 03 | Market Researcher | Analyze market size and trends | ICP, problem | Market report (TAM/SAM/SOM) | P1 |
| 04 | Competitor Agent | Identify and analyze competitors | Solution, ICP | Competitor matrix | P1 |
| 05 | Demand Validator | Validate market demand signals | Problem, ICP | Demand score + evidence | P1 |
| 06 | Problem Validator | Analyze problem-solution fit | Problem, solution | Fit score + recommendations | P1 |
| 07 | ICP Validator | Validate ideal customer profile | Customer segments | ICP score + refinements | P1 |
| 08 | Risk Analyzer | Identify and score risks | Full profile | Top 5 risks with mitigations | P1 |

### Phase 2: Planning Agents (Screens 05-06)

| # | Agent | Purpose | Input | Output | Priority |
|---|-------|---------|-------|--------|----------|
| 09 | Canvas Coach | Improve Lean Canvas quality | 11 canvas sections | Weak block detection + rewrites | P1 |
| 10 | Opportunity Analyst | Analyze adoption risks | Opportunity canvas | Risk matrix + scores | P1 |

### Phase 3: Execution Agents (Screens 07-10)

| # | Agent | Purpose | Input | Output | Priority |
|---|-------|---------|-------|--------|----------|
| 11 | Idea Strategist | Cluster and prioritize ideas | Feature list | Clustered ideas + best bets | P2 |
| 12 | Journey Coach | Map user journey with MVP cutline | Story map tasks | Optimized journey + cutline | P2 |
| 13 | Experiment Designer | Design testable experiments | Assumptions | Experiment cards + metrics | P1 |
| 14 | Card Generator | Generate validation tasks | Lean + Opportunity Canvas | 24 kanban cards | P1 |

**Total:** 14 agents (12 core + 2 auxiliary)

---

## 🎯 IMPLEMENTATION PRIORITY

### Priority 1: Validator Agents (6 weeks)

**Why First:** Core value proposition, highest user impact

1. Market Researcher Agent (Week 1-2)
2. Competitor Agent (Week 2-3)
3. Risk Analyzer Agent (Week 3-4)
4. Demand Validator Agent (Week 4)
5. Problem Validator Agent (Week 5)
6. ICP Validator Agent (Week 6)

### Priority 2: Canvas Agents (4 weeks)

**Why Second:** Improves existing working screens

7. Canvas Coach Agent (Week 7-8)
8. Opportunity Analyst Agent (Week 9-10)

### Priority 3: Planning Agents (4 weeks)

**Why Third:** Completes existing 90-Day Plan

9. Card Generator Agent (Week 11-12)
10. Experiment Designer Agent (Week 13-14)

### Priority 4: Expansion Agents (defer to v2.0)

**Why Last:** Requires screens that don't exist yet

11. Chat Analyst Agent (requires Screen 01)
12. Profile Builder Agent (requires Screen 02)
13. Idea Strategist Agent (requires Screen 07)
14. Journey Coach Agent (requires Screen 08)

---

## 📁 FILE STRUCTURE

```
/docs/leanAI/agents/
├── README.md                       ← This file (overview)
│
├── 01-chat-analyst.md              ← Individual agent specs
├── 02-profile-builder.md
├── 03-market-researcher.md
├── 04-competitor-agent.md
├── 05-demand-validator.md
├── 06-problem-validator.md
├── 07-icp-validator.md
├── 08-risk-analyzer.md
├── 09-canvas-coach.md
├── 10-opportunity-analyst.md
├── 11-idea-strategist.md
├── 12-journey-coach.md
├── 13-experiment-designer.md
├── 14-card-generator.md
│
├── implementation-guide.md         ← Step-by-step build guide
├── api-reference.md                ← API endpoints and schemas
├── testing-guide.md                ← Test cases for each agent
└── deployment-guide.md             ← Production deployment steps
```

---

## 🔧 TECHNICAL STACK

### Recommended Technologies

**LLM Provider:**
- Primary: OpenAI GPT-4o (reasoning + speed)
- Fallback: Anthropic Claude 3.5 Sonnet (better structured outputs)
- Cost optimization: GPT-4o-mini for simpler agents

**Web Scraping:**
- Playwright (JavaScript rendering)
- BeautifulSoup4 (static HTML parsing)
- ScrapingBee API (bypass anti-bot)

**Data Storage:**
- Supabase (if user wants persistence)
- localStorage (current, keep for caching)
- Redis (rate limiting, queue management)

**Backend:**
- Next.js API routes (already using Next.js)
- OR separate Node.js service (if agents need 30s+ processing)
- Vercel serverless functions (if deploy on Vercel)

**Queue System:**
- BullMQ (if async processing needed)
- Upstash Redis (serverless queue)

---

## 📊 EACH AGENT SPEC INCLUDES

Every agent specification file contains:

1. **Overview** — What it does, why it exists
2. **Input Schema** — JSON structure with required/optional fields
3. **Processing Logic** — Step-by-step algorithm
4. **LLM Prompts** — Exact prompts with examples
5. **Output Schema** — JSON structure returned
6. **API Endpoint** — REST endpoint definition
7. **Error Handling** — Edge cases and fallbacks
8. **Testing** — Unit test cases
9. **Cost Estimate** — Tokens/request, $ per 1K requests
10. **Implementation Notes** — Code snippets, gotchas

**Format:** Consistent, copy-paste ready for developers

---

## 💰 COST ESTIMATION

### Per-Agent Cost (GPT-4o at $5/$15 per 1M tokens)

| Agent | Input Tokens | Output Tokens | Cost/Request | Requests/Day | Daily Cost |
|-------|--------------|---------------|--------------|--------------|------------|
| Market Researcher | 2,000 | 1,500 | $0.033 | 50 | $1.65 |
| Competitor | 1,500 | 1,000 | $0.023 | 50 | $1.15 |
| Risk Analyzer | 2,500 | 800 | $0.025 | 100 | $2.50 |
| Canvas Coach | 3,000 | 500 | $0.023 | 200 | $4.60 |
| Card Generator | 4,000 | 2,000 | $0.050 | 100 | $5.00 |
| **TOTAL** | — | — | — | — | **$15-25/day** |

**Monthly Cost (100 active users):** ~$450-750

---

## 🚀 IMPLEMENTATION PHASES

### Week 1-2: Infrastructure

- [ ] Set up Next.js API routes (`/api/agents/...`)
- [ ] Create base Agent class (TypeScript)
- [ ] Set up OpenAI SDK integration
- [ ] Implement rate limiting
- [ ] Set up error logging (Sentry)

**Deliverable:** `/api/agents/test` endpoint working

---

### Week 3-4: First Agent (Market Researcher)

- [ ] Implement input validation
- [ ] Write LLM prompt
- [ ] Add web scraping (if needed)
- [ ] Create output parser
- [ ] Write unit tests
- [ ] Deploy to staging

**Deliverable:** Market Researcher agent working end-to-end

---

### Week 5-6: Validation Agents

- [ ] Competitor Agent
- [ ] Risk Analyzer Agent
- [ ] Demand Validator Agent (faster, simpler)
- [ ] Problem Validator Agent (faster, simpler)
- [ ] ICP Validator Agent (faster, simpler)

**Deliverable:** All 6 validator agents deployed

---

### Week 7-10: Canvas Agents

- [ ] Canvas Coach Agent
- [ ] Opportunity Analyst Agent
- [ ] Integrate with existing Lean Canvas UI
- [ ] Integrate with Opportunity Canvas UI

**Deliverable:** Real AI feedback in canvas screens

---

### Week 11-14: Planning Agents

- [ ] Card Generator Agent
- [ ] Experiment Designer Agent
- [ ] Integrate with 90-Day Plan
- [ ] End-to-end testing

**Deliverable:** Full AI-powered validation system

---

## 📝 AGENT SPECIFICATION TEMPLATE

Each agent spec follows this format:

```markdown
# Agent Name

## Overview
- Purpose: What it does
- Input: What it receives
- Output: What it returns
- Priority: P1/P2
- Estimated LOC: ~300-500
- Estimated Time: 2-4 days

## Input Schema
```typescript
interface AgentInput {
  // TypeScript definition
}
```

## Processing Steps
1. Step 1: Validate input
2. Step 2: Call LLM / scrape web
3. Step 3: Parse output
4. Step 4: Return structured JSON

## LLM Prompt
```
System: You are a [role]
User: [task with examples]
```

## Output Schema
```typescript
interface AgentOutput {
  // TypeScript definition
}
```

## API Endpoint
POST /api/agents/[name]
Request: AgentInput
Response: AgentOutput

## Error Handling
- Missing field X → Return error Y
- LLM timeout → Retry 3x, then fallback

## Testing
- Test case 1: Input A → Output B
- Test case 2: Edge case C

## Cost Estimate
- Tokens: X input + Y output
- Cost: $Z per request

## Implementation Notes
- Code snippet
- Gotcha #1
- Gotcha #2
```

---

## ✅ SUCCESS CRITERIA

### Agent is "Done" When:

- [ ] Input validation works (handles missing fields)
- [ ] LLM prompt produces consistent outputs
- [ ] Output parsing handles edge cases
- [ ] API endpoint returns in <10 seconds
- [ ] Unit tests pass (90%+ coverage)
- [ ] Cost is within budget ($0.01-0.05 per request)
- [ ] Error handling is graceful
- [ ] Logs are clear and debuggable
- [ ] Documentation is complete

---

## 🔍 QUALITY CHECKLIST

Before marking an agent as "production-ready":

### Functionality
- [ ] Produces correct outputs for 10 test cases
- [ ] Handles malformed input gracefully
- [ ] Returns error messages, not crashes

### Performance
- [ ] Response time <10s (p95)
- [ ] Cost <$0.05 per request
- [ ] Concurrent requests handled

### Reliability
- [ ] Retry logic for LLM failures
- [ ] Fallback for timeouts
- [ ] Rate limiting prevents overuse

### Observability
- [ ] Structured logging (JSON)
- [ ] Error tracking (Sentry)
- [ ] Metrics dashboard (tokens used, latency, errors)

### Security
- [ ] API key not exposed client-side
- [ ] Input sanitization prevents injection
- [ ] Rate limiting per user

---

## 📚 NEXT STEPS

### Immediate (This Week)
1. **Read individual agent specs** (`01-14.md`)
2. **Review implementation-guide.md** for step-by-step build
3. **Set up development environment** (OpenAI API key, Next.js routes)

### Week 1-2 (Infrastructure)
4. **Create base Agent class**
5. **Set up API routes**
6. **Test with mock agent**

### Week 3+ (Agent Development)
7. **Build agents in priority order**
8. **Test each agent thoroughly**
9. **Deploy to production incrementally**

---

## 📊 TRACKING PROGRESS

Use this checklist to track implementation:

```
VALIDATION AGENTS (P1):
  [ ] 03: Market Researcher Agent
  [ ] 04: Competitor Agent
  [ ] 08: Risk Analyzer Agent
  [ ] 05: Demand Validator Agent
  [ ] 06: Problem Validator Agent
  [ ] 07: ICP Validator Agent

CANVAS AGENTS (P1):
  [ ] 09: Canvas Coach Agent
  [ ] 10: Opportunity Analyst Agent

PLANNING AGENTS (P1):
  [ ] 14: Card Generator Agent
  [ ] 13: Experiment Designer Agent

EXPANSION AGENTS (P2):
  [ ] 01: Chat Analyst Agent
  [ ] 02: Profile Builder Agent
  [ ] 11: Idea Strategist Agent
  [ ] 12: Journey Coach Agent

Total: 0/14 complete (0%)
```

---

**README COMPLETE** ✅

**Next:** Read individual agent specs starting with `03-market-researcher.md` (highest priority)

---

**Last Updated:** February 6, 2026  
**Maintained By:** AI Implementation Team  
**Status:** Ready for development kickoff
