# Pitch Deck Editor - User Guide 📖

## Getting Started

After completing the Pitch Deck Wizard, you'll automatically enter the **Pitch Deck Editor** - a powerful 3-panel workspace where you can review, edit, and perfect your investor deck.

---

## Understanding the 3-Panel Layout

```
┌──────────────┬────────────────────────┬──────────────┐
│   LEFT       │       CENTER           │    RIGHT     │
│   PANEL      │       PANEL            │    PANEL     │
│              │                        │              │
│ Deck         │  Slide                 │  AI          │
│ Outline      │  Editor                │  Agents      │
│              │                        │              │
│ • Slides     │  • Title               │  • Coach     │
│ • Status     │  • Content             │  • Investor  │
│ • Actions    │  • Visuals             │  • Expert    │
└──────────────┴────────────────────────┴──────────────┘
```

---

## LEFT PANEL: Deck Outline

### What You See:

**Header:**
```
Deck Outline                    12 slides
✓ Strong    ⚠ Review    ✨ AI Help
```

**Slide List:**
```
1  Title Slide                    ✓
2  Problem Statement              ⚠
3  Our Solution                   ✓
4  Market Opportunity             ✨
5  Product Demo                   ✓
...
```

---

### Understanding Status Icons

#### ✅ **Green Check** - Strong (Score 80-100)
**Meaning**: This slide is investor-ready  
**What to do**: Review it once more, then move on  
**Example**: Well-structured, clear metrics, proper length

#### ⚠️ **Yellow Alert** - Review (Score 60-79)
**Meaning**: Good foundation, needs improvement  
**What to do**: Polish content, add proof points, condense  
**Example**: Too wordy, missing metrics, unclear value prop

#### 🧠 **Blue Sparkles** - AI Help (Score 0-59)
**Meaning**: AI suggestions available  
**What to do**: Check RIGHT panel for AI recommendations  
**Example**: Weak content, missing key elements, no structure

---

### Slide Actions

When you **click a slide**, action buttons appear at the bottom:

```
┌─────────────────────────────────────┐
│ 2  Problem  ⚠                       │
│ ┌─────────────────────────────────┐ │
│ │ ↑  ↓  📋 Copy  🗑️ Delete       │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Actions:**
- **↑ Move Up**: Move slide earlier in deck
- **↓ Move Down**: Move slide later in deck
- **📋 Duplicate**: Create a copy of this slide
- **🗑️ Delete**: Remove slide (must have at least 1 slide)

---

### Adding New Slides

At the bottom of the slide list:

```
┌─────────────────────────────────────┐
│ + Add Slide                         │
└─────────────────────────────────────┘
```

Click to create a blank slide with placeholder content.

---

## CENTER PANEL: Slide Editor

### What You Can Edit:

#### 1. Slide Title
```
┌─────────────────────────────────────┐
│ The Problem We're Solving           │ ← Click to edit
└─────────────────────────────────────┘
```

#### 2. Bullet Points
```
• 47M small businesses struggle with... ← Click to edit
• Average 8 hours/week wasted on...    ← Click to edit
• Current tools are fragmented...      ← Click to edit
```

#### 3. Visual Components

Some slides have specialized visuals:

**Market Slide:**
- TAM, SAM, SOM fields
- Market size indicators
- Growth metrics

**Traction Slide:**
- Live charts (line/bar graphs)
- Metric cards
- Growth percentage

**Team Slide:**
- Team member profiles
- Role descriptions
- Experience highlights

**Financials Slide:**
- Revenue projections
- Cost structure
- Unit economics

---

### Word Count Guardrails

The editor shows word count limits:

```
Total words: 45/60 (aim for ~18 per bullet)
```

**Why it matters:**
- Slides should be scannable in 5-10 seconds
- Investors don't read walls of text
- Aim for ~18 words per bullet point

**If you exceed the limit:**
```
Total words: 73/60 (aim for ~18 per bullet)
⚠️ Consider condensing
```

---

### Speaker Notes

At the bottom of each slide:

```
┌─────────────────────────────────────┐
│ Speaker Notes (optional)            │
│ ┌─────────────────────────────────┐ │
│ │ Add notes for this slide...     │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Use for:**
- Talking points during presentation
- Context you'll explain verbally
- Statistics you might reference
- Answers to potential questions

---

## RIGHT PANEL: AI Agents

### Overview

Get expert feedback from **5 specialized AI agents**, each with a unique perspective:

```
┌─────────────────────────────────────┐
│ ✨ AI Agents                        │
│ Get feedback from different angles  │
└─────────────────────────────────────┘
```

---

### Agent 1: 🔵 Pitch Coach

**Role**: Communication expert  
**Focus**: Clarity and conciseness

**Actions:**
```
┌─────────────────────────────────────┐
│ 🔵 Pitch Coach                      │
│ • Make More Concise                 │
│ • Simplify Language                 │
└─────────────────────────────────────┘
```

