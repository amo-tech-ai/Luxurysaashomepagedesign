# BCG × AI Industry — Infographic Design System

**Status:** 🎨 **Design Plan Complete** — Ready for Implementation  
**Date:** February 12, 2026  
**Theme:** Consumers Trust AI to Buy Better — BCG CCI Report Adaptation  
**URL:** `/bcg-ai-consumer-infographic`

---

## 🎯 Project Overview

### **Vision Statement**
Create a **scroll-driven visual storytelling experience** that transforms BCG's Consumer AI research into an elegant, interactive infographic journey. The page will feel like a premium editorial magazine spread brought to life — calm, intelligent, data-rich, and beautifully animated.

### **Design Philosophy**
- **90% neutral, 10% accent** (BCG principle)
- **Light typography** (DM Sans 300 for headlines)
- **Visual-first hierarchy** (charts before text)
- **Scroll-driven reveals** (Bloomberg Terminal meets Linear.app)
- **Premium restraint** (no decorative elements)

### **Target Experience**
- **Desktop:** Full cinematic scroll with parallax depth layers
- **Tablet:** Optimized single-column with scroll reveals
- **Mobile:** Streamlined vertical flow with touch-friendly interactions

---

## 📊 Page Structure & Content Map

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  SCROLL-DRIVEN STORYTELLING SEQUENCE                           │
│  ════════════════════════════════════════════════════════      │
│                                                                │
│  00. HERO SECTION                                              │
│      └─ Full-screen stat reveal + animated donut               │
│                                                                │
│  01. CONTEXT INTRO                                             │
│      └─ BCG study overview + methodology card                  │
│                                                                │
│  02. EXHIBIT 1: Adoption Growth (Year-over-Year)               │
│      └─ Grouped bar chart with change deltas                   │
│                                                                │
│  03. EXHIBIT 2: Purchase Pathway Functions                     │
│      └─ Icon card row with circular backgrounds                │
│                                                                │
│  04. EXHIBIT 3: Category Penetration                           │
│      └─ Horizontal bars + donut callout                        │
│                                                                │
│  05. GLOBAL INSIGHTS GRID                                      │
│      └─ Stat cards with country highlights                     │
│                                                                │
│  06. CONSUMER PERCEPTION                                       │
│      └─ Quote cards + sentiment diagram                        │
│                                                                │
│  07. STRATEGIC IMPLICATIONS                                    │
│      └─ Flowchart: What Brands Must Do                         │
│                                                                │
│  08. DATA SOURCES & METHODOLOGY                                │
│      └─ Footnotes, citations, sample size                      │
│                                                                │
│  09. FOOTER NAVIGATION                                         │
│      └─ Back to resources, share, export PDF                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Design System Tokens

### **Typography (BCG-Adapted)**

```css
/* Primary Font Stack */
--font-primary: 'DM Sans', -apple-system, sans-serif;
--font-accent: 'Cormorant Garamond', Georgia, serif;

/* Hierarchy */
--text-hero: 300 72px/1.1 var(--font-accent);      /* Serif stat numbers */
--text-h1: 300 56px/1.2 var(--font-primary);       /* LIGHT weight (BCG key) */
--text-h2: 300 36px/1.3 var(--font-primary);       /* Section titles */
--text-h3: 400 24px/1.4 var(--font-primary);       /* Subsections */
--text-exhibit-label: 600 12px/1 var(--font-primary); /* UPPERCASE, tracked */
--text-body: 400 16px/1.6 var(--font-primary);     /* Readable line-height */
--text-source: 400 11px/1.5 var(--font-primary);   /* Citations */

/* Tracking (Letter-spacing) */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
--tracking-wider: 0.1em;
```

### **Color System (BCG-Inspired)**

```css
/* Neutral Foundation (90% of page) */
--bg-primary: #FAFAF8;        /* Warm ivory background */
--surface: #FFFFFF;            /* Cards, exhibits */
--surface-alt: #F5F3EF;       /* Chart tracks, muted panels */
--border: #E6E2DC;             /* Subtle warm gray */

/* Text Hierarchy */
--text-primary: #1E1E1C;       /* Headlines, near-black */
--text-secondary: #4A4744;     /* Body text */
--text-muted: #8A8580;         /* Labels, captions */
--text-dimmed: #BAB5AE;        /* Watermarks, disabled */

/* Accent Green (10% of page — BCG signature) */
--accent-green: #2D6B4D;       /* Primary accent (BCG-adjacent) */
--accent-green-light: #E8F2EC; /* Tinted backgrounds */
--accent-green-dark: #1A4A33;  /* Hover states */

/* Data Visualization Palette */
--data-2023: #006838;          /* Dark green (baseline) */
--data-2025: #4CAF50;          /* Light green (comparison) */
--data-sage: #5C8A68;          /* Success indicators */
--data-gold: #B8941F;          /* Financial stats */
--data-rose: #B08D83;          /* StartupAI warmth accent */

/* Semantic Colors */
--success: #4CAF50;
--warning: #F59E0B;
--error: #EF4444;
```

### **Spacing Scale (8px Grid)**

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;
--space-16: 128px;
--space-20: 160px;
```

### **Border Radius (Minimal)**

```css
--radius-none: 0px;            /* BCG default */
--radius-sm: 2px;              /* Bars, subtle elements */
--radius-md: 4px;              /* Cards */
--radius-lg: 8px;              /* Large containers */
--radius-full: 9999px;         /* Circular elements */
```

### **Shadows (Subtle Elevation)**

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.08);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.09);

/* BCG Note: Use shadows SPARINGLY — prefer borders for separation */
```

