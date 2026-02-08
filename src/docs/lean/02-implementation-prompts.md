# Lean Canvas V2 - Implementation Prompts

**Document:** Recreation instructions without code  
**Purpose:** Guide designers and developers to recreate the exact design  
**Audience:** UI/UX designers, frontend developers, product teams

---

## Prompt 1: Create the Page Foundation

**Task:** Build the basic page structure with header and container.

**Requirements:**

Create a full-page layout with warm cream background color (hex code FAF9F7). The page should have a sticky header at the top that remains visible when scrolling.

The header should have a white background with eighty percent opacity and a backdrop blur effect. Add a thin bottom border in light gray. Inside the header, create a horizontal layout with three sections:

LEFT SECTION: Display the StartupAI logo. This includes a small emerald green square (32 by 32 pixels) with rounded corners containing a white letter S. Next to it, show "StartupAI" in light font weight at 18 pixels. Make this clickable to navigate home.

CENTER-RIGHT SECTION (hide on mobile): Show completion tracking with small gray text "Completion", then the fraction of completed sections like "7/11" in medium weight, followed by a horizontal progress bar that is 128 pixels wide and 6 pixels tall with gray background and emerald green fill, and finally the percentage like "64%" in medium weight.

RIGHT SECTION: Display three action buttons in a row - Save (with icon), Download (icon only), and Share (icon only). Style these as subtle gray buttons that turn emerald on hover.

MOBILE VARIATION: Below the header on small screens, add a full-width progress bar with the completion fraction on the right side.

Below the header, create the main content container with maximum width of 1600 pixels, centered on the page. Add horizontal padding of 24 pixels on mobile and 48 pixels on desktop. Add vertical padding of 32 pixels on mobile and 48 pixels on desktop.

Use smooth transitions for all interactive elements - 200 milliseconds for buttons, 300 milliseconds for focus states.

---

## Prompt 2: Design the Page Title Section

**Task:** Create the introductory area with title, description, and breadcrumb.

**Requirements:**

At the top of the main content area, create a section with generous bottom margin (48 pixels).

BREADCRUMB: Add a small link (14 pixels) in emerald green that says "← View Classic Lean Canvas". This should be clickable and turn darker emerald on hover.

MAIN TITLE: Below that, display "Lean Canvas" in very large font size (40 pixels on mobile, 48 pixels on desktop) with light font weight (300). Use near-black color (hex 212427) for maximum readability and impact.

SUBTITLE: Add a paragraph below the title in 18 pixel font size, gray color (hex 6B7280), with relaxed line height (1.6). The text should explain: "A strategic one-page business model template for validating your startup idea. Complete each section thoughtfully to build a comprehensive view of your business." Limit the width to 768 pixels for optimal readability.

SAVE TIMESTAMP: If there is a last saved time, display it in small gray text (14 pixels, hex 9CA3AF) like "Last saved 2:45 PM".

Space all elements vertically with appropriate margins - 12 pixels between title and subtitle, 8 pixels to timestamp.

---

## Prompt 3: Build the Three-Column Grid System

**Task:** Create the responsive grid layout for canvas sections.

**Requirements:**

Below the page title section, create a grid layout that adapts to screen size.

DESKTOP LAYOUT (1024 pixels and wider):
- Display three equal-width columns
- Gap between columns: 32 pixels
- Each column is a vertical stack of section cards

TABLET LAYOUT (768 to 1023 pixels):
- Switch to two columns or single column
- Reduce gap to 24 pixels
- Maintain card proportions

MOBILE LAYOUT (below 768 pixels):
- Single column only
- Cards stack vertically
- Gap between cards: 24 pixels
- Full width usage

COLUMN ASSIGNMENTS:

Column One (Problem Side) contains these sections in order:
- Problem section
- Existing Alternatives section
- Key Metrics section

Column Two (Solution Side) contains these sections in order:
- Solution section
- Unique Value Proposition section (SPECIAL HIGHLIGHT)
- Unfair Advantage section
- Channels section

Column Three (Customer and Economics) contains these sections in order:
- Customer Segments section
- Early Adopters section
- Cost Structure section
- Revenue Streams section

Each column should have equal total height through careful sizing of individual cards. Use consistent spacing between all cards within columns (24 pixels on mobile, 32 pixels on desktop).

---

## Prompt 4: Design a Standard Canvas Card Component

**Task:** Create the reusable section card with title, guidance, and input.

