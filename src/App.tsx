import { useState, useEffect } from 'react';

// Page imports
import DashboardPage from './app/dashboard/page';
import DashboardV2Page from './app/dashboard-v2/page';
import DashboardMainPage from './app/dashboard/main/page';
import RoadmapPage from './app/dashboard/roadmap/page';
import IdeationPage from './app/dashboard/ideation/page';
import FounderDashboardV2Page from './app/founder-dashboard-v2/page';
import KanbanPage from './app/kanban/page';
import TasksPage from './app/tasks/page';
import InvestorStrategyPage from './app/investor-strategy/page';
import CRMPage from './app/crm/page';
import ReportsPage from './app/reports/page';
import DataRoomPage from './app/data-room/page';
import WorkspacePage from './app/workspace/page';
import ValidationCanvasPage from './app/validate/canvas/page';
import ValuePropositionPage from './app/value-proposition/page';
import ImmersiveExperienceCanvasPage from './app/immersive-experience-canvas/page';
import AIReadinessCanvasPage from './app/ai-readiness-canvas/page';
import GanttPage from './app/gantt/page';
import LeanCanvasPage from './app/lean-canvas/page';
import LeanCanvasAIPage from './app/lean-canvas-ai/page';
import LeanCanvasV2Page from './app/lean-canvas-v2/page';
import LeanCanvasV4Page from './app/lean-canvas-v4/page';
import OpportunityCanvasPage from './app/opportunity-canvas/page';
import NineDayPlanPage from './app/90-day-plan/page';
import EventsPage from './app/events/page';
import EventDetailPage from './app/events/detail/page';
import EventsDiscoverPage from './app/events/discover/page';
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
import PitchDeckPage from './app/pitch-deck/page';
import PitchDeckV2Page from './app/pitch-deck/page-v2';
import PitchDeckEditorPage from './app/pitch-deck/editor/page';
import PitchDeckDashboardPage from './app/pitch-deck/dashboard/page';
import AIChatbotDemoPage from './app/ai-chatbot-demo/page';
import PitchDeckWizardPage from './app/pitch-deck-wizard/page';
import PitchDeckAIDemoPage from './app/pitch-deck/ai-suggestions-demo/page';
import PitchDeckAIEnhancedPage from './app/pitch-deck/ai-suggestions-enhanced-demo/page';
import AIHubsPage from './app/infographics/ai-hubs/page';
import AIProductsPage from './app/infographics/ai-products/page';
import AIProductsV2Page from './app/infographics/ai-products-v2/page';
import AIProductsV3Page from './app/infographics/ai-products-v3/page';
import AIGTMPage from './app/infographics/ai-gtm/page';
import AIStartupLandscapePage from './app/infographics/ai-startup-landscape/page';
import SitemapPage from './app/sitemap/page';
import OnboardingPage from './app/onboarding/page';
import OnboardingV2Page from './app/onboarding-v2/page';
import OnboardingV3Page from './app/onboarding-v3/page';
import OnboardingAnimationDemoPage from './app/onboarding-animation-demo/page';
import OnboardingMinimalPage from './app/onboarding-minimal/page';
import StartupValidatorPage from './app/startup-validator/page';
import StartupValidatorV2Page from './app/startup-validator-v2/page';
import StartupValidatorV3Page from './app/startup-validator-v3/page';
import StartupValidatorV4Page from './app/startup-validator-v4/page';
import ValidatorChatPage from './app/validator-chat/page';
import ValidatorPage from './app/validator/page';
import ValidatorV2Page from './app/validator-v2/page';
import ValidatorV3Page from './app/validator-v3/page';
import ValidatorRunPage from './app/validator/run/[sessionId]/page';
import ValidatorReportPage from './app/validator/report/[reportId]/page';
import ValidatorReportDemoPage from './app/validator-report/page';
import ValidatorTestPage from './app/validator-test/page';
import VisualValidatorReport from './app/validator/report/visual/page';
import VisualValidatorReportV2 from './app/validator/report/visual-v2/page';
import RunningAgentsPage from './app/running-agents/page';
import SmartInterviewPage from './app/smart-interview/page';
import HomeV5Page from './app/home-v5/page';
import HomeV6Page from './pages/home-v6';
import HomeV7Page from './app/home-v7/page';
import HomeV8Page from './app/home-v8/page';
import FlowDiagramsPage from './app/diagrams/flows/page';
import AIFlowsPage from './app/diagrams/ai-flows/page';
import AIImpactPlannerPage from './app/ai-impact-planner/page';
import AIImpactResultsPage from './app/ai-impact-planner/results/page';
import AIImpactActionPage from './app/ai-impact-planner/action/page';
import AskTrendsPage from './app/ai-impact-planner/ask/page';
import ChatIntakePage from './app/chat-intake/page';
import StartupProfilePage from './app/startup-profile/page';
import MarketResearchHubPage from './app/market-research-hub/page';
import IdeaWallPage from './app/idea-wall/page';
import StoryMapPage from './app/story-map/page';
import ExperimentsLabPage from './app/experiments-lab/page';
import StyleGuidePage from './app/style-guide/page';
import StrategySystemDemoPage from './app/strategy-system-demo/page';
import ServiceGridPage from './app/service-grid/page';
import StateFashion2026Page from './app/state-of-fashion-2026/page';
import Fashion2026V3Page from './app/infographics/fashion-2026-v3/page';
import Fashion2026V4Page from './app/fashion-2026-v4/page';
import Fashion2026EnhancedPage from './app/fashion-2026-enhanced/page';
import Fashion2026EnhancedV6Page from './app/fashion-2026-enhanced-v6/page';
import Fashion2026V8Page from './app/fashion-2026v8/page';
import BCGAIIndustryPage from './app/infographics/bcg-ai-industry/page';
import AIIndustryUseCasesPage from './app/ai-industry-use-cases/page';
import AISuperpowersPage from './app/ai-superpowers/page';
import UseCasesV2Page from './app/use-cases-v2/page';
import GlobalAIReportV3Page from './app/global-ai-report-v3/page';
import GlobalAIRacePage from './app/global-ai-race/page';
import AISkillsPage from './app/ai-skills/page';
import ConsumerIntelligencePage from './app/consumer-intelligence/page';
import SoftwareAIOutlook2026Page from './app/software-ai-outlook-2026/page';
import McKinseyTechTrends2025Page from './app/mckinsey-tech-trends-2025/page';
import McKinseyTechTrends2025LuxuryPage from './app/mckinsey-tech-trends-2025-luxury/page';
import AIAgentsVisualGuidePage from './app/ai-agents-visual-guide/page';

