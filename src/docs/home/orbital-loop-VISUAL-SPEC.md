# Orbital Loop Architecture - Visual Specification

## 🎨 Quick Visual Reference

```
                    VARIANT 2 OF 3
                ORBITAL LOOP ARCHITECTURE


                      ⚡ (0°)
                    MOMENTUM
                        ○
                   ╱         ╲
              ○                   ○
         SCALING              FOUNDATION
         (288°)                  (72°)
             ╲                   ╱
              ╲     ●         ╱
               ╲ STARTUPAI  ╱
                ╲  CORE    ╱
             ○      SYSTEM     ○
         WORKFLOW          ANALYSIS
         (216°)              (144°)
                   ╲         ╱
                        ○
```

---

## 📐 Dimensions

### Desktop (1440px+)
| Element | Size |
|---------|------|
| Core circle | 300px ⌀ |
| Orbital ring | 600px ⌀ |
| Node circles | 80px ⌀ |
| Node icons | 32px |
| Section padding | 120px vertical |

### Tablet (768-1439px)
| Element | Size |
|---------|------|
| Core circle | 240px ⌀ |
| Orbital ring | 480px ⌀ |
| Node circles | 64px ⌀ |
| Node icons | 24px |
| Section padding | 80px vertical |

### Mobile (<768px)
| Element | Size |
|---------|------|
| Core circle | 180px ⌀ |
| Orbital ring | 360px ⌀ |
| Node circles | 56px ⌀ |
| Node icons | 20px |
| Section padding | 60px vertical |

---

## 🎨 Color Palette

```css
/* Core */
--core-bg: #0d5f4e;           /* Emerald green */
--core-text: #FFFFFF;         /* White */

/* Orbital Ring */
--ring-stroke: #E5E7EB;       /* Light gray */

/* Nodes */
--node-bg: #FFFFFF;           /* White */
--node-border: #E5E7EB;       /* Light gray */
--node-icon: #0d5f4e;         /* Emerald green */
--node-label: #6B7280;        /* Gray-600 */

/* Section */
--section-header: #9CA3AF;    /* Gray-400 */
--section-bg: #FAF9F7;        /* Cream/beige */
```

---

## 🔤 Typography

### Section Header
```css
font-family: 'Inter', sans-serif;
font-size: 11px;
font-weight: 400;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #9CA3AF;
```

### Core Circle - "STARTUPAI"
```css
font-family: 'Playfair Display', serif;  /* or similar elegant serif */
font-size: 32px;
font-weight: 400;
letter-spacing: 0.15em;
text-transform: uppercase;
color: #FFFFFF;
```

### Core Circle - "CORE SYSTEM"
```css
font-family: 'Inter', sans-serif;
font-size: 11px;
font-weight: 400;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #FFFFFF;
opacity: 0.8;
```

### Node Labels
```css
font-family: 'Inter', sans-serif;
font-size: 10px;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #6B7280;
```

---

## 📍 Node Positions (Mathematical)

### Formula
```javascript
// For a node at angle θ (in degrees) on a circle of radius r:
const radians = (θ * Math.PI) / 180;
const x = r * Math.sin(radians);
const y = -r * Math.cos(radians);  // Negative because CSS y-axis is inverted
```

### Exact Coordinates (300px radius)

| Node | Angle | X | Y | Position |
|------|-------|---|---|----------|
| MOMENTUM | 0° | 0 | -300 | Top |
| FOUNDATION | 72° | 285 | -93 | Upper right |
| ANALYSIS | 144° | 176 | 243 | Lower right |
| WORKFLOW | 216° | -176 | 243 | Lower left |
| SCALING | 288° | -285 | -93 | Upper left |

### CSS Transform Method
```css
.node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.node-momentum {
  transform: rotate(0deg) translateY(-300px);
}

.node-foundation {
  transform: rotate(72deg) translateY(-300px) rotate(-72deg);
}

.node-analysis {
  transform: rotate(144deg) translateY(-300px) rotate(-144deg);
}

.node-workflow {
  transform: rotate(216deg) translateY(-300px) rotate(-216deg);
}

.node-scaling {
  transform: rotate(288deg) translateY(-300px) rotate(-288deg);
}
```

---

## 🎭 Icons (Lucide React)

| Node | Icon Component | Visual |
|------|---------------|--------|
| MOMENTUM | `<Zap />` | ⚡ Lightning bolt |
| FOUNDATION | `<Sprout />` | 🌱 Seedling/plant |
| ANALYSIS | `<TrendingUp />` | 📈 Upward trending arrow |
| WORKFLOW | `<RefreshCw />` | 🔄 Circular refresh arrows |
| SCALING | `<Network />` | 🔗 Connected nodes/network |

