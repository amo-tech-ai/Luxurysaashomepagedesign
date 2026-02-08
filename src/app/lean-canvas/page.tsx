'use client';

import { useState, useEffect } from 'react';
import { Save, Download, Share2, ArrowLeft, Sparkles, Check } from 'lucide-react';
import { CanvasCard } from './components/CanvasCard';

interface LeanCanvasState {
  problem: string;
  solution: string;
  uvp: string;
  customerSegments: string;
  earlyAdopters: string;
  existingAlternatives: string;
  channels: string;
  unfairAdvantage: string;
  keyMetrics: string;
  costStructure: string;
  revenueStreams: string;
  lastSaved?: string;
}

const INITIAL_STATE: LeanCanvasState = {
  problem: '',
  solution: '',
  uvp: '',
  customerSegments: '',
  earlyAdopters: '',
  existingAlternatives: '',
  channels: '',
  unfairAdvantage: '',
  keyMetrics: '',
  costStructure: '',
  revenueStreams: '',
};

interface LeanCanvasPageProps {
  onNavigate?: (page: string) => void;
}

export default function LeanCanvasPage({ onNavigate }: LeanCanvasPageProps) {
  const [canvas, setCanvas] = useState<LeanCanvasState>(INITIAL_STATE);
  const [isSaving, setIsSaving] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('lean-canvas-v2');
    if (saved) {
      try {
        setCanvas(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved canvas', e);
      }
    }
  }, []);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSave(true);
    }, 30000);
    return () => clearInterval(interval);
  }, [canvas]);

  const handleSave = (isAuto = false) => {
    setIsSaving(true);
    const updated = {
      ...canvas,
      lastSaved: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };
    localStorage.setItem('lean-canvas-v2', JSON.stringify(updated));
    setCanvas(updated);
    setTimeout(() => setIsSaving(false), 500);
  };

  const handleExport = () => {
    // Mock PDF export
    alert('Export to PDF feature coming soon!');
  };

  const handleShare = () => {
    // Copy current URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const updateField = (field: keyof LeanCanvasState, value: string) => {
    setCanvas((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate completion
  const totalSections = 11;
  const completedSections = Object.entries(canvas).filter(
    ([key, value]) => key !== 'lastSaved' && value.trim().length > 0
  ).length;
  const completionPercentage = Math.round(
    (completedSections / totalSections) * 100
  );

  const handleContinue = () => {
    if (completedSections < 7) {
      const confirmed = window.confirm(
        `You've only completed ${completedSections} of ${totalSections} sections. Continue anyway?`
      );
      if (!confirmed) return;
    }
    handleSave();
    if (onNavigate) {
      onNavigate('opportunity-canvas');
    }
  };

  const handleHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleHome}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-[#0D5F4E] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
            <span className="text-lg font-light">StartupAI</span>
          </button>

          {/* Completion Tracker (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-500">Completion</span>
            <span className="text-sm font-medium">
              {completedSections}/{totalSections}
            </span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0D5F4E] transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium">{completionPercentage}%</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSave(false)}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isSaving ? 'Saving...' : 'Save'}
              </span>
            </button>
            <button
              onClick={handleExport}
              className="p-2 text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
              title="Download as PDF"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
              title="Share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden px-6 pb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">
              {completedSections}/{totalSections} sections
            </span>
            <span className="text-xs font-medium">{completionPercentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0D5F4E] transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Title Section */}
        <div className="mb-12">
          <button
            onClick={() => onNavigate && onNavigate('lean-canvas-v2')}
            className="text-sm text-[#0D5F4E] hover:text-[#0a4d3f] mb-4 inline-flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View Classic Lean Canvas
          </button>

          <h1 className="text-4xl lg:text-5xl font-light text-[#212427] mb-3">
            Lean Canvas
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-2">
            A strategic one-page business model template for validating your
            startup idea. Complete each section thoughtfully to build a
            comprehensive view of your business.
          </p>

          {canvas.lastSaved && (
            <p className="text-sm text-gray-400">
              Last saved {canvas.lastSaved}
            </p>
          )}
        </div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1: Problem Side */}
          <div className="space-y-6 lg:space-y-8">
            <CanvasCard
              title="Problem"
              helperText="List the top 3 problems your customers face"
              placeholder="e.g., 1. Manual data entry takes 10+ hours/week&#10;2. High error rates cost $5K/month&#10;3. No real-time visibility into operations"
              value={canvas.problem}
              onChange={(value) => updateField('problem', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="Existing Alternatives"
              helperText="How do people solve this problem today?"
              placeholder="e.g., Manual spreadsheets, legacy tools like Salesforce, hiring more staff"
              value={canvas.existingAlternatives}
              onChange={(value) => updateField('existingAlternatives', value)}
              maxLength={200}
              hasAIEnhance
            />

            <CanvasCard
              title="Key Metrics"
              helperText="What numbers will you track to measure success?"
              placeholder="e.g., Monthly active users, Time saved per user, Customer retention rate"
              value={canvas.keyMetrics}
              onChange={(value) => updateField('keyMetrics', value)}
              maxLength={200}
              hasAIEnhance
            />
          </div>

          {/* Column 2: Solution Side */}
          <div className="space-y-6 lg:space-y-8">
            <CanvasCard
              title="Solution"
              helperText="How will you solve the problems above?"
              placeholder="e.g., 1. AI-powered automation reduces manual work by 80%&#10;2. Real-time error detection and correction&#10;3. Live dashboard with predictive analytics"
              value={canvas.solution}
              onChange={(value) => updateField('solution', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="Unique Value Proposition"
              helperText="What makes you different? Make it clear and compelling."
              placeholder="e.g., Cut operational costs by 60% in 30 days—no training required"
              value={canvas.uvp}
              onChange={(value) => updateField('uvp', value)}
              maxLength={120}
              hasAIEnhance
              isHighlighted
            />

            <CanvasCard
              title="Unfair Advantage"
              helperText="What can't be easily copied or bought?"
              placeholder="e.g., Proprietary dataset, exclusive partnerships, unique team expertise"
              value={canvas.unfairAdvantage}
              onChange={(value) => updateField('unfairAdvantage', value)}
              maxLength={150}
              hasAIEnhance
            />

            <CanvasCard
              title="Channels"
              helperText="How will you reach your customers?"
              placeholder="e.g., LinkedIn ads, industry conferences, direct sales, content marketing"
              value={canvas.channels}
              onChange={(value) => updateField('channels', value)}
              maxLength={200}
              hasAIEnhance
            />
          </div>

          {/* Column 3: Customer & Economics */}
          <div className="space-y-6 lg:space-y-8">
            <CanvasCard
              title="Customer Segments"
              helperText="Who are your target customers? Be specific."
              placeholder="e.g., Mid-market SaaS companies (50-200 employees) with manual operations"
              value={canvas.customerSegments}
              onChange={(value) => updateField('customerSegments', value)}
              maxLength={200}
              hasAIEnhance
            />

            <CanvasCard
              title="Early Adopters"
              helperText="Which specific customers will you target first?"
              placeholder="e.g., Operations managers at B2B SaaS startups who recently raised Series A"
              value={canvas.earlyAdopters}
              onChange={(value) => updateField('earlyAdopters', value)}
              maxLength={200}
              hasAIEnhance
            />

            <CanvasCard
              title="Cost Structure"
              helperText="What are your main costs?"
              placeholder="e.g., Fixed: Engineering team ($30K/mo), cloud hosting ($2K/mo)&#10;Variable: Customer support ($100/customer)"
              value={canvas.costStructure}
              onChange={(value) => updateField('costStructure', value)}
              maxLength={200}
              hasAIEnhance
            />

            <CanvasCard
              title="Revenue Streams"
              helperText="How will you make money?"
              placeholder="e.g., SaaS subscription at $499/month per seat, enterprise plan at $5K/month"
              value={canvas.revenueStreams}
              onChange={(value) => updateField('revenueStreams', value)}
              maxLength={200}
              hasAIEnhance
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleContinue}
            className="px-8 py-3 bg-[#0D5F4E] text-white font-medium rounded-lg hover:bg-[#0a4d3f] transition-colors shadow-sm"
          >
            Continue to Opportunity Canvas →
          </button>
        </div>
      </main>
    </div>
  );
}