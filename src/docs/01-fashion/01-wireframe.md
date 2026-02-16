# Fashion AI Website — High-Fidelity Wireframe & UX Blueprint

**Project:** StartupAI Fashion Intelligence Platform  
**Document Type:** Master Wireframe & Design Specification  
**Version:** 1.0.0  
**Date:** February 14, 2026  
**Status:** Blueprint — Ready for Implementation

---

## 📋 Document Contents

1. Wireframe (layout system)
2. Design system (style guide)
3. Component system
4. Slide-by-slide layout blueprint
5. Responsive behavior
6. Interaction & motion notes

---

# 1️⃣ MASTER WIREFRAME STRUCTURE

## Canvas Setup

**Desktop Frame**

* Width: 1440px
* Content max-width: 1200px
* 12-column grid
* 80px margins
* 24px gutter
* 8pt spacing system

**Section Height**

* Each "slide" = 100vh (full-screen section)
* Internal padding: 120px top / 120px bottom

---

## Page Layout Hierarchy

```
[Sticky Minimal Header]
[Hero Section – Slide 1]
[Section 2 – Growth Chart]
[Section 3 – Consumer Stats]
[Section 4 – Gen Z Flow]
[Section 5 – Value Chain Diagram]
[Section 6 – ROI Dashboard]
[Section 7 – Startup Map]
[Section 8 – Segment Growth]
[Section 9 – AI Evolution Timeline]
[Section 10 – Future Outlook]
[Elegant Footer]
```

**Navigation:**

* Subtle vertical progress indicator (right side)
* Slide index numbers (01–10)

---

# 2️⃣ STYLE GUIDE — LUXURY AI AESTHETIC

## 🎨 Color Palette (Luxury Intelligence)

**Background Base**

* Primary Canvas: `#F1EEEA` (Light beige/cream)
* Deep Contrast: `#12211D` (Dark forest)

**Primary Accent**

* Deep Forest Green: `#0E3E1B`
* Muted Green-Teal: `#2A4E45`

**Secondary Accent**

* Soft Lavender: `#CB9FD2`
* Muted Coral: `#FFC9C1`
* Slate Blue-Grey: `#697485`

**Text**

* Primary Text: `#212427`
* Light Text (on dark): `#F1EEEA`

**Background Style:**

* Light sections: `#F1EEEA` with subtle texture
* Dark contrast panels: `#12211D` for emphasis
* Soft shadows and depth layering

---

## 🖋 Typography System

**Headlines (Elegant Serif)**

* Font: Playfair Display / Canela / Editorial New
* H1: 72px
* H2: 56px
* H3: 40px

**Body (Modern Sans)**

* Font: Inter / Suisse Int'l / Neue Haas Grotesk
* Body Large: 20px
* Body: 16px
* Caption: 13px

**Typography Hierarchy Rule:**

* 1 hero statement per section
* 1 supporting subline
* 3–6 data points max
* White space > density

---

# 3️⃣ COMPONENT SYSTEM

Create reusable components in Figma:

### KPI Card (Primary)

* Background: Graphite `#1A1F2A`
* Radius: 24px
* Padding: 40px
* Large number (48–64px)
* Micro-label in uppercase
* Subtle gold top border

**Example:**
```
┌─────────────────────────┐
│ $2.4T                   │
│ GLOBAL MARKET SIZE      │
│                         │
│ 5.2% CAGR growth        │
└─────────────────────────┘
```

---

### Glass Chart Panel

* Soft blur effect
* 10% white overlay
* Fine 1px border
* Glow behind key data

**Visual:**
```
╔═══════════════════════╗
║ ░░ Chart Content ░░   ║
║                       ║
║   [Graph/Visual]      ║
║                       ║
╚═══════════════════════╝
```

---

### Data Pill

* Rounded 999px
* Background: Emerald 10%
* Text: Emerald

**Example:**
```
( +67% YoY Growth )
```

---

### Flow Node

* Circle 120px
* Thin gold outline
* Connected by 2px line
* Hover glow animation

**Visual:**
```
    ○───────○───────○
  Node 1  Node 2  Node 3
```

---

### Timeline Module

* Horizontal bar
* Year markers
* AI stage indicators

**Layout:**
```
2018 ─────●───── 2023 ─────●───── 2025 ─────●───── 2030
      Predict     Generate     Agents     Autonomous
```

---

# 4️⃣ SLIDE-BY-SLIDE FIGMA LAYOUT

---

## SLIDE 1 — HERO

### Wireframe Layout

**Left (6 columns):**

* H1: "AI Is Reshaping a $2 Trillion Industry"
* Supporting subtext
* 3 key metrics inline

**Right (6 columns):**

* Animated vertical growth graph
* Soft emerald glow background

