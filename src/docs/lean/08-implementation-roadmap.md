# Lean Canvas to 90-Day Execution - Implementation Roadmap

## Overview

This document provides a **systematic, step-by-step implementation plan** connecting the Figma prototype at https://entry-chorus-50991767.figma.site/lean-canvas-v2 to production code, following best practices and ensuring full verification at each stage.

---

## Current State Assessment

### ✅ What We Have (Documentation)

1. **Figma Prototype:** Complete Lean Canvas V2 design at https://entry-chorus-50991767.figma.site/lean-canvas-v2
2. **Implementation Prompts:** `/docs/lean/02-implementation-prompts.md` - Detailed UI recreation instructions
3. **Wireframes:** `/docs/lean/02-wireframe.md` + `/docs/lean/05-wireframes.md` - Complete ASCII wireframes for all screens
4. **Visual Reference:** `/docs/lean/03-visual-reference.md` - Design system specs
5. **Execution Plan:** `/docs/lean/04-opportunity-to-execution-plan.md` - Full system architecture
6. **Kanban Prompts:** `/docs/lean/06-kanban-card-prompts-system.md` - AI prompt system
7. **Gantt Timeline:** `/docs/lean/07-gantt-diagrams.md` - 12-week implementation schedule

### ❌ What We Need (Production Code)

1. **Screen 1:** Startup Profile Validator (Entry point)
2. **Screen 2:** Lean Canvas (AI-Enhanced) - Connected to Figma prototype
3. **Screen 3:** Opportunity Canvas
4. **Screen 4:** 90-Day Kanban Board
5. **Screen 5:** Sprint Review System
6. **Backend:** AI agents, database schema, edge functions

---

## Implementation Strategy

### Phase 1: Foundation (Week 1-2)
**Goal:** Build Screen 1 (Startup Profile Validator) + Screen 2 (Lean Canvas) matching Figma design

### Phase 2: Validation Flow (Week 3-4)
**Goal:** Add Screen 3 (Opportunity Canvas) + AI agents integration

### Phase 3: Execution System (Week 5-8)
**Goal:** Build Screen 4 (Kanban Board) + Card generation system

### Phase 4: Review & Polish (Week 9-10)
**Goal:** Add Screen 5 (Sprint Review) + End-to-end testing

### Phase 5: Launch (Week 11-12)
**Goal:** Documentation, deployment, user testing

---

## STEP 1: Build Lean Canvas Screen (Matching Figma)

**Priority:** HIGH - This is the foundation  
**Duration:** 3-5 days  
**Dependencies:** None  
**Verification:** Screenshot comparison with Figma

### 1.1 Create Page Structure

**File:** `/app/lean-canvas/page.tsx`

