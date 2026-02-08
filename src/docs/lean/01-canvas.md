# Lean Canvas V2 - Complete Design Specification

**Version:** 2.0  
**Status:** Production Ready  
**Date:** February 6, 2026  
**Design System:** StartupAI Luxury SaaS

---

## 🎯 Design Philosophy

**Transform the traditional Lean Canvas into a clear, elegant, executive-grade UI that feels intelligent, calm, and decision-focused.**

### Core Principles
1. **Consulting-grade clarity** - BCG/McKinsey level polish
2. **Strategic focus** - Support deep thinking, not speed
3. **High information density** - No clutter
4. **Premium aesthetic** - Luxury SaaS experience
5. **Calm deliberation** - No anxiety, no rush

---

## 📐 Page Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (Sticky)                                             │
│  Logo | Progress (7/11) | ████████░░░ 64% | Save ⬇ ➤      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PAGE TITLE                                                  │
│  Lean Canvas                                                 │
│  Strategic one-page business model template...              │
│                                                              │
├─────────┬─────────────────┬────────────────────────────────┤
│ COL 1   │     COL 2       │          COL 3                 │
│         │                 │                                 │
│ Problem │   Solution      │   Customer Segments            │
│ ▓▓▓▓▓▓  │   ▓▓▓▓▓▓       │   ▓▓▓▓▓▓                      │
│         │                 │                                 │
│         │ ┌─────────────┐ │                                 │
│Existing │ │ UNIQUE      │ │   Early Adopters               │
│Alterna- │ │ VALUE PROP  │ │   ▓▓▓▓▓▓                      │
│tives    │ │ (HIGHLIGHT) │ │                                 │
│ ▓▓▓▓    │ └─────────────┘ │                                 │
│         │                 │   Cost Structure               │
│         │ Unfair Advant.  │   ▓▓▓▓▓▓                      │
│Key      │   ▓▓▓▓▓▓       │                                 │
│Metrics  │                 │   Revenue Streams              │
│ ▓▓▓▓▓   │   Channels      │   ▓▓▓▓▓▓                      │
│         │   ▓▓▓▓▓▓       │                                 │
└─────────┴─────────────────┴────────────────────────────────┘
│                                                              │
│  BOTTOM CTA SECTION                                          │
│  "Ready to validate?" | Save Draft | Export Canvas          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette

### Primary Colors

**Background:**
- Page background: `#FAF9F7` (warm cream/beige)
- Card background: `#FFFFFF` (pure white)
- Input background (unfocused): `#F9FAFB` (very light gray)
- Input background (focused): `#FFFFFF` (white)

**Brand Colors:**
- Primary emerald: `#0d5f4e` (main accent color)
- Emerald dark (hover): `#0a4a3a` (darker for hover states)
- Emerald light: `#DCF9E3` (for backgrounds and highlights)
- Emerald very light: `#DCF9E3` at 30% opacity (for UVP card)

**Text Colors:**
- Heading text: `#212427` (near-black, rich)
- Body text: `#6B7280` (gray-600)
- Muted text: `#9CA3AF` (gray-400)
- Placeholder text: `#D1D5DB` (gray-300)

**Borders:**
- Default border: `#E5E7EB` (gray-200, hairline)
- Hover border: `#D1D5DB` (gray-300)
- Focus border: `#0d5f4e` (emerald)
- Header border: `#E5E7EB` (gray-200)

**Interactive States:**
- Checkmark background: `#DCF9E3` (light green)
- Checkmark icon: `#0d5f4e` (emerald)
- Progress bar track: `#E5E7EB` (gray-200)
- Progress bar fill: `#0d5f4e` (emerald)

### Special Highlights

**Unique Value Proposition Card:**
- Background: `#DCF9E3` at 30% opacity
- Border: `#0d5f4e` at 2px width
- Creates visual hierarchy and focus

---

## 🎭 Typography System

### Fonts

**Primary Font:**
- Sans-serif: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- Use for: body text, inputs, labels, UI elements

**Accent Font (Optional):**
- Serif: Playfair Display, Georgia, serif
- Use for: page title only (if desired for elegance)

### Type Scale

**Page Title:**
- Size: 40px (mobile), 48px (desktop)
- Weight: 300 (light)
- Color: #212427
- Line height: 1.2
- Margin bottom: 12px

