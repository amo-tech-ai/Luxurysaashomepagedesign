# Validator Report Dashboard – 3-Panel Wireframe

**Document Version:** 1.0  
**Last Updated:** February 8, 2026  
**Purpose:** Low-fidelity wireframe specification for validation report dashboard

---

## Layout Overview

**3-Panel Architecture:**  
- **Left Panel:** Navigation / Section List (Fixed)
- **Main Panel:** Section Summaries (Never Changes)
- **Right Panel:** Additional Details (Slides in on demand)

**Critical Rule:** The right panel is **additive only**. It never replaces or modifies main panel content.

---

## ASCII Wireframe – Desktop View

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                             │
│ [Logo] Validation Report          Score: 62/100  [CAUTION]  [✓ AI Verified]       │
└────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────┬────────────────────────────────────────────┬─────────────────────┐
│ LEFT PANEL   │ MAIN PANEL (SUMMARY)                        │ RIGHT PANEL         │
│ Navigation   │ Content NEVER changes                       │ Additional Details  │
│              │                                            │ (slides in)         │
├──────────────┼────────────────────────────────────────────┼─────────────────────┤
│              │                                            │                     │
│ Sections     │ ┌────────────────────────────────────────┐ │ [Hidden by default] │
│ ────────     │ │ Problem · Clarity               ⓘ      │ │                     │
│ ▸ Problem    │ │                                        │ │ OR when clicked:    │
│   Customer   │ │ Travelers experience "mid-trip pivot   │ │                     │
│   Market Size│ │ chaos" when plans fail due to weather, │ │ Additional Details  │
│   Competition│ │ closures, or preference changes.        │ │ ─────────────────  │
│   Risks      │ │                                        │ │ This expands on the │
│   MVP Scope  │ │ Severity: 8/10  Frequency: 7/10        │ │ summary shown in    │
│   Next Steps │ │ Urgency: 9/10                          │ │ the main column.    │
│   Scores     │ └────────────────────────────────────────┘ │                     │
│   Technology │                                            │ MORE DETAIL         │
│   Revenue    │ ┌────────────────────────────────────────┐ │ Root cause: trust   │
│   Team       │ │ Customer · Profile              ⓘ      │ │ breakdown during    │
│   Financials │ │                                        │ │ disruptions when    │
│              │ │ Premium travelers (35-55, $150K+       │ │ users need rapid    │
│              │ │ income) who value spontaneity and      │ │ replanning help.    │
│              │ │ trust during trips.                     │ │                     │
│              │ │                                        │ │ WHY THIS MATTERS    │
│              │ │ Willingness: $15-30/trip               │ │ Drives adoption and │
│              │ │ Frequency: 2-3x/year                   │ │ willingness to pay  │
│              │ │                                        │ │ premium pricing.    │
│              │ │                                        │ │                     │
│              │ └────────────────────────────────────────┘ │ RISKS & GAPS        │
│              │                                            │ • No live validation│
│              │ ┌────────────────────────────────────────┐ │ • Heavy API reliance│
│              │ │ Market · Opportunity            ⓘ      │ │ • User trust fragile│
│              │ │                                        │ │                     │
│              │ │ TAM: $4.15B                            │ │ VALIDATE NEXT       │
│              │ │ SAM: $1.0B                             │ │ 1. 100-venue audit  │
│              │ │ SOM: $500M                             │ │ 2. WhatsApp test    │
│              │ │                                        │ │ 3. Beta user recruit│
│              │ └────────────────────────────────────────┘ │                     │
│              │                                            │                     │
│              │ [9 more section cards continue...]        │                     │
│              │                                            │                     │
└──────────────┴────────────────────────────────────────────┴─────────────────────┘
```

---

## Panel Specifications

### 1. Left Panel – Navigation (224px wide)

**Purpose:** Section navigation and orientation

**Content:**
```
┌──────────────┐
│ SECTIONS     │
│              │
│ ▸ Problem    │ ← Active (highlighted)
│   Customer   │
│   Market Size│
│   Competition│
│   Risks      │
│   MVP Scope  │
│   Next Steps │
│   Scores     │
│   Technology │
│   Revenue    │
│   Team       │
│   Financials │
└──────────────┘
```

**Behavior:**
- Fixed width: 224px
- Scrollable if needed
- Active section highlighted (emerald background)
- Hover state: light beige background
- Click → updates right panel content
- Always visible (desktop)

---

### 2. Main Panel – Section Summaries (Flexible width, max 768px)

**Purpose:** High-level overview of all sections (NEVER changes)

**Section Card Structure:**
```
┌────────────────────────────────────────┐
│ Section Title                    ⓘ     │ ← Info button (top-right)
│                                        │
│ [2-3 sentence summary text]            │
│                                        │
│ [Metrics row or key data points]       │
└────────────────────────────────────────┘
```

**Example Card – Problem Clarity:**
```
┌────────────────────────────────────────┐
│ Problem · Clarity                ⓘ     │
│                                        │
│ Travelers experience "mid-trip pivot   │
│ chaos" when plans fail due to weather, │
│ closures, or preference changes,       │
│ requiring rapid replanning with        │
│ trusted real-time information.         │
│                                        │
│ Severity: 8/10  Frequency: 7/10       │
│ Urgency: 9/10                          │
└────────────────────────────────────────┘
```

**Example Card – Customer Profile:**
```
┌────────────────────────────────────────┐
│ Customer · Profile               ⓘ     │
│                                        │
│ Premium leisure travelers (35-55,      │
│ $150K+ income) who value spontaneity   │
│ and trust. Experience mid-trip chaos   │
│ 2-3 times per year.                    │
│                                        │
│ Willingness: $15-30/trip               │
│ Frequency: 2-3x/year                   │
└────────────────────────────────────────┘
```

**Example Card – Market Opportunity:**
```
┌────────────────────────────────────────┐
│ Market · Opportunity             ⓘ     │
│                                        │
│ TAM: $4.15B                            │
│ SAM: $1.0B                             │
│ SOM: $500M                             │
│                                        │
│ Based on premium travel planning       │
│ market with real-time replanning need. │
└────────────────────────────────────────┘
```

**Example Card – Competition:**
```
┌────────────────────────────────────────┐
│ Competition · Landscape          ⓘ     │
│                                        │
│ 4 major competitors: Google Maps,      │
│ Mindtrip ($20M raised), Expedia,       │
│ Layla (AI assistant).                  │
│                                        │
│ [EXTREME] Score: 35/100                │
└────────────────────────────────────────┘
```

**Behavior:**
- Scrollable vertically
- All 12 cards always visible
- Cards stack vertically with spacing
- Info button (ⓘ) in top-right corner
- Clicking card or info button → opens right panel
- Active card: emerald border + shadow
- Hover: subtle border color change + shadow

**12 Section Cards:**
1. Problem Clarity
2. Customer Profile
3. Market Opportunity
4. Competition Landscape
5. Risk Analysis
6. MVP Roadmap
7. Action Plan (Next Steps)
8. Scoring Matrix
9. Technology Stack
10. Revenue Model
11. Team & Hiring
12. Financial Projections

---

### 3. Right Panel – Additional Details (384px wide)

**Purpose:** Deep-dive insights, risks, and validation steps

**Panel Header:**
```
┌─────────────────────┐
│ [Problem Clarity]   │ ← Badge showing selected section
│ Additional Details  │
│ ─────────────────── │
│ This expands on the │
│ summary shown in    │
│ the main column.    │
└─────────────────────┘
```

**Content Structure (4 blocks):**
```
┌─────────────────────┐
│ MORE DETAIL         │
│ ───────────────     │
│ [Short paragraph    │
│ explaining root     │
│ cause, context, or  │
│ deeper analysis]    │
│                     │
│ WHY THIS MATTERS    │
│ ───────────────     │
│ [Single sentence or │
│ short paragraph     │
│ explaining strategic│
│ importance]         │
│                     │
│ RISKS & GAPS        │
│ ───────────────     │
│ • Risk point 1      │
│ • Risk point 2      │
│ • Risk point 3      │
│                     │
│ VALIDATE NEXT       │
│ ───────────────     │
│ 1. Action step 1    │
│ 2. Action step 2    │
│ 3. Action step 3    │
└─────────────────────┘
```

**Example Content – Problem Clarity:**
```
┌─────────────────────────────────┐
│ [Problem Clarity]               │
│ Additional Details              │
│ ─────────────────────────────── │
│                                 │
│ MORE DETAIL                     │
│ Travelers face failures during  │
│ weather, venue closures, and    │
│ preference changes. Today they  │
│ manually cross-check Maps,      │
│ reviews, and social apps. This  │
│ is the moment trust is either   │
│ earned or lost during the trip. │
│                                 │
│ WHY THIS MATTERS                │
│ This is the moment trust is     │
│ either earned or lost. Solving  │
│ it drives adoption and premium  │
│ pricing willingness.            │
│                                 │
│ RISKS & GAPS                    │
│ • Trust fails if venue is wrong │
│   once                          │
│ • Heavy API dependency          │
│ • No live user validation data  │
│                                 │
│ VALIDATE NEXT                   │
│ 1. 100-venue audit for accuracy │
│ 2. WhatsApp concierge MVP       │
│ 3. Beta user recruitment (50)   │
└─────────────────────────────────┘
```

**Example Content – Market Sizing:**
```
┌─────────────────────────────────┐
│ [Market Opportunity]            │
│ Additional Details              │
│ ─────────────────────────────── │
│                                 │
│ MORE DETAIL                     │
│ TAM reflects global premium     │
│ travel planning market. SAM     │
│ narrows to high-income travelers│
│ needing real-time replanning.   │
│ SOM assumes premium adoption in │
│ urban travel hubs.              │
│                                 │
│ WHY THIS MATTERS                │
│ Overestimating SAM inflates     │
│ revenue expectations and        │
│ investor risk.                  │
│                                 │
│ RISKS & GAPS                    │
│ • Assumes premium travelers will│
│   pay repeatedly                │
│ • Limited data on annual trip   │
│   frequency                     │
│ • May overestimate conversion   │
│                                 │
│ VALIDATE NEXT                   │
│ 1. Test $5-10 per-trip pricing  │
│ 2. Measure repeat usage across  │
│    3 trips                      │
│ 3. Survey 100 target customers  │
└─────────────────────────────────┘
```

**Behavior:**
- Hidden by default
- Slides in from right when triggered
- Fixed width: 384px
- Scrollable vertically
- Updates when different section clicked
- Stays open until user closes or clicks another section
- Close button (optional): X in top-right corner

---

## Interaction Rules

### Primary Interactions

**1. Click Left Panel Section:**
```
User clicks "Customer" in left panel
  ↓
