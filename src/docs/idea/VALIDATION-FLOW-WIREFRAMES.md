# AI Validation Flow — Wireframes & Design Specs
## Premium SaaS Design for Startup Validation

**Version**: 1.0  
**Date**: February 2, 2026  
**Style**: Dark luxury, analytical, intelligent

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Screen 1: Processing Animation](#screen-1-processing-animation)
4. [Screen 2: Validation Complete Modal](#screen-2-validation-complete-modal)
5. [Screen 3: Results Dashboard](#screen-3-results-dashboard)
6. [Component Library](#component-library)
7. [Animation Specifications](#animation-specifications)
8. [Responsive Behavior](#responsive-behavior)

---

## Design Philosophy

### Core Principles

**Premium & Intelligent**
- Dark mode luxury aesthetic
- Confident, not playful
- Data-driven visualization
- Editorial typography

**Trustworthy & Analytical**
- Clear information hierarchy
- Professional consultant feel
- No gimmicks or flashy animations
- BCG-inspired sophistication

**Calm & Purposeful**
- Gentle animations (no bouncing)
- Generous whitespace
- Soft color transitions
- "AI thinking deeply" feel

---

## Color System

### Dark Mode Palette

```css
/* Backgrounds */
--bg-primary: #0A0E1A;          /* Deep navy, almost black */
--bg-secondary: #141925;        /* Card backgrounds */
--bg-tertiary: #1C2333;         /* Elevated surfaces */
--bg-overlay: rgba(10, 14, 26, 0.85); /* Modal backdrop */

/* Purple Accent (Primary) */
--purple-50: #F5F3FF;
--purple-100: #EDE9FE;
--purple-400: #A78BFA;          /* Soft glow */
--purple-500: #8B5CF6;          /* Primary accent */
--purple-600: #7C3AED;          /* Active states */
--purple-900: #4C1D95;          /* Deep purple */

/* Blue Accent (Secondary) */
--blue-400: #60A5FA;
--blue-500: #3B82F6;
--blue-600: #2563EB;

/* Success / Risk Colors */
--success-green: #10B981;       /* Positive signals */
--success-bg: rgba(16, 185, 129, 0.1);

--warning-orange: #F59E0B;      /* Warnings */
--warning-bg: rgba(245, 158, 11, 0.1);

--danger-red: #EF4444;          /* Critical risks */
--danger-bg: rgba(239, 68, 68, 0.1);

/* Text */
--text-primary: #F9FAFB;        /* White-ish */
--text-secondary: #D1D5DB;      /* Light gray */
--text-tertiary: #9CA3AF;       /* Medium gray */
--text-muted: #6B7280;          /* Dark gray */

/* Borders */
--border-subtle: rgba(255, 255, 255, 0.06);
--border-medium: rgba(255, 255, 255, 0.1);
--border-strong: rgba(255, 255, 255, 0.15);
```

### Gradient System

```css
/* Purple to Blue */
--gradient-primary: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);

/* Dark overlay for backgrounds */
--gradient-overlay: linear-gradient(180deg, 
  rgba(10, 14, 26, 0) 0%, 
  rgba(10, 14, 26, 0.8) 100%
);

/* Glow effects */
--glow-purple: 0 0 20px rgba(139, 92, 246, 0.3);
--glow-blue: 0 0 20px rgba(59, 130, 246, 0.3);
```

---

## Screen 1: Processing Animation

### Wireframe (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    [Blurred content behind]             │
│                                                         │
│                                                         │
│         ┌─────────────────────────────────────┐        │
│         │                                     │        │
│         │  ┌────────────────────────────────┐│        │
│         │  │                                ││        │
│         │  │    [Animated spinner/pulse]    ││        │
│         │  │         ◐ ◓ ◑ ◒               ││        │
│         │  │                                ││        │
│         │  └────────────────────────────────┘│        │
│         │                                     │        │
│         │    AI Validation In Progress        │        │
│         │    This may take 20-30 seconds      │        │
│         │                                     │        │
│         │  ┌────────────────────────────────┐│        │
│         │  │ ████████████░░░░░░░░░░░  88%   ││        │
│         │  └────────────────────────────────┘│        │
│         │                                     │        │
│         │  ✓ Researching market data…         │        │
│         │  ✓ Analyzing competitors…           │        │
│         │  ✓ Evaluating industry trends…      │        │
│         │  ● AI processing insights…          │        │
│         │  ⃝ Calculating success score…       │        │
│         │  ⃝ Generating report…                │        │
│         │                                     │        │
│         └─────────────────────────────────────┘        │
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Detailed Specifications

#### Container
```
Width: 480px
Height: Auto (content-driven)
Background: #141925 (bg-secondary)
Border-radius: 16px
Border: 1px solid rgba(255, 255, 255, 0.06)
Box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4)
Padding: 48px
Backdrop: Blur(12px) + rgba(10, 14, 26, 0.85)
```

#### Spinner/Loader
```
Type: Circular segments or pulsing dots
Size: 64px diameter
Color: Purple gradient (#8B5CF6 → #3B82F6)
Animation: Smooth rotation or pulse (1.5s duration)
Position: Centered at top
Margin-bottom: 32px
```

#### Headline
```
Text: "AI Validation In Progress"
Font-size: 24px
Font-weight: 500
Color: #F9FAFB (text-primary)
Letter-spacing: -0.02em
Line-height: 1.2
Margin-bottom: 8px
```

#### Subheadline
```
Text: "This may take 20-30 seconds"
Font-size: 14px
Font-weight: 400
Color: #9CA3AF (text-tertiary)
Margin-bottom: 32px
```

#### Progress Bar
```
Height: 8px
Background: rgba(255, 255, 255, 0.06)
Border-radius: 4px
Overflow: hidden

Fill:
  Background: linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)
  Width: Animated 0% → 100%
  Box-shadow: 0 0 12px rgba(139, 92, 246, 0.5)
  Transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Percentage:
  Font-size: 14px
  Font-weight: 600
  Color: #8B5CF6
  Position: Right of bar
  Margin-left: 16px
```

#### Step List
```
Spacing: 16px between steps
Margin-top: 32px

Each step:
  Display: Flex, align-items center
  Gap: 12px
  Font-size: 14px
  Line-height: 1.4
  Transition: all 0.3s ease

States:
  Completed (✓):
    Icon: Green checkmark (#10B981)
    Text: #9CA3AF (faded)
    Opacity: 0.6
  
  Active (●):
    Icon: Purple dot (#8B5CF6) with pulse animation
    Text: #F9FAFB (bright)
    Font-weight: 500
    Glow: 0 0 8px rgba(139, 92, 246, 0.4)
  
  Pending (⃝):
    Icon: Empty circle, border only
    Text: #6B7280 (very faded)
    Opacity: 0.4
```

### Animation Sequence

#### Phase 1: Initial Load (0-0.5s)
- Modal fades in (opacity 0 → 1)
- Backdrop blur applies
- Container scales from 0.95 → 1

#### Phase 2: Spinner Start (0.5s+)
- Spinner begins rotation/pulsing
- Progress bar appears at 0%

#### Phase 3: Steps Execute (2-30s)
- Each step transitions: pending → active → completed
- Step 1: 0-5s (progress 0% → 15%)
- Step 2: 5-10s (progress 15% → 35%)
- Step 3: 10-15s (progress 35% → 55%)
- Step 4: 15-22s (progress 55% → 75%)
- Step 5: 22-27s (progress 75% → 90%)
- Step 6: 27-30s (progress 90% → 100%)

#### Phase 4: Completion (30s)
- All steps show checkmarks
- Progress bar fills to 100%
- Brief pause (0.5s)
- Fade to next screen

### Code Example

```tsx
interface ProcessingStep {
  id: string;
  label: string;
  duration: number;
  status: 'pending' | 'active' | 'completed';
}

const ProcessingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { id: '1', label: 'Researching market data…', duration: 5, status: 'pending' },
    { id: '2', label: 'Analyzing competitors…', duration: 5, status: 'pending' },
    { id: '3', label: 'Evaluating industry trends…', duration: 5, status: 'pending' },
    { id: '4', label: 'AI processing insights…', duration: 7, status: 'pending' },
    { id: '5', label: 'Calculating success score…', duration: 5, status: 'pending' },
    { id: '6', label: 'Generating report…', duration: 3, status: 'pending' },
  ]);

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-overlay flex items-center justify-center">
      <div className="w-[480px] bg-secondary rounded-2xl border border-subtle shadow-2xl p-12">
        {/* Spinner */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 relative">
            {/* Animated loader */}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-medium text-primary text-center mb-2">
          AI Validation In Progress
        </h2>
        <p className="text-sm text-tertiary text-center mb-8">
          This may take 20-30 seconds
        </p>

        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-2 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary shadow-glow-purple transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-purple-500 min-w-[3ch]">
            {progress}%
          </span>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-3">
              {step.status === 'completed' && (
                <CheckCircle className="w-5 h-5 text-success-green" />
              )}
              {step.status === 'active' && (
                <div className="w-5 h-5 rounded-full bg-purple-500 animate-pulse" />
              )}
              {step.status === 'pending' && (
                <div className="w-5 h-5 rounded-full border-2 border-muted opacity-40" />
              )}
              <span className={`text-sm ${
                step.status === 'completed' ? 'text-tertiary opacity-60' :
                step.status === 'active' ? 'text-primary font-medium' :
                'text-muted opacity-40'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
```

---

## Screen 2: Validation Complete Modal

### Wireframe (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    [Blurred background]                 │
│                                                         │
│      ┌──────────────────────────────────────────┐      │
│      │                                          │      │
│      │           ┌──────────────┐               │      │
│      │           │      ✓       │               │      │
│      │           └──────────────┘               │      │
│      │                                          │      │
│      │        Validation Complete               │      │
│      │    Step 1 of 6 — Startup Idea Validation │      │
│      │                                          │      │
│      │  ┌────────────────────────────────────┐  │      │
│      │  │                                    │  │      │
│      │  │         ╭─────────╮               │  │      │
│      │  │        │    68    │               │  │      │
│      │  │         ╰─────────╯               │  │      │
│      │  │      Success Score                │  │      │
│      │  │                                    │  │      │
│      │  └────────────────────────────────────┘  │      │
│      │                                          │      │
│      │  ┌──────────────────┐ ┌───────────────┐ │      │
│      │  │ 💚 Top Strength  │ │ ⚠️ Key Risk   │ │      │
│      │  │                  │ │               │ │      │
│      │  │ Strong problem-  │ │ Market        │ │      │
│      │  │ market fit       │ │ validation    │ │      │
│      │  │                  │ │ needed        │ │      │
│      │  └──────────────────┘ └───────────────┘ │      │
│      │                                          │      │
│      │  ┌────────────────────────────────────┐  │      │
│      │  │ Generate Market Analysis   70 ⓒ   │  │      │
│      │  └────────────────────────────────────┘  │      │
│      │                                          │      │
│      │         View Results First               │      │
│      │                                          │      │
│      └──────────────────────────────────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Detailed Specifications

#### Modal Container
```
Width: 560px
Height: Auto
Background: #141925
Border-radius: 20px
Border: 1px solid rgba(255, 255, 255, 0.08)
Box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5)
Padding: 48px
Backdrop: Blur(16px) + rgba(10, 14, 26, 0.9)
```

#### Success Icon
```
Size: 80px diameter
Background: rgba(16, 185, 129, 0.12) (success-bg)
Border: 2px solid rgba(16, 185, 129, 0.3)
Border-radius: 50%
Margin: 0 auto 24px
Display: Flex, center

Checkmark:
  Size: 40px
  Color: #10B981 (success-green)
  Stroke-width: 3px
  Animation: Draw-in effect (0.5s)
```

#### Title
```
Text: "Validation Complete"
Font-size: 28px
Font-weight: 600
Color: #F9FAFB
Text-align: Center
Letter-spacing: -0.03em
Margin-bottom: 8px
```

#### Subtitle
```
Text: "Step 1 of 6 — Startup Idea Validation"
Font-size: 14px
Font-weight: 400
Color: #9CA3AF
Text-align: Center
Margin-bottom: 32px
```

#### Score Circle
```
Container:
  Width: 100%
  Padding: 32px
  Background: rgba(139, 92, 246, 0.05)
  Border: 1px solid rgba(139, 92, 246, 0.2)
  Border-radius: 16px
  Margin-bottom: 24px

Circle:
  Size: 140px diameter
  Stroke-width: 8px
  Background: rgba(139, 92, 246, 0.08)
  Border: 4px solid #8B5CF6
  Border-radius: 50%
  Margin: 0 auto 16px
  
Number:
  Font-size: 56px
  Font-weight: 300 (ultra-light)
  Color: #F9FAFB
  Text-align: Center
  
Label:
  Font-size: 14px
  Font-weight: 500
  Color: #8B5CF6
  Text-transform: Uppercase
  Letter-spacing: 0.05em
  Text-align: Center
  Margin-top: 8px

Animation:
  Count-up from 0 to 68 (2s duration)
  Easing: ease-out
```

#### Insight Cards (2-column grid)
```
Grid: 2 columns, 16px gap
Margin-bottom: 24px

Top Strength Card:
  Background: rgba(16, 185, 129, 0.08)
  Border: 1px solid rgba(16, 185, 129, 0.2)
  Border-radius: 12px
  Padding: 20px
  
  Icon: 💚 or checkmark
  Title: "Top Strength"
  Font-size: 12px, uppercase, #10B981
  
  Content: "Strong problem-market fit"
  Font-size: 14px, #F9FAFB

Key Risk Card:
  Background: rgba(245, 158, 11, 0.08)
  Border: 1px solid rgba(245, 158, 11, 0.2)
  Border-radius: 12px
  Padding: 20px
  
  Icon: ⚠️ or alert
  Title: "Key Risk"
  Font-size: 12px, uppercase, #F59E0B
  
  Content: "Market validation needed"
  Font-size: 14px, #F9FAFB
```

#### Primary CTA Button
```
Width: 100%
Height: 56px
Background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)
Border: None
Border-radius: 12px
Box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3)
Margin-bottom: 16px
Cursor: Pointer
Transition: all 0.2s ease

Content:
  Display: Flex, justify-between, align-center
  Padding: 0 24px
  
  Text: "Generate Market Analysis"
  Font-size: 16px
  Font-weight: 600
  Color: #FFFFFF
  
  Badge: "70 ⓒ"
  Font-size: 14px
  Font-weight: 500
  Background: rgba(255, 255, 255, 0.15)
  Padding: 4px 12px
  Border-radius: 6px

Hover:
  Background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)
  Transform: translateY(-2px)
  Box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4)
```

#### Secondary CTA (Text Link)
```
Display: Block
Text-align: Center
Font-size: 14px
Font-weight: 500
Color: #D1D5DB
Text-decoration: None
Cursor: Pointer
Transition: color 0.2s ease

Hover:
  Color: #8B5CF6
  Text-decoration: Underline
```

### Animation Sequence

#### Entry (0-0.8s)
- Background blur in
- Modal fade + scale (0.9 → 1)
- Success icon draw-in

#### Score Animation (0.8-2.8s)
- Circle stroke animates
- Number counts up 0 → 68
- Purple glow pulses

#### Insight Cards (2.8-3.5s)
- Fade in, stagger 0.2s delay

#### Buttons (3.5-4s)
- Fade in from bottom

### Code Example

```tsx
const ValidationCompleteModal = ({ score = 68 }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    // Count-up animation
    const duration = 2000;
    const increment = score / (duration / 16);
    const timer = setInterval(() => {
      setDisplayScore(prev => {
        if (prev >= score) {
          clearInterval(timer);
          return score;
        }
        return Math.min(prev + increment, score);
      });
    }, 16);
    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-overlay flex items-center justify-center z-50">
      <div className="w-[560px] bg-secondary rounded-2xl border border-medium shadow-2xl p-12 animate-in">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success-bg border-2 border-success-green/30 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-success-green animate-draw-in" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-primary text-center mb-2">
          Validation Complete
        </h2>
        <p className="text-sm text-tertiary text-center mb-8">
          Step 1 of 6 — Startup Idea Validation
        </p>

        {/* Score Circle */}
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8 mb-6">
          <div className="w-36 h-36 mx-auto mb-4 rounded-full border-4 border-purple-500 bg-purple-500/8 flex items-center justify-center">
            <span className="text-6xl font-light text-primary">
              {Math.round(displayScore)}
            </span>
          </div>
          <p className="text-sm font-medium text-purple-500 uppercase tracking-wider text-center">
            Success Score
          </p>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-success-bg border border-success-green/20 rounded-xl p-5">
            <p className="text-xs font-semibold text-success-green uppercase mb-2">
              💚 Top Strength
            </p>
            <p className="text-sm text-primary">
              Strong problem-market fit
            </p>
          </div>
          
          <div className="bg-warning-bg border border-warning-orange/20 rounded-xl p-5">
            <p className="text-xs font-semibold text-warning-orange uppercase mb-2">
              ⚠️ Key Risk
            </p>
            <p className="text-sm text-primary">
              Market validation needed
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <button className="w-full h-14 bg-gradient-primary rounded-xl shadow-glow-purple flex items-center justify-between px-6 mb-4 hover:translate-y-[-2px] transition-all">
          <span className="text-base font-semibold text-white">
            Generate Market Analysis
          </span>
          <span className="text-sm font-medium bg-white/15 px-3 py-1 rounded-md">
            70 ⓒ
          </span>
        </button>

        {/* Secondary CTA */}
        <button className="w-full text-sm font-medium text-secondary hover:text-purple-500 transition-colors">
          View Results First
        </button>
      </div>
    </div>
  );
};
```

---

## Screen 3: Results Dashboard

### Wireframe (Desktop - Full Layout)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                      │
│ [Logo] StartupAI                                                    [User]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌────────────────┐  ┌─────────────────────────────────────────────────────┐│
│ │ SIDEBAR        │  │ MAIN CONTENT                                        ││
│ │                │  │                                                     ││
│ │ ● Idea         │  │  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ││
│ │ ○ Market       │  │  ┃ Validation Report                          ┃ ││
│ │ ○ Business     │  │  ┃ Status: Ready   │   Timeline: 6-8 weeks    ┃ ││
│ │ ○ Brand        │  │  ┃                 │                         ┃ ││
│ │ ○ Team         │  │  ┃        ╭───────╮                          ┃ ││
│ │ ○ Execution    │  │  ┃       │   68   │                          ┃ ││
│ │                │  │  ┃        ╰───────╯                          ┃ ││
│ │                │  │  ┃     Overall Score                          ┃ ││
│ │                │  │  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ││
│ │                │  │                                                     ││
│ │                │  │  ┌─────────────────────┐  ┌────────────────────┐  ││
│ │                │  │  │ EXECUTIVE SUMMARY   │  │ GREEN LIGHTS       │  ││
│ │                │  │  │                     │  │                    │  ││
│ │                │  │  │ Your startup idea   │  │ ✓ Clear problem    │  ││
│ │                │  │  │ addresses a genuine │  │ ✓ Large market     │  ││
│ │                │  │  │ market need in the  │  │ ✓ Early traction   │  ││
│ │                │  │  │ AI automation       │  │                    │  ││
│ │                │  │  │ space...            │  │                    │  ││
│ │                │  │  │                     │  │                    │  ││
│ │                │  │  └─────────────────────┘  └────────────────────┘  ││
│ │                │  │                                                     ││
│ │                │  │  ┌─────────────────────┐  ┌────────────────────┐  ││
│ │                │  │  │ KEY RECOMMENDATIONS │  │ RED FLAGS          │  ││
│ │                │  │  │                     │  │                    │  ││
│ │                │  │  │ 1. Conduct customer │  │ ⚠ Competition      │  ││
│ │                │  │  │    validation       │  │ ⚠ Market timing    │  ││
│ │                │  │  │ 2. Define MVP scope │  │ ⚠ Resource needs   │  ││
│ │                │  │  │ 3. Build prototype  │  │                    │  ││
│ │                │  │  │                     │  │                    │  ││
│ │                │  │  └─────────────────────┘  └────────────────────┘  ││
│ │                │  │                                                     ││
│ │                │  │  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ││
│ │                │  │  ┃ VALIDATION SCORECARD                        ┃ ││
│ │                │  │  ┃                                             ┃ ││
│ │                │  │  ┃ Problem Validation     ████████░░  75/100   ┃ ││
│ │                │  │  ┃ Solution Validation    ██████░░░░  60/100   ┃ ││
│ │                │  │  ┃ Market Validation      ███████░░░  70/100   ┃ ││
│ │                │  │  ┃                                             ┃ ││
│ │                │  │  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ││
│ │                │  │                                                     ││
│ └────────────────┘  └─────────────────────────────────────────────────────┘│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Detailed Layout Specifications

#### Overall Grid
```
Layout: CSS Grid
Grid-template-columns: 240px 1fr
Gap: 0
Min-height: 100vh
Background: #0A0E1A (bg-primary)
```

#### Sidebar
```
Width: 240px
Background: #141925 (bg-secondary)
Border-right: 1px solid rgba(255, 255, 255, 0.06)
Padding: 32px 24px
Position: Sticky
Top: 0
Height: 100vh

Journey Steps:
  List-style: None
  Spacing: 12px between items
  
  Each step:
    Display: Flex, align-center
    Gap: 12px
    Padding: 12px
    Border-radius: 8px
    Cursor: Pointer
    Transition: all 0.2s
    
  Active state:
    Background: rgba(139, 92, 246, 0.12)
    Color: #8B5CF6
    
  Inactive state:
    Color: #6B7280
    Hover: Background rgba(255, 255, 255, 0.04)
```

#### Main Content Area
```
Padding: 48px 64px
Max-width: 1200px
Margin: 0 auto
```

#### Header Section
```
Background: #1C2333 (bg-tertiary)
Border: 1px solid rgba(255, 255, 255, 0.08)
Border-radius: 16px
Padding: 32px 40px
Margin-bottom: 32px

Layout: Grid (3 columns)
- Column 1: Title + status badge
- Column 2: Timeline info
- Column 3: Overall score circle
```

#### Content Grid (2 columns)
```
Grid: 2 columns
Gap: 24px
Margin-bottom: 32px

Left column: 60% width
Right column: 40% width
```

#### Card Styling (Universal)
```
Background: #141925
Border: 1px solid rgba(255, 255, 255, 0.08)
Border-radius: 12px
Padding: 24px
Transition: border 0.2s

Hover:
  Border-color: rgba(255, 255, 255, 0.12)
```

Continued in next message...
