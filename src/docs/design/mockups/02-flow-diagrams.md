# Flow Diagrams Mockup Collection

**BCG Editorial Style × StartupAI Product Flows**

**Section**: Process Flow Diagrams (Multiple Use Cases)  
**Priority**: High — Core product explanation  
**Status**: Ready for Implementation  
**Version**: 1.0

---

## Purpose

Flow diagrams communicate **how StartupAI works** across different use cases:

1. **Investor materials** — Pitch deck generation flow
2. **Lead intelligence** — CRM scoring and segmentation
3. **Founder onboarding** — Profile creation flow
4. **Playbook execution** — Task breakdown and tracking
5. **Market insight** — Competitive analysis flow

**Feeling**: Clear, sequential, strategic — like a consulting process map, not a feature demo.

---

## Universal Flow Diagram Specifications

### Visual Style

**Diagram Type**: Horizontal flow (left-to-right)  
**Nodes**: 3–5 boxes with labels  
**Connectors**: Simple arrows or lines  
**Outcome**: Final box or callout (visually distinct)

---

### Typography

#### Section H2 (Flow Title)
* **Size**: 32–40px (`text-3xl lg:text-4xl`)
* **Weight**: Light (300) — `font-light`
* **Color**: #212427 (primary text)
* **Spacing**: 60px above, 32px below

#### Node Labels
* **Size**: 16px (`text-base`)
* **Weight**: Medium (500) — `font-medium`
* **Color**: #212427 (primary text)
* **Lines**: Max 2 lines (2–5 words per node)

#### Caption
* **Size**: 14px (`text-sm`)
* **Weight**: Regular (400)
* **Color**: #696969 (secondary text)
* **Style**: Italic optional
* **Spacing**: 16px above caption

---

### Node Specifications

**Box Style**:
* **Width**: 180px–200px (flexible based on label length)
* **Height**: Auto (based on content, min 80px)
* **Padding**: 16px–20px (`px-5 py-4`)
* **Border**: 1.5px solid #E5E5E5
* **Background**: White
* **Border-radius**: 0px (sharp corners, not rounded)

**Outcome Box** (Final node):
* **Background**: #DCF9E3 (soft green) or #F1EEEA (warm beige)
* **Border**: 1.5px solid #0E3E1B (green) or #E5E5E5 (gray)
* **Text color**: #0E3E1B (green) if green background

---

### Connector Style

**Arrow/Line**:
* **Type**: Solid line with simple arrowhead
* **Stroke**: 1.5px–2px
* **Color**: #898888 (muted gray)
* **Length**: 40px–60px between nodes
* **Style**: Straight horizontal (no curves)

**Arrow icon**: Simple right-pointing triangle (→) or use Unicode arrow

---

### Spacing

**Between nodes**: 40–60px horizontal gap  
**Section padding**: 80–120px vertical (`py-20 lg:py-32`)  
**Max-width**: 1200px container  
**Horizontal margins**: 64px desktop (`px-16`), 32px mobile (`px-8`)

---

### Background

