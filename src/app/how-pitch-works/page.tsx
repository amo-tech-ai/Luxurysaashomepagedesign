/**
 * How It Works - AI Pitch Deck Generator
 * 
 * Step-by-step visual walkthrough using real product screenshots
 * Shows founders exactly how pitch decks are structured
 * 
 * Design: Clean, screenshot-focused, practical
 */

import { ArrowRight, CheckCircle2, Edit3, Download, Sparkles } from 'lucide-react';

interface HowPitchWorksPageProps {
  onNavigate?: (page: string) => void;
}

export default function HowPitchWorksPage({ onNavigate }: HowPitchWorksPageProps) {
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
    <div className="min-h-screen bg-white">
      
      {/* Header Navigation */}
      <header className="border-b border-gray-200">
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

      {/* SECTION 1: Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              How it works
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              See how your pitch deck is designed, step by step.
            </p>
          </div>

          {/* Hero Screenshot: Pitch Deck Editor */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            
            {/* Editor Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-base font-medium text-gray-900">StartupAI Pitch Deck</div>
                  <div className="px-2.5 py-1 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded-md">
                    Draft
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-[#0d5f4e] text-white text-sm rounded-lg hover:bg-[#0a4d3f] transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Editor Body */}
            <div className="grid lg:grid-cols-[280px_1fr_320px]">
              
              {/* Left: Slide List */}
              <div className="bg-gray-50 border-r border-gray-200 p-4 space-y-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Slides (12)
                </div>
                {[
                  { num: 1, title: 'Cover', active: true },
                  { num: 2, title: 'The Problem', active: false },
                  { num: 3, title: 'Our Solution', active: false },
                  { num: 4, title: 'How It Works', active: false },
                  { num: 5, title: 'Market Opportunity', active: false },
                  { num: 6, title: 'Business Model', active: false },
                  { num: 7, title: 'Traction', active: false },
                  { num: 8, title: 'Competition', active: false },
                  { num: 9, title: 'Go-to-Market', active: false },
                  { num: 10, title: 'Team', active: false },
                  { num: 11, title: 'Financials', active: false },
                  { num: 12, title: 'The Ask', active: false },
                ].map((slide) => (
                  <div
                    key={slide.num}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      slide.active
                        ? 'bg-white border-2 border-[#0d5f4e] shadow-sm'
                        : 'bg-white border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-8 h-6 rounded border flex items-center justify-center text-xs font-medium ${
                      slide.active ? 'bg-[#0d5f4e] text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {slide.num}
                    </div>
                    <div className={`text-sm ${slide.active ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                      {slide.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Center: Active Slide Preview */}
              <div className="p-8 lg:p-12 bg-gray-50 flex items-center justify-center">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl border border-gray-200 aspect-[16/9] flex items-center justify-center p-12">
                  <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                      StartupAI
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      AI Operating System for Founders
                    </p>
                    <div className="inline-block px-6 py-2 bg-gray-100 text-gray-600 text-sm rounded-lg">
                      Seed Round • 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: AI Suggestions Panel */}
              <div className="bg-white border-l border-gray-200 p-6 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
                  <div className="text-sm font-medium text-gray-900">AI Suggestions</div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#0d5f4e]/5 rounded-lg border border-[#0d5f4e]/20">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                        <span className="font-medium">Strong opener.</span> Consider adding a one-line tagline.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3 mb-2">
                      <Edit3 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                        Add company logo or founder photo
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3 mb-2">
                      <Sparkles className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                        Next: Define the problem investors need to see
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full px-4 py-2.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                    View All Suggestions
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: Step 1 - The Problem */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
              Step 1
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 tracking-tight">
              Start with the problem
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Describe the core pain investors need to understand in the first 30 seconds.
            </p>
          </div>

          {/* Problem Slide Screenshot */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="aspect-[16/9] p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="w-full max-w-3xl">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                  The Problem
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Founders waste 40+ hours creating pitch decks from scratch
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Most decks fail to follow investor-tested structures
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      First-time fundraisers don't know what investors expect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Step 2 - The Solution */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
              Step 2
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 tracking-tight">
              Show your solution clearly
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explain how your product solves the problem without technical complexity.
            </p>
          </div>

          {/* Solution Slide Screenshot */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="aspect-[16/9] p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="w-full max-w-3xl">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                  Our Solution
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                    <div className="w-12 h-12 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-[#0d5f4e]" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900 mb-2">
                      AI-Generated
                    </h4>
                    <p className="text-sm text-gray-600">
                      Answer questions, get a structured deck
                    </p>
                  </div>
                  <div className="p-6 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                    <div className="w-12 h-12 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-[#0d5f4e]" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900 mb-2">
                      Investor-Tested
                    </h4>
                    <p className="text-sm text-gray-600">
                      Follows proven fundraising patterns
                    </p>
                  </div>
                  <div className="p-6 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                    <div className="w-12 h-12 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center mb-4">
                      <Edit3 className="w-6 h-6 text-[#0d5f4e]" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900 mb-2">
                      Fully Editable
                    </h4>
                    <p className="text-sm text-gray-600">
                      You control every word and slide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Step 3 - Market Opportunity */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
              Step 3
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 tracking-tight">
              Explain the market opportunity
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Give investors context on market size and why this is a real opportunity.
            </p>
          </div>

          {/* Market Slide Screenshot */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="aspect-[16/9] p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="w-full max-w-3xl">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                  Market Opportunity
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">Total Addressable Market</div>
                      <div className="text-4xl font-light text-gray-900 mb-1">$12.5B</div>
                      <div className="text-sm text-gray-600">AI productivity tools (2026)</div>
                    </div>
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">Serviceable Market</div>
                      <div className="text-4xl font-light text-gray-900 mb-1">$2.8B</div>
                      <div className="text-sm text-gray-600">Startup tools & platforms</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Growth Rate</div>
                      <div className="text-4xl font-light text-[#0d5f4e] mb-1">38%</div>
                      <div className="text-sm text-gray-600">CAGR 2024-2028</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full border-8 border-[#0d5f4e]/20" />
                      <div className="absolute inset-4 rounded-full border-8 border-[#0d5f4e]/40" />
                      <div className="absolute inset-8 rounded-full bg-[#0d5f4e] flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl font-medium">Target</div>
                          <div className="text-sm opacity-80">Seed Founders</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: Step 4 - Traction */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
              Step 4
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 tracking-tight">
              Add traction and proof
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Highlight early signals that show momentum and credibility.
            </p>
          </div>

          {/* Traction Slide Screenshot */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="aspect-[16/9] p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="w-full max-w-3xl">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                  Traction
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">2,400</div>
                    <div className="text-sm text-gray-600 mb-1">Active Users</div>
                    <div className="text-xs text-[#0d5f4e] font-medium">+140% MoM</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">$42K</div>
                    <div className="text-sm text-gray-600 mb-1">MRR</div>
                    <div className="text-xs text-[#0d5f4e] font-medium">+180% MoM</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">850</div>
                    <div className="text-sm text-gray-600 mb-1">Decks Created</div>
                    <div className="text-xs text-[#0d5f4e] font-medium">Last 30 days</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">4.8</div>
                    <div className="text-sm text-gray-600 mb-1">User Rating</div>
                    <div className="text-xs text-[#0d5f4e] font-medium">120+ reviews</div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
                  <p className="text-base text-gray-700 text-center">
                    "We raised $2M using a deck created in 48 hours" — <span className="font-medium">Seed founder, YC W25</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Step 5 - Complete Story */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
              Step 5
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 tracking-tight">
              Complete the story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AI orders slides to match how investors expect a Seed deck to flow.
            </p>
          </div>

          {/* Team/Flow Slide Screenshot */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="aspect-[16/9] p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="w-full max-w-3xl">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                  Team
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Sarah Chen', role: 'CEO & Co-founder', bg: 'Former Director @ Salesforce • Stanford CS' },
                    { name: 'Marcus Rodriguez', role: 'CTO & Co-founder', bg: 'Ex-Lead Engineer @ Stripe • MIT' },
                    { name: 'Alex Park', role: 'Head of Product', bg: 'Product Lead @ Notion • Y Combinator' }
                  ].map((member, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center text-white text-2xl font-light">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-medium text-gray-900 mb-1">{member.name}</div>
                      <div className="text-sm text-gray-600 mb-2">{member.role}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{member.bg}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Order Preview */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-sm font-medium text-gray-900 mb-4">AI-Optimized Slide Order</div>
            <div className="flex flex-wrap gap-2">
              {[
                'Cover', 'Problem', 'Solution', 'How It Works', 'Market', 'Business Model',
                'Traction', 'Competition', 'Go-to-Market', 'Team', 'Financials', 'The Ask'
              ].map((slide, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-xs font-medium text-gray-500">{idx + 1}</div>
                  <div className="text-sm text-gray-700">{slide}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: End-to-End Flow */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 tracking-tight">
              The complete flow
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-xl">
            
            {/* Horizontal Flow */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
              
              {[
                { label: 'Founder Inputs', desc: 'Answer questions' },
                { label: 'AI Structures Deck', desc: 'Organizes story' },
                { label: 'Slides Generated', desc: 'Investor-ready' },
                { label: 'Review & Edit', desc: 'Full control' },
                { label: 'Export', desc: 'Share with investors' }
              ].map((step, idx, arr) => (
                <div key={idx} className="flex items-center gap-4">
                  
                  {/* Node */}
                  <div className="flex-shrink-0 text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-[#0d5f4e]/5 border-2 border-[#0d5f4e]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-light text-[#0d5f4e]">{idx + 1}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{step.label}</div>
                    <div className="text-xs text-gray-500">{step.desc}</div>
                  </div>

                  {/* Arrow */}
                  {idx < arr.length - 1 && (
                    <>
                      <div className="hidden lg:block">
                        <ArrowRight className="w-6 h-6 text-gray-300" />
                      </div>
                      <div className="lg:hidden rotate-90">
                        <ArrowRight className="w-6 h-6 text-gray-300" />
                      </div>
                    </>
                  )}
                  
                </div>
              ))}

            </div>

            {/* Caption */}
            <p className="text-center text-base text-gray-600">
              AI structures the deck. You control the final result.
            </p>

          </div>

        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
            Ready to create your pitch deck?
          </h2>

          <button
            onClick={handleGenerateCTA}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0d5f4e] text-white rounded-xl hover:bg-[#0a4d3f] transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
          >
            <span className="text-base font-medium">Generate your pitch deck</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-gray-500">
            You can review and edit every slide before sharing.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
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
