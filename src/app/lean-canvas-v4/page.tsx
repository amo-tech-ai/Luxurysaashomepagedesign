'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Download, Share2 } from 'lucide-react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { AISuggestionsPanel } from '../lean-canvas/components/AISuggestionsPanel';

interface LeanCanvasV4Props {
  onNavigate?: (page: string) => void;
}

interface LeanCanvasV4State {
  problem: string;
  customerSegments: string;
  uvp: string;
  solution: string;
  channels: string;
  revenueStreams: string;
  costStructure: string;
  keyMetrics: string;
  unfairAdvantage: string;
  existingAlternatives: string;
  earlyAdopters: string;
}

interface CanvasBlock {
  id: keyof LeanCanvasV4State;
  title: string;
  prompt: string;
  placeholder: string;
  maxChars?: number;
}

const CANVAS_BLOCKS: CanvasBlock[] = [
  {
    id: 'problem',
    title: 'Problem',
    prompt: 'List top 3 problems your customers face.',
    placeholder: 'e.g., 1. Manual data entry takes 10+ hours/week\n2. High error rates cost 25% of revenue\n3. No real-time visibility into operations',
    maxChars: 500,
  },
  {
    id: 'customerSegments',
    title: 'Customer Segments',
    prompt: 'Who are your target customers? Be specific.',
    placeholder: 'e.g., Mid-market SaaS companies (50-200 employees) with manual operations',
    maxChars: 300,
  },
  {
    id: 'uvp',
    title: 'Unique Value Proposition',
    prompt: 'What makes you different? Make it core.',
    placeholder: 'e.g., Cut operational costs by 60% in 30 days—no training required',
    maxChars: 200,
  },
  {
    id: 'solution',
    title: 'Solution',
    prompt: 'How will you solve the problems above?',
    placeholder: 'e.g., 1. AI-powered automation reduces manual work by 80%\n2. Real-time error detection and correction\n3. Live dashboard with predictive analytics',
    maxChars: 500,
  },
  {
    id: 'existingAlternatives',
    title: 'Existing Alternatives',
    prompt: 'How do people solve the problem today?',
    placeholder: 'e.g., Manual spreadsheets, legacy tools like Salesforce, hiring more staff',
    maxChars: 300,
  },
  {
    id: 'earlyAdopters',
    title: 'Early Adopters',
    prompt: 'Which specific customers are your target first?',
    placeholder: 'e.g., Operations managers at B2B SaaS startups who recently raised Series A',
    maxChars: 300,
  },
  {
    id: 'keyMetrics',
    title: 'Key Metrics',
    prompt: 'What numbers will you track to measure success?',
    placeholder: 'e.g., Monthly active users, Time saved per user, Customer retention rate',
    maxChars: 300,
  },
  {
    id: 'unfairAdvantage',
    title: 'Unfair Advantage',
    prompt: 'What can\'t be easily copied or bought?',
    placeholder: 'e.g., Proprietary dataset, exclusive partnerships, unique team expertise',
    maxChars: 300,
  },
  {
    id: 'costStructure',
    title: 'Cost Structure',
    prompt: 'What are your main costs?',
    placeholder: 'e.g., Fixed: Engineering team ($30K/mo), cloud hosting ($5K/mo)\nVariable: Customer support ($100/customer), compute ($10/user/mo)',
    maxChars: 400,
  },
  {
    id: 'channels',
    title: 'Channels',
    prompt: 'How will you reach your customers?',
    placeholder: 'e.g., LinkedIn ads, industry conferences, direct sales, content marketing',
    maxChars: 300,
  },
  {
    id: 'revenueStreams',
    title: 'Revenue Streams',
    prompt: 'How will you make money?',
    placeholder: 'e.g., SaaS subscription at $499/month per seat, enterprise plan at $5K/month',
    maxChars: 300,
  },
];

