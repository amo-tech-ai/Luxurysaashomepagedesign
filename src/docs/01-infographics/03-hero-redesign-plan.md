# BCG AI Consumer Infographic — Hero Section Redesign

**Status:** 📋 **DESIGN PLAN COMPLETE** — Ready for Implementation  
**Progress:** 🟢 **0% Complete** (Plan stage)  
**Date:** February 12, 2026

---

## 📊 PROGRESS TRACKER

```
┌─────────────────────────────────────────────────────────┐
│ PHASE 1: Design Plan          ✅ 100% COMPLETE          │
│ PHASE 2: Component Build      ⬜ 0% (Not Started)       │
│ PHASE 3: Integration           ⬜ 0% (Not Started)       │
│ PHASE 4: Polish & Test         ⬜ 0% (Not Started)       │
│                                                          │
│ OVERALL PROGRESS:              🟢 25% (1/4 phases)       │
└─────────────────────────────────────────────────────────┘
```

**Timeline:** 1-2 hours implementation  
**Files to Update:** 1 (`/app/bcg-ai-consumer/page.tsx`)

---

## 🎯 THE PROBLEM

### Current Hero (Dashboard-Style)

```
❌ WRONG APPROACH:

┌────────────────────────────┐
│         62%                │  ← Stat-first
│    [Donut Chart]           │  ← Dashboard visual
│  "of consumers use GenAI"  │  ← Supporting copy
│                            │
│   [Supporting micro copy]  │
└────────────────────────────┘

Feels like: "Insight slide"
Not: "Strategic narrative"
```

**Issues:**
1. ❌ **Metric-led** — Numbers come first (dashboard logic)
2. ❌ **Functional, not editorial** — Feels like a KPI card
3. ❌ **No context** — What's the bigger story?
4. ❌ **No argument** — No strategic framing
5. ❌ **Lacks authority** — Doesn't signal consulting-grade intelligence
6. ❌ **Insufficient whitespace** — Cramped, not premium
7. ❌ **Chart in hero** — Data viz too early (belongs in exhibits)

**Visual Problems:**
- Donut chart = dashboard element (not editorial)
- Circular stat card = KPI widget
- Small padding = functional UI (not strategic narrative)
- No visual gravity or cinematic weight

---

## 🔥 WHAT BCG ACTUALLY DOES

### Real BCG Hero Structure (From Images)

**Example 1: "Turning GenAI Magic into Business Impact"**
```
1. Category label: "ARTIFICIAL INTELLIGENCE"
2. Large headline: "Turning GenAI Magic into Business Impact"
3. Cinematic visual: Green particle burst (abstract AI art)
4. Metadata: "Article • 8 min read"
```

**Example 2: "Simply Brilliant: Users"**
```
1. Large headline: "Simply Brilliant: Users"
2. Framing paragraph: 2-3 lines of context
3. Abstract visual or gradient field
4. Clean, generous spacing (180px+ top padding)
```

**BCG Hero Principles:**
- ✅ **Narrative-first** — Headline frames the strategic shift
- ✅ **Context before data** — Set up the argument
- ✅ **Editorial tone** — Calm, authoritative, intelligent
- ✅ **Cinematic visuals** — Abstract/artistic, not charts
- ✅ **Generous whitespace** — 160-180px vertical padding
- ✅ **No stats in hero** — Save metrics for exhibits

---

## ✨ NEW HERO STRUCTURE (BCG-Compliant)

### Layout Philosophy

**From:** Dashboard insight slide  
**To:** Editorial strategic narrative

**Goal:** Create context, authority, and visual gravity BEFORE presenting data.

---

### 🟢 COMPONENT BREAKDOWN

**5-Part Editorial Hero:**