---

## 📐 Section-by-Section Wireframes

### **SECTION 00: HERO — Full-Screen Stat Reveal**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [100vh full-screen section]                                 │
│                                                              │
│                    KEY FINDING                               │ ← Label (green, 12px caps)
│                                                              │
│                       62%                                    │ ← Huge stat (Cormorant 72px)
│                                                              │
│         of consumers now use GenAI for                       │ ← Context (DM Sans 24px light)
│         research and information                             │
│                                                              │
│         ↑ Up 20 percentage points since 2023                 │ ← Delta (16px, green)
│                                                              │
│                                                              │
│                   ╭─────────────╮                            │
│                   │             │                            │
│                   │    ╭───╮    │                            │ ← Animated donut
│                   │    │64%│    │                            │   (fills on scroll)
│                   │    ╰───╯    │                            │
│                   │             │                            │
│                   │  use AI in  │                            │
│                   │ 3+ categories│                            │
│                   ╰─────────────╯                            │
│                                                              │
│                        ↓ Scroll to explore                   │ ← Scroll hint (animated)
│                                                              │
│  Source: BCG CCI GenAI Consumer Usage survey, Nov 2025       │ ← Footer (11px muted)
└──────────────────────────────────────────────────────────────┘

ANIMATION SEQUENCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
0.0s → Label fades in
0.3s → "62%" counter rolls up from 0 (1.2s duration)
0.5s → Context text slides up (opacity 0 → 1)
0.8s → Delta appears with green highlight
1.5s → Donut ring fills (1s animation)
2.0s → Scroll hint pulses gently (infinite loop)

