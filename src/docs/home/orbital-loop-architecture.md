# Orbital Loop Architecture - Wireframe & Implementation Guide

## Overview

**Section:** Orbital Loop Architecture (Variant 2 of 3)  
**Purpose:** Visualize StartupAI's core system and 5 interconnected phases in a circular, continuous flow  
**Design:** Minimal, calm, architectural diagram with center core + 5 orbital nodes

---

## Visual Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    VARIANT 2 OF 3                            │
│                ORBITAL LOOP ARCHITECTURE                     │
│                                                              │
│                                                              │
│                      ⚡ MOMENTUM                             │
│                         ○                                    │
│                    ╱         ╲                              │
│               ○                   ○                          │
│          SCALING              FOUNDATION                     │
│              ╲                   ╱                          │
│               ╲     ●         ╱                            │
│                ╲ STARTUPAI  ╱                              │
│                 ╲  CORE    ╱                               │
│              ○      SYSTEM     ○                            │
│          WORKFLOW          ANALYSIS                         │
│                    ╲         ╱                              │
│                         ○                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. Section Header
- **Text:** "VARIANT 2 OF 3" (small, light gray, uppercase)
- **Text:** "ORBITAL LOOP ARCHITECTURE" (small, light gray, uppercase, below variant)
- **Position:** Top left, subtle, non-intrusive

