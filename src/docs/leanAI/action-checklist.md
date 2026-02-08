# LeanAI System - Action Checklist

**Date:** February 6, 2026  
**Purpose:** Prioritized task list to fix discrepancies and complete system  
**Method:** Fix accuracy → Complete docs → Build missing → Implement AI

---

## CRITICAL FIXES (Do First) 🔴

### [ ] Task 1: Fix Documentation Status Claims (1 hour)

**File:** `/docs/leanAI/01-chat-intake.md`
```diff
- > **Status:** BUILT | **Route:** `/validate` | **File:** `ValidateIdea.tsx`
+ > **Status:** NOT BUILT 🔴 | **Route:** TBD | **File:** TBD
+ > **Note:** Spec complete, implementation pending
```

**File:** `/docs/leanAI/02-startup-profile.md`
```diff
- > **Status:** BUILT | **Route:** `/profile` | **File:** `StartupProfile.tsx`
+ > **Status:** NOT BUILT 🔴 | **Route:** TBD | **File:** TBD
+ > **Note:** Spec complete, implementation pending
```

**File:** `/docs/leanAI/03-validator-report.md`
```diff
- > **Status:** BUILT | **Route:** `/validator-report` | **File:** `ValidatorReport.tsx`
+ > **Status:** BUILT ⚠️ | **Route:** `/startup-validator-v4` | **File:** `page.tsx`
+ > **Note:** UI complete, AI agents are mock data only
```

---

### [ ] Task 2: Create Missing Screen Specs (2 hours)

**Create:** `/docs/leanAI/05-lean-canvas.md`
- Migrate content from `/docs/lean/01-lean-canvas-spec.md`
- Add standard leanAI format (question, ASCII, example, agent, prompt)
- Mark as BUILT ✅

**Create:** `/docs/leanAI/06-opportunity-canvas.md`
- Migrate content from `/docs/lean/02-opportunity-canvas-spec.md`
- Add standard leanAI format
- Mark as BUILT ✅

**Create:** `/docs/leanAI/10-90-day-plan.md`
- Migrate content from `/docs/lean/03-90-day-plan-spec.md`
- Add standard leanAI format
- Mark as BUILT ✅

---

### [ ] Task 3: Update Progress Trackers (30 min)

**Update:** `/docs/lean/progress-tracker.md`
- Add note referencing new `/docs/leanAI/progress-tracker.md`
- Add link to comparison summary

**Update:** `/docs/leanAI/progress-tracker.md`
- Already complete ✅
- No changes needed

---

## DOCUMENTATION COMPLETION (Do Second) ⚠️

### [ ] Task 4: Create README for leanAI folder (30 min)

**Create:** `/docs/leanAI/README.md`

**Content:**
```markdown
# LeanAI System Documentation

## Overview
Complete 10-screen specification for StartupAI's AI-powered validation and planning system.

## Screen Sequence

### Phase 1: Validation (Screens 01-04)
- 01: Chat Intake (NOT BUILT)
- 02: Startup Profile (NOT BUILT)
- 03: Validator Report (BUILT - mock AI)
- 04: Market Research Hub (NOT BUILT)

### Phase 2: Planning (Screens 05-06)
- 05: Lean Canvas (BUILT ✅)
- 06: Opportunity Canvas (BUILT ✅)

### Phase 3: Ideation (Screens 07-08)
- 07: Idea Wall (NOT BUILT)
- 08: Story Map (NOT BUILT)

### Phase 4: Execution (Screens 09-10)
- 09: Experiments Lab (NOT BUILT)
- 10: 90-Day Plan (BUILT ✅)

## Current Status
- Built: 4/10 screens (40%)
- Production Ready: 3/10 screens (30%)
- AI Agents: 0/12 implemented

## Documents
- `progress-tracker.md` - Full verification report
- `comparison-summary.md` - Docs vs code comparison
- `action-checklist.md` - This file
```

---

### [ ] Task 5: Add Agent Implementation Specs (3 hours)

**Create:** `/docs/leanAI/agents/README.md`

**Document each agent:**
- Input requirements
- Processing logic
- Output format
- API endpoints needed
- Example implementations

**Priority Agents:**
1. Market Researcher Agent
2. Competitor Agent
3. Risk Analyzer Agent
4. Canvas Coach Agent
5. Card Generator Agent

---

## IMPLEMENTATION DECISIONS (Choose Path)

### Option A: Build All Missing Screens (16 days)

**[ ] Task 6A: Implement Chat Intake (3 days)**
- File: `/app/chat-intake/page.tsx`
- Route: `/chat-intake`
- Features:
  - [ ] Conversational UI
  - [ ] Real-time AI extraction
  - [ ] Context panel (auto-fill)
  - [ ] Confidence scores
  - [ ] "Skip to form" option
- LOC: ~800
- Dependencies: Chat Analyst Agent

**[ ] Task 7A: Implement Startup Profile (2 days)**
- File: `/app/startup-profile/page.tsx`
- Route: `/startup-profile`
- Features:
  - [ ] Editable profile cards
  - [ ] Data import from chat
  - [ ] Validation indicators
  - [ ] Save/export
- LOC: ~600
- Dependencies: Profile Builder Agent

**[ ] Task 8A: Implement Market Research Hub (3 days)**
- File: `/app/market-research/page.tsx`
- Route: `/market-research`
- Features:
  - [ ] Source library
  - [ ] Credibility scoring
  - [ ] Contradiction detection
  - [ ] Positioning map visualization
  - [ ] Evidence gap tracking
