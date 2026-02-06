# Orbital Loop Architecture - Implementation Prompts

## Prompt 1: Create the Main Component

```
Create a React component for the "Orbital Loop Architecture" section.

REQUIREMENTS:
- Component name: OrbitalLoopArchitecture
- Location: /components/home/OrbitalLoopArchitecture.tsx
- Design: Calm, minimal, architectural diagram
- Color system: Beige background (#FAF9F7), emerald green (#0d5f4e)

STRUCTURE:
1. Section header:
   - "VARIANT 2 OF 3" (small, gray, uppercase)
   - "ORBITAL LOOP ARCHITECTURE" (small, gray, uppercase)
   
2. Center core circle:
   - Large emerald green circle (#0d5f4e)
   - "STARTUPAI" text (white, serif, uppercase, centered)
   - "CORE SYSTEM" text (white, small, below)
   - Size: 300px diameter (desktop)
   
3. Orbital ring:
   - Circular stroke around core
   - Light gray (#E5E7EB)
   - 600px diameter (desktop)
   - 1px stroke width
   
4. Five orbital nodes (white circles with icons):
   - MOMENTUM (top, 0°) - Zap icon
   - FOUNDATION (upper right, 72°) - Sprout icon
   - ANALYSIS (lower right, 144°) - TrendingUp icon
   - WORKFLOW (lower left, 216°) - RefreshCw icon
   - SCALING (upper left, 288°) - Network icon

LAYOUT:
- Full-width container
- Centered diagram
- Padding: py-24 (desktop), py-16 (mobile)
- Background: bg-[#FAF9F7]

RESPONSIVE:
- Desktop (1440px+): 300px core, 600px orbit, 80px nodes
- Tablet (768-1439px): 240px core, 480px orbit, 64px nodes
- Mobile (<768px): 180px core, 360px orbit, 56px nodes

TYPOGRAPHY:
- Section header: Inter, 11px, uppercase, letter-spacing 0.1em, text-gray-400
- Core text: Serif font, 32px (STARTUPAI), 11px (CORE SYSTEM), white
- Node labels: Inter, 10px, uppercase, letter-spacing 0.1em, text-gray-600

ICONS:
- Use Lucide React
- Size: 32px (desktop), 24px (tablet), 20px (mobile)
- Color: #0d5f4e

POSITIONING:
- Use absolute positioning for nodes
- Calculate positions using CSS transforms
- Node formula: transform: rotate(deg) translate(radius) rotate(-deg)

ANIMATION (optional):
- Fade in on scroll
- Core circle: scale from 0.8 to 1
- Nodes: sequential fade-in with stagger
- Hover: gentle icon pulse

Use Tailwind CSS for styling. Export as default.
```

---

## Prompt 2: Create the Orbital Node Component

```
Create a reusable React component for orbital nodes.

COMPONENT:
- Name: OrbitalNode
- Location: /components/home/OrbitalNode.tsx
- Purpose: Display a single phase node in the orbital diagram

PROPS:
interface OrbitalNodeProps {
  label: string;           // e.g., "MOMENTUM"
  icon: LucideIcon;        // React component
  angle: number;           // Degrees (0-360)
  radius: number;          // Distance from center
  size?: number;           // Circle diameter (default: 80px)
  iconSize?: number;       // Icon size (default: 32px)
  className?: string;
}

STRUCTURE:
1. Wrapper div:
   - Absolute positioning
   - Transform: rotate(angle) translate(radius) rotate(-angle)
   
2. Circle:
   - White background
   - Light gray border (#E5E7EB)
   - Centered icon (emerald green #0d5f4e)
   - Size: configurable via props
   
3. Label:
   - Below circle
   - Uppercase, small (10px)
   - Gray text (#6B7280)
   - Letter-spacing: 0.1em
   - Centered

STATES:
- Default: Static
- Hover: Icon scales slightly (1.0 → 1.1)

STYLING:
- Use Tailwind CSS
- Rounded-full for circle
- Flex for centering icon
- Transition for hover effects

EXAMPLE USAGE:
<OrbitalNode 
  label="MOMENTUM" 
  icon={Zap} 
  angle={0} 
  radius={300}
  size={80}
  iconSize={32}
/>

Export as default.
```

---

## Prompt 3: Create Position Calculation Utilities

