# Pitch Deck Generator - Technical Reference

## 🏗️ Architecture Overview

### Component Hierarchy
```
PitchDeckGeneratorV2 (Main App)
├── Header (Navigation & Status)
├── LandingScreen
├── WizardScreen
│   ├── StartupInfoStep
│   ├── MarketTractionStep
│   ├── SmartInterviewerStep
│   └── ReviewStep
├── GeneratingScreen
├── EditorScreen
│   ├── LeftPanel (Slide Outline)
│   ├── CenterPanel (Content Editor)
│   │   ├── MarketSlideVisual
│   │   ├── TractionSlideStats
│   │   ├── BusinessModelSlideVisual
│   │   ├── CompetitionSlideVisual
│   │   ├── GTMSlideVisual
│   │   ├── FinancialsSlideVisual
│   │   └── AskSlideVisual
│   └── RightPanel (AIFeedbackPanel)
├── OverviewScreen
├── PresentationScreen
├── DashboardScreen
└── ExportModal
```

---

## 📦 Data Structures

### DeckData
```typescript
interface DeckData {
  companyName: string;
  description: string;        // 500 char max
  website: string;
  targetMarket: string;
  industry: string;           // from predefined list
  subCategory: string;        // dynamic based on industry
  marketSize: string;
  competitors: string;
  problem: string;
  solution: string;
  differentiation: string;
  users: string;             // e.g., "2,300"
  revenue: string;           // e.g., "$12k"
  growth: string;            // e.g., "40"
  deckType: string;          // pre-seed | seed | series-a
  fundingStage: string;      // pre-seed | seed | series-a
  interviewAnswers: InterviewAnswer[];
}
```

### Slide
```typescript
interface Slide {
  id: string;                // unique identifier
  type: string;              // problem | solution | market | traction | etc.
  title: string;
  bullets: string[];
  notes: string;             // speaker notes
  visual?: {
    type: 'workflow' | 'funnel' | 'line_chart' | 'bar_chart' | 'pie_chart' | '2x2_matrix' | 'timeline' | 'diagram' | 'mock_screenshot' | 'icons' | 'metric_cards';
    description: string;
  };
  slideScore?: number;       // 0-100
}
```

### InterviewAnswer
```typescript
interface InterviewAnswer {
  question: string;
  answer: string;
  aiSuggestions?: string[];
  targetSlide?: string;
}
```

---

## 🎯 Core Functions

### Deck Generation
```typescript
function generateComprehensiveDeck(deckData: DeckData): Slide[]
```
- Generates 10-12 slides based on funding stage
- Uses helper functions for industry-specific content
- Returns array of Slide objects

**Helper Functions:**
- `getMarketSize(industry)` → Market size estimate
- `getMarketCategory(industry)` → Industry category name
- `getMarketGrowth(industry)` → Growth rate
- `getTargetSegment(industry)` → Target customer segment
- `getACV(industry)` → Average contract value
- `getSalesMotion(industry)` → Sales strategy
- `getEarlyAdopter(industry)` → Early adopter profile
- `getRelevantCompanies(industry)` → Competitor examples
- `getAskAmount(stage)` → Fundraising amount
- `getNextMilestone(stage)` → ARR milestone
- `getTimelineGoal(stage)` → Runway target
- `getNextRound(stage)` → Next funding round

### Slide Scoring
```typescript
function calculateSlideScore(slide: Slide): number
```
Returns 0-100 score based on:
- Title quality (20 pts)
- Bullet count (15 pts)
- Metrics presence (25 pts)
- Bullet length (20 pts)
- Speaker notes (10 pts)
- Specificity (10 pts)

### Deck Scoring
```typescript
function calculateDeckScore(slides: Slide[], deckData: DeckData): number
```
Returns average score across all slides (0-100)

### Prioritized Feedback
```typescript
function getPrioritizedFeedback(slide: Slide): FeedbackItem[]
```
Returns array of feedback items with:
- `level`: 'critical' | 'warning' | 'success'
- `icon`: Lucide icon component
- `message`: Feedback text

### Visual Recommendations
```typescript
function getVisualRecommendation(slideType: string): string | null
```
Returns recommended visual type for each slide type

### Investor Expectations
```typescript
function getInvestorExpectations(slideType: string): string[]
```
Returns array of stage-appropriate expectations

---

## 🎨 Styling System

