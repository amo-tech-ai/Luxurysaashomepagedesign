# State of Fashion 2026 — Implementation Plan

**Project:** StartupAI Research Visual Intelligence  
**Content Source:** The Business of Fashion × McKinsey & Company  
**Design System:** AI Agents Infographic Style Guide v1.0  
**Target Route:** /state-of-fashion-2026  
**Status:** Planning Phase  
**Date:** February 2026

---

## 1. Executive Summary

### Objective
Transform "The State of Fashion 2026" report into a premium, scroll-driven visual intelligence infographic that follows the established AI Agents style guide while maintaining BCG/McKinsey consulting-grade polish.

### Content Overview
10 strategic themes covering fashion industry transformation:
- Tariff turbulence and supply chain disruption
- AI workforce automation (33% of tasks)
- AI shopping search explosion (4,700% growth)
- Jewellery market growth (4× faster than clothing)
- Smart wearables and fashion-tech convergence
- Wellness integration into brand identity
- Operational efficiency imperatives
- Resale market surge ($317B by 2027)
- Mid-market elevation strategies
- Luxury creative recalibration

### Design Approach
Adapt existing rose/plum color scheme to align with emerald/sage green system while preserving fashion industry sophistication. Apply diagram-first thinking, structured data visualizations, and scroll-driven storytelling.

---

## 2. Color System Adaptation

### Current Fashion 2026 Palette → AI Agents Palette Mapping