Left panel: "Customer" highlighted
  ↓
Right panel: Slides in with Customer details
  ↓
Main panel: Unchanged (all cards still visible)
```

**2. Click Info Button (ⓘ):**
```
User clicks ⓘ on "Market Opportunity" card
  ↓
Right panel: Slides in with Market details
  ↓
Left panel: "Market Size" highlighted
  ↓
Main panel: Card border turns emerald (active state)
  ↓
Main panel: All other cards still visible
```

**3. Click Different Section:**
```
Right panel is open showing "Problem"
  ↓
User clicks "Competition" in left panel
  ↓
Right panel: Content updates to Competition details
  ↓
Left panel: "Competition" now highlighted
  ↓
Main panel: Still showing all 12 summary cards
```

### Visual States

**Left Panel States:**
- Default: Gray text, white background
- Hover: Light beige background
- Active: Emerald background, white text

**Main Panel Card States:**
- Default: White card, gray border
- Hover: Beige border, subtle shadow
- Active (selected): Emerald border, larger shadow

**Info Button States:**
- Default: Light beige background, gray icon
- Hover: Emerald background, emerald icon
- Active: Deep emerald background, white icon

**Right Panel States:**
- Hidden: Translated off-screen (right)
- Visible: Slides in from right (300ms transition)
- Content: Fades in after slide animation

---

## Mobile View (< 768px)

**Layout Adaptation:**

```
┌─────────────────────────────┐
│ HEADER                      │
│ [☰] Validation Report       │
│ Score: 62/100               │
└─────────────────────────────┘

