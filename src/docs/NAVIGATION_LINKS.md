# Navigation Links - Complete Reference

## 📍 All Navigation Entry Points

### **Dashboard Sidebar (/app/dashboard/main/page.tsx)**

#### Main Menu
- ✅ **Dashboard** → `dashboard-main`
- ✅ **Onboarding Wizard** → `onboarding-v2` *(NEW)*
- ⏳ **Projects** → Placeholder (badge: 3)
- ⏳ **Tasks** → Placeholder (badge: 12)
- ✅ **Events** → `events`

#### Tools
- ⏳ **CRM** → Placeholder
- ⏳ **Documents** → Placeholder
- ✅ **Lean Canvas** → `lean-canvas`
- ⏳ **Investors** → Placeholder

#### Account
- ⏳ **User Profile** → Placeholder
- ⏳ **Company** → Placeholder

### **Kanban Dashboard Sidebar (/components/dashboard/LeftNav.tsx)** ✅ UPDATED

#### Back to Home
- ✅ **Back to Home** → `home` (shortcut: H)

#### Project Section
- ✅ **Onboarding Wizard** → `onboarding-v2` (shortcut: O) ⭐ NEW
- ✅ **Main Dashboard** → `dashboard-main` (shortcut: M)
- ✅ **Kanban Board** → `dashboard` (shortcut: K)
- ⏳ **Agent Terminals** → `dashboard/agents` (shortcut: A)
- ⏳ **Insights** → `dashboard/insights` (shortcut: I)
- ✅ **Roadmap** → `dashboard-roadmap` (shortcut: R)
- ✅ **Ideation** → `dashboard-ideation` (shortcut: D)
- ✅ **Lean Canvas** → `lean-canvas` (shortcut: L)
- ⏳ **Content** → `dashboard/content` (shortcut: C)

#### Settings
- ⏳ **Settings** → `dashboard/settings` (shortcut: ⚙)

### **Footer (/components/Footer.tsx)**

#### Product Section
- ⏳ **Features** → `#`
- ✅ **Onboarding Wizard** → `onboarding-v2` *(UPDATED)*
- ✅ **Main Dashboard** → `dashboard-main`
- ✅ **Kanban Dashboard** → `dashboard`
- ✅ **Lean Canvas** → `lean-canvas`
- ✅ **Lean Canvas with AI** → `lean-canvas-ai`
- ✅ **How it works** → `how-it-works`
- ✅ **Pitch Deck Generator** → `pitch-deck`
- ⏳ **Pricing** → `#`
- ⏳ **Security** → `#`
- ✅ **Events** → `events`

#### Resources Section (partial)
- ⏳ **Documentation** → `#`
- ⏳ **Help Center** → `#`
- ⏳ **Community** → `#`
- ⏳ **Founder Stories** → `#`
- ⏳ **API Reference** → `#`
- ✅ **Site Map** → `sitemap`
- ✅ **AI Landscape** → `ai-landscape`
- ✅ **AI Adoption Report 2025** → `ai-adoption-2025`
- ✅ **AI Industry Adoption 2025** → `ai-industry-adoption`
- ✅ **AI Jobs & Future of Work 2024-2026** → `ai-jobs-future-work`
- ✅ **AI Jobs & Future of Work V2** → `ai-jobs-v2`
- ✅ **AI Investment Hubs 2025** → `ai-hubs`
- ✅ **AI Startup Products 2024-2026** → `ai-products`
- ✅ **AI Product Intelligence V2** → `ai-products-v2`

---

## 🎯 Onboarding Wizard Routes

### **Main Entry Point**
- **Route:** `onboarding-v2`
- **URL:** `/onboarding-v2`
- **File:** `/app/onboarding-v2/page.tsx`
- **Component:** `OnboardingWizardV2`

### **4-Step Wizard Structure**
1. **Step 1: Context & Enrichment** ✅ COMPLETE
   - Primary fields: Company name, description, target market
   - Enrichment: Website URL, LinkedIn, additional URLs
   - AI-detected: Industry, business model, stage
   
2. **Step 2: AI Analysis** ⏳ PLACEHOLDER
   - Market analysis
   - Competitive research
   - Readiness scoring
   
3. **Step 3: Smart Q&A** ⏳ PLACEHOLDER
   - Interactive chat-style interview
   - 3-5 adaptive questions
   - Traction, revenue, fundraising topics
   
4. **Step 4: Review & Launch** ⏳ PLACEHOLDER
   - Startup summary
   - Investor readiness score
   - Top 3 gaps and recommendations
   - 30-60-90 day plan

---

## 📂 File Locations

### **Onboarding V2 Components**
```
/components/onboarding-v2/
├── OnboardingWizardV2.tsx       # Main container
├── Stepper.tsx                  # Top 4-step progress bar
├── ProgressIndicator.tsx        # Left circular progress dial
├── AIAssistantPanel.tsx         # Right AI assistant panel
└── Step1ContextEnrichment.tsx   # Step 1 form

/app/onboarding-v2/
└── page.tsx                     # Page wrapper
```

### **Dashboard Files**
```
/app/dashboard/
├── main/page.tsx                # Main dashboard (3-panel)
├── page.tsx                     # Kanban dashboard
├── ideation/page.tsx            # Ideation dashboard
└── roadmap/page.tsx             # Roadmap dashboard
```

