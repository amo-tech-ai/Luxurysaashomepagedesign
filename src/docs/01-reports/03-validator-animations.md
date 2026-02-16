# 🎬 Visual Validator V2 — Animation Guide

<div style="background: linear-gradient(135deg, #0d5f4e 0%, #6b9d89 100%); padding: 48px; border-radius: 16px; margin-bottom: 48px; color: white;">

## Animation Philosophy

**Premium intelligence requires motion with purpose.**

Every animation should:
- ✓ Communicate state changes clearly
- ✓ Guide user attention strategically
- ✓ Feel smooth and natural (60fps)
- ✓ Complete quickly (<500ms for most)
- ✓ Enhance understanding, not distract

**Design Goal:** Bloomberg Terminal meets Linear.app — calm, confident, intelligent.

</div>

---

## 🎯 Animation Principles

### The 3-Tier System

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  TIER 1: MICRO-INTERACTIONS (<200ms)                       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Button hovers                                            │
│  • Input focus states                                       │
│  • Tooltip appearances                                      │
│  • Badge color changes                                      │
│                                                             │
│  TIER 2: TRANSITIONS (200-500ms)                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Section expand/collapse                                  │
│  • Panel slide-ins                                          │
│  • Chart data updates                                       │
│  • Score counter increments                                 │
│                                                             │
│  TIER 3: DRAMATIC REVEALS (500-1200ms)                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Page load sequence                                       │
│  • Score gauge fill animation                               │
│  • Progress bar reveals                                     │
│  • Confidence shimmer sweep                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Page Load Animation Sequence

### Entry Choreography (Staggered Cascade)

```typescript
// Orchestrated page load sequence
const pageLoadSequence = {
  // Phase 1: Structure (0-300ms)
  header: { delay: 0, duration: 300 },
  leftNav: { delay: 100, duration: 300 },
  rightPanel: { delay: 200, duration: 300 },
  
  // Phase 2: Hero Content (300-800ms)
  scoreGauge: { delay: 300, duration: 500 },
  insightCards: { delay: 400, duration: 300, stagger: 100 },
  
  // Phase 3: Sections (800-1200ms)
  sections: { delay: 800, duration: 400, stagger: 50 },
  
  // Phase 4: Flourishes (1200-1500ms)
  progressBars: { delay: 1200, duration: 300 },
  shimmerEffect: { delay: 1400, duration: 1000 },
};
```

**Visual Timeline:**
```
0ms     ━━━ Header fades in
100ms   ━━━ Left nav slides in from left
200ms   ━━━ Right panel slides in from right
300ms   ━━━ Score gauge starts filling (ring animation)
400ms   ━━━ Insight cards stagger in (↑ from bottom)
800ms   ━━━ Score counter starts incrementing (0 → 78)
1200ms  ━━━ Progress bars fill sequentially
1400ms  ━━━ Confidence shimmer sweeps across
1500ms  ━━━ Animation complete, fully interactive
```

---

## 🎨 Component-Specific Animations

### 1. Hero Score Gauge — Radial Fill Animation

<div style="background: white; border: 2px solid #0d5f4e; border-radius: 16px; padding: 32px; margin: 24px 0;">

#### Animated Radial Gauge

```typescript
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const AnimatedScoreGauge = ({ score }: { score: number }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const circumference = 2 * Math.PI * 72; // r=72
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;
  
  useEffect(() => {
    // Delayed start for dramatic effect
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 300);
    return () => clearTimeout(timer);
  }, [score]);
  
  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background ring */}
        <circle
          cx="80"
          cy="80"
          r="72"
          fill="none"
          stroke="#F5F3EF"
          strokeWidth="10"
        />
        
        {/* Animated progress ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="72"
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset,
            transition: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1], // Custom easing (smooth ease-out)
              delay: 0.3,
            }
          }}
        />
        
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d5f4e" />
            <stop offset="100%" stopColor="#6b9d89" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated counter */}
      <ScoreCounter value={animatedScore} delay={300} />
      
      {/* Pulse effect on completion */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#0d5f4e]"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{ 
          duration: 0.8,
          delay: 1.5, // After fill completes
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
};

// Smooth counter animation
const ScoreCounter = ({ value, delay }: { value: number; delay: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayValue(prev => {
          const increment = Math.ceil((value - prev) / 10);
          if (prev + increment >= value) {
            clearInterval(interval);
            return value;
          }
          return prev + increment;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div
        className="text-4xl font-bold bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        {displayValue}
      </motion.div>
      <div className="text-xs text-[#6B7280]">/ 100</div>
    </div>
  );
};
```

