# Immersive Experience Canvas Implementation Plan

**Status:** ✅ Ready to Implement  
**Route:** `/immersive-experience-canvas` (new dedicated route)  
**Priority:** High (Screen 40/100)  
**Design System:** Deloitte Digital XR/AR/VR Canvas Template

---

## 📋 Overview

The Immersive Experience Canvas is a strategic framework for evaluating **XR/AR/VR use cases** across three critical dimensions: **brand**, **business**, and **customer**. It helps founders and product teams determine whether an immersive experience will deliver real value — not just follow trends or pursue technical feasibility alone.

### Key Question
> "Will our immersive experience (XR/AR/VR) use case pay off?"

### Core Concept
Three dimensions must **all** generate value for the use case to succeed:
- **Customer Impact** (a-e): pain elimination, convenience, personalization, efficiency, delight
- **Brand Impact** (f-k): omnichannel integration, values alignment, differentiation, perception, loyalty
- **Business Impact** (l-o): targeting, data-driven decisions, revenue streams, new audiences

---

## 🎯 User Story

**As a founder building an immersive product**, I want to evaluate my XR/AR/VR use case across customer, brand, and business dimensions, **so that** I don't waste resources on flashy tech that doesn't create meaningful value.

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
│  CONTEXT               12-SECTION CANVAS            AI INTELLIGENCE         │
│  ────────              ────────────────             ───────────────         │
│                                                                              │
│  THREE STEPS           ┌─────┬─────┐               VALUE SCORING            │
│  1. Understand         │  1  │  2  │               ──────────────           │
│  2. Ideate ★           ├─────┴─────┤               Customer: 3.2/5          │
│  3. Implement          │     3     │               Brand: 2.8/5             │
│                        ├─────┬─────┤               Business: 3.5/5          │
│  IMMERSIVE BAROMETER   │  4  │  5  │                                        │
│  ──────────────────    ├─────┼─────┤               WEAK DIMENSIONS          │
│  Real ◐──●──○ Virtual  │  6  │  7  │               • Brand alignment        │
│  (slider)              ├─────┼─────┤               • Omnichannel            │
│                        │  8  │  9  │               • Loyalty                │
│  EXPERIENCE DIM        ├─────┼─────┤                                        │
│  Type: Shopping        │ 10  │ 11  │               SUGGESTIONS              │
│  Reach: Mainstream     └─────┴─────┘               • Add social features    │
│                        │     12    │               • Integrate stores       │
│  IMPORT FROM:          └───────────┘                                        │
│  • Lean Canvas                                                               │
│  • Value Prop          VALUE DIMENSIONS                                      │
│                        Customer | Brand | Business                           │
│                        (a-e)    | (f-k) | (l-o)                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 12-Section Canvas Structure

**Row 1:**
- Section 1: Use Case Name
- Section 2: Use Case Description

**Row 2:**
- Section 3: To-Be-Journey (full width)

**Row 3:**
- Section 4: Customer Segments
- Section 5: Customer Adoption

**Row 4:**
- Section 6: Technology Stack
- Section 7: Channels & Devices

**Row 5:**
- Section 8: Key Resources
- Section 9: Cost Structure

**Row 6:**
- Section 10: Revenue Generation
- Section 11: Key Partners

**Row 7:**
- Section 12: MVP-State (full width)

**Below Canvas:**
- Section 14: Value Dimensions (Customer a-e, Brand f-k, Business l-o)

---

## 📊 Data Model

### TypeScript Interfaces

