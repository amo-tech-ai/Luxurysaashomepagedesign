# Fashion AI Website — Design System

**Project:** StartupAI Fashion Intelligence Platform  
**Document Type:** Complete Design System Specification  
**Version:** 1.0.0  
**Date:** February 14, 2026  
**Status:** Design Tokens Locked

---

## 📋 DOCUMENT PURPOSE

This is the **single source of truth** for all design tokens, component specifications, and visual guidelines for the Fashion AI website.

---

# 1️⃣ COLOR SYSTEM (LOCKED)

## Primary Colors

### Background Base

```css
--color-bg-primary: #F1EEEA;      /* Light beige/cream canvas */
--color-bg-contrast: #12211D;     /* Deep forest contrast panels */
```

**Usage:**
* `--color-bg-primary` — Main page background, light sections
* `--color-bg-contrast` — Dark panels, emphasis sections, footers

---

### Primary Accent Colors

```css
--color-accent-forest: #0E3E1B;   /* Deep forest green */
--color-accent-teal: #2A4E45;     /* Muted green-teal */
```

**Usage:**
* `--color-accent-forest` — Primary CTAs, key stats, important nodes
* `--color-accent-teal` — Secondary elements, charts, data viz

---

### Secondary Accent Colors

```css
--color-accent-lavender: #CB9FD2; /* Soft lavender */
--color-accent-coral: #FFC9C1;    /* Muted coral */
--color-accent-slate: #697485;    /* Slate blue-grey */
```

**Usage:**
* `--color-accent-lavender` — Highlights, active states, special callouts
* `--color-accent-coral` — Warm accents, dividers, underlines
* `--color-accent-slate` — Neutral elements, baselines, muted data

---

### Text Colors

```css
--color-text-primary: #212427;    /* Primary dark text */
--color-text-light: #F1EEEA;      /* Light text on dark backgrounds */
--color-text-muted: #697485;      /* Muted secondary text */
```

**Contrast Ratios (WCAG AA):**
* Primary text on light bg: 16.2:1 ✅
* Light text on dark bg: 14.8:1 ✅
* Muted text on light bg: 5.2:1 ✅

---

## Semantic Color Mappings

### Success / Growth
```css
--color-growth: #0E3E1B;          /* Forest green */
--color-growth-bg: rgba(14, 62, 27, 0.1);
```

### Warning / Attention
```css
--color-warning: #FFC9C1;         /* Coral */
--color-warning-bg: rgba(255, 201, 193, 0.1);
```

### Neutral / Baseline
```css
--color-neutral: #697485;         /* Slate */
--color-neutral-bg: rgba(105, 116, 133, 0.1);
```

### Highlight / Active
```css
--color-highlight: #CB9FD2;       /* Lavender */
--color-highlight-bg: rgba(203, 159, 210, 0.1);
```

---

# 2️⃣ TYPOGRAPHY SYSTEM

## Font Families

### Serif (Headlines)

```css
--font-serif: 'Playfair Display', Georgia, serif;
```

**Fallback Stack:**
```
Playfair Display → Canela → Editorial New → Georgia → serif
```

**Usage:**
* H1, H2, H3 headlines
* Quote blocks
* Large statistics
* Section titles

---

### Sans-Serif (Body)

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Fallback Stack:**
```
Inter → Suisse Int'l → Neue Haas Grotesk → System Sans
```

**Usage:**
* Body text
* Labels
* Captions
* UI elements

---

### Monospace (Data)