**Page Subtitle:**
- Size: 18px
- Weight: 400 (regular)
- Color: #6B7280
- Line height: 1.6
- Max width: 768px

**Section Title:**
- Size: 20px (mobile), 24px (desktop)
- Weight: 300 (light)
- Color: #212427
- Line height: 1.3
- Margin bottom: 8px

**Section Guidance:**
- Size: 14px
- Weight: 400 (regular)
- Color: #6B7280
- Line height: 1.5
- Margin bottom: 16px

**Input Text:**
- Size: 15px
- Weight: 400 (regular)
- Color: #212427
- Line height: 1.6

**Placeholder Text:**
- Size: 15px
- Weight: 400 (regular)
- Color: #9CA3AF
- Line height: 1.6

**Button Text:**
- Size: 14px
- Weight: 500 (medium)
- Letter spacing: 0.01em

**Progress Label:**
- Size: 12px (label)
- Size: 14px (numbers)
- Weight: 500 (medium)

---

## 📏 Spacing & Layout

### Container
- Max width: 1600px
- Horizontal padding: 24px (mobile), 48px (desktop)
- Vertical padding: 32px (mobile), 48px (desktop)

### Grid System
- Columns: 1 (mobile), 3 (desktop 1024px+)
- Gap between columns: 24px (mobile), 32px (desktop)
- Gap between cards: 24px (mobile), 32px (desktop)

### Card Spacing
- Padding: 24px (mobile), 32px (desktop)
- Border radius: 12px
- Border width: 1px

### Input Fields
- Padding: 12px 16px
- Border radius: 8px
- Border width: 1px
- Min height: varies by section (see rows below)

### Section Heights (rows)
- Problem: 6 rows (~144px)
- Solution: 6 rows (~144px)
- Unique Value Proposition: 5 rows (~120px)
- Customer Segments: 6 rows (~144px)
- Existing Alternatives: 4 rows (~96px)
- Unfair Advantage: 4 rows (~96px)
- Key Metrics: 5 rows (~120px)
- Channels: 4 rows (~96px)
- Early Adopters: 4 rows (~96px)
- Cost Structure: 4 rows (~96px)
- Revenue Streams: 4 rows (~96px)

### Margins
- Section title to guidance: 8px
- Guidance to input: 16px
- Between sections: 24px (mobile), 32px (desktop)
- Page title to grid: 48px

---

## 🖼️ Wireframe Details

### Header (Sticky, Top of Page)

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ [S] StartupAI    Completion 7/11 [████░░] 64%  💾 ⬇ ➤  │
└─────────────────────────────────────────────────────────┘
```

**Elements:**
1. **Logo** (left)
   - Icon: 32x32px emerald square with white "S"
   - Text: "StartupAI" at 18px
   - Clickable, navigates to home

2. **Progress Group** (center-right, hidden on mobile)
   - Label: "Completion" (12px gray text)
   - Numbers: "7/11" (14px medium weight)
   - Progress bar: 128px wide, 6px height
   - Percentage: "64%" (14px)

3. **Action Buttons** (right)
   - Save: text + icon, gray hover
   - Download: icon only
   - Share: icon only
   - 8px gap between buttons

**Mobile Progress:**
- Below header
- Full-width progress bar
- Completion ratio on right

---

### Page Title Section

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← View Classic Lean Canvas                             │
│                                                          │
│  Lean Canvas                                             │
│  A strategic one-page business model template...        │
│  Last saved 2:45 PM                                      │
└─────────────────────────────────────────────────────────┘
```

**Elements:**
1. Breadcrumb link (small, emerald)
2. Main title (48px, light weight)
3. Description (18px, gray, max 768px wide)
4. Save timestamp (14px, light gray)

---

### Canvas Section Card (Standard)

**Layout:**
```
┌───────────────────────────────────────────┐
│  Problem                               ✓  │
│  List the top 1-3 problems...             │
│                                           │
│  ┌─────────────────────────────────────┐ │
│  │ User input text area                │ │
│  │ e.g., Small businesses struggle...  │ │
│  │                                     │ │
│  └─────────────────────────────────────┘ │
└───────────────────────────────────────────┘
```

