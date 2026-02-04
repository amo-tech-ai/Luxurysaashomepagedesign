# StartupAI Accent Color System

**Last Updated**: January 31, 2026  
**Status**: Official Brand Guidelines

---

## Green Accent System (Exclusive)

### **Primary Accent**
- **Color**: Deep emerald green
- **Hex**: `#0d5f4e`
- **Usage**: Primary call-to-action buttons, key interactive elements

### **Secondary Accent**
- **Color**: Sage green
- **Hex**: `#6b9d89`
- **Usage**: Secondary CTAs, hover states, supporting elements

---

## Usage Philosophy

> **Green communicates growth, intelligence, and trust—never as decoration**

The green accent system is used **exclusively** for:

1. ✅ **Primary call-to-action buttons**
   - "Get started" buttons
   - "Start building" CTAs
   - Main conversion actions

2. ✅ **Progress indicators and status markers**
   - Timeline active states
   - Completion indicators
   - Success messages

3. ✅ **Active states in timelines and workflows**
   - Current step highlighting
   - Active navigation items
   - Selected states

4. ✅ **Hover states on interactive elements**
   - Button hover effects
   - Card hover accents
   - Link underlines

5. ✅ **Strategic highlighting of key phrases**
   - Important metrics in text
   - Emphasized concepts
   - Call-out text

---

## What NOT to Use Green For

❌ **Decorative borders**  
❌ **Background fills (except for pastel variants)**  
❌ **Icons without purpose**  
❌ **Dividers or separators**  
❌ **Generic illustrations**

---

## Color Variants

### **Primary Accent (#0d5f4e)**

**Lighter Variants**:
- Hover state: `#0a4a3d` (darker for depth)
- Active state: `#084033` (darkest)

**Usage Examples**:
```tsx
// Primary CTA button
className="bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white"

// Circular arrow CTA
className="bg-[#0d5f4e] hover:bg-[#0a4a3d]"

// Active timeline indicator
className="border-2 border-[#0d5f4e] bg-[#0d5f4e]"
```

---

### **Secondary Accent (#6b9d89)**

**Usage Examples**:
```tsx
// Secondary CTA
className="bg-[#6b9d89] hover:bg-[#5d8a78] text-white"

// Hover state on light backgrounds
className="hover:text-[#6b9d89]"

// Supporting elements
className="border-[#6b9d89]"
```

---

## Pastel Green Variants (Backgrounds Only)

These are NOT accent colors—they are neutral background tints:

### **Mint Light**
- **Hex**: `#DCF9E3`
- **Usage**: Card backgrounds, section tints
- **Not for**: CTAs, active states, icons

### **Sage Light**
- **Hex**: `#E8F5E9`
- **Usage**: Card backgrounds, section tints
- **Not for**: CTAs, active states, icons

### **Mint Medium**
- **Hex**: `#C1E8D0`
- **Usage**: Data visualization bars, subtle backgrounds
- **Not for**: CTAs, text, icons

---

## Dark Emerald (Special Case)

### **Dark Emerald**
- **Hex**: `#0E3E1B`
- **Usage**: Very dark green for high-contrast CTAs and gradients
- **Not for**: Body text, small elements

**When to Use**:
- Hero CTA buttons (maximum contrast)
- Dark sections with white text
- Gradient backgrounds (start color)

---

## Approved Color Combinations

### **Primary CTA**
```css
background: #0d5f4e;
color: #ffffff;
hover: #0a4a3d;
```

### **Secondary CTA**
```css
background: #6b9d89;
color: #ffffff;
hover: #5d8a78;
```

### **Outlined CTA**
```css
border: 2px solid #0d5f4e;
color: #0d5f4e;
background: transparent;
hover-background: #0d5f4e;
hover-color: #ffffff;
```

### **Text Link**
```css
color: #0d5f4e;
hover: #0a4a3d;
text-decoration: underline;
```

---

## Gradient Usage

### **Emerald Gradient (Final CTA)**
```css
background: linear-gradient(135deg, #0E3E1B 0%, #6b9d89 100%);
```

**When to Use**:
- Final conversion section
- Hero backgrounds (subtle)
- Feature highlights

**Rules**:
- Always dark → light (left to right)
- Always use with white text
- Maximum 1 gradient per page

---

## Accessibility

### **Contrast Ratios**