```
Create utility functions for orbital positioning.

FILE:
- Location: /lib/orbitalPositions.ts
- Purpose: Calculate node positions on circular orbit

FUNCTIONS:

1. degToRad(degrees: number): number
   - Convert degrees to radians
   
2. getNodePosition(angle: number, radius: number): { x: number, y: number }
   - Calculate x, y coordinates for a node at given angle
   - Angle: 0 = top, clockwise
   - Return: { x, y } relative to center
   
3. getOrbitalNodes(): OrbitalNode[]
   - Return array of 5 nodes with positions
   - Interface:
     {
       id: string;
       label: string;
       icon: string;  // icon name
       angle: number;
     }
   
   - Nodes:
     1. { id: 'momentum', label: 'MOMENTUM', icon: 'Zap', angle: 0 }
     2. { id: 'foundation', label: 'FOUNDATION', icon: 'Sprout', angle: 72 }
     3. { id: 'analysis', label: 'ANALYSIS', icon: 'TrendingUp', angle: 144 }
     4. { id: 'workflow', label: 'WORKFLOW', icon: 'RefreshCw', angle: 216 }
     5. { id: 'scaling', label: 'SCALING', icon: 'Network', angle: 288 }

MATH:
- Use standard trigonometry
- x = radius * sin(radians)
- y = -radius * cos(radians)  // Negative because CSS y-axis is inverted

Export all functions.
```

---

## Prompt 4: Create SVG Orbital Ring

```
Create an SVG component for the orbital ring stroke.

COMPONENT:
- Name: OrbitalRing
- Location: /components/home/OrbitalRing.tsx
- Purpose: Draw circular stroke around core

PROPS:
interface OrbitalRingProps {
  diameter: number;      // Total diameter in px
  strokeWidth?: number;  // Default: 1
  strokeColor?: string;  // Default: '#E5E7EB'
  animate?: boolean;     // Stroke draw animation
  className?: string;
}

SVG STRUCTURE:
<svg width={diameter} height={diameter} className={className}>
  <circle
    cx={diameter / 2}
    cy={diameter / 2}
    r={(diameter / 2) - strokeWidth}
    fill="none"
    stroke={strokeColor}
    strokeWidth={strokeWidth}
  />
</svg>

ANIMATION (if animate=true):
- Use stroke-dasharray and stroke-dashoffset
- Animate from 0 to full circle (2πr)
- Duration: 1s
- Easing: ease-out
- Delay: 0.3s (after core circle)

STYLING:
- Absolute positioning
- Centered in container
- Responsive size via props

EXAMPLE USAGE:
<OrbitalRing 
  diameter={600} 
  strokeWidth={1}
  strokeColor="#E5E7EB"
  animate={true}
/>

Export as default.
```

---

## Prompt 5: Integrate into Homepage

```
Integrate the OrbitalLoopArchitecture component into the homepage.

LOCATION:
- File: /app/home-v5/page.tsx (or current homepage)
- Position: After "Guided Flow" section, before "Features"

INTEGRATION:
1. Import component:
   import OrbitalLoopArchitecture from '@/components/home/OrbitalLoopArchitecture';

2. Add section:
   <OrbitalLoopArchitecture />

3. Ensure proper spacing:
   - 120px margin top/bottom (desktop)
   - 80px margin top/bottom (mobile)

SECTION ORDER:
1. Hero
2. How It Works
3. Guided Flow
4. ** Orbital Loop Architecture ** (NEW)
5. Features
6. Single Source
7. Outcomes
8. CTA

VISIBILITY:
- Lazy load if below fold
- Animate on scroll into view
- Ensure smooth transitions

TEST:
- Desktop (1440px+)
- Tablet (768-1439px)
- Mobile (375px+)
- Dark mode (if applicable)
```

---

## Prompt 6: Add Hover Interactions (Optional)

