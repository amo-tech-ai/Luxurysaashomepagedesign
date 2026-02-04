# AI Agent Flow Diagrams Mockup Collection

**BCG Editorial Style × AI Agent Architecture Flows**

**Section**: AI/Technical Flow Diagrams  
**Priority**: Medium — Advanced product explanation  
**Status**: Ready for Implementation  
**Version**: 1.0

---

## Purpose

AI Agent flow diagrams communicate **how AI agents work internally** across different architectural patterns:

1. **ReAct reasoning loop** — Observe → Think → Act cycle
2. **RAG (Retrieval-Augmented Generation)** — Question to grounded answer
3. **Tool-use agent** — Plan → Execute → Respond
4. **Multi-agent orchestration** — Router → Specialists → Synthesize
5. **Human-in-the-loop** — Draft → Review → Publish

**Feeling**: Technical, clear, strategic — like a system architecture diagram from a consulting deck, not a developer whiteboard.

---

## Flow 1: ReAct Reasoning Loop (Observe–Think–Act)

### Content Specifications

**Section H2**:
```
How the agent reasons
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Observe (context & task) | Agent receives context and task |
| 2 | Think (plan next step) | Reasons about next step |
| 3 | Act (tool or answer) | Calls a tool or returns an answer |
| 4 | Observe again | Observes result and repeats |
| Outcome | Task done or next cycle | Task complete or loop again |

**Caption**:
```
One loop from observation to action.
```

---

### Context (Implementation Note)

**Agent journey**:
1. Agent receives context and task
2. Reasons about next step
3. Calls a tool or returns an answer
4. Observes result and repeats until task is done

**Where used**: Hero "How the agent works," docs "Agent loop," onboarding

---

### Design / UI Structure

**Orientation**: 
- **Horizontal** for hero
- **Vertical** for docs

**Where**: Hero "How the agent works," docs "Agent loop," onboarding

**Copy**: Use "Observe → Think → Act" as tagline; full loop in diagram only

---

### Visual Layout (Desktop — Horizontal)

```
[Section H2: How the agent reasons]

┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │  → │             │  → │             │  → │             │  → │             │
│ Observe     │     │ Think       │     │ Act         │     │ Observe     │     │ Task done   │
│ (context &  │     │ (plan next  │     │ (tool or    │     │ again       │     │ or next     │
│ task)       │     │ step)       │     │ answer)     │     │             │     │ cycle       │
│             │     │             │     │             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                                                                    ↑                     │
                                                                    └─────────────────────┘
                                                                         (Loop back)

[Caption: One loop from observation to action.]
```

**Note**: The loop-back arrow should visually connect "Observe again" back to "Think" or create a circular flow

---

### Visual Layout (Vertical for Docs)

```
[Section H2: How the agent reasons]

┌──────────────────────┐
│ Observe              │
│ (context & task)     │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ Think                │
│ (plan next step)     │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ Act                  │
│ (tool or answer)     │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ Observe again        │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ Task done or         │ ← Highlighted
│ next cycle           │
└──────────────────────┘
          ↓
    (Loop back to Think)

[Caption: One loop from observation to action.]
```

---

## Flow 2: RAG (Retrieval-Augmented Generation)

### Content Specifications

**Section H2**:
```
From question to grounded answer
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | User question | User asks a question |
| 2 | Retrieve (knowledge base) | Agent retrieves relevant chunks from vector DB |
| 3 | Generate (with sources) | LLM generates answer conditioned on chunks |
| Outcome | Answer + citations | Response includes citations |

**Caption**:
```
Your data, cited in every answer.
```

---

### Context (Implementation Note)

**RAG journey**:
1. User asks a question
2. Agent retrieves relevant chunks from vector DB or docs
3. LLM generates answer conditioned on those chunks
4. Response includes citations

**Where used**: "How answers are built," RAG product hero, API/docs overview

---

### Design / UI Structure

**Orientation**: Horizontal (4 nodes in a row)

**Where**: "How answers are built," RAG product hero, API/docs overview

