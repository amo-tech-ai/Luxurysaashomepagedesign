# AI Industry Use Cases — Implementation Plan

**Route:** `/app/ai-industry-use-cases/page.tsx`  
**Version:** 1.0  
**Created:** 2026-02-12  
**Status:** 🟢 READY TO BUILD

---

## UNIVERSAL DESIGN ORDER

Following the proven 6-phase structure:

### ✅ PHASE 1: FOUNDATION
- Grid & Layout system (1400px max, responsive padding)
- Typography scale (Playfair Display + Inter)
- Color system (StartupAI tokens + infographic extensions)

### ✅ PHASE 2: STRUCTURE  
- Hero Stats Section
- Consumer Behavior Section
- Industry Adoption Section
- Use Case Deep Dives Section
- Purchase Pathway Section
- Why AI Fails Section
- CTA Section
- Footer

### ✅ PHASE 3: COMPONENTS
- Stat cards (hero numbers)
- Grouped bar charts (BCG style)
- Horizontal bars with icons
- Donut charts
- Icon cards (purchase pathway)
- Gap bars (want vs get)
- Industry cards

### ✅ PHASE 4: INTERACTIONS
- Scroll-triggered animations
- Counter rollup animations
- Bar growth animations
- Stagger delays
- Hover states

### ✅ PHASE 5: POLISH
- Responsive breakpoints (mobile → tablet → desktop)
- Accessibility (ARIA labels, keyboard navigation, contrast)
- Reduced motion support

### ✅ PHASE 6: PRODUCTION
- Performance optimization
- Add to footer navigation
- QA verification

---