**Default**: White (#FFFFFF)  
**Alternate**: Light gray (#F1EEEA) for every other flow section  
**Never**: Multiple colors or gradients

---

## Flow 1: Investor Materials (Pitch → Deck)

### Content Specifications

**Section H2**:
```
From idea to investor-ready deck
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Add context & URLs | Founder inputs business context and URLs |
| 2 | AI structures narrative | AI proposes slide outline and copy |
| 3 | You refine & brand | Founder edits and applies branding |
| Outcome | Deck & one-pager ready | Export deck and one-pager |

**Caption**:
```
One path from clarity to execution.
```

---

### Context (Implementation Note)

**User journey**:
1. Founder enters business context and optional company URLs
2. AI proposes slide outline and copy
3. Founder edits and applies branding
4. Export deck and one-pager

**Where used**: Pitch deck product page, homepage platform capabilities

---

### Visual Layout (Desktop)

```
[Section H2: From idea to investor-ready deck]

┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │  →   │                 │  →   │                 │  →   │                 │
│ Add context &   │      │ AI structures   │      │ You refine &    │      │ Deck & one-     │ ← Highlighted
│ URLs            │      │ narrative       │      │ brand           │      │ pager ready     │
│                 │      │                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘

[Caption: One path from clarity to execution.]
```

**Total width**: ~900–1000px (4 nodes × 200px + 3 gaps × 50px)

---

### Mobile Layout

**Stack vertically**:

```
[Section H2]

┌─────────────────────────┐
│ Add context & URLs      │
└─────────────────────────┘
          ↓
┌─────────────────────────┐
│ AI structures narrative │
└─────────────────────────┘
          ↓
┌─────────────────────────┐
│ You refine & brand      │
└─────────────────────────┘
          ↓
┌─────────────────────────┐
│ Deck & one-pager ready  │ ← Highlighted
└─────────────────────────┘

[Caption]
```

**Spacing**: 24–32px vertical gap between nodes

---

## Flow 2: Lead Intelligence (CRM)

### Content Specifications

**Section H2**:
```
How lead intelligence works
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Ingest leads & sources | Leads and data sources connected |
| 2 | AI scores & segments | AI scores fit and segments by stage |
| 3 | Actions suggested | System suggests who to contact and when |
| Outcome | Prioritized outreach | Founder or SDR executes outreach |

**Caption**:
```
From raw leads to next-best action.
```

---

### Context (Implementation Note)

**User journey**:
1. Leads and data sources are connected
2. AI scores fit and segments by stage or intent
3. System suggests who to contact and when
4. Founder or SDR executes outreach

**Where used**: CRM product page, lead intelligence feature section

---

### Visual Layout (Desktop)

```
[Section H2: How lead intelligence works]

┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │  →   │                 │  →   │                 │  →   │                 │
│ Ingest leads &  │      │ AI scores &     │      │ Actions         │      │ Prioritized     │ ← Highlighted
│ sources         │      │ segments        │      │ suggested       │      │ outreach        │
│                 │      │                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘

[Caption: From raw leads to next-best action.]
```

---

## Flow 3: Founder Onboarding (Profile)

### Content Specifications

**Section H2**:
```
From sign-up to live profile
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Sign up or add LinkedIn | New user signs up or connects LinkedIn/URL |
| 2 | AI pre-fills profile | AI extracts company and founder data |
| 3 | You review & confirm | User reviews and corrects data |
| Outcome | Profile & dashboard live | Profile goes live, dashboard unlocks |

**Caption**:
```
Minutes to a complete founder profile.
```

---

### Context (Implementation Note)

**User journey**:
1. New user signs up or connects LinkedIn/URL
2. AI extracts company and founder data into profile fields
3. User reviews and corrects
4. Profile goes live and dashboard unlocks

**Where used**: Onboarding page, signup flow, homepage

---

### Visual Layout (Desktop)

```
[Section H2: From sign-up to live profile]

┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │  →   │                 │  →   │                 │  →   │                 │
│ Sign up or add  │      │ AI pre-fills    │      │ You review &    │      │ Profile &       │ ← Highlighted
│ LinkedIn        │      │ profile         │      │ confirm         │      │ dashboard live  │
│                 │      │                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘

[Caption: Minutes to a complete founder profile.]
```

---

## Flow 4: Playbook Execution (Tasks)

### Content Specifications

**Section H2**:
```
How playbook execution works
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Choose playbook | Founder selects a playbook (e.g., fundraise, GTM) |
| 2 | AI breaks into tasks | AI decomposes into ordered tasks with guidance |
| 3 | You execute & log | Founder completes and logs progress |
| Outcome | Progress & next steps | System tracks progress and suggests next steps |

**Caption**:
```
One playbook, clear tasks, tracked progress.
```

---

### Context (Implementation Note)

**User journey**:
1. Founder selects a playbook (e.g., fundraise, GTM)
2. AI decomposes it into ordered tasks with guidance
3. Founder completes and logs
4. System tracks progress and suggests next steps

**Where used**: Dashboard, playbook feature page, execution system

---

### Visual Layout (Desktop)

```
[Section H2: How playbook execution works]

┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │  →   │                 │  →   │                 │  →   │                 │
│ Choose          │      │ AI breaks into  │      │ You execute &   │      │ Progress &      │ ← Highlighted
│ playbook        │      │ tasks           │      │ log             │      │ next steps      │
│                 │      │                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘

[Caption: One playbook, clear tasks, tracked progress.]
```

---

## Flow 5: Market & Competitor Insight

### Content Specifications

**Section H2**:
```
From URLs to strategy insight
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Add URLs or keywords | User submits competitor or market URLs/keywords |
| 2 | AI gathers & analyzes | AI collects and analyzes content |
| 3 | Insights & recommendations | Insights and recommendations surfaced |
| Outcome | Strategy updated | Founder adjusts positioning or strategy |

**Caption**:
```
Turn the web into a strategy input.
```

---

### Context (Implementation Note)

**User journey**:
1. User submits competitor or market URLs (or keywords)
2. AI collects and analyzes content
3. Insights and recommendations are surfaced
4. Founder uses them to adjust positioning or strategy

**Where used**: Market intelligence page, validator tool, strategy features

---

### Visual Layout (Desktop)

```
[Section H2: From URLs to strategy insight]

┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │  →   │                 │  →   │                 │  →   │                 │
│ Add URLs or     │      │ AI gathers &    │      │ Insights &      │      │ Strategy        │ ← Highlighted
│ keywords        │      │ analyzes        │      │ recommendations │      │ updated         │
│                 │      │                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘

[Caption: Turn the web into a strategy input.]
```

---

## Implementation Notes

### HTML/CSS Structure

```html
<section class="bg-white py-20 lg:py-32">
  <div class="max-w-[1200px] mx-auto px-8 lg:px-16">
    
    <!-- Section Title -->
    <h2 class="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
      From idea to investor-ready deck
    </h2>
    
    <!-- Flow Diagram -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-6">
      
      <!-- Node 1 -->
      <div class="border border-gray-200 px-5 py-4 min-h-[80px] w-full lg:w-[200px] flex items-center justify-center text-center">
        <p class="text-base font-medium text-[#212427]">
          Add context & URLs
        </p>
      </div>
      
      <!-- Arrow -->
      <div class="hidden lg:block text-[#898888]">→</div>
      <div class="lg:hidden text-[#898888]">↓</div>
      
      <!-- Node 2 -->
      <div class="border border-gray-200 px-5 py-4 min-h-[80px] w-full lg:w-[200px] flex items-center justify-center text-center">
        <p class="text-base font-medium text-[#212427]">
          AI structures narrative
        </p>
      </div>
      
      <!-- Arrow -->
      <div class="hidden lg:block text-[#898888]">→</div>
      <div class="lg:hidden text-[#898888]">↓</div>
      
      <!-- Node 3 -->
      <div class="border border-gray-200 px-5 py-4 min-h-[80px] w-full lg:w-[200px] flex items-center justify-center text-center">
        <p class="text-base font-medium text-[#212427]">
          You refine & brand
        </p>
      </div>
      
      <!-- Arrow -->
      <div class="hidden lg:block text-[#898888]">→</div>
      <div class="lg:hidden text-[#898888]">↓</div>
      
      <!-- Outcome (Highlighted) -->
      <div class="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full lg:w-[200px] flex items-center justify-center text-center">
        <p class="text-base font-medium text-[#0E3E1B]">
          Deck & one-pager ready
        </p>
      </div>
      
    </div>
    
    <!-- Caption -->
    <p class="text-sm text-[#696969] text-center italic">
      One path from clarity to execution.
    </p>
    
  </div>
</section>
```

---

### SVG Alternative (If Preferred)

For more control over arrow styling, implement as inline SVG:

```svg
<svg width="900" height="120" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1 -->
  <rect x="0" y="20" width="200" height="80" fill="white" stroke="#E5E5E5" stroke-width="1.5"/>
  <text x="100" y="65" text-anchor="middle" font-size="16" fill="#212427">Add context & URLs</text>
  
  <!-- Arrow 1 -->
  <line x1="205" y1="60" x2="245" y2="60" stroke="#898888" stroke-width="2"/>
  <polygon points="245,60 240,57 240,63" fill="#898888"/>
  
  <!-- Node 2 -->
  <rect x="250" y="20" width="200" height="80" fill="white" stroke="#E5E5E5" stroke-width="1.5"/>
  <text x="350" y="65" text-anchor="middle" font-size="16" fill="#212427">AI structures narrative</text>
  
  <!-- Arrow 2 -->
  <line x1="455" y1="60" x2="495" y2="60" stroke="#898888" stroke-width="2"/>
  <polygon points="495,60 490,57 490,63" fill="#898888"/>
  
  <!-- Node 3 -->
  <rect x="500" y="20" width="200" height="80" fill="white" stroke="#E5E5E5" stroke-width="1.5"/>
  <text x="600" y="65" text-anchor="middle" font-size="16" fill="#212427">You refine & brand</text>
  
  <!-- Arrow 3 -->
  <line x1="705" y1="60" x2="745" y2="60" stroke="#898888" stroke-width="2"/>
  <polygon points="745,60 740,57 740,63" fill="#898888"/>
  
  <!-- Outcome (Highlighted) -->
  <rect x="750" y="20" width="200" height="80" fill="#DCF9E3" stroke="#0E3E1B" stroke-width="1.5"/>
  <text x="850" y="65" text-anchor="middle" font-size="16" fill="#0E3E1B">Deck & one-pager ready</text>
</svg>
```

---

### Responsive Behavior

**Desktop (> 1024px)**:
- Horizontal layout (left-to-right)
- Arrows point right (→)
- 4 nodes fit on one line

**Tablet (768px–1024px)**:
- Horizontal layout maintained
- Reduce node width to 160px
- Reduce gap to 32px

**Mobile (< 768px)**:
- Vertical stack (top-to-bottom)
- Arrows point down (↓)
- Full-width nodes
- 24–32px vertical spacing

---

## Accessibility Requirements

### Semantic HTML

```html
<section aria-labelledby="flow-title">
  <h2 id="flow-title">From idea to investor-ready deck</h2>
  
  <div role="img" aria-label="Process flow from context input to final deck output">
    <!-- Flow diagram content -->
  </div>
  
  <p class="caption">One path from clarity to execution.</p>
</section>
```

### Screen Reader Considerations

**Alternative text for flow**:
```
"Process flow: Step 1, Add context and URLs. 
Step 2, AI structures narrative. 
Step 3, You refine and brand. 
Final outcome, Deck and one-pager ready."
```

### Keyboard Navigation

- Flow diagrams are **informational only** (not interactive)
- No focus states required
- If nodes become clickable, ensure keyboard access

---

## Quality Assurance Checklist

Before implementing any flow diagram:

- [ ] **3–5 nodes total** (including outcome)
- [ ] **2–5 words per node label**
- [ ] **One flow per diagram** (no branching)
- [ ] **Readable in ~5 seconds**
- [ ] **Section H2 present** (introduces flow)
- [ ] **Caption provided** (explains value)
- [ ] **Outcome node highlighted** (green background or border)
- [ ] **Consistent spacing** (40–60px between nodes)
- [ ] **Works on mobile** (vertical stack)
- [ ] **Accessible** (aria-label or alt text)

---

## Usage Guidelines

### Where to Use Flow Diagrams

**✅ Appropriate contexts**:
- Product feature explanations
- User journey overviews
- Process documentation
- "How it works" sections
- Onboarding flows

**❌ Not appropriate**:
- Complex decision trees (too many branches)
- Non-sequential information (use framework instead)
- Static lists (use bullets instead)
- Detailed step-by-step guides (use documentation)

---

### Content Writing Rules

**Section H2**:
- Use "How [feature] works" or "From [input] to [output]"
- Sentence case
- No period at end
- 3–8 words

**Node labels**:
- Active voice when possible ("You refine" not "Refinement")
- Present tense
- 2–5 words
- No punctuation

**Caption**:
- One sentence
- Explains value or benefit
- Connects to user outcome
- 5–12 words

---

## Footer Integration (Route Links)

### Recommended Footer Structure

Add flow diagram pages to footer navigation under "Resources" or "How It Works":

```
┌─────────────────────────────────────────────────────┐
│ StartupAI                                           │
│ An AI operating system for founders                 │
│                                                     │
│ [Product]        [Resources]      [Company]         │
│ Pitch deck       How it works     About             │
│ Validator        Flow diagrams    Team              │
│ Dashboard        Documentation    Careers           │
│                  API                                │
│                                                     │
│ © 2026 StartupAI. All rights reserved.             │
└─────────────────────────────────────────────────────┘
```

---

### Route Structure

Create dedicated pages for flow diagrams:

```
/flows
  /investor-materials
  /lead-intelligence
  /onboarding
  /playbook-execution
  /market-insight
```

**Or** include all flows on a single page:

```
/how-it-works
  #investor-materials
  #lead-intelligence
  #onboarding
  #playbook-execution
  #market-insight
```

---

## Design Variations to Test

### Variation A: Horizontal with Simple Arrows (Recommended)
- Standard boxes
- Unicode arrows (→) between nodes
- Clean, minimal

### Variation B: Vertical Timeline Style
- Stacked boxes
- Left border line connecting all nodes
- Circle indicators (like Home V5 process diagram)

### Variation C: Cards with Icons
- Add small icon above each node label
- Slightly more visual weight
- Risk: feels less consulting-grade

**Recommendation**: Variation A (horizontal with arrows) — most BCG-like

---

## Related Mockups

* **Previous**: Hero Section (`01-hero-section.md`)
* **Next**: Framework Diagrams (2×2 grid patterns)
* **Related**: Process Timeline (vertical flow variant)

---

## File References

* **Implementation location**: Create new pages or integrate into existing product pages
* **Visual system**: `/docs/design/01-visual-system.md`
* **Diagram library**: `/docs/design/diagram-library.md`
* **Style guide**: `/docs/design/07-style-guide.md`

---

**Mockup Status**: ✅ Complete  
**Approval Status**: Pending Review  
**Implementation Status**: Ready for Development

---

*End of Flow Diagrams Mockup Collection*
