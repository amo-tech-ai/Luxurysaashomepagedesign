/**
 * How It Works V2 - AI Pitch Deck Generator
 * 
 * Professional two-column layout with product screenshots
 * Structured process explanation for investors and founders
 * 
 * Design: Consistent, calm, intelligent, trustworthy
 */

import { ArrowRight, Sparkles, FileText, CheckCircle2, Edit3, Download, Target, TrendingUp, Users } from 'lucide-react';

interface HowItWorksV2PageProps {
  onNavigate?: (page: string) => void;
}

export default function HowItWorksV2Page({ onNavigate }: HowItWorksV2PageProps) {
  const handleGenerateCTA = () => {
    if (onNavigate) {
      onNavigate('pitch-deck');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleGoHome}
              className="text-2xl font-light text-gray-900 hover:text-[#0d5f4e] transition-colors"
            >
              StartupAI
            </button>
            <button
              onClick={handleGenerateCTA}
              className="px-6 py-2.5 bg-[#0d5f4e] text-white text-sm rounded-lg hover:bg-[#0a4d3f] transition-all duration-300"
            >
              Generate Deck
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1: Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
                How it works
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A structured process for creating an investor-ready pitch deck.
              </p>
            </div>

            {/* Right: Screenshot */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Editor UI */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-gray-900">StartupAI Pitch Deck</div>
                  <div className="px-2 py-0.5 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded">
                    Draft
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[200px_1fr]">
                
                {/* Slide List */}
                <div className="bg-gray-50 border-r border-gray-200 p-3 space-y-1.5">
                  {[
                    'Cover',
                    'Problem',
                    'Solution',
                    'Market',
                    'Traction',
                    'Team',
                    'Ask'
                  ].map((slide, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 p-2 rounded ${
                        idx === 0
                          ? 'bg-white border border-[#0d5f4e]'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className={`w-6 h-4 rounded border flex items-center justify-center text-xs ${
                        idx === 0 ? 'bg-[#0d5f4e] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className={`text-xs ${idx === 0 ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                        {slide}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Slide Canvas */}
                <div className="p-8 bg-white flex items-center justify-center aspect-[4/3]">
                  <div className="text-center">
                    <h2 className="text-3xl font-light text-gray-900 mb-3">
                      StartupAI
                    </h2>
                    <p className="text-base text-gray-600 mb-4">
                      AI Operating System for Founders
                    </p>
                    <div className="text-xs text-gray-500">Seed Round • 2026</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Step 1 - Startup Inputs */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 mb-6">
                Step 1
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                Enter your startup details
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Provide your problem, solution, market, and traction. AI uses only what you enter.
              </p>
            </div>

            {/* Right: Screenshot - Form UI */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-900">Startup Information</div>
                  <div className="text-xs text-gray-500">Step 1 of 4</div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-[#0d5f4e] rounded-full" />
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value="StartupAI"
                    readOnly
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900"
                  />
                </div>

                {/* One-liner */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    One-liner <span className="text-gray-400">(120 characters max)</span>
                  </label>
                  <textarea
                    value="AI operating system that guides founders from strategy to daily execution"
                    readOnly
                    rows={2}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 resize-none"
                  />
                  <div className="mt-1 text-xs text-gray-500">76 / 120 characters</div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value="enterprise-saas"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900"
                  >
                    <option>Enterprise SaaS</option>
                  </select>
                </div>

                {/* Problem */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Problem Statement
                  </label>
                  <textarea
                    value="Founders waste 40+ hours creating pitch decks that don't follow investor-tested structures"
                    readOnly
                    rows={3}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 resize-none"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Step 2 - Narrative Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 mb-6">
                Step 2
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                AI structures the narrative
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The system organizes your inputs into a standard Seed-stage investor story.
              </p>
              
              {/* Bullets */}
              <div className="space-y-3">
                {[
                  'Problem',
                  'Solution',
                  'Market',
                  'Traction',
                  'Team',
                  'Ask'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e]" />
                    <div className="text-base text-gray-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Screenshot - Generated Slide List */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Deck Structure</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Sparkles className="w-3.5 h-3.5 text-[#0d5f4e]" />
                    <span>AI Generated</span>
                  </div>
                </div>
              </div>

              {/* Slide List */}
              <div className="p-6 space-y-3">
                {[
                  { num: 1, title: 'Cover', icon: FileText },
                  { num: 2, title: 'The Problem', icon: Target },
                  { num: 3, title: 'Our Solution', icon: CheckCircle2 },
                  { num: 4, title: 'How It Works', icon: Sparkles },
                  { num: 5, title: 'Market Opportunity', icon: TrendingUp },
                  { num: 6, title: 'Business Model', icon: FileText },
                  { num: 7, title: 'Traction', icon: TrendingUp },
                  { num: 8, title: 'Competition', icon: Target },
                  { num: 9, title: 'Go-to-Market', icon: TrendingUp },
                  { num: 10, title: 'Team', icon: Users },
                  { num: 11, title: 'Financials', icon: TrendingUp },
                  { num: 12, title: 'The Ask', icon: Target }
                ].map((slide) => (
                  <div
                    key={slide.num}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                      {slide.num}
                    </div>
                    <slide.icon className="w-4 h-4 text-gray-400" />
                    <div className="text-sm text-gray-900">{slide.title}</div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Step 3 - Slide Content */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 mb-6">
                Step 3
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                Slides generated with clarity
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each slide is concise, readable, and aligned with investor expectations.
              </p>
            </div>

            {/* Right: Screenshot - Individual Slide */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Slide Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">Slide 2 of 12</div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded">
                      Bullets
                    </button>
                    <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded">
                      Visual
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide Content */}
              <div className="p-12 bg-white aspect-[16/10]">
                <h3 className="text-2xl font-light text-gray-900 mb-8">
                  The Problem
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Founders waste 40+ hours creating pitch decks from scratch
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Most decks fail to follow investor-tested structures
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-base text-gray-700 leading-relaxed">
                      First-time fundraisers don't know what investors expect
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Step 4 - Review & Edit */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 mb-6">
                Step 4
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                Review and refine
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                You control the final story. Edit content and accept or reject AI suggestions.
              </p>
            </div>

            {/* Right: Screenshot - Editor with AI Panel */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              <div className="grid grid-cols-[1fr_240px]">
                
                {/* Slide Editor */}
                <div className="border-r border-gray-200">
                  <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Edit3 className="w-4 h-4 text-gray-400" />
                      <div className="text-sm font-medium text-gray-900">Editing: Problem</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-gray-900 mb-4">
                      The Problem
                    </h3>
                    <textarea
                      value="Founders waste 40+ hours creating pitch decks from scratch"
                      readOnly
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-900 resize-none mb-3"
                    />
                    <textarea
                      value="Most decks fail to follow investor-tested structures"
                      readOnly
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-900 resize-none"
                    />
                  </div>
                </div>

                {/* AI Suggestions Panel */}
                <div className="bg-gray-50 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
                    <div className="text-xs font-medium text-gray-900">AI Suggestions</div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                        <div className="text-xs text-gray-700 leading-relaxed">
                          Strong problem statement
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="text-xs text-gray-700 leading-relaxed mb-2">
                        Add quantifiable impact
                      </div>
                      <button className="text-xs text-[#0d5f4e] hover:underline">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Step 5 - Export */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 mb-6">
                Step 5
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                Export and share
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Download a ready-to-share deck in PDF or PowerPoint format.
              </p>
            </div>

            {/* Right: Screenshot - Export Modal */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Modal Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Export Deck</div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                
                {/* Format Options */}
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-3">Choose format</div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-2 border-[#0d5f4e] cursor-pointer">
                      <input type="radio" name="format" checked readOnly className="w-4 h-4 text-[#0d5f4e]" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">PDF</div>
                        <div className="text-xs text-gray-500">Recommended for sharing</div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400" />
                    </label>
                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer">
                      <input type="radio" name="format" readOnly className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">PowerPoint</div>
                        <div className="text-xs text-gray-500">Editable format</div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400" />
                    </label>
                  </div>
                </div>

                {/* Options */}
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-3">Options</div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" checked readOnly className="w-4 h-4 text-[#0d5f4e] rounded" />
                      <span className="text-sm text-gray-700">Include speaker notes</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" readOnly className="w-4 h-4 rounded" />
                      <span className="text-sm text-gray-700">Add page numbers</span>
                    </label>
                  </div>
                </div>

                {/* Export Button */}
                <button className="w-full px-6 py-3 bg-[#0d5f4e] text-white text-sm font-medium rounded-lg hover:bg-[#0a4d3f] transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Deck
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: End-to-End Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content + Diagram */}
            <div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-12 tracking-tight">
                End-to-end workflow
              </h2>
              
              {/* Flow Diagram */}
              <div className="space-y-4">
                {[
                  { label: 'Founder Input', desc: 'Enter startup details' },
                  { label: 'AI Analysis', desc: 'Process information' },
                  { label: 'Deck Structure', desc: 'Organize narrative' },
                  { label: 'Slide Content', desc: 'Generate slides' },
                  { label: 'Review', desc: 'Edit and refine' },
                  { label: 'Export', desc: 'Download and share' }
                ].map((step, idx, arr) => (
                  <div key={idx}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0d5f4e]/10 border border-[#0d5f4e]/20 flex items-center justify-center">
                        <span className="text-sm font-medium text-[#0d5f4e]">{idx + 1}</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="text-base font-medium text-gray-900 mb-1">{step.label}</div>
                        <div className="text-sm text-gray-600">{step.desc}</div>
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="ml-5 h-8 border-l-2 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Screenshot - Full Deck Overview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Deck Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">StartupAI Pitch Deck</div>
                    <div className="text-xs text-gray-500 mt-0.5">12 slides • Last edited 2 min ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded">
                      Ready
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Grid */}
              <div className="p-6 grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <div key={num} className="aspect-[4/3] bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Slide {num}</div>
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mx-auto" />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
                Create your pitch deck with confidence
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Clear structure. No guesswork.
              </p>
              <button
                onClick={handleGenerateCTA}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0d5f4e] text-white rounded-xl hover:bg-[#0a4d3f] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-base font-medium">Generate your pitch deck</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Screenshot - Final Deck Preview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Preview Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
                <div className="text-xs text-gray-500">Preview</div>
              </div>

              {/* Deck Preview */}
              <div className="p-8 bg-white aspect-[16/10]">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-3">
                    StartupAI
                  </h3>
                  <p className="text-base text-gray-600">
                    AI Operating System for Founders
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Problem', value: 'Defined' },
                    { label: 'Solution', value: 'Clear' },
                    { label: 'Market', value: '$12.5B' },
                    { label: 'Traction', value: '2.4K users' }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-sm font-medium text-gray-900">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  <div className="text-xs text-gray-600">Investor-ready</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Brand */}
            <div>
              <div className="text-xl font-light text-gray-900 mb-2">StartupAI</div>
              <p className="text-sm text-gray-600">
                AI operating system for founders
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="text-sm font-medium text-gray-900 mb-3">Product</div>
              <div className="space-y-2">
                <button
                  onClick={handleGenerateCTA}
                  className="block text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
                >
                  Pitch Deck Generator
                </button>
                <button
                  onClick={handleGoHome}
                  className="block text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
                >
                  Home
                </button>
              </div>
            </div>

            {/* Legal */}
            <div>
              <div className="text-sm font-medium text-gray-900 mb-3">Legal</div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Privacy Policy</div>
                <div className="text-sm text-gray-600">Terms of Service</div>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © 2026 StartupAI. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
