/**
 * How It Works - Pitch Deck Generator
 * 
 * Visual explanation of the AI pitch deck generation process
 * Designed for Pre-Seed/Seed founders with no design experience
 * 
 * Design: Clean, calm, diagram-focused
 */

import { ArrowRight, CheckCircle2, FileText, Sparkles, Edit3, Download, Clock, Target, Shield } from 'lucide-react';

interface HowItWorksPitchPageProps {
  onNavigate?: (page: string) => void;
}

export default function HowItWorksPitchPage({ onNavigate }: HowItWorksPitchPageProps) {
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
              From idea to investor-ready pitch deck in a few simple steps.
            </p>
          </div>

          {/* Visual: Large Flow Diagram */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Step 1 */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white border-2 border-[#0d5f4e]/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-[#0d5f4e]" />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">Input</div>
                <div className="text-xs text-gray-500">Answer questions</div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
              <div className="lg:hidden rotate-90">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white border-2 border-[#0d5f4e]/20 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-[#0d5f4e]" />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">AI Structures</div>
                <div className="text-xs text-gray-500">Story organization</div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
              <div className="lg:hidden rotate-90">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white border-2 border-[#0d5f4e]/20 flex items-center justify-center">
                  <Edit3 className="w-10 h-10 text-[#0d5f4e]" />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">Review</div>
                <div className="text-xs text-gray-500">Edit & refine</div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
              <div className="lg:hidden rotate-90">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              {/* Step 4 */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white border-2 border-[#0d5f4e]/20 flex items-center justify-center">
                  <Download className="w-10 h-10 text-[#0d5f4e]" />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">Export</div>
                <div className="text-xs text-gray-500">Share with investors</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Step-by-Step Visual Cards */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* CARD 1: Input */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              
              {/* Illustrated Form UI */}
              <div className="mb-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-[#0d5f4e]" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Tell us about your startup
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Answer a few focused questions about your startup. No pitch writing required.
              </p>
            </div>

            {/* CARD 2: AI Structuring */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              
              {/* Diagram showing AI arranging slides */}
              <div className="mb-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-2">
                  {['Problem', 'Solution', 'Market', 'Traction', 'Team'].map((label, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#0d5f4e]/10 flex items-center justify-center text-[10px] font-medium text-[#0d5f4e]">
                        {idx + 1}
                      </div>
                      <div className="flex-1 h-8 bg-white border border-gray-200 rounded-lg flex items-center px-3">
                        <span className="text-xs text-gray-700">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                AI structures the story
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI organizes your story using patterns from successful investor decks.
              </p>
            </div>

            {/* CARD 3: Review & Edit */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              
              {/* Pitch deck editor UI */}
              <div className="mb-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      className={`h-12 rounded-lg border-2 ${
                        num === 1
                          ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                          : 'border-gray-200 bg-white'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#0d5f4e]" />
                  <div className="flex-1 h-1.5 bg-[#0d5f4e]/20 rounded" />
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Review and refine
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You stay in control. Edit slides, rewrite content, and adjust the narrative.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: Flowchart (End-to-End) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-xl">
            
            {/* Horizontal Flowchart */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
              
              {[
                'Input',
                'AI Analysis',
                'Deck Structure',
                'Slide Content',
                'Editor',
                'Export'
              ].map((step, idx, arr) => (
                <div key={idx} className="flex items-center gap-4">
                  
                  {/* Node */}
                  <div className="flex-shrink-0">
                    <div className="px-6 py-3 bg-[#0d5f4e]/5 border-2 border-[#0d5f4e]/20 rounded-full">
                      <span className="text-sm font-medium text-gray-900">{step}</span>
                    </div>
                  </div>

                  {/* Connector */}
                  {idx < arr.length - 1 && (
                    <>
                      <div className="hidden lg:block w-8 h-0.5 bg-gray-300" />
                      <div className="lg:hidden h-8 w-0.5 bg-gray-300" />
                    </>
                  )}
                  
                </div>
              ))}

            </div>

            {/* Caption */}
            <p className="text-center text-sm text-gray-600 italic">
              AI suggests. You decide. The system generates.
            </p>

          </div>

        </div>
      </section>

      {/* SECTION 4: Visual Diagram (What You Get) */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left: Founder Inputs */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Founder Inputs
              </div>
              <div className="space-y-3">
                {['Problem', 'Solution', 'Traction', 'Market', 'Team'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0d5f4e]" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle: AI Engine */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-[#0d5f4e]/10 border-2 border-[#0d5f4e]/30 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-[#0d5f4e]" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">AI Engine</div>
              <div className="text-xs text-gray-500">Structures & generates</div>
              
              {/* Arrows */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="hidden lg:block w-16 h-0.5 bg-[#0d5f4e]/30" />
                <ArrowRight className="w-5 h-5 text-[#0d5f4e]/50" />
                <div className="hidden lg:block w-16 h-0.5 bg-[#0d5f4e]/30" />
              </div>
            </div>

            {/* Right: Final Deck */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Final Pitch Deck
              </div>
              <div className="space-y-3">
                {[
                  'Investor-ready structure',
                  'Clear, concise slides',
                  'Ready to share'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: Benefits (Visual First) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0d5f4e]/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#0d5f4e]" />
              </div>
              <p className="text-base text-gray-900 font-medium">
                Save hours of writing
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0d5f4e]/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#0d5f4e]" />
              </div>
              <p className="text-base text-gray-900 font-medium">
                Avoid blank slides
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0d5f4e]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#0d5f4e]" />
              </div>
              <p className="text-base text-gray-900 font-medium">
                Match investor expectations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: CTA (Bottom) */}
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
            You can edit everything before sharing.
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
