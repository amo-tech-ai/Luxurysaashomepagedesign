# Screen 07: Idea Wall (Clusters)

> **Question this screen answers:** "What features and ideas exist, and which are the best bets?"
> **Status:** NEW — not built | **Priority:** P2

---

## What This Screen Does (Plain English)

The Idea Wall is a visual brainstorming space where the founder dumps every feature idea, product direction, and random thought. The AI then clusters related ideas into themes, scores them for impact and novelty, and highlights which cluster to focus on for the MVP.

Think of it like a digital sticky-note wall you might use in a design sprint — but the AI does the sorting for you. It prevents the common founder mistake of trying to build everything at once.

---

## ASCII Wireframe (with sample data — TaskFlow AI)

    +---------------------------+----------------------------------------------+---------------------------+
    |  FILTERS & STATS          |  IDEA WALL                                   |  AI STRATEGIST            |
    |                           |                                              |                           |
    |  Ideas: 19                |  CLUSTER: "90-Day Planning" (5 ideas)        |  THEMES FOUND: 4          |
    |  Clusters: 4              |  ==========================================  |                           |
    |  Unclustered: 2           |                                              |  1. 90-Day Planning (5)   |
    |                           |  +-------------+ +-------------+             |     Impact: HIGH          |
    |  Filter by:               |  | AI-generate | | Editable    |             |     Novelty: HIGH         |
    |  Theme: [All         v]   |  | 90-day plan | | sprint      |             |                           |
    |  Source: [All         v]   |  | from chat   | | goals       |             |  2. Social & Community (4)|
    |  Impact: [All         v]   |  +-------------+ +-------------+             |     Impact: MEDIUM        |
    |                           |  +-------------+ +-------------+             |     Novelty: LOW          |
    |  Sort by:                 |  | Daily task  | | Weekly      |             |                           |
    |  ( ) Newest               |  | priorities  | | progress    |             |  3. Analytics (5)         |
    |  (x) AI ranking           |  | list        | | report      |             |     Impact: MEDIUM        |
    |  ( ) Votes                |  +-------------+ +-------------+             |     Novelty: MEDIUM       |
    |                           |  +-------------+                             |                           |
    |  ----------------------   |  | Pivot       |                             |  4. Integrations (3)      |
    |                           |  | trigger     |                             |     Impact: LOW           |
    |  SOURCES                  |  | alerts      |                             |     Novelty: LOW          |
    |  - Chat intake (6)        |  +-------------+                             |                           |
    |  - Validation report (5)  |                                              |  BEST BET FOR MVP         |
    |  - Founder added (8)      |  CLUSTER: "Social & Community" (4 ideas)     |                           |
    |                           |  ==========================================  |  "90-Day Planning" is     |
    |  ----------------------   |                                              |  your core value. Every   |
    |                           |  +-------------+ +-------------+             |  other cluster is a       |
    |  ADD NEW IDEA             |  | Share plan  | | Founder     |             |  distraction until this   |
    |                           |  | with co-    | | leaderboard |             |  works. Build this        |
    |  Title:                   |  | founder     | | and streaks |             |  cluster first.           |
    |  [                     ]  |  +-------------+ +-------------+             |                           |
    |                           |  +-------------+ +-------------+             |  SCOPE CREEP WARNING      |
    |  Notes:                   |  | Community   | | Mentor      |             |                           |
    |  [                     ]  |  | challenges  | | matching    |             |  "The 'Social & Community'|
    |                           |  | (build in   | |             |             |  cluster has 4 ideas but  |
    |  [+ Add to wall]          |  | public)     | |             |             |  none of them validate    |
    |                           |  +-------------+ +-------------+             |  your core problem        |
    |                           |                                              |  (planning paralysis).    |
    |                           |  CLUSTER: "Analytics" (5 ideas)              |  Defer to v2."            |
    |                           |  ==========================================  |                           |
    |                           |                                              |  ADJACENT PLAYS           |
    |                           |  +-------------+ +-------------+             |                           |
    |                           |  | Revenue     | | Competitor  |             |  "Consider: AI meeting    |
    |                           |  | tracking    | | tracking    |             |  prep for founders. Same  |
    |                           |  +-------------+ +-------------+             |  ICP, same AI capability, |
    |                           |  +-------------+ +-------------+             |  different use case.      |
    |                           |  | Sprint      | | Time        |             |  Could be a v2 feature    |
    |                           |  | velocity    | | tracking    |             |  or a separate product."  |
    |                           |  | chart       | |             |             |                           |
    |                           |  +-------------+ +-------------+             |  [Define MVP scope ->]    |
    |                           |  +-------------+                             |                           |
    |                           |  | Habit       |                             |                           |
    |                           |  | score       |                             |                           |
    |                           |  +-------------+                             |                           |
    |                           |                                              |                           |
    |                           |  UNCLUSTERED (2 ideas)                       |                           |
    |                           |  +-------------+ +-------------+             |                           |
    |                           |  | Dark mode   | | Mobile app  |             |                           |
    |                           |  +-------------+ +-------------+             |                           |
    +---------------------------+----------------------------------------------+---------------------------+

---

