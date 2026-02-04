# StartupAI Visual System — Style Guide and Hierarchy

**Consulting-Grade Editorial System**

**Role:** Design systems and editorial layout expert. BCG / McKinsey / FT-style digital publication audit.  
**Reference:** BCG editorial pages (e.g. Digital Support Functions)  
**Output:** Visual rules and StartupAI-specific guidance. Text and structure only; no screenshots, no imagery, no UI component code.

**Version**: 1.0  
**Last Updated**: January 31, 2026  
**Status**: Canonical Reference

---

# PHASE 1 — STYLE GUIDE ANALYSIS

## 1. Visual Hierarchy

### How Attention is Controlled

- **First:** Breadcrumb (capability or industry path). Establishes context; minimal visual weight.
- **Second:** H1 (page title). Single line; dominates the fold. No competing headline.
- **Third:** H2 or subhead. One sentence that states the value proposition or theme of the page.
- **Fourth:** Body or CTA block (e.g. subscribe, stay ahead). Short; supports the headline.
- **Fifth:** Section H2s. Each major section has one H2; no H1 below the hero.
- **Sixth:** Body, lists, and sub-sections (H3 or bold lead). Long-form stays in a single main column.
- **Last:** Footnotes, sources, related links, experts, explore-related. Small type; structured (grid or list).

---

### Whitespace vs Containers

- **Whitespace:** Used between sections to create pause. No tight stacking of unrelated sections.
- **Containers:** Full-width sections with internal max-width for text; distinct background or border only when a section type changes (e.g. stats block, highlights block).
- **Rule:** One idea per section. Section spacing is consistent; container spacing is generous (e.g. 2–3rem vertical between sections).

---

### Rhythm and Contrast

- **Rhythm:** Alternating "content" and "structure" sections: narrative block → framework or list → narrative → stats or client impact → tools or insights grid.
- **Contrast without color or graphics:** Hierarchy is created by **scale** (H1 > H2 > body > caption) and **weight** (bold for section titles and metric labels). Optional: background tint (e.g. light gray) for one section type (e.g. stats or highlights) to create a single contrast block.

---

### Hierarchy Rules (What Always Comes First, Second, Last)

| Order | Element | Rule |
|-------|---------|------|
| 1 | Breadcrumb | Always first; link path; current page as text only. |
| 2 | H1 | One per page; no other H1. |
| 3 | Subhead / H2 | One sentence under H1. |
| 4 | Primary CTA or intro | Short; one to two lines or one CTA. |
| 5 | Section H2s | One per section; sentence case. |
| 6 | Body and sub-content | H3 or bold for sub-heads; body 16px equivalent. |
| 7 | Stats, client impact, tools | Structured blocks (see Layout). |
| 8 | Insights grid, experts, related | Cards or list; smallest type for meta (date, category). |
| 9 | Footnote / sources | Smallest type; full-width below content. |

---

### Do / Don't (Hierarchy)

**Do:**
* Use one H1 per page
* Use consistent section spacing
* Use weight and scale only for emphasis where possible
* Put breadcrumb first
* End with sources or related links

**Don't:**
* Stack multiple H1s or H2s without body between
* Use decorative type (e.g. script, heavy display) for body
* Shrink H1 to fit; allow wrap or reduce word count
* Use color or icons as the only differentiator for hierarchy

---

## 2. Layout System

### Column Logic

- **Hero:** Single column. H1 + subhead + optional CTA; centered or left-aligned.
- **Long-form body:** Single column; max-width (e.g. 720–800px) for readability. No sidebars for main narrative.
- **Framework / process lists:** Single column with indented or bulleted items; optional numbered list for sequence.
- **Stats and highlights:** Multi-column (e.g. 2 or 3) within a full-width section; equal or weighted columns.
- **Cards (insights, tools, related):** Grid (2–4 columns desktop); collapse to 1–2 on small screens.
- **Asymmetric:** Reserved for distinct "pull" or "sidebar" only if defined as a pattern (e.g. key number callout); not default.

---

### When Grids are Used vs Free-Flow Text

**Grid:**
* Stats block (metric + caption per cell)
* Highlights (pillar = header + content)
* Card grids (insight, tool, related service)
* "By the numbers" or "Client impact" with 2–4 items

**Free-flow:**
* Hero copy
* Section intros
* Body under each "How we support…" item
* Captions under diagrams
* Footnotes

