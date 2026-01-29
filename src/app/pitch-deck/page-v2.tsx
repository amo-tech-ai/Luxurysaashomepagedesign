import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Sparkles,
  AlertCircle,
  GripVertical,
  Plus,
  Copy,
  Trash2,
  Edit3,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Rocket,
  X,
  ChevronDown,
  Info,
  Eye,
  List,
  Home
} from 'lucide-react';
import { getVisualForSlideType } from '@/components/pitch-deck/visuals';
import { AIGenerateIcon } from '@/components/pitch-deck/AIGenerateIcon';
import { SmartInterviewerStep } from '@/components/pitch-deck/SmartInterviewerStep';
import { TractionChart } from '@/components/pitch-deck/charts/TractionChart';
import { RevenueChart } from '@/components/pitch-deck/charts/RevenueChart';

type WizardStep = 'startup-info' | 'market-traction' | 'smart-interviewer' | 'review';
type Screen = 'landing' | 'wizard' | 'generating' | 'editor' | 'dashboard' | 'overview' | 'presentation';

interface InterviewAnswer {
  question: string;
  answer: string;
  aiSuggestions?: string[];
  targetSlide?: string;
}

interface DeckData {
  companyName: string;
  website: string;
  description: string;
  targetMarket: string;
  industry: string;
  subIndustry: string;
  problem: string;
  solution: string;
  differentiation: string;
  users: string;
  revenue: string;
  growth: string;
  fundingStage: string;
  deckType: string;
  tone: string;
  interviewAnswers: InterviewAnswer[];
  researchStatus: {
    websiteSummary: boolean;
    industryKeywords: boolean;
    competitors: boolean;
    benchmarks: boolean;
  };
}

interface Slide {
  id: string;
  type: string;
  title: string;
  bullets: string[];
  notes: string;
  visual?: {
    type: 'workflow' | 'funnel' | 'line_chart' | 'bar_chart' | 'pie_chart' | '2x2_matrix' | 'timeline' | 'diagram' | 'mock_screenshot' | 'icons' | 'metric_cards';
    description: string;
  };
  slideScore?: number;
}

export default function PitchDeckV2Page() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [wizardStep, setWizardStep] = useState<WizardStep>('startup-info');
  const [deckData, setDeckData] = useState<DeckData>({
    companyName: '',
    website: '',
    description: '',
    targetMarket: '',
    industry: '',
    subIndustry: '',
    problem: '',
    solution: '',
    differentiation: '',
    users: '',
    revenue: '',
    growth: '',
    fundingStage: 'pre-seed',
    deckType: 'seed',
    tone: 'confident',
    interviewAnswers: [],
    researchStatus: {
      websiteSummary: false,
      industryKeywords: false,
      competitors: false,
      benchmarks: false
    }
  });
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [deckScore, setDeckScore] = useState(0);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Calculate deck score
  useEffect(() => {
    if (slides.length > 0) {
      const score = calculateDeckScore(slides, deckData);
      setDeckScore(score);
    }
  }, [slides, deckData]);

  // Auto-save functionality
  useEffect(() => {
    if (slides.length === 0 || currentScreen !== 'editor') return;

    setIsSaving(true);
    const saveTimer = setTimeout(() => {
      // Save to localStorage
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

  const handleGoHome = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }));
  };

  const startWizard = () => {
    setCurrentScreen('wizard');
    setWizardStep('startup-info');
  };

  const generateDeck = () => {
    setCurrentScreen('generating');
    
    setTimeout(() => {
      const generatedSlides: Slide[] = generateComprehensiveDeck(deckData);
      
      setSlides(generatedSlides);
      setCurrentScreen('editor');
    }, 3000);
  };

  const readinessLevel = getReadinessLevel(deckScore, deckData);

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleGoHome}
                className="text-xl text-gray-900 hover:text-[#0d5f4e] transition-colors tracking-tight"
              >
                StartupAI
              </button>
              <button
                onClick={handleGoHome}
                className="flex items-center gap-2 text-sm font-medium text-[#0D5F4E] hover:text-[#0a4d3f] transition-colors group"
              >
                <Home className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                Back to Home
              </button>
            </div>
            <div className="flex items-center gap-4">
              {currentScreen === 'editor' && (
                <>
                  {/* Deck Score */}
                  <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500">Deck Score:</div>
                    <div className={`text-lg font-medium ${
                      deckScore >= 80 ? 'text-green-600' : 
                      deckScore >= 60 ? 'text-yellow-600' : 
                      'text-red-600'
                    }`}>
                      {deckScore}/100
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      readinessLevel === 'Strong' ? 'bg-green-100 text-green-700' :
                      readinessLevel === 'Solid' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {readinessLevel}
                    </div>
                  </div>

                  {/* Auto-save indicator */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {isSaving ? (
                      <>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                        Saving...
                      </>
                    ) : lastSaved ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Saved
                      </>
                    ) : null}
                  </div>
                  
                  <button
                    onClick={() => setCurrentScreen('dashboard')}
                    className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    My Decks
                  </button>
                  <button
                    onClick={() => setCurrentScreen('overview')}
                    className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Overview
                  </button>
                  <button
                    onClick={() => setCurrentScreen('presentation')}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium flex items-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    Present
                  </button>
                  <button
                    onClick={() => setExportModalOpen(true)}
                    className="px-6 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all text-sm font-medium flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20">
        {currentScreen === 'landing' && (
          <LandingScreen onStart={startWizard} />
        )}

        {currentScreen === 'wizard' && (
          <WizardScreen 
            step={wizardStep}
            setStep={setWizardStep}
            data={deckData}
            setData={setDeckData}
            onGenerate={generateDeck}
          />
        )}

        {currentScreen === 'generating' && (
          <GeneratingScreen />
        )}

        {currentScreen === 'editor' && (
          <EditorScreen 
            slides={slides}
            setSlides={setSlides}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            deckData={deckData}
          />
        )}

        {currentScreen === 'dashboard' && (
          <DashboardScreen onCreateNew={startWizard} onEdit={() => setCurrentScreen('editor')} />
        )}
        
        {currentScreen === 'overview' && (
          <OverviewScreen 
            slides={slides}
            deckData={deckData}
            onEdit={() => setCurrentScreen('editor')}
            onSlideClick={(index) => {
              setCurrentSlide(index);
              setCurrentScreen('editor');
            }}
          />
        )}
        
        {currentScreen === 'presentation' && (
          <PresentationScreen 
            slides={slides}
            deckData={deckData}
            onExit={() => setCurrentScreen('editor')}
          />
        )}
      </div>

      {/* Export Modal */}
      {exportModalOpen && (
        <ExportModal 
          onClose={() => setExportModalOpen(false)} 
          slides={slides}
          deckData={deckData}
        />
      )}
    </div>
  );
}

// Utility Functions
function calculateDeckScore(slides: Slide[], data: DeckData): number {
  let score = 0;
  
  // Completeness (50 points)
  const completeness = slides.filter(s => 
    s.title && s.bullets.length >= 3
  ).length / slides.length;
  score += completeness * 50;
  
  // Quality - Has metrics (30 points)
  const hasMetrics = slides.filter(s => 
    s.bullets.some(b => /\d+/.test(b))
  ).length / slides.length;
  score += hasMetrics * 30;
  
  // Clarity (20 points)
  const clarity = slides.filter(s => 
    s.title.length > 10 && s.title.length < 60
  ).length / slides.length;
  score += clarity * 20;
  
  return Math.round(score);
}

function getReadinessLevel(score: number, data: DeckData): string {
  if (score >= 80 && data.users && data.revenue) return 'Strong';
  if (score >= 60) return 'Solid';
  return 'Early';
}

function getSlideQuality(slide: Slide): 'strong' | 'needs-metrics' | 'needs-attention' {
  const hasMetrics = slide.bullets.some(b => /\d+/.test(b));
  const hasTitle = slide.title.length > 10;
  const hasBullets = slide.bullets.length >= 3;
  
  if (hasMetrics && hasTitle && hasBullets) return 'strong';
  if (!hasMetrics) return 'needs-metrics';
  return 'needs-attention';
}

