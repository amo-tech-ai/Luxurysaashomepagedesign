# StartupAI — Diagram Starter Kit

**Internal Design System Artifact**

**Version**: 1.0  
**Last Updated**: January 31, 2026  
**Status**: Active

---

## Purpose

Give designers, writers, and AI tools a **common visual language** to explain strategy, AI, and execution **without images or decoration**.

This kit provides:
* Reusable diagram blueprints
* Labeling conventions
* Usage guidelines
* Quality standards

---

## 1. Diagram Kit Structure (Figma)

Create **one Figma file** as the single source of truth:

```
📁 StartupAI — Diagram Library
 ├─ 00 Usage Rules
 ├─ 01 Flow Diagrams
 ├─ 02 Framework Diagrams
 ├─ 03 Layer / Ring Diagrams
 ├─ 04 Matrix Diagrams
 ├─ 05 Stats & Evidence Blocks
 └─ 06 Example Compositions
```

Each page contains:
* **Variants** (horizontal, vertical, 2×2, etc.)
* **Usage notes** (when to use, when not to use)
* **Example labels** (real StartupAI content)
* **Spacing specs** (padding, gaps, alignment)

---

## 2. Universal Diagram Rules (Apply to All)

### Design Rules

* **Text + lines only** — no decoration
* **No icons** unless explicitly required for meaning
* **No shadows, gradients, or imagery** — flat design only
* **No borders** — spacing defines structure
* **Calm alignment** — centered or left-aligned only, never random
* **Consistent stroke weight** — 1.5px or 2px maximum
* **Minimal color** — black, gray, and green accent only

### Text Rules

* **Max 2 lines per node** — keep labels concise
* **2–5 words per label** — no sentences
* **Sentence case only** — not Title Case or ALL CAPS (except tiny meta labels)
* **No bold stacking** — if emphasis needed, make it a headline
* **Clear hierarchy** — larger labels = more important
* **Readable at 100%** — test at actual display size

### Spacing Rules

* **Generous white space** — diagrams breathe
* **Consistent gaps** — use 32px, 48px, or 64px increments
* **Aligned to grid** — use 8px base grid
* **Equal spacing between elements** — no eyeballing

### Interaction Rules (Web Implementation)

* **Subtle hover states** — slight opacity change or underline
* **No animations** — static diagrams convey authority
* **Responsive scaling** — maintain proportions on mobile
* **Accessible labels** — ensure screen reader compatibility

---

## 3. Diagram Types (Blueprints)

---

## 01. Flow Diagrams — *Process & AI Logic*

### Use When

* Explaining **how StartupAI works**
* AI analysis workflows
* Founder journey or onboarding sequences
* Sequential decision-making
* Input → Process → Output scenarios

### Don't Use When

* Showing capabilities (use Framework instead)
* Displaying non-sequential information
* Comparing options (use Matrix instead)

---

### Base Structure

```
[ Step ] → [ Step ] → [ Step ] → [ Outcome ]
```

**Visual Elements**:
* Boxes or simple shapes for steps
* Arrows showing direction
* Optional: step numbers (01, 02, 03)
* Optional: highlight key step in green

---

### Variants

#### Horizontal Flow
**Best for**: Hero sections, above-the-fold explanations

```
Step 01 ──→ Step 02 ──→ Step 03 ──→ Step 04
```

**Spacing**: 64px–96px between steps

---

#### Vertical Flow
**Best for**: Long-form explanations, detailed processes

```
Step 01
   ↓
Step 02
   ↓
Step 03
   ↓
Step 04
```

**Spacing**: 48px–64px between steps

---

#### Vertical Timeline (Enhanced)
**Best for**: Multi-stage processes with descriptions

```
○ ─ 01
│   Create profile
│   Capture your vision and goals
│
○ ─ 02
│   AI analyzes
│   Market signals identified
│
● ─ 03  ← Active/highlighted
    Strategy refined
    Adaptive questioning
```

**Visual Elements**:
* Left border line (2px)
* Circle indicators (filled or outline)
* Step number + title + description

---

### Example Labels (Real StartupAI Content)

