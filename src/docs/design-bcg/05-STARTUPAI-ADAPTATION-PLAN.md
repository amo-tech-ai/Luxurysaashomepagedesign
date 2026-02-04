# StartupAI Diagram-First Adaptation Plan
## BCG Design System Implementation

**Version**: 1.0  
**Date**: February 2, 2026  
**Status**: Ready for Design Execution

---

## Executive Summary

This document provides a complete adaptation plan to transform the StartupAI landing page into a diagram-first, systems-focused narrative using the established BCG design system. Every section uses visual logic (flows, diagrams, timelines) to explain the system, not showcase features.

### Core Positioning
- **StartupAI is a system, not a tool**
- **AI assists, humans decide, systems execute**
- **Outcomes > features**
- **Execution > inspiration**

### Design Philosophy
- Image-free, diagram-first
- One idea per section
- Consulting-grade restraint
- Systems thinking over marketing

---

## SECTION 1 — Hero

### Purpose
Establish StartupAI as a complete operating system that connects strategy to daily execution. Show the system's scope immediately, not the interface.

### Diagram Type
**Closed-Loop System Diagram**

### Diagram Structure
```
                    STRATEGY
                       ↓
    ┌──────────────────────────────────────┐
    │                                      │
    ↓                                      ↑
IDEATION → VALIDATION → PLANNING → EXECUTION
    ↑                                      ↓
    │                                      │
    └────────── AI GUIDANCE LAYER ─────────┘
                       ↓
                DAILY TASKS + DECISIONS
```

