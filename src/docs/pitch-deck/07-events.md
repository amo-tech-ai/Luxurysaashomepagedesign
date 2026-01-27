# Industry Focus: Events Management - Wizard Screen Specification

**Industry:** Events Management AI  
**Step:** 2 of 5 — Industry Focus  
**Status:** Design Specification  
**Last Updated:** January 27, 2026

---

## Goal

Help founders frame their pitch around planning efficiency, attendee experience, and operational automation for events.

---

## Audience

- Events management AI founders
- Conference technology startups
- Venue management platforms
- Corporate event tools
- Pre-Seed to Seed stage

---

## Tone

- Operational efficiency-focused
- Attendee experience-driven
- Scale-aware
- Coordination-centric
- Practical, not hype

---

## Layout Structure

### Three-Column Layout

**Left Column:** Wizard steps (Step 2 highlighted)  
**Center Column:** Industry-specific questions  
**Right Column:** AI suggestions

**Background:** Light (#FFFFFF)  
**Spacing:** Clean, generous  
**UI:** Minimal, operations-focused

---

## Left Column — Wizard Progress

### Step Indicator

```
Step 2 of 5 — Industry Focus

Progress:
• Startup Info ✓ (completed)
• Industry Focus (active)
• Market & Traction
• Deck Style
• Review & Generate
```

**Helper Text:**
```
"Tailor your pitch to event organizers, venues, and sponsors."
```

---

## Center Column — Content

### Title

```
Industry Focus: Events Management
```

### Subtitle

```
Tailor your pitch to event organizers, venues, and sponsors.
```

**Typography:** Large title, smaller subtitle in gray

---

### Question 1 — Target Customer

**Label:**
```
Who plans or manages the events?
```

**Input Type:** Textarea (2 rows)

**Placeholder:**
```
Event organizers, conference teams, and venue operators
```

**Character Limit:** 150 characters

**Helper Text:**
```
Be specific: corporate planners, conference organizers, venue managers, or association event teams.
```

**Why This Matters:**
Events tech has diverse buyer personas—from corporate event managers to independent conference organizers to venue operators. Each has different pain points and budgets. Investors want to see you've picked a focused segment.

---

### Question 2 — Core Operational Problem

**Label:**
```
What event management problem exists today?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
Teams manage registrations, schedules, and communications across disconnected tools
```

**Character Limit:** 200 characters

**Helper Text:**
```
Frame problem around coordination complexity, attendee experience gaps, or operational waste.
```

---

### Question 3 — AI-Powered Solution

**Label:**
```
How does AI improve event planning or execution?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
AI automates scheduling, attendee communication, and real-time updates
```

**Character Limit:** 200 characters

**Helper Text:**
```
Emphasize what AI automates: scheduling conflicts, attendee matching, communication, or logistics.
```

---

### Question 4 — Integrations & Systems

**Label:**
```
What does this integrate with?
```

**Input Type:** Multi-select (select all that apply)

**Options:**
- ☐ Ticketing platforms (Eventbrite, Ticketmaster)
- ☐ CRM (HubSpot, Salesforce)
- ☐ Email & messaging tools (Mailchimp, Twilio)
- ☐ Calendar systems (Google Calendar, Outlook)
- ☐ Analytics dashboards (Google Analytics, Mixpanel)
- ☐ Video conferencing (Zoom, Teams)

**Additional Text Field (optional):**
```
Additional integrations:
Placeholder: "Slack, payment processors, venue management systems"
```

**Helper Text:**
```
Integrations reduce friction for event teams already using these tools. Be specific.
```

**Why This Matters:**
Events tech must plug into existing event stacks (ticketing, email, calendars). Standalone tools struggle. Investors want to see integration strategy as a moat.

---

### Question 5 — Where AI Adds Value

**Label:**
```
What improves the most?
```

**Input Type:** Multi-select (select up to 2)

**Options:**
- ☐ Planning efficiency
- ☐ Attendee engagement
- ☐ Sponsor ROI
- ☐ Operational cost reduction
- ☐ Real-time coordination

**Helper Text:**
```
Choose the top 2 value drivers for event organizers.
```

---

### Question 6 — Proof & Metrics

**Label:**
```
What measurable impact have you seen?
```

**Input Type:** Flexible metric fields (2-4 metrics)

**Field Structure:**
- Metric name (dropdown + custom option)
- Metric value (text input with unit)

**Suggested Metrics (shown as hints/dropdown):**
- Events managed per month (#)
- Time saved per event (hours)
- Attendee engagement rate (%)
- Cost reduction per event (%)
- Sponsor conversion rate (%)
- Registration completion rate (%)
- Net Promoter Score (NPS) (score)
- No-show rate reduction (%)

**Example Entry:**
```
Metric: Events managed
Value: 50 per month

Metric: Time saved per event
Value: 15 hours (vs. 40 hours manual)
```

**Helper Text:**
```
Focus on efficiency (time/cost saved) or outcomes (engagement, sponsor ROI, NPS).
```

---

### Navigation

**Primary CTA:**
```
Button: "Continue →"
Style: Green background, white text
State: Enabled when 4 of 6 questions answered
```

**Secondary CTA:**
```
Button: "Back"
Style: Gray text, no background
```

---

## Right Column — AI Suggestions

### Title

```
AI Suggestions (Events Investors)
```

**Background:** Light green card  
**Icon:** Lightbulb

---

### Insights (Educational Content)

**Display as bullet list:**

```
• Event investors care about operational scale and repeatability.
• Highlight how AI reduces manual coordination.
• Integrations are key for adoption.
```

**Typography:** Small, dark gray, line height 1.6

---

### Action Buttons (AI Enhancements)

**Title:**
```
Suggested Improvements
```

**Buttons:**
1. "Clarify planning workflow"
2. "Add engagement or efficiency metrics"
3. "Highlight integration depth"

**Visual Treatment:**
- Small buttons
- Soft gray background
- Sparkle icon prefix
- Hover: Darker gray
- Click: Apply AI suggestion (future)

---

### Validation Checklist (Auto-Updated)

**Title:**
```
Checklist
```

**Items:**
- ✓ Organizer defined  
- ✓ Event workflow clear  
- ✓ AI automation explained  
- ⚠ Add one efficiency or engagement metric

**States:**
- ✓ Green checkmark: Complete
- ⚠ Yellow warning: Needs attention
- ○ Gray circle: Not started

**Behavior:**
Real-time updates as fields are filled.

---

### Pro Tip

**Icon:** Target

**Background:** Soft yellow tint

**Copy:**
```
Strong event tech decks show how AI scales across multiple events without extra staff.
```

**Typography:** Extra small, italic, dark gray

---

## UX Rules

### Language Guidelines

**Use:**
- Operations language: coordination, scheduling, logistics, automation
- Attendee terms: engagement, experience, satisfaction, networking
- Efficiency metrics: time saved, cost reduction, scale
- Outcome terms: NPS, conversion, engagement rate

**Avoid:**
- Generic claims: "better events," "smarter planning"
- Vague metrics: "happier attendees" (use NPS instead)
- Technical jargon: algorithms, machine learning

---

### Focus Areas

1. **Operational Scale:** Can this handle 10+ events per month?
2. **Coordination Automation:** What manual tasks does AI eliminate?
3. **Attendee Experience:** Does AI improve engagement or satisfaction?
4. **Repeatability:** Does efficiency improve across multiple events?

---

### AI Behavior

- AI suggests, founder decides
- No auto-fill without permission
- Operations and coordination-focused suggestions only
- Practical, scale-aware advice

---

## Content Strategy

### What Events Management Investors Expect

1. **Operational Repeatability:** Does efficiency improve with each event?
2. **Scale Without Headcount:** Can you manage 100 events with same team size?
3. **Attendee Proof:** Do attendees rate events higher with your AI?
4. **Sponsor Value:** Can you prove sponsor ROI improvement?
5. **Integration Network:** How deeply embedded in event tech stack?

---

### Key Metrics for Events Management

**Efficiency Metrics:**
- Time saved per event (hours)
- Events managed per team member (#)
- Planning cycle time (days)
- Cost per event reduction (%)

**Attendee Metrics:**
- Attendee engagement rate (%)
- Net Promoter Score (NPS) (score)
- Registration completion rate (%)
- No-show rate (%)
- Session attendance rate (%)
- Networking connections made (#)

**Sponsor Metrics:**
- Sponsor conversion rate (%)
- Sponsor ROI (X:1)
- Lead capture per sponsor (#)
- Sponsor satisfaction score (1-10)

**Operational Metrics:**
- Real-time updates sent (#)
- Communication response time (minutes)
- Schedule change propagation (seconds)
- Issue resolution time (minutes)

---

### Common Mistakes to Avoid

- ❌ Focusing on features without operational proof
- ❌ Missing scale story (how does this work for 100+ events?)
- ❌ Ignoring integration requirements (standalone tools fail)
- ❌ No attendee experience metrics (NPS, engagement)
- ❌ Vague customer definition ("event planners" is too broad)

---

## Design System

### Colors

- **Primary:** `#0d5f4e` (Emerald green)
- **Background:** `#FFFFFF` (White)
- **Secondary Background:** `#F9FAFB` (Light gray)
- **Border:** `#E5E7EB` (Gray-200)
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Orange)
- **Accent (Events):** `#8B5CF6` (Purple - coordination)

### Typography

- **Title:** `text-3xl font-normal` (36px)
- **Subtitle:** `text-base text-gray-600` (16px)
- **Labels:** `text-sm font-medium` (14px)
- **Input Text:** `text-base` (16px)
- **Helper Text:** `text-xs text-gray-500` (12px)
- **Pro Tip:** `text-xs italic text-gray-600` (12px)

### Spacing

- **Section Gaps:** `24px` (space-y-6)
- **Card Padding:** `20px` (p-5)
- **Input Padding:** `12px 16px` (px-4 py-3)

### Border Radius

- **Inputs:** `8px` (rounded-lg)
- **Cards:** `12px` (rounded-xl)
- **Buttons:** `8px` (rounded-lg)

---

## Sample Filled Content

### Example 1: Corporate Events Automation

**Who Plans/Manages:**  
"Corporate event managers at mid-size tech companies (500–5,000 employees)"

**Operational Problem:**  
"Teams spend 40 hours coordinating schedules, invites, and communications for each quarterly event"

**AI Solution:**  
"AI automates scheduling conflicts, sends personalized invites, and manages real-time updates across email, Slack, and calendar"

**Integrations:**
- ☑ Calendar systems (Google Calendar, Outlook)
- ☑ Email & messaging tools (Mailchimp, Slack)
- ☑ CRM (HubSpot)

**Value Drivers:**
- ☑ Planning efficiency
- ☑ Real-time coordination

**Metrics:**
- Time saved: 25 hours per event (vs. 40 hours)
- Events managed: 20 per quarter
- No-show rate: 8% (down from 18%)

---

### Example 2: Conference Attendee Engagement

**Who Plans/Manages:**  
"Conference organizers running 500+ attendee tech and business conferences"

**Operational Problem:**  
"Attendees struggle to find relevant sessions and connections, leading to low engagement and poor NPS"

**AI Solution:**  
"AI recommends personalized agendas and suggests networking connections based on attendee profiles"

**Integrations:**
- ☑ Ticketing platforms (Eventbrite)
- ☑ Email & messaging tools (Twilio)
- ☑ Analytics dashboards (Mixpanel)

**Value Drivers:**
- ☑ Attendee engagement
- ☑ Sponsor ROI

**Metrics:**
- Attendee engagement: 78% (vs. 45% baseline)
- NPS: 72 (vs. 58)
- Networking connections: 12 per attendee (vs. 3)

---

### Example 3: Venue Operations Platform

**Who Plans/Manages:**  
"Venue operators managing 10+ conference rooms and event spaces daily"

**Operational Problem:**  
"Venues double-book rooms and lose revenue due to manual scheduling across disconnected systems"

**AI Solution:**  
"AI optimizes room scheduling, prevents conflicts, and suggests upsell opportunities (A/V, catering)"

**Integrations:**
- ☑ Calendar systems (Google Calendar, Outlook)
- ☑ CRM (Salesforce)
- ☑ Payment processors

**Value Drivers:**
- ☑ Planning efficiency
- ☑ Operational cost reduction

**Metrics:**
- Revenue uplift: 22% (from better utilization)
- Double-booking incidents: 0 (vs. 5 per month)
- Time saved: 20 hours/week

---

## Validation Logic

### Continue Button Enabled When:

**Minimum Requirements:**
- Customer description filled (at least 50 chars)
- Operational problem filled (at least 75 chars)
- AI solution filled (at least 75 chars)
- At least 1 integration selected

**Ideal State:**
- All questions answered
- 2+ integrations selected
- 2 value drivers selected
- At least 2 metrics provided

---

## AI Suggestion Logic

### Trigger: "Clarify planning workflow"

**When to show:**
- Solution text < 100 characters
- OR no mention of: "schedule," "coordinate," "automate," "update"

**Suggested improvement:**
"Be specific about what AI automates. Example: 'AI schedules sessions, detects conflicts, and sends updates' instead of 'AI helps with planning.'"

---

### Trigger: "Add engagement or efficiency metrics"

**When to show:**
- No metrics provided
- OR metrics don't include: "time saved," "events managed," "engagement," "NPS," "cost"

**Suggested improvement:**
"Quantify impact. Example: 'Managed 50 events with same 3-person team' or 'Increased NPS from 58 to 72.'"

---

### Trigger: "Highlight integration depth"

**When to show:**
- Fewer than 2 integrations selected
- OR no mention of specific tools (Eventbrite, Zoom, etc.)

**Suggested improvement:**
"Name specific platforms. Example: 'Integrates with Eventbrite for ticketing, Zoom for virtual events, and Slack for team coordination.'"

---

## Future Enhancements

- [ ] Scale calculator (events per month × time saved = hours saved)
- [ ] Attendee satisfaction predictor (based on automation level)
- [ ] Integration complexity visualizer (tech stack diagram)
- [ ] Benchmark comparison (your metrics vs. industry average)
- [ ] Sponsor ROI calculator

---

## Technical Notes

### State Management

```typescript
interface EventsManagementFormData {
  customer: string;
  operationalProblem: string;
  aiSolution: string;
  integrations: Array<'ticketing' | 'crm' | 'email' | 'calendar' | 'analytics' | 'video'>;
  integrationsOther?: string;
  valueDrivers: Array<'planning' | 'engagement' | 'sponsor' | 'cost' | 'coordination'>;
  metrics: Array<{
    name: string;
    value: string;
  }>;
}
```

### Validation Rules

```typescript
const isValid = (data: EventsManagementFormData) => {
  return (
    data.customer.length >= 50 &&
    data.operationalProblem.length >= 75 &&
    data.aiSolution.length >= 75 &&
    data.integrations.length >= 1
  );
};
```

---

**Status:** Design specification complete — Ready for implementation  
**Next Step:** Build React component based on this spec  
**Related Docs:** `/docs/pitch-deck/01-industry.md` (parent spec)