**Onboarding Flow**:
* Create profile
* AI analyzes market
* Smart interview
* Dashboard generated
* Investor-ready outputs

**AI Decision Flow**:
* Input: Founder data
* AI: Pattern analysis
* AI: Gap identification
* Output: Strategic recommendations

**Execution Flow**:
* Strategy
* Milestones
* Weekly priorities
* Daily tasks

---

### Specifications

**Box dimensions**:
* Width: 180px–220px
* Height: 80px–100px
* Padding: 16px–24px

**Arrow style**:
* Stroke: 1.5px–2px
* Color: #212427 (primary) or #898888 (muted)
* Arrowhead: Simple triangle

**Text style**:
* Label: 14px–16px, font-medium
* Description: 12px–14px, text-muted

---

### Don'ts

* ❌ No branching chaos (if/else spaghetti)
* ❌ No more than 5 steps in one flow
* ❌ No circular flows (confusing)
* ❌ No diagonal arrows
* ❌ No overlapping elements

---

## 02. Framework Diagrams — *Capabilities & Pillars*

### Use When

* Explaining **what StartupAI provides**
* Strategic dimensions or pillars
* Capability groupings
* Service categories
* Value propositions

### Don't Use When

* Showing sequences (use Flow instead)
* Explaining processes (use Flow instead)
* Comparing options (use Matrix instead)

---

### Base Structure

```
[ Pillar ]   [ Pillar ]
[ Pillar ]   [ Pillar ]
```

**Visual Elements**:
* Equal-sized boxes or cells
* Minimal borders (or none)
* Optional: small diagram icon per cell
* Text-dominant design

---

### Variants

#### 2×2 Grid
**Best for**: Four core capabilities or pillars

```
┌─────────────┬─────────────┐
│   Pillar 1  │   Pillar 2  │
│             │             │
├─────────────┼─────────────┤
│   Pillar 3  │   Pillar 4  │
│             │             │
└─────────────┴─────────────┘
```

**Usage**: What StartupAI Provides, Strategic Framework

---

#### 1×3 Horizontal
**Best for**: Three-stage frameworks or service tiers

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Stage 1 │  │ Stage 2 │  │ Stage 3 │
└─────────┘  └─────────┘  └─────────┘
```

**Usage**: Platform capabilities, Three-pillar strategy

---

#### 1×4 Horizontal
**Best for**: Outcome categories or benefit pillars

```
[ Outcome 1 ]  [ Outcome 2 ]  [ Outcome 3 ]  [ Outcome 4 ]
```

**Usage**: The Outcomes That Matter section

---

### Example Labels (Real StartupAI Content)

**What StartupAI Provides** (2×2):
* Strategy clarity
* Market intelligence
* Structured execution
* Investor readiness

**Platform Capabilities** (1×3):
* AI pitch deck generator
* Startup validator
* Execution dashboard

**Outcomes** (1×4):
* Clear positioning
* Faster execution
* Stronger investor narrative
* Fewer wasted cycles

---

### Specifications

**Cell dimensions**:
* Width: 280px–320px (flexible based on grid)
* Height: 280px–360px
* Padding: 48px–64px
* Gap: 1px (minimal) or 48px (generous)

**Cell content**:
* Icon/diagram: 64px×64px (optional)
* Headline: 18px–20px, font-medium
* Description: 14px, text-muted, 2–3 lines max

**Border style**:
* 1px solid #E5E5E5 (light gray)
* Or no border (use background color for separation)

---

### Don'ts

* ❌ No unequal emphasis (all cells should have equal visual weight)
* ❌ No long descriptions inside blocks (2–3 lines maximum)
* ❌ No complex icons (simple line diagrams only)
* ❌ No more than 4 items in a grid (becomes overwhelming)

---

## 03. Layer / Ring Diagrams — *Systems Thinking*

### Use When

* Explaining **StartupAI as an operating system**
* AI + human + system relationships
* Strategy → execution → outcomes hierarchy
* Core vs. enablers
* Nested or dependent systems

### Don't Use When

* Showing sequences (use Flow instead)
* Listing capabilities (use Framework instead)
* Simple hierarchies (use outline text instead)

---

### Base Structure

```
┌───────────────────────────┐
│  [ OUTER: Enablers ]      │
│  ┌─────────────────────┐  │
│  │ [ MIDDLE: System ]  │  │
│  │  ┌───────────────┐  │  │
│  │  │ [ CENTER:     │  │  │
│  │  │   Purpose ]   │  │  │
│  │  └───────────────┘  │  │
│  └─────────────────────┘  │
└───────────────────────────┘
```

**Visual Elements**:
* Concentric circles or nested boxes
* Labels outside or inside layers
* Center = most important
* Outer = supporting elements

---

### Variants

#### Concentric Circles (3-layer)
**Best for**: Operating system logic, Core + enablers

```
        ┌─────────────────────┐
        │   Tools & Data      │
        │  ┌───────────────┐  │
        │  │  AI Workflows │  │
        │  │  ┌─────────┐  │  │
        │  │  │ Founder │  │  │
        │  │  │ Clarity │  │  │
        │  │  └─────────┘  │  │
        │  └───────────────┘  │
        └─────────────────────┘
