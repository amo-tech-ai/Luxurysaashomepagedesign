'use client';

import React, { useState } from 'react';
import { Stepper } from './Stepper';
import { ProgressIndicator } from './ProgressIndicator';
import { AIAssistantPanel } from './AIAssistantPanel';
import { Step1ContextEnrichment } from './Step1ContextEnrichment';
import { Step2AIAnalysis } from './Step2AIAnalysis';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  { number: 1, label: 'Context' },
  { number: 2, label: 'AI Analysis' },
  { number: 3, label: 'Smart Q&A' },
  { number: 4, label: 'Review' },
];

const STEP_LABELS = ['Context & Enrichment', 'AI Analysis', 'Smart Q&A', 'Review & Launch'];

interface OnboardingWizardV2Props {
  onComplete?: () => void;
  onNavigate?: (route: string) => void;
}

export function OnboardingWizardV2({ onComplete, onNavigate }: OnboardingWizardV2Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    description: '',
    targetMarket: '',
    industryDropdown: '',
    subCategory: '',
    websiteUrl: '',
    linkedinUrl: '',
    additionalUrls: [] as string[],
    industry: [] as string[],
    businessModel: [] as string[],
    stage: '',
  });

  // Step 2 AI Analysis data
  const [step2Data, setStep2Data] = useState({
    summary: 'FashionOS is an AI-powered operating system for fashion brands and events that turns complex planning, content creation, and collaboration into bite-fast, structured workflows—helping designers, organizers, and teams go from idea to execution faster than manual methods and silos.',
    sourceTags: ['Search Grounded', 'URL Context Extracted', 'AI'],
    founder: {
      name: 'Sanjib Khullar',
      role: 'Co-Founder',
      expertise: ['Founder-Market Fit: High', 'Domain Expertise: High'],
      experience: [
        { company: 'Adobe', role: 'Product Lead' },
        { company: 'Figma', role: 'Senior PM' },
      ],
      education: 'Stanford University, BS Computer Science',
    },
    websiteInsights: {
      valueProposition: 'Click to add value proposition...',
      keyFeatures: [
        'AI-powered workflow automation',
        'Real-time collaboration tools',
        'Photography & video management',
        'Structured planning system',
      ],
      targetAudience: 'Fashion designers, retail brands, and media event organizers',
      detectedPhrases: [
        'Collaborate anytime',
        'Brand consistency on scale',
        'Enterprise-grade security',
      ],
    },
    marketIntelligence: {
      trends: [
        'B2B Vertical-Specific Automation is in (SaaS)',
        'Consolidation of market tools (all-in-one)',
        'Rise of AI-assisted collaboration in creative industries',
      ],
      marketLabels: ['Creative Operations', 'SaaS', 'Generative AI', 'Enterprise Collaboration'],
      competitors: [],
    },
    detectedSignals: {
      industry: 'Marketplace',
      stage: 'Idea',
      messagingStyle: 'Care & Value-Focused',
      coreProblem: 'Fragmented creative workflows',
      solutionTheme: 'Unified AI-native workspace',
      competitionDensity: 'High',
      trendAlignment: 'Strong (Catch Wave)',
    },
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] relative overflow-hidden">
      {/* Back to Home Link */}
      <div className="bg-white border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#0D5F4E] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <Home className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Top Stepper */}
      <Stepper currentStep={currentStep} steps={STEPS} />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left: Progress Indicator */}
          <div className="col-span-12 lg:col-span-2 hidden lg:block">
            <div className="sticky top-32">
              <ProgressIndicator
                currentStep={currentStep}
                totalSteps={4}
                stepLabels={STEP_LABELS}
              />
            </div>
          </div>

          {/* Center: Main Form */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-white border border-[#E8E6E1] rounded-xl p-8 lg:p-10 shadow-sm">
              {currentStep === 1 && (
                <Step1ContextEnrichment
                  data={formData}
                  onUpdate={setFormData}
                  onNext={handleNext}
                />
              )}

              {currentStep === 2 && (
                <Step2AIAnalysis
                  companyName={formData.companyName || 'FashionOS'}
                  data={step2Data}
                  onUpdate={setStep2Data}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {/* Placeholder for other steps */}
              {currentStep > 2 && (
                <div className="text-center py-20">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{currentStep}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#2D2D2D] mb-3">
                    Step {currentStep} Coming Soon
                  </h2>
                  <p className="text-[#4A4A4A] mb-6">This step is under construction</p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 border border-[#E8E6E1] text-[#4A4A4A] rounded-lg font-medium hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-colors"
                    >
                      ← Back
                    </button>
                    {currentStep < 4 && (
                      <button
                        onClick={handleNext}
                        className="px-6 py-3 bg-[#0D5F4E] text-white rounded-lg font-medium hover:bg-[#0a4a3c] transition-colors"
                      >
                        Continue →
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: AI Assistant Panel */}
          <div className="col-span-12 lg:col-span-4">
            {currentStep === 1 && (
              <AIAssistantPanel
                agentName="Context Specialist"
                capabilities={[
                  'Analyze your website and LinkedIn',
                  'Research market using Google Search',
                  'Extract features, audience, pricing',
                  'Find real competitors & trends',
                  'Combine with your description',
                  'Autofill profile fields',
                ]}
              />
            )}

            {currentStep === 2 && (
              <AIAssistantPanel
                agentName="Market Analyst"
                confidenceScore={60}
                sourcesAnalyzed={[
                  { type: 'Signal Extracted', count: 12 },
                  { type: 'Grounding', count: 4 },
                  { type: 'Active', count: 1 },
                ]}
                primaryStrengths={[
                  'Strong founder fit: proven track record at Adobe and Figma',
                  'Deep domain expertise: growth marketing skills in GARTNER include UX etc',
                ]}
                primaryRisks={[
                  'Competitor density is in moderate-to-crowded range: Asana, Monday, and integrations is defendable',
                  'Market trends favor all-in-one solutions: differentiation unclear at this phase',
                  'Help competitor density is SMART/simple UX etc',
                ]}
                recommendedActions={[
                  { action: 'Validate Founder Details', completed: false },
                  { action: 'Confirm Competitors', completed: false },
                  { action: 'Review Pricing', completed: false },
                ]}
                showReadyPrompt={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}