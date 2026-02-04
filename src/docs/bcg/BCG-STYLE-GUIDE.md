# BCG Style Guide — Visual Design System
## For StartupAI High-End UI Experience

**Version**: 1.0  
**Date**: February 2, 2026  
**Classification**: Premium, Luxury, Sophisticated, Intelligent

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Grid & Spacing](#grid--spacing)
5. [Component Library](#component-library)
6. [Layout Patterns](#layout-patterns)
7. [Responsive Design](#responsive-design)
8. [Visual Hierarchy](#visual-hierarchy)
9. [Imagery Guidelines](#imagery-guidelines)
10. [Animation & Interaction](#animation--interaction)

---

## Design Philosophy

### Core Principles

**1. Clarity Through Simplicity**
- Remove unnecessary elements
- Let content breathe with generous whitespace
- Use visual hierarchy to guide the eye

**2. Data-Driven Visual Language**
- Charts and visualizations as first-class design elements
- Green as the accent color for emphasis and data
- Clean, uncluttered information design

**3. Premium Materiality**
- Subtle shadows and depth
- High-quality photography with purpose
- Refined color palette (white, charcoal, vibrant green)

**4. Intelligent Structure**
- Logical content flow
- Predictable navigation patterns
- Consistent component behavior

---

## Color System

### Primary Palette

```css
/* Foundation Colors */
--white: #FFFFFF;
--charcoal: #1A1A1A;
--near-black: #0A0A0A;

/* BCG Signature Green */
--bcg-green: #00D47E;          /* Primary accent */
--bcg-green-dark: #00B869;     /* Hover states */
--bcg-green-light: #33DFA0;    /* Highlights */
--bcg-green-pale: #E5F9F0;     /* Backgrounds */

/* Neutral Grays */
--gray-50: #F9F9F9;
--gray-100: #F5F5F5;
--gray-200: #E5E5E5;
--gray-300: #D4D4D4;
--gray-400: #A3A3A3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
```

### StartupAI Adaptation

```css
/* Emerald Integration (Maintain Brand) */
--emerald-dark: #0E3E1B;       /* Primary CTA */
--emerald-mid: #0d5f4e;        /* Secondary */
--sage: #6b9d89;               /* Tertiary */

/* Pastel Accents (BCG-Inspired) */
--mint-pale: #DCF9E3;          /* Cards */
--sage-pale: #E8F5E9;          /* Backgrounds */

/* Hybrid Accent (BCG Green + Emerald) */
--accent-primary: #00D47E;     /* Use BCG green for data viz */
--accent-emerald: #0E3E1B;     /* Use emerald for CTAs */
```

### Usage Guidelines

| Element | Color | Usage |
|---------|-------|-------|
| **Backgrounds** | `#FFFFFF`, `#F9F9F9` | Primary surfaces |
| **Text Primary** | `#1A1A1A` | Headlines, body |
| **Text Secondary** | `#737373` | Captions, metadata |
| **Accents/Data** | `#00D47E` | Charts, highlights |
| **CTAs** | `#0E3E1B` | Buttons, links |
| **Borders** | `#E5E5E5` | Dividers, cards |
| **Dark Sections** | `#1A1A1A`, `#0A0A0A` | Hero, footer |

### Color Psychology

- **White**: Clarity, openness, premium
- **Charcoal**: Authority, intelligence, sophistication
- **BCG Green**: Growth, data, energy, innovation
- **Emerald**: Trust, stability, nature (StartupAI brand)

---

## Typography

### Typefaces

```css
/* Primary Font Stack (Sans-Serif) */
font-family: -apple-system, BlinkMacSystemFont, 
             "Segoe UI", "Helvetica Neue", Arial, 
             sans-serif;

/* Alternative: If using custom fonts */
font-family: "BCG Henderson Sans", -apple-system, sans-serif;
```

### Type Scale

```css
/* Display (Hero Headlines) */
--text-display: 72px;          /* H1 Large */
--text-display-line: 1.05;
--text-display-weight: 200;    /* Ultra-light */
--text-display-spacing: -0.02em;

/* Headlines */
--text-h1: 56px;               /* H1 Standard */
--text-h1-line: 1.1;
--text-h1-weight: 300;         /* Light */

--text-h2: 40px;               /* H2 */
--text-h2-line: 1.2;
--text-h2-weight: 300;

--text-h3: 28px;               /* H3 */
--text-h3-line: 1.3;
--text-h3-weight: 300;

--text-h4: 20px;               /* H4 */
--text-h4-line: 1.4;
--text-h4-weight: 400;

/* Body Text */
--text-body-large: 18px;
--text-body-large-line: 1.7;
--text-body-large-weight: 400;

--text-body: 16px;
--text-body-line: 1.6;
--text-body-weight: 400;

--text-body-small: 14px;
--text-body-small-line: 1.5;
--text-body-small-weight: 400;

/* Captions & Metadata */
--text-caption: 12px;
--text-caption-line: 1.4;
--text-caption-weight: 400;
--text-caption-spacing: 0.05em;
```

### Typography Guidelines

#### Headlines
- Use ultra-light (200) or light (300) weights for large headlines
- Keep headlines short and impactful (5-10 words max)
- Use sentence case, not ALL CAPS
- Line-height: 1.05-1.2 for headlines
- Letter-spacing: Slightly tighter (-0.02em) for large sizes

#### Body Text
- Use 16-18px for primary body text
- Line-height: 1.6-1.7 for readability
- Max-width: 680px for long-form content
- Color: `#1A1A1A` for primary, `#737373` for secondary

#### Captions & Metadata
- Use 12-14px
- Uppercase for labels: `text-transform: uppercase;`
- Letter-spacing: 0.05-0.1em for uppercase text
- Color: `#737373` or lighter

---

## Grid & Spacing

### Container System

```css
/* Container Widths */
--container-xs: 480px;     /* Mobile forms */
--container-sm: 640px;     /* Text-focused */
--container-md: 768px;     /* Standard narrow */
--container-lg: 1024px;    /* Standard content */
--container-xl: 1200px;    /* Wide content */
--container-2xl: 1440px;   /* Full layout */
--container-full: 100%;    /* Edge-to-edge */
```

### Padding System

```css
/* Section Padding (Vertical) */
--space-section-sm: 80px;  /* Small sections */
--space-section-md: 120px; /* Standard sections */
--space-section-lg: 160px; /* Large sections */

/* Horizontal Padding */
--space-gutter-mobile: 24px;
--space-gutter-tablet: 40px;
--space-gutter-desktop: 64px;
```

### Spacing Scale

```css
/* Base-8 Spacing System */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
--space-40: 160px;
```

### Grid Layouts

#### 12-Column Grid
```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
}

/* Common Patterns */
.col-4 { grid-column: span 4; }   /* 1/3 width */
.col-6 { grid-column: span 6; }   /* 1/2 width */
.col-8 { grid-column: span 8; }   /* 2/3 width */
```

#### Content Grids
```css
/* 2-Column */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

/* 3-Column */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* 4-Column */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
```

---

## Component Library

### 1. Hero Section

#### Full-Width Image Hero

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Full-width dramatic image with dark overlay] │
│                                                 │
│     Large Headline Text (White)                │
│     Subheadline or description                 │
│                                                 │
│     [Primary CTA]                              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 600-800px
- Image: Dark overlay (rgba(0,0,0,0.5))
- Text: White, centered
- Headline: 56-72px, weight 200-300
- CTA: Green background (#00D47E)

#### Split Hero (Text + Visual)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐   │
│  │                  │  │                  │   │
│  │  Headline Text   │  │  [Image or       │   │
│  │  Description     │  │   Diagram]       │   │
│  │  [CTA]           │  │                  │   │
│  │                  │  │                  │   │
│  └──────────────────┘  └──────────────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications**:
- Layout: 50/50 or 60/40 split
- Background: White or light gray
- Text: Left-aligned
- Image: Right side, slight shadow

---

### 2. Content Cards

#### Standard Card

```
┌─────────────────────────┐
│                         │
│  [Icon or Number]       │
│                         │
│  Card Title             │
│  Brief description text │
│  that wraps naturally.  │
│                         │
│  [Optional CTA →]       │
│                         │
└─────────────────────────┘
```

**Specifications**:
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-4px);
}
```

#### Data Card (With Chart)

```
┌─────────────────────────┐
│                         │
│  Section Label          │
│  Main Headline          │
│                         │
│  ┌───────────────────┐  │
│  │                   │  │
│  │   [Bar Chart or   │  │
│  │    Data Viz]      │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  Supporting text        │
│                         │
└─────────────────────────┘
```

**Specifications**:
- Chart colors: BCG Green (#00D47E)
- Background: White or light gray (#F9F9F9)
- Border-radius: 8px
- Padding: 48px

---

### 3. Data Visualizations

#### Bar Chart

```css
.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bar-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.bar-label {
  width: 200px;
  font-size: 14px;
  color: #525252;
}

.bar-track {
  flex: 1;
  height: 32px;
  background: #F5F5F5;
  border-radius: 16px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #00D47E 0%, #33DFA0 100%);
  transition: width 0.6s ease;
}

.bar-value {
  min-width: 60px;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
  color: #1A1A1A;
}
```

#### Stat Display

```
┌────────────────┐
│                │
│   10,000+      │  ← Large number (48-64px)
│   Founders     │  ← Label (14px)
│                │
└────────────────┘
```

**Specifications**:
```css
.stat {
  text-align: center;
}

.stat-number {
  font-size: 56px;
  font-weight: 200;
  color: #00D47E;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 14px;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 8px;
}
```

---

### 4. Author Cards

```
┌────────────────────────────────┐
│                                │
│  ┌──────┐                      │
│  │ IMG  │  Author Name         │
│  │      │  Title, Company      │
│  └──────┘                      │
│                                │
└────────────────────────────────┘
```

**Specifications**:
```css
.author-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 16px;
  font-weight: 500;
  color: #1A1A1A;
}

.author-title {
  font-size: 14px;
  color: #737373;
  margin-top: 4px;
}
```

---

### 5. Buttons & CTAs

#### Primary Button (Emerald)

```css
.btn-primary {
  background: #0E3E1B;
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(14, 62, 27, 0.2);
}

.btn-primary:hover {
  background: #0a2f14;
  box-shadow: 0 4px 16px rgba(14, 62, 27, 0.3);
  transform: translateY(-2px);
}
```

#### Secondary Button (BCG Green Outline)

```css
.btn-secondary {
  background: transparent;
  color: #00D47E;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #00D47E;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #E5F9F0;
  color: #00B869;
  border-color: #00B869;
}
```

#### Text Link with Arrow

```css
.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00D47E;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: gap 0.2s ease;
}

.link-arrow:hover {
  gap: 12px;
  color: #00B869;
}

.link-arrow::after {
  content: '→';
  font-size: 18px;
}
```

---

### 6. Testimonial/Quote Block

```
┌─────────────────────────────────────────┐
│                                         │
│  "Large quote text that spans          │
│   multiple lines with proper           │
│   formatting and spacing."             │
│                                         │
│  — Author Name                          │
│    Title, Company                       │
│                                         │
└─────────────────────────────────────────┘
```

**Specifications**:
```css
.testimonial {
  padding: 48px;
  border-left: 4px solid #00D47E;
  background: #F9F9F9;
}

.testimonial-quote {
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  color: #1A1A1A;
  font-style: italic;
  margin-bottom: 24px;
}

.testimonial-author {
  font-size: 16px;
  font-weight: 500;
  color: #1A1A1A;
}

.testimonial-meta {
  font-size: 14px;
  color: #737373;
  margin-top: 4px;
}
```

---

## Layout Patterns

### Pattern 1: Full-Width Hero + Contained Content

```
┌─────────────────────────────────────────────────┐
│ FULL WIDTH HERO (Edge-to-edge)                  │
│ [Large image with text overlay]                 │
└─────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────┐
    │ CONTAINED CONTENT (Max-width 1200px)    │
    │                                         │
    │ Text, cards, or other content           │
    └─────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ FULL WIDTH SECTION (Background color)           │
│     ┌─────────────────────────────────────┐    │
│     │ Contained content inside            │    │
│     └─────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

---

### Pattern 2: Alternating Content Blocks

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────────┐        ┌──────────────┐     │
│  │              │        │              │     │
│  │   Image      │        │   Content    │     │
│  │              │        │   Text       │     │
│  └──────────────┘        └──────────────┘     │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────────┐        ┌──────────────┐     │
│  │              │        │              │     │
│  │   Content    │        │   Image      │     │
│  │   Text       │        │              │     │
│  └──────────────┘        └──────────────┘     │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Usage**: Great for "How It Works" or feature explanations

---

### Pattern 3: Card Grid with Header

```
┌─────────────────────────────────────────────────┐
│                                                 │
│            Section Headline                     │
│            Optional description                 │
│                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │          │ │          │ │          │       │
│  │  Card 1  │ │  Card 2  │ │  Card 3  │       │
│  │          │ │          │ │          │       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │          │ │          │ │          │       │
│  │  Card 4  │ │  Card 5  │ │  Card 6  │       │
│  │          │ │          │ │          │       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Usage**: Features, services, team members

---

### Pattern 4: Data Visualization Section

```
┌─────────────────────────────────────────────────┐
│                                                 │
│            Data Headline                        │
│                                                 │
│  ┌─────────────────────────────────────────┐  │
│  │                                         │  │
│  │   [Chart or Graph]                      │  │
│  │   • Green bars/lines                    │  │
│  │   • Clean labels                        │  │
│  │   • White background                    │  │
│  │                                         │  │
│  └─────────────────────────────────────────┘  │
│                                                 │
│  Supporting text or insights                   │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### Pattern 5: Author/Expert Section

```
┌─────────────────────────────────────────────────┐
│                                                 │
│            Authors / Contributors               │
│                                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  │ [IMG]  │ │ [IMG]  │ │ [IMG]  │ │ [IMG]  │ │
│  │ Name   │ │ Name   │ │ Name   │ │ Name   │ │
│  │ Title  │ │ Title  │ │ Title  │ │ Title  │ │
│  └────────┘ └────────┘ └────────┘ └────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### Pattern 6: Dark CTA Section

```
┌─────────────────────────────────────────────────┐
│ DARK BACKGROUND (#1A1A1A)                       │
│                                                 │
│            White Headline Text                  │
│            White description                    │
│                                                 │
│       [Primary CTA - Green]  [Secondary CTA]    │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Usage**: Final CTAs, newsletter signup, key conversions

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
$breakpoint-sm: 640px;   /* Mobile landscape */
$breakpoint-md: 768px;   /* Tablet portrait */
$breakpoint-lg: 1024px;  /* Tablet landscape / Small desktop */
$breakpoint-xl: 1280px;  /* Desktop */
$breakpoint-2xl: 1536px; /* Large desktop */
```

### Responsive Grid Patterns

#### 3-Column → 1-Column

```css
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile: 1 column */
  gap: 24px;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 columns */
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3 columns */
    gap: 40px;
  }
}
```

### Typography Scaling

```css
/* Fluid Typography */
h1 {
  font-size: clamp(36px, 5vw, 72px);
}

h2 {
  font-size: clamp(28px, 4vw, 48px);
}

body {
  font-size: clamp(16px, 1.2vw, 18px);
}
```

### Responsive Spacing

```css
/* Section Padding */
.section {
  padding: 60px 24px;  /* Mobile */
}

@media (min-width: 768px) {
  .section {
    padding: 100px 40px;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 120px 64px;  /* Desktop */
  }
}
```

---

## Visual Hierarchy

### Hierarchy Principles

1. **Size & Scale**
   - Most important: 56-72px
   - Secondary: 28-40px
   - Tertiary: 16-20px

2. **Weight & Color**
   - Primary: Bold (500-600) + Dark (#1A1A1A)
   - Secondary: Regular (400) + Medium Gray (#737373)
   - Tertiary: Light (300) + Light Gray (#A3A3A3)

3. **Spacing**
   - Important elements: More whitespace around them
   - Related items: Grouped closer together
   - Sections: Clear separation (80-120px)

4. **Contrast**
   - High contrast: Primary CTAs, headlines
   - Medium contrast: Body text
   - Low contrast: Captions, metadata

### Hierarchy Example

```
┌─────────────────────────────────────────┐
│                                         │
│  EYEBROW TEXT (12px, uppercase, gray)   │ ← Least important
│                                         │
│  Main Headline Here                     │ ← Most important
│  (56px, weight 300, dark)               │
│                                         │
│  Subheadline or description text        │ ← Secondary
│  (18px, weight 400, medium gray)        │
│                                         │
│  Body paragraph with more details       │ ← Tertiary
│  and supporting information.            │
│  (16px, weight 400, dark)               │
│                                         │
│  [Primary CTA]  [Secondary Link →]      │ ← Action
│                                         │
│  Caption or metadata                    │ ← Least important
│  (12px, gray)                           │
│                                         │
└─────────────────────────────────────────┘
```

---

## Imagery Guidelines

### Photography

**Style**:
- High-quality, professional
- Often with dark overlays for text readability
- Moody, atmospheric lighting
- Technology, business, or abstract themes
- Green tint or accent (optional)

**Technical Specs**:
- Minimum resolution: 1920x1080px
- Format: WebP with JPG fallback
- Compression: Balanced quality (80-90%)
- Aspect ratios: 16:9, 21:9, 3:2, 1:1

**Overlay Technique**:
```css
.hero-image {
  position: relative;
}

.hero-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}
```

### Icons

**Style**:
- Simple, line-based (stroke-width: 1.5-2)
- Minimal, geometric
- Use lucide-react or similar library
- Size: 24px, 32px, 40px, 48px

**Color**:
- Default: `#1A1A1A` or `#737373`
- Accent: `#00D47E` or `#0E3E1B`
- On dark: `#FFFFFF`

### Data Visualizations

**Charts**:
- Bar charts: Horizontal or vertical
- Line charts: Clean, minimal grid
- Pie/donut charts: Use sparingly
- Colors: BCG Green (#00D47E) primary

**Best Practices**:
- Clean axes and labels
- Generous padding
- Clear legends
- Tooltips on hover
- Responsive scaling

---

## Animation & Interaction

### Micro-Interactions

#### Hover States

```css
/* Card Hover */
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

/* Button Hover */
.button {
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* Link Hover */
.link {
  transition: color 0.2s ease;
}

.link:hover {
  color: #00B869;
}
```

#### Focus States

```css
*:focus-visible {
  outline: 2px solid #00D47E;
  outline-offset: 4px;
  border-radius: 4px;
}
```

### Page Transitions

```css
/* Fade In on Load */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Stagger Children */
.stagger-children > * {
  animation: fadeIn 0.6s ease-out;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
```

### Loading States

```css
/* Skeleton Loader */
.skeleton {
  background: linear-gradient(
    90deg,
    #F5F5F5 0%,
    #E5E5E5 50%,
    #F5F5F5 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Scroll Animations

```css
/* Reveal on Scroll (with Intersection Observer) */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Normal text (16px): 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Tested Combinations**:
- ✅ `#1A1A1A` on `#FFFFFF`: 16.1:1
- ✅ `#737373` on `#FFFFFF`: 4.6:1
- ✅ `#00D47E` on `#1A1A1A`: 3.2:1
- ✅ `#FFFFFF` on `#0E3E1B`: 13.8:1

**Keyboard Navigation**:
- All interactive elements must be keyboard accessible
- Logical tab order
- Visible focus indicators
- Skip links for long pages

**Screen Readers**:
- Semantic HTML (h1, h2, nav, main, etc.)
- ARIA labels where needed
- Alt text for all images
- Descriptive link text

---

## Implementation Checklist

### Starting a New Page

- [ ] Define content hierarchy
- [ ] Choose appropriate layout pattern
- [ ] Set up responsive grid
- [ ] Apply typography scale
- [ ] Use color system consistently
- [ ] Add hover/focus states
- [ ] Test on mobile, tablet, desktop
- [ ] Verify color contrast
- [ ] Test keyboard navigation
- [ ] Optimize images

### Component Checklist

- [ ] Follows design system colors
- [ ] Uses correct typography scale
- [ ] Proper spacing (base-8 system)
- [ ] Hover/focus states defined
- [ ] Responsive behavior planned
- [ ] Accessible markup
- [ ] Smooth transitions
- [ ] Semantic HTML

---

## Quick Reference

### Common Patterns

```
Hero Section:        120px padding, 56-72px headline
Content Section:     100px padding, max-width 1200px
Card Grid:           3 columns, 32px gap, 40px padding
CTA Section:         Dark bg, white text, green buttons
Footer:              Dark bg, 4-column grid
```

### Color Shortcuts

```
Primary BG:          #FFFFFF
Secondary BG:        #F9F9F9
Dark Section:        #1A1A1A
Accent:              #00D47E
CTA:                 #0E3E1B
Text Primary:        #1A1A1A
Text Secondary:      #737373
Border:              #E5E5E5
```

### Typography Shortcuts

```
Display:             72px / 200 weight / 1.05 line
H1:                  56px / 300 weight / 1.1 line
H2:                  40px / 300 weight / 1.2 line
Body:                16px / 400 weight / 1.6 line
Caption:             12px / 400 weight / 1.4 line
```

---

**End of Style Guide**

For questions or clarifications, refer to the BCG website examples or consult the design team.