## WIREFRAME — FULL PAGE FLOW

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER (sticky, backdrop-blur)                                    │
│ [Logo] StartupAI                           AI Industry Intelligence│
│                                            [Share] [Export PDF]    │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 1: HERO STATS                                            │
│ bg: #FBFAF9                                                      │
│ max-width: 1400px, py-24 md:py-32 lg:py-40                      │
│                                                                   │
│  [AI INDUSTRY INTELLIGENCE]                  ← eyebrow           │
│                                                                   │
│  The Data Behind the AI Revolution          ← headline-xl        │
│  Real stats. Real companies. Real impact.   ← body-lg            │
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │  $226B   │  │   62%    │  │  +4,700% │  │   89%    │       │
│  │          │  │          │  │          │  │          │       │
│  │ invested │  │ use GenAI│  │ GenAI    │  │ positive │       │
│  │ in AI    │  │ for      │  │ search   │  │ ROI for  │       │
│  │ in 2025  │  │ research │  │ growth   │  │ AI tools │       │
│  │          │  │          │  │          │  │          │       │
│  │ Source:  │  │ Source:  │  │ Source:  │  │ Source:  │       │
│  │ State of │  │ BCG CCI  │  │ BoF-     │  │ Envive   │       │
│  │ AI 2025  │  │ 2025     │  │ McKinsey │  │ 2025     │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 2: CONSUMER BEHAVIOR                                     │
│ bg: white (#FFFFFF)                                              │
│ max-width: 1400px, py-20 lg:py-32                               │
│                                                                   │
│  Refined Container: bg-white/60, backdrop-blur, rounded-3xl      │
│  padding: p-8 md:p-12 lg:p-16                                   │
│                                                                   │
│  ──── [EXHIBIT 1]                            ← decorative line   │
│                                                                   │
│  Consumers Increasingly Use GenAI as         ← headline (42px)   │
│  Part of Everyday Behaviors                                      │
│                                                                   │
│  Change since 2023 (percentage points) ────                      │
│                                                                   │
│  GROUPED BAR CHARTS (8 behaviors):                               │
│                                                                   │
│  +20    +15    NEW    +14    +15    +2     +11    +5            │
│  ┌┐┌┐  ┌┐┌┐  ┌──┐  ┌┐┌┐  ┌┐┌┐  ┌┐┌┐  ┌┐┌┐  ┌┐┌┐            │
│  │││││  │││││  │43│  │││││  │││││  │││││  │││││  │││││            │
│  │││││  │││││  └──┘  │││││  │││││  │││││  │││││  │││││            │
│  └┘└┘  └┘└┘        └┘└┘  └┘└┘  └┘└┘  └┘└┘  └┘└┘            │
│  Rsrch  Work  Brand  Lang  Asst   Play  Travel Health          │
│                                                                   │
│  Legend: ● 2023  ● 2025                                          │
│                                                                   │
│  KEY INSIGHT callout (gradient bg, vertical accent bar)          │
│  GenAI adoption is expanding beyond general research...          │
│                                                                   │
│  Footer: Sources, notes                                          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 3: INDUSTRY ADOPTION                                     │
│ bg: gradient from #FAFAF8 to white                              │
│ max-width: 1400px, py-20 lg:py-32                               │
│                                                                   │
│  Refined Container (same style as Section 2)                     │
│                                                                   │
│  ──── [EXHIBIT 2]                                                │
│                                                                   │
│  AI Is Used Nearly Everywhere,                                   │
│  from Electronics to Everyday Essentials                         │
│                                                                   │
│  % of respondents using AI... ────                               │
│                                                                   │
│  1×2 GRID:                                                       │
│                                                                   │
│  ┌──────── LEFT ─────────┐  ┌──────── RIGHT ────────┐          │
│  │                        │  │                        │          │
│  │ 🎧 Consumer elect  60  │  │      ╭─────╮          │          │
│  │ ✈️  Travel          51  │  │      │ 64% │          │          │
│  │ 🛒 Grocery         44  │  │      ╰─────╯          │          │
│  │ 👕 Apparel         43  │  │                        │          │
│  │ 🎬 Entertainment   43  │  │  use AI in 3 or       │          │
│  │ 🔧 Services        41  │  │  more product and     │          │
│  │ 💄 Beauty          37  │  │  service categories   │          │
│  │ 🏥 Health care     33  │  │                        │          │
│  │                        │  │                        │          │
│  └────────────────────────┘  └────────────────────────┘          │
│                                                                   │
│  Footer: Sources, notes                                          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 4: USE CASE DEEP DIVES                                   │
│ bg: dark (#181D25)                                               │
│ max-width: 1400px, py-24 md:py-32                               │
│                                                                   │
│  [INDUSTRY DEEP DIVES]                       ← eyebrow (white)   │
│                                                                   │
│  Where AI Delivers Real ROI                  ← headline (white)  │
│                                                                   │
│  GRID: 4 columns on desktop, 2 on tablet, 1 on mobile           │
│                                                                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐│
│  │ FASHION    │  │ RETAIL     │  │ TRAVEL     │  │ ECOMMERCE  ││
│  │            │  │            │  │            │  │            ││
│  │  +4,700%   │  │  $240-390B │  │  4→35%    │  │  89%      ││
│  │  search    │  │  value     │  │  AI       │  │  ROI      ││
│  │  growth    │  │  potential │  │  mentions │  │           ││
│  │            │  │            │  │            │  │            ││
│  │  6 use     │  │  7 use     │  │  5 use    │  │  5 use    ││
│  │  cases     │  │  cases     │  │  cases    │  │  cases    ││
│  │            │  │            │  │            │  │            ││
│  │ [Explore→] │  │ [Explore→] │  │ [Explore→] │  │ [Explore→]││
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘│
│                                                                   │
│  + 4 more industries (Healthcare, Financial, Logistics, Mfg)     │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 5: PURCHASE PATHWAY                                      │
│ bg: white (#FFFFFF)                                              │
│ max-width: 1400px, py-20 lg:py-32                               │
│                                                                   │
│  [THE AI-ENHANCED PURCHASE PATHWAY]          ← eyebrow           │
│                                                                   │
│  How GenAI Reshapes Buying Decisions        ← headline          │
│                                                                   │
│  ICON CARD ROW (5 cards, horizontal scroll on mobile):           │
│                                                                   │
│  ┌─────┐  →  ┌─────┐  →  ┌─────┐  →  ┌─────┐  →  ┌─────┐    │
│  │ (○) │     │ (○) │     │ (○) │     │ (○) │     │ (○) │    │
│  │ 💰  │     │ 🏆  │     │ ⚖️  │     │ 🏪  │     │ 📋  │    │
│  └─────┘     └─────┘     └─────┘     └─────┘     └─────┘    │
│  Compare     Search      Compare     Where to    Summarize   │
│  prices      for recs    products    buy         reviews     │
│                                                                   │
│  Source: BCG CCI, Nov 2025                                       │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 6: WHY AI FAILS                                          │
│ bg: #F6F5F3                                                      │
│ max-width: 1400px, py-20 lg:py-32                               │
│                                                                   │
│  [THE REALITY CHECK]                         ← eyebrow           │
│                                                                   │
│  Why Most AI Initiatives Never Scale        ← headline          │
│                                                                   │
│  2-COLUMN LAYOUT:                                                │
│                                                                   │
│  ┌──────── LEFT (60%) ────────┐  ┌─── RIGHT (40%) ───┐         │
│  │ GAP BARS (Want vs Get):    │  │ FAILURE REASONS:  │         │
│  │                            │  │                   │         │
│  │ Revenue growth             │  │ 40% Data quality  │         │
│  │ Want ████████████████ 74%  │  │ 43% Expertise     │         │
│  │ Get  ████             20%  │  │ 90% Never scale   │         │
│  │                            │  │                   │         │
│  │ Cost savings               │  │ (Horizontal bars) │         │
│  │ Want █████████████    68%  │  │                   │         │
│  │ Get  ████████         40%  │  │                   │         │
│  │                            │  │                   │         │
│  │ Mature governance          │  │                   │         │
│  │ Want ████████████     60%  │  │                   │         │
│  │ Get  █████            21%  │  │                   │         │
│  │                            │  │                   │         │
│  └────────────────────────────┘  └───────────────────┘         │
│                                                                   │
│  Source: PwC CEO Survey 2026, K3 Fashion Solutions              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 7: CTA                                                   │
│ bg: #FBFAF9                                                      │
│ max-width: 1200px, py-24 md:py-32                               │
│                                                                   │
│  Validate Your AI Strategy                   ← headline          │
│  Turn these stats into your startup's        ← body              │
│  advantage.                                                       │
│                                                                   │
│  [Get Started — Free]  [Explore Research →]                      │
│  (primary button)      (secondary link)                          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ FOOTER                                                           │
│ bg: white, border-top                                            │
│                                                                   │
│  [← Back to Resources]           [Share] [Export PDF]            │
│                                                                   │
│  StartupAI © 2026 • Data: BCG, McKinsey, BoF, State of AI       │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## COLOR PALETTE

### Primary Backgrounds
```css
--background: #FBFAF9         /* Section backgrounds */
--card: #FFFFFF                /* Card surfaces */
--background-secondary: #F6F5F3 /* Alternate sections */
--dark: #181D25                /* Dark sections */
```

### Text Hierarchy
```css
--foreground: #181D25          /* Headlines */
--info-text: #1E1E1C           /* Infographic text */
--info-text-secondary: #4A4744 /* Body text */
--info-text-muted: #8A8580     /* Labels, captions */
```

### Accent Colors
```css
--primary: #0E6249             /* CTAs, labels, accents */
--sage: #33997A                /* Success, growth bars (2025) */
--info-accent: #2D6B4D         /* Deep green (2023 bars) */
--info-rose: #B08D83           /* Warm accent */
```

### Data Visualization
```css
--data-blue: #2E5EA8           /* Primary comparison */
--data-red: #B83A3A            /* Alert, gap, failure */
--data-sage: #5C8A68           /* Success, positive */
--data-gold: #B8941F           /* Financial stats */
```

---

## TYPOGRAPHY SCALE

### Headlines
- Hero: `text-4xl md:text-7xl font-medium` (Playfair Display)
- Section: `text-3xl md:text-5xl font-medium` (Playfair Display)
- Exhibit: `text-[28px] md:text-[36px] lg:text-[42px] font-normal` (Georgia/serif)

### Body
- Large: `text-lg md:text-xl font-normal` (Inter)
- Medium: `text-sm md:text-base font-normal` (Inter)
- Label: `text-xs md:text-sm font-medium` (Inter)

### Eyebrow
- `text-xs uppercase tracking-[0.16em] font-semibold` (Inter)

### Stats
- Hero number: `text-6xl md:text-7xl font-light` (Playfair Display)
- Chart value: `text-[13px] font-bold` (Inter)

---

## COMPONENT SPECS

### Hero Stat Card
```
┌────────────────────┐
│  $226B             │ ← 64px Playfair, primary
│  invested in AI    │ ← 14px Inter, muted
│  in 2025           │
│                    │
│  Source: State of  │ ← 11px Inter, dimmed
│  AI Report 2025    │
└────────────────────┘

- Card: bg-white, rounded-xl, p-8, shadow-premium-lg
- Animation: Counter 0→226, 1200ms, cubic-bezier
```

### Grouped Bar Chart
```
- Bar width: 36px (w-9)
- Bar gap: 10px (gap-2.5)
- Bar height: dynamic based on value, max 210px (h-56)
- Colors: 2023 = gradient-to-t from-[#0a2a1f] to-[#0F3D2E]
         2025 = gradient-to-t from-[#1fa855] to-[#2DBE60]
- Delta pills: px-3 py-1.5, rounded-full, bg-[#E8F2EC]/70
- Animation: scaleY from 0→1, 900ms, stagger 80ms
```

### Horizontal Bar (with icon)
```
- Icon: w-10 h-10, text-2xl emoji
- Label: w-40 lg:w-48, text-[14px], font-medium
- Bar: h-8, bg-[#F5F3EF], gradient fill from-[#1fa855] to-[#2DBE60]
- Value: w-12, text-[15px], font-bold, right-aligned
- Animation: width 0→target%, 900ms, stagger 60ms
```

### Donut Chart
```
- Size: 280px diameter
- Stroke width: 16px
- Ring color: gradient (greenGradient SVG def)
- Track color: #F5F3EF
- Center number: text-6xl Playfair, primary
- Description: text-[14px], max-w-[280px], font-medium
- Animation: strokeDashoffset, 1200ms, delay 600ms
```

### Icon Card (Purchase Pathway)
```
- Circle: w-28 h-28 (120px), rounded-full, bg-primary
- Icon: text-5xl emoji, centered
- Label: text-[14px], font-medium, max-w-[140px]
- Animation: slide-up, stagger 150ms
```

### Gap Bar (Want vs Get)
```
- Want bar: bg-[#2E5EA8], full width track bg-[#EBF0F7]
- Get bar: bg-[#B83A3A], full width track bg-[#FAEDED]
- Height: h-2, rounded-full
- Animation: Want overshoots then settles, Get stops short
```

### Industry Card (Dark)
```
- Card: bg-[#1E1E1C], rounded-xl, p-8, border border-[#2A2A28]
- Stat: text-5xl font-light Playfair, text-[#33997A]
- Label: text-sm text-[#8A8580]
- Use cases: text-sm text-[#E5E2DC]
- Button: text-sage hover:text-white
```

---

## ANIMATION TIMING

### Scroll Triggers
```javascript
useInView(ref, { once: true, amount: 0.2 })
```

### Stagger Patterns
1. **Hero stats**: 0ms, 150ms, 300ms, 450ms
2. **Bar charts**: Base delay 500ms + index * 80ms
3. **Icon cards**: Base delay 300ms + index * 150ms
4. **Section reveals**: Eyebrow (0ms) → Headline (100ms) → Content (200ms)

### Animation Durations
- Fade: 400ms ease-out
- Slide: 500ms ease-out
- Bar grow: 900ms cubic-bezier(0.16, 1, 0.3, 1)
- Counter: 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)
- Donut: 1200ms cubic-bezier(0.4, 0, 0.2, 1)

---

## NAVIGATION INTEGRATION

### Footer Link
Location: `/app/bcg-ai-consumer/page.tsx` FooterSection
Add link structure similar to existing footer

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  <div>
    <h3 className="text-lg mb-6 font-light tracking-tight">Resources</h3>
    <ul className="space-y-4">
      <li><a href="#" onClick={() => onNavigate?.('bcg-ai-consumer')}>GenAI Consumer Report</a></li>
      <li><a href="#" onClick={() => onNavigate?.('ai-industry-use-cases')}>AI Industry Use Cases</a></li>
      {/* Add NEW link here */}
    </ul>
  </div>
</div>
```

---

## ACCESSIBILITY CHECKLIST

- [ ] All sections have `role="region"` with `aria-labelledby`
- [ ] All charts have `role="img"` with descriptive `aria-label`
- [ ] Keyboard navigation works for all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Touch targets ≥ 44×44px
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Focus indicators visible on all focusable elements

---

## DATA SOURCES

All stats are real and cited:
- **$226B**: State of AI Report 2025
- **62%**: BCG CCI Global Consumer Radar survey, Nov 2025
- **+4,700%**: BoF-McKinsey State of Fashion 2026
- **89%**: Envive/G2 ROI report 2025
- **74% vs 20% gap**: PwC CEO Survey 2026
- **64%**: BCG CCI GenAI Consumer Usage survey 2025

---

## BUILD ORDER

### Phase 1: Foundation (1 file)
1. Create `/app/ai-industry-use-cases/page.tsx`
2. Import dependencies (motion, lucide-react)
3. Set up color tokens and typography
4. Define layout structure

### Phase 2: Structure (7 sections)
1. Hero Stats Section
2. Consumer Behavior Section (Exhibit 1)
3. Industry Adoption Section (Exhibit 2)
4. Use Case Deep Dives Section
5. Purchase Pathway Section
6. Why AI Fails Section
7. CTA Section + Footer

### Phase 3: Components (8 types)
1. HeroStatCard
2. GroupedBarChart
3. HorizontalBarWithIcon
4. LuxuryDonutChart
5. IconCard
6. GapBar
7. IndustryCard
8. ExhibitContainer

### Phase 4: Interactions
1. Scroll-triggered animations (useInView)
2. Counter animations (useEffect + setInterval)
3. Bar growth animations (motion.div scaleX/scaleY)
4. Stagger delays (index-based)

### Phase 5: Polish
1. Responsive breakpoints
2. Accessibility attributes
3. Reduced motion media query

### Phase 6: Production
1. Add link to bcg-ai-consumer footer
2. Test navigation flow
3. Performance check

---

## SUCCESS CRITERIA

✅ Page renders at `/ai-industry-use-cases`  
✅ All 4 hero stats animate on load  
✅ Exhibit 1 grouped bars grow with stagger  
✅ Exhibit 2 donut chart draws smoothly  
✅ All 8 industry cards display correctly  
✅ Purchase pathway icons appear in sequence  
✅ Gap bars show "want vs get" visually  
✅ Footer link navigates correctly  
✅ Mobile layout stacks properly  
✅ Passes accessibility audit (WAVE/axe)  

---

**Next Step:** Implement Phase 1 (Foundation) → Phase 2 (Structure) → Continue through Phase 6.
