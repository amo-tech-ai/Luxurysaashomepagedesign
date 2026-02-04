# BCG Design System Analysis — Editorial Layout Audit

**Consulting-Grade Design System Report**

**Purpose**: Extract BCG's underlying design system to inform StartupAI's editorial UI  
**Method**: Visual analysis of BCG web pages (Fashion Industry, AI Agents, Business Decision-Making)  
**Output**: Rules, patterns, and structure only — no content recreation

**Version**: 1.0  
**Date**: January 31, 2026  
**Status**: Canonical Reference

---

## Executive Summary

BCG's editorial design system is built on **restraint, hierarchy, and strategic use of whitespace**. The system prioritizes:

1. **Typography-led hierarchy** — Size and weight create emphasis, not color
2. **Generous vertical rhythm** — Sections breathe with 80–120px spacing
3. **Alternating backgrounds** — White → Light gray → Dark for visual pacing
4. **Data as decoration** — Charts and stats replace decorative imagery
5. **Single-column readability** — Body text max-width ~720px, never full-width
6. **Grid-based cards** — Related content, insights, experts use 2–4 column grids

**Key Insight**: BCG pages feel like **digital consulting decks**, not marketing websites. Every element serves strategic communication, not decoration.

---

# PHASE 1 — VISUAL HIERARCHY

## How BCG Controls Attention

### Primary Hierarchy Flow

```
1. Breadcrumb navigation (industry/topic path)
   ↓
2. H1 headline (large, bold, sentence case)
   ↓
3. Subhead / deck (single sentence, lighter weight)
   ↓
4. Hero visual (photo or diagram — not always present)
   ↓
5. Section H2 (introduces each major section)
   ↓
6. Body copy (single column, max-width constrained)
   ↓
7. Data visualizations (charts, stats blocks, diagrams)
   ↓
8. Related content grid (insights, experts, services)
   ↓
9. Footer (minimal, structured)
```

---

### Whitespace as Structure

**Observations**:
- **Between sections**: 80–120px vertical spacing creates clear "pauses"
- **Around headlines**: 40–60px above, 20–32px below
- **Body paragraphs**: 16–24px between paragraphs
- **Inside cards**: 24–32px internal padding

**Rule**: Whitespace defines section boundaries, not borders or background boxes.

---

### Background Rhythm

BCG alternates background colors to create visual pacing:

```
Section 1: White background
Section 2: Light gray (#F5F5F5 or similar)
Section 3: White background
Section 4: Dark (#1A1A1A or similar) with white text
Section 5: White background
Section 6: Light gray
```