┌─────────────────────────────┐
│ MAIN PANEL                  │
│ (Full width)                │
│                             │
│ ┌─────────────────────────┐ │
│ │ Problem · Clarity    ⓘ  │ │
│ │                         │ │
│ │ [Summary text...]       │ │
│ │                         │ │
│ │ Severity: 8/10          │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ Customer · Profile   ⓘ  │ │
│ │ [Summary text...]       │ │
│ └─────────────────────────┘ │
│                             │
│ [More cards...]             │
└─────────────────────────────┘

When ⓘ clicked:

┌─────────────────────────────┐
│ DRAWER (slides up from     │
│ bottom 80% of screen)       │
│                             │
│ [✕] Additional Details      │
│                             │
│ MORE DETAIL                 │
│ [Content...]                │
│                             │
│ WHY THIS MATTERS            │
│ [Content...]                │
│                             │
│ RISKS & GAPS                │
│ • Point 1                   │
│ • Point 2                   │
│                             │
│ VALIDATE NEXT               │
│ 1. Action 1                 │
│ 2. Action 2                 │
└─────────────────────────────┘
```

**Mobile Behavior:**
- Left panel: Hidden, accessible via hamburger menu (☰)
- Main panel: Full width, scrollable
- Right panel: Becomes bottom drawer (slides up)
- Drawer: 80% screen height, dimmed overlay behind
- Close: Tap X button or tap overlay outside drawer

---

## Visual Hierarchy

**Typography Scale:**
```
Header (Report Title):     18px, medium weight
Section Card Title:        14px, medium weight
Body Text (Summary):       14px, regular weight
Metrics Text:              12px, regular weight
Right Panel Headers:       12px, medium weight, uppercase
Right Panel Body:          14px, regular weight
```

**Spacing:**
```
Panel Padding:             24px
Card Padding:              20px
Card Margin (vertical):    16px
Section Spacing:           24px
Line Height:               1.5
```

**Colors (Neutral SaaS Palette):**
```
Background (Main):         #FAF9F7 (beige/cream)
Background (Panels):       #FFFFFF (white)
Background (Cards):        #FFFFFF (white)
Border (Default):          #E5E7EB (light gray)
Border (Hover):            #6b9d89 (sage green)
Border (Active):           #0d5f4e (emerald)
Text (Primary):            #3B5F52 (dark emerald)
Text (Secondary):          #6B7280 (gray)
Accent (Primary):          #0d5f4e (emerald)
Accent (Secondary):        #6b9d89 (sage green)
Highlight (Info):          #DCF9E3 (light emerald)
```

**Shadows:**
```
Card Default:              0 1px 2px rgba(0,0,0,0.05)
Card Hover:                0 4px 8px rgba(0,0,0,0.08)
Card Active:               0 8px 16px rgba(13,95,78,0.12)
Right Panel:               -4px 0 16px rgba(0,0,0,0.08)
```

---

## Component Breakdown

### Left Panel – Navigation List

```
┌──────────────┐
│ SECTIONS     │ ← Label (12px, uppercase, gray)
│              │
│ [Icon] Text  │ ← Navigation item (14px)
│ [Icon] Text  │
│ [Icon] Text  │
│     ▴        │
│   Active     │ ← Emerald background, white text
│     ▾        │
│ [Icon] Text  │
│ [Icon] Text  │
└──────────────┘
```

**Each Item:**
- Icon: 16px, left-aligned
- Text: 14px, 8px padding left of icon
- Height: 40px
- Padding: 12px horizontal, 8px vertical
- Hover: Background changes to #F5F3EF
- Active: Background changes to #0d5f4e, text to white

---

### Main Panel – Summary Card

```
┌────────────────────────────────────────┐
│ Title                            [ⓘ]   │ ← 14px bold, 20px padding
│                                        │
│ Summary text in 2-3 sentences that     │ ← 14px regular, gray
│ provides high-level overview of the    │
│ validation findings for this section.  │
│                                        │
│ Metric 1: Value  Metric 2: Value      │ ← 12px, spaced horizontally
└────────────────────────────────────────┘
```

**Card Specs:**
- Width: Flexible (max 768px)
- Padding: 20px
- Border: 1px solid
- Border-radius: 12px
- Margin-bottom: 16px
- Min-height: 120px

**Info Button:**
- Size: 24px × 24px
- Position: Top-right corner
- Border-radius: 50% (circle)
- Icon: 14px
- Background (default): #F5F3EF
- Background (hover): #DCF9E3
- Background (active): #0d5f4e

---

### Right Panel – Detail View

```
┌─────────────────────────────────────┐
│ [Badge: Section Name]               │ ← 12px, emerald badge
│ Additional Details                  │ ← 18px, medium weight
│ ───────────────────────────────     │
│ This expands on the summary shown   │ ← 12px, gray
│ in the main column.                 │
│                                     │
│ ─────────────────────────────────── │ ← Divider
│                                     │
│ MORE DETAIL                         │ ← 12px, uppercase, gray
│ [Paragraph text explaining root     │ ← 14px, regular
│ cause, context, or analysis]        │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ WHY THIS MATTERS                │ │ ← Highlighted card
│ │ [Single sentence strategic      │ │   (light emerald bg)
│ │ importance explanation]         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ RISKS & GAPS                        │ ← 12px, uppercase, gray
│ • Bullet point 1                    │ ← 14px, with bullet
│ • Bullet point 2                    │
│ • Bullet point 3                    │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ VALIDATE NEXT                   │ │ ← Dark emerald card
│ │ 1. Action step with description │ │   (white text)
│ │ 2. Action step with description │ │
│ │ 3. Action step with description │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Panel Specs:**
- Width: 384px (fixed)
- Padding: 24px
- Background: White
- Shadow: -4px 0 16px rgba(0,0,0,0.08)
- Transition: transform 300ms ease-out

