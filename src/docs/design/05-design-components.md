# StartupAI — Diagram Library

## Figma-Ready Component Checklist

**Scope**  
Diagram components only.  
No UI screens. No marketing visuals.

**Version**: 1.0  
**Last Updated**: January 31, 2026

---

## 0. Global Setup (Required First)

### Pages

Create **one Figma file** with these pages:

```
00 — Usage Rules
01 — Flow Diagrams
02 — Framework Diagrams
03 — Layer / Ring Diagrams
04 — Matrix Diagrams
05 — Stats & Evidence Blocks
```

---

### Shared Styles (Create Once)

#### Color Styles

* Text / Primary — `#212427`
* Text / Secondary — `#696969`
* Text / Muted — `#898888`
* Accent / Primary — `#0E3E1B`
* Accent / Soft — `#DCF9E3`
* Background / White — `#FFFFFF`
* Background / Soft — `#F1EEEA`

> ⚠️ No gradients, no shadows, no borders.

---

#### Text Styles

Create **only these**:

* Diagram / Title
* Diagram / Label
* Diagram / Axis
* Diagram / Caption

Rules:

* Sentence case only
* No all-caps
* No italics
* No decorative weights

---

## 1. Flow Diagram Components

📍 **Page:** `01 — Flow Diagrams`

### Components to Create

#### ☐ Flow / Node

* Auto-layout: vertical
* Padding: generous (24–32px)
* Text style: Diagram / Label
* Max 2 lines of text

#### ☐ Flow / Connector

* Straight line only
* 1px stroke
* No arrows with decoration
* Arrowhead optional, minimal

#### ☐ Flow / Horizontal

* 3–5 nodes max
* Equal spacing
* Center aligned

#### ☐ Flow / Vertical

* Stack nodes
* Clear rhythm between steps

---

### Required Variants

* Default
* Compact (for mobile / dense content)

---

## 2. Framework Diagram Components

📍 **Page:** `02 — Framework Diagrams`

### Components to Create

#### ☐ Framework / Block

* Rectangle
* No border
* Background: white or soft neutral
* Text: Title + 1 line description max

#### ☐ Framework / 2×2

* Auto-layout grid
* Equal width + height blocks

#### ☐ Framework / 1×3

* Horizontal row
* Equal emphasis

#### ☐ Framework / 1×4

* Horizontal row
* Used sparingly

---

### Rules

* All blocks visually equal
* No "featured" card
* No icons inside blocks

---

## 3. Layer / Ring Diagram Components

📍 **Page:** `03 — Layer / Ring Diagrams`

### Components to Create

#### ☐ Ring / Outer

* Stroke only
* Light neutral color

#### ☐ Ring / Middle

* Slightly darker stroke

#### ☐ Ring / Center

* Filled or emphasized text only
* Holds the *core idea*

#### ☐ Ring / Label

* Centered text
* Max 2 words

---

### Rules

* Meaning always starts in the center
* Outer rings explain support, not features
* No more than 3 rings total

---

## 4. Matrix Diagram Components

📍 **Page:** `04 — Matrix Diagrams`

### Components to Create

#### ☐ Matrix / Axis

* Horizontal + vertical
* Minimal ticks (or none)

#### ☐ Matrix / Axis Label

* Positioned at ends
* Text only

#### ☐ Matrix / Point

* Simple dot or small square
* Max 4 points per matrix

#### ☐ Matrix / Quadrant Label (optional)

* Light text
* One word only

---

### Rules

* Labels > legends
* No background grids
* Comparison must be obvious in 5 seconds

---

## 5. Stats & Evidence Blocks

📍 **Page:** `05 — Stats & Evidence Blocks`

### Components to Create

#### ☐ Stat / Single

* Large number
* One supporting line

#### ☐ Stat / Pair

* Two stats side-by-side
* Equal emphasis

#### ☐ Stat / Row (3–4)

* Horizontal rhythm
* Used for outcome sections

---

### Rules

* Number dominates visually
* Text explains *why it matters*
* No icons required

---

## 6. Naming Convention (Strict)

Use **this exact structure**:

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

---

## 7. Auto-Layout & Responsiveness Rules

* All components must:
  * Use auto-layout
  * Resize cleanly
  * Support text overrides
* No absolute positioning
* No fixed pixel widths unless necessary

---

## 8. Final QA Checklist (Before Publishing Library)

Every component must pass:

- [ ] Works in grayscale
- [ ] Understandable without context
- [ ] Explains **one idea only**
- [ ] No visual dependency on color
- [ ] Matches editorial tone

If **any fail → simplify**.

---

## Outcome

This checklist produces a **diagram-first visual system** that makes StartupAI feel:

* Strategic
* Editorial
* Consulting-grade
* Calm and authoritative

> **These diagrams should feel like partner-level slides — not product UI.**

---

**Document Type**: Implementation Checklist  
**Audience**: Designers (Figma users)  
**Related**: `/docs/design/diagram-library.md` (canonical spec)

---

*End of Component Checklist*