**Pattern**: 
- Default is white
- Every 2–3 sections: light gray for contrast
- Strategic dark sections for emphasis (usually final CTA or key insight)
- Green accent (#00A651 or similar) for CTAs only

---

### Emphasis Without Heavy Color

**How BCG creates emphasis**:
1. **Size differential** — H1 is 3–4× body size
2. **Weight contrast** — Bold headlines vs regular body
3. **Spacing** — Generous space draws eye to isolated elements
4. **Data scale** — Large numbers (72px+) for stats
5. **Single accent color** — Green used sparingly for CTAs and key highlights

**Never**:
- ❌ Multiple bright colors for hierarchy
- ❌ Decorative icons or graphics for emphasis
- ❌ Borders or boxes to "contain" content
- ❌ Gradients or shadows for depth

---

## Hierarchy Order Rules

### What Always Comes First

1. **Navigation bar** — Logo left, links center/right, CTA right
2. **Breadcrumb** — Small, muted, shows page path
3. **H1 headline** — One per page, never repeated
4. **Subhead** — One sentence explanation

### What Always Comes Second

5. **Hero content** — Photo, diagram, or immediately into body
6. **Primary section** — First major content block

### What Always Comes Last

- **Related content** — Insights, articles, services
- **Expert profiles** — Team members or contributors
- **Footer** — Minimal links, copyright, language selector

---

## Section Pacing (Long-Form Reading)

**Pattern observed**:

```
Narrative block (single column text)
   ↓ 80–120px spacing
Data visualization (chart or stats)
   ↓
Narrative block
   ↓
Framework diagram (rings/layers/flow)
   ↓
Narrative block
   ↓
Grid of cards (insights/experts)
```

**Rule**: Alternate between **text-heavy** and **visual-heavy** sections. No more than 2 consecutive narrative blocks without a visual break.

---

## Do / Don't List (Hierarchy)

### ✅ Do

- Use one H1 per page
- Create hierarchy through size and weight
- Use generous spacing between sections (80–120px)
- Alternate background colors for pacing
- Use data visualizations as visual breaks
- Keep body text single-column, max-width constrained
- Use breadcrumbs for navigation context

### ❌ Don't

- Stack multiple H1s or competing headlines
- Use color alone for hierarchy
- Cram sections together (< 40px spacing)
- Use all white or all gray backgrounds
- Put body text full-width
- Use decorative imagery where data would work
- Skip breadcrumbs on deep pages

---

# PHASE 2 — LAYOUT SYSTEM

## Single-Column vs Split Layouts

### Single Column (Default for Narrative)

**Used for**:
- Hero headline + subhead
- Body copy (articles, insights)
- Section introductions
- Footnotes and sources

**Max-width**: ~720–800px (45–50rem)  
**Alignment**: Left-aligned (never center for body)  
**Padding**: 80–120px horizontal on desktop, 24–32px on mobile

---

### Split Layout (Text + Visual)

**Used for**:
- Hero with image/diagram on right
- Feature explanations with supporting visual
- "What we offer" sections with framework diagram

**Pattern**:
```
┌─────────────────────┐  ┌─────────────────────┐
│ TEXT COLUMN (60%)   │  │ VISUAL (40%)        │
│                     │  │                     │
│ H2                  │  │ [Chart/Diagram]     │
│ Body text           │  │                     │
│ CTA (optional)      │  │                     │
└─────────────────────┘  └─────────────────────┘
```

**Gap**: 60–80px between columns  
**Vertical alignment**: Usually top-aligned, not center

---

### Asymmetric Layouts

**Observation**: BCG rarely uses perfectly symmetrical 50/50 splits.

**Common ratios**:
- 60/40 (text dominant)
- 70/30 (text very dominant)
- 40/60 (visual dominant, rare)

**Rule**: Text-heavy pages lean 60/40 or 70/30. Visual-heavy sections (like stats or charts) can flip to 40/60.

---

## When Grids Are Used

**Grid usage**:
- **Insights/Articles**: 2–3 column grid
- **Expert profiles**: 3–4 column grid
- **Related services**: 2–3 column grid
- **Stats blocks**: 2–4 column grid (equal width)

**Free-flow text**:
- All body copy
- Section introductions
- Captions under visuals

**Rule**: Grids are for **scannable content** (cards, lists). Free-flow is for **reading** (narrative).

---

## How Diagrams Replace Photography

**Photography is used sparingly** — mostly for:
- Hero images (establishing shot)
- Team/expert headshots
- Occasional feature imagery

**Diagrams replace photos** for:
- Process explanations (flows)
- Strategic frameworks (rings, layers, columns)
- Data stories (charts, stats blocks)
- Concept illustrations

**Ratio observed**: ~60% diagrams/charts, ~40% photography in typical BCG article.

---

## Long-Form Readability

### Line Length
- **Body text**: 65–75 characters per line
- **Max-width**: 720–800px (45–50rem)
- **Never full-width**: Always constrained for readability

### Paragraph Length
- **Average**: 3–5 sentences
- **Breaking**: At idea boundaries, not arbitrary line counts

### Subheadings
- **H3 every**: 2–4 paragraphs
- **Purpose**: Break up long sections, provide scannable structure

### Lists
- **When**: 3+ items that are parallel
- **Style**: Simple bullets, no decorative icons
- **Spacing**: 8–12px between list items

---

## Layout Patterns by Section Type

### 1. Hero (Editorial)

**Structure**:
```
[Breadcrumb]

[H1: Large headline]
[Subhead: One sentence]

[Optional: Hero image or diagram]
[Optional: Primary CTA]
```

**Background**: White or light gray  
**Max-width**: ~1200px container, H1 max-width ~800px  
**Spacing**: 120–160px vertical padding

---

### 2. Framework Sections

**Structure**:
```
[H2: Section title]
[Intro paragraph: 1–2 sentences]

┌────────────────┐
│   FRAMEWORK    │  ← Rings, layers, or columns
│   DIAGRAM      │  ← Labels: 1–2 lines each
└────────────────┘

[Optional: Supporting body text]
```

**Layout**: Single column, diagram centered or left-aligned  
**Diagram max-width**: 600–800px  
**Spacing**: 60–80px around diagram

---

### 3. Process / Flow Sections

**Structure**:
```
[H2: Section title]

[Flow Diagram]
Step 1 → Step 2 → Step 3 → Step 4

[Body: Explanation of process]
```

**Layout**: Single column, flow horizontal or vertical  
**Label length**: 1–2 lines per node (3–8 words)  
**Arrow style**: Simple, no decoration

---

### 4. Stats / Highlights

**Structure**:
```
[H2: Section title]

┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   85%    │  │   3.2×   │  │   $12B   │  │   200+   │
│ Caption  │  │ Caption  │  │ Caption  │  │ Caption  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

**Layout**: 2–4 column grid, equal width  
**Number size**: 48–72px  
**Caption size**: 14–16px  
**Background**: Often light gray or green tint for emphasis

---

### 5. Deep-Dive Article Sections

**Structure**:
```
[H2: Section title]

[Body paragraph 1]
[Body paragraph 2]

[H3: Subsection title]

[Body paragraph 3]
[Body paragraph 4]

[Optional: Data visualization or diagram]

[Body paragraph 5]
```

**Layout**: Single column throughout  
**Max-width**: 720–800px  
**Spacing**: H2 has 60px above, 20px below; H3 has 40px above, 16px below

---

### 6. Explore / Related Sections

**Structure**:
```
[H2: "Explore related" or "Latest insights"]

┌────────────┐  ┌────────────┐  ┌────────────┐
│ [Image]    │  │ [Image]    │  │ [Image]    │
│ Category   │  │ Category   │  │ Category   │
│ Title      │  │ Title      │  │ Title      │
│ [CTA] →    │  │ [CTA] →    │  │ [CTA] →    │
└────────────┘  └────────────┘  └────────────┘
```

**Layout**: 2–3 column grid  
**Card spacing**: 24–32px gap between cards  
**Card padding**: 0 (image full-bleed) or 16–24px if no image  
**CTA style**: Text link with arrow, no button

---

# PHASE 3 — TYPOGRAPHY RULES

## Font Hierarchy Analysis

### Font Family
**Observed**: Sans-serif throughout (likely BCG Henderson or similar)  
**Fallback**: System fonts (Helvetica Neue, Arial)  
**Rule**: One font family for entire page (no serif/sans mixing)

---

### Typography Scale

| Element | Size (approx) | Weight | Line Height | Use |
|---------|---------------|--------|-------------|-----|
| **H1** | 48–72px | Bold (700) | 1.1–1.2 | Page title, once |
| **H2** | 32–40px | Bold (700) | 1.2–1.3 | Section titles |
| **H3** | 24–28px | Bold (700) | 1.3–1.4 | Subsections |
| **Body Large** | 18–20px | Regular (400) | 1.5–1.6 | Intro paragraphs |
| **Body** | 16–18px | Regular (400) | 1.5–1.6 | All body copy |
| **Small / Caption** | 14px | Regular (400) | 1.4–1.5 | Captions, meta |
| **Stat Number** | 48–72px | Bold (700) | 1.0 | Large numbers |
| **Footnote** | 12–14px | Regular (400) | 1.4 | Sources, disclaimers |

---

### Sentence Case vs Title Case

**Observation**:
- **H1**: Sentence case ("Fashion industry trends" not "Fashion Industry Trends")
- **H2**: Sentence case
- **H3**: Sentence case
- **CTAs**: Sentence case ("Learn more" not "Learn More")
- **Navigation**: Title case allowed ("Our Services")

**Rule**: Default to **sentence case** for all content headlines and CTAs. Title case only for navigation labels if needed.

---

### Font Size Ratios

**H1 to Body**: 3:1 to 4:1 (e.g., 72px / 18px = 4:1)  
**H2 to Body**: 2:1 to 2.2:1 (e.g., 36px / 18px = 2:1)  
**H3 to Body**: 1.3:1 to 1.5:1 (e.g., 24px / 18px = 1.3:1)

**Rule**: Maintain consistent ratios across pages. If body is 16px, H1 should be 48–64px; if body is 18px, H1 should be 54–72px.

---

### Line Height and Paragraph Spacing

**Line height**:
- **Headlines**: 1.1–1.3 (tight)
- **Body**: 1.5–1.6 (comfortable)
- **Captions**: 1.4–1.5 (slightly tighter than body)

**Paragraph spacing**:
- **Between paragraphs**: 16–24px (1–1.5× font size)
- **Between sections**: 80–120px
- **After headlines**: 16–24px (H1), 12–16px (H2), 8–12px (H3)

---

### Hierarchy Using Size + Weight Only

**Primary hierarchy**: Font size  
**Secondary hierarchy**: Font weight (bold for headlines, regular for body)  
**Not used for hierarchy**: Color, italic, underline (except links), all-caps (except small labels)

**Rule**: If hierarchy isn't clear with size and weight alone, the design is wrong.

---

## Usage Rules Per Text Type

### H1 (Page Title)
- **Count**: One per page, never repeated
- **Punctuation**: No period at end
- **Length**: 5–12 words ideal
- **Line wrap**: Allowed, but single line preferred
- **Example**: "AI agents for business decision-making"

---

### H2 (Section Title)
- **Count**: One per major section
- **Punctuation**: No period
- **Length**: 3–8 words
- **Spacing**: 60–80px above, 20–32px below
- **Example**: "How we support fashion leaders"

---

### H3 (Subsection Title)
- **Count**: Multiple allowed per section
- **Punctuation**: No period
- **Length**: 2–6 words
- **Spacing**: 40–48px above, 12–16px below
- **Example**: "Strategic planning"

---

### Body Copy
- **Line length**: 65–75 characters (45–50rem)
- **Paragraph length**: 2–5 sentences
- **Spacing**: 16–24px between paragraphs
- **Alignment**: Left (never justified)
- **Example**: Standard article text

---

### Captions
- **Use**: Under images, charts, diagrams
- **Length**: 1–2 sentences
- **Color**: Muted (#666666 or similar)
- **Alignment**: Left or center (match visual)

---

### Stat Numbers
- **Use**: In stats blocks for emphasis
- **Size**: 48–72px (3–4× body size)
- **Weight**: Bold
- **Unit**: Often smaller (e.g., "85" large, "%" smaller)
- **Caption below**: Small text explains metric

---

## Typography Anti-Patterns (Never Observed)

### ❌ Never

1. **All-caps body text** — Small labels only (e.g., "ARTICLE")
2. **Decorative fonts** — No script, display, or novelty fonts
3. **Centered body text** — Left-aligned for readability
4. **Justified text** — Creates rivers and poor readability
5. **Multiple font families** — One sans-serif throughout
6. **Tiny body text** — Never below 14px for main content
7. **Bold stacking** — Bold headline immediately on bold headline
8. **Orphaned headlines** — H2 at bottom of page with no content below
9. **Color for hierarchy** — Size and weight create structure
10. **Italic for emphasis** — Use bold or larger size instead

---

# PHASE 4 — DIAGRAM & CHART LANGUAGE

## Diagram Types Observed

### 1. Flow Diagrams (Process)

**Use**: Sequential processes, decision trees, workflows

**Structure**:
```
[Node 1] → [Node 2] → [Node 3] → [Node 4]
```

**Text density**: 
- 1–2 lines per node
- 3–8 words per line
- No paragraphs inside nodes

**Visual style**:
- Simple boxes or circles
- Solid arrows (no 3D effects)
- Consistent spacing between nodes (40–60px)

**Color**: 
- Primary: Gray or black outlines
- Accent: Green for highlighted node
- Background: White or light gray

---

### 2. Framework Diagrams (Layers, Rings, Columns)

**Use**: Strategic frameworks, capability maps, operating models

**Structure**: Concentric rings, horizontal layers, or vertical columns

**Concentric Rings**:
```
┌─────────────────────────────┐
│  Outer Ring (Enablers)      │
│  ┌───────────────────────┐  │
│  │ Middle Ring (System)  │  │
│  │  ┌─────────────────┐  │  │
│  │  │ Core (Purpose)  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**Columns**:
```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Column  │  │ Column  │  │ Column  │  │ Column  │
│   1     │  │   2     │  │   3     │  │   4     │
│         │  │         │  │         │  │         │
│ • Point │  │ • Point │  │ • Point │  │ • Point │
│ • Point │  │ • Point │  │ • Point │  │ • Point │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```

**Text density**:
- Title: 1 line (2–4 words)
- Description: 1–2 lines (5–15 words)
- Bullets: 1 line each (2–6 words)

**Spacing**:
- Between rings: 20–30px
- Between columns: 24–40px
- Internal padding: 16–24px

---

### 3. Matrices (Comparison Grids)

**Use**: Industry comparisons, capability maps, decision frameworks

**Structure**: 2×2, 3×3, or rectangular grids

**2×2 Quadrant**:
```
           High Impact
                ↑
      ┌─────────┼─────────┐
      │ Quadrant│Quadrant │
      │    2    │    1    │
 Low ─┼─────────┼─────────┼─ High
Effort│ Quadrant│Quadrant │ Effort
      │    3    │    4    │
      └─────────┼─────────┘
                ↓
           Low Impact
```

**Text density**:
- Axis labels: 1–2 words
- Quadrant labels: 1–3 words
- Plotted points: 1–2 word labels

**Visual style**:
- Light grid lines (if any)
- Axes with arrows
- Minimal decoration

---

### 4. Bar Charts (Horizontal/Vertical)

**Use**: Data comparisons, survey results, growth metrics

**Structure**: Standard bar chart with:
- Bars (solid green or gray)
- Value labels (inside or outside bars)
- Axis labels (left/bottom)
- Legend (if multi-series)

**Text density**:
- Chart title: 1 line
- Axis labels: 1–2 words
- Value labels: Number only or number + unit
- Caption: 1–2 sentences below chart

**Color usage**:
- Single series: Green (#00A651)
- Multi-series: Green + gray, or shades of green
- Highlight: Darker green for emphasis bar

---

### 5. Stats Blocks (Large Numbers)

**Use**: Key metrics, year-in-review, impact highlights

**Structure**:
```
┌──────────────┐
│     85%      │  ← Large number (48–72px)
│              │
│ Stat caption │  ← Small caption (14–16px)
└──────────────┘
```

**Text density**:
- Number: 1–5 characters
- Unit: Small (e.g., "%" or "B" for billion)
- Caption: 1–2 lines (5–15 words)

**Layout**: 2–4 column grid, equal width cells

**Color**: 
- Background: Light green tint or white
- Number: Black or green
- Caption: Gray

---

## Diagram Structure Rules (Universal)

### Text Density Per Node

**Max text per node**:
- Title: 8 words
- Description: 20 words
- Total: 1–2 lines of text

**Rule**: If a node requires more than 2 lines, break into multiple nodes or move detail to caption.

---

### Label Length Rules

| Element | Max Length | Example |
|---------|------------|---------|
| Node title | 4–8 words | "Strategic market analysis" |
| Axis label | 2–3 words | "High impact" |
| Bullet point | 5–8 words | "Improve operational efficiency" |
| Stat caption | 10–15 words | "Percentage of executives using AI tools" |
| Chart title | 8–12 words | "AI adoption across industries (2024)" |

---

### Alignment and Spacing

**Alignment**:
- Node labels: Center or left (consistent within diagram)
- Chart labels: Left or bottom-aligned
- Stat blocks: Center-aligned

**Spacing**:
- Between flow nodes: 40–60px horizontal, 30–40px vertical
- Between chart bars: 12–20px
- Between stat blocks: 24–32px
- Padding inside nodes: 12–20px

---

### Color Usage in Diagrams

**Primary**: Gray (#666666) or black (#1A1A1A) for structure  
**Accent**: Green (#00A651) for emphasis, highlights, bars  
**Background**: White or light gray (#F5F5F5)

**Rules**:
- Use color sparingly (one accent color only)
- Avoid multi-color coding unless essential (e.g., survey results)
- Default to grayscale + one accent

---

## Diagram Language Guide

### When to Use Flow Diagrams

**Use when**: Explaining sequential processes, decision paths, or workflows

**Examples**:
- "How we work with clients: Discovery → Analysis → Strategy → Implementation"
- "AI agent decision process"

**Structure**: 3–7 nodes, left-to-right or top-to-bottom, arrows between

---

### When to Use Framework Diagrams

**Use when**: Showing strategic pillars, capability groups, or system architecture

**Examples**:
- "Our approach: Technology + People + Process"
- "AI operating system: Data (outer) → Models (middle) → Decisions (core)"

**Structure**: Rings (3–4 concentric) or columns (3–5 vertical)

---

### When to Use Matrices

**Use when**: Comparing across two dimensions or showing positioning

**Examples**:
- "Effort vs Impact" (prioritization)
- "Industry × Use Case" (exploration)

**Structure**: 2×2 or 3×3 grid, axis labels, quadrant/cell labels

---

### When to Use Bar Charts

**Use when**: Comparing quantities across categories

**Examples**:
- "AI adoption by industry"
- "Revenue growth over time"

**Structure**: Horizontal or vertical bars, value labels, clear axis labels

---

### When to Use Stats Blocks

**Use when**: Highlighting key metrics or outcomes

**Examples**:
- "Year in review: 85% adoption, 3.2× ROI, $12B impact"
- "Our impact: 200+ clients, 50 countries, 10 years"

**Structure**: 2–4 large numbers with short captions, grid layout

---

## Labeling Conventions

### Node Labels (Flow/Framework)
- **Format**: Title case or sentence case
- **Length**: 2–8 words
- **Punctuation**: No periods
- **Style**: Bold or medium weight
- **Example**: "Market analysis" or "Conduct market analysis"

### Chart Labels
- **Axis titles**: Bold, 14–16px
- **Axis values**: Regular, 12–14px
- **Legend**: Regular, 12–14px
- **Data labels**: Bold, 12–14px

### Stat Captions
- **Number first**: Large, bold
- **Caption below**: Small, regular, gray
- **Format**: "85% of executives agree"

---

# PHASE 5 — DESIGN SYSTEM EXTRACTION

## Visual Hierarchy Rules (Summary)

1. **One H1 per page** — Sentence case, 48–72px, bold
2. **Section H2s** — 32–40px, bold, 60–80px above
3. **Whitespace defines sections** — 80–120px between major sections
4. **Background rhythm** — Alternate white → light gray → white
5. **Data as decoration** — Charts and diagrams, not decorative imagery
6. **Single column body** — Max-width 720–800px, never full-width
7. **Grids for cards** — 2–4 columns for insights, experts, related content
8. **Hierarchy by size + weight** — Not color or decoration

---

## Approved Layout Patterns (Summary)

### 1. Hero (Editorial)
- H1 + subhead + optional CTA
- Single column, max-width ~800px
- Optional hero image or diagram

### 2. Framework Section
- H2 + intro sentence
- Diagram (rings/columns/layers)
- Optional body text

### 3. Process/Flow Section
- H2 + intro
- Flow diagram (horizontal or vertical)
- Caption/explanation below

### 4. Stats/Highlights
- H2 + 2–4 stat blocks
- Large numbers + small captions
- Grid layout, optional green background

### 5. Deep-Dive Article
- H2 + body + H3 subsections
- Single column throughout
- Optional diagrams between sections

### 6. Related Content Grid
- H2 + card grid (2–3 columns)
- Each card: image + category + title + CTA
- At end of page

---

## Typography Usage Guide (Summary)

| Element | Size | Weight | Use |
|---------|------|--------|-----|
| H1 | 48–72px | Bold | Page title once |
| H2 | 32–40px | Bold | Section titles |
| H3 | 24–28px | Bold | Subsections |
| Body | 16–18px | Regular | All body copy |
| Caption | 14px | Regular | Meta, image captions |
| Stat | 48–72px | Bold | Large numbers |

**Rules**:
- Sentence case for headlines
- Left-align body text
- Max-width 720–800px for body
- 1.5–1.6 line-height for body
- 80–120px between sections

---

## Diagram-Only Section Types (Summary)

1. **Flow** — Process sequences (3–7 nodes)
2. **Framework** — Strategic pillars (rings/columns)
3. **Matrix** — Comparisons (2×2 or 3×3)
4. **Bar Chart** — Data comparisons
5. **Stats Block** — Key metrics (2–4 numbers)

**Rules**:
- 1–2 lines text per node
- Consistent spacing (40–60px between nodes)
- Gray structure + green accent only
- No decorative elements

---

## Spacing & Rhythm Rules (Summary)

### Vertical Spacing
- **Between sections**: 80–120px
- **After H1**: 20–32px
- **After H2**: 20–32px
- **Between paragraphs**: 16–24px
- **Around diagrams**: 60–80px

### Horizontal Spacing
- **Body max-width**: 720–800px
- **Container max-width**: 1200–1400px
- **Grid gap**: 24–32px
- **Card padding**: 16–24px

### Background Rhythm
- Default: White
- Alternate: Light gray every 2–3 sections
- Emphasis: Dark section for final CTA

---

## Anti-Patterns to Avoid (Summary)

### ❌ Hierarchy
- Multiple H1s on one page
- Bold stacking (bold on bold)
- Hierarchy by color alone

### ❌ Layout
- Full-width body text
- Tight section spacing (< 40px)
- All same background color
- Sidebar for main narrative

### ❌ Typography
- Title case for content headlines
- Body text below 14px
- Decorative fonts
- All-caps body text

### ❌ Diagrams
- Dense text in nodes (> 2 lines)
- Complex multi-color coding
- Decorative icons or illustrations
- Paragraphs inside diagram nodes

### ❌ Content
- Marketing hype language
- Emojis or casual tone
- Orphaned headlines at bottom
- Related content before main content

---

# FINAL DELIVERABLES

## 1. One-Page Design System Summary

**BCG Editorial System for StartupAI**

**Typography Scale**:
- H1: 48–72px bold
- H2: 32–40px bold
- Body: 16–18px regular

**Spacing**:
- Sections: 80–120px apart
- Body max-width: 720–800px

**Layouts**:
1. Hero (editorial)
2. Framework (diagram-led)
3. Stats block (grid)
4. Article (single column)
5. Related content (grid)

**Diagrams**:
- Flow (process)
- Framework (pillars)
- Matrix (comparison)
- Stats (metrics)

**Color**:
- Default: White + light gray
- Accent: Green for CTAs
- Text: Black + gray scale

**Rules**:
- One H1 per page
- Sentence case headlines
- Hierarchy by size + weight
- Diagrams replace decoration

---

## 2. Figma Page Structure

### Recommended Figma File Structure

```
📁 BCG Editorial System — StartupAI

├─ 00 — Overview & Rules
│   ├─ Design principles
│   ├─ Typography scale
│   ├─ Color palette
│   └─ Spacing system

├─ 01 — Layout Templates
│   ├─ Hero (editorial)
│   ├─ Framework section
│   ├─ Process/flow section
│   ├─ Stats block section
│   ├─ Article section
│   └─ Related content grid

├─ 02 — Typography
│   ├─ H1 examples
│   ├─ H2 examples
│   ├─ Body text examples
│   └─ Caption examples

├─ 03 — Diagrams
│   ├─ Flow diagrams
│   ├─ Framework diagrams
│   ├─ Matrix diagrams
│   ├─ Bar charts
│   └─ Stats blocks

├─ 04 — Components
│   ├─ Navigation
│   ├─ Breadcrumbs
│   ├─ Cards (insight/expert)
│   ├─ CTAs
│   └─ Footer

└─ 05 — Example Pages
    ├─ Homepage
    ├─ Article page
    ├─ Service page
    └─ Industry page
```

---

## 3. Diagram Starter Kit Outline

**Purpose**: Create reusable diagram templates

### Flow Diagram Template
- 3–7 node boxes
- Arrow connectors
- Label text styles
- Spacing: 40–60px between nodes

### Framework Diagram Template
- Concentric rings (3–4 layers)
- Column layout (3–5 columns)
- Label styles
- Spacing: 24–40px between elements

### Matrix Template
- 2×2 or 3×3 grid
- Axis labels
- Cell text styles
- Spacing: consistent cell size

### Stats Block Template
- Large number style (48–72px)
- Caption style (14–16px)
- Grid layout (2–4 columns)
- Background: white or light green tint

### Bar Chart Template
- Horizontal/vertical bars
- Value labels
- Axis labels
- Legend (if needed)

---

## 4. Design QA Checklist

**Before approving any StartupAI page, verify:**

### ✅ Hierarchy
- [ ] One H1 per page
- [ ] H1 is 48–72px, bold, sentence case
- [ ] H2s are 32–40px, bold, one per section
- [ ] Section spacing is 80–120px
- [ ] Hierarchy clear without color

### ✅ Layout
- [ ] Body text max-width 720–800px
- [ ] Grids only for cards/scannable content
- [ ] Background alternates (white → gray → white)
- [ ] Hero uses editorial pattern
- [ ] Related content at end

### ✅ Typography
- [ ] Sentence case for headlines
- [ ] Body text 16–18px, line-height 1.5–1.6
- [ ] No decorative fonts
- [ ] No all-caps body text
- [ ] Left-aligned text (not justified)

### ✅ Diagrams
- [ ] Text density: 1–2 lines per node
- [ ] Consistent spacing (40–60px)
- [ ] Gray + green accent only
- [ ] No decorative icons
- [ ] Captions below diagrams

### ✅ Spacing
- [ ] 80–120px between sections
- [ ] 16–24px between paragraphs
- [ ] 60–80px around diagrams
- [ ] Consistent card gaps (24–32px)

### ✅ Content
- [ ] No marketing hype
- [ ] Strategic language
- [ ] Consulting-grade tone
- [ ] No emojis
- [ ] Breadcrumbs if applicable

---

## Final Design Intent

**Goal**: Make StartupAI feel like a **BCG-level digital publication**

### Feel Like
- ✅ Editorial (not marketing)
- ✅ Strategic (not promotional)
- ✅ Calm (not busy)
- ✅ Consulting-grade (not SaaS landing page)
- ✅ Data-driven (not decoration-heavy)

### Not Like
- ❌ Startup landing page
- ❌ SaaS product page
- ❌ Marketing website
- ❌ Blog or news site
- ❌ Feature showcase

### Summary Statement

> StartupAI should read like a **BCG operating system made interactive** — where every diagram explains strategy, every section has one clear message, and whitespace signals confidence, not emptiness.

---

**Document Status**: Complete  
**Review Required**: Design Lead approval  
**Implementation**: Ready for Figma library creation

---

*End of BCG Design System Analysis*
