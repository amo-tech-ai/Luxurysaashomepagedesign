# Mega Menu System - File Structure Reference

**Quick Reference Guide for Navigation System**

---

## 📁 FILE TREE

```
/
├── lib/
│   └── navigation-data.ts          # ⭐ Navigation data (47 pages)
│
├── components/
│   └── navigation/
│       ├── NavigationBar.tsx       # Main navigation bar
│       ├── ProductMegaMenu.tsx     # Product mega menu (4-col)
│       ├── ResourcesMegaMenu.tsx   # Resources mega menu (3-col)
│       ├── CompanyDropdown.tsx     # Company dropdown
│       ├── MobileMenu.tsx          # Mobile full-screen menu
│       └── index.ts                # Export file
│
├── App.tsx                         # Main app (integrated nav)
│
└── docs/
    ├── mega-menu.md                # Original design wireframe
    ├── mega-menu-implementation.md # Implementation details
    └── mega-menu-files.md          # This file
```

---

## 📄 FILE DESCRIPTIONS

### **1. `/lib/navigation-data.ts`** (⭐ START HERE)

**Purpose:** Single source of truth for all navigation data

**What it contains:**
- Product navigation (Build, Fundraise, Insights, Learn)
- Resources navigation (Documentation, Community, Research)
- Company navigation (Main, Legal)
- TypeScript interfaces
- 47 page routes organized by status

**When to edit:**
- Adding new pages
- Changing page names
- Updating status (planned → active)
- Reorganizing menu structure

**Example:**
```typescript
productNavigation.build.links[0]
// { name: "Kanban Board", route: "dashboard", status: "active" }
```

---

### **2. `/components/navigation/NavigationBar.tsx`**

**Purpose:** Main fixed navigation bar at top of site

**Features:**
- Fixed position (always visible)
- Logo + 3 menu items + Dashboard CTA
- Scroll shadow effect
- Click-outside to close
- Mobile hamburger icon

**Props:**
```typescript
interface NavigationBarProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}
```

**When to edit:**
- Change nav bar height
- Update logo
- Modify CTA button text
- Change scroll shadow threshold

---

### **3. `/components/navigation/ProductMegaMenu.tsx`**

**Purpose:** 4-column mega menu for Product section

**Layout:**
```
BUILD | FUNDRAISE | INSIGHTS | LEARN
```

**Features:**
- Section icons with green tint
- Active page checkmarks
- "Soon" badges for planned
- Link hover effects
- Route count summaries

**Props:**
```typescript
interface ProductMegaMenuProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}
```

**When to edit:**
- Change column layout
- Update section icons
- Modify styling
- Add/remove sections

---

### **4. `/components/navigation/ResourcesMegaMenu.tsx`**

**Purpose:** 3-column mega menu for Resources section

**Layout:**
```
DOCUMENTATION | COMMUNITY | RESEARCH
```

**Features:**
- Same styling as Product menu
- Wider column gaps
- Report count note
- Active page indicators

**Props:**
```typescript
interface ResourcesMegaMenuProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}
```

**When to edit:**
- Change column count
- Update section titles
- Modify spacing
- Add new resource types

---

### **5. `/components/navigation/CompanyDropdown.tsx`**

**Purpose:** Simple dropdown for Company section

**Layout:**
```
Main Links (About, Careers, Blog, Contact)
─────────────────────────────
Legal Links (Privacy, Terms)
```

**Features:**
- Single column (200px wide)
- Divider between sections
- Simple hover states
- Compact design

**Props:**
```typescript
interface CompanyDropdownProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}
```

**When to edit:**
- Add/remove company pages
- Change dropdown width
- Update divider style

---

### **6. `/components/navigation/MobileMenu.tsx`**

**Purpose:** Full-screen mobile navigation overlay

**Features:**
- Accordion-style expansion
- Two-level nesting
- Dashboard CTA at top
- Body scroll lock
- Touch-friendly targets

**Props:**
```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}
```

**State:**
```typescript
const [expandedSection, setExpandedSection] = useState<string | null>(null);
const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);
```

**When to edit:**
- Change slide-in direction
- Update animation timing
- Modify accordion behavior
- Change mobile breakpoint

---

### **7. `/components/navigation/index.ts`**

**Purpose:** Central export file for clean imports

**Exports:**
```typescript
export { NavigationBar } from './NavigationBar';
export { ProductMegaMenu } from './ProductMegaMenu';
export { ResourcesMegaMenu } from './ResourcesMegaMenu';
export { CompanyDropdown } from './CompanyDropdown';
export { MobileMenu } from './MobileMenu';
```

**Usage:**
```typescript
import { NavigationBar } from './components/navigation';
```

---

### **8. `/App.tsx`**

**Purpose:** Main app with integrated navigation

**Changes made:**
- Added `NavigationBar` import
- Added `currentPage` prop to NavigationBar
- Added routes for pitch-deck-ai-demo and pitch-deck-ai-enhanced
- Removed old "View Events Dashboard" button

**Navigation integration:**
```typescript
<NavigationBar onNavigate={handleNavigate} currentPage={currentPage} />
```

---

## 🔄 DATA FLOW

```
User Action
    ↓
NavigationBar (handles menu open/close)
    ↓
ProductMegaMenu / ResourcesMegaMenu / CompanyDropdown
    ↓
Link Click
    ↓
onNavigate(route)
    ↓
App.tsx handleNavigate()
    ↓
setCurrentPage(page)
    ↓
Page Renders
```