```typescript
// /data/immersive-experience-types.ts

export type ExperienceType = 
  | 'entertainment' 
  | 'shopping' 
  | 'social_interaction' 
  | 'edutainment' 
  | 'assistance' 
  | 'gaming' 
  | 'wellbeing';

export type LifecyclePhase = 
  | 'become_aware' 
  | 'purchase' 
  | 'wait' 
  | 'use' 
  | 'stay_loyal';

export interface ImmersiveBarometer {
  position: number; // 0-100 (0=real world, 100=virtual world)
}

export interface ExperienceDimension {
  type: ExperienceType;
  reach: number; // 0-100 (0=niche, 100=mainstream)
  lifecycle_phases: LifecyclePhase[]; // Which phases affected
}

export interface ValueDimensionScore {
  // Customer Impact (a-e)
  eliminates_pain: number; // 0-5
  increases_convenience: number; // 0-5
  increases_personalization: number; // 0-5
  increases_efficiency: number; // 0-5
  delights_innovation: number; // 0-5
  
  // Brand Impact (f-k)
  omnichannel_integration: number; // 0-5
  brand_values_alignment: number; // 0-5
  competitor_differentiation: number; // 0-5
  positive_brand_perception: number; // 0-5
  increases_loyalty: number; // 0-5
  improves_positioning: number; // 0-5
  
  // Business Impact (l-o)
  improves_targeting: number; // 0-5
  data_driven_decisions: number; // 0-5
  creates_revenue: number; // 0-5
  reaches_new_groups: number; // 0-5
}

export interface ValueDimensionSummary {
  customer_impact: number; // average of a-e
  brand_impact: number; // average of f-k
  business_impact: number; // average of l-o
  overall_score: number; // average of all three
  weak_dimensions: string[]; // Dimensions scoring < 3.0
}

export interface ImmersiveExperienceCanvas {
  id: string;
  startup_id: string;
  
  // 12 Main Sections
  use_case_name: string;
  use_case_description: string;
  to_be_journey: string;
  customer_segments: string;
  customer_adoption: string;
  technology_stack: string;
  channels_devices: string;
  key_resources: string;
  cost_structure: string;
  revenue_generation: string;
  key_partners: string;
  mvp_state: string;
  
  // Special Elements
  immersive_barometer: ImmersiveBarometer;
  experience_dimension: ExperienceDimension;
  value_dimensions: ValueDimensionScore;
  value_summary: ValueDimensionSummary;
  
  // Metadata
  source_lean_canvas: boolean;
  source_value_proposition: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface AISuggestion {
  id: string;
  dimension: 'customer' | 'brand' | 'business';
  weak_criterion: string;
  suggestion_text: string;
  priority: 'high' | 'medium' | 'low';
}
```

---

## 🎨 Components Architecture

### Component Breakdown

```
/app/immersive-experience-canvas/
├── page.tsx                              # Main page (3-panel layout)
├── components/
│   ├── ThreeStepsCard.tsx               # Left panel - 3 steps
│   ├── ImmersiveBarometerCard.tsx       # Left panel - real↔virtual slider
│   ├── ExperienceDimensionCard.tsx      # Left panel - type + reach
│   ├── ImportActionsCard.tsx            # Left panel - import buttons
│   ├── CanvasSection.tsx                # Reusable section component
│   ├── ValueDimensionsPanel.tsx         # 15 criteria scoring (a-o)
│   ├── ValueScoringCard.tsx             # Right panel - summary scores
│   ├── WeakDimensionsCard.tsx           # Right panel - gaps list
│   ├── SuggestionsCard.tsx              # Right panel - AI suggestions
│   └── ImpactReportCard.tsx             # Right panel - generate report
```

### Component Responsibilities

**1. ThreeStepsCard.tsx**
- Visual representation of 3-step process
- Highlight current step (Ideate & Validate)
- Brief description of each step

**2. ImmersiveBarometerCard.tsx**
- Slider from Real World (0) to Virtual World (100)
- Visual indicator dot on slider
- Label: "Does the use case take place in the real or rather virtual world?"

**3. ExperienceDimensionCard.tsx**
- Dropdown: Experience Type (7 options)
- Slider: Reach (Niche 0 → Mainstream 100)
- Checkbox group: Customer Lifecycle Phases (5 options)

**4. CanvasSection.tsx**
- Props: `number`, `title`, `value`, `placeholder`, `fullWidth?`
- Text area for input
- Character count
- Auto-resize
- Section number badge

**5. ValueDimensionsPanel.tsx**
- 3 groups: Customer (a-e), Brand (f-k), Business (l-o)
- Each criterion: 0-5 star rating
- Calculate averages per dimension
- Display dimension scores

