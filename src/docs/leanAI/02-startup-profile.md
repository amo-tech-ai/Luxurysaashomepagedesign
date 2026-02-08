# Screen 02: Startup Profile

> **Question this screen answers:** "What's the baseline context?"
> **Status:** BUILT ✅ | **Route:** `/startup-profile` | **File:** `page.tsx`  
> **Implementation:** `/app/startup-profile/page.tsx` (~550 LOC)  
> **Note:** Production-ready. Smart suggestions work for SaaS+Solo founder combination.

---

## What This Screen Does (Plain English)

After the chat intake extracts your startup data, this screen shows it as a clean, editable profile. Think of it like your startup's ID card — every other screen in the system reads from this profile.

The AI pre-fills everything it could extract. The founder reviews, corrects, and fills any gaps. A completeness score shows how ready the profile is for validation.

---

## ASCII Wireframe (with sample data)

```
+---------------------------+--------------------------------------------+---------------------------+
|  NAVIGATION               |  STARTUP PROFILE                           |  AI SUGGESTIONS           |
|                           |                                            |                           |
|  Completeness:            |  +--------------------------------------+  |  COMPLETENESS CHECK       |
|  ████████░░ 82%           |  | STARTUP NAME                         |  |                           |
|                           |  | [TaskFlow AI                       ] |  |  [!] Missing fields:      |
|  Sections:                |  +--------------------------------------+  |  - Monthly burn rate      |
|  [x] Basic Info           |                                            |  - Funding status         |
|  [x] Problem & Solution   |  +------------------+-------------------+  |  - Advisory board         |
|  [x] Market               |  | INDUSTRY         | STAGE             |  |                           |
|  [ ] Financials           |  | [SaaS          v]| [Pre-revenue    v]|  |  These fields unlock:     |
|  [ ] Team                 |  +------------------+-------------------+  |  - Financial projections  |
|                           |                                            |  - Team section in report |
|  Last updated:            |  +------------------+-------------------+  |                           |
|  Feb 6, 2026              |  | TEAM SIZE        | LOCATION          |  |  -------------------------+
|                           |  | [Solo founder  v]| [San Francisco  ] |  |                           |
|                           |  +------------------+-------------------+  |  SMART SUGGESTIONS        |
|                           |                                            |                           |
|                           |  PROBLEM                                   |  Based on "SaaS" +        |
|                           |  +--------------------------------------+  |  "Solo founder":          |
|                           |  | Solo SaaS founders waste 10+ hours  |  |                           |
|                           |  | per week deciding what to work on   |  |  Avg burn rate: $2K/mo    |
|                           |  | next instead of building.           |  |  (solo bootstrapped SaaS) |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |  Typical funding:         |
|                           |  SOLUTION                                  |  Bootstrapped (78%)       |
|                           |  +--------------------------------------+  |  Pre-seed (15%)           |
|                           |  | AI-generated 90-day execution plan  |  |  Angel (7%)               |
|                           |  | with 2-week sprints and daily       |  |                           |
|                           |  | prioritized tasks.                  |  |  [Apply suggestion ->]    |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |  -------------------------+
|                           |  ICP (Ideal Customer)                      |                           |
|                           |  +--------------------------------------+  |  URL IMPORT               |
|                           |  | Solo SaaS founders, pre-revenue,    |  |  Paste a landing page or  |
|                           |  | bootstrapped, technical background  |  |  LinkedIn URL to auto-    |
|                           |  +--------------------------------------+  |  fill missing fields:     |
|                           |                                            |                           |
|                           |  PRICING MODEL                             |  [https://...           ] |
|                           |  +--------------------------------------+  |  [Import ->]              |
|                           |  | $29/mo Starter | $79/mo Pro          |  |                           |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |                           |
|                           |  GOAL (90 days)                            |                           |
|                           |  +--------------------------------------+  |                           |
|                           |  | 10 paying customers                  |  |                           |
|                           |  +--------------------------------------+  |                           |
|                           |                                            |                           |
|                           |  [Save Profile]  [Run Validation ->]       |                           |
+---------------------------+--------------------------------------------+---------------------------+
```

---

## UI Microcopy (exact on-screen text)

