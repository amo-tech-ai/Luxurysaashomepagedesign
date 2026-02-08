# Screen 04: Market Research Hub

> **Question this screen answers:** "What does the market say?"
> **Status:** PARTIAL (backend exists, no dedicated UI) | **Route:** NEW | **Priority:** P1

---

## What This Screen Does (Plain English)

The Market Research Hub takes all the raw research data collected by the AI agents during validation and presents it as an explorable, organized library. Instead of seeing research buried inside a report, the founder gets a dedicated screen where they can browse sources, check credibility, spot contradictions, and find gaps in their knowledge.

Think of it like a research assistant who organized all your Google tabs into a clean dashboard with notes.

---

## ASCII Wireframe (with sample data — TaskFlow AI)

    +---------------------------+--------------------------------------------+---------------------------+
    |  SOURCES & FILTERS        |  MARKET RESEARCH HUB                       |  AI INTELLIGENCE          |
    |                           |                                            |                           |
    |  Sources found: 23        |  MARKET SIZING                             |  CREDIBILITY SCORE        |
    |                           |  -----------------------------------------  |  Overall: 78/100          |
    |  Filter by type:          |  TAM: $4.7B                                |                           |
    |  [x] Industry reports     |  (4.7M solo founders x $1,000/yr spend)    |  Sources rated:           |
    |  [x] Competitor data      |  Source: SBA Small Business Report 2025    |  - High trust: 14         |
    |  [x] Pricing benchmarks   |                                            |  - Medium trust: 7        |
    |  [ ] News articles        |  SAM: $1.2B                                |  - Low trust: 2           |
    |  [ ] Academic papers      |  (1.2M building software products)         |                           |
    |                           |  Source: IndieHackers Survey 2025          |  CONTRADICTIONS (1)       |
    |  Filter by credibility:   |                                            |  "IndieHackers says 62%   |
    |  [x] High (14)            |  SOM: $12M                                 |  of solo founders spend   |
    |  [x] Medium (7)           |  (Target: 1% of SAM in Year 1)            |  <$50/mo on tools. But    |
    |  [ ] Low (2)              |                                            |  SaaS benchmarks show     |
    |                           |  -----------------------------------------  |  avg spend is $127/mo.    |
    |  -----------------------  |                                            |  Check methodology."      |
    |                           |  COMPETITOR LANDSCAPE                      |                           |
    |  TOP SOURCES              |                                            |  EVIDENCE GAPS (2)        |
    |                           |  Name       | Price   | Users  | Threat   |  1. No data on founder    |
    |  1. SBA Report 2025       |  -----------|---------|--------|--------- |     willingness to pay    |
    |     [HIGH trust]          |  Notion AI  | Free+$8 | 30M    | HIGH     |     for planning tools    |
    |  2. IndieHackers Survey   |  Motion     | $19/mo  | 200K   | MEDIUM   |     specifically.         |
    |     [HIGH trust]          |  Linear     | $8/mo   | 150K   | LOW      |  2. Churn rates for solo  |
    |  3. Bessemer SaaS Index   |  Trello     | Free+$5 | 50M    | LOW      |     founder SaaS tools    |
    |     [HIGH trust]          |  Todoist    | $4/mo   | 25M    | LOW      |     are unknown.          |
    |  4. G2 Category Data      |                                            |                           |
    |     [MEDIUM trust]        |  POSITIONING MAP                           |  SUGGESTED RESEARCH       |
    |  5. ProductHunt Trends    |                                            |  "Run a pricing survey    |
    |     [MEDIUM trust]        |         BROAD                              |  with 20 founders to      |
    |                           |           |                                |  fill gap #1. Use         |
    |  [+ Add custom source]    |  Notion --|------------- Linear            |  Typeform + $5 gift       |
    |                           |           |                                |  card incentive."         |
    |                           |  CHEAP ---+--- PREMIUM                     |                           |
    |                           |           |                                |  [Run research ->]        |
    |                           |  Todoist--|-- [YOUR SPOT]-- Motion         |                           |
    |                           |           |                                |                           |
    |                           |         FOCUSED                            |                           |
    +---------------------------+--------------------------------------------+---------------------------+

---

## Real-World Example: FashionOS

Here is what the Market Research Hub looks like for FashionOS:

**Sources found: 31**

MARKET SIZING:
- TAM: $36B (global fashion events market — Allied Market Research 2025)
- SAM: $4.2B (fashion tech and event planning software)
- SOM: $42M (target 1% of SAM — fashion-specific SaaS tools)

