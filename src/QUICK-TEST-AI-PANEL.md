# AI Suggestions Panel - Quick Test Guide

**Status:** ✅ Ready to Test  
**Screen:** Validation Board  
**Time to Test:** 5 minutes

---

## 🚀 Quick Start

```bash
# 1. Start dev server
npm run dev

# 2. Navigate to Validation Board
# In App.tsx line 105, set:
const [currentPage, setCurrentPage] = useState('validate-canvas');

# OR use dashboard sidebar:
# Dashboard → Validation Board
```

---

## ✨ What to Look For

### Every Card Has ✨ Icon

```
📋 Pivot Log                           [✨] [▼]
   (Latest pivot info)

🎯 Current Bet                         [✨] [Edit]
   Audience: Solo SaaS founders
   Pain: No clear roadmap

Core Assumptions:
   Will they switch from Canva?       [✨]
   Will they pay $99/mo?              [✨]
   Can we build MVP in 3 months?      [✨]
```

**Look for:**
- ✅ Pivot Log: ✨ in header (before collapse arrow)
- ✅ Current Bet: ✨ in header (before Edit button)
- ✅ Each Assumption: ✨ next to assumption text

---

## 🎯 5-Minute Test Flow

### Test 1: Open Panel (30 seconds)

```
1. Click ✨ on Current Bet card
2. ✅ Panel slides in from right (420px width)
3. ✅ Current Bet card shows emerald border + ring
4. ✅ Loading spinner appears for 1.5 seconds
5. ✅ Suggestions appear with 4 sections:
   - Summary
   - Suggested Improvements (3 bullets)
   - Next Experiment Ideas (2 experiments)
   - Risks & Unknowns (3 warnings)
```

### Test 2: Switch Cards (30 seconds)

```
1. Click ✨ on first Assumption card
2. ✅ Panel updates (NO flicker/close/reopen)
3. ✅ Current Bet border returns to normal
4. ✅ Assumption card shows emerald border
5. ✅ Panel shows different suggestions (assumption-specific)
```

### Test 3: Add Suggestion (30 seconds)

```
1. Scroll to "Suggested Improvements" section
2. Click "+ Add to Card" on first suggestion
3. ✅ Alert appears with suggestion text
4. ✅ Console logs: { suggestionId, text, target: 'card' }
```

### Test 4: Regenerate (30 seconds)

```
1. Scroll to bottom of panel
2. Click [Regenerate] button
3. ✅ Loading spinner appears again
4. ✅ New suggestions generate (same card, new ideas)
```

### Test 5: Copy All (30 seconds)

```
1. Click [Copy All] button in footer
2. Open text editor
3. Paste (Ctrl+V / Cmd+V)
4. ✅ All suggestions copied as formatted text:
   AI Suggestions for: [Card Title]
   
   Summary: ...
   
   Improvements:
   1. ...
   2. ...
   
   Experiments:
   1. ...
   2. ...
   
   Risks & Unknowns:
   1. ...
   2. ...
```

### Test 6: Close Panel (30 seconds)

```
1. Click X in panel header
2. ✅ Panel closes smoothly
3. ✅ Active card border returns to normal
4. ✅ No selected state
```

---

## ✅ Visual Checklist

**Icons:**
```
✅ ✨ icon visible on every card
✅ Icon color: Emerald (#0d5f4e) when inactive
✅ Icon background: Filled emerald when active
✅ Icon size: 16px (w-4 h-4)
```

**Active States:**
```
✅ Selected card: border-[#0d5f4e] ring-2 ring-[#0d5f4e]/20
✅ Riskiest assumption: Keeps red border (not overridden)
✅ Only ONE card active at a time
```

**Panel:**
```
✅ Width: 420px (fixed)
✅ Position: Right side of screen
✅ Slides in smoothly (no jump)
✅ Header: "AI Suggestions" with ✨ icon
✅ Entity type badge: "Current Bet" / "Assumption" / "Pivot Log"
✅ Footer: [Regenerate] [Copy All] buttons
```

---

## 🐛 Common Issues

### Panel Not Opening?

```bash
# Check console for errors (F12)
# Verify AISuggestionsPanel imported:
grep "AISuggestionsPanel" app/validate/canvas/page.tsx

# Restart dev server:
npm run dev
```

### ✨ Icon Not Visible?

```bash
# Check Sparkles imported in cards:
grep "Sparkles" app/validate/canvas/components/CurrentBetCard.tsx
grep "Sparkles" app/validate/canvas/components/AssumptionCard.tsx
grep "Sparkles" app/validate/canvas/components/PivotLogCard.tsx
```

### Panel Content Empty?

```bash
# Check mock data function:
# Open: app/validate/canvas/components/AISuggestionsPanel.tsx
# Search for: getMockSuggestions
# Verify it returns data for all entity types
```

---

## 📊 What Each Card Type Shows

### Pivot Log AI Suggestions

**Summary:**
"This pivot shows learning from invalidated assumptions..."

**Suggestions:**
- Add specific metrics/evidence that triggered pivot
- Document what you learned
- Update related assumptions

**Experiments:**
- Validate New Direction (5 interviews)

**Risks:**
- Multiple pivots may indicate unclear fit
- Team losing confidence

### Current Bet AI Suggestions

**Summary:**
"Your current bet is well-defined..."

**Suggestions:**
- Add quantifiable metrics to pain point
- Include frequency or trigger of pain
- Specify context where pain is most acute

**Experiments:**
- Pain Severity Interview (5 founders)
- Willingness-to-Pay Test (Landing Page)

**Risks:**
- Pain may not be severe enough
- Solution may already exist
- Audience may be too small

### Assumption AI Suggestions

**Summary:**
"This assumption is [high/medium/low]-risk..."

**Suggestions:**
- Make assumption more specific and measurable
- Define what "validated" looks like
- Identify cheapest/fastest test first

**Experiments:**
- Problem Interview (10 target users)
- Concierge MVP (3 customers)

**Risks:**
- Say vs. pay gap
- Subset problem
- Competition exists

---

## ✅ Done When

```
✅ All ✨ icons visible
✅ Clicking any ✨ opens/updates panel
✅ Active card highlighted with emerald border
✅ Loading state shows for 1.5s
✅ Suggestions load correctly
✅ "+ Add to Card" shows alert
✅ [Regenerate] works
✅ [Copy All] works
✅ X closes panel
✅ No console errors
```

---

## 📝 Quick Notes

**Panel Behavior:**
- Does NOT navigate away (stays on same page)
- Updates content if already open (no flicker)
- Only ONE panel exists
- Closes when you click X or select another card

**Mock Data:**
- AI generation simulated (1.5s delay)
- Different suggestions per entity type
- Realistic content based on best practices

**Production Ready:**
- Replace mock function with real OpenAI API call
- Update "+ Add to Card" to actually modify card content
- Persist changes to database (Supabase)

---

**Status:** ✅ Ready for user testing  
**Est. Test Time:** 5-10 minutes  
**Documentation:** `/VALIDATION-BOARD-AI-COMPLETE.md`

**Happy testing! ✨**
