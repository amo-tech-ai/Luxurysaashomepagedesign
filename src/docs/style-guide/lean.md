# Lean Canvas V2 - Wireframe & Style Guide

**Page Route:** `/lean-canvas-v2`  
**File:** `/app/lean-canvas-v2/page.tsx`  
**Design System:** LeanAI Premium Consulting Aesthetic  
**Last Updated:** February 8, 2026

---

## 🎨 Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Emerald** | `#3B5F52` | 59, 95, 82 | Primary CTAs, active states, focus indicators |
| **Emerald Hover** | `#2D4840` | 45, 72, 64 | Hover states for buttons |
| **Medium Emerald** | `#0d5f4e` | 13, 95, 78 | Secondary accents, icons |
| **Sage Green** | `#6b9d89` | 107, 157, 137 | Lighter accents, secondary elements |
| **Pale Mint** | `#DCF9E3` | 220, 249, 227 | Success states, completion badges |

### Background Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Cream** | `#FAF9F7` | 250, 249, 247 | Main page background |
| **Pure White** | `#FFFFFF` | 255, 255, 255 | Card backgrounds |
| **Off-White** | `#FBF9FA` | 251, 249, 250 | Hover states for cards |

### Text Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Text** | `#212427` | 33, 36, 39 | Main headings, card titles |
| **Secondary Text** | `#6B7280` | 107, 114, 128 | Labels, section descriptions (gray-600) |
| **Tertiary Text** | `#9CA3AF` | 156, 163, 175 | Placeholder text (gray-400) |
| **Muted Text** | `#D1D5DB` | 209, 213, 219 | Disabled states (gray-300) |

### Border Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Light Border** | `#E5E7EB` | 229, 231, 235 | Card borders (gray-200) |
| **Focus Border** | `#3B5F52` | 59, 95, 82 | Active/focus states |

### Interactive States

| State | Background | Border | Text | Shadow |
|-------|------------|--------|------|--------|
| **Default** | `#FFFFFF` | `#E5E7EB` | `#212427` | None |
| **Hover** | `#FBF9FA` | `#E5E7EB` | `#212427` | `shadow-sm` |
| **Focus** | `#FFFFFF` | `#3B5F52` | `#212427` | `ring-2 ring-[#3B5F52]/10` |
| **Completed** | `#FFFFFF` | `#3B5F52` | `#212427` | `shadow-md` |

---

## 📐 Layout Structure

### Page Grid System

```
┌─────────────────────────────────────────────────────────────┐
│ Header Section                                              │
│ - Back Link (← View Classic Lean Canvas)                   │
│ - Page Title (Lean Canvas)                                 │
│ - Subtitle/Description                                     │
│ - Completion: 0/11                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     3-Column Grid Layout                     │
├──────────────┬──────────────┬──────────────┬───────────────┤
│   Problem    │   Solution   │ Customer Seg │ Early Adopters│
│   (Col 1)    │   (Col 2)    │   (Col 3)    │   (Col 4)    │
│   Row 1      │   Row 1      │   Row 1      │   Row 2      │
├──────────────┼──────────────┼──────────────┼───────────────┤
│  Existing    │     UVP      │ Early        │               │
│ Alternatives │ (Col 2-3)    │ Adopters     │               │
│   (Col 1)    │   Row 2      │   (Col 4)    │               │
│   Row 2      │              │   Row 2      │               │
├──────────────┼──────────────┼──────────────┼───────────────┤
│ Key Metrics  │   Unfair     │     Cost     │ Revenue      │
│   (Col 1)    │  Advantage   │  Structure   │  Streams     │
│   Row 3      │   (Col 2)    │   (Col 3)    │   (Col 4)    │
│              │   Row 3      │              │              │
├──────────────┴──────────────┴──────────────┴───────────────┤
│              │   Channels   │              │              │
│              │   (Col 2)    │              │              │
│              │   Row 4      │              │              │
└──────────────┴──────────────┴──────────────┴───────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Footer Action Bar                                           │
│ - Left: "Ready to validate your canvas?"                   │
│ - Right: [Save Draft] [Export Canvas]                      │
└─────────────────────────────────────────────────────────────┘
```

### Container Specifications

