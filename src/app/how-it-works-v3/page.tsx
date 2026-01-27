/**
 * How It Works V3 - Elegant Hero-Driven Layout
 * 
 * Matches PitchAI reference design
 * Clean, minimal, professional aesthetic
 * 
 * Design: Elegant serif headlines, cream background, green accents
 */

import { ArrowRight, Sparkles, Layout, Share2 } from 'lucide-react';

interface HowItWorksV3PageProps {
  onNavigate?: (page: string) => void;
}

export default function HowItWorksV3Page({ onNavigate }: HowItWorksV3PageProps) {
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
    <div className="min-h-screen bg-[#F5F3EF]">
      
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button
              onClick={handleGoHome}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-light text-gray-900 group-hover:text-[#0d5f4e] transition-colors">
                StartupAI
              </span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Product
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Showcase
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-900 hover:text-[#0d5f4e] transition-colors">
                Log in
              </button>
              <button
                onClick={handleGenerateCTA}
                className="px-5 py-2.5 bg-[#0d5f4e] text-white text-sm font-medium rounded-lg hover:bg-[#0a4d3f] transition-all duration-300"
              >
                Start for Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div>
              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-6 leading-[1.1]" style={{ fontFamily: 'Georgia, serif' }}>
                Create an investor-ready pitch deck.
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Leverage AI to transform your vision into a compelling narrative. Designed for founders who value precision and speed.
              </p>

              {/* CTA Button */}
              <button
                onClick={handleGenerateCTA}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#0d5f4e] text-white font-medium rounded-lg hover:bg-[#0a4d3f] transition-all duration-300 shadow-sm hover:shadow-md mb-4"
              >
                <span>Generate Deck</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Helper Text */}
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-10">
                NO CREDIT CARD REQUIRED. START CREATING FOR FREE
              </p>

              {/* Benefits */}
              <div className="flex gap-12">
                <div>
                  <div className="text-2xl font-light text-gray-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    10x Faster
                  </div>
                  <div className="text-sm text-gray-600">Drafting process</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-gray-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    VC-Standard
                  </div>
                  <div className="text-sm text-gray-600">Proven structures</div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Screenshot */}
            <div className="relative">
              
              {/* Main Product Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                
                {/* Card Header */}
                <div className="bg-gray-50/50 border-b border-gray-200/50 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-500">editor.pitchai.ai/startupai-deck</span>
                  </div>
                </div>

                {/* Editor Interface */}
                <div className="grid grid-cols-[120px_1fr] bg-white">
                  
                  {/* Left Sidebar */}
                  <div className="bg-gray-50/80 border-r border-gray-200/50 p-3 space-y-2">
                    
                    {/* Toolbar Icons */}
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center">
                        <Layout className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="w-8 h-8 rounded bg-white border border-gray-200/50 flex items-center justify-center">
                        <div className="w-3 h-3 border border-gray-400" />
                      </div>
                      <div className="w-8 h-8 rounded bg-white border border-gray-200/50 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Tt</span>
                      </div>
                    </div>

                    {/* Slide Thumbnails */}
                    <div className="pt-6 space-y-2">
                      <div className="text-[10px] text-gray-500 mb-2">1. Problem</div>
                      <div className="text-[10px] text-gray-500 mb-2">2. Solution</div>
                      <div className="text-[10px] text-gray-500 mb-2">3. Solution</div>
                    </div>
                  </div>

                  {/* Main Canvas */}
                  <div className="p-8 bg-white flex items-center justify-center min-h-[280px]">
                    <div className="w-full max-w-sm">
                      <div className="border-2 border-gray-900 rounded-lg p-6 mb-4 aspect-[4/3] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-2">1. Market Opportunity</div>
                          <div className="w-16 h-8 mx-auto bg-gray-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Insight Card */}
              <div className="absolute -right-4 -bottom-6 w-72 bg-white rounded-xl shadow-xl border border-gray-200/50 p-5 hidden xl:block">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Market Opportunity</div>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  The $12B gap in startup storytelling
                </h3>
                <div className="flex gap-3">
                  <div className="flex-1 h-20 bg-gray-100 rounded-lg border border-gray-200/50" />
                  <div className="flex-1 h-20 bg-gray-100 rounded-lg border border-gray-200/50" />
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200/50 flex items-center justify-between">
                  <span className="text-xs text-gray-500">CONFIDENTIAL — DECEMBER 2024</span>
                  <span className="text-xs text-gray-500">PAGE 01</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="group">
              <div className="w-12 h-12 bg-[#0d5f4e]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0d5f4e]/20 transition-colors">
                <Sparkles className="w-6 h-6 text-[#0d5f4e]" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                AI Narrative Engine
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Input your notes and our AI crafts a logical, high-converting investor story following Sequoia frameworks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="w-12 h-12 bg-[#0d5f4e]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0d5f4e]/20 transition-colors">
                <Layout className="w-6 h-6 text-[#0d5f4e]" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Editorial Layouts
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Move beyond generic slides. Our layouts are inspired by premium publications and venture capital standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="w-12 h-12 bg-[#0d5f4e]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0d5f4e]/20 transition-colors">
                <Share2 className="w-6 h-6 text-[#0d5f4e]" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Seamless Export
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Export as editable PowerPoint, high-res PDF, or share via a secure, tracked link with investor analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            From vision to deck in minutes
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Answer a few questions about your startup. AI structures your story. You review and export.
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0d5f4e]/10 border-2 border-[#0d5f4e]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-medium text-[#0d5f4e]">1</span>
              </div>
              <h4 className="text-base font-medium text-gray-900 mb-2">Input Details</h4>
              <p className="text-sm text-gray-600">Tell us about your problem, solution, and traction</p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-[#0d5f4e]/10 border-2 border-[#0d5f4e]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-medium text-[#0d5f4e]">2</span>
              </div>
              <h4 className="text-base font-medium text-gray-900 mb-2">AI Structures</h4>
              <p className="text-sm text-gray-600">We organize your story into investor-ready slides</p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-[#0d5f4e]/10 border-2 border-[#0d5f4e]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-medium text-[#0d5f4e]">3</span>
              </div>
              <h4 className="text-base font-medium text-gray-900 mb-2">Review & Export</h4>
              <p className="text-sm text-gray-600">Edit, refine, and share your polished deck</p>
            </div>

          </div>

          {/* CTA */}
          <button
            onClick={handleGenerateCTA}
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#0d5f4e] text-white font-medium rounded-lg hover:bg-[#0a4d3f] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Start Creating</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200/50 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              © 2026 StartupAI. Built for founders
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <button className="text-xs text-gray-500 hover:text-gray-900 uppercase tracking-wider transition-colors">
                Privacy
              </button>
              <button className="text-xs text-gray-500 hover:text-gray-900 uppercase tracking-wider transition-colors">
                Terms
              </button>
              <button className="text-xs text-gray-500 hover:text-gray-900 uppercase tracking-wider transition-colors">
                Contact
              </button>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