### 2. Core Circle (Center)
- **Size:** Large circle (~300px diameter on desktop)
- **Color:** Emerald green (#0d5f4e)
- **Content:**
  - "STARTUPAI" (white, uppercase, serif font, centered)
  - "CORE SYSTEM" (white, small caps, lighter weight, below)
- **Effect:** Solid fill, no border

### 3. Orbital Ring
- **Type:** Circular path (stroke only)
- **Color:** Light gray (#E5E7EB or similar)
- **Stroke:** 1px, subtle
- **Size:** ~600px diameter on desktop
- **Position:** Centered around core circle

### 4. Orbital Nodes (5 total)

Each node consists of:
- **Circle:** White background, subtle border
- **Icon:** Lucide React icon, emerald green
- **Label:** Below circle, uppercase, small, gray

**Node Positions (clockwise from top):**

1. **MOMENTUM** (12 o'clock)
   - Icon: Zap (lightning bolt)
   - Position: Top of orbit
   
2. **FOUNDATION** (2 o'clock)
   - Icon: Sprout (plant/seedling)
   - Position: Upper right
   
3. **ANALYSIS** (4 o'clock)
   - Icon: TrendingUp (arrow trending up)
   - Position: Lower right
   
4. **WORKFLOW** (8 o'clock)
   - Icon: RefreshCw (circular arrows)
   - Position: Lower left
   
5. **SCALING** (10 o'clock)
   - Icon: Network (connected nodes)
   - Position: Upper left

---

## Spacing & Layout

### Desktop (1440px+)
- Core circle: 300px diameter
- Orbital ring: 600px diameter
- Node circles: 80px diameter
- Node icon: 32px
- Margin around entire diagram: 120px vertical

### Tablet (768px - 1439px)
- Core circle: 240px diameter
- Orbital ring: 480px diameter
- Node circles: 64px diameter
- Node icon: 24px
- Margin: 80px vertical

### Mobile (< 768px)
- Core circle: 180px diameter
- Orbital ring: 360px diameter
- Node circles: 56px diameter
- Node icon: 20px
- Margin: 60px vertical

---

## Color Palette

- **Core circle:** #0d5f4e (emerald green)
- **Core text:** #FFFFFF (white)
- **Orbital ring:** #E5E7EB (light gray)
- **Node circles:** #FFFFFF (white)
- **Node borders:** #E5E7EB (light gray)
- **Node icons:** #0d5f4e (emerald green)
- **Node labels:** #6B7280 (gray-600)
- **Section header:** #9CA3AF (gray-400)
- **Background:** #FAF9F7 (cream/beige)

---

## Typography

### Section Header
- Font: Inter (sans-serif)
- Weight: 400 (regular)
- Size: 11px
- Letter-spacing: 0.1em
- Transform: Uppercase
- Color: #9CA3AF

### Core Circle Text
- Font: Playfair Display (serif) or similar elegant serif
- Weight: 400 (regular)
- Size: 32px (STARTUPAI), 11px (CORE SYSTEM)
- Letter-spacing: 0.15em (STARTUPAI), 0.1em (CORE SYSTEM)
- Transform: Uppercase
- Color: #FFFFFF

### Node Labels
- Font: Inter (sans-serif)
- Weight: 500 (medium)
- Size: 10px
- Letter-spacing: 0.1em
- Transform: Uppercase
- Color: #6B7280

---

## Animation (Optional)

### On Scroll Into View
1. Core circle: Fade in + scale from 0.8 to 1 (0.6s ease-out)
2. Orbital ring: Draw stroke animation (1s ease-out, delay 0.3s)
3. Nodes: Fade in sequentially (0.4s each, stagger 0.1s, delay 0.6s)

### Continuous (Subtle)
- Node icons: Gentle pulse on hover (scale 1 to 1.1)
- Core circle: Very subtle glow effect

---

## Node Positioning (Mathematical)

**Center:** `(0, 0)`  
**Radius:** `300px` (from center to node center)

**Positions (in degrees, 0° = top):**
1. MOMENTUM: 0° → `(0, -300)`
2. FOUNDATION: 72° → `(285, -93)`
3. ANALYSIS: 144° → `(176, 243)`
4. WORKFLOW: 216° → `(-176, 243)`
5. SCALING: 288° → `(-285, -93)`

**CSS Transform:**
```css
.node-1 { transform: rotate(0deg) translate(300px) rotate(-0deg); }
.node-2 { transform: rotate(72deg) translate(300px) rotate(-72deg); }
.node-3 { transform: rotate(144deg) translate(300px) rotate(-144deg); }
.node-4 { transform: rotate(216deg) translate(300px) rotate(-216deg); }
.node-5 { transform: rotate(288deg) translate(300px) rotate(-288deg); }
```

---

## Content Hierarchy

1. **Visual Focus:** Core circle (largest, boldest)
2. **Secondary:** Orbital nodes (equal weight)
3. **Tertiary:** Node labels
4. **Background:** Section header, orbital ring

---

## Accessibility

- **Alt text:** "StartupAI core system with five interconnected phases: Momentum, Foundation, Analysis, Workflow, and Scaling"
- **ARIA labels:** Each node has descriptive label
- **Keyboard nav:** Not interactive (decorative diagram)
- **Color contrast:** All text meets WCAG AA standards

---

## Component Props (React)

```typescript
interface OrbitalLoopProps {
  className?: string;
  animate?: boolean; // Enable animations
  variant?: '1' | '2' | '3'; // Which variant to show
}

interface OrbitalNode {
  id: string;
  label: string;
  icon: LucideIcon;
  position: number; // Degrees (0-360)
}
```

---

## Variants (Future)

**Variant 1:** Linear flow (left to right)  
**Variant 2:** Orbital loop (current)  
**Variant 3:** Matrix grid (5 phases in 2x3 grid)

---

## Design Rationale

### Why Orbital?
- **Continuous:** No start/end, reinforces iteration
- **Interconnected:** All phases relate to core
- **Balanced:** Equal weight to all phases
- **Calm:** Circular = harmonious, stable
- **Memorable:** Unique visual metaphor

### Why These 5 Phases?
1. **MOMENTUM:** Starting energy, traction, launch
2. **FOUNDATION:** Core building blocks, validation
3. **ANALYSIS:** Data-driven insights, learning
4. **WORKFLOW:** Execution, daily operations
5. **SCALING:** Growth, expansion, optimization

### Why This Order?
- Clockwise flow (natural reading direction)
- MOMENTUM at top (aspirational, energetic)
- Balanced left/right distribution

---

## Implementation Notes

### SVG vs. CSS
- **Core circle:** CSS (simpler, responsive)
- **Orbital ring:** SVG (precise stroke control)
- **Nodes:** CSS absolute positioning (easier animation)

### Responsive Strategy
- Scale entire diagram proportionally
- Maintain aspect ratio
- Reduce margins on mobile
- Keep node labels readable (min 10px)

### Performance
- Use CSS transforms (GPU accelerated)
- Debounce scroll animations
- Lazy load if below fold

---

## File Structure

```
/components/home/
  OrbitalLoopArchitecture.tsx     (main component)
  OrbitalNode.tsx                 (reusable node)
  
/lib/
  orbitalPositions.ts             (position calculations)
```

---

## Related Components

- **Guided Flow** (linear version)
- **Startup System** (grid version)
- **How It Works** (detailed breakdown)

---

## Success Metrics

**Visual Impact:**
- [ ] Diagram is immediately understandable
- [ ] Core system is clearly the focal point
- [ ] All 5 phases are equally visible
- [ ] Orbital metaphor is clear

**Design Quality:**
- [ ] Maintains luxury aesthetic
- [ ] Follows color system
- [ ] Typography is elegant and readable
- [ ] Spacing is generous and calm

**Responsiveness:**
- [ ] Scales perfectly on all devices
- [ ] No layout breaks
- [ ] Labels remain readable
- [ ] Touch targets are adequate (mobile)

---

**Status:** Ready for implementation  
**Priority:** High (homepage feature)  
**Complexity:** Medium (SVG + CSS positioning)  
**Estimated Time:** 3-4 hours