- LOC: ~700
- Dependencies: Research Intelligence Agent

**[ ] Task 9A: Implement Experiments Lab (3 days)**
- File: `/app/experiments-lab/page.tsx`
- Route: `/experiments-lab`
- Features:
  - [ ] Experiment cards
  - [ ] Assumption tracking
  - [ ] Evidence collection
  - [ ] Progress monitoring
  - [ ] Success/fail logic
- LOC: ~700
- Dependencies: Experiment Designer Agent

**[ ] Task 10A: Implement Idea Wall (2 days)**
- File: `/app/idea-wall/page.tsx`
- Route: `/idea-wall`
- Features:
  - [ ] Sticky note grid
  - [ ] AI clustering
  - [ ] Impact/novelty scoring
  - [ ] Best bet recommendation
  - [ ] Drag-to-recluster
- LOC: ~500
- Dependencies: Idea Strategist Agent

**[ ] Task 11A: Implement Story Map (3 days)**
- File: `/app/story-map/page.tsx`
- Route: `/story-map`
- Features:
  - [ ] Horizontal swimlanes
  - [ ] Activity columns
  - [ ] Task cards
  - [ ] MVP cutline
  - [ ] Value moment marker
  - [ ] Drag-and-drop
- LOC: ~600
- Dependencies: Journey Coach Agent

**Total Effort:** 16 days + 14 weeks for AI agents

---

### Option B: Mark as v2.0 and Focus on AI (14 weeks)

**[ ] Task 6B: Update All NEW Screens to v2.0 (30 min)**

Add to each screen spec:
```markdown
> **Status:** PLANNED for v2.0 🔵
> **Current:** Spec complete, deferred until v1.0 AI agents implemented
```

**[ ] Task 7B: Implement AI Agents for Existing Screens (14 weeks)**

**Week 1-6: Validator Agents**
- [ ] Market Researcher Agent (web scraping + GPT-4)
- [ ] Competitor Agent (product analysis)
- [ ] Risk Analyzer Agent (scoring engine)
- [ ] Demand Validator Agent (signal detection)
- [ ] Problem Validator Agent (interview analysis)
- [ ] ICP Validator Agent (persona matching)

**Week 7-10: Canvas Agents**
- [ ] Canvas Coach Agent (weak block detection)
- [ ] Opportunity Analyst Agent (adoption risk)
- [ ] UVP Rewriter Agent (alternative generation)

**Week 11-14: Planning Agents**
- [ ] Card Generator Agent (smart task creation)
- [ ] Sprint Optimizer Agent (workload balancing)
- [ ] AI Coach Agent (daily tips)

**[ ] Task 8B: Connect Agents to Existing Screens**
- [ ] Replace mock data in Validator V4
- [ ] Enable real-time canvas analysis
- [ ] Generate dynamic kanban cards

---

## RECOMMENDED PATH ✅

**Phase 1: Fix Accuracy (Week 1)**
- ✅ Tasks 1-3: Fix documentation (2.5 hours)
- ✅ Task 4: Create README (30 min)

**Phase 2: Complete Specs (Week 2)**
- Tasks 5: Agent specs (3 hours)
- Tasks 6B: Mark v2.0 screens (30 min)

**Phase 3: Implement AI (Weeks 3-16)**
- Task 7B: Build all 12 AI agents (14 weeks)
- Task 8B: Connect to screens

**Rationale:**
- Core 4-screen system already works
- AI agents are the core value proposition
- Building 6 more screens without AI = more mock data
- Better to have 4 screens with real AI than 10 screens with fake AI

---

## VERIFICATION CHECKLIST

After completing fixes, verify:

**[ ] Documentation Accuracy**
- [ ] All status claims match reality
- [ ] All routes are correct
- [ ] All file references are accurate
- [ ] AI agent status clearly marked (mock vs real)

**[ ] Documentation Completeness**
- [ ] All 10 screens have specs in /docs/leanAI/
- [ ] README exists and is accurate
- [ ] Progress tracker is up to date
- [ ] Comparison summary reflects current state

**[ ] Code Quality**
- [ ] All built screens are production ready
- [ ] TypeScript compliance
- [ ] Error handling present
- [ ] Mobile responsive
- [ ] localStorage working

**[ ] AI Implementation**
- [ ] Agents have specs
- [ ] API endpoints defined
- [ ] Mock data clearly marked
- [ ] Implementation roadmap exists

---

## SUCCESS METRICS

**Documentation Accuracy:**
- Current: 57%
- Target: 100%
- Method: Claims match filesystem

**Implementation Complete:**
- Current: 40% (4/10 screens)
- Target Option A: 100% (all screens)
- Target Option B: 40% screens + 100% AI

**Production Readiness:**
- Current: 4-screen MVP ready
- Target: 10-screen system ready OR 4-screen AI-powered system

---

**Priority Order:**
1. 🔴 Fix documentation accuracy (Tasks 1-3)
2. ⚠️ Complete documentation (Tasks 4-5)
3. 🔵 Choose implementation path (Option A or B)
4. 🟢 Execute chosen path
5. ✅ Verify and test

**Estimated Timeline:**
- Week 1: Documentation fixes complete
- Week 2: Implementation decision made
- Week 3-18: Build phase (depending on option chosen)

---

**END OF CHECKLIST**

**Last Updated:** February 6, 2026  
**Status:** Ready for execution