SCROLL BEHAVIOR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Hero content fades out as user scrolls down (opacity 1 → 0.3)
- Donut scales down slightly (scale 1 → 0.9)
- Background color transitions to white (#FAFAF8 → #FFFFFF)
```

**Design Specs:**
```typescript
interface HeroSection {
  layout: 'flex-column';
  minHeight: '100vh';
  background: 'linear-gradient(180deg, #FAFAF8 0%, #FFFFFF 100%)';
  padding: '0 var(--space-6)';
  textAlign: 'center';
  
  components: {
    label: {
      fontSize: '12px';
      fontWeight: 600;
      color: 'var(--accent-green)';
      textTransform: 'uppercase';
      letterSpacing: '0.1em';
      marginBottom: 'var(--space-3)';
    };
    
    stat: {
      fontSize: '72px';
      fontWeight: 400;
      fontFamily: 'var(--font-accent)';
      color: 'var(--text-primary)';
      lineHeight: 1.1;
      marginBottom: 'var(--space-2)';
    };
    
    context: {
      fontSize: '24px';
      fontWeight: 300;
      color: 'var(--text-secondary)';
      maxWidth: '600px';
      lineHeight: 1.4;
    };
    
    donut: {
      width: '200px';
      height: '200px';
      strokeWidth: '20px';
      strokeColor: 'var(--accent-green)';
      trackColor: 'var(--surface-alt)';
      marginTop: 'var(--space-8)';
    };
  };
}
```

---

### **SECTION 01: CONTEXT INTRO — Study Overview**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [80vh section, white background]                            │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ ABOUT THIS RESEARCH                                 │    │ ← Uppercase label
│  │                                                     │    │
│  │ The BCG Center for Consumer Insight surveyed       │    │
│  │ 9,000+ consumers across 9 countries to understand  │    │
│  │ how GenAI is reshaping shopping behaviors.         │    │
│  │                                                     │    │
│  │ ┌──────────────┬──────────────┬──────────────┐     │    │
│  │ │   9,000+     │      9       │  Nov 2025    │     │    │ ← Stat cards
│  │ │ Respondents  │  Countries   │  Conducted   │     │    │
│  │ └──────────────┴──────────────┴──────────────┘     │    │
│  │                                                     │    │
│  │ Countries: Brazil, China, France, Germany, India,  │    │
│  │ Japan, Mexico, United Kingdom, United States       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘

SCROLL REVEAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Container slides up from bottom (translateY 40px → 0)
- Stat cards stagger in left to right (100ms delay each)
- Green accent border draws in from left (width 0 → 100%)
```

**Design Specs:**
```typescript
interface ContextCard {
  layout: 'card';
  maxWidth: '840px';
  margin: '0 auto';
  padding: 'var(--space-6)';
  background: 'var(--surface)';
  border: '1px solid var(--border)';
  borderRadius: 'var(--radius-md)';
  
  statCards: {
    display: 'grid';
    gridTemplateColumns: 'repeat(3, 1fr)';
    gap: 'var(--space-4)';
    marginTop: 'var(--space-5)';
    
    card: {
      textAlign: 'center';
      padding: 'var(--space-4)';
      background: 'var(--accent-green-light)';
      borderRadius: 'var(--radius-sm)';
      
      value: {
        fontSize: '36px';
        fontWeight: 400;
        fontFamily: 'var(--font-accent)';
        color: 'var(--accent-green)';
      };
      
      label: {
        fontSize: '12px';
        fontWeight: 400;
        color: 'var(--text-muted)';
        marginTop: 'var(--space-1)';
      };
    };
  };
}
```

---

### **SECTION 02: EXHIBIT 1 — Adoption Growth (Year-over-Year)**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  EXHIBIT 1                                                   │ ← Green label
│                                                              │
│  Consumers Increasingly Use GenAI                            │ ← Light headline (28px)
│  As Part of Everyday Behaviors                               │
│                                                              │
│  Change                                                      │
│  since 2023   +20      +15      NA      +14      +15         │ ← Change deltas
│   (pp)                                                       │   (green, above bars)
│                                                              │
│  % of users  ┌──┐┌──┐ ┌──┐┌──┐ ┌──┐ ┌──┐┌──┐ ┌──┐┌──┐      │
│  who have    │43││62│ │31││46│ │43│ │26││40│ │22││37│      │ ← Values inside bars
│  used GenAI  │  ││  │ │  ││  │ │  │ │  ││  │ │  ││  │      │
│              │▓▓││░░│ │▓▓││░░│ │░░│ │▓▓││░░│ │▓▓││░░│      │
│              └──┘└──┘ └──┘└──┘ └──┘ └──┘└──┘ └──┘└──┘      │
│                                                              │
│              Research  Work   Brands  Lang   Assistant       │ ← Category labels
│                                                              │
│              ● 2023    ● 2025                                │ ← Legend
│                                                              │
│  Source: BCG CCI GenAI Consumer Usage survey, Nov 2025.      │
│  Respondents asked: "Which of the following have you used    │
│  GenAI tools for?" n = 9,000+                                │
└──────────────────────────────────────────────────────────────┘

GROUPED BAR CHART SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LAYOUT:
- Container: max-width 940px, padding 40px, background #FFFFFF
- Left annotation: 20% width, vertical text
- Chart area: 80% width

BARS:
- Bar width: 32px
- Bar gap (within group): 4px
- Group gap: 48px
- Bar radius: 2px top, 0 bottom
- Bar colors:
  - 2023 (dark green): #006838
  - 2025 (light green): #4CAF50

VALUE LABELS (inside bars):
- Font: DM Sans 600, 13px
- Color: #FFFFFF
- Position: centered vertically and horizontally

CHANGE LABELS (above bars):
- Font: DM Sans 600, 13px
- Color: var(--accent-green)
- Format: "+20", "+15", "NA"
- Position: 8px above top of tallest bar in group

CATEGORY LABELS (below bars):
- Font: DM Sans 400, 12px
- Color: var(--text-muted)
- Max-width: 100px
- Text-align: center
- Line-height: 1.3 (allows wrapping)

ANIMATION ON SCROLL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Exhibit label fades in (0.3s)
2. Title slides up (0.4s)
3. Axis labels appear (0.3s)
4. Bars grow from bottom to top (0.8s each, 100ms stagger per group)
5. Value labels fade in (0.3s, after bar fills 50%)
6. Change deltas pop in (0.2s, after bars complete)
7. Legend + source fade in (0.4s)

INTERACTION:
- Hover bar: brightness(1.1), cursor: pointer
- Click bar: Show detailed breakdown in modal
```

**Component Code Structure:**
```typescript
interface GroupedBarChart {
  data: {
    category: string;
    baseline: number;      // 2023 value
    comparison: number;    // 2025 value
    change: number | 'NA'; // Change in percentage points
  }[];
  
  colors: {
    baseline: '#006838';
    comparison: '#4CAF50';
    changeLabel: 'var(--accent-green)';
  };
  
  dimensions: {
    barWidth: 32;
    barGap: 4;
    groupGap: 48;
    height: 400;
  };
  
  animation: {
    barGrow: {
      duration: 800;
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)';
      stagger: 100;
    };
    valueLabel: {
      delay: 400;
      duration: 300;
    };
  };
}
```

---

### **SECTION 03: EXHIBIT 2 — Purchase Pathway Functions**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  EXHIBIT 2                                                   │
│                                                              │
│  How GenAI Plays a Role Along Purchase Pathways              │
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐│
│  │  (○)   │  │  (○)   │  │  (○)   │  │  (○)   │  │  (○)   ││ ← Circular icons
│  │  🔍💰   │  │  🏆    │  │  ⚖️    │  │  🏪    │  │  📄    ││   (flat, no gradients)
│  │        │  │        │  │        │  │        │  │        ││
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘│
│  Comparing   Searching   Comparing   Discovering Summarizing│ ← Labels below
│  prices &    for         products &  where to    reviews    │
│  deals       recs        features    buy                    │
│                                                              │
│  Source: BCG CCI GenAI Consumer Usage survey, Nov 2025       │
└──────────────────────────────────────────────────────────────┘

ICON CARD SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CARD LAYOUT:
- Display: flex row
- Gap: 24px
- Each card: width 20% (5 cards)

ICON CIRCLE:
- Diameter: 120px
- Background colors (alternating priority):
  - Primary: var(--accent-green)
  - Secondary: #8B7E6E (taupe/muted)
- Border-radius: 50%
- Icon size: 48px
- Icon color: #FFFFFF
- Center: flex, align center, justify center

LABEL:
- Font: DM Sans 500, 14px
- Color: var(--accent-green) for primary cards
- Color: #8B7E6E for secondary cards
- Text-align: center
- Max-width: 140px
- Margin-top: 12px
- Line-height: 1.3

ANIMATION:
- Cards slide up in sequence (100ms stagger)
- Icons fade in after card appears (200ms delay)
- Slight scale on hover (1.0 → 1.05)

RESPONSIVE:
- Desktop: 5 cards in row
- Tablet: 3 cards in row, wrap to 2nd row
- Mobile: 1 card per row, vertical stack
```

