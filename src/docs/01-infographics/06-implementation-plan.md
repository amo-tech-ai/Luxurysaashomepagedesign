# Fashion Infographic Implementation Plan

**Status:** In Progress  
**Priority:** P0  
**Timeline:** Sequential implementation in phases

---

## Executive Summary

This document outlines the systematic implementation of two premium infographic slides for the State of Fashion 2026 report. Implementation follows a modular, test-driven approach with strict adherence to design specifications.

---

## Phase 1: Foundation & Setup ✓

### 1.1 Directory Structure

```
/app/infographics/fashion-2026/
├── page.tsx                          # Main page orchestrator
├── components/
│   ├── Slide01HeroCrossroads.tsx     # Hero section
│   ├── Slide02TariffShock.tsx        # Tariff analysis
│   └── shared/
│       ├── CountUpStat.tsx           # Animated stat counter
│       ├── StatCard.tsx              # Stat card with stagger
│       ├── BarChart.tsx              # Reusable bar chart
│       ├── TariffBarChart.tsx        # Country tariff bars
│       ├── BrandResponseDiagram.tsx  # Flow diagram
│       ├── ScrollIndicator.tsx       # Pulse indicator
│       ├── AnalysisParagraph.tsx     # Text block
│       ├── SourceCitation.tsx        # Attribution
│       └── NoiseTexture.tsx          # Background texture
├── data/
│   └── fashion-data.ts               # All slide data
├── lib/
│   ├── animation-presets.ts          # Easing curves
│   └── hooks.ts                      # useReducedMotion, etc.
└── styles/
    └── fashion-2026.module.css       # Component-specific styles
```

---

## Phase 2: Shared Components (Priority 1)

### 2.1 Animation Utilities

**File:** `/app/infographics/fashion-2026/lib/animation-presets.ts`

**Features:**
- Spring physics configurations
- Easing curve presets
- useReducedMotion hook
- useInView wrapper

**Dependencies:**
- motion/react (already installed)

---

### 2.2 Data Layer

**File:** `/app/infographics/fashion-2026/data/fashion-data.ts`

**Contents:**
- Slide 01 hero data (market size, sentiment)
- Slide 02 tariff data (countries, rates, responses)
- Type definitions

---

### 2.3 Base Components

**Build Order:**

1. **SourceCitation** (simplest, no animations)
2. **NoiseTexture** (background effect)
3. **AnalysisParagraph** (fade-in only)
4. **ScrollIndicator** (pulse animation)
5. **StatCard** (stagger animation, used by both slides)

---

## Phase 3: Slide 01 Components (Priority 2)

### 3.1 CountUpStat Component

**File:** `/app/infographics/fashion-2026/components/shared/CountUpStat.tsx`

**Features:**
- Spring-based count-up animation
- Tabular number formatting
- Scale animation on mount
- Configurable duration

**Testing:**
- [ ] Counts from 0 to target value
- [ ] Spring physics smooth (no jumps)
- [ ] Respects reduced motion preference
- [ ] Tabular nums applied correctly

---

### 3.2 BarChart Component (Executive Sentiment)

**File:** `/app/infographics/fashion-2026/components/shared/BarChart.tsx`

**Features:**
- Vertical bars with scaleY animation
- Staggered reveal (0.1s per bar)
- Percentage labels fade after bars
- Responsive (horizontal on mobile)

**Testing:**
- [ ] Bars grow from bottom (not top)
- [ ] Labels appear after bars
- [ ] Mobile switches to horizontal
- [ ] Colors match spec (emerald vs violet)

---

### 3.3 Slide01HeroCrossroads Component

**File:** `/app/infographics/fashion-2026/components/Slide01HeroCrossroads.tsx`

**Features:**
- Full viewport hero section
- Parallax background (desktop only)
- Count-up stat integration
- 3-column stat cards with stagger
- Executive sentiment chart
- Scroll indicator

**Testing:**
- [ ] Parallax smooth at 60fps (desktop)
- [ ] Parallax disabled on mobile
- [ ] All animations trigger on mount
- [ ] Section is 100vh minimum height

---

## Phase 4: Slide 02 Components (Priority 3)

### 4.1 TariffBarChart Component

**File:** `/app/infographics/fashion-2026/components/shared/TariffBarChart.tsx`

**Features:**
- 8-country tariff comparison
- Vertical bars (desktop), horizontal (mobile)
- Percentage labels above/beside bars
- Spring animation with stagger
- Gradient violet bars