### Color Palette
```css
--primary: #0d5f4e        /* Emerald green */
--background: #FAFAF8     /* Off-white */
--text-dark: #1f2937      /* Charcoal */
--text-light: #6b7280     /* Gray */
```

### Key Classes
- `.text-[#0d5f4e]` - Primary brand color
- `.bg-[#0d5f4e]/5` - Light brand background
- `.border-[#0d5f4e]` - Brand border
- `.bg-[#FAFAF8]` - Page background
- `.rounded-xl` - Standard border radius (12px)
- `.rounded-2xl` - Large border radius (16px)

---

## 🔧 State Management

### Main State Variables
```typescript
const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
const [wizardStep, setWizardStep] = useState<WizardStep>('startup-info');
const [deckData, setDeckData] = useState<DeckData>({ /* initial */ });
const [slides, setSlides] = useState<Slide[]>([]);
const [currentSlide, setCurrentSlide] = useState(0);
const [exportModalOpen, setExportModalOpen] = useState(false);
const [deckScore, setDeckScore] = useState(0);
const [lastSaved, setLastSaved] = useState<Date | null>(null);
const [isSaving, setIsSaving] = useState(false);
```

### Screen Types
```typescript
type Screen = 'landing' | 'wizard' | 'generating' | 'editor' | 'dashboard' | 'overview' | 'presentation';
```

### Wizard Steps
```typescript
type WizardStep = 'startup-info' | 'market-traction' | 'smart-interviewer' | 'review';
```

---

## 🎬 Key Features Implementation

### Auto-Save
```typescript
useEffect(() => {
  if (slides.length === 0 || currentScreen !== 'editor') return;

  setIsSaving(true);
  const saveTimer = setTimeout(() => {
    localStorage.setItem('pitch-deck-draft', JSON.stringify({
      deckData,
      slides,
      timestamp: new Date().toISOString()
    }));
    setLastSaved(new Date());
    setIsSaving(false);
  }, 2000);

  return () => clearTimeout(saveTimer);
}, [slides, deckData, currentScreen]);
```

### Keyboard Navigation
```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentSlide, slides.length]);
```

### Slide Management
```typescript
// Move slide up or down
const moveSlide = (index: number, direction: 'up' | 'down') => {
  const newIndex = direction === 'up' ? index - 1 : index + 1;
  if (newIndex < 0 || newIndex >= slides.length) return;
  
  const newSlides = [...slides];
  [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
  setSlides(newSlides);
  setCurrentSlide(newIndex);
};

// Duplicate slide
const duplicateSlide = (index: number) => {
  const newSlide = { ...slides[index], id: `${slides[index].id}-copy` };
  const newSlides = [...slides];
  newSlides.splice(index + 1, 0, newSlide);
  setSlides(newSlides);
};

// Delete slide
const deleteSlide = (index: number) => {
  if (slides.length <= 1) return;
  const newSlides = slides.filter((_, i) => i !== index);
  setSlides(newSlides);
  if (currentSlide >= newSlides.length) {
    setCurrentSlide(newSlides.length - 1);
  }
};
```

---

## 📊 Chart Components

### TractionChart
```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function TractionChart({ data }: TractionChartProps) {
  const defaultData = [
    { month: 'Jan', value: 1200 },
    // ... more data points
  ];
  
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#0d5f4e" />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

### RevenueChart
```typescript
export function RevenueChart({ data }: RevenueChartProps) {
  const defaultData = [
    { year: 'Year 1', arr: 1200 },
    { year: 'Year 2', arr: 4500 },
    { year: 'Year 3', arr: 12000 }
  ];
  
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(value) => `$${value}K`} />
        <Tooltip formatter={(value) => [`$${value}K`, 'ARR']} />
        <Bar dataKey="arr" fill="#0d5f4e" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
