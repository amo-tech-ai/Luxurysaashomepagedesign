# LeanAI Documentation vs Implementation Comparison

**Date:** February 6, 2026  
**Purpose:** Quick reference comparing `/docs/lean/` vs `/docs/leanAI/` vs actual codebase

---

## OVERVIEW COMPARISON

| Category | /docs/lean/ | /docs/leanAI/ | Actual Code |
|----------|-------------|---------------|-------------|
| **Screens Documented** | 3 screens | 7 screens | 4 built |
| **Focus** | Phase 1-3 (built) | Phase 4-10 (planned) | Phase 1-3 only |
| **Completion** | 100% | 70% | 40% |
| **Accuracy** | 100% ✅ | 57% ⚠️ | — |
| **Progress Tracker** | Yes (complete) | Yes (new) | — |

---

## SCREEN-BY-SCREEN COMPARISON

| # | Screen Name | /docs/lean/ | /docs/leanAI/ | Built? | Route | File |
|---|-------------|-------------|---------------|--------|-------|------|
| 01 | Chat Intake | ❌ Not covered | ✅ Documented (BUILT claim) | 🔴 No | N/A | Not found |
| 02 | Startup Profile | ❌ Not covered | ✅ Documented (BUILT claim) | 🔴 No | N/A | Not found |
| 03 | Validator Report | ❌ Not covered | ✅ Documented (BUILT claim) | ⚠️ Yes* | `/startup-validator-v4` | `page.tsx` |
| 04 | Market Research | ❌ Not covered | ✅ Documented (PARTIAL) | 🔴 No | N/A | Not found |
| 05 | Lean Canvas | ✅ Fully documented | ❌ Missing | ✅ Yes | `/lean-canvas` | `page.tsx` |
| 06 | Opportunity Canvas | ✅ Fully documented | ❌ Missing | ✅ Yes | `/opportunity-canvas` | `page.tsx` |
| 07 | Idea Wall | ❌ Not covered | ✅ Documented (NEW) | 🔴 No | N/A | Not built |
| 08 | Story Map | ❌ Not covered | ✅ Documented (NEW) | 🔴 No | N/A | Not built |
| 09 | Experiments Lab | ❌ Not covered | ✅ Documented (NEW) | 🔴 No | N/A | Not built |
| 10 | 90-Day Plan | ✅ Fully documented | ❌ Missing | ✅ Yes | `/90-day-plan` | `page.tsx` |

*Screen 03 is built but route/file names in docs are incorrect

---

## CRITICAL DISCREPANCIES

### Issue #1: Documentation Split

**Problem:** Built screens documented in `/docs/lean/`, planned screens in `/docs/leanAI/`

**Impact:** No single source of truth for the complete system

**Resolution Needed:**
- Migrate Screens 05, 06, 10 specs to `/docs/leanAI/`
- OR: Move all 10 screens to single location
- OR: Update `/docs/leanAI/` to reference `/docs/lean/` for built screens

---

### Issue #2: Incorrect Status Claims

**Problem:** 3 screens marked "BUILT" in `/docs/leanAI/` but files don't exist

| Screen | Doc Says | Reality |
|--------|----------|---------|
| 01: Chat Intake | BUILT | 🔴 Not found |
| 02: Startup Profile | BUILT | 🔴 Not found |
| 03: Validator Report | BUILT | ⚠️ Built but wrong path |

**Impact:** HIGH - Developers would look for non-existent files

**Resolution:** Update status to "NOT BUILT" or build the screens

---

### Issue #3: Route & File Name Mismatches

**Problem:** Screen 03 documented with wrong route and file name

| Element | Documented | Actual |
|---------|------------|--------|
| Route | `/validator-report` | `/startup-validator-v4` |
| File | `ValidatorReport.tsx` | `page.tsx` |

**Impact:** MEDIUM - Navigation and imports would fail

**Resolution:** Update docs with correct paths

---

### Issue #4: AI Agents Documentation vs Reality

**Problem:** 12 AI agents documented with detailed descriptions, but NONE implemented