**Tasks:**
- [x] Create base page component
- [x] Add sticky header with StartupAI branding
- [x] Add completion tracker (7/11 sections, 64% progress)
- [x] Add Save/Download/Share buttons
- [x] Add mobile progress bar
- [x] Set cream background (#FAF9F7)

**Verification:**
- Header sticks on scroll
- Progress bar updates dynamically
- Mobile layout matches Figma
- All buttons render correctly

---

### 1.2 Add Title Section

**File:** Same as above

**Tasks:**
- [x] Add breadcrumb: "← View Classic Lean Canvas"
- [x] Add main title: "Lean Canvas" (48px, light weight)
- [x] Add subtitle explaining purpose (18px, gray)
- [x] Add "Last saved" timestamp
- [x] Set max-width: 768px for readability

**Verification:**
- Typography matches Figma exactly
- Spacing is correct (12px between title/subtitle)
- Breadcrumb link is functional
- Color values match (#212427 for title, #6B7280 for subtitle)

---

### 1.3 Build Three-Column Grid

**File:** Same as above

**Tasks:**
- [x] Create responsive grid container (3 cols desktop, 1 col mobile)
- [x] Set column gaps (32px desktop, 24px mobile)
- [x] Define column assignments:
  - Column 1: Problem, Existing Alternatives, Key Metrics
  - Column 2: Solution, UVP (highlighted), Unfair Advantage, Channels
  - Column 3: Customer Segments, Early Adopters, Cost, Revenue

**Verification:**
- Grid responsive at breakpoints (768px, 1024px)
- Equal column heights
- Proper card stacking on mobile
- Gaps consistent across breakpoints

---

### 1.4 Create Canvas Card Component

**File:** `/app/lean-canvas/components/CanvasCard.tsx`

**Tasks:**
- [x] White background with subtle shadow
- [x] Rounded corners (12px)
- [x] Padding (24px)
- [x] Section title (14px, medium weight, emerald #0D5F4E)
- [x] Helper text (13px, gray #6B7280)
- [x] Textarea with auto-resize
- [x] Character counter (when applicable)
- [x] AI Enhance button with sparkle icon
- [x] Completion checkmark (when filled)
- [x] Hover state (subtle border color change)
- [x] Focus state (emerald ring)

**Props:**
```typescript
interface CanvasCardProps {
  title: string;
  helperText: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  hasAIEnhance?: boolean;
  isHighlighted?: boolean; // For UVP card
  isCompleted?: boolean;
}
```

**Verification:**
- Card matches Figma design pixel-perfectly
- Textarea auto-grows as content increases
- Character counter appears when maxLength set
- AI button triggers enhancement (mocked for now)
- Completion checkmark appears when value is non-empty
- Hover/focus states work correctly

---

### 1.5 Implement All 11 Canvas Sections

**File:** `/app/lean-canvas/page.tsx`

**Tasks:**
- [x] Problem (3 bullet points, 250 chars max)
- [x] Solution (3 bullet points, 250 chars max)
- [x] Unique Value Proposition (HIGHLIGHTED, 120 chars max)
- [x] Customer Segments (comma-separated, 200 chars max)
- [x] Early Adopters (specific persona, 200 chars max)
- [x] Existing Alternatives (competitors, 200 chars max)
- [x] Channels (distribution, 200 chars max)
- [x] Unfair Advantage (defensibility, 150 chars max)
- [x] Key Metrics (3-5 metrics, 200 chars max)
- [x] Cost Structure (fixed + variable, 200 chars max)
- [x] Revenue Streams (pricing model, 200 chars max)

**State Management:**
```typescript
interface LeanCanvasState {
  problem: string;
  solution: string;
  uvp: string;
  customerSegments: string;
  earlyAdopters: string;
  existingAlternatives: string;
  channels: string;
  unfairAdvantage: string;
  keyMetrics: string;
  costStructure: string;
  revenueStreams: string;
  lastSaved?: string;
}
```

**Verification:**
- All 11 sections render correctly
- State updates on input change
- Character limits enforced
- Completion tracker updates (X/11 sections complete)
- Progress bar fills correctly (e.g., 7/11 = 64%)
- Data persists in localStorage (auto-save)

---

### 1.6 Add AI Enhancement Logic (Mocked)

**File:** `/app/lean-canvas/lib/aiEnhancement.ts`

**Tasks:**
- [x] Create mock AI enhancement function
- [x] Simulate API call with 1-2 second delay
- [x] Return enhanced text based on section type
- [x] Show loading state during enhancement
- [x] Display enhanced text in modal/drawer
- [x] Allow user to accept or reject enhancement

**Mock Enhancement Examples:**
- Problem: Add specificity + quantification
  - Before: "Customer support is slow"
  - After: "Customer support teams take 24+ hours to resolve basic inquiries, causing 30% customer churn"
- UVP: Make it punchy + outcome-focused
  - Before: "AI-powered support tool"
  - After: "Cut support response time by 80% with AI—no training required"

**Verification:**
- AI button shows loading spinner
- Enhancement appears in 1-2 seconds
- Modal/drawer shows before/after comparison
- User can accept (replaces text) or reject (keeps original)
- Toast notification confirms action

---

### 1.7 Add Save/Export Functionality

**File:** `/app/lean-canvas/lib/canvasActions.ts`

**Tasks:**
- [x] Auto-save to localStorage every 30 seconds
- [x] Manual save button (updates timestamp)
- [x] Export to PDF (mocked - shows success toast)
- [x] Export to Notion (mocked - shows modal with instructions)
- [x] Share link generator (copies URL to clipboard)

**Verification:**
- Auto-save updates "Last saved" timestamp
- Manual save button triggers immediate save
- Export buttons show appropriate UI
- Share link includes canvas data in URL params (optional)
- All actions have success/error feedback

---

### 1.8 Add Navigation to Next Screen

**File:** `/app/lean-canvas/page.tsx`

**Tasks:**
- [x] Add "Continue to Opportunity Canvas" button (bottom of page)
- [x] Show validation warning if <7 sections complete
- [x] Navigate to `/opportunity-canvas` on click
- [x] Pass canvas data via route state or localStorage

**Verification:**
- Button appears after scrolling to bottom
- Warning modal appears if incomplete
- Navigation works correctly
- Data persists across navigation
- Back button returns to Lean Canvas with data intact

---

## STEP 2: Build Opportunity Canvas Screen

**Priority:** HIGH  
**Duration:** 3-4 days  
**Dependencies:** Lean Canvas complete  
**Verification:** Screenshot + functional testing

### 2.1 Create Page Structure

**File:** `/app/opportunity-canvas/page.tsx`

**Tasks:**
- [ ] Similar header to Lean Canvas
- [ ] Title: "Opportunity Canvas"
- [ ] Subtitle explaining purpose
- [ ] Import canvas data from Lean Canvas
- [ ] Show startup name + one-liner at top

**Verification:**
- Layout consistent with Lean Canvas
- Data imports correctly
- Breadcrumb links back to Lean Canvas

---

### 2.2 Build 10-Block Canvas Form

**File:** Same as above

**Tasks:**
- [ ] Users & Customers (specific persona)
- [ ] Problems (ranked by severity)
- [ ] Solutions Today (workarounds + competitors)
- [ ] Solution Ideas (3 hypotheses)
- [ ] How Users Use It (workflow integration)
- [ ] Adoption Strategy (channels)
- [ ] User Metrics (leading indicators)
- [ ] Business Challenges (risks)
- [ ] Budget (time, money, team)
- [ ] Business Benefits (outcomes)

**Grid Layout:**
- 2x5 grid on desktop
- Single column on mobile

**Verification:**
- All 10 blocks render correctly
- Character limits enforced
- Auto-save functionality
- AI enhancement available per block

---

### 2.3 Add AI Risk Analysis

**File:** `/app/opportunity-canvas/lib/riskAgent.ts`

**Tasks:**
- [ ] Analyze completed canvas blocks
- [ ] Identify top 5 riskiest assumptions
- [ ] Score each risk (0-100)
- [ ] Suggest validation methods per risk
- [ ] Display in sidebar panel

**Risk Scoring Formula:**
```
Risk Score = (Impact × Uncertainty) / Cost to Validate
- Impact: 0-10 (business fails if wrong)
- Uncertainty: 0-100% (how confident are we)
- Cost: Low/Medium/High (time + money)
```

**Verification:**
- Risk panel shows top 5 assumptions
- Risks ranked correctly
- Each risk has validation method suggestion
- Panel updates when canvas changes

---

### 2.4 Add Primary Opportunity Selection

**File:** Same as above

**Tasks:**
- [ ] AI recommends primary opportunity to validate first
- [ ] Display as highlighted card
- [ ] Explain reasoning (e.g., "highest risk + fastest to test")
- [ ] Allow user to override selection
- [ ] Show campaign type suggestion (e.g., "Mafia Offer Campaign")

**Verification:**
- Recommendation appears after canvas complete
- Reasoning is clear
- User can change selection
- Selection persists for next step

---

### 2.5 Add Navigation to 90-Day Plan

**File:** Same as above

**Tasks:**
- [ ] "Generate 90-Day Plan" button
- [ ] Validation check (all 10 blocks filled)
- [ ] Loading state (simulating AI plan generation)
- [ ] Navigate to `/90-day-plan`
- [ ] Pass opportunity data via state

**Verification:**
- Button triggers plan generation
- Loading state shows progress
- Navigation works correctly
- Data persists

---

## STEP 3: Build 90-Day Kanban Board

**Priority:** CRITICAL  
**Duration:** 5-7 days  
**Dependencies:** Opportunity Canvas complete  
**Verification:** Functional Kanban with card generation

### 3.1 Create Kanban Board UI

**File:** `/app/90-day-plan/page.tsx`

**Tasks:**
- [ ] 5-column layout (Backlog, To Do, Doing, Done, Learnings)
- [ ] Sprint selector (Sprint 1-6)
- [ ] Sprint goal displayed at top
- [ ] Progress tracker (X/24 cards complete)
- [ ] Drag-and-drop functionality
- [ ] Mobile: Single column with tabs

**Verification:**
- All columns render correctly
- Sprint selector works
- Drag-and-drop smooth
- Mobile layout usable

---

### 3.2 Create Kanban Card Component

**File:** `/app/90-day-plan/components/KanbanCard.tsx`

**Tasks:**
- [ ] Card title
- [ ] Canvas source badge (e.g., "Problems")
- [ ] Success criteria
- [ ] Evidence status (Not Started/In Progress/Complete)
- [ ] AI Coach tip (collapsible)
- [ ] Click to expand detail view

**Card Types (9 total):**
1. Identify Risk (Backlog)
2. Design Experiment (To Do)
3. Define Customer (To Do)
4. Outreach Message (Doing)
5. Interview Script (Doing)
6. Evidence Summary (Done)
7. Analyze Results (Learnings)
8. PDCA Decision (Learnings)
9. Sprint Review (Auto-generated)

**Verification:**
- All card types render correctly
- Badges color-coded by source
- Success criteria clear
- AI tips helpful

---

### 3.3 Implement Card Generation Logic

**File:** `/app/90-day-plan/lib/plannerAgent.ts`

**Tasks:**
- [ ] Generate 24 cards from Opportunity Canvas (4 per sprint)
- [ ] Map canvas blocks to card types
- [ ] Set success criteria per card
- [ ] Order by risk (riskiest first)
- [ ] Assign to sprints (1-6)

**Mapping Example:**
- Opportunity Block "Problems" → Card "Interview 15 founders about pain frequency"
- Success Criteria: "70%+ confirm problem occurs weekly"

**Verification:**
- Cards generated correctly
- Mapping makes sense
- Success criteria quantifiable
- Sprint distribution logical

---

### 3.4 Add Drag-and-Drop Functionality

**File:** `/app/90-day-plan/lib/kanbanDragDrop.ts`

**Tasks:**
- [ ] Use react-dnd or dnd-kit
- [ ] Allow dragging cards between columns
- [ ] Prevent invalid moves (e.g., can't skip To Do)
- [ ] Update card status on drop
- [ ] Persist state to localStorage

**Verification:**
- Drag feels smooth
- Drop zones highlighted
- Invalid moves prevented
- State updates correctly

---

### 3.5 Add Card Detail Modal

**File:** `/app/90-day-plan/components/CardDetailModal.tsx`

**Tasks:**
- [ ] Full card details
- [ ] Evidence upload section
- [ ] AI Coach expanded tips
- [ ] Mark as validated/invalidated
- [ ] Close and save

**Verification:**
- Modal opens on card click
- All details visible
- Evidence upload works (mocked)
- Status updates correctly

---

### 3.6 Add Sprint Navigation

**File:** `/app/90-day-plan/page.tsx`

**Tasks:**
- [ ] Sprint selector dropdown
- [ ] Sprint goals displayed
- [ ] Sprint progress (X/Y cards done)
- [ ] Navigate to Sprint Review when sprint complete

**Verification:**
- Sprint selector works
- Goals update per sprint
- Progress accurate
- Review triggers correctly

---

## STEP 4: Build Sprint Review System

**Priority:** MEDIUM  
**Duration:** 2-3 days  
**Dependencies:** Kanban complete  
**Verification:** PDCA decision logic works

### 4.1 Create Sprint Review Page

**File:** `/app/90-day-plan/review/[sprintId]/page.tsx`

**Tasks:**
- [ ] Sprint summary (assumption tested, results, evidence)
- [ ] PDCA decision UI (Persevere/Pivot/Pause buttons)
- [ ] Canvas update suggestions
- [ ] Next sprint preview
- [ ] Export sprint report (PDF mocked)

**Verification:**
- Summary clear and concise
- Decision buttons functional
- Canvas updates suggested
- Export works

---

### 4.2 Implement PDCA Decision Logic

**File:** `/app/90-day-plan/lib/pdcaLogic.ts`

**Tasks:**
- [ ] Analyze sprint results vs success criteria
- [ ] Recommend decision based on evidence
- [ ] If Persevere: Generate next sprint cards
- [ ] If Pivot: Suggest canvas updates
- [ ] If Pause: Recommend action

**Decision Thresholds:**
- Persevere: ≥70% success criteria met
- Pivot: 40-69% success criteria met
- Pause: <40% success criteria met

**Verification:**
- Logic matches documented rules
- Recommendations make sense
- Next steps clear

---

### 4.3 Add Canvas Update Mechanism

**File:** `/app/90-day-plan/lib/canvasUpdate.ts`

**Tasks:**
- [ ] Identify which canvas blocks to update
- [ ] Suggest specific changes based on learnings
- [ ] Navigate back to Lean/Opportunity Canvas
- [ ] Pre-fill suggested updates
- [ ] Allow user to accept/reject

**Verification:**
- Suggestions specific and actionable
- Navigation works
- Pre-filled text appears
- User can modify

---

## STEP 5: Integrate AI Agents (Backend)

**Priority:** HIGH (for production)  
**Duration:** 7-10 days  
**Dependencies:** All screens complete  
**Verification:** AI responses accurate and fast

### 5.1 Set Up Database Schema

**File:** `/supabase/migrations/20260206_lean_canvas.sql`

**Tables:**
- [ ] `lean_canvases` (stores canvas data)
- [ ] `opportunity_canvases`
- [ ] `kanban_cards`
- [ ] `sprint_reviews`
- [ ] `ai_enhancements` (cache)

**Verification:**
- Schema created successfully
- RLS policies in place
- Indexes on frequently queried fields

---

### 5.2 Build AI Agents (Edge Functions)

**Files:**
- `/supabase/functions/canvas-enhance/index.ts` (CanvasAgent)
- `/supabase/functions/risk-identify/index.ts` (RiskAgent)
- `/supabase/functions/plan-generate/index.ts` (PlannerAgent)
- `/supabase/functions/coach-tips/index.ts` (CoachAgent)

**Tasks:**
- [ ] Implement prompts from `/docs/lean/06-kanban-card-prompts-system.md`
- [ ] Use Gemini Pro for analysis, Flash for tips
- [ ] Add error handling
- [ ] Cache responses where possible
- [ ] Return structured JSON

**Verification:**
- All agents return valid responses
- Response times <5 seconds
- Error handling works
- Caching reduces costs

---

### 5.3 Connect Frontend to Backend

**Files:** All page files

**Tasks:**
- [ ] Replace mock functions with API calls
- [ ] Add loading states
- [ ] Handle errors gracefully
- [ ] Show AI progress (e.g., "Analyzing your canvas...")
- [ ] Cache responses client-side

**Verification:**
- API calls work end-to-end
- Loading states clear
- Errors user-friendly
- Performance acceptable

---

## STEP 6: Testing & Validation

**Priority:** CRITICAL  
**Duration:** 3-5 days  
**Dependencies:** All features complete  
**Verification:** Zero critical bugs

### 6.1 Unit Tests

**Files:** `*.test.tsx` files

**Tasks:**
- [ ] Test all components render correctly
- [ ] Test state management
- [ ] Test AI enhancement logic
- [ ] Test canvas validation
- [ ] Test card generation

**Target:** 80%+ code coverage

---

### 6.2 Integration Tests

**Tasks:**
- [ ] Test Profile → Lean Canvas flow
- [ ] Test Lean → Opportunity flow
- [ ] Test Opportunity → 90-Day Plan flow
- [ ] Test Sprint Review → Canvas Update flow
- [ ] Test full end-to-end journey

**Target:** All critical paths working

---

### 6.3 User Testing

**Tasks:**
- [ ] Recruit 5 founders
- [ ] Walk through full flow
- [ ] Collect feedback
- [ ] Identify pain points
- [ ] Iterate based on data

**Target:** 4+/5 usability score

---

### 6.4 Performance Testing

**Tasks:**
- [ ] Measure page load times
- [ ] Test AI response times
- [ ] Test mobile performance
- [ ] Optimize slow areas
- [ ] Add loading skeletons

**Targets:**
- Page load <2 seconds
- AI response <5 seconds
- Mobile usable on 3G

---

### 6.5 Accessibility Testing

**Tasks:**
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast
- [ ] Focus indicators
- [ ] ARIA labels

**Target:** WCAG 2.1 AA compliance

---

## STEP 7: Documentation & Launch

**Priority:** MEDIUM  
**Duration:** 2-3 days  
**Dependencies:** All testing complete  
**Verification:** Production-ready

### 7.1 Create User Documentation

**File:** `/docs/user-guide/lean-canvas-system.md`

**Tasks:**
- [ ] Getting started guide
- [ ] Screen-by-screen walkthrough
- [ ] AI features explanation
- [ ] Troubleshooting guide
- [ ] Video tutorials (optional)

---

### 7.2 Deployment

**Tasks:**
- [ ] Deploy edge functions to Supabase
- [ ] Deploy frontend to Vercel
- [ ] Configure environment variables
- [ ] Set up monitoring (Sentry)
- [ ] Test production environment

---

### 7.3 Launch Checklist

- [ ] All features working in production
- [ ] No critical bugs
- [ ] Performance targets met
- [ ] Analytics tracking set up
- [ ] Support rotation defined
- [ ] Launch announcement ready

---

## Current Implementation Status

### ✅ Completed (0%)
- None yet (ready to start)

### 🔄 In Progress (0%)
- None yet

### ⏳ Not Started (100%)
- All items above

---

## Next Immediate Steps (Priority Order)

### Step 1: Build Lean Canvas Screen (3-5 days)
**Why First:** This is the core UX, matches existing Figma design, and has no dependencies.

**Checklist:**
1. Create `/app/lean-canvas/page.tsx`
2. Build header with progress tracker
3. Add title section
4. Create three-column grid
5. Build CanvasCard component
6. Implement all 11 sections
7. Add AI enhancement (mocked)
8. Add save/export functionality
9. Add navigation to Opportunity Canvas
10. **VERIFY:** Screenshot comparison with Figma prototype

---

### Step 2: Build Opportunity Canvas (3-4 days)
**Why Second:** Natural next step in user flow, builds on Lean Canvas patterns.

**Checklist:**
1. Create `/app/opportunity-canvas/page.tsx`
2. Import data from Lean Canvas
3. Build 10-block form
4. Add AI risk analysis panel
5. Add primary opportunity selection
6. Add navigation to 90-Day Plan
7. **VERIFY:** Risk ranking logic works correctly

---

### Step 3: Build Kanban Board (5-7 days)
**Why Third:** Most complex feature, needs prior data from canvases.

**Checklist:**
1. Create `/app/90-day-plan/page.tsx`
2. Build 5-column Kanban layout
3. Create KanbanCard component
4. Implement card generation logic
5. Add drag-and-drop functionality
6. Build card detail modal
7. Add sprint navigation
8. **VERIFY:** Cards generate correctly from Opportunity Canvas

---

### Step 4: Add Sprint Review (2-3 days)
**Why Fourth:** Completes the execution loop.

**Checklist:**
1. Create `/app/90-day-plan/review/[sprintId]/page.tsx`
2. Build sprint summary UI
3. Implement PDCA decision logic
4. Add canvas update suggestions
5. **VERIFY:** Decision logic matches documented rules

---

### Step 5: Integrate AI Backend (7-10 days)
**Why Fifth:** Can be done in parallel or after frontend is solid.

**Checklist:**
1. Set up database schema
2. Build AI edge functions (4 agents)
3. Connect frontend to backend
4. Replace mocks with real AI
5. **VERIFY:** End-to-end AI flow works

---

### Step 6: Test & Polish (3-5 days)
**Why Sixth:** Ensure quality before launch.

**Checklist:**
1. Write unit tests
2. Run integration tests
3. Conduct user testing
4. Optimize performance
5. Check accessibility
6. **VERIFY:** Zero critical bugs

---

### Step 7: Launch (2-3 days)
**Why Last:** Deploy to production when everything is ready.

**Checklist:**
1. Create user documentation
2. Deploy to production
3. Set up monitoring
4. Announce launch
5. **VERIFY:** Production environment stable

---

## Proof of Completion Requirements

For each step, provide:

1. **Screenshot:** Before/after comparison with Figma design
2. **Code:** Link to production files
3. **Test Results:** Unit + integration test pass rate
4. **Performance:** Page load + AI response times
5. **User Feedback:** Quotes from user testing (if applicable)

---

## Success Criteria

### Phase 1 Success (Lean Canvas Screen)
- [ ] Pixel-perfect match with Figma prototype
- [ ] All 11 sections functional
- [ ] Auto-save working
- [ ] AI enhancement working (mocked or real)
- [ ] Mobile responsive
- [ ] Zero console errors
- [ ] Load time <2 seconds

### Phase 2 Success (Opportunity Canvas)
- [ ] All 10 blocks functional
- [ ] Risk analysis working
- [ ] Primary opportunity selection working
- [ ] Data flows from Lean Canvas
- [ ] Mobile responsive

### Phase 3 Success (Kanban Board)
- [ ] Cards generate correctly
- [ ] Drag-and-drop smooth
- [ ] Sprint navigation working
- [ ] Card detail modal functional
- [ ] Mobile responsive

### Phase 4 Success (Sprint Review)
- [ ] PDCA decision logic correct
- [ ] Canvas updates suggested
- [ ] Sprint summary clear
- [ ] Export working

### Phase 5 Success (AI Integration)
- [ ] All AI agents responding
- [ ] Response times <5 seconds
- [ ] Error handling robust
- [ ] Costs within budget

### Phase 6 Success (Testing)
- [ ] 80%+ code coverage
- [ ] Zero critical bugs
- [ ] 4+/5 usability score
- [ ] Performance targets met
- [ ] WCAG AA compliance

### Phase 7 Success (Launch)
- [ ] Production stable
- [ ] Monitoring active
- [ ] Documentation complete
- [ ] Launch announced
- [ ] Support ready

---

## Risk Mitigation

### Technical Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| AI responses too slow | High | Cache responses, use Gemini Flash for simple tasks |
| Drag-and-drop buggy on mobile | Medium | Use tested library (dnd-kit), extensive mobile testing |
| State management complex | Medium | Use simple useState for MVP, upgrade to Zustand if needed |
| Database schema changes | Low | Version migrations carefully, test thoroughly |

### Schedule Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Feature creep | High | Stick to MVP scope, defer enhancements |
| AI integration delays | High | Build frontend with mocks first, integrate AI later |
| Testing insufficient | Medium | Allocate full week for testing, don't skip |
| User feedback negative | Medium | Test early with 5 users, iterate quickly |

### Quality Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| UX not intuitive | High | Match Figma exactly, user test early |
| AI suggestions unhelpful | High | Use documented prompts, test with real data |
| Mobile experience poor | Medium | Mobile-first development, test on real devices |
| Accessibility gaps | Low | Use semantic HTML, test with screen reader |

---

## Tools & Technologies

### Frontend
- **Framework:** React (Next.js App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Drag-and-Drop:** dnd-kit
- **Forms:** react-hook-form@7.55.0
- **Animations:** motion/react
- **State:** useState (simple), Zustand (if complex)

### Backend
- **Database:** Supabase PostgreSQL
- **Edge Functions:** Supabase Functions (Deno)
- **AI:** Google Gemini Pro + Flash
- **Search:** Google Search API (for ResearchAgent)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage (for evidence uploads)

### Testing
- **Unit:** Jest + React Testing Library
- **E2E:** Playwright
- **Performance:** Lighthouse
- **Accessibility:** axe-core
- **Monitoring:** Sentry

### Deployment
- **Frontend:** Vercel
- **Backend:** Supabase
- **CI/CD:** GitHub Actions
- **Domain:** Custom domain via Vercel

---

## Estimated Timeline

| Phase | Duration | Start | End | Dependencies |
|-------|----------|-------|-----|--------------|
| **Phase 1: Lean Canvas** | 3-5 days | Week 1 | Week 1 | None |
| **Phase 2: Opportunity Canvas** | 3-4 days | Week 2 | Week 2 | Phase 1 |
| **Phase 3: Kanban Board** | 5-7 days | Week 3 | Week 4 | Phase 2 |
| **Phase 4: Sprint Review** | 2-3 days | Week 4 | Week 5 | Phase 3 |
| **Phase 5: AI Integration** | 7-10 days | Week 5 | Week 7 | Phase 4 |
| **Phase 6: Testing** | 3-5 days | Week 7 | Week 8 | Phase 5 |
| **Phase 7: Launch** | 2-3 days | Week 8 | Week 8 | Phase 6 |

**Total:** 8-10 weeks (conservative estimate with buffer)

---

## Budget Estimate

### Development Costs
- **Frontend Development:** 40-50 hours @ $100/hr = $4,000-$5,000
- **Backend Development:** 30-40 hours @ $100/hr = $3,000-$4,000
- **AI Integration:** 20-25 hours @ $100/hr = $2,000-$2,500
- **Testing & QA:** 15-20 hours @ $80/hr = $1,200-$1,600
- **Design Review:** 5-10 hours @ $80/hr = $400-$800

**Total Development:** $10,600-$13,900

### Infrastructure Costs (Monthly)
- **Supabase Pro:** $25/month
- **Vercel Pro:** $20/month
- **Gemini API:** ~$50-100/month (estimated)
- **Sentry:** $26/month
- **Domain:** $12/year

**Total Infrastructure:** ~$121-146/month

### One-Time Costs
- **User Testing:** $500 (5 users @ $100 each)
- **Video Tutorials:** $500 (if created)

**Grand Total (First Year):** $12,000-$15,000

---

## ROI Projections

Assuming this system helps 100 founders validate ideas faster:

- **Time Saved per Founder:** 2-4 weeks (vs manual validation)
- **Cost Saved per Founder:** $2,000-$5,000 (vs hiring consultants)
- **Failed Ideas Killed Fast:** 60% (saving 3-6 months of wasted effort)

**Value Created:** $200,000-$500,000 in saved time/money

---

## Conclusion

This roadmap provides a **systematic, step-by-step implementation plan** for building the Lean Canvas to 90-Day Execution system, starting with the Figma-matched Lean Canvas screen and progressively adding features until the full system is production-ready.

**Recommended Start:** Step 1 (Build Lean Canvas Screen) - highest ROI, lowest risk, matches existing design.

**Next Update:** After Step 1 is complete, update this document with:
- Screenshots comparing implementation to Figma
- Code files created
- Test results
- Lessons learned
- Adjust timeline/scope if needed

---

**End of Document**
