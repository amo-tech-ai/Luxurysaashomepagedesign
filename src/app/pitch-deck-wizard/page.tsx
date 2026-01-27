/**
 * Pitch Deck Wizard - Industry-Specific Multi-Step Generator
 * 
 * 5 Steps:
 * 1. Startup Info
 * 2. Industry Focus (conditional - 13 industry variants)
 * 3. Market & Traction
 * 4. Deck Style
 * 5. Review & Generate
 * 
 * Layout: Three-column (left nav, center form, right AI panel)
 * Design: Clean, professional, investor-focused
 */

'use client';

import { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Check,
  Lightbulb,
  Target,
  Brain,
  DollarSign,
  Heart,
  ShoppingCart,
  Shield,
  Truck,
  GraduationCap,
  Scale,
  TrendingUp,
  Users,
  Calendar,
  CreditCard
} from 'lucide-react';

interface PitchDeckWizardPageProps {
  onNavigate?: (page: string) => void;
}

// ========================================
// INDUSTRY DEFINITIONS
// ========================================

const industries = [
  { id: 'ai-saas', label: 'AI SaaS', icon: Brain },
  { id: 'fintech', label: 'FinTech', icon: DollarSign },
  { id: 'healthcare', label: 'Healthcare', icon: Heart },
  { id: 'retail', label: 'Retail & eCommerce', icon: ShoppingCart },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
  { id: 'logistics', label: 'Logistics & Supply Chain', icon: Truck },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'legal', label: 'Legal / Professional Services', icon: Scale },
  { id: 'financial-services', label: 'Financial Services', icon: TrendingUp },
  { id: 'sales-marketing', label: 'Sales & Marketing', icon: Users },
  { id: 'crm-social', label: 'CRM & Social Media AI', icon: Users },
  { id: 'events', label: 'Events Management', icon: Calendar },
  { id: 'ecommerce', label: 'eCommerce', icon: CreditCard },
];