**Testing:**
- [ ] All 8 countries displayed
- [ ] China highest (76%), EU lowest (33%)
- [ ] Bars animate sequentially
- [ ] Mobile layout switches correctly

---

### 4.2 BrandResponseDiagram Component

**File:** `/app/infographics/fashion-2026/components/shared/BrandResponseDiagram.tsx`

**Features:**
- Root node (Tariff Shock)
- 3 child nodes (Price/Sourcing/SKU)
- Animated connector lines (strokeDashoffset)
- Sequential reveal (root → lines → children)
- Vertical stack on mobile

**Testing:**
- [ ] Root appears before connectors
- [ ] Connectors draw smoothly
- [ ] Child nodes stagger correctly
- [ ] Mobile stacks vertically with down arrows

---

### 4.3 Slide02TariffShock Component

**File:** `/app/infographics/fashion-2026/components/Slide02TariffShock.tsx`

**Features:**
- Full viewport section
- Hero stat ($27B) with scale animation
- 3-column supporting stats
- Country tariff chart
- Brand response flow diagram
- Analysis paragraph

**Testing:**
- [ ] All sections trigger on scroll (useInView)
- [ ] Chart triggers at 15% visibility
- [ ] Diagram triggers at 20% visibility
- [ ] Analysis fades in after diagram

---

## Phase 5: Page Integration (Priority 4)

### 5.1 Main Page Component

**File:** `/app/infographics/fashion-2026/page.tsx`

**Structure:**
```tsx
export default function FashionInfographic2026() {
  return (
    <main className="bg-[#0E1117]">
      <Slide01HeroCrossroads />
      <Slide02TariffShock />
    </main>
  );
}
```

**Testing:**
- [ ] Both slides render
- [ ] Smooth scroll between sections
- [ ] No layout shift
- [ ] Dark theme consistent

---

## Phase 6: Responsive Testing (Priority 5)

### 6.1 Breakpoint Testing

**Devices to test:**

| Device | Resolution | Key Checks |
|--------|-----------|------------|
| Desktop | 1920×1080 | Full layout, parallax, vertical bars |
| Laptop | 1440×900 | Contained layout, all animations |
| Tablet | 768×1024 | 3-column cards, vertical bars |
| Mobile L | 414×896 | Stacked cards, horizontal bars |
| Mobile M | 375×667 | Minimum sizes, vertical flow |
| Mobile S | 320×568 | Text readability, touch targets |

**Critical Issues to Check:**
- [ ] No horizontal scroll
- [ ] Text never below 14px
- [ ] Touch targets ≥44px
- [ ] Charts don't overlap
- [ ] Animations performant

---

### 6.2 Cross-Browser Testing

**Browsers:**
- [ ] Chrome 120+ (primary)
- [ ] Safari 17+ (webkit specifics)
- [ ] Firefox 120+ (animation timing)
- [ ] Edge 120+ (chromium-based)
- [ ] Mobile Safari iOS 16+
- [ ] Chrome Android 120+

---

## Phase 7: Accessibility Audit (Priority 6)

### 7.1 WCAG Compliance

**Checklist:**

- [ ] All text meets AA contrast (4.5:1 minimum)
- [ ] Hero stats meet AAA contrast (7:1)
- [ ] Semantic HTML (section, h1, h2, figure)
- [ ] Accessible data table fallbacks for charts
- [ ] Screen reader announcements correct
- [ ] Keyboard navigation functional
- [ ] Focus indicators visible
- [ ] Skip links provided
- [ ] No keyboard traps
- [ ] Reduced motion respected

---

### 7.2 Screen Reader Testing

**Test with:**
- [ ] VoiceOver (macOS)
- [ ] NVDA (Windows)
- [ ] JAWS (Windows - if available)

**Verify:**
- Stats announced with context
- Chart data accessible via table fallback
- Flow diagram described correctly
- No "click here" or vague labels

---

## Phase 8: Performance Optimization (Priority 7)

### 8.1 Lighthouse Targets

**Goals:**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥90

**Metrics:**
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: 0
- Time to Interactive: <3s

---

### 8.2 Optimization Strategies

**Implemented:**
- [ ] Lazy load charts (only when near viewport)
- [ ] Disable parallax on mobile
- [ ] Use CSS transforms (GPU-accelerated)
- [ ] Avoid layout-triggering animations
- [ ] Preload critical fonts
- [ ] Inline critical CSS
- [ ] Tree-shake unused Motion components
- [ ] Memoize expensive calculations

---

## Phase 9: Testing & Validation (Priority 8)

