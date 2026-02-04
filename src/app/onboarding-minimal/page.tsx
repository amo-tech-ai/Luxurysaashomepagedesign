import { MinimalOnboarding } from '@/components/MinimalOnboarding';

export default function OnboardingMinimalPage({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const handleStart = () => {
    // Navigate to onboarding wizard or dashboard
    onNavigate?.('onboarding-v2');
  };

  return (
    <MinimalOnboarding 
      onStart={handleStart}
      autoAdvance={true}
      autoAdvanceDelay={3000}
    />
  );
}