**Copy**: Emphasize "Retrieve then generate" and "citations"; avoid "RAG" in user-facing H2

---

### Visual Layout (Desktop)

```
[Section H2: From question to grounded answer]

┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │  → │             │  → │             │  → │             │
│ User        │     │ Retrieve    │     │ Generate    │     │ Answer +    │ ← Highlighted
│ question    │     │ (knowledge  │     │ (with       │     │ citations   │
│             │     │ base)       │     │ sources)    │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘

[Caption: Your data, cited in every answer.]
```

---

## Flow 3: Tool-Use Agent (Plan → Execute → Respond)

### Content Specifications

**Section H2**:
```
How the agent uses tools
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | User request | User sends a request |
| 2 | Agent plans & picks tools | Agent decides which tools to call |
| 3 | Execute (API, search, code) | Tools run (search, DB, API, etc.) |
| Outcome | Response or next step | Agent formats and returns response |

**Caption**:
```
One request, the right tools, one response.
```

---

### Context (Implementation Note)

**Tool-use journey**:
1. User sends a request
2. Agent decides which tools to call and in what order
3. Tools run (search, DB, API, etc.)
4. Agent formats and returns the response

**Where used**: Developer docs, "Capabilities" section, integration pages

---

### Design / UI Structure

**Orientation**: 
- **Horizontal** for overview
- **Vertical** if listing tool types under Node 3

**Where**: Developer docs, "Capabilities" section, integration pages

**Copy**: Use "plans & picks tools" in diagram; in body copy mention concrete tools (e.g. "search, database, code")

---

### Visual Layout (Desktop)

```
[Section H2: How the agent uses tools]

┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │  → │             │  → │             │  → │             │
│ User        │     │ Agent plans │     │ Execute     │     │ Response or │ ← Highlighted
│ request     │     │ & picks     │     │ (API,       │     │ next step   │
│             │     │ tools       │     │ search,     │     │             │
│             │     │             │     │ code)       │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘

[Caption: One request, the right tools, one response.]
```

---

## Flow 4: Multi-Agent Orchestration (Router → Specialists)

### Content Specifications

**Section H2**:
```
How specialist agents work together
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Incoming task | Task arrives |
| 2 | Router (assigns agent) | Router agent assigns to specialists |
| 3 | Specialist agents run | Specialists execute (research, code, writing) |
| 4 | Synthesize outputs | Orchestrator synthesizes outputs |
| Outcome | Single response or artifact | One response or artifact |

**Caption**:
```
One task, many specialists, one result.
```

---

### Context (Implementation Note)

**Multi-agent journey**:
1. Task arrives
2. Router agent assigns to one or more specialists (e.g. research, code, writing)
3. Specialists execute
4. Orchestrator synthesizes their outputs into one response or artifact

**Where used**: Enterprise/advanced product page, architecture docs, sales one-pagers

---

### Design / UI Structure

**Orientation**: Horizontal with Node 3 as "stack" or pill (e.g. "Research | Code | Write")

**Where**: Enterprise/advanced product page, architecture docs, sales one-pagers

**Copy**: Name 2–3 specialist types in subcopy; keep diagram labels generic ("Specialist agents run")

---

### Visual Layout (Desktop)

```
[Section H2: How specialist agents work together]

┌─────────────┐     ┌─────────────┐     ┌─────────────────────────┐     ┌─────────────┐     ┌─────────────┐
│             │  → │             │  → │                         │  → │             │  → │             │
│ Incoming    │     │ Router      │     │ Specialist agents run   │     │ Synthesize  │     │ Single      │ ← Highlighted
│ task        │     │ (assigns    │     │ ┌─────────────────────┐ │     │ outputs     │     │ response or │
│             │     │ agent)      │     │ │ Research│Code│Write │ │     │             │     │ artifact    │
│             │     │             │     │ └─────────────────────┘ │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────────────────┘     └─────────────┘     └─────────────┘

[Caption: One task, many specialists, one result.]
```