**Design Detail:**
* Large transparent "01" behind content
* Emerald accent line under headline

---

## SLIDE 2 — STRATEGIC FORCES GRID

### Layout:

* Title centered
* 4 equal cards in row (3 cols each)

**Each card contains:**

* Icon (top)
* Large stat (center)
* 2-line explanation (bottom)

**Hover effect:**

* Glow
* Micro-lift (4px elevation)

**Grid:**
```
┌─────────┬─────────┬─────────┬─────────┐
│ CARD 1  │ CARD 2  │ CARD 3  │ CARD 4  │
│         │         │         │         │
│  Icon   │  Icon   │  Icon   │  Icon   │
│  66%    │  48.5%  │  $400M  │  4,700% │
│  Label  │  Label  │  Label  │  Label  │
└─────────┴─────────┴─────────┴─────────┘
```

---

## SLIDE 3 — CONSUMER SHIFT DASHBOARD

### Layout:

**Left (7 columns):**

* Bar chart (discount sensitivity)
* Y-axis: % consumers
* X-axis: Categories

**Right (5 columns):**

* 3 stacked KPI cards
  * 48.5% — "Wait for sales"
  * 66% — "Discount conditioned"
  * 44.5% — "AI discovery"

**Bottom:**

* Insight statement in serif italic
* "The modern consumer expects algorithmic precision in every shopping moment."

---

## SLIDE 4 — GEN Z FLOW DIAGRAM

### Center Layout:

**Horizontal flow:**
```
Social Media → AI Discovery → Peer Validation → AI Search → Purchase
```

**Design:**
* Nodes circular (120px)
* Connected with thin gold lines (2px)
* Each node has icon + label
* Active state glows emerald

**Background:**
* Soft gradient wave effect
* Darker top, lighter bottom

---

## SLIDE 5 — VALUE CHAIN MAP

### Full-width horizontal diagram

**8-stage pipeline:**

1. Design
2. Material Sourcing
3. Manufacturing
4. Inventory
5. Pricing
6. Marketing
7. Sales
8. Post-Sale

**Each stage:**

* Small icon
* Label
* AI impact badge (e.g., "+34% efficiency")

**Interaction:**
* Hover reveals micro panel (tooltip)
* Shows AI transformation detail

**Visual:**
```
┌──┐   ┌──┐   ┌──┐   ┌──┐   ┌──┐   ┌──┐   ┌──┐   ┌──┐
│ 1│───│ 2│───│ 3│───│ 4│───│ 5│───│ 6│───│ 7│───│ 8│
└──┘   └──┘   └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
```

---

## SLIDE 6 — ROI IMPACT DASHBOARD

### Two-column comparison:

**Left:** Before AI  
**Right:** After AI

**Metrics displayed:**

* Conversion Rate
* Margin %
* Inventory Waste
* CAC (Customer Acquisition Cost)

**Design:**
* Use split-screen layout
* Vertical divider line (1px gold)
* Emerald glow on "After AI" side
* Red/neutral on "Before AI" side

**Layout:**
```
┌─────────────────┬─────────────────┐
│   BEFORE AI     │    AFTER AI     │
├─────────────────┼─────────────────┤
│ Conversion 2.1% │ Conversion 4.8% │
│ Margin    34%   │ Margin    47%   │
│ Waste     18%   │ Waste     4%    │
│ CAC      $48    │ CAC      $22    │
└─────────────────┴─────────────────┘
```

---

## SLIDE 7 — STARTUP ECOSYSTEM MAP

### Grid of AI startup categories:

**4 Main Categories:**

1. Design AI
2. Commerce AI
3. Pricing AI
4. Resale AI

**Each cluster:**

* Bubble system (varying sizes)
* Company logos/names
* $400M+ funding stat top-right corner

**Visual Style:**
* Dark background
* Emerald bubbles
* Gold connecting lines
* Glassmorphism effect

**Layout:**
```
┌──────────────┬──────────────┐
│  Design AI   │  Commerce AI │
│  ○ ○○ ○     │   ○○ ○ ○○   │
│  $400M+      │   $650M+     │
├──────────────┼──────────────┤
│  Pricing AI  │  Resale AI   │
│   ○○ ○ ○    │  ○ ○○ ○○    │
│   $280M+     │   $520M+     │
└──────────────┴──────────────┘
```

---

## SLIDE 8 — GROWTH SEGMENT STACK

### Stacked vertical bars:

**Segments (top to bottom):**

1. Jewellery — 8.7% CAGR
2. Footwear — 6.2% CAGR
3. Resale — 11.3% CAGR
4. Mid-market — 5.4% CAGR

**Each bar:**

* CAGR % (large)
* AI relevance tag (pill)
* Category name

**Design:**
* Bars grow from left
* Different emerald shades
* Gold accent for highest growth

