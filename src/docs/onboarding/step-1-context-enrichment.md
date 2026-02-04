# Onboarding V3 — Step 1: Context & Enrichment

## Screen Purpose
Collect startup inputs and set expectations for AI personalization. This is the foundation step where founders provide their core business information.

---

## Layout Structure

### Three-Panel Layout

**LEFT PANEL — Vertical Step Indicator**
- Logo: "StartupAI" (top-left corner, deep emerald green circle with "S")
- Step list (vertical):
  1. ✓ Context & Enrichment — "Add your links and info" (ACTIVE STATE - green checkmark)
  2. AI Analysis — "Review what AI discovered" (inactive)
  3. Smart Interviewer — "Answer questions" (inactive)
  4. Review & Score — "Finalize your profile" (inactive)

**CENTER PANEL — Main Form**
- Progress bar at bottom: 25% complete (green fill)
- "Save & Continue Later" button (bottom-left)

**RIGHT PANEL — AI Assistant**
- Luna avatar (sage green circular icon with sparkle)
- Name: "Luna"
- Title: "Context Specialist"
- Message: "I'll analyze your digital footprint and build a comprehensive profile."
- Status indicator: "AI is processing..." (with rotating loader icon)

---

## Content Elements

### Header
- Step indicator: "STEP 1 OF 4"
- Title: "Context & Enrichment" (large serif, 4xl)
- Subtitle: "Add your links and Gemini 3 will build your profile."

---

## Form Fields (in order)

### 1. Company Name (Required)
- Label: "Company Name *"
- Value: "FashionOS"
- Style: Light blue background input field

### 2. Describe your startup (Required)
- Label: "Describe your startup *"
- Character counter: "0 / 1000"
- "Analyze" button (right side)
- Value: "FashionOS is an AI-powered operating system for fashion brands and events that turns complex planning, content creation, and collaboration into fast, structured workflows—helping designers, organizers, and teams go from idea to execution features event management, planning marketing, sponsor venues guest management—from services booking photography videos using AI wizard built middleware w/ suggestions shot list."
- Helper text below: "+Extra words ~"

### 3. Target market (Required)
- Label: "Target market *"
- Value: "Fashion designers, retailers, models pr/ media event organizers"

### 4. Website URL (Recommended)
- Label: "Website URL (recommended)"
- Placeholder icon: Globe icon
- Value: "https://www.fashionos.co/"
- Status: "Extracting..." button (sage green, active state)
- Helper text: "When pages, URLs, meta, and where they connect."

### 5. LinkedIn URL
- Label: "LinkedIn URL"
- Placeholder icon: LinkedIn icon
- Value: "https://linkedin.com/company/..."

### 6. Additional URLs (Optional)
- Label: "Additional URLs (optional)"
- Placeholder icon: Link icon
- Placeholder text: "Blog, press release, docs..."
- "+ Add" button (right side)

---

## Industry Selection (Required)
- Label: "Industry *"
- Subtitle: "Select all that apply. We focus on industries your startups"

**Selected Industries (green fill with white text):**
- SaaS & Software
- E-commerce & Marketplaces

**Available Industries (white background):**
- Artificial Intelligence & Data
- FinTech & Payments
- Healthcare & Life Sciences
- Education & Learning
- Media, Content & Creator Economy
- Enterprise & B2B Solutions
- Consumer Apps & Platforms
- Logistics, Supply Chain & Mobility
- Real Estate
- Gaming & Entertainment
- Other

---

## Business Model (Required)
- Label: "Business Model *"

**Selected (green fill):**
- B2B

**Available:**
- B2C
- B2B2C
- Marketplace
- Platform
- Services

---

## Stage (Required)
- Label: "Stage *"

**Selected (green fill):**
- Pre-seed

**Available:**
- Idea
- Seed
- Series A
- Series B+

---

## Founding Team (Optional)
- Label: "Founding Team (optional)"
- Card showing:
  - Avatar placeholder (user icon)
  - Name: "sanjiv khullar"
  - Role: "Co-Founder"
  - LinkedIn status: "LinkedIn added" (green checkmark)
- "+ Add Founder" button (dashed border)

---

## AI Assistant Right Panel Content

### Top Section
- "What Gemini Will Do" (heading with info icon)

**Bullet List:**
- Analyze your website and LinkedIn
- Research market using Google Search
- Extract features, audience, pricing
- Find real competitors & trends
- Combine with your description
- Autofill profile fields

### Bottom Section
- "More Details" (expandable)
- Helper text: "Sector details, Your Pitch Deck, One Pager, and Financial Models will be tailored to this context."
- "Powered by Gemini 3 with Google Search (Grounding)"

---

## Bottom Navigation
- Progress bar: 25% (green fill)
- "← Back" button (left side, grey)
- "Extracting..." button (center-right, sage green with loader)
- "Proceeding" button (right, deep emerald green, primary CTA)
- "Save & Continue Later" link (bottom-left with save icon)

---

## Visual Style

### Colors
- Background: Off-white (#fafaf8)
- Form fields: Light blue tint (#f0f7ff)
- Selected pills: Deep emerald green (#0d5f4e)
- Active buttons: Sage green (#6b9d89) for processing
- Primary CTA: Deep emerald green (#0d5f4e)

### Typography
- Title: Large serif (4xl)
- Labels: Sans-serif, medium weight
- Field text: Sans-serif, regular weight
- Helper text: Small, grey

### Spacing
- Generous padding between sections
- Consistent 24px vertical spacing between form fields
- Wide margins on left/right panels

### Interactive States
- Selected industry/business model/stage: Green fill + white text
- Hover: Subtle border color change
- Focus: Green border on input fields
- Disabled: Grey text, no interaction

---

## Animation Notes
- Typing cursor animation in description field
- "AI is processing..." pulse animation
- "Extracting..." button with rotating loader
- Smooth transitions when selecting pills (0→ green fill)
- Progress bar fills from left to right

---

## Accessibility
- All form fields have clear labels
- Required fields marked with asterisk
- Color not sole indicator (text + icons)
- Sufficient color contrast for text
- Keyboard navigation support