---

### **SECTION 04: EXHIBIT 3 — Category Penetration**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  EXHIBIT 3                                                   │
│                                                              │
│  AI Is Used Nearly Everywhere, from Electronics              │
│  to Everyday Essentials                                      │
│                                                              │
│  ┌────────────────────────────┬──────────────────────────┐  │
│  │ LEFT (55% width)           │ RIGHT (45% width)        │  │
│  │                            │                          │  │
│  │ Consumer electronics       │        ╭─────────╮      │  │
│  │ ████████████████████ 60%   │        │         │      │  │
│  │                            │        │  ╭───╮  │      │  │
│  │ Travel                     │        │  │64%│  │      │  │ ← Donut callout
│  │ ████████████████ 51%       │        │  ╰───╯  │      │  │
│  │                            │        │         │      │  │
│  │ Grocery/food               │        │ use AI  │      │  │
│  │ ██████████████ 44%         │        │ in 3+   │      │  │
│  │                            │        │ product │      │  │
│  │ Apparel                    │        │ cats    │      │  │
│  │ █████████████ 43%          │        ╰─────────╯      │  │
│  │                            │                          │  │
│  │ Entertainment              │                          │  │
│  │ █████████████ 43%          │                          │  │
│  │                            │                          │  │
│  │ Services                   │                          │  │
│  │ ████████████ 41%           │                          │  │
│  │                            │                          │  │
│  │ Beauty/personal care       │                          │  │
│  │ ███████████ 37%            │                          │  │
│  │                            │                          │  │
│  │ Health care                │                          │  │
│  │ █████████ 33%              │                          │  │
│  └────────────────────────────┴──────────────────────────┘  │
│                                                              │
│  Source: BCG CCI GenAI Consumer Usage survey, Nov 2025.      │
│  n = 367 (consumers who use GenAI in purchase journey)       │
└──────────────────────────────────────────────────────────────┘

HORIZONTAL BAR CHART SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEFT PANEL (55%):
- Bar height: 28px
- Bar gap: 16px
- Bar color: var(--accent-green)
- Bar radius: 2px
- No visible track (transparent)

CATEGORY LABEL (left of bar):
- Font: DM Sans 400, 14px
- Color: var(--text-secondary)
- Width: 220px (fixed for alignment)
- Text-align: left

VALUE LABEL (right of bar):
- Font: DM Sans 600, 14px
- Color: var(--accent-green)
- Position: 8px right of bar end
- Format: "60%" (no decimals)

RIGHT PANEL (45%):
- Donut diameter: 180px
- Stroke width: 20px
- Stroke color: var(--accent-green)
- Track color: var(--surface-alt)
- Center aligned vertically

DONUT CENTER:
- Number: Cormorant Garamond 400, 48px, var(--accent-green)
- Description: DM Sans 400, 14px, var(--text-secondary)
- Max-width: 200px
- Text-align: center
- Line-height: 1.4

ANIMATION:
- Left bars grow left to right (0.8s each, 50ms stagger)
- Value labels fade in after bar reaches 80% (0.3s)
- Donut fills clockwise (1s, starts when visible)
- Center number rolls up from 0 → 64 (1.2s)

PARALLAX EFFECT:
- Left panel scrolls at 1x speed (normal)
- Right panel scrolls at 0.8x speed (slower)
- Creates depth separation
```

---

### **SECTION 05: GLOBAL INSIGHTS GRID**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  GLOBAL INSIGHTS                                             │
│                                                              │
│  How AI Adoption Varies by Country                           │
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┬────────────┐│
│  │   INDIA      │    CHINA     │     US       │   JAPAN    ││
│  │              │              │              │            ││
│  │     94%      │     88%      │     76%      │    68%     ││ ← Stat numbers
│  │  Awareness   │  Awareness   │  Awareness   │ Awareness  ││   (large serif)
│  │              │              │              │            ││
│  │   ┌─────┐    │   ┌─────┐    │   ┌─────┐    │  ┌─────┐  ││
│  │   │ 62% │    │   │ 58% │    │   │ 42% │    │  │ 31% │  ││ ← Usage %
│  │   └─────┘    │   └─────┘    │   └─────┘    │  └─────┘  ││   (bar)
│  │   Usage      │   Usage      │   Usage      │  Usage    ││
│  │              │              │              │            ││
│  │ 🏆 Highest   │   Strong     │   Growing    │ Cautious  ││ ← Label
│  │  globally    │  adoption    │   interest   │  adopters ││
│  └──────────────┴──────────────┴──────────────┴────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ KEY INSIGHT                                         │    │
│  │                                                     │    │
│  │ India leads both awareness (94%) and usage (62%)   │    │
│  │ among countries surveyed. Cultural comfort with    │    │
│  │ technology and mobile-first behaviors drive early  │    │
│  │ GenAI adoption for shopping and research.          │    │
│  └─────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘

STAT CARD GRID SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GRID LAYOUT:
- Display: grid
- Columns: repeat(4, 1fr)
- Gap: 24px
- Responsive: 2 cols on tablet, 1 col on mobile

CARD DESIGN:
- Background: var(--surface)
- Border: 1px solid var(--border)
- Padding: 32px
- Border-radius: var(--radius-md)
- Text-align: center

COUNTRY NAME:
- Font: DM Sans 600, 12px, uppercase
- Color: var(--text-muted)
- Letter-spacing: 0.1em

AWARENESS STAT:
- Font: Cormorant Garamond 400, 48px
- Color: var(--text-primary)
- Line-height: 1
- Margin-bottom: 4px

USAGE BAR:
- Width: 100%
- Height: 8px
- Background: var(--surface-alt)
- Border-radius: 4px
- Inner fill: var(--accent-green)
- Animated fill on scroll (0.8s)

LABEL/BADGE:
- Background: var(--accent-green-light)
- Padding: 4px 12px
- Border-radius: 12px
- Font: DM Sans 500, 12px
- Color: var(--accent-green)
- Margin-top: 16px

ANIMATION:
- Cards fade in + slide up (stagger 100ms)
- Stats count up from 0 (1s duration)
- Usage bars fill left to right (0.8s)
```

