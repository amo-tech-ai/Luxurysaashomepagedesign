# AI Generate Icon Component

## 📋 Overview

**Component:** Reusable AI enhancement icon  
**File:** `/components/pitch-deck/AIGenerateIcon.tsx`  
**Purpose:** Indicate AI-assisted generation across forms  

---

## 🎨 Design

**Style:**
- Sparkle icon (Lucide React)
- Outline only, no fill
- 16px default size
- Gray default → Green on hover (#0d5f4e)
- Smooth animations

**Mood:**
- Helpful, not intrusive
- Intelligent assistance
- Optional enhancement

---

## 💻 Usage

### Full Version (with label)

```tsx
import { AIGenerateIcon } from '@/components/pitch-deck/AIGenerateIcon';

<AIGenerateIcon
  onClick={handleGenerate}
  loading={isGenerating}
  tooltip="Generate with AI"
  label="AI Enhance"
/>
```

### Minimal Version (icon only)

```tsx
import { AIGenerateIconMinimal } from '@/components/pitch-deck/AIGenerateIcon';

<AIGenerateIconMinimal
  onClick={handleGenerate}
  loading={isGenerating}
  tooltip="Generate with AI"
/>
```

---

## 🔧 Props

```tsx
interface AIGenerateIconProps {
  onClick?: () => void;        // Click handler
  disabled?: boolean;          // Disable button
  loading?: boolean;           // Show loading state
  tooltip?: string;            // Hover tooltip
  label?: string;              // Button text (full version)
  size?: number;              // Icon size (default: 16)
}
```

---

## 📍 Placement Examples

### 1. Next to Input Label

```tsx
<div className="flex items-center gap-2 mb-2">
  <label>Sub-category</label>
  <AIGenerateIcon 
    onClick={enhance} 
    label="AI Enhance" 
  />
</div>
```

### 2. Inside Input Group

```tsx
<div className="relative">
  <input type="text" />
  <AIGenerateIconMinimal 
    onClick={generate}
    className="absolute right-2 top-2"
  />
</div>
```

### 3. In Form Header

```tsx
<div className="flex justify-between items-center">
  <h3>Problem Statement</h3>
  <AIGenerateIcon 
    onClick={generateProblem}
    label="AI Generate"
  />
</div>
```

---

## ✨ States

**Default:**
```
✨ AI Enhance
```

**Loading:**
```
✨ Generating... (spinning)
```

**Disabled:**
```
✨ AI Enhance (grayed out, 50% opacity)
```

**Hover:**
```
✨ AI Enhance (green text, light green background)
```

---

## ✅ Checklist

**Component Features:**
- [x] Sparkle icon (Lucide)
- [x] Full variant (with label)
- [x] Minimal variant (icon only)
- [x] Loading state (spinning)
- [x] Disabled state
- [x] Hover animations
- [x] Tooltip support
- [x] Customizable size
- [x] Green accent (#0d5f4e)
- [x] Smooth transitions
- [x] TypeScript types
- [x] Accessible (button semantics)

---

## 🎯 Use Cases

**Current:**
- ✅ Sub-category enhancement (Pitch Deck)

**Potential:**
- [ ] Problem statement generation
- [ ] Solution text improvement
- [ ] Market size estimation
- [ ] Competitive advantage suggestions
- [ ] Team bio enhancement
- [ ] Milestone recommendations

---

**Last Updated:** January 27, 2026  
**Version:** 1.0.0  
**Status:** ✅ Production-Ready