// Components for home-v1
import { NavigationBar } from './components/navigation';
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
import { AIChatbot } from './components/ai-chatbot/AIChatbot';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'home-v1' | 'home-v5' | 'home-v6' | 'home-v7' | 'home-v8' | 'onboarding' | 'onboarding-v2' | 'onboarding-animation-demo' | 'onboarding-minimal' | 'onboarding-v3' | 'smart-interview' | 'sitemap' | 'dashboard' | 'dashboard-v2' | 'dashboard-main' | 'dashboard-roadmap' | 'dashboard-ideation' | 'founder-dashboard-v2' | 'dashboardv2' | 'kanban' | 'tasks' | 'investor-strategy' | 'crm' | 'reports' | 'data-room' | 'workspace' | 'validate-canvas' | 'value-proposition' | 'immersive-experience-canvas' | 'ai-readiness-canvas' | 'gantt' | 'lean-canvas' | 'lean-canvas-ai' | 'lean-canvas-v2' | 'lean-canvas-v4' | 'opportunity-canvas' | '90-day-plan' | 'events' | 'event-detail' | 'events-discover' | 'how-it-works' | 'how-it-works-pitch' | 'how-pitch-works' | 'how-it-works-v2' | 'how-it-works-v3' | 'ai-landscape' | 'ai-adoption-2025' | 'ai-industry-adoption' | 'ai-jobs-future-work' | 'ai-jobs-v2' | 'pitch-deck' | 'pitch-deck-v2' | 'pitch-deck-editor' | 'pitch-deck-dashboard' | 'ai-chatbot-demo' | 'pitch-deck-wizard' | 'pitch-deck-ai-demo' | 'pitch-deck-ai-enhanced' | 'ai-hubs' | 'ai-products' | 'ai-products-v2' | 'ai-products-v3' | 'ai-gtm' | 'ai-startup-landscape' | 'startup-validator' | 'startup-validator-v2' | 'startup-validator-v3' | 'startup-validator-v4' | 'validator-chat' | 'validator' | 'validator-v2' | 'validator-v3' | 'validator-run' | 'validator-report' | 'validator-test' | 'running-agents' | 'diagrams-flows' | 'diagrams-ai-flows' | 'ai-impact-planner' | 'ai-impact-results' | 'ai-impact-action' | 'ask-trends' | 'chat-intake' | 'startup-profile' | 'market-research-hub' | 'idea-wall' | 'story-map' | 'experiments-lab' | 'style-guide' | 'strategy-system-demo' | 'bcg-ai-consumer' | 'ai-industry-use-cases' | 'ai-superpowers' | 'use-cases-v2' | 'global-ai-report-v3' | 'global-ai-race' | 'ai-skills' | 'consumer-intelligence' | 'software-ai-outlook-2026' | 'mckinsey-tech-trends-2025' | 'mckinsey-tech-trends-2025-luxury' | 'ai-agents-visual-guide' | 'state-of-fashion-2026' | 'fashion-2026' | 'fashion-2026-v3' | 'bcg-ai-industry' | 'service-grid'>(() => {
    // Initialize from URL on first load
    const path = window.location.pathname;
    if (path === '/' || path === '') return 'home-v8';
    // Remove leading slash and convert to page name
    const pageName = path.slice(1);
    return pageName as any || 'home-v8';
  });
  const [routeParams, setRouteParams] = useState<Record<string, string>>({});

  const handleNavigate = (page: string) => {
    // Parse dynamic routes like "validator/run/:sessionId"
    const parts = page.split('/');
    if (parts[0] === 'validator' && parts[1] === 'run' && parts[2]) {
      setCurrentPage('validator-run');
      setRouteParams({ sessionId: parts[2] });
      window.history.pushState({}, '', `/validator/run/${parts[2]}`);
    } else if (parts[0] === 'validator' && parts[1] === 'report' && parts[2]) {
      setCurrentPage('validator-report');
      setRouteParams({ reportId: parts[2] });
      window.history.pushState({}, '', `/validator/report/${parts[2]}`);
    } else {
      setCurrentPage(page as any);
      setRouteParams({});
      // Update URL to match the page
      const urlPath = page === 'home' || page === 'home-v1' ? '/' : `/${page}`;
      window.history.pushState({}, '', urlPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Listen for navigation events from Events page
    const handleNavigationEvent = (event: Event) => {
      const customEvent = event as CustomEvent;
      handleNavigate(customEvent.detail);
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentPage('home-v8');
      } else {
        const pageName = path.slice(1);
        setCurrentPage(pageName as any);
      }
    };

    window.addEventListener('navigate', handleNavigationEvent);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('navigate', handleNavigationEvent);
      window.removeEventListener('popstate', handlePopState);
    };
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

  if (currentPage === 'founder-dashboard-v2') {
    return <FounderDashboardV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboardv2') {
    return <DashboardV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'kanban') {
    return <KanbanPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'tasks') {
    return <TasksPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'investor-strategy') {
    return <InvestorStrategyPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'crm') {
    return <CRMPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'reports') {
    return <ReportsPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'data-room') {
    return <DataRoomPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'workspace') {
    return <WorkspacePage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validate-canvas') {
    return <ValidationCanvasPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'value-proposition') {
    return <ValuePropositionPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'immersive-experience-canvas') {
    return <ImmersiveExperienceCanvasPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'ai-readiness-canvas') {
    return <AIReadinessCanvasPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'gantt') {
    return <GanttPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'lean-canvas') {
    return <LeanCanvasPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'lean-canvas-ai') {
    return <LeanCanvasAIPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'lean-canvas-v2') {
    return <LeanCanvasV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'lean-canvas-v4') {
    return <LeanCanvasV4Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'opportunity-canvas') {
    return <OpportunityCanvasPage onNavigate={handleNavigate} />;
  }

  if (currentPage === '90-day-plan') {
    return <NineDayPlanPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'events') {
    return <EventsPage />;
  }

  if (currentPage === 'event-detail') {
    return <EventDetailPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'events-discover') {
    return <EventsDiscoverPage onNavigate={handleNavigate} />;
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

  if (currentPage === 'ai-products-v3') {
    return <AIProductsV3Page />;
  }

  if (currentPage === 'ai-gtm') {
    return <AIGTMPage />;
  }

  if (currentPage === 'ai-startup-landscape') {
    return <AIStartupLandscapePage onNavigate={handleNavigate} />;
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

  if (currentPage === 'onboarding-v3') {
    return <OnboardingV3Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'onboarding-animation-demo') {
    return <OnboardingAnimationDemoPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'onboarding-minimal') {
    return <OnboardingMinimalPage onNavigate={handleNavigate} />;
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

  if (currentPage === 'startup-validator-v4') {
    return <StartupValidatorV4Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validator-chat') {
    return <ValidatorChatPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validator') {
    return <ValidatorPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validator-v2') {
    return <ValidatorV2Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validator-v3') {
    return <ValidatorV3Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validator-run') {
    return <ValidatorRunPage onNavigate={handleNavigate} sessionId={routeParams.sessionId} />;
  }

  if (currentPage === 'validator-report') {
    return <ValidatorReportPage onNavigate={handleNavigate} reportId={routeParams.reportId} />;
  }

  // Visual validator report
  if (currentPage === 'validator-report-visual') {
    return <VisualValidatorReport onNavigate={handleNavigate} reportId={routeParams.reportId} />;
  }

  // Visual validator report v2
  if (currentPage === 'validator-report-visual-v2') {
    return <VisualValidatorReportV2 onNavigate={handleNavigate} reportId={routeParams.reportId} />;
  }

  // BCG AI Consumer Infographic
  if (currentPage === 'bcg-ai-consumer') {
    return <BCGAIIndustryPage onNavigate={handleNavigate} />;
  }

  // BCG AI Industry Infographic  
  if (currentPage === 'bcg-ai-industry') {
    return <BCGAIIndustryPage onNavigate={handleNavigate} />;
  }

  // Static demo validator report page
  if (currentPage === 'validator-report' && !routeParams.reportId) {
    return <ValidatorReportDemoPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'validator-test') {
    return <ValidatorTestPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'running-agents') {
    return <RunningAgentsPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'smart-interview') {
    return <SmartInterviewPage />;
  }

  if (currentPage === 'home-v5') {
    return <HomeV5Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'home-v6') {
    return <HomeV6Page />;
  }

  if (currentPage === 'home-v7') {
    return <HomeV7Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'home-v8') {
    return <HomeV8Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'diagrams-flows') {
    return <FlowDiagramsPage />;
  }

  if (currentPage === 'diagrams-ai-flows') {
    return <AIFlowsPage />;
  }

  if (currentPage === 'ai-impact-planner') {
    return <AIImpactPlannerPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'ai-impact-results') {
    return <AIImpactResultsPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'ai-impact-action') {
    return <AIImpactActionPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'ask-trends') {
    return <AskTrendsPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'chat-intake') {
    return <ChatIntakePage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'startup-profile') {
    return <StartupProfilePage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'market-research-hub') {
    return <MarketResearchHubPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'idea-wall') {
    return <IdeaWallPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'story-map') {
    return <StoryMapPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'experiments-lab') {
    return <ExperimentsLabPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'style-guide') {
    return <StyleGuidePage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'strategy-system-demo') {
    return <StrategySystemDemoPage onNavigate={handleNavigate} />;
  }

  // AI Industry Use Cases
  if (currentPage === 'ai-industry-use-cases') {
    return <AIIndustryUseCasesPage onNavigate={handleNavigate} />;
  }

  // Global AI Superpowers 2025
  if (currentPage === 'ai-superpowers') {
    return <AISuperpowersPage onNavigate={handleNavigate} />;
  }

  // AI Industry Use Cases V2
  if (currentPage === 'use-cases-v2') {
    return <UseCasesV2Page onNavigate={handleNavigate} />;
  }

  // Global AI Report V3
  if (currentPage === 'global-ai-report-v3') {
    return <GlobalAIReportV3Page onNavigate={handleNavigate} />;
  }

  // Global AI Race
  if (currentPage === 'global-ai-race') {
    return <GlobalAIRacePage onNavigate={handleNavigate} />;
  }

  // AI Skills
  if (currentPage === 'ai-skills') {
    return <AISkillsPage onNavigate={handleNavigate} />;
  }

  // Consumer Intelligence
  if (currentPage === 'consumer-intelligence') {
    return <ConsumerIntelligencePage onNavigate={handleNavigate} />;
  }

  // Software AI Outlook 2026
  if (currentPage === 'software-ai-outlook-2026') {
    return <SoftwareAIOutlook2026Page onNavigate={handleNavigate} />;
  }

  // McKinsey Tech Trends 2025
  if (currentPage === 'mckinsey-tech-trends-2025') {
    return <McKinseyTechTrends2025Page onNavigate={handleNavigate} />;
  }

  // McKinsey Tech Trends 2025 Luxury
  if (currentPage === 'mckinsey-tech-trends-2025-luxury') {
    return <McKinseyTechTrends2025LuxuryPage onNavigate={handleNavigate} />;
  }

  // AI Agents Visual Guide
  if (currentPage === 'ai-agents-visual-guide') {
    return <AIAgentsVisualGuidePage onNavigate={handleNavigate} />;
  }

  // State of Fashion 2026
  if (currentPage === 'state-of-fashion-2026') {
    return <StateFashion2026Page onNavigate={handleNavigate} />;
  }

  // Fashion 2026 (alias route)
  if (currentPage === 'fashion-2026') {
    return <StateFashion2026Page onNavigate={handleNavigate} />;
  }

  // Fashion 2026 V3 (alias route)
  if (currentPage === 'fashion-2026-v3') {
    return <Fashion2026V3Page onNavigate={handleNavigate} />;
  }

  // Fashion 2026 V4 (alias route)
  if (currentPage === 'fashion-2026-v4') {
    return <Fashion2026V4Page onNavigate={handleNavigate} />;
  }

  // Fashion 2026 Enhanced (alias route)
  if (currentPage === 'fashion-2026-enhanced') {
    return <Fashion2026EnhancedPage onNavigate={handleNavigate} />;
  }

  // Fashion 2026 Enhanced V6 (alias route)
  if (currentPage === 'fashion-2026-enhanced-v6') {
    return <Fashion2026EnhancedV6Page onNavigate={handleNavigate} />;
  }

  // Fashion 2026 V8
  if (currentPage === 'fashion-2026v8') {
    return <Fashion2026V8Page onNavigate={handleNavigate} />;
  }

  // Service Grid
  if (currentPage === 'service-grid') {
    return <ServiceGridPage onNavigate={handleNavigate} />;
  }

  // Route for original home (now called home-v1)
  if (currentPage === 'home-v1') {
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

  // Default home route now shows home-v8
  return <HomeV8Page onNavigate={handleNavigate} />;
}