import { useState, useEffect } from 'react';
import { AIChatbot } from './components/ai-chatbot/AIChatbot';
import { NavigationBar } from './components/navigation/NavigationBar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InsightStatement } from './components/InsightStatement';
import { Features } from './components/Features';
import { StartupSystem } from './components/StartupSystem';
import { ValuePillars } from './components/ValuePillars';
import { GuidedFlow } from './components/GuidedFlow';
import { SingleSource } from './components/SingleSource';
import { Outcomes } from './components/Outcomes';
import { PitchDeckSection } from './components/PitchDeckSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import EventsPage from './app/events/page';
import EventDetailPage from './app/events/detail/page';
import HowItWorksPage from './how-it-works/page';
import HowItWorksPitchPage from './app/how-it-works-pitch/page';
import HowPitchWorksPage from './app/how-pitch-works/page';
import HowItWorksV2Page from './app/how-it-works-v2/page';
import HowItWorksV3Page from './app/how-it-works-v3/page';
import AILandscapePage from './app/ai-landscape/page';
import AIAdoption2025Page from './app/infographics/ai-adoption-2025/page';
import AIIndustryAdoptionPage from './app/infographics/ai-industry-adoption/page';
import AIJobsFutureWorkPage from './app/infographics/ai-jobs-future-work/page';
import AIJobsV2Page from './app/infographics/ai-jobs-v2/page';
import AIHubsPage from './app/infographics/ai-hubs/page';
import AIProductsPage from './app/infographics/ai-products/page';
import AIProductsV2Page from './app/infographics/ai-products-v2/page';
import PitchDeckPage from './app/pitch-deck/page';
import PitchDeckEditorPage from './app/pitch-deck/editor/page';
import PitchDeckDashboardPage from './app/pitch-deck/dashboard/page';
import AIChatbotDemoPage from './app/ai-chatbot-demo/page';
import PitchDeckWizardPage from './app/pitch-deck-wizard/page';
import PitchDeckAIDemoPage from './app/pitch-deck/ai-suggestions-demo/page';
import PitchDeckAIEnhancedPage from './app/pitch-deck/ai-suggestions-enhanced-demo/page';
import PitchDeckV2Page from './app/pitch-deck/page-v2';
import DashboardPage from './app/dashboard/page';
import DashboardV2Page from './app/dashboard-v2/page';
import DashboardMainPage from './app/dashboard/main/page';
import RoadmapPage from './app/dashboard/roadmap/page';
import LeanCanvasPage from './app/lean-canvas/page';
import LeanCanvasAIPage from './app/lean-canvas-ai/page';
import SitemapPage from './app/sitemap/page';
import IdeationPage from './app/dashboard/ideation/page';
import OnboardingPage from './app/onboarding/page';
import OnboardingV2Page from './app/onboarding-v2/page';
import StartupValidatorPage from './app/startup-validator/page';
import StartupValidatorV2Page from './app/startup-validator-v2/page';
import StartupValidatorV3Page from './app/startup-validator-v3/page';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'onboarding' | 'onboarding-v2' | 'sitemap' | 'dashboard' | 'dashboard-v2' | 'dashboard-main' | 'dashboard-roadmap' | 'dashboard-ideation' | 'lean-canvas' | 'lean-canvas-ai' | 'events' | 'event-detail' | 'how-it-works' | 'how-it-works-pitch' | 'how-pitch-works' | 'how-it-works-v2' | 'how-it-works-v3' | 'ai-landscape' | 'ai-adoption-2025' | 'ai-industry-adoption' | 'ai-jobs-future-work' | 'ai-jobs-v2' | 'pitch-deck' | 'pitch-deck-v2' | 'pitch-deck-editor' | 'pitch-deck-dashboard' | 'ai-chatbot-demo' | 'pitch-deck-wizard' | 'pitch-deck-ai-demo' | 'pitch-deck-ai-enhanced' | 'ai-hubs' | 'ai-products' | 'ai-products-v2' | 'startup-validator' | 'startup-validator-v2' | 'startup-validator-v3'>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Listen for navigation events from Events page
    const handleNavigationEvent = (event: Event) => {
      const customEvent = event as CustomEvent;
      handleNavigate(customEvent.detail);
    };

    window.addEventListener('navigate', handleNavigationEvent);
    return () => window.removeEventListener('navigate', handleNavigationEvent);
  }, []);

  // Simple client-side routing
  if (currentPage === 'dashboard') {
    return <DashboardPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboard-v2') {
    return <DashboardV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboard-main') {
    return <DashboardMainPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboard-roadmap') {
    return <RoadmapPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboard-ideation') {
    return <IdeationPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'lean-canvas') {
    return <LeanCanvasPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'lean-canvas-ai') {
    return <LeanCanvasAIPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'events') {
    return <EventsPage />;
  }

  if (currentPage === 'event-detail') {
    return <EventDetailPage />;
  }

  if (currentPage === 'how-it-works') {
    return <HowItWorksPage />;
  }

  if (currentPage === 'how-it-works-pitch') {
    return <HowItWorksPitchPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'how-pitch-works') {
    return <HowPitchWorksPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'how-it-works-v2') {
    return <HowItWorksV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'how-it-works-v3') {
    return <HowItWorksV3Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'ai-landscape') {
    return <AILandscapePage />;
  }

  if (currentPage === 'ai-adoption-2025') {
    return <AIAdoption2025Page />;
  }

  if (currentPage === 'ai-industry-adoption') {
    return <AIIndustryAdoptionPage />;
  }

  if (currentPage === 'ai-jobs-future-work') {
    return <AIJobsFutureWorkPage />;
  }

  if (currentPage === 'ai-jobs-v2') {
    return <AIJobsV2Page />;
  }

  if (currentPage === 'pitch-deck') {
    return <PitchDeckPage />;
  }

  if (currentPage === 'pitch-deck-v2') {
    return <PitchDeckV2Page />;
  }

  if (currentPage === 'pitch-deck-editor') {
    return <PitchDeckEditorPage />;
  }

  if (currentPage === 'pitch-deck-dashboard') {
    return <PitchDeckDashboardPage />;
  }

  if (currentPage === 'ai-chatbot-demo') {
    return <AIChatbotDemoPage />;
  }

  if (currentPage === 'pitch-deck-wizard') {
    return <PitchDeckWizardPage />;
  }

  if (currentPage === 'pitch-deck-ai-demo') {
    return <PitchDeckAIDemoPage />;
  }

  if (currentPage === 'pitch-deck-ai-enhanced') {
    return <PitchDeckAIEnhancedPage />;
  }

  if (currentPage === 'ai-hubs') {
    return <AIHubsPage />;
  }

  if (currentPage === 'ai-products') {
    return <AIProductsPage />;
  }

  if (currentPage === 'ai-products-v2') {
    return <AIProductsV2Page />;
  }

  if (currentPage === 'sitemap') {
    return <SitemapPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'onboarding') {
    return <OnboardingPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'onboarding-v2') {
    return <OnboardingV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'startup-validator') {
    return <StartupValidatorPage />;
  }

  if (currentPage === 'startup-validator-v2') {
    return <StartupValidatorV2Page />;
  }

  if (currentPage === 'startup-validator-v3') {
    return <StartupValidatorV3Page />;
  }

  return (
    <div className="min-h-screen">
      <NavigationBar onNavigate={handleNavigate} currentPage={currentPage} />
      <Hero />
      <HowItWorks />
      <InsightStatement />
      <Features />
      <StartupSystem />
      <ValuePillars />
      <GuidedFlow />
      <SingleSource />
      <Outcomes />
      <PitchDeckSection onNavigate={handleNavigate} />
      <FinalCTA onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
      
      {/* AI Chatbot - Available on all pages */}
      <AIChatbot 
        currentContext="dashboard"
        startupStage="validation"
        onActionApply={(actionId) => {
          console.log('Action applied:', actionId);
        }}
      />
    </div>
  );
}