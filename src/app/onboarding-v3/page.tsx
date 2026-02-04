import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Building2, 
  Globe, 
  Linkedin, 
  Link2, 
  Plus,
  User,
  Info,
  Loader2,
  Save,
  Target,
  Award,
  TrendingUp,
  AlertCircle,
  Presentation,
  Shield,
  Map,
  Zap,
  Layout
} from 'lucide-react';

interface OnboardingV3PageProps {
  onNavigate?: (route: string) => void;
}

type OnboardingStep = 1 | 2 | 3 | 4 | 5;

export default function OnboardingV3Page({ onNavigate }: OnboardingV3PageProps) {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isExtracting, setIsExtracting] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    companyName: 'FashionOS',
    description: 'FashionOS is an AI-powered operating system for fashion brands and events that turns complex planning, content creation, and collaboration into fast, structured workflows—helping designers, organizers, and teams go from idea to execution features event management, planning marketing, sponsor venues guest management—from services booking photography videos using AI wizard built middleware w/ suggestions shot list.',
    targetMarket: 'Fashion designers, retailers, models pr/ media event organizers',
    websiteUrl: 'https://www.fashionos.co/',
    linkedinUrl: 'https://linkedin.com/company/...',
    additionalUrls: [] as string[],
    selectedIndustries: ['E-commerce & Marketplaces'],
    businessModel: 'B2B',
    stage: 'Pre-seed',
    founders: [
      {
        name: 'sanjiv khullar',
        role: 'Co-founder',
        linkedinAdded: true,
      }
    ],
  });

  const [urlExtracted, setUrlExtracted] = useState(true);
  const [newUrl, setNewUrl] = useState('');

  const industries = [
    { emoji: '💻', label: 'SaaS & Software' },
    { emoji: '🤖', label: 'Artificial Intelligence & Data' },
    { emoji: '💳', label: 'FinTech & Payments' },
    { emoji: '🛒', label: 'E-commerce & Marketplaces' },
    { emoji: '🏥', label: 'Healthcare & Life Sciences' },
    { emoji: '📚', label: 'Education & Learning' },
    { emoji: '🎬', label: 'Media, Content & Creator Economy' },
    { emoji: '🏢', label: 'Enterprise & B2B Solutions' },
    { emoji: '📱', label: 'Consumer Apps & Platforms' },
    { emoji: '🚚', label: 'Logistics, Supply Chain & Mobility' },
    { emoji: '🏠', label: 'Real Estate' },
    { emoji: '🎮', label: 'Gaming & Entertainment' },
    { emoji: '✨', label: 'Other' },
  ];

  const businessModels = ['B2B', 'B2C', 'B2B2C', 'Marketplace', 'Platform', 'Services'];
  const stages = ['Idea', 'Pre-seed', 'Seed', 'Series A', 'Series B+'];

  const questions = [
    {
      category: 'Business Model',
      question: "What's your current monthly revenue or traction?",
      options: ['Pre-revenue', 'Under $1K MRR', '$1K - $10K MRR', '$10K+ MRR'],
    },
    {
      category: 'Market',
      question: 'Who is your primary customer?',
      options: ['Individual consumers (B2C)', 'Small businesses (SMB)', 'Mid-market companies', 'Enterprise organizations'],
    },
    {
      category: 'Traction',
      question: "What's your strongest proof point today?",
      options: ['Product is live with users', 'Signed paying customers', 'Letters of intent / pilots', 'Product still in development'],
    },
    {
      category: 'Team',
      question: 'How many full-time team members do you have?',
      options: ['Just founders (1-2 people)', 'Small team (3-5 people)', 'Growing team (6-10 people)', 'Larger team (10+ people)'],
    },
    {
      category: 'Funding',
      question: 'Have you raised external funding?',
      options: ['Bootstrapped / no external funding', 'Pre-seed or angel round', 'Seed round', 'Series A or beyond'],
    },
  ];

  // Step 2 AI Analysis animation
  useEffect(() => {
    if (currentStep === 2 && analysisProgress < 100) {
      const timer = setTimeout(() => {
        setAnalysisProgress(prev => Math.min(prev + 2, 100));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentStep, analysisProgress]);

  // Auto-progress from Step 2 to Step 3 when analysis is complete
  useEffect(() => {
    if (currentStep === 2 && analysisProgress === 100) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(3);
          setIsTransitioning(false);
        }, 300);
      }, 1500); // Wait 1.5 seconds after completion
      return () => clearTimeout(timer);
    }
  }, [currentStep, analysisProgress]);

  // Step 4 Score animation
  useEffect(() => {
    if (currentStep === 4 && !showScore) {
      setTimeout(() => setShowScore(true), 500);
    }
  }, [currentStep, showScore]);

  useEffect(() => {
    if (showScore && score < 55) {
      const timer = setTimeout(() => {
        setScore(prev => Math.min(prev + 1, 55));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [showScore, score]);

  const handleNext = () => {
    if (currentStep === 1) {
      setIsExtracting(true);
      setTimeout(() => {
        setIsExtracting(false);
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(2);
          setIsTransitioning(false);
          setAnalysisProgress(0);
        }, 300);
      }, 1500);
    } else if (currentStep === 2) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(3);
        setIsTransitioning(false);
      }, 300);
    } else if (currentStep === 3) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(4);
          setIsTransitioning(false);
        }, 300);
      }
    } else if (currentStep === 4) {
      // Transition to dashboard
      setIsTransitioning(true);
      setTimeout(() => {
        onNavigate?.('dashboard-main');
      }, 500);
    }
  };

  const handleBack = () => {
    // Handle back navigation for Step 3 questions
    if (currentStep === 3 && currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } 
    // Handle back navigation between steps (skip step 2 - analysis)
    else if (currentStep > 1 && currentStep !== 2) {
      setCurrentStep(prev => Math.max(prev - 1, 1) as OnboardingStep);
    }
  };

  const getProgress = () => {
    return (currentStep / 4) * 100;
  };

  const toggleIndustry = (industry: string) => {
    setFormData(prev => ({
      ...prev,
      selectedIndustries: prev.selectedIndustries.includes(industry)
        ? prev.selectedIndustries.filter(i => i !== industry)
        : [...prev.selectedIndustries, industry]
    }));
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] flex">
      {/* LEFT PANEL - CONTEXT */}
      {currentStep === 3 && (
        <Step3LeftPanel 
          questions={questions} 
          currentQuestion={currentQuestion}
        />
      )}
      {currentStep === 4 && (
        <div className="hidden lg:flex lg:w-72 bg-white border-r border-gray-100 flex-col">
          {/* Logo */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0d5f4e] flex items-center justify-center text-white font-medium">
                S
              </div>
              <span className="text-xl font-light text-gray-900">StartupAI</span>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex-1 p-8 space-y-6">
            <StepIndicator
              number={1}
              title="Context & Enrichment"
              subtitle="Add your links and info"
              isActive={false}
              isCompleted={currentStep > 1}
            />
            <StepIndicator
              number={2}
              title="AI Analysis"
              subtitle="What AI discovered"
              isActive={false}
              isCompleted={currentStep > 2}
            />
            <StepIndicator
              number={3}
              title="Smart Interview"
              subtitle="Answer questions"
              isActive={false}
              isCompleted={currentStep > 3}
            />
            <StepIndicator
              number={4}
              title="Review & Score"
              subtitle="Finalize your profile"
              isActive={currentStep === 4}
              isCompleted={false}
            />
          </div>

          {/* Progress */}
          <div className="p-8 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-sm text-gray-500">Progress</div>
              <div className="text-sm font-medium text-gray-900">{Math.round(getProgress())}%</div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0d5f4e] transition-all duration-500"
                style={{ width: `${getProgress()}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* MAIN PANEL - WORK */}
      <div className={`flex-1 overflow-y-auto transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {/* Mobile Progress */}
        {(currentStep === 3 || currentStep === 4) && (
          <div className="lg:hidden flex items-center justify-center gap-2 p-4 bg-white border-b border-gray-200">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`h-1 rounded-full transition-all duration-300 ${
                  step === currentStep 
                    ? 'w-8 bg-[#0d5f4e]' 
                    : step < currentStep
                    ? 'w-4 bg-[#0d5f4e]/40'
                    : 'w-1 bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
        )}
        
        {currentStep === 1 && <Step1Content formData={formData} setFormData={setFormData} onNext={handleNext} isExtracting={isExtracting} />}
        {currentStep === 2 && <Step2Content progress={analysisProgress} />}
        {currentStep === 3 && <Step3MainPanel questions={questions} currentQuestion={currentQuestion} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <Step4Content score={score} showScore={showScore} onNavigate={onNavigate} />}
        {currentStep === 5 && <Step5Content onNavigate={onNavigate} />}
      </div>

      {/* RIGHT PANEL - INTELLIGENCE (Only for step 3) */}
      {currentStep === 3 && (
        <div className="hidden lg:flex lg:w-96 bg-white border-l border-gray-100 flex-col">
          <Step3RightPanel currentQuestion={currentQuestion} />
        </div>
      )}
    </div>
  );
}

// Step 3 Left Panel - CONTEXT
function Step3LeftPanel({ questions, currentQuestion }: any) {
  const categories = ['Business Model', 'Market', 'Traction', 'Team', 'Funding'];
  
  return (
    <div className="hidden lg:flex lg:w-72 bg-white border-r border-gray-100 flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0d5f4e] flex items-center justify-center text-white font-medium">
            S
          </div>
          <span className="text-xl font-light text-gray-900">StartupAI</span>
        </div>
      </div>

      {/* Progress Content */}
      <div className="flex-1 p-8">
        {/* Step Label */}
        <div className="text-xs tracking-[0.2em] text-gray-400 mb-8 uppercase">
          Step 3 of 5
        </div>

        {/* Circular Progress Arc */}
        <div className="mb-12">
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 -rotate-90">
              {/* Background circle */}
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="#f5f5f3"
                strokeWidth="8"
              />
              {/* Progress arc */}
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - (currentQuestion / questions.length))}`}
                className="transition-all duration-700 ease-out"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6b9d89" />
                  <stop offset="100%" stopColor="#0d5f4e" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl font-light text-gray-900">
                {Math.round((currentQuestion / questions.length) * 100)}
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Steps */}
        <div className="space-y-4">
          {categories.map((cat, index) => (
            <div key={cat} className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                index < currentQuestion 
                  ? 'bg-[#0d5f4e] border-[#0d5f4e]' 
                  : index === currentQuestion 
                    ? 'border-[#0d5f4e] text-[#0d5f4e] font-medium' 
                    : 'border-gray-300 text-gray-400'
              }`}>
                {index < currentQuestion ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <div className={`text-sm transition-colors ${
                index === currentQuestion ? 'text-gray-900 font-medium' : 'text-gray-500'
              }`}>
                {cat}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-8 space-y-3 border-t border-gray-100">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors w-full">
          <span>⏭</span>
          Skip question
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors w-full">
          <Save className="w-4 h-4" />
          Save & exit
        </button>
      </div>
    </div>
  );
}

// Step Indicator Component
function StepIndicator({ number, title, subtitle, isActive, isCompleted }: {
  number: number;
  title: string;
  subtitle: string;
  isActive: boolean;
  isCompleted: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
        isCompleted 
          ? 'bg-[#0d5f4e] border-[#0d5f4e]' 
          : isActive 
            ? 'border-[#0d5f4e] text-[#0d5f4e]' 
            : 'border-gray-300 text-gray-400'
      }`}>
        {isCompleted ? <Check className="w-5 h-5 text-white" /> : number}
      </div>
      <div className="flex-1">
        <div className={`font-medium mb-1 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
          {title}
        </div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}

// AI Assistant Panel Component
function AIAssistantPanel({ currentStep, analysisProgress }: { currentStep: OnboardingStep; analysisProgress: number }) {
  const getAssistantContent = () => {
    switch (currentStep) {
      case 1:
        return {
          name: 'Luna',
          title: 'Context Specialist',
          message: "I'll analyze your digital footprint and build a comprehensive profile.",
          status: 'AI is processing...',
          details: [
            'Analyze your website and LinkedIn',
            'Research market using Google Search',
            'Extract features, audience, pricing',
            'Find real competitors & trends',
            'Combine with your description',
            'Autofill profile fields',
          ]
        };
      case 2:
        return {
          name: 'Luna',
          title: 'Context Specialist',
          message: "Let me benchmark your setup against industry data. Ready?",
          status: analysisProgress < 100 ? 'AI is processing...' : '✓ ANALYSIS COMPLETE',
          details: analysisProgress === 100 ? [
            'Sources analyzed: 4,489',
            'Signals retrieved: 17 signals',
            'Similarity: 98.7%',
          ] : []
        };
      case 3:
        return {
          name: 'Sage',
          title: 'Strategy Advisor',
          message: "I'll ask a few questions to understand your unique position.",
          status: '',
          details: [
            'Adaptive questions based on gaps',
            'Extracting traction signals',
            'Understanding your strategy',
            'Building investor narrative',
          ]
        };
      case 4:
        return {
          name: 'Sage',
          title: 'Strategy Advisor',
          message: "Your score reflects strong foundations with clear growth opportunities.",
          status: '',
          details: [
            '51-70: Building Momentum',
            'You have solid foundations',
            'Clear growth opportunities',
          ]
        };
    }
  };

  const content = getAssistantContent();

  return (
    <div className="w-96 bg-white border-l border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6b9d89] to-[#0d5f4e] flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-medium text-gray-900">{content.name}</div>
          <div className="text-sm text-gray-500">{content.title}</div>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {content.message}
      </p>

      {content.status && (
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl mb-6 ${
          content.status.includes('COMPLETE') 
            ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
            : 'bg-gray-100 text-gray-700'
        }`}>
          {content.status.includes('COMPLETE') ? (
            <Check className="w-4 h-4" />
          ) : (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          {content.status}
        </div>
      )}

      {content.details.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
            <Info className="w-4 h-4" />
            {currentStep === 1 ? 'What Gemini Will Do' : currentStep === 2 && analysisProgress === 100 ? 'Analysis Summary' : 'How This Works'}
          </div>
          <ul className="space-y-2">
            {content.details.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#0d5f4e] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500">
        Powered by Gemini 3 with Google Search (Grounding)
      </div>
    </div>
  );
}

// Step 1 Content - Luxury Editorial Design
function Step1Content({ formData, setFormData, onNext, isExtracting }: any) {
  const [isSaving, setIsSaving] = useState(false);
  const [scanningStatus, setScanningStatus] = useState<string[]>(['Scanning TechCrunch']);
  const [urlExtracted, setUrlExtracted] = useState(true);
  const [newUrl, setNewUrl] = useState('');

  const industries = [
    { emoji: '💻', label: 'SaaS & Software' },
    { emoji: '🤖', label: 'Artificial Intelligence & Data' },
    { emoji: '💳', label: 'FinTech & Payments' },
    { emoji: '🛒', label: 'E-commerce & Marketplaces' },
    { emoji: '🏥', label: 'Healthcare & Life Sciences' },
    { emoji: '📚', label: 'Education & Learning' },
    { emoji: '🎬', label: 'Media, Content & Creator Economy' },
    { emoji: '🏢', label: 'Enterprise & B2B Solutions' },
    { emoji: '📱', label: 'Consumer Apps & Platforms' },
    { emoji: '🚚', label: 'Logistics, Supply Chain & Mobility' },
    { emoji: '🏠', label: 'Real Estate' },
    { emoji: '🎮', label: 'Gaming & Entertainment' },
    { emoji: '✨', label: 'Other' },
  ];

  const businessModels = ['B2B', 'B2C', 'B2B2C', 'Marketplace', 'Platform', 'Services'];
  const stages = ['Idea', 'Pre-seed', 'Seed', 'Series A', 'Series B+'];

  useEffect(() => {
    // Simulate AI scanning activity
    const statuses = ['Scanning TechCrunch', 'Trend Analysis', 'Market Insights'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setScanningStatus([statuses[currentIndex % statuses.length]]);
      currentIndex++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSaveDraft = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white -m-12 p-4 sm:p-8 lg:p-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Ultra-minimal vertical step indicator (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              {/* Vertical progress line */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-80 bg-gray-100"></div>
                <div 
                  className="absolute left-0 top-0 w-px bg-[#0d5f4e] transition-all duration-700 ease-out"
                  style={{ height: '80px' }}
                ></div>

                {/* Step indicators */}
                <div className="relative space-y-20">
                  {['Context', 'Profile', 'Interview', 'Insights'].map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === 0 
                          ? 'bg-[#0d5f4e] ring-4 ring-[#0d5f4e]/10' 
                          : 'bg-gray-200'
                      }`}></div>
                      <div className={`text-xs tracking-wider transition-colors duration-300 ${
                        index === 0 
                          ? 'text-gray-900 font-medium' 
                          : 'text-gray-400'
                      }`}>
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal mini progress indicator */}
          <div className="lg:hidden flex items-center justify-center gap-2 py-4">
            {['Context', 'Profile', 'Interview', 'Insights'].map((step, index) => (
              <div 
                key={step}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'w-8 bg-[#0d5f4e]' 
                    : 'w-1 bg-gray-200'
                }`}
              ></div>
            ))}
          </div>

          {/* Center: Single refined content column (Responsive) */}
          <div className="col-span-1 lg:col-span-7">
            <div className="max-w-2xl mx-auto animate-[fade-in_600ms_ease-out]">
              {/* Step Indicator - Editorial chapter marker */}
              <div className="text-xs tracking-[0.2em] text-[#8A8A8A] mb-6 font-light uppercase animate-[fade-in_400ms_ease-out]">
                Step 1 of 5
              </div>

              {/* Title - Large, Airy, Editorial (Responsive) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight" style={{ lineHeight: 1.1 }}>
                Tell us about your startup
              </h1>

              {/* Subtitle - Subtle, Muted (Responsive) */}
              <p className="text-base sm:text-lg text-gray-500 mb-4 leading-relaxed max-w-xl">
                We use this to calibrate your strategic engine and generate market intelligence.
              </p>

              {/* Reassurance - One-line (Step 1 only) */}
              <p className="text-sm text-gray-400 mb-12 sm:mb-16 lg:mb-20 italic">
                You can edit this anytime.
              </p>

              {/* Luxury Form Fields (Responsive spacing) */}
              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Venture Name */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    Venture Name
                  </label>
                  <input
                    type="text"
                    value={formData.ventureName || formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value, ventureName: e.target.value })}
                    placeholder="FashionOS"
                    className="w-full text-xl sm:text-2xl font-light text-gray-900 bg-transparent border-0 border-b border-gray-200 px-0 py-3 sm:py-4 placeholder:text-gray-300 focus:outline-none focus:border-[#0d5f4e] focus:ring-0 transition-colors duration-300"
                  />
                </div>

                {/* Elevator Pitch */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    Elevator Pitch
                  </label>
                  <textarea
                    value={formData.elevatorPitch || formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value, elevatorPitch: e.target.value })}
                    placeholder="An AI-powered operating system for independent fashion designers and boutique owners..."
                    rows={4}
                    className="w-full text-base sm:text-lg font-light text-gray-900 bg-transparent border-0 border-b border-gray-200 px-0 py-3 sm:py-4 placeholder:text-gray-300 focus:outline-none focus:border-[#0d5f4e] focus:ring-0 transition-colors duration-300 resize-none leading-relaxed"
                    style={{ lineHeight: 1.8 }}
                  />
                </div>

                {/* Website URL */}
                <div className="group">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <label className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">
                      Website URL <span className="text-gray-400 normal-case tracking-normal">(recommended)</span>
                    </label>
                    {urlExtracted && (
                      <span className="flex items-center gap-1 text-xs text-[#0d5f4e]">
                        <Check className="w-3 h-3" />
                        Extracted
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <input
                      type="url"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://www.fashionos.co/"
                      className="flex-1 text-base sm:text-lg font-light text-gray-900 bg-transparent border-0 border-b border-gray-200 px-0 py-3 sm:py-4 placeholder:text-gray-300 focus:outline-none focus:border-[#0d5f4e] focus:ring-0 transition-colors duration-300"
                    />
                    <button 
                      onClick={() => setUrlExtracted(!urlExtracted)}
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Re-extract
                    </button>
                  </div>
                </div>

                {/* LinkedIn URL */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    LinkedIn URL
                  </label>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <input
                      type="url"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      placeholder="https://linkedin.com/company/..."
                      className="flex-1 text-base sm:text-lg font-light text-gray-900 bg-transparent border-0 border-b border-gray-200 px-0 py-3 sm:py-4 placeholder:text-gray-300 focus:outline-none focus:border-[#0d5f4e] focus:ring-0 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Additional URLs */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    Additional URLs <span className="text-gray-400 normal-case tracking-normal">(optional)</span>
                  </label>
                  <div className="space-y-3">
                    {formData.additionalUrls.map((url, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Link2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <input
                          type="url"
                          value={url}
                          onChange={(e) => {
                            const newUrls = [...formData.additionalUrls];
                            newUrls[index] = e.target.value;
                            setFormData({ ...formData, additionalUrls: newUrls });
                          }}
                          placeholder="Blog, press release, docs..."
                          className="flex-1 text-base sm:text-lg font-light text-gray-900 bg-transparent border-0 border-b border-gray-200 px-0 py-3 placeholder:text-gray-300 focus:outline-none focus:border-[#0d5f4e] focus:ring-0 transition-colors duration-300"
                        />
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <Link2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <input
                        type="url"
                        value={newUrl}
                        onChange={(e) => setNewUrl(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && newUrl) {
                            setFormData({ ...formData, additionalUrls: [...formData.additionalUrls, newUrl] });
                            setNewUrl('');
                          }
                        }}
                        placeholder="Blog, press release, docs..."
                        className="flex-1 text-base sm:text-lg font-light text-gray-900 bg-transparent border-0 border-b border-gray-200 px-0 py-3 placeholder:text-gray-300 focus:outline-none focus:border-[#0d5f4e] focus:ring-0 transition-colors duration-300"
                      />
                      <button
                        onClick={() => {
                          if (newUrl) {
                            setFormData({ ...formData, additionalUrls: [...formData.additionalUrls, newUrl] });
                            setNewUrl('');
                          }
                        }}
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {/* Industry - Multi-select with emojis */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <label className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">
                      Industry <span className="text-red-400">*</span>
                    </label>
                    <span className="flex items-center gap-1 text-xs text-[#0d5f4e] bg-[#0d5f4e]/10 px-2 py-0.5 rounded">
                      <Sparkles className="w-3 h-3" />
                      AI detected
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">Select all that apply. AI-highlighted options are based on your description.</p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => {
                      const isSelected = formData.selectedIndustries.includes(industry.label);
                      const isAIHighlighted = industry.label === 'E-commerce & Marketplaces';
                      return (
                        <button
                          key={industry.label}
                          onClick={() => {
                            const newIndustries = isSelected
                              ? formData.selectedIndustries.filter(i => i !== industry.label)
                              : [...formData.selectedIndustries, industry.label];
                            setFormData({ ...formData, selectedIndustries: newIndustries });
                          }}
                          className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#0d5f4e] text-white shadow-md'
                              : isAIHighlighted
                              ? 'bg-[#0d5f4e]/10 text-gray-700 border border-[#0d5f4e]/30 hover:border-[#0d5f4e]'
                              : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span>{industry.emoji}</span>
                          <span className="whitespace-nowrap">{industry.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Business Model */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    Business Model <span className="text-red-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {businessModels.map((model) => {
                      const isSelected = formData.businessModel === model;
                      return (
                        <button
                          key={model}
                          onClick={() => setFormData({ ...formData, businessModel: model })}
                          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#0d5f4e] text-white shadow-md'
                              : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0d5f4e]'
                          }`}
                        >
                          {model}
                          {isSelected && <Check className="w-3.5 h-3.5 inline ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Stage */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    Stage <span className="text-red-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {stages.map((stage) => {
                      const isSelected = formData.stage === stage;
                      return (
                        <button
                          key={stage}
                          onClick={() => setFormData({ ...formData, stage: stage })}
                          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#0d5f4e] text-white shadow-md'
                              : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0d5f4e]'
                          }`}
                        >
                          {stage}
                          {isSelected && <Check className="w-3.5 h-3.5 inline ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Founding Team */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-500 mb-3 sm:mb-4 font-medium">
                    Founding Team <span className="text-gray-400 normal-case tracking-normal">(optional)</span>
                  </label>
                  <div className="space-y-3">
                    {formData.founders.map((founder, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-[#fafaf8] rounded-xl border border-gray-200">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{founder.name}</div>
                          <div className="text-xs text-gray-500">{founder.role}</div>
                          {founder.linkedinAdded && (
                            <div className="flex items-center gap-1 text-xs text-[#0d5f4e] mt-1">
                              <Linkedin className="w-3 h-3" />
                              LinkedIn added
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors">
                      <Plus className="w-4 h-4" />
                      Add Founder
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions - Responsive vertical gap */}
              <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-0">
                {/* Secondary Action - Text only */}
                <button
                  onClick={handleSaveDraft}
                  disabled={isSaving}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 tracking-wide disabled:opacity-50 text-center sm:text-left"
                >
                  {isSaving ? 'Saving...' : 'Save draft'}
                </button>

                {/* Primary Action - Deep green pill with soft shadow (Touch-friendly) */}
                <button
                  onClick={onNext}
                  disabled={isExtracting}
                  className="group px-8 sm:px-10 py-4 sm:py-5 bg-[#0d5f4e] text-white rounded-full text-base font-medium tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto min-h-[56px]"
                >
                  {isExtracting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Floating AI insight card (Responsive - below on mobile) */}
          <div className="col-span-1 lg:col-span-4 order-first lg:order-last mt-0 lg:mt-0">
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#fafaf8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.04)] animate-[fade-in_800ms_ease-out_200ms] animate-fill-both">
                {/* Agent Header (Responsive) */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#6b9d89] to-[#0d5f4e] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900 font-medium mb-1">Luna</div>
                    <div className="text-xs text-gray-500 tracking-wide">Context Specialist</div>
                  </div>
                </div>

                {/* Divider - Very subtle */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6 sm:mb-8"></div>

                {/* AI Message - Editorial style (Responsive) */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
                  "I see you're entering the FashionTech space. I'm calibrating your profile against emerging market signals."
                </p>

                {/* Status Pills - Small, subtle */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-3 sm:mb-4 font-medium">
                    Currently Processing
                  </div>
                  {scanningStatus.map((status, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-xs text-gray-600 animate-[fade-in_400ms_ease-out]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] animate-pulse"></div>
                      {status}
                    </div>
                  ))}
                </div>

                {/* Additional Context (Responsive) */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Building competitive intelligence from 12,000+ FashionTech signals
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Identifying strategic positioning opportunities
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Preparing investor readiness benchmarks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle texture/gradient overlay (Responsive margins) */}
                <div className="mt-6 sm:mt-8 h-20 sm:h-24 bg-gradient-to-b from-transparent to-[#fafaf8] -mx-6 sm:-mx-8 lg:-mx-10 -mb-6 sm:-mb-8 lg:-mb-10 rounded-b-2xl sm:rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 2 Content - Ultra-Premium Editorial Design
function Step2Content({ progress }: { progress: number }) {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const tasks = [
    { label: 'Analyze your website & links', icon: Globe },
    { label: 'Research your market', icon: TrendingUp },
    { label: 'Extract key signals', icon: Zap },
    { label: 'Prepare your dashboard', icon: Layout },
  ];

  useEffect(() => {
    // Sequential task completion based on progress
    tasks.forEach((_, index) => {
      const taskThreshold = ((index + 1) / tasks.length) * 100;
      if (progress >= taskThreshold && !completedTasks.includes(index)) {
        setTimeout(() => {
          setCompletedTasks(prev => [...prev, index]);
        }, index * 400);
      }
    });
  }, [progress, completedTasks]);

  return (
    <div className="min-h-screen bg-white -m-12 p-4 sm:p-8 lg:p-12 flex items-center justify-center">
      {/* Top-right Skip link */}
      <button className="absolute top-4 right-4 sm:top-8 sm:right-8 text-xs text-gray-400 hover:text-gray-600 transition-colors tracking-wide">
        Skip intro ×
      </button>

      {/* Perfect vertical centering - Single narrow column (Responsive) */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 animate-[fade-in_800ms_ease-out] w-full">
        {/* Step Indicator - Editorial chapter marker */}
        <div className="text-xs tracking-[0.2em] text-[#8A8A8A] mb-6 sm:mb-8 text-center font-light uppercase animate-[fade-in_400ms_ease-out]">
          Step 2 of 5
        </div>

        {/* Eyebrow label - muted */}
        <div className="text-xs tracking-[0.2em] text-gray-400 mb-6 sm:mb-8 text-center font-medium">
          WHAT OUR AI WILL DO
        </div>

        {/* Main Title - Large, serif, airy (Responsive) */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6 text-center tracking-tight" 
          style={{ lineHeight: 1.1 }}
        >
          Preparing your strategic foundation
        </h1>

        {/* Optional subtext (Responsive) */}
        <p className="text-sm sm:text-base text-gray-500 mb-12 sm:mb-16 lg:mb-20 text-center">
          This takes under a minute.
        </p>

        {/* AI Actions - Refined rows (Responsive) */}
        <div className="space-y-0">
          {tasks.map((task, index) => {
            const isComplete = completedTasks.includes(index);
            const isActive = progress >= ((index) / tasks.length) * 100 && !isComplete;
            const Icon = task.icon;

            return (
              <div key={index}>
                <div 
                  className={`flex items-center gap-4 sm:gap-6 py-6 sm:py-8 transition-all duration-700 ${
                    isComplete ? 'opacity-100' : isActive ? 'opacity-60' : 'opacity-30'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transform: isComplete ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  {/* Left: Minimal icon (thin line style) - Responsive */}
                  <div className="flex-shrink-0">
                    <Icon 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 ${
                        isComplete ? 'text-[#0d5f4e]' : 'text-gray-300'
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Center: Action label (Responsive) */}
                  <div className="flex-1">
                    <span className="text-base sm:text-lg font-light text-gray-700">
                      {task.label}
                    </span>
                  </div>

                  {/* Right: Subtle checkmark or progress dot */}
                  <div className="flex-shrink-0 w-5 sm:w-6 flex items-center justify-center">
                    {isComplete ? (
                      <Check 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d5f4e] animate-[scale-in_300ms_ease-out]" 
                        strokeWidth={2}
                      />
                    ) : isActive ? (
                      <div className="w-2 h-2 rounded-full bg-[#0d5f4e] animate-pulse"></div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    )}
                  </div>
                </div>

                {/* Very light divider */}
                {index < tasks.length - 1 && (
                  <div className="h-px bg-gray-100"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Minimal progress indicator - Very subtle (Responsive) */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2">
          {tasks.map((_, index) => (
            <div 
              key={index}
              className={`h-1 rounded-full transition-all duration-700 ${
                completedTasks.includes(index) 
                  ? 'w-6 sm:w-8 bg-[#0d5f4e]' 
                  : 'w-1 bg-gray-200'
              }`}
            ></div>
          ))}
        </div>

        {/* Completion state - Subtle */}
        {progress === 100 && completedTasks.length === tasks.length && (
          <div className="mt-8 sm:mt-12 text-center animate-[fade-in_600ms_ease-out]">
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Foundation complete
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Step 3 Main Panel - WORK (No nested columns - pure vertical stack)
function Step3MainPanel({ questions, currentQuestion, selectedAnswers, setSelectedAnswers, onNext, onBack }: any) {
  const question = questions[currentQuestion];
  const [showHelper, setShowHelper] = useState(false);
  const [hoverTime, setHoverTime] = useState(0);

  // Show helper after 3 seconds of hovering without selection
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hoverTime > 0 && selectedAnswers[currentQuestion] === undefined) {
      timer = setTimeout(() => {
        setShowHelper(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [hoverTime, selectedAnswers, currentQuestion]);

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      {/* Step Indicator - Mobile Only */}
      <div className="lg:hidden text-xs tracking-[0.2em] text-gray-400 mb-6 uppercase">
        Step 3 of 5
      </div>

      {/* Question Progress Header - Mobile */}
      <div className="lg:hidden flex items-center justify-between mb-8 text-sm text-gray-500">
        <span>
          Question <span className="font-medium text-gray-900">{currentQuestion + 1}</span> of {questions.length}
        </span>
        <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
      </div>

      {/* Main Headline - Editorial */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight" style={{ lineHeight: 1.1 }}>
          Let's refine your position
        </h1>
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
          I'll ask a few targeted questions to sharpen your strategy.
        </p>
      </div>

      <div 
        className="transition-all duration-300"
        onMouseEnter={() => setHoverTime(Date.now())}
        onMouseLeave={() => {
          setHoverTime(0);
          setShowHelper(false);
        }}
      >
        {/* Category Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#6b9d89]/10 border border-[#6b9d89]/20 rounded-full">
            <span className="text-xs font-semibold text-[#6b9d89] uppercase tracking-widest">
              {question.category}
            </span>
          </div>
        </div>

        {/* Question - Premium Typography */}
        <h2 className="text-4xl lg:text-5xl text-gray-900 font-light leading-tight tracking-tight mb-6" style={{ lineHeight: 1.2 }}>
          {question.question}
        </h2>

        {/* Context Text */}
        <p className="text-base text-gray-600 mb-12 leading-relaxed max-w-2xl">
          Understanding your {question.category.toLowerCase()} helps us tailor your go-to-market recommendations and investor positioning.
        </p>

        {/* Answer Cards - Premium Design */}
        <div className="space-y-4 mb-8">
          {question.options.map((option: string, index: number) => {
            const isSelected = selectedAnswers[currentQuestion] === index;
            const contextText = [
              'Direct-to-consumer products',
              'Under 100 employees',
              '100-1,000 employees',
              '1,000+ employees'
            ];

            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
                  setShowHelper(false);
                }}
                className={`group w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-[#0d5f4e] bg-gradient-to-r from-white to-[#f0fdf4] shadow-[0_4px_16px_rgba(13,95,78,0.1),0_0_0_4px_rgba(13,95,78,0.05)] scale-[1.01]'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
                style={{ 
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: isSelected ? 'transform, box-shadow' : 'auto'
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Premium Radio Button */}
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? 'border-[#0d5f4e] bg-[#0d5f4e] scale-105' 
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white animate-[scale-in_200ms_ease-out]" />
                    )}
                  </div>

                  <div className="flex-1">
                    {/* Answer Text */}
                    <div className="text-lg font-medium text-gray-900 mb-1">
                      {option}
                    </div>
                    {/* Context Text */}
                    {currentQuestion === 1 && (
                      <div className="text-sm text-gray-500">
                        {contextText[index]}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progressive Disclosure - "Not sure?" Helper */}
        {showHelper && selectedAnswers[currentQuestion] === undefined && (
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl mb-8 animate-[fade-in_300ms_ease-out]">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-[#6b9d89] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900 mb-2">Not sure which to choose?</div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  Select the option that best reflects your current state. You can always update this later in your profile settings.
                </div>
              </div>
            </div>
            <button className="text-sm text-[#0d5f4e] hover:text-[#0a4a3b] font-medium inline-flex items-center gap-1">
              View detailed examples
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Helper Text */}
        <p className="text-sm text-gray-500 italic mb-16">
          Answer honestly — accuracy improves your score more than optimism.
        </p>

        {/* Bottom Navigation */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between gap-6">
            {/* Back Button */}
            <button
              onClick={onBack}
              disabled={currentQuestion === 0}
              className={`group inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl transition-all duration-200 ${
                currentQuestion === 0 
                  ? 'opacity-0 cursor-not-allowed' 
                  : 'hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-gray-700">Back</span>
            </button>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              {questions.map((_: any, index: number) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index < currentQuestion
                      ? 'w-8 bg-[#0d5f4e]'
                      : index === currentQuestion
                      ? 'w-12 bg-[#0d5f4e]'
                      : 'w-8 bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={onNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="group inline-flex items-center gap-3 px-8 py-3 bg-[#0d5f4e] hover:bg-[#0a4a3b] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-200 disabled:opacity-50"
            >
              <span className="font-medium">
                {currentQuestion === questions.length - 1 ? 'Complete' : 'Continue'}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Question Counter */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-500">
              Question <span className="font-medium text-gray-900">{currentQuestion + 1}</span> of {questions.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3 Right Panel - INTELLIGENCE
function Step3RightPanel({ currentQuestion }: any) {
  const aiContexts = [
    {
      message: "Based on your profile, most fashion tech startups target SMBs first.",
      points: [
        'Sales cycle length',
        'Pricing model',
        'Marketing channels',
        'Investor expectations'
      ],
      note: "Early-stage investors look for focused customer definition."
    },
    {
      message: "Fashion brands typically start with SMB clients before moving upmarket.",
      points: [
        'SMB: Faster sales, lower ACV',
        'Enterprise: Slower, higher ACV',
        'Your choice affects runway needs'
      ],
      note: "We'll use this to recommend pricing models."
    },
    {
      message: "At pre-seed, proof points matter more than revenue.",
      points: [
        'Beta users with engagement data',
        'Letters of intent from brands',
        'Pilot programs with feedback',
        'Product-market fit indicators'
      ],
      note: "Investors want to see momentum, not perfection."
    },
    {
      message: "Team size impacts your operational capacity and burn rate.",
      points: [
        'Hiring velocity signals traction',
        'Small teams need focus',
        'Key gaps affect investor confidence'
      ],
      note: "We'll help identify critical hires for your stage."
    },
    {
      message: "Funding status shapes your strategic options.",
      points: [
        'Runway determines urgency',
        'Capital efficiency matters',
        'Bootstrapped shows discipline'
      ],
      note: "Your funding path affects our recommendations."
    }
  ];

  const aiContext = aiContexts[currentQuestion];

  return (
    <div className="p-8 lg:p-12">
      <div className="sticky top-8">
        {/* AI Avatar */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6b9d89] to-[#0d5f4e] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-medium text-gray-900">Sage</div>
            <div className="text-sm text-gray-500">Strategy Advisor</div>
          </div>
        </div>

        {/* AI Message */}
        <p className="text-base text-gray-700 italic leading-relaxed mb-8">
          "{aiContext.message}"
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* Why This Matters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-4">
            <div className="w-5 h-5 rounded bg-[#0d5f4e]/10 flex items-center justify-center">
              <span className="text-xs">💡</span>
            </div>
            Why this matters
          </div>
          <ul className="space-y-2">
            {aiContext.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#0d5f4e] mt-1 flex-shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Note */}
        <div className="p-4 bg-[#fafaf8] rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600 leading-relaxed">
            {aiContext.note}
          </p>
        </div>

        {/* Learn More */}
        <button className="mt-6 text-sm text-[#0d5f4e] hover:text-[#0a4a3b] font-medium inline-flex items-center gap-1 transition-colors">
          Learn more
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// Step 4 Content
function Step4Content({ score, showScore, onNavigate }: any) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Step Indicator - Editorial chapter marker */}
      <div className="text-xs tracking-[0.2em] text-[#8A8A8A] mb-6 font-light uppercase animate-[fade-in_400ms_ease-out]">
        Step 4 of 5
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 font-light tracking-tight" style={{ lineHeight: 1.1 }}>
        Your strategic snapshot
      </h1>
      <p className="text-base sm:text-lg text-gray-500 mb-12 leading-relaxed">
        A clear view of where you stand today.
      </p>

      {/* Score Circle */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 mb-12">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <svg className="w-48 h-48 -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="#f5f5f3"
                strokeWidth="12"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="#0d5f4e"
                strokeWidth="12"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - score / 100)}`}
                className="transition-all duration-2000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <div className="text-6xl font-light text-gray-900">{score}</div>
                <div className="text-xl text-gray-500">/ 100</div>
              </div>
            </div>
          </div>
          <div className="inline-block px-6 py-2 bg-[#6b9d89]/20 text-[#0d5f4e] rounded-full font-medium">
            Good — Building Momentum
          </div>
        </div>

        {/* Strengths */}
        <div className="mb-8 p-6 bg-green-50 rounded-2xl">
          <h3 className="flex items-center gap-2 text-xl text-gray-900 font-medium mb-4">
            <Check className="w-5 h-5 text-[#0d5f4e]" />
            Your Strengths
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2" />
              <div>
                <div className="font-medium text-gray-900">Clear Value Proposition</div>
                <div className="text-sm text-gray-600">Your product solves a specific, well-defined problem for fashion brands</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2" />
              <div>
                <div className="font-medium text-gray-900">Strong Product Clarity</div>
                <div className="text-sm text-gray-600">Your offering addresses a real workflow pain point in the industry</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Areas to Improve */}
        <div className="mb-8 p-6 bg-amber-50 rounded-2xl">
          <h3 className="flex items-center gap-2 text-xl text-gray-900 font-medium mb-4">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            Areas to Improve
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
              <div>
                <div className="font-medium text-gray-900">Traction Metrics</div>
                <div className="text-sm text-gray-600">Show early customer adoption: beta users, pilot programs, or letters of intent</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
              <div>
                <div className="font-medium text-gray-900">Go-to-Market Proof</div>
                <div className="text-sm text-gray-600">Demonstrate how you're acquiring customers and your early sales motion</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Recommended Next Steps */}
        <div>
          <h3 className="flex items-center gap-2 text-xl text-gray-900 font-medium mb-6">
            <Target className="w-5 h-5 text-[#0d5f4e]" />
            Recommended Next Steps
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => onNavigate?.('pitch-deck')}
              className="p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#0d5f4e] transition-colors text-left group"
            >
              <Presentation className="w-8 h-8 text-[#0d5f4e] mb-3" />
              <div className="font-medium text-gray-900 mb-2">Create Pitch Deck</div>
              <div className="text-sm text-gray-600 mb-3">AI-generated investor deck</div>
              <div className="text-sm text-[#0d5f4e] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Start → <ArrowRight className="w-3 h-3" />
              </div>
            </button>
            <button className="p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#0d5f4e] transition-colors text-left group">
              <Shield className="w-8 h-8 text-[#0d5f4e] mb-3" />
              <div className="font-medium text-gray-900 mb-2">Validate Idea</div>
              <div className="text-sm text-gray-600 mb-3">Run validation framework</div>
              <div className="text-sm text-[#0d5f4e] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Start → <ArrowRight className="w-3 h-3" />
              </div>
            </button>
            <button className="p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#0d5f4e] transition-colors text-left group">
              <Map className="w-8 h-8 text-[#0d5f4e] mb-3" />
              <div className="font-medium text-gray-900 mb-2">Build Roadmap</div>
              <div className="text-sm text-gray-600 mb-3">Plan your next 90 days</div>
              <div className="text-sm text-[#0d5f4e] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Start → <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 5 Content - Completion / Transition
function Step5Content({ onNavigate }: any) {
  return (
    <div className="min-h-screen bg-white -m-12 p-4 sm:p-8 lg:p-12 flex items-center justify-center">
      {/* Perfect vertical centering - Single narrow column */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 animate-[fade-in_800ms_ease-out] w-full text-center">
        {/* Step Indicator - Editorial chapter marker */}
        <div className="text-xs tracking-[0.2em] text-[#8A8A8A] mb-8 font-light uppercase animate-[fade-in_400ms_ease-out]">
          Step 5 of 5
        </div>

        {/* Success Icon - Minimal */}
        <div className="mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-[#6b9d89] to-[#0d5f4e] flex items-center justify-center shadow-lg animate-[scale-in_600ms_ease-out]">
            <Check className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Main Title - Large, serif, airy (Responsive) */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight" 
          style={{ lineHeight: 1.1 }}
        >
          Your foundation is ready
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-500 mb-12 sm:mb-16 leading-relaxed max-w-xl mx-auto">
          Let's move from insight to execution.
        </p>

        {/* Primary CTA - Deep green pill */}
        <button
          onClick={() => onNavigate?.('/dashboard')}
          className="group px-10 sm:px-12 py-5 sm:py-6 bg-[#0d5f4e] text-white rounded-full text-base sm:text-lg font-medium tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mx-auto w-full sm:w-auto max-w-md"
        >
          Enter your dashboard
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Optional secondary link */}
        <div className="mt-8">
          <button className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Take a quick tour first
          </button>
        </div>

        {/* Bottom spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}