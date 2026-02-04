# BCG Responsive Design System
## Mobile-First Approach for StartupAI

**Version**: 1.0  
**Date**: February 2, 2026  
**Philosophy**: Premium experience across all devices

---

## Table of Contents

1. [Breakpoint Strategy](#breakpoint-strategy)
2. [Mobile Layout Patterns](#mobile-layout-patterns)
3. [Tablet Layout Patterns](#tablet-layout-patterns)
4. [Desktop Layout Patterns](#desktop-layout-patterns)
5. [Component Responsiveness](#component-responsiveness)
6. [Typography Scaling](#typography-scaling)
7. [Touch & Interaction](#touch--interaction)
8. [Performance Guidelines](#performance-guidelines)

---

## Breakpoint Strategy

### Core Breakpoints

```css
/* Mobile First Approach */
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet portrait */
  --breakpoint-lg: 1024px;  /* Tablet landscape / Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large desktop */
}

/* Usage in Media Queries */
@media (min-width: 640px) { /* Mobile landscape */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

### Device Targets

| Device | Width | Breakpoint | Layout |
|--------|-------|------------|--------|
| **Mobile (Portrait)** | 320-639px | Base | 1 column |
| **Mobile (Landscape)** | 640-767px | sm | 1-2 columns |
| **Tablet (Portrait)** | 768-1023px | md | 2 columns |
| **Tablet (Landscape)** | 1024-1279px | lg | 2-3 columns |
| **Desktop** | 1280-1535px | xl | 3-4 columns |
| **Large Desktop** | 1536px+ | 2xl | 4+ columns |

---

## Mobile Layout Patterns

### Mobile: Hero Section

```
┌────────────────────────┐
│                        │
│  ┌──────────────────┐  │
│  │                  │  │
│  │  [Hero Image]    │  │
│  │  [Dark overlay]  │  │
│  │                  │  │
│  │  Short Headline  │  │
│  │  Brief text      │  │
│  │                  │  │
│  │  [CTA Button]    │  │
│  │                  │  │
│  └──────────────────┘  │
│                        │
└────────────────────────┘

Specs:
- Height: 500-600px (reduced)
- Headline: 36-40px (down from 72px)
- Padding: 24px horizontal
- Button: Full-width or centered
- Image: Optimized for mobile
```

```css
.hero-mobile {
  height: 500px;
  padding: 24px;
  text-align: center;
}

.hero-mobile h1 {
  font-size: 36px;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-mobile .cta {
  width: 100%;
  max-width: 300px;
}
```

### Mobile: Card Stack

```
┌────────────────────────┐
│                        │
│  Section Headline      │
│  (28-32px)             │
│                        │
│  ┌──────────────────┐  │
│  │                  │  │
│  │  Card 1          │  │
│  │  [Icon]          │  │
│  │  Title           │  │
│  │  Description     │  │
│  │                  │  │
│  └──────────────────┘  │
│                        │
│  ┌──────────────────┐  │
│  │                  │  │
│  │  Card 2          │  │
│  │                  │  │
│  └──────────────────┘  │
│                        │
│  ┌──────────────────┐  │
│  │                  │  │
│  │  Card 3          │  │
│  │                  │  │
│  └──────────────────┘  │
│                        │
└────────────────────────┘

Specs:
- Single column
- 24px gap between cards
- 24px padding per card
- Full-width cards
```

```css
.card-grid-mobile {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}

.card-mobile {
  width: 100%;
  padding: 24px;
  border-radius: 8px;
}
```

### Mobile: Navigation

```
┌────────────────────────┐
│ [Logo]      [☰] [CTA]  │ ← Header (sticky)
└────────────────────────┘

When hamburger clicked:
┌────────────────────────┐
│ [Logo]      [×] [CTA]  │
├────────────────────────┤
│                        │
│  Link 1                │
│  ──────────────────    │
│  Link 2                │
│  ──────────────────    │
│  Link 3                │
│  ──────────────────    │
│  Link 4                │
│                        │
└────────────────────────┘

Specs:
- Fixed/sticky header
- Hamburger menu (☰)
- Full-screen overlay menu
- Touch-friendly targets (48px min)
```

```css
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 100;
}

.mobile-menu {
  position: fixed;
  inset: 64px 0 0 0;
  background: white;
  padding: 24px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu a {
  display: block;
  padding: 16px 0;
  font-size: 18px;
  border-bottom: 1px solid #E5E5E5;
}
```

### Mobile: Stats Display

```
┌────────────────────────┐
│                        │
│  ┌─────────────────┐   │
│  │   10,000+       │   │
│  │   Founders      │   │
│  └─────────────────┘   │
│                        │
│  ┌─────────────────┐   │
│  │   50+           │   │
│  │   Markets       │   │
│  └─────────────────┘   │
│                        │
│  ┌─────────────────┐   │
│  │   95%           │   │
│  │   Success Rate  │   │
│  └─────────────────┘   │
│                        │
│  ┌─────────────────┐   │
│  │   $500M+        │   │
│  │   Raised        │   │
│  └─────────────────┘   │
│                        │
└────────────────────────┘

OR: 2x2 Grid

┌────────────────────────┐
│                        │
│  ┌────────┐ ┌────────┐│
│  │10,000+ │ │  50+   ││
│  │Founders│ │Markets ││
│  └────────┘ └────────┘│
│                        │
│  ┌────────┐ ┌────────┐│
│  │  95%   │ │ $500M+ ││
│  │Success │ │ Raised ││
│  └────────┘ └────────┘│
│                        │
└────────────────────────┘
```

```css
.stats-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 24px;
}

.stat-card-mobile {
  text-align: center;
  padding: 20px;
  background: #F9F9F9;
  border-radius: 8px;
}

.stat-number {
  font-size: 32px;
  font-weight: 300;
}

.stat-label {
  font-size: 12px;
  margin-top: 4px;
}
```

### Mobile: Forms & CTAs

```
┌────────────────────────┐
│                        │
│  Form Headline         │
│  (24-28px)             │
│                        │
│  ┌──────────────────┐  │
│  │ Input Field      │  │
│  └──────────────────┘  │
│                        │
│  ┌──────────────────┐  │
│  │ Input Field      │  │
│  └──────────────────┘  │
│                        │
│  ┌──────────────────┐  │
│  │ Submit Button    │  │
│  └──────────────────┘  │
│                        │
│  Small helper text     │
│                        │
└────────────────────────┘
```

```css
.form-mobile input,
.form-mobile textarea,
.form-mobile button {
  width: 100%;
  padding: 16px;
  font-size: 16px; /* Prevents iOS zoom */
  border-radius: 8px;
  margin-bottom: 16px;
}

.form-mobile button {
  min-height: 48px;
  font-weight: 500;
}
```

---

## Tablet Layout Patterns

### Tablet: Hero Section

```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────────────────────────┐  │
│  │                                │  │
│  │  [Hero Image]                  │  │
│  │                                │  │
│  │    Medium Headline (48-56px)   │  │
│  │    Description text            │  │
│  │                                │  │
│  │    [CTA]  [Secondary CTA]      │  │
│  │                                │  │
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘

Specs:
- Height: 600-700px
- Headline: 48-56px
- Padding: 40px horizontal
- Two-column grid possible
```

### Tablet: 2-Column Grid

```
┌──────────────────────────────────────┐
│                                      │
│  Section Headline                    │
│                                      │
│  ┌───────────────┐  ┌───────────────┐│
│  │               │  │               ││
│  │   Card 1      │  │   Card 2      ││
│  │               │  │               ││
│  └───────────────┘  └───────────────┘│
│                                      │
│  ┌───────────────┐  ┌───────────────┐│
│  │               │  │               ││
│  │   Card 3      │  │   Card 4      ││
│  │               │  │               ││
│  └───────────────┘  └───────────────┘│
│                                      │
└──────────────────────────────────────┘
```

```css
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 0 40px;
  }
  
  .card {
    padding: 32px;
  }
}
```

### Tablet: Split Content

```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────────┐  ┌──────────────┐│
│  │                │  │              ││
│  │  [Image or     │  │  Headline    ││
│  │   Visual]      │  │              ││
│  │                │  │  Body text   ││
│  │                │  │  continues   ││
│  │                │  │  here        ││
│  │                │  │              ││
│  │                │  │  [CTA]       ││
│  │                │  │              ││
│  └────────────────┘  └──────────────┘│
│                                      │
└──────────────────────────────────────┘
```

```css
@media (min-width: 768px) {
  .split-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
}
```

---

## Desktop Layout Patterns

### Desktop: Full Layout

```
┌────────────────────────────────────────────────────────┐
│ Header: [Logo]        [Nav Links]         [CTA]        │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │  Hero Section (Full-width, 700-800px height)     │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
├────────────────────────────────────────────────────────┤
│                                                        │
│     ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│     │   Card 1   │  │   Card 2   │  │   Card 3   │  │
│     └────────────┘  └────────────┘  └────────────┘  │
│                                                        │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌────────────────┐              ┌──────────────────┐ │
│  │                │              │                  │ │
│  │  Content       │              │  Visual/Image    │ │
│  │  Section       │              │                  │ │
│  │                │              │                  │ │
│  └────────────────┘              └──────────────────┘ │
│                                                        │
└────────────────────────────────────────────────────────┘

Specs:
- Max-width: 1280px (centered)
- Padding: 64px horizontal
- 3-4 column grids
- Full navigation visible
```

### Desktop: 3-Column Grid

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│     ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│     │            │  │            │  │            │   │
│     │   Card 1   │  │   Card 2   │  │   Card 3   │   │
│     │            │  │            │  │            │   │
│     └────────────┘  └────────────┘  └────────────┘   │
│                                                        │
│     ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│     │            │  │            │  │            │   │
│     │   Card 4   │  │   Card 5   │  │   Card 6   │   │
│     │            │  │            │  │            │   │
│     └────────────┘  └────────────┘  └────────────┘   │
│                                                        │
└────────────────────────────────────────────────────────┘
```

```css
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 0 64px;
  }
  
  .card {
    padding: 40px;
  }
}
```

### Desktop: 4-Column Stats

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐│
│  │ 10,000+  │  │   50+    │  │   95%    │  │ $500M+ ││
│  │ Founders │  │ Markets  │  │ Success  │  │ Raised ││
│  └──────────┘  └──────────┘  └──────────┘  └────────┘│
│                                                        │
└────────────────────────────────────────────────────────┘
```

```css
@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
}
```

---

## Component Responsiveness

### Responsive Card

```css
/* Mobile: Full width */
.card {
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
}

/* Tablet: 2-column */
@media (min-width: 768px) {
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  .card {
    margin-bottom: 0;
    padding: 32px;
  }
}

/* Desktop: 3-column */
@media (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  
  .card {
    padding: 40px;
  }
}
```

### Responsive Button

```css
/* Mobile: Full width */
.button {
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
}

/* Tablet: Auto width */
@media (min-width: 768px) {
  .button {
    width: auto;
    min-width: 200px;
    padding: 16px 32px;
  }
}

/* Desktop: Larger */
@media (min-width: 1024px) {
  .button {
    padding: 18px 40px;
    font-size: 18px;
  }
}
```

### Responsive Hero

```css
/* Mobile */
.hero {
  height: 500px;
  padding: 24px;
}

.hero h1 {
  font-size: 36px;
}

/* Tablet */
@media (min-width: 768px) {
  .hero {
    height: 600px;
    padding: 40px;
  }
  
  .hero h1 {
    font-size: 48px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    height: 700px;
    padding: 64px;
  }
  
  .hero h1 {
    font-size: 64px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .hero h1 {
    font-size: 72px;
  }
}
```

---

## Typography Scaling

### Fluid Typography

```css
/* Headline Scaling */
h1 {
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1.1;
  font-weight: 200;
}

h2 {
  font-size: clamp(28px, 4vw, 56px);
  line-height: 1.2;
  font-weight: 300;
}

h3 {
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.3;
  font-weight: 300;
}

h4 {
  font-size: clamp(20px, 2.5vw, 28px);
  line-height: 1.4;
  font-weight: 400;
}

/* Body Text Scaling */
body {
  font-size: clamp(16px, 1.2vw, 18px);
  line-height: 1.6;
}

.text-large {
  font-size: clamp(18px, 1.5vw, 20px);
  line-height: 1.7;
}
```

### Responsive Type Scale

| Element | Mobile | Tablet | Desktop | XL Desktop |
|---------|--------|--------|---------|------------|
| **Display** | 40px | 56px | 64px | 72px |
| **H1** | 36px | 48px | 56px | 64px |
| **H2** | 28px | 36px | 40px | 48px |
| **H3** | 24px | 28px | 32px | 36px |
| **H4** | 20px | 22px | 24px | 28px |
| **Body** | 16px | 16px | 17px | 18px |
| **Caption** | 12px | 13px | 14px | 14px |

---

## Touch & Interaction

### Touch Target Sizes

```css
/* Minimum touch targets: 48x48px */
.touch-target {
  min-width: 48px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Buttons */
.button-mobile {
  min-height: 48px;
  padding: 12px 24px;
  font-size: 16px;
}

/* Links in mobile menu */
.mobile-nav a {
  display: block;
  padding: 16px 0;
  min-height: 48px;
}

/* Form inputs */
input,
textarea,
select {
  min-height: 48px;
  padding: 12px 16px;
  font-size: 16px; /* Prevents iOS zoom */
}
```

### Hover vs Touch States

```css
/* Desktop: Hover states */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  }
  
  .button:hover {
    background: #0a2f14;
  }
}

/* Touch devices: Active states */
@media (hover: none) {
  .card:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
  
  .button:active {
    transform: scale(0.95);
  }
}
```

### Swipe Gestures

```css
/* Horizontal scroll for cards on mobile */
.card-scroll-mobile {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 24px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.card-scroll-mobile .card {
  flex: 0 0 280px;
  scroll-snap-align: center;
}

/* Hide scrollbar but keep functionality */
.card-scroll-mobile::-webkit-scrollbar {
  display: none;
}
```

---

## Performance Guidelines

### Mobile Optimization

#### Image Optimization

```html
<!-- Responsive images -->
<img
  src="image-small.jpg"
  srcset="
    image-small.jpg 640w,
    image-medium.jpg 1024w,
    image-large.jpg 1920w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Description"
  loading="lazy"
/>

<!-- Modern format with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

#### CSS Loading

```html
<!-- Critical CSS inline -->
<style>
  /* Above-the-fold styles */
  .hero { ... }
  .header { ... }
</style>

<!-- Non-critical CSS deferred -->
<link
  rel="preload"
  href="styles.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link rel="stylesheet" href="styles.css" />
</noscript>
```

#### Font Loading

```css
/* Prevent FOIT (Flash of Invisible Text) */
@font-face {
  font-family: 'BCG Font';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately */
}
```

### Reduced Motion

```css
/* Respect user preference */
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

## Testing Checklist

### Device Testing

- [ ] iPhone SE (320px width)
- [ ] iPhone 12/13/14 (390px width)
- [ ] iPhone Pro Max (428px width)
- [ ] iPad (768px width)
- [ ] iPad Pro (1024px width)
- [ ] Desktop 1280px
- [ ] Desktop 1920px
- [ ] Ultra-wide 2560px

### Functionality Testing

- [ ] Navigation works on all devices
- [ ] Forms are usable on mobile
- [ ] Touch targets are 48px minimum
- [ ] Text is readable (16px minimum)
- [ ] Images load properly
- [ ] Horizontal scroll works (if used)
- [ ] Buttons are reachable
- [ ] No content cutoff

### Performance Testing

- [ ] Lighthouse score 90+ (mobile)
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.8s
- [ ] Images optimized (WebP)
- [ ] CSS minified
- [ ] JS deferred

---

## Quick Reference

### Breakpoint Summary

```css
/* Mobile */
@media (max-width: 767px) {
  /* 1 column, 24px padding */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 2 columns, 40px padding */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 3+ columns, 64px padding */
}
```

### Grid Patterns

```css
/* Responsive Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile */
  gap: 24px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop */
    gap: 40px;
  }
}
```

### Container Padding

```css
.container {
  padding: 0 24px; /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 64px; /* Desktop */
    max-width: 1280px;
    margin: 0 auto;
  }
}
```

---

**End of Responsive Design System**

For visual examples, see BCG-WIREFRAMES-LAYOUTS.md  
For design specifications, see BCG-STYLE-GUIDE.md
