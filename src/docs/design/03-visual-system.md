# StartupAI — Editorial Visual System

**One-Page Internal Design Spec**

**Version**: 1.0  
**Last Updated**: January 31, 2026  
**Status**: Active

---

## Purpose

Ensure every StartupAI page feels **consulting-grade, calm, and diagram-led**, aligned with BCG-style editorial systems.

---

## Scope

Layout rules, diagram usage, typography hierarchy.  
**Not a UI kit. Not a component library.**

---

## 1. Core Layout Model (Non-Negotiable)

StartupAI uses **editorial layout logic**, not SaaS marketing layouts.

### Default Page Structure

```
[ Section Intro ]
[ Diagram or Framework ]
[ Supporting Explanation ]
[ Optional Outcome / CTA ]
```

### Layout Rules

* One idea per section
* Vertical flow only
* Space separates meaning (never borders)
* Diagrams replace imagery everywhere

---

## 2. Visual Hierarchy Rules

Hierarchy is created using **order, spacing, and scale** only.

### Hierarchy Order (Always)

1. Editorial headline
2. Strategic subhead
3. Diagram or framework
4. Supporting explanation
5. Optional CTA or reference

### Never

* Competing focal points
* Stacked bold text
* Decorative emphasis

---

## 3. Typography Usage (Reference)

### Font

* `henderson-bcg-sans`
* Fallback: Helvetica Neue / Helvetica / Arial

### Type Roles

* **H1** — Editorial statement (sentence case)
* **H2** — Section framing
* **H3** — Diagram title / label group
* **Body** — Calm, high line-height
* **Meta** — Captions, references

### Rules

* Sentence case only
* No decorative styles
* No visual noise

---

## 4. Diagram Library Blueprint

StartupAI uses **five approved diagram types**.  
Nothing else.

---

### A. Flow Diagram (Process)

**Purpose**  
Explain sequences, AI workflows, execution paths.

**Used For**

* StartupAI flow
* AI analysis → output
* Founder journey

**Structure**

```
Step → Step → Step → Outcome
```

**Rules**

* Linear or vertical only
* 2–5 words per node
* Lines + labels only
* No icons required

---

### B. Framework Diagram (Conceptual Model)

**Purpose**  
Group ideas, capabilities, or strategy pillars.

**Used For**

* What StartupAI provides
* Strategic dimensions
* Capability maps

**Structure**

```
[ Pillar ] [ Pillar ]
[ Pillar ] [ Pillar ]
```

**Rules**

* Equal visual weight
* Short labels
* Symmetry preferred but not forced

---

### C. Layer / Ring Diagram (System Thinking)

**Purpose**  
Explain systems with a core and enablers.

**Used For**

* Operating system logic
* AI + Human + System
* Strategy → Execution → Outcomes

**Structure**

```
[ OUTER: Enablers ]
[ MIDDLE: System ]
[ CENTER: Purpose ]
```

**Rules**

* Center is always meaning
* Outer layers explain support
* No dense text inside rings

---

### D. Matrix Diagram (Comparison / Positioning)

**Purpose**  
Show tradeoffs, positioning, contrasts.

**Used For**

* Industry comparisons
* Before / after
* Manual vs AI-guided

**Structure**

```
Y Axis
│
│     ●
│
└──────── X Axis
```

**Rules**

* Minimal axes
* Labels > legends
* No decorative gridlines

---

### E. Stats / Evidence Block

**Purpose**  
Provide proof, outcomes, credibility.

**Used For**

* Results
* Benchmarks
* Efficiency gains

**Structure**

```
BIG NUMBER
Short explanation
```

**Rules**

* Numbers dominate
* Text supports
* No icons needed

---

## 5. Diagram Usage Mapping (StartupAI)

| Content Type       | Diagram Type |
| ------------------ | ------------ |
| Hero               | Flow         |
| How it Works       | Flow         |
| Strategy Model     | Framework    |
| Operating System   | Layer        |
| Industry Use Cases | Matrix       |
| Outcomes           | Stats        |

---

## 6. Color Usage (Supporting Only)

Color never leads hierarchy.

* **~70% white** — default background
* **Green** (`#0E3E1B`) for:
  * Primary CTAs
  * Key emphasis
* **Soft green** (`#DCF9E3`) for highlights only
* **No gradients** except subtle section contrast

---

## 7. Anti-Patterns (Hard No)

StartupAI must **never** use:

* Photography
* Illustrations
* Feature cards
* Icon-heavy explanations
* "Playful" AI visuals
* SaaS-style marketing layouts

---

## 8. Figma Page Structure (Required)

Every design file must follow this structure:

```
📄 StartupAI — Page Name
 ├─ 01 Header / Hero
 ├─ 02 Section — Strategy
 ├─ 03 Section — Framework
 ├─ 04 Section — Process
 ├─ 05 Section — Outcomes
 └─ 06 CTA / Close
```

### Figma Diagram Pages

Create **one shared library file**:

```
📁 Diagram Library
 ├─ Flow Diagrams
 ├─ Frameworks
 ├─ Layers / Rings
 ├─ Matrices
 └─ Stats Blocks
```

Each diagram:

* Text-only
* Editable labels
* No embedded styling overrides

---

## 9. Design QA Checklist (Final Gate)

Before approving any page:

- [ ] Can the diagram explain the idea without narration?
- [ ] Is there only one primary message per section?
- [ ] Does hierarchy work without color?
- [ ] Does it feel calm, editorial, and strategic?

If **any answer is no → revise**.

---

## Final Intent

StartupAI should feel like:

> **A BCG-level strategic publication**  
> that happens to be interactive and AI-powered.

---

**Document Type**: Quick Reference Guide  
**Audience**: Designers, Developers, Content Strategists  
**Companion Doc**: `/docs/design/01-visual-system.md` (comprehensive version)

---

*End of One-Page Design Spec*
