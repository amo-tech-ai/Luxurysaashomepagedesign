# StartupAI — Diagram Library Specification

**Consulting-Grade · Editorial · Diagram-First**

**Version:** 1.0  
**Status:** Canonical  
**Owner:** Design Systems / Product Strategy  
**Last Updated:** January 31, 2026

---

## 1. Purpose of the Diagram Library

The diagram library exists to:

* Replace photography, illustrations, and icons
* Communicate **strategy, systems, and AI logic**
* Maintain a **calm, consulting-grade editorial tone**
* Ensure visual consistency across marketing, product, and docs

> Diagrams are not decoration.  
> Diagrams are the primary language.

---

## 2. Scope

This library defines:

* Allowed diagram types
* Structural rules
* Text constraints
* Usage contexts
* Naming conventions
* QA requirements

This library does **not** define:

* UI components
* Page layouts
* Interactions
* Brand marketing visuals

---

## 3. Global Diagram Rules (Apply to All)

### Visual Rules

* Text + lines only
* No photography
* No illustrations
* No decorative icons
* No shadows or gradients
* No borders (spacing defines structure)

### Structural Rules

* One idea per diagram
* One reading direction (horizontal or vertical)
* Strict alignment
* Generous white space

### Text Rules

* Sentence case only
* 2–5 words per node
* Max 2 lines per label
* No stacked bold
* No color-driven hierarchy

---

## 4. Approved Diagram Types (Library Canon)

StartupAI supports **exactly five diagram types**.

No additional types may be introduced without system review.

---

## 4.1 Flow Diagram — *Process & AI Logic*

**Purpose**  
Explain sequences, workflows, pipelines, and AI reasoning.

**Primary Uses**

* Hero section
* "How it works"
* AI logic explanation
* Founder journey

**Structure**

```
[ Step ] → [ Step ] → [ Step ] → [ Outcome ]
```

**Variants**

* Horizontal (overview)
* Vertical (deep explanation)

**Constraints**

* 3–5 steps max
* Linear only (no branching)
* Equal spacing between nodes

**Example Use**  
StartupAI Core Flow  
Smart Interview Logic  
AI Decision Pipeline

---

## 4.2 Framework Diagram — *Capabilities & Pillars*

**Purpose**  
Group related concepts with equal importance.

**Primary Uses**

* What StartupAI provides
* Strategic dimensions
* Capability mapping

**Structure**

```
[ Pillar ]   [ Pillar ]
[ Pillar ]   [ Pillar ]
```

**Variants**

* 2×2
* 1×3
* 1×4

**Constraints**

* All blocks equal visual weight
* Short labels only
* No featured or highlighted block

**Example Use**  
Strategy / Intelligence / Execution / Investor Readiness

---

## 4.3 Layer / Ring Diagram — *System Thinking*

**Purpose**  
Explain systems with a core purpose and supporting layers.

**Primary Uses**

* Operating system logic
* AI + Human + System
* Strategy → Execution → Outcomes

**Structure**

```
[ OUTER ]  Enablers
[ MIDDLE ] System
[ CENTER ] Purpose
```

**Constraints**

* Maximum 3 layers
* Meaning always in the center
* Outer layers explain support, not features

**Example Use**  
StartupAI Operating System  
AI Reasoning Stack

---

## 4.4 Matrix Diagram — *Positioning & Trade-offs*

**Purpose**  
Show contrast, positioning, or before/after states.

**Primary Uses**

* Manual vs AI-guided
* Before vs after StartupAI
* Industry positioning

**Structure**

```
          High
            ↑
   ●
            |
 Low ─────────────→ High
        X Axis
```

**Constraints**

* Maximum 4 plotted points
* Labels > legends
* Minimal or no gridlines

**Example Use**  
Scattered → Strategic  
Manual → Guided

---

## 4.5 Stats & Evidence Block — *Credibility*

**Purpose**  
Present outcomes, signals, and benchmarks.

**Primary Uses**

* Results sections
* AI year in review
* Proof points

**Structure**

```
BIG NUMBER
Short explanation
```

**Variants**

* Single
* Pair
* Row (3–4 max)

**Constraints**

* Numbers dominate visually
* Text explains context
* No icons required

**Example Use**  
10× faster decision-making  
3 hours saved per week  
92% find clarity faster

---

## 5. Diagram-to-Content Mapping

| Content Type       | Diagram Type |
| ------------------ | ------------ |
| Hero               | Flow         |
| How It Works       | Flow         |
| Strategy Model     | Framework    |
| Operating System   | Layer        |
| Industry Use Cases | Matrix       |
| Outcomes / Proof   | Stats        |

---

## 6. Color Usage (Supporting Only)

Color never leads meaning.

**Rules**

* ~70% white background
* Text remains primary carrier of meaning
* Green (`#0E3E1B`) only for:
  * CTAs
  * Key emphasis (sparingly)
* Soft green (`#DCF9E3`) for subtle highlights only

**Never**

* Color-coded categories
* Gradients (except subtle backgrounds)
* Bright accent colors
* Color as the only differentiator

---

## 7. Naming Convention (Mandatory)

All diagram components must use this structure:

```
Diagram / Flow / Horizontal
Diagram / Flow / Vertical
Diagram / Framework / 2x2
Diagram / Framework / 1x3
Diagram / Layer / 3-Ring
Diagram / Matrix / 2-Axis
Diagram / Stats / Single
Diagram / Stats / Row
```

**Format**: `Diagram / [Type] / [Variant]`

**No exceptions** to this naming structure.

---

## 8. Figma File Structure (Required)

```
📁 StartupAI — Diagram Library
 ├─ 00 Usage Rules
 ├─ 01 Flow Diagrams
 ├─ 02 Framework Diagrams
 ├─ 03 Layer / Ring Diagrams
 ├─ 04 Matrix Diagrams
 └─ 05 Stats & Evidence Blocks
```

Each page contains:

* Base components
* Variants
* Usage notes
* Real content examples

---

## 9. Quality Assurance Checklist

Every diagram must pass:

- [ ] Explains one idea only
- [ ] Readable in 5 seconds
- [ ] Works in grayscale
- [ ] No dependency on color
- [ ] Feels appropriate in a board deck

If **any fail → simplify or remove**.

---

## 10. Prohibited Elements

The following are **never allowed** in StartupAI diagrams:

* Photography
* Character illustrations
* Decorative icons
* Mascots or brand characters
* Stock imagery
* Abstract shapes without meaning
* 3D effects or isometric views
* Decorative patterns or textures
* Emoji or informal graphics

---

## 11. Review & Approval Process

### New Diagram Creation

1. **Content strategist** identifies need
2. **Designer** selects from 5 approved types
3. **Design lead** reviews against QA checklist
4. **Product** approves if strategic fit is clear

### Adding New Diagram Types

New diagram types require:

* Executive design review
* Strategic justification (why existing 5 don't work)
* Minimum 5 planned uses across product
* Alignment with consulting-grade aesthetic

**Default answer**: Use existing 5 types.

---

## 12. Usage by Role

### Designers

* Use Figma library components
* Never create diagrams from scratch
* Always start with approved type
* Label overrides only (no structural changes)

### Developers

* Implement diagrams as SVG or semantic HTML
* Maintain exact spacing specifications
* Ensure responsive scaling
* No CSS animations or transitions

### Content Writers

* Write concise labels (2–5 words)
* Specify diagram type when requesting
* Reference section 5 mapping table
* Avoid requesting custom diagram structures

### Product Managers

* Use diagrams to communicate strategy
* Reference this spec when briefing design
* Enforce QA checklist in reviews

---

## 13. Maintenance

### Review Cycle

* **Monthly**: Usage audit (which diagrams used most/least)
* **Quarterly**: System review (are 5 types sufficient?)
* **Annually**: Full library refresh (update examples, refine specs)

### Version Control

* Figma library versioning enabled
* Change log maintained in file description
* Breaking changes announced 2 weeks prior
* Migration guide provided for updates

---

## 14. Related Documentation

* **Comprehensive guide**: `/docs/design/01-visual-system.md`
* **Quick reference**: `/docs/design/03-visual-system.md`
* **Practical implementation**: `/docs/design/04-diagram-starter-kit.md`
* **Page wireframes**: `/docs/design/wireframe.md`

This document is the **canonical specification**.  
When in conflict, this document takes precedence.

---

## 15. Design Intent (Final)

StartupAI diagrams should feel like:

> **Partner-level consulting slides**  
> Calm, precise, and strategy-driven.

Not SaaS UI.  
Not marketing visuals.  
**Thinking, made visible.**

---

## Appendix A: Example Diagram Labels (Reference)

### Flow Diagram Examples

**Hero Flow**:
* Profile → Strategy → Execution → Investor Readiness

**AI Process**:
* Input data → AI analyzes → Smart interview → Recommendations → Dashboard

**Onboarding Journey**:
* Create profile → Market analysis → Strategy refinement → Action plan

---

### Framework Diagram Examples

**What StartupAI Provides (2×2)**:
* Strategy clarity
* Market intelligence
* Structured execution
* Investor readiness

**Platform Capabilities (1×3)**:
* AI pitch deck generator
* Startup validator
* Execution dashboard

**Outcomes (1×4)**:
* Clear positioning
* Faster execution
* Stronger narrative
* Fewer wasted cycles

---

### Layer Diagram Examples

**Operating System (3-ring)**:
* Center: Founder clarity
* Middle: AI workflows
* Outer: Tools & data

**Strategy System (3-ring)**:
* Center: Strategic positioning
* Middle: Execution framework
* Outer: Investor outputs

---

### Matrix Diagram Examples

**Positioning**:
* X-axis: Manual → Guided
* Y-axis: Reactive → Strategic
* Plot: Traditional tools (bottom-left), StartupAI (top-right)

**Before/After**:
* X-axis: Scattered → Structured
* Y-axis: Unclear → Clear
* Quadrants: Before (bottom-left), After (top-right)

---

### Stats Block Examples

**Quantified**:
* 3× faster to pitch deck
* 10 hours saved per week
* 92% find PMF clarity faster

**Qualitative**:
* Clear positioning
* Faster execution
* Stronger investor narrative
* Fewer wasted cycles

---

**Document Status**: Canonical reference  
**Approval Required**: Yes (for any changes)  
**Next Review**: Q2 2026

---

*End of Diagram Library Specification*
