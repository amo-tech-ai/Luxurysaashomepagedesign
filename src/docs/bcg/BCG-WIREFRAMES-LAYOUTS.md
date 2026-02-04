# BCG Wireframes & Layout Library
## Visual Reference for StartupAI Implementation

**Version**: 1.0  
**Date**: February 2, 2026

---

## Wireframe Index

1. [Homepage Layout](#homepage-layout)
2. [Article/Report Layout](#articlereport-layout)
3. [Hero Variations](#hero-variations)
4. [Content Sections](#content-sections)
5. [Component Wireframes](#component-wireframes)
6. [Responsive Breakpoints](#responsive-breakpoints)

---

## Homepage Layout

### Full Homepage Structure

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ HEADER (Sticky)                                         ┃
┃ [Logo]              [Nav Links]          [CTA Button]   ┃
┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
┃                                                          ┃
┃ HERO SECTION (Full-width, 700px height)                 ┃
┃ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ┃
┃ ┃                                                      ┃ ┃
┃ ┃   [Large Background Image/Video]                    ┃ ┃
┃ ┃                                                      ┃ ┃
┃ ┃        Ultra-Large Headline Text                    ┃ ┃
┃ ┃        Supporting description text                  ┃ ┃
┃ ┃                                                      ┃ ┃
┃ ┃        [Primary CTA]  [Secondary CTA]               ┃ ┃
┃ ┃                                                      ┃ ┃
┃ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ STATS BAR (White background, 120px padding)             ┃
┃     ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐┃
┃     │10,000+  │  │   50+   │  │   95%   │  │ $500M+  │┃
┃     │Founders │  │Countries│  │Success  │  │Raised   │┃
┃     └─────────┘  └─────────┘  └─────────┘  └─────────┘┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ VALUE PROPS (Light gray bg, 3-column grid)              ┃
┃  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ ┃
┃  │              │  │              │  │              │ ┃
┃  │ DARK CARD    │  │ MINT CARD    │  │ SAGE CARD    │ ┃
┃  │ [Icon]       │  │ [Icon]       │  │ [Icon]       │ ┃
┃  │              │  │              │  │              │ ┃
┃  │ Title        │  │ Title        │  │ Title        │ ┃
┃  │ Description  │  │ Description  │  │ Description  │ ┃
┃  │              │  │              │  │              │ ┃
┃  │      [→]     │  │      [→]     │  │      [→]     │ ┃
┃  └──────────────┘  └──────────────┘  └──────────────┘ ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ CONTENT SECTION (White bg, max-width 1200px, centered)  ┃
┃     Section Headline (40px)                              ┃
┃     Description text                                     ┃
┃                                                          ┃
┃  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐┃
┃  │          │  │          │  │          │  │          │┃
┃  │  Card 1  │  │  Card 2  │  │  Card 3  │  │  Card 4  │┃
┃  │          │  │          │  │          │  │          │┃
┃  └──────────┘  └──────────┘  └──────────┘  └──────────┘┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ DATA SECTION (Light gray bg)                            ┃
┃     Data Headline                                        ┃
┃                                                          ┃
┃     ┌────────────────────────────────────────────────┐  ┃
┃     │                                                │  ┃
┃     │  [Bar Chart with Green Bars]                  │  ┃
┃     │  ████████████████ 98%                         │  ┃
┃     │  ███████████████ 95%                          │  ┃
┃     │  █████████████ 87%                            │  ┃
┃     │                                                │  ┃
┃     └────────────────────────────────────────────────┘  ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ TESTIMONIALS (White bg)                                  ┃
┃     "What Founders Are Saying"                           ┃
┃                                                          ┃
┃  ┌────────────────┐  ┌────────────────┐  ┌────────────┐┃
┃  │ "Quote text    │  │ "Quote text    │  │ "Quote text│┃
┃  │  lorem ipsum"  │  │  lorem ipsum"  │  │  lorem"    │┃
┃  │                │  │                │  │            │┃
┃  │ ◉ Name         │  │ ◉ Name         │  │ ◉ Name     │┃
┃  │   Title, Co    │  │   Title, Co    │  │   Title    │┃
┃  └────────────────┘  └────────────────┘  └────────────┘┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ FINAL CTA (Dark gradient background)                    ┃
┃                                                          ┃
┃         Ready to Transform Your Startup?                ┃
┃         Join 10,000+ founders building with AI          ┃
┃                                                          ┃
┃      [Start Building]    [Schedule Demo]                ┃
┃                                                          ┃
┃      Trusted by 10,000+ founders • No credit card       ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ FOOTER (Dark background)                                 ┃
┃  [Logo]                                                  ┃
┃  Description                                             ┃
┃                                                          ┃
┃  [Links Col 1]  [Links Col 2]  [Links Col 3]  [CTA]     ┃
┃                                                          ┃
┃  © 2026 StartupAI                              [Lang]    ┃
┃                                                          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Article/Report Layout

### BCG Report Page Structure

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ HEADER (Same as homepage)                                ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ HERO (Full-width image, 600px height)                    ┃
┃ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ┃
┃ ┃ [Dramatic Image with Dark Overlay]                  ┃ ┃
┃ ┃                                                      ┃ ┃
┃ ┃    Article Category (12px, uppercase)               ┃ ┃
┃ ┃    Main Article Headline (56px)                     ┃ ┃
┃ ┃    Subheadline or date                              ┃ ┃
┃ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ CONTENT AREA (Max-width 720px for text, centered)       ┃
┃                                                          ┃
┃     Introduction paragraph lorem ipsum dolor sit        ┃
┃     amet consectetur adipiscing elit sed do eiusmod     ┃
┃     tempor incididunt ut labore et dolore magna.        ┃
┃                                                          ┃
┃     ┌──────────────────────────────────────────────┐   ┃
┃     │ KEY INSIGHT BOX (Light green bg)            │   ┃
┃     │ • Bullet point one                           │   ┃
┃     │ • Bullet point two                           │   ┃
┃     │ • Bullet point three                         │   ┃
┃     └──────────────────────────────────────────────┘   ┃
┃                                                          ┃
┃     ## Section Headline (32px)                          ┃
┃                                                          ┃
┃     Body text continues with supporting details and     ┃
┃     evidence. Lorem ipsum dolor sit amet...             ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ DATA SECTION (Full-width, light gray bg)                ┃
┃     ┌────────────────────────────────────────────────┐ ┃
┃     │                                                │ ┃
┃     │  Chart Title                                   │ ┃
┃     │                                                │ ┃
┃     │  ████████████████████ Label 1    85%          │ ┃
┃     │  ██████████████ Label 2          65%          │ ┃
┃     │  ████████████████ Label 3        72%          │ ┃
┃     │  ██████████ Label 4               45%          │ ┃
┃     │                                                │ ┃
┃     │  Source: Research data, 2025                   │ ┃
┃     └────────────────────────────────────────────────┘ ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ CONTENT (Back to text-width)                            ┃
┃     ## Another Section Headline                         ┃
┃                                                          ┃
┃     More body text with analysis and insights...        ┃
┃                                                          ┃
┃     ┌──────────────────────────────────────────────┐   ┃
┃     │ [Full-width Image]                           │   ┃
┃     │ Caption text below                           │   ┃
┃     └──────────────────────────────────────────────┘   ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ AUTHORS SECTION (White bg)                              ┃
┃     Authors                                              ┃
┃                                                          ┃
┃     ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ ┃
┃     │ [Avatar]    │  │ [Avatar]    │  │ [Avatar]    │ ┃
┃     │ John Smith  │  │ Jane Doe    │  │ Bob Wilson  │ ┃
┃     │ Partner     │  │ Director    │  │ Consultant  │ ┃
┃     └─────────────┘  └─────────────┘  └─────────────┘ ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                          ┃
┃ RELATED CONTENT (Light gray bg)                         ┃
┃     Related Content                                      ┃
┃                                                          ┃
┃  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      ┃
┃  │ [Image] │ │ [Image] │ │ [Image] │ │ [Image] │      ┃
┃  │ Title   │ │ Title   │ │ Title   │ │ Title   │      ┃
┃  │ Date    │ │ Date    │ │ Date    │ │ Date    │      ┃
┃  └─────────┘ └─────────┘ └─────────┘ └─────────┘      ┃
┃                                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ FOOTER                                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Hero Variations

### Variation 1: Full-Width Image Hero

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                                                     │ │
│  │   [Full-Width Dramatic Image]                      │ │
│  │   [Dark overlay: rgba(0,0,0,0.6)]                  │ │
│  │                                                     │ │
│  │            CATEGORY LABEL                          │ │
│  │            Large Headline Text                     │ │
│  │            Optional subheadline                    │ │
│  │                                                     │ │
│  │            [Green CTA Button]                      │ │
│  │                                                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Height: 600-800px
- Text: White, centered
- Overlay: Dark gradient (top to bottom)
- Image: High-quality, relevant
```

### Variation 2: Split Hero (50/50)

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ┌────────────────────────┐  ┌────────────────────────┐ │
│  │                        │  │                        │ │
│  │  Large Headline        │  │  [Image or Diagram]    │ │
│  │  Text That Spans       │  │                        │ │
│  │  Multiple Lines        │  │                        │ │
│  │                        │  │                        │ │
│  │  Supporting text that  │  │                        │ │
│  │  describes the value.  │  │                        │ │
│  │                        │  │                        │ │
│  │  [Primary CTA]         │  │                        │ │
│  │  [Secondary Link →]    │  │                        │ │
│  │                        │  │                        │ │
│  └────────────────────────┘  └────────────────────────┘ │
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Layout: 50/50 or 60/40 split
- Background: White or light gray
- Text: Left-aligned, dark
- Image: Right side, contained
```

### Variation 3: Centered Hero with Background

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  [Subtle gradient or pattern background]                 │
│                                                           │
│              Large Centered Headline                      │
│              Supporting description text                  │
│                                                           │
│        [Primary CTA]    [Secondary CTA]                   │
│                                                           │
│    ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐          │
│    │Stat 1 │  │Stat 2 │  │Stat 3 │  │Stat 4 │          │
│    └───────┘  └───────┘  └───────┘  └───────┘          │
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Height: 600-700px
- Background: Gradient or subtle pattern
- Text: Centered
- Stats: Below CTAs
```

---

## Content Sections

### Section 1: Card Grid (3-Column)

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│           Section Headline (40px)                         │
│           Optional description text                       │
│                                                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │             │  │             │  │             │      │
│  │   [Icon]    │  │   [Icon]    │  │   [Icon]    │      │
│  │             │  │             │  │             │      │
│  │   Title     │  │   Title     │  │   Title     │      │
│  │             │  │             │  │             │      │
│  │ Description │  │ Description │  │ Description │      │
│  │ text here   │  │ text here   │  │ text here   │      │
│  │             │  │             │  │             │      │
│  │  [Link →]   │  │  [Link →]   │  │  [Link →]   │      │
│  │             │  │             │  │             │      │
│  └─────────────┘  └─────────────┘  └─────────────┘      │
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Grid: 3 columns, 32px gap
- Card padding: 40px
- Border: 1px solid #E5E5E5
- Border-radius: 8px
- Shadow on hover
```

### Section 2: Alternating Content

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ┌──────────────────────┐        ┌──────────────────────┐│
│  │                      │        │                      ││
│  │   [Visual/Image]     │        │  ## Headline         ││
│  │                      │        │                      ││
│  │                      │        │  Body text that      ││
│  │                      │        │  describes the       ││
│  │                      │        │  feature or benefit  ││
│  │                      │        │                      ││
│  └──────────────────────┘        └──────────────────────┘│
│                                                           │
└───────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ┌──────────────────────┐        ┌──────────────────────┐│
│  │                      │        │                      ││
│  │  ## Headline         │        │   [Visual/Image]     ││
│  │                      │        │                      ││
│  │  Body text that      │        │                      ││
│  │  describes feature   │        │                      ││
│  │                      │        │                      ││
│  └──────────────────────┘        └──────────────────────┘│
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Layout: 50/50 split
- Alternates: Image left/right
- Background: Alternates white/gray
- Text max-width: 560px
```

### Section 3: Data Visualization

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│           Data Section Headline                           │
│                                                           │
│     ┌──────────────────────────────────────────────────┐ │
│     │                                                  │ │
│     │  Chart Title                                     │ │
│     │                                                  │ │
│     │  Label 1        ████████████████████   95%      │ │
│     │  Label 2        ███████████████        80%      │ │
│     │  Label 3        ██████████████████     88%      │ │
│     │  Label 4        ████████████           70%      │ │
│     │                                                  │ │
│     │  Source: Data source citation                   │ │
│     │                                                  │ │
│     └──────────────────────────────────────────────────┘ │
│                                                           │
│     Supporting text that explains the data and insights  │
│     lorem ipsum dolor sit amet consectetur.              │
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Chart background: White
- Bar color: BCG Green (#00D47E)
- Container background: Light gray
- Border-radius: 8px
- Chart padding: 48px
```

### Section 4: Testimonials/Social Proof

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│           What Founders Are Saying                        │
│                                                           │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐│
│  │               │  │               │  │               ││
│  │ "Quote text   │  │ "Quote text   │  │ "Quote text   ││
│  │  that spans   │  │  that spans   │  │  that spans   ││
│  │  multiple     │  │  multiple     │  │  multiple     ││
│  │  lines here." │  │  lines here." │  │  lines here." ││
│  │               │  │               │  │               ││
│  │  ◉ Name       │  │  ◉ Name       │  │  ◉ Name       ││
│  │  Title, Co    │  │  Title, Co    │  │  Title, Co    ││
│  │               │  │               │  │               ││
│  └───────────────┘  └───────────────┘  └───────────────┘│
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Grid: 3 columns
- Card padding: 32-40px
- Border: 1px solid #E5E5E5
- Quote: Italic, 18-20px
- Avatar: 48-56px circle
```

### Section 5: CTA Section

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  [Dark gradient background: #1A1A1A → #0E3E1B]           │
│                                                           │
│              Large White Headline                         │
│              Supporting white text                        │
│                                                           │
│        [White BG Button]    [Outline Button]             │
│                                                           │
│        Small trust text or metadata                      │
│                                                           │
└───────────────────────────────────────────────────────────┘

Specs:
- Height: 400-500px
- Text: White, centered
- Primary button: White bg, dark text
- Secondary button: Transparent, white border
- Padding: 80-100px vertical
```

---

## Component Wireframes

### Component: Stat Card

```
┌──────────────┐
│              │
│   10,000+    │  ← 48-56px, light weight
│   Founders   │  ← 12-14px, gray, uppercase
│              │
└──────────────┘

Variants:
- White background
- Mint background (#DCF9E3)
- Sage background (#E8F5E9)
```

### Component: Feature Card

```
┌────────────────────┐
│                    │
│    [Icon/Badge]    │  ← 32-40px icon
│                    │
│    Feature Title   │  ← 20-24px, medium
│                    │
│    Description     │  ← 16px, gray
│    text that       │
│    explains it.    │
│                    │
│    [Learn more →]  │  ← Green link
│                    │
└────────────────────┘

Specs:
- Padding: 32-40px
- Border: 1px solid #E5E5E5
- Hover: Lift + shadow
- Icon color: Green or dark
```

### Component: Author Card

```
┌──────────────────────────┐
│                          │
│  ◉  John Smith           │  ← 48px avatar
│     Senior Partner       │  ← 16px, bold
│     BCG                  │  ← 14px, gray
│                          │
└──────────────────────────┘

Layout:
- Horizontal: Avatar left, text right
- Vertical: Avatar top, text centered
- Avatar: Circle, 48-64px
```

### Component: Button (Primary)

```
┌─────────────────────┐
│   Start Building    │  ← 16px, medium weight
└─────────────────────┘

Specs:
- Padding: 16px 32px
- Background: #0E3E1B
- Color: White
- Border-radius: 8px
- Shadow: Subtle
- Hover: Darker + lift
```

### Component: Button (Secondary)

```
┌─────────────────────┐
│   Learn More  →     │  ← 16px, medium weight
└─────────────────────┘

Specs:
- Padding: 16px 32px
- Background: Transparent
- Color: #00D47E
- Border: 2px solid #00D47E
- Border-radius: 8px
- Hover: Light green bg
```

### Component: Progress Bar

```
Label Text                                        95%

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░

Specs:
- Track: #F5F5F5, 32px height, rounded
- Fill: BCG Green gradient, rounded
- Label: Left, 14px
- Value: Right, 16px bold
```

---

## Responsive Breakpoints

### Desktop (1280px+)

```
┌─────────────────────────────────────────────────────┐
│ HEADER                                              │
│ [Logo]         [Nav]         [Nav]         [CTA]    │
├─────────────────────────────────────────────────────┤
│                                                     │
│     ┌─────────────┐  ┌─────────────┐  ┌──────────┐│
│     │   Card 1    │  │   Card 2    │  │  Card 3  ││
│     └─────────────┘  └─────────────┘  └──────────┘│
│                                                     │
└─────────────────────────────────────────────────────┘

- 3-column grids
- Full navigation visible
- Large typography (72px headlines)
- 64px horizontal padding
```

### Tablet (768px - 1279px)

```
┌─────────────────────────────────────┐
│ HEADER                              │
│ [Logo]    [Nav]    [☰]    [CTA]     │
├─────────────────────────────────────┤
│                                     │
│    ┌───────────┐  ┌───────────┐    │
│    │  Card 1   │  │  Card 2   │    │
│    └───────────┘  └───────────┘    │
│                                     │
│    ┌───────────┐  ┌───────────┐    │
│    │  Card 3   │  │  Card 4   │    │
│    └───────────┘  └───────────┘    │
│                                     │
└─────────────────────────────────────┘

- 2-column grids
- Condensed navigation
- Medium typography (48-56px headlines)
- 40px horizontal padding
```

### Mobile (< 768px)

```
┌──────────────────────┐
│ HEADER               │
│ [Logo]    [☰]  [CTA] │
├──────────────────────┤
│                      │
│   ┌──────────────┐   │
│   │   Card 1     │   │
│   └──────────────┘   │
│                      │
│   ┌──────────────┐   │
│   │   Card 2     │   │
│   └──────────────┘   │
│                      │
│   ┌──────────────┐   │
│   │   Card 3     │   │
│   └──────────────┘   │
│                      │
└──────────────────────┘

- Single column
- Hamburger menu
- Smaller typography (36-40px headlines)
- 24px horizontal padding
- Full-width buttons
```

---

## Spacing Visual Reference

### Vertical Spacing

```
┌─────────────────────────────┐
│                             │  ← 120px section padding
│  Section Headline           │
│                             │  ← 32px gap
│  ┌────────────┐             │
│  │  Content   │             │
│  └────────────┘             │
│                             │  ← 120px section padding
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │  ← Next section
```

### Card Spacing

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌──────────┐  ←32px→  ┌──────────┐   │
│  │          │           │          │   │
│  │  Card 1  │           │  Card 2  │   │
│  │          │           │          │   │
│  └──────────┘           └──────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### Typography Spacing

```
Large Headline (56px)
  ↕ 16px
Subheadline (18px)
  ↕ 24px
Body paragraph (16px) with line-height 1.6
that continues for multiple lines to show
proper spacing and readability patterns.
  ↕ 16px
Another paragraph continues here.
```

---

## Color Application Examples

### Light Section

```
┌────────────────────────────────────┐
│ Background: #FFFFFF                │
│                                    │
│ Headline: #1A1A1A (Dark)           │
│ Body text: #737373 (Medium gray)   │
│ Links: #00D47E (BCG Green)         │
│                                    │
│ [Button: #0E3E1B] ← Emerald        │
│                                    │
└────────────────────────────────────┘
```

### Dark Section

```
┌────────────────────────────────────┐
│ Background: #1A1A1A                │
│                                    │
│ Headline: #FFFFFF (White)          │
│ Body text: rgba(255,255,255,0.7)   │
│ Links: #00D47E (BCG Green)         │
│                                    │
│ [Button: #FFFFFF] ← White          │
│                                    │
└────────────────────────────────────┘
```

### Accent Section

```
┌────────────────────────────────────┐
│ Background: #DCF9E3 (Mint)         │
│                                    │
│ Headline: #0E3E1B (Dark emerald)   │
│ Body text: #1A1A1A (Dark)          │
│ Accent: #00D47E (BCG Green)        │
│                                    │
└────────────────────────────────────┘
```

---

## Implementation Notes

### CSS Grid Template

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 64px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
  
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

### Component Classes

```css
/* Card */
.card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  padding: 40px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
}

/* Button */
.btn-primary {
  background: #0E3E1B;
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #0a2f14;
  transform: translateY(-2px);
}
```

---

**End of Wireframe Library**

For detailed specifications, refer to BCG-STYLE-GUIDE.md
