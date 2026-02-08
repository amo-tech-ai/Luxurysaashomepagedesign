# Validator Flow - Screen Specifications

**Document:** 02-screen-specifications.md  
**Status:** Planning  
**Screens:** 5 detailed wireframes with component breakdown  
**Date:** February 6, 2026

---

## SCREEN 1: VALIDATE IDEA (Entry Page)

**Route:** `/validator`  
**Purpose:** Hero landing + embedded chat to start validation  
**Layout:** Centered content, max-width 1400px

### Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  [Header Component]                                             │
│  ← Back to Home            [MyStartup ▾] · [Industry Badge]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│                         🎯                                      │
│                  Validate My Idea                               │
│                                                                 │
│           From idea to execution, in one guided flow.           │
│       Know if your startup is worth building — before you       │
│                       waste months building it.                 │
│                                                                 │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │  🎯 Idea Validator           ● Ready to generate    │  │  │
│  │  ├─────────────────────────────────────────────────────┤  │  │
│  │  │                                                     │  │  │
│  │  │  🤖 Welcome! Tell me about your startup idea.       │  │  │
│  │  │     What problem are you solving and for whom?      │  │  │
│  │  │                                                     │  │  │
│  │  │      ┌──────────────────────────────────────────┐   │  │  │
│  │  │      │ [Type your idea here...]                 │   │  │  │
│  │  │      │                                          │   │  │  │
│  │  │      │                                          │   │  │  │
│  │  │      └──────────────────────────────────────────┘   │  │  │
│  │  │                                                     │  │  │
│  │  │                                   [ Send → ]       │  │  │
│  │  │                                                     │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  Max-width: 1100px                                        │  │
│  │  Background: White card, border radius 12px               │  │
│  │  Shadow: Large (0 10px 40px rgba(0,0,0,0.08))             │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│                                                                 │
│              AI suggests. You decide. You own your data.        │
│                     — No credit card required —                 │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
│                                                                 │
│  [Footer Component]                                             │
└─────────────────────────────────────────────────────────────────┘
```

### Component Breakdown

**1. Page Container**
```tsx
<div className="min-h-screen bg-[#FAF9F7]">
  <Header />
  
  <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
    {/* Hero Section */}
    {/* Chat Section */}
    {/* Trust Badge */}
  </main>
  
  <Footer />
