# Onboarding V3 — Dashboard Transition & First-Time State

## Purpose
Smooth emotional handoff from setup wizard to the main product. The dashboard should feel "prepared just for me" with personalized guidance and clear next steps.

---

## Transition Animation

### Sequence (Total: ~2 seconds)

**Phase 1: Wizard Fadeout (500ms)**
- Onboarding wizard fades to white
- Progress indicator disappears
- AI assistant panel slides out right
- Smooth opacity transition

**Phase 2: Brief Pause (200ms)**
- Clean white screen
- Subtle loading indicator (optional)
- Builds anticipation

**Phase 3: Dashboard Fade-In (800ms)**
- Dashboard structure fades in
- Elements appear in staggered sequence:
  1. Navigation bar (0ms)
  2. Hero section (100ms)
  3. Today's Focus card (200ms)
  4. Stage Progress (300ms)
  5. Quick Actions (400ms)
  6. Other cards (500ms)

**Phase 4: Guided Highlight (500ms)**
- Soft spotlight effect on "Today's Focus" card
- Subtle glow animation
- Tooltip appears: "Start here →"
- Rest of screen slightly dimmed (optional)

---

## Dashboard Layout

### Top Navigation Bar
- Logo: "StartupAI" (left)
- Navigation: Dashboard / Pitch Deck / Validator / Resources
- User profile: "FashionOS" with avatar (right)
- Notification bell icon

---

## Hero Section

### Greeting
- Time-aware message: "Good morning, Founder" (or afternoon/evening)
- Subtitle: "Your startup command center is ready"
- Date display: "Saturday, January 31, 2026"

### At-a-Glance Stats (Horizontal row)
1. **Investor-Ready Score**
   - Large number: "55/100"
   - Label: "Building Momentum"
   - Trend: "+5 from setup"
   - Icon: Target/bullseye

2. **Profile Completion**
   - Progress: "85%"
   - Label: "Almost there"
   - CTA: "Complete →"
   - Icon: Checklist

3. **Next Milestone**
   - Text: "First 10 customers"
   - Progress: "0/10"
   - Icon: Users

4. **Days Active**
   - Number: "1 day"
   - Label: "Welcome!"
   - Icon: Calendar

---

## Today's Focus Card (HIGHLIGHTED)

### Design
- Largest card, prominent placement
- Soft green border glow (animated)
- "Start here →" tooltip with arrow
- Slightly elevated (shadow)

### Content
- Badge: "AI-Generated Task" (small, green)
- Title: "Define Your First Customer Persona"
- Description: "Based on your target market (fashion designers, retailers, event organizers), create a detailed profile of your ideal first customer. This will guide your early outreach."

### Metadata
- Estimated time: "15 minutes"
- Impact: "High" (green badge)
- Category: "Go-to-Market"

### Action
- Primary button: "Start This Task →" (green)
- Secondary link: "Skip for now"

### Why This Matters (Expandable)
"Your profile shows strong product clarity but needs traction. Defining a specific persona helps you focus your early sales efforts and craft targeted messaging."

---

## Stage Progress Section

### Visual Timeline
Horizontal milestone tracker with 5 stages:

1. **Idea** (completed - green checkmark)
2. **Validation** (in progress - green outline, 40% filled)
3. **MVP** (upcoming - grey)
4. **Traction** (upcoming - grey)
5. **Scale** (upcoming - grey)

### Current Stage Details
- Title: "Validation Stage"
- Progress: "40% complete"
- Description: "You're validating your market fit and refining your offering."

### Next Milestone
- Icon: Flag
- Text: "Get 3 customer interviews"
- CTA: "Learn how →"

---

## Quick Actions Grid

### Heading
"Quick Actions" with subtitle "Pre-built workflows to move faster"

### Action Cards (3 columns)

**Card 1: Create Pitch Deck**
- Icon: Presentation icon (green circle)
- Title: "Generate Pitch Deck"
- Description: "AI-powered pitch deck based on your profile"
- Status: "Ready to start"
- CTA: "Create →"
- Highlighted with subtle green border (recommended action)

**Card 2: Complete Lean Canvas**
- Icon: Grid icon
- Title: "Build Lean Canvas"
- Description: "Map your business model in 9 blocks"
- Status: "75% complete"
- CTA: "Continue →"

**Card 3: Validate Idea**
- Icon: Checkmark shield
- Title: "Run Validation Tests"
- Description: "Structured framework to test assumptions"
- Status: "Not started"
- CTA: "Start →"

**Card 4: Build Roadmap**
- Icon: Map/route icon
- Title: "Create 90-Day Roadmap"
- Description: "Plan your next quarter with milestones"
- Status: "Not started"
- CTA: "Plan →"

**Card 5: Invite Team**
- Icon: Users icon
- Title: "Add Team Members"
- Description: "Collaborate with co-founders"
- Status: "1 member"
- CTA: "Invite →"

**Card 6: Connect Tools**
- Icon: Link icon
- Title: "Integrate Tools"
- Description: "Connect GitHub, Slack, Analytics"
- Status: "0 connected"
- CTA: "Connect →"

---

## Personalized Insights Panel

### Heading
"AI Insights for FashionOS"

### Insight Cards (Stacked)

**Insight 1: Market Opportunity**
- Icon: TrendingUp
- Title: "Growing Market Signals"
- Description: "AI event management tools raised $2.3B in 2025. Fashion tech is emerging."
- Source: "Based on industry analysis"
- CTA: "View full report →"

**Insight 2: Competitor Movement**
- Icon: Eye
- Title: "Competitors Raising Funds"
- Description: "3 similar startups announced rounds this month. Consider accelerating."
- Source: "Real-time tracking"
- CTA: "See details →"

