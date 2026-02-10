# Value Proposition Canvas Implementation Plan

**Status:** ✅ Ready to Implement  
**Route:** `/value-proposition` (new dedicated route)  
**Priority:** High (Screen 23/100)  
**Design System:** Strategyzer v2.1 official template

---

## 📋 Overview

The Value Proposition Canvas is a strategic tool that maps **customer needs** (Jobs, Pains, Gains) against **product offerings** (Products & Services, Pain Relievers, Gain Creators). It answers the critical question: **"Does our product truly address what customers need?"**

### Key Question
> "Does every feature solve a specific customer pain or create a gain?"

### Core Concept
A **fit score** (0-100%) highlights gaps between customer needs and product capabilities:
- **Pains** with no matching **Pain Reliever**
- **Gains** with no matching **Gain Creator**

---

## 🎯 User Story

**As a founder**, I want to validate that my product features map directly to customer pains and gains, **so that** I don't build features nobody needs and can identify gaps in my value proposition.

---

## 🏗️ Architecture

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  3-PANEL LAYOUT                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  LEFT (280px)          CENTER (flex-1)              RIGHT (380px)           │
│  ═══════════           ══════════════               ═════════════           │
│                                                                              │
│  FIT SCORE             6-BOX CANVAS                 AI INTELLIGENCE         │
│  ──────────            ───────────                  ───────────────         │
│                                                                              │
│  ┌──────────┐          CUSTOMER PROFILE | VALUE MAP                         │
│  │   78%    │          ═══════════════   ══════════                         │
│  │   FIT    │                                       FIT ANALYSIS            │
│  └──────────┘          Jobs              Products   ────────────            │
│                        Pains             Relievers  • Match: 70%            │
│  Source:               Gains             Creators   • Unmatched: 3 pains    │
│  • Lean Canvas ✓                                    • Gaps: 2 gains         │
│  • Validator ✓         [Drag to reorder]                                    │
│                                                      SUGGESTIONS             │
│  QUICK ACTIONS         [Edit items]                 ───────────             │
│  ──────────                                         • Add blocker           │
│  [Regenerate AI]       [Add new]                      detection             │
│  [Add Pain]                                         • Add progress          │
│  [Add Gain]                                           dashboard              │
│  [View Canvas →]                                                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6-Box Structure (Strategyzer Official)

**CUSTOMER PROFILE (Left Side)**
1. **Customer Jobs** - What customers try to accomplish
2. **Pains** - Bad outcomes, risks, obstacles
3. **Gains** - Outcomes and benefits customers want

**VALUE MAP (Right Side)**
4. **Products & Services** - What you offer
5. **Pain Relievers** - How products alleviate pains
6. **Gain Creators** - How products create gains

---

## 📊 Data Model

### TypeScript Interfaces

```typescript
// /data/value-proposition-types.ts

export type ItemType = 
  | 'customer_job' 
  | 'pain' 
  | 'gain' 
  | 'product' 
  | 'pain_reliever' 
  | 'gain_creator';

export interface ValuePropItem {
  id: string;
  type: ItemType;
  text: string;
  order: number;
  matched_to?: string[]; // IDs of connected items
  created_at: Date;
  updated_at: Date;
}

export interface FitScore {
  overall: number; // 0-100
  pains_matched: number;
  pains_total: number;
  gains_matched: number;
  gains_total: number;
  unmatched_pains: string[]; // IDs
  unmatched_gains: string[]; // IDs
}

export interface ValuePropositionCanvas {
  id: string;
  startup_id: string;
  
  // Customer Profile
  customer_jobs: ValuePropItem[];
  pains: ValuePropItem[];
  gains: ValuePropItem[];
  
  // Value Map
  products: ValuePropItem[];
  pain_relievers: ValuePropItem[];
  gain_creators: ValuePropItem[];
  
  // Metadata
  fit_score: FitScore;
  source_lean_canvas: boolean;
  source_validator: boolean;
  last_regenerated?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface FitAnalysis {
  matched_pairs: Array<{
    customer_item: ValuePropItem;
    value_item: ValuePropItem;
    match_type: 'pain_reliever' | 'gain_creator';
  }>;
  unmatched_pains: ValuePropItem[];
  unmatched_gains: ValuePropItem[];
  suggestions: Array<{
    type: 'add_reliever' | 'add_creator' | 'add_product';
    for_item: ValuePropItem;
    suggestion_text: string;
  }>;
}
```

---