---

### **SECTION 06: CONSUMER PERCEPTION**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  WHAT CONSUMERS VALUE IN GENAI                               │
│                                                              │
│  "Direct, Objective, Transparent, Personalized"              │ ← Pull quote
│                                                              │
│  ┌────────────────┬────────────────┬────────────────┐        │
│  │   DIRECT       │   OBJECTIVE    │  TRANSPARENT   │        │
│  │                │                │                │        │
│  │ "No sales      │ "No brand bias"│ "Shows sources"│        │ ← Quote cards
│  │  pressure"     │                │                │        │
│  │                │  81% trust     │  74% value     │        │
│  │  89% agree     │  AI results    │  citations     │        │
│  └────────────────┴────────────────┴────────────────┘        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ SENTIMENT DIAGRAM                                    │   │
│  │                                                      │   │
│  │         POSITIVE ────────────────── 76%              │   │ ← Horizontal bar
│  │         NEUTRAL  ────────── 18%                      │   │   sentiment
│  │         NEGATIVE ─── 6%                              │   │   breakdown
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ "It helped clarify what I wanted when I wasn't sure."│    │ ← Testimonial
│  │                                                      │    │
│  │ — Survey respondent, US, Age 28                      │    │
│  └─────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘

QUOTE CARD SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CARD LAYOUT:
- Display: grid, 3 columns
- Gap: 24px
- Each card: background var(--accent-green-light)
- Padding: 32px
- Border-radius: var(--radius-md)
- Border-left: 4px solid var(--accent-green)

CARD CONTENT:
- Title: DM Sans 600, 18px, var(--accent-green)
- Quote: DM Sans 400, 16px, var(--text-secondary), italic
- Stat: Cormorant Garamond 400, 36px, var(--accent-green)
- Label: DM Sans 400, 13px, var(--text-muted)

SENTIMENT BAR:
- Each segment: height 32px
- Colors:
  - Positive: var(--accent-green)
  - Neutral: #8B7E6E
  - Negative: #999
- Border-radius on ends
- Percentage labels inside (white text)

ANIMATION:
- Cards slide in from bottom (stagger 150ms)
- Sentiment bars grow left to right (sequential, 0.8s each)
- Testimonial fades in last (0.5s)
```

---

### **SECTION 07: STRATEGIC IMPLICATIONS — Flowchart**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  WHAT BRANDS MUST DO                                         │
│                                                              │
│  Strategic Implications for Business                         │
│                                                              │
│  ┌──────────────┐                                            │
│  │   CONSUMER   │                                            │
│  │    REALITY   │                                            │
│  │              │                                            │
│  │ 62% use GenAI│                                            │
│  │ for research │                                            │
│  └───────┬──────┘                                            │
│          │                                                   │
│          ↓                                                   │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │  OPTIMIZE    │   PROVIDE    │   ENSURE     │             │ ← 3 action boxes
│  │              │              │              │             │
│  │ • SEO for AI │ • Structured │ • Accurate   │             │
│  │ • Clear data │   data       │   info       │             │
│  │ • FAQs       │ • Rich text  │ • Source     │             │
│  └──────────────┴──────────────┴──────────────┘             │
│          │            │            │                         │
│          └────────────┴────────────┘                         │
│                      ↓                                       │
│          ┌──────────────────────┐                            │
│          │     COMPETITIVE      │                            │
│          │     ADVANTAGE        │                            │ ← Outcome box
│          │                      │                            │
│          │ Brands that adapt    │                            │
│          │ will capture GenAI-  │                            │
│          │ driven shoppers      │                            │
│          └──────────────────────┘                            │
└──────────────────────────────────────────────────────────────┘

FLOWCHART SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BOX TYPES:

1. START BOX (top):
   - Background: var(--accent-green)
   - Color: #FFFFFF
   - Padding: 32px
   - Border-radius: 8px
   - Text-align: center

2. ACTION BOXES (middle):
   - Background: var(--surface)
   - Border: 2px solid var(--accent-green)
   - Padding: 24px
   - Border-radius: 4px
   - Display: flex column

3. OUTCOME BOX (bottom):
   - Background: var(--accent-green-light)
   - Border: 2px solid var(--accent-green)
   - Padding: 32px
   - Border-radius: 8px

CONNECTORS:
- SVG arrows
- Stroke: var(--accent-green)
- Stroke-width: 2px
- Arrow head: triangle

ANIMATION:
- Start box fades in (0.3s)
- Arrow draws top to bottom (0.5s)
- Action boxes appear in sequence (0.3s each, 100ms stagger)
- Converging arrows draw (0.5s)
- Outcome box scales in (0.4s)
```

---

