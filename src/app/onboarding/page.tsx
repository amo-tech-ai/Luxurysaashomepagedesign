import React from 'react';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';

export const metadata = {
  title: 'Onboarding - StartupAI',
  description: 'Get started with your AI-powered startup operating system',
};

export default function OnboardingPage({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return <OnboardingWizard onNavigate={onNavigate} />;
}