COMPETITOR LANDSCAPE:

| Name | Category | Price | Users | Threat |
|------|----------|-------|-------|--------|
| Asana | Project management | $11/mo | 150K fashion teams | HIGH (general PM) |
| Canva | Content creation | Free+$13 | 100M total | MEDIUM (not fashion-specific) |
| Eventbrite | Event ticketing | $10/event | 4M organizers | MEDIUM (events only) |
| FashionGo | Wholesale marketplace | Transaction fee | 30K brands | LOW (wholesale, not planning) |
| StyleSeat | Booking | $25/mo | 50K stylists | LOW (beauty, not fashion events) |

POSITIONING MAP:
FashionOS sits in the "Fashion-specific + All-in-one" quadrant — currently empty. Competitors are either general-purpose (Asana, Canva) or fashion-specific but narrow (FashionGo = wholesale only, StyleSeat = booking only).

AI CONTRADICTION FOUND:
"Bain & Company says fashion brands spend $50K-$200K per event on planning. But the IndieHackers fashion community reports budgets of $5K-$20K for indie brands. Make sure your pricing works for BOTH segments or pick one."

EVIDENCE GAPS:
1. No data on how many fashion events use dedicated planning software vs spreadsheets
2. No churn benchmarks for fashion SaaS tools specifically
3. Unclear how many fashion brands would pay monthly vs per-event

---

## UI Microcopy

| Element | Text |
|---------|------|
| Page title | "Market Research Hub" |
| Sources count | "23 sources found across 5 categories" |
| Credibility tooltip | "Trust score based on source authority, recency, and methodology" |
| Contradiction badge | "CONTRADICTION — two sources disagree. Check methodology." |
| Evidence gap badge | "GAP — no data found for this question. Research needed." |
| Add source button | "Add custom source" |
| Research suggestion CTA | "Run research" |
| Positioning map title | "Competitive Positioning" |
| Positioning map help | "Your ideal position is the empty quadrant" |

---

## What the AI Does (Research Intelligence Agent)

The Research Intelligence Agent works in three stages:

**Stage 1: Collect.** During validation, the Research Agent and Competitor Agent gather data from 500+ curated industry URLs. These include market research firms (McKinsey, Bain, Statista), startup databases (Crunchbase, PitchBook), product directories (G2, ProductHunt, Capterra), and industry-specific sources.

**Stage 2: Organize.** The agent categorizes each source by type (report, competitor, benchmark, news), assigns a credibility score (high/medium/low based on authority and recency), and structures the data into cards.

**Stage 3: Analyze.** The agent scans all sources for contradictions (e.g., two market size estimates that disagree by more than 20%), identifies evidence gaps (questions the founder needs answered but no source addresses), and generates the positioning map by plotting competitors on price vs. focus axes.

The agent also suggests specific research actions to fill gaps, including templates for surveys, interview scripts, and competitor deep-dive checklists.

---

## Figma-Ready Prompt

Design a market research dashboard for an AI startup planning platform.

Layout: 3-panel.
Left panel (240px) shows source list with type icons and credibility badges (green = high trust, amber = medium, red = low). Filters at top for source type and credibility. "Add custom source" button at bottom.
Center panel (main) has three sections stacked vertically: (1) Market Sizing with TAM/SAM/SOM as large numbers with source citations below each, (2) Competitor Landscape as a clean data table with name, category, price, users, and threat level badge per row, (3) Positioning Map as a 2x2 quadrant chart with competitor logos plotted and "YOUR SPOT" highlighted.
Right panel (280px) has three sections: (1) Credibility Score with overall number and breakdown, (2) Contradictions listed as warning cards with yellow borders, (3) Evidence Gaps listed as info cards with suggested research actions.

Style: Data-rich but not cluttered. Use cards with subtle borders. Credibility badges are small colored pills. Positioning map uses a clean grid with subtle gridlines. Contradiction cards have a yellow-amber left border. Evidence gap cards have a blue-gray left border. Overall feel: research analyst dashboard, calm and trustworthy.

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 03: Validator Report | Research data from pipeline agents |
| Output -> | Screen 05: Lean Canvas | Market data fills "Customer Segments" and "Channels" blocks |
| Output -> | Screen 06: Opportunity Canvas | Competitor analysis feeds "Solutions Today" and "Adoption Strategy" blocks |
| Output -> | Screen 09: Experiments Lab | Evidence gaps become research experiments |