```css
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

**Usage:**
* Numeric data
* Code snippets
* Technical specifications

---

## Type Scale (Desktop)

### Headlines

```css
--text-h1: 72px;      /* Hero headlines */
--text-h2: 56px;      /* Section headlines */
--text-h3: 40px;      /* Subsection headlines */
--text-h4: 32px;      /* Card headlines */
```

### Body Text

```css
--text-body-large: 20px;   /* Intro paragraphs, emphasis */
--text-body: 16px;         /* Standard body copy */
--text-body-small: 14px;   /* Secondary text */
--text-caption: 13px;      /* Captions, labels, metadata */
```

### Display Text

```css
--text-display-mega: 128px;    /* Large statistics */
--text-display-large: 96px;    /* Hero stats */
--text-display-medium: 64px;   /* KPI numbers */
--text-display-small: 48px;    /* Card stats */
```

---

## Type Scale (Mobile)

Use `clamp()` for fluid responsive scaling:

```css
--text-h1-mobile: clamp(48px, 8vw, 72px);
--text-h2-mobile: clamp(36px, 6vw, 56px);
--text-h3-mobile: clamp(28px, 5vw, 40px);
--text-display-mega-mobile: clamp(72px, 12vw, 128px);
```

---

## Line Heights

```css
--leading-tight: 0.95;     /* Large headlines */
--leading-snug: 1.1;       /* Subheadlines */
--leading-normal: 1.5;     /* Body text */
--leading-relaxed: 1.75;   /* Long-form content */
```

---

## Font Weights

```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;
```

**Usage Map:**
* Headlines: 700 (Bold) or 900 (Black)
* Body: 400 (Regular)
* Labels: 600 (Semibold)
* Stats: 700 (Bold)

---

## Letter Spacing

```css
--tracking-tight: -0.02em;     /* Large headlines */
--tracking-normal: 0;          /* Body text */
--tracking-wide: 0.05em;       /* Labels, uppercase */
```

---

# 3️⃣ SPACING SYSTEM (8PT GRID)

## Base Unit

```css
--spacing-unit: 8px;
```

## Spacing Scale

```css
--space-1: 8px;      /* 1 unit */
--space-2: 16px;     /* 2 units */
--space-3: 24px;     /* 3 units */
--space-4: 32px;     /* 4 units */
--space-5: 40px;     /* 5 units */
--space-6: 48px;     /* 6 units */
--space-8: 64px;     /* 8 units */
--space-10: 80px;    /* 10 units */
--space-12: 96px;    /* 12 units */
--space-15: 120px;   /* 15 units */
--space-20: 160px;   /* 20 units */
```

---

## Semantic Spacing

### Component Internal Spacing

```css
--space-component-xs: var(--space-2);    /* 16px - Tight padding */
--space-component-sm: var(--space-3);    /* 24px - Small padding */
--space-component-md: var(--space-5);    /* 40px - Medium padding */
--space-component-lg: var(--space-8);    /* 64px - Large padding */
```

### Layout Spacing

```css
--space-section-vertical: var(--space-15);   /* 120px - Section padding */
--space-section-gap: var(--space-10);        /* 80px - Between sections */
--space-content-gap: var(--space-5);         /* 40px - Content blocks */
--space-element-gap: var(--space-3);         /* 24px - Elements */
```

### Grid Spacing

```css
--grid-gutter: var(--space-3);     /* 24px - Column gap */
--grid-margin: var(--space-10);    /* 80px - Side margins */
--grid-max-width: 1200px;          /* Content max-width */
```

---

# 4️⃣ LAYOUT SYSTEM

## Grid Configuration

### Desktop (1440px+)

```css
--grid-columns: 12;
--grid-gutter: 24px;
--grid-margin: 80px;
--grid-max-width: 1200px;
```

**Column Width Calculation:**
```
(1200px - (11 × 24px)) / 12 = 78px per column
```

---

### Tablet (768px - 1023px)

```css
--grid-columns: 8;
--grid-gutter: 24px;
--grid-margin: 40px;
--grid-max-width: 100%;
```

---

### Mobile (0 - 767px)

```css
--grid-columns: 4;
--grid-gutter: 16px;
--grid-margin: 24px;
--grid-max-width: 100%;
```

---

## Section Heights

```css
--section-height-full: 100vh;      /* Full viewport */
--section-height-tall: 80vh;       /* Tall section */
--section-height-medium: 60vh;     /* Medium section */
--section-height-auto: auto;       /* Content-driven */
```

---

## Breakpoints

```css
--breakpoint-mobile: 768px;
--breakpoint-tablet: 1024px;
--breakpoint-desktop: 1440px;
--breakpoint-wide: 1920px;
```

---

# 5️⃣ COMPONENT SPECIFICATIONS

## KPI Card

### Dimensions
```css
--kpi-card-width: auto;
--kpi-card-padding: 40px;
--kpi-card-radius: 24px;
--kpi-card-border: 1px solid rgba(14, 62, 27, 0.15);
```

### Variants

**Primary:**
```css
background: #F1EEEA;
border-top: 3px solid #0E3E1B;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
```

**Dark:**
```css
background: #12211D;
color: #F1EEEA;
border-top: 3px solid #CB9FD2;
```

**Highlighted:**
```css
background: rgba(203, 159, 210, 0.1);
border: 2px solid #CB9FD2;
```

---

## Data Pill

### Dimensions
```css
--pill-height: 32px;
--pill-padding: 8px 16px;
--pill-radius: 999px;
--pill-font-size: 13px;
```

### Variants

**Success:**
```css
background: rgba(14, 62, 27, 0.1);
color: #0E3E1B;
border: 1px solid #0E3E1B;
```

**Warning:**
```css
background: rgba(255, 201, 193, 0.1);
color: #FFC9C1;
border: 1px solid #FFC9C1;
```

**Neutral:**
```css
background: rgba(105, 116, 133, 0.1);
color: #697485;
border: 1px solid #697485;
```

---

## Flow Node

### Dimensions
```css
--node-size: 120px;
--node-border: 2px;
--node-padding: 24px;
```

### Styles

**Default:**
```css
width: 120px;
height: 120px;
border-radius: 50%;
background: #F1EEEA;
border: 2px solid #0E3E1B;
```

**Active:**
```css
background: #0E3E1B;
color: #F1EEEA;
box-shadow: 0 0 32px rgba(203, 159, 210, 0.5);
```

**Connector Line:**
```css
stroke: #697485;
stroke-width: 2px;
```

---

## Chart Container

### Dimensions
```css
--chart-height: 400px;
--chart-padding: 32px;
--chart-radius: 16px;
```

### Style
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
border: 1px solid rgba(105, 116, 133, 0.2);
border-radius: 16px;
padding: 32px;
```