**Visual Elements**:
- Central flow line (emerald #0D5F4E)
- Four main stages as labeled boxes
- AI layer shown as underlying infrastructure (dotted line, sage #6B9D89)
- Arrows showing continuous loop
- Clean, minimal boxes with hairline borders

### Wireframe Intent

**Layout**:
- Centered, max-width 800px
- Headline above diagram
- Diagram: 600px width, 400px height
- Supporting line below
- Single CTA beneath (minimal)

**Hierarchy**:
1. Headline (48px serif, normal weight)
2. System diagram (dominant visual)
3. Supporting line (18px sans, secondary color)
4. CTA (restrained, not urgent)

### Copy Direction

**Headline Intent**:
- "From strategy to daily execution, in one guided flow"
- OR: "The AI operating system for founders"
- NOT: "Build your startup faster" (too vague)
- NOT: "AI-powered success" (marketing speak)

**Supporting Line Intent**:
- "AI validates your strategy, structures your plan, and guides execution—daily."
- Focus on the system, not the founder's feelings
- Calm, factual, institutional

**What NOT to Say**:
- ❌ "Game-changing"
- ❌ "Revolutionary"
- ❌ "10x your productivity"
- ❌ Exclamation points

### Scroll & Motion Guidance
**Static** — No animation on first view.

Optional: On scroll down, reveal a secondary micro-diagram showing:
```
WEEK 1: Idea → Validated Concept
WEEK 4: Concept → MVP Plan
WEEK 12: Plan → Launched Product
```
Subtle fade-in, no bouncing.

### Design System Application

**Typography**:
- Headline: `--text-h1` (48px serif, 400 weight)
- Supporting: `--text-body-large` (18px sans, 1.7 line-height)
- Diagram labels: `--text-label` (12px uppercase, 600 weight)

**Spacing**:
- Hero padding: `--space-24` (96px top, 64px bottom)
- Headline to diagram: `--space-12` (48px)
- Diagram to supporting text: `--space-8` (32px)

**Color**:
- Diagram stroke: `--color-accent-primary` (#0D5F4E)
- Secondary elements: `--color-accent-secondary` (#6B9D89)
- Labels: `--color-text-primary` (#1F1F1F)
- Background: `--color-canvas` (#F7F6F3)

**Borders**:
- Diagram boxes: `--border-hairline` (1px solid #E6E4E1)
- Accent boxes: `--border-accent` (2px solid #0D5F4E)

### Notes / Risks
- **Risk**: Diagram might feel too complex at first glance
- **Mitigation**: Keep labels minimal (3-5 words max per box)
- **Success metric**: Founder understands "it's a complete system" in 3 seconds

---

## SECTION 2 — Problem Statement (The Founder's Dilemma)

### Purpose
Show the structural problem: founders bounce between strategy and tasks without a system connecting them. Contrast "before" and "after."

### Diagram Type
**Before/After System Contrast**

### Diagram Structure

**BEFORE (Left Side)**:
```
STRATEGY WORK
    ↓
   ???  ← Gap (shown with broken line)
    ↓
DAILY TASKS

Result: Disconnected execution
```

**AFTER (Right Side)**:
```
STRATEGY WORK
    ↓
  STARTUP AI SYSTEM
    ↓
STRUCTURED PLAN
    ↓
DAILY PRIORITIES
    ↓
EXECUTION

Result: Guided flow
```

**Visual Treatment**:
- Two columns, 50/50 split
- Left side: Muted colors, broken lines, question marks
- Right side: Clean emerald flow, solid connections
- Divider line between columns (hairline)

### Wireframe Intent

**Layout**:
- Two-column grid
- Each column: 480px width
- 48px gap between
- Centered on page, max-width 1200px

**Visual Hierarchy**:
1. Section label: "THE PROBLEM" (small, uppercase)
2. Two diagrams side-by-side
3. Outcome labels beneath each

### Copy Direction

**Headline Intent**:
- "Most founders have strategy. Few have a system."
- OR: "The gap between vision and execution"
- Focus on the structural problem, not emotional pain

**Before Column**:
- Label: "Without a system"
- Outcome: "Reactive execution, unclear progress"

**After Column**:
- Label: "With StartupAI"
- Outcome: "Structured, guided, measurable"

**What NOT to Say**:
- ❌ "Feeling overwhelmed?"
- ❌ "Stop wasting time"
- ❌ Emotional language

### Scroll & Motion Guidance
**Sequential Reveal**:
1. Section enters view
2. Left diagram fades in (300ms delay)
3. Right diagram fades in (600ms delay)
4. Subtle emphasis on right side (slight scale, 1.02x)

No complex animations. Reveal order clarifies "before → after" logic.

### Design System Application

**Typography**:
- Section label: `--text-label` (12px uppercase)
- Diagram labels: `--text-body-small` (14px)
- Outcome text: `--text-meta` (13px, secondary color)

**Spacing**:
- Section top margin: `--space-24` (96px)
- Between diagrams: `--space-12` (48px)
- Label to diagram: `--space-4` (16px)

**Color**:
- Before diagram: `--color-text-tertiary` (#888888)
- After diagram: `--color-accent-primary` (#0D5F4E)
- Background: `--color-surface` (#FFFFFF) card

**Borders**:
- Card border: `--border-hairline`
- Broken line (before): 2px dashed #D4D2CF
- Solid line (after): 2px solid #0D5F4E

### Notes / Risks
- **Risk**: "Before" side might feel negative/off-putting
- **Mitigation**: Keep neutral, factual—no judgment
- **Ensure**: Right side feels aspirational but calm, not euphoric

---

## SECTION 3 — System Overview (How StartupAI Works)

### Purpose
Show the six-stage journey from idea to execution. Establish StartupAI as a structured, sequential system.

### Diagram Type
**Horizontal Step Flow (Sequential)**

### Diagram Structure
```
1. IDEA          2. VALIDATION     3. MARKET        4. BUSINESS      5. BRAND         6. EXECUTION
   INTAKE           ANALYSIS         ANALYSIS         MODEL            STRATEGY         PLANNING
    ↓                  ↓                ↓                ↓                ↓                ↓
  Profile         Score + Risks    Positioning      Revenue Model    Identity         Launch Plan
  Created         Generated        Defined          Structured       Developed        + Roadmap
```

**Visual Treatment**:
- Six boxes in horizontal row
- Each box: Stage number + name + outcome
- Arrows between stages (solid emerald)
- Current stage highlighted (if showing user progress)
- Clean, equal spacing

### Wireframe Intent

**Layout**:
- Full-width container (max 1280px)
- Six equal-width columns
- Horizontal scroll on mobile (snap points)
- Desktop: All visible at once

**Hierarchy**:
1. Section headline: "Six Guided Stages"
2. Stage flow diagram
3. Optional: "Average timeline: 6-8 weeks" (small text below)

### Copy Direction

**Headline Intent**:
- "Six stages. One guided flow."
- OR: "From idea to launch plan in structured steps"
- Emphasize structure, not speed

**Stage Labels**:
- Use simple, concrete nouns (not verbs)
- Example: "Validation" not "Validating your idea"
- Keep under 3 words per stage

**Supporting Line**:
- "Each stage builds on the last. AI validates, you decide, the system structures."
- Clarify human agency

**What NOT to Say**:
- ❌ "Easy 6-step process"
- ❌ "Just follow the steps"
- ❌ Infantilizing language

### Scroll & Motion Guidance
**Line Draw Animation** (Optional):
- On scroll into view, draw connecting arrows from left to right
- Duration: 1.2s total
- Easing: ease-out
- Stage boxes fade in sequentially with arrow
- Subtle, purposeful

Alternative: **Static** if motion feels gimmicky.

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif, 400 weight)
- Stage numbers: `--text-h4` (20px sans, 600 weight)
- Stage names: `--text-body` (16px sans)
- Outcomes: `--text-body-small` (14px, secondary color)

**Spacing**:
- Between stages: `--space-8` (32px)
- Stage box padding: `--space-6` (24px)
- Section margin: `--space-24` (96px top/bottom)

**Color**:
- Stage boxes: `--color-surface` (white) with `--border-hairline`
- Active/current stage: Light emerald background (#E8F3F0)
- Arrows: `--color-accent-primary` (#0D5F4E)
- Numbers: `--color-accent-primary`

**Borders**:
- Standard boxes: 1px solid #E6E4E1
- Active box: 2px solid #0D5F4E

### Notes / Risks
- **Risk**: Six stages might feel overwhelming
- **Mitigation**: Show that it's sequential, not simultaneous
- **Ensure**: Timeline is realistic (6-8 weeks), not "done in days"

---

## SECTION 4 — AI Role Definition (The Intelligence Layer)

### Purpose
Clarify what AI does vs. what the founder does. Show the responsibility model explicitly.

### Diagram Type
**Responsibility Model (Two-Column Split)**

### Diagram Structure
```
AI RESPONSIBILITIES              FOUNDER RESPONSIBILITIES
━━━━━━━━━━━━━━━━━━━━            ━━━━━━━━━━━━━━━━━━━━━━━━

• Analyze market data           • Define vision
• Validate assumptions          • Make strategic choices
• Structure information         • Prioritize direction
• Generate insights             • Approve key decisions
• Surface risks                 • Execute daily work
• Recommend next steps          • Adapt based on feedback
```

**Visual Treatment**:
- Two equal columns, clear divider
- Left: AI actions (system icons, emerald)
- Right: Human actions (no icons, primary text)
- Clean bullet points (not decorative)
- Equal visual weight (neither dominates)

### Wireframe Intent

**Layout**:
- Two-column layout, 50/50
- Max-width 1000px, centered
- Vertical divider line (hairline)
- Each column: Left-aligned text

**Hierarchy**:
1. Section headline: "AI assists. You decide."
2. Two responsibility columns
3. Bottom line: "The system ensures nothing is overlooked."

### Copy Direction

**Headline Intent**:
- "AI assists. You decide."
- OR: "Human judgment, AI infrastructure"
- Emphasize partnership, not replacement

**AI Column Header**:
- "AI Responsibilities"
- Subtext: "Continuous analysis and guidance"

**Founder Column Header**:
- "Your Responsibilities"
- Subtext: "Strategic decisions and execution"

**Supporting Line**:
- "StartupAI automates analysis, not autonomy."
- OR: "The AI structures. You own the outcome."

**What NOT to Say**:
- ❌ "AI does the hard work for you"
- ❌ "Sit back and let AI build your startup"
- ❌ Anything suggesting AI replaces founder thinking

### Scroll & Motion Guidance
**Static**

Alternative: Subtle fade-in when scrolling into view, but no sequential reveal. Both columns should appear equal importance.

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif)
- Column headers: `--text-h3` (28px serif, 500 weight)
- Bullet points: `--text-body` (16px sans)
- Subtext: `--text-meta` (13px, secondary)

**Spacing**:
- Between columns: `--space-12` (48px) + hairline divider
- Between bullet points: `--space-4` (16px)
- Column padding: `--space-8` (32px)

**Color**:
- AI column: Slight emerald tint (#E8F3F0 background)
- Founder column: White background
- Text: Both use `--color-text-primary`
- Divider: `--color-border` (hairline)

**Borders**:
- Entire section: `--border-hairline` (1px card)
- Divider: 1px solid #E6E4E1

### Notes / Risks
- **Risk**: Overemphasizing AI might scare founders
- **Mitigation**: Equal visual weight to both columns
- **Ensure**: Founder responsibilities feel empowering, not burdensome

---

## SECTION 5 — Speed/Time Compression (Weeks Not Months)

### Purpose
Show how StartupAI compresses typical startup timelines by structuring work, not by cutting corners.

### Diagram Type
**Timeline Comparison (Before/After)**

### Diagram Structure

**TRADITIONAL PATH** (Top):
```
Month 1-2: Research & Planning (unstructured)
Month 3-4: Market Analysis (slow)
Month 5-6: Business Model (iterative)
Month 7-9: Branding (external agency)
Month 10-12: Launch Prep (rushed)

Total: 12+ months
```

**WITH STARTUPAI** (Bottom):
```
Week 1-2: Idea → Validated Profile
Week 3-4: Market Analysis (AI-guided)
Week 5-6: Business Model (structured)
Week 7-8: Brand Strategy (templated)
Week 9-12: Execution Plan (complete)

Total: 6-8 weeks
```

**Visual Treatment**:
- Two horizontal timelines, stacked
- Top: Longer, fragmented blocks (grey)
- Bottom: Shorter, connected blocks (emerald)
- Visual compression obvious at a glance
- Not about "fast," about "structured"

### Wireframe Intent

**Layout**:
- Full-width container (max 1200px)
- Stacked timelines, 100% width each
- Top timeline: 12 units wide
- Bottom timeline: 2-3 units wide (visual compression)
- Aligned left

**Hierarchy**:
1. Section headline
2. Timeline comparison (dominant visual)
3. Supporting explanation below

### Copy Direction

**Headline Intent**:
- "Structure accelerates. Chaos delays."
- OR: "Weeks, not months—through systems, not shortcuts"
- Emphasize structure as the enabler

**Traditional Path Label**:
- "Without structure: 12+ months"
- Note: "Time spent searching, reworking, aligning"

**StartupAI Path Label**:
- "With guided flow: 6-8 weeks"
- Note: "Structured stages, AI validation, clear decisions"

**Supporting Line**:
- "You move faster because the system structures your work, validates assumptions early, and prevents backtracking."
- Focus on methodology, not magic

**What NOT to Say**:
- ❌ "10x faster"
- ❌ "Launch in days"
- ❌ Implies corner-cutting or "hacks"

### Scroll & Motion Guidance
**Sequential Fade**:
1. Traditional timeline fades in (show the problem first)
2. StartupAI timeline fades in below (300ms delay)
3. Visual compression becomes obvious
4. No bouncing or celebrating animations

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif)
- Timeline labels: `--text-body-small` (14px sans)
- Stage names: `--text-body` (16px sans)
- Notes: `--text-meta` (13px, secondary)

**Spacing**:
- Between timelines: `--space-8` (32px)
- Stage blocks: `--space-4` (16px) internal padding
- Section margin: `--space-24` (96px)

**Color**:
- Traditional timeline: `--color-text-tertiary` (#888888)
- Traditional blocks: Light grey (#D4D2CF)
- StartupAI timeline: `--color-accent-primary` (#0D5F4E)
- StartupAI blocks: Emerald (#0D5F4E) with white text

**Borders**:
- Timeline containers: `--border-hairline`
- Active blocks: No border (filled)

### Notes / Risks
- **Risk**: Seems like "get rich quick" scheme
- **Mitigation**: Emphasize "structure" not "speed" in copy
- **Ensure**: Timeline is realistic, credible

---

## SECTION 6 — Capability Matrix (What You Get at Each Stage)

### Purpose
Show tangible deliverables at each stage. Prove the system produces concrete outputs, not just advice.

### Diagram Type
**Capability Matrix (Grid)**

### Diagram Structure
```
STAGE         | OUTPUT              | FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Idea          | Structured Profile  | Document
Validation    | Score + Risk Report | Analysis
Market        | Positioning Brief   | Strategy
Business      | Revenue Model       | Financial
Brand         | Identity System     | Guide
Execution     | Launch Roadmap      | Plan
```

**Visual Treatment**:
- Clean table/grid format
- Three columns: Stage, Output, Format
- Hairline borders (minimal)
- Emerald header row
- Alternating row backgrounds (subtle)

### Wireframe Intent

**Layout**:
- Centered table, max-width 900px
- Three equal columns
- Header row distinct (background color)
- Clean, editorial styling

**Hierarchy**:
1. Section headline: "Tangible outputs at every stage"
2. Capability grid (dominant)
3. Supporting note below grid

### Copy Direction

**Headline Intent**:
- "Concrete outputs, not abstract advice"
- OR: "What you receive at each stage"
- Emphasize deliverables

**Supporting Line**:
- "Every stage produces a structured document you can use, share, and build upon."
- Clarify utility

**What NOT to Say**:
- ❌ "Unlimited reports"
- ❌ "Everything you need"
- ❌ Over-promising

### Scroll & Motion Guidance
**Static**

Optional: On scroll, rows fade in sequentially (100ms stagger). Keep subtle.

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif)
- Table headers: `--text-label` (12px uppercase, 600 weight)
- Table content: `--text-body` (16px sans)

**Spacing**:
- Row height: `--space-10` (40px)
- Cell padding: `--space-4` (16px)
- Table margin: `--space-16` (64px top/bottom)

**Color**:
- Header row: Light emerald (#E8F3F0)
- Header text: `--color-accent-primary`
- Alternating rows: Subtle grey (#F7F6F3)
- Border: `--color-border` (hairline)

**Borders**:
- Table: `--border-hairline` (outer)
- Cells: 1px solid #E6E4E1

### Notes / Risks
- **Risk**: Feels like feature list
- **Mitigation**: Focus on outputs (nouns), not features (verbs)
- **Ensure**: Formats are credible (Document, Analysis, Plan—not "Magic Report")

---

## SECTION 7 — Input → Output Flow (The Transformation)

### Purpose
Show a specific example of what StartupAI does with founder input. Make the "AI magic" transparent.

### Diagram Type
**Input → Process → Output Flow**

### Diagram Structure
```
FOUNDER INPUT                STARTUPAI PROCESS              OUTPUT
━━━━━━━━━━━━━                ━━━━━━━━━━━━━━━━━━            ━━━━━━━━━━━━━

"I want to build            1. Extracts problem            Structured Profile:
 a tool for X"             2. Identifies market           • Problem: [Clear]
                           3. Analyzes competitors        • Market: [Defined]
 [Unstructured idea]       4. Validates assumptions       • Competitors: [List]
                           5. Structures data             • Risks: [Flagged]
                                                          • Next steps: [Clear]
                           [AI processing steps]
                                                          [Actionable document]
```

**Visual Treatment**:
- Three-column layout
- Left: Raw, unstructured input (grey box)
- Center: AI process steps (emerald flow)
- Right: Structured output (clean document format)
- Arrows showing transformation

### Wireframe Intent

**Layout**:
- Three columns: 30% / 40% / 30%
- Max-width 1200px
- Input/output as card elements
- Process as connecting flow

**Hierarchy**:
1. Section headline
2. Three-stage transformation
3. Caption: "Transparency at every step"

### Copy Direction

**Headline Intent**:
- "From idea to structured insight"
- OR: "See how AI structures your thinking"
- Focus on transparency

**Input Label**: "Your initial idea"
**Process Label**: "AI analysis"
**Output Label**: "Structured deliverable"

**Supporting Line**:
- "Every AI recommendation is explained. You see the logic, not just the output."
- Build trust through transparency

**What NOT to Say**:
- ❌ "Magic AI transformation"
- ❌ "AI knows better"
- ❌ Black-box language

### Scroll & Motion Guidance
**Sequential Fade**:
1. Input appears (left)
2. Process flow draws in (center, 400ms delay)
3. Output appears (right, 800ms delay)
4. Arrow animations subtle, not flashy

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif)
- Column labels: `--text-h4` (20px sans, 600 weight)
- Content: `--text-body-small` (14px sans)
- Process steps: `--text-meta` (13px)

**Spacing**:
- Between columns: `--space-12` (48px)
- Internal padding: `--space-6` (24px)
- Section margin: `--space-24` (96px)

**Color**:
- Input box: Light grey (#F7F6F3)
- Process flow: Emerald (#0D5F4E)
- Output box: White with emerald border
- Arrows: `--color-accent-primary`

**Borders**:
- Input/output: `--border-hairline`
- Process: No border (flow lines only)

### Notes / Risks
- **Risk**: Oversimplifies AI complexity
- **Mitigation**: Show actual process steps, not "magic happens here"
- **Ensure**: Example is specific, not generic

---

## SECTION 8 — Pitch Deck Intelligence (Strategic Output)

### Purpose
Show that StartupAI produces investor-grade deliverables, not just internal documents.

### Diagram Type
**Document Structure Breakdown**

### Diagram Structure
```
PITCH DECK SECTIONS (Generated by StartupAI)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Problem          ← Validated through AI analysis
2. Solution         ← Structured from your profile
3. Market Size      ← Researched and calculated
4. Business Model   ← Revenue projections included
5. Traction         ← Metrics formatted
6. Team             ← Positioned strategically
7. Ask              ← Funding needs structured

Each section: Data-backed, investor-ready format
```

**Visual Treatment**:
- Vertical list of deck sections
- Each section shows source (AI analysis stage)
- Clean, numbered list
- Right-aligned notes showing AI contribution

### Wireframe Intent

**Layout**:
- Single column, centered
- Max-width 800px
- List format (not slides visual)
- Clean, editorial presentation

**Hierarchy**:
1. Section headline: "Investor-grade outputs"
2. Deck structure list
3. Note below: "Export as PDF or Google Slides"

### Copy Direction

**Headline Intent**:
- "From startup profile to investor pitch"
- OR: "Strategic documents, not templates"
- Emphasize quality

**List Items**:
- Section name + what AI contributes
- Example: "Market Size — AI calculates TAM/SAM/SOM from your data"

**Supporting Line**:
- "Every pitch deck section is backed by your validated analysis. No guessing, no templates."
- Build credibility

**What NOT to Say**:
- ❌ "Auto-generate pitch decks"
- ❌ "Investor-ready in minutes"
- ❌ Implies no founder work needed

### Scroll & Motion Guidance
**Static** or subtle fade-in.

No motion needed—credibility comes from content structure, not animation.

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif)
- Deck sections: `--text-h3` (28px serif, numbered)
- Notes: `--text-body-small` (14px, secondary)
- Export note: `--text-meta` (13px)

**Spacing**:
- Between list items: `--space-6` (24px)
- Section padding: `--space-16` (64px)

**Color**:
- Section numbers: `--color-accent-primary`
- Text: `--color-text-primary`
- Notes: `--color-text-secondary`

**Borders**:
- Entire section: `--border-hairline` (card)

### Notes / Risks
- **Risk**: Sounds like "template generator"
- **Mitigation**: Emphasize "backed by your analysis" not "auto-filled"
- **Ensure**: Deck quality is positioned as strategic, not automated

---

## SECTION 9 — Daily Execution (The Continuous Loop)

### Purpose
Show that StartupAI isn't just for planning—it guides daily work and adapts based on execution.

### Diagram Type
**Closed-Loop System (Daily Cycle)**

### Diagram Structure
```
              STRATEGIC PLAN
                    ↓
              ┌─────────────┐
              │             │
              ↓             ↑
      DAILY PRIORITIES   EXECUTION
              ↓             ↑
              │             │
              └─────────────┘
                    ↓
          FEEDBACK & ADAPTATION
                    ↓
          (Loop back to strategy)
```

**Visual Treatment**:
- Circular or rectangular loop
- Four stages: Plan → Priorities → Execute → Adapt
- Arrows showing continuous flow
- Emerald color for active connections
- Clean, minimal

### Wireframe Intent

**Layout**:
- Centered diagram, 600px width
- Square or circular flow
- Equal spacing between stages

**Hierarchy**:
1. Section headline: "Execution is continuous"
2. Loop diagram (dominant)
3. Supporting line below

### Copy Direction

**Headline Intent**:
- "Strategy informs daily work. Daily work refines strategy."
- OR: "The execution loop"
- Emphasize continuous adaptation

**Stage Labels**:
- Strategic Plan
- Daily Priorities
- Execution
- Feedback Loop

**Supporting Line**:
- "StartupAI doesn't end at the plan. It guides daily decisions and adapts as you learn."
- Show ongoing value

**What NOT to Say**:
- ❌ "Set it and forget it"
- ❌ "Autopilot mode"
- ❌ Implies no ongoing founder work

### Scroll & Motion Guidance
**Line Draw Animation** (Optional):
- On scroll, arrows draw around loop (clockwise)
- Duration: 1.5s
- Single loop, no repeat
- Shows continuous nature

Alternative: **Static**

### Design System Application

**Typography**:
- Section headline: `--text-h2` (36px serif)
- Stage labels: `--text-body` (16px sans, 500 weight)

**Spacing**:
- Stage box padding: `--space-6` (24px)
- Between stages: `--space-8` (32px)
- Section margin: `--space-24` (96px)

**Color**:
- Loop arrows: `--color-accent-primary` (#0D5F4E)
- Stage boxes: White with hairline border
- Active stage (optional): Light emerald background

**Borders**:
- Stage boxes: `--border-hairline`
- Loop: 2px solid emerald

### Notes / Risks
- **Risk**: Seems like ongoing subscription dependency
- **Mitigation**: Frame as "you're always building," not "you need us forever"
- **Ensure**: Loop feels empowering, not trapping

---

## SECTION 10 — Final CTA (Start Your Guided Flow)

### Purpose
Convert interest into action with a clear, credible next step. No urgency, no hype—just clarity.

### Diagram Type
**Simple Next-Step Flow**

### Diagram Structure
```
        TODAY                    THIS WEEK              WEEK 6-8
          ↓                          ↓                      ↓
    Share Your Idea  →  Complete Validation  →  Structured Launch Plan

    (5 minutes)        (AI-guided analysis)      (Full system output)
```

**Visual Treatment**:
- Three-stage horizontal flow
- Timeline context (today → this week → 6-8 weeks)
- Simple arrows
- Restrained, not urgent

### Wireframe Intent

**Layout**:
- Centered, max-width 1000px
- Three equal columns
- CTA button below diagram (centered)
- Secondary link: "See example outputs"

**Hierarchy**:
1. Headline: "Start with a 5-minute idea submission"
2. Next-step flow
3. Primary CTA (single button)
4. Trust signal (optional): "No credit card. Cancel anytime."

### Copy Direction

**Headline Intent**:
- "Begin with clarity. Build with structure."
- OR: "Start your guided flow today"
- Calm, confident, not urgent

**CTA Button Text**:
- "Start Your Validation"
- OR: "Share Your Idea"
- NOT: "Get Started Now!" (too urgent)
- NOT: "Try Free!" (too promotional)

**Supporting Line**:
- "5 minutes to submit your idea. AI validates within 24 hours. You decide next steps."
- Clarity on what happens next

**What NOT to Say**:
- ❌ "Limited spots"
- ❌ "Don't miss out"
- ❌ Urgency tactics

### Scroll & Motion Guidance
**Static**

Optional: Subtle fade-in when entering viewport. No bouncing button.

### Design System Application

**Typography**:
- Headline: `--text-h2` (36px serif, 400 weight)
- Flow labels: `--text-body` (16px sans)
- CTA button: `--text-body` (16px sans, 500 weight)
- Supporting text: `--text-meta` (13px, secondary)

**Spacing**:
- Section padding: `--space-24` (96px top/bottom)
- Flow to CTA: `--space-12` (48px)
- CTA padding: `--space-4` (16px vertical, 32px horizontal)

**Color**:
- Flow arrows: `--color-accent-primary` (#0D5F4E)
- CTA button: `--color-accent-primary` background
- Button text: White
- Hover: Slightly darker emerald (#0A4D3F)

**Borders**:
- Button: No border (filled)
- Flow boxes: `--border-hairline`

### Notes / Risks
- **Risk**: CTA feels weak/passive
- **Mitigation**: Clear benefit in headline, credible timeline
- **Ensure**: No false urgency—trust-based conversion

---

## SECTION 11 — Footer Narrative (Strategic Positioning)

### Purpose
Reinforce StartupAI as a strategic system, not a tool. Provide navigation and context without clutter.

### Diagram Type
**None** (Text-based, structured)

### Diagram Structure
N/A — Footer uses text hierarchy, not diagrams.

### Wireframe Intent

**Layout**:
- Three-column footer
- Left: Company positioning statement
- Center: Navigation links (minimal)
- Right: Contact/social (restrained)
- Bottom: Legal links (small, grey)

**Hierarchy**:
1. Company tagline/positioning
2. Navigation sections
3. Legal/fine print

### Copy Direction

**Positioning Statement** (Left Column):
- "StartupAI: The AI operating system for founders."
- "From strategy to daily execution, in one guided flow."
- Keep brief, authoritative

**Navigation Links**:
- Product → How It Works, Stages, Outputs
- Resources → Case Studies, Documentation
- Company → About, Pricing, Contact

**What NOT to Include**:
- ❌ Newsletter signup (unless truly valuable)
- ❌ Social media links (unless active)
- ❌ Decorative elements

### Scroll & Motion Guidance
**Static**

### Design System Application

**Typography**:
- Positioning: `--text-body-large` (18px sans)
- Navigation headers: `--text-label` (12px uppercase)
- Links: `--text-body` (16px sans)
- Legal: `--text-meta` (13px, grey)

**Spacing**:
- Footer padding: `--space-16` (64px top/bottom)
- Column gap: `--space-12` (48px)
- Between links: `--space-2` (8px)

**Color**:
- Background: `--color-canvas` (#F7F6F3)
- Text: `--color-text-primary`
- Links: `--color-text-secondary`
- Hover: `--color-accent-primary`

**Borders**:
- Top border: `--border-hairline` (1px solid #E6E4E1)

### Notes / Risks
- **Risk**: Footer too dense
- **Mitigation**: Minimal links, clear hierarchy
- **Ensure**: Footer reinforces brand, doesn't dilute it

---

## PAGE-LEVEL NARRATIVE SUMMARY

### How the Page Flows (Top to Bottom)

**Act 1: Introduction (Sections 1-2)**
- **Hero**: "This is a complete system" (closed-loop diagram)
- **Problem**: "Without systems, founders are disconnected" (before/after)
- **Outcome**: Founder understands the core problem and sees StartupAI as the structural solution

**Act 2: System Explanation (Sections 3-6)**
- **System Overview**: "Here are the six guided stages" (horizontal flow)
- **AI Role**: "Here's what AI does vs. what you do" (responsibility model)
- **Speed**: "Structure accelerates, chaos delays" (timeline compression)
- **Capability Matrix**: "These are the tangible outputs" (grid)
- **Outcome**: Founder understands how the system works, what AI contributes, and what they receive

**Act 3: Proof & Application (Sections 7-9)**
- **Input→Output**: "See the transformation in action" (example flow)
- **Pitch Deck**: "Strategic documents, not templates" (deliverable structure)
- **Daily Execution**: "Guidance continues after planning" (continuous loop)
- **Outcome**: Founder sees concrete examples, believes in quality, understands ongoing value

**Act 4: Conversion (Sections 10-11)**
- **Final CTA**: "Start your guided flow" (clear next steps)
- **Footer**: Reinforcement and navigation
- **Outcome**: Founder has clear action, no objections

### Confidence Building Progression

**Early Sections**: Build structural understanding  
**Middle Sections**: Build trust through transparency  
**Late Sections**: Build confidence through examples  
**Final Sections**: Remove friction, provide clarity

---

## DIAGRAM INVENTORY

### Diagram Types Used

1. **Closed-Loop System** (Hero)
2. **Before/After Contrast** (Problem)
3. **Horizontal Step Flow** (System Overview)
4. **Responsibility Model** (AI Role)
5. **Timeline Comparison** (Speed/Compression)
6. **Capability Matrix** (Outputs Grid)
7. **Input→Process→Output** (Transformation)
8. **Document Structure** (Pitch Deck)
9. **Closed-Loop System** (Daily Execution)
10. **Next-Step Flow** (CTA)

### Variety & Coherence Check

✅ **Variety**: 10 distinct diagram types across 11 sections  
✅ **Coherence**: All diagrams use same visual language (emerald accent, hairline borders, clean boxes)  
✅ **Progression**: Diagrams move from abstract (system) to concrete (outputs) to continuous (execution)

---

## READINESS CHECKLIST

### Confirm the Plan

- [x] **Image-free**: No photos, no mockups, no illustrations
- [x] **Diagram-first**: Every section uses visual logic (flows, systems, structures)
- [x] **Aligned with StartupAI positioning**: 
  - [x] System, not tool
  - [x] AI assists, humans decide
  - [x] Outcomes > features
  - [x] Execution > inspiration
- [x] **Executable by designer**: Each section has:
  - [x] Clear purpose
  - [x] Specific diagram type
  - [x] Textual structure
  - [x] Wireframe intent
  - [x] Copy direction
  - [x] Motion guidance
  - [x] Design system mapping

### BCG Design System Compliance

- [x] **Typography**: Uses established serif/sans hierarchy
- [x] **Color**: Restrained emerald accent, neutral base
- [x] **Spacing**: Follows 8px base unit, generous margins
- [x] **Layout**: Three-panel logic where appropriate
- [x] **Tone**: Consulting-grade, calm, intelligent
- [x] **Restraint**: No gradients, no heavy shadows, no decoration

### Final Validation

- [x] **A designer could wireframe without guessing**: Yes—every section has layout specs
- [x] **A founder understands StartupAI without long text**: Yes—diagrams tell the story
- [x] **Page feels consulting-grade**: Yes—BCG design system applied throughout
- [x] **System feels more important than UI**: Yes—focus is on logic, flow, structure

---

## IMPLEMENTATION NOTES

### Phase 1: Wireframe
1. Create lo-fi wireframes for each section using diagram structures
2. Validate diagram clarity before adding visual design
3. Test with 2-3 founders: "Can you explain what StartupAI does from diagrams alone?"

### Phase 2: Visual Design
1. Apply BCG design tokens (colors, typography, spacing)
2. Build diagram library (reusable components)
3. Ensure consistency across all sections

### Phase 3: Motion Design
1. Add motion only where specified (line draw, sequential fade)
2. Test motion on 60fps displays
3. Provide static fallback for reduced motion preference

### Phase 4: Content
1. Write copy following "Copy Direction" guidelines
2. Keep headlines under 10 words
3. Avoid marketing language—maintain editorial tone

### Phase 5: QA
1. Check against readiness checklist
2. Validate BCG design system compliance
3. Test on multiple screen sizes (desktop, tablet, mobile)

---

## RISKS & MITIGATION

### Risk 1: Diagrams Too Complex
**Mitigation**: 
- Limit labels to 3-5 words max
- Test with non-technical founders
- Simplify if comprehension takes >5 seconds

### Risk 2: Page Feels Cold/Technical
**Mitigation**:
- Use warm off-white background (#F7F6F3)
- Maintain human language in copy
- Show founder agency clearly (responsibility model)

### Risk 3: Lack of Emotional Appeal
**Mitigation**:
- Focus on outcomes (peace of mind, clarity, confidence)
- Use supporting copy to add warmth
- Trust signals: timeline realism, transparency

### Risk 4: Too "Consulting-Heavy"
**Mitigation**:
- Balance authority with accessibility
- Use concrete examples (Input→Output section)
- Show that system serves founders, not gatekeeps

---

## SUCCESS METRICS

### Page is Successful If:

1. **Founder comprehension**: 80%+ understand "StartupAI is a system" after viewing
2. **Diagram clarity**: 90%+ can explain at least 3 stages without reading text
3. **Positioning clarity**: Founders say "AI assists, I decide" unprompted
4. **Credibility**: Page feels "professional" not "startup-y"
5. **Conversion intent**: Clear next step, no confusion about "what happens after I start"

### Designer is Successful If:

1. **No guesswork**: Can build page without asking "what goes here?"
2. **System consistency**: All diagrams feel cohesive
3. **BCG compliance**: Passes design system audit
4. **Diagram variety**: Uses 8+ distinct diagram types across page
5. **Restraint maintained**: No temptation to add decoration

---

## APPENDIX: REJECTED ALTERNATIVES

### What We Did NOT Do (and Why)

**❌ Feature Grid**:
- Why rejected: Lists features, not outcomes
- Replaced with: Capability Matrix (shows deliverables)

**❌ Founder Testimonials**:
- Why rejected: Marketing tactic, not consulting-grade
- Replaced with: Transparent AI role definition

**❌ Product Screenshots**:
- Why rejected: UI showcases interface, not system
- Replaced with: Input→Output transformation flow

**❌ Pricing Table in Main Flow**:
- Why rejected: Breaks narrative, feels transactional
- Location: Footer or separate page

**❌ "Try Free" Urgency**:
- Why rejected: Undermines trust-based positioning
- Replaced with: Clear, calm next-step flow

**❌ Animated Mascot/Character**:
- Why rejected: Infantilizing, not executive-grade
- Replaced with: System diagrams (serious, credible)

---

## NEXT STEPS

### For Design Team
1. Review this plan
2. Create lo-fi wireframes for Sections 1-5
3. Build diagram component library
4. Design hi-fi mockups following BCG design system
5. Prototype motion for key sections (Hero, System Overview, Speed)

### For Content Team
1. Draft copy for each section following "Copy Direction"
2. Keep editorial tone (avoid marketing language)
3. Test readability (Hemingway Editor: Grade 8 or below)
4. Ensure consistency with positioning: "AI assists, you decide"

### For Development Team
1. Set up BCG design tokens in CSS variables
2. Build responsive grid system
3. Implement SVG-based diagram rendering
4. Add motion with reduced-motion fallback
5. Test performance (60fps animations, fast load times)

---

**END OF ADAPTATION PLAN**

**Status**: Ready for Design Execution  
**Classification**: Diagram-First, BCG-Aligned, StartupAI-Focused  
**Next Action**: Wireframe Phase 1 (Sections 1-5)