### **Navigation Files**
```
/components/
├── Footer.tsx                   # Site footer with all links
└── MegaMenu.tsx                 # Homepage mega menu

/App.tsx                         # Main routing logic
```

---

## 🔄 Navigation Flow

### **Homepage → Onboarding**
```
Homepage CTA "Start Your Strategy Session"
  ↓
Route: onboarding-v2
  ↓
Step 1: Context & Enrichment (current)
  ↓
Step 2: AI Analysis (placeholder)
  ↓
Step 3: Smart Q&A (placeholder)
  ↓
Step 4: Review & Launch (placeholder)
  ↓
Dashboard (completion)
```

### **Dashboard → Onboarding**
```
Dashboard Sidebar
  ↓
Click "Onboarding Wizard"
  ↓
Route: onboarding-v2
  ↓
Wizard Step 1
```

### **Footer → Onboarding**
```
Scroll to Footer
  ↓
Product Section
  ↓
Click "Onboarding Wizard"
  ↓
Route: onboarding-v2
  ↓
Wizard Step 1
```

---

## ✅ Integration Status

### **Completed Integrations**
- ✅ App.tsx routing (onboarding-v2)
- ✅ Dashboard sidebar link
- ✅ Footer product section link
- ✅ Step 1 component fully functional
- ✅ AI Assistant panel
- ✅ Progress indicator
- ✅ Stepper component
- ✅ Form validation

### **Pending Integrations**
- ⏳ Step 2: AI Analysis
- ⏳ Step 3: Smart Q&A
- ⏳ Step 4: Review & Launch
- ⏳ Homepage CTA button (currently points to old onboarding)
- ⏳ Save & continue later functionality
- ⏳ Backend API for AI enrichment

---

## 🎨 Design Consistency

### **Label Naming**
- **Dashboard Sidebar:** "Onboarding Wizard"
- **Footer:** "Onboarding Wizard"
- **Page Title:** "Onboarding - StartupAI"
- **Internal Route:** `onboarding-v2`

### **Icon Usage**
- **Icon:** Target (from lucide-react)
- **Color:** Matches emerald theme (#0D5F4E)
- **Placement:** Left of label in sidebar

---

## 📊 Route Analytics

### **Active Routes (✅)**
Total: 20+ routes

**Core Pages:**
- home
- onboarding-v2 *(NEW)*
- dashboard-main
- dashboard
- dashboard-ideation
- dashboard-roadmap
- events

**Canvas Pages:**
- lean-canvas
- lean-canvas-ai

**Pitch Pages:**
- pitch-deck
- pitch-deck-wizard
- pitch-deck-ai-demo
- pitch-deck-ai-enhanced

**How It Works Pages:**
- how-it-works
- how-it-works-pitch
- how-pitch-works
- how-it-works-v2
- how-it-works-v3

**Infographic Pages:**
- ai-landscape
- ai-adoption-2025
- ai-industry-adoption
- ai-jobs-future-work
- ai-jobs-v2
- ai-hubs
- ai-products
- ai-products-v2

**Utility Pages:**
- sitemap

---

## 🔗 Quick Reference URLs

### **Onboarding**
- `/onboarding-v2` → Context & Enrichment (Step 1)

### **Dashboards**
- `/dashboard/main` → Main Dashboard (3-panel)
- `/dashboard` → Kanban Dashboard
- `/app/dashboard/ideation` → Ideation Dashboard
- `/app/dashboard/roadmap` → Roadmap Dashboard

### **Canvas**
- `/lean-canvas` → Lean Canvas (basic)
- `/lean-canvas-ai` → Lean Canvas with AI agents

### **Events**
- `/events` → Events listing page

### **Infographics**
- `/ai-landscape` → AI Landscape
- `/infographics/ai-adoption-2025` → AI Adoption Report
- `/infographics/ai-industry-adoption` → AI Industry Adoption
- `/infographics/ai-jobs` → AI Jobs Future Work
- `/infographics/ai-jobs-v2` → AI Jobs V2
- `/infographics/ai-hubs` → AI Investment Hubs
- `/infographics/ai-products` → AI Startup Products
- `/infographics/ai-products-v2` → AI Product Intelligence V2

### **Pitch**
- `/pitch-deck` → Pitch Deck Generator
- `/how-it-works-pitch` → How Pitch Works
- `/how-pitch-works` → How Pitch Works (Screenshots)

### **Utility**
- `/sitemap` → Site Map Page

---

## 🎯 Navigation Best Practices

### **For Developers**
1. Always use `onNavigate?.('route-name')` for internal navigation
2. Use exact route names from App.tsx type definitions
3. Add `isRoute: true` and `routeName: 'xxx'` in footer links
4. Test navigation from multiple entry points

### **For Designers**
1. Keep label names consistent across all nav points
2. Use Target icon for onboarding across the app
3. Emerald color (#0D5F4E) for active/hover states
4. Badge counts on sidebar items (optional)

### **For Content Writers**
1. "Onboarding Wizard" is the official name
2. Keep CTA button text action-oriented
3. Use "Context & Enrichment" for Step 1
4. Maintain luxury, premium tone

---

**Last Updated:** January 27, 2026  
**Status:** ✅ Production Ready (Onboarding Step 1)