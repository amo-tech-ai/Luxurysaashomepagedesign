# Color System Quick Reference

**StartupAI Design System**  
**Last Updated**: January 31, 2026

---

## Brand Color Palette

### **Neutrals** (Backgrounds & Text)

```
#FFFFFF  ███████  White         - Primary background
#FAF9F7  ███████  Cream         - Subtle background tint
#F5F3EF  ███████  Beige         - Alternate background
#F1EEEA  ███████  Gray Light    - Section backgrounds
#E5E7EB  ███████  Gray Medium   - Borders
#898888  ███████  Gray Tertiary - Tertiary text
#696969  ███████  Gray Secondary- Secondary text
#212427  ███████  Charcoal      - Primary text / dark cards
```

---

### **Pastel Greens** (Backgrounds Only)

```
#E8F5E9  ███████  Sage Light    - Card backgrounds, section tints
#DCF9E3  ███████  Mint Light    - Card backgrounds, highlights
#C1E8D0  ███████  Mint Medium   - Data viz bars, subtle backgrounds
#D4EDE1  ███████  Sage Pale     - Reserved for future use
```

**Usage**:
- ✅ Card backgrounds
- ✅ Section tints
- ✅ Subtle highlights
- ✅ Data visualization fills
- ❌ NOT for text
- ❌ NOT for CTAs
- ❌ NOT for icons

---

### **Accent Greens** (Interactive Elements Only)

```
#0E3E1B  ███████  Dark Emerald       - High-contrast CTAs, dark sections
#0d5f4e  ███████  Primary Accent     - Main CTAs, active states, circular arrows
#0a4a3d  ███████  Primary Hover      - Hover state for primary accent
#084033  ███████  Primary Active     - Active/pressed state
#6b9d89  ███████  Secondary Accent   - Secondary CTAs, supporting elements
#5d8a78  ███████  Secondary Hover    - Hover state for secondary accent
```

**Usage Rules**:

✅ **Use green for**:
- Primary call-to-action buttons
- Progress indicators and status markers
- Active states in timelines and workflows
- Hover states on interactive elements
- Strategic highlighting of key metrics
- Circular arrow CTAs (BCG style)

❌ **Never use green for**:
- Decorative purposes
- Generic borders without purpose
- Icons without interactive meaning
- Body text
- Non-interactive elements

---

## Component Color Mapping

### **Buttons**

**Primary CTA**:
```css
background: #0d5f4e
text: #ffffff
hover: #0a4a3d
active: #084033
```

**Secondary CTA**:
```css
background: #6b9d89
text: #ffffff
hover: #5d8a78
```

**Dark CTA (Hero)**:
```css
background: #0E3E1B
text: #ffffff
hover: #0a2f14
```

**Outlined CTA**:
```css
border: 2px solid #0d5f4e
color: #0d5f4e
background: transparent
hover-background: #0d5f4e
hover-text: #ffffff
```

---

### **Cards**

**Pastel Mint Card**:
```css
background: #DCF9E3
text: #212427
border: #E5E7EB (optional)
```

**Pastel Sage Card**:
```css
background: #E8F5E9
text: #212427
border: #E5E7EB (optional)
```

**Dark Card**:
```css
background: #212427
text: #ffffff
```

**White Card**:
```css
background: #ffffff
text: #212427
border: #E5E7EB
```

---

### **Circular Arrow CTAs**

```css
background: #0d5f4e
hover: #0a4a3d
icon-color: #ffffff
size: 48px (w-12 h-12)
```

---

### **Timeline Indicators**

**Active Step**:
```css
border: 2px solid #0d5f4e
background: #0d5f4e
```

**Inactive Step**:
```css
border: 2px solid #0d5f4e
background: #ffffff
```

**Completed Step**:
```css
border: 2px solid #0d5f4e
background: #0d5f4e
checkmark: #ffffff
```

---

### **Highlighted Sections**

**Active Card in Diagram**:
```css
background: #DCF9E3
label-color: #0E3E1B
text-color: #0E3E1B
```

**Icon Background (Mint)**:
```css
background: #DCF9E3
icon-color: #0E3E1B
size: 64px (w-16 h-16)
rounded: full
```

**Icon Background (Sage)**:
```css
background: #E8F5E9
icon-color: #0E3E1B
size: 64px (w-16 h-16)
rounded: full
```

---

### **Data Visualization**

**Bar Chart Colors** (Light → Dark progression):
```css
Bar 1: #C1E8D0  /* Mint medium - lightest */
Bar 2: #6b9d89  /* Secondary accent */
Bar 3: #0d5f4e  /* Primary accent */
Bar 4: #0E3E1B  /* Dark emerald - darkest */
```

**Large Stat Numbers**:
```css
color: #0d5f4e (primary accent)
OR
color: #0E3E1B (dark emerald for max contrast)
size: 48-64px
weight: 200-300 (extralight/light)
```

---

### **Gradients**

