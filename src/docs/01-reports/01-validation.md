# StartupAI Validator — Visual Intelligence Experience

## 🎯 Design Vision

Transform text-heavy AI validation reports into a **visual strategy cockpit** using charts, diagrams, illustrated cards, and flow-based storytelling.

---

## 🎨 Design System

### Color Palette
```
Background:    #0B0F14 (Deep Space)
Surface:       #151A23 (Elevated Panel)
Border:        #1F2937 (Subtle Lines)

Primary:       #00E5FF (Electric Cyan)
Secondary:     #10B981 (Emerald)
Warning:       #F59E0B (Amber)
Danger:        #EF4444 (Red)
Success:       #10B981 (Emerald)

Text Primary:  #F9FAFB
Text Secondary: #9CA3AF
Text Tertiary:  #6B7280
```

### Typography Scale
```
Hero Score:     64px / Bold / Tracking -2%
Section Title:  24px / Semibold / Tracking -1%
Card Title:     16px / Medium / Tracking 0%
Body Text:      14px / Regular / Line Height 1.6
Caption:        12px / Regular / Tracking 0.5%
```

---

## 📐 Layout Architecture

### 3-Panel Desktop Layout (1440px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  StartupAI Validator                                    User · Settings │
├────────┬────────────────────────────────────────────────┬───────────────┤
│        │                                                │               │
│  LEFT  │              MAIN CONTENT                      │  RIGHT PANEL  │
│  NAV   │                                                │  AI INSIGHTS  │
│        │                                                │               │
│ 240px  │              Fluid (min 720px)                 │    320px      │
│        │                                                │               │
│ Sticky │  Scrollable visualization area                │    Sticky     │
│        │                                                │               │
├────────┴────────────────────────────────────────────────┴───────────────┤
│  Collapsible AI Trace Drawer (slide-up on demand)                      │
└─────────────────────────────────────────────────────────────────────────┘
```

### Responsive Breakpoints
```
Desktop:   1440px+  → 3-panel layout
Laptop:    1024px+  → 2-panel (nav collapses to icons, right panel slides)
Tablet:    768px+   → 1-panel + hamburger nav + bottom sheet insights
Mobile:    375px+   → Stack vertical, swipe gestures
```

---

## 🧩 Component Inventory

### 1. Header Score Module
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│              ╭─────────────────╮                            │
│              │                 │   78 / 100                 │
│              │   ◉ 78/100     │   PROCEED WITH CONTROLS    │
│              │                 │                            │
│              ╰─────────────────╯                            │
│                                                              │
│   Market 8.5  │  Product 7.2  │  Team 6.8  │  Revenue 8.1  │
│   ███████▒▒▒  │  ███████▒▒▒   │  ██████▒▒▒ │  ████████▒▒   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 2. TAM/SAM/SOM Donut Chart
```
┌───────────────────────────┐
│  Market Opportunity       │
│                           │
│       ╭─────╮            │
│      ╱   $10B  ╲          │
│     │  ╭─────╮  │         │
│     │ │ $2.5B │ │  TAM    │
│     │ │ $500M │ │  SAM    │
│     │ │       │ │  SOM    │
│     │  ╰─────╯  │         │
│      ╲         ╱          │
│       ╰─────╯            │
│                           │
│   28% CAGR (2024-2028)   │
└───────────────────────────┘
```

### 3. Competition 2x2 Matrix
```
┌──────────────────────────────────────┐
│  Competitive Positioning             │
│                                      │
│  Workflow                            │
│  Depth                               │
│    ↑                                 │
│    │                                 │
│    │         ● StartupAI             │
│    │   (glow)                        │
│    │                                 │
│    │     ○ Notion    ○ Asana         │
│    │                                 │
│    │  ○ Trello                       │
│    │                                 │
│    └─────────────────────→           │
│         Domain Specificity           │
│                                      │
└──────────────────────────────────────┘
```

### 4. Risk Heatmap Matrix
```
┌──────────────────────────────────────┐
│  Risk Analysis                       │
│                                      │
│  Impact                              │
│    ↑                                 │
│ H  │  🟡 Market   🔴 Execution       │
│ I  │   Timing      Risk              │
│ G  │                                 │
│ H  │  🟢 Tech     🟡 Funding         │
│    │   Risk        Gap               │
│    └─────────────────────→           │
│         LOW → HIGH                   │
│         Probability                  │
│                                      │
└──────────────────────────────────────┘
```

### 5. Product Flow Diagram
```
┌────────────────────────────────────────────────────────────┐
│  User Journey Flow                                         │
│                                                            │
│  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐│
│  │Intake│ →  │ AI   │ →  │Review│ →  │Execute│ →  │Track ││
│  │      │    │Process│    │      │    │      │    │      ││
│  └──────┘    └──────┘    └──────┘    └──────┘    └──────┘│
│     ↓           ✨          👤          ⚡          📊    │
│   Manual      AI Magic   Human      Workflow    Metrics  │
│                        Checkpoint                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 6. Revenue Projection Chart
```
┌──────────────────────────────────────────┐
│  Financial Trajectory                    │
│                                          │
│  $M                                      │
│   ↑                              ╱       │
│ 4 │                          ╱───        │
│   │                      ╱───   Revenue  │
│ 3 │                  ╱───                │
│   │              ╱───                    │
│ 2 │    Break╱Even                        │
│   │      ╱ │  ╱                          │
│ 1 │  ╱───   │╱                           │
│   │╱────────┼────  Burn Rate             │
│ 0 ├─────────┼───────────────────→        │
│   │   Q1  Q2  Q3  Q4  Q1  Q2             │
│   │   2025      2026                     │
│                                          │
│  LTV/CAC: 3.2x  │  Months to BE: 14     │
└──────────────────────────────────────────┘
```