**Animation Breakdown:**
1. **0-300ms:** Delay (builds anticipation)
2. **300-1500ms:** Ring fills clockwise (1.2s smooth easing)
3. **300-800ms:** Counter increments (0 → 78, 30ms intervals)
4. **1500-2300ms:** Completion pulse (scale 1 → 1.2 → 1)

</div>

---

### 2. Insight Cards — Staggered Slide-Up

<div style="background: white; border: 2px solid #0d5f4e; border-radius: 16px; padding: 32px; margin: 24px 0;">

#### Cascading Card Entrance

```typescript
import { motion } from 'motion/react';

const insightCards = [
  { type: 'strength', text: 'Clear pain point in $10B market' },
  { type: 'strength', text: 'AI automation saves 15 hrs/week' },
  { type: 'concern', text: 'Team needs senior marketing hire' },
];

export const AnimatedInsightCards = () => {
  return (
    <div className="space-y-3">
      {insightCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4 + (index * 0.1), // Stagger: 400ms, 500ms, 600ms
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`flex items-start gap-3 p-4 rounded-xl border ${
            card.type === 'strength'
              ? 'bg-[#E8F4F1] border-[#0d5f4e]/20'
              : 'bg-[#F5F3EF] border-[#6B7280]/20'
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
          <div className="text-sm text-[#212427]">{card.text}</div>
        </motion.div>
      ))}
    </div>
  );
};
```

**Stagger Pattern:**
```
Card 1: 400ms delay → slides up + fades in
Card 2: 500ms delay → slides up + fades in
Card 3: 600ms delay → slides up + fades in

Total sequence: 400ms + (3 cards × 100ms stagger) = 700ms
```

</div>

---

### 3. Progress Bars — Sequential Fill on Scroll

<div style="background: white; border: 2px solid #0d5f4e; border-radius: 16px; padding: 32px; margin: 24px 0;">

#### Scroll-Triggered Bar Animation

```typescript
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue: number;
  index: number;
}

export const AnimatedProgressBar = ({ label, value, maxValue, index }: ProgressBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const percentage = (value / maxValue) * 100;
  
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#6B7280]">{label}</span>
        <motion.span
          className="text-sm font-semibold text-[#212427]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 }}
        >
          {value} / {maxValue}
        </motion.span>
      </div>
      
      <div className="h-2 bg-[#F5F3EF] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            value >= 8 ? 'bg-[#0d5f4e]' :
            value >= 6 ? 'bg-[#6b9d89]' :
            'bg-[#6B7280]'
          }`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
      
      {/* Glow effect on completion */}
      <motion.div
        className="h-2 bg-[#0d5f4e]/20 rounded-full -mt-2"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { 
          opacity: [0, 0.5, 0],
          scaleX: [0.5, 1, 0.5],
        } : {}}
        transition={{
          duration: 1,
          delay: 0.8 + (index * 0.1), // After bar fills
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
};

// Usage with stagger
const scores = [
  { label: 'Market', value: 8.5, max: 10 },
  { label: 'Product', value: 7.2, max: 10 },
  { label: 'Team', value: 6.8, max: 10 },
  { label: 'Revenue', value: 8.1, max: 10 },
];

export const ProgressBarGroup = () => (
  <div className="space-y-4">
    {scores.map((score, index) => (
      <AnimatedProgressBar
        key={score.label}
        label={score.label}
        value={score.value}
        maxValue={score.max}
        index={index}
      />
    ))}
  </div>
);
```

**Scroll Animation Flow:**
```
1. Component enters viewport (30% visible)
2. Bar 1: Starts filling (0ms delay, 800ms duration)
3. Bar 2: Starts filling (100ms delay, 800ms duration)
4. Bar 3: Starts filling (200ms delay, 800ms duration)
5. Bar 4: Starts filling (300ms delay, 800ms duration)
6. Each bar: Glow effect after fill completes
```