**Structure:**
1. **Header Row:**
   - Section title (left, 24px light)
   - Checkmark (right, 20px circle, conditional)

2. **Guidance Text:**
   - 14px gray
   - Below title
   - Helpful prompt

3. **Input Area:**
   - Full width
   - Gray background when unfocused
   - White background when focused
   - Emerald border when focused
   - Placeholder with example text

**States:**

**Unfocused:**
- Border: 1px solid #E5E7EB (gray)
- Background: #F9FAFB (light gray)
- No shadow

**Focused:**
- Border: 1px solid #0d5f4e (emerald)
- Background: #FFFFFF (white)
- Ring: 2px at 10% opacity emerald
- Subtle shadow

**Completed:**
- Checkmark appears (green circle with white check)
- All other styles remain

---

### Unique Value Proposition Card (Special)

**Layout:**
```
┌───────────────────────────────────────────┐
│█ Unique Value Proposition              ✓ █│
│█ Single, clear, compelling message...   █ │
│█                                         █ │
│█ ┌─────────────────────────────────────┐█ │
│█ │ User input (white background)      │█ │
│█ │ e.g., The only CRM that...         │█ │
│█ └─────────────────────────────────────┘█ │
└───────────────────────────────────────────┘
```

**Differences from Standard Card:**
- Background: Light green tint (#DCF9E3 at 30%)
- Border: 2px solid #0d5f4e (thicker)
- Input still has white background
- Visually prioritized

---

### Three-Column Layout (Desktop)

**Column 1 (Problem Side):**
1. Problem (tall, 6 rows)
2. Existing Alternatives (medium, 4 rows)
3. Key Metrics (medium-tall, 5 rows)

**Column 2 (Solution Side):**
1. Solution (tall, 6 rows)
2. Unique Value Proposition (medium-tall, 5 rows, HIGHLIGHTED)
3. Unfair Advantage (medium, 4 rows)
4. Channels (medium, 4 rows)

**Column 3 (Customer & Economics):**
1. Customer Segments (tall, 6 rows)
2. Early Adopters (medium, 4 rows)
3. Cost Structure (medium, 4 rows)
4. Revenue Streams (medium, 4 rows)

**Visual Balance:**
- All columns roughly equal total height
- Logical grouping by business model area
- Natural reading flow top to bottom

---

### Bottom CTA Section

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  Ready to validate your canvas?                          │
│  Export your completed canvas or continue refining...    │
│                                                          │
│                         [Save Draft]  [Export Canvas ➤] │
└─────────────────────────────────────────────────────────┘
```

**Elements:**
1. **Text Block** (left):
   - Heading: 18px medium
   - Description: 14px gray

2. **Buttons** (right):
   - Save Draft: gray background, gray-900 text
   - Export Canvas: emerald background, white text, icon
   - 12px gap between buttons
   - Export disabled until 100% complete

---

## 🎬 Interaction & Animation

### Focus States

**Card Focus:**
- Transition duration: 300ms
- Easing: ease-out
- Border color: gray → emerald
- Shadow: none → soft shadow
- Background: gray-50 → white
- Ring: 0 → 2px emerald at 10% opacity

**Input Focus:**
- Same as card focus
- Cursor changes to text

### Completion Animation

**When Section Completes:**
- Checkmark fades in (200ms)
- Small scale animation (0.9 → 1.0)
- No confetti or celebration (too playful)

### Progress Bar

**When Completion Updates:**
- Width animates (500ms ease-out)
- Smooth fill from left to right
- Percentage updates instantly

### Hover States

**Save Button:**
- Background: transparent → gray-50
- Text color: gray-700 → emerald
- Transition: 200ms

**Export Button:**
- Background: emerald → darker emerald
- Transition: 200ms
- Slight scale: 1.0 → 1.02 (subtle)

**Card Hover:**
- None (cards are not clickable)

---

## 📱 Responsive Behavior

### Desktop (1024px+)
- 3-column grid
- Full header with progress
- All sections visible
- Max width: 1600px
- Generous spacing

### Tablet (768px - 1023px)
- 2-column grid or single column
- Compressed spacing
- Header simplified
- Progress bar maintained

### Mobile (<768px)
- Single column
- Stacked sections
- Progress bar below header
- Reduced padding (24px)
- Smaller typography
- Touch-friendly inputs (min 44px)

---

## ♿ Accessibility

### Focus Management
- Clear focus indicators (emerald ring)
- Keyboard navigation works
- Tab order: header → inputs → buttons
- Skip to content option

### Color Contrast
- All text meets WCAG AA
- Emerald on white: 7.2:1 ratio
- Gray-600 on cream: 4.8:1 ratio
- Placeholder text: 3.5:1 minimum

### Screen Readers
- Semantic HTML structure
- Label associations for inputs
- ARIA labels for progress
- Completion status announced
- Button states clear

### Keyboard Support
- Tab through all inputs
- Enter to save
- Escape to blur focus
- No keyboard traps

---

## 📊 Section Content Guidelines

### Problem
**Guidance:** "List the top 1-3 problems your customers face"  
**Placeholder:** "e.g., Small businesses struggle to manage customer data across multiple tools, leading to missed opportunities and poor customer experience..."  
**Character goal:** 100-300 characters

### Customer Segments
**Guidance:** "Who are your target customers?"  
**Placeholder:** "e.g., B2B SaaS companies with 10-50 employees, primarily in tech sector, annual revenue $1M-$10M, growth-focused..."  
**Character goal:** 100-250 characters

### Unique Value Proposition
**Guidance:** "Single, clear, compelling message that states why you are different and worth buying"  
**Placeholder:** "e.g., The only CRM that integrates natively with your existing tools in under 5 minutes, no technical setup required..."  
**Character goal:** 80-150 characters (most concise)

### Solution
**Guidance:** "Outline your core product or service"  
**Placeholder:** "e.g., Cloud-based CRM with AI-powered automation, native integrations with 50+ tools, real-time analytics dashboard..."  
**Character goal:** 100-300 characters

### Channels
**Guidance:** "How will you reach your customers?"  
**Placeholder:** "e.g., Content marketing (SEO blog), LinkedIn outreach, partner referrals, product-led growth, industry conferences..."  
**Character goal:** 80-200 characters

### Revenue Streams
**Guidance:** "How will you make money?"  
**Placeholder:** "e.g., Monthly subscription ($49-$199/mo based on team size), annual plans with 20% discount, enterprise custom pricing..."  
**Character goal:** 100-250 characters

### Cost Structure
**Guidance:** "What are your major costs?"  
**Placeholder:** "e.g., Cloud infrastructure (AWS), engineering team (5 FTEs), sales & marketing (30% of revenue), customer support..."  
**Character goal:** 100-250 characters

### Key Metrics
**Guidance:** "What key numbers tell you how your business is doing?"  
**Placeholder:** "e.g., Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Churn Rate, Net Promoter Score (NPS), Active Users..."  
**Character goal:** 100-200 characters

### Unfair Advantage
**Guidance:** "Something that cannot easily be copied or bought"  
**Placeholder:** "e.g., Proprietary AI model trained on 10M+ customer interactions, exclusive partnerships with top platforms, founding team from Google/Salesforce..."  
**Character goal:** 100-250 characters

### Existing Alternatives
**Guidance:** "What are customers using today?"  
**Placeholder:** "e.g., Salesforce (too complex and expensive), HubSpot (limited integrations), spreadsheets (manual and error-prone)..."  
**Character goal:** 80-200 characters

### Early Adopters
**Guidance:** "Characteristics of your first customers"  
**Placeholder:** "e.g., Tech-savvy founders aged 30-45, frustrated with current CRM, willing to try new tools, active in startup communities..."  
**Character goal:** 80-200 characters

---

## 🎯 Completion Logic

**Section Complete When:**
- User has typed 20+ characters
- Text is not just whitespace
- Checkmark appears immediately
- Progress updates in real-time

**Overall Progress:**
- Numerator: Completed sections count
- Denominator: Total sections (11)
- Percentage: (completed / 11) × 100
- Rounds to nearest integer

**Export Button:**
- Disabled when < 100% complete
- Enabled when all 11 sections done
- Changes from gray to emerald when ready

---

## 💾 Save Behavior

**Auto-save (Optional):**
- Every 30 seconds
- On blur of any input
- Debounced to avoid spam

**Manual Save:**
- Click "Save" button in header
- Timestamp updates: "Last saved 2:45 PM"
- Subtle success feedback (no modal)

**Export:**
- Generates PDF or image
- Downloads to user's device
- Includes all section content
- Maintains visual design

---

## 🎨 Visual Hierarchy Priorities

1. **Unique Value Proposition** (most important)
   - Green highlight
   - Thicker border
   - Center column placement

2. **Focused Input** (active state)
   - Emerald border
   - Shadow and ring
   - White background

3. **Section Titles**
   - Large light typography
   - Near-black color
   - Clear hierarchy

4. **Progress Indicators**
   - Completion count
   - Progress bar
   - Checkmarks

5. **Guidance Text**
   - Muted gray
   - Helpful but secondary
   - Does not compete

---

## 🚫 What NOT to Include

**Avoid:**
- ❌ Illustrations or decorative graphics
- ❌ Sketch effects or hand-drawn lines
- ❌ Heavy drop shadows
- ❌ Gradients on backgrounds
- ❌ Colorful icons
- ❌ Playful animations (bounce, wiggle)
- ❌ Gamification elements (points, badges)
- ❌ Social sharing buttons
- ❌ Distracting tooltips
- ❌ Video tutorials inline
- ❌ Chat widgets
- ❌ Promotional banners

**Keep:**
- ✅ Clean, minimal cards
- ✅ Hairline borders
- ✅ Calm transitions
- ✅ Strategic focus
- ✅ Professional polish
- ✅ Executive aesthetic

---

## ✨ Design Rationale

### Why This Layout?

**Three Columns:**
- Mirrors traditional Lean Canvas
- Logical business model grouping
- Familiar to founders and consultants
- Desktop-optimized for strategic work

**Unique Value Proposition Highlight:**
- Most critical section
- Should stand out visually
- Center placement = focal point
- Green = "this is it" moment

**Completion Indicators:**
- Reduces anxiety
- Shows progress
- Encourages completion
- No pressure, just information

**Calm Focus States:**
- Supports deep thinking
- No distraction
- Deliberate, not rushed
- Feels intelligent

### Why These Colors?

**Warm Cream Background:**
- Softer than pure white
- Reduces eye strain
- Premium, sophisticated
- Consulting aesthetic (like paper)

**Emerald Green Accent:**
- Professional (not playful)
- Growth and nature symbolism
- High contrast on cream
- Unique (not blue like everyone else)

**Minimal Color Usage:**
- Focus on content
- Not visually noisy
- Supports concentration
- Timeless aesthetic

---

## 📐 Success Criteria

**The design succeeds if:**

1. ✅ Canvas feels executive and trustworthy
2. ✅ Users can think clearly while filling it out
3. ✅ UI feels premium and intelligent
4. ✅ Experience supports strategic thinking, not speed
5. ✅ All sections are easy to find and understand
6. ✅ Progress is obvious without being pushy
7. ✅ No anxiety or confusion
8. ✅ Suitable for founders, investors, and operators
9. ✅ Feels like a luxury product
10. ✅ Maintains focus on business model, not UI

---

## 🎓 Design Inspirations

**Consulting Firms:**
- BCG presentations (clarity, spacing)
- McKinsey reports (typography, hierarchy)
- Bain slide decks (minimal color use)

**Premium SaaS Products:**
- Linear (clean, focused)
- Notion (calm, spacious)
- Stripe (premium polish)

**NOT Inspired By:**
- ❌ Canva (too playful)
- ❌ Miro (too colorful)
- ❌ Figma (too designer-focused)

---

## 🔄 Comparison to Classic Lean Canvas

| Aspect | Classic | V2 |
|--------|---------|-----|
| Layout | Grid boxes | Refined cards |
| Typography | Standard | Light, elegant |
| Colors | Basic | Premium emerald |
| Spacing | Tight | Generous |
| Focus | Speed | Strategy |
| Aesthetic | Functional | Luxury SaaS |
| Progress | None | Real-time tracking |
| UVP | Equal weight | Highlighted |
| Mobile | Basic | Fully responsive |
| Feel | Academic | Executive |

---

**File Location:** `/docs/lean/01-canvas.md`  
**Status:** Complete Design Specification  
**Ready for:** Design handoff, Development, Stakeholder review  
**Last Updated:** February 6, 2026
