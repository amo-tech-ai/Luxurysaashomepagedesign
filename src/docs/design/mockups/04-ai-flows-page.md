# AI Agent Flows Page - Design Documentation

**Route**: `/diagrams/ai-flows`  
**File**: `/app/diagrams/ai-flows/page.tsx`  
**Priority**: High — Technical product explanation  
**Status**: Complete  
**Version**: 1.0

---

## Overview

A dedicated page showcasing **5 AI agent architectural patterns** that explain how StartupAI's intelligence systems work internally. Unlike the general flow diagrams page, this focuses exclusively on AI/ML patterns for technical audiences, developers, and enterprise buyers.

---

## Page Structure

### 1. Hero Section (Dark Green)
**Background**: `#0E3E1B` (emerald dark)  
**Border**: `#0d5f4e`

**H1**: How the agent works  
**Subtitle**: Five architectural patterns showing how AI agents reason, retrieve, orchestrate, and collaborate with humans.

**Purpose**: Establish technical credibility and set expectations for deep-dive content.

---

### 2. Flow 1: ReAct Reasoning Loop
**H2**: How the agent reasons  
**Background**: White  
**Nodes (6)**: Observe (context & task) → Think (plan next step) → Act (tool or answer) → Observe again → Task done or next cycle

**Caption**: One loop from observation to action.

**Context Note**: Agent receives context and task; reasons about next step; calls a tool or returns an answer; observes result and repeats until task is done.

**Pattern**: Cyclical reasoning (ReAct pattern)

---

### 3. Flow 2: RAG (Retrieval-Augmented Generation)
**H2**: From question to grounded answer  
**Background**: `#F1EEEA` (gray)  
**Nodes (4)**: User question → Retrieve (knowledge base) → Generate (with sources) → Answer + citations

**Caption**: Your data, cited in every answer.

**Context Note**: User asks a question; agent retrieves relevant chunks from vector DB or docs; LLM generates answer conditioned on those chunks; response includes citations.

**Pattern**: Knowledge-grounded generation

---

### 4. Flow 3: Tool-Use Agent
**H2**: How the agent uses tools  
**Background**: White  
**Nodes (4)**: User request → Agent plans & picks tools → Execute (API, search, code) → Response or next step

**Caption**: One request, the right tools, one response.

**Context Note**: User sends a request; agent decides which tools to call and in what order; tools run (search, DB, API, etc.); agent formats and returns the response.

**Pattern**: Function calling / tool orchestration

---

### 5. Flow 4: Multi-Agent Orchestration
**H2**: How specialist agents work together  
**Background**: `#F1EEEA` (gray)  
**Nodes (6)**: Incoming task → Router (assigns agent) → Specialist agents run [Research | Code | Write] → Synthesize outputs → Single response or artifact

**Caption**: One task, many specialists, one result.

**Context Note**: Task arrives; router agent assigns to one or more specialists (e.g. research, code, writing); specialists execute; orchestrator synthesizes their outputs into one response or artifact.

**Pattern**: Multi-agent collaboration

**Special UI**: Specialist pills shown inline (Research | Code | Write)

---

### 6. Flow 5: Human-in-the-Loop
**H2**: From agent draft to published output  
**Background**: White  
**Nodes (4)**: Input or brief → Agent produces draft → Human reviews & edits → Approved & published

**Caption**: AI drafts, you decide.

**Context Note**: User provides input or brief; agent generates a first draft (copy, plan, code); human reviews, edits, and approves; final output is published or used.

**Pattern**: Collaborative intelligence

---

## Design System Compliance

### Typography
- **H1 (Hero)**: 48-72px, light (300), white
- **Hero Subtitle**: 18-20px, regular, white/80
- **Section H2**: 32-40px, light (300), #212427
- **Node Primary**: 16px, medium (500), #212427
- **Node Secondary**: 14px, regular, #696969
- **Caption**: 14px, regular, #696969, italic
- **Context Note**: 12px, regular, #898888

### Color Palette
**Hero**:
- Background: #0E3E1B
- Border: #0d5f4e
- Text: white / white/80