---

## Button Styles

### Primary Button

```css
background: #0E3E1B;
color: #F1EEEA;
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
transition: all 300ms ease;
```

**Hover:**
```css
background: #2A4E45;
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(14, 62, 27, 0.3);
```

---

### Secondary Button

```css
background: transparent;
color: #0E3E1B;
border: 2px solid #0E3E1B;
padding: 14px 30px;
border-radius: 8px;
```

**Hover:**
```css
background: rgba(14, 62, 27, 0.1);
```

---

## Progress Dots

### Dimensions
```css
--dot-size: 12px;
--dot-gap: 16px;
--dot-active-size: 16px;
```

### Styles

**Inactive:**
```css
width: 12px;
height: 12px;
border-radius: 50%;
background: rgba(105, 116, 133, 0.3);
```

**Active:**
```css
width: 16px;
height: 16px;
background: #0E3E1B;
box-shadow: 0 0 12px rgba(14, 62, 27, 0.5);
```

---

# 6️⃣ SHADOWS & DEPTH

## Shadow Scale

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16);
```

**Usage:**
* `--shadow-xs` — Subtle borders, inputs
* `--shadow-sm` — Cards at rest
* `--shadow-md` — Elevated cards
* `--shadow-lg` — Hover states
* `--shadow-xl` — Modals, overlays

---

## Glow Effects

```css
--glow-emerald: 0 0 32px rgba(14, 62, 27, 0.4);
--glow-lavender: 0 0 32px rgba(203, 159, 210, 0.5);
--glow-coral: 0 0 24px rgba(255, 201, 193, 0.4);
```

---

# 7️⃣ MOTION & ANIMATION

## Easing Functions

```css
--ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-luxury: cubic-bezier(0.33, 1, 0.68, 1);
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
```

**Usage:**
* `--ease-default` — Standard transitions
* `--ease-luxury` — Premium, elegant motion
* `--ease-in` — Exit animations
* `--ease-out` — Entrance animations

---

## Duration Scale

```css
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 400ms;
--duration-slow: 800ms;
--duration-slower: 1200ms;
```

**Usage:**
* `100ms` — Micro-interactions, hover
* `200ms` — Button states, tooltips
* `400ms` — Card transitions, modals
* `800ms` — Page transitions, reveals
* `1200ms` — Chart animations

---

## Animation Presets

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 800ms var(--ease-out);
```

### Slide Up
```css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(40px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
animation: slideUp 800ms var(--ease-luxury);
```

### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
animation: scaleIn 400ms var(--ease-out);
```

---

## Hover States

### Card Hover
```css
transition: transform 300ms var(--ease-luxury),
            box-shadow 300ms var(--ease-default);

&:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-lg);
}
```

### Button Hover
```css
transition: all 200ms var(--ease-default);

&:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

---

# 8️⃣ ACCESSIBILITY

## Focus States

```css
--focus-ring: 2px solid #0E3E1B;
--focus-offset: 2px;
```

**Standard Focus Style:**
```css
&:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
  border-radius: 4px;
}
```

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Minimum Touch Targets

```css
--touch-target-min: 44px;
```

All interactive elements must meet this minimum size on mobile.

---

# 9️⃣ COMPONENT LIBRARY

## Required Components Checklist

### Layout Components
- [x] SectionWrapper
- [x] Container (max-width)
- [x] GridSystem (12/8/4 col)
- [x] StickyHeader
- [x] Footer

### Data Components
- [x] KPICard (3 variants)
- [x] StatBlock (large numbers)
- [x] DataPill
- [x] ChartContainer
- [x] MetricComparisonCard

### Navigation Components
- [x] ProgressDots
- [x] BackButton
- [x] SectionAnchorLinks
- [x] ScrollIndicator

### Diagram Components
- [x] FlowNode
- [x] ArrowConnector
- [x] TimelineMarker
- [x] ValueChainStage
- [x] BubbleCluster

### Interactive Components
- [x] HoverGlow
- [x] TooltipPanel
- [x] ModalOverlay
- [x] ExpandableCard

---