**Content Block Spacing:**
- Margin between blocks: 24px
- Padding inside cards: 16px
- Line height: 1.5

---

## Responsive Breakpoints

**Desktop (≥ 1024px):**
- 3-panel layout visible
- Left panel: 224px
- Main panel: Flexible (max 768px)
- Right panel: 384px

**Tablet (768px – 1023px):**
- 2-panel layout
- Left panel: Hidden (toggle via icon)
- Main panel: Full width
- Right panel: Overlays main panel (modal-like)

**Mobile (< 768px):**
- 1-panel layout
- Main panel: Full width
- Left panel: Hamburger menu
- Right panel: Bottom drawer (slides up)

---

## Accessibility Notes

**Keyboard Navigation:**
- Tab through left panel sections
- Tab through info buttons on cards
- Arrow keys to navigate left panel
- Escape to close right panel
- Focus visible indicators (2px emerald outline)

**Screen Reader:**
- Section navigation announced as "Navigation menu"
- Active section announced: "Currently viewing Problem Clarity"
- Info buttons: "View additional details for [Section Name]"
- Right panel: "Additional details panel opened"
- Panel close: "Additional details panel closed"

**ARIA Labels:**
```html
<aside aria-label="Section navigation">
  <button aria-current="true">Problem</button>
</aside>

<main aria-label="Validation summary">
  <article>
    <h3>Problem Clarity</h3>
    <button aria-label="View additional details for Problem Clarity">ⓘ</button>
  </article>
</main>

<aside aria-label="Additional details" aria-hidden="false">
  <button aria-label="Close details panel">×</button>
</aside>
```