---

### How Diagrams Replace Imagery

- **Hero:** No requirement for a large photo. Can be headline + subhead only, or headline + one diagram (e.g. framework rings or layers).
- **Section visuals:** Diagram types (see Diagram-First Language) stand in for photos: framework, process flow, matrix, stats block. One diagram per section type where applicable.
- **Imagery:** If used, reserved for client logos, partner badges, or optional hero background; not for decorative filler.

---

### Long-Form Readability

- **Line length:** Cap body at ~65–75 characters per line (max-width on text container).
- **Paragraph length:** 2–4 sentences per paragraph; break at idea boundaries.
- **Lists:** Use for 3+ items; bold or H3 for list title. Expand/collapse for long lists (e.g. "Expand all" with accordion or anchor links).

---

### Layout Patterns by Section Type

| Section type | Column | Content | Notes |
|--------------|--------|---------|-------|
| **Hero** | Single | Breadcrumb, H1, H2, CTA or one line | No image required. |
| **Framework** | Single | H2 + intro sentence + list (bullets or numbered) | Each item: title + 1–2 sentences. Optional diagram (rings/layers). |
| **Process** | Single | H2 + steps (flow or list) | Labels short (1–2 lines per node). |
| **Stats** | 2–3 cols | Section H2 + metric/caption pairs | Large number, small caption; optional single contrast background. |
| **Client impact** | 2 cols or list | H2 + case blocks (metric + title + 1–2 sentences) | Metric prominent; source optional. |
| **Tools / solutions** | Grid 2–4 | Card = icon/logo + title + 1 line | Optional "Learn more" per card. |
| **Insights** | Grid 2–4 | Card = image optional, category, date, title, "Learn more" | Meta small; title and link primary. |
| **Experts** | Grid 2–4 | Card = photo, name, title, location | Minimal text. |
| **Explore related** | Grid 2–4 | Card = label (e.g. Capability) + title link | Small cards. |
| **Deep-dive content** | Single | H2 + body + optional sub-heads (H3) + lists | Max-width; no sidebar. |
| **Footnote** | Full width | Source, clarification, disclaimer | Smallest type. |

---

## 3. Typography Rules

### Font Usage

- **Headline (H1):** Sans-serif; bold; largest scale. Single line preferred; wrap allowed.
- **Body:** Same family; regular weight; 16px equivalent base. No second font for body unless specified (e.g. for data/code).
- **Captions and meta:** Same family; smaller size; regular or medium. Used for dates, categories, sources, footnotes.

---

### Sentence Case vs Title Case

- **Sentence case** for: H2s, section titles, card titles, list titles, buttons (e.g. "Learn more", "Explore").
- **Title case** only when: H1 is a proper name or formal title (e.g. "Digital Support Functions and Shared Services"); otherwise sentence case for H1 is acceptable for StartupAI.
- **All caps:** Avoid for body or long labels; reserved for small labels (e.g. "Article", "Report") or nav if needed.

---

### Font Size Ratios

- **H1:** 2.5–4× body (e.g. 40–64px if body 16px). Page-type dependent (landing vs article).
- **H2:** 1.5–2× body (e.g. 24–32px).
- **H3:** 1.125–1.25× body (e.g. 18–20px).
- **Body:** 1rem (16px).
- **Small / caption:** 0.75–0.875rem (12–14px).
- **Footnote:** 0.75rem (12px).

---

### Line Height and Paragraph Spacing

- **Line height:** Body 1.5–1.6; headings 1.2–1.3. Captions 1.4.
- **Paragraph spacing:** 1–1.5em between paragraphs. No indent on first line if using space between paragraphs.
- **Section spacing:** 2–3rem between sections (or 32–48px).

---

### Hierarchy Using Weight and Scale Only

- **Primary hierarchy:** Size (H1 > H2 > body > caption).  
- **Secondary hierarchy:** Weight (bold for section titles and key metric labels; regular for body).  
- **No reliance on:** Color alone for hierarchy, or italic/script for structure. Use color for links and CTAs only; structure is type-led.

---

### Typography Scale (Summary)

| Element | Size (approx) | Weight | Use |
|---------|----------------|--------|-----|
| H1 | 40–64px | Bold | Page title once. |
| H2 | 24–38px | Bold | Section title. |
| H3 | 18–20px | Bold | Sub-section or card title. |
| Body | 16px | Regular | All body copy. |
| Small / caption | 12–14px | Regular | Meta, captions, footnotes. |
| Footnote | 12px | Regular | Sources, disclaimers. |