| Element | Text |
|---------|------|
| Page title | "Startup Profile" |
| Completeness label | "Profile Completeness: 82%" |
| Missing fields hint | "Missing fields: Monthly burn rate, Funding status, Advisory board" |
| Unlock hint | "These fields unlock: Financial projections, Team section in report" |
| Smart suggestion intro | "Based on 'SaaS' + 'Solo founder':" |
| Apply suggestion button | "Apply suggestion" |
| URL import hint | "Paste a landing page or LinkedIn URL to auto-fill missing fields" |
| Save button | "Save Profile" |
| Validate button | "Run Validation" |

---

## AI Agent Prompt (Profile Agent)

```
You are a Startup Profile Completeness Assistant.

Given the extracted startup data:
1. Calculate completeness percentage (count filled fields / total fields)
2. List missing fields in priority order (most impactful first)
3. For each missing field, explain what downstream feature it unlocks
4. Suggest default values based on industry + stage + team size
   (cite source: "Based on SBA data for solo SaaS founders...")

Fields to check:
- Name, Industry, Stage, Team size, Location (Basic Info)
- Problem statement, Solution description, ICP (Problem & Solution)
- TAM/SAM/SOM, Competition list (Market)
- Pricing model, Monthly burn, Funding status, Runway (Financials)
- Skills gaps, Advisory needs (Team)

Output format: JSON with field name, status, suggestion, source.
```

---

## Sample Data (TaskFlow AI — Complete)

| Section | Field | Value | Status |
|---------|-------|-------|:------:|
| Basic Info | Name | TaskFlow AI | Filled |
| Basic Info | Industry | SaaS | Filled |
| Basic Info | Stage | Pre-revenue | Filled |
| Basic Info | Team | Solo founder (technical) | Filled |
| Basic Info | Location | San Francisco, CA | Filled |
| Problem | Statement | Solo founders waste 10+ hrs/week on planning | Filled |
| Solution | Description | AI 90-day plan with sprints and daily tasks | Filled |
| Solution | ICP | Solo SaaS founders, pre-revenue, bootstrapped | Filled |
| Market | TAM | $4.7B (4.7M solo founders x $1K/yr) | Filled |
| Market | SAM | $1.2B (1.2M building software) | Filled |
| Market | SOM | $12M (first 1% of SAM) | Filled |
| Market | Competitors | Notion AI, Motion, Linear | Filled |
| Financials | Pricing | $29/mo Starter, $79/mo Pro | Filled |
| Financials | Monthly burn | -- | **Missing** |
| Financials | Funding status | -- | **Missing** |
| Financials | Runway | -- | **Missing** |
| Team | Skills gaps | -- | **Missing** |
| Team | Advisory | -- | **Missing** |

**Completeness: 13/18 = 72%**

**AI suggestions for missing fields:**
- Monthly burn: "$2,100/mo (median for solo bootstrapped SaaS — IndieHackers 2025 survey)"
- Funding status: "Bootstrapped (78% of solo SaaS founders — SBA)"
- Runway: "12+ months at $2.1K/mo burn (assumes $25K savings)"
- Skills gaps: "Marketing/distribution (most common gap for technical solo founders)"
- Advisory: "Consider: SaaS pricing advisor, growth marketing mentor"

---

## Figma-Ready Prompt

```
Design a startup profile editor screen for an AI validation platform.

Layout: 3-panel
- Left panel (220px): Navigation showing profile sections as a checklist
  with completion indicators. Circular progress ring showing overall
  completeness percentage at top.
- Center panel (main): Form fields organized by section (Basic Info,
  Problem & Solution, Market, Financials, Team). Each field is an
  editable card with label and text input. Pre-filled fields show
  extracted data with subtle "AI-filled" badge.
- Right panel (280px): Three sections stacked:
  1. "Completeness Check" — missing fields list with what they unlock
  2. "Smart Suggestions" — industry defaults the user can apply with
     one click
  3. "URL Import" — paste a URL to auto-fill

Style: Clean form design. Cards with subtle borders, not heavy boxes.
Pre-filled fields have a light blue-gray background. Missing fields
have a dashed border. "Apply suggestion" buttons are small, inline.
Two action buttons at bottom: "Save" (secondary) and "Run Validation"
(primary, prominent).
```

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 01: Chat Intake | Pre-filled fields from conversation |
| Output -> | Screen 03: Validator Report | Full profile feeds 7-agent pipeline |
| Output -> | Screen 05: Lean Canvas | Problem, Solution, ICP, Pricing pre-fill canvas |
| Output -> | All screens | Profile is the baseline context for everything |