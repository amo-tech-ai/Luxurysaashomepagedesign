'use client';

import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { Step1CompanyContext } from './steps/Step1CompanyContext';
import { Step2AIAnalysis } from './steps/Step2AIAnalysis';
import { Step3SmartInterview } from './steps/Step3SmartInterview';
import { Step4ReviewSummary } from './steps/Step4ReviewSummary';
import { Step5ActionSetup } from './steps/Step5ActionSetup';

const STEPS = [
  { number: 1, title: 'Company', subtitle: 'Basic info' },
  { number: 2, title: 'Analysis', subtitle: 'AI insights' },
  { number: 3, title: 'Interview', subtitle: 'Quick questions' },
  { number: 4, title: 'Summary', subtitle: 'Your roadmap' },
  { number: 5, title: 'Setup', subtitle: 'Action plan' },
];

interface OnboardingWizardProps {
  onComplete?: () => void;
  onNavigate?: (route: string) => void;
}

export function OnboardingWizard({ onComplete, onNavigate }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [companyData, setCompanyData] = useState({
    name: '',
    website: '',
    industry: '',
    stage: '',
    teamSize: '',
  });
  const [interviewAnswers, setInterviewAnswers] = useState<Record<number, string>>({});

  const handleNext = () => {
    if (currentStep < 5) {
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

  const handleFinish = () => {
    onComplete?.();
  };

  const handleGoToDashboard = () => {
    onNavigate?.('dashboard-main');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#FAFAF8] to-[#F5F5F3]">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} steps={STEPS} />

      {/* Step Content */}
      <div className="px-8 py-12">
        {currentStep === 1 && (
          <Step1CompanyContext
            data={companyData}
            onUpdate={setCompanyData}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <Step2AIAnalysis
            companyName={companyData.name}
            industry={companyData.industry}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && (
          <Step3SmartInterview
            onNext={handleNext}
            onBack={handleBack}
            onAnswersUpdate={setInterviewAnswers}
          />
        )}

        {currentStep === 4 && (
          <Step4ReviewSummary
            companyName={companyData.name}
            industry={companyData.industry}
            stage={companyData.stage}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {currentStep === 5 && (
          <Step5ActionSetup
            companyName={companyData.name}
            onFinish={handleFinish}
            onGoToDashboard={handleGoToDashboard}
          />
        )}
      </div>
    </div>
  );
}