// Comprehensive Deck Generation Function
function generateComprehensiveDeck(deckData: DeckData): Slide[] {
  const companyName = deckData.companyName || 'Your Company';
  const industry = deckData.industry || 'enterprise-saas';
  const stage = deckData.fundingStage || 'pre-seed';
  
  // Determine slide count based on deck type
  const isPreseed = stage === 'pre-seed';
  const isSeed = stage === 'seed';
  
  const slides: Slide[] = [];
  
  // 1. TITLE SLIDE
  slides.push({
    id: '1',
    type: 'title',
    title: companyName,
    bullets: [
      deckData.description || 'AI-powered solutions for modern businesses',
      deckData.targetMarket || 'B2B SaaS companies',
      `${stage.charAt(0).toUpperCase() + stage.slice(1)} Round • ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
    ],
    notes: 'Keep opening slide clean. Use this to set context before diving in.'
  });
  
  // 2. PROBLEM SLIDE
  slides.push({
    id: '2',
    type: 'problem',
    title: 'The Problem',
    bullets: deckData.problem ? [
      deckData.problem,
      `${deckData.targetMarket || 'Companies'} waste 60% of time on manual workflows`,
      'Current solutions are complex, expensive, and don\'t integrate well',
      'Teams need faster, smarter tools that work with existing systems'
    ] : [
      'Support teams waste 60% of time on repetitive tickets',
      'Agents burn hours on manual replies without context',
      'Customers expect instant, accurate answers 24/7',
      'Response quality varies across team members',
      'Knowledge gets trapped in individual inboxes'
    ],
    notes: 'Quantify the pain. Use real-world examples from customer interviews.'
  });
  
  // 3. SOLUTION SLIDE
  slides.push({
    id: '3',
    type: 'solution',
    title: 'Our Solution',
    bullets: deckData.solution ? [
      deckData.solution,
      deckData.differentiation || 'Built with proprietary AI that learns from your data',
      'Integrated into existing workflows in under 5 minutes',
      '95% accuracy with continuous learning',
      'Reduces operational time by 3x while improving quality'
    ] : [
      'AI copilots that understand full customer context',
      'Automated responses with mandatory human approval',
      'Integrated into existing support platforms',
      '95% accuracy with continuous learning',
      'Reduces response time from hours to minutes'
    ],
    notes: 'Focus on unique value proposition and measurable outcomes'
  });
  
  // 4. PRODUCT / HOW IT WORKS
  slides.push({
    id: '4',
    type: 'product',
    title: 'How It Works',
    bullets: [
      '1. Connect your existing tools (Slack, Zendesk, email)',
      '2. AI analyzes your knowledge base and past conversations',
      '3. Suggests responses with confidence scores',
      '4. Human reviews and approves before sending',
      '5. System learns from every interaction'
    ],
    notes: 'Show the workflow. Keep it simple and visual.'
  });
  
  // 5. MARKET OPPORTUNITY
  slides.push({
    id: '5',
    type: 'market',
    title: 'Market Opportunity',
    bullets: [
      `$${getMarketSize(industry)} ${getMarketCategory(industry)} market`,
      `Growing ${getMarketGrowth(industry)} annually with AI adoption`,
      `${getTargetSegment(industry)} in target segment`,
      `Average contract value: $${getACV(industry)} annually`,
      'Early majority adoption phase for AI-powered tools'
    ],
    notes: 'Show TAM/SAM/SOM. Use credible sources (Gartner, IDC).'
  });
  
  // 6. TRACTION & METRICS
  slides.push({
    id: '6',
    type: 'traction',
    title: 'Traction',
    bullets: [
      `${deckData.users || '2,300'} active users across ${deckData.users ? Math.floor(parseInt(deckData.users) / 50) : '50'} companies`,
      `${deckData.revenue || '$12k'} MRR with $${deckData.revenue ? Math.round(parseFloat(deckData.revenue.replace(/[^0-9.]/g, '')) * 12 / 65) : '180'} ACV`,
      `${deckData.growth || '40'}% month-over-month growth`,
      '92% user retention after 3 months',
      'NPS score of 68 (industry avg: 31)'
    ],
    notes: 'Concrete metrics build credibility. Update monthly.'
  });
  
  // 7. BUSINESS MODEL
  slides.push({
    id: '7',
    type: 'business_model',
    title: 'Business Model',
    bullets: [
      'SaaS subscription: $99/user/month (Professional tier)',
      'Enterprise: Custom pricing starting at $5K/month',
      'Usage-based add-ons for advanced AI features',
      `Target ACV: $${getACV(industry)} (${getSalesMotion(industry)})`,
      'Net dollar retention: 120% (expansion revenue)'
    ],
    notes: 'Show unit economics. Explain pricing strategy and expansion.'
  });
  
  // 8. COMPETITIVE LANDSCAPE
  slides.push({
    id: '8',
    type: 'competition',
    title: 'Competitive Landscape',
    bullets: [
      `Traditional ${getMarketCategory(industry)}: Slow, no AI, expensive`,
      'Point solutions: Limited features, don\'t integrate',
      'Internal builds: 18+ months, high maintenance cost',
      `${companyName}: Full-stack AI, works with existing tools, 10x faster`,
      'Competitive moat: Proprietary training data + network effects'
    ],
    notes: 'Position against categories, not companies. Show your unique angle.'
  });
  
  // 9. GO-TO-MARKET STRATEGY
  slides.push({
    id: '9',
    type: 'gtm',
    title: 'Go-To-Market',
    bullets: [
      `Phase 1: Product-led growth targeting ${getEarlyAdopter(industry)}`,
      'Phase 2: Sales-assisted for mid-market accounts ($10K+ ACV)',
      'Phase 3: Enterprise direct sales ($50K+ contracts)',
      'Distribution: Content marketing, partnerships, community',
      `CAC payback: ${isPreseed ? '18' : '12'} months (industry benchmark: 24)`
    ],
    notes: 'Show clear path to scale. Explain channel strategy.'
  });
  
  // 10. TEAM
  slides.push({
    id: '10',
    type: 'team',
    title: 'The Team',
    bullets: [
      `Former product/eng leaders from ${getRelevantCompanies(industry)}`,
      `15+ years combined in ${getMarketCategory(industry)}`,
      'AI research background from top universities',
      '2 previous exits in this space (combined $80M+)',
      'Advisors from leading VCs and industry operators'
    ],
    notes: 'Highlight relevant expertise and track record. Show domain knowledge.'
  });
  
  // 11. FINANCIALS (Seed+)
  if (!isPreseed) {
    slides.push({
      id: '11',
      type: 'financials',
      title: 'Financial Projections',
      bullets: [
        `Current ARR: $${deckData.revenue ? Math.round(parseFloat(deckData.revenue.replace(/[^0-9.]/g, '')) * 12) : '144'}K`,
        'Year 1: $1.2M ARR (8x growth)',
        'Year 2: $4.5M ARR (breakeven)',
        'Year 3: $12M ARR (Rule of 40 compliant)',
        'Assumptions: 40% MoM growth, 15% churn, $8K ACV'
      ],
      notes: 'Conservative assumptions. Show path to profitability.'
    });
  }
  
  // 12. THE ASK
  slides.push({
    id: isPreseed ? '11' : '12',
    type: 'ask',
    title: 'The Ask',
    bullets: [
      `Raising $${getAskAmount(stage)} ${stage.charAt(0).toUpperCase() + stage.slice(1)} round`,
      'Use of funds: 60% engineering, 25% GTM, 15% ops',
      `18-month runway to reach $${getNextMilestone(stage)} ARR`,
      'Key hires: 2 senior engineers, 1 sales lead, 1 marketer',
      `${getTimelineGoal(stage)} runway takes us to ${getNextRound(stage)}`
    ],
    notes: 'Be specific about use of funds. Show milestones you\'ll hit.'
  });
  
  return slides;
}

// Helper functions for deck generation
function getMarketSize(industry: string): string {
  const sizes: Record<string, string> = {
    'enterprise-saas': '12B',
    'healthcare': '28B',
    'financial-services': '45B',
    'retail-ecommerce': '18B',
    'sales-marketing': '15B',
    'communication': '8B',
    'mobile': '22B',
    'education': '14B'
  };
  return sizes[industry] || '10B';
}

function getMarketCategory(industry: string): string {
  const categories: Record<string, string> = {
    'enterprise-saas': 'enterprise software',
    'healthcare': 'healthcare technology',
    'financial-services': 'fintech',
    'retail-ecommerce': 'commerce technology',
    'sales-marketing': 'marketing automation',
    'communication': 'collaboration software',
    'mobile': 'mobile apps',
    'education': 'edtech'
  };
  return categories[industry] || 'software';
}

function getMarketGrowth(industry: string): string {
  const growth: Record<string, string> = {
    'enterprise-saas': '18%',
    'healthcare': '22%',
    'financial-services': '25%',
    'retail-ecommerce': '16%',
    'sales-marketing': '20%',
    'communication': '14%',
    'mobile': '19%',
    'education': '17%'
  };
  return growth[industry] || '18%';
}

function getTargetSegment(industry: string): string {
  const segments: Record<string, string> = {
    'enterprise-saas': '450K B2B companies',
    'healthcare': '6,000 hospitals + 250K clinics',
    'financial-services': '10K+ financial institutions',
    'retail-ecommerce': '2M+ online retailers',
    'sales-marketing': '800K sales teams',
    'communication': '15M+ remote teams',
    'mobile': '5B+ smartphone users',
    'education': '130K schools + 20M students'
  };
  return segments[industry] || '500K+ companies';
}

function getACV(industry: string): string {
  const acv: Record<string, string> = {
    'enterprise-saas': '15,000',
    'healthcare': '45,000',
    'financial-services': '85,000',
    'retail-ecommerce': '12,000',
    'sales-marketing': '18,000',
    'communication': '8,000',
    'mobile': '2,400',
    'education': '25,000'
  };
  return acv[industry] || '15,000';
}

function getSalesMotion(industry: string): string {
  const motion: Record<string, string> = {
    'enterprise-saas': 'sales-assisted',
    'healthcare': 'enterprise sales',
    'financial-services': 'enterprise sales',
    'retail-ecommerce': 'product-led + sales',
    'sales-marketing': 'product-led',
    'communication': 'product-led',
    'mobile': 'product-led',
    'education': 'sales-assisted'
  };
  return motion[industry] || 'sales-assisted';
}

function getEarlyAdopter(industry: string): string {
  const adopters: Record<string, string> = {
    'enterprise-saas': 'SMB tech companies',
    'healthcare': 'progressive clinics',
    'financial-services': 'challenger banks',
    'retail-ecommerce': 'D2C brands',
    'sales-marketing': 'growth-stage startups',
    'communication': 'remote-first teams',
    'mobile': 'tech-savvy millennials',
    'education': 'forward-thinking schools'
  };
  return adopters[industry] || 'early adopter companies';
}

function getRelevantCompanies(industry: string): string {
  const companies: Record<string, string> = {
    'enterprise-saas': 'Salesforce, HubSpot, Slack',
    'healthcare': 'Epic, Cerner, Teladoc',
    'financial-services': 'Stripe, Square, Plaid',
    'retail-ecommerce': 'Shopify, Amazon, Faire',
    'sales-marketing': 'Gong, Outreach, Drift',
    'communication': 'Zoom, Slack, Notion',
    'mobile': 'Meta, Snap, TikTok',
    'education': 'Coursera, Duolingo, Khan Academy'
  };
  return companies[industry] || 'leading tech companies';
}

function getAskAmount(stage: string): string {
  const amounts: Record<string, string> = {
    'pre-seed': '500K',
    'seed': '2M',
    'series-a': '8M'
  };
  return amounts[stage] || '1M';
}

function getNextMilestone(stage: string): string {
  const milestones: Record<string, string> = {
    'pre-seed': '500K',
    'seed': '3M',
    'series-a': '15M'
  };
  return milestones[stage] || '1M';
}

function getTimelineGoal(stage: string): string {
  const goals: Record<string, string> = {
    'pre-seed': '12-month',
    'seed': '18-month',
    'series-a': '24-month'
  };
  return goals[stage] || '18-month';
}

function getNextRound(stage: string): string {
  const rounds: Record<string, string> = {
    'pre-seed': 'Seed',
    'seed': 'Series A',
    'series-a': 'Series B'
  };
  return rounds[stage] || 'next round';
}

// Landing Screen
function LandingScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight leading-tight">
            Create an investor-ready <br />
            <span className="italic font-light">pitch deck</span> in minutes
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            AI structures your story. You stay in control.
          </p>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-[#0d5f4e] text-white rounded-xl hover:bg-[#0a4d3f] transition-all text-lg font-medium inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            Generate Pitch Deck
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Simple Deck Preview */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-64 h-40 bg-white rounded-xl border border-gray-200 shadow-lg p-6 transform rotate-[-2deg]">
            <div className="w-12 h-2 bg-gray-200 rounded mb-4" />
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-100 rounded" />
              <div className="w-3/4 h-2 bg-gray-100 rounded" />
              <div className="w-5/6 h-2 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="w-64 h-40 bg-white rounded-xl border border-gray-200 shadow-xl p-6 z-10">
            <div className="w-16 h-2 bg-[#0d5f4e] rounded mb-4" />
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-200 rounded" />
              <div className="w-4/5 h-2 bg-gray-200 rounded" />
              <div className="w-full h-2 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="w-64 h-40 bg-white rounded-xl border border-gray-200 shadow-lg p-6 transform rotate-[2deg]">
            <div className="w-12 h-2 bg-gray-200 rounded mb-4" />
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-100 rounded" />
              <div className="w-2/3 h-2 bg-gray-100 rounded" />
              <div className="w-5/6 h-2 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wizard Screen
function WizardScreen({ 
  step, 
  setStep, 
  data, 
  setData, 
  onGenerate 
}: { 
  step: WizardStep;
  setStep: (step: WizardStep) => void;
  data: DeckData;
  setData: (data: DeckData) => void;
  onGenerate: () => void;
}) {
  const steps: WizardStep[] = ['startup-info', 'market-traction', 'smart-interviewer', 'review'];
  const currentStepIndex = steps.indexOf(step);

  const goNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1]);
    } else {
      onGenerate();
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT PANEL - Progress */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="text-sm text-gray-500 mb-6">
                Step {currentStepIndex + 1} of {steps.length}
              </div>
              <div className="space-y-4">
                <StepIndicator step={1} current={currentStepIndex + 1} label="Startup Info" />
                <StepIndicator step={2} current={currentStepIndex + 1} label="Market & Traction" />
                <StepIndicator step={3} current={currentStepIndex + 1} label="Smart Interviewer" />
                <StepIndicator step={4} current={currentStepIndex + 1} label="Review & Generate" />
              </div>
            </div>
          </div>

          {/* MAIN PANEL - Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
              {step === 'startup-info' && (
                <StartupInfoStep data={data} setData={setData} />
              )}
              {step === 'market-traction' && (
                <MarketTractionStep data={data} setData={setData} />
              )}
              {step === 'smart-interviewer' && (
                <SmartInterviewerStep data={data} setData={setData} />
              )}
              {step === 'review' && (
                <ReviewStep data={data} setStep={setStep} />
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={goBack}
                  disabled={currentStepIndex === 0}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    currentStepIndex === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={goNext}
                    className="px-8 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all text-sm font-medium flex items-center gap-2"
                  >
                    {currentStepIndex === steps.length - 1 ? 'Generate Investor Deck' : 'Continue'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  {currentStepIndex === steps.length - 1 && (
                    <p className="text-xs text-gray-500">
                      You can edit everything after generation
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - AI Intelligence */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <AIPanel step={step} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepIndicator({ step, current, label }: { step: number; current: number; label: string }) {
  const isComplete = step < current;
  const isCurrent = step === current;

  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
        isComplete 
          ? 'bg-[#0d5f4e] text-white' 
          : isCurrent
          ? 'bg-[#0d5f4e]/10 text-[#0d5f4e] border-2 border-[#0d5f4e]'
          : 'bg-gray-100 text-gray-400'
      }`}>
        {isComplete ? <Check className="w-4 h-4" /> : step}
      </div>
      <span className={`text-sm ${isCurrent ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}

// IMPROVED Step 1: Startup Info
function StartupInfoStep({ data, setData }: { data: DeckData; setData: (data: DeckData) => void }) {
  const charLimit = 500;
  const charCount = data.description.length;
  const isApproachingLimit = charCount > 450;
  const [isEnhancing, setIsEnhancing] = useState(false);

  const subIndustries: Record<string, string[]> = {
    'enterprise-saas': ['Sales & CRM', 'Marketing Automation', 'HR & Recruiting', 'Analytics & BI', 'Developer Tools', 'Collaboration', 'Security', 'Customer Support', 'Workflow Automation', 'Data Management'],
    'healthcare': ['Telemedicine', 'Digital Health', 'Medical Devices', 'Healthcare Analytics', 'Mental Health', 'Pharma Tech', 'Care Management', 'Health Insurance'],
    'financial-services': ['Payments', 'Lending', 'Insurance', 'Investment', 'Banking', 'Crypto & Web3', 'Compliance', 'Wealth Management'],
    'retail-ecommerce': ['B2B Marketplace', 'B2C Marketplace', 'D2C Brands', 'Vertical Commerce', 'Retail Tech', 'Supply Chain', 'Fulfillment', 'Inventory Management'],
    'sales-marketing': ['Marketing Automation', 'Sales Enablement', 'Advertising Tech', 'Content Marketing', 'SEO & Analytics', 'Social Media', 'Email Marketing', 'Affiliate & Partners'],
    'communication': ['Messaging', 'Video Conferencing', 'Team Collaboration', 'Customer Communication', 'VoIP & Telephony', 'Unified Communications', 'Contact Centers'],
    'mobile': ['Mobile Apps', 'Gaming', 'Social', 'Productivity', 'Entertainment', 'Utilities', 'Mobile Commerce'],
    'education': ['EdTech', 'Online Learning', 'Corporate Training', 'K-12', 'Higher Education', 'Test Prep', 'Language Learning', 'Skill Development']
  };

  const enhanceSubCategory = () => {
    setIsEnhancing(true);
    // Simulate AI enhancement with realistic delay
    setTimeout(() => {
      // Smart enhancement based on description
      const description = data.description.toLowerCase();
      let enhanced = data.subIndustry;

      if (data.industry === 'enterprise-saas') {
        if (description.includes('sales') || description.includes('crm')) {
          enhanced = 'Sales & CRM';
        } else if (description.includes('marketing')) {
          enhanced = 'Marketing Automation';
        } else if (description.includes('analytics') || description.includes('data')) {
          enhanced = 'Analytics & BI';
        } else if (description.includes('security')) {
          enhanced = 'Security';
        } else if (description.includes('hr') || description.includes('recruit')) {
          enhanced = 'HR & Recruiting';
        } else {
          enhanced = 'Collaboration';
        }
      } else if (data.industry === 'healthcare') {
        if (description.includes('telehealth') || description.includes('telemedicine')) {
          enhanced = 'Telemedicine';
        } else if (description.includes('mental')) {
          enhanced = 'Mental Health';
        } else if (description.includes('device')) {
          enhanced = 'Medical Devices';
        } else {
          enhanced = 'Digital Health';
        }
      } else if (data.industry === 'financial-services') {
        if (description.includes('payment') || description.includes('pay')) {
          enhanced = 'Payments';
        } else if (description.includes('lend') || description.includes('loan')) {
          enhanced = 'Lending';
        } else if (description.includes('crypto') || description.includes('blockchain')) {
          enhanced = 'Crypto & Web3';
        } else if (description.includes('invest')) {
          enhanced = 'Investment';
        } else {
          enhanced = 'Banking';
        }
      }

      setData({ ...data, subIndustry: enhanced });
      setIsEnhancing(false);
    }, 800);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">Startup Information</h2>
        <p className="text-gray-600">Tell us about your company</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            value={data.companyName}
            onChange={(e) => setData({ ...data, companyName: e.target.value })}
            placeholder="e.g., Acme AI"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website URL
          </label>
          <input
            type="url"
            value={data.website}
            onChange={(e) => setData({ ...data, website: e.target.value })}
            placeholder="https://acmeai.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">We'll auto-fill details from your website</p>
        </div>

        {/* Description field - 500 character limit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <div className="text-xs text-gray-500 mb-2">
            What do you build and for whom? Include the problem you solve and why it's better.
          </div>
          <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value.slice(0, charLimit) })}
            placeholder="We build AI-powered copilots for B2B support teams. Our solution helps companies resolve customer tickets 3x faster by combining automated responses with built-in approval workflows, reducing support costs while improving response times and customer satisfaction."
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Be clear and specific about your value proposition</span>
            <span className={`text-xs font-medium ${
              isApproachingLimit ? 'text-yellow-600' : charCount < 50 ? 'text-gray-400' : 'text-[#0d5f4e]'
            }`}>
              {charCount}/{charLimit}
            </span>
          </div>
        </div>

        {/* Target Market field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Market *
          </label>
          <div className="text-xs text-gray-500 mb-2">
            Who are your primary customers? Be specific about industry, company size, or user type.
          </div>
          <input
            type="text"
            value={data.targetMarket}
            onChange={(e) => setData({ ...data, targetMarket: e.target.value })}
            placeholder="e.g., B2B SaaS companies with 50-500 employees, E-commerce retailers, Healthcare providers"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          />
        </div>

        {/* IMPROVED: Industry with sub-category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <select
            value={data.industry}
            onChange={(e) => setData({ ...data, industry: e.target.value, subIndustry: '' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          >
            <option value="">Select industry</option>
            <option value="enterprise-saas">Enterprise SaaS</option>
            <option value="healthcare">Health Care</option>
            <option value="financial-services">Financial Services</option>
            <option value="retail-ecommerce">Retail & eCommerce</option>
            <option value="sales-marketing">Sales & Marketing</option>
            <option value="communication">Communication</option>
            <option value="mobile">Mobile</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* IMPROVED: Sub-category with AI enhance */}
        {data.industry && subIndustries[data.industry] && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Sub-category (optional)
              </label>
              {data.description && (
                <AIGenerateIcon
                  onClick={enhanceSubCategory}
                  loading={isEnhancing}
                  tooltip="Make this more specific for investors"
                  label="AI Enhance"
                  size={14}
                />
              )}
            </div>
            <select
              value={data.subIndustry}
              onChange={(e) => setData({ ...data, subIndustry: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            >
              <option value="">Select sub-category</option>
              {subIndustries[data.industry].map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
            <div className="text-xs text-gray-500 mt-1">
              Be specific: investors scan this in 2 seconds
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// IMPROVED Step 2: Market & Traction
function MarketTractionStep({ data, setData }: { data: DeckData; setData: (data: DeckData) => void }) {
  const growthValue = parseFloat(data.growth) || 0;
  const showGrowthWarning = growthValue > 500;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">Market & Traction</h2>
        <p className="text-gray-600">Show the problem and your progress</p>
      </div>

      <div className="space-y-6">
        {/* IMPROVED: Problem field with inline guidance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Problem *
          </label>
          <div className="text-xs text-gray-500 mb-2">
            Describe the pain in one sentence. Avoid features.
          </div>
          <textarea
            value={data.problem}
            onChange={(e) => setData({ ...data, problem: e.target.value })}
            placeholder="Support teams waste 60% of time on repetitive tickets that could be automated, leading to agent burnout and poor customer experience"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
          />
        </div>

        {/* IMPROVED: Solution split into two fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Core Solution *
            </label>
            <textarea
              value={data.solution}
              onChange={(e) => setData({ ...data, solution: e.target.value })}
              placeholder="What you built to solve the problem"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why it's different
            </label>
            <textarea
              value={data.differentiation}
              onChange={(e) => setData({ ...data, differentiation: e.target.value })}
              placeholder="What makes your approach unique (e.g., proprietary tech, unique data, novel approach)"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Users
            </label>
            <input
              type="text"
              value={data.users}
              onChange={(e) => setData({ ...data, users: e.target.value })}
              placeholder="2,300"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Revenue (MRR)
            </label>
            <input
              type="text"
              value={data.revenue}
              onChange={(e) => setData({ ...data, revenue: e.target.value })}
              placeholder="$12k"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Growth (%)
            </label>
            <input
              type="text"
              value={data.growth}
              onChange={(e) => setData({ ...data, growth: e.target.value })}
              placeholder="40"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            />
            {/* IMPROVED: Soft validation warning */}
            {showGrowthWarning && (
              <div className="flex items-start gap-2 mt-2 text-xs text-yellow-700 bg-yellow-50 p-2 rounded">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {growthValue}% growth looks unusually high. Is this month-over-month?
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Funding Stage *
          </label>
          <div className="space-y-2">
            {['pre-seed', 'seed', 'series-a'].map((stage) => (
              <label key={stage} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="fundingStage"
                  value={stage}
                  checked={data.fundingStage === stage}
                  onChange={(e) => setData({ ...data, fundingStage: e.target.value })}
                  className="w-4 h-4 text-[#0d5f4e] focus:ring-[#0d5f4e]"
                />
                <span className="text-sm text-gray-700 capitalize">{stage.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3: Smart Interviewer - Now imported from /components/pitch-deck/SmartInterviewerStep.tsx
// (Old DeckStyleStep removed - now using SmartInterviewerStep component)

// IMPROVED Step 4: Review
function ReviewStep({ data, setStep }: { data: DeckData; setStep: (step: WizardStep) => void }) {
  // Upgraded readiness checklist (aligned with stage)
  const stage = data.deckType === 'seed' ? 'Seed' : data.deckType === 'series-a' ? 'Series A' : 'Pre-Seed';
  
  const readiness = [
    { 
      label: 'Problem clearly stated', 
      status: data.problem ? 'complete' : 'incomplete',
      targetStep: 'market-traction' as WizardStep
    },
    { 
      label: 'Market context included', 
      status: data.industry && data.marketSize ? 'complete' : 'incomplete',
      targetStep: 'startup-info' as WizardStep
    },
    { 
      label: `Traction aligned with ${stage} stage`, 
      status: data.users || data.revenue ? 'complete' : 'warning',
      targetStep: 'market-traction' as WizardStep
    }
  ];

  // AI Deck Analysis logic
  const getStoryClarity = () => {
    if (data.problem && data.solution && data.description) return 'Strong';
    if (data.problem && data.solution) return 'Good';
    return 'Needs work';
  };

  const getProblemSolutionFit = () => {
    if (data.problem && data.solution && data.differentiator) return 'Clear';
    if (data.problem && data.solution) return 'Adequate';
    return 'Unclear';
  };

  const getTractionStrength = () => {
    const users = parseInt(data.users) || 0;
    const revenue = parseFloat(data.revenue.replace(/[^0-9.]/g, '')) || 0;
    
    if (stage === 'Pre-Seed') {
      if (users > 100 || revenue > 1) return 'Strong for Pre-Seed';
      return 'Early for Pre-Seed';
    } else if (stage === 'Seed') {
      if (users > 1000 || revenue > 10) return 'Good for Seed';
      return 'Light for Seed';
    } else {
      if (users > 10000 || revenue > 100) return 'Strong for Series A';
      return 'Needs growth for Series A';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">Review & Generate</h2>
        <p className="text-gray-600">Check completeness before generating your deck</p>
      </div>

      {/* Readiness Checklist */}
      <div className="space-y-4">
        <div className="text-lg font-medium text-gray-900">Deck Readiness</div>
        {readiness.map((item, idx) => (
          <div key={idx} className={`flex items-center justify-between p-4 rounded-lg border ${ 
            item.status === 'complete' ? 'bg-green-50 border-green-200' : 
            item.status === 'warning' ? 'bg-yellow-50 border-yellow-200' : 
            'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              {item.status === 'complete' ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-gray-400" />
              )}
              <span className="text-sm text-gray-900">{item.label}</span>
            </div>
            {item.status !== 'complete' && (
              <button
                onClick={() => setStep(item.targetStep)}
                className="text-xs text-[#0d5f4e] hover:underline flex items-center gap-1"
              >
                Fix <Edit3 className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* AI Analysis */}
      <div className="p-6 bg-gradient-to-br from-[#0d5f4e]/5 to-emerald-50 border border-[#0d5f4e]/20 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
          <h3 className="font-medium text-gray-900">AI Deck Analysis</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Story Clarity:</span>
            <span className="font-medium text-gray-900">{getStoryClarity()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Problem-Solution Fit:</span>
            <span className="font-medium text-gray-900">{getProblemSolutionFit()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Traction Level:</span>
            <span className="font-medium text-gray-900">{getTractionStrength()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Panel
function AIPanel({ step, data }: { step: WizardStep; data: DeckData }) {
  const [showRewrite, setShowRewrite] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const getTractionInsight = () => {
    const users = parseInt(data.users) || 0;
    const revenue = parseFloat(data.revenue.replace(/[^0-9.]/g, '')) || 0;
    
    if (users > 1000 || revenue > 10) {
      return '✨ Traction is strong for Pre-Seed stage';
    }
    return '💡 Focus on qualitative wins if metrics are early';
  };

  return (
    <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
        <span className="text-sm font-medium text-gray-900">AI Assistant</span>
      </div>

      {step === 'startup-info' && (
        <div className="space-y-4 text-sm">
          <button
            onClick={() => setShowRewrite(!showRewrite)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#0d5f4e] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Enhance my description
          </button>
          
          {showRewrite && (
            <div className="text-xs text-gray-600 p-3 bg-white rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
              Based on your industry, try: "We build AI-powered SDRs that automatically book qualified meetings for B2B sales teams."
            </div>
          )}

          <div className="pt-4 border-t border-[#0d5f4e]/20">
            <div className="text-xs text-gray-600 mb-2">
              <strong>Example:</strong>
            </div>
            <div className="text-xs text-gray-700 italic">
              "We build AI copilots for B2B support teams that resolve tickets 3x faster."
            </div>
          </div>
        </div>
      )}

      {step === 'market-traction' && (
        <div className="space-y-4 text-sm text-gray-700">
          <p>📊 Investors look for clear pain + proof</p>
          <div className="pt-4 border-t border-[#0d5f4e]/20">
            <div className="text-xs text-gray-600 mb-2">Confidence Level</div>
            <p className="text-sm">{getTractionInsight()}</p>
          </div>
        </div>
      )}

      {step === 'smart-interviewer' && (
        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-900">Interview Progress</div>
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="text-sm text-gray-700">
              Answer questions to build your deck automatically
            </div>
          </div>
        </div>
      )}

      {step === 'review' && (
        <div className="space-y-4 text-sm">
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <p className="font-medium text-gray-900 mb-2">🎯 Final Check</p>
            <p className="text-sm text-gray-600">Review all information before generating</p>
          </div>
        </div>
      )}
    </div>
  );
}

// IMPROVED Generating Screen
function GeneratingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Analyzing startup data and industry context',
    'Structuring investor narrative flow',
    'Generating slide content with metrics',
    'Creating visual recommendations',
    'Calculating slide strength scores',
    'Finalizing 10-12 slide deck'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) return steps.length - 1;
        return prev + 1;
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-[#0d5f4e] mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl text-gray-900 mb-2">Generating Your Deck</h2>
          <p className="text-gray-600 mb-2">Creating 10–12 slides optimized for seed investors</p>
          {/* IMPROVED: Time estimate */}
          <div className="text-sm text-gray-500">
            {progress < 50 ? 'Estimated time: ~30 seconds' : 'Almost done...'}
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0d5f4e] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-gray-500 mt-2">{progress}%</div>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                index <= currentStep ? 'bg-[#0d5f4e]/10' : 'bg-gray-50'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5 text-[#0d5f4e]" />
              ) : index === currentStep ? (
                <div className="w-5 h-5 border-2 border-[#0d5f4e] border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              )}
              <span className={`text-sm ${index <= currentStep ? 'text-gray-900' : 'text-gray-500'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// IMPROVED Editor Screen (continued in next file due to length)
function EditorScreen({ 
  slides, 
  setSlides, 
  currentSlide, 
  setCurrentSlide,
  deckData
}: { 
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  deckData: DeckData;
}) {
  const slide = slides[currentSlide];
  const [viewMode, setViewMode] = useState<'visual' | 'bullets'>('visual');

  const updateSlide = (updates: Partial<Slide>) => {
    const newSlides = [...slides];
    newSlides[currentSlide] = { ...slide, ...updates };
    setSlides(newSlides);
  };

  const addMetricToBullet = () => {
    const metricTemplate = 'X hours wasted per week';
    const newBullets = [...slide.bullets, metricTemplate];
    updateSlide({ bullets: newBullets });
  };

  const improveSlide = (type: 'concise' | 'investor') => {
    console.log(`Improving slide with ${type} style`);
  };

  const moveSlide = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= slides.length) return;
    
    const newSlides = [...slides];
    [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
    setSlides(newSlides);
    setCurrentSlide(newIndex);
  };

  const duplicateSlide = (index: number) => {
    const newSlide = { ...slides[index], id: `${slides[index].id}-copy` };
    const newSlides = [...slides];
    newSlides.splice(index + 1, 0, newSlide);
    setSlides(newSlides);
  };

  const deleteSlide = (index: number) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((_, i) => i !== index);
    setSlides(newSlides);
    if (currentSlide >= newSlides.length) {
      setCurrentSlide(newSlides.length - 1);
    }
  };

  // Calculate word count
  const totalWords = slide.bullets.reduce((acc, b) => acc + b.split(' ').length, 0);
  const maxWords = 90; // ~18 per bullet for 5 bullets

  // Get visual component for slide type
  const VisualComponent = getVisualForSlideType(slide.type);

  // Keyboard shortcuts for navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle shortcuts if not typing in an input/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        console.log('Auto-save triggered');
      } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        e.preventDefault();
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        e.preventDefault();
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT PANEL - Slide Outline with Reordering */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-700">Deck Outline</div>
                <div className="text-xs text-gray-500">{slides.length} slides</div>
              </div>
              
              {/* Status Legend */}
              <div className="flex items-center gap-3 mb-4 px-2 py-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1.5" title="Strong - Investor ready">
                  <Check className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-gray-600">Strong</span>
                </div>
                <div className="flex items-center gap-1.5" title="Needs improvement">
                  <AlertCircle className="w-3 h-3 text-yellow-600" />
                  <span className="text-xs text-gray-600">Review</span>
                </div>
                <div className="flex items-center gap-1.5" title="AI suggestion available">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span className="text-xs text-gray-600">AI Help</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {slides.map((s, index) => {
                  const quality = getSlideQuality(s);
                  const slideScore = calculateSlideScore(s);
                  const isActive = currentSlide === index;
                  
                  return (
                    <div
                      key={s.id}
                      className={`group rounded-lg transition-all ${
                        isActive
                          ? 'bg-[#0d5f4e] text-white ring-2 ring-[#0d5f4e]/20'
                          : 'bg-white border border-gray-200 hover:border-[#0d5f4e]/30'
                      }`}
                    >
                      <div
                        onClick={() => setCurrentSlide(index)}
                        className="flex items-center gap-3 p-3 cursor-pointer"
                      >
                        <div className={`text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs capitalize mb-0.5 ${isActive ? 'opacity-80' : 'text-gray-500'}`}>
                            {s.type.replace('_', ' ')}
                          </div>
                          <div className="text-sm font-medium truncate">{s.title}</div>
                        </div>
                        {!isActive && (
                          <div className="flex items-center gap-1">
                            {slideScore >= 80 ? (
                              <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center" title="Strong - Investor ready">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            ) : slideScore >= 60 ? (
                              <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center" title="Needs improvement">
                                <AlertCircle className="w-4 h-4 text-yellow-600" />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center" title="AI suggestion available">
                                <Sparkles className="w-4 h-4 text-blue-600" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Slide Actions - show on hover or when active */}
                      {isActive && (
                        <div className="px-3 pb-3 flex items-center gap-1">
                          <button
                            onClick={() => moveSlide(index, 'up')}
                            disabled={index === 0}
                            className={`p-1.5 rounded hover:bg-white/20 transition-colors ${
                              index === 0 ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                            title="Move up"
                          >
                            <ChevronLeft className="w-3.5 h-3.5 rotate-90" />
                          </button>
                          <button
                            onClick={() => moveSlide(index, 'down')}
                            disabled={index === slides.length - 1}
                            className={`p-1.5 rounded hover:bg-white/20 transition-colors ${
                              index === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                            title="Move down"
                          >
                            <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                          </button>
                          <button
                            onClick={() => duplicateSlide(index)}
                            className="p-1.5 rounded hover:bg-white/20 transition-colors ml-auto"
                            title="Duplicate slide"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteSlide(index)}
                            disabled={slides.length <= 1}
                            className={`p-1.5 rounded hover:bg-white/20 transition-colors ${
                              slides.length <= 1 ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                            title="Delete slide"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Add New Slide Button */}
              <button
                onClick={() => {
                  const newSlide: Slide = {
                    id: `${slides.length + 1}`,
                    type: 'custom',
                    title: 'New Slide',
                    bullets: ['Add your content here', 'Point 2', 'Point 3'],
                    notes: ''
                  };
                  setSlides([...slides, newSlide]);
                  setCurrentSlide(slides.length);
                }}
                className="w-full mt-4 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Slide
              </button>
            </div>
          </div>

          {/* MAIN PANEL - Slide Editor */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
              {/* View Toggle */}
              {VisualComponent && (
                <div className="flex justify-end mb-6">
                  <div className="inline-flex rounded-lg border border-gray-200 p-1">
                    <button
                      onClick={() => setViewMode('visual')}
                      className={`px-4 py-2 rounded text-sm font-medium transition-all flex items-center gap-2 ${
                        viewMode === 'visual'
                          ? 'bg-[#0d5f4e] text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                      Visual
                    </button>
                    <button
                      onClick={() => setViewMode('bullets')}
                      className={`px-4 py-2 rounded text-sm font-medium transition-all flex items-center gap-2 ${
                        viewMode === 'bullets'
                          ? 'bg-[#0d5f4e] text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <List className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                </div>
              )}

              {/* Visual View */}
              {viewMode === 'visual' && VisualComponent && (
                <div className="mb-8">
                  <VisualComponent />
                </div>
              )}

              {/* Bullet Edit View */}
              {(viewMode === 'bullets' || !VisualComponent) && (
                <>
                  {/* IMPROVED: Value prop highlight for Solution slide */}
                  {slide.type === 'solution' && (
                    <div className="mb-6 p-4 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                      <div className="text-xs text-gray-500 mb-1">Key Value Proposition</div>
                      <div className="text-xl text-gray-900">
                        {slide.title}
                      </div>
                    </div>
                  )}

                  {/* IMPROVED: Slide-specific visual components */}
                  {slide.type === 'market' ? (
                    <MarketSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : slide.type === 'traction' ? (
                    <TractionSlideStats slide={slide} updateSlide={updateSlide} deckData={deckData} />
                  ) : slide.type === 'business_model' ? (
                    <BusinessModelSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : slide.type === 'competition' ? (
                    <CompetitionSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : slide.type === 'gtm' ? (
                    <GTMSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : slide.type === 'financials' ? (
                    <FinancialsSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : slide.type === 'ask' ? (
                    <AskSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : (
                    <>
                      <div className="mb-8">
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => updateSlide({ title: e.target.value })}
                          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
                          placeholder="Slide title"
                        />
                      </div>

                      <div className="space-y-4 mb-6">
                        {slide.bullets.map((bullet, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
                            <input
                              type="text"
                              value={bullet}
                              onChange={(e) => {
                                const newBullets = [...slide.bullets];
                                newBullets[index] = e.target.value;
                                updateSlide({ bullets: newBullets });
                              }}
                              className="flex-1 text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
                              placeholder="Bullet point"
                            />
                          </div>
                        ))}
                      </div>

                      {/* IMPROVED: Word count guardrails */}
                      <div className="mb-6 text-xs text-gray-500 flex justify-between items-center">
                        <span>
                          Total words: {totalWords}/{maxWords} (aim for ~18 per bullet)
                        </span>
                        {totalWords > maxWords && (
                          <span className="text-yellow-600">Consider condensing</span>
                        )}
                      </div>

                      {/* IMPROVED: Add metric quick action for Problem slide */}
                      {slide.type === 'problem' && (
                        <button
                          onClick={addMetricToBullet}
                          className="mb-6 text-xs text-[#0d5f4e] flex items-center gap-1 hover:underline"
                        >
                          <Plus className="w-3 h-3" />
                          Add metric to quantify pain
                        </button>
                      )}
                    </>
                  )}
                </>
              )}

              <div className="pt-8 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Speaker Notes (optional)
                </label>
                <textarea
                  value={slide.notes}
                  onChange={(e) => updateSlide({ notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none text-sm"
                  placeholder="Add notes for this slide..."
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - AI Intelligence with Priority Ordering */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <AIFeedbackPanel slide={slide} improveSlide={improveSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// IMPROVED: Market Slide Visual Component
function MarketSlideVisual({ slide, updateSlide }: { slide: Slide; updateSlide: (updates: Partial<Slide>) => void }) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="Market Opportunity"
        />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium text-gray-700">TAM (Total Addressable Market)</div>
            <input
              type="text"
              defaultValue="$12B"
              className="text-sm text-gray-900 font-medium text-right border-none focus:outline-none w-24"
            />
          </div>
          <div className="h-10 bg-[#0d5f4e] rounded-lg w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium text-gray-700">SAM (Serviceable Available)</div>
            <input
              type="text"
              defaultValue="$3B"
              className="text-sm text-gray-900 font-medium text-right border-none focus:outline-none w-24"
            />
          </div>
          <div className="h-10 bg-[#0d5f4e]/70 rounded-lg w-3/4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium text-gray-700">SOM (Serviceable Obtainable)</div>
            <input
              type="text"
              defaultValue="$150M"
              className="text-sm text-gray-900 font-medium text-right border-none focus:outline-none w-24"
            />
          </div>
          <div className="h-10 bg-[#0d5f4e]/40 rounded-lg w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10" />
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
        Visual representation makes market sizing more credible than text bullets
      </div>
    </div>
  );
}

// IMPROVED: Traction Slide Stats Component
function TractionSlideStats({ 
  slide, 
  updateSlide, 
  deckData 
}: { 
  slide: Slide; 
  updateSlide: (updates: Partial<Slide>) => void;
  deckData: DeckData;
}) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="Traction"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 bg-gray-50 rounded-xl">
          <div className="text-3xl font-light text-gray-900 mb-2">
            {deckData.users || '2.3K'}
          </div>
          <div className="text-xs text-gray-500">Active Users</div>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <div className="text-3xl font-light text-gray-900 mb-2">
            {deckData.revenue || '$12K'}
          </div>
          <div className="text-xs text-gray-500">MRR</div>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <div className="text-3xl font-light text-gray-900 mb-2">
            {deckData.growth || '40'}%
          </div>
          <div className="text-xs text-gray-500">MoM Growth</div>
        </div>
      </div>

      <div className="text-xs text-gray-500">
        As of {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>

      {/* Growth Chart */}
      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Growth Trajectory</div>
        <TractionChart />
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Additional Metrics</div>
        <div className="space-y-3">
          {slide.bullets.slice(3).map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...slide.bullets];
                  newBullets[index + 3] = e.target.value;
                  updateSlide({ bullets: newBullets });
                }}
                className="flex-1 text-sm text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Business Model Slide Visual Component
function BusinessModelSlideVisual({ slide, updateSlide }: { slide: Slide; updateSlide: (updates: Partial<Slide>) => void }) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="Business Model"
        />
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div className="text-sm text-gray-500 mb-2">Starter</div>
          <div className="text-2xl font-light text-gray-900 mb-4">$49/mo</div>
          <div className="text-xs text-gray-600">Per user</div>
        </div>
        <div className="p-6 bg-[#0d5f4e]/5 rounded-xl border-2 border-[#0d5f4e]">
          <div className="text-sm text-[#0d5f4e] font-medium mb-2">Professional</div>
          <div className="text-2xl font-light text-gray-900 mb-4">$99/mo</div>
          <div className="text-xs text-gray-600">Per user • Most popular</div>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div className="text-sm text-gray-500 mb-2">Enterprise</div>
          <div className="text-2xl font-light text-gray-900 mb-4">Custom</div>
          <div className="text-xs text-gray-600">Starting at $5K/mo</div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Revenue Model</div>
        <div className="space-y-3">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...slide.bullets];
                  newBullets[index] = e.target.value;
                  updateSlide({ bullets: newBullets });
                }}
                className="flex-1 text-sm text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Competition Slide Visual Component  
function CompetitionSlideVisual({ slide, updateSlide }: { slide: Slide; updateSlide: (updates: Partial<Slide>) => void }) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="Competitive Landscape"
        />
      </div>

      {/* 2x2 Matrix Visualization */}
      <div className="relative aspect-square border border-gray-300 rounded-lg">
        {/* Axis labels */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-500">
          High Feature Completeness
        </div>
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-500 whitespace-nowrap">
          High Ease of Use
        </div>
        
        {/* Quadrants */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="border-r border-b border-gray-300 p-4">
            <div className="text-xs text-gray-400">Simple</div>
          </div>
          <div className="border-b border-gray-300 p-4 bg-[#0d5f4e]/5">
            <div className="text-xs text-gray-400">Leaders</div>
          </div>
          <div className="border-r border-gray-300 p-4">
            <div className="text-xs text-gray-400">Niche</div>
          </div>
          <div className="p-4">
            <div className="text-xs text-gray-400">Complex</div>
          </div>
        </div>
        
        {/* Your position (top-right quadrant) */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#0d5f4e] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs text-white font-medium">You</span>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Key Differentiators</div>
        <div className="space-y-3">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...slide.bullets];
                  newBullets[index] = e.target.value;
                  updateSlide({ bullets: newBullets });
                }}
                className="flex-1 text-sm text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// GTM Slide Visual Component
function GTMSlideVisual({ slide, updateSlide }: { slide: Slide; updateSlide: (updates: Partial<Slide>) => void }) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="Go-To-Market Strategy"
        />
      </div>

      {/* Funnel Visualization */}
      <div className="space-y-3">
        <div className="h-12 bg-[#0d5f4e]/20 rounded-lg flex items-center px-6">
          <span className="text-sm font-medium text-gray-900">Phase 1: Product-Led Growth</span>
        </div>
        <div className="h-12 bg-[#0d5f4e]/40 rounded-lg flex items-center px-6 ml-8">
          <span className="text-sm font-medium text-gray-900">Phase 2: Sales-Assisted</span>
        </div>
        <div className="h-12 bg-[#0d5f4e]/60 rounded-lg flex items-center px-6 ml-16">
          <span className="text-sm font-medium text-gray-900">Phase 3: Enterprise Direct</span>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Strategy Details</div>
        <div className="space-y-3">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...slide.bullets];
                  newBullets[index] = e.target.value;
                  updateSlide({ bullets: newBullets });
                }}
                className="flex-1 text-sm text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Financials Slide Visual Component
function FinancialsSlideVisual({ slide, updateSlide }: { slide: Slide; updateSlide: (updates: Partial<Slide>) => void }) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="Financial Projections"
        />
      </div>

      {/* ARR Growth Chart */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">ARR Projection</div>
        <RevenueChart />
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Key Metrics & Assumptions</div>
        <div className="space-y-3">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...slide.bullets];
                  newBullets[index] = e.target.value;
                  updateSlide({ bullets: newBullets });
                }}
                className="flex-1 text-sm text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// The Ask Slide Visual Component
function AskSlideVisual({ slide, updateSlide }: { slide: Slide; updateSlide: (updates: Partial<Slide>) => void }) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => updateSlide({ title: e.target.value })}
          className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
          placeholder="The Ask"
        />
      </div>

      {/* Use of Funds Pie Chart Visualization */}
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <div className="relative w-48 h-48 mx-auto">
            {/* Simple pie chart representation */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[#0d5f4e]" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)' }} />
              <div className="absolute inset-0 bg-[#0d5f4e]/60" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 20% 0%, 0% 40%, 50% 50%)' }} />
              <div className="absolute inset-0 bg-[#0d5f4e]/30" style={{ clipPath: 'polygon(50% 50%, 0% 40%, 0% 100%, 50% 100%)' }} />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#0d5f4e] rounded" />
            <span className="text-sm text-gray-700">60% Engineering</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#0d5f4e]/60 rounded" />
            <span className="text-sm text-gray-700">25% Go-To-Market</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#0d5f4e]/30 rounded" />
            <span className="text-sm text-gray-700">15% Operations</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700 mb-4">Details</div>
        <div className="space-y-3">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...slide.bullets];
                  newBullets[index] = e.target.value;
                  updateSlide({ bullets: newBullets });
                }}
                className="flex-1 text-sm text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// IMPROVED: AI Feedback Panel with Slide Scoring & Enhanced Actions
function AIFeedbackPanel({ 
  slide, 
  improveSlide 
}: { 
  slide: Slide; 
  improveSlide: (type: 'concise' | 'investor') => void;
}) {
  const slideScore = calculateSlideScore(slide);
  const feedback = getPrioritizedFeedback(slide);
  const [showAllActions, setShowAllActions] = useState(false);

  return (
    <div className="space-y-6">
      {/* SLIDE STRENGTH SCORE */}
      <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-900">Slide Strength</span>
          <div className="flex items-center gap-2">
            <div className={`text-2xl font-light ${
              slideScore >= 80 ? 'text-green-600' :
              slideScore >= 60 ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {slideScore}
            </div>
            <span className="text-sm text-gray-500">/100</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${
              slideScore >= 80 ? 'bg-green-600' :
              slideScore >= 60 ? 'bg-yellow-600' :
              'bg-red-600'
            }`}
            style={{ width: `${slideScore}%` }}
          />
        </div>
        
        <div className="mt-2 text-xs text-gray-600">
          {slideScore >= 80 ? '✨ Investor-ready' :
           slideScore >= 60 ? '⚡ Good foundation, needs polish' :
           '🔧 Needs improvement'}
        </div>
      </div>

      {/* AI AGENT ROLES */}
      <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
          <span className="text-sm font-medium text-gray-900">AI Agents</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">Get feedback from different perspectives</p>

        <div className="space-y-3">
          {/* Pitch Coach Agent */}
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Edit3 className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-gray-900">Pitch Coach</span>
            </div>
            <div className="space-y-1.5">
              <button
                onClick={() => improveSlide('concise')}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
              >
                Make More Concise
              </button>
              <button
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
              >
                Simplify Language
              </button>
            </div>
          </div>

          {/* Investor Reviewer Agent */}
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-xs font-medium text-gray-900">Investor Reviewer</span>
            </div>
            <div className="space-y-1.5">
              <button
                onClick={() => improveSlide('investor')}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
              >
                Investor-Focused Rewrite
              </button>
              <button
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
              >
                Add Proof Points
              </button>
            </div>
          </div>

          {/* Industry Expert Agent */}
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <Target className="w-3 h-3 text-purple-600" />
              </div>
              <span className="text-xs font-medium text-gray-900">Industry Expert</span>
            </div>
            <div className="space-y-1.5">
              <button
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
              >
                Industry Benchmark
              </button>
              <button
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
              >
                Add Market Context
              </button>
            </div>
          </div>
          
          {showAllActions && (
            <>
              {/* Metrics Agent */}
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                    <BarChart3 className="w-3 h-3 text-yellow-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-900">Metrics Agent</span>
                </div>
                <div className="space-y-1.5">
                  <button
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
                  >
                    Add Quantified Metric
                  </button>
                  <button
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
                  >
                    Validate KPIs
                  </button>
                </div>
              </div>

              {/* Design Agent */}
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-pink-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-900">Design Agent</span>
                </div>
                <div className="space-y-1.5">
                  <button
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
                  >
                    Suggest Visual Layout
                  </button>
                  <button
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all flex items-center gap-2"
                  >
                    Improve Readability
                  </button>
                </div>
              </div>
            </>
          )}
          
          <button
            onClick={() => setShowAllActions(!showAllActions)}
            className="w-full px-4 py-2 text-xs text-[#0d5f4e] hover:underline flex items-center justify-center gap-1"
          >
            {showAllActions ? 'Show Less Agents' : 'More Agents (Metrics, Design)'}
            <ChevronDown className={`w-3 h-3 transition-transform ${showAllActions ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* FEEDBACK & INSIGHTS */}
      <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
        <div className="text-sm font-medium text-gray-900 mb-4">Insights</div>
        <div className="space-y-3 text-sm">
          {feedback.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-2">
                <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  item.level === 'critical' ? 'text-red-600' :
                  item.level === 'warning' ? 'text-yellow-600' :
                  'text-green-600'
                }`} />
                <span className={`${
                  item.level === 'critical' ? 'text-red-700' :
                  item.level === 'warning' ? 'text-yellow-700' :
                  'text-gray-700'
                }`}>
                  {item.message}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* VISUAL RECOMMENDATION */}
      {getVisualRecommendation(slide.type) && (
        <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
          <div className="text-sm font-medium text-gray-900 mb-3">Visual Suggestion</div>
          <div className="text-sm text-gray-700 mb-3">
            {getVisualRecommendation(slide.type)}
          </div>
          <div className="text-xs text-gray-500">
            💡 Visual slides are 67% more memorable to investors
          </div>
        </div>
      )}

      {/* INVESTOR EXPECTATIONS */}
      <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
        <div className="text-sm font-medium text-gray-900 mb-3">Investor Expectations</div>
        <div className="space-y-2 text-xs text-gray-700">
          {getInvestorExpectations(slide.type).map((expectation, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-3 h-3 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
              <span>{expectation}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Calculate Slide Score (0-100)
function calculateSlideScore(slide: Slide): number {
  let score = 0;
  
  // Title quality (20 points)
  if (slide.title.length >= 10 && slide.title.length <= 60) {
    score += 20;
  } else if (slide.title.length >= 5) {
    score += 10;
  }
  
  // Bullet count (15 points)
  if (slide.bullets.length >= 3 && slide.bullets.length <= 5) {
    score += 15;
  } else if (slide.bullets.length > 0) {
    score += 8;
  }
  
  // Metrics presence (25 points) - except for title/team slides
  const hasMetrics = slide.bullets.some(b => /\d+/.test(b));
  if (slide.type !== 'title' && slide.type !== 'team') {
    if (hasMetrics) score += 25;
  } else {
    score += 25; // Auto-pass for title/team
  }
  
  // Bullet length (20 points) - aim for 10-18 words per bullet
  const bulletLengths = slide.bullets.map(b => b.split(' ').length);
  const avgBulletLength = bulletLengths.reduce((a, b) => a + b, 0) / bulletLengths.length;
  if (avgBulletLength >= 8 && avgBulletLength <= 18) {
    score += 20;
  } else if (avgBulletLength >= 5 && avgBulletLength <= 25) {
    score += 10;
  }
  
  // Speaker notes (10 points)
  if (slide.notes && slide.notes.length > 20) {
    score += 10;
  }
  
  // Specificity (10 points) - check for vague words
  const vagueWords = ['very', 'really', 'some', 'many', 'various', 'several'];
  const slideText = slide.bullets.join(' ').toLowerCase();
  const hasVague = vagueWords.some(word => slideText.includes(word));
  if (!hasVague) {
    score += 10;
  } else {
    score += 5;
  }
  
  return Math.min(100, Math.max(0, score));
}

function getPrioritizedFeedback(slide: Slide) {
  const feedback = [];
  
  // Critical (Red) - Missing metrics
  const hasMetrics = slide.bullets.some(b => /\d+/.test(b));
  if (!hasMetrics && slide.type !== 'team' && slide.type !== 'title') {
    feedback.push({
      level: 'critical',
      icon: AlertCircle,
      message: 'Missing metrics — investors expect data points'
    });
  }
  
  // Warning (Yellow) - Clarity issues
  if (slide.title.length < 10) {
    feedback.push({
      level: 'warning',
      icon: Info,
      message: 'Title could be more specific'
    });
  }
  
  if (slide.bullets.length < 3) {
    feedback.push({
      level: 'warning',
      icon: Info,
      message: 'Consider adding more supporting points'
    });
  }
  
  // Check for overly long bullets
  const longBullets = slide.bullets.filter(b => b.split(' ').length > 20);
  if (longBullets.length > 0) {
    feedback.push({
      level: 'warning',
      icon: Info,
      message: `${longBullets.length} bullet(s) exceed 20 words — aim for 15-18`
    });
  }
  
  // Success (Green) - Good practices
  if (hasMetrics && slide.type !== 'title') {
    feedback.push({
      level: 'success',
      icon: Check,
      message: 'Clear, metrics-driven content'
    });
  }
  
  if (slide.title.length >= 10 && slide.title.length <= 60) {
    feedback.push({
      level: 'success',
      icon: Check,
      message: 'Title length is optimal'
    });
  }
  
  if (slide.notes && slide.notes.length > 30) {
    feedback.push({
      level: 'success',
      icon: Check,
      message: 'Speaker notes will help your delivery'
    });
  }
  
  return feedback;
}

// Visual Recommendations per Slide Type
function getVisualRecommendation(slideType: string): string | null {
  const recommendations: Record<string, string> = {
    'problem': 'Show a before/after workflow diagram illustrating the pain point',
    'solution': 'Use a human-in-the-loop workflow showing AI + human collaboration',
    'product': 'Display a simple 3-5 step process flow with icons',
    'market': 'TAM/SAM/SOM funnel or market growth bar chart (CAGR)',
    'traction': 'Metric cards + line chart showing growth trajectory',
    'business_model': 'Pricing tiers comparison or revenue breakdown pie chart',
    'competition': '2x2 positioning matrix or feature comparison grid',
    'gtm': 'Sales funnel or customer acquisition pipeline diagram',
    'financials': 'ARR projection line chart with key milestones',
    'ask': 'Use of funds allocation (pie/bar chart) + timeline'
  };
  
  return recommendations[slideType] || null;
}

// Investor Expectations per Slide Type
function getInvestorExpectations(slideType: string): string[] {
  const expectations: Record<string, string[]> = {
    'title': [
      'Company name, one-line value prop, and round info',
      'Keep it simple and memorable',
      'Include date/version if presenting multiple times'
    ],
    'problem': [
      'Quantified pain points (time, cost, risk)',
      'Relatable examples investors understand',
      'Clear link between problem size and market opportunity'
    ],
    'solution': [
      'How your product solves the problem uniquely',
      'Key differentiator vs existing solutions',
      'Measurable outcomes (3x faster, 50% cost reduction)'
    ],
    'product': [
      'Simple workflow that non-technical investors grasp',
      'Show the "magic" in 3-5 steps',
      'Balance technical credibility with clarity'
    ],
    'market': [
      'TAM > $1B for VC-backable (Seed+)',
      'Credible sources (Gartner, IDC, industry reports)',
      'Show growth rate and adoption trends'
    ],
    'traction': [
      'Pre-Seed: 100+ users OR early revenue',
      'Seed: $10K+ MRR with consistent growth',
      'Series A: $100K+ MRR, clear PMF signals'
    ],
    'business_model': [
      'Clear unit economics (CAC, LTV, payback)',
      'Path to profitability visible',
      'Pricing aligned with value delivered'
    ],
    'competition': [
      'Position against categories, not just companies',
      'Show your defensibility (data, network effects, IP)',
      'Acknowledge real competitors honestly'
    ],
    'gtm': [
      'Specific channels with CAC estimates',
      'Repeatable, scalable motion',
      'Early traction validates the strategy'
    ],
    'team': [
      'Domain expertise relevant to this problem',
      'Track record of execution (exits, scaling companies)',
      'Complementary skills across founders'
    ],
    'financials': [
      'Conservative assumptions clearly stated',
      'Path to next milestone (ARR, profitability)',
      'Realistic timeline (18-24 months typical)'
    ],
    'ask': [
      'Specific amount and round structure',
      'Clear use of funds (60%+ eng/product early stage)',
      '18-24 month runway to meaningful milestone'
    ]
  };
  
  return expectations[slideType] || [
    'Keep content focused and investor-relevant',
    'Use data to support claims',
    'Make it visually scannable'
  ];
}

// Dashboard and Export Modal remain the same as original
function DashboardScreen({ onCreateNew, onEdit }: { onCreateNew: () => void; onEdit: () => void }) {
  const decks = [
    { id: '1', name: 'Acme AI Seed Deck', template: 'Seed', status: 'Draft', date: '2 hours ago' },
    { id: '2', name: 'Q4 Investor Update', template: 'Update', status: 'Final', date: '1 day ago' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl text-gray-900 mb-2">My Pitch Decks</h1>
            <p className="text-gray-600">Manage and export your decks</p>
          </div>
          <button
            onClick={onCreateNew}
            className="px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all font-medium flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Deck
          </button>
        </div>

        <div className="grid gap-6">
          {decks.map((deck) => (
            <div key={deck.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{deck.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span>{deck.template}</span>
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      deck.status === 'Final' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {deck.status}
                    </span>
                    <span>•</span>
                    <span>{deck.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={onEdit}
                  className="px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all text-sm font-medium flex items-center gap-2"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all text-sm font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all text-sm font-medium flex items-center gap-2">
                  <Copy className="w-4 h-4" />
                  Duplicate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Overview Screen - See all slides at once
function OverviewScreen({
  slides,
  deckData,
  onEdit,
  onSlideClick
}: {
  slides: Slide[];
  deckData: DeckData;
  onEdit: () => void;
  onSlideClick: (index: number) => void;
}) {
  const avgScore = slides.length > 0 
    ? Math.round(slides.reduce((acc, s) => acc + calculateSlideScore(s), 0) / slides.length)
    : 0;

  return (
    <div className="min-h-screen py-12 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl text-gray-900 mb-2">Deck Overview</h1>
              <p className="text-gray-600">
                {deckData.companyName || 'Untitled Deck'} • {slides.length} slides
              </p>
            </div>
            <button
              onClick={onEdit}
              className="px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all font-medium flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              Back to Editor
            </button>
          </div>
          
          {/* Deck Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Total Slides</div>
              <div className="text-3xl font-light text-gray-900">{slides.length}</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Avg Score</div>
              <div className={`text-3xl font-light ${
                avgScore >= 80 ? 'text-green-600' :
                avgScore >= 60 ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {avgScore}/100
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Stage</div>
              <div className="text-3xl font-light text-gray-900 capitalize">
                {deckData.fundingStage || 'N/A'}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Industry</div>
              <div className="text-xl font-light text-gray-900 capitalize">
                {deckData.industry?.replace('-', ' ') || 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide, index) => {
            const score = calculateSlideScore(slide);
            return (
              <button
                key={slide.id}
                onClick={() => onSlideClick(index)}
                className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[#0d5f4e] transition-all overflow-hidden text-left"
              >
                {/* Slide Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-6 relative">
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-medium text-gray-700">
                    {index + 1}
                  </div>
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${
                    score >= 80 ? 'bg-green-100 text-green-700' :
                    score >= 60 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {score}
                  </div>
                  
                  <div className="mt-8">
                    <div className="text-xs text-gray-500 mb-2 capitalize">{slide.type.replace('_', ' ')}</div>
                    <div className="text-lg font-medium text-gray-900 mb-4 line-clamp-2">
                      {slide.title}
                    </div>
                    <div className="space-y-1">
                      {slide.bullets.slice(0, 3).map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                          <div className="line-clamp-1">{bullet}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Slide Info */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {slide.bullets.length} bullets • {slide.notes ? 'Has notes' : 'No notes'}
                    </span>
                    <span className="text-[#0d5f4e] opacity-0 group-hover:opacity-100 transition-opacity">
                      Edit →
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Presentation Mode - Full-screen slide presenter
function PresentationScreen({
  slides,
  deckData,
  onExit
}: {
  slides: Slide[];
  deckData: DeckData;
  onExit: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  
  const currentSlide = slides[currentIndex];

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrevious();
      } else if (e.key === 'Escape') {
        onExit();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(!showNotes);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, showNotes]);

  if (!currentSlide) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 z-50">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-6 py-4 flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Exit
          </button>
          <div className="text-sm">
            {deckData.companyName || 'Pitch Deck'} • Slide {currentIndex + 1} of {slides.length}
          </div>
        </div>
        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`px-4 py-2 rounded-lg transition-all ${
            showNotes ? 'bg-[#0d5f4e]' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {showNotes ? 'Hide Notes' : 'Show Notes'}
        </button>
      </div>

      {/* Main Content */}
      <div className="h-full pt-20 pb-20 px-12 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          {/* Slide Content */}
          <div className="bg-white rounded-2xl p-16 shadow-2xl">
            <div className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
              {currentSlide.type.replace('_', ' ')}
            </div>
            <h2 className="text-5xl text-gray-900 mb-12">
              {currentSlide.title}
            </h2>
            <div className="space-y-6">
              {currentSlide.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
                  <div className="text-2xl text-gray-700 leading-relaxed">
                    {bullet}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker Notes */}
          {showNotes && currentSlide.notes && (
            <div className="mt-6 bg-black/50 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-xs text-white/60 mb-2">SPEAKER NOTES</div>
              <div className="text-sm leading-relaxed">{currentSlide.notes}</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
        <button
          onClick={goPrevious}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 text-white"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>
        
        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all ${
                idx === currentIndex
                  ? 'w-8 h-2 bg-white rounded-full'
                  : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentIndex === slides.length - 1}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 text-white"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Keyboard Shortcuts Helper */}
      <div className="absolute bottom-20 left-6 text-white/40 text-xs">
        <div>← → Navigate • N Notes • ESC Exit</div>
      </div>
    </div>
  );
}

function ExportModal({ 
  onClose, 
  slides, 
  deckData 
}: { 
  onClose: () => void; 
  slides: Slide[];
  deckData: DeckData;
}) {
  const [format, setFormat] = useState<'pdf' | 'pptx' | 'json'>('pdf');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '4:3'>('16:9');
  const [includeSpeakerNotes, setIncludeSpeakerNotes] = useState(true);
  const [includeSlideNumbers, setIncludeSlideNumbers] = useState(true);
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (format === 'json') {
      // Export as JSON for backup/sharing
      const exportData = {
        deckData,
        slides,
        metadata: {
          exportedAt: new Date().toISOString(),
          slideCount: slides.length,
          deckScore: slides.reduce((acc, s) => acc + calculateSlideScore(s), 0) / slides.length
        }
      };
      
      const dataStr = JSON.stringify(exportData, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `${deckData.companyName || 'pitch-deck'}-${Date.now()}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    } else {
      // For PDF/PPTX, show message (would integrate with export service)
      alert(`Export as ${format.toUpperCase()} will be available soon. This would integrate with a PDF/PPTX generation service.`);
    }
    
    setExporting(false);
    onClose();
  };

  const avgSlideScore = slides.length > 0 
    ? Math.round(slides.reduce((acc, s) => acc + calculateSlideScore(s), 0) / slides.length)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl text-gray-900 mb-1">Export Deck</h3>
            <p className="text-sm text-gray-600">{slides.length} slides • Avg score: {avgSlideScore}/100</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 mb-8">
          {/* Format Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Export Format</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setFormat('pdf')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  format === 'pdf'
                    ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                <div className="text-sm font-medium text-gray-900">PDF</div>
                <div className="text-xs text-gray-500">Portable</div>
              </button>
              <button
                onClick={() => setFormat('pptx')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  format === 'pptx'
                    ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                <div className="text-sm font-medium text-gray-900">PowerPoint</div>
                <div className="text-xs text-gray-500">Editable</div>
              </button>
              <button
                onClick={() => setFormat('json')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  format === 'json'
                    ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Download className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                <div className="text-sm font-medium text-gray-900">JSON</div>
                <div className="text-xs text-gray-500">Backup</div>
              </button>
            </div>
          </div>

          {format !== 'json' && (
            <>
              {/* Aspect Ratio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setAspectRatio('16:9')}
                    className={`px-4 py-3 rounded-lg border-2 transition-all text-sm ${
                      aspectRatio === '16:9'
                        ? 'border-[#0d5f4e] bg-[#0d5f4e]/5 text-gray-900'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    16:9 (Standard)
                  </button>
                  <button
                    onClick={() => setAspectRatio('4:3')}
                    className={`px-4 py-3 rounded-lg border-2 transition-all text-sm ${
                      aspectRatio === '4:3'
                        ? 'border-[#0d5f4e] bg-[#0d5f4e]/5 text-gray-900'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    4:3 (Classic)
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="speaker-notes"
                    checked={includeSpeakerNotes}
                    onChange={(e) => setIncludeSpeakerNotes(e.target.checked)}
                    className="w-4 h-4 text-[#0d5f4e] rounded focus:ring-[#0d5f4e]"
                  />
                  <label htmlFor="speaker-notes" className="text-sm text-gray-700">
                    Include speaker notes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="slide-numbers"
                    checked={includeSlideNumbers}
                    onChange={(e) => setIncludeSlideNumbers(e.target.checked)}
                    className="w-4 h-4 text-[#0d5f4e] rounded focus:ring-[#0d5f4e]"
                  />
                  <label htmlFor="slide-numbers" className="text-sm text-gray-700">
                    Include slide numbers
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Deck Summary */}
          <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-lg p-4 border border-[#0d5f4e]/20">
            <div className="text-sm font-medium text-gray-900 mb-3">Deck Summary</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Company</div>
                <div className="font-medium text-gray-900">{deckData.companyName || 'Untitled'}</div>
              </div>
              <div>
                <div className="text-gray-500">Stage</div>
                <div className="font-medium text-gray-900 capitalize">{deckData.fundingStage || 'N/A'}</div>
              </div>
              <div>
                <div className="text-gray-500">Slides</div>
                <div className="font-medium text-gray-900">{slides.length}</div>
              </div>
              <div>
                <div className="text-gray-500">Quality Score</div>
                <div className={`font-medium ${
                  avgSlideScore >= 80 ? 'text-green-600' :
                  avgSlideScore >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {avgSlideScore}/100
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={exporting}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleExport}
            disabled={exporting}
            className="flex-1 px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {exporting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Export {format.toUpperCase()}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