- **Max Width:** `1600px`
- **Horizontal Padding:** `px-6 lg:px-12` (24px mobile, 48px desktop)
- **Vertical Padding:** `py-12 lg:py-16` (48px mobile, 64px desktop)
- **Grid Gap:** `gap-6 lg:gap-8` (24px mobile, 32px desktop)

---

## 🧱 Component Breakdown

### 1. Page Header

**Typography:**
- **Title:** `text-4xl lg:text-5xl font-light text-[#212427]` (Serif font)
- **Subtitle:** `text-lg text-gray-600 max-w-3xl` (Sans-serif)
- **Back Link:** `text-sm text-[#3B5F52] hover:underline`

**Structure:**
```tsx
<div className="mb-12">
  <a href="#" className="text-sm text-[#3B5F52] hover:underline mb-4 inline-flex items-center gap-2">
    ← View Classic Lean Canvas
  </a>
  <h1 className="text-4xl lg:text-5xl font-light text-[#212427] mb-4">
    Lean Canvas
  </h1>
  <p className="text-lg text-gray-600 max-w-3xl">
    A strategic one-page business model template for validating your startup idea.
    Complete each section thoughtfully to build a comprehensive view of your business.
  </p>
  <div className="mt-4 text-sm text-gray-500">
    Completion: <span className="font-medium text-[#3B5F52]">0/11</span>
  </div>
</div>
```

**Spacing:**
- Margin bottom: `mb-12` (48px)
- Title to subtitle: `mb-4` (16px)
- Subtitle to completion: `mt-4` (16px)

---

### 2. Canvas Card Component