**Requirements:**

Each canvas section appears as a refined card with white background, hairline border (1 pixel, hex E5E7EB), and rounded corners (12 pixel border radius).

CARD PADDING: 24 pixels on mobile, 32 pixels on desktop. This creates generous breathing room around content.

CARD HEADER AREA:

At the top of the card, create a horizontal row with two items:

LEFT: Section title in large size (20 pixels on mobile, 24 pixels on desktop) with light font weight (300) and near-black color (hex 212427). Examples: "Problem", "Solution", "Customer Segments".

RIGHT: Completion checkmark (conditional - only shows when section has 20+ characters). This is a small circle (20 pixels diameter) with light green background (hex DCF9E3), emerald border (hex 0d5f4e), and a white checkmark icon inside (12 pixels).

GUIDANCE TEXT:

Below the header, add helper text in 14 pixel font size, gray color (hex 6B7280), with relaxed line height (1.5). This provides context like "List the top 1-3 problems your customers face". Add 16 pixel margin below this text.

INPUT TEXTAREA:

Create a full-width multi-line text input with these specifications:
- Padding: 12 pixels vertical, 16 pixels horizontal
- Border radius: 8 pixels
- Border: 1 pixel solid
- Font size: 15 pixels
- Line height: 1.6
- No resize handle (fixed to specified rows)

UNFOCUSED STATE:
- Background: very light gray (hex F9FAFB)
- Border color: light gray (hex E5E7EB)
- Text color: near-black (hex 212427)
- Placeholder text: medium gray (hex 9CA3AF)

FOCUSED STATE:
- Background: pure white (hex FFFFFF)
- Border color: emerald green (hex 0d5f4e)
- Add subtle ring: 2 pixels emerald at 10% opacity
- Add soft shadow for depth
- Smooth transition: 300 milliseconds ease-out

PLACEHOLDER TEXT:

Each section has realistic example text. For Problem section: "e.g., Small businesses struggle to manage customer data across multiple tools, leading to missed opportunities and poor customer experience..."

CARD HOVER (optional):
- Subtle border color change from gray to slightly darker gray
- No other changes (cards are not clickable)

ROWS PROPERTY:

Different sections have different heights based on content needs:
- Problem: 6 rows (~144 pixels)
- Solution: 6 rows (~144 pixels)
- Customer Segments: 6 rows (~144 pixels)
- Key Metrics: 5 rows (~120 pixels)
- Unique Value Proposition: 5 rows (~120 pixels)
- All others: 4 rows (~96 pixels)

---

## Prompt 5: Design the Special Unique Value Proposition Card

**Task:** Create the highlighted center card with green accent.

**Requirements:**

The Unique Value Proposition card follows the same structure as standard cards BUT has special visual treatment to make it the focal point of the canvas.

BACKGROUND: Instead of pure white, use light green tint (hex DCF9E3 at 30% opacity). This creates a soft, warm glow that draws the eye.

BORDER: Increase border width from 1 pixel to 2 pixels. Keep emerald green color (hex 0d5f4e). This creates stronger visual weight and hierarchy.

POSITIONING: Place this card in the center column, second position (below Solution, above Unfair Advantage). This central placement reinforces its importance.

CONTENT STRUCTURE (same as standard):
- Title: "Unique Value Proposition" (24 pixels, light weight)
- Guidance: "Single, clear, compelling message that states why you are different and worth buying"
- Input area: 5 rows with white background (not green - keep input clean)
- Checkmark: Same as standard cards

PLACEHOLDER: "e.g., The only CRM that integrates natively with your existing tools in under 5 minutes, no technical setup required, trusted by 500+ fast-growing startups..."

STATES: Focus and completion states work exactly like standard cards, but the green tinted background remains constant.

RATIONALE: This section is the most critical part of any Lean Canvas. The visual hierarchy must immediately communicate its importance. The green highlight creates a "this is it" moment without being loud or distracting.

---

## Prompt 6: Implement Progress Tracking System

**Task:** Add real-time completion tracking and visual feedback.

**Requirements:**

COMPLETION LOGIC:

Monitor each of the eleven section inputs. A section is considered "complete" when the user has entered more than twenty characters of actual text (not just whitespace).

When a section becomes complete:
- Immediately show the green checkmark icon (fade in over 200 milliseconds)
- Update the completion counter in the header
- Update the progress bar fill percentage
- Small scale animation on checkmark: grow from 0.9 to 1.0