### 7. Team Capability Radar
```
┌───────────────────────────┐
│  Team Assessment          │
│                           │
│        Product            │
│           *               │
│          / \              │
│    Tech /   \ Marketing   │
│        *     *            │
│        │     │            │
│        │  ●  │  Founder   │
│        │     │            │
│        *─────*            │
│    Sales     Ops          │
│                           │
│  ● Current                │
│  * Required for Series A  │
│                           │
│  Gap: Marketing Lead      │
└───────────────────────────┘
```

### 8. Execution Timeline
```
┌──────────────────────────────────────────────────────────┐
│  Next 6 Weeks — Validation Roadmap                      │
│                                                          │
│  Week 1-2     Week 3-4      Week 5-6                    │
│  ────────     ────────      ────────                    │
│  ● MVP        ● Beta Test   ● Metrics    ✨ AI Assist  │
│  │ Build      │ Launch      │ Review     │             │
│  │            │             │            │             │
│  ├─Design     ├─10 users    ├─Retention  │  90% conf.  │
│  ├─Backend    ├─Feedback    ├─Churn      │  85% conf.  │
│  └─Frontend   └─Iterate     └─NPS        │  78% conf.  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 🎭 Visual Card Design Pattern

### Standard Insight Card
```
┌─────────────────────────────────────┐
│ 📊 Market Validation        8.5/10 │
│                                     │
│ • $10.4B TAM with 28% CAGR          │
│ • Strong vertical AI adoption       │
│ • 3 direct competitors identified   │
│                                     │
│ ────────────────────────────        │
│                                     │
│ [View Assumptions →]                │
│                                     │
└─────────────────────────────────────┘