## 🎨 Components Architecture

### Component Breakdown

```
/app/value-proposition/
├── page.tsx                          # Main page (3-panel layout)
├── components/
│   ├── FitScoreCard.tsx             # Left panel - circular score
│   ├── SourceIndicators.tsx         # Data source badges
│   ├── QuickActions.tsx             # Left panel actions
│   ├── CustomerProfilePanel.tsx     # Jobs + Pains + Gains
│   ├── ValueMapPanel.tsx            # Products + Relievers + Creators
│   ├── ValuePropItemCard.tsx        # Individual item (draggable)
│   ├── FitAnalysisPanel.tsx         # Right panel - analysis
│   ├── UnmatchedItemsList.tsx       # Gaps highlighting
│   ├── SuggestionCard.tsx           # AI suggestions
│   └── MatchConnector.tsx           # Visual lines between matches
```

### Component Responsibilities

**1. FitScoreCard.tsx**
- Circular progress indicator (0-100%)
- Color coding: <50% red, 50-75% amber, >75% green
- Breakdown: X/Y pains matched, X/Y gains matched

**2. CustomerProfilePanel.tsx**
- 3 sections stacked vertically
- Each section: header + list of items
- Drag-and-drop reordering within section
- Add/edit/delete items
- Warning badges for unmatched items

**3. ValueMapPanel.tsx**
- 3 sections stacked vertically
- Mirror structure of CustomerProfilePanel
- Shows connection indicators to customer items
- Warning badges for orphaned items (no match)

**4. ValuePropItemCard.tsx**
- Text content (editable on click)
- Drag handle icon
- Match indicator (checkmark if matched, warning if not)
- Delete icon (hover)
- Visual connector dots (for matched pairs)

**5. FitAnalysisPanel.tsx**
- Overall fit percentage
- Matched pairs count
- Unmatched items list (clickable to highlight)
- AI suggestions with [Apply] buttons

---

## 🔄 Data Flow

### Initialization Flow

```
User opens /value-proposition
    ↓
Check if value_proposition_canvas exists
    ↓
    NO → Check Lean Canvas + Validator data
        ↓
        FOUND → Show [Regenerate from AI] button
        ↓
        NOT FOUND → Show empty state: "Create Lean Canvas first"
    ↓
    YES → Load existing canvas + calculate fit score
        ↓
        Display 6 boxes with items
        ↓
        Calculate matched pairs
        ↓
        Highlight unmatched items
        ↓
        Generate AI suggestions
```

### AI Regeneration Flow

```
User clicks [Regenerate from AI]
    ↓
Call Opportunity Agent (extended)
    ↓
Input: Lean Canvas + Validator Report
    ↓
Extract:
    • Customer Jobs ← Customer Segments + Problem
    • Pains ← Problem + Validator Risks
    • Gains ← Inferred from Solution + Market
    • Products ← Solution + Key Features
    • Pain Relievers ← Match Pains to Products
    • Gain Creators ← Match Gains to Products
    ↓
Calculate initial fit score
    ↓
Save to database
    ↓
Display 6-box canvas
```

### Edit Flow

```
User edits item text / adds new / deletes / reorders
    ↓
Auto-save to database
    ↓
Recalculate fit score
    ↓
Update matched pairs
    ↓
Refresh unmatched warnings
    ↓
Regenerate suggestions (if major change)
```

---

## 🎯 Fit Score Calculation

### Algorithm

```typescript
function calculateFitScore(canvas: ValuePropositionCanvas): FitScore {
  const painsMatched = canvas.pains.filter(p => 
    p.matched_to && p.matched_to.length > 0
  ).length;
  
  const gainsMatched = canvas.gains.filter(g => 
    g.matched_to && g.matched_to.length > 0
  ).length;
  
  const painsTotal = canvas.pains.length;
  const gainsTotal = canvas.gains.length;
  
  const totalItems = painsTotal + gainsTotal;
  const totalMatched = painsMatched + gainsMatched;
  
  const overall = totalItems > 0 
    ? Math.round((totalMatched / totalItems) * 100) 
    : 0;
  
  const unmatchedPains = canvas.pains
    .filter(p => !p.matched_to || p.matched_to.length === 0)
    .map(p => p.id);
  
  const unmatchedGains = canvas.gains
    .filter(g => !g.matched_to || g.matched_to.length === 0)
    .map(g => g.id);
  
  return {
    overall,
    pains_matched: painsMatched,
    pains_total: painsTotal,
    gains_matched: gainsMatched,
    gains_total: gainsTotal,
    unmatched_pains: unmatchedPains,
    unmatched_gains: unmatchedGains,
  };
}
```

