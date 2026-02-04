# StartupAI Editorial Visual System

**Consulting-Grade Style Guide (BCG-Inspired)**

**Version**: 1.0  
**Last Updated**: January 31, 2026  
**Status**: Active

---

## Purpose

Create a calm, authoritative, diagram-first design system that communicates strategy, not marketing.

This system governs **layout, hierarchy, typography, and diagrams**.  
It does **not** define components or UI kits.

---

## Design Philosophy

StartupAI is built on three core beliefs:

1. **Strategy deserves visual clarity** — not decoration
2. **Intelligence is communicated through structure** — not imagery
3. **Trust is earned through restraint** — not promotion

The visual system reflects how **top-tier consulting firms** present strategic thinking: diagram-first, typography-led, analytically precise.

---

## 1. Visual Hierarchy System

### Core Principle

> **Meaning before decoration. Structure before style.**

Attention is controlled through **order, spacing, and scale** — never through color, imagery, or effects.

---

### Hierarchy Order (Always)

Every section follows this sequence:

1. **Editorial Headline** — The strategic message
2. **Strategic Subhead** — Context or clarification (optional)
3. **Primary Content** — Diagram or typographic statement
4. **Supporting Explanation** — Body text that elaborates
5. **Optional CTA or Reference** — Next action or link

---

### Rules

* **One primary message per section** — no competing focal points
* **White space separates importance** — not borders or cards
* **Sections must visually "pause"** before the next begins
* **Hierarchy is created by scale and spacing** — never by color alone

---

### Do ✅

* Use generous vertical spacing between sections
* Let headlines breathe with empty space above and below
* Keep supporting text visually lighter (smaller size, muted color)
* Align content to clear vertical or horizontal axes

---

### Don't ❌

* Stack bold text for emphasis
* Use color to create hierarchy
* Add decorative containers or cards without functional meaning
* Create competing visual weights within the same section

---

## 2. Layout System

### Core Layout Logic

StartupAI uses **editorial layouts**, not SaaS dashboards or marketing pages.

Think: **McKinsey report**, **BCG white paper**, **strategy document** — not product landing page.

---

### Approved Layout Patterns

#### A. Editorial Single Column

**Used for**:
* Strategy statements
* Thought leadership content
* Problem framing sections
* Core messaging

**Rules**:
* Narrow readable width (max 800px for body text)
* Long vertical rhythm with generous line-height
* No sidebars or competing elements
* Text-only or text + minimal diagram

**Example Sections**:
* "Founders don't fail from lack of effort" statement
* Core problem explanations
* Vision statements

---

#### B. Split Editorial (Text + Diagram)

**Used for**:
* Hero sections
* Framework explanations
* AI process overviews
* Feature + visual pairing

**Rules**:
* Text on left, diagram on right (or inverse)
* Diagram must **reinforce** text, not decorate it
* No symmetry obsession — balance over centering
* Vertical center alignment optional, not required
* Generous gap between columns

**Example Sections**:
* Hero with headline + process diagram
* "How It Works" with explanation + flow chart

---

#### C. Diagram-Led Section

**Used for**:
* Strategic models
* System architectures
* Process flows
* Framework visualizations

**Rules**:
* Diagram is the primary content
* Headline introduces the diagram
* Labels are part of the diagram (not separate)
* Explanation text comes after, if needed
* Text never wraps awkwardly around visuals

**Example Sections**:
* Core flow diagrams
* AI decision logic
* Execution funnel

---

#### D. Grid Framework (2×2 or 3-column)

**Used for**:
* Capability categories
* Service offerings
* Platform tools
* Outcome metrics

**Rules**:
* Equal visual weight across cells
* Each cell = one clear idea
* Minimal borders (or none)
* White space separates grid items
* No decorative icons unless part of a diagram

**Example Sections**:
* "What StartupAI Provides" (2×2)
* "Platform Capabilities" (3-column)
* "The Outcomes That Matter" (4-column)

---

#### E. Metrics / Evidence Block