```

---

## 🔌 Integration Points

### Export Service (Future)
```typescript
interface ExportService {
  generatePDF(slides: Slide[], options: ExportOptions): Promise<Blob>;
  generatePPTX(slides: Slide[], options: ExportOptions): Promise<Blob>;
}
```

### AI Service (Future)
```typescript
interface AIService {
  improveConcise(slide: Slide): Promise<Slide>;
  makeInvestorFocused(slide: Slide): Promise<Slide>;
  addMetric(slide: Slide): Promise<Slide>;
  expandWithExample(slide: Slide): Promise<Slide>;
  getIndustryBenchmark(industry: string, metric: string): Promise<string>;
}
```

### Storage Service (Future)
```typescript
interface StorageService {
  saveDeck(deck: SavedDeck): Promise<string>;
  loadDeck(id: string): Promise<SavedDeck>;
  listDecks(userId: string): Promise<SavedDeck[]>;
  deleteDeck(id: string): Promise<void>;
}
```

---

## 🧪 Testing Checklist

### Unit Tests
- [ ] Slide scoring calculation
- [ ] Deck generation with various industries
- [ ] Helper functions (market size, growth, etc.)
- [ ] Feedback prioritization logic

### Integration Tests
- [ ] Wizard flow completion
- [ ] Slide creation and editing
- [ ] Export modal functionality
- [ ] Keyboard navigation
- [ ] Auto-save timing

### E2E Tests
- [ ] Complete deck generation flow
- [ ] Edit and save slides
- [ ] Navigate between screens
- [ ] Export deck (JSON)
- [ ] Presentation mode

### Visual Regression
- [ ] Landing page
- [ ] Wizard screens
- [ ] Editor 3-panel layout
- [ ] Overview grid
- [ ] Presentation mode
- [ ] Export modal

---

## 🚀 Performance Optimization

### Current Optimizations
- Debounced auto-save (2 seconds)
- LocalStorage for caching
- Conditional rendering of panels
- Lazy loading of chart components

### Future Optimizations
- Virtual scrolling for large slide lists
- Memoization of expensive calculations
- Code splitting by screen
- Image lazy loading
- Service worker for offline support

---

## 🔒 Security Considerations

### Current
- Client-side only (no backend yet)
- LocalStorage (limited to 5-10MB)
- No sensitive data stored
- Input sanitization on display

### Future (When Adding Backend)
- User authentication (Supabase Auth)
- Encrypted data at rest
- Row-level security (RLS)
- Rate limiting on AI endpoints
- Input validation on server
- CORS configuration

---

## 📈 Analytics Events (Future)

### Key Events to Track
```typescript
// Deck lifecycle
'deck_created'
'deck_generated'
'deck_edited'
'deck_exported'
'deck_presented'

// User actions
'slide_added'
'slide_deleted'
'slide_reordered'
'ai_action_used'
'keyboard_shortcut_used'

// Performance
'generation_time'
'export_time'
'save_time'
```

---

## 🛠️ Development Setup

### Prerequisites
```bash
Node.js 18+
npm or yarn
```

### Install Dependencies
```bash
npm install lucide-react recharts
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📚 Dependencies

### Core
- `react` ^18.0.0
- `lucide-react` ^0.x.x (icons)
- `recharts` ^2.x.x (charts)

### Dev Dependencies
- `typescript` ^5.x.x
- `@types/react` ^18.x.x
- `tailwindcss` ^4.x.x

---

## 🎯 API Endpoints (Future)

### Deck Management
```
POST   /api/decks              Create new deck
GET    /api/decks/:id          Get deck by ID
PUT    /api/decks/:id          Update deck
DELETE /api/decks/:id          Delete deck
GET    /api/decks              List user's decks
```

### AI Services
```
POST   /api/ai/improve         Improve slide content
POST   /api/ai/generate        Generate slide content
POST   /api/ai/benchmark       Get industry benchmark
```

### Export
```
POST   /api/export/pdf         Export to PDF
POST   /api/export/pptx        Export to PowerPoint
```

---

## 🔄 State Flow Diagram

```
Landing → Wizard (Step 1-4) → Generating → Editor
                                              ↓
                                         Overview
                                              ↓
                                       Presentation
                                              ↓
                                          Export
```

---

## 💡 Troubleshooting Guide

### Issue: Slides not saving
**Solution**: Check localStorage quota, clear old data

### Issue: Charts not rendering
**Solution**: Verify Recharts import, check data format

### Issue: Keyboard shortcuts not working
**Solution**: Check focus state, verify event listeners

### Issue: Export failing
**Solution**: Check slide data completeness, verify format selection

---

## 📞 Technical Support

For development questions or technical issues:
- Review code comments in `/app/pitch-deck/page-v2.tsx`
- Check implementation doc at `/PITCH_DECK_IMPLEMENTATION.md`
- Review user guide at `/PITCH_DECK_USER_GUIDE.md`

---

**Version**: 2.0  
**Last Updated**: January 2026  
**Status**: Production Ready
