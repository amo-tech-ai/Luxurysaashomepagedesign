# LeanAI Design System - Style Guide

**Brand:** StartupAI  
**System:** LeanAI (10-Screen Flow)  
**Aesthetic:** Premium consulting, calm intelligence, BCG-inspired

---

## 🎨 COLOR PALETTE

### Primary Colors

**Emerald Green (Primary Brand)**
- `#3B5F52` - Main brand color, buttons, focus states, checkmarks
- `#2D4840` - Hover state for primary buttons
- Usage: CTAs, active states, completion indicators, focus rings

**Sage Green (Secondary)**
- `#6b9d89` - Lighter accent for hover states
- `#0d5f4e` - Medium green for emphasis
- `#0E3E1B` - Dark forest green for high-contrast elements
- Usage: Secondary buttons, hover states, subtle accents

**Success & Validation**
- `#DCF9E3` - Pale mint for completion badges and success states
- Usage: Checkmark backgrounds, success indicators, completion cards

---

### Neutral Palette

**Backgrounds**
- `#FAF9F7` - Primary cream background (main page)
- `#F5F3EF` - Secondary beige (panels, sections)
- `#FBF9FA` - Tertiary off-white (special cards)
- `#FFFFFF` - Pure white (cards, input fields)

**Borders & Dividers**
- `#F9FAFB` - Very light border (subtle separation)
- `#E5E7EB` - Light gray border (standard borders) [gray-200]
- `#D1D5DB` - Medium gray border (hover states) [gray-300]

**Text**
- `#212427` - Primary text (headings, body)
- `#6B7280` - Secondary text (labels, guidance) [gray-600]
- `#9CA3AF` - Tertiary text (placeholder, disabled) [gray-400]
- `#6B7280` - Muted text (timestamps, metadata) [gray-500]

**UI Elements**
- `#F3F4F6` - Light gray background (inputs, cards) [gray-50]
- `#E5E7EB` - Medium gray (dividers) [gray-200]
- `#F9FAFB` - Subtle gray (hover backgrounds) [gray-50]

---

## 🚫 STRICT COLOR RULES

