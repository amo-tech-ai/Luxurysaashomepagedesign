# StartupAI Home V5 — Wireframe & Content

**Version**: 5.0 (BCG Editorial System)  
**Design System**: Consulting-grade, diagram-first, typography-led  
**Last Updated**: January 31, 2026

---

## Design Principles

- **No photography** or stock images
- **Diagram-first** visual approach
- **Typography-led** hierarchy
- **BCG-inspired** editorial system
- **Consulting authority** tone
- **Strategic clarity** over promotional hype

---

## Color System

### Text
- **Primary**: `#212427`
- **Secondary**: `#696969`
- **Muted**: `#898888`

### Backgrounds
- **White**: `#FFFFFF` (~70% of page)
- **Warm contrast**: `#F1EEEA`
- **Neutral contrast**: `#F2F2F2`
- **Warm neutral**: `#DFD7CD`

### Accent (StartupAI Green)
- **Primary**: `#0E3E1B`
- **Soft highlight**: `#DCF9E3`

**Usage**: Green only for CTAs, active states, and strategic emphasis

---

## Typography System

### Font Stack
```
-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif
```

### Hierarchy Rules
- **Headlines**: Large, editorial, sentence case, `font-light`
- **Body**: Small (`text-sm`), generous `leading-relaxed`
- **Labels**: Uppercase, `tracking-wider`, muted color
- **No decorative fonts**
- **Hierarchy = size + weight only**

---

## Page Structure

---

## Section 01 — Navigation Header

**Background**: White  
**Position**: Sticky top  
**Border**: Bottom border (`border-gray-200`)

### Layout
```
[StartupAI Logo]          [Services] [Approach] [Insights]          [Get started]
```

### Content

**Left**:
- Logo: "StartupAI" (text-xl, font-medium)