export default function LeanCanvasV4({ onNavigate }: LeanCanvasV4Props) {
  const [canvas, setCanvas] = useState<LeanCanvasV4State>({
    problem: '',
    customerSegments: '',
    uvp: '',
    solution: '',
    channels: '',
    revenueStreams: '',
    costStructure: '',
    keyMetrics: '',
    unfairAdvantage: '',
    existingAlternatives: '',
    earlyAdopters: '',
  });

  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<{
    title: string;
    field: keyof LeanCanvasV4State;
  } | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lean-canvas-v4');
    if (saved) {
      try {
        setCanvas(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load canvas:', e);
      }
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('lean-canvas-v4', JSON.stringify(canvas));
    setLastSaved(new Date());
  }, [canvas]);

  const updateField = (field: keyof LeanCanvasV4State, value: string) => {
    setCanvas((prev) => ({ ...prev, [field]: value }));
  };

  const handleAIEnhance = (title: string, field: keyof LeanCanvasV4State) => {
    setSelectedBlock({ title, field });
    setAiPanelOpen(true);
  };

  const handleAddSuggestion = (text: string) => {
    if (selectedBlock) {
      updateField(selectedBlock.field, text);
    }
  };

  // Calculate completion
  const completedBlocks = Object.values(canvas).filter(
    (value) => value.trim().length >= 40
  ).length;
  const totalBlocks = 11;
  const completionPercent = Math.round((completedBlocks / totalBlocks) * 100);
  const canContinue = completedBlocks >= 7;

  const handleSave = () => {
    localStorage.setItem('lean-canvas-v4', JSON.stringify(canvas));
    setLastSaved(new Date());
    // Show success toast (could add later)
    alert('Canvas saved successfully!');
  };

  const handleExport = () => {
    // Simple export to text file
    const content = CANVAS_BLOCKS.map((block) => {
      return `${block.title}:\n${canvas[block.id] || '(empty)'}\n`;
    }).join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lean-canvas.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    // Copy to clipboard
    const content = CANVAS_BLOCKS.map((block) => {
      return `${block.title}: ${canvas[block.id] || '(empty)'}`;
    }).join('\n\n');

    navigator.clipboard.writeText(content);
    alert('Canvas copied to clipboard!');
  };

  return (
    <DashboardLayout
      title="Lean Canvas"
      subtitle="Complete each section to build a comprehensive view of your business."
      onNavigate={onNavigate}
      activeNav="lean-canvas-v4"
    >
      {/* Completion Bar Section */}
      <div className="bg-white border-b border-[#E6ECE9] px-8 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              Completion:
            </span>
            <span className="text-sm font-semibold text-[#0d5f4e]">
              {completedBlocks}/{totalBlocks}
            </span>
          </div>

          <div className="flex-1 max-w-md">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0d5f4e] transition-all duration-300"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>

          <span className="text-sm font-medium text-gray-600">
            {completionPercent}%
          </span>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={handleShare}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {CANVAS_BLOCKS.map((block) => {
            const value = canvas[block.id];
            const charCount = value.length;
            const isComplete = charCount >= 40;

            return (
              <div
                key={block.id}
                className={`
                  bg-white rounded-xl border-2 p-5 transition-all
                  ${isComplete ? 'border-[#0d5f4e]' : 'border-[#E6ECE9]'}
                `}
              >
                {/* Block Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#212427] mb-1">
                      {block.title}
                    </h3>
                    <p className="text-xs text-gray-500">{block.prompt}</p>
                  </div>

                  {isComplete && (
                    <div className="flex-shrink-0 ml-2">
                      <div className="w-6 h-6 bg-[#0d5f4e] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Textarea */}
                <textarea
                  value={value}
                  onChange={(e) => updateField(block.id, e.target.value)}
                  placeholder={block.placeholder}
                  className="w-full h-32 px-3 py-2 text-sm text-gray-700 bg-[#FAF9F7] border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent transition-all"
                  maxLength={block.maxChars}
                />

                {/* Footer: Char count + AI Enhance */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">
                    {charCount}/{block.maxChars || 500}
                  </span>

                  <button
                    onClick={() => handleAIEnhance(block.title, block.id)}
                    className="flex items-center justify-center w-8 h-8 text-[#0d5f4e] hover:bg-[#E8F4F1] rounded-lg transition-colors"
                    title="AI Enhance"
                    aria-label="AI Enhance"
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => onNavigate?.('opportunity-canvas')}
            disabled={!canContinue}
            className={`
              px-8 py-4 text-base font-semibold rounded-xl transition-all
              ${
                canContinue
                  ? 'bg-[#0d5f4e] text-white hover:bg-[#0a4a3b] shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
            title={
              !canContinue
                ? 'Complete at least 7 sections to continue'
                : undefined
            }
          >
            Continue to Opportunity Canvas →
          </button>

          {!canContinue && (
            <p className="text-xs text-gray-500 mt-2">
              Complete at least 7 sections to continue
            </p>
          )}
        </div>
      </div>

      {/* AI Suggestions Panel */}
      <AISuggestionsPanel
        isOpen={aiPanelOpen}
        onClose={() => setAiPanelOpen(false)}
        blockTitle={selectedBlock?.title || ''}
        blockValue={selectedBlock ? canvas[selectedBlock.field] : ''}
        onAddSuggestion={handleAddSuggestion}
        industry="SaaS"
        founderType="Solo founder"
      />
    </DashboardLayout>
  );
}