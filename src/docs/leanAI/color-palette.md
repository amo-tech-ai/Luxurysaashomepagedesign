# LeanAI Color Palette - Quick Reference

**System:** StartupAI LeanAI  
**Theme:** Premium Consulting  
**Vibe:** Calm, Intelligent, Trustworthy

> 🎨 **NEW:** [View Interactive Style Guide](/style-guide) - Live visual examples with copy-to-clipboard colors, typography demos, and component patterns.

---

## 🎨 CORE BRAND COLORS

### Emerald & Sage Greens (PRIMARY)

```
■ #3B5F52   Primary Brand Green
            → Main CTAs, focus states, active elements
            → Hover: #2D4840

■ #6b9d89   Sage Green (Secondary)
            → Lighter accents, hover states

■ #0d5f4e   Medium Emerald
            → Emphasis elements

■ #0E3E1B   Dark Forest Green
            → High contrast, headers

■ #DCF9E3   Pale Mint (Success)
            → Completion badges, success states
```

---

## 🤍 NEUTRAL PALETTE

### Backgrounds

```
□ #FAF9F7   Primary Cream
            → Main page background

□ #F5F3EF   Secondary Beige
            → Panel backgrounds

□ #FBF9FA   Tertiary Off-White
            → Special cards, highlights

□ #FFFFFF   Pure White
            → Cards, inputs, content areas
```

### Text Colors

```
■ #212427   Primary Text
            → Headings, body text, main content

■ #6B7280   Secondary Text (gray-600)
            → Labels, guidance, descriptions

■ #9CA3AF   Tertiary Text (gray-400)
            → Placeholders, disabled text

■ #6B7280   Muted Text (gray-500)
            → Timestamps, metadata
```

### Borders & UI

```
□ #F9FAFB   Very Light Border
            → Subtle separation

□ #E5E7EB   Light Border (gray-200)
            → Standard card borders

□ #D1D5DB   Medium Border (gray-300)
            → Hover states

□ #F3F4F6   UI Background (gray-50)
            → Input backgrounds
```

---

## 🚫 FORBIDDEN COLORS

**NEVER USE THESE:**

```
❌ Any Blues      (#0000FF, #4A90E2, #3B82F6, etc.)
❌ Any Purples    (#9B51E0, #8B5CF6, #A855F7, etc.)
❌ Any Reds       (#FF0000, #EF4444, #DC2626, etc.)
❌ Bright Colors  (Orange, Yellow, Pink, Cyan)
```

**REASON:** Brand maintains premium, calm aesthetic with exclusive beige/cream + emerald/sage palette

---

## 🎯 USAGE GUIDE

### Buttons

**Primary CTA:**
```
Background: #3B5F52
Hover: #2D4840
Text: #FFFFFF
```

**Secondary:**
```
Background: #F3F4F6 (gray-100)
Hover: #E5E7EB (gray-200)
Text: #212427
```

**Ghost/Link:**
```
Background: transparent
Hover: #F9FAFB (gray-50)
Text: #6B7280 → hover: #3B5F52
```

---

### Cards

**Standard Card:**
```
Background: #FFFFFF
Border: #E5E7EB (gray-200)
Hover Border: #D1D5DB (gray-300)
```

**Focused Card:**
```
Background: #FFFFFF
Border: #3B5F52
Shadow: shadow-lg with #3B5F52/5
```

**Highlighted Card:**
```
Background: #FBF9FA
Border: #F9FAFB
```

---

### Inputs

**Unfocused:**
```
Background: #F3F4F6 (gray-50)
Border: #E5E7EB (gray-200)
Text: #212427
Placeholder: #9CA3AF (gray-400)
```

**Focused:**
```
Background: #FFFFFF
Border: #3B5F52
Ring: #3B5F52/10 (ring-2)
Text: #212427
```

---

### Status Indicators

**Completion Checkmark:**
```
Background: #DCF9E3
Border: #3B5F52
Icon: #3B5F52
```

**Progress Bar:**
```
Track: #E5E7EB (gray-200)
Fill: #3B5F52
```

**Success State:**
```
Background: #DCF9E3
Border: #3B5F52
```

---

## 📊 COLOR HIERARCHY