**6. ValueScoringCard.tsx**
- Customer Impact score (0-5)
- Brand Impact score (0-5)
- Business Impact score (0-5)
- Overall score
- Color coding: <2.5 red, 2.5-3.5 amber, >3.5 green

**7. WeakDimensionsCard.tsx**
- List dimensions scoring < 3.0
- Highlight specific criteria (a-o)
- Link to Value Dimensions panel
- "Improve Dimension" action

**8. SuggestionsCard.tsx**
- AI suggestions for weak dimensions
- Priority badges (high/medium/low)
- "Apply Suggestion" buttons
- Context from weak scores

**9. ImpactReportCard.tsx**
- Generate comprehensive impact report
- Export as PDF
- Share link
- Preview report

---

## 🎨 UI/UX Specifications

### Design Tokens (match lean-canvas-v4 style)

**Colors:**
- Canvas background: `bg-white`
- Section borders: `border-[#E8E6E1]`
- Active section: `border-[#0d5f4e]`
- Weak dimension: `border-[#DC2626]` + `bg-[#FEF2F2]`
- Strong dimension: `border-[#0d5f4e]` + `bg-[#E8F4F1]`

**Typography:**
- Page title: Georgia serif, 32px, light
- Section titles: 14px, medium, uppercase
- Section numbers: 12px, bold, in circle badge
- Input text: 14px, gray-900

**Spacing:**
- Panel padding: 24px
- Section gap: 16px
- Input padding: 12px

### 12-Section Grid Layout

**Desktop (>1024px):**
```
┌─────────┬─────────┐
│  1 (50%)│  2 (50%)│
├─────────┴─────────┤
│     3 (100%)      │
├─────────┬─────────┤
│  4 (50%)│  5 (50%)│
├─────────┼─────────┤
│  6 (50%)│  7 (50%)│
├─────────┼─────────┤
│  8 (50%)│  9 (50%)│
├─────────┼─────────┤
│ 10 (50%)│ 11 (50%)│
├─────────┴─────────┤
│    12 (100%)      │
└───────────────────┘
```

**Tablet (<1024px):**
- Stack all sections vertically
- Full width for all

### Immersive Barometer UI

```
┌────────────────────────────────────┐
│  Immersive Barometer               │
├────────────────────────────────────┤
│                                    │
│  Real World   ◐───●───○   Virtual  │
│       0       25  50  75     100   │
│                                    │
│  [Current position: 50]            │
└────────────────────────────────────┘
```

### Value Dimensions Scoring UI

```
┌────────────────────────────────────┐
│  Value Dimensions                  │
├────────────────────────────────────┤
│                                    │
│  CUSTOMER IMPACT (a-e)             │
│  a) Eliminates pain: ★★★★☆ 4/5     │
│  b) Convenience:     ★★★☆☆ 3/5     │
│  c) Personalization: ★★★★★ 5/5     │
│  d) Efficiency:      ★★☆☆☆ 2/5     │
│  e) Delight:         ★★★★☆ 4/5     │
│  ────────────────────────────────  │
│  Average: 3.6/5 (Strong) ✓         │
│                                    │
│  BRAND IMPACT (f-k)                │
│  f) Omnichannel:     ★★☆☆☆ 2/5     │
│  ... (6 criteria)                  │
│  Average: 2.8/5 (Weak) ⚠           │
│                                    │
│  BUSINESS IMPACT (l-o)             │
│  ... (4 criteria)                  │
│  Average: 3.5/5 (Strong) ✓         │
└────────────────────────────────────┘
```

---

## 🔄 Data Flow

### Initialization Flow

```
User opens /immersive-experience-canvas
    ↓
Check if canvas exists
    ↓
    NO → Empty state: "Start by defining your XR use case"
    ↓
    YES → Load existing canvas
        ↓
        Display 12 sections with saved values
        ↓
        Display Immersive Barometer position
        ↓
        Display Experience Dimension settings
        ↓
        Calculate Value Dimension scores (a-o)
        ↓
        Calculate summary (Customer/Brand/Business)
        ↓
        Identify weak dimensions (< 3.0)
        ↓
        Generate AI suggestions for weak areas
```