**When to use:**
- Slide feels too wordy
- Complex jargon or technical terms
- Need to simplify your message

**Example output:**
```
Before: "We leverage advanced AI algorithms to optimize..."
After:  "We use AI to improve..."
```

---

### Agent 2: 🟢 Investor Reviewer

**Role**: Investor perspective  
**Focus**: Proof points and credibility

**Actions:**
```
┌─────────────────────────────────────┐
│ 🟢 Investor Reviewer                │
│ • Investor-Focused Rewrite          │
│ • Add Proof Points                  │
└─────────────────────────────────────┘
```

**When to use:**
- Need stronger credibility signals
- Missing metrics or traction
- Want to highlight ROI potential

**Example output:**
```
Before: "Our product is better than competitors"
After:  "43% faster than leading alternative (based on 200-user study)"
```

---

### Agent 3: 🟣 Industry Expert

**Role**: Market specialist  
**Focus**: Benchmarks and context

**Actions:**
```
┌─────────────────────────────────────┐
│ 🟣 Industry Expert                  │
│ • Industry Benchmark                │
│ • Add Market Context                │
└─────────────────────────────────────┘
```

**When to use:**
- Need to position against competitors
- Want to cite market trends
- Missing industry-specific language

**Example output:**
```
Before: "The market is growing"
After:  "SaaS market growing 18% YoY (Gartner 2025)"
```

---

### Agent 4: 🟡 Metrics Agent

**Role**: Data analyst  
**Focus**: KPIs and validation

**Actions:**
```
┌─────────────────────────────────────┐
│ 🟡 Metrics Agent                    │
│ • Add Quantified Metric             │
│ • Validate KPIs                     │
└─────────────────────────────────────┘
```

**When to use:**
- Claims lack quantification
- Need to add hard numbers
- Want to validate growth metrics

**Example output:**
```
Before: "We have strong user growth"
After:  "3,200 users → 12,800 users (300% in 6 months)"
```

---

### Agent 5: 🩷 Design Agent

**Role**: Visual designer  
**Focus**: Layout and readability

**Actions:**
```
┌─────────────────────────────────────┐
│ 🩷 Design Agent                     │
│ • Suggest Visual Layout             │
│ • Improve Readability               │
└─────────────────────────────────────┘
```

**When to use:**
- Slide feels cluttered
- Text is hard to read
- Need better visual hierarchy

**Example output:**
```
Before: 6 bullet points, dense text
After:  3 key points with icons and spacing
```

---

### How to Use AI Agents

#### Step 1: Select a Slide
Click any slide in the LEFT panel

#### Step 2: Check Slide Strength
Look at the score at the top of the RIGHT panel:

```
┌─────────────────────────────────────┐
│ Slide Strength               65/100 │
│ ███████████░░░░░░░░░                │
│ ⚡ Good foundation, needs polish     │
└─────────────────────────────────────┘
```

#### Step 3: Review Insights

Scroll down to see prioritized feedback:

```
Insights:
⚠️ Bullets are too long (avg 28 words)
⚠️ Missing quantified metrics
✓ Clear value proposition
```

#### Step 4: Choose an Agent

Pick the agent that matches your need:
- **Too wordy?** → Pitch Coach
- **Weak credibility?** → Investor Reviewer
- **Need context?** → Industry Expert
- **Missing metrics?** → Metrics Agent
- **Layout issues?** → Design Agent

#### Step 5: Apply Suggestion

Click an action button → AI generates suggestion → Review → Click **[+ Apply]** or dismiss

---

## Common Workflows

### Workflow 1: Strengthen a Weak Slide (🧠 Status)

1. LEFT: Click slide with 🧠 icon
2. RIGHT: Check "Insights" section
3. RIGHT: Click "Investor-Focused Rewrite"
4. CENTER: Review suggested changes
5. Apply if helpful, or manually edit

---

### Workflow 2: Polish a Good Slide (⚠️ Status)

1. LEFT: Click slide with ⚠️ icon
2. CENTER: Read through content
3. RIGHT: Click "Make More Concise"
4. CENTER: Apply AI suggestions
5. RIGHT: Check if status improved to ✅

---

### Workflow 3: Reorder Deck

1. LEFT: Click slide you want to move
2. LEFT: Use ↑ or ↓ buttons
3. Repeat until deck flows logically
4. Check narrative coherence

---

### Workflow 4: Add New Content

1. LEFT: Click "+ Add Slide"
2. CENTER: Edit title and bullets
3. RIGHT: Get AI feedback as you type
4. Iterate until ✅ status

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `←` / `→` | Navigate between slides |
| `Cmd+S` / `Ctrl+S` | Save (auto-saves anyway) |
| `Cmd+Z` / `Ctrl+Z` | Undo last edit |
| `Cmd+D` / `Ctrl+D` | Duplicate current slide |
| `Delete` | Delete current slide |

---

## Understanding Slide Scoring

### How Scores Are Calculated:

Each slide gets a score from **0-100** based on:

1. **Content Quality** (40%)
   - Clear value proposition
   - Concise language
   - Proper structure

2. **Proof & Metrics** (30%)
   - Quantified claims
   - Specific examples
   - Social proof

3. **Investor Relevance** (20%)
   - Stage-appropriate content
   - Addresses investor concerns
   - Clear ROI or traction

4. **Visual Design** (10%)
   - Word count within limits
   - Bullet structure
   - Visual balance

---

### Score Ranges:

| Score | Status | What It Means |
|-------|--------|---------------|
| 80-100 | ✅ Strong | Investor-ready, minimal changes needed |
| 60-79 | ⚠️ Review | Good foundation, polish recommended |
| 0-59 | 🧠 AI Help | Needs improvement, AI suggestions available |

---

### Deck-Level Score:

Your overall deck score (shown in header) is the **average** of all slide scores:

```
Deck Score: 73/100    [Solid]
```

**Target:** Aim for 80+ overall

---

## Best Practices

### ✅ DO:

- **Keep bullets concise**: ~18 words per bullet
- **Add metrics**: Quantify every claim
- **Use simple language**: Avoid jargon
- **Tell a story**: Opening → Problem → Solution → Market → Traction → Ask
- **Iterate with AI**: Use all 5 agents for different perspectives
- **Check status icons**: Address all ⚠️ and 🧠 slides before presenting

### ❌ DON'T:

- **Auto-apply all AI suggestions**: Review first, use judgment
- **Ignore word count warnings**: Investors won't read walls of text
- **Skip speaker notes**: They help during Q&A
- **Delete all "weak" slides**: Some just need editing
- **Over-rely on AI**: Your insights and voice matter most

---

## Stage-Specific Guidance

### Pre-Seed / Seed:
- **Focus on**: Problem, solution, early traction
- **Metrics**: User interviews, beta users, early MRR
- **Ask**: $500K - $2M
- **Deck length**: 10-12 slides

### Series A:
- **Focus on**: Traction, unit economics, GTM
- **Metrics**: MRR growth, CAC/LTV, retention
- **Ask**: $5M - $15M
- **Deck length**: 12-15 slides

---

## Investor Expectations (By Slide Type)

### Problem Slide:
✓ Quantified pain point  
✓ Clear target market  
✓ Current inadequate solutions  

### Solution Slide:
✓ Clear differentiation  
✓ How it solves the problem  
✓ Unique insight or approach  

### Market Slide:
✓ TAM, SAM, SOM  
✓ Market growth rate  
✓ Why now?  

### Traction Slide:
✓ User/revenue growth chart  
✓ Key milestones  
✓ Customer testimonials  

---

## Export Options

When you're ready to present:

**Header buttons:**
- **Export**: Download as PDF, PPTX, or Google Slides
- **Overview**: See all slides in grid view
- **Present**: Full-screen presentation mode

---

## Auto-Save

Your work is automatically saved every 2 seconds:

```
💾 Saved              ← Confirmation
⏳ Saving...          ← In progress
```

Changes are stored in browser localStorage.

---

## Getting Help

### If a slide won't improve:

1. Check "Insights" in RIGHT panel for specific issues
2. Try multiple AI agents for different angles
3. Manually edit based on feedback
4. Compare to "Investor Expectations" guidance

### If you're stuck on narrative flow:

1. Review all slides in "Overview" mode
2. Look for logical gaps in story
3. Reorder slides to improve flow
4. Use "Back" button to return to wizard if needed

---

## Next Steps

Once your deck score is **80+**:

1. Click **"Export"** to download
2. Practice your pitch with speaker notes
3. Get feedback from advisors
4. Iterate based on real investor conversations

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────┐
│ PITCH DECK EDITOR QUICK REFERENCE               │
├─────────────────────────────────────────────────┤
│ LEFT PANEL                                      │
│ • ✅ = Strong (80-100)                          │
│ • ⚠️ = Review (60-79)                           │
│ • 🧠 = AI Help (0-59)                           │
│ • Click slide → Edit in center                  │
│ • Use ↑↓ to reorder                             │
├─────────────────────────────────────────────────┤
│ CENTER PANEL                                    │
│ • Click to edit title, bullets, notes           │
│ • Keep bullets ~18 words                        │
│ • Add metrics to every claim                    │
├─────────────────────────────────────────────────┤
│ RIGHT PANEL                                     │
│ • 🔵 Pitch Coach = Clarity                      │
│ • 🟢 Investor Reviewer = Proof                  │
│ • 🟣 Industry Expert = Context                  │
│ • 🟡 Metrics Agent = Data                       │
│ • 🩷 Design Agent = Layout                      │
├─────────────────────────────────────────────────┤
│ GOAL: Get all slides to ✅ (80+)                │
│ TARGET DECK SCORE: 80+                          │
└─────────────────────────────────────────────────┘
```

---

**Last Updated**: January 28, 2026  
**Version**: 2.0 (Enhanced AI Agents)