---

## 🤖 AI Agent Specification

### Opportunity Analyst (Extended)

**Trigger:** User clicks "Regenerate from AI" or first load with no data

**Input:**
- Lean Canvas JSON (problem, solution, customer_segments, unique_value_proposition, key_features)
- Validator Report (risks, competitors, market_sizing)

**Processing Logic:**

```
1. CUSTOMER JOBS
   ← Parse customer_segments
   ← Extract functional/social/emotional jobs from problem context
   ← Infer from existing_alternatives (what job do those solve?)

2. PAINS
   ← Parse problem statement
   ← Extract validator risks
   ← Infer from unfair_advantage (what makes alternatives painful?)

3. GAINS
   ← Infer from solution + unique_value_proposition
   ← Parse market_sizing opportunities
   ← Reverse engineer from "what outcome does solution promise?"

4. PRODUCTS & SERVICES
   ← Parse solution
   ← Extract key_features
   ← List channels (if relevant as service)

5. PAIN RELIEVERS
   ← For each Pain, find matching Product/Feature
   ← Map how product eliminates/reduces pain
   ← Flag pains with no reliever

6. GAIN CREATORS
   ← For each Gain, find matching Product/Feature
   ← Map how product creates/maximizes gain
   ← Flag gains with no creator
```

**Output:**
- 6 arrays of ValuePropItem objects
- Initial `matched_to` connections
- Fit score (0-100%)
- List of unmatched items
- 3-5 suggestions for improving fit

**Rules:**
- One reliever per pain minimum
- One creator per gain minimum
- Flag high-impact pains/gains with no match as priority
- Suggest adding products/features if major gaps exist

---

## 🎨 UI/UX Specifications

### Design Tokens (match lean-canvas-v4 style)

**Colors:**
- Customer Profile side: `bg-[#FFF9F5]` (warm cream)
- Value Map side: `bg-[#F0F9FF]` (cool blue tint)
- Matched items: `border-[#0d5f4e]` (emerald)
- Unmatched items: `border-[#DC2626]` (red warning)
- Fit score >75%: `text-[#0d5f4e]`
- Fit score 50-75%: `text-[#D97706]` (amber)
- Fit score <50%: `text-[#DC2626]` (red)

**Typography:**
- Section headers: Georgia serif, 18px, light
- Item text: System sans-serif, 14px
- Fit score: 48px bold
- Percentage label: 12px uppercase

**Spacing:**
- Panel padding: 32px
- Item spacing: 12px
- Section gap: 24px

### Interaction Patterns