### Edit Flow

```
User edits any section / slider / score
    ↓
Auto-save to database (debounced 500ms)
    ↓
If Value Dimension score changed:
    ↓
    Recalculate dimension averages
    ↓
    Recalculate overall score
    ↓
    Update weak dimensions list
    ↓
    Regenerate AI suggestions
    ↓
    Update color coding (red/amber/green)
```

### AI Suggestions Flow

```
Calculate Value Dimension averages
    ↓
Identify weak dimensions (< 3.0)
    ↓
For each weak criterion:
    ↓
    Generate context-aware suggestion
    ↓
    Priority: High if avg < 2.0, Medium if 2.0-3.0
    ↓
    Link suggestion to specific section (1-12)
    ↓
Display in right panel
    ↓
[Apply Suggestion] → Pre-fill section with suggested text
```

---

## 🎯 Value Dimension Criteria Definitions

### Customer Impact (a-e)

| Criterion | Question | Example (AR Try-On) |
|-----------|----------|---------------------|
| a) Eliminates pain points | Does it remove friction? | No more ordering wrong sizes |
| b) Increases convenience | Is it easier than alternatives? | Try clothes without undressing |
| c) Increases personalization | Is it tailored to the individual? | Recommendations based on body type |
| d) Increases efficiency | Does it save time/effort? | Skip fitting room lines |
| e) Delights innovation | Is it surprisingly good? | See yourself in outfit instantly |

### Brand Impact (f-k)

| Criterion | Question | Example (AR Try-On) |
|-----------|----------|---------------------|
| f) Omnichannel integration | Works across touchpoints? | In-store + mobile app |
| g) Brand values alignment | Fits brand promise? | Innovation-forward fashion brand |
| h) Competitor differentiation | Unique vs competitors? | First in market with AR mirrors |
| i) Positive perception | Improves brand image? | Seen as tech leader |
| j) Increases loyalty | Makes customers stick? | Exclusive tech experience |
| k) Improves positioning | Strengthens market position? | Premium, innovative brand |

### Business Impact (l-o)

| Criterion | Question | Example (AR Try-On) |
|-----------|----------|---------------------|
| l) Improves targeting | Better audience segmentation? | Identify tech-savvy shoppers |
| m) Data-driven decisions | Generates actionable insights? | Track which items tried most |
| n) Creates revenue | Direct revenue impact? | Increased conversion rate |
| o) Reaches new groups | Expands customer base? | Attract younger demographics |

---

## ✅ Acceptance Criteria

### Functional Requirements
- [ ] Load/create Immersive Experience Canvas
- [ ] Display 12-section grid layout
- [ ] Edit all 12 sections inline
- [ ] Auto-save on change (debounced)
- [ ] Immersive Barometer slider (0-100)
- [ ] Experience Type dropdown (7 options)
- [ ] Reach slider (niche 0 → mainstream 100)
- [ ] Customer Lifecycle checkboxes (5 phases)
- [ ] Value Dimensions scoring (15 criteria, 0-5 stars each)
- [ ] Calculate Customer Impact average (a-e)
- [ ] Calculate Brand Impact average (f-k)
- [ ] Calculate Business Impact average (l-o)
- [ ] Calculate overall score
- [ ] Identify weak dimensions (< 3.0)
- [ ] Generate AI suggestions for weak areas
- [ ] [Import from Lean Canvas] button
- [ ] [Import from Value Proposition] button
- [ ] [Generate Impact Report] export to PDF

### Design Requirements
- [ ] 3-panel layout (Context | Canvas | AI)
- [ ] Match Deloitte Digital template structure
- [ ] Use beige/cream/emerald color system
- [ ] Responsive: works on mobile/tablet/desktop
- [ ] Color-coded scores: red (<2.5), amber (2.5-3.5), green (>3.5)
- [ ] Visual Immersive Barometer with dot indicator
- [ ] Star ratings for Value Dimensions
- [ ] Smooth slider interactions

### Performance Requirements
- [ ] Auto-save completes within 200ms
- [ ] Score recalculation <100ms
- [ ] Smooth slider drag (60fps)

