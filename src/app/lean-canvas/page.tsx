import React, { useState, useRef, useEffect } from 'react';
import {
  Download,
  Copy,
  RotateCcw,
  Sparkles,
  Check,
  ChevronRight,
  X,
  Home,
  AlertTriangle,
  HelpCircle,
  Plus,
} from 'lucide-react';

interface CanvasBlock {
  id: string;
  title: string;
  helper: string;
  items: string[];
  row: number;
  col: number;
  span?: number;
}

interface AIAgentData {
  name: string;
  description: string;
  suggestions: {
    type: 'suggestion' | 'risk' | 'question';
    content: string;
  }[];
}

const agentData: Record<string, AIAgentData> = {
  problem: {
    name: 'Problem Discovery Agent',
    description: 'Helps refine and validate customer problems',
    suggestions: [
      { type: 'question', content: 'Why is this problem urgent now?' },
      { type: 'risk', content: 'This problem sounds broad. Consider narrowing to one daily pain.' },
      { type: 'suggestion', content: 'Frame problems from the customer\'s perspective, not yours.' },
    ],
  },
  solution: {
    name: 'Solution Design Agent',
    description: 'Validates solution-problem fit',
    suggestions: [
      { type: 'risk', content: 'Your solution addresses multiple problems. Focus on one first.' },
      { type: 'suggestion', content: 'Consider what\'s the simplest version that delivers value.' },
      { type: 'question', content: 'Can customers achieve this outcome with existing tools?' },
    ],
  },
  'unique-value': {
    name: 'Positioning Agent',
    description: 'Sharpens your unique value proposition',
    suggestions: [
      { type: 'risk', content: 'Your UVP contains buzzwords. Make it concrete.' },
      { type: 'suggestion', content: 'Frame as: [Do X] for [audience] without [common pain].' },
      { type: 'question', content: 'Would a customer understand this in 5 seconds?' },
    ],
  },
  'unfair-advantage': {
    name: 'Moat Analysis Agent',
    description: 'Stress-tests your competitive advantage',
    suggestions: [
      { type: 'risk', content: 'This advantage can be copied in 6 months. Think deeper.' },
      { type: 'suggestion', content: 'Network effects, proprietary data, and team expertise are strong moats.' },
      { type: 'question', content: 'What would it cost a competitor to replicate this?' },
    ],
  },
  'customer-segments': {
    name: 'ICP Agent',
    description: 'Defines your ideal customer profile',
    suggestions: [
      { type: 'risk', content: 'Your customer segment is too broad. Pick one ICP to start.' },
      { type: 'suggestion', content: 'Describe your customer with demographics + behaviors.' },
      { type: 'question', content: 'Who has the strongest pain and budget to pay?' },
    ],
  },
  'existing-alternatives': {
    name: 'Market Scan Agent',
    description: 'Maps competitive landscape',
    suggestions: [
      { type: 'suggestion', content: 'Include DIY solutions and manual workarounds, not just direct competitors.' },
      { type: 'question', content: 'What do customers use today when your product doesn\'t exist?' },
      { type: 'risk', content: 'If no alternatives exist, validate if the problem is real.' },
    ],
  },
  'key-metrics': {
    name: 'Metrics Advisor Agent',
    description: 'Validates metric selection',
    suggestions: [
      { type: 'risk', content: 'Total signups is a vanity metric. Track activation or retention instead.' },
      { type: 'suggestion', content: 'Good metrics: Weekly Active Users, MRR, Conversion Rate, Churn.' },
      { type: 'question', content: 'If this metric improves, does revenue improve?' },
    ],
  },
  'high-level-concept': {
    name: 'Analogy Agent',
    description: 'Clarifies your positioning analogy',
    suggestions: [
      { type: 'suggestion', content: 'Use format: [Known Product A] for [New Audience/Context].' },
      { type: 'question', content: 'Would an investor immediately understand this?' },
      { type: 'risk', content: 'Avoid obscure references. Use household names.' },
    ],
  },
  channels: {
    name: 'Go-To-Market Agent',
    description: 'Prioritizes distribution channels',
    suggestions: [
      { type: 'risk', content: 'Paid ads require significant budget. Consider organic first.' },
      { type: 'suggestion', content: 'Best early channels: Communities, partnerships, content, direct outreach.' },
      { type: 'question', content: 'Which channel can you test this week?' },
    ],
  },
  'early-adopters': {
    name: 'Early User Agent',
    description: 'Profiles your first customers',
    suggestions: [
      { type: 'suggestion', content: 'Early adopters tolerate rough edges if you solve their urgent pain.' },
      { type: 'question', content: 'What communities or forums do these people hang out in?' },
      { type: 'risk', content: 'Enterprise buyers are slow. Consider SMB or individuals first.' },
    ],
  },
  'cost-structure': {
    name: 'Cost Modeling Agent',
    description: 'Analyzes cost structure',
    suggestions: [
      { type: 'risk', content: 'Don\'t forget: Cloud hosting, support costs, payment fees.' },
      { type: 'suggestion', content: 'Separate fixed costs (salaries) from variable costs (API usage).' },
      { type: 'question', content: 'What happens to costs if you 10x customers?' },
    ],
  },
  'revenue-streams': {
    name: 'Monetization Agent',
    description: 'Validates pricing and revenue model',
    suggestions: [
      { type: 'suggestion', content: 'SaaS models work best with recurring value delivery.' },
      { type: 'question', content: 'What budget line item would customers pay from?' },
      { type: 'risk', content: 'Free users rarely convert. Consider paid-from-day-1 or freemium.' },
    ],
  },
};