## Real-World Example: FashionOS Idea Wall

FashionOS founder brainstorms 24 ideas. AI clusters them into 5 themes:

**Cluster 1: "Event Planning Core" (7 ideas) — BEST BET**
- AI event brief wizard
- Shot list generator from brief
- Venue comparison tool
- Sponsor deliverable tracker
- Day-of-event checklist
- Team task assignment
- Budget tracker per event

**Cluster 2: "Content Creation" (5 ideas)**
- AI mood board generator
- Photo editing presets for fashion
- Social media post scheduler
- Lookbook template builder
- Video highlight reel auto-editor

**Cluster 3: "Team Collaboration" (4 ideas)**
- Real-time event dashboard
- Vendor communication portal
- Model booking and availability
- Shared calendar with reminders

**Cluster 4: "Analytics & Reports" (3 ideas)**
- Event ROI calculator
- Sponsor satisfaction survey
- Attendance tracking

**Cluster 5: "Marketplace" (3 ideas)**
- Venue marketplace
- Freelance photographer marketplace
- Sponsor matching

**Unclustered: 2 ideas**
- Multi-language support
- Mobile app

AI BEST BET: "Event Planning Core" is your product. Every other cluster adds complexity without validating whether event organizers will pay for AI-powered planning.

AI SCOPE CREEP WARNING: "The 'Marketplace' cluster (venue marketplace, photographer marketplace, sponsor matching) is a completely different business model — two-sided marketplace vs SaaS tool. Do NOT combine these. If you want a marketplace, that is a separate product."

AI ADJACENT PLAY: "Fashion content creation (mood boards, lookbooks) uses the same AI capabilities and serves the same ICP. This is your strongest v2 expansion. But NOT for MVP."

---

## UI Microcopy

| Element | Text |
|---------|------|
| Page title | "Idea Wall" |
| Page subtitle | "Brainstorm freely. AI will organize." |
| Add idea placeholder | "What feature or idea are you thinking about?" |
| Cluster label format | "CLUSTER: [Theme Name] (X ideas)" |
| Best bet badge | "BEST BET — build this cluster first" |
| Scope creep badge | "SCOPE CREEP — defer this to v2+" |
| Adjacent play badge | "ADJACENT — related opportunity, not MVP" |
| Unclustered label | "UNCLUSTERED — AI couldn't match these to a theme" |
| Empty state | "Add your first idea to get started. Paste from notes, type freely, or let AI suggest ideas from your validation report." |

---

## What the AI Does (Idea Strategist Agent)

The Idea Strategist performs four analyses:

**Analysis 1: Clustering.** The agent reads all idea titles and notes, then groups related ideas using semantic similarity. It names each cluster based on the common theme. Ideas that do not fit any cluster are marked "unclustered."

**Analysis 2: Impact and novelty scoring.** For each cluster, the agent estimates: (a) Impact — how much does this cluster contribute to solving the core problem? (b) Novelty — how different is this from what competitors already offer? Scores are HIGH, MEDIUM, or LOW.

**Analysis 3: Best bet recommendation.** The agent identifies the single cluster that most directly addresses the core problem identified in the validation report. It explains why this cluster should be the MVP focus and why others should be deferred.

**Analysis 4: Scope creep detection.** The agent flags clusters that represent a fundamentally different business model (e.g., marketplace vs SaaS), a different ICP, or features that do not validate the core hypothesis. It also suggests "adjacent plays" — related opportunities that could become v2 features or separate products.

---

## Figma-Ready Prompt

Design an idea brainstorming wall screen for an AI startup planning platform.

Layout: 3-panel.
Left panel (220px) shows stats (idea count, cluster count, unclustered count), filters (theme, source, impact), sort options, and an "Add new idea" mini-form with title and notes fields.
Center panel (main) shows ideas grouped by cluster. Each cluster has a header bar with the theme name, idea count, and optional badge (Best Bet, Scope Creep). Below each header: a grid of idea cards (2-3 per row). Each idea card shows a title and optional notes. Cards are draggable for manual re-clustering. Unclustered ideas appear at the bottom in a separate section with a dashed border.
Right panel (280px) shows AI Strategist with: (1) Themes Found as a numbered list with impact and novelty scores, (2) Best Bet recommendation with explanation, (3) Scope Creep Warning, (4) Adjacent Plays suggestion. A "Define MVP scope" button links to the Story Map screen.

Style: Sticky-note aesthetic. Idea cards should look like colorful sticky notes (each cluster gets a different pastel color — blue, green, yellow, pink). Cards have subtle rotation (1-2 degrees) for organic feel. Cluster headers are clean horizontal bars. Right panel is calm and analytical in contrast to the creative center panel. Overall feel: design sprint workshop.

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 01: Chat Intake | Ideas mentioned during conversation |
| Input <- | Screen 03: Validator Report | MVP Scope section suggests features |
| Input <- | Screen 06: Opportunity Canvas | Solution Ideas block feeds ideas |
| Output -> | Screen 08: Story Map | Best bet cluster defines the user journey to map |
| Output -> | Screen 09: Experiments Lab | Each idea can generate a testable hypothesis |
