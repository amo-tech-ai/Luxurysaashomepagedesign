# Auto StartupAI Dashboard System - Design Specification

**Project:** StartupAI Auto Task Runner  
**System:** Luxury 3-Panel Dashboard (Left / Main / Right)  
**Design Language:** Quiet Luxury, Editorial Spacing, High-End Minimalism  
**Last Updated:** January 27, 2026

---

## Table of Contents

1. [Master Prompt - Dashboard System](#master-prompt---dashboard-system)
2. [Kanban Board Dashboard](#kanban-board-dashboard)
3. [Task Detail Drawer](#task-detail-drawer)
4. [Full Task Modal](#full-task-modal)
5. [Roadmap Kanban Dashboard](#roadmap-kanban-dashboard)
6. [System Behavior Logic](#system-behavior-logic)
7. [Premium Microcopy Pack](#premium-microcopy-pack)

---

## Master Prompt - Dashboard System

### Layout Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                         Auto Claude                                │
├──────────┬────────────────────────────────────────┬───────────────┤
│          │                                        │               │
│   LEFT   │              MAIN                      │     RIGHT     │
│   NAV    │            WORKSPACE                   │    CONTEXT    │
│          │                                        │               │
│  • Kanban│  ┌──────────────────────────────────┐ │  ┌──────────┐ │
│  • Agent │  │ Filters & Search                 │ │  │          │ │
│  • Insights│ └──────────────────────────────────┘ │  │  Task    │ │
│  • Roadmap│                                      │ │  │ Preview  │ │
│  • Content│  ┌──────┬──────┬──────┬──────────┐  │ │  │          │ │
│  • MCP   │  │Plan  │Queue │In Pr │AI Review │  │ │  │ Metadata │ │
│  • Workres│ │      │      │      │          │  │ │  │          │ │
│  • GitHub│  │ [7]  │ [2]  │ [0/3]│ [0]      │  │ │  │ Actions  │ │
│          │  │      │      │      │          │  │ │  └──────────┘ │
│  Settings│  │ Card │ Card │      │          │  │ │               │
│          │  │ Card │      │      │          │  │ │               │
│          │  │ Card │      │      │          │  │ │               │
│          │  └──────┴──────┴──────┴──────────┘  │ │               │
└──────────┴────────────────────────────────────────┴───────────────┘
```

### Design Principles

**1. Quiet Luxury**
- Soft off-white surfaces (#FAFAF8)
- Warm stone borders (#E8E6E1)
- Subtle shadow (0 1px 2px rgba(0,0,0,0.04))
- No loud gradients, no neon status colors

**2. Color System**
```css
Primary:
--off-white: #FAFAF8
--soft-grey: #F5F5F3
--warm-stone: #E8E6E1

Accents:
--emerald: #0D5F4E (primary CTA, active states)
--sage: #6B9D89 (secondary actions)
--muted-gold: #C9A963 (premium highlights)

Text:
--charcoal: #2D2D2D (headings)
--grey-700: #4A4A4A (body)
--grey-500: #737373 (secondary)
--grey-400: #A3A3A3 (disabled)
```

**3. Typography Hierarchy**
```css
H1 (Page Title):
- Font: Serif (Georgia, ui-serif)
- Size: 32px
- Weight: 400 (normal)
- Line Height: 1.2
- Color: Charcoal
- Use: Editorial authority

H2 (Section Headers):
- Font: Serif
- Size: 24px
- Weight: 500
- Line Height: 1.3
- Color: Charcoal
- Use: Clear section breaks

H3 (Card Titles):
- Font: Sans-serif
- Size: 16px
- Weight: 600
- Line Height: 1.4
- Color: Charcoal
- Use: Scannable content

Body:
- Font: Sans-serif
- Size: 14px
- Weight: 400
- Line Height: 1.6
- Color: Grey-700
- Use: Readable content

Microcopy:
- Font: Sans-serif
- Size: 12px
- Weight: 400
- Line Height: 1.5
- Color: Grey-500
- Use: Understated hints
```

**4. Spacing System**
```css
--space-1: 4px   (tight)
--space-2: 8px   (compact)
--space-3: 12px  (default)
--space-4: 16px  (comfortable)
--space-6: 24px  (generous)
--space-8: 32px  (editorial)
--space-12: 48px (section break)
--space-16: 64px (hero spacing)
```

**5. Interaction Rules**

- **One Primary CTA Per Area**
  - Left: "New Task" button
  - Main: "Start" button on cards
  - Right: "Open Full Task" or "Start Task"

- **Right Panel Always Answers:**
  - WHAT: Task summary
  - WHY: Rationale
  - NEXT: Suggested action

- **Main Panel Optimized For:**
  - Scanning (clear visual hierarchy)
  - Drag/drop (smooth interactions)
  - Focus (no cluttered chips)

**6. Responsive Behavior**

```
Desktop (1280px+):
┌────────┬──────────────┬──────────┐
│  Left  │     Main     │  Right   │
│  Nav   │   Kanban     │  Context │
└────────┴──────────────┴──────────┘

Tablet (768px - 1279px):
┌────────┬──────────────┐
│  Left  │     Main     │
│  Nav   │   Kanban     │
└────────┴──────────────┘
         Right becomes drawer (slide-in)

Mobile (< 768px):
┌──────────────────────┐
│        Main          │
│      List View       │
└──────────────────────┘
Left: Hamburger menu
Right: Bottom sheet
Kanban: Becomes vertical list
```

---

## Kanban Board Dashboard

### Header Strip

```
┌─────────────────────────────────────────────────────────────────┐
│ Auto Claude                                    Verified 2026-01-27│
├─────────────────────────────────────────────────────────────────┤
│ [fashionossv11] [ilmv10] [startupai16] [startupai16L] [×]      │
│                                                                   │
│ Progress: 0% • 0/7 tasks                                         │
└─────────────────────────────────────────────────────────────────┘
```

**Elements:**
- Project tabs (selectable, closeable)
- Progress indicator (percentage + fraction)
- Verified status badge (top right)

**Visual Design:**
```css
Header:
- Background: #FAFAF8
- Border-bottom: 1px solid #E8E6E1
- Padding: 16px 24px

Project Tab (active):
- Background: white
- Border: 1px solid #E8E6E1
- Border-bottom: none
- Font-weight: 500

Project Tab (inactive):
- Background: transparent
- Color: #737373
- Hover: background #F5F5F3
```

### Filter Row

```
┌─────────────────────────────────────────────────────────────────┐
│ All Phases ▼    All Categories ▼    [🔍 Search]    [↻ Refresh] │
└─────────────────────────────────────────────────────────────────┘
```

**Elements:**
- Phase dropdown (All Phases, Phase 1, Phase 2, etc.)
- Category dropdown (All Categories, Feature, Bug Fix, etc.)
- Search input (optional)
- Refresh tasks action (icon button)

**Visual Design:**
```css
Filter Row:
- Background: white
- Padding: 12px 24px
- Border-bottom: 1px solid #E8E6E1
- Display: flex, gap: 12px

Dropdown:
- Background: white
- Border: 1px solid #E8E6E1
- Border-radius: 8px
- Padding: 8px 12px
- Font-size: 14px
- Hover: border #C9A963

Icon Button:
- Size: 36px × 36px
- Border-radius: 8px
- Hover: background #F5F5F3
```

### Kanban Columns (4 Columns)

#### Column 1: Planning

```
┌──────────────────────────────────────┐
│ Planning  7              [⋮] [+]     │
├──────────────────────────────────────┤
│ ┌──────────────────────────────────┐ │
│ │ Third-Party Integrations Hub     │ │
│ │                                  │ │
│ │ Connect StartupAI with tools     │ │
│ │ like Slack, Gmail, Calendar.     │ │
│ │                                  │ │
│ │ Pending • Feature                │ │
│ │                                  │ │
│ │ 🕐 6h ago            [Start]     │ │
│ └──────────────────────────────────┘ │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │ Advanced AI Strategic Advisor    │ │
│ │                                  │ │
│ │ Deep strategic analysis for      │ │
│ │ founders using high-trust...     │ │
│ │                                  │ │
│ │ Pending • Feature                │ │
│ │                                  │ │
│ │ 🕐 5m ago            [Start]     │ │
│ └──────────────────────────────────┘ │
│                                      │
│ + 5 more cards...                    │
└──────────────────────────────────────┘
```

**Card Design (Detailed):**

```css
Card:
- Background: white
- Border: 1px solid #E8E6E1
- Border-radius: 12px
- Padding: 16px
- Margin-bottom: 12px
- Box-shadow: 0 1px 2px rgba(0,0,0,0.04)
- Transition: all 150ms ease

Card:hover:
- Transform: translateY(-2px)
- Box-shadow: 0 4px 8px rgba(0,0,0,0.08)
- Border-color: #0D5F4E

Card Structure:
┌────────────────────────────────────┐
│ [Title - Bold, 16px]               │
│                                    │
│ [Description - 2 lines max]        │
│ [Grey-700, 14px, line-clamp: 2]    │
│                                    │
│ [Tag] [Tag]                        │
│ [Pill style, small]                │
│                                    │
│ 🕐 6h ago              [Start]     │
│ [Grey-500, 12px]   [Emerald btn]   │
└────────────────────────────────────┘
```

**Tag Design:**
```css
Tag:
- Display: inline-block
- Padding: 4px 8px
- Border-radius: 4px
- Font-size: 11px
- Font-weight: 500
- Margin-right: 6px

Status Tag (Pending):
- Background: #FEF3C7
- Color: #92400E

Type Tag (Feature):
- Background: #DBEAFE
- Color: #1E40AF
```

**Start Button:**
```css
Start Button:
- Background: #0D5F4E
- Color: white
- Padding: 6px 16px
- Border-radius: 6px
- Font-size: 13px
- Font-weight: 500
- Hover: background #0A4D3F
- Transition: 150ms ease
```

#### Column 2: Queue

```
┌──────────────────────────────────────┐
│ Queue  2                 [🔒]        │
├──────────────────────────────────────┤
│                                      │
│        ┌───────────────┐             │
│        │   [⏸ Icon]   │             │
│        └───────────────┘             │
│                                      │
│   Tasks wait here when parallel     │
│   task limit is reached              │
│                                      │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │ Autosave Everywhere              │ │
│ │                                  │ │
│ │ Save edits across canvas,        │ │
│ │ docs, CRM notes automatically    │ │
│ │                                  │ │
│ │ Pending • Feature                │ │
│ │                                  │ │
│ │ 🕐 just now                      │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

**Empty State Design:**
```css
Empty State:
- Text-align: center
- Padding: 48px 24px
- Color: #A3A3A3

Icon:
- Size: 48px
- Color: #D1D5DB
- Margin-bottom: 16px

Text:
- Font-size: 14px
- Line-height: 1.6
- Max-width: 280px
- Margin: 0 auto
```

#### Column 3: In Progress

```
┌──────────────────────────────────────┐
│ In Progress  0/3         [⚙️]        │
├──────────────────────────────────────┤
│                                      │
│        ┌───────────────┐             │
│        │   [▶ Icon]   │             │
│        └───────────────┘             │
│                                      │
│   Nothing running.                   │
│   Start a task from Planning.        │
│                                      │
└──────────────────────────────────────┘
```

**Progress Indicator:**
- Shows: "0/3" (current / max parallel)
- Color: When at limit → muted gold
- Icon: Gear (settings/running)

#### Column 4: AI Review

```
┌──────────────────────────────────────┐
│ AI Review  0             [🤖]        │
├──────────────────────────────────────┤
│                                      │
│        ┌───────────────┐             │
│        │   [✓ Icon]   │             │
│        └───────────────┘             │
│                                      │
│   No tasks in review.                │
│   AI reviews completed tasks         │
│   automatically.                     │
│                                      │
└──────────────────────────────────────┘
```

### Column Header Design

```css
Column Header:
- Display: flex
- Justify-content: space-between
- Align-items: center
- Padding: 12px 16px
- Background: #F5F5F3
- Border-bottom: 1px solid #E8E6E1
- Font-weight: 600
- Font-size: 14px
- Color: #2D2D2D

Column Count Badge:
- Display: inline-block
- Background: white
- Padding: 2px 8px
- Border-radius: 12px
- Font-size: 12px
- Font-weight: 500
- Color: #737373
- Margin-left: 8px
```

### Sample Card Content (7 Cards in Planning)

**Card 1: Third-Party Integrations Hub**
```
Title: Third-Party Integrations Hub
Description: Connect StartupAI with popular tools like Slack, Gmail, Calendar.
Tags: Pending • Feature
Age: 6h ago
CTA: Start
```

**Card 2: Advanced AI Strategic Advisor**
```
Title: Advanced AI Strategic Advisor
Description: Deep strategic analysis for founders using high-trust workflows.
Tags: Pending • Feature
Age: 5m ago
CTA: Start
```

**Card 3: Mobile-Responsive Optimization**
```
Title: Mobile-Responsive Optimization
Description: Optimize the web application for mobile devices.
Tags: Pending • Feature
Age: 6h ago
CTA: Start
```

**Card 4: Calendar Integration for Investor Meetings**
```
Title: Calendar Integration for Investor Meetings
Description: Integrate with Google Calendar to track investor meetings.
Tags: Pending • Feature
Age: 6h ago
CTA: Start
```

**Card 5: Competitive Analysis Tools**
```
Title: Competitive Analysis Tools
Description: Track competitors, monitor market changes, analyze positioning.
Tags: Pending • Feature
Age: 6h ago
CTA: Start
```

**Card 6: Email Integration for Investor Communication**
```
Title: Email Integration for Investor Communication
Description: Auto-link Gmail/Outlook threads to investors and deals.
Tags: Pending • Feature
Age: 6h ago
CTA: Start
```

**Card 7: Subscription Billing System**
```
Title: Subscription Billing System
Description: Stripe plans with usage-based AI credits + receipts.
Tags: Pending • Feature
Age: 6h ago
CTA: Start
```

### Microinteractions

**Drag & Drop:**
```css
Card Dragging:
- Opacity: 0.8
- Transform: rotate(-2deg)
- Box-shadow: 0 8px 16px rgba(0,0,0,0.12)
- Cursor: grabbing

Drop Zone Highlight:
- Border: 2px dashed #0D5F4E
- Background: rgba(13, 95, 78, 0.04)
- Transition: 200ms ease
```

**Column Hover:**
```css
Column:hover:
- Background: rgba(13, 95, 78, 0.02)
- Transition: 200ms ease
```

**Card Hover:**
```css
Card:hover:
- Transform: translateY(-2px)
- Box-shadow: 0 4px 12px rgba(0,0,0,0.08)
- Border-color: #0D5F4E
- Transition: 150ms ease
```

---

## Task Detail Drawer (Right Panel)

### Layout Structure

```
┌─────────────────────────────────────┐
│ [Status] [Feature] [roadmap]        │
│                                     │
│ AI-Powered Pitch Deck Builder      │
│ R02-a1-powered-pitch-deck-builder  │
├─────────────────────────────────────┤
│                                     │
│ ┌─────────┬─────────┬─────────────┐│
│ │ Status  │Priority │   Skills    ││
│ │   0%    │   P2    │  /frontend  ││
│ └─────────┴─────────┴─────────────┘│
│                                     │
├─────────────────────────────────────┤
│                                     │
│ Description                         │
│                                     │
│ Create professional pitch decks     │
│ with AI-powered content suggestions,│
│ template selection, and slide-by-   │
│ slide guidance.                     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ Rationale                           │
│                                     │
│ Most requested missing feature.     │
│ Addresses known gap "No pitch deck  │
│ builder/editor (only document       │
│ storage)."                          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ User Stories                        │
│                                     │
│ • As a founder preparing for        │
│   fundraising, I want to create     │
│   a pitch deck using AI suggestions │
│                                     │
│ • As a first-time founder, I want   │
│   startup-specific templates        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ Acceptance Criteria                 │
│                                     │
│ □ Users can create new pitch decks  │
│ □ AI suggests content for each      │
│   slide based on Lean Canvas        │
│ □ Users can edit slides with        │
│   WYSIWYG editor                    │
│ □ Decks can be exported to PDF      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         [Open Full Task]            │
│                                     │
└─────────────────────────────────────┘
```

### Detailed Design Specs

**Header Section:**
```css
Header:
- Padding: 20px
- Border-bottom: 1px solid #E8E6E1

Chips Container:
- Display: flex
- Gap: 8px
- Margin-bottom: 12px

Chip:
- Padding: 4px 10px
- Border-radius: 6px
- Font-size: 11px
- Font-weight: 500
- Background: #F5F5F3
- Color: #4A4A4A

Title:
- Font-family: Serif
- Font-size: 24px
- Font-weight: 500
- Color: #2D2D2D
- Margin-bottom: 8px

ID:
- Font-size: 12px
- Color: #A3A3A3
- Font-family: monospace
```

**Metadata Grid:**
```css
Metadata Grid:
- Display: grid
- Grid-template-columns: repeat(3, 1fr)
- Gap: 12px
- Padding: 20px
- Background: #FAFAF8

Metadata Card:
- Background: white
- Border: 1px solid #E8E6E1
- Border-radius: 8px
- Padding: 12px
- Text-align: center

Label:
- Font-size: 11px
- Color: #A3A3A3
- Text-transform: uppercase
- Letter-spacing: 0.5px
- Margin-bottom: 6px

Value:
- Font-size: 16px
- Font-weight: 600
- Color: #2D2D2D
```

**Content Sections:**
```css
Content Section:
- Padding: 20px
- Border-top: 1px solid #E8E6E1

Section Heading:
- Font-family: Serif
- Font-size: 16px
- Font-weight: 600
- Color: #2D2D2D
- Margin-bottom: 12px

Section Body:
- Font-size: 14px
- Line-height: 1.6
- Color: #4A4A4A

Bullet Lists:
- Padding-left: 20px
- Line-height: 1.8

Bullet Item:
- Margin-bottom: 8px
- Color: #4A4A4A

Checkbox Item:
- Display: flex
- Align-items: flex-start
- Gap: 10px
- Margin-bottom: 8px
- Cursor: pointer
- Padding: 8px
- Border-radius: 6px
- Transition: 150ms ease

Checkbox Item:hover:
- Background: #F5F5F3
```

**Action Bar:**
```css
Action Bar:
- Position: sticky
- Bottom: 0
- Padding: 20px
- Background: white
- Border-top: 1px solid #E8E6E1
- Box-shadow: 0 -2px 8px rgba(0,0,0,0.04)

Primary Button:
- Width: 100%
- Padding: 12px 20px
- Background: #0D5F4E
- Color: white
- Border-radius: 8px
- Font-size: 14px
- Font-weight: 600
- Hover: background #0A4D3F
- Transition: 150ms ease
```

### Sample Content

**Description:**
```
Create professional pitch decks with AI-powered content suggestions, 
template selection, and slide-by-slide guidance. Integrates with existing 
Lean Canvas data to auto-populate relevant slides.
```

**Rationale:**
```
Most requested missing feature. Addresses known gap "No pitch deck 
builder/editor (only document storage)." Competitors like Beautifull.ai 
have template limitations (pain: 8-2) - we can offer flexible, 
startup-specific templates.
```

**User Stories:**
```
• As a founder preparing for fundraising, I want to create a pitch deck 
  using AI suggestions so that I can quickly produce professional materials

• As a first-time founder, I want startup-specific templates so that I 
  don't start from a blank slate

• As a founder iterating on my pitch, I want to edit individual slides 
  flexibly so that I can customize based on investor feedback (unlike 
  Beautifull.ai pain: 8-2)
```

**Acceptance Criteria:**
```
□ Users can create new pitch decks from startup-specific templates
□ AI suggests content for each slide based on Lean Canvas and company profile
□ Users can edit slides with WYSIWYG editor
□ Decks can be exported to PDF and shared via link
□ Autosave prevents data loss (unlike Founderraise pain: 1-4)
□ At least 5 professional templates available at launch
```

### AI Logic in Right Panel

**Rules:**
1. **One Insight Maximum**
   - Not 10 suggestions, just 1 clear insight
   
2. **One Next Step**
   - Tell user exactly what to do next
   
3. **One Risk (if actionable)**
   - Only flag risks user can address

**Example AI Section:**
```
┌─────────────────────────────────────┐
│ 💡 AI Insight                       │
├─────────────────────────────────────┤
│ This task has high priority but no  │
│ assigned timeline. Consider adding  │
│ a target completion date.           │
│                                     │
│ Next: Add to Q1 2026 milestone      │
└─────────────────────────────────────┘
```

---

## Full Task Modal

### Modal Layout

```
┌───────────────────────────────────────────────────────────────┐
│ AI-Powered Pitch Deck Builder                    [✏️] [×]     │
│ R02-a1-powered-pitch-deck-builder                            │
│ [Planning]                                                    │
├───────────────────────────────────────────────────────────────┤
│ [Overview] [Subtasks (0)] [Logs] [Files]                     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   AI-Powered Pitch Deck Builder                              │
│                                                               │
│   Create professional pitch decks with AI-powered content     │
│   suggestions, template selection, and slide-by-slide         │
│   guidance.                                                   │
│                                                               │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━       │
│                                                               │
│   Rationale                                                   │
│                                                               │
│   Most requested missing feature. Addresses known gap "No     │
│   pitch deck builder/editor (only document storage)."         │
│   Competitors like Beautifull.ai have template limitations    │
│   (pain: 8-2) - we can offer flexible, startup-specific       │
│   templates.                                                  │
│                                                               │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━       │
│                                                               │
│   User Stories                                                │
│                                                               │
│   • As a founder preparing for fundraising, I want to         │
│     create a pitch deck using AI suggestions...               │
│                                                               │
│   • As a first-time founder, I want startup-specific          │
│     templates so that I don't start from a blank slate        │
│                                                               │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━       │
│                                                               │
│   Acceptance Criteria                                         │
│                                                               │
│   □ Users can create new pitch decks from startup-specific    │
│     templates                                                 │
│   □ AI suggests content for each slide based on Lean Canvas   │
│   □ Users can edit slides with WYSIWYG editor                 │
│   □ Decks can be exported to PDF and shared via link          │
│   □ Autosave prevents data loss (unlike Founderraise          │
│     pain: 1-4)                                                │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ [🗑 Delete Task]                        [Start Task] [Close]  │
└───────────────────────────────────────────────────────────────┘
```

### Design Specifications

**Modal Container:**
```css
Modal:
- Position: fixed
- Top: 50%
- Left: 50%
- Transform: translate(-50%, -50%)
- Width: 90vw
- Max-width: 900px
- Max-height: 90vh
- Background: white
- Border-radius: 16px
- Box-shadow: 0 24px 48px rgba(0,0,0,0.16)
- Overflow: hidden
```

**Modal Header:**
```css
Header:
- Padding: 24px 32px
- Border-bottom: 1px solid #E8E6E1
- Display: flex
- Justify-content: space-between
- Align-items: flex-start

Title:
- Font-family: Serif
- Font-size: 28px
- Font-weight: 500
- Color: #2D2D2D
- Line-height: 1.3

ID:
- Font-size: 13px
- Color: #A3A3A3
- Font-family: monospace
- Margin-top: 4px

Status Chip:
- Display: inline-block
- Padding: 4px 12px
- Border-radius: 6px
- Font-size: 12px
- Font-weight: 500
- Background: #FEF3C7
- Color: #92400E
- Margin-top: 8px

Action Icons:
- Display: flex
- Gap: 8px
- Size: 36px × 36px
- Border-radius: 8px
- Hover: background #F5F5F3
```

**Tab Navigation:**
```css
Tabs:
- Display: flex
- Padding: 0 32px
- Border-bottom: 1px solid #E8E6E1
- Background: #FAFAF8

Tab:
- Padding: 12px 20px
- Font-size: 14px
- Font-weight: 500
- Color: #737373
- Border-bottom: 2px solid transparent
- Cursor: pointer
- Transition: 150ms ease

Tab (active):
- Color: #2D2D2D
- Border-bottom-color: #0D5F4E

Tab:hover:
- Color: #2D2D2D
- Background: rgba(13, 95, 78, 0.04)
```

**Content Area:**
```css
Content:
- Padding: 32px
- Overflow-y: auto
- Max-height: calc(90vh - 220px)

Content Heading:
- Font-family: Serif
- Font-size: 32px
- Font-weight: 400
- Color: #2D2D2D
- Margin-bottom: 16px
- Line-height: 1.2

Content Description:
- Font-size: 16px
- Line-height: 1.6
- Color: #4A4A4A
- Margin-bottom: 32px

Section Divider:
- Border-top: 1px solid #E8E6E1
- Margin: 32px 0

Section Heading:
- Font-family: Serif
- Font-size: 20px
- Font-weight: 600
- Color: #2D2D2D
- Margin-bottom: 16px

Section Content:
- Font-size: 14px
- Line-height: 1.7
- Color: #4A4A4A
```

**Checkbox List:**
```css
Checkbox List:
- List-style: none
- Padding: 0

Checkbox Item:
- Display: flex
- Align-items: flex-start
- Gap: 12px
- Padding: 12px
- Border-radius: 8px
- Cursor: pointer
- Transition: 150ms ease

Checkbox Item:hover:
- Background: #F5F5F3

Checkbox:
- Width: 18px
- Height: 18px
- Border: 2px solid #D1D5DB
- Border-radius: 4px
- Cursor: pointer

Checkbox:checked:
- Background: #0D5F4E
- Border-color: #0D5F4E
```

**Bottom Action Bar:**
```css
Action Bar:
- Display: flex
- Justify-content: space-between
- Padding: 20px 32px
- Border-top: 1px solid #E8E6E1
- Background: #FAFAF8

Delete Button:
- Padding: 10px 20px
- Background: transparent
- Color: #DC2626
- Border: 1px solid #FCA5A5
- Border-radius: 8px
- Font-size: 14px
- Font-weight: 500
- Hover: background #FEE2E2
- Transition: 150ms ease

Right Actions:
- Display: flex
- Gap: 12px

Primary Button:
- Padding: 10px 24px
- Background: #0D5F4E
- Color: white
- Border-radius: 8px
- Font-size: 14px
- Font-weight: 600
- Hover: background #0A4D3F
- Transition: 150ms ease

Secondary Button:
- Padding: 10px 24px
- Background: white
- Color: #4A4A4A
- Border: 1px solid #E8E6E1
- Border-radius: 8px
- Font-size: 14px
- Font-weight: 500
- Hover: background #F5F5F3
- Transition: 150ms ease
```

### Tab Content

**Overview Tab:**
- Full task description
- Rationale section
- User stories
- Acceptance criteria (checkboxes)

**Subtasks Tab (0):**
```
┌───────────────────────────────────────┐
│                                       │
│         [📋 Icon]                     │
│                                       │
│   No subtasks yet                     │
│                                       │
│   Break this task into smaller        │
│   pieces to track progress.           │
│                                       │
│         [+ Add Subtask]               │
│                                       │
└───────────────────────────────────────┘
```

**Logs Tab:**
```
┌───────────────────────────────────────┐
│ 2026-01-27 10:30 AM                   │
│ Task created by Auto Claude           │
│                                       │
│ 2026-01-27 10:31 AM                   │
│ Status changed: Planning              │
│                                       │
└───────────────────────────────────────┘
```

**Files Tab:**
```
┌───────────────────────────────────────┐
│                                       │
│         [📎 Icon]                     │
│                                       │
│   No files attached                   │
│                                       │
│   Drag files here or click to upload │
│                                       │
└───────────────────────────────────────┘
```

---

## Roadmap Kanban Dashboard

### Header Section

```
┌─────────────────────────────────────────────────────────────────┐
│ StartupAI (draft)                                               │
│ Competitor Analysis • Target: First-time founders, solo founders│
│                                                                  │
│ 20 features • 4 phases • [Must] [Should] [Could] [Won't]       │
├─────────────────────────────────────────────────────────────────┤
│ [Kanban] [Phases] [All Features] [By Priority]                  │
└─────────────────────────────────────────────────────────────────┘
```

**Design Specs:**
```css
Product Header:
- Padding: 24px 32px
- Background: #FAFAF8
- Border-bottom: 1px solid #E8E6E1

Product Title:
- Font-family: Serif
- Font-size: 32px
- Font-weight: 500
- Color: #2D2D2D

Context Line:
- Font-size: 14px
- Color: #737373
- Margin-top: 8px

Stats Row:
- Display: flex
- Gap: 24px
- Margin-top: 16px
- Font-size: 14px
- Color: #4A4A4A

Priority Chips:
- Display: inline-block
- Padding: 4px 10px
- Border-radius: 6px
- Font-size: 11px
- Font-weight: 500

Must Have:
- Background: #FEE2E2
- Color: #991B1B

Should Have:
- Background: #DBEAFE
- Color: #1E40AF

Could Have:
- Background: #D1FAE5
- Color: #065F46

Won't Have:
- Background: #F3F4F6
- Color: #6B7280
```

**View Switcher:**
```css
View Switcher:
- Display: flex
- Gap: 8px
- Padding: 12px 32px
- Background: white
- Border-bottom: 1px solid #E8E6E1

View Button:
- Padding: 8px 16px
- Background: transparent
- Border: 1px solid #E8E6E1
- Border-radius: 6px
- Font-size: 13px
- Font-weight: 500
- Color: #737373
- Cursor: pointer
- Transition: 150ms ease

View Button (active):
- Background: #0D5F4E
- Color: white
- Border-color: #0D5F4E

View Button:hover:
- Background: #F5F5F3
- Border-color: #C9A963
```

### Kanban Columns (Roadmap Variant)

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ Under Review│  Planned    │ In Progress │    Done     │
│     11      │      8      │      1      │      0      │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ ┌─────────┐ │ ┌─────────┐ │ ┌─────────┐ │             │
│ │ Must    │ │ │ Must    │ │ │ Must    │ │   Empty     │
│ │ Have    │ │ │ Have    │ │ │ Have    │ │   State     │
│ │         │ │ │         │ │ │         │ │             │
│ │ Email   │ │ │ Autosave│ │ │ AI Pitch│ │             │
│ │ Integr. │ │ │ Every.  │ │ │ Deck    │ │             │
│ │         │ │ │         │ │ │ Builder │ │             │
│ │ Found.  │ │ │ Found.  │ │ │         │ │             │
│ │ Impact: │ │ │ Impact: │ │ │ Found.  │ │             │
│ │ High    │ │ │ Medium  │ │ │ Impact: │ │             │
│ │         │ │ │         │ │ │ High    │ │             │
│ │ [Build] │ │ │ [Task]  │ │ │ [View]  │ │             │
│ └─────────┘ │ └─────────┘ │ └─────────┘ │             │
│             │             │             │             │
│ + 10 more   │ + 7 more    │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### Feature Card Design (Roadmap)

```css
Feature Card:
- Background: white
- Border: 1px solid #E8E6E1
- Border-radius: 12px
- Padding: 16px
- Margin-bottom: 12px
- Box-shadow: 0 1px 2px rgba(0,0,0,0.04)

Card Structure:
┌────────────────────────────────────┐
│ [Must Have]        [Foundation]    │
│                                    │
│ Email Integration for Investor    │
│ Communication Tracking             │
│                                    │
│ Auto-link Gmail/Outlook threads   │
│ to investors and deals.            │
│                                    │
│ Impact: [High]                     │
│                                    │
│                        [Build]     │
└────────────────────────────────────┘

Priority Badge (top-left):
- Position: absolute
- Top: 12px
- Left: 12px
- Padding: 4px 10px
- Border-radius: 6px
- Font-size: 11px
- Font-weight: 600

Category Badge (top-right):
- Position: absolute
- Top: 12px
- Right: 12px
- Padding: 4px 10px
- Border-radius: 6px
- Font-size: 11px
- Font-weight: 500
- Background: #F3F4F6
- Color: #6B7280

Title:
- Font-size: 16px
- Font-weight: 600
- Color: #2D2D2D
- Line-height: 1.3
- Margin: 32px 0 8px 0

Description:
- Font-size: 13px
- Line-height: 1.5
- Color: #737373
- Margin-bottom: 12px

Impact Tag:
- Display: inline-block
- Padding: 3px 8px
- Border-radius: 4px
- Font-size: 11px
- Font-weight: 500

Impact High:
- Background: #FEE2E2
- Color: #991B1B

Impact Medium:
- Background: #FEF3C7
- Color: #92400E

Impact Low:
- Background: #F3F4F6
- Color: #6B7280

Action Button:
- Position: absolute
- Bottom: 12px
- Right: 12px
- Padding: 6px 16px
- Background: #0D5F4E
- Color: white
- Border-radius: 6px
- Font-size: 13px
- Font-weight: 500
```

### Sample Feature Cards

**Under Review (11 cards):**

1. **Email Integration for Investor Communication Tracking**
   - Tags: Must Have • Foundation
   - Description: Auto-link Gmail/Outlook threads to investors and deals.
   - Impact: High
   - CTA: Build

2. **Subscription Billing System**
   - Tags: Must Have • Foundation
   - Description: Stripe plans with usage-based AI credits + receipts.
   - Impact: High
   - CTA: Build

3. **Mobile App (iOS/Android)**
   - Tags: Could Have • Mobile
   - Description: Native mobile experience for on-the-go founders.
   - Impact: Medium
   - CTA: Build

**Planned (8 cards):**

1. **Autosave Everywhere**
   - Tags: Must Have • Foundation
   - Description: Save edits across canvas, docs, CRM notes automatically.
   - Impact: Medium
   - CTA: Task

2. **AI-Enriched Investor Profiles**
   - Tags: Should Have • Collaboration
   - Description: Auto-enrich thesis, portfolio, warm intro paths.
   - Impact: High
   - CTA: Task

**In Progress (1 card):**

1. **AI-Powered Pitch Deck Builder**
   - Tags: Must Have • Foundation
   - Description: Generate deck + slide-by-slide rewrites + export.
   - Impact: High
   - CTA: View

**Done (0 cards):**
- Empty state

---

## System Behavior Logic

### Left Navigation Logic

**Structure:**
```
PROJECT
  ⌘ Kanban Board           K
  ⌘ Agent Terminals        A
  ⌘ Insights              I
  ⌘ Roadmap               R
  ⌘ Ideation              D
  ⌘ Changelog             L
  ⌘ Content               C
  ⌘ MCP Overview          M
  ⌘ Worktrees             W
  ⌘ GitHub Issues         G
  ⌘ GitHub PRs            P

⌘ Claude Code
⌘ Settings               ⚙
```

**Design Specs:**
```css
Left Nav:
- Width: 240px
- Background: #FAFAF8
- Border-right: 1px solid #E8E6E1
- Padding: 16px

Nav Item:
- Display: flex
- Align-items: center
- Gap: 12px
- Padding: 10px 12px
- Border-radius: 8px
- Font-size: 14px
- Color: #4A4A4A
- Cursor: pointer
- Transition: 150ms ease

Nav Item:hover:
- Background: #F5F5F3

Nav Item (active):
- Background: rgba(13, 95, 78, 0.08)
- Color: #0D5F4E
- Font-weight: 500

Keyboard Shortcut:
- Margin-left: auto
- Font-size: 11px
- Color: #A3A3A3
- Font-family: monospace
```

### Main Kanban Logic

**Card Selection:**
```typescript
onCardClick(card) {
  // 1. Update selected state
  setSelectedCard(card);
  
  // 2. Update right panel
  updateRightPanel({
    summary: card.description,
    rationale: card.rationale,
    nextAction: getNextAction(card)
  });
  
  // 3. Highlight card
  highlightCard(card.id);
}
```

**Drag & Drop:**
```typescript
onCardDrop(card, targetColumn) {
  // 1. Optimistic UI update
  updateCardColumn(card.id, targetColumn);
  
  // 2. Check queue logic
  if (targetColumn === 'in-progress') {
    const inProgressCount = getInProgressCount();
    if (inProgressCount >= 3) {
      // Move to queue instead
      updateCardColumn(card.id, 'queue');
      showNotification('Task moved to queue. Parallel limit reached.');
    }
  }
  
  // 3. Sync with backend
  await syncCardStatus(card.id, targetColumn);
}
```

**Queue Logic:**
```typescript
// Automatically move from queue to in-progress when slot opens
onTaskComplete(completedTask) {
  // 1. Move completed task to AI Review
  updateCardColumn(completedTask.id, 'ai-review');
  
  // 2. Check queue
  const queuedTasks = getTasksByColumn('queue');
  if (queuedTasks.length > 0) {
    // Move first queued task to in-progress
    const nextTask = queuedTasks[0];
    updateCardColumn(nextTask.id, 'in-progress');
    showNotification(`${nextTask.title} started from queue.`);
  }
}
```

### Right Panel Logic

**Always Show:**
1. **Summary (What):** Brief task description
2. **Rationale (Why):** Why this task matters
3. **Next Action (Do This):** One clear next step

**Primary Button Logic:**
```typescript
getPrimaryButton(card) {
  if (card.column === 'planning') {
    return {
      label: 'Start Task',
      action: () => moveToInProgress(card)
    };
  }
  
  if (card.hasFullDoc) {
    return {
      label: 'Open Full Task',
      action: () => openTaskModal(card)
    };
  }
  
  if (card.column === 'in-progress') {
    return {
      label: 'View Logs',
      action: () => openLogsTab(card)
    };
  }
  
  return {
    label: 'View Details',
    action: () => openTaskModal(card)
  };
}
```

### AI Rules

**1. Short, Executive Copy**
```typescript
// Bad
"The system has detected that this task might benefit from being 
broken down into smaller subtasks which would help with tracking 
progress more granularly and..."

// Good
"Break this into 3-4 subtasks to track progress better."
```

**2. One Next Step, Not 10**
```typescript
// Bad
"You could:
1. Add acceptance criteria
2. Break into subtasks
3. Assign a priority
4. Set a deadline
5. Add tags
..."

// Good
"Next: Add 3-5 acceptance criteria to define done."
```

**3. Flag Risk Only When Actionable**
```typescript
// Bad (not actionable)
"This task has been in planning for 6 hours."

// Good (actionable)
"This task blocks 3 other tasks. Consider starting it soon."
```

### Responsive Behavior

**Desktop (1280px+):**
```typescript
Layout: [Left Nav] [Main Kanban] [Right Panel]
Left: 240px fixed
Main: flex-grow
Right: 360px fixed
```

**Tablet (768px - 1279px):**
```typescript
Layout: [Left Nav] [Main Kanban]
Left: 200px fixed
Main: flex-grow
Right: Drawer (slide-in on card select)

onCardSelect() {
  openDrawer('right-panel');
}
```

**Mobile (< 768px):**
```typescript
Layout: [Main List View]
Left: Hamburger menu
Right: Bottom sheet
Kanban: Becomes vertical list grouped by column

onCardSelect() {
  openBottomSheet('task-details');
}
```

---

## Premium Microcopy Pack

### Empty States (Luxury Tone)

**Planning Column (Empty):**
```
No tasks yet.

Create your first task to get started.
```

**Queue Column (Empty):**
```
Queue is clear.

Tasks wait here when parallel capacity is reached.
```

**In Progress Column (Empty):**
```
Nothing running.

Start a task from Planning when you're ready.
```

**AI Review Column (Empty):**
```
No tasks in review.

Completed work appears here automatically.
```

**Subtasks Tab (Empty):**
```
No subtasks yet.

Break this task into smaller pieces to track progress.
```

**Logs Tab (Empty):**
```
No activity yet.

Task logs will appear here as work progresses.
```

**Files Tab (Empty):**
```
No files attached.

Drag files here or click to upload.
```

### AI Tone (Calm, Direct, Confident)

**Good Examples:**

✅ "Break this into 3-4 subtasks to track progress better."
✅ "This task blocks 3 others. Consider starting it soon."
✅ "Add acceptance criteria to define when this is done."
✅ "Estimated effort: 2-3 days based on similar tasks."
✅ "Consider moving to Q1 2026 milestone."

**Bad Examples (Avoid):**

❌ "Revolutionize your workflow with AI-powered insights!"
❌ "Game-changing automation for maximum productivity!"
❌ "Unlock unlimited potential with our cutting-edge..."
❌ "Supercharge your tasks with intelligent suggestions!"

### Action Buttons (Consistent Language)

**Primary Actions:**
- Start Task
- Open Full Task
- View Logs
- Build Feature
- Create Task

**Secondary Actions:**
- Close
- Cancel
- Edit
- Delete Task
- Add Subtask

**Destructive Actions:**
- Delete Task (always muted red, never bright)
- Remove (use sparingly)

### Success Messages (Understated)

✅ "Task started."
✅ "Task moved to queue."
✅ "Changes saved."
✅ "Task completed."

**Avoid:**
❌ "Awesome! Task started! 🎉"
❌ "Great job! You're crushing it!"
❌ "Boom! Task completed!"

### Error Messages (Helpful, Not Dramatic)

✅ "Parallel limit reached. Task moved to queue."
✅ "Task title is required."
✅ "Connection lost. Reconnecting..."

**Avoid:**
❌ "Error! Something went wrong!"
❌ "Oh no! Task creation failed!"
❌ "Oops! Try again!"

---

## Design System Summary

### Color Palette
```css
/* Surfaces */
--off-white: #FAFAF8;
--soft-grey: #F5F5F3;
--warm-stone: #E8E6E1;

/* Emerald (Primary) */
--emerald-900: #064E3B;
--emerald-700: #047857;
--emerald-600: #059669;
--emerald-500: #10B981;
--emerald-400: #34D399;
--emerald-50: #ECFDF5;

/* Gold (Premium Highlights) */
--gold-700: #A16207;
--gold-600: #CA8A04;
--gold-500: #EAB308;
--gold-400: #FACC15;
--gold-50: #FEFCE8;

/* Text */
--charcoal: #2D2D2D;
--grey-700: #4A4A4A;
--grey-500: #737373;
--grey-400: #A3A3A3;
--grey-300: #D1D5DB;

/* Status (Muted) */
--status-success: #D1FAE5;
--status-warning: #FEF3C7;
--status-error: #FEE2E2;
--status-info: #DBEAFE;
```

### Typography Scale
```css
--font-serif: ui-serif, Georgia, Cambria, serif;
--font-sans: ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: ui-monospace, 'Courier New', monospace;

--text-xs: 11px;
--text-sm: 12px;
--text-base: 14px;
--text-lg: 16px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 28px;
--text-4xl: 32px;
```

### Shadow Scale
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 24px 48px rgba(0, 0, 0, 0.16);
```

### Border Radius
```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

**Status:** Complete specification  
**Next Steps:** Create wireframes and Mermaid diagrams  
**Related Docs:** `/docs/dashboards/dash-wireframe.md`, `/docs/dashboards/dash-mermaid.md`
