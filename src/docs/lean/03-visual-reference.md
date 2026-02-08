# Lean Canvas V2 - Quick Visual Reference

**Document:** Fast lookup guide for designers and developers  
**Purpose:** Instant access to specs without reading full documentation  
**Use:** Keep this open while building

---

## 🎨 Color Palette at a Glance

```
BACKGROUNDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Page:          #FAF9F7   (warm cream)
Card:          #FFFFFF   (white)
Input:         #F9FAFB   (light gray, unfocused)
Input:         #FFFFFF   (white, focused)
UVP Card:      #DCF9E3   at 30% opacity (light green tint)


EMERALD GREEN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary:       #0d5f4e   (brand emerald)
Hover:         #0a4a3a   (darker emerald)
Light:         #DCF9E3   (for backgrounds)
Very Light:    #DCF9E3   at 10% (for rings)


TEXT COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Headings:      #212427   (near-black)
Body:          #6B7280   (gray-600)
Muted:         #9CA3AF   (gray-400)
Placeholder:   #D1D5DB   (gray-300)


BORDERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Default:       #E5E7EB   (gray-200, 1px)
Hover:         #D1D5DB   (gray-300)
Focus:         #0d5f4e   (emerald, 1px + ring)
UVP Special:   #0d5f4e   (emerald, 2px)
```

---

## 📏 Typography Quick Reference

```
SIZES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Page Title:         48px (desktop), 40px (mobile)
Section Title:      24px (desktop), 20px (mobile)
Subtitle:           18px
Input Text:         15px
Guidance:           14px
Buttons:            14px
Labels:             12px


WEIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Light:              300 (titles)
Regular:            400 (body, inputs)
Medium:             500 (buttons, labels)


LINE HEIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tight:              1.2  (page titles)
Normal:             1.3  (section titles)
Relaxed:            1.5  (guidance)
Loose:              1.6  (body text, inputs)
```

---

## 📐 Spacing System (8px Grid)

```
MICRO           4px      Fine-tuning
SMALL           8px      Tight elements
MEDIUM          12px     Related items
BASE            16px     Standard gap
LARGE           24px     Section spacing (mobile)
XLARGE          32px     Section spacing (desktop)
XXLARGE         48px     Major sections
XXXLARGE        64px     Page sections


COMMON APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card padding:           24px (mobile), 32px (desktop)
Input padding:          12px 16px
Button padding:         12px 24px
Column gap:             24px (mobile), 32px (desktop)
Between cards:          24px (mobile), 32px (desktop)
Header padding:         16px 24px
Page title margin:      48px bottom
```

---

## 🎭 Component Dimensions

```
HEADER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Height:                 64px (approx)
Logo icon:              32 × 32px
Logo text:              18px
Progress bar:           128px wide × 6px tall
Action buttons:         32px height (icons only)


SECTION CARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Border radius:          12px
Border width:           1px (standard), 2px (UVP)
Padding:                24px (mobile), 32px (desktop)
Title height:           ~32px (with margins)
Guidance height:        ~40px (with margins)
Input rows vary:        4, 5, or 6 rows


INPUT FIELDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Border radius:          8px
Padding:                12px vertical, 16px horizontal
Line height:            1.6 (24px at 15px font)
4 rows:                 ~96px
5 rows:                 ~120px
6 rows:                 ~144px


CHECKMARKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Circle diameter:        20px
Icon size:              12px
Border width:           1px


BUTTONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Padding:                12px vertical, 24px horizontal
Border radius:          8px
Icon size:              16px
Min touch target:       44px (mobile)
```

---

## 📱 Responsive Breakpoints

```
MOBILE          < 768px
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Layout:                 Single column
Grid gap:               24px
Card padding:           24px
Font sizes:             Reduced 10-20%
Progress:               Below header


TABLET          768px - 1023px
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Layout:                 2 columns or single
Grid gap:               24-28px
Card padding:           28px
Font sizes:             Standard


DESKTOP         1024px+
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Layout:                 3 columns
Grid gap:               32px
Card padding:           32px
Font sizes:             Full scale
Max width:              1600px
```

