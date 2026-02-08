import { useState } from 'react';
import { Check, Save, Download, Share2 } from 'lucide-react';

interface LeanCanvasV2Props {
  onNavigate?: (page: string) => void;
}

interface CanvasSection {
  id: string;
  title: string;
  guidance: string;
  placeholder: string;
  value: string;
  isComplete: boolean;
}

export default function LeanCanvasV2Page({ onNavigate }: LeanCanvasV2Props) {
  const [canvasData, setCanvasData] = useState<Record<string, CanvasSection>>({
    problem: {
      id: 'problem',
      title: 'Problem',
      guidance: 'List the top 1-3 problems your customers face',
      placeholder: 'e.g., Small businesses struggle to manage customer data across multiple tools...',
      value: '',
      isComplete: false
    },
    customerSegments: {
      id: 'customerSegments',
      title: 'Customer Segments',
      guidance: 'Who are your target customers?',
      placeholder: 'e.g., B2B SaaS companies with 10-50 employees, primarily in tech sector...',
      value: '',
      isComplete: false
    },
    uniqueValue: {
      id: 'uniqueValue',
      title: 'Unique Value Proposition',
      guidance: 'Single, clear, compelling message that states why you are different and worth buying',
      placeholder: 'e.g., The only CRM that integrates natively with your existing tools in under 5 minutes...',
      value: '',
      isComplete: false
    },
    solution: {
      id: 'solution',
      title: 'Solution',
      guidance: 'Outline your core product or service',
      placeholder: 'e.g., Cloud-based CRM with AI-powered automation, native integrations, and real-time analytics...',
      value: '',
      isComplete: false
    },
    channels: {
      id: 'channels',
      title: 'Channels',
      guidance: 'How will you reach your customers?',
      placeholder: 'e.g., Content marketing, LinkedIn outreach, partner referrals, product-led growth...',
      value: '',
      isComplete: false
    },
    revenueStreams: {
      id: 'revenueStreams',
      title: 'Revenue Streams',
      guidance: 'How will you make money?',
      placeholder: 'e.g., Monthly subscription ($49-$199/mo), annual plans with 20% discount, enterprise custom pricing...',
      value: '',
      isComplete: false
    },
    costStructure: {
      id: 'costStructure',
      title: 'Cost Structure',
      guidance: 'What are your major costs?',
      placeholder: 'e.g., Cloud infrastructure, engineering team, sales & marketing, customer support...',
      value: '',
      isComplete: false
    },
    keyMetrics: {
      id: 'keyMetrics',
      title: 'Key Metrics',
      guidance: 'What key numbers tell you how your business is doing?',
      placeholder: 'e.g., Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Churn Rate, Net Promoter Score (NPS)...',
      value: '',
      isComplete: false
    },
    unfairAdvantage: {
      id: 'unfairAdvantage',
      title: 'Unfair Advantage',
      guidance: 'Something that cannot easily be copied or bought',
      placeholder: 'e.g., Proprietary AI model trained on 10M+ customer interactions, exclusive partnerships with top platforms...',
      value: '',
      isComplete: false
    },
    existingAlternatives: {
      id: 'existingAlternatives',
      title: 'Existing Alternatives',
      guidance: 'What are customers using today?',
      placeholder: 'e.g., Salesforce (complex, expensive), HubSpot (limited integrations), spreadsheets (manual, error-prone)...',
      value: '',
      isComplete: false
    },
    earlyAdopters: {
      id: 'earlyAdopters',
      title: 'Early Adopters',
      guidance: 'Characteristics of your first customers',
      placeholder: 'e.g., Tech-savvy founders aged 30-45, frustrated with current CRM, willing to try new tools...',
      value: '',
      isComplete: false
    }
  });

  const [focusedSection, setFocusedSection] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleSectionChange = (sectionId: string, value: string) => {
    setCanvasData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        value,
        isComplete: value.trim().length > 20
      }
    }));
  };

  const handleSave = () => {
    setLastSaved(new Date());
    // In production: save to database
  };

  const completedCount = Object.values(canvasData).filter(s => s.isComplete).length;
  const totalCount = Object.keys(canvasData).length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate?.('home-v5')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#3B5F52] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#212427]">StartupAI</span>
            </button>

            {/* Progress & Actions */}
            <div className="flex items-center gap-6">
              {/* Progress */}
              <div className="hidden md:flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-gray-500">Completion</div>
                  <div className="text-sm font-medium text-[#212427]">{completedCount}/{totalCount}</div>
                </div>
                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#3B5F52] transition-all duration-500 rounded-full"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-[#3B5F52] hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span className="hidden sm:inline">Save</span>
                </button>
                <button className="p-2 text-gray-700 hover:text-[#3B5F52] hover:bg-gray-50 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-700 hover:text-[#3B5F52] hover:bg-gray-50 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Progress */}
          <div className="md:hidden mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#3B5F52] transition-all duration-500 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600">{completedCount}/{totalCount}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Page Title */}
        <div className="mb-12">
          <div className="mb-3">
            <button
              onClick={() => onNavigate?.('lean-canvas')}
              className="text-sm text-gray-600 hover:text-[#3B5F52] transition-colors"
            >
              ← View Classic Lean Canvas
            </button>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-[#212427] mb-3">
            Lean Canvas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A strategic one-page business model template for validating your startup idea. 
            Complete each section thoughtfully to build a comprehensive view of your business.
          </p>
          {lastSaved && (
            <p className="text-sm text-gray-500 mt-2">
              Last saved {lastSaved.toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Canvas Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1: Problem Side */}
          <div className="space-y-6 lg:space-y-8">
            {/* Problem */}
            <CanvasCard
              section={canvasData.problem}
              isFocused={focusedSection === 'problem'}
              onFocus={() => setFocusedSection('problem')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('problem', value)}
              rows={6}
            />

            {/* Existing Alternatives */}
            <CanvasCard
              section={canvasData.existingAlternatives}
              isFocused={focusedSection === 'existingAlternatives'}
              onFocus={() => setFocusedSection('existingAlternatives')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('existingAlternatives', value)}
              rows={4}
            />

            {/* Key Metrics */}
            <CanvasCard
              section={canvasData.keyMetrics}
              isFocused={focusedSection === 'keyMetrics'}
              onFocus={() => setFocusedSection('keyMetrics')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('keyMetrics', value)}
              rows={5}
            />
          </div>

          {/* Column 2: Solution Side */}
          <div className="space-y-6 lg:space-y-8">
            {/* Solution */}
            <CanvasCard
              section={canvasData.solution}
              isFocused={focusedSection === 'solution'}
              onFocus={() => setFocusedSection('solution')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('solution', value)}
              rows={6}
            />

            {/* Unique Value Proposition */}
            <div className="bg-[#FBF9FA] border-2 border-[#F9FAFB] rounded-xl p-6 lg:p-8">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl lg:text-2xl font-light text-[#212427]">
                    {canvasData.uniqueValue.title}
                  </h2>
                  {canvasData.uniqueValue.isComplete && (
                    <div className="flex-shrink-0 w-5 h-5 bg-[#3B5F52] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {canvasData.uniqueValue.guidance}
                </p>
              </div>
              <textarea
                value={canvasData.uniqueValue.value}
                onChange={(e) => handleSectionChange('uniqueValue', e.target.value)}
                onFocus={() => setFocusedSection('uniqueValue')}
                onBlur={() => setFocusedSection(null)}
                placeholder={canvasData.uniqueValue.placeholder}
                rows={5}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#212427] placeholder:text-gray-400 focus:outline-none focus:border-[#F9FAFB] focus:ring-2 focus:ring-[#F9FAFB]/10 transition-all resize-none"
              />
            </div>

            {/* Unfair Advantage */}
            <CanvasCard
              section={canvasData.unfairAdvantage}
              isFocused={focusedSection === 'unfairAdvantage'}
              onFocus={() => setFocusedSection('unfairAdvantage')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('unfairAdvantage', value)}
              rows={4}
            />

            {/* Channels */}
            <CanvasCard
              section={canvasData.channels}
              isFocused={focusedSection === 'channels'}
              onFocus={() => setFocusedSection('channels')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('channels', value)}
              rows={4}
            />
          </div>

          {/* Column 3: Customers & Economics */}
          <div className="space-y-6 lg:space-y-8">
            {/* Customer Segments */}
            <CanvasCard
              section={canvasData.customerSegments}
              isFocused={focusedSection === 'customerSegments'}
              onFocus={() => setFocusedSection('customerSegments')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('customerSegments', value)}
              rows={6}
            />

            {/* Early Adopters */}
            <CanvasCard
              section={canvasData.earlyAdopters}
              isFocused={focusedSection === 'earlyAdopters'}
              onFocus={() => setFocusedSection('earlyAdopters')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('earlyAdopters', value)}
              rows={4}
            />

            {/* Cost Structure */}
            <CanvasCard
              section={canvasData.costStructure}
              isFocused={focusedSection === 'costStructure'}
              onFocus={() => setFocusedSection('costStructure')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('costStructure', value)}
              rows={4}
            />

            {/* Revenue Streams */}
            <CanvasCard
              section={canvasData.revenueStreams}
              isFocused={focusedSection === 'revenueStreams'}
              onFocus={() => setFocusedSection('revenueStreams')}
              onBlur={() => setFocusedSection(null)}
              onChange={(value) => handleSectionChange('revenueStreams', value)}
              rows={4}
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white border border-gray-200 rounded-xl">
          <div>
            <h3 className="text-lg font-medium text-[#212427] mb-1">
              Ready to validate your canvas?
            </h3>
            <p className="text-sm text-gray-600">
              Export your completed canvas or continue refining your business model.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors font-medium"
            >
              Save Draft
            </button>
            <button
              className="px-6 py-3 bg-[#3B5F52] hover:bg-[#2D4840] text-white rounded-lg transition-colors font-medium flex items-center gap-2"
              disabled={completedCount < totalCount}
            >
              <Download className="w-4 h-4" />
              Export Canvas
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Canvas Card Component
interface CanvasCardProps {
  section: CanvasSection;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
  rows?: number;
}

function CanvasCard({ section, isFocused, onFocus, onBlur, onChange, rows = 4 }: CanvasCardProps) {
  return (
    <div 
      className={`bg-white border rounded-xl p-6 lg:p-8 transition-all duration-300 ${
        isFocused 
          ? 'border-[#3B5F52] shadow-lg shadow-[#3B5F52]/5' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl lg:text-2xl font-light text-[#212427]">
            {section.title}
          </h2>
          {section.isComplete && (
            <div className="flex-shrink-0 w-5 h-5 bg-[#DCF9E3] border border-[#3B5F52] rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-[#3B5F52]" />
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {section.guidance}
        </p>
      </div>
      <textarea
        value={section.value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={section.placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#212427] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#3B5F52] focus:ring-2 focus:ring-[#3B5F52]/10 transition-all resize-none"
      />
    </div>
  );
}