const initialCanvasData: CanvasBlock[] = [
  // Row 1 - Strategy Core
  {
    id: 'problem',
    title: 'Problem',
    helper: 'List your top 1–3 problems',
    items: [],
    row: 1,
    col: 1,
  },
  {
    id: 'solution',
    title: 'Solution',
    helper: 'Outline a possible solution for each problem',
    items: [],
    row: 1,
    col: 2,
  },
  {
    id: 'unique-value',
    title: 'Unique Value Proposition',
    helper: 'Single, clear, compelling message that states why you are different and worth paying attention',
    items: [],
    row: 1,
    col: 3,
  },
  {
    id: 'unfair-advantage',
    title: 'Unfair Advantage',
    helper: 'Something that cannot easily be bought or copied',
    items: [],
    row: 1,
    col: 4,
  },
  {
    id: 'customer-segments',
    title: 'Customer Segments',
    helper: 'List your target customers and users',
    items: [],
    row: 1,
    col: 5,
  },
  // Row 2 - Validation
  {
    id: 'existing-alternatives',
    title: 'Existing Alternatives',
    helper: 'List how these problems are solved today',
    items: [],
    row: 2,
    col: 1,
  },
  {
    id: 'key-metrics',
    title: 'Key Metrics',
    helper: 'List the key numbers that tell you how your business is doing',
    items: [],
    row: 2,
    col: 2,
  },
  {
    id: 'high-level-concept',
    title: 'High-Level Concept',
    helper: 'List your X for Y analogy (e.g. YouTube = Flickr for videos)',
    items: [],
    row: 2,
    col: 3,
  },
  {
    id: 'channels',
    title: 'Channels',
    helper: 'List your path to customers (inbound or outbound)',
    items: [],
    row: 2,
    col: 4,
  },
  {
    id: 'early-adopters',
    title: 'Early Adopters',
    helper: 'List the characteristics of your ideal customers',
    items: [],
    row: 2,
    col: 5,
  },
  // Row 3 - Economics
  {
    id: 'cost-structure',
    title: 'Cost Structure',
    helper: 'List your fixed and variable costs',
    items: [],
    row: 3,
    col: 1,
    span: 2,
  },
  {
    id: 'revenue-streams',
    title: 'Revenue Streams',
    helper: 'List your sources of revenue',
    items: [],
    row: 3,
    col: 3,
    span: 3,
  },
];