```

---

#### Nested Boxes (3-layer)
**Best for**: System architecture, Hierarchical relationships

```
┌──────────────────────────────┐
│ Outcomes & Investor Assets   │
│ ┌──────────────────────────┐ │
│ │  Execution System        │ │
│ │ ┌──────────────────────┐ │ │
│ │ │  Strategy Core       │ │ │
│ │ └──────────────────────┘ │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

---

### Example Labels (Real StartupAI Content)

**Operating System Model**:
* Center: Founder clarity & vision
* Middle: AI workflows & smart interview
* Outer: Data, tools, execution tracking

**Strategy-to-Outcomes Model**:
* Center: Strategic positioning
* Middle: Structured execution
* Outer: Investor-ready assets

**AI + Human System**:
* Center: Human decision-making
* Middle: AI analysis & recommendations
* Outer: Market data & benchmarks

---

### Specifications

**Circle dimensions** (concentric):
* Inner: 120px diameter
* Middle: 240px diameter
* Outer: 360px diameter
* Stroke: 2px

**Box dimensions** (nested):
* Inner: 180px × 120px
* Middle: 280px × 200px
* Outer: 380px × 280px

**Text placement**:
* Labels outside rings (preferred)
* Or centered inside each layer
* Never overlapping boundaries

---

### Rules

* **Meaning always in the center** — most important concept
* **Outer layers explain support** — enabling systems
* **Minimal text inside rings** — labels only, no paragraphs
* **Clear visual hierarchy** — center stands out

---

### Don'ts

* ❌ No more than 3–4 layers (becomes cluttered)
* ❌ No dense text inside layers
* ❌ No unclear relationships between layers
* ❌ No decorative styling (shadows, gradients)

---

## 04. Matrix Diagrams — *Positioning & Tradeoffs*

### Use When

* Comparing approaches (manual vs. AI-guided)
* Before vs. after scenarios
* Positioning StartupAI vs. traditional tools
* Showing tradeoffs (speed vs. depth)
* Industry analysis or competitive landscape

### Don't Use When

* Showing capabilities (use Framework instead)
* Explaining processes (use Flow instead)
* Simple comparisons (use table instead)

---

### Base Structure

```
Y Axis Label (High)
        ↑
        │
        │   ● StartupAI
        │
        │           ● Competitor
        │
        └────────────────────────→
                            X Axis Label (High)
```

**Visual Elements**:
* Two axes with labels
* Plotted points or labeled areas
* Minimal grid lines
* Clear axis labels

---

### Variants

#### 2-Axis Positioning
**Best for**: Competitive positioning, Trade-off analysis

```
  Strategic
      ↑
      │
      │  ● StartupAI
      │
      │         ● Traditional
      │
      └──────────────→ Guided
        Manual
```

---

#### Quadrant Matrix
**Best for**: Before/after, Category analysis

```
      High Clarity
          ↑
    ┌─────┼─────┐
    │  2  │  1  │ Ideal: StartupAI
    │     │     │
  ──┼─────┼─────┼──→ High Structure
    │  3  │  4  │
    │     │     │
    └─────┼─────┘
          ↓
     Low Clarity
```