---

### Usage Rules Per Text Type

- **H1:** One per page. No period. Optional subtitle on next line.  
- **H2:** One per section. Sentence case. No orphan H2 at bottom of page.  
- **H3:** Sub-section or list group title; can repeat.  
- **Body:** Paragraphs 2–4 sentences; lists for 3+ items.  
- **Captions:** Under diagrams, under metrics, for dates/categories. 1–2 lines.  
- **Footnote:** Clarification or source; 1–2 lines.

---

### What Typography Never Does

- **No bold stacking:** Avoid bold headline immediately above another bold headline without body.  
- **No decorative styles:** No script, blackletter, or novelty fonts for body or structure.  
- **No all-caps body:** No long strings in all caps.  
- **No tiny body:** Body never below 14px for main content.  
- **No mixed hierarchy in one line:** One weight and one size per line unless defined (e.g. inline link).

---

## 4. Diagram-First Language

### How Editorial Pages Replace Photos with Structure

- **Framework diagrams:** Rings, layers, or columns. Each ring/layer/column has a label (1–2 lines). Used for: "How we support X", "Our approach", "Pillars".
- **Process flows:** Linear or branched. Nodes = short labels (1–2 lines). Arrows or sequence numbers. Used for: "From strategy to implementation", "End-to-end process".
- **Matrices:** Rows × columns. Cell = category or label; optional short description. Used for: "Explore related", "Capability × industry", "Use case × outcome".
- **Stats blocks:** Large number + short caption. Grid of 2–4 items. Used for: "By the numbers", "Client impact", "Highlights".
- **Lists as structure:** Numbered or bulleted; each item = title + 1–2 sentences. Used when diagram is not needed: "Five client challenges", "Our tools".

---

### Common Diagram Structures

- **Rings / layers:** 3–4 concentric rings or horizontal layers. Center or top = theme; outer or bottom = detail. Label per ring/layer.  
- **Columns:** 3–5 vertical columns. Header per column; 1–3 bullets or short lines under.  
- **Flow:** Left-to-right or top-to-bottom. 4–7 nodes. Arrow or line between. Label per node.  
- **Matrix:** 2×2 or 3×3 grid. Row and column headers; cells = short label or "—" if N/A.  
- **Stats row/block:** 2–4 cells. Each = number (large) + caption (small). Optional single background.

---

### Label Density and Text Length

- **Per node (framework/flow):** 1–2 lines; 3–8 words per line. No paragraphs inside nodes.  
- **Per stat:** Number (1–5 characters typical) + caption 1–2 lines.  
- **Per matrix cell:** 1–3 words or "Learn more" link.  
- **Alignment:** Labels left-aligned in columns and lists; centered only in rings or single-stat callouts if desired.

---

### Spacing Rules for Diagrams

- **Between nodes:** Consistent gap (e.g. 16–24px).  
- **Between diagram and section title:** 1–1.5rem.  
- **Between diagram and body:** 1rem.  
- **Padding inside container:** 24–32px.

---

### Diagram Patterns StartupAI Should Adopt

| Need | Use | Avoid |
|------|-----|-------|
| Explain approach or pillars | Framework (rings or columns) | Long paragraph only. |
| Explain sequence | Process flow | Numbered list only when flow is trivial. |
| Compare categories | Matrix (e.g. industry × outcome) | Unstructured list. |
| Prove impact or year recap | Stats block (large number + caption) | Chart or graphic when number + caption suffice. |
| List tools or related | Grid of cards (title + 1 line) | Dense table. |
| Deep-dive narrative | Body + H3 + lists | Diagram when structure adds clarity. |

---

### When to Use Which

- **Flow diagram:** When order and dependency matter (e.g. input → analysis → execution → outcome).  
- **Framework:** When 3–5 themes or pillars need to be shown as a set (e.g. technology, enterprise, regulation).  
- **Matrix:** When two dimensions (e.g. industry × use case, or capability × outcome) need to be scanned.  
- **Stats block:** When 4–8 headline numbers with captions tell the story (e.g. year in review, client impact).

---

# PHASE 2 — TRANSLATION TO STARTUPAI

## 1. StartupAI Visual Hierarchy Rules