**Drag and Drop:**
- Drag handle: `≡` icon (GripVertical from lucide-react)
- Only within same section (can't drag Pain into Jobs)
- Reorder updates `order` field, auto-saves

**Inline Editing:**
- Click item text to edit
- Enter to save, Escape to cancel
- Auto-save on blur

**Add New Item:**
- `[+ Add]` button at bottom of each section
- Opens inline text input
- Enter to create, auto-assigns next order number

**Delete:**
- Hover reveals `×` button
- Confirm dialog: "Delete this item? Connections will be lost."

**Match Connections:**
- Click "Link" icon on Pain/Gain
- Shows dropdown of available Relievers/Creators
- Select to create `matched_to` connection
- Visual line drawn between items (subtle dotted line)

---

## 📱 Responsive Design

**Desktop (>1024px):**
- 3-panel layout as designed
- 6 boxes in 2×3 grid

**Tablet (768-1024px):**
- Stack panels vertically
- Left panel (Fit Score) at top
- Center canvas (6 boxes) in middle
- Right panel (AI) at bottom

**Mobile (<768px):**
- Single column
- Collapsible sections with accordions
- Fit score sticky at top
- AI suggestions in bottom drawer

---

## ✅ Acceptance Criteria

### Functional Requirements
- [ ] Load existing Value Proposition Canvas if exists
- [ ] Show empty state if no Lean Canvas/Validator data
- [ ] [Regenerate from AI] calls Opportunity Agent
- [ ] Display 6 boxes with items from data
- [ ] Calculate and display fit score (0-100%)
- [ ] Highlight unmatched pains (red border)
- [ ] Highlight unmatched gains (red border)
- [ ] Show matched pairs count in right panel
- [ ] List unmatched items in right panel
- [ ] Generate 3-5 AI suggestions
- [ ] Drag-and-drop reorder items within section
- [ ] Inline edit item text
- [ ] Add new items to any section
- [ ] Delete items with confirmation
- [ ] Create match connections (Pain ↔ Reliever, Gain ↔ Creator)
- [ ] Auto-save all changes
- [ ] Recalculate fit score on every change
- [ ] [View Lean Canvas →] navigates to lean-canvas-v4
- [ ] [Improve Fit] scrolls to suggestions panel

### Design Requirements
- [ ] Match Strategyzer v2.1 official layout
- [ ] Use beige/cream/emerald color system
- [ ] Customer Profile side: warm cream background
- [ ] Value Map side: cool blue tint background
- [ ] Fit score: circular progress indicator
- [ ] Visual connectors between matched items (subtle)
- [ ] Warning badges on unmatched items
- [ ] Smooth animations on add/delete
- [ ] Responsive: works on mobile/tablet/desktop

### Performance Requirements
- [ ] Fit score recalculation <100ms
- [ ] Auto-save debounced (500ms after last edit)
- [ ] AI regeneration completes within 5s
- [ ] Smooth drag-and-drop (60fps)

---

## 🚀 Implementation Phases

### Phase 1: Data Layer (1-2 hours)
- [ ] Create `/data/value-proposition-types.ts`
- [ ] Create `/data/value-proposition-data.ts` (mock data)
- [ ] Implement `calculateFitScore()` function
- [ ] Test fit score calculation with sample data

### Phase 2: Core Components (2-3 hours)
- [ ] Create `FitScoreCard.tsx`
- [ ] Create `ValuePropItemCard.tsx`
- [ ] Create `CustomerProfilePanel.tsx`
- [ ] Create `ValueMapPanel.tsx`
- [ ] Test drag-and-drop within sections

### Phase 3: Main Page Layout (1-2 hours)
- [ ] Create `/app/value-proposition/page.tsx`
- [ ] Implement 3-panel layout
- [ ] Integrate all components
- [ ] Add to DashboardLayout sidebar
- [ ] Add route to App.tsx

### Phase 4: Intelligence Panel (1-2 hours)
- [ ] Create `FitAnalysisPanel.tsx`
- [ ] Create `UnmatchedItemsList.tsx`
- [ ] Create `SuggestionCard.tsx`
- [ ] Implement match highlighting

### Phase 5: Interactions (1-2 hours)
- [ ] Implement inline editing
- [ ] Implement add new item
- [ ] Implement delete with confirmation
- [ ] Implement match connections UI
- [ ] Add auto-save logic

### Phase 6: Polish & Testing (1 hour)
- [ ] Add loading states
- [ ] Add empty states
- [ ] Add error handling
- [ ] Test all workflows
- [ ] Update documentation

**Total Estimated Time:** 8-12 hours

---

## 📚 References

### Official Template
- **File:** `lean/canvas/The Value Proposition Canvas - Official Template from Strategyzer - v2.1.pdf`
- **Source:** Strategyzer (creators of Business Model Canvas)
- **Official Site:** strategyzer.com

### Related Screens
- Lean Canvas V4: `/app/lean-canvas-v4/` (source data)
- Opportunity Canvas: `/app/opportunity-canvas/` (alternative view)
- Startup Validator: `/app/startup-validator/` (source data)

### Design Consistency
- Follow same 3-panel pattern as Validation Board
- Use same color system: beige/cream + emerald/sage
- Match DashboardLayout header/sidebar
- Use same AI panel style as other LEAN tools

---

## 🎯 Success Metrics

**User Goal:** Identify product-market fit gaps

**Measure Success:**
- Fit score increases from <60% to >75% after iteration
- All high-impact pains have at least one reliever
- All high-impact gains have at least one creator
- Founder can explain why each product feature exists (maps to pain/gain)

**Red Flags:**
- Fit score <50% → major product mismatch
- >3 unmatched high-impact pains → missing critical features
- Products with no connections → feature bloat candidates

---

## ✅ Status

**Current Status:** 📝 Specification Complete  
**Next Step:** Implement Phase 1 (Data Layer)  
**Blocked By:** None  
**Dependencies:** Lean Canvas V4 data, Validator data (for AI regeneration)

---

**Last Updated:** February 10, 2026  
**Owner:** StartupAI Core Team  
**Reviewers:** Product, Design, Engineering