### **SECTION 08: DATA SOURCES & METHODOLOGY**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  RESEARCH METHODOLOGY                                        │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ SOURCE DETAILS                                     │     │
│  │                                                    │     │
│  │ BCG Center for Consumer Insight (CCI)             │     │
│  │ GenAI Consumer Usage Survey                       │     │
│  │ November 2025                                     │     │
│  │                                                    │     │
│  │ Sample: n = 9,000+ consumers                      │     │
│  │ Countries: Brazil, China, France, Germany, India, │     │
│  │ Japan, Mexico, United Kingdom, United States      │     │
│  │                                                    │     │
│  │ Methodology: Online survey, representative        │     │
│  │ sampling by age, gender, region                   │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ RELATED PUBLICATIONS                               │     │
│  │                                                    │     │
│  │ → "Consumers Trust AI to Buy Better"              │     │ ← Links
│  │   BCG, December 2025                              │     │
│  │                                                    │     │
│  │ → "The GenAI Shopping Revolution"                 │     │
│  │   BCG CCI, 2025                                   │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ ADAPTATION NOTE                                    │     │
│  │                                                    │     │
│  │ This infographic was designed by StartupAI using  │     │
│  │ BCG-published data and design principles. All     │     │
│  │ data sourced from BCG Center for Consumer Insight.│     │
│  └────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

---

### **SECTION 09: FOOTER NAVIGATION**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ EXPLORE MORE INFOGRAPHICS                           │    │
│  │                                                     │    │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐            │    │
│  │ │ Consumer │ │  Brand   │ │  Future  │            │    │ ← Related cards
│  │ │    AI    │ │ Strategy │ │  Trends  │            │    │
│  │ │  2025    │ │   AI     │ │   2026   │            │    │
│  │ └──────────┘ └──────────┘ └──────────┘            │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │ ↑ Back to    │  💾 Export   │  🔗 Share    │             │ ← Action buttons
│  │   Resources  │      PDF     │              │             │
│  └──────────────┴──────────────┴──────────────┘             │
│                                                              │
│  StartupAI © 2026 · Data: BCG CCI · Design: StartupAI       │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎬 Animation & Scroll Effects System

### **Scroll-Driven Storytelling Engine**

```typescript
interface ScrollRevealConfig {
  // Trigger points
  triggers: {
    onEnter: number;        // % of viewport (e.g., 0.2 = trigger at 20% visible)
    onLeave: number;        // % to trigger exit animation
    scrub: boolean;         // Link animation to scroll position (parallax)
  };
  
  // Animation specs
  animations: {
    fadeIn: {
      from: { opacity: 0, y: 40 };
      to: { opacity: 1, y: 0 };
      duration: 0.6;
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)';
    };
    
    slideUp: {
      from: { opacity: 0, y: 60 };
      to: { opacity: 1, y: 0 };
      duration: 0.8;
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)';
    };
    
    barGrow: {
      from: { scaleX: 0 };
      to: { scaleX: 1 };
      duration: 0.8;
      transformOrigin: 'left';
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)';
    };
    
    counterUp: {
      from: 0;
      to: '{value}';
      duration: 1.2;
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)';
    };
    
    donutFill: {
      from: { strokeDashoffset: 'circumference' };
      to: { strokeDashoffset: 0 };
      duration: 1.0;
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)';
    };
  };
  
  // Stagger delays
  stagger: {
    cards: 100;            // ms delay between card reveals
    bars: 50;              // ms delay between bar animations
    text: 200;             // ms delay between text lines
  };
}
```

### **Parallax Effect Layers**

```typescript
interface ParallaxLayers {
  background: {
    speed: 0.3;            // Slowest (30% of scroll speed)
    elements: ['background-shapes', 'watermark'];
  };
  
  midground: {
    speed: 0.6;            // Medium (60% of scroll speed)
    elements: ['donut-charts', 'stat-cards'];
  };
  
  foreground: {
    speed: 1.0;            // Normal scroll speed
    elements: ['text', 'bars', 'labels'];
  };
  
  overlay: {
    speed: 1.2;            // Faster (120% of scroll speed)
    elements: ['scroll-indicator', 'progress-bar'];
  };
}
```

### **Animation Timeline (Per Section)**

```
Example: Exhibit 2 (Grouped Bar Chart)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIME    EVENT                           PROPERTIES
────────────────────────────────────────────────────────────
0.0s    Section enters viewport         -
0.0s    Exhibit label fades in          opacity: 0 → 1 (0.3s)
0.3s    Title slides up                 y: 40 → 0 (0.4s)
0.5s    Axis labels appear              opacity: 0 → 1 (0.3s)
0.8s    Bar group 1 grows               scaleY: 0 → 1 (0.8s)
0.9s    Bar group 2 grows               scaleY: 0 → 1 (0.8s)
1.0s    Bar group 3 grows               scaleY: 0 → 1 (0.8s)
1.1s    Bar group 4 grows               scaleY: 0 → 1 (0.8s)
1.2s    Bar group 5 grows               scaleY: 0 → 1 (0.8s)
1.6s    Value labels fade in            opacity: 0 → 1 (0.3s)
1.9s    Change deltas pop in            scale: 0.8 → 1 (0.2s)
2.1s    Legend appears                  opacity: 0 → 1 (0.3s)
2.4s    Source note fades in            opacity: 0 → 1 (0.4s)
2.8s    Animation complete              -

Total duration: 2.8 seconds
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile (base) */
@media (min-width: 0px) {
  .exhibit-container {
    padding: var(--space-4);
  }
  
  .grouped-bar-chart {
    flex-direction: column;
  }
  
  .icon-card-row {
    grid-template-columns: 1fr;
  }
  
  .stat-grid {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-size: 36px;
  }
}

/* Tablet */
@media (min-width: 768px) {
  .exhibit-container {
    padding: var(--space-6);
  }
  
  .grouped-bar-chart {
    flex-direction: row;
  }
  
  .icon-card-row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  h1 {
    font-size: 48px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .exhibit-container {
    padding: var(--space-8);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .icon-card-row {
    grid-template-columns: repeat(5, 1fr);
  }
  
  .stat-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  h1 {
    font-size: 56px;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .exhibit-container {
    max-width: 1400px;
  }
  
  h1 {
    font-size: 64px;
  }
}
```