Style:
- Glass morphism background
- Subtle border glow on hover
- Icon top-left (colored)
- Score badge top-right
- 2-3 key insights
- CTA link bottom
```

---

## 🧭 Full Page Wireframe (Desktop)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  StartupAI                                        Profile · Settings · Help    │
├──────────┬─────────────────────────────────────────────────┬──────────────────┤
│          │                                                 │                  │
│ SECTIONS │              VALIDATION REPORT                  │   AI INSIGHTS    │
│          │                                                 │                  │
│ ▸ Overview│  ╭──────────────────────────────────╮         │ 💡 Key Findings  │
│ • Market  │  │       ◉ 78/100                   │         │                  │
│ • Compete │  │  PROCEED WITH CONTROLS           │         │ This startup has │
│ • Product │  ╰──────────────────────────────────╯         │ strong market    │
│ • Risks   │                                                │ validation but   │
│ • Revenue │  Market │ Product │ Team │ Revenue            │ needs execution  │
│ • Team    │  ████▓  │  ███▓   │ ██▓  │ ████▓             │ oversight...     │
│ • Next    │                                                │                  │
│           │  ┌──────────────┐  ┌──────────────┐          │ ⚠️ Risk Alerts   │
│ Progress: │  │ TAM/SAM/SOM  │  │ Competition  │          │                  │
│ ████▓▓▓▓▓ │  │   Donut      │  │   2x2 Plot   │          │ • Market timing  │
│           │  │              │  │              │          │ • Tech debt      │
│ 78% Done  │  └──────────────┘  └──────────────┘          │ • Runway: 8mo    │
│           │                                                │                  │
│           │  ┌─────────────────────────────────┐          │ 🎯 Assumptions   │
│           │  │  Risk Heatmap                   │          │                  │
│           │  │  (Impact vs Probability)        │          │ • 5% conversion  │
│           │  └─────────────────────────────────┘          │ • $50 ACV        │
│           │                                                │ • 18mo LTV       │
│           │  ┌─────────────────────────────────┐          │                  │
│           │  │  Product Flow Diagram           │          │ ✅ Next Actions  │
│           │  │  [5-stage user journey]         │          │                  │
│           │  └─────────────────────────────────┘          │ 1. Hire designer │
│           │                                                │ 2. Ship beta     │
│           │  ┌─────────────────────────────────┐          │ 3. Run 20 tests  │
│           │  │  Revenue Projection Chart       │          │                  │
│           │  │  (Break-even analysis)          │          │ [Start Plan →]   │
│           │  └─────────────────────────────────┘          │                  │
│           │                                                │                  │
│           │  ┌─────────────────────────────────┐          │                  │
│           │  │  6-Week Execution Timeline      │          │                  │
│           │  └─────────────────────────────────┘          │                  │
│           │                                                │                  │
├──────────┴─────────────────────────────────────────────────┴──────────────────┤
│  ▾ AI Trace & Reasoning (Collapsible Drawer)                                  │
│  → Market Agent: Analyzed 47 sources → Scoring Agent: Applied BCG framework   │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📱 Mobile Wireframe (375px)

```
┌─────────────────────────┐
│  ☰  StartupAI      ⚙️   │
├─────────────────────────┤
│                         │
│   ╭─────────────╮       │
│   │  ◉ 78/100  │       │
│   │  PROCEED   │       │
│   ╰─────────────╯       │
│                         │
│  Market      8.5 ████▓  │
│  Product     7.2 ███▓   │
│  Team        6.8 ██▓    │
│  Revenue     8.1 ████▓  │
│                         │
│ ┌─────────────────────┐ │
│ │  TAM/SAM/SOM        │ │
│ │  [Donut Chart]      │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │  Competition        │ │
│ │  [2x2 Matrix]       │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │  Risks              │ │
│ │  [Heatmap]          │ │
│ └─────────────────────┘ │
│                         │
│ [Swipe for more ↓]      │
│                         │
├─────────────────────────┤
│ 💡 AI Insights (Tab)    │
└─────────────────────────┘
```

---

## 🎬 Interaction Patterns

### Hover States
```
Card Hover:
- Lift shadow (0 → 8px blur)
- Border glow (0 → 2px cyan)
- Scale (1 → 1.02)
- Duration: 200ms ease-out
```

### Chart Interactions
```
Tooltip on Hover:
┌─────────────────┐
│ Q2 2025         │
│ Revenue: $2.1M  │
│ +42% MoM        │
│ ────────────    │
│ Source: Model A │
└─────────────────┘
```

### Collapsible Sections
```
Default: Collapsed
Click header → Expand with slide-down (300ms)
Icon rotates 180° (chevron)
```

---

## 🚀 Animation Micro-Moments

1. **Score Counter**: Animates from 0 → 78 on page load (1.2s ease-out)
2. **Progress Bars**: Fill from left with 300ms stagger per bar
3. **Chart Lines**: Draw from left to right (500ms per segment)
4. **Risk Badges**: Pulse glow on high-risk items (2s loop)
5. **AI Insights**: Fade in from bottom with 100ms stagger

---

## 📊 Data Visualization Guidelines

### Chart Color Mapping
```
Positive Metrics:   #10B981 (Emerald)
Neutral Metrics:    #00E5FF (Cyan)
Warning Metrics:    #F59E0B (Amber)
Critical Metrics:   #EF4444 (Red)
Predicted Data:     Dashed lines
Actual Data:        Solid lines
```

### Accessibility
```
- All charts have text alternatives
- Color + shape differentiation (not color alone)
- Keyboard navigation support
- Screen reader labels
- Minimum contrast ratio: 4.5:1
```

---

## 🔧 Technical Implementation

### Component Architecture
```
/app/validator/report/visual/page.tsx
  ├─ HeaderScoreModule
  ├─ LeftNavigation
  ├─ MainContent
  │   ├─ MarketSection
  │   │   └─ TAMDonutChart
  │   ├─ CompetitionSection
  │   │   └─ PositioningMatrix
  │   ├─ RiskSection
  │   │   ├─ RiskHeatmap
  │   │   └─ RiskRadar
  │   ├─ ProductSection
  │   │   └─ FlowDiagram
  │   ├─ RevenueSection
  │   │   └─ ProjectionChart
  │   ├─ TeamSection
  │   │   └─ CapabilityRadar
  │   └─ NextStepsSection
  │       └─ ExecutionTimeline
  ├─ RightInsightsPanel
  └─ AITraceDrawer

