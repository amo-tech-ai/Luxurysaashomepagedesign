import React from 'react';
import { OnboardingWizardV2 } from '@/components/onboarding-v2/OnboardingWizardV2';

export const metadata = {
  title: 'Onboarding - StartupAI',
  description: 'Context & Enrichment - AI-powered startup onboarding',
};

export default function OnboardingV2Page({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return <OnboardingWizardV2 onNavigate={onNavigate} />;
}
