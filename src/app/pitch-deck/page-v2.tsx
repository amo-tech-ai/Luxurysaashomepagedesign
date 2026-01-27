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
  List
} from 'lucide-react';
import { getVisualForSlideType } from '@/components/pitch-deck/visuals';
import { AIGenerateIcon } from '@/components/pitch-deck/AIGenerateIcon';

type WizardStep = 'startup-info' | 'market-traction' | 'deck-style' | 'review';
type Screen = 'landing' | 'wizard' | 'generating' | 'editor' | 'dashboard';

interface DeckData {
  companyName: string;
  website: string;
  oneLiner: string;
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
}

interface Slide {
  id: string;
  type: string;
  title: string;
  bullets: string[];
  notes: string;
}

export default function PitchDeckV2Page() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [wizardStep, setWizardStep] = useState<WizardStep>('startup-info');
  const [deckData, setDeckData] = useState<DeckData>({
    companyName: '',
    website: '',
    oneLiner: '',
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
    tone: 'confident'
  });
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [deckScore, setDeckScore] = useState(0);

  // Calculate deck score
  useEffect(() => {
    if (slides.length > 0) {
      const score = calculateDeckScore(slides, deckData);
      setDeckScore(score);
    }
  }, [slides, deckData]);

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
      const generatedSlides: Slide[] = [
        {
          id: '1',
          type: 'problem',
          title: 'The Problem',
          bullets: [
            `Support teams waste ${deckData.users ? '60%' : 'significant'} time on repetitive tickets`,
            'Agents burn hours on manual replies without context',
            'Customers expect instant, accurate answers 24/7',
            'Response quality varies across team members',
            'Knowledge gets trapped in individual inboxes'
          ],
          notes: 'Emphasize quantified pain points that resonate with investors'
        },
        {
          id: '2',
          type: 'solution',
          title: 'Our Solution',
          bullets: [
            'AI copilots that understand full customer context',
            'Automated responses with mandatory human approval',
            'Integrated into existing support platforms',
            '95% accuracy with continuous learning',
            'Reduces response time from hours to minutes'
          ],
          notes: 'Focus on unique value proposition and measurable outcomes'
        },
        {
          id: '3',
          type: 'market',
          title: 'Market Opportunity',
          bullets: [
            '$12B customer support software market',
            'Growing 18% annually with AI adoption',
            'Early majority adoption phase for AI tools',
            '450K support teams in target segment',
            'Average contract value: $15K annually'
          ],
          notes: 'Show market size, growth trajectory, and accessibility'
        },
        {
          id: '4',
          type: 'traction',
          title: 'Traction',
          bullets: [
            `${deckData.users || '2,300'} active users across 50 companies`,
            `${deckData.revenue || '$12k'} MRR with $180 ACV`,
            `${deckData.growth || '40'}% month-over-month growth`,
            '92% user retention after 3 months',
            'NPS score of 68 (industry avg: 31)'
          ],
          notes: 'Concrete metrics build credibility and momentum'
        },
        {
          id: '5',
          type: 'team',
          title: 'The Team',
          bullets: [
            'Former product leaders from Zendesk and Intercom',
            '15+ years combined in customer support tech',
            'AI research background from Stanford NLP',
            'Sold previous startup to Salesforce',
            'Advisors from OpenAI and leading VCs'
          ],
          notes: 'Highlight relevant expertise and track record'
        }
      ];
      
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
            <button 
              onClick={handleGoHome}
              className="text-xl text-gray-900 hover:text-[#0d5f4e] transition-colors tracking-tight"
            >
              StartupAI
            </button>
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
                  
                  <button
                    onClick={() => setCurrentScreen('dashboard')}
                    className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    My Decks
                  </button>
                  <button
                    onClick={() => setExportModalOpen(true)}
                    className="px-6 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all text-sm font-medium flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Export PDF
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
      </div>

      {/* Export Modal */}
      {exportModalOpen && (
        <ExportModal onClose={() => setExportModalOpen(false)} slide={slides[0]} />
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
  const steps: WizardStep[] = ['startup-info', 'market-traction', 'deck-style', 'review'];
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
                <StepIndicator step={3} current={currentStepIndex + 1} label="Deck Style" />
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
              {step === 'deck-style' && (
                <DeckStyleStep data={data} setData={setData} />
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
  const charLimit = 120;
  const charCount = data.oneLiner.length;
  const isApproachingLimit = charCount > 100;
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
      // Smart enhancement based on one-liner
      const oneLiner = data.oneLiner.toLowerCase();
      let enhanced = data.subIndustry;

      if (data.industry === 'enterprise-saas') {
        if (oneLiner.includes('sales') || oneLiner.includes('crm')) {
          enhanced = 'Sales & CRM';
        } else if (oneLiner.includes('marketing')) {
          enhanced = 'Marketing Automation';
        } else if (oneLiner.includes('analytics') || oneLiner.includes('data')) {
          enhanced = 'Analytics & BI';
        } else if (oneLiner.includes('security')) {
          enhanced = 'Security';
        } else if (oneLiner.includes('hr') || oneLiner.includes('recruit')) {
          enhanced = 'HR & Recruiting';
        } else {
          enhanced = 'Collaboration';
        }
      } else if (data.industry === 'healthcare') {
        if (oneLiner.includes('telehealth') || oneLiner.includes('telemedicine')) {
          enhanced = 'Telemedicine';
        } else if (oneLiner.includes('mental')) {
          enhanced = 'Mental Health';
        } else if (oneLiner.includes('device')) {
          enhanced = 'Medical Devices';
        } else {
          enhanced = 'Digital Health';
        }
      } else if (data.industry === 'financial-services') {
        if (oneLiner.includes('payment') || oneLiner.includes('pay')) {
          enhanced = 'Payments';
        } else if (oneLiner.includes('lend') || oneLiner.includes('loan')) {
          enhanced = 'Lending';
        } else if (oneLiner.includes('crypto') || oneLiner.includes('blockchain')) {
          enhanced = 'Crypto & Web3';
        } else if (oneLiner.includes('invest')) {
          enhanced = 'Investment';
        } else {
          enhanced = 'Banking';
        }
      }

      setData({ ...data, subIndustry: enhanced });
      setIsEnhancing(false);
    }, 800);
  };

  // Auto-generate short description
  const generateDescription = () => {
    if (!data.industry || !data.oneLiner) return '';
    
    const industryLabel = data.industry === 'enterprise-saas' ? 'Enterprise SaaS' : 
                         data.industry === 'healthcare' ? 'Health Care' :
                         data.industry === 'financial-services' ? 'Financial Services' :
                         data.industry === 'retail-ecommerce' ? 'Retail & eCommerce' :
                         data.industry === 'sales-marketing' ? 'Sales & Marketing' :
                         data.industry === 'communication' ? 'Communication' :
                         data.industry === 'mobile' ? 'Mobile' :
                         data.industry === 'education' ? 'Education' : 'Tech';
    
    const vertical = data.subIndustry ? ` (${data.subIndustry})` : '';
    return `${industryLabel}${vertical} company: ${data.oneLiner}`;
  };

  const autoDescription = generateDescription();

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

        {/* IMPROVED: Character counter + guidance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            One-line Pitch *
          </label>
          <div className="text-xs text-gray-500 mb-2">
            Who it's for + what problem you solve + why it's better
          </div>
          <textarea
            value={data.oneLiner}
            onChange={(e) => setData({ ...data, oneLiner: e.target.value.slice(0, charLimit) })}
            placeholder="AI copilots that help B2B support teams resolve tickets 3x faster with built-in approval workflows"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Keep it concise and specific</span>
            <span className={`text-xs font-medium ${
              isApproachingLimit ? 'text-yellow-600' : 'text-gray-400'
            }`}>
              {charCount}/{charLimit}
            </span>
          </div>
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
              {data.oneLiner && (
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

        {/* Auto-generated description (preview) */}
        {autoDescription && (
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Investor Summary</div>
            <div className="text-sm text-gray-900">{autoDescription}</div>
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

// IMPROVED Step 3: Deck Style
function DeckStyleStep({ data, setData }: { data: DeckData; setData: (data: DeckData) => void }) {
  const [hoveredDeck, setHoveredDeck] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const deckTypes = [
    { 
      id: 'pre-seed', 
      name: 'Pre-Seed', 
      slides: '8-10 slides', 
      desc: 'Early-stage focus on problem and vision',
      slideList: ['Problem', 'Solution', 'Why Now', 'Market', 'Vision', 'Team', 'Ask']
    },
    { 
      id: 'seed', 
      name: 'Seed', 
      slides: '10-12 slides', 
      desc: 'Balanced story with early traction',
      slideList: ['Problem', 'Solution', 'Market', 'Product', 'Traction', 'Business Model', 'Competition', 'Team', 'Financials', 'Ask']
    },
    { 
      id: 'demo-day', 
      name: 'Demo Day', 
      slides: '6-8 slides', 
      desc: 'Concise, high-impact presentation',
      slideList: ['Problem', 'Solution', 'Traction', 'Market', 'Team', 'Ask']
    }
  ];

  const tones = [
    { id: 'clear', name: 'Clear', desc: 'Simple, straightforward language' },
    { id: 'confident', name: 'Confident', desc: 'Assertive, ambitious tone' },
    { id: 'conservative', name: 'Conservative', desc: 'Professional, measured approach' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">Deck Style</h2>
        <p className="text-gray-600">Choose your template and tone</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Deck Type
        </label>
        <div className="grid gap-4">
          {deckTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setData({ ...data, deckType: type.id })}
              onMouseEnter={() => setHoveredDeck(type.id)}
              onMouseLeave={() => setHoveredDeck(null)}
              className={`p-6 text-left border-2 rounded-xl transition-all ${
                data.deckType === type.id
                  ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium text-gray-900">{type.name}</div>
                <div className="text-xs text-gray-500">{type.slides}</div>
              </div>
              <div className="text-sm text-gray-600 mb-3">{type.desc}</div>
              
              {/* IMPROVED: Hover preview of slide list */}
              {hoveredDeck === type.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="text-xs font-medium text-gray-700 mb-2">Typical slides:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {type.slideList.map((slide, idx) => (
                      <div key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 text-[#0d5f4e]" />
                        {slide}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tone
        </label>
        {/* IMPROVED: Micro-copy to reduce anxiety */}
        <p className="text-xs text-gray-500 mb-3">
          Tone affects wording, not facts.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {tones.map((tone) => (
            <button
              key={tone.id}
              onClick={() => setData({ ...data, tone: tone.id })}
              className={`p-4 text-center border-2 rounded-xl transition-all ${
                data.tone === tone.id
                  ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium text-gray-900 mb-1">{tone.name}</div>
              <div className="text-xs text-gray-600">{tone.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    if (data.problem && data.solution && data.oneLiner) return 'Strong';
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

  const getMarketNarrative = () => {
    if (data.marketSize && data.competitors) return 'Strong';
    if (data.marketSize) return 'Adequate';
    return 'Incomplete';
  };

  // AI Confidence calculation
  const getAIConfidence = () => {
    let score = 0;
    if (data.problem && data.solution) score += 25;
    if (data.users || data.revenue) score += 25;
    if (data.marketSize) score += 20;
    if (data.oneLiner) score += 15;
    if (data.differentiator) score += 15;
    
    if (score >= 80) return 'High';
    if (score >= 60) return 'Medium';
    return 'Building';
  };

  const aiConfidence = getAIConfidence();

  // Risk & Gaps detection
  const getRisksAndGaps = () => {
    const gaps = [];
    
    const users = parseInt(data.users) || 0;
    const revenue = parseFloat(data.revenue.replace(/[^0-9.]/g, '')) || 0;
    
    if (users < 100 && revenue < 1) {
      gaps.push('Traction metrics are early');
    }
    if (!data.marketSize) {
      gaps.push('Market size will be directional, not exact');
    }
    if (!data.competitors) {
      gaps.push('Competitive landscape may be limited');
    }
    if (!data.differentiator) {
      gaps.push('Unique value proposition could be stronger');
    }
    
    return gaps.slice(0, 3); // Max 3 gaps
  };

  const risks = getRisksAndGaps();
  const hasTractionWarning = !data.users && !data.revenue;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">Review & Generate</h2>
        <p className="text-gray-600">Check your deck details before generating</p>
      </div>

      {/* Summary Card */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">Company</div>
          <div className="text-lg font-medium text-gray-900">{data.companyName || 'Not provided'}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Deck Type</div>
          <div className="text-lg text-gray-900 capitalize">{data.deckType.replace('-', ' ')}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Estimated Slides</div>
          <div className="text-lg text-gray-900">10-12 slides</div>
          <div className="text-xs text-gray-500 mt-1">
            Slides will be ordered to match {stage} investor expectations
          </div>
        </div>
      </div>

      {/* 1️⃣ AI Deck Analysis */}
      <div className="border border-[#0d5f4e]/20 bg-[#0d5f4e]/5 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
          <h3 className="text-lg font-medium text-gray-900">AI Deck Analysis</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">• Story clarity:</span>
            <span className="font-medium text-gray-900">{getStoryClarity()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">• Problem–solution fit:</span>
            <span className="font-medium text-gray-900">{getProblemSolutionFit()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">• Traction strength:</span>
            <span className="font-medium text-gray-900">{getTractionStrength()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">• Market narrative:</span>
            <span className="font-medium text-gray-900">{getMarketNarrative()}</span>
          </div>
        </div>
      </div>

      {/* 2️⃣ What Investors Will See */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white">
        <h3 className="text-sm font-medium text-gray-700 mb-3">What investors will see:</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <span>A clear problem in the first 2 slides</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Evidence of {data.users || data.revenue ? 'early' : 'initial'} traction</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <span>A focused {stage}-stage narrative</span>
          </div>
        </div>
      </div>

      {/* 3️⃣ Risk & Gaps (Honest AI) */}
      {risks.length > 0 && (
        <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">Potential gaps</h3>
              <p className="text-xs text-gray-600">Areas that may need improvement</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            {risks.map((risk, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span>{risk}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStep('market-traction')}
            className="mt-4 text-xs text-[#0d5f4e] underline hover:no-underline"
          >
            Improve before generating
          </button>
        </div>
      )}

      {/* 6️⃣ AI Confidence Score */}
      <div className="border border-[#0d5f4e]/30 rounded-xl p-6 bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-5 h-5 text-[#0d5f4e]" />
          <h3 className="text-sm font-medium text-gray-900">AI Confidence Level: {aiConfidence}</h3>
        </div>
        <p className="text-xs text-gray-600">
          Based on comparable {stage}-stage decks
        </p>
      </div>

      {/* 5️⃣ Upgraded Readiness Checklist */}
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-700 mb-2">Readiness Checklist</div>
        {readiness.map((item, index) => (
          <button
            key={index}
            onClick={() => setStep(item.targetStep)}
            className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left group"
          >
            {item.status === 'complete' ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : item.status === 'warning' ? (
              <AlertCircle className="w-5 h-5 text-yellow-600" />
            ) : (
              <X className="w-5 h-5 text-gray-400" />
            )}
            <span className="text-sm text-gray-700 flex-1">{item.label}</span>
            <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
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
          {/* IMPROVED: Rewrite button */}
          <button
            onClick={() => setShowRewrite(!showRewrite)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#0d5f4e] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Rewrite my pitch
          </button>
          
          {showRewrite && (
            <div className="text-xs text-gray-600 p-3 bg-white rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
              Based on your industry, try: "AI SDRs that book qualified meetings for B2B sales teams using proprietary intent data"
            </div>
          )}

          <div className="pt-4 border-t border-[#0d5f4e]/20">
            {/* IMPROVED: Single strong example */}
            <div className="text-xs text-gray-600 mb-2">
              <strong>Example ({data.industry || 'SaaS'}):</strong>
            </div>
            <div className="text-xs text-gray-700 italic">
              {data.industry === 'financial-services' 
                ? '"Stripe for embedded lending — API-first credit platform for B2B marketplaces"'
                : '"AI SDRs that book qualified meetings for B2B sales teams"'}
            </div>
          </div>
        </div>
      )}

      {step === 'market-traction' && (
        <div className="space-y-4 text-sm text-gray-700">
          <p>📊 Investors look for clear pain + proof</p>
          <div className="pt-4 border-t border-[#0d5f4e]/20">
            {/* IMPROVED: Single focused insight */}
            <div className="text-xs text-gray-600 mb-2">Confidence Level</div>
            <p className="text-sm">{getTractionInsight()}</p>
          </div>
        </div>
      )}

      {step === 'deck-style' && (
        <div className="space-y-4 text-sm text-gray-700">
          <p>✨ Seed deck fits your traction level</p>
          {/* IMPROVED: Expandable explanation */}
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-xs text-[#0d5f4e] underline hover:no-underline"
          >
            Why?
          </button>
          
          {showExplanation && (
            <div className="text-xs text-gray-600 p-3 bg-white rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
              Based on your {data.revenue && `$${data.revenue} MRR and `}{data.users} users, 
              you have sufficient traction for a full Seed narrative with business model and financials.
            </div>
          )}
        </div>
      )}

      {step === 'review' && (
        <div className="space-y-4 text-sm text-gray-700">
          <div className="font-medium text-gray-900 mb-2">I will:</div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-[#0d5f4e]">•</span>
              <span>Structure a 10–12 slide {data.deckType === 'seed' ? 'Seed' : data.deckType === 'series-a' ? 'Series A' : 'Pre-Seed'} deck</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0d5f4e]">•</span>
              <span>Emphasize traction and clarity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0d5f4e]">•</span>
              <span>Keep slides concise and investor-focused</span>
            </div>
          </div>
          <div className="pt-4 border-t border-[#0d5f4e]/20">
            <p className="text-xs text-gray-600 italic">
              Your deck will follow the proven order: Problem → Solution → Market → Traction → Team → Ask
            </p>
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
    'Analyzing startup data',
    'Structuring slide narrative',
    'Writing investor-focused content',
    'Finalizing deck structure'
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
    }, 750);

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

  // Calculate word count
  const totalWords = slide.bullets.reduce((acc, b) => acc + b.split(' ').length, 0);
  const maxWords = 90; // ~18 per bullet for 5 bullets

  // Get visual component for slide type
  const VisualComponent = getVisualForSlideType(slide.type);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT PANEL - Slide List with Status Badges */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="text-sm font-medium text-gray-700 mb-4">Slides</div>
              <div className="space-y-2">
                {slides.map((s, index) => {
                  const quality = getSlideQuality(s);
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        currentSlide === index
                          ? 'bg-[#0d5f4e] text-white'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-[#0d5f4e]/20'
                      }`}
                    >
                      <GripVertical className="w-4 h-4 opacity-50" />
                      <div className="flex-1">
                        <div className="text-xs opacity-70 capitalize">{s.type}</div>
                        <div className="text-sm font-medium">{s.title}</div>
                      </div>
                      {/* IMPROVED: Status badges */}
                      {quality === 'strong' && currentSlide !== index && (
                        <Check className="w-4 h-4 text-green-600" />
                      )}
                      {quality === 'needs-metrics' && currentSlide !== index && (
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      )}
                    </button>
                  );
                })}
              </div>
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

                  {/* IMPROVED: Market slide with visual chart */}
                  {slide.type === 'market' ? (
                    <MarketSlideVisual slide={slide} updateSlide={updateSlide} />
                  ) : slide.type === 'traction' ? (
                    <TractionSlideStats slide={slide} updateSlide={updateSlide} deckData={deckData} />
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

// IMPROVED: AI Feedback Panel with Priority Ordering
function AIFeedbackPanel({ 
  slide, 
  improveSlide 
}: { 
  slide: Slide; 
  improveSlide: (type: 'concise' | 'investor') => void;
}) {
  const feedback = getPrioritizedFeedback(slide);

  return (
    <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
        <span className="text-sm font-medium text-gray-900">AI Suggestions</span>
      </div>

      <div className="space-y-3 mb-6">
        <button
          onClick={() => improveSlide('concise')}
          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#0d5f4e] transition-all"
        >
          Make more concise
        </button>
        <button
          onClick={() => improveSlide('investor')}
          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#0d5f4e] transition-all"
        >
          Make investor-focused
        </button>
      </div>

      {/* IMPROVED: Priority-ordered feedback */}
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
  );
}

function getPrioritizedFeedback(slide: Slide) {
  const feedback = [];
  
  // Critical (Red) - Missing metrics
  const hasMetrics = slide.bullets.some(b => /\d+/.test(b));
  if (!hasMetrics && slide.type !== 'team') {
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
  
  // Success (Green) - Good practices
  if (hasMetrics) {
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
  
  return feedback;
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

function ExportModal({ onClose, slide }: { onClose: () => void; slide: Slide }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl text-gray-900">Export Deck</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]">
              <option>PDF</option>
              <option>PowerPoint</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]">
              <option>16:9 (Standard)</option>
              <option>4:3 (Classic)</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="speaker-notes"
              className="w-4 h-4 text-[#0d5f4e] rounded focus:ring-[#0d5f4e]"
            />
            <label htmlFor="speaker-notes" className="text-sm text-gray-700">
              Include speaker notes
            </label>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Preview: First Slide</div>
            <div className="bg-white rounded p-4 border border-gray-200">
              <div className="text-sm font-medium text-gray-900">{slide?.title || 'Slide Preview'}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
          >
            Cancel
          </button>
          <button className="flex-1 px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-all font-medium flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
}