// Industry-specific content
const industryContent: Record<string, {
  title: string;
  questions: Array<{ id: string; label: string; placeholder: string; type?: string }>;
  metrics: Array<{ id: string; label: string; placeholder: string }>;
  aiInsight: string;
  suggestions: string[];
  proTip: string;
}> = {
  'ai-saas': {
    title: 'AI SaaS',
    questions: [
      { 
        id: 'buyer', 
        label: 'Who is the buyer?', 
        placeholder: 'Operations teams at mid-market SaaS companies' 
      },
      { 
        id: 'process', 
        label: 'What process does AI automate?', 
        placeholder: 'Customer support triage and routing',
        type: 'textarea'
      },
      { 
        id: 'impact', 
        label: 'What is the measurable impact?', 
        placeholder: '40% faster response times, 25% cost reduction' 
      },
      { 
        id: 'advantage', 
        label: 'What is your AI advantage?', 
        placeholder: 'Proprietary NLP model trained on 10M support tickets',
        type: 'textarea'
      },
    ],
    metrics: [
      { id: 'mrr', label: 'Monthly Recurring Revenue (MRR)', placeholder: 'e.g., $50,000' },
      { id: 'users', label: 'Active users', placeholder: 'e.g., 2,500' },
      { id: 'growth', label: 'Month-over-month growth %', placeholder: 'e.g., 15%' },
    ],
    aiInsight: 'Investors expect AI SaaS pitches to clearly show automation leverage and ROI.',
    suggestions: [
      'Make problem more specific to the buyer',
      'Add SaaS benchmark metrics',
      'Tighten AI differentiation',
      'Highlight usage-based expansion'
    ],
    proTip: 'Top Seed-stage AI SaaS decks clearly explain how AI reduces cost or increases revenue within 90 days.'
  },
  
  'fintech': {
    title: 'FinTech',
    questions: [
      { 
        id: 'customer', 
        label: 'Who is the customer?', 
        placeholder: 'Risk and compliance teams at digital banks' 
      },
      { 
        id: 'risk', 
        label: 'What risk or inefficiency exists?', 
        placeholder: 'Manual fraud reviews cause delays and losses',
        type: 'textarea'
      },
      { 
        id: 'advantage', 
        label: 'What is the AI advantage?', 
        placeholder: 'Real-time fraud detection with fewer false positives' 
      },
      { 
        id: 'compliance', 
        label: 'What regulatory compliance do you address?', 
        placeholder: 'SOC 2, PCI DSS, GDPR compliant' 
      },
    ],
    metrics: [
      { id: 'volume', label: 'Transaction volume', placeholder: 'e.g., 1M/month' },
      { id: 'false-positive', label: 'False positive rate', placeholder: 'e.g., < 2%' },
      { id: 'cac', label: 'Customer acquisition cost', placeholder: 'e.g., $5,000' },
    ],
    aiInsight: 'FinTech investors prioritize regulatory compliance and trust signals.',
    suggestions: [
      'Emphasize regulatory compliance',
      'Add cost savings per transaction',
      'Highlight security certifications',
      'Include fraud prevention stats'
    ],
    proTip: 'FinTech investors expect clear paths to regulatory approval and evidence of trust from financial institutions.'
  },
  
  'healthcare': {
    title: 'Healthcare',
    questions: [
      { 
        id: 'user', 
        label: 'Who uses the product?', 
        placeholder: 'Clinical operations teams at outpatient clinics' 
      },
      { 
        id: 'outcome', 
        label: 'What outcome improves?', 
        placeholder: 'Reduced patient wait times',
        type: 'textarea'
      },
      { 
        id: 'efficiency', 
        label: 'What efficiency gain exists?', 
        placeholder: '30% reduction in administrative workload' 
      },
      { 
        id: 'compliance', 
        label: 'What compliance standards do you meet?', 
        placeholder: 'HIPAA, HITECH Act' 
      },
    ],
    metrics: [
      { id: 'volume', label: 'Patient volume', placeholder: 'e.g., 5,000/month' },
      { id: 'wait-time', label: 'Wait time reduction', placeholder: 'e.g., 30%' },
      { id: 'cost-per-patient', label: 'Cost per patient', placeholder: 'e.g., $150' },
    ],
    aiInsight: 'Healthcare investors prioritize clinical validation and patient outcomes.',
    suggestions: [
      'Emphasize patient outcomes',
      'Add clinical efficiency metrics',
      'Highlight HIPAA compliance',
      'Include provider testimonials'
    ],
    proTip: 'Healthcare investors prioritize clinical validation, regulatory compliance, and evidence of improved patient outcomes.'
  },
  
  'retail': {
    title: 'Retail & eCommerce',
    questions: [
      { 
        id: 'problem', 
        label: 'What retail problem are you solving?', 
        placeholder: 'Retailers struggle to forecast demand accurately',
        type: 'textarea'
      },
      { 
        id: 'customer', 
        label: 'Who is the customer?', 
        placeholder: 'Mid-market DTC brands' 
      },
      { 
        id: 'value-driver', 
        label: 'What is the primary value driver?', 
        placeholder: 'Inventory efficiency' 
      },
      { 
        id: 'proof', 
        label: 'What is the proof of impact?', 
        placeholder: '15% reduction in stockouts, 20% improvement in turnover' 
      },
    ],
    metrics: [
      { id: 'conversion', label: 'Conversion rate', placeholder: 'e.g., 3.5%' },
      { id: 'aov', label: 'Average order value (AOV)', placeholder: 'e.g., $125' },
      { id: 'margin', label: 'Gross margin improvement', placeholder: 'e.g., 5%' },
    ],
    aiInsight: 'Retail investors expect clear impact on revenue or margins.',
    suggestions: [
      'Frame problem around lost revenue',
      'Add per-store or per-SKU impact',
      'Highlight seasonal performance',
      'Include retail benchmark data'
    ],
    proTip: 'Retail investors expect clear impact on revenue or margins with quantifiable per-store or per-SKU metrics.'
  },
  
  'cybersecurity': {
    title: 'Cybersecurity',
    questions: [
      { 
        id: 'threat', 
        label: 'What threat do you address?', 
        placeholder: 'Advanced persistent threats (APTs) evading detection',
        type: 'textarea'
      },
      { 
        id: 'buyer', 
        label: 'Who is the buyer?', 
        placeholder: 'Security operations teams at Fortune 1000 companies' 
      },
      { 
        id: 'detection', 
        label: 'What is your detection advantage?', 
        placeholder: 'AI-powered behavioral analysis catches zero-day attacks' 
      },
      { 
        id: 'impact', 
        label: 'What is the business impact?', 
        placeholder: '60% faster threat response, 40% reduction in false alerts' 
      },
    ],
    metrics: [
      { id: 'detection-rate', label: 'Threat detection rate', placeholder: 'e.g., 99.5%' },
      { id: 'false-positive', label: 'False positive reduction', placeholder: 'e.g., 40%' },
      { id: 'mttr', label: 'Mean time to respond (MTTR)', placeholder: 'e.g., 15 min' },
    ],
    aiInsight: 'Cybersecurity investors look for proven threat detection and enterprise traction.',
    suggestions: [
      'Emphasize zero-day detection',
      'Add enterprise customer logos',
      'Highlight compliance certifications',
      'Include breach prevention stats'
    ],
    proTip: 'Cybersecurity investors look for proven threat detection, enterprise traction, and clear ROI on security spend.'
  },
  
  'logistics': {
    title: 'Logistics & Supply Chain',
    questions: [
      { 
        id: 'inefficiency', 
        label: 'What supply chain inefficiency exists?', 
        placeholder: 'Manual route planning causes delivery delays',
        type: 'textarea'
      },
      { 
        id: 'customer', 
        label: 'Who is the customer?', 
        placeholder: 'Logistics managers at 3PL companies' 
      },
      { 
        id: 'optimization', 
        label: 'What is the optimization gain?', 
        placeholder: '20% reduction in delivery times, 15% fuel savings' 
      },
      { 
        id: 'proof', 
        label: 'What is the proof of efficiency?', 
        placeholder: 'AI route optimization processed 100K deliveries' 
      },
    ],
    metrics: [
      { id: 'volume', label: 'Delivery volume', placeholder: 'e.g., 10,000/month' },
      { id: 'on-time', label: 'On-time delivery rate', placeholder: 'e.g., 98%' },
      { id: 'cost-per-delivery', label: 'Cost per delivery', placeholder: 'e.g., $8' },
    ],
    aiInsight: 'Supply chain investors prioritize measurable efficiency gains and cost reduction.',
    suggestions: [
      'Add cost savings per route',
      'Highlight real-time optimization',
      'Include carrier partnerships',
      'Emphasize sustainability impact'
    ],
    proTip: 'Supply chain investors prioritize measurable efficiency gains, cost reduction, and proof of scale.'
  },
  
  'education': {
    title: 'Education',
    questions: [
      { 
        id: 'learner', 
        label: 'Who is the learner?', 
        placeholder: 'High school students preparing for college admissions' 
      },
      { 
        id: 'outcome', 
        label: 'What learning outcome improves?', 
        placeholder: 'Test scores and college acceptance rates',
        type: 'textarea'
      },
      { 
        id: 'engagement', 
        label: 'What is the engagement metric?', 
        placeholder: 'Students spend 3x more time practicing with AI tutoring' 
      },
      { 
        id: 'proof', 
        label: 'What is the proof of impact?', 
        placeholder: 'Students improved SAT scores by average of 150 points' 
      },
    ],
    metrics: [
      { id: 'engagement', label: 'Student engagement rate', placeholder: 'e.g., 85%' },
      { id: 'improvement', label: 'Learning outcomes improvement', placeholder: 'e.g., 150 points' },
      { id: 'completion', label: 'Completion rate', placeholder: 'e.g., 75%' },
    ],
    aiInsight: 'EdTech investors seek evidence of improved learning outcomes and strong engagement.',
    suggestions: [
      'Add learning outcome data',
      'Highlight student testimonials',
      'Include institutional partnerships',
      'Emphasize accessibility features'
    ],
    proTip: 'EdTech investors seek evidence of improved learning outcomes, strong engagement, and paths to institutional adoption.'
  },
  
  'legal': {
    title: 'Legal / Professional Services',
    questions: [
      { 
        id: 'process', 
        label: 'What legal process do you automate?', 
        placeholder: 'Contract review and risk analysis',
        type: 'textarea'
      },
      { 
        id: 'buyer', 
        label: 'Who is the buyer?', 
        placeholder: 'Legal operations teams at mid-size law firms' 
      },
      { 
        id: 'efficiency', 
        label: 'What efficiency gain exists?', 
        placeholder: '80% faster contract review, 50% cost reduction' 
      },
      { 
        id: 'accuracy', 
        label: 'What is the accuracy advantage?', 
        placeholder: 'AI detects 95% of risky clauses missed by manual review' 
      },
    ],
    metrics: [
      { id: 'documents', label: 'Documents processed', placeholder: 'e.g., 5,000/month' },
      { id: 'time-reduction', label: 'Review time reduction', placeholder: 'e.g., 80%' },
      { id: 'accuracy', label: 'Accuracy rate', placeholder: 'e.g., 95%' },
    ],
    aiInsight: 'Legal tech investors prioritize accuracy, time savings, and trust signals.',
    suggestions: [
      'Emphasize time savings',
      'Add cost per case reduction',
      'Highlight accuracy metrics',
      'Include law firm testimonials'
    ],
    proTip: 'Legal tech investors prioritize accuracy, time savings, and evidence of trust from law firms or legal departments.'
  },
  
  'financial-services': {
    title: 'Financial Services',
    questions: [
      { 
        id: 'process', 
        label: 'What financial process do you improve?', 
        placeholder: 'Investment portfolio optimization',
        type: 'textarea'
      },
      { 
        id: 'customer', 
        label: 'Who is the customer?', 
        placeholder: 'Wealth managers and financial advisors' 
      },
      { 
        id: 'performance', 
        label: 'What is the performance advantage?', 
        placeholder: 'AI-driven portfolios outperform benchmarks by 12%' 
      },
      { 
        id: 'compliance', 
        label: 'What compliance standards do you meet?', 
        placeholder: 'SEC registered, FINRA compliant' 
      },
    ],
    metrics: [
      { id: 'aum', label: 'Assets under management (AUM)', placeholder: 'e.g., $50M' },
      { id: 'performance', label: 'Portfolio performance vs. benchmark', placeholder: 'e.g., +12%' },
      { id: 'retention', label: 'Client retention rate', placeholder: 'e.g., 95%' },
    ],
    aiInsight: 'Financial services investors expect strong performance data and regulatory compliance.',
    suggestions: [
      'Add performance vs. S&P 500',
      'Highlight regulatory compliance',
      'Include advisor testimonials',
      'Emphasize fiduciary duty alignment'
    ],
    proTip: 'Financial services investors expect strong performance data, regulatory compliance, and trust signals from advisors.'
  },
  
  'sales-marketing': {
    title: 'Sales & Marketing',
    questions: [
      { 
        id: 'inefficiency', 
        label: 'What sales inefficiency exists?', 
        placeholder: 'Sales teams waste time on unqualified leads',
        type: 'textarea'
      },
      { 
        id: 'buyer', 
        label: 'Who is the buyer?', 
        placeholder: 'Sales ops teams at B2B tech companies' 
      },
      { 
        id: 'conversion', 
        label: 'What is the conversion advantage?', 
        placeholder: 'AI lead scoring increases close rates by 30%' 
      },
      { 
        id: 'roi', 
        label: 'What is the ROI proof?', 
        placeholder: 'Customers see 4x ROI in first 90 days' 
      },
    ],
    metrics: [
      { id: 'qualification', label: 'Lead qualification rate', placeholder: 'e.g., 85%' },
      { id: 'conversion', label: 'Conversion rate improvement', placeholder: 'e.g., 30%' },
      { id: 'cycle', label: 'Sales cycle reduction', placeholder: 'e.g., 25%' },
    ],
    aiInsight: 'Sales tech investors prioritize clear ROI and fast time-to-value.',
    suggestions: [
      'Add pipeline velocity metrics',
      'Highlight ROI in 90 days',
      'Include customer win rates',
      'Emphasize CRM integration'
    ],
    proTip: 'Sales tech investors prioritize clear ROI, fast time-to-value, and proof of increased sales productivity.'
  },
  
  'crm-social': {
    title: 'CRM & Social Media AI',
    questions: [
      { 
        id: 'inefficiency', 
        label: 'What CRM inefficiency exists?', 
        placeholder: 'Sales teams manually update CRM data, causing gaps',
        type: 'textarea'
      },
      { 
        id: 'buyer', 
        label: 'Who is the buyer?', 
        placeholder: 'Sales operations and marketing teams at B2B companies' 
      },
      { 
        id: 'automation', 
        label: 'What is the automation advantage?', 
        placeholder: 'AI auto-populates CRM with social signals and intent data' 
      },
      { 
        id: 'engagement', 
        label: 'What is the engagement impact?', 
        placeholder: '40% increase in outreach response rates' 
      },
    ],
    metrics: [
      { id: 'accuracy', label: 'CRM data accuracy', placeholder: 'e.g., 95%' },
      { id: 'engagement', label: 'Sales engagement rate', placeholder: 'e.g., +40%' },
      { id: 'pipeline', label: 'Pipeline generated', placeholder: 'e.g., $5M' },
    ],
    aiInsight: 'CRM AI investors expect proof of data quality improvement and sales productivity.',
    suggestions: [
      'Add data accuracy improvement',
      'Highlight social selling ROI',
      'Include integration with Salesforce/HubSpot',
      'Emphasize intent signal value'
    ],
    proTip: 'CRM AI investors expect proof of data quality improvement and measurable impact on sales productivity.'
  },
  
  'events': {
    title: 'Events Management',
    questions: [
      { 
        id: 'challenge', 
        label: 'What event challenge do you solve?', 
        placeholder: 'Event planners struggle with attendee engagement',
        type: 'textarea'
      },
      { 
        id: 'customer', 
        label: 'Who is the customer?', 
        placeholder: 'Corporate event planners and conference organizers' 
      },
      { 
        id: 'engagement', 
        label: 'What is the engagement advantage?', 
        placeholder: 'AI-powered matchmaking increases networking by 50%' 
      },
      { 
        id: 'proof', 
        label: 'What is the proof of success?', 
        placeholder: 'Managed 200+ events with 95% attendee satisfaction' 
      },
    ],
    metrics: [
      { id: 'events', label: 'Events managed', placeholder: 'e.g., 200' },
      { id: 'engagement', label: 'Attendee engagement rate', placeholder: 'e.g., 85%' },
      { id: 'nps', label: 'Net Promoter Score (NPS)', placeholder: 'e.g., 75' },
    ],
    aiInsight: 'Events tech investors look for strong engagement metrics and repeat customers.',
    suggestions: [
      'Add attendee satisfaction data',
      'Highlight enterprise event logos',
      'Include post-event survey results',
      'Emphasize ROI for organizers'
    ],
    proTip: 'Events tech investors look for strong engagement metrics, repeat customers, and clear value for event organizers.'
  },
  
  'ecommerce': {
    title: 'eCommerce',
    questions: [
      { 
        id: 'problem', 
        label: 'What eCommerce problem exists?', 
        placeholder: 'Online shoppers abandon carts due to poor product discovery',
        type: 'textarea'
      },
      { 
        id: 'customer', 
        label: 'Who is the customer?', 
        placeholder: 'Mid-market eCommerce brands with 100K+ monthly visitors' 
      },
      { 
        id: 'conversion', 
        label: 'What is the conversion advantage?', 
        placeholder: 'AI product recommendations increase conversion by 25%' 
      },
      { 
        id: 'proof', 
        label: 'What is the proof of impact?', 
        placeholder: 'Powered 50M product recommendations, $10M in attributed revenue' 
      },
    ],
    metrics: [
      { id: 'conversion-lift', label: 'Conversion rate lift', placeholder: 'e.g., 25%' },
      { id: 'aov', label: 'Average order value (AOV)', placeholder: 'e.g., $150' },
      { id: 'revenue', label: 'Revenue attributed', placeholder: 'e.g., $10M' },
    ],
    aiInsight: 'eCommerce investors prioritize conversion lift and attributed revenue.',
    suggestions: [
      'Add conversion lift metrics',
      'Highlight attributed revenue',
      'Include brand customer logos',
      'Emphasize easy integration'
    ],
    proTip: 'eCommerce investors prioritize conversion lift, attributed revenue, and proof of scale across multiple brands.'
  },
};