**NEVER USE:**
- ❌ Blues (#0000FF, #4A90E2, any blue)
- ❌ Purples (#9B51E0, #8B5CF6, any purple)
- ❌ Reds (#FF0000, #EF4444, any red)
- ❌ Bright oranges, yellows, pinks
- ❌ High-saturation colors

**ALWAYS USE:**
- ✅ Beige/cream backgrounds (#FAF9F7, #F5F3EF)
- ✅ Emerald/sage greens (#3B5F52, #6b9d89, #0E3E1B)
- ✅ Neutral grays (text, borders)
- ✅ Pure white (cards, inputs)

---

## 📐 LAYOUT SYSTEM

### Grid Structure
- **3-Panel Layout:** Most screens use 3-column responsive grid
- **Max Width:** 1600px container
- **Padding:** px-6 lg:px-12 (responsive horizontal padding)
- **Gap:** gap-6 lg:gap-8 (responsive grid gaps)

### Spacing Scale
- **Micro:** 0.25rem (1px), 0.5rem (2px)
- **Small:** 0.75rem (3px), 1rem (4px)
- **Medium:** 1.5rem (6px), 2rem (8px)
- **Large:** 3rem (12px), 4rem (16px)
- **XL:** 6rem (24px), 8rem (32px)

### Border Radius
- **Small:** rounded-lg (0.5rem / 8px) - buttons, inputs
- **Medium:** rounded-xl (0.75rem / 12px) - cards, panels
- **Large:** rounded-2xl (1rem / 16px) - hero sections
- **Circle:** rounded-full - badges, avatars, completion indicators

---

## 🔤 TYPOGRAPHY

### Font Families
- **Headings:** Serif (elegant, premium feel)
  - System fallback: Georgia, Times, serif
  - For premium: Merriweather, Playfair Display, Lora
  
- **Body Text:** Sans-serif (clean, modern)
  - System: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif
  - Alternative: Inter, SF Pro, Segoe UI

### Font Sizes
**Headings:**
- H1: text-4xl lg:text-5xl (2.25rem / 3rem)
- H2: text-xl lg:text-2xl (1.25rem / 1.5rem)
- H3: text-lg (1.125rem)

**Body:**
- Large: text-lg (1.125rem) - intro text
- Base: text-base (1rem) - body text
- Small: text-sm (0.875rem) - labels, metadata
- Micro: text-xs (0.75rem) - timestamps, captions

### Font Weights
- **Light:** font-light (300) - large headings
- **Normal:** font-normal (400) - body text
- **Medium:** font-medium (500) - labels, buttons
- **Bold:** font-bold (700) - emphasis (use sparingly)

---

## 🎯 COMPONENT PATTERNS

### Cards
```
Background: bg-white
Border: border border-gray-200
Rounded: rounded-xl
Padding: p-6 lg:p-8
Hover: hover:border-gray-300

Focus State:
Border: border-[#3B5F52]
Shadow: shadow-lg shadow-[#3B5F52]/5
```

### Buttons

**Primary (CTA):**
```
Background: bg-[#3B5F52]
Hover: hover:bg-[#2D4840]
Text: text-white
Padding: px-6 py-3
Rounded: rounded-lg
Font: font-medium
```

**Secondary:**
```
Background: bg-gray-100
Hover: hover:bg-gray-200
Text: text-gray-900
Padding: px-6 py-3
Rounded: rounded-lg
Font: font-medium
```

**Ghost/Minimal:**
```
Background: transparent
Hover: hover:bg-gray-50
Text: text-gray-700 hover:text-[#3B5F52]
Padding: p-2 or px-4 py-2
Rounded: rounded-lg
```

### Input Fields

**Standard:**
```
Background: bg-gray-50 (unfocused)
Focus Background: focus:bg-white
Border: border border-gray-200
Focus Border: focus:border-[#3B5F52]
Focus Ring: focus:ring-2 focus:ring-[#3B5F52]/10
Text: text-[#212427]
Placeholder: placeholder:text-gray-400
Padding: px-4 py-3
Rounded: rounded-lg
```

**Textarea:**
```
Same as input fields
Additional: resize-none
Rows: varies (4-6 typical)
```

### Completion Indicators

**Complete Checkmark:**
```
Background: bg-[#DCF9E3]
Border: border border-[#3B5F52]
Icon: text-[#3B5F52]
Size: w-5 h-5
Rounded: rounded-full
```

**Progress Bar:**
```
Background: bg-gray-200
Fill: bg-[#3B5F52]
Height: h-1.5
Rounded: rounded-full
Width: varies
Transition: transition-all duration-500
```

---

## 🖼️ VISUAL SYSTEM

### Design Philosophy
**"Thinking Visuals" - Not Photos**
- ✅ Diagrams, flow charts, process maps
- ✅ Typographic blocks, structured layouts
- ✅ Data visualizations, tables, grids
- ✅ Icons (line-style, minimal)
- ❌ Stock photos, decorative images
- ❌ Illustrations, mascots, characters

### Icon Style
- **Library:** Lucide React (preferred)
- **Style:** Outline/stroke (not filled)
- **Size:** w-4 h-4 (small), w-5 h-5 (medium), w-6 h-6 (large)
- **Color:** Inherit from parent or explicit gray/brand colors
- **Stroke Width:** Default (2px)

### Shadow System
```
Subtle: shadow-sm
Card: shadow-md
Elevated: shadow-lg
Focus: shadow-lg shadow-[#3B5F52]/5
Emphasis: shadow-xl
```

### Transitions
```
Standard: transition-colors duration-200
All: transition-all duration-300
Smooth: transition-all duration-500
```

---

## 📱 RESPONSIVE BEHAVIOR

### Breakpoints
- **Mobile:** < 768px (default)
- **Tablet:** md: (768px)
- **Desktop:** lg: (1024px)
- **Wide:** xl: (1280px)

### Adaptive Patterns
- **Grid:** Stack on mobile, 2-col tablet, 3-col desktop
- **Padding:** px-6 mobile → px-12 desktop
- **Typography:** text-4xl mobile → text-5xl desktop
- **Hidden Elements:** hidden md:flex (show on tablet+)

---

## ✨ INTERACTION STATES

### Hover
- Buttons: Darken background by ~10%
- Cards: Lighten border (gray-200 → gray-300)
- Links: Change color to brand green (#3B5F52)
- Ghost buttons: Add subtle background (bg-gray-50)

### Focus
- Inputs: Border change + ring (border-[#3B5F52] + ring-2)
- Cards: Border + shadow (border-[#3B5F52] + shadow-lg)
- Buttons: Outline for accessibility

### Active/Pressed
- Buttons: Scale down slightly (scale-95)
- Cards: No scale change
- Inputs: No visual change from focus

### Disabled
- Opacity: opacity-50
- Cursor: cursor-not-allowed
- No hover effects
- Background: Remains same or slightly muted

---

## 🎭 BRAND PERSONALITY

### Visual Tone
- **Premium:** Generous white space, refined typography
- **Intelligent:** Structured layouts, data-driven visuals
- **Calm:** Muted colors, smooth transitions
- **Professional:** Consulting-grade aesthetic, BCG-inspired
- **Trustworthy:** Clear hierarchy, consistent patterns

### Voice & Copy
- **Concise:** Short, punchy headlines
- **Clear:** Plain language, avoid jargon
- **Guiding:** Supportive, not pushy
- **Expert:** Confident, knowledgeable
- **Human:** Conversational but professional

---

## 📏 DESIGN TOKENS

### Core Tokens
```
Brand Primary: #3B5F52
Brand Secondary: #6b9d89
Brand Dark: #0E3E1B
Background Cream: #FAF9F7
Background Beige: #F5F3EF
Text Primary: #212427
Text Secondary: #6B7280
Success: #DCF9E3
Border Light: #E5E7EB
White: #FFFFFF
```

### Spacing Tokens
```
xs: 0.5rem (8px)
sm: 0.75rem (12px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

---

## 🏗️ IMPLEMENTATION NOTES

### Tailwind CSS V4
- All styles use Tailwind utility classes
- Custom colors: Use bracket notation `bg-[#3B5F52]`
- Responsive: Mobile-first, use lg: md: prefixes
- Dark mode: Not implemented (system is light-only)

### Consistency Rules
1. Always use defined color palette (no custom colors)
2. Use spacing scale consistently (no arbitrary values)
3. Follow component patterns (don't reinvent)
4. Maintain 3-panel layout across screens
5. Keep header/footer consistent

### Accessibility
- Focus states visible (ring-2 on inputs)
- Color contrast meets WCAG AA minimum
- Font sizes readable (minimum 14px)
- Interactive elements clearly marked
- Keyboard navigation supported

---

## 🎨 QUICK REFERENCE

**Most Used Colors:**
- Primary button: `bg-[#3B5F52] hover:bg-[#2D4840] text-white`
- Card: `bg-white border border-gray-200 rounded-xl`
- Input: `bg-gray-50 focus:bg-white focus:border-[#3B5F52]`
- Page background: `bg-[#FAF9F7]`
- Text: `text-[#212427]` (headings), `text-gray-600` (body)

**Most Used Classes:**
- Container: `max-w-[1600px] mx-auto px-6 lg:px-12`
- Section spacing: `py-8 lg:py-12`
- Card padding: `p-6 lg:p-8`
- Grid: `grid lg:grid-cols-3 gap-6 lg:gap-8`

---

**Last Updated:** February 8, 2026  
**Source:** Lean Canvas V2 + Complete LeanAI System  
**Status:** ✅ Production Standard