**Note**: Node 3 shows specialist types as pills or stacked labels inside the box

---

## Flow 5: Human-in-the-Loop (Draft → Review → Publish)

### Content Specifications

**Section H2**:
```
From agent draft to published output
```

**Flow Nodes**:

| Node | Label | Description |
|------|-------|-------------|
| 1 | Input or brief | User provides input or brief |
| 2 | Agent produces draft | Agent generates a first draft |
| 3 | Human reviews & edits | Human reviews, edits, and approves |
| Outcome | Approved & published | Final output is published or used |

**Caption**:
```
AI drafts, you decide.
```

---

### Context (Implementation Note)

**Human-in-the-loop journey**:
1. User provides input or brief
2. Agent generates a first draft (copy, plan, code)
3. Human reviews, edits, and approves
4. Final output is published or used

**Where used**: Compliance/trust messaging, editor UX, "How content is created"

---

### Design / UI Structure

**Orientation**: Horizontal; optional icon for Node 3 (person or check)

**Where**: Compliance/trust messaging, editor UX, "How content is created"

**Copy**: Stress "you decide" and "human review"; avoid "human-in-the-loop" in headline

---

### Visual Layout (Desktop)

```
[Section H2: From agent draft to published output]

┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │  → │             │  → │             │  → │             │
│ Input or    │     │ Agent       │     │ Human       │     │ Approved &  │ ← Highlighted
│ brief       │     │ produces    │     │ reviews &   │     │ published   │
│             │     │ draft       │     │ edits       │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘

[Caption: AI drafts, you decide.]
```

---

## Prompt Usage Guide

| Use case | What to take |
|----------|--------------|
| **Image / Figma** | H2 + node labels; horizontal row; 1px connector, no color hierarchy. |
| **Hero copy** | H2 as title; caption as subtitle; node labels as bullets or single line. |
| **Docs / API** | One flow per section; add Context as body; Design/UI for placement. |
| **UI structure** | Use "Where" and "Orientation" to place diagram in layout. |

---

## QA Checklist (Per design/mockups/02-flow-diagrams.md)

Before implementing any AI agent flow diagram:

- [ ] **3–5 nodes total** (including outcome)
- [ ] **2–5 words per node label**
- [ ] **One idea per diagram** (no branching complexity)
- [ ] **Readable in ~5 seconds**
- [ ] **Grayscale-safe** (no color dependencies)
- [ ] **Section H2 present** (introduces flow)
- [ ] **Caption provided** (explains value)
- [ ] **Outcome node highlighted** (green background or border)
- [ ] **Consistent spacing** (40–60px between nodes)
- [ ] **Works on mobile** (vertical stack if needed)

---

## Implementation Notes

### Typography (Same as 02-flow-diagrams.md)

#### Section H2
* **Size**: 32–40px (`text-3xl lg:text-4xl`)
* **Weight**: Light (300) — `font-light`
* **Color**: #212427

#### Node Labels
* **Size**: 16px (`text-base`)
* **Weight**: Medium (500) — `font-medium`
* **Color**: #212427

#### Caption
* **Size**: 14px (`text-sm`)
* **Weight**: Regular (400)
* **Color**: #696969
* **Style**: Italic

---

### Node Specifications (Same as 02-flow-diagrams.md)

**Box Style**:
* **Width**: 180px–200px
* **Padding**: 16px–20px (`px-5 py-4`)
* **Border**: 1.5px solid #E5E5E5
* **Background**: White
* **Border-radius**: 0px (sharp corners)

**Outcome Box** (Final node):
* **Background**: #DCF9E3 (soft green)
* **Border**: 1.5px solid #0E3E1B (green)
* **Text color**: #0E3E1B

---

### Special Considerations for AI Flows

#### Loop-Back Arrows (ReAct Flow)

For the ReAct reasoning loop, implement a visual "loop back" arrow:

**Option A**: Curved arrow from "Observe again" back to "Think"
```html
<!-- SVG curved arrow -->
<svg>
  <path d="M ... (curved path)" stroke="#898888" stroke-width="1.5" fill="none" />
  <polygon points="..." fill="#898888" /> <!-- arrowhead -->
</svg>
```