```
┌─────────────────────────────────────────────────────────┐
│                    [180px padding]                       │
│                                                          │
│              GENAI & CONSUMER BEHAVIOR                   │  ← 1. Eyebrow
│                  (small, muted green)                    │
│                                                          │
│                      [32px gap]                          │
│                                                          │
│           GenAI Is Reshaping the                         │  ← 2. Headline
│         Consumer Decision Journey                        │     (52-60px serif)
│                                                          │
│                      [32px gap]                          │
│                                                          │
│    Consumers are no longer turning to search alone.      │  ← 3. Framing Para
│    From research to evaluation and purchase, generative  │     (18px, muted)
│    AI is becoming a core decision interface.             │
│                                                          │
│                      [60px gap]                          │
│                                                          │
│    ┌───────────────────────────────────────────┐        │  ← 4. Visual Anchor
│    │                                           │        │     (500px height)
│    │     [Cinematic Green Gradient Field]     │        │     (Abstract, not chart)
│    │        or [Abstract AI Particle Art]     │        │
│    │                                           │        │
│    └───────────────────────────────────────────┘        │
│                                                          │
│                      [40px gap]                          │
│                                                          │
│          Research Study • 8 min read • Nov 2025         │  ← 5. Metadata
│                    (muted, small)                        │
│                                                          │
│                    [160px padding]                       │
└─────────────────────────────────────────────────────────┘
```

---

### 📐 DETAILED COMPONENT SPECS

---

#### **1. EYEBROW LABEL**

**Purpose:** Category framing  
**Copy:** `GENAI & CONSUMER BEHAVIOR`

**Styling:**
```tsx
text-[11px]
uppercase
tracking-[0.12em]
text-[#0F3D2E]  // Deep strategic green
font-medium
mb-8
text-center
```

**Location:** Top center, above headline

---

#### **2. EDITORIAL HEADLINE**

**Purpose:** Frame the strategic narrative (NOT a stat)

**Copy Options (Choose One):**

**Option A (Recommended):**
```
GenAI Is Reshaping the
Consumer Decision Journey
```

**Option B:**
```
From Search Engine to Decision Engine:
How GenAI Is Changing Consumer Behavior
```

**Option C:**
```
AI Has Entered the Purchase Pathway
```

**Option D:**
```
The New Consumer Reality:
GenAI as Decision Infrastructure
```

**Styling:**
```tsx
text-[52px] md:text-[60px]
leading-[1.1]
font-medium  // NOT bold
text-[#1A1A1A]
text-center
max-w-[900px]
mx-auto
mb-8
font-serif  // Georgia, Cambria
tracking-[-0.5px]
```

**Key Principle:**
> Headline frames the SHIFT, not the STAT.  
> "What's changing" > "Here's a number"

---

#### **3. FRAMING PARAGRAPH**

**Purpose:** Set context before presenting data

**Copy (2-3 sentences max):**
```
Consumers are no longer turning to search alone.
From research to evaluation and purchase, generative AI 
is becoming a core decision interface across categories.
```

**Alternative:**
```
GenAI has fundamentally altered how consumers discover,
evaluate, and purchase products. What began as a research
tool has become essential infrastructure for decision-making.
```

**Styling:**
```tsx
text-[18px]
leading-[1.6]
text-[#5C5C5C]  // Muted, not primary black
text-center
max-w-[750px]
mx-auto
mb-16
```

**Key Principle:**
> No stats. No metrics. Pure context.  
> Set up the story that data will prove.

---

#### **4. VISUAL ANCHOR**

**Purpose:** Cinematic weight, editorial gravitas (NOT a chart)

**Visual Options:**

**Option A: Abstract Green Gradient Field (RECOMMENDED)**
```tsx
<div className="
  relative 
  w-full 
  max-w-[1000px] 
  mx-auto 
  h-[420px] md:h-[520px]
  rounded-2xl
  overflow-hidden
  bg-gradient-to-br 
  from-[#0F3D2E] 
  via-[#1a5a45] 
  to-[#0a2a1f]
">
  {/* Particle effect overlay (CSS or SVG) */}
  <div className="absolute inset-0 opacity-20">
    {/* Subtle animated particles or noise texture */}
  </div>
</div>
```

**Option B: BCG-Style Green Particle Burst (Like Image 1)**
```tsx
// Import abstract AI visual (green particles spreading)
// Large, cinematic, abstract
// NOT a donut chart, NOT a data viz
```

**Option C: Minimal Purchase Journey Silhouette**
```tsx
// Faint, background illustration
// Person → AI interface → Product
// Very subtle, decorative only
```

**Option D: Soft Cream + Green Geometric Pattern**
```tsx
// Subtle grid or dot pattern
// Emerald on cream background
// Very restrained, BCG-minimalist
```

**Styling (All Options):**
```tsx
w-full
max-w-[1000px]
mx-auto
h-[420px] md:h-[520px]
rounded-2xl
mb-10
```

**Key Principle:**
> Cinematic, not functional.  
> Art direction, not data visualization.  
> Should feel premium, not dashboard-like.