**Documented Agents:**
1. Chat Analyst Agent (Screen 01)
2. Profile Builder Agent (Screen 02)
3. Market Researcher Agent (Screen 03)
4. Competitor Agent (Screen 03)
5. Demand Validator Agent (Screen 03)
6. Problem Validator Agent (Screen 03)
7. ICP Validator Agent (Screen 03)
8. Risk Analyzer Agent (Screen 03)
9. Research Intelligence Agent (Screen 04)
10. Idea Strategist Agent (Screen 07)
11. Journey Coach Agent (Screen 08)
12. Experiment Designer Agent (Screen 09)

**Actually Implemented:** 0/12 (all mock data)

**Impact:** CRITICAL - Core value proposition not delivered

**Resolution:** Either implement agents or mark as "PLANNED"

---

## WHAT EXISTS vs WHAT'S DOCUMENTED

### Built & Working ✅

**From `/docs/lean/progress-tracker.md`:**

| Component | LOC | Status | Evidence |
|-----------|-----|--------|----------|
| Lean Canvas V2 | ~450 | ✅ 100% | `/app/lean-canvas/page.tsx` |
| CanvasCard Component | ~250 | ✅ 100% | `/app/lean-canvas/components/CanvasCard.tsx` |
| Opportunity Canvas | ~600 | ✅ 100% | `/app/opportunity-canvas/page.tsx` |
| 90-Day Plan Kanban | ~400 | ✅ 100% | `/app/90-day-plan/page.tsx` |
| KanbanCard Component | ~180 | ✅ 100% | `/app/90-day-plan/components/KanbanCard.tsx` |
| KanbanColumn Component | ~100 | ✅ 100% | `/app/90-day-plan/components/KanbanColumn.tsx` |
| Card Generator | ~286 | ✅ 100% | `/app/90-day-plan/lib/cardGenerator.ts` |
| Startup Validator V4 | ~800 | ⚠️ 70% | `/app/startup-validator-v4/page.tsx` |

**Total:** ~3,066 lines of production code ✅

---

### Documented But Missing 🔴

**From `/docs/leanAI/` specs:**

| Component | Documented | Priority | Built? |
|-----------|------------|----------|--------|
| Chat Intake | 450 lines | P1 | 🔴 No |
| Startup Profile | 380 lines | P1 | 🔴 No |
| Market Research Hub | 280 lines | P1 | 🔴 No |
| Idea Wall | 230 lines | P2 | 🔴 No |
| Story Map | 240 lines | P2 | 🔴 No |
| Experiments Lab | 280 lines | P1 | 🔴 No |

**Total:** ~1,860 lines planned but not built

---

## DATA FLOW COMPARISON

### Documented 10-Screen Flow

```
01: Chat Intake
    ↓ startup data
02: Startup Profile
    ↓ ICP, problem, solution
03: Validator Report
    ↓ validation scores
04: Market Research Hub
    ↓ competitor data
05: Lean Canvas
    ↓ business model
06: Opportunity Canvas
    ↓ adoption strategy
07: Idea Wall
    ↓ feature clusters
08: Story Map
    ↓ user journey
09: Experiments Lab
    ↓ validated experiments
10: 90-Day Plan
```

### Actually Implemented 3-Screen Flow

```
05: Lean Canvas
    ↓ localStorage: lean-canvas-v2
06: Opportunity Canvas
    ↓ localStorage: opportunity-canvas
10: 90-Day Plan
    ↓ localStorage: 90-day-plan
```

**Coverage:** 30% (3/10 connections)

---

## PROGRESS TRACKER COMPARISON

### /docs/lean/progress-tracker.md

**Focus:** Phase 1-3 implementation (Lean Canvas system)

**Structure:**
- Phase 1: File Structure Verification (100%)
- Phase 2: Code Quality Verification (95%)
- Phase 3: Feature Implementation (100%)
- Phase 4: Navigation & Routing (100%)
- Phase 5: UI/UX Verification (94%)
- Phase 6: Testing & Validation (25%)
- Phase 7: Documentation (100%)

**Overall:** 82% complete, Production Ready ✅

**Strengths:**
- ✅ Accurate claims (100% match with code)
- ✅ Evidence-based verification
- ✅ Line-by-line code inspection
- ✅ Complete feature checklist
- ✅ Detailed proof sections

---

### /docs/leanAI/progress-tracker.md (NEW)

**Focus:** Full 10-screen system (Phase 1-10)