- **One H1 per page.** Breadcrumb above it when the page is part of a section (e.g. capability or industry).  
- **One H2 per section.** Section = one idea (hero, framework, process, stats, client impact, tools, insights, experts, related).  
- **Emphasis by scale and weight only.** No reliance on color or icons for hierarchy; use for links and CTAs.  
- **Section order:** Hero → narrative/framework → process or list → stats or client impact → tools or insights grid → experts or related → footnote.  
- **Whitespace:** Minimum 2rem (32px) between sections; consistent padding inside containers.  
- **Footnotes and sources:** Always last; smallest type; full-width.

---

## 2. Approved Layout Patterns

| Pattern | Use When | Structure |
|---------|----------|-----------|
| **Hero (minimal)** | Landing or topic page | Breadcrumb, H1, H2, optional CTA. Single column; max-width for text. |
| **Framework section** | Explaining pillars or approach | H2, intro sentence, list or diagram (rings/columns). Single column. |
| **Process section** | Explaining sequence | H2, flow diagram or numbered list. Single column. |
| **Stats block** | Year in review, impact, "by the numbers" | H2, 2–4 cells: large number + caption. Grid; optional tinted background. |
| **Highlights block** | 3–4 pillars (e.g. year in review) | Section title above container; container = 3 (or 4) equal pillars; each = header + content block; footnote below. |
| **Client impact** | Case studies or proof points | H2, 2–4 blocks: metric + title + 1–2 sentences. Grid or list. |
| **Cards grid** | Insights, tools, related services | H2, grid 2–4 cols; card = title + optional image/icon + 1 line + optional link. |
| **Experts** | Team or advisors | H2, grid 2–4 cols; card = photo + name + title + location. |
| **Deep-dive** | Long-form article or guide | H2, body, H3 sub-heads, lists; single column, max-width. |
| **Footnote** | Sources, disclaimers | Full-width; 12px; 1–2 lines. |

---

## 3. Typography Usage Guide (StartupAI)

- **H1:** 40–64px (or 2.5–4rem); bold; sentence case; one per page.  
- **H2:** 24–38px (1.5–2rem); bold; sentence case; one per section.  
- **H3:** 18–20px (1.125–1.25rem); bold; sentence case; sub-sections and card titles.  
- **Body:** 16px (1rem); regular; line height 1.5–1.6; max-width ~65–75 characters.  
- **Caption / small:** 12–14px (0.75–0.875rem); regular; meta, captions under metrics, dates.  
- **Footnote:** 12px (0.75rem); regular; sources only.  
- **Buttons / links:** Same as body or small; weight medium or bold for primary CTA.  
- **Font stack:** Sans-serif (e.g. system UI or Helvetica Neue); no second font for body unless specified.

---

## 4. Diagram-Only Section Types

Use **only** structure and type (no photography) for these section types:

- **Framework:** Rings, layers, or columns with short labels.  
- **Process:** Flow with 4–7 nodes; 1–2 lines per node.  
- **Stats block:** 4–8 metric/caption pairs; large number, small caption.  
- **Highlights:** 3–4 pillars; header + content block per pillar; optional icon.  
- **Matrix:** 2×2 or 3×3 (or 2×N) for "industry × outcome" or "capability × use case".  
- **Related / explore:** Grid of small cards (label + title link).

Imagery (photos, illustrations) is **optional** and secondary; diagrams and stats carry the editorial weight.

---

## 5. What to Avoid (Anti-Patterns)

### Hierarchy
- ❌ Multiple H1s
- ❌ H2 with no body
- ❌ Bold headline stacked on bold headline
- ❌ Hierarchy communicated by color or icon only

### Layout
- ❌ Sidebar for main narrative
- ❌ Asymmetric layout without a defined pattern
- ❌ Tight stacking of sections (no breathing room)

### Typography
- ❌ Body below 14px
- ❌ All-caps body
- ❌ Decorative or script fonts
- ❌ More than two type sizes in one block without a clear rule

### Diagrams
- ❌ Paragraph where a framework or flow would clarify
- ❌ Chart when a stat block (number + caption) suffices
- ❌ Dense labels (paragraphs inside nodes)

### Content
- ❌ Marketing hype in headlines
- ❌ Emojis
- ❌ Vendor names or tool names in headlines (use in body or footnote if needed)

