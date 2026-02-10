/**
 * AI Readiness Canvas - Main Component
 * Template: Incremental Excellence (Peter Scheffer)
 * 9-Box Layout with AI Intelligence Panel
 */

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { AICanvasBox } from './AICanvasBox';
import { AIIntelligencePanel } from './AIIntelligencePanel';
import { AISuggestionsPanel } from './AISuggestionsPanel';
import { SAMPLE_AI_READINESS_CANVAS, AI_SUGGESTIONS } from '@/data/ai-readiness-data';
import type { AIReadinessCanvas, AIReadinessSection } from '@/data/ai-readiness-types';

export function AIReadinessCanvas() {
  const [canvas, setCanvas] = useState<AIReadinessCanvas>(SAMPLE_AI_READINESS_CANVAS);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [assessmentMode, setAssessmentMode] = useState<'nine-box' | 'four-category'>('nine-box');
  const [aiPanelSection, setAiPanelSection] = useState<string | null>(null);

  const handleBoxClick = (sectionId: string) => {
    setAiPanelSection(sectionId);
  };

  const handleApplySuggestion = (sectionId: string, content: string) => {
    console.log(`Applying suggestion to section ${sectionId}:`, content);
  };

  const getSectionName = (id: string): string => {
    const names: Record<string, string> = {
      '1': 'AI Vision & Business Outcomes',
      '2': 'AI Value Proposition',
      '3': 'Key Use Cases & Prioritisation',
      '4': 'Data Strategy & Assets',
      '5': 'AI Platform & Technology Stack',
      '6': 'People, Skills & Culture',
      '7': 'Governance & Responsible AI',
      '8': 'Cost Structure & Financial Management',
      '9': 'Success Metrics & ROI',
    };
    return names[id] || 'Section';
  };

  return (
    <div className="flex h-screen bg-[#FAF9F7]">
      {/* LEFT SIDEBAR - Context & Settings */}
      <div className="w-64 border-r border-[#0d5f4e]/10 bg-white p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-sm font-medium text-[#0d5f4e] mb-3">ASSESSMENT MODE</h3>
          <div className="space-y-2">
            <button
              onClick={() => setAssessmentMode('nine-box')}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                assessmentMode === 'nine-box'
                  ? 'bg-[#0d5f4e] text-white'
                  : 'bg-[#F5F3EF] text-[#0d5f4e] hover:bg-[#0d5f4e]/10'
              }`}
            >
              9-Box (Incremental Excellence)
            </button>
            <button
              onClick={() => setAssessmentMode('four-category')}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                assessmentMode === 'four-category'
                  ? 'bg-[#0d5f4e] text-white'
                  : 'bg-[#F5F3EF] text-[#0d5f4e] hover:bg-[#0d5f4e]/10'
              }`}
            >
              4-Category (Lindenberg)
            </button>
          </div>
        </div>

        <div className="border-t border-[#0d5f4e]/10 pt-6">
          <h3 className="text-sm font-medium text-[#0d5f4e] mb-3">IMPORT</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded text-sm bg-[#F5F3EF] text-[#0d5f4e] hover:bg-[#0d5f4e]/10 transition-colors">
              Lean Canvas
            </button>
            <button className="w-full text-left px-3 py-2 rounded text-sm bg-[#F5F3EF] text-[#0d5f4e] hover:bg-[#0d5f4e]/10 transition-colors">
              Startup Profile
            </button>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-[#0d5f4e]/10">
          <p className="text-xs text-[#0d5f4e]/60 leading-relaxed">
            Source:{' '}
            <a
              href="https://www.incrementalexcellence.com/ai-readiness-canvas"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#0d5f4e]"
            >
              incrementalexcellence.com
            </a>
          </p>
          <p className="text-xs text-[#0d5f4e]/60 mt-2">© 2025 Peter Scheffer</p>
          <p className="text-xs text-[#0d5f4e]/60">CC BY-SA 4.0</p>
        </div>
      </div>

      {/* CENTER CANVAS - 9-Box Grid */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-[#0d5f4e] mb-2">AI Readiness Canvas</h1>
            <p className="text-sm text-[#0d5f4e]/70">
              Assess Organizational Preparedness for AI Implementation
            </p>
          </div>

          {/* 9-Box Grid */}
          {assessmentMode === 'nine-box' && (
            <div className="max-w-7xl mx-auto space-y-6">
              {/* WHY - Strategic Imperative */}
              <div>
                <h2 className="text-xs font-medium text-[#0d5f4e] mb-4 uppercase tracking-wider">
                  The Strategic Imperative — Why?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <AICanvasBox
                    sectionId="1"
                    title="AI Vision & Business Outcomes"
                    subtitle="Define the 'North Star' to explain: Why are we doing this?"
                    content={canvas.ai_vision.vision_statement}
                    isSelected={selectedSection === '1'}
                    onClick={() => handleBoxClick('1')}
                  />
                  <AICanvasBox
                    sectionId="3"
                    title="Key Use Cases & Prioritisation"
                    subtitle="Which high-value AI initiatives and use cases will we prioritise?"
                    content={`${canvas.key_use_cases.use_cases.length} use cases prioritized`}
                    isSelected={selectedSection === '3'}
                    onClick={() => handleBoxClick('3')}
                  />
                </div>
              </div>

              {/* HOW - Foundational Capabilities */}
              <div>
                <h2 className="text-xs font-medium text-[#0d5f4e] mb-4 uppercase tracking-wider">
                  Foundational Capabilities — How?
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <AICanvasBox
                    sectionId="4"
                    title="Data Strategy & Assets"
                    subtitle="What is our strategy for acquiring, managing, and utilising data assets?"
                    content={`${canvas.data_strategy.internal_data_sources.length} internal sources`}
                    isSelected={selectedSection === '4'}
                    onClick={() => handleBoxClick('4')}
                  />
                  <AICanvasBox
                    sectionId="5"
                    title="AI Platform & Technology Stack"
                    subtitle="Which technology shall we use to build, deploy, and run AI solutions?"
                    content={canvas.ai_platform.llm_providers.join(', ')}
                    isSelected={selectedSection === '5'}
                    onClick={() => handleBoxClick('5')}
                  />
                  <AICanvasBox
                    sectionId="6"
                    title="People, Skills & Culture"
                    subtitle="How will we build the right culture, skills, talent & mindset?"
                    content={`Hiring ${canvas.people_skills.hiring_roadmap.length} phases`}
                    isSelected={selectedSection === '6'}
                    onClick={() => handleBoxClick('6')}
                  />
                </div>
              </div>

              {/* WHAT - Execution & Operations */}
              <div>
                <h2 className="text-xs font-medium text-[#0d5f4e] mb-4 uppercase tracking-wider">
                  Execution & Operations — What?
                </h2>
                
                {/* Value Proposition (full width) */}
                <div className="mb-4">
                  <AICanvasBox
                    sectionId="2"
                    title="AI Value Proposition"
                    subtitle="How will AI create new value for our customers and the business?"
                    content={`${canvas.value_proposition.customer_benefits.length} customer benefits`}
                    isSelected={selectedSection === '2'}
                    onClick={() => handleBoxClick('2')}
                  />
                </div>

                {/* Bottom 3 boxes */}
                <div className="grid grid-cols-3 gap-4">
                  <AICanvasBox
                    sectionId="7"
                    title="Governance & Responsible AI"
                    subtitle="How will we minimise ethical and compliance related risks and issues?"
                    content={`${canvas.governance.risks_and_mitigation.length} risks mitigated`}
                    isSelected={selectedSection === '7'}
                    onClick={() => handleBoxClick('7')}
                  />
                  <AICanvasBox
                    sectionId="8"
                    title="Cost Structure & Financial Management"
                    subtitle="How will we plan, measure, and optimise the costs associated with AI?"
                    content={`Year 1: $${(canvas.costs.year_1_total / 1000).toFixed(0)}K`}
                    isSelected={selectedSection === '8'}
                    onClick={() => handleBoxClick('8')}
                  />
                  <AICanvasBox
                    sectionId="9"
                    title="Success Metrics & ROI"
                    subtitle="How will we measure success to ensure AI initiatives deliver value and justify investment?"
                    content={`ROI: ${canvas.success_metrics.financial_roi.roi_percentage}%`}
                    isSelected={selectedSection === '9'}
                    onClick={() => handleBoxClick('9')}
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4-Category View (Alternative) */}
          {assessmentMode === 'four-category' && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-[#0d5f4e]/20">
                  <h3 className="text-lg font-medium text-[#0d5f4e] mb-2">Strategy Readiness</h3>
                  <p className="text-sm text-[#0d5f4e]/70">
                    Strategic Orientation, Business Value & AI, Goals & Evaluation
                  </p>
                  <p className="text-xs text-[#0d5f4e]/50 mt-4">Maps to: #1, #2, #3, #9</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-[#0d5f4e]/20">
                  <h3 className="text-lg font-medium text-[#0d5f4e] mb-2">Legal Readiness</h3>
                  <p className="text-sm text-[#0d5f4e]/70">
                    Compliance, Internal Data Policy
                  </p>
                  <p className="text-xs text-[#0d5f4e]/50 mt-4">Maps to: #4, #7</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-[#0d5f4e]/20">
                  <h3 className="text-lg font-medium text-[#0d5f4e] mb-2">Business Readiness</h3>
                  <p className="text-sm text-[#0d5f4e]/70">
                    AI Competencies, Processes & Use Cases, Business Culture & AI
                  </p>
                  <p className="text-xs text-[#0d5f4e]/50 mt-4">Maps to: #3, #6</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-[#0d5f4e]/20">
                  <h3 className="text-lg font-medium text-[#0d5f4e] mb-2">Systems & Data Readiness</h3>
                  <p className="text-sm text-[#0d5f4e]/70">
                    System Landscape, Data Access, Data Quality
                  </p>
                  <p className="text-xs text-[#0d5f4e]/50 mt-4">Maps to: #4, #5</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDEBAR - AI Intelligence Panel */}
      <AIIntelligencePanel
        selectedSection={selectedSection}
        suggestion={selectedSection ? AI_SUGGESTIONS[selectedSection] : null}
        onApply={(content) => selectedSection && handleApplySuggestion(selectedSection, content)}
        onClear={() => setSelectedSection(null)}
      />

      {/* AI Suggestions Panel (Fixed Right, Slides In) */}
      <AISuggestionsPanel
        sectionId={aiPanelSection}
        sectionName={aiPanelSection ? getSectionName(aiPanelSection) : ''}
        onClose={() => setAiPanelSection(null)}
        onAddSuggestion={(text) => {
          if (aiPanelSection) {
            handleApplySuggestion(aiPanelSection, text);
          }
        }}
      />
    </div>
  );
}