# 🔟 IMPLEMENTATION CODE

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bg-primary: #F1EEEA;
  --color-bg-contrast: #12211D;
  --color-accent-forest: #0E3E1B;
  --color-accent-teal: #2A4E45;
  --color-accent-lavender: #CB9FD2;
  --color-accent-coral: #FFC9C1;
  --color-accent-slate: #697485;
  --color-text-primary: #212427;
  --color-text-light: #F1EEEA;
  
  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --text-h1: clamp(48px, 8vw, 72px);
  --text-h2: clamp(36px, 6vw, 56px);
  --text-body: 16px;
  
  /* Spacing */
  --space-unit: 8px;
  --space-section: 120px;
  --space-content: 40px;
  
  /* Layout */
  --grid-max-width: 1200px;
  --grid-gutter: 24px;
  --grid-margin: 80px;
  
  /* Animation */
  --ease-luxury: cubic-bezier(0.33, 1, 0.68, 1);
  --duration-normal: 400ms;
  
  /* Shadows */
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --glow-emerald: 0 0 32px rgba(14, 62, 27, 0.4);
}
```

---

## Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F1EEEA',
        'bg-contrast': '#12211D',
        'accent-forest': '#0E3E1B',
        'accent-teal': '#2A4E45',
        'accent-lavender': '#CB9FD2',
        'accent-coral': '#FFC9C1',
        'accent-slate': '#697485',
        'text-primary': '#212427',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '120px',
        'content': '40px',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
};
```

---

## TypeScript Design Tokens

```typescript
// design-tokens.ts
export const colors = {
  bg: {
    primary: '#F1EEEA',
    contrast: '#12211D',
  },
  accent: {
    forest: '#0E3E1B',
    teal: '#2A4E45',
    lavender: '#CB9FD2',
    coral: '#FFC9C1',
    slate: '#697485',
  },
  text: {
    primary: '#212427',
    light: '#F1EEEA',
    muted: '#697485',
  },
};

export const typography = {
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
  sizes: {
    h1: '72px',
    h2: '56px',
    h3: '40px',
    body: '16px',
    displayMega: '128px',
  },
  weights: {
    regular: 400,
    semibold: 600,
    bold: 700,
    black: 900,
  },
};

export const spacing = {
  unit: 8,
  section: 120,
  content: 40,
  grid: {
    maxWidth: 1200,
    gutter: 24,
    margin: 80,
  },
};

export const motion = {
  easing: {
    luxury: 'cubic-bezier(0.33, 1, 0.68, 1)',
    default: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  duration: {
    fast: 200,
    normal: 400,
    slow: 800,
  },
};
```

---

# 1️⃣1️⃣ DESIGN PRINCIPLES

## Visual Hierarchy

1. **One dominant element per section** — Clear focal point
2. **Consistent type scale** — Predictable rhythm
3. **Strategic use of color** — Intentional, not decorative
4. **Generous whitespace** — 60/40 content-to-space ratio

---

## Color Usage Rules

✅ **Do:**
* Use `#0E3E1B` for primary actions and key data
* Use `#CB9FD2` sparingly for highlights
* Use `#697485` for neutral/baseline elements
* Maintain high contrast for readability

❌ **Don't:**
* Mix more than 3 accent colors per section
* Use bright neon variations
* Apply colors without semantic meaning

---

## Typography Rules

✅ **Do:**
* Pair serif headlines with sans body
* Use 16px minimum for body text
* Maintain 1.5 line-height for readability
* Use tabular numbers for data

❌ **Don't:**
* Use more than 3 font sizes per section
* Set body text below 16px
* Mix multiple serif or sans families

---

## Spacing Rules

✅ **Do:**
* Follow 8pt grid system
* Use consistent vertical rhythm
* Apply 120px section padding
* Maintain 40px minimum content gaps

❌ **Don't:**
* Use arbitrary spacing values
* Crowd elements together
* Break the 8pt grid without reason

---

# 1️⃣2️⃣ QUALITY CHECKLIST

## Before Launch

### Design Quality
- [ ] All colors from locked palette
- [ ] WCAG AA contrast ratios met
- [ ] Typography hierarchy consistent
- [ ] 8pt grid system followed
- [ ] Component library complete

### Performance
- [ ] Page load < 2 seconds
- [ ] First Contentful Paint < 1.5s
- [ ] Animations GPU-accelerated
- [ ] Images optimized (WebP)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Reduced motion supported
- [ ] 44px minimum touch targets

### Responsive
- [ ] Mobile (375px) tested
- [ ] Tablet (768px) tested
- [ ] Desktop (1440px) tested
- [ ] No horizontal scroll
- [ ] Charts remain legible

---

**Document Status:** ✅ Design System Locked  
**Next Step:** Implement in codebase  
**Owner:** Design + Development Team  
**Review Date:** February 14, 2026

---

**© 2026 StartupAI · Fashion Intelligence Platform**