---

## ⚡ Animation Timings

```
FAST            100-200ms       Button hovers, micro-interactions
NORMAL          300ms           Focus states, card interactions
SLOW            500ms           Progress bar fills
VERY SLOW       1000ms          Page transitions (if any)


COMMON TRANSITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Button hover:           200ms ease-out
Input focus:            300ms ease-out
Checkmark appear:       200ms ease-out
Progress bar:           500ms ease-out
Border color:           300ms ease-out
Background color:       300ms ease-out
Shadow:                 300ms ease-out
```

---

## 🎯 Section Heights (Desktop)

```
COLUMN 1 (Problem Side)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Problem                 6 rows  ~144px + padding = ~208px
Existing Alternatives   4 rows  ~96px  + padding = ~160px
Key Metrics            5 rows  ~120px + padding = ~184px
                               TOTAL: ~552px


COLUMN 2 (Solution Side)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Solution               6 rows  ~144px + padding = ~208px
UVP (highlighted)      5 rows  ~120px + padding = ~184px
Unfair Advantage       4 rows  ~96px  + padding = ~160px
Channels              4 rows  ~96px  + padding = ~160px
                               TOTAL: ~712px


COLUMN 3 (Customer & Economics)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Customer Segments      6 rows  ~144px + padding = ~208px
Early Adopters         4 rows  ~96px  + padding = ~160px
Cost Structure         4 rows  ~96px  + padding = ~160px
Revenue Streams        4 rows  ~96px  + padding = ~160px
                               TOTAL: ~688px

Note: Add 32px gaps between cards
```

---

## 🎨 State Variations

```
CARD STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Default:        White bg, gray border, no shadow
Hover:          White bg, darker gray border, no shadow
Focused:        White bg, emerald border, subtle shadow + ring
Completed:      Same as focused + checkmark visible


INPUT STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Unfocused:      Light gray bg, gray border, gray placeholder
Focused:        White bg, emerald border, ring, darker text
Filled:         Same as unfocused, black text
Completed:      Same as filled + checkmark


BUTTON STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Default:        Emerald bg, white text
Hover:          Darker emerald bg, white text, scale 1.02
Active:         Even darker, scale 1.0
Disabled:       Gray bg, gray text, cursor not-allowed
```

---

## 🔍 Focus & Ring Specs

```
FOCUS INDICATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Border:         1px solid #0d5f4e
Ring:           2px at #0d5f4e with 10% opacity
Offset:         2px from border
Shadow:         Soft, 0px 2px 8px rgba(0,0,0,0.05)
Transition:     300ms ease-out


APPLIES TO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ All input textareas
✓ All buttons
✓ Logo link
✗ Section cards (not focusable)
✗ Checkmarks (not interactive)
```

---

## 📊 Progress Calculation

```
COMPLETION LOGIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Section complete:       > 20 characters (not whitespace)
Total sections:         11
Completed count:        Count sections meeting criteria
Percentage:             (completed / 11) × 100, rounded


DISPLAY FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Fraction:               "7/11"
Percentage:             "64%"
Progress bar:           Visual fill matches percentage
Update:                 Real-time as user types
```

---

## 🎪 Special: UVP Card

```
UNIQUE VALUE PROPOSITION DIFFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background:             #DCF9E3 at 30% opacity (light green)
Border width:           2px (vs 1px standard)
Border color:           #0d5f4e (emerald)
Input background:       White (keeps input clean)
Position:               Column 2, 2nd card
Visual weight:          Strongest on page
Purpose:                Focal point of entire canvas
```

---

## 🧩 Grid Layout Reference

