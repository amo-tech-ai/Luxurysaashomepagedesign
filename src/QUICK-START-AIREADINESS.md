# AI Readiness Canvas - Quick Start Guide

**Status:** ✅ Ready to Use  
**Last Updated:** February 10, 2026

---

## 🚀 3 Ways to Access

### Option 1: Via Dashboard Sidebar (Recommended)

```bash
# 1. Start dev server
npm run dev

# 2. Open browser
http://localhost:5173

# 3. Navigate to dashboard (if not already there)
# Click "Dashboard" button OR set default page:
# In App.tsx line 105: useState('dashboardv2')

# 4. Expand sidebar
# Click → arrow on left edge

# 5. Click AI Readiness Canvas
# Look for Sparkles icon (✨) - 8th item in PRIMARY section
```

### Option 2: Direct Load (Fastest for Testing)

```bash
# 1. Edit App.tsx line 105
const [currentPage, setCurrentPage] = useState('ai-readiness-canvas');

# 2. Start server
npm run dev

# 3. Open browser
http://localhost:5173
# Canvas loads immediately!
```

### Option 3: URL Direct (If Hash Routing)

```
http://localhost:5173/#/ai-readiness-canvas
```

---

## 📋 What You'll See

```
┌────────────────────────────────────────────────────────────────────┐
│  CONTEXT          │  AI READINESS CANVAS  │  AI INTELLIGENCE      │
│  (Left Sidebar)   │  (9-Box Grid)         │  (Right Panel)        │
├───────────────────┼───────────────────────┼───────────────────────┤
│                   │                       │                        │
│  ASSESSMENT MODE  │  WHY?                 │  READINESS SCORE       │
│  [9-Box] ✓        │  #1 Vision            │  ┌──────────────────┐ │
│  [4-Category]     │  #3 Use Cases         │  │   85 / 100       │ │
│                   │                       │  └──────────────────┘ │
│  IMPORT           │  HOW?                 │                        │
│  [Lean Canvas]    │  #4 Data              │  STRENGTHS (3)         │
│  [Startup Profile]│  #5 Platform          │  ✓ Clear vision        │
│                   │  #6 People            │  ✓ Strong data         │
│  License Info     │                       │  ✓ Good governance     │
│  © P. Scheffer    │  WHAT?                │                        │
│  CC BY-SA 4.0     │  #2 Value Prop        │  GAPS (4)              │
│                   │  #7 Governance        │  ⚠ Legal readiness     │
│                   │  #8 Costs             │  ⚠ Talent gap          │
│                   │  #9 Metrics           │  ⚠ Culture shift       │
│                   │                       │  ⚠ Model drift         │
└───────────────────┴───────────────────────┴────────────────────────┘
```

---

## ✨ Quick Interactions

### 1. View AI Suggestions

```
Click Sparkles icon (✨) on any box
→ Right panel shows AI suggestions
→ Key questions, examples, templates, best practices
```

### 2. Generate AI Draft

```
Click box #1 (AI Vision)
→ Scroll to bottom of panel
→ Click [Generate Draft]
→ Wait 1.5 seconds
→ Draft text appears
→ Click [Apply to Box] or [Clear]
```

### 3. Switch Views

```
Click [4-Category (Lindenberg)] in left sidebar
→ Center switches to 2×2 grid (4 cards)
→ Click [9-Box] to switch back
```

### 4. Return to Dashboard

```
Click "Command Centre" in sidebar
→ Or navigate via header
```

---

## 🎨 Key Features

✅ **9-Box Canvas (Incremental Excellence):**
- WHY: Vision (#1), Use Cases (#3)
- HOW: Data (#4), Platform (#5), People (#6)
- WHAT: Value Prop (#2), Governance (#7), Costs (#8), Metrics (#9)

✅ **AI Intelligence Panel:**
- Default: Readiness score (85/100)
- Section-specific: AI suggestions per box
- Generate Draft: Simulated AI content generation

✅ **Alternative Views:**
- 9-Box (default)
- 4-Category (Lindenberg model)

✅ **Sample Data:**
- Complete SaaS use case: Customer Support Automation
- 5 prioritized use cases
- $1.02M Year 1 costs, 175% ROI
- 50+ AI prompts/questions

---

## 🐛 Troubleshooting

### Canvas Not Loading?

```bash
# Restart dev server
Ctrl+C
npm run dev

# Clear browser cache
Ctrl+Shift+R
```

### Sidebar Link Not Visible?

```bash
# Verify file saved
ls components/DashboardLayout.tsx

# Check import
grep "Sparkles" components/DashboardLayout.tsx

# Restart server
npm run dev
```

### Panel Not Switching?

```bash
# Open browser console (F12)
# Look for errors
# Check state in React DevTools
```

---

## 📖 Documentation

**Full Guides:**
- `/IMPLEMENTATION-COMPLETE.md` - Complete summary
- `/TESTING-AIREADINESS.md` - Testing guide
- `/VERIFICATION-SIDEBAR-LINK.md` - Sidebar verification
- `/docs/01-lean/09-aireadiness.md` - ASCII wireframes + prompts

**Code Files:**
- `/data/ai-readiness-types.ts` - TypeScript types
- `/data/ai-readiness-data.ts` - Sample data + AI suggestions
- `/components/ai-readiness/AIReadinessCanvas.tsx` - Main component
- `/app/ai-readiness-canvas/page.tsx` - Page wrapper

---

## ✅ 30-Second Verification

1. ✅ Start server: `npm run dev`
2. ✅ Load page: `http://localhost:5173`
3. ✅ See dashboard sidebar with Sparkles icon (✨)
4. ✅ Click "AI Readiness Canvas"
5. ✅ See 3-column layout with 9 boxes
6. ✅ Click box #1 → Panel shows AI suggestions
7. ✅ Click "Generate Draft" → Draft appears
8. ✅ Done! It works!

---

## 🎯 What's Next?

**Try These:**
- Click each of the 9 boxes to see different AI suggestions
- Toggle between 9-box and 4-category views
- Generate drafts for multiple sections
- Explore the sample data (SaaS Customer Support use case)

**Future Phases:**
- Phase 2: Make canvas editable (add/edit content)
- Phase 3: Real OpenAI API integration
- Phase 4: Multi-user collaboration
- Phase 5: Export to PDF/PowerPoint

---

**Status:** ✅ Ready to Use  
**Support:** See `/IMPLEMENTATION-COMPLETE.md` for full details  
**Template:** Incremental Excellence (Peter Scheffer) | CC BY-SA 4.0

**Enjoy! ✨**