**Used for**:
* Outcomes and results
* Proof points
* Performance indicators
* Early-stage honest metrics

**Rules**:
* Numbers or statements first
* Explanation second
* No icons required
* Calm, factual tone
* Equal-width columns

**Example Sections**:
* "Clear positioning | Faster execution | Stronger narrative"
* Quantified outcome statements

---

#### F. Vertical Timeline / Process

**Used for**:
* Step-by-step flows
* Sequential processes
* Journey maps
* Guided workflows

**Rules**:
* Vertical orientation preferred
* Clear step numbering (01, 02, 03...)
* Connecting lines show flow
* Active/current step highlighted subtly
* Each step has: label + title + description

**Example Sections**:
* "One guided flow, start to finish"
* 5-step process diagram

---

### Prohibited Layouts ❌

* **Card grids without hierarchy** — every card screaming equally
* **Masonry or Pinterest layouts** — chaotic, non-strategic
* **Overlapping content** — unclear reading order
* **Multi-column body text** — hard to read on screens
* **Carousel sliders** — hide information
* **Floating elements without clear anchoring** — visual noise

---

## 3. Typography System

### Font Philosophy

Typography carries authority.  
**No decoration. No expressiveness. Only clarity.**

Typefaces are chosen for readability and professional restraint — never for personality or brand "voice."

---

### Font Stack

**Primary**:
* henderson-bcg-sans (BCG proprietary)

**Fallback** (StartupAI implementation):
* -apple-system
* BlinkMacSystemFont
* Helvetica Neue
* Helvetica
* Arial
* sans-serif

**Rationale**: System fonts ensure consistent rendering, fast load times, and professional neutrality.

---

### Type Scale (Relative Hierarchy)

#### H1 — Editorial Headline
* **Purpose**: Primary message of each section
* **Style**: Large (48px–72px desktop), sentence case, light or regular weight
* **Leading**: Tight (1.1 line-height)
* **Tracking**: Slightly tight for editorial feel
* **Color**: Primary text color only

**Usage**:
* Section headlines
* Hero statements
* Key messaging

---

#### H2 — Section Headline
* **Purpose**: Subsection or secondary messaging
* **Style**: Medium (32px–48px desktop), sentence case, light or regular weight
* **Leading**: Normal (1.2–1.3 line-height)
* **Color**: Primary text color

**Usage**:
* Section intros
* Framework titles
* Category headers

---

#### H3 — Subsection / Diagram Title
* **Purpose**: Functional labeling or small section breaks
* **Style**: Small-medium (20px–28px), sentence case or title case, medium weight
* **Color**: Primary text color

**Usage**:
* Diagram labels
* Card titles
* Step names

---

#### Body Text
* **Purpose**: Primary explanatory content
* **Style**: 14px–18px, regular weight
* **Leading**: Generous (1.6–1.8 line-height)
* **Color**: Secondary text color (muted)

**Usage**:
* Descriptions
* Explanations
* Supporting content

---

#### Caption / Meta Text
* **Purpose**: Small informational labels
* **Style**: 10px–12px, uppercase with wide tracking, regular or medium weight
* **Color**: Muted text color

**Usage**:
* Step numbers ("STEP 01")
* Category labels ("MARKET INTELLIGENCE")
* Metadata ("Updated Jan 2026")

---

### Typography Rules

1. **Sentence case only** — "From strategy to daily execution" ✅
2. **No title case for headlines** — "From Strategy To Daily Execution" ❌
3. **No all caps** except tiny meta labels (STEP 01)
4. **No decorative fonts** or script styles
5. **No bold stacking** — if something needs emphasis, make it a headline
6. **Hierarchy = size + spacing + weight** — never color alone
7. **One typeface family** — no mixing sans-serif with serif
8. **Line-height increases as font size decreases** — headlines tight, body generous

---

### Typography Usage Guidelines

**Headlines**:
* Use font-light (300 weight) or font-normal (400)
* Never use font-bold (700) for large headlines
* Keep headlines short (5–12 words)
* No punctuation at end unless it's a question

