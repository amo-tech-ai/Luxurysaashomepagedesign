'use client';

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
  CheckCircle2,
  HelpCircle,
  Brain,
  Target,
  TrendingUp,
  Shield,
  Users,
  Search,
  BarChart3,
  Lightbulb,
  Radio,
  UserCheck,
  DollarSign,
  Wallet,
} from 'lucide-react';

interface CanvasBlock {
  id: string;
  title: string;
  helper: string;
  items: string[];
  row: number;
  col: number;
  span?: number;
  agentName: string;
  agentIcon: React.ReactNode;
}

interface AIAgent {
  name: string;
  icon: React.ReactNode;
  description: string;
  actions: {
    id: string;
    label: string;
    description: string;
  }[];
  suggestions: {
    type: 'suggestion' | 'risk' | 'question';
    content: string;
  }[];
}

const agentDefinitions: Record<string, AIAgent> = {
  problem: {
    name: 'Problem Discovery Agent',
    icon: <Target className="w-4 h-4" />,
    description: 'Helps refine and validate customer problems',
    actions: [
      { id: 'refine', label: 'Refine problem statements', description: 'Make problems clearer and more specific' },
      { id: 'strength', label: 'Check customer pain strength', description: 'Validate if this is a strong pain point' },
      { id: 'wording', label: 'Suggest sharper wording', description: 'Improve clarity and impact' },
    ],
    suggestions: [
      { type: 'question', content: 'Why is this problem urgent now?' },
      { type: 'risk', content: 'This problem sounds broad. Consider narrowing to one daily pain.' },
      { type: 'suggestion', content: 'Frame problems from the customer\'s perspective, not yours.' },
    ],
  },
  solution: {
    name: 'Solution Design Agent',
    icon: <Lightbulb className="w-4 h-4" />,
    description: 'Validates solution-problem fit',
    actions: [
      { id: 'validate', label: 'Validate solution fit', description: 'Check if solution addresses the problem' },
      { id: 'mvp', label: 'Suggest MVP scope', description: 'Identify minimum viable features' },
      { id: 'features', label: 'Remove unnecessary features', description: 'Simplify to core value' },
    ],
    suggestions: [
      { type: 'risk', content: 'Your solution addresses multiple problems. Focus on one first.' },
      { type: 'suggestion', content: 'Consider what\'s the simplest version that delivers value.' },
      { type: 'question', content: 'Can customers achieve this outcome with existing tools?' },
    ],
  },
  'unique-value': {
    name: 'Positioning Agent',
    icon: <TrendingUp className="w-4 h-4" />,
    description: 'Sharpens your unique value proposition',
    actions: [
      { id: 'sharpen', label: 'Sharpen UVP', description: 'Make it more memorable and clear' },
      { id: 'specific', label: 'Make it more specific', description: 'Remove vague language' },
      { id: 'compare', label: 'Compare vs alternatives', description: 'Highlight true differentiation' },
    ],
    suggestions: [
      { type: 'risk', content: 'Your UVP contains buzzwords. Make it concrete.' },
      { type: 'suggestion', content: 'Frame as: [Do X] for [audience] without [common pain].' },
      { type: 'question', content: 'Would a customer understand this in 5 seconds?' },
    ],
  },
  'unfair-advantage': {
    name: 'Moat Analysis Agent',
    icon: <Shield className="w-4 h-4" />,
    description: 'Stress-tests your competitive advantage',
    actions: [
      { id: 'stress-test', label: 'Stress-test advantage', description: 'Validate if truly defensible' },
      { id: 'moat', label: 'Identify real moat', description: 'Find what can\'t be easily copied' },
      { id: 'copy-risk', label: 'Flag copy risks', description: 'Highlight weak advantages' },
    ],
    suggestions: [
      { type: 'risk', content: 'This advantage can be copied in 6 months. Think deeper.' },
      { type: 'suggestion', content: 'Network effects, proprietary data, and team expertise are strong moats.' },
      { type: 'question', content: 'What would it cost a competitor to replicate this?' },
    ],
  },
  'customer-segments': {
    name: 'ICP Agent',
    icon: <Users className="w-4 h-4" />,
    description: 'Defines your ideal customer profile',
    actions: [
      { id: 'narrow', label: 'Narrow ICP', description: 'Focus on most valuable segment' },
      { id: 'primary', label: 'Define primary customer', description: 'Choose who to serve first' },
      { id: 'niche', label: 'Suggest early niche', description: 'Find your beachhead market' },
    ],
    suggestions: [
      { type: 'risk', content: 'Your customer segment is too broad. Pick one ICP to start.' },
      { type: 'suggestion', content: 'Describe your customer with demographics + behaviors.' },
      { type: 'question', content: 'Who has the strongest pain and budget to pay?' },
    ],
  },
  'existing-alternatives': {
    name: 'Market Scan Agent',
    icon: <Search className="w-4 h-4" />,
    description: 'Maps competitive landscape',
    actions: [
      { id: 'add-alternatives', label: 'Add overlooked alternatives', description: 'Find competitors you missed' },
      { id: 'classify', label: 'Classify substitutes', description: 'Group by type (DIY, competitor, workaround)' },
      { id: 'position', label: 'Compare positioning', description: 'See where you fit' },
    ],
    suggestions: [
      { type: 'suggestion', content: 'Include DIY solutions and manual workarounds, not just direct competitors.' },
      { type: 'question', content: 'What do customers use today when your product doesn\'t exist?' },
      { type: 'risk', content: 'If no alternatives exist, validate if the problem is real.' },
    ],
  },
  'key-metrics': {
    name: 'Metrics Advisor Agent',
    icon: <BarChart3 className="w-4 h-4" />,
    description: 'Validates metric selection',
    actions: [
      { id: 'vanity', label: 'Replace vanity metrics', description: 'Focus on actionable metrics' },
      { id: 'kpis', label: 'Suggest stage-appropriate KPIs', description: 'Metrics that matter now' },
      { id: 'revenue', label: 'Link metrics to revenue', description: 'Connect to business outcomes' },
    ],
    suggestions: [
      { type: 'risk', content: 'Total signups is a vanity metric. Track activation or retention instead.' },
      { type: 'suggestion', content: 'Good metrics: Weekly Active Users, MRR, Conversion Rate, Churn.' },
      { type: 'question', content: 'If this metric improves, does revenue improve?' },
    ],
  },
  'high-level-concept': {
    name: 'Analogy Agent',
    icon: <Lightbulb className="w-4 h-4" />,
    description: 'Clarifies your positioning analogy',
    actions: [
      { id: 'refine', label: 'Refine analogy', description: 'Make comparison clearer' },
      { id: 'simplify', label: 'Simplify explanation', description: 'Use well-known references' },
      { id: 'investor', label: 'Investor-friendly phrasing', description: 'Frame for fundraising context' },
    ],
    suggestions: [
      { type: 'suggestion', content: 'Use format: [Known Product A] for [New Audience/Context].' },
      { type: 'question', content: 'Would an investor immediately understand this?' },
      { type: 'risk', content: 'Avoid obscure references. Use household names.' },
    ],
  },
  channels: {
    name: 'Go-To-Market Agent',
    icon: <Radio className="w-4 h-4" />,
    description: 'Prioritizes distribution channels',
    actions: [
      { id: 'prioritize', label: 'Prioritize channels', description: 'Rank by cost vs speed' },
      { id: 'gtm', label: 'Suggest low-cost GTM', description: 'Bootstrap-friendly channels' },
      { id: 'weak', label: 'Remove weak channels', description: 'Cut unrealistic options' },
    ],
    suggestions: [
      { type: 'risk', content: 'Paid ads require significant budget. Consider organic first.' },
      { type: 'suggestion', content: 'Best early channels: Communities, partnerships, content, direct outreach.' },
      { type: 'question', content: 'Which channel can you test this week?' },
    ],
  },
  'early-adopters': {
    name: 'Early User Agent',
    icon: <UserCheck className="w-4 h-4" />,
    description: 'Profiles your first customers',
    actions: [
      { id: 'profile', label: 'Clarify early adopter profile', description: 'Define behavioral traits' },
      { id: 'sources', label: 'Suggest acquisition sources', description: 'Where to find them' },
      { id: 'fit', label: 'Check segment-channel fit', description: 'Validate go-to-market alignment' },
    ],
    suggestions: [
      { type: 'suggestion', content: 'Early adopters tolerate rough edges if you solve their urgent pain.' },
      { type: 'question', content: 'What communities or forums do these people hang out in?' },
      { type: 'risk', content: 'Enterprise buyers are slow. Consider SMB or individuals first.' },
    ],
  },
  'cost-structure': {
    name: 'Cost Modeling Agent',
    icon: <Wallet className="w-4 h-4" />,
    description: 'Analyzes cost structure',
    actions: [
      { id: 'missing', label: 'Add missing costs', description: 'Identify overlooked expenses' },
      { id: 'burn', label: 'Estimate burn drivers', description: 'Forecast monthly costs' },
      { id: 'margin', label: 'Flag margin risks', description: 'Check unit economics' },
    ],
    suggestions: [
      { type: 'risk', content: 'Don\'t forget: Cloud hosting, support costs, payment fees.' },
      { type: 'suggestion', content: 'Separate fixed costs (salaries) from variable costs (API usage).' },
      { type: 'question', content: 'What happens to costs if you 10x customers?' },
    ],
  },
  'revenue-streams': {
    name: 'Monetization Agent',
    icon: <DollarSign className="w-4 h-4" />,
    description: 'Validates pricing and revenue model',
    actions: [
      { id: 'pricing', label: 'Suggest pricing model', description: 'Choose optimal monetization' },
      { id: 'willingness', label: 'Validate willingness to pay', description: 'Check customer budget' },
      { id: 'risks', label: 'Flag revenue risks', description: 'Identify monetization challenges' },
    ],
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
    agentName: 'Problem Discovery Agent',
    agentIcon: <Target className="w-4 h-4" />,
  },
  {
    id: 'solution',
    title: 'Solution',
    helper: 'Outline a possible solution for each problem',
    items: [],
    row: 1,
    col: 2,
    agentName: 'Solution Design Agent',
    agentIcon: <Lightbulb className="w-4 h-4" />,
  },
  {
    id: 'unique-value',
    title: 'Unique Value Proposition',
    helper: 'Single, clear, compelling message that states why you are different and worth paying attention',
    items: [],
    row: 1,
    col: 3,
    agentName: 'Positioning Agent',
    agentIcon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: 'unfair-advantage',
    title: 'Unfair Advantage',
    helper: 'Something that cannot easily be bought or copied',
    items: [],
    row: 1,
    col: 4,
    agentName: 'Moat Analysis Agent',
    agentIcon: <Shield className="w-4 h-4" />,
  },
  {
    id: 'customer-segments',
    title: 'Customer Segments',
    helper: 'List your target customers and users',
    items: [],
    row: 1,
    col: 5,
    agentName: 'ICP Agent',
    agentIcon: <Users className="w-4 h-4" />,
  },
  // Row 2 - Validation
  {
    id: 'existing-alternatives',
    title: 'Existing Alternatives',
    helper: 'List how these problems are solved today',
    items: [],
    row: 2,
    col: 1,
    agentName: 'Market Scan Agent',
    agentIcon: <Search className="w-4 h-4" />,
  },
  {
    id: 'key-metrics',
    title: 'Key Metrics',
    helper: 'List the key numbers that tell you how your business is doing',
    items: [],
    row: 2,
    col: 2,
    agentName: 'Metrics Advisor Agent',
    agentIcon: <BarChart3 className="w-4 h-4" />,
  },
  {
    id: 'high-level-concept',
    title: 'High-Level Concept',
    helper: 'List your X for Y analogy (e.g. YouTube = Flickr for videos)',
    items: [],
    row: 2,
    col: 3,
    agentName: 'Analogy Agent',
    agentIcon: <Lightbulb className="w-4 h-4" />,
  },
  {
    id: 'channels',
    title: 'Channels',
    helper: 'List your path to customers (inbound or outbound)',
    items: [],
    row: 2,
    col: 4,
    agentName: 'Go-To-Market Agent',
    agentIcon: <Radio className="w-4 h-4" />,
  },
  {
    id: 'early-adopters',
    title: 'Early Adopters',
    helper: 'List the characteristics of your ideal customers',
    items: [],
    row: 2,
    col: 5,
    agentName: 'Early User Agent',
    agentIcon: <UserCheck className="w-4 h-4" />,
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
    agentName: 'Cost Modeling Agent',
    agentIcon: <Wallet className="w-4 h-4" />,
  },
  {
    id: 'revenue-streams',
    title: 'Revenue Streams',
    helper: 'List your sources of revenue',
    items: [],
    row: 3,
    col: 3,
    span: 3,
    agentName: 'Monetization Agent',
    agentIcon: <DollarSign className="w-4 h-4" />,
  },
];