```
Enhance the OrbitalLoopArchitecture with interactive hover states.

INTERACTIONS:

1. Node Hover:
   - Icon scales from 1.0 to 1.1
   - Transition: 0.3s ease-out
   - Cursor: pointer
   
2. Core Hover:
   - Subtle glow effect (box-shadow)
   - Text remains static
   
3. Connected Line (optional):
   - On node hover, highlight connection to core
   - Draw line from node to core circle
   - Use SVG line element
   - Animate stroke-dashoffset

4. Tooltip (optional):
   - On node hover, show phase description
   - Position: Above node
   - Design: Small white card with shadow
   - Content: 1-2 sentence description per phase

DESCRIPTIONS:
- MOMENTUM: "Build initial traction and market presence"
- FOUNDATION: "Validate core assumptions and product-market fit"
- ANALYSIS: "Measure, learn, and optimize based on data"
- WORKFLOW: "Execute consistently with guided daily operations"
- SCALING: "Expand reach and grow sustainably"

ACCESSIBILITY:
- Add aria-labels to nodes
- Ensure keyboard navigation
- Provide alt text for diagram

Implement with Tailwind and Framer Motion for smooth animations.
```

---

## Prompt 7: Add Scroll Animations

```
Add sophisticated scroll-triggered animations to the Orbital Loop.

LIBRARY:
- Use Framer Motion (motion/react)
- Or use Intersection Observer + Tailwind transitions

ANIMATION SEQUENCE:

1. On Scroll Into View (threshold: 0.3):
   
   a. Core Circle:
      - Initial: opacity 0, scale 0.8
      - Animate: opacity 1, scale 1
      - Duration: 0.6s
      - Easing: ease-out
      
   b. Orbital Ring:
      - Initial: stroke-dashoffset = circumference
      - Animate: stroke-dashoffset = 0
      - Duration: 1s
      - Easing: ease-out
      - Delay: 0.3s
      
   c. Nodes (sequential):
      - Initial: opacity 0, y: -20
      - Animate: opacity 1, y: 0
      - Duration: 0.4s per node
      - Stagger: 0.1s between nodes
      - Delay: 0.6s (after ring starts)
      - Order: MOMENTUM → FOUNDATION → ANALYSIS → WORKFLOW → SCALING

2. Continuous Subtle Motion (optional):
   - Core circle: Very gentle pulse (1.0 → 1.02 → 1.0)
   - Duration: 3s
   - Loop: infinite
   - Easing: ease-in-out

IMPLEMENTATION:
- Use useInView hook from Framer Motion
- Set triggerOnce: true (don't re-animate on scroll up)
- Ensure smooth performance (GPU-accelerated transforms only)

EXAMPLE:
const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

<div ref={ref}>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6 }}
  >
    {/* Core circle */}
  </motion.div>
</div>
```

---

## Prompt 8: Create Variants (Future)

```
Create two alternative layout variants for A/B testing.

VARIANT 1: Linear Flow
- Horizontal layout (left to right)
- 5 phases in a row
- Connecting lines between phases
- Core system as first element

VARIANT 2: Orbital Loop (Current)
- Circular layout with center core
- 5 nodes orbiting around
- Continuous flow metaphor

VARIANT 3: Matrix Grid
- 2x3 grid layout
- Core system in center (larger)
- 5 phases surrounding in grid cells
- Balanced, structured appearance

COMPONENT:
interface OrbitalLoopArchitectureProps {
  variant?: 'linear' | 'orbital' | 'matrix';
}

Use same content, different layouts. Allow easy switching for testing.
```

---

## Quick Implementation Checklist

```
[ ] 1. Create OrbitalLoopArchitecture.tsx (main component)
[ ] 2. Create OrbitalNode.tsx (reusable node)
[ ] 3. Create orbitalPositions.ts (utilities)
[ ] 4. Create OrbitalRing.tsx (SVG ring)
[ ] 5. Integrate into homepage
[ ] 6. Test responsive behavior
[ ] 7. Add hover interactions (optional)
[ ] 8. Add scroll animations (optional)
[ ] 9. Verify accessibility
[ ] 10. Test on all devices
```

---

## Development Order

**Phase 1: Core (1-2 hours)**
- Static diagram with all elements
- No animations
- Responsive sizing

**Phase 2: Polish (1 hour)**
- Hover states
- Visual refinements
- Accessibility

**Phase 3: Animation (1 hour)**
- Scroll triggers
- Smooth transitions
- Performance optimization

**Total:** 3-4 hours

---

**Status:** Ready for implementation  
**Priority:** High  
**Complexity:** Medium  
**Dependencies:** Lucide React, Tailwind CSS, Framer Motion (optional)