**Final CTA Gradient**:
```css
background: linear-gradient(135deg, #0E3E1B 0%, #6b9d89 100%)
text: #ffffff
```

**Hero Subtle Gradient** (optional):
```css
background: linear-gradient(to bottom, #ffffff 0%, #FAF9F7 100%)
```

---

## Hover States

### **Interactive Cards**

```css
default: bg-white
hover: bg-[#DCF9E3]
transition: 300ms
```

### **Text Links**

```css
default: text-[#696969]
hover: text-[#0d5f4e]
transition: 200ms
```

### **Icons in Groups**

```css
default: text-[#898888]
hover: text-[#0d5f4e]
transition: 200ms
```

---

## Accessibility - Contrast Ratios

### **On White Background (#ffffff)**

| Color | Ratio | WCAG Level | Usage |
|-------|-------|------------|-------|
| #0E3E1B (Dark Emerald) | 11.2:1 | AAA | All text sizes |
| #0d5f4e (Primary Accent) | 5.8:1 | AA | Large text (18px+), buttons |
| #6b9d89 (Secondary Accent) | 3.2:1 | - | Large text only (24px+) |
| #212427 (Charcoal) | 15.8:1 | AAA | All text sizes |
| #696969 (Gray Secondary) | 4.6:1 | AA | Body text |

### **On Pastel Backgrounds**

| Background | Text Color | Ratio | WCAG |
|------------|-----------|-------|------|
| #DCF9E3 (Mint) | #212427 (Charcoal) | 13.8:1 | AAA |
| #DCF9E3 (Mint) | #0E3E1B (Dark Emerald) | 9.8:1 | AAA |
| #E8F5E9 (Sage) | #212427 (Charcoal) | 14.1:1 | AAA |
| #E8F5E9 (Sage) | #0E3E1B (Dark Emerald) | 10.1:1 | AAA |

---

## Typography Color Pairing

### **Headlines**

```css
/* Primary */
color: #212427 (charcoal)
weight: 200-300 (extralight/light)

/* On dark backgrounds */
color: #ffffff
weight: 200-300
```

### **Body Text**

```css
/* Primary */
color: #212427 (charcoal)
weight: 400 (regular)

/* Secondary */
color: #696969 (gray secondary)
weight: 400
```

### **Tertiary/Caption**

```css
color: #898888 (gray tertiary)
weight: 400
size: 12-14px
```

---

## Do's and Don'ts

### ✅ **Do**

- Use primary accent (#0d5f4e) for all main CTAs
- Use pastel backgrounds (#DCF9E3, #E8F5E9) for card variety
- Use charcoal (#212427) for primary text
- Use dark emerald (#0E3E1B) for high-contrast CTAs
- Use gradients sparingly (1 per page max)
- Maintain consistent hover states
- Use green strategically for growth/trust signals

### ❌ **Don't**

- Don't use green decoratively
- Don't mix multiple green shades in same context
- Don't use pastels for text or icons
- Don't use bright greens outside approved palette
- Don't create new green variants
- Don't use green for errors (use system red)
- Don't use green borders without interactive purpose

---

## Color Variables (Tailwind)

### **Paste These Into Code**

```tsx
// Neutrals
bg-white
bg-[#FAF9F7]     // cream
bg-[#F5F3EF]     // beige
bg-[#F1EEEA]     // gray-light
bg-[#212427]     // charcoal

text-[#212427]   // charcoal
text-[#696969]   // gray-secondary
text-[#898888]   // gray-tertiary

// Pastel Backgrounds
bg-[#DCF9E3]     // mint-light
bg-[#E8F5E9]     // sage-light
bg-[#C1E8D0]     // mint-medium

// Accent Greens (Interactive Only)
bg-[#0E3E1B]     // dark-emerald
bg-[#0d5f4e]     // primary-accent
hover:bg-[#0a4a3d]  // primary-hover
bg-[#6b9d89]     // secondary-accent
hover:bg-[#5d8a78]  // secondary-hover

text-[#0d5f4e]   // primary-accent
text-[#0E3E1B]   // dark-emerald

border-[#0d5f4e] // primary-accent
```

---

## Common Patterns

### **Hero CTA Button**
```tsx
className="px-8 py-4 bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white rounded-lg"
```

### **Circular Arrow CTA**
```tsx
className="w-12 h-12 rounded-full bg-[#0d5f4e] hover:bg-[#0a4a3d] flex items-center justify-center"
```

### **Pastel Card**
```tsx
className="bg-[#DCF9E3] p-12 rounded-xl"
```

### **Active Timeline Step**
```tsx
className="border-2 border-[#0d5f4e] bg-[#0d5f4e]"
```

### **Gradient Section**
```tsx
style={{ background: 'linear-gradient(135deg, #0E3E1B 0%, #6b9d89 100%)' }}
```

---

**Quick Tip**: When in doubt, use `#0d5f4e` (primary accent) for interactive green elements and `#212427` (charcoal) for text.

---

**Last Updated**: January 31, 2026  
**Status**: Official Brand Guidelines