PROGRESS BAR:

In the header's center-right area, display a horizontal progress indicator:
- Background: light gray (hex E5E7EB)
- Fill: emerald green (hex 0d5f4e)
- Dimensions: 128 pixels wide, 6 pixels tall
- Border radius: full (creates pill shape)
- Transition: 500 milliseconds ease-out when percentage changes

COMPLETION COUNTER:

Show fraction format like "7/11" where:
- First number: count of completed sections (20+ characters)
- Second number: always 11 (total sections)
- Font: 14 pixels, medium weight

PERCENTAGE DISPLAY:

Calculate percentage as: (completed sections / 11) × 100
Round to nearest integer. Display like "64%" in medium weight next to progress bar.

MOBILE BEHAVIOR:

On screens below 768 pixels width:
- Hide the labeled progress group in header
- Show simplified progress bar below header
- Full-width bar with just the fraction "7/11" on the right side
- Same emerald fill animation

NO COMPLETION PRESSURE:

The progress tracking should feel informative, not pushy. No notifications, no timers, no pressure. Users work at their own strategic pace.

---

## Prompt 7: Design the Bottom Call-to-Action Section

**Task:** Create the final action area with save and export options.

**Requirements:**

At the bottom of the canvas grid, add a horizontal card with white background, light gray border, rounded corners (12 pixels), and generous padding (32 pixels).

LAYOUT: Two sections side by side (stack vertically on mobile):

LEFT SIDE - Messaging:
- Heading: "Ready to validate your canvas?" (18 pixels, medium weight, near-black)
- Subtext: "Export your completed canvas or continue refining your business model." (14 pixels, gray color hex 6B7280)
- Vertical spacing: 4 pixels between heading and subtext

RIGHT SIDE - Action Buttons:
- Two buttons in horizontal row with 12 pixel gap
- Stack vertically on mobile

SAVE DRAFT BUTTON:
- Text: "Save Draft"
- Background: light gray (hex F3F4F6)
- Text color: dark gray (hex 111827)
- Padding: 12 pixels vertical, 24 pixels horizontal
- Border radius: 8 pixels
- Hover: slightly darker gray background (hex E5E7EB)
- Transition: 200 milliseconds

EXPORT CANVAS BUTTON:
- Text: "Export Canvas" with download icon
- Background: emerald green (hex 0d5f4e)
- Text color: white
- Padding: 12 pixels vertical, 24 pixels horizontal
- Border radius: 8 pixels
- Icon: Download arrow, 16 pixels, left of text
- Gap between icon and text: 8 pixels
- Hover: darker emerald (hex 0a4a3a)
- Hover scale: 1.02 (very subtle)
- Transition: 200 milliseconds

DISABLED STATE (Export button when incomplete):
- Background: medium gray (hex D1D5DB)
- Text color: gray (hex 6B7280)
- Cursor: not-allowed
- No hover effects

RESPONSIVE:
- Desktop: side-by-side layout, buttons aligned right
- Mobile: stacked layout, buttons full-width

---

## Prompt 8: Add All Section Content and Placeholders

**Task:** Populate each section with appropriate guidance and examples.

**Requirements:**

For each of the eleven sections, configure the following text content:

PROBLEM SECTION:
- Title: "Problem"
- Guidance: "List the top 1-3 problems your customers face"
- Placeholder: "e.g., Small businesses struggle to manage customer data across multiple tools, leading to missed opportunities and poor customer experience. Manual data entry causes errors and wastes 10+ hours per week..."
- Rows: 6

CUSTOMER SEGMENTS SECTION:
- Title: "Customer Segments"
- Guidance: "Who are your target customers?"
- Placeholder: "e.g., B2B SaaS companies with 10-50 employees, primarily in tech sector, annual revenue $1M-$10M, growth-focused, using multiple disconnected tools..."
- Rows: 6

UNIQUE VALUE PROPOSITION SECTION:
- Title: "Unique Value Proposition"
- Guidance: "Single, clear, compelling message that states why you are different and worth buying"
- Placeholder: "e.g., The only CRM that integrates natively with your existing tools in under 5 minutes, no technical setup required, trusted by 500+ fast-growing startups..."
- Rows: 5
- SPECIAL: Green highlighted card

SOLUTION SECTION:
- Title: "Solution"
- Guidance: "Outline your core product or service"
- Placeholder: "e.g., Cloud-based CRM with AI-powered automation, native integrations with 50+ popular tools, real-time analytics dashboard, mobile app for on-the-go access..."
- Rows: 6