**Primary Colors**
- Rose (#6B3A5D) → Emerald Green (#0D5F4E)
- Dark Plum (#4A1E3D) → Dark Emerald (#0E3E1B)
- Rose Light (#C4617A) → Sage Green (#6B9D89)

**Accent Colors (Keep complementary system)**
- Gold (#C4944A) — KEEP (already in AI Agents palette as #C9A54A)
- Coral (#D4614E) — KEEP (already in AI Agents palette as #E8765A)
- Sky (#5B8FD4) — KEEP (matches AI Agents blue)
- Violet (#8B7AC8) — Adjust to match system
- Teal (#3A8A7A) — KEEP (aligned)
- Amber (#D4944E) — KEEP (aligned with gold)

**Backgrounds**
- Dark: #1A0F14 → #0A211F (AI Agents dark)
- Dark variant: #120A0E → #0E1A17
- Dark card: #2A1522 → #162D26
- Cream: #FBF8F6 → #FAF9F7 (AI Agents cream)
- Warm Beige: #F5EDE3 → #F5F3EF
- Off-white: #FAF5F2 → #FAF9F7

**Text Colors**
- Main gray: #1A1918 → #191918 (AI Agents)
- Secondary gray: #7C7D79 (KEEP - matches both systems)

### Section Color Assignments

Based on AI Agents style guide accent system:

1. Tariff Turbulence — Coral (#E8765A) - warnings, disruption
2. Workforce Rewired — Violet (adjusted to system)
3. AI Shopper — Sky Blue (#5B8FD4) - technology, discovery
4. Jewellery Sparkles — Gold (#C9A54A) - luxury, value
5. Smart Frames — Teal - innovation, wearables
6. Wellbeing Era — Emerald (#0D5F4E) - growth, wellness
7. Efficiency Unlocked — Amber - optimization, operations
8. Resale Sprint — Violet - transformation, circular economy
9. Elevation Game — Teal - strategy, positioning
10. Luxury Recalibrated — Gold - premium, craftsmanship

---

## 3. Typography System

### Font Stack (AI Agents Standard)

**Serif — Georgia**
- Hero headlines
- Display numbers/metrics
- Section titles
- Pull quotes

**Sans-Serif — System Stack**
- Body text
- Labels
- Captions
- UI elements

**Monospace (Optional)**
- Data labels
- Source citations
- Technical annotations

### Type Hierarchy

**Hero Section**
- Title: clamp(52px, 10vw, 96px) Georgia Light (-2.5px tracking)
- "When the Rules Change"
- Subtitle: 14-16px sans-serif, 1.9 line-height
- Section label: 8-9px uppercase, +6px tracking

**Section Headers (10 sections)**
- Section number: 40px Georgia Light, 40% opacity (watermark style)
- Section title: clamp(28px, 4.5vw, 52px) Georgia Light
- Subtitle: 16px italic Georgia or sans-serif
- Description: 14-15px sans-serif, 1.85 line-height

**Metric Display**
- Large numbers: 28-64px Georgia Light
- Percentage/unit suffix: Same size or -20%
- Label below: 8-10px uppercase sans-serif, tracked

**Card Content**
- Card title: 16-20px Georgia Medium
- Card body: 11-13px sans-serif, 1.7 line-height
- Card label/tag: 8-9px uppercase, tracked

---

## 4. Layout & Grid Structure

### Container System

**Max Width:** 1200px (AI Agents standard)  
**Horizontal Padding:** 56px desktop, 40px tablet, 24px mobile  
**Section Vertical Padding:** 128px (py-32)

### Grid Layouts by Section

**Hero**
- Single column centered
- Max-width: 760px for text content
- 4-column grid for KPI metrics (responsive to 2-col, 1-col)

**Section 1: Tariff Turbulence**
- 3-column grid for country impact cards
- Full-width diagram card (tariff escalation arc)
- Responsive: 3-col → 2-col → 1-col

**Section 2: Workforce Rewired**
- Weighted 3-column: 1.3fr 1fr 1fr
- Left: Circular progress chart (AI automation potential)
- Middle: Adoption leaders stat card
- Right: Upskilling demand card

**Section 3: AI Shopper**
- 4-column grid for discovery metrics
- Full-width funnel diagram (search volume shift)
- Responsive: 4-col → 2-col → 1-col

**Section 4: Jewellery Sparkles**
- Weighted 3-column: 1fr 1fr 1.3fr
- Right column emphasized with case study

**Section 5: Smart Frames**
- 2-column grid
- Equal weight cards with case studies

**Section 6: Wellbeing Era**
- Tower visualization (3-level maturity model)
- 3-column grid below for supporting metrics

**Section 7: Efficiency Unlocked**
- 3-column grid
- Middle card: Horizontal bar chart
- Left/right: Stat cards with progress bars

**Section 8: Resale Sprint**
- 2-column grid
- Left: Column chart (market trajectory)
- Right: Tower visualization (model spectrum)

**Section 9: Elevation Game**
- Full-width quote block at top
- 3-column grid below for supporting metrics

**Section 10: Luxury Recalibrated**
- Weighted 3-column: 1.3fr 1fr 1fr
- Left: Circular chart (creative director changes)
- Middle/right: Stat cards

**Closing Section**
- Centered layout
- Quote block
- 2-column grid for final quotes
- CTA section (optional)

---

## 5. Component Specifications

### Card System

**Standard Metric Card**
```
┌─────────────────────────────────┐
│ LABEL (8px uppercase, tracked) │
│                                 │
│ 46% (Georgia 28-64px)          │
│                                 │
│ Description text                │
│ (11-13px, 1.7 line-height)     │
│                                 │
│ ▓▓▓▓▓▓▓▓▓░░░░░ Progress bar    │
└─────────────────────────────────┘
```

- Border radius: 20-24px
- Padding: 32-40px
- Background: Accent color with 5-10% opacity
- Border: 1px solid with 20% opacity
- Hover: Lift -4px, shadow increase

**Example Card (with case study)**
```
┌─────────────────────────────────┐
│ LABEL                           │
│ Metric / Title                  │
│ Description                     │
│                                 │
│ ┌─────────────────────────┐    │
│ │ Example box             │    │
│ │ Accent bg, border-left  │    │
│ └─────────────────────────┘    │
└─────────────────────────────────┘
```

- Example box: 10-12px background with accent
- Border-left: 2px solid accent
- Padding: 12-16px
- Border radius: 10-12px

**Tower Level Card**
```
┌──────────────────────────────────┐
│ █ [#] Title                      │
│ │     Description text           │
│ │                                │
└──────────────────────────────────┘
```

- Left accent bar: 3px solid
- Number: 30-32px Georgia in circle or plain
- Progressive width: 100% → 85% → 70% → 55% → 40%
- Gap between levels: 16-20px
- Hover: Translate X +5px

### Data Visualization Components

**1. Progress Bars (Horizontal)**
- Height: 3px
- Background: Accent at 10-15% opacity
- Fill: Solid accent color
- Border radius: Fully rounded
- Animation: Width 0 → target%, 1.2s ease-out
- Trigger: On scroll into view (15-20% threshold)

**2. Circular Progress/Ring Chart**
```
     ⬤ 33%
  ╱       ╲
 │         │ of employee time
  ╲       ╱  automatable by 2030
     ━━━
```

- SVG circle, 220-260px diameter
- Stroke width: 18-20px
- Background ring: 10-15% opacity
- Foreground ring: Solid accent
- Center text: Large serif number + label below
- Animation: stroke-dashoffset, 2s cubic-bezier

**3. SVG Line Chart (Tariff Escalation)**
```
   54%
    ●
   ╱ ╲
  ╱   ╲ 36%
 ╱     ●───
13%
 ●
```

- Curved path using SVG quadratic bezier
- Background track: Light gray, 3px
- Animated path: Accent color, 3px, stroke-dasharray animation
- Data points: Circles 8-10px, filled accent
- Labels: Below points (date), above points (value)
- Annotations: Dotted lines, 9px uppercase labels

**4. Column Chart (Resale Market)**
```
│ $317B
│ ████ 100%
│ ███  81%
│ ██   62%
└─────────────
  2023 2025 2027
```

- Columns: Rounded tops (10px radius)
- Background: Accent at 25-50% opacity (gradient)
- Height animation: 0 → target, 1s ease-out, staggered
- Labels: Above columns (value), below (year)
- Flex/grid layout with gap

**5. Funnel Diagram (Search Volume)**
```
┌──────────────────────┐ 91-93%
│   Traditional        │
└──────────────────────┘
  ┌────────────────┐     6-8%
  │  AI Summaries  │
  └────────────────┘
    ┌──────────┐         1-3%
    │ Gen AI   │
    └──────────┘
```

- Stacked centered boxes
- Progressive width reduction (95% → 60% → 30%)
- Each box: Border-radius 12px, border 1px
- Background: Accent tint
- Number inside: Serif, 20-24px
- Label: 10px below number
- Last box: 2px border for emphasis

**6. Horizontal Bar Chart (Optimization Targets)**
```
Assortment mix   ▓▓▓▓▓▓▓▓▓▓░░░░  50%
Inventory mgmt   ▓▓▓▓▓▓▓▓▓░░░░░  47%
Pricing/promos   ▓▓▓▓▓░░░░░░░░░  33%
```

- 3-column grid: Label (right-align) | Bar | Value
- Label: 11-12px, right-aligned, 90-130px width
- Bar container: Height 26px, rounded 7px, background 10% opacity
- Bar fill: Rounded 7px, animated width
- Value: 11px monospace, right-aligned, 44px width

### Quote Block Component

```
┌─────────────────────────────────────┐
│ ║ "Quote text in italic Georgia    │
│ ║  serif, 16-22px, line-height     │
│ ║  1.7, multiple lines"            │
│ ║                                  │
│ ║ — Attribution, 9-10px            │
└─────────────────────────────────────┘
```

- Border-left: 3px solid accent
- Background: Accent tint (5-10% opacity) or transparent
- Padding: 24-32px
- Border-radius: 18-22px
- Quote marks: Optional decorative element
- Attribution: Small, muted color, italic optional

---

## 6. Visual Diagrams & Wireframes

### Hero Section Wireframe

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│           [Subtle animated orbits in background]       │
│                                                         │
│                                                         │
│       §0 · BoF × McKinsey (9px uppercase)             │
│                                                         │
│           When the Rules Change                        │
│           (Hero: 52-96px Georgia)                      │
│           ─────────── (decorative line)                │
│                                                         │
│       Tariffs have redrawn trade maps. AI is          │
│       rewiring discovery. Luxury is recalibrating.     │
│       (14-16px description, max-width 580px)          │
│                                                         │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│   │   46%    │ │   78%    │ │   76%    │ │  4700%   │ │
│   │ Expect   │ │ Consumer │ │ Tariffs  │ │    AI    │ │
│   │ worsen   │ │ risk #1  │ │  shape   │ │ searches │ │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│                                                         │
│              Scroll to explore ↓                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section Pattern (Consistent across all 10 sections)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  01  •  Tariff Turbulence                              │
│  (Number watermark + Section title)                    │
│                                                         │
│  US tariffs spike from 13% to 54%, reshaping          │
│  global fashion supply chains                          │
│  (Subtitle: 28-52px Georgia)                           │
│                                                         │
│  The weighted average tariff spiked to 54% in         │
│  April before settling at 36% by October...           │
│  (Description: 14-15px, max-width 640px)              │
│                                                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │  China     │  │  Vietnam   │  │   Mexico   │       │
│  │   76%      │  │    58%     │  │     0%     │       │
│  │  Hardest   │  │   Major    │  │   Tariff   │       │
│  │    Hit     │  │  Exposure  │  │   Haven    │       │
│  │            │  │            │  │            │       │
│  │ ▓▓▓▓▓░░░   │  │ ▓▓▓▓░░░░   │  │ ░░░░░░░░   │       │
│  └────────────┘  └────────────┘  └────────────┘       │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │    Tariff Escalation Arc Diagram (SVG)           │ │
│  │         13% ──→ 54% ──→ 36%                       │ │
│  │    (Curved line chart with annotations)          │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  SOURCE: MGI Global Trade Database · World Bank        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section 2: Workforce Rewired (Circular Chart Example)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  02  •  Workforce Rewired                              │
│                                                         │
│  AI is reshaping fashion's workforce — one-third       │
│  of tasks automatable by 2030                          │
│                                                         │
│  ┌──────────────────┐  ┌──────────┐  ┌──────────┐     │
│  │                  │  │          │  │          │     │
│  │      ◯ ⅓        │  │   35%+   │  │   47%    │     │
│  │    ╱   ╲        │  │          │  │          │     │
│  │   │     │       │  │ Already  │  │   Want   │     │
│  │    ╲   ╱        │  │  using   │  │   AI     │     │
│  │      ─          │  │  gen AI  │  │ training │     │
│  │                  │  │          │  │          │     │
│  │ of employee time │  │          │  │          │     │
│  │ automatable 2030 │  │          │  │          │     │
│  │                  │  │          │  │          │     │
│  └──────────────────┘  └──────────┘  └──────────┘     │
│                                                         │
│  SOURCE: McKinsey Global Institute                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section 3: AI Shopper (Funnel Comparison)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  03  •  The AI Shopper                                 │
│                                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │ 23%  │  │ 53%  │  │ 41%  │  │ 85%  │               │
│  │ Use  │  │ Shop │  │Trust │  │Satis │               │
│  │ AI   │  │ w/AI │  │ AI   │  │ AI   │               │
│  └──────┘  └──────┘  └──────┘  └──────┘               │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Search Volume Shift Funnel                       │ │
│  │                                                    │ │
│  │  2024                    H1 2025                  │ │
│  │  ┌──────────────┐        ┌──────────────┐        │ │
│  │  │ 91-93% Trad  │        │ 74-79% Trad  │        │ │
│  │  └──────────────┘        └──────────────┘        │ │
│  │    ┌──────────┐            ┌──────────┐          │ │
│  │    │ 6-8% AI  │            │ 16-23% AI│          │ │
│  │    └──────────┘            └──────────┘          │ │
│  │      ┌────┐                  ┌────┐              │ │
│  │      │1-3%│                  │2-4%│              │ │
│  │      └────┘                  └────┘              │ │
│  │                                                    │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section 6: Wellbeing Era (Tower Visualization)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  06  •  The Wellbeing Era                              │
│                                                         │
│  Wellbeing Maturity Tower                              │
│                                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │ █ 3  Transform — Embed in Brand DNA           │    │
│  │ │    Rethink assortment, design codes...      │    │
│  └────────────────────────────────────────────────┘    │
│    ┌──────────────────────────────────────────┐        │
│    │ █ 2  Extend — Wellbeing-Adjacent         │        │
│    │ │    Product extensions, collaborations  │        │
│    └──────────────────────────────────────────┘        │
│      ┌────────────────────────────────────┐            │
│      │ █ 1  Inspire — Storytelling        │            │
│      │ │    Marketing, partnerships, events│            │
│      └────────────────────────────────────┘            │
│                                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐                         │
│  │ 94%  │  │ 89%  │  │$2.5T │                         │
│  │China │  │Comm  │  │ 2030 │                         │
│  └──────┘  └──────┘  └──────┘                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section 7: Efficiency (Bar Chart Example)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  07  •  Efficiency Unlocked                            │
│                                                         │
│  ┌────────────┐  ┌────────────────┐  ┌────────────┐   │
│  │            │  │                │  │            │   │
│  │    168     │  │ Assortment  ▓▓ │  │    74%     │   │
│  │   Days     │  │ Inventory   ▓▓ │  │   Expect   │   │
│  │ Inventory  │  │ Pricing     ▓░ │  │   Price    │   │
│  │  Bloat     │  │                │  │   Hikes    │   │
│  │            │  │ (Horizontal    │  │            │   │
│  │ ▓▓▓▓▓░░░   │  │  bar chart)    │  │            │   │
│  │            │  │                │  │            │   │
│  └────────────┘  └────────────────┘  └────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section 8: Resale Sprint (Column + Tower)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  08  •  Resale Sprint                                  │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐     │
│  │ Resale Trajectory   │  │ Resale Model Spectrum│     │
│  │                     │  │                      │     │
│  │  $317B              │  │ █ 3 Build In-House   │     │
│  │  ████ 100%          │  │ │ Full control, data │     │
│  │  ███   81%          │  │                      │     │
│  │  ██    62%          │  │ █ 2 RaaS Platform    │     │
│  │ ─────────────       │  │ │ Outsourced ops     │     │
│  │ 2023 2025 2027      │  │                      │     │
│  │                     │  │ █ 1 Partner Platform │     │
│  │                     │  │ │ Low control, fast  │     │
│  │                     │  │                      │     │
│  └─────────────────────┘  └─────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Section 10: Luxury (Circular + Cards)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  10  •  Luxury Recalibrated                            │
│                                                         │
│  ┌──────────────────┐  ┌──────────┐  ┌──────────┐     │
│  │                  │  │          │  │          │     │
│  │      ◯ 9        │  │ Expertise│  │   35%    │     │
│  │    ╱   ╲        │  │    &     │  │          │     │
│  │   │     │       │  │ Quality  │  │Aspiration│     │
│  │    ╲   ╱        │  │          │  │ Retreat  │     │
│  │      ─          │  │   #1     │  │          │     │
│  │                  │  │ attribute│  │          │     │
│  │ of 15 top brands │  │  HNW     │  │          │     │
│  │ new CDs in 12mo  │  │ customers│  │          │     │
│  │                  │  │          │  │          │     │
│  └──────────────────┘  └──────────┘  └──────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Closing Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              • Strategic Imperative                     │
│                                                         │
│       In a flat market, only brands that               │
│       capture hearts and minds will grow               │
│       (24-44px Georgia, centered)                      │
│                                                         │
│  The ten themes converge on one reality: fashion       │
│  must simultaneously navigate tariff turbulence...     │
│  (14-15px description, centered, max-width 580px)     │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐     │
│  │ "Challenging has    │  │ "Venture into       │     │
│  │  overtaken          │  │  wearables when     │     │
│  │  uncertainty"       │  │  you're ready"      │     │
│  │                     │  │                     │     │
│  │ — BoF Survey        │  │ — Rocco Basilico    │     │
│  └─────────────────────┘  └─────────────────────┘     │
│                                                         │
│  SOURCE: State of Fashion 2026 · BoF × McKinsey        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Animation & Scroll Behavior

### Scroll Reveal System

**Trigger Configuration**
- Intersection Observer threshold: 0.15 (15% visible)
- Once: true (don't re-trigger on scroll up)
- Root margin: 0px

**Animation Sequence**
```
Element enters viewport (15% visible)
   ↓
Trigger animation (after delay)
   ↓
Fade in: opacity 0 → 1 (600-800ms)
   +
Slide up: translateY(32px) → 0 (600-800ms)
   ↓
Animation complete (element visible)
```

**Stagger Delays**
- First element: 0ms (immediate)
- Second: +100ms
- Third: +200ms
- Fourth: +300ms
- Fifth: +450ms
- Sixth+: Reset or cap at 500ms

### Specific Animations by Element Type

**1. Progress Bars**
```javascript
Trigger: Element in view (15%)
Animation: width 0% → target%
Duration: 1200-1400ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
Delay: 200-300ms after reveal
```

**2. Circular Charts (SVG rings)**
```javascript
Trigger: Element in view (15%)
Animation: stroke-dashoffset calculation
Duration: 2000ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
Delay: 500ms after reveal
Initial: dashoffset = circumference (691)
Final: dashoffset = 691 - (target% of 691)
```

**3. SVG Path Drawing (Tariff Arc)**
```javascript
Trigger: Element in view (15%)
Animation: stroke-dashoffset 900 → 0
Duration: 2500ms
Easing: ease-out
Delay: 300ms
Path: stroke-dasharray="900"
```

**4. Column Chart Animation**
```javascript
Trigger: Element in view (15%)
Columns animate in sequence:
  Column 1: height 0 → target, delay 400ms
  Column 2: height 0 → target, delay 550ms
  Column 3: height 0 → target, delay 700ms
Duration: 1000ms per column
Easing: ease-out
```

**5. Number Counter Animation**
```javascript
Trigger: Element in view (30% threshold)
Animation: Count from 0 to target
Duration: 1100ms (small numbers), 1400ms (large)
Easing: easeOutQuart (custom)
Update: requestAnimationFrame
Format: Add commas for 1000+, suffix for %
```

**6. Hover States**
- Cards: translateY(0) → translateY(-4px), 400ms
- Shadow: Increase elevation on hover
- Icons: scale(1) → scale(1.1), 300ms
- Buttons: Background color shift + gap increase

### Parallax Effects (Hero Only)

**Hero Content**
```javascript
window.scrollY range: 0 → 800px
Hero opacity: 1 → 0 (fade out)
Hero translateY: 0 → scrollY * 0.12
```

**Orbital Rings**
```javascript
Orb 1: rotate(scrollY * 0.015deg)
Orb 2: rotate(scrollY * 0.023deg)
Orb 3: rotate(scrollY * 0.031deg)
Applied only when scrollY < 800px
```

---

## 8. Responsive Breakpoints & Behavior

### Breakpoint System (AI Agents Standard)

**Desktop:** > 1024px  
**Tablet:** 768px - 1024px  
**Mobile:** < 768px

### Layout Adaptations

**Grid Transformations**

```
Desktop (> 1024px)
4-column → Tablet (2-column) → Mobile (1-column)
3-column → Tablet (2-column) → Mobile (1-column)
2-column → Tablet (2-column) → Mobile (1-column)
Weighted (1.3fr 1fr 1fr) → Tablet (equal) → Mobile (stack)
```

**Typography Scaling**

```
Desktop                  Tablet                Mobile
Hero: 78-96px    →       60-70px        →      52-60px
Section: 48-52px →       38-44px        →      32-38px
Body: 14-16px    →       14-15px        →      13-14px
Labels: 9-10px   →       9px            →      8-9px
```

**Spacing Reduction**

```
Desktop              Tablet              Mobile
Section: 128px  →    96px         →     64px
Container: 56px →    40px         →     24px
Card: 40px      →    32px         →     28px
Gap: 20-24px    →    16-20px      →     12-16px
```

**Component Adjustments**

**KPI Grid (Hero)**
- Desktop: 4 columns
- Tablet: 2×2 grid
- Mobile: 2×2 grid (stacked if needed)

**Circular Charts**
- Desktop: 240-260px diameter
- Tablet: 200-220px
- Mobile: 180-200px

**SVG Diagrams**
- Maintain aspect ratio
- Scale down proportionally
- Simplify labels on mobile (abbreviate)

**Bar Charts**
- Desktop: Full 3-column layout
- Tablet: Reduce label width (90px)
- Mobile: Stack vertically or reduce further

**Tower Visualizations**
- Maintain progressive width logic
- Reduce padding on mobile (14px)
- Smaller numbers (24px instead of 30px)

---

## 9. Content Strategy & Data Integrity

### Section-by-Section Content Plan

**§0 — Hero**
- Title: "When the Rules Change"
- Subtitle: Tariffs, AI, luxury recalibration narrative
- 4 KPIs: 46%, 78%, 76%, 4700%
- Scroll cue at bottom

**§1 — Tariff Turbulence (Coral accent)**
- 3 cards: China (76%), Vietnam (58%), Mexico (0%)
- SVG line chart: 13% → 54% → 36% escalation arc
- Key insight: 89% of US apparel is imported
- Source: MGI, World Bank, BoF-McKinsey Survey

**§2 — Workforce Rewired (Violet accent)**
- Circular chart: ⅓ of tasks automatable
- Card: 35%+ using gen AI
- Card: 47% want AI training
- Case study: Zalando (70% AI-generated content)
- Source: McKinsey Global Institute

**§3 — The AI Shopper (Sky blue accent)**
- 4-metric grid: 23%, 53%, 41%, 85%
- Funnel comparison: 2024 vs H1 2025 search patterns
- Key stat: ChatGPT = 16% of Zara referral traffic
- Source: BoF-McKinsey Consumer Survey, SimilarWeb

**§4 — Jewellery Sparkles (Gold accent)**
- 3 cards: Self-expression (71%), Self-purchase (+58%), Market ($460B)
- Case study: Swarovski lab-grown doubled in 2024
- Key: 75% of discretionary spend by women by 2028
- Source: Euromonitor, De Beers

**§5 — Smart Frames (Teal accent)**
- 2 cards: Ray-Ban Meta (2M+ pairs), Wearables growth (9%)
- Case study: EssilorLuxottica production scaling to 20M
- Quote: "If tech doesn't fit the Wayfarer, we don't have a product"
- Source: Company reports, industry analysis

**§6 — The Wellbeing Era (Emerald accent)**
- Tower: 3-level maturity model (Transform, Extend, Inspire)
- 3 metrics: 94% (China), 89% (community > influencers), $2.5T (2030)
- Case studies: Sporty & Rich, Lululemon, Dior spas
- Source: BoF Consumer Survey, industry forecasts

**§7 — Efficiency Unlocked (Amber accent)**
- Card: 168 days inventory (up 14%)
- Horizontal bar chart: Top 3 optimization targets
- Card: 74% plan price increases
- Key: Margins compressed, old advantages insufficient
- Source: BoF-McKinsey Executive Survey

**§8 — Resale Sprint (Violet accent)**
- Column chart: $197B → $256B → $317B trajectory
- Tower: 3-model spectrum (Partner, RaaS, In-house)
- Key: 59% plan to shop resale in 2026
- Case study: Vinted net profit +330%
- Source: Euromonitor, company reports

**§9 — The Elevation Game (Teal accent)**
- Pull quote: Daniel Herrmann, COS
- 3 cards: Value elevation (15-25% reduction in low-price SKUs), Consumer behavior (60%+ trade down), Industry structure (+1.5pp margin)
- Key: Mid-market is fastest-growing segment
- Source: Market analysis, Lyst data

**§10 — Luxury Recalibrated (Gold accent)**
- Circular chart: 9 of 15 brands replaced creative directors
- Card: "Expertise & Quality" #1 attribute
- Card: 35% aspirational pullback
- Key: 80% of growth was price-driven (era ending)
- Source: BoF analysis, HNW consumer surveys

**Closing — Strategic Imperative**
- Final headline: "Only brands that capture hearts and minds will grow"
- Summary paragraph
- 2 pull quotes (BoF Survey, Rocco Basilico)
- Source: State of Fashion 2026 full report

### Data Source Attribution System

**Format:**
```
SOURCE: [Organization] · [Report/Database] · [Optional detail]
```

**Style:**
- 9-10px monospace or sans-serif
- Color: Gray (#7C7D79) at 50-70% opacity
- Position: Bottom of section, left-aligned or centered
- Background: Optional subtle box (light: #EEF3E4, dark: rgba(14,26,23,0.4))
- Border: 1px subtle
- Padding: 14-22px

---

## 10. Technical Implementation Notes

### File Structure

```
/app/state-of-fashion-2026/
  page.tsx          — Main component export
  /components/
    HeroSection.tsx
    TariffSection.tsx
    WorkforceSection.tsx
    AIShopperSection.tsx
    JewellerySection.tsx
    SmartFramesSection.tsx
    WellbeingSection.tsx
    EfficiencySection.tsx
    ResaleSection.tsx
    ElevationSection.tsx
    LuxurySection.tsx
    ClosingSection.tsx
    /shared/
      SectionHeader.tsx
      MetricCard.tsx
      ProgressBar.tsx
      CircularChart.tsx
      TowerLevel.tsx
      QuoteBlock.tsx
      SourceBox.tsx
```

### Component Patterns (from AI Agents)

**SectionHeader Component**
```typescript
interface SectionHeaderProps {
  number: string;        // "01", "02", etc.
  title: string;         // Main title
  subtitle: string;      // Italic subtitle
  description: string;   // Body description
  accentColor: string;   // Section color
  isInView: boolean;     // Scroll reveal state
  isDark?: boolean;      // Background mode
}
```

**MetricCard Component**
```typescript
interface MetricCardProps {
  label: string;         // Uppercase tag
  value: string;         // Large number/stat
  title: string;         // Card title
  description: string;   // Body text
  exampleBox?: {         // Optional case study
    text: string;
    accentColor: string;
  };
  progressBar?: {        // Optional progress indicator
    percentage: number;
    color: string;
  };
  backgroundColor: string;
  isInView: boolean;
  delay?: number;        // Stagger delay
}
```

**Data Visualization Components**
- ProgressBar.tsx
- CircularChart.tsx
- LineChart.tsx (SVG)
- ColumnChart.tsx
- FunnelDiagram.tsx
- HorizontalBarChart.tsx
- TowerVisualization.tsx

### Motion Variants (Framer Motion)

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const progressBar = {
  initial: { width: 0 },
  animate: { width: '{{target}}%' },
  transition: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
};

const circularRing = {
  initial: { strokeDashoffset: 691 },
  animate: { strokeDashoffset: '{{calculated}}' },
  transition: { duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
};
```

### Scroll Reveal Hook

```typescript
const useScrollReveal = (threshold = 0.15, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold 
  });
  return { ref, isInView };
};
```

### Color Token Mapping (CSS Variables)

```css
:root {
  /* Primary */
  --primary: #0D5F4E;
  --primary-dark: #0E3E1B;
  --primary-light: #6B9D89;
  
  /* Accents */
  --accent-gold: #C9A54A;
  --accent-coral: #E8765A;
  --accent-sky: #5B8FD4;
  --accent-teal: #3A8A7A;
  --accent-violet: #8B7AC8;
  --accent-amber: #D4944E;
  
  /* Backgrounds */
  --bg-dark-1: #0A211F;
  --bg-dark-2: #0E1A17;
  --bg-dark-3: #162D26;
  --bg-light-1: #FAF9F7;
  --bg-light-2: #F5F3EF;
  --bg-light-3: #EEF3E4;
  
  /* Text */
  --text-primary-dark: #FAF9F7;
  --text-secondary-dark: #D4E6D0;
  --text-tertiary-dark: #7C7D79;
  --text-primary-light: #191918;
  --text-secondary-light: #1E3D33;
  --text-tertiary-light: #7C7D79;
}
```

---

## 11. Quality Checklist

### Design Compliance

- [ ] All colors from AI Agents palette (no custom colors)
- [ ] Typography uses Georgia (serif) + system sans-serif only
- [ ] Spacing follows 4px base unit system
- [ ] Card radius: 20-28px range
- [ ] Shadows use approved elevation levels
- [ ] Section padding: 128px vertical
- [ ] Container max-width: 1200px
- [ ] Grid gaps: 16-24px range

### Component Verification

- [ ] All metric cards follow standard pattern
- [ ] Progress bars: 1-3px height, rounded, animated
- [ ] Circular charts: SVG stroke animation, 220-260px
- [ ] Tower levels: Progressive width reduction
- [ ] Quote blocks: Left border accent, italic serif
- [ ] Source boxes: Consistent styling across sections

### Animation Quality

- [ ] Scroll reveal threshold: 0.15-0.2
- [ ] Fade in + slide up combined
- [ ] Stagger delays: 100-150ms increments
- [ ] Progress bars animate on scroll reveal
- [ ] SVG paths draw smoothly
- [ ] Number counters use easing function
- [ ] Hover states: 300-400ms duration

### Responsive Design

- [ ] 3 breakpoints: Mobile, Tablet, Desktop
- [ ] Grids collapse appropriately
- [ ] Typography scales with clamp()
- [ ] Spacing reduces on smaller screens
- [ ] Touch targets: 44px minimum
- [ ] Images/SVGs scale responsively

### Content Accuracy

- [ ] All 10 sections present with correct data
- [ ] Metrics match source material
- [ ] Attributions accurate and complete
- [ ] Quotes properly attributed
- [ ] Case studies included where specified
- [ ] Section numbers and titles correct

### Performance

- [ ] Lazy load images/components
- [ ] Intersection Observer for animations
- [ ] Debounce scroll events
- [ ] Optimize SVG file sizes
- [ ] Use transform for animations (not top/left)
- [ ] Minimize layout shifts

### Accessibility

- [ ] Semantic HTML (h1, h2, h3 hierarchy)
- [ ] Alt text for decorative SVGs (aria-hidden)
- [ ] Color contrast ratios: 4.5:1 minimum
- [ ] Focus indicators visible
- [ ] Keyboard navigation functional
- [ ] Motion reduced for prefers-reduced-motion

---

## 12. Next Steps

### Phase 1: Setup & Structure (Estimated: 2-3 hours)
1. Create route structure: /app/state-of-fashion-2026/
2. Set up component file structure
3. Define TypeScript interfaces
4. Create CSS variable system
5. Set up motion variants library

### Phase 2: Core Components (Estimated: 4-6 hours)
1. Build SectionHeader component
2. Build MetricCard component
3. Build ProgressBar component
4. Build CircularChart component
5. Build QuoteBlock component
6. Build SourceBox component
7. Build TowerLevel component

### Phase 3: Data Visualization Components (Estimated: 6-8 hours)
1. LineChart (SVG) for tariff escalation
2. FunnelDiagram for search volume shift
3. ColumnChart for resale market trajectory
4. HorizontalBarChart for optimization targets
5. Test all chart animations
6. Verify data accuracy

### Phase 4: Section Implementation (Estimated: 12-16 hours)
1. Hero section with KPIs
2. Section 1: Tariff Turbulence
3. Section 2: Workforce Rewired
4. Section 3: AI Shopper
5. Section 4: Jewellery Sparkles
6. Section 5: Smart Frames
7. Section 6: Wellbeing Era
8. Section 7: Efficiency Unlocked
9. Section 8: Resale Sprint
10. Section 9: Elevation Game
11. Section 10: Luxury Recalibrated
12. Closing section

### Phase 5: Polish & Optimization (Estimated: 4-6 hours)
1. Responsive testing (mobile, tablet, desktop)
2. Animation timing refinement
3. Performance optimization
4. Accessibility audit
5. Content proofing
6. Cross-browser testing

### Phase 6: Documentation (Estimated: 2-3 hours)
1. Component API documentation
2. Usage examples
3. Customization guide
4. Maintenance notes

**Total Estimated Time:** 30-42 hours

---

## 13. Open Questions & Decisions Needed

### Design Decisions
1. **Hero Background:** Keep orbital rings or simplify to static gradient?
2. **Section Alternation:** Strict dark/light alternation or thematic grouping?
3. **Accent Color Distribution:** Should related sections share accent colors?
4. **SVG Complexity:** Simplify diagrams for mobile or maintain full detail?

### Content Decisions
1. **Data Precision:** Round percentages or show decimals?
2. **Quote Selection:** Which quotes are most impactful for pull blocks?
3. **Case Study Length:** Full text or abbreviated for card format?
4. **Source Detail Level:** Full citations or abbreviated?

### Technical Decisions
1. **Chart Library:** Custom SVG or use Recharts for complex charts?
2. **Animation Library:** Pure Framer Motion or add GSAP for complex sequences?
3. **Image Strategy:** Use Unsplash for supporting imagery or remain diagram-only?
4. **Code Splitting:** Lazy load sections or load all at once?

### Accessibility Decisions
1. **Animation Toggles:** Provide UI to disable animations?
2. **Data Tables:** Provide accessible table alternatives for visual charts?
3. **Screen Reader:** How to describe complex SVG diagrams?

---

## Appendix A: Color Palette Reference

### Section Color Assignments (Final)

| Section | Name | Primary Accent | Card Background | Text Color |
|---------|------|----------------|-----------------|------------|
| Hero | — | #6B9D89 (Sage) | Dark (#0A211F) | Cream (#FAF9F7) |
| §1 | Tariff | #E8765A (Coral) | Light (#FAF9F7) | Dark (#191918) |
| §2 | Workforce | #8B7AC8 (Violet) | Dark (#0E1A17) | Cream (#FAF9F7) |
| §3 | AI Shopper | #5B8FD4 (Sky) | Light (#FAF9F7) | Dark (#191918) |
| §4 | Jewellery | #C9A54A (Gold) | Dark (#0A211F) | Cream (#FAF9F7) |
| §5 | Smart Frames | #3A8A7A (Teal) | Light (#FAF9F7) | Dark (#191918) |
| §6 | Wellbeing | #0D5F4E (Emerald) | Dark (#0E1A17) | Cream (#FAF9F7) |
| §7 | Efficiency | #D4944E (Amber) | Light (#FAF9F7) | Dark (#191918) |
| §8 | Resale | #8B7AC8 (Violet) | Dark (#0A211F) | Cream (#FAF9F7) |
| §9 | Elevation | #3A8A7A (Teal) | Light (#FAF9F7) | Dark (#191918) |
| §10 | Luxury | #C9A54A (Gold) | Dark (#0E1A17) | Cream (#FAF9F7) |
| Close | — | #0D5F4E (Emerald) | Light (#FAF9F7) | Dark (#191918) |

---

## Appendix B: Typography Specifications

### Font Loading

```typescript
// Google Fonts import (or use system fonts)
import { Georgia } from 'next/font/google';

const georgia = Georgia({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
```

### Class Naming Convention

```css
.hero-headline { font: 300 clamp(52px,10vw,96px)/0.95 Georgia; }
.section-title { font: 300 clamp(28px,4.5vw,52px)/1.15 Georgia; }
.subsection-title { font: 300 clamp(20px,3.5vw,38px)/1.25 Georgia; }
.metric-display { font: 300 clamp(28px,5vw,64px)/1 Georgia; }
.body-large { font: 400 15px/1.85 sans-serif; }
.body-regular { font: 400 14px/1.9 sans-serif; }
.body-small { font: 400 12px/1.7 sans-serif; }
.label-large { font: 600 10px/1 sans-serif; text-transform: uppercase; letter-spacing: 4px; }
.label-regular { font: 600 9px/1 sans-serif; text-transform: uppercase; letter-spacing: 3px; }
```

---

## Appendix C: Animation Timeline Examples

### Section Reveal Sequence
```
User scrolls to section
   ↓ (section enters viewport at 15%)
   ↓
Section Header Reveals
  ├─ Number watermark (opacity 0 → 0.4, 700ms, delay 0ms)
  ├─ Section label (fade in + slide up, 700ms, delay 100ms)
  ├─ Title (fade in + slide up, 700ms, delay 200ms)
  └─ Description (fade in + slide up, 700ms, delay 300ms)
   ↓
Card Grid Reveals (staggered)
  ├─ Card 1 (fade in + slide up, 700ms, delay 400ms)
  ├─ Card 2 (fade in + slide up, 700ms, delay 500ms)
  └─ Card 3 (fade in + slide up, 700ms, delay 600ms)
   ↓
Within Each Card:
  ├─ Progress bar animates (width 0 → target, 1200ms, delay 200ms)
  └─ Number counter animates (0 → target, 1400ms, delay 100ms)
   ↓
Diagram/Chart Reveals
  └─ SVG path drawing or column heights (1000-2500ms, delay 500ms)
   ↓
Source Box Reveals
  └─ Fade in (600ms, delay 400ms)
```

---

**End of Implementation Plan**

This document serves as the comprehensive blueprint for translating "The State of Fashion 2026" content into a premium, AI Agents style guide-compliant visual intelligence infographic. All color palettes, typography, spacing, components, and animations follow the established design system while adapting to fashion industry content.

**Status:** Ready for implementation approval  
**Next Action:** Review plan → Approve → Begin Phase 1 development