**Body Text**:
* Use font-normal (400)
* Max line length: 65–75 characters
* Paragraph spacing: 1.5–2× line-height
* Never justify text on web

**Labels**:
* Use uppercase + tracking-wider
* Keep to 1–3 words
* Always muted color

---

## 4. Diagram-First Visual Language

StartupAI replaces photography with **thinking tools**.

Visual content must **explain strategy**, not decorate pages.

---

### Core Principle

> **Every diagram must answer a strategic question.**

If a visual doesn't clarify a concept, system, or flow — it shouldn't exist.

---

### Approved Diagram Types

#### 1. Flow Diagrams

**Use for**:
* AI workflows
* User journeys
* Execution pipelines
* Sequential processes

**Structure**:
* Linear (horizontal) or vertical orientation
* Short labels (2–5 words per node)
* Arrows or connectors show direction
* Optional: Highlight key step in accent color

**Visual Rules**:
* Minimal node decoration (simple boxes or circles)
* Clear directional flow (left-to-right or top-to-bottom)
* Equal spacing between nodes
* No overlapping lines

**Examples**:
* Profile → Strategy → Execution → Investor Readiness
* Input → AI Analysis → Smart Interview → Output

---

#### 2. Framework Diagrams

**Use for**:
* Strategy models
* Capability groupings
* Conceptual systems
* Service categories

**Structure**:
* Columns, rows, or 2×2 grids
* Balanced spacing between elements
* Equal visual weight per cell
* Clear category labels

**Visual Rules**:
* Symmetry preferred (2×2, 3×3, 4-column)
* Minimal borders or dividers
* White space separates elements
* No decorative icons

**Examples**:
* 2×2 grid: Strategy Clarity | Market Intelligence | Structured Execution | Investor Readiness
* 3-column: Validate | Build | Execute

---

#### 3. Layered / Nested Models

**Use for**:
* Core vs. enablers
* AI + Human + System relationships
* Operating system logic
* Hierarchical structures

**Structure**:
* Center = core purpose or function
* Outer rings = supporting layers or capabilities
* Concentric circles or nested boxes

**Visual Rules**:
* Clear visual hierarchy (inner most important)
* Labels outside or inside layers (never overlapping)
* Minimal shading or fill
* Optional: Accent color on core layer

**Examples**:
* AI Operating System (core) + Tools (outer ring)
* Founder (center) + AI (layer 1) + Execution (layer 2)

---

#### 4. Matrix Diagrams

**Use for**:
* Comparisons (us vs. competitors)
* Trade-offs (speed vs. depth)
* Positioning (complexity vs. impact)
* Decision frameworks

**Structure**:
* 2-axis grid
* Clear axis labels
* Plotted points or quadrants
* Minimal text

**Visual Rules**:
* Axes labeled concisely (1–2 words)
* Quadrants optional (only if meaningful)
* No dense text blocks inside matrix
* Focus on positioning, not data density

**Examples**:
* Market Positioning: Traditional Tools vs. AI Operating Systems
* Execution Trade-offs: Manual vs. Guided vs. Automated

---

#### 5. Vertical Timeline / Process Diagram

**Use for**:
* Step-by-step guides
* Onboarding flows
* Progressive disclosure
* Learning paths

**Structure**:
* Vertical list with connecting line on left
* Circle or number indicators for each step
* Step label + title + description

**Visual Rules**:
* Consistent vertical spacing
* Left-aligned text
* Circle indicators (filled for active, outline for completed/upcoming)
* Connecting line (2px, solid)

**Examples**:
* 5-step guided flow with step 03 highlighted
* Onboarding progression from profile to dashboard

---

#### 6. Metrics / Evidence Blocks

**Use for**:
* Outcomes and results
* Proof points
* Performance indicators
* Early-stage metrics

**Structure**:
* Large number or short statement
* One-line explanation below
* Equal-width columns (2–4 across)

**Visual Rules**:
* No icons (unless essential to meaning)
* Numbers or statements are the focus
* Calm, factual tone (no hype)
* Even spacing between blocks