---

#### **5. METADATA LINE (OPTIONAL)**

**Purpose:** Context, authority, BCG attribution

**Copy:**
```
Research Study • 8 min read • November 2025
```

**Alternative:**
```
Based on BCG Consumer Confidence Index • 9,000+ consumers • 9 countries
```

**Styling:**
```tsx
text-[13px]
text-[#9CA3AF]
text-center
flex items-center justify-center gap-3
```

**Separator:**
```tsx
<span className="text-[#D4D4D4]">•</span>
```

---

## 🔄 WHERE THE 62% STAT GOES NOW

### NEW LOCATION: Section 2 — "Key Findings at a Glance"

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│              KEY FINDINGS AT A GLANCE                    │  ← Section label
│                                                          │
│   Consumers Increasingly Use GenAI as Part of           │  ← Contextual headline
│            Everyday Behaviors                            │
│                                                          │
│                      [32px gap]                          │
│                                                          │
│              ┌──────────────────┐                        │
│              │                  │                        │
│              │       62%        │  ← NOW the stat appears│
│              │                  │     (with context)     │
│              │  use GenAI for   │                        │
│              │  research before │                        │
│              │    purchasing    │                        │
│              └──────────────────┘                        │
│                                                          │
│   [Grid of 3-4 more stats: 64% in 3+ categories, etc.]  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Why This Works:**
1. ✅ **Stat now supports narrative** (not leads it)
2. ✅ **Context established first** (hero framed the shift)
3. ✅ **Consulting logic** (argument → evidence)
4. ✅ **BCG structure** (editorial → data)

---

## 📐 SPACING FIXES (CRITICAL)

### Current Spacing (Insufficient)

```css
py-20 lg:py-32  /* 80-128px */
```

❌ Too tight for editorial hero.

---

### NEW SPACING (BCG-Level)

```tsx
<section className="
  py-32 lg:py-44  /* 128-176px — DOUBLED */
  px-8
  bg-white
  relative
">
```

**Breakdown:**
- **Top padding:** 128px (mobile) → 176px (desktop)
- **Bottom padding:** 128px (mobile) → 176px (desktop)
- **Headline → Paragraph:** 32px (`mb-8`)
- **Paragraph → Visual:** 64px (`mb-16`)
- **Visual → Metadata:** 40px (`mb-10`)

**Why This Matters:**
> Large whitespace = authority  
> Cramped spacing = functional UI  
> BCG uses 160-200px section padding consistently

---

## 🎨 VISUAL TONE IMPROVEMENTS

### ❌ REMOVE (Dashboard Elements)

**From Hero:**
- ❌ Donut charts
- ❌ Circular stat cards
- ❌ KPI-style metrics
- ❌ Dashboard framing
- ❌ Icon badges
- ❌ Progress rings

**Visual Treatment:**
- ❌ Small padding (60-80px)
- ❌ Functional card styling
- ❌ Data viz in hero

---

### ✅ ADD (Editorial Elements)

**To Hero:**
- ✅ Eyebrow labels (category framing)
- ✅ Large serif headlines (52-60px)
- ✅ Contextual paragraphs (no stats)
- ✅ Cinematic visuals (abstract art, not charts)
- ✅ Generous whitespace (160-180px padding)
- ✅ Calm, authoritative tone
- ✅ Strategic narrative framing

**Visual Treatment:**
- ✅ Editorial typography
- ✅ Clean hierarchy
- ✅ One strong green accent
- ✅ Premium spacing
- ✅ Narrative-first structure

---

## 🪞 BEFORE vs AFTER COMPARISON

### 📊 BEFORE (Dashboard-Style)

```
Current Hero Flow:

1. See 62% stat immediately
2. See donut chart
3. Read supporting copy
4. Scroll to next section

User thinks: "Here's a metric"
Feeling: Functional, dashboard-like
Tone: Data-first, metric-led
```

**Visual Hierarchy:**
```
STAT (62%) ← Dominates
↓
Chart (Donut) ← Visual proof
↓
Copy (Supports stat) ← Context after
```

**Problems:**
- No strategic framing
- No narrative arc
- Feels like slide 47 of a deck (not slide 1)
- Dashboard logic (not consulting logic)

---

### 📊 AFTER (Editorial Narrative)