---

## Animation Specifications

**Right Panel Slide-In:**
```
Initial state: transform: translateX(100%)
Final state:   transform: translateX(0)
Transition:    300ms ease-out
```

**Card Hover:**
```
Initial state: scale(1), shadow(sm)
Hover state:   scale(1.01), shadow(md)
Transition:    200ms ease-out
```

**Info Button Hover:**
```
Initial state: background(#F5F3EF)
Hover state:   background(#DCF9E3)
Transition:    150ms ease-in-out
```

**Active Border:**
```
Initial state: border(1px, #E5E7EB)
Active state:  border(2px, #0d5f4e)
Transition:    200ms ease-out
```

---

## Content Guidelines

**Main Panel Summary Cards:**
- Length: 2-3 sentences (max 100 words)
- Tone: Factual, direct, consulting-style
- Metrics: 2-4 key data points
- No jargon or acronyms without context

**Right Panel – More Detail:**
- Length: 1 paragraph (50-80 words)
- Focus: Root cause, context, or analysis
- Tone: Explanatory, slightly deeper

**Right Panel – Why This Matters:**
- Length: 1 sentence or 1 short paragraph
- Focus: Strategic importance or business impact
- Tone: Persuasive, outcome-focused

**Right Panel – Risks & Gaps:**
- Count: 2-4 bullet points
- Format: • [Risk description in 10-15 words]
- Tone: Cautionary, realistic

