# Superside Web Design — Wireframe & Hi-Fi Prototypes

> **Source:** [Superside Web Design Services](https://www.superside.com/web-design-services)  
> **Sections:** What We Offer · Our Process  
> **Design skills:** low-fidelity-prototyping · high-fidelity-prototyping  
> **Implementation:** `/app/service-grid/page.tsx`

---

## Overview

This component system implements Superside's premium service grid design with two main sections:

1. **What We Offer**: 6 service cards in responsive grid (3×2 layout)
2. **Our Process**: Timeline with 6 steps on dark green background

---

# Part A: What We Offer

## A1. Lo-Fi Wireframe (ASCII)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ SECTION LABEL: what we offer                                                                      │
│ ## Creative web design, ready to _scale and convert_                                              │
│                                                                                                   │
│ Whether you're optimizing an existing site or launching something entirely new, we give you         │
│ everything you need to ship confidently, iterate quickly, and drive measurable business results.  │
│                                                                                                   │
│ 2×3 GRID — 6 SERVICE CARDS                                                                        │
│ ┌─────────────────────────────┬─────────────────────────────┬─────────────────────────────┐       │
│ │ [IMG] Website mockup +      │ [IMG] Webflow screens      │ [IMG] Phone + LP screen    │       │
│ │ mechanical element          │ "Made in Webflow"           │ Corebit health practice    │       │
│ │                             │                             │                             │       │
│ │ Website design              │ Webflow development         │ Landing pages              │       │
│ │ UX research, wireframes,    │ Certified partner,          │ Funnel-stage, mobile first,│       │
│ │ responsive, hi-fi UI        │ flexible, CMS               │ product launches, paid     │       │
│ │                             │                             │ media, SEO [Learn more]    │       │
│ └─────────────────────────────┴─────────────────────────────┴─────────────────────────────┘       │
│ ┌─────────────────────────────┬─────────────────────────────┬─────────────────────────────┐       │
│ │ [IMG] UI mockups, sidebar   │ [IMG] Analytics/dashboard   │ [IMG] "Outstanding copy"   │       │
│ │ "Label one", "CTA Here"     │ graphs, "Meet your AI"       │ copy overlay on nature     │       │
│ │                             │                             │                             │       │
│ │ Design systems and UI kits  │ UX/UI audits                │ Copy & motion support      │       │
│ │ Atomic design, reusable     │ Conversion leaks, usability │ Headlines, hierarchy,      │       │
│ │ component libraries         │ gaps, expert recs           │ microcopy, animation       │       │
│ └─────────────────────────────┴─────────────────────────────┴─────────────────────────────┘       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## A2. Hi-Fi Color Palette (Section-Specific)

### Card Backgrounds

| Card | Background | Hex/Gradient | Variant |
|------|------------|--------------|---------|
| **1. End-to-end product design** | Deep green | `#3d6b5c` | dark |
| **2. Prototyping and concept** | Pastel gradient | `linear-gradient(135deg, #fef3c7 0%, #bfdbfe 50%, #ddd6fe 100%)` | light |
| **3. Product design audit** | Dark blue | `#3b5998` | dark |
| **4. UX research and strategy** | Almost black | `#1f1f1f` | dark |
| **5. Design system creation** | Pale green | `#e8f4e6` | light |
| **6. MVP design** | Blue-green gradient | `linear-gradient(180deg, #d4f1f4 0%, #cfe8d4 100%)` | light |

### Shared Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--section-bg` | `#F8F8F4` | Page background (off-white) |
| `--card-text-dark` | `#1a1a2e` | Titles on light cards |
| `--card-text-light` | `#ffffff` | Titles on dark cards |
| `--body-text` | `#64748b` | Descriptions |
| `--cta-accent` | `#6366f1` | "Learn more" link |
| `--card-radius` | `12px` | Card corners |
| `--card-shadow` | `0 2px 8px rgba(0,0,0,0.08)` | Default |
| `--card-shadow-hover` | `0 8px 24px rgba(0,0,0,0.15)` | Hover state |

---

## A3. Hi-Fi Layout Specification

### Grid Structure

| Breakpoint | Columns | Gap | Card Min Height |
|------------|---------|-----|-----------------|
| ≥1024px (Desktop) | 3 | 32px | 340px |
| 768–1023px (Tablet) | 2 | 24px | 320px |
| <768px (Mobile) | 1 | 24px | 300px |

### Card Anatomy

```
┌─────────────────────────────────────┐
│ [Visual area — 200px height]        │ ← 50–55% of card
│  Image/mockup/illustration          │
│  Background = card.background       │
├─────────────────────────────────────┤
│ [Content area — white/95% opacity]  │ ← 45–50% of card
│  padding: 24px                      │
│                                     │
│  Title (18–20px, font-600)         │
│  Description (15px, 1.6 line-h)    │
│  [Learn more] (optional)           │
└─────────────────────────────────────┘
```

### Section Layout

```
[Pre-heading: uppercase, 12px, gray-500]
        ↓
[Headline: 40px, bold + italic mix]
        ↓
[Description: 18px, max-width 720px, center]
        ↓
[6 cards in responsive grid]
```

---

## A4. Typography Scale

| Element | Font Size | Weight | Color | Font Family |
|---------|-----------|--------|-------|-------------|
| Section label | 12px | 500 | `#64748b` | Sans-serif |
| Section headline (part 1) | 36–40px | 600 | `#1a1a2e` | Sans-serif |
| Section headline (part 2) | 36–40px | 400 | `#1a1a2e` | Georgia, serif (italic) |
| Intro paragraph | 18px | 400 | `#64748b` | Sans-serif |
| Card title | 18–20px | 600 | `#1a1a2e` / `#fff` | Sans-serif |
| Card description | 15–16px | 400 | `#64748b` / `rgba(255,255,255,0.9)` | Sans-serif |
| Learn more link | 14px | 500 | `#6366f1` | Sans-serif |

---

## A5. Card Content (Real Copy)

| # | Title | Description | Special |
|---|-------|-------------|---------|
| 1 | End-to-end product design | From initial concept to final delivery, we create cohesive product experiences backed by research and thoughtful design systems. | — |
| 2 | Prototyping and concept design | Turn bold ideas into tangible concepts that sell. Our design-forward prototypes prove value and accelerate buy-in. | — |
| 3 | Product design audit | Identify conversion blockers and usability issues. We audit your product end-to-end and deliver actionable recommendations. | **+ Learn more link** |
| 4 | UX research and strategy | Research-led strategy designed to align your team, reduce risk, and uncover real user needs before you build. | — |
| 5 | Design system creation and implementation | Build once, use everywhere. Our design systems scale with consistency, speed, and quality you can trust. | — |
| 6 | MVP design and prototyping | Validate concepts fast. We design focused MVPs to test assumptions and get you to market with confidence. | — |

---

## A6. Interaction States

### Card States

| State | Transform | Shadow | Duration |
|-------|-----------|--------|----------|
| Default | `translateY(0)` | `0 2px 8px rgba(0,0,0,0.08)` | — |
| Hover | `translateY(-4px)` | `0 8px 24px rgba(0,0,0,0.15)` | 300ms |
| Focus | Focus ring (2px offset) | Same as hover | — |

### "Learn More" Link

| State | Color | Decoration |
|-------|-------|------------|
| Default | `#6366f1` | None |
| Hover | `#4f46e5` | Underline + arrow shift |

---

## A7. CSS Variables (Copy-Paste Ready)

```css
:root {
  /* What We Offer section */
  --service-section-bg: #F8F8F4;
  
  /* Card backgrounds */
  --card-1-bg: #3d6b5c;
  --card-2-bg: linear-gradient(135deg, #fef3c7 0%, #bfdbfe 50%, #ddd6fe 100%);
  --card-3-bg: #3b5998;
  --card-4-bg: #1f1f1f;
  --card-5-bg: #e8f4e6;
  --card-6-bg: linear-gradient(180deg, #d4f1f4 0%, #cfe8d4 100%);
  
  /* Shared tokens */
  --card-radius: 12px;
  --card-gap-desktop: 32px;
  --card-gap-tablet: 24px;
  --card-gap-mobile: 24px;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --card-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

---

# Part B: Our Process

## B1. Lo-Fi Wireframe (ASCII)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ SECTION LABEL: Our process                                                                       │
│ ## Website workflows, _minus the friction_                                                        │
│   (sans-serif bold)     (italic serif-like)                                                       │
│                                                                                                   │
│ No more handoffs, holdups, or creative guesswork. Just a proven system for scalable,              │
│ brand-aligned web design.                                                                         │
│                                                                                                   │
│ [Book a demo]  ← lime green CTA                                                                   │
│                                                                                                   │
│ 6-STEP TIMELINE (vertical, right side)                                                           │
│   ●─── 1  Discovery and onboarding                                                                │
│   │       Together, we align on your brand, tech stack, audience, and site goals.                 │
│   ●─── 2  Team assignment                                                                         │
│   │       Get your own plug-in creative team: strategists, designers, developers, writers,        │
│   │       animators.                                                                               │
│   ●─── 3  UX and UI design                                                                        │
│   │       Structured process from wireframes to polished UI, always built for outcomes.           │
│   ●─── 4  Development                                                                             │
│   │       Built in Webflow with CMS, SEO, and speed in mind—modular or fully custom.             │
│   ●─── 5  QA and launch                                                                           │
│   │       We test and fine-tune across breakpoints, devices, and integrations.                     │
│   ●─── 6  Continuous optimization                                                                │
│           Post-launch audits, CRO improvements, and design updates as you grow.                   │
│                                                                                                   │
│ Layout: 2 columns — Left: intro + CTA  |  Right: timeline                                         │
│ BG: dark green (#0e6249)                                                                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## B2. Hi-Fi Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--process-bg` | `#0e6249` | Section background (deep green) |
| `--process-label` | `#ffffff` / `rgba(255,255,255,0.8)` | "OUR PROCESS" label |
| `--process-headline` | `#ffffff` | Main headline |
| `--process-body` | `rgba(255,255,255,0.9)` | Description text |
| `--process-cta-bg` | `#a8e063` | CTA button background (lime) |
| `--process-cta-text` | `#0e6249` | CTA button text (dark green) |
| `--timeline-line` | `rgba(255,255,255,0.3)` | Vertical connector |
| `--timeline-circle` | `#ffffff` | Step number circle |
| `--timeline-number` | `#1a1a2e` | Number inside circle |
| `--timeline-title` | `#ffffff` | Step title |
| `--timeline-description` | `rgba(255,255,255,0.85)` | Step description |

---

## B3. Layout Specification

### Two-Column Grid

| Breakpoint | Layout | Left Column | Right Column | Gap |
|------------|--------|-------------|--------------|-----|
| ≥1024px | Side-by-side | 45% | 55% | 64px |
| 768–1023px | Stacked | 100% | 100% | 48px |
| <768px | Stacked | 100% | 100% | 40px |

### Section Spacing

```
Padding vertical: 80–96px
Padding horizontal: 48px (desktop), 24px (mobile)
```

---

## B4. Timeline Structure

### Visual Anatomy

```
[Circle: 32px diameter]
        │
    [2px line]
        │
[Circle: 32px diameter]
        │
    [2px line]
        ...
```

### Circle Specifications

```css
.timeline-circle {
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-number {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
}
```

### Step Content

```
[Circle] → [Title: 18px, bold, white]
          [Description: 15px, white/85%, max-width 400px]
          
Vertical spacing between steps: 40px
```

---

## B5. Typography Scale

| Element | Size | Weight | Color | Font |
|---------|------|--------|-------|------|
| Section label | 12px | 500 | `rgba(255,255,255,0.8)` | Sans-serif |
| Headline (part 1) | 36–40px | 700 | `#ffffff` | Sans-serif |
| Headline (part 2) | 36–40px | 400 | `#ffffff` | Georgia, serif (italic) |
| Description | 18px | 400 | `rgba(255,255,255,0.9)` | Sans-serif |
| CTA button | 16px | 600 | `#0e6249` | Sans-serif |
| Step title | 18px | 600 | `#ffffff` | Sans-serif |
| Step description | 15px | 400 | `rgba(255,255,255,0.85)` | Sans-serif |

---

## B6. Process Steps (Real Copy)

| # | Title | Description |
|---|-------|-------------|
| 1 | Discovery and onboarding | Together, we align on your brand, tech stack, audience, and site goals. |
| 2 | Team assignment | Get your own plug-in creative team: strategists, designers, developers, writers, and animators. |
| 3 | UX and UI design | Structured process from wireframes to polished UI, always built for outcomes. |
| 4 | Development | Built in Webflow with CMS, SEO, and speed in mind—modular or fully custom. |
| 5 | QA and launch | We test and fine-tune across breakpoints, devices, and integrations. |
| 6 | Continuous optimization | Post-launch audits, CRO improvements, and design updates as you grow. |

---

## B7. Interaction States

### CTA Button

| State | Background | Text | Transform | Duration |
|-------|------------|------|-----------|----------|
| Default | `#a8e063` | `#0e6249` | `scale(1)` | — |
| Hover | `#94c752` | `#0e6249` | `scale(1.02)` | 200ms |
| Active | `#84b742` | `#0e6249` | `scale(0.98)` | 100ms |

---

## B8. CSS Variables (Copy-Paste Ready)

```css
:root {
  /* Our Process section */
  --process-section-bg: #0e6249;
  --process-cta-bg: #a8e063;
  --process-cta-bg-hover: #94c752;
  --process-cta-text: #0e6249;
  --process-timeline-line: rgba(255, 255, 255, 0.3);
  --process-step-circle: #ffffff;
  --process-step-number: #1a1a2e;
  --process-step-gap: 40px;
}
```

---

# Implementation Guide

## React Component Structure

```tsx
// Main component
<ServiceGrid>
  <Navigation />
  <HeroSection />
  <ServiceCardsGrid services={servicesData} />
  <ProcessTimeline steps={processSteps} />
  <Footer />
</ServiceGrid>
```

## Service Card Component

```tsx
interface ServiceCard {
  id: number;
  title: string;
  description: string;
  background: string; // CSS color or gradient
  variant: 'light' | 'dark'; // determines text color
  visual: string; // identifier for visual type
  learnMoreHref?: string; // optional
}
```

## Process Step Component

```tsx
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
```

---

# Design Principles

## Visual Hierarchy

1. **Section labels** (uppercase, small, muted) → **Headlines** (large, bold+italic mix) → **Body** (readable, spaced)
2. **Cards**: Visual area dominates → Text content supports
3. **Timeline**: Numbers anchor → Titles lead → Descriptions explain

## Color Strategy

- **Backgrounds**: Custom per card (no repetition)
- **Text contrast**: Always WCAG AA compliant
- **CTAs**: High-contrast lime green on dark green
- **Neutrals**: Off-white (#F8F8F4) over pure white for warmth

## Spacing System

- **Grid gaps**: 32px (desktop), 24px (tablet/mobile)
- **Card padding**: 24px content area
- **Section padding**: 80–96px vertical
- **Timeline steps**: 40px vertical spacing

## Responsive Behavior

- **Desktop (≥1024px)**: 3-column grid, side-by-side process layout
- **Tablet (768–1023px)**: 2-column grid, stacked process layout
- **Mobile (<768px)**: 1-column grid, stacked process layout

---

# References

| Resource | Path |
|----------|------|
| Component | `/app/service-grid/page.tsx` |
| Documentation | `/docs/components/01-service-grid.md` |
| Source | [superside.com/web-design-services](https://www.superside.com/web-design-services) |

---

**Created:** 2026-02-14  
**Status:** Production-ready  
**Design System:** Superside-inspired premium service grid