**Primary Accent (#0d5f4e) on White**:
- Ratio: 5.8:1 ✅ (AA Large Text)
- Use for: Buttons, large text (18px+)

**Primary Accent (#0d5f4e) on Light Pastels**:
- On #DCF9E3: 4.9:1 ✅ (AA Large Text)
- On #E8F5E9: 5.1:1 ✅ (AA Large Text)

**Dark Emerald (#0E3E1B) on White**:
- Ratio: 11.2:1 ✅ (AAA Normal Text)
- Use for: All text sizes, buttons, icons

**White on Primary Accent**:
- Ratio: 5.8:1 ✅ (AA Normal Text)
- Use for: Button text, reversed text

---

## Component-Specific Guidelines

### **Buttons**

**Primary Button**:
```tsx
<button className="px-8 py-4 bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white rounded-lg transition-colors">
  Call to Action
</button>
```

**Secondary Button**:
```tsx
<button className="px-8 py-4 bg-[#6b9d89] hover:bg-[#5d8a78] text-white rounded-lg transition-colors">
  Secondary Action
</button>
```

**Outlined Button**:
```tsx
<button className="px-8 py-4 border-2 border-[#0d5f4e] text-[#0d5f4e] hover:bg-[#0d5f4e] hover:text-white rounded-lg transition-all">
  Learn More
</button>
```

---

### **Circular Arrow CTAs (BCG Style)**

```tsx
<div className="w-12 h-12 rounded-full bg-[#0d5f4e] hover:bg-[#0a4a3d] flex items-center justify-center transition-colors cursor-pointer">
  <ArrowRight className="w-6 h-6 text-white" />
</div>
```

**Rules**:
- Always use primary accent (#0d5f4e)
- White arrow icon
- Hover darkens to #0a4a3d
- Smooth transition (200-300ms)

---

### **Timeline/Process Indicators**

**Active Step**:
```tsx
<div className="w-6 h-6 rounded-full border-2 border-[#0d5f4e] bg-[#0d5f4e]" />
```

**Inactive Step**:
```tsx
<div className="w-6 h-6 rounded-full border-2 border-[#0d5f4e] bg-white" />
```

**Step Label (Active)**:
```tsx
<div className="text-xs uppercase tracking-wider text-[#0d5f4e]">Step 03</div>
```

---

### **Highlighted Sections**

**Active Card in Diagram**:
```tsx
<div className="px-8 py-6 bg-[#DCF9E3] border border-gray-200">
  <div className="text-xs uppercase text-[#0E3E1B]">03</div>
  <div className="text-base font-medium text-[#0E3E1B]">Execution</div>
</div>
```

---

### **Interactive Hover States**

**Card Hover**:
```tsx
<div className="bg-white hover:bg-[#DCF9E3] border border-gray-200 transition-colors">
  {/* Card content */}
</div>
```

**Text Link Hover**:
```tsx
<a className="text-[#696969] hover:text-[#0d5f4e] transition-colors">
  Link Text
</a>
```

**Icon Hover**:
```tsx
<ArrowRight className="text-[#898888] group-hover:text-[#0d5f4e] transition-colors" />
```

---

## Data Visualization

### **Bar Charts**

**Color Progression** (Light → Dark):
```css
Bar 1: #C1E8D0  /* Mint medium */
Bar 2: #6b9d89  /* Sage (secondary accent) */
Bar 3: #0d5f4e  /* Primary accent */
Bar 4: #0E3E1B  /* Dark emerald */
```

**Rules**:
- Use green palette exclusively
- Progress from light to dark
- Maximum 4 shades per chart
- White or light gray background

---

## Stats & Metrics

**Large Numbers**:
```tsx
<div className="text-6xl font-extralight text-[#0d5f4e]">
  10,000+
</div>
```

**Rules**:
- Use primary accent (#0d5f4e) for emphasis
- Or dark emerald (#0E3E1B) for maximum contrast
- Never use pastel greens for large numbers

---

## Migration from Previous System

### **Colors to Remove**:
- ❌ `#00C853` (bright green - not in brand palette)
- ❌ Any blues, purples, reds
- ❌ Generic green shades not in approved list

### **Colors to Replace With**:
- Bright green CTAs → `#0d5f4e`
- Generic greens → `#0d5f4e` or `#6b9d89`
- Success messages → `#0d5f4e`

---

## Quick Reference

### **Approved Green Palette**

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Dark Emerald** | `#0E3E1B` | High-contrast CTAs, gradients |
| **Primary Accent** | `#0d5f4e` | Main CTAs, active states, icons |
| **Primary Hover** | `#0a4a3d` | Hover state for primary |
| **Secondary Accent** | `#6b9d89` | Secondary CTAs, supporting elements |
| **Mint Medium** | `#C1E8D0` | Data viz, subtle backgrounds |
| **Mint Light** | `#DCF9E3` | Card backgrounds, section tints |
| **Sage Light** | `#E8F5E9` | Card backgrounds, section tints |

---

## Examples from Home V5

### ✅ **Correct Usage**

1. **Primary CTA in Header**:
   ```tsx
   className="bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white"
   ```

2. **Circular Arrow on Cards**:
   ```tsx
   className="bg-[#0d5f4e] hover:bg-[#0a4a3d]"
   ```

3. **Gradient Final CTA**:
   ```tsx
   background: 'linear-gradient(135deg, #0E3E1B 0%, #6b9d89 100%)'
   ```

4. **Active Timeline Step**:
   ```tsx
   className="border-2 border-[#0d5f4e] bg-[#0d5f4e]"
   ```

5. **Stat Numbers**:
   ```tsx
   className="text-6xl text-[#0d5f4e]"
   ```

---

## Testing Checklist

Before deploying any green usage, verify:

- [ ] Color is from approved palette
- [ ] Usage follows strategic intent (not decorative)
- [ ] Contrast ratio meets WCAG AA (4.5:1 minimum)
- [ ] Hover states use darker variant
- [ ] No conflicting green shades in same context
- [ ] Green draws eye to intended action
- [ ] Works in light and dark contexts

---

## Support

**Questions?**  
Refer to `/docs/design/EDITORIAL-DESIGN-GUIDELINES.md` for broader design system context.

**Need to propose a new usage?**  
Document the strategic rationale (growth, intelligence, trust) and submit for review.

---

**Status**: ✅ Official Brand Guidelines  
**Enforcement**: Required for all new components and pages  
**Last Review**: January 31, 2026
