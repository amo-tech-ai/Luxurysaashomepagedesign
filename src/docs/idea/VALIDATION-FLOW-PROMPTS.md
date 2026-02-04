# AI Validation Flow — Enhanced Figma Prompts
## Premium Dark Mode SaaS Design

**Version**: 1.0  
**Date**: February 2, 2026  
**Style**: Dark luxury, analytical, intelligent

---

## Prompt 1: Processing Animation

### Enhanced Figma Prompt

**Title**: AI Validation Processing Screen — Premium Dark Mode

**Context**:  
Design a sophisticated loading/processing animation for an AI-powered startup validation platform. This screen appears while the system analyzes a founder's startup idea using AI. The design should communicate "intelligent processing" — calm, confident, and analytical, not playful or casual.

**Primary Goal**:  
Make founders feel their idea is being rigorously analyzed by a premium AI system (BCG/McKinsey-level sophistication).

---

**UI Structure** (Top to Bottom):

1. **Backdrop**
   - Full-screen modal overlay
   - Background: Deep navy (#0A0E1A) with blur(12px)
   - Opacity: 0.85
   - Effect: Glassmorphism style

2. **Processing Card** (480px width, centered)
   - Background: Dark charcoal (#141925)
   - Border: 1px solid rgba(255, 255, 255, 0.06) — subtle glow
   - Border-radius: 16px
   - Box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4)
   - Padding: 48px all sides

3. **Animated Loader** (Top of card)
   - **Style Option A**: Circular spinner with 4-6 rotating dots
     - Color: Purple (#8B5CF6) to Blue (#3B82F6) gradient
     - Size: 64px diameter
     - Rotation speed: 1.5s per rotation
     - Soft glow: 0 0 20px rgba(139, 92, 246, 0.3)
   
   - **Style Option B**: Pulsing concentric circles
     - 3 circles expanding outward
     - Purple gradient, fading opacity
     - Pulse speed: 2s cycle
   
   - Position: Centered horizontally
   - Margin-bottom: 32px

4. **Headline**
   - Text: "AI Validation In Progress"
   - Font: Inter or SF Pro, 24px, weight 500
   - Color: #F9FAFB (near-white)
   - Letter-spacing: -0.02em
   - Text-align: Center
   - Margin-bottom: 8px

5. **Subheadline**
   - Text: "This may take 20-30 seconds"
   - Font: 14px, weight 400
   - Color: #9CA3AF (medium gray)
   - Text-align: Center
   - Margin-bottom: 32px

6. **Progress Bar**
   - Track:
     - Height: 8px
     - Background: rgba(255, 255, 255, 0.06)
     - Border-radius: 4px
     - Width: 100%
   
   - Fill:
     - Background: Linear gradient 90deg, #8B5CF6 → #3B82F6
     - Animated width: 0% → 100%
     - Box-shadow: 0 0 12px rgba(139, 92, 246, 0.5)
     - Smooth transition: cubic-bezier(0.4, 0, 0.2, 1)
   
   - Percentage Label:
     - Position: Right of progress bar
     - Font: 14px, weight 600
     - Color: #8B5CF6 (purple)
     - Example: "88%"
   
   - Margin-bottom: 32px

7. **Processing Steps** (Vertical list, 6 items)
   - Spacing: 16px between each step
   - Each step contains:
     - Icon (20px) + Text (14px)
     - Gap: 12px between icon and text
   
   **Step States**:
   
   - **Completed** (✓):
     - Icon: Green checkmark (#10B981)
     - Text color: #9CA3AF (faded)
     - Opacity: 0.6
     - Example: "✓ Researching market data…"
   
   - **Active** (●):
     - Icon: Purple dot (#8B5CF6) with pulsing animation
     - Text color: #F9FAFB (bright white)
     - Font-weight: 500 (medium)
     - Glow effect: 0 0 8px rgba(139, 92, 246, 0.4)
     - Example: "● AI processing insights…"
   
   - **Pending** (⃝):
     - Icon: Empty circle outline, #6B7280
     - Text color: #6B7280 (dark gray)
     - Opacity: 0.4
     - Example: "⃝ Generating report…"

**Processing Steps (in order)**:
1. Researching market data…
2. Analyzing competitors…
3. Evaluating industry trends…
4. AI processing insights…
5. Calculating success score…
6. Generating report…

---

**Animation Behavior**:

- **Entry** (0-0.5s):
  - Modal fades in from opacity 0 → 1
  - Card scales from 0.95 → 1.0
  - Backdrop blur applies

- **Progress Bar**:
  - Non-linear progression (faster at start, slower near end)
  - Smooth transitions between percentage changes
  - Glow pulses gently

- **Steps Transition**:
  - Each step animates: pending → active → completed
  - Duration per step: 3-7 seconds (varies)
  - Active step pulses gently (scale 1.0 → 1.05 → 1.0, repeat)
  - Checkmark draws in with SVG stroke animation (0.3s)

- **Exit** (30s):
  - Brief pause when 100% reached (0.5s)
  - Fade to next screen

---

**Design Specifications**:

- Typography: Inter or SF Pro (system font)
- Color mode: Dark only (no light mode)
- Animations: Smooth, calm, confident (no bouncing or playful easing)
- Accessibility: Sufficient color contrast (WCAG AA)
- Tone: Premium, analytical, trustworthy

---

**Deliverables**:
1. Desktop layout (1440px viewport)
2. Animation prototype with Smart Animate
3. Hover states (if interactive elements present)
4. Component variants for each step state

---

**References**:
- Look: Linear app loading states, Stripe dashboard, Notion AI
- Feel: "AI is thinking deeply" — not "loading generic content"
- Mood: Consultant preparing a report, not app fetching data

---

## Prompt 2: Validation Complete Modal

### Enhanced Figma Prompt

**Title**: Validation Complete Success Modal — Dark Luxury SaaS

**Context**:  
Design a celebratory but professional "Validation Complete" modal that appears after AI finishes analyzing a startup idea. This is a key conversion moment — founders should feel accomplished and motivated to continue, but the design should maintain analytical credibility (not gamified or overly congratulatory).

**Primary Goal**:  
Communicate success, show key insights, and guide founders to the next action (generate full analysis or view results first).

---

**UI Structure** (Top to Bottom):

1. **Backdrop**
   - Full-screen overlay
   - Background: rgba(10, 14, 26, 0.9) with blur(16px)
   - z-index: 50

2. **Modal Container** (560px width, centered vertically)
   - Background: #141925 (dark charcoal)
   - Border: 1px solid rgba(255, 255, 255, 0.08)
   - Border-radius: 20px
   - Box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5)
   - Padding: 48px

3. **Success Icon** (Top center)
   - Size: 80px diameter
   - Background: rgba(16, 185, 129, 0.12) — soft green
   - Border: 2px solid rgba(16, 185, 129, 0.3)
   - Border-radius: 50% (circle)
   
   - Checkmark inside:
     - Size: 40px
     - Color: #10B981 (success green)
     - Stroke-width: 3px
     - Animation: SVG stroke draw-in (0.5s)
   
   - Margin-bottom: 24px

4. **Title**
   - Text: "Validation Complete"
   - Font: 28px, weight 600
   - Color: #F9FAFB (near-white)
   - Letter-spacing: -0.03em
   - Text-align: Center
   - Margin-bottom: 8px

5. **Subtitle / Progress Indicator**
   - Text: "Step 1 of 6 — Startup Idea Validation"
   - Font: 14px, weight 400
   - Color: #9CA3AF (medium gray)
   - Text-align: Center
   - Margin-bottom: 32px

6. **Score Display** (Large circular card)
   - Container:
     - Background: rgba(139, 92, 246, 0.05) — very soft purple
     - Border: 1px solid rgba(139, 92, 246, 0.2)
     - Border-radius: 16px
     - Padding: 32px
     - Margin-bottom: 24px
   
   - Circular Score Badge:
     - Size: 140px diameter
     - Background: rgba(139, 92, 246, 0.08)
     - Border: 4px solid #8B5CF6 (purple)
     - Border-radius: 50%
     - Positioned: Center
     
     - Score Number:
       - Font: 56px, weight 300 (ultra-light)
       - Color: #F9FAFB
       - Text-align: Center
       - Animation: Count-up from 0 → 68 (2s duration, ease-out)
       - Example: "68"
     
     - Label Below:
       - Text: "Success Score"
       - Font: 14px, weight 500
       - Color: #8B5CF6 (purple)
       - Text-transform: Uppercase
       - Letter-spacing: 0.05em
       - Margin-top: 8px

7. **Insight Cards** (2-column grid)
   - Grid: 2 columns, 16px gap
   - Margin-bottom: 24px
   
   **Left Card: Top Strength**
   - Background: rgba(16, 185, 129, 0.08) — soft green
   - Border: 1px solid rgba(16, 185, 129, 0.2)
   - Border-radius: 12px
   - Padding: 20px
   
   - Icon: 💚 or green checkmark (top-left)
   - Label: "Top Strength"
     - Font: 12px, weight 600
     - Color: #10B981
     - Text-transform: Uppercase
     - Margin-bottom: 8px
   
   - Content: "Strong problem-market fit"
     - Font: 14px, weight 400
     - Color: #F9FAFB
     - Line-height: 1.4
   
   **Right Card: Key Risk**
   - Background: rgba(245, 158, 11, 0.08) — soft orange
   - Border: 1px solid rgba(245, 158, 11, 0.2)
   - Border-radius: 12px
   - Padding: 20px
   
   - Icon: ⚠️ or alert triangle (top-left)
   - Label: "Key Risk"
     - Font: 12px, weight 600
     - Color: #F59E0B (orange)
     - Text-transform: Uppercase
     - Margin-bottom: 8px
   
   - Content: "Market validation needed"
     - Font: 14px, weight 400
     - Color: #F9FAFB

8. **Primary CTA Button**
   - Width: 100% (full-width)
   - Height: 56px
   - Background: Linear gradient 135deg, #8B5CF6 → #7C3AED
   - Border: None
   - Border-radius: 12px
   - Box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3)
   - Cursor: Pointer
   - Margin-bottom: 16px
   
   - Content (Flex layout):
     - Text: "Generate Market Analysis"
       - Font: 16px, weight 600
       - Color: #FFFFFF
     
     - Credit Badge: "70 ⓒ"
       - Font: 14px, weight 500
       - Background: rgba(255, 255, 255, 0.15)
       - Padding: 4px 12px
       - Border-radius: 6px
       - Position: Right side
   
   - Hover State:
     - Background: Linear gradient 135deg, #7C3AED → #6D28D9
     - Transform: translateY(-2px)
     - Box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4)
     - Transition: all 0.2s ease

9. **Secondary CTA** (Text link)
   - Text: "View Results First"
   - Font: 14px, weight 500
   - Color: #D1D5DB (light gray)
   - Text-align: Center
   - Text-decoration: None
   - Cursor: Pointer
   
   - Hover State:
     - Color: #8B5CF6 (purple)
     - Text-decoration: Underline

---

**Animation Sequence**:

1. **Entry** (0-0.8s):
   - Backdrop fades in
   - Modal slides up + fades in
   - Success icon draws checkmark (stroke animation)

2. **Score Animation** (0.8-2.8s):
   - Circle border animates (stroke dashoffset)
   - Number counts up: 0 → 68
   - Purple glow pulses gently

3. **Insight Cards** (2.8-3.5s):
   - Fade in sequentially
   - Left card: 2.8s
   - Right card: 3.0s (0.2s stagger)

4. **CTAs** (3.5-4s):
   - Buttons fade in from bottom
   - Primary: 3.5s
   - Secondary: 3.7s

---

**Design Specifications**:

- Typography: Inter or SF Pro
- Color mode: Dark only
- Animations: Smooth, confident (ease-out curves)
- Button states: Default, Hover, Active, Disabled
- Accessibility: Focus indicators, keyboard navigation

---

**Deliverables**:
1. Desktop modal (560px width)
2. Animation prototype (entry sequence)
3. Button hover/active states
4. Score count-up animation
5. Responsive tablet/mobile variants (optional)

---

**References**:
- Look: Stripe success modals, Notion AI results, Linear achievement cards
- Feel: "You've made progress" — not "You won a game"
- Mood: Professional celebration, analytical confidence

---

## Prompt 3: Post-Validation Results Dashboard

### Enhanced Figma Prompt

**Title**: AI Validation Results Dashboard — Editorial + Data-Driven Layout

**Context**:  
Design a comprehensive results dashboard that presents AI validation findings in a structured, consultant-quality format. This is where founders spend time reading and understanding their startup's validation report. The layout should feel like a BCG/McKinsey report — editorial, readable, data-rich but not overwhelming.

**Primary Goal**:  
Present complex validation data in a clear, scannable, investor-ready format. Founders should be able to quickly grasp insights while having depth for detailed reading.

---

**Page Structure**:

### **1. Layout Grid**
- **Left Sidebar**: 240px (fixed)
- **Main Content**: Flexible (max-width 1200px, centered)
- **Gap**: 0 (sidebar flush with edge)
- **Background**: #0A0E1A (deep navy)

---

### **2. Left Sidebar**

**Specifications**:
- Width: 240px
- Background: #141925 (dark charcoal)
- Border-right: 1px solid rgba(255, 255, 255, 0.06)
- Padding: 32px 24px
- Position: Sticky (top: 0)
- Height: 100vh

**Journey Steps List**:
- 6 steps in vertical list
- Spacing: 12px between items

**Each Step**:
- Display: Flex (icon + text)
- Gap: 12px
- Padding: 12px
- Border-radius: 8px
- Cursor: Pointer
- Transition: all 0.2s

**Step Content**:
1. ● Idea Validation (active)
2. ○ Market Analysis
3. ○ Business Model
4. ○ Brand Strategy
5. ○ Team Formation
6. ○ Execution Plan

**States**:

- **Active**:
  - Background: rgba(139, 92, 246, 0.12)
  - Icon: Filled circle (#8B5CF6)
  - Text: #8B5CF6 (purple)
  - Font-weight: 500

- **Completed**:
  - Icon: Checkmark (#10B981)
  - Text: #D1D5DB (light gray)

- **Upcoming**:
  - Icon: Empty circle (border only)
  - Text: #6B7280 (dark gray)
  - Opacity: 0.6

- **Hover** (inactive):
  - Background: rgba(255, 255, 255, 0.04)

---

### **3. Main Content Area**

**Container**:
- Padding: 48px 64px
- Max-width: 1200px
- Margin: 0 auto

---

### **4. Header Section** (Top card)

**Container**:
- Background: #1C2333 (elevated dark)
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Border-radius: 16px
- Padding: 32px 40px
- Margin-bottom: 32px

**Layout**: 3-column grid

**Column 1: Title + Status**
- Title: "Validation Report"
  - Font: 24px, weight 600
  - Color: #F9FAFB
  - Margin-bottom: 8px

- Status Badge:
  - Text: "Ready"
  - Background: rgba(16, 185, 129, 0.12)
  - Border: 1px solid rgba(16, 185, 129, 0.3)
  - Color: #10B981
  - Padding: 6px 12px
  - Border-radius: 6px
  - Font: 12px, weight 500

**Column 2: Timeline**
- Icon: Clock (16px)
- Text: "Timeline: 6–8 weeks"
- Font: 14px, weight 400
- Color: #9CA3AF

**Column 3: Overall Score**
- Circular badge:
  - Size: 80px diameter
  - Border: 3px solid #8B5CF6
  - Background: rgba(139, 92, 246, 0.08)
  - Number: "68"
    - Font: 32px, weight 300
    - Color: #F9FAFB
  - Label: "Overall"
    - Font: 10px, uppercase
    - Color: #8B5CF6

---

### **5. Content Grid** (2-column layout)

**Grid Specs**:
- Columns: 60% / 40% split
- Gap: 24px
- Margin-bottom: 32px

---

#### **Left Column Cards**:

**Card 1: Executive Summary**
- Background: #141925
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Border-radius: 12px
- Padding: 24px
- Margin-bottom: 24px

- Header:
  - Text: "Executive Summary"
  - Font: 16px, weight 600
  - Color: #F9FAFB
  - Margin-bottom: 16px

- Content:
  - Font: 15px, weight 400
  - Color: #D1D5DB
  - Line-height: 1.7
  - Max-width: 100%
  
  - Sample text:
    "Your startup idea addresses a genuine market need in the AI automation space. The problem-solution fit is strong, with clear differentiation from existing competitors. However, additional customer validation is recommended before proceeding to full development."

**Card 2: Key Recommendations**
- Same styling as Executive Summary
- Margin-bottom: 24px

- Header: "Key Recommendations"

- Content: Numbered list
  - Each item:
    - Display: Flex (number + text)
    - Gap: 12px
    - Margin-bottom: 12px
    - Font: 14px
    - Color: #D1D5DB
    
  1. Conduct customer discovery interviews
  2. Define MVP feature scope
  3. Build low-fidelity prototype
  4. Validate pricing model

---

#### **Right Column Cards**:

**Card 1: Green Lights**
- Background: rgba(16, 185, 129, 0.08)
- Border: 1px solid rgba(16, 185, 129, 0.2)
- Border-radius: 12px
- Padding: 24px
- Margin-bottom: 24px

- Header:
  - Icon: ✓ (green checkmark, 20px)
  - Text: "Green Lights"
  - Font: 16px, weight 600
  - Color: #10B981
  - Margin-bottom: 16px

- List items:
  - Each with green checkmark
  - Font: 14px, Color: #F9FAFB
  - Spacing: 8px between items
  
  - ✓ Clear problem identified
  - ✓ Large addressable market
  - ✓ Early adopter traction
  - ✓ Scalable technology

**Card 2: Red Flags**
- Background: rgba(245, 158, 11, 0.08)
- Border: 1px solid rgba(245, 158, 11, 0.2)
- Border-radius: 12px
- Padding: 24px

- Header:
  - Icon: ⚠ (alert triangle, 20px)
  - Text: "Red Flags"
  - Font: 16px, weight 600
  - Color: #F59E0B
  - Margin-bottom: 16px

- List items:
  - Each with warning icon
  - Font: 14px, Color: #F9FAFB
  - Spacing: 8px between items
  
  - ⚠ High competition
  - ⚠ Long sales cycle
  - ⚠ Resource intensive

---

### **6. Bottom Section: Validation Scorecard**

**Container**:
- Background: #1C2333
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Border-radius: 16px
- Padding: 32px
- Margin-top: 32px

**Header**:
- Text: "Validation Scorecard"
- Font: 20px, weight 600
- Color: #F9FAFB
- Margin-bottom: 24px

**Score Rows** (3 rows):

Each row:
- Margin-bottom: 20px
- Display: Flex (label, bar, score)
- Align-items: Center

**Row Structure**:

1. Label (left):
   - Font: 14px, weight 500
   - Color: #D1D5DB
   - Width: 180px

2. Progress Bar (middle):
   - Width: Flexible (grow)
   - Height: 12px
   - Background: rgba(255, 255, 255, 0.06)
   - Border-radius: 6px
   - Overflow: hidden
   
   - Fill:
     - Background: Linear gradient (#8B5CF6 → #3B82F6)
     - Width: % based on score
     - Transition: width 0.8s ease-out

3. Score (right):
   - Font: 16px, weight 600
   - Color: #8B5CF6
   - Width: 80px
   - Text-align: Right

**Scores**:
- Problem Validation: 75/100 (75% fill)
- Solution Validation: 60/100 (60% fill)
- Market Validation: 70/100 (70% fill)

---

**Design Specifications**:

- Typography: Inter or SF Pro
- Color mode: Dark only
- Reading comfort: 15-16px body text, line-height 1.7
- Hierarchy: Clear sections, scannable headings
- Data viz: Simple progress bars, no complex charts
- Spacing: Generous (24-32px between sections)

---

**Interaction States**:

- Cards: Subtle border color change on hover
- Progress bars: Animate on scroll-into-view
- Sidebar steps: Clickable navigation
- Links: Purple underline on hover

---

**Deliverables**:
1. Desktop layout (1440px viewport, 1920px reference)
2. Sidebar navigation states
3. Card hover states
4. Progress bar animations
5. Responsive tablet variant (sidebar collapses)
6. Printable/export-friendly layout (optional)

---

**References**:
- Look: Notion pages, Linear issues, Stripe reports
- Layout: BCG/McKinsey slide decks, editorial blogs
- Feel: "Investor-ready document" — structured, credible, professional
- Mood: Analytical confidence, clarity over decoration

---

**Content Guidelines**:

- Avoid jargon or buzzwords
- Use short paragraphs (2-3 sentences)
- Bullet points for scannability
- Clear headings and labels
- Data-first (show numbers, charts, scores)
- Balanced (both strengths and risks)

---

## Additional Design Notes

### Typography Stack
```
Primary: SF Pro / Inter
Fallback: -apple-system, BlinkMacSystemFont, system-ui
Monospace: SF Mono, Menlo, Courier (for scores/data)
```

### Accessibility
- Minimum 14px font size
- Color contrast: WCAG AA minimum
- Focus indicators: 2px purple outline
- Keyboard navigation: Tab order logical
- Screen readers: Semantic HTML, ARIA labels

### Performance
- Dark mode native (no theme toggle needed)
- Smooth animations (60fps target)
- Lazy-load charts/heavy content
- Optimize images (WebP preferred)

---

**End of Prompts**

For wireframe details, see VALIDATION-FLOW-WIREFRAMES.md