/components/charts/
  ├─ RadialGauge.tsx
  ├─ DonutChart.tsx
  ├─ ScatterPlot2x2.tsx
  ├─ HeatmapMatrix.tsx
  ├─ LineChart.tsx
  ├─ RadarChart.tsx
  └─ TimelineGantt.tsx
```

### Libraries
```
Charts: recharts (already in use)
Animations: motion/react
Icons: lucide-react
Utilities: clsx, tailwind-merge
```

---

## ✅ Design Checklist

- [ ] Dark theme with #0B0F14 background
- [ ] 3-panel layout (desktop) with sticky panels
- [ ] Radial score gauge (78/100)
- [ ] TAM/SAM/SOM donut chart
- [ ] Competition 2x2 matrix with glow on startup
- [ ] Risk heatmap with color coding
- [ ] Product flow diagram (5 stages)
- [ ] Revenue projection chart with break-even
- [ ] Team capability radar with gaps
- [ ] 6-week execution timeline
- [ ] Right panel AI insights
- [ ] Collapsible AI trace drawer
- [ ] Hover tooltips on all charts
- [ ] Responsive mobile layout
- [ ] Smooth animations (score counter, bars, etc.)
- [ ] Illustrated visual cards (glass morphism)
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Loading states for all async data
- [ ] Error boundaries for chart failures

---

## 🎯 Success Metrics

**UX Goals:**
- User can grasp verdict in <30 seconds
- 80% reduction in text density vs current report
- 95% of decisions made without scrolling on desktop
- Zero need to read full paragraphs (visual first)

**Visual Goals:**
- Premium, McKinsey-level polish
- Calm, confident, authoritative tone
- Every metric has visual representation
- AI insights feel helpful, not overwhelming

---

## 📅 Implementation Phases

### Phase 1: Core Layout (Week 1)
- 3-panel structure
- Navigation system
- Dark theme setup
- Responsive breakpoints

### Phase 2: Visual Components (Week 2)
- Radial gauge
- Donut chart
- 2x2 matrix
- Heatmap
- Line chart
- Radar chart

### Phase 3: Content Integration (Week 3)
- Connect to report data
- AI insights panel
- Risk alerts
- Assumptions tracking

### Phase 4: Polish & Animation (Week 4)
- Micro-interactions
- Loading states
- Error handling
- Performance optimization

---

## 🔗 Related Documents

- `/docs/progress-tracker.md` — Overall project status
- `/app/validator/report/[reportId]/page.tsx` — Current text-based report
- `/components/charts/` — Reusable chart components

---

**Last Updated:** 2026-02-12  
**Status:** Planning → Ready for Implementation  
**Owner:** StartupAI Design Team