```
DESKTOP (1024px+)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌──────────┬────────────┬──────────┐
│  COLUMN  │   COLUMN   │  COLUMN  │
│    1     │     2      │    3     │
│          │            │          │
│ Problem  │  Solution  │ Customer │
│          │            │ Segments │
│          │  ┌──────┐  │          │
│ Existing │  │ UVP  │  │ Early    │
│ Altern.  │  │GREEN │  │ Adopters │
│          │  └──────┘  │          │
│ Key      │  Unfair    │ Cost     │
│ Metrics  │  Advantage │ Struct.  │
│          │            │          │
│          │  Channels  │ Revenue  │
│          │            │ Streams  │
└──────────┴────────────┴──────────┘

Max Width: 1600px
Gap: 32px
Padding: 48px horizontal
```

---

## 🎬 Interaction Checklist

```
USER CAN...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Click logo to navigate home
✓ Tab through all inputs sequentially
✓ Type in any textarea
✓ See checkmark when section complete
✓ Watch progress bar fill in real-time
✓ Click Save to manually save
✓ Click Download to export
✓ Click Share (if implemented)
✓ See last saved timestamp
✓ Navigate with keyboard only
✓ Use screen reader successfully
✓ View on mobile/tablet/desktop
✓ See clear focus indicators
✓ Complete sections in any order


AUTO BEHAVIORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Save on blur (when leaving input)
✓ Save every 30 seconds (debounced)
✓ Update progress immediately
✓ Show checkmark at 20+ characters
✓ Enable Export at 100% complete
✓ Restore from local storage on load
✓ Warn before leaving with unsaved changes
```

---

## 📦 Export Deliverables

```
DESIGN FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Figma/Sketch source file
□ Component library
□ Style guide PDF
□ Asset exports (icons as SVG)
□ Color swatches
□ Typography samples


CODE ASSETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ React component structure
□ Tailwind config
□ CSS custom properties
□ State management setup
□ API endpoint specs
□ Type definitions


DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Full design spec (01-canvas.md)
□ Implementation prompts (02-implementation-prompts.md)
□ Visual reference (03-visual-reference.md)
□ Component usage guide
□ Accessibility checklist
□ Browser support matrix
```

---

## ⚠️ Common Pitfalls to Avoid

```
DON'T
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✗ Use heavy drop shadows
✗ Add illustrations or decorative graphics
✗ Make cards clickable (they're not interactive)
✗ Over-animate (keep it calm)
✗ Use bright colors beyond emerald
✗ Add gamification (points, badges)
✗ Make it playful or fun
✗ Rush the user
✗ Validate too strictly
✗ Block progression


DO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Keep it minimal and clean
✓ Use generous whitespace
✓ Support strategic thinking
✓ Make focus states obvious
✓ Ensure keyboard accessibility
✓ Provide realistic examples
✓ Save frequently and silently
✓ Maintain calm aesthetic
✓ Test on real devices
✓ Follow the 8px grid system
```

---

## 🚀 Quick Implementation Path

```
DAY 1: Foundation (4-6 hours)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Page structure and header
□ Basic grid layout
□ Standard card component
□ Input fields with states


DAY 2: Content & Polish (4-6 hours)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ All 11 sections with content
□ UVP highlighted card
□ Progress tracking system
□ Bottom CTA section


DAY 3: Interactions (3-4 hours)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Save functionality
□ Completion logic
□ Focus states and animations
□ Progress bar updates


DAY 4: Responsive & A11y (3-4 hours)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Mobile layout
□ Tablet layout
□ Keyboard navigation
□ Screen reader support


DAY 5: Testing & Export (2-3 hours)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Cross-browser testing
□ Device testing
□ Export functionality
□ Final polish
```

---

**Quick Stats:**
- Total sections: 11
- Color palette: 12 colors
- Breakpoints: 3
- Animation timings: 4
- Max container: 1600px
- Completion threshold: 20 characters

**Print this page for quick reference while building!**

---

**File:** `/docs/lean/03-visual-reference.md`  
**Status:** Ready for use  
**Last updated:** February 6, 2026