```
New Hero Flow:

1. See category label (GENAI & CONSUMER BEHAVIOR)
2. Read strategic headline (framing the shift)
3. Read context paragraph (set up argument)
4. See cinematic visual (editorial weight)
5. Scroll to Section 2 → NOW see 62% stat

User thinks: "Here's the strategic shift happening"
Feeling: Editorial, authoritative, intelligent
Tone: Narrative-first, consulting-grade
```

**Visual Hierarchy:**
```
CATEGORY LABEL ← Context
↓
HEADLINE (The Shift) ← Strategic framing
↓
PARAGRAPH (Why This Matters) ← Argument
↓
VISUAL (Cinematic Anchor) ← Gravitas
↓
[Section 2] → Stats ← Evidence follows narrative
```

**Improvements:**
- ✅ Strategic framing established first
- ✅ Clear narrative arc (context → argument → evidence)
- ✅ Feels like slide 1 of a keynote (not a dashboard)
- ✅ Consulting logic (thesis → proof)
- ✅ Editorial authority

---

## 🔧 IMPLEMENTATION ORDER

### PHASE 1: Design Plan ✅ (This Document)
- [x] Analyze current issues
- [x] Define BCG-compliant structure
- [x] Create component specs
- [x] Write ASCII wireframe
- [x] Document before/after

**Time:** 30 min  
**Status:** ✅ COMPLETE

---

### PHASE 2: Component Build 🔨 (Next)

**Priority Order:**

**2A. Update Hero Section Structure** (30 min)
- [ ] Remove donut chart component
- [ ] Remove stat-first layout
- [ ] Add eyebrow label component
- [ ] Update headline (choose copy from options)
- [ ] Add framing paragraph component
- [ ] Add visual anchor (choose Option A/B/C/D)
- [ ] Add optional metadata line

**2B. Update Spacing** (10 min)
- [ ] Increase section padding: `py-32 lg:py-44`
- [ ] Add proper component gaps (32px, 64px)
- [ ] Verify whitespace on mobile/desktop

**2C. Update Typography** (10 min)
- [ ] Headline: 52-60px serif, medium weight
- [ ] Paragraph: 18px, muted color
- [ ] Eyebrow: 11px uppercase, green
- [ ] Metadata: 13px, very muted

**Files to Edit:**
- `/app/bcg-ai-consumer/page.tsx` (lines 1-150, hero section only)

**Time:** 50 minutes  
**Status:** ⬜ NOT STARTED

---

### PHASE 3: Integration 🔗 (After Phase 2)

**3A. Move 62% Stat to Section 2** (20 min)
- [ ] Create new "Key Findings" section (after hero)
- [ ] Add contextual headline
- [ ] Add 62% stat card (now supporting narrative)
- [ ] Add 3-4 supporting stats (grid layout)
- [ ] Verify flow: Hero (context) → Section 2 (data)

**3B. Update Scroll Behavior** (10 min)
- [ ] Verify smooth transition hero → findings
- [ ] Check scroll hints/arrows still work
- [ ] Test on mobile (sufficient padding)

**Files to Edit:**
- `/app/bcg-ai-consumer/page.tsx` (lines 150-300, add new section)

**Time:** 30 minutes  
**Status:** ⬜ NOT STARTED

---

### PHASE 4: Polish & Test 🎨 (Final)