</div>
```

**2. Hero Section**
```
Typography:
  Icon: 🎯 (text-6xl, mb-6)
  Headline: "Validate My Idea" (text-5xl lg:text-6xl, font-light, text-[#212427])
  Subheadline: 2 lines (text-xl lg:text-2xl, text-gray-600, max-w-3xl)
  
Spacing:
  mb-16 (64px margin bottom before chat)
  text-center
```

**3. Chat Card**
```
Container:
  max-w-[1100px], mx-auto
  bg-white, rounded-xl
  border border-gray-200
  shadow-2xl (large shadow)
  p-8
  
Contains:
  <ValidatorChat 
    onGenerate={(sessionId) => navigate to /validator/run/{sessionId}}
  />
```

**4. Trust Badge**
```
Typography:
  text-center, text-gray-500, text-sm
  mt-12
  
Content:
  "AI suggests. You decide. You own your data."
  "— No credit card required —"
```

### Data Flow

**On Mount:**
```typescript
useEffect(() => {
  // Check for pre-filled idea
  const hasIdea = searchParams.get('hasIdea') === 'true';
  
  if (hasIdea) {
    const savedIdea = sessionStorage.getItem('startup-idea');
    if (savedIdea) {
      // Pre-fill chat with saved idea
      setChatMessages([
        { role: 'assistant', content: WELCOME_MESSAGE },
        { role: 'user', content: savedIdea }
      ]);
    }
  }
}, []);
```

**On Generate Click:**
```typescript
const handleGenerate = async (messages: Message[]) => {
  // Combine all messages into input_text
  const input_text = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join('\n\n');
  
  // Call validator-start
  const { session_id } = await fetch('/functions/v1/validator-start', {
    method: 'POST',
    body: JSON.stringify({ input_text })
  }).then(r => r.json());
  
  // Navigate to progress
  navigate(`/validator/run/${session_id}`);
};
```

---

## SCREEN 2: VALIDATOR CHAT (Component)

**Component:** `ValidatorChat.tsx` (reusable)  
**Props:** `onGenerate: (sessionId: string) => void`  
**State:** `messages`, `isTyping`, `coverage`, `canGenerate`

### Wireframe (Embedded Component)

```
┌─────────────────────────────────────────────────────────────────┐
│  🎯 Idea Validator                          ● Ready to generate │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ 🤖 Welcome! Tell me about your startup idea.            │    │
│  │    What problem are you solving and for whom?            │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│       ┌─────────────────────────────────────────────────┐       │
│       │ I'm building an AI-powered task manager for     │       │
│       │ remote teams. Founders waste 2hrs/day tracking  │       │
│       │ work across Slack, email, and spreadsheets.     │       │
│       └─────────────────────────────────────────────────┘       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ 🤖 Interesting! Who specifically are you targeting —    │    │
│  │    startup founders or established teams? What size?    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│       ┌─────────────────────────────────────────────────┐       │
│       │ Early-stage startups, 5-20 person teams. They   │       │
│       │ can't afford enterprise tools like Monday.com   │       │
│       └─────────────────────────────────────────────────┘       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ 🤖 What alternatives have they tried? And how is your  │    │
│  │    approach different from Asana, Trello, or Linear?   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ ⌨ AI is typing...                                       │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  [Scroll area: max-h-[500px], overflow-y-auto]                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Type your answer...                                     │    │
│  │                                                         │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  [ Send → ]                            [ Generate Report ▶ ]    │
│  (always visible)                      (hidden until MIN 2 msgs)│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Message Bubbles

**Assistant (AI) Message:**
```
┌─────────────────────────────────────────────┐
│ 🤖 What problem are you solving?            │
└─────────────────────────────────────────────┘

Styling:
  bg-gray-100
  text-gray-900
  p-4, rounded-lg
  max-w-[80%], ml-0 (left-aligned)
  mb-3
```

**User Message:**
```
       ┌─────────────────────────────────────┐
       │ I'm building an AI task manager... │
       └─────────────────────────────────────┘

Styling:
  bg-[#0D5F4E]
  text-white
  p-4, rounded-lg
  max-w-[80%], ml-auto (right-aligned)
  mb-3
```

**Typing Indicator:**
```
┌─────────────────────────────────────────────┐
│ ⌨ AI is typing...                           │
└─────────────────────────────────────────────┘

Styling:
  bg-gray-100
  text-gray-500, italic
  p-4, rounded-lg
  Animated dots: ... (pulse effect)
```

### Component Logic

**State:**
```typescript
const [messages, setMessages] = useState<Message[]>([
  { role: 'assistant', content: WELCOME_MESSAGE }
]);
const [input, setInput] = useState('');
const [isTyping, setIsTyping] = useState(false);
const [coverage, setCoverage] = useState<Coverage>({
  customer: false,
  problem: false,
  competitors: false,
  innovation: false,
  demand: false,
  research: false,
  uniqueness: false,
  websites: false
});
const [questionCount, setQuestionCount] = useState(0);
const [canGenerate, setCanGenerate] = useState(false);
```

**Rules:**
```typescript
// MIN_EXCHANGES: User must send at least 2 messages
const userMessageCount = messages.filter(m => m.role === 'user').length;
const canShowGenerate = userMessageCount >= 2;

// MAX_EXCHANGES: Auto-ready after 7 messages
const MAX_QUESTIONS = 7;
if (questionCount >= MAX_QUESTIONS) {
  setCanGenerate(true);
  // Stop asking questions
}

// Enable Generate when coverage is sufficient OR max reached
const coverageCount = Object.values(coverage).filter(Boolean).length;
if (coverageCount >= 5 || questionCount >= MAX_QUESTIONS) {
  setCanGenerate(true);
}
```

**Send Flow:**
```typescript
const handleSend = async () => {
  // Add user message
  const newMessages = [...messages, { role: 'user', content: input }];
  setMessages(newMessages);
  setInput('');
  
  // Check if max reached
  if (questionCount >= MAX_QUESTIONS) {
    setCanGenerate(true);
    return;
  }
  
  // Show typing indicator
  setIsTyping(true);
  
  try {
    // Call validator-followup
    const response = await fetch('/functions/v1/validator-followup', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages })
    }).then(r => r.json());
    
    if (response.action === 'ready') {
      setCanGenerate(true);
    } else {
      // Add AI question
      setMessages([...newMessages, {
        role: 'assistant',
        content: response.question
      }]);
      setCoverage(response.coverage);
      setQuestionCount(response.questionNumber);
    }
  } catch (error) {
    // Fallback to hardcoded questions
    const fallbackQuestion = FALLBACK_QUESTIONS[questionCount] || 
      "Tell me more about your startup.";
    setMessages([...newMessages, {
      role: 'assistant',
      content: fallbackQuestion
    }]);
    setQuestionCount(questionCount + 1);
  } finally {
    setIsTyping(false);
  }
};
```

**Generate Flow:**
```typescript
const handleGenerate = async () => {
  // Combine all user messages
  const input_text = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join('\n\n');
  
  // Call parent callback
  onGenerate(input_text);
};
```

### Fallback Questions (if edge function fails)

```typescript
const FALLBACK_QUESTIONS = [
  "What problem are you solving and for whom?",
  "How do they solve this problem today?",
  "What makes your approach different or better?"
];
```

---

## SCREEN 3: VALIDATOR PROGRESS

**Route:** `/validator/run/:sessionId`  
**Purpose:** Show real-time pipeline execution  
**Polling:** `validator-status` every 2 seconds

### Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back to Validator                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│                  Validating Your Startup Idea                   │
│                                                                 │
│            ████████████████████░░░░░░░░░░  57%                  │
│                                                                 │
│                                              ● RUNNING          │
│                                                                 │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  ✅ Extract Profile                                       │  │
│  │     ExtractorAgent · gemini-3-flash-preview · 3.2s        │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     Structured startup data from your description         │  │
│  │                                                           │  │
│  │                                                           │  │
│  │  ✅ Market Research                                       │  │
│  │     ResearchAgent · gemini-3-flash-preview · 12.4s   📎   │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     TAM/SAM/SOM analysis with Google Search + URL         │  │
│  │     Context. Citations: 3 sources found                   │  │
│  │                                                           │  │
│  │                                                           │  │
│  │  ✅ Competitor Analysis                                   │  │
│  │     CompetitorAgent · gemini-3-flash-preview · 18.7s  📎  │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     Direct & indirect competitors identified. Found       │  │
│  │     5 competitors with market positioning                 │  │
│  │                                                           │  │
│  │                                                           │  │
│  │  ⏳ Scoring & Risk Analysis                               │  │
│  │     ScoringAgent · gemini-3-flash-preview · running...    │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     7-dimension scoring with deep reasoning (thinking:    │  │
│  │     HIGH for comprehensive factor analysis)               │  │
│  │                                                           │  │
│  │                                                           │  │
│  │  ○  MVP Planning                                          │  │
│  │     MVPAgent · gemini-3-flash-preview · queued            │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     Practical MVP scope, 3-phase roadmap, and 7 key       │  │
│  │     next steps for validation                             │  │
│  │                                                           │  │
│  │                                                           │  │
│  │  ○  Compose Validation Report                            │  │
│  │     ComposerAgent · gemini-3-flash-preview · queued       │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     Assembling 14-section comprehensive validation        │  │
│  │     report from all agent outputs                         │  │
│  │                                                           │  │
│  │                                                           │  │
│  │  ○  Verify Completeness                                  │  │
│  │     VerifierAgent · logic-based verification · queued     │  │
│  │     ───────────────────────────────────────────────       │  │
│  │     Check all sections present, citations included,       │  │
│  │     and quality thresholds met                            │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│                                                                 │
│                 Estimated time: ~80 seconds total               │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Breakdown

**1. Progress Bar**
```
Container:
  max-w-[600px], mx-auto, mb-8
  
Progress bar:
  Full width, h-3, rounded-full
  bg-gray-200 (background)
  bg-[#0D5F4E] (filled portion)
  transition-all duration-500
  
Percentage:
  text-4xl, font-light, text-center, mb-2
  Counts up with animation
```

**2. Status Badge**
```
Position: Top-right corner

● RUNNING   → text-blue-600, pulse animation
✅ COMPLETE → text-green-600
⚠️ PARTIAL  → text-amber-600
❌ FAILED   → text-red-600
```

**3. Agent Step Card**
```
Each step is a card with:
  
┌─────────────────────────────────────────────┐
│ [Icon] Agent Name                           │
│ Model · Timing                       [📎]   │
│ ───────────────────────────────────────────  │
│ Description of what this agent does         │
└─────────────────────────────────────────────┘

Icon mapping:
  ○  Queued    (gray circle)
  ⏳ Running   (blue hourglass, pulse)
  ✅ Complete  (green checkmark)
  ⚠️ Partial   (amber warning)
  ❌ Failed    (red X)
  
Citation badge [📎]:
  Only shown if has_citations: true
  Amber/gold color
```

### Data Flow

**On Mount:**
```typescript
const { sessionId } = useParams();

useEffect(() => {
  // Start polling
  const interval = setInterval(async () => {
    const status = await fetch(
      `/functions/v1/validator-status?session_id=${sessionId}`
    ).then(r => r.json());
    
    setProgress(status.progress);
    setSteps(status.steps);
    setStatus(status.status);
    
    // Stop polling if complete
    if (status.status === 'complete' || status.status === 'partial') {
      clearInterval(interval);
      
      // Auto-navigate after 2 seconds
      setTimeout(() => {
        navigate(`/validator/report/${status.report.report_id}`);
      }, 2000);
    }
    
    // Stop polling if failed
    if (status.status === 'failed') {
      clearInterval(interval);
    }
  }, 2000); // Poll every 2 seconds
  
  return () => clearInterval(interval);
}, [sessionId]);
```

**Step Rendering:**
```typescript
const getStepIcon = (status: string) => {
  switch (status) {
    case 'queued': return '○';
    case 'running': return '⏳';
    case 'ok': return '✅';
    case 'partial': return '⚠️';
    case 'failed': return '❌';
  }
};

const getStepColor = (status: string) => {
  switch (status) {
    case 'queued': return 'text-gray-400';
    case 'running': return 'text-blue-600 animate-pulse';
    case 'ok': return 'text-green-600';
    case 'partial': return 'text-amber-600';
    case 'failed': return 'text-red-600';
  }
};
```

### On Complete

**Complete State:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                  Validation Complete!                           │
│                                                                 │
│            ████████████████████████████████  100%               │
│                                                                 │
│                                             ✅ COMPLETE         │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  Report Ready                                             │  │
│  │                                                           │  │
│  │     Score: 72/100          Verdict: CAUTION               │  │
│  │     ✅ Verified             7/7 agents completed          │  │
│  │                                                           │  │
│  │  ⚠ 2 warnings:                                            │  │
│  │     • Only 4 key questions (expected 5-8)                 │  │
│  │     • Revenue model has 1 alternative (expected 2-3)      │  │
│  │                                                           │  │
│  │         [ View Full Report ]    [ Try Again ]             │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Redirecting in 2 seconds...                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## SCREEN 4: VALIDATOR REPORT (Decision-First)

**Route:** `/validator/report/:reportId`  
**Layout:** 5 decision blocks → 14 expandable sections  
**Width:** max-w-[1400px]

### Wireframe (Full Page)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Header]                                                       │
│  ← Back to Validator    TaskFlow — AI Task Manager             │
│                                          [View Trace] [PDF ↓]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║                                                          ║  │
│  ║  BLOCK 1: VERDICT                                        ║  │
│  ║                                                          ║  │
│  ║      ┌──────────┐                                        ║  │
│  ║      │    72    │    CAUTION                            ║  │
│  ║      │   /100   │    Worth Pursuing                     ║  │
│  ║      └──────────┘    ✅ Verified                         ║  │
│  ║                                                          ║  │
│  ║  Strong problem-solution fit with clear market demand.   ║  │
│  ║  Address pricing validation and competitive moat before  ║  │
│  ║  committing full resources.                              ║  │
│  ║                                                          ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  BLOCK 2: TRADEOFFS                                      │  │
│  │                                                           │  │
│  │  ┌─────────────────────┐  │  ┌─────────────────────────┐  │  │
│  │  │ ✅ Strengths         │  │  │ ⚠️ Concerns             │  │  │
│  │  │ ─────────────       │  │  │ ──────────              │  │  │
│  │  │                     │  │  │                          │  │  │
│  │  │ Clear pain point    │  │  │ Crowded market (Asana,  │  │  │
│  │  │ (15 interviews      │  │  │ Trello, Linear, Monday) │  │  │
│  │  │  confirmed)         │  │  │                          │  │  │
│  │  │                     │  │  │ No mobile experience    │  │  │
│  │  │ Simple 5-min setup  │  │  │ yet (top request)        │  │  │
│  │  │                     │  │  │                          │  │  │
│  │  │ $12B market,        │  │  │ Pricing not validated   │  │  │
│  │  │ 15% CAGR            │  │  │ (critical assumption)   │  │  │
│  │  │                     │  │  │                          │  │  │
│  │  │ Team has SaaS       │  │  │ 8-month runway          │  │  │
│  │  │ experience          │  │  │ (need traction fast)    │  │  │
│  │  │                     │  │  │                          │  │  │
│  │  └─────────────────────┘  │  └─────────────────────────┘  │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  BLOCK 3: SCORES MATRIX (7 Dimensions)                   │  │
│  │                                                           │  │
│  │           Problem Clarity: 85                             │  │
│  │                  \                                        │  │
│  │  Timing: 88       \         Solution Strength: 78        │  │
│  │               \    \      /                               │  │
│  │                 \   ●   /                                 │  │
│  │                   / | \                                   │  │
│  │  Team Fit: 80   /  |  \   Competition: 70                │  │
│  │               /    |    \                                 │  │
│  │                    |      Business Model: 75              │  │
│  │                    |                                      │  │
│  │              Market Size: 82                              │  │
│  │                                                           │  │
│  │  Overall Weighted Score: 72/100                           │  │
│  │                                                           │  │
│  │  Weights: Problem 20% · Market 15% · Solution 15%        │  │
│  │           Competition 15% · Business 10% · Team 10%       │  │
│  │           Timing 15%                                      │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  BLOCK 4: NEXT STEPS (Top 7 Actions)                     │  │
│  │                                                           │  │
│  │  1. Validate $29/mo pricing with 10 beta signups         │  │
│  │     Fatal assumption — no revenue = no business           │  │
│  │                                                           │  │
│  │  2. Build mobile-first prototype (top feature request)   │  │
│  │     60% of users expect mobile experience                 │  │
│  │                                                           │  │
│  │  3. Run competitor teardown on Linear and Monday.com     │  │
│  │     Identify 3 unique differentiators for positioning     │  │
│  │                                                           │  │
│  │  4. Interview 5 more teams on collaboration pain points  │  │
│  │     Current sample size too small for confidence          │  │
│  │                                                           │  │
│  │  5. Create landing page with value prop A/B test         │  │
│  │     Test 2-3 messaging angles, measure conversion         │  │
│  │                                                           │  │
│  │  6. Map customer acquisition channels (LinkedIn, PH)     │  │
│  │     Need 3 validated channels for 90-day plan             │  │
│  │                                                           │  │
│  │  7. Draft investor pitch with market sizing data         │  │
│  │     Prepare for seed round in 6 months                    │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  BLOCK 5: EVIDENCE (14 Expandable Sections)              │  │
│  │                                                           │  │
│  │  ┌── Section 1: Problem Clarity ──── 85/100 ─── [▶] ──┐  │  │
│  │  │  Clear pain point. 15/15 interviews confirm daily...  │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 2: Customer & Use Case ─ 82/100 ── [▶] ──┐  │  │
│  │  │  Early-stage startups, 5-20 person remote teams...    │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 3: Market Sizing ─────── $12B ──── [▶] ──┐  │  │
│  │  │  TAM $12B · SAM $2.4B · SOM $24M · 15% CAGR          │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 4: Competition ────── 5 found ──── [▶] ──┐  │  │
│  │  │  Asana (high) · Trello (med) · Linear (high)...       │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 5: Risks & Assumptions ── 5 risks ─ [▶] ──┐  │  │
│  │  │  Pricing not validated · Crowded market · Runway...    │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 6: MVP Scope ─────── 3 phases ──── [▶] ──┐  │  │
│  │  │  Phase 1: Core task management (4 weeks)...           │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 7: Technology Stack ── Feasible ─── [▶] ──┐  │  │
│  │  │  React + Supabase · 8-week MVP · 3 tech risks...      │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 8: Revenue Model ──── SaaS sub ──── [▶] ──┐  │  │
│  │  │  $29/mo · LTV $384 · CAC $45 · 8.5x ratio...         │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 9: Team & Hiring ──── $18k burn ─── [▶] ──┐  │  │
│  │  │  3 roles needed · Designer P1 · Growth P2...          │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 10: Key Questions ──── 6 Qs ────── [▶] ──┐  │  │
│  │  │  Will founders pay pre-product? (fatal)...            │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌── Section 11: Resources & Links ── 4 cats ─── [▶] ──┐  │  │
│  │  │  Reports · Competitors · Frameworks · Tools...        │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ... 3 more sections (see doc 03)                         │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  [ Export PDF ]  [ Share Link ]  [ Validate New Idea ]   │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
│  [Footer]                                                       │
└─────────────────────────────────────────────────────────────────┘
```

### Block 1: Verdict (Detailed)

```
╔═══════════════════════════════════════════════════════════╗
║                                                          ║
║  VERDICT                                                 ║
║                                                          ║
║      ┌──────────┐                                        ║
║      │    72    │    CAUTION                            ║
║      │   /100   │    Worth Pursuing                     ║
║      └──────────┘    ✅ Verified                         ║
║                                                          ║
║  Strong problem-solution fit with clear market demand.   ║
║  Address pricing validation and competitive moat before  ║
║  committing full resources.                              ║
║                                                          ║
╚═══════════════════════════════════════════════════════════╝

Styling:
  Border: 2px solid emerald green (#0D5F4E)
  Background: Linear gradient (cream → white)
  Padding: 48px
  Margin bottom: 32px
  Border radius: 16px
  
Score circle:
  80px diameter
  Border: 4px solid based on score
    75-100: Green
    50-74: Amber
    0-49: Red
  Font size: 32px (number), 16px (/100)
  
Verdict text:
  CAUTION, GO, NO-GO
  Font size: 24px, font-semibold
  Color matches score circle
  
Verified badge:
  ✅ Verified
  Font size: 14px
  Text-green-600
  
Summary:
  3 sentences max
  Font size: 18px
  Line height: 1.7
  Text-gray-700
```

### Block 2: Tradeoffs (Detailed)

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  TRADEOFFS                                                │
│                                                           │
│  ┌─────────────────────┐  │  ┌─────────────────────────┐  │
│  │ ✅ Strengths         │  │  │ ⚠️ Concerns             │  │
│  │ ─────────────       │  │  │ ──────────              │  │
│  │                     │  │  │                          │  │
│  │ • Bullet 1          │  │  │ • Bullet 1               │  │
│  │ • Bullet 2          │  │  │ • Bullet 2               │  │
│  │ • Bullet 3          │  │  │ • Bullet 3               │  │
│  │ • Bullet 4          │  │  │ • Bullet 4               │  │
│  │                     │  │  │                          │  │
│  └─────────────────────┘  │  └─────────────────────────┘  │
│                                                           │
└───────────────────────────────────────────────────────────┘

Styling:
  2-column grid (md:grid-cols-2)
  Gap: 24px
  Border: 1px solid gray-200
  Background: White
  Padding: 32px
  Border radius: 12px
  
Strengths column:
  Border-left: 4px solid green-500
  
Concerns column:
  Border-left: 4px solid amber-500
  
Bullets:
  • Green dot for strengths
  • Amber triangle for concerns
  Font size: 16px
  Line height: 1.8
  mb-3 between items
```

### Block 3: Scores Matrix (Detailed)

**Radar Chart Specification:**

```
Dimensions (7):
1. Problem Clarity (top)
2. Solution Strength (top-right)
3. Market Size (bottom-right)
4. Competition (bottom)
5. Business Model (bottom-left)
6. Team Fit (top-left)
7. Timing (left)

Rendering:
  SVG, 400x400px
  Center point: (200, 200)
  Radius: 150px
  
  Each dimension:
    Line from center to edge
    Label at edge + 20px
    Score point on line (0-100 → 0-150px from center)
  
  Fill area:
    Connect all score points
    Fill: rgba(13, 95, 78, 0.1) ← emerald green, 10% opacity
    Stroke: #0D5F4E, 2px
  
  Grid circles:
    25, 50, 75, 100 (gray, dashed)
```

**Weights Display:**
```
Below chart:
  "Weights: Problem 20% · Market 15% · Solution 15% ·
   Competition 15% · Business 10% · Team 10% · Timing 15%"
  
  Font size: 14px
  Text-gray-600
  Text-center
```

### Block 4: Next Steps (Detailed)

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  NEXT STEPS (Top 7 Actions)                              │
│                                                           │
│  1. Validate $29/mo pricing with 10 beta signups         │
│     Fatal assumption — no revenue = no business           │
│                                                           │
│  2. Build mobile-first prototype (top feature request)   │
│     60% of users expect mobile experience                 │
│                                                           │
│  ... 5 more                                               │
│                                                           │
└───────────────────────────────────────────────────────────┘

Styling:
  Each step is a card:
    Number: 24px, font-semibold, text-emerald-600
    Action: 18px, font-medium, text-gray-900
    Rationale: 15px, text-gray-600, italic
    mb-4 between steps
  
  Hover effect:
    Border-left changes to 4px emerald green
    Background: cream (#FAF9F7)
```

### Block 5: Evidence Sections (Accordion)

```
┌── [Icon] Section Title ──── [Badge] ────── [▶] ──┐
│  One-line preview (collapsed state)                │
└────────────────────────────────────────────────────┘

Collapsed:
  Border: 1px solid gray-200
  Background: White
  Padding: 16px 24px
  Border radius: 8px
  mb-3
  cursor-pointer
  hover: border-emerald-500, shadow-sm
  
Expanded (see Screen 5):
  Border: 2px solid emerald-500
  Padding: 24px
  [▼] Collapse button
```

---

## SCREEN 5: SECTION DEEP-DIVE

**Behavior:** Sections expand inline when clicked  
**Animation:** Smooth height transition, 300ms

### Section 3 Expanded: Market Sizing (Example)

```
┌─ 💼 Market Sizing ──────────── $12B TAM ──── [▼ Collapse] ──┐
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  ┌──────────┐      ┌──────────┐      ┌──────────┐   │    │
│  │  │   TAM    │  →   │   SAM    │  →   │   SOM    │   │    │
│  │  │  $12B    │      │  $2.4B   │      │  $24M    │   │    │
│  │  │  Total   │      │ SMB SaaS │      │  Year 1  │   │    │
│  │  └──────────┘      └──────────┘      └──────────┘   │    │
│  │                                                      │    │
│  │  SAM: 20% of TAM    SOM: 1% of SAM                  │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  Growth Rate: 15% CAGR                                       │
│  Method: Top-down from Gartner project management market     │
│  report, filtered for SMB segment in remote collaboration    │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  📎 Citations (3 sources):                            │  │
│  │                                                        │  │
│  │  1. Gartner Project Management Software Market 2025   │  │
│  │     https://gartner.com/... [View Source]             │  │
│  │                                                        │  │
│  │  2. Statista Remote Work Adoption Report 2024         │  │
│  │     https://statista.com/... [View Source]            │  │
│  │                                                        │  │
│  │  3. McKinsey Future of Work Analysis 2025             │  │
│  │     https://mckinsey.com/... [View Source]            │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  ⚙️ Source: ResearchAgent                             │  │
│  │  Model: gemini-3-flash-preview                         │  │
│  │  Tools: Google Search + URL Context                    │  │
│  │  Duration: 12.4 seconds                                │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Styling:
  Border: 2px solid emerald-500 (expanded state)
  Background: White
  Padding: 32px
  Border radius: 12px
  
TAM/SAM/SOM Funnel:
  3 boxes in a row
  Arrow (→) between them
  Background: Linear gradient (emerald 10% → emerald 50%)
  Border: 1px solid emerald-300
  Padding: 24px
  
Citations box:
  Background: Amber-50
  Border: 1px solid amber-200
  Padding: 20px
  Each citation is a link (hover: underline)
  
Source attribution:
  Background: Gray-100
  Border: 1px solid gray-200
  Padding: 16px
  Font size: 14px
  Text-gray-600
```

---

## Next Document

**03-report-sections-content.md** — All 14 sections with AI prompts and content structure

---

**Status:** Screen specifications complete  
**Next:** Define 14-section report structure