**Right Panel – Validate Next:**
- Count: 1-3 action items
- Format: 1. [Concrete action with timeframe if applicable]
- Tone: Prescriptive, actionable

---

## Implementation Notes

**Tech Stack:**
- React (functional components with hooks)
- Tailwind CSS v4 (utility-first styling)
- Motion/React (animations)
- TypeScript (type safety)

**State Management:**
```typescript
const [selectedSection, setSelectedSection] = useState<SectionId>('problem-clarity');
const [rightPanelOpen, setRightPanelOpen] = useState(false);
```

**Key Components:**
```
<ValidatorReportDashboard>
  <Header />
  <div className="flex">
    <LeftPanel 
      sections={sections}
      activeSection={selectedSection}
      onSectionClick={handleSectionClick}
    />
    <MainPanel 
      sections={sections}
      onInfoClick={handleInfoClick}
      activeSection={selectedSection}
    />
    <RightPanel 
      isOpen={rightPanelOpen}
      content={rightPanelData[selectedSection]}
      onClose={handleClosePanel}
    />
  </div>
</ValidatorReportDashboard>
```

---

## Design Tokens

```css
/* Colors */
--bg-primary: #FAF9F7;
--bg-secondary: #FFFFFF;
--bg-tertiary: #F5F3EF;
--border-default: #E5E7EB;
--border-hover: #6b9d89;
--border-active: #0d5f4e;
--text-primary: #3B5F52;
--text-secondary: #6B7280;
--accent-primary: #0d5f4e;
--accent-secondary: #6b9d89;
--highlight: #DCF9E3;

/* Spacing */
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;

/* Typography */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--line-height: 1.5;

/* Layout */
--panel-left-width: 224px;
--panel-right-width: 384px;
--content-max-width: 768px;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 16px rgba(13,95,78,0.12);
--shadow-panel: -4px 0 16px rgba(0,0,0,0.08);

/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 50%;

/* Transitions */
--transition-fast: 150ms ease-in-out;
--transition-base: 200ms ease-out;
--transition-slow: 300ms ease-out;
```

---

## Summary

**Core Principles:**
1. **Main panel NEVER changes** – It's the constant reference point
2. **Right panel is additive** – It supplements, never replaces
3. **Clear visual hierarchy** – Typography, spacing, and color guide the eye
4. **Progressive disclosure** – Summary first, details on demand
5. **Mobile-first interactions** – Drawer pattern for small screens

**UX Goals:**
- Reduce cognitive load (see summary, drill down when needed)
- Maintain context (main content always visible)
- Enable comparison (scroll main panel while details open)
- Provide actionable insights (validation steps in every section)

**Design Philosophy:**
- Clean, professional SaaS aesthetic
- BCG/McKinsey consulting report inspiration
- Luxury feel through restraint and spacing
- Trust signals through structure and typography

---

**End of Wireframe Specification**