</div>

---

### 4. Sticky Score Bar — Slide-Down Entrance

<div style="background: white; border: 2px solid #0d5f4e; border-radius: 16px; padding: 32px; margin: 24px 0;">

#### Smooth Sticky Header

```typescript
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export const StickyScoreBar = ({ score, verdict }: { score: number; verdict: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="fixed top-[73px] left-0 right-0 z-40 
            bg-white/95 backdrop-blur-lg border-b border-[#E8E6E1] shadow-sm"
        >
          <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-6">
              {/* Mini score gauge with pulse */}
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] 
                  flex items-center justify-center text-white font-bold text-sm"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(13, 95, 78, 0)',
                    '0 0 0 8px rgba(13, 95, 78, 0.1)',
                    '0 0 0 0 rgba(13, 95, 78, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {score}
              </motion.div>
              
              <div className="text-sm">
                <div className="font-semibold text-[#212427]">{verdict}</div>
                <div className="text-xs text-[#6B7280]">Confidence: High</div>
              </div>
            </div>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-[#0d5f4e] hover:text-[#0a4a3b] font-medium 
                transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

**Animation Details:**
- **Trigger:** Scroll position > 400px
- **Entrance:** Spring physics (feels bouncy, premium)
- **Pulse:** Continuous subtle shadow pulse (2s loop)
- **Exit:** Smooth slide up when scrolling back to top

</div>

---

### 5. Section Expand/Collapse — Smooth Accordion

<div style="background: white; border: 2px solid #0d5f4e; border-radius: 16px; padding: 32px; margin: 24px 0;">

#### Progressive Disclosure

```typescript
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const ExpandableSection = ({ 
  title, 
  children, 
  detailContent 
}: { 
  title: string; 
  children: React.ReactNode; 
  detailContent: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section className="bg-white rounded-2xl border border-[#E8E6E1] p-8 shadow-sm">
      {/* Main content (always visible) */}
      <div>{children}</div>
      
      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.1,
                },
              },
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.2,
                },
              },
            }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
              {detailContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toggle button with animated chevron */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-sm text-[#0d5f4e] hover:text-[#0a4a3b] 
          font-medium flex items-center gap-2 transition-colors"
      >
        {isExpanded ? 'Hide Details' : 'Show Details'}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
    </section>
  );
};
```

**Timing:**
- **Expand:** Height auto (400ms) + opacity fade (300ms, 100ms delay)
- **Collapse:** Reverse timing (300ms collapse, 200ms fade)
- **Chevron:** Rotate 180° (300ms)

</div>

---

### 6. AI Insights Panel — Contextual Slide-In

<div style="background: white; border: 2px solid #0d5f4e; border-radius: 16px; padding: 32px; margin: 24px 0;">

#### Right Panel Animation

```typescript
import { motion, AnimatePresence } from 'motion/react';