---

## 🛠️ COMMON TASKS

### **Task 1: Add a New Page**

**Step 1:** Add route to navigation data
```typescript
// /lib/navigation-data.ts
productNavigation.build.links.push({
  name: 'New Feature',
  route: 'new-feature',
  status: 'active'
});
```

**Step 2:** Add route handler in App.tsx
```typescript
// /App.tsx
if (currentPage === 'new-feature') {
  return <NewFeaturePage />;
}
```

**Done!** Navigation UI updates automatically.

---

### **Task 2: Change a Page Status**

```typescript
// /lib/navigation-data.ts
// Change from 'planned' to 'active'
productNavigation.build.links[6].status = 'active';
```

**Result:** Green checkmark appears, link becomes clickable.

---

### **Task 3: Update Menu Colors**

```typescript
// Find and replace in all /components/navigation/ files:
'#0D5F4E' → 'YOUR_NEW_COLOR'
'bg-[#0D5F4E]' → 'bg-[YOUR_NEW_COLOR]'
'text-[#0D5F4E]' → 'text-[YOUR_NEW_COLOR]'
```

---

### **Task 4: Add a New Section**

**Step 1:** Add to navigation data
```typescript
// /lib/navigation-data.ts
productNavigation.collaborate = {
  title: 'Collaborate',
  icon: 'Users',
  description: 'Team features',
  links: [...]
};
```

**Step 2:** Update ProductMegaMenu.tsx
```typescript
// Add new column to grid
<div className="grid grid-cols-5 gap-12"> {/* Changed from 4 to 5 */}
  {/* Add new section column */}
</div>
```

---

## 📊 IMPORT PATHS

### **From App.tsx:**
```typescript
import { NavigationBar } from './components/navigation/NavigationBar';
```

### **From any component:**
```typescript
import { productNavigation } from '@/lib/navigation-data';
// or
import { productNavigation } from '../lib/navigation-data';
```

### **Lucide Icons:**
```typescript
import { LayoutDashboard, TrendingUp, Book } from 'lucide-react';
```

---

## 🎨 STYLE REFERENCE

### **Colors Used:**
```css
--bg-main:        #FAFAF8
--bg-card:        #FFFFFF
--border:         #E8E6E1
--text-primary:   #2D2D2D
--text-secondary: #4A4A4A
--text-muted:     #A3A3A3
--accent-green:   #0D5F4E
--green-hover:    #0a4a3c
--green-tint:     rgba(13,95,78,0.05)
```

### **Spacing System:**
```css
--nav-height:     80px  (h-20)
--mega-padding:   32px  (py-10, px-8)
--col-gap-4:      48px  (gap-12)
--col-gap-3:      64px  (gap-16)
--icon-size:      40px  (w-10 h-10)
```

### **Transitions:**
```css
--transition:     200ms ease
```

---

## 🧪 TESTING COMMANDS

### **Check Navigation Data:**
```typescript
import { getRouteStats } from '@/lib/navigation-data';
console.log(getRouteStats());
// { build: 11, fundraise: 6, insights: 8, learn: 5, total: 30 }
```

### **Verify All Routes:**
```bash
# Check that all routes in navigation-data.ts have handlers in App.tsx
grep "route: '" lib/navigation-data.ts | grep -o "'[^']*'" | sort | uniq
```

---

## 📝 MAINTENANCE NOTES

### **Regular Updates:**
- Update `/lib/navigation-data.ts` when adding pages
- Keep status badges current (planned → active)
- Remove placeholder pages when implemented
- Update route counts in mega menus

### **Version Control:**
- All navigation changes tracked in `navigation-data.ts`
- Component files rarely need updates
- Styling changes centralized in components

### **Breaking Changes:**
- Changing route names requires updates in:
  1. `navigation-data.ts`
  2. `App.tsx` route handlers
  3. Any hardcoded links in components

---

## 🎯 QUICK WINS

### **Easy Customizations:**

**1. Change Menu Animation Speed:**
```typescript
// All components use: transition-all duration-200
// Change to: duration-300 for slower
```

**2. Change Mobile Menu Width:**
```typescript
// MobileMenu.tsx
className="... w-full max-w-sm ..."
// Change max-w-sm to max-w-md or max-w-lg
```

**3. Change Nav Bar Height:**
```typescript
// NavigationBar.tsx
className="... h-20 ..."
// Change to h-24 or h-16
```

**4. Add Badge to Section:**
```typescript
// navigation-data.ts
{ name: 'New Feature', route: '...', status: 'active', badge: 'New' }
```

---

## 🐛 TROUBLESHOOTING

### **Issue: Menu not closing on navigation**
**Fix:** Check `onClose()` is called in link handler

### **Issue: Icons not showing**
**Fix:** Verify Lucide icon import in component

### **Issue: Route not working**
**Fix:** Add handler in App.tsx for the route

### **Issue: Mobile menu not scrolling**
**Fix:** Check body scroll lock in useEffect

### **Issue: Mega menu positioning wrong**
**Fix:** Check parent container for overflow:hidden

---

**Last Updated:** January 27, 2026  
**Status:** Production Ready  
**Questions?** Check `/docs/mega-menu-implementation.md`