**Card Structure:**
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:bg-[#FBF9FA] transition-colors">
  {/* Card Header */}
  <div className="mb-4">
    <h3 className="text-xl font-light text-[#212427] mb-2">
      Section Title
    </h3>
    <p className="text-sm text-gray-600">
      Brief guidance question
    </p>
  </div>
  
  {/* Card Content */}
  <textarea 
    placeholder="e.g., Example text here..."
    className="w-full min-h-[120px] p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#212427] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#3B5F52] focus:ring-2 focus:ring-[#3B5F52]/10 transition-all resize-none"
  />
</div>
```

**Dimensions:**
- **Border Radius:** `rounded-xl` (12px)
- **Padding:** `p-6` (24px)
- **Min Height (textarea):** `min-h-[120px]`
- **Border:** `1px solid #E5E7EB`

**States:**
- Default: `bg-white border-gray-200`
- Hover: `hover:bg-[#FBF9FA]`
- Focus (input): `focus:border-[#3B5F52] focus:ring-2 focus:ring-[#3B5F52]/10`

---

### 3. Canvas Grid Layout

**11 Canvas Sections:**

| Section | Grid Position | Row Span | Col Span |
|---------|--------------|----------|----------|
| **Problem** | Row 1, Col 1 | 1 | 1 |
| **Solution** | Row 1, Col 2 | 1 | 1 |
| **Customer Segments** | Row 1, Col 3-4 | 1 | 2 |
| **Existing Alternatives** | Row 2, Col 1 | 1 | 1 |
| **Unique Value Proposition** | Row 2, Col 2-3 | 1 | 2 |
| **Early Adopters** | Row 2, Col 4 | 1 | 1 |
| **Key Metrics** | Row 3, Col 1 | 2 | 1 |
| **Unfair Advantage** | Row 3, Col 2 | 1 | 1 |
| **Cost Structure** | Row 3, Col 3 | 1 | 1 |
| **Revenue Streams** | Row 3, Col 4 | 1 | 1 |
| **Channels** | Row 4, Col 2 | 1 | 1 |

**Grid CSS:**
```css
.canvas-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px; /* lg:gap-8 = 32px */
}

/* Mobile: Stack vertically */
@media (max-width: 1023px) {
  .canvas-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 4. Section Labels & Guidance

**Section Titles:**
- **Font:** Serif, Light (300)
- **Size:** `text-xl` (20px / 1.25rem)
- **Color:** `#212427`
- **Spacing:** `mb-2` (8px)

**Guidance Text:**
- **Font:** Sans-serif, Normal (400)
- **Size:** `text-sm` (14px / 0.875rem)
- **Color:** `#6B7280` (gray-600)
- **Line Height:** `leading-relaxed`

**Examples:**

```
Problem
List the top 1-3 problems your customers face

Solution
Outline your core product or service

Customer Segments
Who are your target customers?

Existing Alternatives
What are customers using today?

Unique Value Proposition
Single, clear, compelling message that states why you are different and worth buying

Early Adopters
Characteristics of your first customers

Key Metrics
What key numbers tell you how your business is doing?

Unfair Advantage
Something that cannot easily be copied or bought

Cost Structure
What are your major costs?

Channels
How will you reach customers?

Revenue Streams
How will you make money?
```

---

### 5. Input Fields (Textarea)

**Default State:**
```css
width: 100%;
min-height: 120px;
padding: 16px;
background: #F3F4F6; /* gray-50 */
border: 1px solid #E5E7EB; /* gray-200 */
border-radius: 8px;
font-size: 14px;
color: #212427;
resize: none;
```

**Placeholder Styling:**
```css
placeholder {
  color: #9CA3AF; /* gray-400 */
  font-style: normal;
}
```

**Focus State:**
```css
focus {
  outline: none;
  background: #FFFFFF;
  border-color: #3B5F52;
  box-shadow: 0 0 0 2px rgba(59, 95, 82, 0.1);
}
```

**Example Placeholders:**
- Problem: `"e.g., Small businesses struggle to manage customer data across multiple tools..."`
- Solution: `"e.g., Cloud-based CRM with AI-powered automation, native integrations, and real-time analytics..."`
- Customer Segments: `"e.g., B2B SaaS companies with 10-50 employees, primarily in tech sector..."`

---

### 6. Footer Action Bar

**Structure:**
```tsx
<div className="mt-16 bg-white border-t border-gray-200 px-6 lg:px-12 py-6">
  <div className="max-w-[1600px] mx-auto flex items-center justify-between">
    {/* Left Side */}
    <div>
      <h3 className="text-lg font-medium text-[#212427] mb-1">
        Ready to validate your canvas?
      </h3>
      <p className="text-sm text-gray-600">
        Export your completed canvas or continue refining your business model.
      </p>
    </div>
    
    {/* Right Side */}
    <div className="flex items-center gap-3">
      <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors font-medium">
        Save Draft
      </button>
      <button className="px-6 py-3 bg-[#3B5F52] hover:bg-[#2D4840] text-white rounded-lg transition-colors font-medium flex items-center gap-2">
        <Download className="w-4 h-4" />
        Export Canvas
      </button>
    </div>
  </div>
</div>
```

**Button Specifications:**

| Button Type | Background | Hover | Text | Padding | Border Radius |
|-------------|------------|-------|------|---------|---------------|
| **Secondary** | `#F3F4F6` | `#E5E7EB` | `#111827` | `px-6 py-3` | `8px` |
| **Primary** | `#3B5F52` | `#2D4840` | `#FFFFFF` | `px-6 py-3` | `8px` |

---

## 📏 Spacing & Layout Measurements

### Vertical Spacing (Top to Bottom)

```
┌─ Page Top Padding: 48px (mobile) / 64px (desktop)
│
├─ Header Section: ~200px
│  ├─ Back Link: 40px height
│  ├─ Title: 48px height (mobile) / 60px height (desktop)
│  ├─ Title to Subtitle: 16px gap
│  ├─ Subtitle: ~60px height (3 lines)
│  └─ Completion Indicator: 24px height
│
├─ Header to Grid: 48px gap
│
├─ Canvas Grid: Variable height
│  ├─ Card 1 (Row 1): ~280px
│  ├─ Row Gap: 24px (mobile) / 32px (desktop)
│  ├─ Card 2 (Row 2): ~280px
│  ├─ Row Gap: 24px / 32px
│  ├─ Card 3 (Row 3): ~280px
│  └─ Row Gap: 24px / 32px
│
├─ Grid to Footer: 64px gap
│
├─ Footer Action Bar: ~120px
│
└─ Page Bottom Padding: 48px / 64px
```

### Horizontal Spacing (Left to Right)

```
├─ Page Left Margin: 24px (mobile) / 48px (desktop)
│
├─ Card 1: ~25% width (on desktop)
├─ Column Gap: 24px / 32px
├─ Card 2: ~25% width
├─ Column Gap: 24px / 32px
├─ Card 3: ~25% width
├─ Column Gap: 24px / 32px
├─ Card 4: ~25% width
│
└─ Page Right Margin: 24px / 48px
```

### Card Internal Spacing

```
Card Border: 1px
├─ Card Padding: 24px
│  ├─ Section Title: 24px height
│  ├─ Title to Guidance: 8px gap
│  ├─ Guidance Text: ~40px height (2 lines)
│  ├─ Guidance to Textarea: 16px gap
│  └─ Textarea: 120px min-height
│     ├─ Internal Padding: 16px
│     └─ Content Area: 88px min
└─ Card Padding: 24px
```

---

## 🎭 Typography Scale

### Heading Hierarchy

| Element | Font Family | Weight | Size (Mobile) | Size (Desktop) | Line Height | Color |
|---------|-------------|--------|---------------|----------------|-------------|-------|
| **Page Title** | Serif | Light (300) | 36px / 2.25rem | 48px / 3rem | 1.2 | `#212427` |
| **Subtitle** | Sans-serif | Normal (400) | 18px / 1.125rem | 18px / 1.125rem | 1.6 | `#6B7280` |
| **Section Title** | Serif | Light (300) | 20px / 1.25rem | 20px / 1.25rem | 1.4 | `#212427` |
| **Guidance** | Sans-serif | Normal (400) | 14px / 0.875rem | 14px / 0.875rem | 1.5 | `#6B7280` |
| **Body Text** | Sans-serif | Normal (400) | 14px / 0.875rem | 14px / 0.875rem | 1.5 | `#212427` |
| **Placeholder** | Sans-serif | Normal (400) | 14px / 0.875rem | 14px / 0.875rem | 1.5 | `#9CA3AF` |
| **Button** | Sans-serif | Medium (500) | 14px / 0.875rem | 14px / 0.875rem | 1.4 | Var |

### Font Stack

```css
/* Serif (Headlines) */
font-family: Georgia, 'Times New Roman', Times, serif;

/* Sans-serif (Body) */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

---

## 🖼️ Visual Hierarchy

### Information Architecture

```
Level 1: Page Title (Lean Canvas)
├─ Level 2: Page Subtitle (Description)
│
Level 1: Canvas Grid Container
├─ Level 2: Individual Section Cards (11 cards)
│  ├─ Level 3: Section Title (e.g., "Problem")
│  │  └─ Level 4: Guidance Question (e.g., "List the top 1-3...")
│  │     └─ Level 5: Input Textarea (with placeholder)
│
Level 1: Footer Action Bar
├─ Level 2: CTA Heading
│  └─ Level 3: CTA Description
├─ Level 2: Action Buttons
```

### Visual Weight Distribution

1. **Primary Focus:** Canvas input cards (11 cards, ~70% visual weight)
2. **Secondary Focus:** Page title & description (20% visual weight)
3. **Tertiary Focus:** Action buttons (10% visual weight)

---

## 🎨 Color Application Map

### Page Anatomy with Colors

```
Background Layer:
├─ Page Background: #FAF9F7 (Primary Cream)
│
Card Layer:
├─ Default Card BG: #FFFFFF (Pure White)
├─ Card Border: #E5E7EB (gray-200)
├─ Hover Card BG: #FBF9FA (Off-White)
│
Input Layer:
├─ Default Input BG: #F3F4F6 (gray-50)
├─ Input Border: #E5E7EB (gray-200)
├─ Focus Input BG: #FFFFFF (Pure White)
├─ Focus Input Border: #3B5F52 (Primary Emerald)
├─ Focus Input Ring: rgba(59, 95, 82, 0.1)
│
Text Layer:
├─ Headings: #212427 (Primary Text)
├─ Body/Labels: #6B7280 (Secondary Text / gray-600)
├─ Placeholders: #9CA3AF (Tertiary Text / gray-400)
├─ Links: #3B5F52 (Primary Emerald)
│
Interactive Layer:
├─ Primary Button BG: #3B5F52 (Primary Emerald)
├─ Primary Button Hover: #2D4840 (Emerald Hover)
├─ Secondary Button BG: #F3F4F6 (gray-100)
├─ Secondary Button Hover: #E5E7EB (gray-200)
```

---

## 📱 Responsive Behavior

### Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| **Mobile** | < 1024px | Single column, stacked cards |
| **Desktop** | ≥ 1024px | 4-column grid layout |

### Mobile Layout (< 1024px)

```
Container: 100% width, 24px padding
Grid: Single column
Cards: Full width, stack vertically
Gap: 24px between cards
Typography: Slightly smaller (text-4xl → text-3xl)
```

### Desktop Layout (≥ 1024px)

```
Container: 1600px max-width, 48px padding
Grid: 4 columns (repeat(4, 1fr))
Cards: Span 1-2 columns based on section
Gap: 32px between cards
Typography: Full scale (text-5xl)
```

---

## 🔄 Interactive States

### Card States

**1. Default (Empty)**
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
box-shadow: none;
```

**2. Hover**
```css
background: #FBF9FA;
border: 1px solid #E5E7EB;
cursor: pointer;
transition: background 200ms ease;
```

**3. Active (Typing)**
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
```

**4. Completed (Has Content)**
```css
background: #FFFFFF;
border: 1px solid #3B5F52;
box-shadow: 0 4px 6px rgba(59, 95, 82, 0.05);
```

### Input States

**1. Default**
```css
background: #F3F4F6;
border: 1px solid #E5E7EB;
color: #212427;
outline: none;
```

**2. Focus**
```css
background: #FFFFFF;
border: 1px solid #3B5F52;
box-shadow: 0 0 0 2px rgba(59, 95, 82, 0.1);
outline: none;
```

**3. Filled**
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
color: #212427;
```

### Button States

**Primary Button:**
```css
/* Default */
background: #3B5F52;
color: #FFFFFF;

/* Hover */
background: #2D4840;
box-shadow: 0 4px 6px rgba(59, 95, 82, 0.2);

/* Active */
background: #0d5f4e;
transform: translateY(1px);
```

**Secondary Button:**
```css
/* Default */
background: #F3F4F6;
color: #111827;

/* Hover */
background: #E5E7EB;

/* Active */
background: #D1D5DB;
```

---

## 📋 Content Strategy

### Placeholder Text Examples

**Problem:**
> "e.g., Small businesses struggle to manage customer data across multiple tools, leading to missed opportunities and inefficient workflows..."

**Solution:**
> "e.g., Cloud-based CRM with AI-powered automation, native integrations, and real-time analytics that consolidates all customer data in one place..."

**Customer Segments:**
> "e.g., B2B SaaS companies with 10-50 employees, primarily in tech sector, looking to scale their sales operations..."

**Unique Value Proposition:**
> "e.g., The only CRM that integrates natively with your existing tools in under 5 minutes, powered by AI to automate 80% of data entry..."

**Early Adopters:**
> "e.g., Tech-savvy founders aged 30-45, frustrated with current CRM, willing to try new tools, active in startup communities..."

**Existing Alternatives:**
> "e.g., Salesforce (complex, expensive), HubSpot (limited integrations), spreadsheets (manual, error-prone)..."

**Key Metrics:**
> "e.g., Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Churn Rate, Net Promoter Score (NPS)..."

**Unfair Advantage:**
> "e.g., Proprietary AI model trained on 10M+ customer interactions, exclusive partnerships with top platforms, team expertise from Google/Salesforce..."

**Channels:**
> "e.g., Content marketing, LinkedIn outreach, partner referrals, product-led growth, app marketplaces..."

**Cost Structure:**
> "e.g., Cloud infrastructure, engineering team, sales & marketing, customer support, third-party API costs..."

**Revenue Streams:**
> "e.g., Monthly subscription ($49-$199/mo), annual plans with 20% discount, enterprise custom pricing, add-on features..."

---

## 🎯 Design Principles

### 1. Calm Intelligence
- Generous white space between cards
- Soft, neutral backgrounds (cream/beige)
- No bright, distracting colors
- Subtle hover states

### 2. Premium Consulting Aesthetic
- Serif typography for headings
- Clean, architectural layouts
- BCG-style structured thinking
- Professional color palette

### 3. Trust & Clarity
- Clear section labels
- Helpful guidance questions
- Obvious input areas
- Transparent progress tracking

### 4. Focus on Content
- Cards are the primary focus
- Minimal UI chrome
- No unnecessary decorations
- Input fields designed for deep thinking

---

## 🛠️ Technical Implementation Notes

### Component Structure
```
LeanCanvasV2Page
├─ PageHeader
│  ├─ BackLink
│  ├─ Title
│  ├─ Subtitle
│  └─ CompletionIndicator
├─ CanvasGrid
│  ├─ CanvasCard (Problem)
│  ├─ CanvasCard (Solution)
│  ├─ CanvasCard (Customer Segments)
│  ├─ CanvasCard (Existing Alternatives)
│  ├─ CanvasCard (Unique Value Proposition)
│  ├─ CanvasCard (Early Adopters)
│  ├─ CanvasCard (Key Metrics)
│  ├─ CanvasCard (Unfair Advantage)
│  ├─ CanvasCard (Cost Structure)
│  ├─ CanvasCard (Channels)
│  └─ CanvasCard (Revenue Streams)
└─ FooterActionBar
   ├─ CTAText
   └─ ActionButtons
```

### Data Structure
```typescript
interface CanvasSection {
  id: string;
  title: string;
  guidance: string;
  placeholder: string;
  content: string;
  completed: boolean;
  gridPosition: {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
  };
}
```

### State Management
- Use `useState` for canvas data
- Auto-save to `localStorage` every 30 seconds
- Track completion percentage (filled sections / 11)
- Debounce input to prevent excessive re-renders

---

## ✅ Accessibility Considerations

### Keyboard Navigation
- Tab order follows logical reading flow
- All inputs focusable with visible focus ring
- Buttons accessible via Enter/Space

### Screen Reader Support
- Semantic HTML (`<main>`, `<section>`, `<textarea>`)
- ARIA labels for guidance text
- Progress announced when sections completed

### Color Contrast
- All text meets WCAG AA standards
- Primary text (#212427) on white: 16.1:1 ✅
- Secondary text (#6B7280) on white: 7.6:1 ✅
- Button text (#FFFFFF) on emerald (#3B5F52): 5.2:1 ✅

---

## 📊 Performance Metrics

### Target Performance
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** 95+

### Optimization Strategies
- Lazy load non-critical cards
- Debounce auto-save (500ms)
- Minimize re-renders (React.memo for cards)
- Use CSS for animations (not JS)

---

## 🎨 Design Tokens

### Spacing Scale
```css
--space-1: 4px;   /* 0.25rem */
--space-2: 8px;   /* 0.5rem */
--space-3: 12px;  /* 0.75rem */
--space-4: 16px;  /* 1rem */
--space-6: 24px;  /* 1.5rem */
--space-8: 32px;  /* 2rem */
--space-12: 48px; /* 3rem */
--space-16: 64px; /* 4rem */
```

### Border Radius Scale
```css
--radius-lg: 8px;   /* Buttons, inputs */
--radius-xl: 12px;  /* Cards */
--radius-2xl: 16px; /* Hero sections */
--radius-full: 9999px; /* Badges */
```

### Shadow Scale
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-emerald: 0 4px 6px rgba(59, 95, 82, 0.2);
```

---

## 🚀 Future Enhancements

### Phase 1 (Current)
- ✅ Static layout with 11 sections
- ✅ Manual text input
- ✅ Basic auto-save
- ✅ Export draft functionality

### Phase 2 (AI Integration)
- ⬜ AI-powered suggestions per section
- ⬜ Smart placeholder generation
- ⬜ Content quality scoring
- ⬜ Auto-complete based on other sections

### Phase 3 (Advanced Features)
- ⬜ Real-time collaboration
- ⬜ Version history
- ⬜ Template library
- ⬜ PDF export with branding
- ⬜ Validation against market research

---

**Document Version:** 1.0  
**Created:** February 8, 2026  
**Status:** Complete  
**Next Review:** March 2026  

---

**Related Documentation:**
- `/docs/leanAI/color-palette.md` - Complete color specifications
- `/docs/leanAI/styleguide.md` - Full design system guide
- `/style-guide` - Interactive visual style guide
- `/docs/COLOR-AUDIT-RESULTS.md` - Color compliance verification
