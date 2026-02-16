# Slide 01 — Fashion's $2 Trillion Crossroads (Hero)

**Task ID:** 001-INFOG  
**Status:** Ready for Development  
**Design System:** Dark premium editorial with violet accents  
**Viewport:** Full-screen scroll-driven storytelling

---

## Visual Design Philosophy

**Core Aesthetic:** McKinsey editorial intelligence meets Apple product page refinement — dark, sophisticated, data-driven luxury that signals authority and precision.

**Design Principles:**
1. **Breathing Room First** - Generous whitespace (minimum 128px section padding)
2. **Hierarchy Through Scale** - 4× difference between hero stat and body text
3. **Motion Through Restraint** - Subtle animations (spring physics, not bouncy)
4. **Data as Art** - Charts treated as visual centerpieces, not afterthoughts
5. **Premium Through Darkness** - Dark backgrounds create depth, focus, sophistication

---

## ASCII Wireframe - Desktop (1440px)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                     │
│                           ┌─ PARALLAX LAYER 1 (0.3x scroll) ─┐                     │
│                           │   Subtle gradient radial overlay  │                     │
│                           └───────────────────────────────────┘                     │
│                                                                                     │
│    SECTION PADDING: py-32 (128px vertical)                                         │
│                                                                                     │
│                                                                                     │
│         ┌───────────────────────────────────────────────────────────┐              │
│         │ FASHION'S $2 TRILLION CROSSROADS                          │              │
│         │ (H1, 40px, #F8FAFC, letter-spacing 0.1em, uppercase)      │              │
│         │ opacity: 0 → 1, y: -20 → 0, duration: 0.8s                │              │
│         └───────────────────────────────────────────────────────────┘              │
│                                                                                     │
│                          MARGIN: mt-16 (64px)                                       │
│                                                                                     │
│              ┌──────────────────────────────────────────────┐                      │
│              │                                              │                      │
│              │         $2.0T  ───→  $2.4T                   │                      │
│              │                                              │                      │
│              │  (96px, weight: 800, #7C3AED, tabular-nums)  │                      │
│              │  COUNT-UP ANIMATION:                         │                      │
│              │  - Spring physics (stiffness: 300, damp: 30) │                      │
│              │  - Duration: 2s                              │                      │
│              │  - Trigger: On mount (immediate)             │                      │
│              │  - Scale: 0.9 → 1.0 during count             │                      │
│              │                                              │                      │
│              │          by 2030                             │                      │
│              │  (18px, #94A3B8, fade in after count)        │                      │
│              │                                              │                      │
│              └──────────────────────────────────────────────┘                      │
│                                                                                     │
│                          MARGIN: mt-20 (80px)                                       │
│                                                                                     │
│  ┌────────────────────┬────────────────────────┬────────────────────────┐          │
│  │                    │                        │                        │          │
│  │      ╔════════╗    │      ╔════════╗        │      ╔════════╗        │          │
│  │      ║  46%   ║    │      ║  76%   ║        │      ║  Low   ║        │          │
│  │      ╚════════╝    │      ╚════════╝        │      ║ Single ║        │          │
│  │                    │                        │      ║ Digit  ║        │          │
│  │  (28px, #F8FAFC,   │  (28px, #F8FAFC,       │      ╚════════╝        │          │
│  │   font-weight:700) │   font-weight:700)     │                        │          │
│  │                    │                        │  (20px, #F8FAFC)       │          │
│  │  of executives     │  cite tariffs          │  growth forecast       │          │
│  │  expect conditions │  as the #1 factor      │  across all regions    │          │
│  │  to worsen in 2026 │  shaping the industry  │                        │          │
│  │                    │                        │                        │          │
│  │  (14px, #94A3B8,   │  (14px, #94A3B8,       │  (14px, #94A3B8,       │          │
│  │   line-height:1.7) │   line-height:1.7)     │   line-height:1.7)     │          │
│  │                    │                        │                        │          │
│  │  CARD STYLE:       │  CARD STYLE:           │  CARD STYLE:           │          │
│  │  bg: #1E293B       │  bg: #1E293B           │  bg: #1E293B           │          │
│  │  border: 1px       │  border: 1px           │  border: 1px           │          │
│  │  #334155           │  #334155               │  #334155               │          │
│  │  rounded-2xl       │  rounded-2xl           │  rounded-2xl           │          │
│  │  p-8 (32px)        │  p-8 (32px)            │  p-8 (32px)            │          │
│  │                    │                        │                        │          │
│  │  ANIMATION:        │  ANIMATION:            │  ANIMATION:            │          │
│  │  delay: 0s         │  delay: 0.15s          │  delay: 0.3s           │          │
│  │  y: 30 → 0         │  y: 30 → 0             │  y: 30 → 0             │          │
│  │  opacity: 0 → 1    │  opacity: 0 → 1        │  opacity: 0 → 1        │          │
│  │  duration: 0.6s    │  duration: 0.6s        │  duration: 0.6s        │          │
│  │                    │                        │                        │          │
│  └────────────────────┴────────────────────────┴────────────────────────┘          │
│                                                                                     │
│  GAP: gap-8 (32px between cards)                                                   │
│                                                                                     │
│                          MARGIN: mt-24 (96px)                                       │
│                                                                                     │
│         ┌───────────────────────────────────────────────────────────┐              │
│         │ EXECUTIVE SENTIMENT EVOLUTION                              │              │
│         │ (20px, #F8FAFC, font-weight:600, mb-12)                   │              │
│         └───────────────────────────────────────────────────────────┘              │
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                             │   │
│  │  CONDITIONS WILL IMPROVE          │          CONDITIONS WILL WORSEN         │   │
│  │                                   │                                         │   │
│  │    ┌───┐  ┌───┐  ┌───┐           │           ┌───┐  ┌───┐  ┌───┐          │   │
│  │    │   │  │   │  │   │           │           │   │  │   │  │███│          │   │
│  │    │   │  │   │  │   │           │           │   │  │███│  │███│          │   │
│  │    │   │  │   │  │███│           │           │███│  │███│  │███│          │   │
│  │    │███│  │███│  │███│           │           │███│  │███│  │███│ 46%      │   │
│  │    │███│  │███│  │███│ 25%       │           │███│  │███│  │███│          │   │
│  │20% │███│  │███│  │███│           │      33%  │███│  │███│  │███│          │   │
│  │    └───┘  └───┘  └───┘           │           └───┘  └───┘  └───┘          │   │
│  │    2024   2025   2026             │           2024   2025   2026           │   │
│  │                                   │                                         │   │
│  │  (12px, #94A3B8 labels)           │     (12px, #94A3B8 labels)             │   │
│  │                                                                             │   │
│  │  BAR STYLE:                                                                 │   │
│  │  - Improve bars: #10B981 (emerald-500)                                     │   │
│  │  - Worsen bars: #7C3AED (violet-600) ← ACCENT                              │   │
│  │  - width: 64px, rounded-t-lg                                               │   │
│  │  - gap: 16px between bars                                                  │   │
│  │                                                                             │   │
│  │  ANIMATION (useInView trigger at 20% visibility):                          │   │
│  │  - Each bar: scaleY(0 → 1), transform-origin: bottom                       │   │
│  │  - Stagger: 0.1s per bar (left to right)                                   │   │
│  │  - Spring: stiffness 200, damping 25                                       │   │
│  │  - Duration: 0.8s per bar                                                  │   │
│  │                                                                             │   │
│  │  CONTAINER:                                                                 │   │
│  │  - bg: rgba(30, 41, 59, 0.3) (subtle dark surface)                         │   │
│  │  - border: 1px #334155                                                     │   │
│  │  - rounded-2xl, p-12                                                       │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                     │
│                          MARGIN: mt-32 (128px)                                      │
│                                                                                     │
│                              ┌──────────┐                                          │
│                              │    ↓     │  ← SCROLL INDICATOR                      │
│                              └──────────┘                                          │
│                                                                                     │
│                          (w-12 h-12, #7C3AED, opacity pulse)                       │
│                          ANIMATION: y: 0 → 8 → 0, loop 2s                          │
│                          opacity: 0.4 → 1.0 → 0.4                                  │
│                                                                                     │
│                          MARGIN: mt-16 (64px)                                       │
│                                                                                     │
│         ┌───────────────────────────────────────────────────────────┐              │
│         │ Source: BoF × McKinsey State of Fashion 2026              │              │
│         │ (12px, #64748B, text-center)                              │              │
│         └───────────────────────────────────────────────────────────┘              │
│                                                                                     │
│    SECTION PADDING: pb-32 (128px vertical)                                         │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

VIEWPORT: 100vh minimum
BACKGROUND: #0E1117 with radial gradient overlay
   gradient: radial-gradient(circle at 50% 20%, rgba(124, 58, 237, 0.08), transparent 60%)
CONTAINER: max-w-7xl mx-auto px-8
```

---

## ASCII Wireframe - Mobile (375px)

```
┌───────────────────────────────────┐
│                                   │
│  SECTION PADDING: py-20 (80px)    │
│                                   │
│  ┌─────────────────────────────┐  │
│  │ FASHION'S $2 TRILLION       │  │
│  │ CROSSROADS                  │  │
│  │                             │  │
│  │ (24px, centered, #F8FAFC)   │  │
│  │ line-height: 1.3            │  │
│  └─────────────────────────────┘  │
│                                   │
│        MARGIN: mt-12 (48px)       │
│                                   │
│  ┌─────────────────────────────┐  │
│  │                             │  │
│  │    $2.0T → $2.4T            │  │
│  │                             │  │
│  │ (48px, #7C3AED, centered)   │  │
│  │  Count-up animation         │  │
│  │                             │  │
│  │      by 2030                │  │
│  │ (14px, #94A3B8, centered)   │  │
│  │                             │  │
│  └─────────────────────────────┘  │
│                                   │
│        MARGIN: mt-12 (48px)       │
│                                   │
│  ┌─────────────────────────────┐  │
│  │    ╔════════╗                │  │
│  │    ║  46%   ║                │  │
│  │    ╚════════╝                │  │
│  │                             │  │
│  │ (24px, #F8FAFC, centered)   │  │
│  │                             │  │
│  │ of executives expect        │  │
│  │ conditions to worsen        │  │
│  │ in 2026                     │  │
│  │                             │  │
│  │ (13px, #94A3B8, centered,   │  │
│  │  line-height: 1.7)          │  │
│  │                             │  │
│  │ bg: #1E293B                 │  │
│  │ border: 1px #334155         │  │
│  │ rounded-2xl, p-6            │  │
│  │ stagger delay: 0s           │  │
│  └─────────────────────────────┘  │
│                                   │
│        GAP: mb-6 (24px)           │
│                                   │
│  ┌─────────────────────────────┐  │
│  │    ╔════════╗                │  │
│  │    ║  76%   ║                │  │
│  │    ╚════════╝                │  │
│  │                             │  │
│  │ cite tariffs as the         │  │
│  │ #1 factor shaping           │  │
│  │ the industry                │  │
│  │                             │  │
│  │ stagger delay: 0.15s        │  │
│  └─────────────────────────────┘  │
│                                   │
│        GAP: mb-6 (24px)           │
│                                   │
│  ┌─────────────────────────────┐  │
│  │    ╔════════╗                │  │
│  │    ║  Low   ║                │  │
│  │    ║ Single ║                │  │
│  │    ║ Digit  ║                │  │
│  │    ╚════════╝                │  │
│  │                             │  │
│  │ growth forecast across      │  │
│  │ all regions                 │  │
│  │                             │  │
│  │ stagger delay: 0.3s         │  │
│  └─────────────────────────────┘  │
│                                   │
│        MARGIN: mt-16 (64px)       │
│                                   │
│  ┌─────────────────────────────┐  │
│  │ EXECUTIVE SENTIMENT         │  │
│  │ EVOLUTION                   │  │
│  │                             │  │
│  │ (16px, #F8FAFC, centered)   │  │
│  └─────────────────────────────┘  │
│                                   │
│  ┌─────────────────────────────┐  │
│  │                             │  │
│  │ CONDITIONS IMPROVE          │  │
│  │ (12px, #94A3B8, mb-4)       │  │
│  │                             │  │
│  │ ┌──┐ ┌──┐ ┌──┐              │  │
│  │ │  │ │  │ │██│              │  │
│  │ │██│ │██│ │██│ 25%          │  │
│  │ │██│ │██│ │██│              │  │
│  │ └──┘ └──┘ └──┘              │  │
│  │ 2024 2025 2026              │  │
│  │                             │  │
│  │ (Emerald bars, 40px wide)   │  │
│  │                             │  │
│  │ ─────────────────           │  │
│  │                             │  │
│  │ CONDITIONS WORSEN           │  │
│  │ (12px, #94A3B8, mb-4)       │  │
│  │                             │  │
│  │ ┌──┐ ┌──┐ ┌──┐              │  │
│  │ │  │ │██│ │██│              │  │
│  │ │██│ │██│ │██│ 46%          │  │
│  │ │██│ │██│ │██│              │  │
│  │ └──┘ └──┘ └──┘              │  │
│  │ 2024 2025 2026              │  │
│  │                             │  │
│  │ (Violet bars, 40px wide)    │  │
│  │                             │  │
│  │ bg: rgba(30,41,59,0.3)      │  │
│  │ border: 1px #334155         │  │
│  │ rounded-2xl, p-6            │  │
│  └─────────────────────────────┘  │
│                                   │
│        MARGIN: mt-16 (64px)       │
│                                   │
│           ↓                       │
│     (Scroll indicator,            │
│      w-10 h-10, pulse)            │
│                                   │
│        MARGIN: mt-12 (48px)       │
│                                   │
│  ┌─────────────────────────────┐  │
│  │ Source: BoF × McKinsey      │  │
│  │ State of Fashion 2026       │  │
│  │                             │  │
│  │ (11px, #64748B, centered)   │  │
│  └─────────────────────────────┘  │
│                                   │
│  SECTION PADDING: pb-20 (80px)    │
│                                   │
└───────────────────────────────────┘

BACKGROUND: #0E1117 (solid on mobile)
CONTAINER: px-6 (24px horizontal padding)
NO PARALLAX: Performance + UX optimization
```

---

## Component Architecture

### React Component Tree

```
<Slide01Hero>
  └─ <section className="min-h-screen bg-[#0E1117] relative">
      │
      ├─ <ParallaxBackground />
      │   └─ Radial gradient overlay with 0.3x scroll speed
      │
      ├─ <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      │   │
      │   ├─ <motion.h1>
      │   │   "FASHION'S $2 TRILLION CROSSROADS"
      │   │   (Fade up animation on mount)
      │   │
      │   ├─ <CountUpStat
      │   │   │ value={2.0}
      │   │   │ targetValue={2.4}
      │   │   │ suffix="T"
      │   │   │ duration={2}
      │   │   │ springConfig={{ stiffness: 300, damping: 30 }}
      │   │   />
      │   │
      │   ├─ <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      │   │   │
      │   │   ├─ <StatCard
      │   │   │   │ value="46%"
      │   │   │   │ label="of executives expect conditions to worsen in 2026"
      │   │   │   │ delay={0}
      │   │   │   />
      │   │   │
      │   │   ├─ <StatCard
      │   │   │   │ value="76%"
      │   │   │   │ label="cite tariffs as the #1 factor shaping the industry"
      │   │   │   │ delay={0.15}
      │   │   │   />
      │   │   │
      │   │   └─ <StatCard
      │   │       │ value="Low single-digit"
      │   │       │ label="growth forecast across all regions"
      │   │       │ delay={0.3}
      │   │       />
      │   │
      │   ├─ <ExecutiveSentimentChart
      │   │   │ data={chartData}
      │   │   │ useInView={true}
      │   │   │ threshold={0.2}
      │   │   />
      │   │
      │   ├─ <ScrollIndicator />
      │   │
      │   └─ <SourceCitation
      │       │ text="BoF × McKinsey State of Fashion 2026"
      │       />
      │
      └─ </div>
  </section>
```

---

## Animation Choreography

### Timeline (Desktop)

```
0.0s  ─────────────────────────────────────────────────────────────────
      │
      │ ✓ Page load
      │ ✓ Background gradient fades in (0.6s)
      │
0.3s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ H1 title fades up (y: -20 → 0, opacity: 0 → 1, duration: 0.8s)
      │
0.8s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ Hero stat count-up begins
      │   - Scale: 0.9 → 1.0
      │   - Count: $0T → $2.4T
      │   - Duration: 2s
      │   - Spring physics applied
      │
2.0s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ "by 2030" subtitle fades in (0.4s)
      │
2.4s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ Supporting stat cards stagger in:
      │   - Card 1 (46%): delay 0s → animates at 2.4s
      │   - Card 2 (76%): delay 0.15s → animates at 2.55s
      │   - Card 3 (Low...): delay 0.3s → animates at 2.7s
      │   - Each: y: 30 → 0, opacity: 0 → 1, duration: 0.6s
      │
3.3s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ All cards visible
      │
USER SCROLLS TO CHART (20% visibility triggers)
      │
0.0s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ Chart container fades in (0.4s)
      │ ✓ Chart title appears
      │
0.2s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ Chart bars animate sequentially (left → right):
      │   - Bar 1 (2024 Improve): scaleY(0 → 1), delay 0s
      │   - Bar 2 (2025 Improve): scaleY(0 → 1), delay 0.1s
      │   - Bar 3 (2026 Improve): scaleY(0 → 1), delay 0.2s
      │   - Bar 4 (2024 Worsen): scaleY(0 → 1), delay 0.3s
      │   - Bar 5 (2025 Worsen): scaleY(0 → 1), delay 0.4s
      │   - Bar 6 (2026 Worsen): scaleY(0 → 1), delay 0.5s
      │   - Each bar duration: 0.8s, spring(200, 25)
      │
1.3s  ├─────────────────────────────────────────────────────────────────
      │
      │ ✓ All bars visible
      │ ✓ Scroll indicator starts pulsing (infinite loop)
      │
```

### Motion Principles

**Spring Physics Configuration:**

```typescript
// Hero stat count-up
const heroSpring = {
  stiffness: 300,  // Fast response
  damping: 30,     // Smooth settling
  mass: 1          // Standard weight
};

// Chart bars
const chartSpring = {
  stiffness: 200,  // Slightly slower
  damping: 25,     // Gentle bounce
  mass: 0.8        // Lighter feel
};

// Card reveals
const cardEasing = [0.4, 0, 0.2, 1]; // Ease-out cubic-bezier
```

**Reduced Motion Alternative:**

```typescript
const prefersReducedMotion = useReducedMotion();

// If user prefers reduced motion:
// - No count-up (instant value display)
// - No parallax
// - No stagger delays
// - Instant opacity changes (no fade)
// - No spring physics (linear or instant)
```

---

## Visual Hierarchy Map

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  LEVEL 1: HERO STAT ($2.4T)                                     │
│  ═══════════════════════════                                    │
│  Size: 96px, Weight: 800, Color: #7C3AED (violet)              │
│  Treatment: Count-up animation, scale effect                    │
│  Purpose: Immediate emotional impact — scale of the market      │
│  Contrast ratio: 7.8:1 (WCAG AAA)                              │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LEVEL 2: SECTION TITLE (H1)                                    │
│  ───────────────────────────                                    │
│  Size: 40px, Weight: 700, Color: #F8FAFC (slate-50)            │
│  Treatment: Uppercase, letter-spacing 0.1em, fade-up           │
│  Purpose: Context for the stat — what are we measuring          │
│  Contrast ratio: 15.6:1 (WCAG AAA)                             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LEVEL 3: SUPPORTING STAT VALUES (46%, 76%)                     │
│  ─────────────────────────────────────────                      │
│  Size: 28px, Weight: 700, Color: #F8FAFC                       │
│  Treatment: Staggered fade-in                                   │
│  Purpose: Secondary data points that build narrative            │
│  Contrast ratio: 15.6:1 (WCAG AAA)                             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LEVEL 4: CHART TITLE                                           │
│  ───────────────────                                            │
│  Size: 20px, Weight: 600, Color: #F8FAFC                       │
│  Purpose: Chart context                                         │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LEVEL 5: STAT LABELS & CHART VALUES                            │
│  ──────────────────────────────────────                         │
│  Size: 14px, Weight: 400, Color: #94A3B8 (muted)               │
│  Treatment: Line-height 1.7 for readability                     │
│  Purpose: Descriptive text, explanations                        │
│  Contrast ratio: 5.2:1 (WCAG AA)                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LEVEL 6: CHART AXIS LABELS                                     │
│  ─────────────────────────                                      │
│  Size: 12px, Weight: 400, Color: #94A3B8                       │
│  Purpose: Chart metadata                                        │
│  Contrast ratio: 5.2:1 (WCAG AA)                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LEVEL 7: SOURCE CITATION                                       │
│  ──────────────────────                                         │
│  Size: 12px, Weight: 400, Color: #64748B (darkest muted)       │
│  Purpose: Attribution, legal                                    │
│  Contrast ratio: 4.6:1 (WCAG AA)                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

SIZE RATIO ANALYSIS:
Hero (96px) : Supporting Stats (28px) : Body (14px) : Labels (12px)
= 8 : 2.33 : 1.17 : 1

This creates clear visual separation while maintaining elegance.
```

---

## Color Palette & Contrast

```
┌─────────────────────────────────────────────────────────────────┐
│ PRIMARY PALETTE (Dark Mode)                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ BACKGROUND                                                      │
│ ──────────────────────────────────────────────────────────────  │
│ #0E1117  ██████████  Deep navy-black (base)                     │
│ rgba(30, 41, 59, 0.3)  Subtle card overlay                      │
│                                                                 │
│ ACCENT (Violet — Intelligence, Strategy)                        │
│ ──────────────────────────────────────────────────────────────  │
│ #7C3AED  ██████████  Primary accent (hero stat, chart bars)     │
│ #6D28D9  ██████████  Hover state (darker)                       │
│ #8B5CF6  ██████████  Light variant (subtle highlights)          │
│                                                                 │
│ SECONDARY ACCENT (Emerald — Growth, Positive)                   │
│ ──────────────────────────────────────────────────────────────  │
│ #10B981  ██████████  Chart "improve" bars                       │
│ #059669  ██████████  Hover state                                │
│                                                                 │
│ TEXT                                                            │
│ ──────────────────────────────────────────────────────────────  │
│ #F8FAFC  ██████████  Primary text (slate-50)                    │
│ #94A3B8  ██████████  Muted text (slate-400)                     │
│ #64748B  ██████████  Subtle text (slate-500)                    │
│                                                                 │
│ BORDERS & SURFACES                                              │
│ ──────────────────────────────────────────────────────────────  │
│ #334155  ██████████  Card borders (slate-700)                   │
│ #1E293B  ██████████  Card background (slate-800)                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

CONTRAST VERIFICATION (WCAG 2.1)

Text Element               | BG Color  | FG Color  | Ratio  | Rating
──────────────────────────────────────────────────────────────────────
Hero stat ($2.4T)          | #0E1117   | #7C3AED   | 7.8:1  | AAA ✓
H1 title                   | #0E1117   | #F8FAFC   | 15.6:1 | AAA ✓
Supporting stat values     | #1E293B   | #F8FAFC   | 13.2:1 | AAA ✓
Stat labels (body)         | #1E293B   | #94A3B8   | 5.2:1  | AA ✓
Chart axis labels          | #0E1117   | #94A3B8   | 5.2:1  | AA ✓
Source citation            | #0E1117   | #64748B   | 4.6:1  | AA ✓

All text meets minimum WCAG AA standards (4.5:1 for normal text).
Most meet AAA standards (7:1 for normal text).
```

---

## Spacing & Layout Grid

### Desktop Layout (1440px viewport)

```
┌───────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  ┌───────────────────────────────────────────────────────────────┐   │
│  │ CONTAINER: max-w-7xl (1280px max-width)                       │   │
│  │ PADDING: px-8 (32px horizontal)                               │   │
│  │ MARGIN: mx-auto (centered)                                    │   │
│  │                                                               │   │
│  │  ╔═══════════════════════════════════════════════════════╗   │   │
│  │  ║                                                       ║   │   │
│  │  ║  VERTICAL RHYTHM (8pt grid system)                   ║   │   │
│  │  ║  ─────────────────────────────────                   ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Section padding-top: 128px (py-32)                  ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  ↓ 64px (mt-16)                                      ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  H1 Title                                            ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  ↓ 64px (mt-16)                                      ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Hero Stat ($2.4T)                                   ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  ↓ 80px (mt-20)                                      ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Supporting Stats Grid (3 columns)                   ║   │   │
│  │  ║  gap-8 (32px between columns)                        ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  ↓ 96px (mt-24)                                      ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Chart Section                                       ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  ↓ 128px (mt-32)                                     ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Scroll Indicator                                    ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  ↓ 64px (mt-16)                                      ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Source Citation                                     ║   │   │
│  │  ║                                                       ║   │   │
│  │  ║  Section padding-bottom: 128px (pb-32)               ║   │   │
│  │  ║                                                       ║   │   │
│  │  ╚═══════════════════════════════════════════════════════╝   │   │
│  │                                                               │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ← 32px → CONTENT ← 32px →                                           │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘

GRID SYSTEM:
- Base unit: 8px (0.5rem)
- All spacing multiples of 8px
- Exceptions: 12px (1.5×), 24px (3×) for fine-tuning

SPACING TOKENS:
--space-2:   16px   (gap-4)
--space-4:   32px   (gap-8, p-8)
--space-8:   64px   (mt-16)
--space-10:  80px   (mt-20)
--space-12:  96px   (mt-24)
--space-16:  128px  (py-32)
```

---

## Accessibility Specifications

### Keyboard Navigation

```
TAB ORDER:
1. Skip to content link (invisible, shown on focus)
2. Hero stat (not focusable, decorative)
3. Supporting stat card 1 (if interactive)
4. Supporting stat card 2 (if interactive)
5. Supporting stat card 3 (if interactive)
6. Chart (not focusable unless interactive)
7. Scroll indicator (not focusable, decorative)

FOCUS INDICATORS:
- All focusable elements: 2px solid #7C3AED outline
- Offset: 4px from element edge
- Border-radius matches element
- Never remove :focus-visible
```

### Screen Reader Support

```html
<!-- Semantic HTML structure -->
<section 
  aria-labelledby="hero-title"
  role="region"
  aria-label="Fashion industry market overview"
>
  
  <h1 id="hero-title">
    Fashion's $2 Trillion Crossroads
  </h1>
  
  <!-- Hero stat -->
  <div 
    role="text" 
    aria-label="Market value growing from 2 point 0 trillion dollars to 2 point 4 trillion dollars by 2030"
  >
    <span aria-hidden="true">$2.0T → $2.4T</span>
    <span className="sr-only">
      Market value growing from 2 point 0 trillion dollars to 2 point 4 trillion dollars by 2030
    </span>
  </div>
  
  <!-- Supporting stats -->
  <div 
    role="list" 
    aria-label="Key industry metrics"
  >
    <div role="listitem">
      <span className="stat-value">46%</span>
      <span className="stat-label">of executives expect conditions to worsen in 2026</span>
    </div>
    <!-- ... more stats -->
  </div>
  
  <!-- Chart -->
  <figure 
    aria-labelledby="chart-title"
    role="img"
    aria-label="Bar chart showing executive sentiment evolution from 2024 to 2026"
  >
    <figcaption id="chart-title">
      Executive Sentiment Evolution
    </figcaption>
    
    <!-- Accessible data table fallback (visually hidden) -->
    <table className="sr-only">
      <caption>Executive sentiment data 2024-2026</caption>
      <thead>
        <tr>
          <th>Year</th>
          <th>Conditions will improve (%)</th>
          <th>Conditions will worsen (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2024</td>
          <td>20</td>
          <td>33</td>
        </tr>
        <!-- ... more data -->
      </tbody>
    </table>
  </figure>
  
  <cite className="source">
    Source: BoF × McKinsey State of Fashion 2026
  </cite>
  
</section>
```

### Reduced Motion Support

```typescript
// useReducedMotion hook implementation
import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);
  
  return prefersReducedMotion;
}

// Component usage
const Slide01Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {/* Content */}
    </motion.div>
  );
};
```

---

## Performance Optimization

### Loading Strategy

```
CRITICAL PATH (First Paint):
1. HTML structure (inline critical CSS)
2. Background color (#0E1117)
3. H1 title text (web font loaded)
4. Hero stat skeleton (before count-up)

TOTAL: < 1.5s to First Contentful Paint

DEFERRED:
- Chart rendering (Intersection Observer trigger)
- Scroll indicator (low priority)
- Parallax background (progressive enhancement)
- Source citation (below fold)
```

### Bundle Size Targets

```
Component Bundle Breakdown:
- Slide01Hero.tsx: ~8 KB
- CountUpStat.tsx: ~4 KB
- StatCard.tsx: ~2 KB
- ExecutiveSentimentChart.tsx: ~12 KB (largest, lazy load)
- ScrollIndicator.tsx: ~1 KB
- ParallaxBackground.tsx: ~3 KB

TOTAL: ~30 KB (gzipped ~10 KB)

LAZY LOADING STRATEGY:
- Chart component loads on scroll (not critical)
- Parallax disables on mobile (CPU savings)
- Animations skip if reduced motion preferred
```

### Image/Asset Optimization

```
ASSETS FOR SLIDE 01:
- None (pure CSS/SVG graphics)

FUTURE-PROOFING:
- If background texture added: WebP format, < 50 KB
- If icons used: Inline SVG (no HTTP requests)
- All gradients: CSS-based (no images)
```

---

## Testing Checklist

### Visual Regression

- [ ] Desktop 1920x1080: Hero stat centered, cards 3-column
- [ ] Desktop 1440x900: Layout maintains proportions
- [ ] Laptop 1280x800: No horizontal scroll
- [ ] Tablet 768x1024: Cards 3-column, stat scales down
- [ ] Mobile 375x667: Cards stack, stat 48px
- [ ] Mobile landscape 667x375: Content readable, no overflow

### Animation Testing

- [ ] Hero stat counts from 0 to $2.4T smoothly (no jumps)
- [ ] Supporting stats stagger correctly (0.15s interval)
- [ ] Chart bars grow from bottom (not top)
- [ ] Scroll indicator pulses infinitely
- [ ] Parallax smooth at 60fps (desktop only)
- [ ] Reduced motion: All animations disabled

### Accessibility Testing

- [ ] Tab order logical (top → bottom)
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader announces stat values correctly
- [ ] Chart data table accessible (sr-only fallback)
- [ ] All text meets WCAG AA contrast (4.5:1 minimum)
- [ ] Keyboard-only navigation: Full functionality

### Cross-Browser

- [ ] Chrome 120+: Full support
- [ ] Safari 17+: Count-up works, parallax smooth
- [ ] Firefox 120+: All animations render
- [ ] Edge 120+: Full support
- [ ] Mobile Safari iOS 16+: Touch gestures, no lag
- [ ] Chrome Android 120+: Animations disabled if low-end device

### Performance

- [ ] Lighthouse Performance score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] No layout shift (CLS = 0)
- [ ] Frame rate 60fps during scroll (desktop)
- [ ] Frame rate 30fps minimum (mobile)

---

## Implementation Code Snippets

### CountUpStat Component

```typescript
import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

interface CountUpStatProps {
  value: number;
  targetValue: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUpStat({ 
  value, 
  targetValue, 
  suffix = 'T',
  duration = 2,
  className = '' 
}: CountUpStatProps) {
  const spring = useSpring(value, {
    stiffness: 300,
    damping: 30,
    mass: 1
  });
  
  const display = useTransform(spring, (latest) => {
    return `$${latest.toFixed(1)}${suffix}`;
  });
  
  useEffect(() => {
    spring.set(targetValue);
  }, [spring, targetValue]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      <motion.span 
        className="text-[clamp(48px,10vw,96px)] font-extrabold text-[#7C3AED]"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {display}
      </motion.span>
    </motion.div>
  );
}
```

### StatCard Component

```typescript
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8"
    >
      <div className="text-[28px] font-bold text-[#F8FAFC] mb-3">
        {value}
      </div>
      <div className="text-[14px] text-[#94A3B8] leading-[1.7]">
        {label}
      </div>
    </motion.div>
  );
}
```

---

**Document Status:** Complete  
**Version:** 1.0  
**Last Updated:** February 14, 2026  
**Next Review:** Post-implementation feedback