export default function LeanCanvasAIPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [canvasData, setCanvasData] = useState<CanvasBlock[]>(initialCanvasData);
  const [editingBlock, setEditingBlock] = useState<string | null>(null);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [showGlobalAI, setShowGlobalAI] = useState(false);
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

  const handleRunFullReview = () => {
    setShowGlobalAI(true);
  };

  const getTimeSinceLastSave = () => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - lastSaved.getTime()) / 1000);
    if (diff < 60) return 'just now';
    const minutes = Math.floor(diff / 60);
    return `${minutes} min ago`;
  };

  const getCompletedBlocksCount = () => {
    return canvasData.filter((block) => block.items.length > 0).length;
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
                <div className="flex items-center gap-2">
                  <h1 className="font-serif text-2xl text-[#2D2D2D]">Lean Canvas</h1>
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#0D5F4E] bg-opacity-5 rounded-md">
                    <Brain className="w-3 h-3 text-[#0D5F4E]" />
                    <span className="text-xs font-semibold text-[#0D5F4E]">AI Enhanced</span>
                  </div>
                </div>
                <p className="text-sm text-[#A3A3A3]">Your business model on one page · 11 AI agents ready</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Completion Status */}
              <div className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5F4E]" />
                  <span className="font-medium text-[#2D2D2D]">{getCompletedBlocksCount()}/11</span>
                  <span>blocks completed</span>
                </div>
                <div className="w-px h-4 bg-[#E8E6E1]" />
                <Check className="w-4 h-4 text-[#0D5F4E]" />
                <span>Autosaved · {getTimeSinceLastSave()}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunFullReview}
                  className="px-4 py-2 bg-[#0D5F4E] text-white text-sm font-medium rounded-lg hover:bg-[#0a4a3c] transition-all duration-200 flex items-center gap-2"
                >
                  <Brain className="w-4 h-4" />
                  Run Full Canvas Review
                </button>
                <button
                  onClick={handleExportPDF}
                  className="px-4 py-2 text-sm font-medium text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#F5F5F3] rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
                <button
                  onClick={handleDuplicate}
                  className="px-4 py-2 text-sm font-medium text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#F5F5F3] rounded-lg transition-all duration-200"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium text-[#EF4444] hover:bg-[#FEF2F2] rounded-lg transition-all duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto px-6 py-8 transition-all duration-300 ${activeAgent ? 'mr-96' : ''}`}>
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
                onActivateAgent={() => setActiveAgent(block.id)}
                isAgentActive={activeAgent === block.id}
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
                onActivateAgent={() => setActiveAgent(block.id)}
                isAgentActive={activeAgent === block.id}
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
                  onActivateAgent={() => setActiveAgent(block.id)}
                  isAgentActive={activeAgent === block.id}
                  inputRef={(el) => (inputRefs.current[block.id] = el)}
                />
              </div>
            ))}
        </div>
      </div>

      {/* AI Agent Panel */}
      {activeAgent && (
        <AIAgentPanel
          agent={agentDefinitions[activeAgent]}
          blockTitle={canvasData.find((b) => b.id === activeAgent)?.title || ''}
          onClose={() => setActiveAgent(null)}
        />
      )}

      {/* Global AI Review Panel */}
      {showGlobalAI && (
        <GlobalAIPanel
          canvasData={canvasData}
          onClose={() => setShowGlobalAI(false)}
        />
      )}
    </div>
  );
}