---

## ✨ Spacing System

### Container
```css
.orbital-section {
  padding: 120px 0;  /* Desktop */
  padding: 80px 0;   /* Tablet */
  padding: 60px 0;   /* Mobile */
}
```

### Internal Spacing
```css
.section-header {
  margin-bottom: 80px;  /* Desktop */
  margin-bottom: 60px;  /* Tablet */
  margin-bottom: 40px;  /* Mobile */
}

.node-label {
  margin-top: 12px;
}
```

---

## 🎬 Animation Timings

### Scroll-In Sequence
```javascript
{
  core: {
    delay: 0,
    duration: 600
  },
  ring: {
    delay: 300,
    duration: 1000
  },
  nodes: [
    { delay: 600, duration: 400 },   // MOMENTUM
    { delay: 700, duration: 400 },   // FOUNDATION
    { delay: 800, duration: 400 },   // ANALYSIS
    { delay: 900, duration: 400 },   // WORKFLOW
    { delay: 1000, duration: 400 }   // SCALING
  ]
}
```

### Hover States
```css
.node:hover .icon {
  transform: scale(1.1);
  transition: transform 0.3s ease-out;
}

.core:hover {
  box-shadow: 0 0 40px rgba(13, 95, 78, 0.3);
  transition: box-shadow 0.3s ease-out;
}
```

---

## 📱 Responsive Breakpoints

```javascript
const breakpoints = {
  mobile: '< 768px',
  tablet: '768px - 1439px',
  desktop: '>= 1440px'
};
```

### Scaling Factor
| Screen | Core | Ring | Node | Icon |
|--------|------|------|------|------|
| Desktop | 1.0x | 1.0x | 1.0x | 1.0x |
| Tablet | 0.8x | 0.8x | 0.8x | 0.75x |
| Mobile | 0.6x | 0.6x | 0.7x | 0.625x |

---

## ♿ Accessibility

### ARIA Labels
```html
<div role="img" aria-label="StartupAI core system with five interconnected phases">
  <div aria-label="Core System: StartupAI" />
  <div aria-label="Phase 1: Momentum - Build initial traction" />
  <div aria-label="Phase 2: Foundation - Validate assumptions" />
  <div aria-label="Phase 3: Analysis - Data-driven insights" />
  <div aria-label="Phase 4: Workflow - Daily execution" />
  <div aria-label="Phase 5: Scaling - Growth and expansion" />
</div>
```

### Color Contrast
- Core text on green: **WCAG AAA** (white on #0d5f4e)
- Node labels: **WCAG AA** (#6B7280 on #FAF9F7)
- Section header: **WCAG AA** (#9CA3AF on #FAF9F7)

---

## 🔧 Implementation Hints

### SVG Circle Path
```javascript
const circumference = 2 * Math.PI * radius;

<circle
  r={radius}
  cx={radius}
  cy={radius}
  stroke="#E5E7EB"
  strokeWidth={1}
  fill="none"
  strokeDasharray={circumference}
  strokeDashoffset={circumference}
/>
```

### Absolute Centering
```css
.diagram-container {
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
}

.core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Responsive Container
```css
.orbital-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 📋 Component Checklist

**Structure:**
- [ ] Section header (variant + title)
- [ ] Container (centered, responsive)
- [ ] Core circle (green, text centered)
- [ ] Orbital ring (SVG stroke)
- [ ] 5 nodes (white circles + icons)
- [ ] 5 labels (below nodes)

**Styling:**
- [ ] Colors match spec
- [ ] Typography matches spec
- [ ] Spacing matches spec
- [ ] Responsive sizes correct

**Behavior:**
- [ ] Nodes positioned correctly
- [ ] Hover states work
- [ ] Animations smooth
- [ ] Accessible (keyboard, screen readers)

**Testing:**
- [ ] Desktop (1440px+)
- [ ] Tablet (768-1439px)
- [ ] Mobile (375px)
- [ ] Dark mode (if applicable)

---

## 🎯 Design Goals

1. **Clarity:** Immediate understanding of circular flow
2. **Focus:** Core system is clearly the center
3. **Balance:** All 5 phases equally important
4. **Calm:** No visual clutter, generous spacing
5. **Premium:** Elegant typography, subtle animations
6. **Memorable:** Unique orbital metaphor

---

## 💡 Quick Tips

- Use `aspect-ratio: 1` to maintain perfect circle
- Prefer CSS transforms over absolute positioning
- Test with real content (not Lorem Ipsum)
- Ensure touch targets are min 44px (mobile)
- Use `will-change: transform` for animated elements
- Lazy load if below fold

---

**Ready to build!** 🚀

Use this spec with the implementation prompts to create a pixel-perfect component.
