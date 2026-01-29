# AI Chatbot - Visual Design Guide

## 🎨 Complete Visual Specification

This document provides exact visual specifications for the AI Startup Guide Chatbot, equivalent to a high-fidelity Figma design.

---

## 📐 Layout Dimensions

### **Collapsed State (FAB)**
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                              ╭─────╮│
│                              │  💬 ││ ← 56x56px
│                              │   3 ││ ← Badge (20x20px)
│                              ╰─────╯│
│                                  ↑  │
│                              24px   │
└─────────────────────────────────────┘
```

**Specifications:**
- Position: `fixed right-24px bottom-24px`
- Size: `56x56px`
- Border Radius: `50%` (perfect circle)
- Background: `linear-gradient(135deg, #0D5F4E 0%, #0A4A3B 100%)`
- Shadow: `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)`
- Icon: MessageSquare (24x24px, white)
- Badge: 20x20px circle, `#EF4444`, -4px top/right
- Pulse ring: Same size, `#0D5F4E`, 75% opacity, animate-ping

---

## 📱 Expanded State Layout

```
┌──────────────────────────────────────┐
│ ┌────────────────────────────────┐   │
│ │ HEADER (Gradient)              │   │
│ │ 🎯 Atlas — Startup Strategist  │   │ 64px
│ │ ● Active in: Dashboard         │   │
│ └────────────────────────────────┘   │
│ ┌────────────────────────────────┐   │
│ │ PROGRESS BAR                   │   │ 76px
│ │ Startup Stage: Validation 68%  │   │
│ └────────────────────────────────┘   │
│ ┌────────────────────────────────┐   │
│ │                                │   │
│ │ MESSAGE STREAM                 │   │
│ │ (Scrollable)                   │   │ Flex-1
│ │                                │   │
│ │                                │   │
│ └────────────────────────────────┘   │
│ ┌────────────────────────────────┐   │
│ │ QUICK ACTIONS (4 buttons)      │   │ 88px
│ └────────────────────────────────┘   │
│ ┌────────────────────────────────┐   │
│ │ INPUT FIELD                    │   │ 72px
│ └────────────────────────────────┘   │
└──────────────────────────────────────┘
      384px (w-96)
```

**Panel Specifications:**
- Width: `384px` (w-96)
- Height: `100vh`
- Position: `fixed right-0 top-0 bottom-0`
- Background: `#FFFFFF`
- Border Left: `1px solid #E5E7EB`
- Shadow: `0 25px 50px rgba(0,0,0,0.25)`
- Z-index: `50`

---

## 🎨 Header Section (Detailed)

```
┌────────────────────────────────────────┐
│  ╭──╮                              ╳   │
│  │🎯│ Atlas — Startup Strategist       │
│  ╰──╯ ● Active in: Dashboard           │
└────────────────────────────────────────┘
```

### **Visual Specs:**

**Background Gradient:**
```css
background: linear-gradient(90deg, #0D5F4E 0%, #0A4A3B 100%);
padding: 16px;
```

**Avatar Circle:**
- Size: `40x40px`
- Background: `rgba(255,255,255,0.2)` + `backdrop-blur-sm`
- Border Radius: `50%`
- Emoji: 20px font-size
- Center aligned

**Text Hierarchy:**
- **Name + Role:** 14px, 500 weight, white
- **Context Badge:** 12px, 400 weight, `rgba(255,255,255,0.7)`
- **Green Dot:** 6x6px circle, `#34D399`, margin-right 6px

**Close Button (X):**
- Size: `20x20px`
- Color: `rgba(255,255,255,0.8)`
- Hover: `rgba(255,255,255,1)`
- Transition: `200ms ease`

---

## 📊 Progress Bar Section

```
┌────────────────────────────────────────┐
│ Startup Stage              Validation  │ ← 12px, gray-600
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░        │ ← Progress bar
│ 68% complete • 3 items need attention  │ ← 12px, gray-500
└────────────────────────────────────────┘
```

### **Visual Specs:**

**Container:**
- Padding: `12px 16px`
- Background: `linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)`
- Border Bottom: `1px solid #E5E7EB`

**Progress Bar:**
- Height: `6px`
- Border Radius: `9999px` (pill)
- Background: `#E5E7EB` (gray-200)
- Fill: `linear-gradient(90deg, #0D5F4E 0%, #059669 100%)`
- Width: Dynamic (e.g., `68%`)

**Text Styles:**
- **Label Row:** 12px, flex justify-between, gray-600, 500 weight
- **Subtext:** 12px, gray-500, margin-top 8px

---

## 💬 Message Bubble Anatomy

### **AI Message (Left-Aligned)**

```
╭──╮
│🎯│ Atlas • 2:34 PM
╰──╯
┌─────────────────────────────────────┐
│ ⚡ Guidance                          │ ← Type badge
│                                     │
│ Let's build your pitch deck. I'll   │
│ guide you through 10-12 slides that │ ← 14px, gray-800
│ tell your startup's story...        │
│                                     │
└─────────────────────────────────────┘
```

**Specifications:**
- Max Width: `85%`
- Background: `#FFFFFF`
- Border: `1px solid #E5E7EB`
- Border Radius: `12px`
- Padding: `16px`
- Margin Bottom: `16px`

**Agent Attribution (Above bubble):**
- Avatar: 24x24px, agent-color background (10% opacity)
- Name: 12px, 500 weight, gray-600
- Separator: `•` gray-400
- Time: 12px, gray-400

**Type Badge (Inside bubble):**
- Icon + Text row
- Icon: 16x16px
- Text: 12px, 500 weight, gray-600, capitalized
- Margin Bottom: 8px

**Content Text:**
- Font Size: 14px
- Line Height: 1.6 (relaxed)
- Color: `#1F2937` (gray-800)
- White Space: `pre-line` (preserves line breaks)

### **User Message (Right-Aligned)**

```
                   ┌──────────────────┐
                   │ What should I do │ ← White text
                   │ next?            │
                   └──────────────────┘
                            2:35 PM ↑
```

**Specifications:**
- Max Width: `85%`
- Background: `#0D5F4E`
- Border: None
- Border Radius: `12px`
- Padding: `16px`
- Text Color: `#FFFFFF`
- Margin Left: `auto` (right-align)

**Timestamp (Below bubble):**
- Font Size: 12px
- Color: `#9CA3AF` (gray-400)
- Text Align: `right`
- Margin Top: 4px

---

## 🎴 Action Card Design

```
┌─────────────────────────────────────┐
│ Complete Your Problem Statement     │
│                    [HIGH IMPACT] ← Badge
│ ─────────────────────────────────── │
│ Your Lean Canvas is missing a clear │
│ problem definition. This is critical │
│ for investor conversations.          │
│ ─────────────────────────────────── │
│ 📍 Lean Canvas → Problem Block      │
│ ─────────────────────────────────── │
│ ╭───────────────────────────────╮   │
│ │ "I can help you articulate... │   │ ← Preview
│ ╰───────────────────────────────╯   │
│ ─────────────────────────────────── │
│ [✓ Apply]  [✏️ Edit]  [✕]          │
└─────────────────────────────────────┐
```

### **Visual Specs:**

**Container:**
- Background: `#F9FAFB` (gray-50)
- Border: `1px solid #E5E7EB`
- Border Radius: `8px`
- Padding: `16px`
- Margin Top: `16px`

**Title Row:**
- Font Size: 14px
- Font Weight: 500
- Color: `#111827` (gray-900)
- Display: flex, justify-between

**Impact Badge:**
- Padding: `2px 8px`
- Border Radius: `9999px`
- Font Size: 12px
- Font Weight: 500

**Badge Colors:**
| Impact | Background | Text | Border |
|--------|-----------|------|--------|
| High   | `#FEF2F2` | `#DC2626` | Optional |
| Medium | `#FEF3C7` | `#D97706` | Optional |
| Low    | `#EFF6FF` | `#2563EB` | Optional |

**Description:**
- Font Size: 12px
- Color: `#6B7280` (gray-600)
- Line Height: 1.5
- Margin: 8px 0

**Target Location:**
- Font Size: 12px
- Color: `#6B7280` (gray-500)
- Icon: 14x14px (Target icon)
- Display: flex, gap 4px

**Preview Box:**
- Background: `#FFFFFF`
- Border: `1px solid #E5E7EB`
- Border Radius: `6px`
- Padding: `8px`
- Font Size: 12px
- Color: `#6B7280`
- Font Style: `italic`
- Margin: 12px 0

**Button Row:**
- Display: flex, gap 8px
- Margin Top: 12px

**Buttons:**

1. **Apply Button:**
   - Background: `#0D5F4E`
   - Color: `#FFFFFF`
   - Padding: `8px 12px`
   - Border Radius: `8px`
   - Font Size: 12px
   - Font Weight: 500
   - Icon: CheckCircle2 (14x14px)
   - Flex: 1 (takes remaining space)
   - Hover: `#0A4A3B`

2. **Edit Button:**
   - Background: `#FFFFFF`
   - Border: `1px solid #D1D5DB`
   - Color: `#374151`
   - Same padding/size as Apply
   - Icon: Edit3 (14x14px)
   - Hover: `#F9FAFB`

3. **Dismiss Button:**
   - Background: `#FFFFFF`
   - Border: `1px solid #D1D5DB`
   - Color: `#374151`
   - Padding: `8px` (square)
   - Icon: X (14x14px)
   - Hover: `#F9FAFB`

---

## 🎯 Quick Actions Section

```
┌────────────────────────────────────┐
│ Quick Actions                      │ ← 12px label
│ ┌───────────┬───────────┐          │
│ │ → Next    │ 🛡️ Ready  │          │
│ │   Steps   │   ness    │          │
│ └───────────┴───────────┘          │
│ ┌───────────┬───────────┐          │
│ │ 📄 Pitch  │ ✨ Gen    │          │
│ │   Deck    │   erate   │          │
│ └───────────┴───────────┘          │
└────────────────────────────────────┘
```

### **Visual Specs:**

**Container:**
- Padding: `12px 16px`
- Background: `#F9FAFB` (gray-50)
- Border Top: `1px solid #E5E7EB`

**Label:**
- Font Size: 12px
- Font Weight: 500
- Color: `#6B7280`
- Margin Bottom: 8px

**Button Grid:**
- Display: grid
- Grid Columns: 2
- Gap: 8px

**Each Button:**
- Background: `#FFFFFF`
- Border: `1px solid #D1D5DB`
- Border Radius: `8px`
- Padding: `8px 12px`
- Font Size: 12px
- Color: `#374151`
- Display: flex, align center, justify center, gap 6px
- Hover: `#F9FAFB`
- Transition: `150ms ease`

**Icons:**
- Size: 12x12px
- Color: Inherit from text

---

## ⌨️ Input Field Section

```
┌────────────────────────────────────┐
│ ┌──────────────────────────────┐   │
│ │ Ask me anything...        [▶]│   │ ← Input + Send
│ └──────────────────────────────┘   │
└────────────────────────────────────┘
```

### **Visual Specs:**

**Container:**
- Padding: `16px`
- Background: `#FFFFFF`
- Border Top: `1px solid #E5E7EB`

**Input Field:**
- Width: 100%
- Padding: `12px 48px 12px 16px` (right padding for button)
- Border: `1px solid #D1D5DB`
- Border Radius: `8px`
- Font Size: 14px
- Color: `#111827`
- Placeholder: `#9CA3AF`

**Focus State:**
- Outline: `2px solid #0D5F4E`
- Border: `transparent`

**Send Button (Inside input):**
- Position: absolute right-8px, centered vertically
- Size: `32x32px`
- Background: `#0D5F4E`
- Border Radius: `8px`
- Icon: Send (16x16px, white)
- Hover: `#0A4A3B`
- Disabled: opacity 50%, cursor not-allowed

---

## 🎭 Message Type Visual Indicators

### **1. Guidance (Light Blue)**
```
┌─────────────────────────────────┐
│ 💡 Guidance                     │
│                                 │
│ Strategic advice and direction  │
└─────────────────────────────────┘
```
- Icon: Lightbulb (16x16px, `#60A5FA`)
- Background: Default white
- Border: Default gray

### **2. Suggestion (Sparkles)**
```
┌─────────────────────────────────┐
│ ✨ Suggestion                   │
│                                 │
│ Actionable recommendations      │
└─────────────────────────────────┘
```
- Icon: Sparkles (16x16px, `#A78BFA`)
- Background: Default white
- Often includes action card

### **3. Warning (Amber Alert)**
```
┌─────────────────────────────────┐
│ ⚠️ Warning                      │
│                                 │
│ Risks or gaps identified        │
└─────────────────────────────────┘
```
- Icon: AlertTriangle (16x16px, `#F59E0B`)
- Background: `#FEF3C7` (amber-50)
- Border: `#FDE68A` (amber-200)
- Text: `#78350F` (amber-900)

### **4. Success (Green Check)**
```
┌─────────────────────────────────┐
│ ✓ Success                       │
│                                 │
│ Action completed successfully   │
└─────────────────────────────────┘
```
- Icon: CheckCircle2 (16x16px, `#10B981`)
- Background: `#DCFCE7` (green-50)
- Border: `#BBF7D0` (green-200)
- Text: `#065F46` (green-900)

---

## 🎨 Agent Color System

| Agent | Avatar | Color | Usage |
|-------|--------|-------|-------|
| Atlas (Strategist) | 🎯 | `#0D5F4E` | Primary emerald |
| Sage (Analyst) | 📊 | `#2563EB` | Blue |
| Pitch | 🎤 | `#7C3AED` | Purple |
| Quill (Writer) | ✍️ | `#DC2626` | Red |
| Capital (Fundraising) | 💰 | `#059669` | Green |
| Roadmap (Planner) | 🗺️ | `#EA580C` | Orange |
| Guardian (Reviewer) | 🛡️ | `#BE123C` | Rose |

**Agent Avatar Background:**
- Color: `{agent-color}` at 10% opacity
- Border Radius: `50%`
- Size: 24x24px (small) or 40x40px (header)

---

## 🌊 Animations & Transitions

### **Pulse Animation (FAB)**
```css
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.pulse-ring {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
```

### **Typing Indicator**
```
●  ●  ●  ← Three dots bouncing
```

**Specs:**
- Dot Size: 8x8px circles
- Color: `#9CA3AF`
- Background: `#F3F4F6` (container)
- Padding: `12px 16px`
- Border Radius: `12px`

**Animation:**
```css
@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
}

.dot {
  animation: bounce 1.4s infinite;
  animation-delay: 0ms; /* 0ms, 150ms, 300ms */
}
```

### **Hover Effects**
- Scale: `transform: scale(1.05)`
- Duration: `150-200ms`
- Easing: `ease-out`
- Shadow increase on cards

### **Slide-in Panel**
```css
/* Expanded state enters from right */
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.panel-enter {
  animation: slideIn 300ms ease-out;
}
```

---

## 📏 Spacing System

### **Internal Spacing (Chat Messages)**
- Message gap: `16px` (space-y-4)
- Section gap: `24px` (mb-6)
- Content padding: `16px` (p-4)

### **Action Card Spacing**
- Outer margin: `16px` top (mt-4)
- Inner padding: `16px` (p-4)
- Element gap: `8-12px`

### **Button Spacing**
- Padding: `8px 12px` (small)
- Padding: `12px 16px` (medium)
- Gap between: `8px`

---

## 🎯 Responsive Behavior

### **Panel Width**
- Desktop: `384px` (w-96)
- Tablet: `320px` (w-80)
- Mobile: `100vw` (full screen)

### **Message Bubbles**
- Max width: `85%` on desktop
- Max width: `90%` on mobile

### **Action Cards**
- Buttons stack vertically on narrow screens
- Apply button stays full width

---

## ✨ Micro-interactions

### **1. Send Button Pulse**
When user types, send button subtly scales
```css
.send-button-ready {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### **2. Message Appear**
New messages fade + slide up
```css
@keyframes messageAppear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### **3. Action Card Expand**
When action card appears, it expands from 0 height
```css
@keyframes cardExpand {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
}
```

### **4. Success Checkmark**
When action applied, checkmark animates
```css
@keyframes checkmark {
  0% {
    transform: scale(0) rotate(-45deg);
  }
  50% {
    transform: scale(1.2) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}
```

---

## 🎪 Example Visual States

### **Empty Chat (First Load)**
```
┌────────────────────────────────────┐
│ [Header with Atlas]                │
│ ─────────────────────────────────  │
│                                    │
│     ╭────────────────╮             │
│     │  👋 Welcome!   │             │
│     │                │             │
│     │  I'm Atlas...  │             │
│     ╰────────────────╯             │
│                                    │
│ ─────────────────────────────────  │
│ [Quick Actions]                    │
│ [Input Field]                      │
└────────────────────────────────────┘
```

### **Active Conversation**
```
┌────────────────────────────────────┐
│ [Header]                           │
│ [Progress]                         │
│ ┌──────────────────────────────┐   │
│ │ 🎯 Atlas • 2:30 PM          │   │
│ │ ┌─────────────────────────┐ │   │
│ │ │ What should I do next?  │ │   │
│ │ └─────────────────────────┘ │   │
│ └──────────────────────────────┘   │
│ ┌──────────────────────────────┐   │
│ │ Your response...            │   │
│ │ [Action Card]               │   │
│ └──────────────────────────────┘   │
│ ●●● Typing...                      │
│ ─────────────────────────────────  │
│ [Quick Actions]                    │
│ [Input Field]                      │
└────────────────────────────────────┘
```

### **With Action Card**
```
┌────────────────────────────────────┐
│ AI Message bubble                  │
│ ┌────────────────────────────────┐ │
│ │ Complete Problem Statement     │ │
│ │                  [HIGH IMPACT] │ │
│ │ ──────────────────────────────│ │
│ │ Description here...            │ │
│ │ ──────────────────────────────│ │
│ │ 📍 Target location            │ │
│ │ ──────────────────────────────│ │
│ │ ╭──────────────────────────╮  │ │
│ │ │ Preview of content...    │  │ │
│ │ ╰──────────────────────────╯  │ │
│ │ ──────────────────────────────│ │
│ │ [✓ Apply] [✏️ Edit] [✕]      │ │
│ └────────────────────────────────┘ │
└────────────────────────────────────┘
```

---

## 🎨 Design Tokens Summary

```css
/* Colors */
--emerald-primary: #0D5F4E;
--emerald-dark: #0A4A3B;
--emerald-light: rgba(13, 95, 78, 0.08);

--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;

/* Spacing Scale */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;

/* Border Radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

/* Typography */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;

--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## 📊 Status: Design System Complete

All visual specifications are production-ready and match luxury SaaS standards. Every measurement, color, shadow, and animation is precisely defined for pixel-perfect implementation.

**Date:** January 28, 2026  
**Document:** Visual Design Guide  
**Status:** Complete ✅
