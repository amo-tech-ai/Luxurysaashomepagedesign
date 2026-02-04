# Diagram Pages Summary

**Created**: January 31, 2026  
**Status**: Production Ready

---

## Overview

Two distinct diagram showcase pages have been created to visualize StartupAI's workflows and AI architecture:

1. **Flow Diagrams** — Product-focused flows (10 total: 5 product + 5 AI)
2. **AI Agent Flows** — Technical AI patterns (5 specialized flows)

---

## Page 1: Flow Diagrams

### Route & Access
- **URL**: `/diagrams/flows`
- **File**: `/app/diagrams/flows/page.tsx`
- **Footer Link**: Diagrams → "Flow Diagrams"

### Content (10 Flows)

**Product Flows (5)**:
1. Investor materials (idea → deck)
2. Lead intelligence (leads → outreach)
3. Founder onboarding (sign-up → live profile)
4. Playbook execution (choose → progress)
5. Market insight (URLs → strategy)

**AI Agent Flows (5)**:
6. ReAct reasoning loop (observe → think → act)
7. RAG (question → answer with citations)
8. Tool-use agent (request → response)
9. Multi-agent orchestration (task → specialists → result)
10. Human-in-the-loop (draft → review → publish)

### Design
- **Hero Background**: Beige (#FAF9F7)
- **Audience**: General users, founders, product buyers
- **Tone**: "How StartupAI works"
- **Structure**: Mixed product + AI flows

---

## Page 2: AI Agent Flows

### Route & Access
- **URL**: `/diagrams/ai-flows`
- **File**: `/app/diagrams/ai-flows/page.tsx`
- **Footer Link**: Diagrams → "AI Agent Flows"

### Content (5 Flows)

**All Technical AI Patterns**:
1. ReAct reasoning loop — How the agent reasons
2. RAG — From question to grounded answer
3. Tool-use agent — How the agent uses tools
4. Multi-agent orchestration — How specialist agents work together
5. Human-in-the-loop — From agent draft to published output

### Design
- **Hero Background**: Dark Green (#0E3E1B)
- **Audience**: Developers, technical buyers, architects
- **Tone**: "How the agent works"
- **Structure**: AI-only flows with detailed context notes

---

## Key Differences

| Feature | Flow Diagrams | AI Agent Flows |
|---------|--------------|----------------|
| **Focus** | Product workflows | AI architecture patterns |
| **Flows** | 10 (5 product + 5 AI) | 5 (AI only) |
| **Hero Color** | Light beige | Dark green |
| **Audience** | General | Technical |
| **Context Notes** | Brief | Detailed |
| **Use Case** | Marketing, onboarding | Developer docs, enterprise sales |

---

## Design System

### Shared Elements
- **Typography**: BCG consulting style (light serif headlines, clean sans-serif body)
- **Color Palette**: Beige/cream backgrounds, emerald green accents
- **Layout**: Generous whitespace, horizontal desktop / vertical mobile
- **Arrows**: Unicode (→ and ↓)
- **Node Style**: Bordered boxes with subtle shadows
- **Outcome Nodes**: Green background (#DCF9E3) with green border (#0E3E1B)

### Brand Compliance
- ✅ No blues, purples, or reds
- ✅ Emerald/sage green accents only
- ✅ Architectural layouts
- ✅ "Thinking visuals" (diagrams, not photos)
- ✅ BCG aesthetic

---

## Implementation Details

### Files Created
```
/app/diagrams/flows/page.tsx          # Page 1: Mixed flows
/app/diagrams/ai-flows/page.tsx       # Page 2: AI-only flows
/docs/design/mockups/02-flow-diagrams.md    # Product flows specs
/docs/design/mockups/03-flowai.md           # AI flows specs
/docs/design/mockups/04-ai-flows-page.md    # Page 2 documentation
/docs/design/mockups/VERIFICATION.md        # Page 1 verification
```

### Routes Configured
```typescript
// App.tsx
if (currentPage === 'diagrams-flows') {
  return <FlowDiagramsPage />;
}

if (currentPage === 'diagrams-ai-flows') {
  return <AIFlowsPage />;
}
```

### Footer Links
```typescript
// Footer.tsx
diagrams: {
  title: 'Diagrams',
  links: [
    { label: 'Flow Diagrams', href: '/diagrams/flows', isRoute: true, routeName: 'diagrams-flows' },
    { label: 'AI Agent Flows', href: '/diagrams/ai-flows', isRoute: true, routeName: 'diagrams-ai-flows' },
  ],
}
```

---

## How to Access

### Navigation Path
1. Load any StartupAI page
2. Scroll to footer
3. Find "Diagrams" column (between "Company" and "Resources")
4. Click either:
   - **"Flow Diagrams"** → Mixed product + AI flows
   - **"AI Agent Flows"** → Technical AI patterns only

### Important Note
- ✅ **Clicking footer links works** (triggers client-side routing)
- ❌ **Typing URL directly does NOT work** (client-side routing limitation)

---

## Use Cases by Page

### Flow Diagrams (`/diagrams/flows`)
- Marketing website ("How It Works" section)
- Customer onboarding (product education)
- Sales presentations (general audience)
- Homepage feature highlights
- Help center / knowledge base

### AI Agent Flows (`/diagrams/ai-flows`)
- Developer documentation (API/architecture)
- Enterprise sales (technical buyers)
- Technical blog posts
- Recruiting (engineering culture)
- Compliance / security reviews

---

## Future Enhancements

### Short-Term
- [ ] Add navigation bar to both pages (currently footer-only)
- [ ] Add breadcrumbs (Home → Diagrams → [Page])
- [ ] Improve ARIA labels for accessibility
- [ ] Add print styles for PDF export

### Medium-Term
- [ ] Interactive hover states (expand context on hover)
- [ ] Animated transitions (entry animations for nodes)
- [ ] Download as PNG/SVG (export flows as images)
- [ ] Code examples (link flows to API documentation)

### Long-Term
- [ ] Interactive diagram builder (let users customize flows)
- [ ] Video walkthroughs (animated explanations)
- [ ] Comparison tool ("When to use X vs Y")
- [ ] Performance metrics (add latency/accuracy stats)

---

## Quality Assurance

### Page 1: Flow Diagrams
- ✅ 10 flows implemented
- ✅ Responsive design (mobile + desktop)
- ✅ Alternating backgrounds (rhythm)
- ✅ Footer link working
- ✅ Route configured
- ✅ Design system compliant

### Page 2: AI Agent Flows
- ✅ 5 flows implemented
- ✅ Dark hero section (contrast)
- ✅ Context notes added (technical detail)
- ✅ Footer link working
- ✅ Route configured
- ✅ Design system compliant

---

## Documentation

### Design Specs
- `/docs/design/mockups/02-flow-diagrams.md` — Product flow content
- `/docs/design/mockups/03-flowai.md` — AI flow content
- `/docs/design/mockups/04-ai-flows-page.md` — AI page documentation
- `/docs/design/mockups/VERIFICATION.md` — Page 1 verification report

### Template
- `/docs/design/templates/01-flow-diagram.md` — Flow diagram design template (referenced by specs)

---

## Contact & Maintenance

**Owner**: Design Team  
**Last Updated**: January 31, 2026  
**Next Review**: Q2 2026

For questions or updates, refer to:
- Design system documentation: `/docs/design/07-style-guide.md`
- Component library: `/components/`
- Footer configuration: `/components/Footer.tsx`

---

**Status**: ✅ Both pages production ready and verified