**Visual:**
```
Jewellery  ████████████████░░░ 8.7%  [AI-Driven]
Footwear   ████████████░░░░░░░ 6.2%  [Emerging]
Resale     ████████████████████ 11.3% [High AI]
Mid-market ██████████░░░░░░░░░ 5.4%  [Traditional]
```

---

## SLIDE 9 — AI EVOLUTION TIMELINE

### Horizontal timeline:

**Years:**
2018 → 2023 → 2025 → 2030

**Stages:**

1. **2018** — Prediction
   * "Basic algorithms forecast trends"
2. **2023** — Generation
   * "AI creates designs, content, recommendations"
3. **2025** — Agents
   * "Autonomous shopping assistants"
4. **2030** — Autonomous Systems
   * "Fully intelligent value chains"

**Each stage:**

* Icon
* Short explanation (1 line)
* Connecting line with progress indicator

**Visual:**
```
2018 ─────●───── 2023 ─────●───── 2025 ─────●───── 2030
      │           │           │           │
   Predict    Generate     Agents    Autonomous
```

---

## SLIDE 10 — FUTURE VISION

### Centered layout:

**H1 (72px serif):**
"Fashion Becomes Intelligence-First"

**Large number (128px):**
$89B
*(AI Market by 2035)*

**Design:**
* Minimal layout
* Heavy white space (80% empty)
* Gold underline accent on headline
* Subtle gradient background
* No distractions

**Layout:**
```
                                        
         Fashion Becomes                
      Intelligence-First                
         ─────────────                  
                                        
             $89B                       
        AI Market by 2035               
                                        
```

---

# 5️⃣ RESPONSIVE DESIGN RULES

## Desktop (1440px)

* 12-column grid
* Full slide experience
* Parallax effects
* Hover interactions

---

## Tablet (1024px)

* 8-column grid
* Cards stack 2 per row
* Charts scale proportionally
* Maintain vertical rhythm

**Changes:**

* 2×2 card grids
* Reduced padding (80px → 60px)
* Smaller typography (scale 0.9)

---

## Mobile (375px)

* Single column
* 80px vertical spacing
* Flow diagrams become vertical stacks
* Timeline becomes vertical scroll

**Maintain:**

* 40px padding minimum
* 1 large stat per viewport
* Readable 16px minimum

**Mobile Transformations:**

* Horizontal flows → Vertical
* 4-column grids → 1-column stack
* Side-by-side → Top/bottom
* Timeline → Vertical with scroll

---

# 6️⃣ INTERACTION & MICRO-ANIMATION

**Philosophy:** Luxury = subtle motion.

## Recommended Animations:

### On Scroll:
* Fade-in stagger (200ms delay between elements)
* Slide up from bottom (40px distance)
* Opacity 0 → 1 (800ms ease-out)

### Charts:
* Line drawing animation (1500ms)
* Bar growth from 0 → 100% (1200ms)
* Number count-up effect (1000ms)

### Hover States:
* Soft glow expansion (300ms)
* Micro-lift 4px (200ms ease)
* Scale 1.02 (300ms)
* Border color shift (400ms)

### Interactive:
* Parallax gradient background (subtle)
* Mouse-follow glow effect on hero
* Progress dot fill on scroll

---

## Motion Specifications:

**Easing:**
* Default: `cubic-bezier(0.4, 0.0, 0.2, 1)`
* Luxury: `cubic-bezier(0.33, 1, 0.68, 1)`

**Duration:**
* Fast: 200ms (hover)
* Standard: 400ms (transitions)
* Slow: 800ms (entrances)

---

## Avoid:

* ❌ Hard shadows
* ❌ Bright neon colors
* ❌ Overloaded motion
* ❌ Bouncing effects
* ❌ Spinning loaders
* ❌ Aggressive pulsing

---

# 7️⃣ UX BEST PRACTICES APPLIED

✅ **Clear visual hierarchy**
* One H1 per section
* Consistent type scale
* Clear information layers

✅ **Data chunking**
* Max 4 items per row
* 3–6 data points per view
* Grouped related content

✅ **Consistent spacing**
* 8pt grid system
* Predictable rhythm
* Vertical spacing: 40/80/120px

✅ **Contrast for readability**
* WCAG AA compliant
* 4.5:1 minimum ratio
* Sufficient color differentiation

✅ **Premium typography pairing**
* Serif headlines (authority)
* Sans body (clarity)
* Monospace data (precision)

✅ **White space dominance**
* 60/40 content-to-space ratio
* Breathing room around elements
* No claustrophobic layouts

✅ **Interactive clarity**
* Obvious hover states
* Clear clickable areas
* Visual feedback on all actions

---

# 8️⃣ COMPONENT LIBRARY CHECKLIST

Create these in Figma before building:

## Layout Components:
- [ ] Full-screen section wrapper
- [ ] 12-column grid system
- [ ] Container (1200px max-width)
- [ ] Sticky header
- [ ] Footer

## Data Components:
- [ ] KPI Card (3 variants)
- [ ] Glass Chart Panel
- [ ] Data Pill
- [ ] Stat Block (large number)
- [ ] Metric Comparison Card

## Navigation Components:
- [ ] Progress Dots (vertical)
- [ ] Back Button
- [ ] Section Anchor Links
- [ ] Scroll Indicator

## Diagram Components:
- [ ] Flow Node (circle)
- [ ] Arrow Connector
- [ ] Timeline Marker
- [ ] Value Chain Stage
- [ ] Bubble (ecosystem map)

## Interactive Components:
- [ ] Hover Glow Effect
- [ ] Tooltip Panel
- [ ] Modal Overlay
- [ ] Expandable Card

---

# 9️⃣ ACCESSIBILITY REQUIREMENTS

## WCAG AA Compliance:

**Color Contrast:**
* Text: 4.5:1 minimum
* Large text (24px+): 3:1 minimum
* UI components: 3:1 minimum

**Keyboard Navigation:**
* Tab order follows visual flow
* Focus indicators (2px emerald ring)
* Skip to content link

**Screen Readers:**
* Semantic HTML structure
* ARIA labels on interactive elements
* Alt text for data visualizations

**Motion:**
* Respect `prefers-reduced-motion`
* No auto-playing animations
* Pausable content

---

# 🔟 FINAL EXPERIENCE GOAL

**The page should feel like:**

> A McKinsey report  
> Meets a luxury fashion house  
> Meets a high-end AI product dashboard

---

## Emotional Tone:

**Elegant.** Calm. **Intelligent.**

**Not loud.** Not crowded. **Not trendy.**

---

## Visual Qualities:

* **Premium** — Feels expensive
* **Intelligent** — Data-driven
* **Calm** — Not overwhelming
* **Confident** — Authoritative
* **Modern** — Contemporary but timeless

---

## User Perception Goals:

1. "This looks professional"
2. "The data is trustworthy"
3. "I understand the insights"
4. "This is beautifully designed"
5. "I want to explore more"

---

# 📊 IMPLEMENTATION CHECKLIST

## Design Phase:
- [ ] Create Figma master file
- [ ] Build component library
- [ ] Design all 10 slides
- [ ] Create responsive variants
- [ ] Document interactions
- [ ] Review with stakeholders

## Development Phase:
- [ ] Set up design system tokens
- [ ] Build component library
- [ ] Implement slide-by-slide
- [ ] Add scroll animations
- [ ] Test responsive behavior
- [ ] Accessibility audit
- [ ] Performance optimization

## Quality Assurance:
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility validation
- [ ] Performance benchmarks
- [ ] User testing
- [ ] Stakeholder approval

---

# 📝 NOTES FOR DEVELOPERS

## Technical Stack Recommendations:

**Framework:**
* React 18+ (with TypeScript)
* Next.js for routing/optimization

**Styling:**
* Tailwind CSS v4 (design tokens)
* CSS Grid for layouts
* Framer Motion for animations

**Charts:**
* Recharts or D3.js
* Custom SVG for diagrams

**Performance:**
* Lazy load sections
* Intersection Observer for animations
* Optimize images (WebP)
* Code splitting

---

## Design Token System:

```typescript
// colors
const colors = {
  midnight: '#0B0D12',
  carbon: '#12151C',
  graphite: '#1A1F2A',
  emerald: '#0E5F4B',
  gold: '#C9A227',
  aiBlue: '#3B82F6',
  softWhite: '#F5F5F7',
  silverGrey: '#AEB4C2',
};

// typography
const typography = {
  serif: 'Playfair Display, serif',
  sans: 'Inter, sans-serif',
  sizes: {
    h1: '72px',
    h2: '56px',
    h3: '40px',
    bodyLarge: '20px',
    body: '16px',
    caption: '13px',
  },
};

// spacing (8pt system)
const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
  xxl: '120px',
};
```

---

# 🎯 SUCCESS METRICS

## Design Quality:
* Visual hierarchy score: 90+/100
* Contrast ratio: WCAG AA compliant
* Component consistency: 100%

## Performance:
* Page load: < 2 seconds
* First Contentful Paint: < 1.5s
* Time to Interactive: < 3s

## User Experience:
* Bounce rate: < 30%
* Avg. time on page: > 3 minutes
* Scroll depth: > 70%

---

**Document Status:** ✅ Complete & Ready for Design  
**Next Step:** Create Figma master file using this blueprint  
**Owner:** Design Team  
**Review Date:** February 14, 2026

---

**© 2026 StartupAI · Fashion Intelligence Platform**