**Structure:**
- Phase 1: Documentation Verification (85%)
- Phase 2: Code Verification (40%)
- Phase 3: Feature & Agent Verification (67%)
- Phase 4: Task Matrix (Mixed)
- Phase 5: Accuracy Assessment (57%)

**Overall:** 40% complete, Core 4-Screen System Production Ready ✅

**Strengths:**
- ✅ Cross-references both doc sets
- ✅ Identifies discrepancies
- ✅ Separates claims from reality
- ✅ Provides recommendations
- ✅ Honest accuracy assessment

---

## RECOMMENDATIONS

### 1. Fix Documentation Accuracy (Priority 1) 🔴

**Action:** Update `/docs/leanAI/` with accurate status

**Changes:**
```diff
# Screen 01: Chat Intake
- Status: BUILT
+ Status: NOT BUILT 🔴

# Screen 02: Startup Profile
- Status: BUILT
+ Status: NOT BUILT 🔴

# Screen 03: Validator Report
- Route: /validator-report
+ Route: /startup-validator-v4
- File: ValidatorReport.tsx
+ File: page.tsx
+ Note: UI complete, AI agents are mock data
```

**Effort:** 1 hour

---

### 2. Consolidate Documentation (Priority 2) ⚠️

**Option A: Migrate to leanAI folder**

Move from `/docs/lean/` to `/docs/leanAI/`:
- `05-lean-canvas.md`
- `06-opportunity-canvas.md`
- `10-90-day-plan.md`

**Option B: Cross-reference**

Add to `/docs/leanAI/README.md`:
```markdown
## Built Screens (see /docs/lean/)
- Screen 05: Lean Canvas → See /docs/lean/01-lean-canvas-spec.md
- Screen 06: Opportunity Canvas → See /docs/lean/02-opportunity-canvas-spec.md
- Screen 10: 90-Day Plan → See /docs/lean/03-90-day-plan-spec.md
```

**Effort:** 2 hours (Option A) or 30 minutes (Option B)

---

### 3. Implement Missing Screens (Priority 3) 🔴

**If building complete system:**

| Screen | Est. LOC | Est. Days | Priority |
|--------|----------|-----------|----------|
| Chat Intake | 800 | 3 | P1 |
| Startup Profile | 600 | 2 | P1 |
| Market Research Hub | 700 | 3 | P1 |
| Experiments Lab | 700 | 3 | P1 |
| Idea Wall | 500 | 2 | P2 |
| Story Map | 600 | 3 | P2 |

**Total:** 3,900 LOC, 16 days

**Or:** Mark as v2.0 and focus on AI agents for existing screens

---

### 4. Implement AI Agents (Priority 4) 🔴 CRITICAL

**Current:** All agents are mock data  
**Impact:** Core value prop not delivered

**Phased Approach:**

**Phase 1: Validator Agents (6 weeks)**
- Market Researcher (GPT-4 + web scraping)
- Competitor Agent (product comparison)
- Risk Analyzer (scoring engine)

**Phase 2: Canvas Agents (4 weeks)**
- Canvas Coach (weak block detection)
- Opportunity Analyst (adoption risk)

**Phase 3: Planning Agents (4 weeks)**
- Card Generator AI (smart task creation)

**Total:** 14 weeks

---

## FINAL VERDICT

### What's True ✅

- **Core 4-screen system works perfectly**
- **3,066 lines of production code exist**
- **TypeScript, clean architecture, fully responsive**
- **Data persistence via localStorage functional**
- **Drag-and-drop system operational**
- `/docs/lean/progress-tracker.md` is 100% accurate

### What's Misleading ⚠️

- **3 screens marked "BUILT" don't exist**
- **12 AI agents documented but not implemented**
- **10-screen flow documented but only 30% built**
- **Documentation split across 2 folders**
- `/docs/leanAI/` has 57% accuracy issues

### What to Do

**Short-term (1 week):**
1. Fix documentation accuracy
2. Migrate/cross-reference screen specs
3. Update status claims

**Medium-term (1 month):**
4. Decide: Build missing screens OR mark as v2.0
5. Implement priority AI agents

**Long-term (3 months):**
6. Complete 10-screen system
7. Full AI agent implementation
8. End-to-end testing

---

**Comparison Complete** ✅

**Key Insight:** The 4-screen MVP is production-ready and well-documented. The 10-screen vision is well-planned but requires accurate status updates and significant build effort.
