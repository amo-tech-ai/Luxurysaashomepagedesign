# Screen 08: Story Map / Journey Map

> **Question this screen answers:** "What is the smallest journey that delivers value?"
> **Status:** NEW — not built | **Priority:** P2

---

## What This Screen Does (Plain English)

The Story Map visualizes the complete user journey from first discovery to becoming a loyal customer. It is organized as a horizontal timeline of activities (what the user does) with tasks underneath each activity (specific steps).

The key feature is the MVP Cutline — a horizontal line the AI draws across the map. Everything above the line is essential for the MVP. Everything below the line is deferred to later versions.

This prevents the founder from building too much. It answers: "What is the absolute minimum experience that proves the product works?"

---

## ASCII Wireframe (with sample data — TaskFlow AI)

    +---------------------------+------------------------------------------------------+--------------------+
    |  USER PERSONA             |  STORY MAP                                           | AI JOURNEY COACH   |
    |                           |                                                      |                    |
    |  Name: Alex               |  DISCOVER       ONBOARD       PLAN        EXECUTE    | FIRST VALUE MOMENT |
    |  Role: Solo SaaS founder  |  ============   ===========   =========   ========   |                    |
    |  Goal: Ship first product |                                                      | "First task        |
    |  Pain: Planning paralysis |  See Twitter    Sign up       Answer 5    See daily  | completed"         |
    |                           |  thread about   (Google       questions   task list  |                    |
    |  Persona source:          |  "what I built  OAuth)        about       for today  | This is the moment |
    |  Validation report        |  this week"                   startup                | the founder feels  |
    |                           |                 See welcome                           | "this is worth     |
    |  ----------------------   |  Click link     message +     AI generates Review    | paying for."       |
    |                           |  to landing     quick tour    90-day plan  sprint 1  | Everything before  |
    |  JOURNEY STATS            |  page                         with sprints goals     | this moment is     |
    |                           |                 Choose goal                           | onboarding.        |
    |  Activities: 6            |  Read value     (10 paying    See sprint   Complete  | Everything after   |
    |  Tasks: 18                |  prop + see     customers     1 tasks      first     | is retention.      |
    |  Above cutline: 12        |  social proof   in 90 days)   listed       task      |                    |
    |  Below cutline: 6         |                                                      | TIME TO VALUE      |
    |                           |  Watch 60s      Skip or       Customize    Mark task | Target: < 10 min   |
    |  MVP scope:               |  demo video     complete      plan if      as done   | from signup to     |
    |  4 activities             |                 profile       needed                 | first task.        |
    |  12 tasks                 |                                                      |                    |
    |                           |  ~~~~~~~~~~~~~~~~ MVP CUTLINE ~~~~~~~~~~~~~~~~~~~~~~  | DROP-OFF RISKS     |
    |                           |                                                      |                    |
    |  ----------------------   |  SHARE         EXPAND        RETAIN       ADVOCATE   | 1. Onboarding      |
    |                           |  ============  ===========   =========    ========   |    (5 questions     |
    |  LEGEND                   |                                                      |    may feel like    |
    |                           |  Share plan    Invite co-    Weekly plan  Write a    |    too much work)   |
    |  [GREEN] = MVP task       |  with co-      founder to    refresh +   "how I     |                    |
    |  [GRAY]  = Deferred       |  founder       collaborate   new tasks   planned    | 2. First plan      |
    |  [RED]   = Risk hotspot   |                                          my week"   |    generation       |
    |  [STAR]  = Value moment   |  Export plan   Team sprint   Monthly     post on    |    (if plan feels   |
    |                           |  as PDF        planning      progress    Twitter    |    generic, user    |
    |                           |                              report                 |    loses trust)     |
    |                           |  Share report  Upgrade to    Get AI                 |                    |
    |                           |  with investor Pro plan      coaching               | AI SUGGESTION      |
    |                           |                              tips                   |                    |
    |                           |                                                      | "Remove the demo   |
    |                           |                                                      | video from MVP.    |
    |                           |                                                      | It adds friction   |
    |                           |                                                      | before signup.     |
    |                           |  [Save Map]  [Create Experiments from Risks ->]      | Replace with a     |
    |                           |                                                      | single screenshot  |
    +---------------------------+------------------------------------------------------+ showing a sample   |
                                                                                         | 90-day plan."      |
                                                                                         +--------------------+

---

## Real-World Example: FashionOS Story Map

**User Persona:** Maria, independent fashion designer, organizes 6 runway shows per year, team of 3.

ACTIVITIES AND TASKS:

| DISCOVER | ONBOARD | PLAN EVENT | COLLABORATE | EVENT DAY | POST-EVENT |
|----------|---------|------------|-------------|-----------|------------|
| See Instagram ad | Sign up with email | Enter event brief (AI wizard: 3 min) | Invite team members | Open day-of checklist | AI generates recap |
| Visit fashionos.co | Choose "Event Planner" role | AI generates shot list | Assign tasks to team | Mark tasks complete | Send sponsor reports |
| Watch 30s video | Import past event (optional) | AI suggests venue options | Share mood board | Real-time progress view | Rate vendors |
| Read case study | Connect calendar | Review and edit timeline | Vendor communication hub | Handle last-minute changes | Export portfolio |

**MVP CUTLINE** — Everything below this line is v2+:

| SHARE | GROW | MARKETPLACE |
|-------|------|-------------|
| Share event recap on social | Multi-brand dashboard | Venue marketplace |
| Client-facing event portal | Team analytics | Photographer booking |
| Embed portfolio on website | Revenue per event | Sponsor matching |

**First Value Moment:** "Event brief generated in 3 minutes." This is when Maria thinks "this is better than my Google Sheets."

**Drop-off Risks:**
1. Onboarding: If Maria has to enter too much data before seeing a brief, she will leave. The AI wizard must generate something useful from minimal input.
2. Team adoption: Maria signs up, but if her team does not join, the collaboration features are useless and she reverts to WhatsApp.
3. Event day: If the checklist is not real-time and mobile-friendly, it is useless on event day.

---

## UI Microcopy

| Element | Text |
|---------|------|
| Page title | "Story Map" |
| Page subtitle | "Map how users experience value — then cut to the minimum" |
| Activity header format | Activity name in bold, centered above its column |
| Task card format | Short action phrase (verb + object) |
| MVP cutline label | "MVP CUTLINE — everything above is v1, everything below is v2+" |
| Value moment indicator | Star icon + "First value moment" |
| Risk hotspot indicator | Red dot + "Drop-off risk" |
| Deferred task style | Gray text, dashed border |
| Empty state | "Start by adding your first activity. What does the user do first?" |

---

## What the AI Does (Journey Coach Agent)

The Journey Coach performs four analyses:

**Analysis 1: Auto-generate journey.** From the Opportunity Canvas (block 5: "How Users Get Value" and block 6: "Adoption Strategy"), the agent creates a first draft story map with activities and tasks. The founder can then edit, add, remove, and reorder.

**Analysis 2: First value moment identification.** The agent scans the journey for the moment where the user first experiences the core value proposition. This is not signup, not onboarding — it is the moment they think "this is worth it." The agent marks this task with a star.

**Analysis 3: MVP cutline suggestion.** The agent identifies which tasks are essential for delivering the first value moment and which can be deferred. It draws the cutline so that the minimum viable journey is above the line. It explains why each deferred task can wait.

**Analysis 4: Drop-off risk detection.** The agent identifies journey steps where users are most likely to abandon. Common patterns: too many steps before value, requiring team invites for solo products, asking for payment before demonstrating value, requiring complex setup before showing results.

---

## Figma-Ready Prompt

Design a user journey story mapping screen for an AI startup planning platform.

Layout: 3-panel.
Left panel (220px) shows user persona card (name, role, goal, pain), journey stats (activities, tasks, above/below cutline counts), and a color-coded legend (green = MVP, gray = deferred, red = risk, star = value moment).
Center panel (main) shows a horizontal swimlane layout. Top row: activity headers as column titles (Discover, Onboard, Plan, Execute, etc.). Below each activity: vertical stack of task cards. Cards above the MVP cutline have a white background with green left border. Cards below have a gray background with dashed border. The MVP cutline is a prominent dashed line with a label. Risk hotspot tasks have a red dot. The first value moment task has a gold star icon. Tasks are draggable between columns and above/below the cutline.
Right panel (280px) shows AI Journey Coach with: (1) First Value Moment explanation, (2) Time to Value target, (3) Drop-off Risks as numbered alerts, (4) AI Suggestion for improvement. A button at bottom: "Create experiments from risks."

Style: Clean horizontal flow. Activity columns have subtle vertical dividers. Task cards are compact (80-100px tall). The MVP cutline is visually prominent — thick dashed line in brand orange with "MVP" label. Cards below the line are visually muted (lower opacity). Overall feel: workshop planning board — organized, clear priorities.

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 06: Opportunity Canvas | "How Users Get Value" and "Adoption Strategy" blocks |
| Input <- | Screen 07: Idea Wall | Best bet cluster defines which features appear as tasks |
| Output -> | Screen 09: Experiments Lab | Drop-off risks become testable experiments |
| Output -> | Screen 10: 90-Day Plan | MVP tasks become sprint backlog items |