export default function LeanCanvasPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [canvasData, setCanvasData] = useState<CanvasBlock[]>(initialCanvasData);
  const [editingBlock, setEditingBlock] = useState<string | null>(null);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [activeAIBlock, setActiveAIBlock] = useState<string | null>(null);
  const [addedSuggestions, setAddedSuggestions] = useState<Set<string>>(new Set());
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const inputRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>({});

  // Auto-save simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLastSaved(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAddItem = (blockId: string, value: string) => {
    if (!value.trim()) return;

    setCanvasData((prev) =>
      prev.map((block) =>
        block.id === blockId
          ? { ...block, items: [...block.items, value.trim()] }
          : block
      )
    );
  };

  const handleRemoveItem = (blockId: string, index: number) => {
    setCanvasData((prev) =>
      prev.map((block) =>
        block.id === blockId
          ? { ...block, items: block.items.filter((_, i) => i !== index) }
          : block
      )
    );
  };

  const handleExportPDF = () => {
    alert('Export to PDF functionality would be implemented here');
  };

  const handleDuplicate = () => {
    alert('Duplicate canvas functionality would be implemented here');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the canvas? This cannot be undone.')) {
      setCanvasData(initialCanvasData);
    }
  };

  const getTimeSinceLastSave = () => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - lastSaved.getTime()) / 1000);
    if (diff < 60) return 'just now';
    const minutes = Math.floor(diff / 60);
    return `${minutes} min ago`;
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] relative">
      {/* Header */}
      <header className="bg-white border-b border-[#E8E6E1] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate?.('home')}
                className="text-sm text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </button>
              <div className="w-px h-6 bg-[#E8E6E1]" />
              <div>
                <h1 className="font-serif text-2xl text-[#2D2D2D]">Lean Canvas</h1>
                <p className="text-sm text-[#A3A3A3]">Your business model on one page</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Autosave Status */}
              <div className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                <Check className="w-4 h-4 text-[#0D5F4E]" />
                <span>Autosaved · {getTimeSinceLastSave()}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportPDF}
                  className="px-4 py-2 text-sm font-medium text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#F5F5F3] rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button
                  onClick={handleDuplicate}
                  className="px-4 py-2 text-sm font-medium text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#F5F5F3] rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Duplicate
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium text-[#EF4444] hover:bg-[#FEF2F2] rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
                <button
                  onClick={() => setShowAIPanel(!showAIPanel)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    showAIPanel
                      ? 'bg-[#0D5F4E] text-white'
                      : 'text-[#0D5F4E] hover:bg-[#0D5F4E] hover:bg-opacity-5'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  AI Guidance
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-4">
          {/* Row 1 - Strategy Core */}
          {canvasData
            .filter((block) => block.row === 1)
            .map((block) => (
              <CanvasBlockComponent
                key={block.id}
                block={block}
                isEditing={editingBlock === block.id}
                onStartEdit={() => setEditingBlock(block.id)}
                onEndEdit={() => setEditingBlock(null)}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                onAIClick={() => setActiveAIBlock(block.id)}
                inputRef={(el) => (inputRefs.current[block.id] = el)}
              />
            ))}

          {/* Row 2 - Validation */}
          {canvasData
            .filter((block) => block.row === 2)
            .map((block) => (
              <CanvasBlockComponent
                key={block.id}
                block={block}
                isEditing={editingBlock === block.id}
                onStartEdit={() => setEditingBlock(block.id)}
                onEndEdit={() => setEditingBlock(null)}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                onAIClick={() => setActiveAIBlock(block.id)}
                inputRef={(el) => (inputRefs.current[block.id] = el)}
              />
            ))}

          {/* Row 3 - Economics */}
          {canvasData
            .filter((block) => block.row === 3)
            .map((block) => (
              <div
                key={block.id}
                className={block.span ? `col-span-${block.span}` : ''}
                style={{ gridColumn: block.span ? `span ${block.span}` : undefined }}
              >
                <CanvasBlockComponent
                  block={block}
                  isEditing={editingBlock === block.id}
                  onStartEdit={() => setEditingBlock(block.id)}
                  onEndEdit={() => setEditingBlock(null)}
                  onAddItem={handleAddItem}
                  onRemoveItem={handleRemoveItem}
                  onAIClick={() => setActiveAIBlock(block.id)}
                  inputRef={(el) => (inputRefs.current[block.id] = el)}
                />
              </div>
            ))}
        </div>
      </div>

      {/* AI Guidance Panel */}
      {showAIPanel && (
        <aside className="fixed right-0 top-0 h-screen w-96 bg-white border-l border-[#E8E6E1] shadow-2xl z-20 overflow-y-auto animate-slide-in-right">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0D5F4E]" />
                <h3 className="font-serif text-xl text-[#2D2D2D]">AI Guidance</h3>
              </div>
              <button
                onClick={() => setShowAIPanel(false)}
                className="p-2 hover:bg-[#F5F5F3] rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-[#4A4A4A]" />
              </button>
            </div>

            <div className="space-y-6">
              {/* AI Suggestions */}
              <div className="p-4 bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#0D5F4E]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                      Canvas Incomplete
                    </h4>
                    <p className="text-sm text-[#4A4A4A]">
                      Complete at least 8 of 11 blocks to get strategic insights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A574] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#D4A574]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                      Tip: Start with Problem
                    </h4>
                    <p className="text-sm text-[#4A4A4A]">
                      Founders who clearly define the problem first build better products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E8E6E1] pt-6">
                <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-4">
                  Next Steps
                </h4>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white border border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 group">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#2D2D2D] group-hover:text-[#0D5F4E]">
                        Generate Pitch Deck
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#0D5F4E]" />
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-white border border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 group">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#2D2D2D] group-hover:text-[#0D5F4E]">
                        Export to Notion
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#0D5F4E]" />
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-white border border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 group">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#2D2D2D] group-hover:text-[#0D5F4E]">
                        Share with Team
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#0D5F4E]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Block-Specific AI Panel */}
      {activeAIBlock && agentData[activeAIBlock] && (
        <aside className="fixed right-0 top-0 h-screen w-96 bg-white border-l border-[#E8E6E1] shadow-2xl z-20 overflow-y-auto animate-slide-in-right">
          <div className="p-6">
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-[#E8E6E1]">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D2D2D]">{agentData[activeAIBlock].name}</h3>
                    <p className="text-xs text-[#A3A3A3]">{canvasData.find(b => b.id === activeAIBlock)?.title}</p>
                  </div>
                </div>
                <p className="text-sm text-[#4A4A4A]">{agentData[activeAIBlock].description}</p>
              </div>
              <button
                onClick={() => setActiveAIBlock(null)}
                className="p-2 hover:bg-[#F5F5F3] rounded-lg transition-colors duration-200 flex-shrink-0"
              >
                <X className="w-5 h-5 text-[#4A4A4A]" />
              </button>
            </div>

            {/* AI Insights */}
            <div>
              <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
                AI Insights
              </h4>
              <div className="space-y-3">
                {agentData[activeAIBlock].suggestions.map((suggestion, index) => {
                  const suggestionKey = `${activeAIBlock}-${index}`;
                  const isAdded = addedSuggestions.has(suggestionKey);
                  
                  return (
                    <div
                      key={index}
                      className="relative p-4 rounded-lg border border-[#E8E6E1] bg-[#FAFAF8] hover:border-[#0D5F4E] transition-colors duration-200"
                    >
                      {/* Add Button - Top Right */}
                      <button
                        onClick={() => {
                          if (!isAdded) {
                            handleAddItem(activeAIBlock, suggestion.content);
                            setAddedSuggestions(prev => new Set(prev).add(suggestionKey));
                          }
                        }}
                        disabled={isAdded}
                        className={`absolute top-3 right-3 p-1.5 rounded transition-all duration-200 ${
                          isAdded
                            ? 'bg-[#0D5F4E] bg-opacity-10 text-[#0D5F4E] cursor-default'
                            : 'bg-white border border-[#E8E6E1] text-[#4A4A4A] hover:bg-[#0D5F4E] hover:text-white hover:border-[#0D5F4E]'
                        }`}
                        title={isAdded ? 'Added' : 'Add to canvas'}
                      >
                        {isAdded ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <div className="flex items-start gap-3 pr-10">
                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 bg-[#0D5F4E] bg-opacity-10">
                          {suggestion.type === 'risk' && <AlertTriangle className="w-3 h-3 text-[#4A4A4A]" />}
                          {suggestion.type === 'question' && <HelpCircle className="w-3 h-3 text-[#4A4A4A]" />}
                          {suggestion.type === 'suggestion' && <Sparkles className="w-3 h-3 text-[#0D5F4E]" />}
                        </div>
                        <div className="flex-1">
                          <span className="text-[10px] font-semibold uppercase tracking-wider mb-1 block text-[#A3A3A3]">
                            {suggestion.type === 'risk' ? 'Risk' : suggestion.type === 'question' ? 'Question' : 'Suggestion'}
                          </span>
                          <p className="text-sm text-[#2D2D2D] leading-relaxed">{suggestion.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                💡 <span className="font-semibold">Note:</span> AI never edits your content automatically. All changes require your approval.
              </p>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

// Canvas Block Component
function CanvasBlockComponent({
  block,
  isEditing,
  onStartEdit,
  onEndEdit,
  onAddItem,
  onRemoveItem,
  onAIClick,
  inputRef,
}: {
  block: CanvasBlock;
  isEditing: boolean;
  onStartEdit: () => void;
  onEndEdit: () => void;
  onAddItem: (blockId: string, value: string) => void;
  onRemoveItem: (blockId: string, index: number) => void;
  onAIClick: () => void;
  inputRef: (el: HTMLTextAreaElement | null) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        onAddItem(block.id, inputValue);
        setInputValue('');
      }
    }
  };

  return (
    <div
      className="bg-white border border-[#E8E6E1] rounded-lg p-5 min-h-[280px] flex flex-col hover:border-[#0D5F4E] transition-all duration-200 group relative"
      onClick={() => !isEditing && onStartEdit()}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-1">
          {block.title}
        </h3>
        <p className="text-xs text-[#A3A3A3] leading-relaxed">{block.helper}</p>
      </div>

      {/* Items */}
      <div className="flex-1 space-y-2 mb-3 pb-8">
        {block.items.length === 0 && !isEditing && (
          <p className="text-sm text-[#A3A3A3] italic">Add 1–3 key points</p>
        )}
        {block.items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 text-sm text-[#2D2D2D] group/item"
          >
            <span className="text-[#0D5F4E] mt-1">•</span>
            <span className="flex-1 leading-relaxed">{item}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveItem(block.id, index);
              }}
              className="opacity-0 group-hover/item:opacity-100 p-1 hover:bg-[#FEF2F2] rounded transition-all duration-200"
            >
              <X className="w-3 h-3 text-[#EF4444]" />
            </button>
          </div>
        ))}
      </div>

      {/* Input */}
      {isEditing && (
        <div className="border-t border-[#E8E6E1] pt-3">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={onEndEdit}
            placeholder="Type and press Enter to add..."
            className="w-full text-sm text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:outline-none resize-none"
            rows={2}
            autoFocus
          />
          <p className="text-xs text-[#A3A3A3] mt-2">Press Enter to add · Shift+Enter for new line</p>
        </div>
      )}

      {/* AI Icon - Bottom Right Corner */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAIClick();
        }}
        className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#F5F5F3] text-[#6B9D89] hover:bg-[#0D5F4E] hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        title="AI Assist"
      >
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );
}