**Center** (Desktop only):
- Services (link to #services)
- Approach (link to #approach)
- Insights (link to #insights)

**Right**:
- CTA Button: "Get started" → `/onboarding-v3`

### Specs
- Max-width: `1440px`
- Padding: `px-8 lg:px-16 py-6`
- Links: `text-sm text-[#696969]`
- CTA: `bg-[#0E3E1B]` with white text

---

## Section 02 — Hero (Editorial + Diagram)

**Background**: White  
**Layout**: 2-column grid (50/50 on desktop)  
**Spacing**: `py-20 lg:py-32`

### Left Column — Editorial Text

**Headline**:
```
From strategy to daily execution — 
in one guided flow.
```
- Size: `text-5xl lg:text-6xl xl:text-7xl`
- Color: `#212427`
- Weight: `font-light`
- Leading: `leading-[1.1]`
- Tracking: `tracking-tight`

**Subtext**:
```
StartupAI is an AI operating system for founders, 
turning ideas into investor-ready execution through 
structured workflows.
```
- Size: `text-lg lg:text-xl`
- Color: `#696969`
- Leading: `leading-relaxed`

**CTA**:
- Text: "Start with your profile"
- Action: → `/onboarding-v3`
- Style: `bg-[#0E3E1B]` white text, with arrow icon

---

### Right Column — Process Diagram

**Visual**: Vertical stacked boxes with borders

```
┌─────────────────────────┐
│ 01                      │
│ Profile                 │
└─────────────────────────┘

┌─────────────────────────┐
│ 02                      │
│ Strategy                │
└─────────────────────────┘

┌─────────────────────────┐
│ 03                      │ ← Highlighted in green
│ Execution               │
└─────────────────────────┘

┌─────────────────────────┐
│ 04                      │
│ Investor Readiness      │
└─────────────────────────┘
```

**Specs**:
- Border: `border-gray-200`
- Active state: `bg-[#DCF9E3]` with green text
- Numbers: Uppercase, `tracking-wider`, muted
- Max-width: `max-w-md`

---

## Section 03 — Guided Entry (Interactive Prompt)

**Background**: `#F1EEEA`  
**Layout**: Single centered column  
**Max-width**: `max-w-3xl`  
**Spacing**: `py-24 lg:py-32`

### Headline
```
How can we assist you today?
```
- Size: `text-3xl lg:text-4xl`
- Color: `#212427`
- Weight: `font-light`
- Alignment: Center

---

### Interactive Buttons (Segmented Control)

**4 Options**:

1. **Validate an idea**
   - Action: → `/startup-validator-v3`
   
2. **Build a pitch deck**
   - Action: → `/pitch-deck`
   
3. **Prepare for fundraising**
   - Action: → `/onboarding-v3`
   
4. **Organize execution & tasks**
   - Action: → `/dashboard-main`

**Button Specs**:
- Full width
- White background (`bg-white`)
- Border: `border-gray-200`
- Hover: `bg-gray-50`
- Arrow icon on right (transitions right on hover)
- Text alignment: Left

---

## Section 04 — Core Problem (Typographic Statement)

**Background**: White  
**Layout**: Single column  
**Max-width**: `max-w-4xl`  
**Spacing**: `py-24 lg:py-32`

### Headline
```
Founders don't fail from lack of effort.
They fail from scattered execution.
```
- Size: `text-4xl lg:text-5xl xl:text-6xl`
- Color: `#212427`
- Weight: `font-light`
- Leading: `leading-tight`

---

### Supporting Points

**Typography only, no icons**:

```
Too many tools, disconnected from strategy.

No strategic sequencing of priorities.

No alignment with investor expectations.

No clear next step when it matters most.
```

**Specs**:
- Size: `text-lg`
- Color: `#696969`
- Leading: `leading-relaxed`
- Spacing: `space-y-8`
- Max-width: `max-w-2xl`

---

## Section 05 — What StartupAI Provides (Diagram Cards)

**Background**: `#F2F2F2`  
**Layout**: 2×2 grid  
**Spacing**: `py-24 lg:py-32`  
**Gap**: `gap-1` (minimal gap for clean grid)

### Headline
```
Everything you need to move forward — in order.
```
- Size: `text-3xl lg:text-4xl`
- Color: `#212427`
- Weight: `font-light`

---

### Grid Items (4 Cards)

**Each card**:
- Background: White
- Border: `border-gray-200`
- Padding: `p-12 lg:p-16`

---

#### Card 1: Strategy clarity

**Icon**: SVG diagram (box with input/output arrows)

**Headline**: "Strategy clarity"

**Description**:
```
Market positioning, buyer personas, competitive 
differentiation — structured as a narrative 
investors understand.
```

---

#### Card 2: Market intelligence

**Icon**: SVG diagram (bar chart ascending)

**Headline**: "Market intelligence"

**Description**:
```
AI-powered analysis of industry trends, funding 
patterns, and success indicators relevant to 
your category.
```

---

#### Card 3: Structured execution

**Icon**: SVG diagram (connected circles/nodes)

**Headline**: "Structured execution"

**Description**:
```
Quarterly milestones, weekly priorities, daily 
tasks — all connected to your strategic objectives.
```

---

#### Card 4: Investor readiness

**Icon**: SVG diagram (document with lines)

**Headline**: "Investor readiness"

**Description**:
```
Pitch decks, financial summaries, and progress 
updates generated from your operational data.
```

---

**Icon Specs**:
- Size: `w-16 h-16`
- Stroke: `#212427` (primary) and `#0E3E1B` (accent)
- Style: Line diagrams only, no fills
- Margin: `mb-8`

---

## Section 06 — How It Works (Process Diagram)

**Background**: White  
**Layout**: Centered vertical timeline  
**Max-width**: `max-w-4xl`  
**Spacing**: `py-24 lg:py-32`

### Headline
```
One guided flow, start to finish.
```
- Size: `text-3xl lg:text-4xl`
- Alignment: Center
- Color: `#212427`

---

### Vertical Process Diagram

**Visual Structure**:
```
○  01 — Create your startup profile
│
○  02 — AI analyzes market & gaps
│
●  03 — Smart interview refines strategy  ← Active/highlighted
│
○  04 — Dashboard generates actions
│
○  05 — Investor-ready outputs produced
```

**Left border**: 2px line connecting all steps  
**Circle indicators**:
- Unfilled: `border-2 border-[#0E3E1B] bg-white`
- Filled (step 03): `bg-[#0E3E1B]`

---

#### Step 01
**Label**: "Step 01"  
**Headline**: "Create your startup profile"  
**Description**:
```
Capture your vision, market, and competitive 
positioning in a structured format.
```

---

#### Step 02
**Label**: "Step 02"  
**Headline**: "AI analyzes market & gaps"  
**Description**:
```
System identifies strategic gaps, market signals, 
and positioning opportunities.
```

---

#### Step 03 (Highlighted)
**Label**: "Step 03" (green text)  
**Headline**: "Smart interview refines strategy"  
**Description**:
```
Adaptive questioning uncovers assumptions, validates 
hypotheses, clarifies direction.
```

---

#### Step 04
**Label**: "Step 04"  
**Headline**: "Dashboard generates actions"  
**Description**:
```
Strategy becomes executable tasks, prioritized by 
impact and sequencing logic.
```

---

#### Step 05
**Label**: "Step 05"  
**Headline**: "Investor-ready outputs produced"  
**Description**:
```
Pitch decks, financial models, and updates generated 
from your validated strategy.
```

---

## Section 07 — Outcomes (Stat-Driven)

**Background**: `#DFD7CD`  
**Layout**: 4-column grid  
**Spacing**: `py-24 lg:py-32`

### Headline
```
The outcomes that matter.
```
- Size: `text-3xl lg:text-4xl`
- Color: `#212427`

---

### 4 Outcomes (Equal Width Columns)

#### Outcome 1
**Headline**: "Clear positioning"  
**Description**:
```
Market differentiation defined and articulated 
in investor language.
```

---

#### Outcome 2
**Headline**: "Faster execution"  
**Description**:
```
Decision paralysis eliminated through priority 
sequencing and context.
```

---

#### Outcome 3
**Headline**: "Stronger investor narrative"  
**Description**:
```
Coherent story from strategy to traction, backed 
by systematic execution.
```

---

#### Outcome 4
**Headline**: "Fewer wasted cycles"  
**Description**:
```
AI validates assumptions before resources are 
committed to building.
```

---

**Specs**:
- No cards, no borders
- Headlines: `text-base font-medium`
- Descriptions: `text-sm text-[#696969]`

---

## Section 08 — Platform Capabilities

**Background**: White  
**Layout**: 3-column grid  
**Spacing**: `py-24 lg:py-32`

### Headline
```
Platform capabilities
```

---

### 3 Capabilities

#### 01 / Output
**Headline**: "AI pitch deck generator"  
**Description**:
```
Investor-ready presentations generated from your 
strategic inputs and market analysis.
```
**CTA**: "Explore tool" → `/pitch-deck`

---

#### 02 / Validation
**Headline**: "Startup validator"  
**Description**:
```
Objective assessment of business model viability, 
market fit, and execution readiness.
```
**CTA**: "Validate idea" → `/startup-validator-v3`

---

#### 03 / Daily work
**Headline**: "Execution dashboard"  
**Description**:
```
Command center for daily priorities, milestone 
tracking, and strategic alignment.
```
**CTA**: "View dashboard" → `/dashboard-main`

---

**Specs**:
- Category labels: `text-xs uppercase tracking-wider text-[#898888]`
- Headlines: `text-xl font-medium`
- CTAs: Green text with arrow, hover moves arrow right

---

## Section 09 — Latest Insights

**Background**: `#F1EEEA`  
**Layout**: List with border-top separators  
**Spacing**: `py-24 lg:py-32`

### Headline
```
Latest insights
```

---

### Insight 1

**Category**: "Market intelligence" (uppercase, small, muted)

**Headline**:
```
AI startup landscape 2025–2026
```

**Description**:
```
Comprehensive analysis of 500+ AI startups, funding 
trends, and emerging opportunities across enterprise 
and consumer markets.
```

**CTA**: "Read report" → `/ai-startup-landscape`

---

### Insight 2

**Category**: "Industry adoption"

**Headline**:
```
AI industry adoption report 2025
```

**Description**:
```
How different industries are integrating AI technology, 
with adoption rates, use cases, and ROI benchmarks 
across sectors.
```

**CTA**: "Explore data" → `/ai-industry-adoption`

---

**Specs**:
- Each insight: `border-t border-gray-300 pt-8`
- Layout: Flex row with content left, CTA right
- Headlines: `text-2xl font-medium`

---

## Section 10 — Final CTA (Consulting Authority)

**Background**: `#212427` (dark charcoal)  
**Text color**: White  
**Spacing**: `py-32 lg:py-40`  
**Alignment**: Center

### Headline
```
Start with clarity.
Build with momentum.
```
- Size: `text-4xl lg:text-5xl xl:text-6xl`
- Color: White
- Weight: `font-light`
- Leading: `leading-tight`

---

### CTA Button
**Text**: "Build your operating system"  
**Action**: → `/onboarding-v3`  
**Style**: `bg-[#0E3E1B]` white text

**Specs**:
- Large padding: `px-10 py-5`
- Font: `font-medium`
- Icon: Arrow right

---

## Section 11 — Footer

**Background**: White  
**Border**: Top border (`border-gray-200`)  
**Layout**: 12-column grid

### Top Section (Grid Layout)

**Column 1 (4 cols)** — Brand:
```
StartupAI

An AI operating system for founders, connecting 
strategy to daily execution.
```

---

**Column 2 (2 cols)** — Product Links:
- Pitch deck → `/pitch-deck`
- Validator → `/startup-validator-v3`
- Dashboard → `/dashboard-main`

---

**Column 3 (2 cols)** — Resources:
- Insights → `/ai-startup-landscape`
- Get started → `/onboarding-v3`
- Sitemap → `/sitemap`

---

**Column 4 (2 cols)** — Legal:
- Privacy
- Terms
- Contact

---

**Column 5 (2 cols)** — CTA:
- Button: "Contact us" (full width, green)

---

### Bottom Section (Border-top)

**Left**:
```
© 2026 StartupAI. All rights reserved.
```

**Right** — Language Selector:
```
EN  |  JA
```

---

## Interaction & Motion Rules

### Hover States
- **Links**: Color transition from `#696969` → `#212427`
- **Buttons**: Subtle background darkening
- **Arrows**: Translate right by 4px

### Transitions
- Duration: `200ms`
- Easing: Default

### No Gimmicks
- ❌ No parallax scrolling
- ❌ No scroll-triggered animations
- ❌ No auto-playing content
- ✅ Subtle fades only
- ✅ Analytical, restrained feel

---

## Mobile Responsiveness

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Mobile Adjustments
- Hero: Stack vertically (text above diagram)
- Guided Entry: Full width buttons
- Grid sections: Single column on mobile
- Process diagram: Reduce padding, maintain vertical flow
- Footer: Stack all columns vertically

---

## Content Tone & Voice

### Writing Principles
- **Consulting authority** over startup hype
- **Sentence case** for headlines (not title case)
- **No exclamation marks**
- **Precise language** over marketing fluff
- **Strategic clarity** emphasized
- **Analytical tone** throughout

### Avoiding
- ❌ "Revolutionary" or "game-changing"
- ❌ Emojis or casual language
- ❌ Superlatives without backing
- ❌ Promotional hyperbole

### Embracing
- ✅ "Systematic" and "structured"
- ✅ "Strategic" and "analytical"
- ✅ "Investor-ready" and "execution-focused"
- ✅ Clear, direct statements

---

## Visual Identity Summary

**StartupAI feels like**:
- A BCG-level strategic platform
- Delivered as a calm, precise AI operating system
- For serious founders building real companies

**Not**:
- SaaS marketing page
- Startup hype machine
- Feature showcase

**Core message**:
> Strategic clarity, made usable.

---

## File Reference

**Implementation**: `/app/home-v5/page.tsx`  
**Route**: Accessible via footer link "✨ Home V5 (New Design)"  
**Status**: Production-ready

---

## Design Credits

**Inspired by**: BCG editorial system (structure only, not content)  
**Visual approach**: Diagram-first, typography-led  
**Color system**: Custom StartupAI palette with `#0E3E1B` green  
**Audience**: Early-stage founders seeking strategic clarity

---

*End of wireframe document*
