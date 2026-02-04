import { OnboardingAnimation } from '@/components/OnboardingAnimation';

export default function OnboardingAnimationDemoPage() {
  const handleComplete = () => {
    console.log('Animation completed!');
    // In production, navigate to the actual onboarding wizard
  };

  return <OnboardingAnimation onComplete={handleComplete} autoStart={true} />;
}