CHANNELS SECTION:
- Title: "Channels"
- Guidance: "How will you reach your customers?"
- Placeholder: "e.g., Content marketing (SEO-optimized blog), LinkedIn outreach and thought leadership, partner referral program, product-led growth strategy, industry conferences and events..."
- Rows: 4

REVENUE STREAMS SECTION:
- Title: "Revenue Streams"
- Guidance: "How will you make money?"
- Placeholder: "e.g., Monthly subscription ($49-$199/mo based on team size), annual plans with 20% discount, enterprise custom pricing for 100+ users, implementation services..."
- Rows: 4

COST STRUCTURE SECTION:
- Title: "Cost Structure"
- Guidance: "What are your major costs?"
- Placeholder: "e.g., Cloud infrastructure (AWS/Google Cloud), engineering team (5 full-time developers), sales and marketing (30% of revenue), customer support and success team..."
- Rows: 4

KEY METRICS SECTION:
- Title: "Key Metrics"
- Guidance: "What key numbers tell you how your business is doing?"
- Placeholder: "e.g., Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), Churn Rate, Net Promoter Score (NPS), Daily Active Users..."
- Rows: 5

UNFAIR ADVANTAGE SECTION:
- Title: "Unfair Advantage"
- Guidance: "Something that cannot easily be copied or bought"
- Placeholder: "e.g., Proprietary AI model trained on 10M+ customer interactions, exclusive partnerships with top platforms (Salesforce, HubSpot, Slack), founding team with 40+ years combined experience from Google and Salesforce..."
- Rows: 4

EXISTING ALTERNATIVES SECTION:
- Title: "Existing Alternatives"
- Guidance: "What are customers using today?"
- Placeholder: "e.g., Salesforce (too complex and expensive for small teams), HubSpot (limited integrations, high learning curve), spreadsheets (manual, error-prone, no automation), disconnected point solutions..."
- Rows: 4

EARLY ADOPTERS SECTION:
- Title: "Early Adopters"
- Guidance: "Characteristics of your first customers"
- Placeholder: "e.g., Tech-savvy founders and operations managers aged 30-45, frustrated with current CRM solutions, willing to try new tools, active in startup communities, value time savings over cost..."
- Rows: 4

All placeholder text should feel realistic and specific, not generic. Use concrete examples that help users understand what type of content to enter.

---

## Prompt 9: Implement Save and Export Functionality

**Task:** Add data persistence and export capabilities.

**Requirements:**

AUTO-SAVE BEHAVIOR:

Implement automatic saving of canvas content:
- Trigger save when user stops typing for 2 seconds (debounced)
- Trigger save when user clicks away from any input (on blur)
- Trigger save every 30 seconds if there are unsaved changes
- Update "Last saved" timestamp after each successful save
- Show timestamp like "Last saved 2:45 PM" below page title
- No loading spinners or modals - silent background save

MANUAL SAVE:

When user clicks "Save" button in header:
- Immediately save all current content
- Update timestamp
- Show subtle success feedback (optional: brief green border flash on save button)
- No blocking modals or alerts

EXPORT FUNCTIONALITY:

When user clicks "Export Canvas" button:
- Only enable button when all 11 sections are complete (20+ characters each)
- Generate a formatted version of the canvas
- Options: PDF download, PNG image, or formatted text
- Include all section titles, content, and subtle StartupAI branding
- Maintain the visual design aesthetic in exported format
- File name: "lean-canvas-[date].pdf" or similar

DATA PERSISTENCE:

Store canvas data in browser local storage as backup:
- Save user inputs as they type
- Restore content if user refreshes page
- Clear storage on explicit "New Canvas" action
- In production: sync to backend database via API

UNSAVED CHANGES WARNING:

If user tries to navigate away with unsaved changes:
- Show browser confirmation dialog
- Message: "You have unsaved changes. Leave anyway?"
- Only if changes exist since last save

---

## Prompt 10: Add Responsive Mobile Optimizations

**Task:** Ensure perfect mobile experience with touch-friendly interactions.

**Requirements:**

MOBILE LAYOUT ADJUSTMENTS (screens below 768 pixels):

Header:
- Reduce horizontal padding to 16 pixels
- Logo text may hide on very small screens, keep icon
- Move progress bar below header as full-width element
- Action buttons show icons only (hide text labels)