### Sections
- ❌ Orphan H2 at bottom
- ❌ Footnote in the middle of content
- ❌ "Explore related" or experts before main content

---

## 6. Design QA Checklist

Before approving any page:

- [ ] One H1 per page; breadcrumb first when applicable.  
- [ ] One H2 per section; sentence case.  
- [ ] Section order matches approved layout patterns.  
- [ ] Stats block: large number + short caption; no chart unless required.  
- [ ] Framework/process: 1–2 lines per node; consistent spacing.  
- [ ] Body max-width ~65–75 characters; line height 1.5–1.6.  
- [ ] Footnote/sources last; 12px.  
- [ ] No bold stacking; no decorative type; no hierarchy by color only.  
- [ ] Spacing: 2–3rem between sections; consistent padding in containers.

---

## 7. Content-to-Layout Mapping (Quick Reference)

| Content Type | Layout Pattern | Diagram Type |
|--------------|----------------|--------------|
| Landing hero | Hero (minimal) | Optional framework only. |
| "How we support X" | Framework section | Rings or columns. |
| "From A to B" | Process section | Flow. |
| Year in review / impact | Stats block or Highlights block | Stats or 3–4 pillars. |
| Case studies | Client impact | Metric + title + copy per block. |
| Tools, insights, related | Cards grid | Grid; no diagram. |
| Long-form article | Deep-dive | Lists + H3; optional flow. |
| Sources | Footnote | — |

---

## 8. StartupAI-Specific Implementation

### Navigation Structure
```
[StartupAI Logo]    [Services] [Approach] [Insights]    [Get started]
```

- Logo: Text only, no icon required
- Links: Sentence case, subtle hover
- CTA: Green background, white text

---

### Hero Patterns for StartupAI

#### Pattern A: Minimal (Recommended)
```
[Breadcrumb if applicable]

[H1: Primary value proposition]
[H2: One-sentence explanation]

[CTA: Action-oriented button]
```

#### Pattern B: Hero + Diagram
```
┌──────────────────────┐  ┌──────────────────────┐
│ [H1]                 │  │ [Diagram]            │
│ [H2]                 │  │ Process flow or      │
│ [CTA]                │  │ Framework visual     │
└──────────────────────┘  └──────────────────────┘
```

---

### Section Templates

#### Template: Framework Section
```
[H2: Section title]
[Intro sentence: 1–2 lines]

[Diagram: Rings/Columns/Layers]
- Label 1 (1–2 lines)
- Label 2 (1–2 lines)
- Label 3 (1–2 lines)
- Label 4 (1–2 lines)

[Optional body paragraph: 2–4 sentences]
```

---

#### Template: Process Section
```
[H2: Section title]

[Flow Diagram]
Step 01 → Step 02 → Step 03 → Step 04

[Body: Explanation if needed]
```

---

#### Template: Stats Block
```
[H2: Section title]

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ 10×          │  │ 92%          │  │ 3 hours      │
│ Faster       │  │ Find clarity │  │ Saved weekly │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

#### Template: Platform Capabilities (Grid)
```
[H2: Platform capabilities]

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ 01 / Category   │  │ 02 / Category   │  │ 03 / Category   │
│ [Title]         │  │ [Title]         │  │ [Title]         │
│ [1-line desc]   │  │ [1-line desc]   │  │ [1-line desc]   │
│ [CTA link]      │  │ [CTA link]      │  │ [CTA link]      │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

#### Template: Insights Grid
```
[H2: Latest insights]

┌────────────────────────────────────┐
│ [Category label]                   │
│ [H3: Insight title]                │
│ [Description: 1–2 lines]           │
│ [CTA: Read report →]               │
└────────────────────────────────────┘
(Repeat 2–3 times)
```

---

### Footer Structure
```
┌─────────────────────────────────────────────────────┐
│ [Brand]                                             │
│ [Description]                                       │
│                                                     │
│ [Product Links]  [Resources]  [Legal]  [Contact]   │
│                                                     │
│ © 2026 StartupAI. All rights reserved.    EN | JA  │
└─────────────────────────────────────────────────────┘
```

---

## 9. Mobile Responsiveness Rules

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px – 1024px
- **Desktop**: > 1024px