**Examples**:
* "Clear positioning" | "Faster execution" | "Stronger narrative" | "Fewer wasted cycles"
* "3× faster to pitch deck" | "92% find product-market fit faster"

---

### Diagram Rules (Universal)

1. **Text density is low** — diagrams are not paragraphs
2. **Alignment is strict** — use grids, don't eyeball it
3. **White space is intentional** — breathing room clarifies
4. **Diagrams explain, they do not decorate** — every line has meaning
5. **Labels are concise** — 1–5 words maximum
6. **Colors are minimal** — black, gray, and accent green only
7. **No stock illustrations** — only structural diagrams
8. **No decorative icons** — unless they're part of the concept

---

## 5. Diagram-Only Section Types (StartupAI)

StartupAI pages should use **only these visual patterns**:

| Section Purpose | Diagram Type | Example |
|----------------|--------------|---------|
| Strategy Overview | Framework diagram (2×2 or columns) | What StartupAI Provides |
| AI Workflow | Vertical or horizontal flow | How It Works (5 steps) |
| Execution System | Layered model or vertical timeline | Dashboard → Tasks → Milestones |
| Outcomes | Metrics block (4-column) | The Outcomes That Matter |
| Industry Use Cases | Matrix or column framework | AI adoption across sectors |
| Feature Comparison | Table or axis diagram | StartupAI vs. traditional tools |
| Process Steps | Vertical timeline with indicators | Profile → Interview → Dashboard |

---

## 6. Color Usage (Supporting Only)

Color **never leads**. Color **supports clarity**.

---

### Color Palette

#### Text Colors
* **Primary**: #212427 (dark charcoal) — headlines, body text
* **Secondary**: #696969 (medium gray) — descriptions, supporting text
* **Muted**: #898888 (light gray) — labels, metadata

#### Background Colors
* **White**: #FFFFFF — default (~70% of page)
* **Warm Contrast**: #F1EEEA — soft beige for section breaks
* **Neutral Contrast**: #F2F2F2 — cool gray for alternate sections
* **Warm Neutral**: #DFD7CD — warmer beige for emphasis sections

#### Accent (StartupAI Green)
* **Primary Green**: #0E3E1B — CTAs, key highlights, active states
* **Soft Highlight**: #DCF9E3 — subtle backgrounds for active/current items

#### Dark Background
* **Charcoal**: #212427 — footer, final CTA sections

---

### Color Usage Rules

1. **White dominates** — approximately 70% of page area
2. **Green used only for**:
   * Primary CTAs (buttons, links)
   * Key highlights or active states
   * Strategic emphasis (e.g., step 03 in a process)
3. **No gradients** except very subtle background transitions
4. **Never use color to replace hierarchy** — size and spacing come first
5. **No decorative color blocks** — every color choice must have functional meaning
6. **Backgrounds alternate for rhythm** — white → warm beige → white → cool gray
7. **Text color never changes for emphasis** — use size or weight instead

---

### Color Don'ts ❌

* ❌ No blues (avoid SaaS clichés)
* ❌ No purples (avoid tech startup tropes)
* ❌ No reds (avoid alarm or urgency)
* ❌ No bright colors (avoid playful or casual feel)
* ❌ No color-coded sections (avoid visual noise)
* ❌ No colored text for hierarchy (use size/weight)

---

## 7. Spacing & Rhythm System

### Core Principle

> **Generous spacing = strategic confidence.**

Cramped layouts signal desperation. Breathing room signals authority.

---

### Vertical Spacing Rules

**Between sections**:
* Small screens: 96px–128px (py-24 to py-32 in Tailwind scale)
* Large screens: 128px–160px (py-32 to py-40)

**Within sections**:
* Headline to body: 48px–64px
* Body paragraphs: 32px
* List items: 24px–32px

**Component internal spacing**:
* Buttons: 12px–20px padding
* Cards/blocks: 48px–64px padding
* Diagrams: 32px–48px margin around

---

### Horizontal Spacing Rules