**Flows**:
- Background (Alt 1): White
- Background (Alt 2): #F1EEEA
- Node Border: #E5E7EB (gray-200)
- Node Background (outcome): #DCF9E3 (green/10)
- Node Border (outcome): #0E3E1B
- Arrows: #898888
- Specialist Pills: #F3F4F6 (gray-100)

### Layout
- **Container**: max-w-[1200px], px-8 lg:px-16
- **Section Padding**: py-20 lg:py-32
- **Node Width (Desktop)**: 140-200px (varies by flow)
- **Node Gap (Desktop)**: gap-8 to gap-12
- **Node Gap (Mobile)**: gap-6

### Responsive Behavior
- **Desktop (lg:)**: Horizontal layout, → arrows
- **Mobile (< lg)**: Vertical stack, ↓ arrows
- **Node Sizing**: Full-width mobile, fixed-width desktop

---

## Content Guidelines

### Node Labels
- **Length**: 2-5 words max
- **Style**: Title case, direct
- **Parenthetical**: (context) for clarification

### Captions
- **Length**: One sentence, 5-8 words
- **Tone**: Confident, simple
- **Pattern**: "One X, one Y" or "From X to Y"

### Context Notes
- **Length**: 1-2 sentences
- **Purpose**: Technical detail for readers who want more
- **Placement**: Below caption, smaller text
- **Tone**: Technical but clear

---

## Differentiation from `/diagrams/flows`

| Feature | `/diagrams/flows` | `/diagrams/ai-flows` |
|---------|-------------------|----------------------|
| **Focus** | Product flows (user-facing) | AI agent patterns (internal) |
| **Audience** | General users, founders | Technical users, developers, buyers |
| **Hero Color** | Light beige (#FAF9F7) | Dark green (#0E3E1B) |
| **Content Mix** | 5 product + 5 AI flows | 5 AI flows only |
| **Tone** | "How the product works" | "How the agent works" |
| **Context Notes** | Minimal | Detailed (technical) |

---

## Navigation

### Footer Link
**Column**: Diagrams  
**Label**: "AI Agent Flows"  
**Route**: `/diagrams/ai-flows`  
**Badge**: "Active" (green)

### Breadcrumb (Suggested)
Home → Diagrams → AI Agent Flows

---

## Use Cases

1. **Developer Documentation** — Embed flow images in API docs or architecture section
2. **Technical Sales** — Use in enterprise pitches to explain "how it works under the hood"
3. **Marketing Site** — Link from "Technology" or "How It Works" pages
4. **Recruiting** — Show candidates the engineering approach
5. **Onboarding** — Help technical users understand system capabilities

---

## Accessibility

- **ARIA Labels**: Add to flow containers
- **Alt Text**: Each flow should have descriptive alt text
- **Keyboard Navigation**: Ensure footer link is tabbable
- **Screen Readers**: Context notes provide extra detail

---

## Future Enhancements

1. **Interactive Diagrams** — Hover to see expanded context
2. **Code Examples** — Link each flow to example code/API
3. **Video Walkthroughs** — Animated versions of each flow
4. **Comparisons** — "When to use ReAct vs RAG"
5. **Performance Metrics** — Add latency/accuracy stats per pattern

---

## Quality Assurance

- ✅ All 5 flows implemented
- ✅ Responsive (mobile/desktop)
- ✅ Dark hero section (brand contrast)
- ✅ Alternating backgrounds (white/gray)
- ✅ Context notes added (technical detail)
- ✅ Footer link configured
- ✅ Route added to App.tsx
- ✅ Typography matches design system
- ✅ Color palette matches brand guidelines

---

## Related Files

- **Page Component**: `/app/diagrams/ai-flows/page.tsx`
- **Footer Component**: `/components/Footer.tsx`
- **Routing**: `/App.tsx`
- **Documentation**: `/docs/design/mockups/03-flowai.md` (source content)

---

**Status**: Production Ready  
**Last Updated**: January 31, 2026  
**Reviewed By**: Design Team
