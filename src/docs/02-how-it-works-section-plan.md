# HOW IT WORKS — Scroll-Driven Interaction Plan
## StartupAI Adaptation

**Pattern Source:** Breef.co scroll-triggered narrative  
**StartupAI Context:** From strategy to execution in one guided flow  
**Design Goal:** Show real product screens, not illustrations — prove the system works

---

## Section Overview

### Core Concept
A single fixed app window on the right displays 4 real StartupAI screens that crossfade as users scroll. Each screen demonstrates one intelligent action happening automatically, reinforcing the "AI operating system" positioning.

**User Experience:**
- Left side: Static narrative explaining the workflow
- Right side: Living product demonstration
- Scroll controls pace and revelation
- Cursor choreography shows AI intelligence in action

**Why This Works for StartupAI:**
- Proves product sophistication (not vaporware)
- Shows AI doing the heavy lifting
- Builds confidence through progressive disclosure
- Mirrors proven Breef.co UX pattern

---

## Visual Style Alignment

### Color System
- **Section background:** Soft grey (#f5f5f3)
- **App window:** White with subtle border
- **Active step indicator:** Deep emerald green (#0d5f4e)
- **Inactive steps:** Gray with reduced opacity
- **Cursor:** Dark neutral with emerald green click ripple
- **AI indicators:** Sage green accents (#6b9d89)

### Typography
- **Eyebrow:** Sans-serif, uppercase, emerald green
- **Headline:** Serif, large scale, dark gray
- **Step titles:** Sans-serif, bold when active
- **Screen UI:** Modern sans-serif throughout

### Layout Specifications
- **Left column:** 40% width, sticky positioning
- **Right column:** 60% width, fixed app window
- **Section height:** 4 viewport heights (scrollable)
- **Step distribution:** 25% scroll per step

---

## Screen-by-Screen Plan

### Screen 1 — Startup Profile Setup
**Scroll Range:** 0% - 25%

#### Left Column Content
**Eyebrow:** HOW IT WORKS (emerald green, 12px, uppercase)

**Headline:** From strategy to daily execution, in one guided flow.

**Active Step:**
1. **Profile** — Tell us about your startup once. We do the rest.

**Inactive Steps:**
2. Analysis (gray, 40% opacity)
3. Pitch Deck (gray, 40% opacity)
4. Execution (gray, 40% opacity)

#### Right Panel — Startup Profile Wizard

**Wireframe:**
```
┌─────────────────────────────────────────┐
│ ●●●         StartupAI                   │
├─────────────────────────────────────────┤
│                                         │
│  Startup Profile Wizard                 │
│  Tell us about your company             │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Startup Name                    │   │
│  │ VertexAI                        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Website URL              [◐]    │   │
│  │ https://vertex-ai.io            │   │
│  └─────────────────────────────────┘   │
│                  ↑ cursor clicks here   │
│  ┌─────────────────────────────────┐   │
│  │ Industry                 [✓]    │   │
│  │ AI Infrastructure       (auto)  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Stage                    [✓]    │   │
│  │ Pre-seed                (auto)  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ◦ ◦ ● ◦  [Continue →]                 │
│                                         │
└─────────────────────────────────────────┘
```

**Screen Elements:**
- Card title: "Startup Profile Wizard" (serif, 20px)
- Subtitle: "Tell us about your company" (gray, 14px)
- Input field: Startup Name (pre-filled: "VertexAI")
- Input field: Website URL (active state, cursor target)
- Input field: Industry (auto-filled with checkmark + "auto" label)
- Input field: Stage (auto-filled with checkmark + "auto" label)
- Progress dots: 4 dots (third dot active = emerald fill)
- Button: "Continue →" (emerald green, bottom right)

**Cursor Animation Sequence:**
1. Cursor appears center screen (fade in, 200ms)
2. Moves to Website URL field (curved path, 600ms)
3. Clicks into field (ripple effect, emerald green glow)
4. Types animation (letters appear one by one)
5. Industry field auto-fills with slide-in + checkmark
6. Stage field auto-fills with slide-in + checkmark
7. Pause (400ms settle time)

**Design Prompt:**
> Create a clean startup profile form on white card background. Show a website URL input field with cursor clicking into it. Other fields (Industry, Stage) should auto-populate with subtle emerald green checkmarks and "auto" labels appearing beside them. Include small AI sparkle icons next to auto-filled fields. Use hairline borders, generous padding, and modern sans-serif typography. Progress indicator shows step 3 of 4 active.

---

### Screen 2 — AI Analysis & Intelligence
**Scroll Range:** 25% - 50%

#### Left Column Content
**Active Step:**
2. **Analysis** — AI turns your info into clarity and direction.

**Inactive Steps:**
1. Profile (gray, 40% opacity)
3. Pitch Deck (gray, 40% opacity)
4. Execution (gray, 40% opacity)

#### Right Panel — AI Analysis Dashboard

**Wireframe:**
```
┌─────────────────────────────────────────┐
│ ●●●         StartupAI                   │
├─────────────────────────────────────────┤
│                                         │
│  Startup Readiness Analysis             │
│  Based on your profile                  │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Readiness Score                  │ │
│  │                                   │ │
│  │       72/100                      │ │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░  (72%)    │ │
│  │                                   │ │
│  │  ● Market Validation — Weak       │ │
│  │  ● Traction Metrics — Missing     │ │
│  │  ● Pricing Strategy — Undefined   │ │
│  └───────────────────────────────────┘ │
│                      ↑ cursor hovers    │
│  ┌───────────────────────────────────┐ │
│  │  AI Intelligence                  │ │
│  │                                   │ │
│  │  What this means:                 │ │
│  │  Your technical foundation is     │ │
│  │  strong, but market positioning   │ │
│  │  needs clarity.                   │ │
│  │                                   │ │
│  │  Next step: [tooltip]             │ │
│  │  → Define pricing tiers           │ │
│  │    (Increases score +18 pts)      │ │
│  └───────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Screen Elements:**
- Card title: "Startup Readiness Analysis" (serif, 20px)
- Subtitle: "Based on your profile" (gray, 14px)
- Score display: Large "72/100" (serif, 48px)
- Progress bar: 72% filled (emerald green gradient)
- Gap list (3 items):
  - Market Validation — Weak (orange dot)
  - Traction Metrics — Missing (orange dot)
  - Pricing Strategy — Undefined (orange dot)
- AI Intelligence panel (right side, soft grey background):
  - "What this means" section with contextual explanation
  - "Next step" with recommended action
  - Impact preview: "+18 pts" (emerald green)
  - Tooltip appears on cursor hover

**Cursor Animation Sequence:**
1. Progress bar animates from 0% → 72% (800ms)
2. Gap cards appear one by one (stagger 200ms each)
3. Cursor moves to "Next step" card (600ms)
4. Hovers over recommended action
5. Tooltip expands showing impact (300ms)
6. Emerald green glow highlights the card
7. Pause (400ms)

**Design Prompt:**
> Design a startup readiness dashboard with a large circular or linear progress indicator showing 72/100 score. Display detected gaps as cards with warning dots (orange/amber). Include an AI Intelligence side panel with soft grey background explaining the analysis and suggesting next actions. Show a tooltip appearing on hover with impact metrics. Use emerald green for positive indicators and progress bars. Clean, data-driven aesthetic with generous whitespace.

---

### Screen 3 — Pitch Deck Generator
**Scroll Range:** 50% - 75%

#### Left Column Content
**Active Step:**
3. **Pitch Deck** — Investor-ready materials generated automatically.

**Inactive Steps:**
1. Profile (gray, 40% opacity)
2. Analysis (gray, 40% opacity)
4. Execution (gray, 40% opacity)

#### Right Panel — Pitch Deck Builder

**Wireframe:**
```
┌─────────────────────────────────────────────────────┐
│ ●●●         StartupAI                               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Pitch Deck Editor  [Generated from Profile ✓]     │
│                                                     │
│  ┌─────────┐  ┌───────────────────────────────┐   │
│  │ Slides  │  │                               │   │
│  ├─────────┤  │   Market Opportunity          │   │
│  │ 1. Prob │  │                               │   │
│  │ 2. Soln │  │   TAM: $47B                   │   │
│  │ 3. Mrkt │◀─│   SAM: $8.2B                  │   │
│  │ 4. Prod │  │   SOM: $420M                  │   │
│  │ 5. Trac │  │                               │   │
│  │ 6. Team │  │   Sources: [i] Gartner 2025   │   │
│  │ 7. Ask  │  │            [i] IDC Research   │   │
│  │         │  │                               │   │
│  │ [+Add]  │  │   ↑ cursor highlights this    │   │
│  └─────────┘  └───────────────────────────────┘   │
│                                                     │
│  [Generate Deck]  [Export PDF]  [Share →]          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Screen Elements:**
- Card title: "Pitch Deck Editor" (serif, 20px)
- Badge: "Generated from Profile ✓" (emerald background, white text, top right)
- Left sidebar: Slide list (7 slides numbered)
  - Problem
  - Solution
  - Market (active/highlighted)
  - Product
  - Traction
  - Team
  - Ask
- Main canvas: Selected slide preview (Market Opportunity)
  - TAM/SAM/SOM breakdown
  - Source citations with info icons
  - Clean data visualization
- Bottom actions:
  - "Generate Deck" button (emerald)
  - "Export PDF" button (outlined)
  - "Share →" button (outlined)

**Cursor Animation Sequence:**
1. "Generate Deck" button glows (emerald pulse)
2. Cursor moves to button and clicks (600ms)
3. Slides populate top-to-bottom in sidebar (stagger 150ms each)
4. Slide 3 (Market) auto-selects
5. Main canvas crossfades to Market slide (400ms)
6. Cursor moves to citation icon (curved path, 600ms)
7. Hovers to reveal source tooltip
8. Citation highlights with emerald underline
9. Pause (400ms)

**Design Prompt:**
> Create a pitch deck builder interface with a left sidebar showing a numbered list of 7 slides and a large preview canvas on the right. The Market slide should be active, showing TAM/SAM/SOM figures with citation icons. Include a "Generated from Profile" badge in emerald green at the top. Show the cursor hovering over a citation icon with a tooltip revealing the data source. Use clean, editorial typography with serif headlines and sans-serif body. Add subtle emerald green accents for active states.

---

### Screen 4 — Investor CRM & Execution
**Scroll Range:** 75% - 100%

#### Left Column Content
**Active Step:**
4. **Execution** — Execution and relationships in one place.

**Inactive Steps:**
1. Profile (gray, 40% opacity)
2. Analysis (gray, 40% opacity)
3. Pitch Deck (gray, 40% opacity)

#### Right Panel — Investor CRM Dashboard

**Wireframe:**
```
┌───────────────────────────────────────────────────────────┐
│ ●●●         StartupAI                                     │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  Investor Pipeline                      [+ Add Investor]  │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │Interested│  │Meeting   │  │Active    │  │Closed    │ │
│  ├──────────┤  ├──────────┤  ├──────────┤  ├──────────┤ │
│  │          │  │          │  │          │  │          │ │
│  │ Sarah K. │  │ Mark T.  │  │ Lisa C.  │  │          │ │
│  │ Accel    │  │ a16z     │→ │ Sequoia  │  │          │ │
│  │ $2M      │  │ $5M      │  │ $3M      │  │          │ │
│  │ AI: 68%  │  │ AI: 82%  │  │ AI: 91%  │  │          │ │
│  │          │  │          │  │          │  │          │ │
│  │          │  │          │  │          │  │          │ │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘ │
│                    ↑ cursor drags this card              │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ AI Suggested Actions                                │ │
│  │                                                     │ │
│  │ ✓ Follow up with Sarah K.                          │ │
│  │   Last contact: 4 days ago                         │ │
│  │   → Send updated deck (traction slide)             │ │
│  │                                                     │ │
│  │ ◦ Schedule check-in with Mark T.                   │ │
│  │   Meeting was 2 weeks ago                          │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Screen Elements:**
- Card title: "Investor Pipeline" (serif, 20px)
- Button: "+ Add Investor" (top right, outlined)
- Kanban board (4 columns):
  - Interested (1 card)
  - Meeting (1 card)
  - Active (1 card) ← cursor drag target
  - Closed (empty)
- Investor cards show:
  - Name and firm
  - Deal size
  - AI probability percentage (emerald if >80%, gray if <70%)
- AI Suggested Actions panel (bottom):
  - Task 1: Checked (completed, emerald checkmark)
  - Task 2: Unchecked (pending, hollow circle)
  - Context and recommended action for each

**Cursor Animation Sequence:**
1. Cursor appears on Mark T. card (Meeting column)
2. Begins drag gesture (card lifts with shadow)
3. Moves card right toward Active column (800ms curved path)
4. Drops card into Active column (smooth landing, 300ms)
5. Card settles into position
6. AI Suggested Actions panel updates:
   - New task appears: "Send updated deck to Mark"
   - Slides in from bottom (400ms)
   - Emerald green glow highlights new task
7. Pause (400ms)

**Design Prompt:**
> Design a Kanban-style investor pipeline with 4 columns (Interested, Meeting, Active, Closed). Each investor card shows name, firm, deal amount, and an AI-generated probability score. Use emerald green for high-probability scores. Show a card being dragged from Meeting to Active column with a subtle shadow lift effect. Include an AI Suggested Actions panel at the bottom with checkmarks for completed tasks and recommended next steps. Clean, modern interface with generous card spacing and hairline column dividers.

---

## Motion & Timing Specifications

### Scroll-to-State Mapping
| Scroll % | Active Step | Panel State | Cursor Action |
|----------|-------------|-------------|---------------|
| 0-25%    | 1. Profile  | Startup Form | Click URL → auto-fill |
| 25-50%   | 2. Analysis | Readiness Score | Hover action card |
| 50-75%   | 3. Pitch Deck | Deck Builder | Click generate → highlight cite |
| 75-100%  | 4. Execution | Investor CRM | Drag deal card |

### Animation Timing Standards
- **Panel crossfade:** 400ms, ease-in-out
- **Cursor movement:** 600-800ms, curved bezier paths
- **Click ripple:** 300ms, emerald green (#0d5f4e) at 20% opacity
- **Auto-fill animations:** 200ms stagger per field
- **Card appearances:** 150-200ms stagger for lists
- **Hover tooltips:** 200ms fade in
- **Drag gestures:** 800ms with shadow lift
- **Pause/settle:** 400ms after each interaction

### Easing Functions
- **Content transitions:** cubic-bezier(0.4, 0.0, 0.2, 1)
- **Cursor paths:** cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Progress bars:** cubic-bezier(0.65, 0.0, 0.35, 1)

---

## Component Hierarchy

### Reusable Components Needed
- **SectionContainer** — Full-height scroll wrapper (~4 viewports)
- **StickyLeftColumn** — Step list with active state management
- **FixedRightPanel** — App window shell (white card, subtle shadow)
- **StepIndicator** — Number, title, description with emerald active marker
- **AnimatedCursor** — Custom cursor with path animation and ripple
- **CrossfadeContainer** — Wrapper for panel state transitions
- **ProgressDots** — 4-dot indicator with emerald active state
- **AIBadge** — Small emerald "auto" or "AI" labels
- **TooltipOverlay** — Hover-triggered contextual information

### Screen-Specific Components

#### Screen 1
- StartupProfileCard
- AutoFillInputField (with checkmark animation)
- ContinueButton

#### Screen 2
- ReadinessScoreDisplay (large number + progress bar)
- GapDetectionCard (warning indicators)
- AIIntelligencePanel (recommendations)
- ImpactTooltip

#### Screen 3
- SlideListSidebar (7 slides, numbered)
- DeckCanvas (preview area)
- CitationIcon (with source tooltip)
- GenerateDeckButton
- ExportActions

#### Screen 4
- KanbanColumn (4 columns)
- InvestorCard (draggable)
- ProbabilityBadge (color-coded by AI score)
- AITaskList (suggested actions)
- DragDropGhost (shadow effect during drag)

---

## Mobile Adaptation Plan

### Breakpoint: < 768px

**Layout Changes:**
- Remove sticky/fixed positioning
- Stack left and right content vertically
- Each step becomes a full-screen section
- Step order: Eyebrow → Headline → Step 1 content → App window 1 → Step 2...

**Interaction Changes:**
- **Disable cursor animations** completely
- Show final state of each screen (pre-completed interactions)
  - Screen 1: Fields already auto-filled
  - Screen 2: Score already displayed, tooltip open
  - Screen 3: Deck already generated, citation visible
  - Screen 4: Card already in Active column, task added
- Replace scroll-triggered transitions with discrete sections
- Add optional swipe gestures between steps

**What's Preserved:**
- 4-step narrative order
- Screen content and UI elements
- Emerald green accent system
- Text hierarchy

**What's Removed:**
- Sticky left column
- Fixed right panel
- Cursor choreography
- Scroll-based state sync
- Parallax effects

---

## Success Criteria Checklist

### Visual Alignment
- [ ] Matches StartupAI color system (emerald/sage green accents only)
- [ ] Uses serif headlines + sans-serif body (brand typography)
- [ ] Maintains luxury, calm aesthetic (no aggressive animations)
- [ ] White app window on soft grey background
- [ ] Hairline borders instead of heavy shadows

### Functional Requirements
- [ ] Scroll divides into 4 equal zones (25% each)
- [ ] Active step indicator uses emerald green marker
- [ ] Panel states crossfade smoothly (400ms)
- [ ] Cursor appears/disappears at section boundaries
- [ ] Each cursor action tells a clear story

### Narrative Flow
- [ ] Screen 1 shows AI understanding your startup
- [ ] Screen 2 shows AI analyzing and recommending
- [ ] Screen 3 shows AI generating deliverables
- [ ] Screen 4 shows AI managing execution
- [ ] Users understand "AI does the work" message

### Performance
- [ ] Smooth 60fps scrolling (no jank)
- [ ] Cursor paths feel natural (curved, not robotic)
- [ ] Timing feels premium (not rushed, not sluggish)
- [ ] Prefers-reduced-motion support (disable cursor)

### Accessibility
- [ ] Section has descriptive aria-label
- [ ] Active step marked with aria-current
- [ ] Skip link provided for keyboard users
- [ ] Content readable without animations

---

## Design System Integration

### Typography Usage
- **Eyebrow:** Sans-serif, 12px, uppercase, emerald (#0d5f4e), tracking-wider
- **Section headline:** Serif, 48-60px, tight leading, dark gray
- **Step titles:** Sans-serif, 20px, bold when active
- **Step descriptions:** Sans-serif, 16px, gray-600
- **Screen UI headers:** Serif, 20px
- **Screen UI body:** Sans-serif, 14-16px

### Spacing Scale
- **Section vertical padding:** 32-40 (py-32 lg:py-40)
- **Left/right column gap:** 24 (gap-24)
- **Card internal padding:** 8-12 (p-8 lg:p-12)
- **Step list spacing:** 8-12 between items

### Color Token Reference
- **Emerald primary:** #0d5f4e (buttons, active states, progress)
- **Sage secondary:** #6b9d89 (subtle indicators, AI badges)
- **Off-white BG:** #fafaf8 (unused here, soft grey instead)
- **Soft grey BG:** #f5f5f3 (section background)
- **White cards:** #ffffff (app window, panels)
- **Border light:** #e5e7eb (hairline borders)
- **Text primary:** #1a1a1a (headlines)
- **Text secondary:** #6b7280 (descriptions, inactive)

---

## Implementation Priority Order

### Phase 1 — Structure (No Code, Planning Only)
1. Define scroll container height and zone thresholds
2. Map step activation to scroll percentages
3. Plan panel state content for all 4 screens
4. Document transition timing between states

### Phase 2 — Static Layout
5. Build sticky left column with step list
6. Build fixed right panel (app window shell)
7. Create all 4 screen states as separate components
8. Add emerald green accent system

### Phase 3 — Scroll Interaction
9. Implement scroll detection (IntersectionObserver)
10. Wire scroll position to active step
11. Add panel crossfade transitions
12. Test smooth state changes

### Phase 4 — Cursor Choreography
13. Create cursor component with path animation
14. Define target coordinates for each screen
15. Implement click/hover/drag animations
16. Add emerald green ripple effects
17. Sync cursor timing with panel transitions

### Phase 5 — Polish
18. Adjust timing for premium feel
19. Add appear/disappear on section entry/exit
20. Test on multiple scroll speeds
21. Optimize performance (60fps target)

### Phase 6 — Mobile
22. Detect breakpoint and disable complex features
23. Stack layout vertically
24. Show final states (no animations)
25. Test touch scrolling

---

## Key Differences from Breef Reference

| Aspect | Breef.co | StartupAI |
|--------|----------|-----------|
| **Accent color** | Orange (#F97316) | Emerald green (#0d5f4e) |
| **Screen 1 focus** | Budget selection | AI auto-fill intelligence |
| **Screen 2 focus** | Agency pitches | AI analysis & recommendations |
| **Screen 3 focus** | Agency selection | AI-generated pitch deck |
| **Screen 4 focus** | Project files | Investor CRM + execution |
| **Cursor color** | Orange ripple | Emerald green ripple |
| **Typography** | Sans-serif only | Serif headlines + sans body |
| **Card style** | Soft shadows | Hairline borders |
| **Animation tone** | Playful | Calm, premium |
| **Target user** | Project managers | Startup founders |
| **Value prop** | Find agencies | AI does the work |

---

## Wireframe Summary

### Visual Flow Diagram
```
SCROLL START (0%)
│
├─ [STEP 1 ACTIVE] ──────────────────────────────┐
│  Profile                                       │
│  "Tell us once, we do the rest"               │
│                                                │
│  APP WINDOW: Startup Form                     │
│  Cursor: Clicks URL → auto-fills fields       │
│                                                │
├─ [25% SCROLL THRESHOLD] ───────────────────────┤
│                                                │
├─ [STEP 2 ACTIVE] ──────────────────────────────┤
│  Analysis                                      │
│  "AI turns info into clarity"                 │
│                                                │
│  APP WINDOW: Readiness Score                  │
│  Cursor: Hovers action card → tooltip         │
│                                                │
├─ [50% SCROLL THRESHOLD] ───────────────────────┤
│                                                │
├─ [STEP 3 ACTIVE] ──────────────────────────────┤
│  Pitch Deck                                    │
│  "Investor-ready materials auto-generated"    │
│                                                │
│  APP WINDOW: Deck Builder                     │
│  Cursor: Clicks generate → highlights cite    │
│                                                │
├─ [75% SCROLL THRESHOLD] ───────────────────────┤
│                                                │
├─ [STEP 4 ACTIVE] ──────────────────────────────┤
│  Execution                                     │
│  "Relationships and tasks in one place"       │
│                                                │
│  APP WINDOW: Investor CRM                     │
│  Cursor: Drags card → AI suggests task        │
│                                                │
└─ SCROLL END (100%)                            │
```

---

## Final Notes for Implementation

### What Makes This Work
1. **Real product UI** — Not illustrations, actual app screens
2. **AI as the actor** — Cursor shows intelligence doing work
3. **Progressive trust** — Each step builds confidence
4. **Proven pattern** — Breef.co validated this UX works
5. **Brand alignment** — Emerald green, serif/sans mix, calm timing

### What to Avoid
- Overly fast animations (feels rushed, not premium)
- Orange or playful colors (wrong brand tone)
- Heavy shadows or 3D effects (not architectural)
- Too many cursor actions per screen (overwhelming)
- Linear cursor paths (feels robotic)

### Testing Checklist
- [ ] Does scroll feel smooth at different speeds?
- [ ] Do cursor movements feel human and intentional?
- [ ] Is the "AI doing work" message clear?
- [ ] Can users understand value in 10 seconds?
- [ ] Does it work on Safari, Chrome, Firefox?
- [ ] Does mobile version degrade gracefully?
- [ ] Is reduced-motion preference respected?

---

**Document Status:** Planning complete, ready for implementation  
**Next Step:** Build static layout → Add scroll logic → Implement cursor system  
**Estimated Complexity:** High (cursor choreography is most complex part)
