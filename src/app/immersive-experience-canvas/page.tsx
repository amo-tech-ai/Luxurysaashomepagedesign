import { DashboardLayout } from '../../components/DashboardLayout';
import { ThreeStepsCard } from './components/ThreeStepsCard';
import { ImmersiveBarometerCard } from './components/ImmersiveBarometerCard';
import { ExperienceDimensionCard } from './components/ExperienceDimensionCard';
import { ImportActionsCard } from './components/ImportActionsCard';
import { CanvasSection } from './components/CanvasSection';
import { ValueDimensionsPanel } from './components/ValueDimensionsPanel';
import { ValueScoringCard } from './components/ValueScoringCard';
import { WeakDimensionsCard } from './components/WeakDimensionsCard';
import { SuggestionsCard } from './components/SuggestionsCard';
import { ImpactReportCard } from './components/ImpactReportCard';
import {
  SAMPLE_IMMERSIVE_CANVAS,
  SAMPLE_AI_SUGGESTIONS,
} from '../../data/immersive-experience-data';

interface ImmersiveExperienceCanvasPageProps {
  onNavigate?: (page: string) => void;
}

export default function ImmersiveExperienceCanvasPage({
  onNavigate,
}: ImmersiveExperienceCanvasPageProps) {
  const canvas = SAMPLE_IMMERSIVE_CANVAS;
  const suggestions = SAMPLE_AI_SUGGESTIONS;
  
  return (
    <DashboardLayout
      title="Immersive Experience Canvas"
      subtitle="Will your immersive experience (XR/AR/VR) use case pay off?"
      onNavigate={onNavigate}
      activeNav="immersive-experience-canvas"
    >
      <div className="flex h-full">
        {/* Left Panel - Context & Controls */}
        <aside className="w-[280px] bg-[#F5F3EF] border-r border-[#E8E6E1] p-6 overflow-y-auto">
          <div className="space-y-4">
            <ThreeStepsCard />
            <ImmersiveBarometerCard
              value={canvas.immersive_barometer.position}
            />
            <ExperienceDimensionCard
              type={canvas.experience_dimension.type}
              reach={canvas.experience_dimension.reach}
              lifecyclePhases={canvas.experience_dimension.lifecycle_phases}
            />
            <ImportActionsCard onNavigate={onNavigate} />
          </div>
        </aside>
        
        {/* Center - 12-Section Canvas */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-[1200px] mx-auto">
            {/* Title & Source */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-light text-[#0E3E1B]" style={{ fontFamily: 'Georgia, serif' }}>
                  Immersive Experience Canvas
                </h1>
                <span className="text-xs text-gray-500">
                  Deloitte Digital | XR/AR/VR
                </span>
              </div>
              <p className="text-gray-600">
                Evaluate your immersive use case across customer, brand, and business dimensions 
                to ensure it creates real value — not just follows trends.
              </p>
            </div>
            
            {/* 12-Section Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Row 1: Use Case Name & Description */}
              <CanvasSection
                number={1}
                title="Use Case Name"
                value={canvas.use_case_name}
                placeholder="Short identifier for your XR use case..."
              />
              <CanvasSection
                number={2}
                title="Use Case Description"
                value={canvas.use_case_description}
                placeholder="What should the immersive experience look like? What value does it create?"
              />
              
              {/* Row 2: To-Be-Journey (full width) */}
              <CanvasSection
                number={3}
                title="To-Be-Journey"
                value={canvas.to_be_journey}
                placeholder="How would the customer journey look? Where and how is the immersive experience integrated?"
                fullWidth
              />
              
              {/* Row 3: Customer Segments & Adoption */}
              <CanvasSection
                number={4}
                title="Customer Segments"
                value={canvas.customer_segments}
                placeholder="Target audience for this experience — new or existing customers?"
              />
              <CanvasSection
                number={5}
                title="Customer Adoption"
                value={canvas.customer_adoption}
                placeholder="Size of potential target audience. How many users can you reach?"
              />
              
              {/* Row 4: Technology Stack & Channels */}
              <CanvasSection
                number={6}
                title="Technology Stack"
                value={canvas.technology_stack}
                placeholder="Integration with current stack. New technologies/platforms required?"
              />
              <CanvasSection
                number={7}
                title="Channels & Devices"
                value={canvas.channels_devices}
                placeholder="How will customers access this? What devices are needed?"
              />
              
              {/* Row 5: Key Resources & Cost Structure */}
              <CanvasSection
                number={8}
                title="Key Resources"
                value={canvas.key_resources}
                placeholder="Internal and external resources required to build and maintain..."
              />
              <CanvasSection
                number={9}
                title="Cost Structure"
                value={canvas.cost_structure}
                placeholder="Ongoing and one-off costs. Development, hardware, maintenance..."
              />
              
              {/* Row 6: Revenue Generation & Key Partners */}
              <CanvasSection
                number={10}
                title="Revenue Generation"
                value={canvas.revenue_generation}
                placeholder="Revenue from this use case? New revenue streams created?"
              />
              <CanvasSection
                number={11}
                title="Key Partners"
                value={canvas.key_partners}
                placeholder="Strategic partnerships needed. Partnership models?"
              />
              
              {/* Row 7: MVP-State (full width) */}
              <CanvasSection
                number={12}
                title="MVP-State"
                value={canvas.mvp_state}
                placeholder="What must be in place to launch a minimum viable product?"
                fullWidth
              />
            </div>
            
            {/* Value Dimensions Scoring */}
            <div className="mb-6">
              <ValueDimensionsPanel scores={canvas.value_dimensions} />
            </div>
            
            {/* Instructions */}
            <div className="bg-white rounded-lg border border-[#E8E6E1] p-6">
              <h3 className="font-medium text-[#0E3E1B] mb-3">How to Use This Canvas</h3>
              <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Step 1: Fill Sections 1-12</p>
                  <p>
                    Define your XR/AR/VR use case across all 12 sections. Be specific about 
                    technology, costs, and expected adoption.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Step 2: Rate Value Dimensions</p>
                  <p>
                    Score all 15 criteria (a-o) from 0-5. All three dimensions (Customer, Brand, Business) 
                    must average above 3.0 for the use case to be viable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Right Panel - AI Intelligence */}
        <aside className="w-[380px] bg-[#F5F3EF] border-l border-[#E8E6E1] p-6 overflow-y-auto">
          <div className="space-y-4">
            <ValueScoringCard summary={canvas.value_summary} />
            <WeakDimensionsCard weakDimensions={canvas.value_summary.weak_dimensions} />
            <SuggestionsCard suggestions={suggestions} />
            <ImpactReportCard />
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
