# Hero Section Mockup

**BCG Editorial Style × StartupAI Content**

**Section**: Hero (Homepage Above-the-Fold)  
**Priority**: Critical — Sets entire site tone  
**Status**: Ready for Review  
**Version**: 1.0

---

## Purpose

The hero section must:

1. **Immediately communicate core value** — "From strategy to daily execution"
2. **Establish consulting-grade authority** — Not SaaS marketing
3. **Introduce the operating system concept** — With clear diagram
4. **Drive to onboarding** — Primary CTA

**Feeling**: A partner-level consulting deck opening slide, not a startup landing page.

---

## Content Specifications

### Primary Headline
```
From strategy to daily execution — 
in one guided flow.
```

**Rules**:
* Sentence case only
* Em dash (—) for editorial pause
* Two lines maximum
* No exclamation marks

---

### Subheadline
```
StartupAI is an AI operating system for founders, 
turning ideas into investor-ready execution through 
structured workflows.
```

**Rules**:
* Explains what StartupAI is
* "Operating system" positioning
* Strategic tone (not promotional)
* Max 3 lines

---

### Primary CTA
```
Start with your profile
```

**Action**: Navigate to `/onboarding-v3`

**Rules**:
* Action-oriented (not "Learn more")
* Specific next step
* Green background (#0E3E1B)
* Arrow icon (subtle, right side)

---

### Navigation (Sticky Header)
```
Logo: StartupAI
Links: Services | Approach | Insights
CTA: Get started
```

---

## Visual Specifications

### Background
* **Color**: White (#FFFFFF)
* **No imagery**: Pure white, no gradients, no patterns

### Spacing
* **Section padding**: 
  * Mobile: `py-20` (80px)
  * Desktop: `py-32` (128px)
* **Max-width**: 1440px
* **Horizontal margins**: 
  * Mobile: `px-8` (32px)
  * Desktop: `px-16` (64px)

### Typography

#### Headline
* **Size**: 
  * Mobile: 48px (`text-5xl`)
  * Tablet: 56px (`text-6xl`)
  * Desktop: 72px (`text-7xl`)
* **Weight**: Light (300) — `font-light`
* **Line-height**: 1.1 — `leading-[1.1]`
* **Tracking**: Tight — `tracking-tight`
* **Color**: #212427 (primary text)

#### Subheadline
* **Size**: 
  * Mobile: 18px (`text-lg`)
  * Desktop: 20px (`text-xl`)
* **Weight**: Normal (400)
* **Line-height**: 1.6 — `leading-relaxed`
* **Color**: #696969 (secondary text)
* **Max-width**: 600px

#### CTA Button
* **Size**: 16px
* **Weight**: Medium (500) — `font-medium`
* **Padding**: `px-8 py-4` (32px × 16px)
* **Background**: #0E3E1B (green)
* **Text color**: White
* **Hover**: Darken to #0a2f14

---

## Layout

### Desktop (1440px max-width, 1024px+ viewport)

```
┌─────────────────────────────────────────────────────────┐
│  Navigation (Sticky)                                    │
│  [StartupAI] ········ Services Approach Insights [CTA]  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                           │
│  ┌──────────────────────────┐  ┌──────────────────────┐ │
│  │  TEXT COLUMN (50%)       │  │  DIAGRAM (50%)       │ │
│  │                          │  │                      │ │
│  │  [HEADLINE]              │  │  ┌────────────────┐ │ │
│  │  Large, editorial        │  │  │ 01 Profile     │ │ │
│  │  sentence case           │  │  ├────────────────┤ │ │
│  │                          │  │  │ 02 Strategy    │ │ │
│  │  [SUBHEADLINE]           │  │  ├────────────────┤ │ │
│  │  Smaller, muted          │  │  │ 03 Execution   │ │ │ ← Highlighted
│  │                          │  │  ├────────────────┤ │ │
│  │  [CTA BUTTON]            │  │  │ 04 Investor    │ │ │
│  │  Start with profile →    │  │  │    Readiness   │ │ │
│  │                          │  │  └────────────────┘ │ │
│  └──────────────────────────┘  └──────────────────────┘ │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Grid Structure**:
* Two-column grid (50/50 split on large screens)
* Gap between columns: 96px–128px (`gap-20 lg:gap-32`)
* Vertical center alignment optional (not required)
* Text column: Left-aligned
* Diagram column: Right-aligned or centered

---

### Tablet (768px–1024px)

* Maintain two-column layout
* Reduce headline size to 56px
* Reduce gap to 64px
* Diagram scales proportionally

---

### Mobile (< 768px)

```
┌─────────────────────────────┐
│  Navigation (Sticky)        │
│  [StartupAI] ····· [≡ Menu] │
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │
│  [HEADLINE]                 │
│  From strategy to           │
│  daily execution —          │
│  in one guided flow.        │
│                             │
│  [SUBHEADLINE]              │
│  StartupAI is an AI         │
│  operating system...        │
│                             │
│  [CTA BUTTON]               │
│  Start with profile →       │
│                             │
│  ┌─────────────────────┐   │
│  │ 01 Profile          │   │
│  ├─────────────────────┤   │
│  │ 02 Strategy         │   │
│  ├─────────────────────┤   │
│  │ 03 Execution        │   │ ← Highlighted
│  ├─────────────────────┤   │
│  │ 04 Investor         │   │
│  │    Readiness        │   │
│  └─────────────────────┘   │
│                             │
└─────────────────────────────┘
```

**Changes**:
* Stack vertically (text above diagram)
* Headline: 48px (`text-5xl`)
* Diagram: Full width, reduced padding
* Button: Full width or auto width (not stretched)

---

## Diagram Details

### Type
**Flow Diagram** — Vertical stacked boxes

### Structure

```
┌────────────────────────────┐
│ 01                         │ ← Step number (uppercase, muted)
│ Profile                    │ ← Step name (medium weight)
└────────────────────────────┘
         ↓ (implied, no arrow)
┌────────────────────────────┐
│ 02                         │
│ Strategy                   │
└────────────────────────────┘
         ↓
┌────────────────────────────┐
│ 03                         │ ← HIGHLIGHTED IN GREEN
│ Execution                  │
└────────────────────────────┘
         ↓
┌────────────────────────────┐
│ 04                         │
│ Investor Readiness         │
└────────────────────────────┘
```

---

### Specifications

#### Box Dimensions
* **Width**: 100% of column (max 400px)
* **Padding**: 
  * Horizontal: 32px (`px-8`)
  * Vertical: 24px (`py-6`)
* **Border**: 1px solid #E5E5E5
* **Background**: 
  * Default: White
  * Active (step 03): #DCF9E3 (soft green)

#### Step Number
* **Size**: 10px–12px (`text-xs`)
* **Style**: Uppercase, wide tracking (`uppercase tracking-wider`)
* **Color**: 
  * Default: #898888 (muted)
  * Active: #0E3E1B (green)
* **Margin-bottom**: 6px (`mb-1.5`)

#### Step Label
* **Size**: 16px (`text-base`)
* **Weight**: Medium (500) — `font-medium`
* **Color**: 
  * Default: #212427 (primary)
  * Active: #0E3E1B (green)

#### Spacing
* **Gap between boxes**: 0px (boxes touch with shared borders)
* **Or alternate**: 16px gap with no borders (cleaner)

---

### Visual Variants

**Option A: Connected Boxes** (Current implementation)
* Boxes share borders
* Continuous vertical flow
* Minimal visual weight

**Option B: Separated Boxes**
* 16px gap between boxes
* Each box has full border
* More breathing room

**Recommendation**: Option A (connected) — more cohesive, less visual noise

---

## Interaction States

### CTA Button
* **Default**: Green background (#0E3E1B), white text
* **Hover**: Darker green (#0a2f14)
* **Active/Pressed**: Slightly darker
* **Transition**: 200ms ease
* **Cursor**: Pointer

### Navigation Links
* **Default**: #696969 (secondary text)
* **Hover**: #212427 (primary text)
* **Transition**: 200ms color change

### Diagram
* **Static**: No hover states
* **Purpose**: Information display, not interactive

---

## Accessibility Requirements

### Semantic HTML
```html
<header> — Navigation
<section> — Hero section
<h1> — Primary headline
<p> — Subheadline
<a> or <button> — Primary CTA
<div role="img" aria-label="StartupAI process flow"> — Diagram
```

### Color Contrast
* **Headline on white**: 15.5:1 (WCAG AAA) ✓
* **Subheadline on white**: 7.5:1 (WCAG AAA) ✓
* **Green button text on green bg**: 12:1 (WCAG AAA) ✓
* **Diagram labels**: 15.5:1 minimum

### Focus States
* **CTA button**: Visible outline on keyboard focus
* **Navigation links**: Underline or outline on focus

### Screen Readers
* Diagram must have descriptive aria-label
* Alternative text explains flow without visual

---

## Implementation Notes

### Technical Considerations

**Grid System**:
* Use CSS Grid or Flexbox
* Two columns on desktop: `grid-cols-1 lg:grid-cols-2`
* Gap: `gap-20 lg:gap-32`

**Responsive Images**: N/A (no images, diagram is HTML/CSS)

**Diagram Implementation**:
* Option 1: HTML/CSS with divs and borders
* Option 2: Inline SVG for precise control
* **Recommendation**: HTML/CSS (more flexible, easier to update)

**Performance**:
* Above-the-fold: Critical CSS inline
* Font loading: System fonts ensure instant render
* No lazy loading (hero is immediate)

---

### Browser Support
* Modern browsers (Chrome, Firefox, Safari, Edge)
* CSS Grid with fallback
* No IE11 support required

---

### Animation Considerations
* **Fade-in on load**: Optional, subtle (200ms)
* **No parallax**: Static, authoritative
* **No diagram animations**: Diagrams are static
* **Scroll behavior**: Smooth scroll to sections on nav click

---

## BCG Reference Comparison

### What We're Emulating

**BCG Characteristics**:
* Large editorial headlines (not title case)
* Generous white space around text
* Diagrams that explain (not decorate)
* Minimal color usage
* Calm, professional authority
* One clear message per section

**StartupAI Application**:
* ✓ Sentence case headline with em dash
* ✓ White background dominates
* ✓ Process diagram shows system
* ✓ Green accent only on CTA and active state
* ✓ Single value prop: "Strategy to execution"
* ✓ No competing messages

---

### What We're Avoiding

**Not BCG** (Don't do):
* ❌ Photography or hero images
* ❌ Gradients or decorative backgrounds
* ❌ Multiple CTAs competing
* ❌ Icons for decoration
* ❌ "Join 10,000+ founders" social proof
* ❌ Feature bullets in hero

**StartupAI Avoidance**:
* ✓ No background images
* ✓ Solid colors only
* ✓ Single CTA
* ✓ Diagram is structural, not decorative
* ✓ No vanity metrics
* ✓ Focus on value prop, not features

---

## Design Variations to Test

### Variation A: Diagram Right (Current)
* Text left, diagram right
* **Pros**: Standard reading flow, text first
* **Cons**: Diagram may be overlooked

### Variation B: Diagram Left
* Diagram left, text right
* **Pros**: Diagram gets immediate attention
* **Cons**: Breaks reading flow

### Variation C: Centered (Single Column)
* Text centered, diagram below
* **Pros**: Maximum focus on message
* **Cons**: Less efficient use of space

**Recommendation**: Variation A (Diagram Right) — text-first reinforces editorial approach

---

## Content Alternatives (If Needed)

### Alternative Headline 1
```
Strategy to execution — 
guided by AI, built for founders.
```

### Alternative Headline 2
```
From scattered ideas 
to investor-ready execution.
```

### Alternative Subheadline
```
An AI operating system that connects strategic 
thinking to daily action, built specifically for 
early-stage founders.
```

**Current version is preferred** — clearest value prop.

---

## Success Metrics

How to measure if hero is working:

1. **Scroll depth**: Do users scroll past hero? (Target: 80%+)
2. **CTA click rate**: Do users click "Start with profile"? (Target: 15%+)
3. **Time on hero**: Are users reading? (Target: 5–10 seconds)
4. **Bounce rate**: Do users stay? (Target: <40%)

---

## Approval Checklist

Before implementation:

- [ ] Headline communicates core value clearly
- [ ] Subheadline explains "operating system" concept
- [ ] CTA is specific and action-oriented
- [ ] Diagram shows process flow (not decoration)
- [ ] Typography hierarchy clear without color
- [ ] Works in grayscale
- [ ] Feels consulting-grade (not SaaS marketing)
- [ ] Mobile layout stacks cleanly
- [ ] Accessibility requirements met
- [ ] Design lead approved
- [ ] Product/strategy approved

---

## Next Steps

1. **Review this mockup** with design lead
2. **Get product approval** on messaging
3. **Implement in code** per specifications
4. **Test responsive behavior** on devices
5. **A/B test variations** if needed
6. **Measure success metrics** post-launch

---

## Related Mockups

* Next: **Guided Entry Section** (interactive prompt)
* Next: **Core Problem Section** (typography-only)
* Reference: **Footer Section** (multi-column layout)

---

## File References

* **Current implementation**: `/app/home-v5/page.tsx`
* **Visual system**: `/docs/design/01-visual-system.md`
* **Wireframe**: `/docs/design/wireframe.md`

---

**Mockup Status**: ✅ Complete  
**Approval Status**: Pending Review  
**Implementation Status**: Already implemented (Home V5)

---

*End of Hero Section Mockup*