---

## 🚀 Implementation Phases

### Phase 1: Data Layer (1-2 hours)
- [ ] Create `/data/immersive-experience-types.ts`
- [ ] Create `/data/immersive-experience-data.ts` (mock data)
- [ ] Implement value dimension calculation functions
- [ ] Test score calculations with sample data

### Phase 2: Left Panel Components (2 hours)
- [ ] Create `ThreeStepsCard.tsx`
- [ ] Create `ImmersiveBarometerCard.tsx` (slider)
- [ ] Create `ExperienceDimensionCard.tsx` (type + reach)
- [ ] Create `ImportActionsCard.tsx`
- [ ] Test interactivity

### Phase 3: Canvas Section Component (1-2 hours)
- [ ] Create `CanvasSection.tsx` (reusable)
- [ ] Add auto-resize text area
- [ ] Add character count
- [ ] Add section number badge
- [ ] Test with sample content

### Phase 4: Main Canvas Grid (2 hours)
- [ ] Create main page layout (3-panel)
- [ ] Implement 12-section grid
- [ ] Wire up all sections with data
- [ ] Add auto-save logic
- [ ] Test responsive layout

### Phase 5: Value Dimensions Scoring (2-3 hours)
- [ ] Create `ValueDimensionsPanel.tsx`
- [ ] Implement star rating component (0-5)
- [ ] Add 15 criteria (a-o) grouped by dimension
- [ ] Calculate averages in real-time
- [ ] Display dimension summaries
- [ ] Test score calculations

### Phase 6: Right Panel Intelligence (1-2 hours)
- [ ] Create `ValueScoringCard.tsx` (summary)
- [ ] Create `WeakDimensionsCard.tsx` (gaps)
- [ ] Create `SuggestionsCard.tsx` (AI suggestions)
- [ ] Create `ImpactReportCard.tsx` (export)
- [ ] Wire up to value calculations

### Phase 7: Integration & Polish (1 hour)
- [ ] Add to DashboardLayout sidebar
- [ ] Add route to App.tsx
- [ ] Test navigation
- [ ] Add loading states
- [ ] Add empty states
- [ ] Update documentation

**Total Estimated Time:** 10-14 hours

---

## 📚 References

### Official Template
- **File:** `lean/canvas/deloitte-digital-immersive-experience-canvas (1).pdf`
- **File (pages 4):** `lean/canvas/deloitte-digital-immersive-experience-canvas (1)-pages-4.pdf`
- **Source:** Deloitte Consulting Pty Ltd | Copyright © 2025
- **Authors:** Neil Edion, Tatjana Fahrner, Tabia Kürschner
- **Team:** Customer Experience & Applied Design

### Related Screens
- Lean Canvas V4: `/app/lean-canvas-v4/` (import source)
- Value Proposition Canvas: `/app/value-proposition/` (import source)
- Opportunity Canvas: `/app/opportunity-canvas/` (related strategy tool)

### Design Consistency
- Follow same 3-panel pattern as Value Proposition Canvas
- Use same color system: beige/cream + emerald/sage
- Match DashboardLayout header/sidebar
- Use same AI panel style as other LEAN tools

---

## 🎯 Success Metrics

**User Goal:** Evaluate XR/AR/VR use case viability across 3 dimensions

**Measure Success:**
- All three dimensions (Customer, Brand, Business) score >3.0
- Weak dimensions identified and addressed
- MVP-State section completed with actionable next steps
- Impact report generated and shared with stakeholders

**Red Flags:**
- Any dimension scores <2.0 → fundamental value gap
- Customer Impact <3.0 → users won't adopt
- Business Impact <3.0 → won't generate ROI
- Brand Impact <3.0 → damages brand equity

---

## ✅ Status

**Current Status:** 📝 Specification Complete  
**Next Step:** Implement Phase 1 (Data Layer)  
**Blocked By:** None  
**Dependencies:** None (standalone canvas)

---

**Last Updated:** February 10, 2026  
**Owner:** StartupAI Core Team  
**Reviewers:** Product, Design, Engineering