**Option B**: Dotted line with label "Repeat"
```html
<div class="border-t-2 border-dashed border-gray-400">
  <span class="text-xs text-gray-500">Repeat until done</span>
</div>
```

---

#### Nested Labels (Multi-Agent Flow)

For Node 3 in multi-agent orchestration, show specialist types:

**Implementation**:
```html
<div class="border border-gray-200 px-5 py-4">
  <p class="text-base font-medium mb-2">Specialist agents run</p>
  <div class="flex gap-2 flex-wrap">
    <span class="px-2 py-1 bg-gray-100 text-xs rounded">Research</span>
    <span class="px-2 py-1 bg-gray-100 text-xs rounded">Code</span>
    <span class="px-2 py-1 bg-gray-100 text-xs rounded">Write</span>
  </div>
</div>
```

---

#### Parenthetical Labels

Several flows use parenthetical clarifications (e.g., "Observe (context & task)"):

**Implementation**:
```html
<p class="text-base font-medium">
  Observe
  <span class="block text-sm font-normal text-gray-600">(context & task)</span>
</p>
```

Or keep as single line:
```html
<p class="text-base font-medium">Observe (context & task)</p>
```

---

## Accessibility

### Semantic HTML

```html
<section aria-labelledby="flow-title">
  <h2 id="flow-title">How the agent reasons</h2>
  
  <div role="img" aria-label="Agent reasoning loop: Observe context, think about next step, act with tools, observe results, repeat until task is done">
    <!-- Flow diagram content -->
  </div>
  
  <p class="caption">One loop from observation to action.</p>
</section>
```

### Screen Reader Alternative Text

**ReAct Flow**:
```
"Agent reasoning loop: Step 1, Observe context and task. 
Step 2, Think and plan next step. 
Step 3, Act using tools or provide answer. 
Step 4, Observe results. 
Step 5, Task complete or repeat cycle."
```

**RAG Flow**:
```
"Retrieval-augmented generation process: Step 1, User asks question. 
Step 2, System retrieves relevant information from knowledge base. 
Step 3, AI generates answer using retrieved sources. 
Final output, Answer with citations."
```

---

## Usage Guidelines

### Where to Use AI Agent Flows

**✅ Appropriate contexts**:
- Product pages explaining AI capabilities
- Developer documentation
- Architecture overviews
- Sales/enterprise decks
- Onboarding flows for technical users

**❌ Not appropriate**:
- Marketing hero sections (too technical)
- Non-technical user onboarding
- Generic "how it works" pages (use simpler flows from 02-flow-diagrams.md)

---

### Content Writing Rules

**Section H2**:
- Use "How [agent capability]" or "From [input] to [output]"
- Avoid technical jargon (e.g., "RAG") in headlines
- Sentence case
- 3–8 words

**Node labels**:
- Active voice preferred
- Present tense
- Parenthetical clarifications allowed
- 2–7 words (can be slightly longer for technical context)

**Caption**:
- Focus on user benefit or outcome
- One sentence
- 5–12 words
- Avoid repeating H2

---

## Related Mockups

* **Previous**: Flow Diagrams (`02-flow-diagrams.md`)
* **Related**: Visual System (`01-visual-system.md`)
* **Related**: Diagram Library (`diagram-library.md`)
* **Related**: Style Guide (`07-style-guide.md`)

---

## File References

* **Implementation location**: `/app/diagrams/flows/page.tsx`
* **Visual system**: `/docs/design/01-visual-system.md`
* **Diagram library**: `/docs/design/diagram-library.md`
* **Flow template**: `/docs/design/mockups/02-flow-diagrams.md`
* **Style guide**: `/docs/design/07-style-guide.md`

---

**Mockup Status**: ✅ Complete  
**Approval Status**: Pending Review  
**Implementation Status**: Ready for Development

---

*End of AI Agent Flow Diagrams Mockup Collection*
