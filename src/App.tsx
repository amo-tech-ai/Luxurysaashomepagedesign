import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InsightStatement } from './components/InsightStatement';
import { ValuePillars } from './components/ValuePillars';
import { GuidedFlow } from './components/GuidedFlow';
import { SingleSource } from './components/SingleSource';
import { DashboardPreview } from './components/DashboardPreview';
import { Outcomes } from './components/Outcomes';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <InsightStatement />
      <ValuePillars />
      <GuidedFlow />
      <SingleSource />
      <DashboardPreview />
      <Outcomes />
      <FinalCTA />
      <Footer />
    </div>
  );
}