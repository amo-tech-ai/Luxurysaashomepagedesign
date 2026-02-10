# StartupAI - Lean System Sitemap

**Last Updated:** February 8, 2026

---

## 🗺️ Navigation Structure

### **PRIMARY**
Core tools for startup validation and strategic planning.

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| ▸ **Command Centre** | `/dashboardv2` | Main dashboard with health score, metrics, and AI insights | ✅ Active |
| **Startup Validator** | `/startup-validator` | AI-powered startup validation and risk assessment | ✅ Active |
| **Lean Canvas** | `/lean-canvas` | One-page business model canvas | ✅ Active |

---

### **EXECUTION**
Task management and roadmap planning tools.

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| **90-Day Plan** | `/90-day-plan` | Quarterly roadmap and milestone tracking | ✅ Active |
| **Kanban Board** | `/kanban` | Visual workflow management with drag-and-drop | ✅ Active |
| **Tasks** | `/tasks` | Comprehensive task list with filters and priorities | ✅ Active |

---

### **INTELLIGENCE**
Market research and opportunity analysis.

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| **Market Research** | `/market-research-hub` | Competitive analysis and market sizing | ✅ Active |
| **Opportunity Canvas** | `/opportunity-canvas` | ICP definition and problem-solution validation | ✅ Active |

---

### **FUNDRAISING**
Investor relations and capital raising tools.

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| **Investor Strategy** | `/investor-strategy` | Fundraising readiness and investor targeting | ✅ Active |
| **Pitch Deck** | `/pitch-deck` | Investor presentation builder | ✅ Active |
| **CRM / Investors** | `/crm` | Investor pipeline and relationship management | ✅ Active |

---

### **LIBRARY**
Document storage and due diligence materials.

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| **Reports** | `/reports` | Generated reports and analyses | ✅ Active |
| **Data Room** | `/data-room` | Investor due diligence document repository | ✅ Active |

---

### **SETTINGS**
Personal and workspace configuration.

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| **Profile** | `/startup-profile` | Startup information and social links (16 fields) | ✅ Active |
| **Workspace** | `/workspace` | Account settings, notifications, security | ✅ Active |

---

## 🧭 User Journey Map

### **First-Time User Flow:**
```
1. Land on Command Centre (default route)
   ↓
2. See completion status (65%) and missing fields
   ↓
3. Click "Complete fields" → Navigate to Profile
   ↓
4. Fill out startup information
   ↓
5. Return to Command Centre (see improved score)
   ↓
6. Follow "Next Best Action" recommendations
```

### **Validation Journey:**
```
Command Centre → Startup Validator → Validator Report
                                   ↓
                            View Risks & Opportunities
                                   ↓
                            Update Lean Canvas
                                   ↓
                            Define Market Research
```

### **LEAN Canvas Flow:**
```
Command Centre → Lean Canvas (collapsible sidebar)
                     ↓
              Fill 11 sections
                     ↓
              Continue to Opportunity Canvas (collapsible sidebar)
                     ↓
              Define ICP and validation strategy
                     ↓
              Generate 90-Day Plan (collapsible sidebar)
                     ↓
              Execute with Kanban board
```

---

## 🎯 Default States

### **Sidebar:**
- **Desktop:** Collapsed by default (240px → 60px)
- **Tablet:** Collapsed by default
- **Mobile:** Hidden (hamburger menu)

### **Command Centre Indicators:**
- **Active Route:** Shows ▸ symbol
- **Current Page:** Emerald background (#E8F4F1)
- **Hover State:** White background, emerald text

---

## 🔄 Routing Logic

### **Navigation Handler:**
```typescript
onNavigate(page: string) {
  // Maps page IDs to routes
  switch(page) {
    case 'dashboardv2': navigate('/dashboardv2')
    case 'startup-validator': navigate('/startup-validator')
    case 'lean-canvas': navigate('/lean-canvas')
    case '90-day-plan': navigate('/90-day-plan')
    case 'kanban': navigate('/kanban')
    case 'tasks': navigate('/tasks')
    case 'market-research-hub': navigate('/market-research-hub')
    case 'opportunity-canvas': navigate('/opportunity-canvas')
    case 'investor-strategy': navigate('/investor-strategy')
    case 'pitch-deck': navigate('/pitch-deck')
    case 'crm': navigate('/crm')
    case 'reports': navigate('/reports')
    case 'data-room': navigate('/data-room')
    case 'startup-profile': navigate('/startup-profile')
    case 'workspace': navigate('/workspace')
  }
}
```

---

## 📊 Page Dependencies

### **Completion Flow:**
1. **Profile** → Unlocks accurate metrics in **Command Centre**
2. **Lean Canvas** → Enables **Startup Validator**
3. **Market Research** → Informs **Opportunity Canvas**
4. **Investor Strategy** → Requires **Pitch Deck** + **Data Room**
5. **Tasks** → Syncs with **Kanban Board** + **90-Day Plan**

### **Data Flow:**
```
Profile Data (16 fields)
    ↓
Command Centre (calculates health score)
    ↓
Validator (uses profile for validation)
    ↓
Reports (generates analysis)
    ↓
Data Room (exports for investors)
```

---

## 🎨 Design Consistency

### **All Dashboard Pages Use:**
- ✅ DashboardLayout component
- ✅ Shared sidebar navigation
- ✅ Collapsible left menu (default: collapsed)
- ✅ Consistent header with timestamp
- ✅ Luxury color palette (beige/emerald)
- ✅ Active state indicators
- ✅ Breadcrumb trail

### **Color System:**
- Background: `#FAF9F7` (cream)
- Sidebar: `#F5F3EF` (beige)
- Primary: `#0d5f4e` (emerald)
- Secondary: `#6b9d89` (sage)
- Accent: `#0E3E1B` (dark green)
- Border: `#E8E6E1` (divider)

---

## 🚀 Implementation Status

**Total Pages:** 15 pages
**Routes Active:** 15/15 (100%)
**Shared Layout:** DashboardLayout component
**Sidebar State:** Collapsible (default: collapsed)
**Navigation:** All links verified and functional

---

## 📱 Responsive Behavior

### **Desktop (≥1024px):**
- Sidebar: Collapsible (240px expanded, 60px collapsed)
- Layout: 3-column (Sidebar | Main | Optional Right Panel)

### **Tablet (768px - 1023px):**
- Sidebar: Overlay (slides in from left)
- Layout: Full-width main content

### **Mobile (<768px):**
- Sidebar: Drawer (hamburger menu)
- Layout: Single column, full-width

---

## 🔗 Quick Links

- [Command Centre Dashboard](/dashboardv2)
- [Startup Validator](/startup-validator)
- [Lean Canvas](/lean-canvas)
- [90-Day Plan](/90-day-plan)
- [Kanban Board](/kanban)
- [Tasks](/tasks)
- [Market Research](/market-research-hub)
- [Opportunity Canvas](/opportunity-canvas)
- [Investor Strategy](/investor-strategy)
- [Pitch Deck](/pitch-deck)
- [CRM / Investors](/crm)
- [Reports](/reports)
- [Data Room](/data-room)
- [Profile](/startup-profile)
- [Workspace](/workspace)

---

**Last Verified:** February 8, 2026
**System Status:** ✅ All routes active and verified