**4A. Visual Polish** (15 min)
- [ ] Choose final visual anchor (gradient vs particle art)
- [ ] Verify color consistency (#0F3D2E green)
- [ ] Check all typography rendering
- [ ] Test responsive breakpoints

**4B. Copy Refinement** (10 min)
- [ ] Choose final headline from options
- [ ] Verify framing paragraph clarity
- [ ] Check metadata line (optional inclusion)

**4C. QA Testing** (10 min)
- [ ] Desktop: Chrome, Safari
- [ ] Mobile: iOS, Android
- [ ] Tablet: iPad view
- [ ] Verify no layout breaks
- [ ] Check console (0 errors)

**Time:** 35 minutes  
**Status:** ⬜ NOT STARTED

---

## 📋 RECOMMENDED IMPLEMENTATION ORDER

**Total Time:** ~2 hours

```
1. Read this plan (5 min)
2. Phase 2A: Update hero structure (30 min)
3. Phase 2B: Fix spacing (10 min)
4. Phase 2C: Update typography (10 min)
5. Phase 3A: Move stat to Section 2 (20 min)
6. Phase 3B: Test scroll flow (10 min)
7. Phase 4A: Visual polish (15 min)
8. Phase 4B: Copy refinement (10 min)
9. Phase 4C: QA testing (10 min)
```

**Break Points:**
- After Phase 2: Hero structure complete
- After Phase 3: Full page flow complete
- After Phase 4: Production-ready

---

## 📐 ASCII WIREFRAME (NEW HERO)

### DESKTOP VIEW (>1024px)

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│                          [180px padding-top]                           │
│                                                                        │
│                                                                        │
│                      GENAI & CONSUMER BEHAVIOR                         │
│                    (11px • uppercase • #0F3D2E)                        │
│                                                                        │
│                            [32px gap]                                  │
│                                                                        │
│                     GenAI Is Reshaping the                             │
│                   Consumer Decision Journey                            │
│                  (60px • serif • medium • #1A1A1A)                     │
│                                                                        │
│                            [32px gap]                                  │
│                                                                        │
│       Consumers are no longer turning to search alone.                 │
│       From research to evaluation and purchase, generative             │
│       AI is becoming a core decision interface.                        │
│                 (18px • sans • #5C5C5C • 750px max)                    │
│                                                                        │
│                            [64px gap]                                  │
│                                                                        │
│    ┌────────────────────────────────────────────────────────────┐     │
│    │                                                            │     │
│    │                                                            │     │
│    │                                                            │     │
│    │         [Cinematic Green Gradient Field]                  │     │
│    │              or [Abstract AI Art]                         │     │
│    │                                                            │     │
│    │              1000px × 520px                               │     │
│    │            rounded-2xl • bg-gradient                       │     │
│    │                                                            │     │
│    │                                                            │     │
│    │                                                            │     │
│    └────────────────────────────────────────────────────────────┘     │
│                                                                        │
│                            [40px gap]                                  │
│                                                                        │
│              Research Study • 8 min read • November 2025               │
│                     (13px • #9CA3AF • centered)                        │
│                                                                        │
│                                                                        │
│                         [160px padding-bottom]                         │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Total Height: ~1200px (was ~800px)
Max Width: 1000px (centered)
Background: white
```

---

### TABLET VIEW (768-1024px)

```
┌───────────────────────────────────────────────────┐
│                                                   │
│               [140px padding-top]                 │
│                                                   │
│          GENAI & CONSUMER BEHAVIOR                │
│                                                   │
│                 [28px gap]                        │
│                                                   │
│           GenAI Is Reshaping the                  │
│         Consumer Decision Journey                 │
│              (56px • serif)                       │
│                                                   │
│                 [28px gap]                        │
│                                                   │
│   Consumers are no longer turning to search       │
│   alone. From research to evaluation and          │
│   purchase, generative AI is becoming a core      │
│   decision interface.                             │
│              (17px • 700px max)                   │
│                                                   │
│                 [56px gap]                        │
│                                                   │
│    ┌──────────────────────────────────┐           │
│    │                                  │           │
│    │   [Gradient Field / AI Art]     │           │
│    │         900px × 450px            │           │
│    │                                  │           │
│    └──────────────────────────────────┘           │
│                                                   │
│                 [36px gap]                        │
│                                                   │
│     Research Study • 8 min • Nov 2025            │
│                                                   │
│              [120px padding-bottom]               │
│                                                   │
└───────────────────────────────────────────────────┘

Total Height: ~1000px
Max Width: 900px
```

---

### MOBILE VIEW (<768px)

```
┌─────────────────────────────────────┐
│                                     │
│        [100px padding-top]          │
│                                     │
│    GENAI & CONSUMER BEHAVIOR        │
│                                     │
│            [24px gap]               │
│                                     │
│      GenAI Is Reshaping             │
│          the Consumer               │
│       Decision Journey              │
│         (48px • serif)              │
│                                     │
│            [24px gap]               │
│                                     │
│  Consumers are no longer turning    │
│  to search alone. From research     │
│  to purchase, GenAI is becoming     │
│  essential infrastructure.          │
│         (16px • 90% width)          │
│                                     │
│            [48px gap]               │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │  [Gradient / AI Visual]      │  │
│  │      100% × 360px            │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│            [32px gap]               │
│                                     │
│  Research Study • Nov 2025         │
│         (12px • muted)              │
│                                     │
│       [80px padding-bottom]         │
│                                     │
└─────────────────────────────────────┘

Total Height: ~850px
Max Width: 100% - 32px padding
```

---

## 🎯 SUCCESS CRITERIA

### Design Goals

**Visual Quality:**
- [ ] Hero feels editorial (not dashboard-like)
- [ ] Headline frames strategic narrative (not stat)
- [ ] Visual anchor is cinematic (not functional)
- [ ] Whitespace signals authority (160-180px padding)
- [ ] One green accent max (eyebrow label)

**Typography:**
- [ ] Headline: 52-60px serif, medium weight
- [ ] Paragraph: 18px, muted color (#5C5C5C)
- [ ] Eyebrow: 11px uppercase, green
- [ ] Proper line-height (1.1 headline, 1.6 body)

**Spacing:**
- [ ] Section padding: 128-176px (doubled from current)
- [ ] Headline → Paragraph: 32px
- [ ] Paragraph → Visual: 64px
- [ ] Visual → Metadata: 40px

---

### UX Goals

**Narrative Flow:**
- [ ] User sees context BEFORE data
- [ ] Strategic framing established in hero
- [ ] 62% stat appears in Section 2 (with context)
- [ ] Clear argument structure: Context → Evidence

**Readability:**
- [ ] Hero scannable in <10 seconds
- [ ] Clear hierarchy (eyebrow → headline → paragraph → visual)
- [ ] No cognitive overload (no stats in hero)
- [ ] Smooth scroll transition hero → Section 2

---

### Technical Goals

**Code Quality:**
- [ ] Clean component structure
- [ ] Responsive breakpoints (mobile/tablet/desktop)
- [ ] TypeScript interfaces (if needed)
- [ ] Zero console errors
- [ ] Tailwind-only styling (no custom CSS)

**Performance:**
- [ ] Visual loads in <500ms
- [ ] Smooth scroll (60fps)
- [ ] Mobile-optimized images
- [ ] No layout shift (CLS = 0)

---

## 📝 COPY OPTIONS (Final Selection)

### Eyebrow Label (FIXED)
```
GENAI & CONSUMER BEHAVIOR
```

---

### Headline (Choose ONE)

**Option A (RECOMMENDED — Most BCG-like):**
```
GenAI Is Reshaping the
Consumer Decision Journey
```
✅ Clear strategic framing  
✅ Passive voice (BCG style)  
✅ 2-line layout works on mobile  

**Option B (Alternative — More Active):**
```
From Search Engine to Decision Engine:
How GenAI Is Changing Consumer Behavior
```
✅ Clear before/after framing  
✅ Colon structure (McKinsey style)  
⚠️ Longer (may wrap awkwardly on mobile)

**Option C (Alternative — Shorter):**
```
AI Has Entered the Purchase Pathway
```
✅ Concise, declarative  
⚠️ Less context than A/B

**Option D (Alternative — Most Editorial):**
```
The New Consumer Reality:
GenAI as Decision Infrastructure
```
✅ Strong positioning  
✅ "Infrastructure" = strategic weight  
⚠️ May feel overly abstract

**RECOMMENDATION:** Use **Option A** — clearest framing, best mobile layout.

---

### Framing Paragraph (Choose ONE)

**Option A (RECOMMENDED):**
```
Consumers are no longer turning to search alone.
From research to evaluation and purchase, generative AI 
is becoming a core decision interface across categories.
```
✅ Clear before/after  
✅ 3 sentences, scannable  
✅ Sets up stats that follow  

**Option B (Alternative — More Direct):**
```
GenAI has fundamentally altered how consumers discover,
evaluate, and purchase products. What began as a research
tool has become essential infrastructure for decision-making.
```
✅ Strong opening  
✅ "Infrastructure" reinforces strategic weight  
⚠️ Slightly more abstract

**RECOMMENDATION:** Use **Option A** — clearer, more concrete.

---

### Metadata Line (OPTIONAL)

**Option A:**
```
Research Study • 8 min read • November 2025
```

**Option B:**
```
Based on BCG Consumer Confidence Index • 9,000+ consumers • 9 countries
```

**Option C (No Metadata):**
```
[Skip this line entirely]
```

**RECOMMENDATION:** Use **Option B** — adds authority, credits BCG properly.

---

## 🚀 QUICK START CHECKLIST

### Before You Code

- [ ] Read this plan in full (5 min)
- [ ] Choose headline (Option A recommended)
- [ ] Choose framing paragraph (Option A recommended)
- [ ] Choose visual anchor (Option A: Gradient recommended)
- [ ] Choose metadata line (Option B recommended)

### Phase 2: Update Hero

- [ ] Open `/app/bcg-ai-consumer/page.tsx`
- [ ] Delete donut chart component
- [ ] Delete stat-first layout
- [ ] Add eyebrow label component
- [ ] Add new headline component
- [ ] Add framing paragraph component
- [ ] Add visual anchor component
- [ ] Add metadata line (optional)
- [ ] Update section padding: `py-32 lg:py-44`
- [ ] Test desktop view

### Phase 3: Move Stat

- [ ] Create Section 2: "Key Findings at a Glance"
- [ ] Add contextual headline
- [ ] Add 62% stat card (now with context)
- [ ] Add 3-4 supporting stats
- [ ] Verify scroll flow: Hero → Section 2
- [ ] Test mobile view

### Phase 4: Polish

- [ ] Choose final visual (gradient/particle art)
- [ ] Verify all colors (#0F3D2E green)
- [ ] Check typography rendering
- [ ] Test responsive breakpoints
- [ ] QA: Chrome, Safari, Mobile
- [ ] Verify 0 console errors
- [ ] Update progress tracker to 100%

---

## 📁 FILES TO UPDATE

**Primary File:**
```
/app/bcg-ai-consumer/page.tsx
  - Lines 1-150: Hero section (full rebuild)
  - Lines 150-300: Add new Section 2 (Key Findings)
  - Total changes: ~200 lines
```

**Documentation:**
```
/docs/01-infographics/03-hero-redesign-plan.md (this file)
  - Update progress tracker after each phase
```

**Optional:**
```
/docs/progress-tracker.md
  - Add entry after implementation complete
```

---

## 🎨 VISUAL ANCHOR OPTIONS (Detailed)

### Option A: Green Gradient Field (RECOMMENDED)

**Why:** Simplest, cleanest, most BCG-like.

**Implementation:**
```tsx
<div className="
  relative 
  w-full 
  max-w-[1000px] 
  mx-auto 
  h-[420px] md:h-[520px]
  rounded-2xl
  overflow-hidden
  bg-gradient-to-br 
  from-[#0F3D2E] 
  via-[#1a5a45] 
  to-[#0a2a1f]
">
  {/* Optional: Subtle noise/grain overlay */}
  <div className="
    absolute 
    inset-0 
    opacity-10
    bg-[url('data:image/svg+xml,...')]  // Noise texture
  "/>
</div>
```

**Pros:**
- ✅ Zero dependencies
- ✅ Fast load time
- ✅ Scales perfectly
- ✅ On-brand (emerald green)
- ✅ Editorial, not functional

**Cons:**
- ⚠️ May feel too simple (if comparing to BCG particle art)

**Visual Weight:** Medium (calm, confident)

---

### Option B: Abstract Particle Burst (BCG-Style)

**Why:** Matches BCG's actual visual language (see image 1).

**Implementation Options:**

**B1. Static SVG (Recommended):**
```tsx
// Create SVG with green particles radiating from center
// Export as optimized SVG file
import ParticleBurst from './assets/particle-burst.svg';

<div className="relative w-full max-w-[1000px] mx-auto h-[520px]">
  <img 
    src={ParticleBurst} 
    alt="" 
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
```

**B2. Animated Canvas (Advanced):**
```tsx
// Use Canvas API to draw animated particles
// Green dots spreading from center point
// Requires JavaScript animation
```

**Pros:**
- ✅ Most BCG-authentic
- ✅ High visual impact
- ✅ Cinematic weight

**Cons:**
- ⚠️ Requires asset creation
- ⚠️ Larger file size (if animated)
- ⚠️ More complex implementation

**Visual Weight:** High (dramatic, cinematic)

---

### Option C: Minimal Journey Illustration

**Why:** Signals "consumer journey" visually (subtle).

**Implementation:**
```tsx
// Faint illustration: Person → AI → Product
// Very minimal line art
// Cream background with emerald accents
```

**Pros:**
- ✅ Contextually relevant
- ✅ Subtle, not overwhelming

**Cons:**
- ⚠️ Requires custom illustration
- ⚠️ Risk of feeling too literal

**Visual Weight:** Low-Medium (decorative)

---

### Option D: Geometric Pattern Field

**Why:** Abstract, architectural, BCG-minimalist.

**Implementation:**
```tsx
<div className="
  relative 
  w-full 
  max-w-[1000px] 
  mx-auto 
  h-[520px]
  rounded-2xl
  bg-[#FAF9F7]
">
  {/* Subtle dot grid or geometric pattern */}
  <div className="
    absolute 
    inset-0
    bg-[radial-gradient(circle,#0F3D2E_1px,transparent_1px)]
    bg-[size:32px_32px]
    opacity-5
  "/>
</div>
```

**Pros:**
- ✅ Very minimal
- ✅ Fast, lightweight
- ✅ Architectural feel

**Cons:**
- ⚠️ May lack visual impact
- ⚠️ Risk of feeling generic

**Visual Weight:** Low (calm, restrained)

---

### RECOMMENDATION

**For this infographic: Choose Option A (Green Gradient Field)**

**Rationale:**
1. ✅ Fastest to implement (no assets needed)
2. ✅ On-brand (emerald gradient)
3. ✅ Editorial, not functional
4. ✅ Cinematic weight without complexity
5. ✅ Scales perfectly (responsive)
6. ✅ BCG-level calm confidence

**Optional Enhancement:**
- Add subtle noise/grain overlay (10% opacity)
- Add very faint radial glow from center

---

## 🎯 FINAL IMPLEMENTATION RECOMMENDATION

### RECOMMENDED CONFIGURATION

**Eyebrow:** `GENAI & CONSUMER BEHAVIOR`  
**Headline:** `GenAI Is Reshaping the Consumer Decision Journey`  
**Paragraph:** Option A (Consumers are no longer...)  
**Visual:** Option A (Green Gradient Field)  
**Metadata:** Option B (Based on BCG Consumer Confidence Index...)  
**Spacing:** `py-32 lg:py-44` (128-176px)

**Total Implementation Time:** ~2 hours  
**Difficulty:** Easy (all Tailwind, no complex JS)  
**Impact:** High (transforms dashboard feel → editorial authority)

---

## ✅ ACCEPTANCE CRITERIA

### Before Marking Complete

**Visual Quality:**
- [ ] Hero looks editorial (not dashboard-like)
- [ ] Headline frames narrative (not stat)
- [ ] Visual anchor is cinematic
- [ ] Whitespace feels generous (160-180px)

**Content Quality:**
- [ ] Eyebrow label present and styled
- [ ] Headline is strategic (not metric-led)
- [ ] Paragraph sets context (no stats)
- [ ] Metadata credits BCG properly

**Technical Quality:**
- [ ] Responsive (mobile/tablet/desktop)
- [ ] Zero console errors
- [ ] Smooth scroll to Section 2
- [ ] 62% stat appears in Section 2 (not hero)

**Before/After Verified:**
- [ ] Old hero removed (donut chart gone)
- [ ] New hero matches wireframe
- [ ] Flow is: Context → Evidence (not Evidence → Context)

---

## 📊 PROGRESS UPDATES

### Update After Each Phase

**Phase 2 Complete (Hero Rebuild):**
```
Progress: 50% → Update tracker to:
│ PHASE 2: Component Build      ✅ 100% COMPLETE          │
│ OVERALL PROGRESS:              🟢 50% (2/4 phases)       │
```

**Phase 3 Complete (Integration):**
```
Progress: 75% → Update tracker to:
│ PHASE 3: Integration           ✅ 100% COMPLETE          │
│ OVERALL PROGRESS:              🟢 75% (3/4 phases)       │
```

**Phase 4 Complete (Polish):**
```
Progress: 100% → Update tracker to:
│ PHASE 4: Polish & Test         ✅ 100% COMPLETE          │
│ OVERALL PROGRESS:              ✅ 100% (4/4 phases)      │
```

---

## 🎉 COMPLETION CHECKLIST

### When All Phases Done

- [ ] Hero is editorial (not dashboard)
- [ ] 62% stat moved to Section 2
- [ ] Spacing increased (160-180px)
- [ ] Typography updated (serif headlines)
- [ ] Visual anchor implemented
- [ ] Responsive verified
- [ ] QA complete (0 errors)
- [ ] Progress tracker at 100%
- [ ] Add entry to `/docs/progress-tracker.md`
- [ ] Screenshot before/after for reference

---

**Status:** ✅ **DESIGN PLAN COMPLETE** — Ready for Implementation  
**Next Step:** Phase 2 — Component Build  
**Total Time Remaining:** ~2 hours