**Page margins**:
* Small screens: 32px (px-8)
* Large screens: 64px (px-16)
* Max content width: 1440px

**Grid gaps**:
* Between columns: 64px–128px
* Between grid items: 48px–64px

---

### Rhythm Principles

1. **Consistent spacing creates predictability** — users scan faster
2. **Sections must "pause" visually** — don't rush to next section
3. **Generous line-height for body text** — 1.6–1.8× font size
4. **Headlines have tight leading** — 1.1–1.2× font size
5. **White space is content** — not empty space to fill

---

## 8. Anti-Patterns (Explicitly Avoid)

StartupAI must **never** feel like:

### ❌ SaaS Marketing Pages
* Bright colors and gradients everywhere
* "Hero" sections with full-screen imagery
* Feature cards with icons
* Testimonial carousels
* Pricing tables with "Most Popular" badges

### ❌ Startup Landing Pages
* Playful illustrations
* Mascots or characters
* "Unicorn" or "rocket ship" metaphors
* Explainer videos above the fold
* Social proof badges

### ❌ Illustration-Driven Storytelling
* Abstract colorful shapes
* Isometric 3D illustrations
* Character-based narratives
* Decorative backgrounds

### ❌ Feature-Card Overload
* Grid of 6–12 feature cards
* Every card has an icon
* Cards all same visual weight
* No clear hierarchy

### ❌ Icon-Heavy Explanations
* Icon for every concept
* Icons as primary visual communication
* Decorative icons without meaning

### ❌ "Playful" AI Visuals
* Robot mascots
* Brain illustrations
* Circuit board patterns
* Glowing blue neural networks

---

## 9. Design Quality Checklist (QA)

Before approving any page or section, verify:

### Visual Hierarchy
- [ ] One clear primary message per section
- [ ] Headline is obviously the most important element
- [ ] Supporting text is visually lighter (smaller, muted)
- [ ] No competing focal points

### Diagram Quality
- [ ] Diagram explains the concept without narration
- [ ] Labels are concise (1–5 words)
- [ ] Alignment is strict and intentional
- [ ] No decorative elements

### Typography
- [ ] Hierarchy is obvious without color
- [ ] Sentence case used (not title case)
- [ ] Line-height appropriate for font size
- [ ] No bold stacking or emphasis abuse

### Spacing
- [ ] White space is doing real work (not filler)
- [ ] Sections have clear visual pauses
- [ ] Generous vertical rhythm
- [ ] Nothing feels cramped

### Color
- [ ] White dominates (~70%)
- [ ] Green used only for CTAs or strategic emphasis
- [ ] No color used to create hierarchy
- [ ] Backgrounds alternate for rhythm

### Tone
- [ ] Nothing feels promotional or decorative
- [ ] Language is precise and strategic
- [ ] No startup hype or superlatives
- [ ] Consulting-grade authority maintained

---

## 10. Design Intent (Final)

StartupAI should feel like:

> **A consulting-grade strategic operating system**  
> Delivered through calm, intelligent, diagram-led editorial design.

**Not**:
* A SaaS product
* A startup pitch
* An AI tool showcase

**But**:
* A strategic platform
* A thinking system
* An operating framework

---

## Reference Examples

### Visual Inspiration
* BCG publications and industry reports
* McKinsey Quarterly layouts
* Bain insights pages
* Academic journal layouts (clean, structured)

### Tone Inspiration
* BCG Henderson Institute articles
* Harvard Business Review (structure, not content)
* MIT Technology Review (editorial approach)

---

## Implementation Notes

This visual system is **principle-based**, not pixel-perfect.

Designers and developers should:
1. Understand the **why** behind each rule
2. Apply principles to new contexts
3. Maintain consistency across pages
4. Question additions that don't serve strategy

When in doubt, ask:
> **"Does this communicate strategic clarity, or just look nice?"**

If it's the latter, remove it.

---

**Document Owner**: Design Team  
**Approval Required For Changes**: Yes  
**Review Cycle**: Quarterly

---

*End of Visual System Documentation*