export const AIInsightsPanel = ({ 
  isOpen, 
  sectionId 
}: { 
  isOpen: boolean; 
  sectionId: number;
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          key={sectionId} // Re-animate on section change
          initial={{ x: 384, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 384, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="fixed right-0 top-[73px] w-96 h-[calc(100vh-73px)] 
            bg-white border-l border-[#E8E6E1] overflow-y-auto"
        >
          <div className="p-6 space-y-6">
            {/* Header with icon animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
              <h3 className="font-serif text-lg text-[#212427]">AI Insights</h3>
            </motion.div>
            
            {/* Staggered content cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="space-y-4"
            >
              {['Summary', 'Why It Matters', 'Key Risks', 'How to Test'].map((title, i) => (
                <motion.div
                  key={title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-[#FAF9F7] rounded-xl border border-[#E8E6E1] p-4"
                >
                  <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
                    {title}
                  </h4>
                  <p className="text-sm text-[#212427]">Insight content...</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
```

**Animation Flow:**
```
0ms    → Panel slides in from right (spring physics)
200ms  → Header icon scales in
300ms  → Card 1 fades + slides up
400ms  → Card 2 fades + slides up
500ms  → Card 3 fades + slides up
600ms  → Card 4 fades + slides up
```

</div>

---

## 🎯 Micro-Interactions

### Hover States — Subtle Elevation

```typescript
// Button hover with scale + shadow
<motion.button
  whileHover={{ 
    scale: 1.02,
    boxShadow: '0 4px 12px rgba(13, 95, 78, 0.15)',
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
  className="px-8 py-3 bg-[#0d5f4e] text-white rounded-lg"
>
  Export PDF
</motion.button>

// Card hover with border glow
<motion.div
  whileHover={{
    borderColor: '#0d5f4e',
    boxShadow: '0 0 0 1px #0d5f4e',
  }}
  transition={{ duration: 0.2 }}
  className="bg-white border border-[#E8E6E1] rounded-xl p-6"
>
  Content
</motion.div>

// Icon spin on hover
<motion.div
  whileHover={{ rotate: 90 }}
  transition={{ duration: 0.3 }}
>
  <Settings className="w-5 h-5" />
</motion.div>
```

---

### Click Feedback — Instant Response

```typescript
// Badge click with ripple effect
<motion.button
  whileTap={{ scale: 0.95 }}
  className="relative px-3 py-1.5 bg-[#E8F4F1] rounded-full text-sm text-[#0d5f4e]"
>
  Completed
  <motion.div
    initial={{ scale: 0, opacity: 0.5 }}
    whileTap={{ scale: 2, opacity: 0 }}
    className="absolute inset-0 bg-[#0d5f4e] rounded-full"
  />
</motion.button>

// Toggle switch animation
<motion.div
  animate={{ x: isOn ? 20 : 0 }}
  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
  className="w-5 h-5 bg-white rounded-full shadow"
/>
```

---

## 📊 Data Visualization Animations

### Chart Entrance — Smooth Reveal

```typescript
import { Line } from 'recharts';
import { motion } from 'motion/react';

export const AnimatedLineChart = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#0d5f4e"
          strokeWidth={2}
          dot={false}
          animationDuration={1000}
          animationBegin={300}
          animationEasing="ease-out"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
```

---

### Donut Chart — Sequential Arc Fill

```typescript
export const AnimatedDonutChart = () => {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* TAM - Outer ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="#0E3E1B"
        strokeWidth="20"
        opacity="0.3"
        strokeDasharray={534}
        initial={{ strokeDashoffset: 534 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* SAM - Middle ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="65"
        fill="none"
        stroke="#6b9d89"
        strokeWidth="20"
        opacity="0.7"
        strokeDasharray={408}
        initial={{ strokeDashoffset: 408 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      
      {/* SOM - Inner ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="45"
        fill="none"
        stroke="#0d5f4e"
        strokeWidth="20"
        opacity="0.9"
        strokeDasharray={283}
        initial={{ strokeDashoffset: 283 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </svg>
  );
};
```

---

## 🌟 Special Effects

### 1. Confidence Shimmer Sweep

```typescript
export const ConfidenceShimmer = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {children}
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          delay: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(13, 95, 78, 0.2) 50%, transparent 100%)',
        }}
      />
    </div>
  );
};
```

---

### 2. Success Pulse on Score Update

```typescript
export const SuccessPulse = ({ trigger }: { trigger: boolean }) => {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-full border-2 border-[#0d5f4e]"
        />
      )}
    </AnimatePresence>
  );
};
```

---

### 3. Loading Skeleton with Shimmer

```typescript
export const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative overflow-hidden h-20 bg-[#F5F3EF] rounded-xl">
          <motion.div
            className="absolute inset-0"
            animate={{ x: ['0%', '100%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            }}
          />
        </div>
      ))}
    </div>
  );
};
```

---

## ⚡ Performance Optimization

### Animation Best Practices

```typescript
// ✅ GOOD: Use transform (GPU-accelerated)
<motion.div
  animate={{ x: 100, scale: 1.2 }}
  transition={{ duration: 0.3 }}
/>

// ❌ BAD: Use layout properties (causes reflow)
<motion.div
  animate={{ left: 100, width: 200 }}
  transition={{ duration: 0.3 }}
/>

// ✅ GOOD: Debounce rapid animations
const debouncedAnimate = useDebounce((value) => {
  animate(value);
}, 100);

// ✅ GOOD: Use will-change for complex animations
<div style={{ willChange: 'transform' }}>
  <motion.div animate={{ scale: [1, 1.2, 1] }} />
</div>

// ✅ GOOD: Reduce motion for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={{ y: prefersReducedMotion ? 0 : -20 }}
  transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
/>
```

---

## 📋 Complete Animation Checklist

```
┌─────────────────────────────────────────────────────────────┐
│  ANIMATION IMPLEMENTATION CHECKLIST                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PAGE LOAD                                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ☐ Header fade-in (300ms)                                  │
│  ☐ Left nav slide-in (300ms, 100ms delay)                  │
│  ☐ Right panel slide-in (300ms, 200ms delay)               │
│  ☐ Score gauge fill (1200ms, 300ms delay)                  │
│  ☐ Insight cards stagger (100ms intervals)                 │
│  ☐ Progress bars sequential fill (800ms each)              │
│  ☐ Confidence shimmer sweep (2s, 1400ms delay)             │
│                                                             │
│  SCROLL INTERACTIONS                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ☐ Sticky score bar slide-down (spring physics)            │
│  ☐ Progress bars trigger on viewport entry (30%)           │
│  ☐ Section cards fade-in on scroll (staggered)             │
│                                                             │
│  USER INTERACTIONS                                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ☐ Section expand/collapse (400ms smooth)                  │
│  ☐ AI panel slide-in (spring, 300ms)                       │
│  ☐ Button hover scale (1.02, 200ms)                        │
│  ☐ Card hover border glow (200ms)                          │
│  ☐ Click ripple effect (300ms)                             │
│                                                             │
│  DATA VISUALIZATIONS                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ☐ Donut chart sequential arcs (1s each, staggered)        │
│  ☐ Line chart path draw (1s, ease-out)                     │
│  ☐ Bar chart height animation (800ms)                      │
│                                                             │
│  PERFORMANCE                                                │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ☐ All animations use transform/opacity only               │
│  ☐ Debounce rapid state changes (300ms)                    │
│  ☐ Respect prefers-reduced-motion                          │
│  ☐ Use IntersectionObserver for scroll triggers            │
│  ☐ Lazy load heavy animations                              │
│  ☐ Target 60fps (16.67ms per frame)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎬 Complete Animation Timeline

```
PAGE LOAD SEQUENCE (0-2000ms)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

0ms     ███████ Header fade-in starts
100ms   ███████ Left nav slides in
200ms   ███████ Right panel slides in
300ms   ███████ Score gauge starts filling
400ms   ███████ Insight card 1 slides up
500ms   ███████ Insight card 2 slides up
600ms   ███████ Insight card 3 slides up
800ms   ███████ Counter starts (0 → 78)
1200ms  ███████ Progress bar 1 starts
1300ms  ███████ Progress bar 2 starts
1400ms  ███████ Shimmer sweep begins
        ███████ Progress bar 3 starts
1500ms  ███████ Score gauge completes
        ███████ Completion pulse
        ███████ Progress bar 4 starts
2000ms  ███████ All progress bars complete
        ███████ Glow effects trigger
3400ms  ███████ Shimmer completes
        ███████ Page fully interactive

Total load animation: 3.4 seconds
Critical path (usable): 1.5 seconds
```

---

<div style="background: linear-gradient(135deg, #E8F4F1 0%, #F5F3EF 100%); border-radius: 16px; padding: 48px; margin-top: 48px; text-align: center;">

## 🚀 Implementation Next Steps

1. **Install Motion:** `npm install motion`
2. **Copy component examples** from this guide
3. **Test performance** with Chrome DevTools (60fps target)
4. **Add accessibility** with `prefers-reduced-motion`
5. **Fine-tune timing** based on user feedback
6. **Ship premium experience** 🎯

**Pro Tip:** Start with page load sequence, then add scroll triggers, then micro-interactions.

</div>

---

**Document Version:** 1.0  
**Last Updated:** February 12, 2026  
**Status:** ✅ Complete Animation Specification