### 9.1 Visual Regression Tests

**Process:**
1. Take baseline screenshots (all breakpoints)
2. Make changes
3. Compare screenshots
4. Approve or reject

**Tools:**
- Manual comparison (primary)
- Browser DevTools device emulation

---

### 9.2 Animation Testing

**Checklist:**

**Slide 01:**
- [ ] H1 title fades up on mount
- [ ] Hero stat counts from 0 → $2.4T
- [ ] "by 2030" fades in after count
- [ ] Stat cards stagger (0s, 0.15s, 0.3s)
- [ ] Chart bars grow from bottom
- [ ] Scroll indicator pulses infinitely
- [ ] Parallax smooth (desktop only)

**Slide 02:**
- [ ] H2 title fades up on scroll
- [ ] Hero stat scales in ($27B)
- [ ] Stat cards stagger
- [ ] Tariff bars animate sequentially
- [ ] Percentage labels fade after bars
- [ ] Flow root node appears first
- [ ] Connectors draw after root
- [ ] Child nodes stagger after connectors
- [ ] Analysis fades in last

---

### 9.3 Data Accuracy

**Verify:**
- [ ] Slide 01: $2.0T → $2.4T by 2030
- [ ] Slide 01: 46% expect worsening
- [ ] Slide 01: 76% cite tariffs
- [ ] Slide 01: Sentiment bars match data
- [ ] Slide 02: $27B tariff burden
- [ ] Slide 02: Tariffs spiked 13% → 54%
- [ ] Slide 02: China 76% (highest)
- [ ] Slide 02: EU 33% (lowest)
- [ ] Slide 02: 55% price increases
- [ ] Slide 02: 35% sourcing shifts
- [ ] Slide 02: 27% SKU reduction

---

## Phase 10: Documentation (Priority 9)

### 10.1 Component Documentation

**For each component, document:**
- Purpose
- Props interface
- Usage example
- Animation behavior
- Accessibility features
- Known issues

---

### 10.2 Implementation Status Doc

**File:** `/docs/01-infographics/07-implementation-status.md`

**Contents:**
- ✅ Completed features
- ⏳ In progress
- ❌ Known issues
- 📝 Future enhancements

---

## Implementation Timeline

### Week 1 (Days 1-2): Foundation
- [x] Project structure created
- [ ] Animation utilities built
- [ ] Data layer complete
- [ ] Base components (5 shared)

### Week 1 (Days 3-4): Slide 01
- [ ] CountUpStat component
- [ ] BarChart component
- [ ] Slide01HeroCrossroads integration
- [ ] Desktop testing

### Week 1 (Day 5): Slide 02
- [ ] TariffBarChart component
- [ ] BrandResponseDiagram component
- [ ] Slide02TariffShock integration

### Week 2 (Days 1-2): Responsive & Cross-Browser
- [ ] Mobile layouts
- [ ] Tablet layouts
- [ ] Cross-browser testing
- [ ] Animation polish

### Week 2 (Days 3-4): Accessibility & Performance
- [ ] Accessibility audit
- [ ] Screen reader testing
- [ ] Performance optimization
- [ ] Lighthouse scores

### Week 2 (Day 5): QA & Launch
- [ ] Final visual regression
- [ ] Data accuracy check
- [ ] Documentation complete
- [ ] Production deployment

---

## Success Criteria

### Functional
- [ ] Both slides render without errors
- [ ] All animations trigger correctly
- [ ] Data displays accurately
- [ ] Responsive across all breakpoints
- [ ] No console errors or warnings

### Performance
- [ ] Lighthouse Performance ≥90
- [ ] FCP <1.5s
- [ ] LCP <2.5s
- [ ] CLS = 0
- [ ] 60fps on desktop, 30fps minimum mobile

### Accessibility
- [ ] WCAG AA compliant (minimum)
- [ ] Screen reader friendly
- [ ] Keyboard navigable
- [ ] Reduced motion supported

### Design Fidelity
- [ ] Matches wireframes exactly
- [ ] Color palette correct (#0E1117, #7C3AED, etc.)
- [ ] Typography scales as specified
- [ ] Spacing follows 8pt grid
- [ ] Animations match timing specs

---

## Current Status: Phase 1 ✓ Complete

**Next Action:** Begin Phase 2 - Shared Components

**Estimated Completion:** 10 days (2 weeks with buffer)

**Confidence Level:** High (wireframes detailed, tech stack proven)

---

**Document Version:** 1.0  
**Last Updated:** February 14, 2026  
**Owner:** Development Team
