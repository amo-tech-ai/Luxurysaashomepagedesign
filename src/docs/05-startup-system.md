# 4-Phase Timeline Section – Design Specification
## StartupAI "The StartupAI System"

---

## 📋 Section Overview

**Purpose:** Communicate the guided 4-phase workflow that transforms founders from initial profile to investor-ready status.

**Location:** After Features section, before Value Pillars section

**Tone:** Calm, premium, intelligent, operating-system-like (not marketing-heavy)

---

## 🎨 Visual Design System

### Color Palette (Strict)
- **Background:** Deep charcoal gradient `#0B0F0E` → `#0d1210` → `#0B0F0E`
- **Primary accent:** Emerald green `#0d5f4e` (use sparingly)
- **Text primary:** Off-white `#F4F3EF`
- **Text secondary:** Off-white `#F4F3EF` at 70% opacity
- **Borders:** Off-white `#F4F3EF` at 8-15% opacity
- **Card background:** Dark surface `#0f1412` at 40% opacity

### Typography
- **Eyebrow:** Sans-serif, uppercase, 0.25em letter-spacing, emerald green, 12px
- **Headline:** Elegant serif, 48-64px, off-white, tight leading (1.15)
- **Subheading:** Sans-serif, 18px, off-white 70% opacity, relaxed leading
- **Card titles:** Sans-serif medium, 20px, off-white
- **Card descriptions:** Sans-serif regular, 14px, off-white 65% opacity

### Spacing
- **Section padding:** 128px vertical
- **Header margin-bottom:** 96px
- **Timeline margin-bottom:** 80px
- **Card gap:** 24px
- **Card padding:** 32px

---

## 📐 Layout Structure

### 1. Section Header (Centered)
```
┌─────────────────────────────────────────────────────┐
│                THE STARTUPAI SYSTEM                 │ ← Eyebrow
│                                                     │
│     Go from profile to investor-ready—fast.         │ ← Headline (Serif)
│                                                     │
│   Our 4-phase guided workflow is engineered to      │ ← Subheading
│   transform your vision into a scalable, high-      │
│   performance startup infrastructure.               │
└─────────────────────────────────────────────────────┘
```

**Content:**
- Eyebrow: "THE STARTUPAI SYSTEM"
- Headline: "Go from profile to investor-ready—fast."
- Subheading: "Our 4-phase guided workflow is engineered to transform your vision into a scalable, high-performance startup infrastructure."

---

### 2. Horizontal Timeline (Desktop)
```
○───────────○───────────○───────────○
1           2           3           4
```

**Visual specs:**
- Horizontal line: 1px, off-white 8% opacity
- Progress line: 1px, emerald 60% opacity (draws over base)
- Dots: 20px diameter circles
  - Outer ring: 2px border, emerald
  - Inner dot: 8px diameter, emerald fill
- Spacing: Evenly distributed across card width

**States:**
- Inactive: Muted border (off-white 10%)
- Active: Emerald ring + emerald inner dot
- No glow, no pulse, no animation loops

---

### 3. Four Phase Cards (Grid Layout)

**Desktop:** 4 columns, equal width  
**Tablet:** 2×2 grid  
**Mobile:** Stacked vertically

```
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  [Icon] │ │  [Icon] │ │  [Icon] │ │  [Icon] │
│         │ │         │ │         │ │         │
│ WEEKS   │ │ WEEKS   │ │ WEEKS   │ │ WEEK    │
│  1-2    │ │  3-5    │ │  6-7    │ │   8     │
│         │ │         │ │         │ │         │
│ Title   │ │ Title   │ │ Title   │ │ Title   │
│         │ │         │ │         │ │         │
│ Descrip │ │ Descrip │ │ Descrip │ │ Descrip │
│ tion... │ │ tion... │ │ tion... │ │ tion... │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

---

## 📝 Card Content (Final Copy)

### Card 1 – Profile & Foundation
**Timeline label:** WEEKS 1-2  
**Icon:** Database (layered/stack icon)  
**Icon style:** Outline, emerald green, 24px, 1.5px stroke  
**Title:** Profile & Foundation  
**Description:** Secure data ingestion, infrastructure setup, and competitive landscape benchmarking.

---

### Card 2 – Intelligence & Materials
**Timeline label:** WEEKS 3-5  
**Icon:** BarChart3 (analytics/chart icon)  
**Icon style:** Outline, emerald green, 24px, 1.5px stroke  
**Title:** Intelligence & Materials  
**Description:** Autonomous generation of high-fidelity pitch decks, financial models, and market intelligence reports.

---

### Card 3 – Fundraising Workflow
**Timeline label:** WEEKS 6-7  
**Icon:** Network (connections/nodes icon)  
**Icon style:** Outline, emerald green, 24px, 1.5px stroke  
**Title:** Fundraising Workflow  
**Description:** Deployment of targeted investor outreach strategies and automated CRM synchronization.

---

### Card 4 – Execution & Momentum
**Timeline label:** WEEK 8  
**Icon:** Rocket (forward/launch icon)  
**Icon style:** Outline, emerald green, 24px, 1.5px stroke  
**Title:** Execution & Momentum  
**Description:** Active market engagement, data-driven negotiation support, and round closing acceleration.

---

## 🎯 Icon Badge Design

```
┌───────────┐
│  ╔═══╗    │  ← Rounded square badge
│  ║ ⚡ ║   │  ← Icon inside
│  ╚═══╝    │
└───────────┘
```

**Specs:**
- Badge size: 48×48px
- Border radius: 8px
- Background: Emerald `#0d5f4e` at 10% opacity
- Border: 1px, emerald `#0d5f4e` at 20% opacity
- Icon: 24×24px, emerald `#0d5f4e`, stroke-width 1.5