### Primary Actions
1. **#3B5F52** - Primary CTAs, main actions
2. **#2D4840** - Hover states for primary
3. **#DCF9E3** - Success/completion states

### Backgrounds (Light to Dark)
1. **#FAF9F7** - Page background (lightest)
2. **#F5F3EF** - Panel background
3. **#FBF9FA** - Card highlight
4. **#FFFFFF** - Content cards
5. **#F3F4F6** - Input fields (gray-50)

### Text (Dark to Light)
1. **#212427** - Primary text (darkest)
2. **#6B7280** - Secondary text (gray-600)
3. **#6B7280** - Muted text (gray-500)
4. **#9CA3AF** - Placeholder (gray-400, lightest)

---

## 🎨 TAILWIND REFERENCE

### Custom Colors (Use Bracket Notation)
```css
bg-[#3B5F52]    /* Primary brand */
bg-[#FAF9F7]    /* Cream background */
bg-[#F5F3EF]    /* Beige background */
text-[#212427]  /* Primary text */
border-[#3B5F52] /* Brand border */
shadow-[#3B5F52]/5 /* Brand shadow */
```

### Gray Scale (Use Tailwind Defaults)
```css
gray-50:  #F3F4F6
gray-200: #E5E7EB
gray-300: #D1D5DB
gray-400: #9CA3AF
gray-500: #6B7280
gray-600: #6B7280
gray-900: #111827
```

---

## 🔍 CONTRAST RATIOS

**WCAG AA Compliant:**

```
✅ #212427 on #FAF9F7  → 14.2:1 (Excellent)
✅ #212427 on #FFFFFF  → 15.8:1 (Excellent)
✅ #6B7280 on #FAF9F7  → 5.8:1  (Good)
✅ #3B5F52 on #FFFFFF  → 7.2:1  (Good)
✅ #FFFFFF on #3B5F52  → 7.2:1  (Good)
✅ #9CA3AF on #FFFFFF  → 3.2:1  (Minimum for large text)
```

---

## 🌈 HEX → RGB

For opacity/transparency needs:

```
#3B5F52 → rgb(59, 95, 82)
#FAF9F7 → rgb(250, 249, 247)
#F5F3EF → rgb(245, 243, 239)
#212427 → rgb(33, 36, 39)
#DCF9E3 → rgb(220, 249, 227)
#6b9d89 → rgb(107, 157, 137)
#0E3E1B → rgb(14, 62, 27)
```

---

## 💡 DESIGN TOKENS

Copy-paste ready:

```javascript
// Brand Colors
const BRAND_PRIMARY = '#3B5F52';
const BRAND_SECONDARY = '#6b9d89';
const BRAND_DARK = '#0E3E1B';
const BRAND_SUCCESS = '#DCF9E3';

// Backgrounds
const BG_CREAM = '#FAF9F7';
const BG_BEIGE = '#F5F3EF';
const BG_WHITE = '#FFFFFF';
const BG_HIGHLIGHT = '#FBF9FA';

// Text
const TEXT_PRIMARY = '#212427';
const TEXT_SECONDARY = '#6B7280';
const TEXT_MUTED = '#9CA3AF';

// Borders
const BORDER_LIGHT = '#F9FAFB';
const BORDER_DEFAULT = '#E5E7EB';
const BORDER_MEDIUM = '#D1D5DB';
```

---

## 📸 VISUAL EXAMPLES

### Primary Button
```
█████████████  #3B5F52
   Start Now   #FFFFFF text
```

### Card
```
┌─────────────────┐ #E5E7EB border
│                 │ #FFFFFF background
│  Card Content   │ #212427 text
│                 │
└─────────────────┘
```

### Page Layout
```
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  #FAF9F7 cream
┌─────────────────┐
│ ┌─────────────┐ │ #FFFFFF cards
│ │   Content   │ │
│ └─────────────┘ │
└─────────────────┘
```

---

**Quick Tip:** When in doubt, use white cards on cream backgrounds with emerald green accents. This is the core pattern across all 10 screens.

---

**Last Updated:** February 8, 2026  
**Compliance:** 100% brand-aligned  
**Status:** ✅ Production Standard