---

## 🎨 Component Library Specs

### **ExhibitContainer.tsx**

```typescript
interface ExhibitContainerProps {
  exhibitNumber: number;
  title: string;
  children: React.ReactNode;
  source?: string;
  note?: string;
}

export const ExhibitContainer: React.FC<ExhibitContainerProps> = ({
  exhibitNumber,
  title,
  children,
  source,
  note,
}) => {
  return (
    <section className="exhibit-container">
      {/* Exhibit Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        className="exhibit-label"
      >
        EXHIBIT {exhibitNumber}
      </motion.div>
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="exhibit-title"
      >
        {title}
      </motion.h2>
      
      {/* Content */}
      <div className="exhibit-content">
        {children}
      </div>
      
      {/* Source Footer */}
      {(source || note) && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="exhibit-source"
        >
          {source && <p><strong>Source:</strong> {source}</p>}
          {note && <p><strong>Note:</strong> {note}</p>}
        </motion.div>
      )}
    </section>
  );
};

// Styles
const styles = `
.exhibit-container {
  padding: var(--space-8);
  background: var(--surface);
  margin-bottom: var(--space-12);
}

.exhibit-label {
  font: var(--text-exhibit-label);
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-2);
}

.exhibit-title {
  font: var(--text-h2);
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  max-width: 800px;
}

.exhibit-content {
  margin-bottom: var(--space-6);
}

.exhibit-source {
  border-top: 1px solid var(--border);
  padding-top: var(--space-4);
  font: var(--text-source);
  color: var(--text-muted);
}

.exhibit-source strong {
  font-weight: 600;
}
`;
```

### **GroupedBarChart.tsx**

```typescript
interface BarData {
  category: string;
  baseline: number;
  comparison: number;
  change: number | 'NA';
}

interface GroupedBarChartProps {
  data: BarData[];
  baselineLabel: string;
  comparisonLabel: string;
  yAxisLabel?: string;
}

export const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
  data,
  baselineLabel,
  comparisonLabel,
  yAxisLabel,
}) => {
  return (
    <div className="grouped-bar-chart">
      {/* Y-Axis Label */}
      {yAxisLabel && (
        <div className="y-axis-label">
          {yAxisLabel}
        </div>
      )}
      
      {/* Chart Area */}
      <div className="chart-area">
        {data.map((item, index) => (
          <BarGroup
            key={item.category}
            data={item}
            index={index}
            delay={0.8 + index * 0.1}
          />
        ))}
        
        {/* Legend */}
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot baseline" />
            <span>{baselineLabel}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot comparison" />
            <span>{comparisonLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BarGroup: React.FC<{ data: BarData; index: number; delay: number }> = ({
  data,
  index,
  delay,
}) => {
  return (
    <div className="bar-group">
      {/* Change Label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: delay + 1.1 }}
        className="change-label"
      >
        {typeof data.change === 'number' ? `+${data.change}` : data.change}
      </motion.div>
      
      {/* Bars */}
      <div className="bars">
        <Bar
          value={data.baseline}
          type="baseline"
          delay={delay}
        />
        <Bar
          value={data.comparison}
          type="comparison"
          delay={delay}
        />
      </div>
      
      {/* Category Label */}
      <div className="category-label">
        {data.category}
      </div>
    </div>
  );
};

const Bar: React.FC<{ value: number; type: 'baseline' | 'comparison'; delay: number }> = ({
  value,
  type,
  delay,
}) => {
  return (
    <motion.div
      className={`bar ${type}`}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: value / 100 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: 'bottom' }}
    >
      <motion.span
        className="bar-value"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.5 }}
      >
        {value}
      </motion.span>
    </motion.div>
  );
};
```

### **DonutChart.tsx**

```typescript
interface DonutChartProps {
  percentage: number;
  description?: string;
  diameter?: number;
  strokeWidth?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  description,
  diameter = 180,
  strokeWidth = 20,
}) => {
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Counter animation
  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      const duration = 1200;
      const steps = 60;
      const increment = percentage / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setCount(percentage);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, percentage]);
  
  return (
    <div ref={ref} className="donut-chart">
      <svg width={diameter} height={diameter}>
        {/* Track */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="var(--surface-alt)"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress */}
        <motion.circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="var(--accent-green)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isVisible ? {
            strokeDashoffset: circumference - (percentage / 100) * circumference
          } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      
      {/* Center Content */}
      <div className="donut-center">
        <div className="donut-percentage">
          {count}%
        </div>
        {description && (
          <div className="donut-description">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
```

---

## 🚀 Implementation Roadmap