---

## 🎭 Interactive States

### Card Hover
- Border: Shifts from off-white 8% → emerald 50%
- Transform: translateY(-4px)
- Shadow: Subtle black overlay 10% opacity
- Duration: 300ms
- Easing: ease-out
- **No bounce, no glow, no scale**

### Button Hover
- Border: off-white 15% → emerald 50%
- Arrow: Shifts right 2-3px
- Duration: 300ms

---

## ✨ Animation Strategy (Scroll-triggered)

### On Scroll Into View (20% threshold)

**Sequence:**
1. Eyebrow fades in (200ms, 0ms delay)
2. Headline fades + moves up 12px (400ms, 100ms delay)
3. Subheading fades in (300ms, 400ms delay)
4. Timeline line draws left→right (700ms, 500ms delay, scaleX)
5. Timeline dots activate sequentially (120ms stagger each)
6. Cards fade + slide up 16px (350ms each, 120ms stagger)
7. CTA button fades in (300ms, 200ms after last card)

**Easing:**
- Timeline: `ease-out`
- Cards: `cubic-bezier(0.4, 0, 0.2, 1)`

**Motion principles:**
- Duration: 200-800ms only
- No loops, no bounce, no spring
- Calm, editorial, system-grade feel

---

## 📱 Responsive Behavior

### Desktop (1024px+)
- 4 cards in one row
- Full timeline animation
- Horizontal timeline with dots

### Tablet (768px - 1023px)
- 2×2 grid
- Timeline line may shorten
- Card animations preserved

### Mobile (< 768px)
- Vertical stack
- Timeline simplified or hidden
- Cards fade in sequentially (no line animation)

---

## ♿ Accessibility

### Reduced Motion
If `prefers-reduced-motion` is enabled:
- Disable timeline line draw
- Disable stagger delays
- All elements appear instantly (opacity: 1)
- Preserve layout and hierarchy

### Semantic HTML
- Section: `<section>`
- Headline: `<h2>`
- Card titles: `<h3>`
- List structure: Consider `<ol>` for phases

---

## 🎯 Bottom CTA

**Text:** "Explore the full roadmap"  
**Icon:** Arrow right →  
**Style:** Ghost button (transparent bg, bordered)  
**Border:** Off-white 15% opacity  
**Hover:** Border → emerald 50%, arrow nudges right  

---

## 🔧 Technical Implementation Notes

### Component Structure
```
<FourPhaseTimeline>
  <Header>
    <Eyebrow />
    <Headline />
    <Subheading />
  </Header>
  <TimelineConnector>
    <BaseLine />
    <ProgressLine />
    <Dots />
  </TimelineConnector>
  <CardsGrid>
    <PhaseCard /> × 4
  </CardsGrid>
  <CTAButton />
</FourPhaseTimeline>
```

### State Management
- `isVisible` (boolean) – Tracks scroll intersection
- `activePhase` (number 0-4) – Controls timeline dot states
- IntersectionObserver with 0.2 threshold

### Icons from lucide-react
- Database
- BarChart3
- Network
- Rocket
- ArrowRight

---

## ✅ Design Checklist

- [ ] Dark charcoal gradient background
- [ ] Emerald green used ONLY as accent
- [ ] Serif headline + sans-serif body
- [ ] Timeline dots connected by horizontal line
- [ ] 4 cards with icons, labels, titles, descriptions
- [ ] Hover states: border color change + subtle lift
- [ ] Scroll-triggered entrance animations
- [ ] No loops, no glow, no dramatic effects
- [ ] Responsive grid (4 → 2×2 → 1 column)
- [ ] Reduced motion support
- [ ] Bottom CTA button with arrow

---

## 🎨 Visual Reference

**Inspiration:** Operating system timeline, not marketing funnel  
**Mood:** Calm, intelligent, precise, architectural  
**Examples:** Linear onboarding, Stripe dashboard flows, Notion setup guides

---

**Document Version:** 1.0  
**Last Updated:** 2026-01-17  
**Status:** Ready for implementation