---

### Example Labels (Real StartupAI Content)

**Axes Options**:
* Clarity ←→ Chaos
* Manual ←→ Guided ←→ Automated
* Reactive ←→ Strategic
* Scattered ←→ Structured
* Ad-hoc ←→ Systematic

**Positioning Examples**:
* Traditional tools (scattered, manual)
* StartupAI (strategic, guided)
* Fully automated AI (less control)

---

### Specifications

**Canvas size**:
* 400px × 400px (square preferred)
* Axes centered or bottom-left origin

**Axis style**:
* Stroke: 2px
* Color: #212427
* Arrows: Simple triangles

**Plot points**:
* Circle: 12px diameter
* Fill: #0E3E1B (StartupAI) or #898888 (others)
* Label: 12px–14px, placed near point

**Grid (optional)**:
* Very light (#F2F2F2)
* Minimal lines
* Or no grid at all

---

### Rules

* **Labels > legends** — label points directly, avoid legend boxes
* **Max 4 plotted points** — more becomes cluttered
* **No decorative grids** — only if essential for reading
* **Clear axis meanings** — concise 1–2 word labels

---

### Don'ts

* ❌ No complex scatter plots with 10+ points
* ❌ No 3D perspective or rotation
* ❌ No decorative styling (drop shadows, gradients)
* ❌ No unclear axis labels

---

## 05. Stats & Evidence Blocks — *Credibility*

### Use When

* Showing outcomes or results
* Benchmarks and metrics
* Efficiency or impact gains
* Early-stage honest proof points
* Credibility building

### Don't Use When

* Explaining how something works (use Flow instead)
* Showing relationships (use Matrix instead)
* Complex data (use table or chart instead)

---

### Base Structure

```
BIG NUMBER
Short explanation
```

**Visual Elements**:
* Large prominent number or statement
* One-line supporting text
* No icons (unless essential)
* Minimal decoration

---

### Variants

#### Single Metric
**Best for**: Hero stat, Key outcome

```
    10×

Faster decision-making
```

---

#### Horizontal Row (4-column)
**Best for**: Outcome categories, Proof points

```
[ Clear         ] [ Faster        ] [ Stronger      ] [ Fewer         ]
[ positioning   ] [ execution     ] [ narrative     ] [ wasted cycles ]
```

---

#### Vertical Stack (3 stats)
**Best for**: Sequential metrics, Progressive outcomes

```
3×
Faster to pitch deck
─────────────────────
92%
Find product-market fit
─────────────────────
10 hours
Saved per week
```

---

### Example Labels (Real StartupAI Content)

**Outcomes** (4-column):
* Clear positioning
* Faster execution
* Stronger investor narrative
* Fewer wasted cycles

**Metrics** (quantified):
* 3× faster to pitch deck
* 92% find PMF clarity faster
* 10 hours saved per week
* 5-day average to investor-ready

**Qualitative Stats**:
* Strategy clarity — from scattered to structured
* Execution confidence — from reactive to systematic
* Investor readiness — from unprepared to confident

---

### Specifications

**Number style**:
* Size: 48px–72px
* Weight: font-light or font-normal (not bold)
* Color: #212427 (primary text)

**Explanation style**:
* Size: 14px–16px
* Weight: font-normal
* Color: #696969 (secondary text)
* Max 1–2 lines

**Spacing**:
* Number to text: 8px–12px gap
* Between stats: 48px–64px gap

---

### Rules

* **Number dominates visually** — largest element
* **Text explains context** — supporting role only
* **No icons required** — numbers speak for themselves
* **Honest metrics** — no vanity numbers
* **One metric per block** — keep focused

---

### Don'ts

* ❌ No decorative icons above numbers
* ❌ No complex charts mixed with stats
* ❌ No percentage symbols larger than the number
* ❌ No vanity metrics without context

---

## 4. Diagram-to-Content Mapping (StartupAI)

Use this table to choose the right diagram type for each section:

| Section / Content Type     | Diagram Type | Variant               | Priority |
| -------------------------- | ------------ | --------------------- | -------- |
| Hero                       | Flow         | Horizontal or Boxes   | High     |
| How It Works               | Flow         | Vertical Timeline     | High     |
| What StartupAI Provides    | Framework    | 2×2 Grid              | High     |
| Operating System Logic     | Layer        | 3-Ring Concentric     | Medium   |
| Platform Capabilities      | Framework    | 1×3 Horizontal        | High     |
| Outcomes                   | Stats        | 1×4 Horizontal Row    | High     |
| Competitive Positioning    | Matrix       | 2-Axis or Quadrant    | Medium   |
| Industry Use Cases         | Matrix       | Quadrant              | Medium   |
| AI Decision Logic          | Flow         | Vertical or Branching | Low      |
| Execution Funnel           | Flow         | Vertical              | Low      |
| Strategic Framework        | Framework    | 2×2 or Layers         | Medium   |

---

## 5. Figma Component Guidance

Each diagram should be built as a reusable component.

### Component Structure

**Naming Convention**:
```
Diagram / [Type] / [Variant]

Examples:
- Diagram / Flow / Horizontal
- Diagram / Flow / Vertical Timeline
- Diagram / Framework / 2x2
- Diagram / Framework / 1x3
- Diagram / Layer / 3-Ring
- Diagram / Matrix / 2-Axis
- Diagram / Stats / Single
- Diagram / Stats / 4-Column Row
```

---

### Component Properties

Each component should support:
* **Text overrides** — editable labels
* **Color overrides** — primary, accent, or muted
* **Size variants** — small, medium, large
* **State variants** — default, active/highlighted

---

### Auto-Layout Rules

* **Use auto-layout frames** for flexible spacing
* **Horizontal spacing**: 48px–64px
* **Vertical spacing**: 32px–48px
* **Padding**: 16px–24px inside nodes

---

### Text Styles

Define these text styles in Figma:
* **Diagram / Label / Primary** — 16px, font-medium, #212427
* **Diagram / Label / Secondary** — 14px, font-normal, #696969
* **Diagram / Meta** — 12px, uppercase, tracking-wider, #898888
* **Diagram / Number** — 48px, font-light, #212427

---

### Color Styles

Define these color tokens:
* **Diagram / Text / Primary** — #212427
* **Diagram / Text / Secondary** — #696969
* **Diagram / Text / Muted** — #898888
* **Diagram / Accent / Green** — #0E3E1B
* **Diagram / Highlight / Soft Green** — #DCF9E3
* **Diagram / Border / Light** — #E5E5E5
* **Diagram / Border / Primary** — #212427

---

### Export Settings

* **Format**: SVG (for web) or PNG @2x (for documentation)
* **Naming**: `diagram-[type]-[variant].svg`
* **Optimization**: Remove unnecessary groups, clean up paths

---

## 6. Anti-Patterns (Never Add)

StartupAI diagrams must **never** include:

### Visual Anti-Patterns
* ❌ **Decorative icons** — only functional symbols allowed
* ❌ **Illustrations** — no characters, scenes, or metaphors
* ❌ **Photos or imagery** — text + lines only
* ❌ **"Feature cards"** — no card UI patterns in diagrams
* ❌ **3D effects** — flat design only
* ❌ **Shadows or depth** — no visual tricks
* ❌ **Gradients** — solid colors only
* ❌ **Decorative patterns** — no textures or fills

### Content Anti-Patterns
* ❌ **Dense paragraphs inside diagrams** — max 2 lines per node
* ❌ **Complex branching** — keep flows linear
* ❌ **Too many elements** — max 5 steps in a flow, max 4 cells in a grid
* ❌ **Unclear hierarchy** — every diagram needs one focal point
* ❌ **Competing messages** — one idea per diagram

### Style Anti-Patterns
* ❌ **Color-driven emphasis** — use size and position instead
* ❌ **Bold stacking** — no multiple bold text elements
* ❌ **Decorative borders** — functional borders only
* ❌ **Inconsistent alignment** — strict grid alignment required

---

## 7. Design QA Checklist (Required)

Before shipping any diagram, verify all these criteria:

### Clarity
- [ ] **Can it be understood in 5 seconds?** — immediate comprehension
- [ ] **Does it explain one idea only?** — no competing messages
- [ ] **Are labels concise?** — 2–5 words maximum
- [ ] **Is the hierarchy clear?** — one obvious focal point

### Visual Quality
- [ ] **Would it still work in black & white?** — not color-dependent
- [ ] **Is alignment strict?** — grid-based, not eyeballed
- [ ] **Is spacing consistent?** — equal gaps between elements
- [ ] **Are text styles consistent?** — no random sizing

### Strategic Fit
- [ ] **Is the text doing the work (not styling)?** — content over decoration
- [ ] **Does it feel consulting-grade?** — calm, authoritative
- [ ] **Could this be in a BCG deck?** — professional standard
- [ ] **Is it diagram-first, not decoration?** — functional, not pretty

### Technical Quality
- [ ] **Is it built with components?** — reusable and scalable
- [ ] **Are text overrides enabled?** — easy to customize
- [ ] **Does it scale responsively?** — works on mobile and desktop
- [ ] **Is it accessible?** — labels readable, colors sufficient contrast

If **any answer is no** → **simplify and revise**.

---

## 8. Usage Guidelines for Non-Designers

### For Content Writers

**When creating new content**:
1. Identify the concept type (process, framework, system, comparison, outcome)
2. Choose the matching diagram type from section 4 mapping
3. Write concise labels (2–5 words each)
4. Provide to designer with diagram type specified

**Example Request**:
> "Need a vertical flow diagram for the onboarding section. Steps: Create profile → AI analyzes → Smart interview → Dashboard generated. Highlight step 03."

---

### For Developers

**When implementing diagrams**:
1. Use exported SVGs or build with HTML/CSS
2. Maintain spacing specifications exactly
3. Ensure responsive scaling (test on mobile)
4. Use semantic HTML for accessibility
5. No animations or interactive states (static only)

---

### For AI Tools

**When generating diagrams**:
1. Reference this starter kit for structure
2. Use only approved diagram types (5 types, no others)
3. Follow text and spacing rules exactly
4. Output as structured data (JSON or markdown)
5. Flag if requested diagram type doesn't match content

---

## 9. Maintenance & Updates

### Review Cycle
* **Quarterly review** — evaluate if diagram types are sufficient
* **Usage audit** — track which diagrams are most/least used
* **Feedback loop** — collect designer and developer input

### When to Add New Diagram Types
Only add a new diagram type if:
1. Existing 5 types cannot solve the use case
2. New type would be used 5+ times across the site
3. New type aligns with consulting-grade aesthetic
4. Approval from design lead obtained

### Version Control
* **Figma file version history** — maintain clear versions
* **Change log** — document updates to diagram types
* **Migration plan** — update existing pages when diagrams change

---

## Final Intent

This starter kit ensures StartupAI diagrams feel:

* **Editorial** — like a strategic publication, not marketing
* **Strategic** — every diagram answers a question
* **Calm** — generous spacing, minimal decoration
* **Consulting-grade** — BCG/McKinsey/Bain level quality

> **Every diagram should read like a slide from a partner-level deck.**

Not a product feature showcase.  
Not a startup pitch deck.  
**A strategic framework made visual.**

---

## Quick Reference

**5 Diagram Types**:
1. **Flow** — Processes and sequences
2. **Framework** — Capabilities and pillars
3. **Layer** — Systems and relationships
4. **Matrix** — Positioning and tradeoffs
5. **Stats** — Outcomes and evidence

**Key Rules**:
* Text + lines only
* 2–5 words per label
* Max 5 elements per diagram
* One idea per diagram
* Black, gray, green only

**QA Gate**:
* Understand in 5 seconds?
* Works in black & white?
* Feels consulting-grade?

---

**Document Owner**: Design Team  
**Audience**: Designers, Developers, Content Strategists  
**Related Docs**: 
- `/docs/design/01-visual-system.md` (comprehensive system)
- `/docs/design/03-visual-system.md` (one-page spec)

---

*End of Diagram Starter Kit*