### **Phase 1: Foundation (Week 1)**
- [ ] Set up page structure (`/app/bcg-ai-consumer-infographic/page.tsx`)
- [ ] Implement design system tokens (CSS variables)
- [ ] Create base layout components (Header, Footer, Section)
- [ ] Set up scroll-driven animation library (Motion/React)
- [ ] Add to footer navigation under RESOURCES

### **Phase 2: Hero & Context (Week 2)**
- [ ] Build hero section with stat reveal
- [ ] Implement animated donut chart component
- [ ] Create context intro card
- [ ] Add scroll hint animation
- [ ] Test parallax background layers

### **Phase 3: Exhibits 1-2 (Week 3)**
- [ ] Build grouped bar chart component
- [ ] Implement bar grow animations with stagger
- [ ] Create icon card row component
- [ ] Add scroll-triggered reveals
- [ ] Test responsive breakpoints

### **Phase 4: Exhibits 3-4 (Week 4)**
- [ ] Build horizontal bar chart component
- [ ] Integrate donut callout
- [ ] Implement parallax split (left/right panels)
- [ ] Add global insights grid
- [ ] Test stat counter animations

### **Phase 5: Perception & Strategy (Week 5)**
- [ ] Create quote card grid
- [ ] Build sentiment diagram
- [ ] Implement flowchart component with SVG connectors
- [ ] Add strategic implications section
- [ ] Test all scroll reveals

### **Phase 6: Polish & Export (Week 6)**
- [ ] Add methodology section
- [ ] Create footer navigation
- [ ] Implement PDF export functionality
- [ ] Add social share buttons
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Final QA on all devices

---

## ✅ Success Criteria

```
Quality Gates:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUAL DESIGN:
✓ 90% neutral space (white/gray/cream)
✓ Green accent used sparingly (<10% of page)
✓ Light typography (DM Sans 300 for headlines)
✓ No gradients on data elements
✓ No shadows on charts (BCG principle)
✓ Source citations present on all exhibits

ANIMATION:
✓ 60fps maintained during scroll
✓ No janky animations on mobile
✓ All reveals trigger at 20-30% viewport entry
✓ Counter animations complete in <1.5s
✓ Bar/donut animations feel smooth, not rushed

CONTENT:
✓ All BCG data accurately represented
✓ No data manipulation or misrepresentation
✓ Proper attribution to BCG CCI
✓ Methodology clearly explained
✓ Sample sizes disclosed

PERFORMANCE:
✓ Initial load <2s (desktop)
✓ Lighthouse score >90 (Performance)
✓ All images optimized (WebP, lazy loading)
✓ Code splitting implemented
✓ Works on Safari, Chrome, Firefox, Edge

RESPONSIVE:
✓ All breakpoints tested (375px, 768px, 1024px, 1440px)
✓ Touch targets ≥44px on mobile
✓ Text readable at all sizes
✓ Charts adapt to screen width
✓ No horizontal scroll on any device

ACCESSIBILITY:
✓ Color contrast AAA compliant
✓ ARIA labels on interactive elements
✓ Keyboard navigation works
✓ Screen reader friendly
✓ Reduced motion respected (@media prefers-reduced-motion)
```

---

## 📦 File Structure

```
/app/bcg-ai-consumer-infographic/
├── page.tsx                          # Main page component
├── components/
│   ├── ExhibitContainer.tsx          # Exhibit wrapper
│   ├── GroupedBarChart.tsx           # Exhibit 2 chart
│   ├── IconCardRow.tsx               # Exhibit 3 icons
│   ├── HorizontalBarChart.tsx        # Exhibit 4 bars
│   ├── DonutChart.tsx                # Donut callout
│   ├── StatCard.tsx                  # Stat display cards
│   ├── QuoteCard.tsx                 # Quote blocks
│   ├── Flowchart.tsx                 # Strategy flowchart
│   └── ScrollProgress.tsx            # Progress indicator
├── lib/
│   ├── animations.ts                 # Animation configs
│   ├── data.ts                       # BCG data constants
│   └── utils.ts                      # Helper functions
└── styles/
    └── infographic.css               # Component styles

/docs/infographics/
├── 01-consumer.md                    # This file (design plan)
├── 02-brand-strategy.md              # Future infographic
└── assets/
    ├── wireframes/                   # Design mockups
    └── bcg-source-data/              # Original BCG data
```

---

## 🎉 Launch Checklist

```bash
# Pre-Launch Verification
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ All 9 sections render correctly
□ All animations trigger on scroll
□ No console errors in production build
□ BCG data attribution present on all exhibits
□ Methodology section complete
□ Mobile responsive tested on real devices
□ PDF export function works
□ Share buttons functional
□ Back to Resources link works
□ Lighthouse audit score >90
□ Cross-browser testing complete (Chrome, Safari, Firefox, Edge)
□ Load time <2s on 3G connection
□ All images have alt text
□ Color contrast verified (AAA)
□ Keyboard navigation tested
□ Screen reader tested (VoiceOver/NVDA)

# Post-Launch Monitoring
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Analytics tracking installed
□ User engagement metrics (scroll depth, time on page)
□ Error rate monitoring (<0.1%)
□ Performance monitoring (Core Web Vitals)
□ User feedback collection
```

---

**Design Plan Status:** ✅ **Complete & Ready for Implementation**  
**Next Step:** Phase 1 — Foundation (create page structure + design tokens)  
**Estimated Timeline:** 6 weeks to production-ready  
**Maintained By:** StartupAI Design Team  
**Last Updated:** February 12, 2026
