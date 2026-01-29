# Pitch Deck Generator V2 - Quick Reference Card

## 🎯 One-Page Cheat Sheet

### Keyboard Shortcuts
```
EDITOR MODE
← →          Navigate slides
Cmd/Ctrl+S   Save (auto-saves every 2s)

PRESENTATION MODE  
← →          Previous/Next slide
Space        Next slide
N            Toggle speaker notes
ESC          Exit presentation
```

---

### Slide Quality Scoring (0-100)
```
80-100  ✅ Investor-ready
60-79   ⚡ Needs minor polish  
0-59    🔧 Requires work
```

**Score Breakdown:**
- Title: 20 pts (10-60 chars optimal)
- Bullets: 15 pts (3-5 bullets ideal)
- Metrics: 25 pts (numbers = credibility)
- Length: 20 pts (10-18 words/bullet)
- Notes: 10 pts (complete speaker notes)
- Clarity: 10 pts (specific language)

---

### Default Slide Order
```
1.  Title
2.  Problem
3.  Solution
4.  Product/How It Works
5.  Market Opportunity
6.  Traction & Metrics
7.  Business Model
8.  Competitive Landscape
9.  Go-To-Market
10. Team
11. Financial Projections (Seed+)
12. The Ask
```

---

### Visual Components
```
Market       → TAM/SAM/SOM funnel
Traction     → Metric cards + line chart
Business     → 3-tier pricing
Competition  → 2x2 matrix
GTM          → 3-phase funnel
Financials   → ARR bar chart
Ask          → Use of funds pie
```

---

### Investor Expectations by Stage
```
PRE-SEED
- 100+ users OR early revenue
- Clear problem/solution fit
- Founding team credentials

SEED  
- $10K+ MRR
- Consistent growth (>20% MoM)
- Early product-market fit signals

SERIES A
- $100K+ MRR  
- Proven PMF
- Clear path to scale
```

---

### 4-Step Wizard Flow
```
1. Startup Info
   - Company, description, target market
   - Industry, competitors
   
2. Market & Traction
   - Problem, solution, differentiation
   - Users, revenue, growth
   
3. Smart Interviewer
   - Industry-specific questions
   - AI research capabilities
   
4. Review & Generate
   - Completeness check
   - AI deck analysis
   - Generate button
```

---

### Export Formats
```
PDF   → Portable, non-editable (future)
PPTX  → Editable presentation (future)
JSON  → Backup/sharing (working now)
```

**Export Options:**
- Aspect ratio: 16:9 or 4:3
- Speaker notes: Yes/No
- Slide numbers: Yes/No

---

### Auto-Save Indicators
```
🟢 Green dot   → Saved
🟡 Yellow dot  → Saving...
```
**Saves every 2 seconds to localStorage**

---

### AI Action Buttons
```
Make More Concise         → Shorten content
Investor-Focused Rewrite  → Optimize for VCs
Add Metric               → Insert data point
Expand with Example       → Add context
Industry Benchmark        → Compare to market
```

---

### Navigation Modes
```
EDITOR       → 3-panel editing (default)
OVERVIEW     → Grid view of all slides  
PRESENTATION → Full-screen presenter
DASHBOARD    → Manage multiple decks
```

---

### Best Practices
```
✓ Use numbers (metrics add credibility)
✓ Keep bullets 15-18 words
✓ Add speaker notes
✓ Show, don't tell (use visuals)
✓ Update monthly (fresh data)
✓ Practice in Presentation Mode

✗ Avoid vague language
✗ Don't exceed 20 words/bullet
✗ Don't skip traction data
✗ Don't overcomplicate
```

---

### Quick Wins
```
1. Add metrics to every slide → +25 pts
2. Write 3-5 bullets per slide → +15 pts
3. Add speaker notes → +10 pts  
4. Use specific language → +10 pts
5. Optimize title length → +20 pts
```

---

### Industry Helpers
```
Market Size  → getMarketSize(industry)
Growth Rate  → getMarketGrowth(industry)
Target ACV   → getACV(industry)
Competitors  → getRelevantCompanies(industry)
```

---

### Slide Management
```
↑ ↓       Reorder
📋        Duplicate  
🗑️        Delete
➕        Add new
👁️        View in overview
🎤        Present
```

---

### File Locations
```
Main App:  /app/pitch-deck/page-v2.tsx
Charts:    /components/pitch-deck/charts/
Docs:      /PITCH_DECK_*.md
```

---

### Support Resources
```
User Guide:     /PITCH_DECK_USER_GUIDE.md
Tech Ref:       /PITCH_DECK_TECHNICAL_REFERENCE.md
Implementation: /PITCH_DECK_IMPLEMENTATION.md  
Checklist:      /PITCH_DECK_PRODUCTION_CHECKLIST.md
```

---

### Common Issues
```
Q: Slides not saving?
A: Check localStorage quota, clear browser cache

Q: Charts not showing?
A: Verify Recharts is installed, refresh page

Q: Keyboard shortcuts not working?  
A: Don't use while typing, check focus state

Q: Export button says "coming soon"?
A: PDF/PPTX need backend integration (use JSON for now)
```

---

### Launch Status
```
✅ MVP Complete
✅ Production Ready
✅ All Core Features Working
✅ Documentation Complete
🔄 PDF/PPTX Integration (Phase 2)
🔄 AI Content Generation (Phase 2)
🔄 Cloud Storage (Phase 2)
```

---

**Version**: 2.0.0  
**Updated**: January 27, 2026  
**Status**: 🚀 Ready to Launch