Page Title:
- Reduce font size to 36 pixels
- Maintain light weight and near-black color
- Subtitle remains at 16 pixels

Canvas Grid:
- Switch to single column layout
- Cards stack vertically with 24 pixel gaps
- Full width (minus container padding)

Section Cards:
- Reduce padding to 20 pixels
- Section titles reduce to 18 pixels
- Maintain 4-6 row heights for inputs
- Touch target for inputs: minimum 44 pixels tall

Bottom CTA:
- Stack vertically: message on top, buttons below
- Buttons become full-width
- Maintain 12 pixel gap between buttons

TOUCH INTERACTIONS:

Input fields:
- Minimum touch target: 44 pixels (iOS standard)
- Prevent zoom on focus (use 16 pixel font minimum)
- Show mobile keyboard immediately on focus
- Allow easy scrolling while keyboard is open

Buttons:
- Minimum 44 pixel height for touch targets
- Adequate spacing (12+ pixels) between interactive elements
- Clear hover states even on touch (press state)

KEYBOARD BEHAVIOR:

When mobile keyboard appears:
- Scroll focused input into view
- Maintain padding above input (40 pixels)
- Don't resize entire viewport (use fixed positioning)
- "Done" button in keyboard saves and closes

MOBILE-SPECIFIC FEATURES:

Add "Scroll to top" button when user scrolls down:
- Appears after scrolling 400 pixels
- Fixed position bottom-right corner
- Emerald green circle with up arrow
- Smooth scroll animation to top

Simplify header when scrolling:
- Reduce header height slightly
- Hide completion text, keep only progress bar
- Maintain sticky positioning

PERFORMANCE:

Optimize for mobile devices:
- Lazy load sections below fold
- Debounce input handlers (300ms)
- Use CSS transforms for animations (GPU accelerated)
- Minimize reflows and repaints

---

## Prompt 11: Polish with Accessibility and Final Details

**Task:** Add accessibility features and professional finishing touches.

**Requirements:**

KEYBOARD NAVIGATION:

Ensure full keyboard support:
- Tab key moves through all inputs sequentially
- Shift+Tab moves backwards
- Enter key saves (when focused on button)
- Escape key blurs current input
- Focus indicators clearly visible (emerald ring)
- Logical tab order: header actions → inputs top to bottom → bottom CTA buttons

SCREEN READER SUPPORT:

Add semantic HTML and ARIA attributes:
- Use proper heading hierarchy (h1 for page title, h2 for section titles)
- Label all inputs with associated text
- Announce completion status: "Problem section: complete" or "pending"
- Progress bar has role="progressbar" with aria-valuenow and aria-valuemax
- Button states clearly announced
- Form landmark for canvas grid

FOCUS MANAGEMENT:

When page loads:
- Don't auto-focus any input (let user choose where to start)
- Maintain focus when keyboard navigating
- Focus rings clearly visible: 2 pixel emerald with 10% opacity outer ring
- No focus trap - users can always tab to next element

COLOR CONTRAST:

Verify all text meets WCAG AA standards:
- Emerald on cream background: 7.2:1 (AAA compliant)
- Gray-600 body text on cream: 4.8:1 (AA compliant)
- Placeholder text: 3.5:1 minimum (AA for large text)
- Focus indicators: 3:1 contrast minimum

ERROR HANDLING:

Although no strict validation:
- If save fails, show friendly error message
- Don't lose user data
- Retry save automatically
- Store in local storage as backup

LOADING STATES:

If loading saved canvas:
- Show skeleton screens for cards (gray boxes)
- Fade in content when loaded (300ms)
- Maintain layout stability (no layout shift)

EMPTY STATES:

When canvas is brand new:
- All inputs show placeholder text
- No completion indicators
- Progress shows 0/11
- Welcoming feel, not intimidating

POLISH DETAILS:

Typography:
- Line height consistently 1.5-1.6 for readability
- Letter spacing: normal (no tight or loose tracking)
- Font smoothing: antialiased for crisp text

Spacing:
- Consistent 8-pixel grid system
- 24/32 pixel gaps between major elements
- 12/16 pixel internal padding
- Generous whitespace throughout

Micro-interactions:
- Button hover: 200ms ease-out
- Input focus: 300ms ease-out
- Checkmark appear: 200ms ease-out with scale
- Progress bar fill: 500ms ease-out