**Insight 3: Suggested Connection**
- Icon: Sparkles
- Title: "Founder Match"
- Description: "You might want to connect with 2 founders building in fashion tech."
- CTA: "View matches →"

---

## Recent Activity Feed

### Heading
"Recent Activity"

### Items (Reverse chronological)

1. "✓ Completed onboarding setup" — Just now
2. "✓ AI analyzed your website" — 5 minutes ago
3. "✓ Profile created" — 10 minutes ago
4. "+ Joined StartupAI" — 15 minutes ago

---

## AI Assistant (Floating Button)

### Position
- Bottom-right corner
- Floating above all content
- Circular button with AI avatar

### Default State
- Icon: Sparkle or robot icon
- Color: Deep emerald green
- Subtle pulse animation
- Badge: "New" or "1" (if there's a message)

### Tooltip (On First Load)
- "Ask me what to do next"
- Arrow pointing to button
- Auto-dismisses after 5 seconds
- Or on user interaction

### Interaction
- Click opens chat panel
- Panel slides in from right
- Pre-populated suggestions:
  - "What should I work on first?"
  - "How do I improve my score?"
  - "Explain my investor-readiness gaps"
  - "Help me write a value proposition"

---

## Sidebar Navigation (Left)

### Main Menu
- 📊 Dashboard (active)
- 🎯 Goals & Milestones
- 📈 Pitch Deck
- ✅ Validator
- 📋 Lean Canvas
- 🗺 Roadmap
- 👥 Team
- 📚 Resources
- ⚙️ Settings

### Bottom Section
- Help & Support
- What's New (badge: "3")
- Keyboard shortcuts

---

## Empty States / First-Time Helpers

### Conditional Tooltips (Appear on first visit only)

1. **Today's Focus**
   - "Start here → This is your most important task today"
   - Dismissible

2. **Quick Actions**
   - "These workflows are personalized for your stage"
   - Dismissible

3. **AI Assistant**
   - "I'm here to help you make decisions"
   - Auto-dismiss after 5 seconds

4. **Stage Progress**
   - "Track your journey from idea to scale"
   - Dismissible

---

## Visual Style

### Colors
- Background: Off-white (#fafaf8)
- Cards: White with subtle borders
- Highlighted card: Green border glow (#0d5f4e)
- Active states: Deep emerald green
- Tooltips: Dark background, white text

### Typography
- Hero greeting: Large serif (4xl-5xl)
- Card titles: Medium serif (xl-2xl)
- Descriptions: Sans-serif, readable
- Labels/badges: Small sans-serif, uppercase

### Spacing
- Hero section: 64px padding top/bottom
- Card grid: 24px gaps
- Section spacing: 48px vertical
- Generous white space throughout

### Shadows & Depth
- Cards: Subtle shadow (shadow-sm)
- Highlighted card: Elevated shadow (shadow-lg)
- Hover states: Shadow increases
- Floating button: Strong shadow (shadow-xl)

---

## Animation Details

### Staggered Card Entrance
```
Navigation: 0ms
Hero: 100ms delay
Today's Focus: 200ms delay (+ highlight)
Stage Progress: 300ms delay
Quick Actions: 400ms delay (stagger each card by 50ms)
Insights: 500ms delay
Activity Feed: 600ms delay
```

### Highlight Effect
- Today's Focus card:
  - Border glow pulses (2s loop)
  - Subtle scale (1.02)
  - Shadow increases
  - "Start here" tooltip bounces gently

### Hover Animations
- Cards: Lift slightly (translateY -2px)
- Buttons: Background darkens
- Icons: Subtle rotate or scale
- Links: Color shifts to green

### Floating Button
- Gentle pulse (2s loop)
- Hover: Scale 1.1
- Click: Brief scale down, then panel slides in

---

## Responsive Behavior

### Desktop (1024px+)
- Full sidebar navigation
- 3-column quick actions grid
- Side-by-side insights and activity

### Tablet (768px-1023px)
- Collapsible sidebar
- 2-column quick actions
- Stacked insights/activity

### Mobile (<768px)
- Bottom navigation bar
- 1-column layout
- Condensed hero stats (2x2 grid)
- Floating action button remains

---

## Accessibility

### Screen Reader Announcements
- "Welcome to your dashboard"
- "Today's recommended task: Define your first customer persona"
- "Your investor-ready score is 55 out of 100, building momentum"

### Keyboard Navigation
- Tab through cards in logical order
- Today's Focus receives first focus
- Skip to main content link
- All tooltips keyboard-accessible

### Color & Contrast
- High contrast for all text
- Color not sole indicator (icons + text)
- Focus indicators visible
- Sufficient touch targets (44px minimum)

---

## Data Personalization

### Elements Customized by Profile
- Greeting includes founder name
- Today's Focus task based on score gaps
- Quick Actions prioritized by needs
- Insights relevant to industry (fashion tech)
- Competitor mentions specific to market
- Milestone tracker reflects current stage

### Dynamic Content
- Real-time activity feed
- Updated insights daily
- Score changes reflected immediately
- Progress bars update live
- Notification count accurate

---

## Success Metrics to Track

### Engagement Indicators
- Did user click "Today's Focus" task?
- Time to first action on dashboard
- Number of quick actions completed
- AI assistant usage rate
- Return visit within 24 hours

### Friction Points to Monitor
- Bounces after onboarding complete
- Clicks on "Help" or "What's this?"
- Time spent on dashboard (too short = confused)
- Navigation pattern (scattered = unclear priority)

---

## Emotional Goal
The dashboard should feel:
- **Prepared**: "This was built for me"
- **Confident**: "I know exactly what to do next"
- **Motivated**: "I can make real progress today"
- **Supported**: "I'm not alone in this"

Not:
- Overwhelmed by options
- Lost without guidance
- Unsure where to start
- Abandoned after setup