### Mobile Adjustments
- **Hero**: Stack text above diagram
- **Grids**: Collapse to 1–2 columns
- **Stats block**: Stack vertically or 2-column on larger mobile
- **Typography**: Reduce H1 to 48px, H2 to 28px
- **Spacing**: Reduce section padding to py-20 (from py-32)
- **Navigation**: Hamburger menu or simplified links

---

## 10. Color Usage Within Editorial System

### Background Rotation
- **White** (#FFFFFF): 70% of sections
- **Warm Beige** (#F1EEEA): Alternating sections (e.g. Guided Entry)
- **Cool Gray** (#F2F2F2): Occasional contrast (e.g. Stats Block)
- **Warm Neutral** (#DFD7CD): Outcomes/highlights section

### Text Colors
- **Primary**: #212427 (headlines, body)
- **Secondary**: #696969 (subheads, descriptions)
- **Muted**: #898888 (meta labels, captions)

### Accent Usage
- **Primary Green** (#0E3E1B): CTAs, active states, strategic emphasis
- **Soft Green** (#DCF9E3): Highlight backgrounds, active step indicators

### Dark Sections
- **Charcoal** (#212427): Final CTA, footer background
- **White text** on dark background for contrast

---

## 11. Editorial Tone Guidelines

### Headline Writing
- **Sentence case**: "From strategy to daily execution"
- **No exclamation marks**: Never use ! in headlines
- **Em dash** for editorial pause: "Strategy to execution — in one flow"
- **Concise**: 5–12 words maximum
- **Active voice**: "Turn ideas into execution" not "Ideas can be turned"

### Body Copy Style
- **Short paragraphs**: 2–4 sentences
- **No marketing hype**: "faster execution" not "revolutionary speed"
- **Specific over general**: "5-step process" not "comprehensive approach"
- **Strategic language**: Use "framework", "system", "operating system"

### CTA Language
- **Action-oriented**: "Start with your profile" not "Get started"
- **Specific next step**: "Validate idea" not "Learn more"
- **No generic CTAs**: Avoid "Click here", "Submit"

---

## 12. Quality Control Process

### Self-Review (Designer/Developer)
1. Check H1 count (only one)
2. Verify section spacing (2–3rem minimum)
3. Test in grayscale (hierarchy still clear?)
4. Validate text max-widths (65–75 characters)
5. Confirm diagram labels (2–5 words each)

### Peer Review (Design Team)
1. Matches approved layout patterns?
2. Typography scale consistent?
3. Diagrams explain (not decorate)?
4. Feels consulting-grade?

### Final Approval (Design Lead)
1. Strategic messaging clear?
2. BCG-style aesthetic maintained?
3. No anti-patterns present?
4. Mobile responsive?
5. Accessibility standards met?

---

## 13. Maintenance & Evolution

### When to Revisit
- **Quarterly**: Review page performance metrics
- **New sections**: Validate against layout patterns
- **Content updates**: Ensure tone consistency
- **Design tweaks**: Document any pattern changes

### How to Propose Changes
1. Reference this style guide
2. Explain why existing patterns don't work
3. Show mockup following other BCG principles
4. Get design lead approval before implementing
5. Update this document with new patterns

---

## Quick Reference Card

**Typography Scale**
- H1: 40–64px, bold
- H2: 24–38px, bold
- H3: 18–20px, bold
- Body: 16px, regular
- Caption: 12–14px, regular

**Spacing**
- Between sections: 2–3rem (32–48px)
- Inside containers: 1.5–2rem (24–32px)
- Diagram nodes: 16–24px gap

**Color Palette**
- Text: #212427, #696969, #898888
- Accent: #0E3E1B
- Backgrounds: #FFFFFF, #F1EEEA, #F2F2F2, #DFD7CD

**Five Diagram Types**
1. Flow (Process)
2. Framework (Pillars)
3. Layer/Ring (Systems)
4. Matrix (Positioning)
5. Stats (Evidence)

**Golden Rules**
- One H1 per page
- One idea per section
- Diagrams explain, don't decorate
- Hierarchy by scale & weight (not color)
- 2–5 words per diagram label

---

**Document Owner**: Design Systems Team  
**Review Cycle**: Quarterly  
**Related Documentation**:
- `/docs/design/01-visual-system.md` (Comprehensive)
- `/docs/design/03-visual-system.md` (One-page spec)
- `/docs/design/diagram-library.md` (Diagram canon)
- `/docs/design/wireframe.md` (Home V5 wireframe)

---

*End of Visual Style Guide*