// Canvas Block Component with AI
function CanvasBlockComponent({
  block,
  isEditing,
  onStartEdit,
  onEndEdit,
  onAddItem,
  onRemoveItem,
  onActivateAgent,
  isAgentActive,
  inputRef,
}: {
  block: CanvasBlock;
  isEditing: boolean;
  onStartEdit: () => void;
  onEndEdit: () => void;
  onAddItem: (blockId: string, value: string) => void;
  onRemoveItem: (blockId: string, index: number) => void;
  onActivateAgent: () => void;
  isAgentActive: boolean;
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
      className={`bg-white border rounded-lg p-5 min-h-[280px] flex flex-col transition-all duration-200 group relative ${
        isAgentActive
          ? 'border-[#0D5F4E] shadow-lg ring-2 ring-[#0D5F4E] ring-opacity-20'
          : 'border-[#E8E6E1] hover:border-[#0D5F4E]'
      }`}
      onClick={() => !isEditing && onStartEdit()}
    >
      {/* Header with AI Icon */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-1">
            {block.title}
          </h3>
          <p className="text-xs text-[#A3A3A3] leading-relaxed">{block.helper}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onActivateAgent();
          }}
          className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
            isAgentActive
              ? 'bg-[#0D5F4E] text-white'
              : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-[#0D5F4E] hover:text-white opacity-0 group-hover:opacity-100'
          }`}
          title="AI Assist"
        >
          <Brain className="w-4 h-4" />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 space-y-2 mb-3">
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
    </div>
  );
}

// AI Agent Panel Component
function AIAgentPanel({ agent, blockTitle, onClose }: { agent: AIAgent; blockTitle: string; onClose: () => void }) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  return (
    <aside className="fixed right-0 top-0 h-screen w-96 bg-white border-l border-[#E8E6E1] shadow-2xl z-20 overflow-y-auto animate-slide-in-right">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-[#E8E6E1]">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                {agent.icon}
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#2D2D2D]">{agent.name}</h3>
                <p className="text-xs text-[#A3A3A3]">{blockTitle}</p>
              </div>
            </div>
            <p className="text-sm text-[#4A4A4A]">{agent.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F5F5F3] rounded-lg transition-colors duration-200 flex-shrink-0"
          >
            <X className="w-5 h-5 text-[#4A4A4A]" />
          </button>
        </div>

        {/* AI Actions */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
            AI Actions
          </h4>
          <div className="space-y-2">
            {agent.actions.map((action) => (
              <button
                key={action.id}
                onClick={() => setSelectedAction(action.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedAction === action.id
                    ? 'bg-[#0D5F4E] bg-opacity-5 border-[#0D5F4E]'
                    : 'bg-white border-[#E8E6E1] hover:border-[#0D5F4E]'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">{action.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#A3A3A3] flex-shrink-0" />
                </div>
                <p className="text-xs text-[#A3A3A3]">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div>
          <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
            AI Insights
          </h4>
          <div className="space-y-3">
            {agent.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  suggestion.type === 'risk'
                    ? 'bg-[#FEF2F2] border-[#FEE2E2]'
                    : suggestion.type === 'question'
                    ? 'bg-[#F0F9FF] border-[#DBEAFE]'
                    : 'bg-[#F0FDF4] border-[#DCFCE7]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                    suggestion.type === 'risk'
                      ? 'bg-[#EF4444] bg-opacity-10'
                      : suggestion.type === 'question'
                      ? 'bg-[#3B82F6] bg-opacity-10'
                      : 'bg-[#0D5F4E] bg-opacity-10'
                  }`}>
                    {suggestion.type === 'risk' && <AlertTriangle className="w-3 h-3 text-[#EF4444]" />}
                    {suggestion.type === 'question' && <HelpCircle className="w-3 h-3 text-[#3B82F6]" />}
                    {suggestion.type === 'suggestion' && <Sparkles className="w-3 h-3 text-[#0D5F4E]" />}
                  </div>
                  <div className="flex-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider mb-1 block ${
                      suggestion.type === 'risk'
                        ? 'text-[#EF4444]'
                        : suggestion.type === 'question'
                        ? 'text-[#3B82F6]'
                        : 'text-[#0D5F4E]'
                    }`}>
                      {suggestion.type === 'risk' ? 'AI Risk' : suggestion.type === 'question' ? 'AI Question' : 'AI Suggestion'}
                    </span>
                    <p className="text-sm text-[#2D2D2D] leading-relaxed">{suggestion.content}</p>
                  </div>
                </div>
              </div>
            ))}
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
  );
}

// Global AI Review Panel
function GlobalAIPanel({ canvasData, onClose }: { canvasData: CanvasBlock[]; onClose: () => void }) {
  const completedBlocks = canvasData.filter((b) => b.items.length > 0).length;
  const emptyBlocks = canvasData.filter((b) => b.items.length === 0);

  return (
    <aside className="fixed right-0 top-0 h-screen w-[500px] bg-white border-l border-[#E8E6E1] shadow-2xl z-20 overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-[#E8E6E1]">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#2D2D2D]">Full Canvas Review</h3>
                <p className="text-sm text-[#A3A3A3]">Strategic assessment across all blocks</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F5F5F3] rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-[#4A4A4A]" />
          </button>
        </div>

        {/* Canvas Status */}
        <div className="mb-6 p-5 bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[#2D2D2D]">Canvas Completion</span>
            <span className="text-2xl font-bold text-[#0D5F4E]">{Math.round((completedBlocks / 11) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-[#F5F5F3] rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-[#0D5F4E] rounded-full transition-all duration-500"
              style={{ width: `${(completedBlocks / 11) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[#A3A3A3]">
            {completedBlocks} of 11 blocks completed
          </p>
        </div>

        {/* Recommendations */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
            Strategic Recommendations
          </h4>

          {completedBlocks < 8 && (
            <div className="p-4 bg-[#FEF2F2] border border-[#FEE2E2] rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                    Complete More Blocks
                  </h5>
                  <p className="text-sm text-[#4A4A4A] mb-2">
                    Complete at least 8 blocks to unlock strategic insights and investor readiness checks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {emptyBlocks.slice(0, 3).map((block) => (
                      <span key={block.id} className="px-2 py-1 bg-white rounded text-xs text-[#4A4A4A]">
                        {block.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {completedBlocks >= 8 && (
            <>
              <div className="p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                      Strong Problem Definition
                    </h5>
                    <p className="text-sm text-[#4A4A4A]">
                      Your problem statements are clear and specific. Consider validating with customer interviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FEF2F2] border border-[#FEE2E2] rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                      Unfair Advantage Needs Work
                    </h5>
                    <p className="text-sm text-[#4A4A4A]">
                      Your unfair advantage may be easily replicable. Focus on network effects, proprietary data, or unique team expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F0F9FF] border border-[#DBEAFE] rounded-lg">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                      Customer Segment Clarity
                    </h5>
                    <p className="text-sm text-[#4A4A4A]">
                      Consider narrowing to a single ICP for initial launch. Who has the strongest pain and budget?
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Global Actions */}
        <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
          <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
            Next Steps
          </h4>
          <div className="space-y-2">
            <button className="w-full p-3 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4a3c] transition-colors duration-200 flex items-center justify-between group">
              <span className="text-sm font-medium">Generate Pitch Deck</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="w-full p-3 bg-white border border-[#E8E6E1] text-[#2D2D2D] rounded-lg hover:border-[#0D5F4E] transition-colors duration-200 flex items-center justify-between group">
              <span className="text-sm font-medium">Investor Readiness Check</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="w-full p-3 bg-white border border-[#E8E6E1] text-[#2D2D2D] rounded-lg hover:border-[#0D5F4E] transition-colors duration-200 flex items-center justify-between group">
              <span className="text-sm font-medium">Export Strategic Brief</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