// ========================================
// MAIN COMPONENT
// ========================================

export default function PitchDeckWizardPage({ onNavigate }: PitchDeckWizardPageProps) {
  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form state - Step 1
  const [startupName, setStartupName] = useState('');
  const [oneLiner, setOneLiner] = useState('');
  const [stage, setStage] = useState('');
  
  // Form state - Step 2
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [industryAnswers, setIndustryAnswers] = useState<Record<string, string>>({});
  const [industryMetrics, setIndustryMetrics] = useState<Record<string, string>>({});
  
  // Form state - Step 3
  const [tam, setTam] = useState('');
  const [sam, setSam] = useState('');
  const [som, setSom] = useState('');
  const [revenue, setRevenue] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  
  // Form state - Step 4
  const [deckStyle, setDeckStyle] = useState('');
  const [tone, setTone] = useState('');

  const handleGoHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (onNavigate) {
      onNavigate('pitch-deck');
    }
  };

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    // Reset industry-specific answers when changing industry
    setIndustryAnswers({});
    setIndustryMetrics({});
  };

  const getProgressPercentage = () => {
    return (currentStep / 5) * 100;
  };

  const getStepLabel = (step: number) => {
    const labels = [
      'Startup Info',
      'Industry Focus',
      'Market & Traction',
      'Deck Style',
      'Review & Generate'
    ];
    return labels[step - 1];
  };

  const isStepComplete = (step: number) => {
    if (step < currentStep) return true;
    if (step > currentStep) return false;
    
    // Current step validation
    if (step === 1) {
      return startupName && oneLiner && stage;
    }
    return false;
  };

  const canContinue = () => {
    if (currentStep === 1) {
      return startupName && oneLiner && stage;
    }
    if (currentStep === 2) {
      return selectedIndustry && Object.keys(industryAnswers).length > 0;
    }
    return true;
  };

  // Get current industry content
  const currentIndustryContent = selectedIndustry ? industryContent[selectedIndustry] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button
              onClick={handleGoHome}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-light text-gray-900 group-hover:text-[#0d5f4e] transition-colors">
                StartupAI
              </span>
            </button>

            {/* Progress Indicator */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-sm text-gray-500">Pitch Deck Generator</div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="text-sm font-medium text-gray-900">
                Step {currentStep} of 5
              </div>
            </div>

            {/* Exit */}
            <button
              onClick={handleGoHome}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Exit
            </button>
          </div>
        </div>
      </header>

      {/* Three-Column Layout */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[240px_1fr_320px] min-h-[calc(100vh-73px)]">
          
          {/* LEFT COLUMN - Step Navigation */}
          <aside className="hidden lg:block bg-white border-r border-gray-200 p-6">
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Progress
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0d5f4e] transition-all duration-500"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {Math.round(getProgressPercentage())}% complete
              </div>
            </div>

            {/* Step List */}
            <nav className="space-y-3">
              {[1, 2, 3, 4, 5].map((step) => {
                const isActive = step === currentStep;
                const isComplete = isStepComplete(step);
                
                return (
                  <div
                    key={step}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      isActive ? 'bg-[#0d5f4e]/5' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                      isComplete 
                        ? 'bg-[#0d5f4e] text-white' 
                        : isActive
                        ? 'bg-[#0d5f4e] text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {isComplete && step < currentStep ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        step
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-[#0d5f4e]' : 'text-gray-900'
                      }`}>
                        {getStepLabel(step)}
                      </div>
                      {isComplete && step < currentStep && (
                        <div className="text-xs text-gray-500 mt-0.5">Complete</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Back to Dashboard */}
            <button
              onClick={handleGoHome}
              className="mt-8 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Dashboard
            </button>

          </aside>

          {/* CENTER COLUMN - Main Content */}
          <main className="p-6 lg:p-12">
            
            {/* STEP 1: Startup Info */}
            {currentStep === 1 && (
              <div className="max-w-2xl">
                
                {/* Header */}
                <div className="mb-8">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    Step 1 of 5
                  </div>
                  <h1 className="text-3xl lg:text-4xl text-gray-900 mb-3 tracking-tight">
                    Startup Info
                  </h1>
                  <p className="text-gray-600">
                    Tell us about your startup so we can customize your pitch deck.
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  
                  {/* Startup Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Startup Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={startupName}
                      onChange={(e) => setStartupName(e.target.value)}
                      placeholder="e.g., Acme AI"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* One-liner */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      One-liner <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        value={oneLiner}
                        onChange={(e) => setOneLiner(e.target.value)}
                        placeholder="e.g., AI-powered customer support automation for B2B SaaS companies"
                        rows={3}
                        maxLength={120}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all resize-none"
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {oneLiner.length}/120
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Keep it under 120 characters
                    </p>
                  </div>

                  {/* Founding Stage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Founding Stage <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all"
                    >
                      <option value="">Select stage...</option>
                      <option value="pre-seed">Pre-Seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B+</option>
                    </select>
                  </div>

                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    onClick={handleContinue}
                    disabled={!canContinue()}
                    className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      canContinue()
                        ? 'bg-[#0d5f4e] text-white hover:bg-[#0a4d3f] shadow-sm hover:shadow-md'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Continue</span>
                    <ArrowRight className={`w-5 h-5 transition-transform ${
                      canContinue() ? 'group-hover:translate-x-1' : ''
                    }`} />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 2: Industry Focus */}
            {currentStep === 2 && (
              <div className="max-w-2xl">
                
                {/* Header */}
                <div className="mb-8">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    Step 2 of 5
                  </div>
                  <h1 className="text-3xl lg:text-4xl text-gray-900 mb-3 tracking-tight">
                    {selectedIndustry ? `Industry Focus: ${currentIndustryContent?.title}` : 'Select Your Industry'}
                  </h1>
                  <p className="text-gray-600">
                    {selectedIndustry 
                      ? 'Answer industry-specific questions to tailor your pitch deck.'
                      : 'Choose your industry to get tailored questions and examples.'}
                  </p>
                </div>

                {/* Industry Selection (if not selected) */}
                {!selectedIndustry && (
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {industries.map((industry) => {
                      const Icon = industry.icon;
                      
                      return (
                        <button
                          key={industry.id}
                          onClick={() => handleIndustrySelect(industry.id)}
                          className="group p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all text-left hover:shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-gray-900">
                                {industry.label}
                              </h3>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Industry-Specific Questions (if selected) */}
                {selectedIndustry && currentIndustryContent && (
                  <div className="space-y-6">
                    
                    {/* Change Industry Button */}
                    <button
                      onClick={() => setSelectedIndustry(null)}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      ← Change industry
                    </button>

                    {/* Questions */}
                    {currentIndustryContent.questions.map((question) => (
                      <div key={question.id}>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          {question.label}
                        </label>
                        {question.type === 'textarea' ? (
                          <textarea
                            value={industryAnswers[question.id] || ''}
                            onChange={(e) => setIndustryAnswers({
                              ...industryAnswers,
                              [question.id]: e.target.value
                            })}
                            placeholder={question.placeholder}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all resize-none"
                          />
                        ) : (
                          <input
                            type="text"
                            value={industryAnswers[question.id] || ''}
                            onChange={(e) => setIndustryAnswers({
                              ...industryAnswers,
                              [question.id]: e.target.value
                            })}
                            placeholder={question.placeholder}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all"
                          />
                        )}
                      </div>
                    ))}

                    {/* Metrics */}
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-900 mb-4">
                        Key Metrics (Optional)
                      </h3>
                      <div className="space-y-4">
                        {currentIndustryContent.metrics.map((metric) => (
                          <div key={metric.id}>
                            <label className="block text-sm text-gray-700 mb-1">
                              {metric.label}
                            </label>
                            <input
                              type="text"
                              value={industryMetrics[metric.id] || ''}
                              onChange={(e) => setIndustryMetrics({
                                ...industryMetrics,
                                [metric.id]: e.target.value
                              })}
                              placeholder={metric.placeholder}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    onClick={handleContinue}
                    disabled={!canContinue()}
                    className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      canContinue()
                        ? 'bg-[#0d5f4e] text-white hover:bg-[#0a4d3f] shadow-sm hover:shadow-md'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Continue</span>
                    <ArrowRight className={`w-5 h-5 transition-transform ${
                      canContinue() ? 'group-hover:translate-x-1' : ''
                    }`} />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 3, 4, 5 - Placeholders */}
            {currentStep > 2 && (
              <div className="max-w-2xl">
                <div className="mb-8">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    Step {currentStep} of 5
                  </div>
                  <h1 className="text-3xl lg:text-4xl text-gray-900 mb-3 tracking-tight">
                    {getStepLabel(currentStep)}
                  </h1>
                  <p className="text-gray-600">
                    Content for {getStepLabel(currentStep)} coming soon.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  {currentStep < 5 && (
                    <button
                      onClick={handleContinue}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-[#0d5f4e] text-white hover:bg-[#0a4d3f] shadow-sm hover:shadow-md transition-all"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            )}

          </main>

          {/* RIGHT COLUMN - AI Suggestions */}
          <aside className="hidden lg:block bg-white border-l border-gray-200 p-6">
            
            {/* AI Insights Card */}
            {currentStep === 2 && selectedIndustry && currentIndustryContent && (
              <div className="space-y-6">
                
                {/* AI Insights */}
                <div className="p-4 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        AI Insights
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {currentIndustryContent.aiInsight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    AI Suggestions
                  </h3>
                  <div className="space-y-2">
                    {currentIndustryContent.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-3 py-2 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                      >
                        <Sparkles className="w-3 h-3 inline-block mr-2 text-[#0d5f4e]" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Validation Checklist */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Checklist
                  </h3>
                  <div className="space-y-2">
                    {currentIndustryContent.questions.map((question) => {
                      const isAnswered = industryAnswers[question.id];
                      return (
                        <div key={question.id} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded flex items-center justify-center ${
                            isAnswered ? 'bg-green-500' : 'bg-gray-200'
                          }`}>
                            {isAnswered && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-xs ${
                            isAnswered ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {question.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-medium text-gray-900 mb-1">
                        Pro Tip
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {currentIndustryContent.proTip}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Default AI Panel for Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        Getting Started
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We'll use your startup info to customize every slide with relevant examples and investor-focused language.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-medium text-gray-900 mb-1">
                        Pro Tip
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Your one-liner should answer: What do you do, for whom, and why does it matter?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </aside>

        </div>
      </div>

    </div>
  );
}