FINAL TESTING CHECKLIST:

Test on these scenarios:
- Desktop (1440px+ screen)
- Laptop (1280px screen)
- Tablet (768px screen)
- Mobile (375px screen)
- Keyboard-only navigation
- Screen reader (VoiceOver or NVDA)
- High contrast mode
- Slow network (save/load states)
- Cleared cache (new user experience)

---

## Prompt 12: Document and Handoff

**Task:** Create clear documentation for design handoff and maintenance.

**Requirements:**

Create a design system document that includes:

COLOR TOKENS:
- List all colors with hex codes and usage descriptions
- Background colors (cream, white, light gray)
- Brand colors (emerald variations)
- Text colors (near-black, grays)
- Border colors (light gray variations)
- Interactive state colors (hover, focus, active)

TYPOGRAPHY TOKENS:
- Font families (primary sans-serif, optional serif)
- Font size scale (12, 14, 15, 18, 20, 24, 40, 48 pixels)
- Font weights (300 light, 400 regular, 500 medium)
- Line heights (1.2, 1.3, 1.5, 1.6)
- Letter spacing values (normal, 0.01em)

SPACING SCALE:
- 4px (micro)
- 8px (small)
- 12px (medium)
- 16px (base)
- 24px (large)
- 32px (xlarge)
- 48px (xxlarge)

COMPONENT SPECIFICATIONS:
- Section card dimensions and states
- Input field specs and states
- Button variations and states
- Progress bar specs
- Checkmark icon specs

RESPONSIVE BREAKPOINTS:
- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+
- Max container: 1600px

INTERACTION STATES:
- Default, hover, focus, active, disabled
- Transition timings and easing functions
- Animation specifications

ACCESSIBILITY REQUIREMENTS:
- Minimum color contrast ratios
- Touch target minimums (44px)
- Focus indicator specifications
- Screen reader considerations

EXPORT FORMATS:
- Design files (Figma, Sketch, Adobe XD)
- Style guide PDF
- Component library
- Asset exports (icons as SVG)

DEVELOPER NOTES:
- Recommended CSS framework (Tailwind CSS)
- Component structure (modular, reusable)
- State management approach
- API endpoints for save/load
- Performance considerations
- Browser support requirements

DESIGN RATIONALE:
- Why this layout structure
- Why these colors
- Why this typography
- Why these interactions
- Business goals alignment
- User research insights

MAINTENANCE PLAN:
- How to update content
- How to add new sections
- How to modify styling
- Version control strategy
- Design system governance

---

## Implementation Checklist

Use this checklist to track progress:

**Foundation:**
- [ ] Page structure with header and main container
- [ ] Sticky header with logo and actions
- [ ] Progress tracking system
- [ ] Three-column responsive grid

**Components:**
- [ ] Standard section card component
- [ ] Special UVP highlighted card
- [ ] Bottom CTA section
- [ ] Progress indicators

**Content:**
- [ ] All 11 sections with correct titles
- [ ] Guidance text for each section
- [ ] Realistic placeholder examples
- [ ] Appropriate row heights

**Interactions:**
- [ ] Input focus states
- [ ] Completion tracking logic
- [ ] Progress bar animations
- [ ] Button hover states
- [ ] Save functionality
- [ ] Export functionality

**Responsive:**
- [ ] Desktop layout (3 columns)
- [ ] Tablet layout (2 or 1 column)
- [ ] Mobile layout (stacked)
- [ ] Touch-friendly inputs
- [ ] Mobile-optimized header

**Accessibility:**
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Screen reader support
- [ ] Color contrast verified
- [ ] ARIA labels added

**Polish:**
- [ ] Typography refined
- [ ] Spacing consistent
- [ ] Transitions smooth
- [ ] Empty states handled
- [ ] Loading states designed
- [ ] Error handling added

**Testing:**
- [ ] All screen sizes tested
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Save/load verified
- [ ] Export functionality works
- [ ] Performance optimized

**Documentation:**
- [ ] Design system documented
- [ ] Component specs written
- [ ] Handoff package created
- [ ] Maintenance guide written

---

**Total Implementation Time Estimate:** 16-24 hours  
**Complexity Level:** Medium-High  
**Recommended Team:** 1 designer + 1 frontend developer  
**Design Tools:** Figma or Sketch  
**Development Stack:** React + Tailwind CSS recommended  

**Status:** Ready for implementation  
**Last Updated:** February 6, 2026
