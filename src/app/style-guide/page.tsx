'use client';

import { ArrowLeft, Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface StyleGuideProps {
  onNavigate?: (page: string) => void;
}

export default function StyleGuidePage({ onNavigate }: StyleGuideProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-[#E8E6E1] bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate?.('home-v8')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#212427]">StartupAI</span>
            </button>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors">
                Save
              </button>
              <button className="text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <button 
          onClick={() => onNavigate?.('lean-canvas')}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>More Canvases / Lean Canvas</span>
        </button>

        {/* Hero */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#212427] mb-3">
            LeanAI Style Guide
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            A strategic one-page business model template for validating your startup idea. 
            Complete each section thoughtfully to build a comprehensive view of your business.
          </p>
        </div>

        {/* Color Palette Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Primary Colors */}
          <StyleCard
            title="Primary Colors"
            helperText="Core brand colors for main CTAs and accents"
          >
            <div className="space-y-3">
              <ColorSwatch 
                name="Emerald Green" 
                hex="#0d5f4e" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#0d5f4e'}
              />
              <ColorSwatch 
                name="Sage Green" 
                hex="#6b9d89" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#6b9d89'}
              />
              <ColorSwatch 
                name="Dark Forest" 
                hex="#0E3E1B" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#0E3E1B'}
              />
            </div>
          </StyleCard>

          {/* Background Colors */}
          <StyleCard
            title="Background Colors"
            helperText="Neutral foundations for all page layouts"
          >
            <div className="space-y-3">
              <ColorSwatch 
                name="Primary Cream" 
                hex="#FAF9F7" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#FAF9F7'}
              />
              <ColorSwatch 
                name="Secondary Beige" 
                hex="#F5F3EF" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#F5F3EF'}
              />
              <ColorSwatch 
                name="Pure White" 
                hex="#FFFFFF" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#FFFFFF'}
              />
            </div>
          </StyleCard>

          {/* Text Colors */}
          <StyleCard
            title="Text Colors"
            helperText="Hierarchy for readable content"
          >
            <div className="space-y-3">
              <ColorSwatch 
                name="Primary Text" 
                hex="#212427" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#212427'}
              />
              <ColorSwatch 
                name="Secondary Text" 
                hex="#6B7280" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#6B7280'}
              />
              <ColorSwatch 
                name="Tertiary Text" 
                hex="#9CA3AF" 
                onCopy={copyToClipboard}
                copied={copiedColor === '#9CA3AF'}
              />
            </div>
          </StyleCard>
        </div>

        {/* Typography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <StyleCard
            title="Typography System"
            helperText="Elegant serif headlines paired with modern sans-serif body text"
          >
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">Headings (Serif)</p>
                <p className="font-serif text-2xl text-[#212427]">
                  Strategy to execution
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Body (Sans-serif)</p>
                <p className="text-base text-gray-700">
                  Clean, modern text for all content
                </p>
              </div>
            </div>
          </StyleCard>

          <StyleCard
            title="Button Styles"
            helperText="Primary, secondary, and ghost button variants"
          >
            <div className="space-y-3">
              <button className="w-full px-4 py-2.5 bg-[#0d5f4e] text-white text-sm font-medium rounded-lg hover:bg-[#0a4a3b] transition-colors">
                Primary Button
              </button>
              <button className="w-full px-4 py-2.5 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Secondary Button
              </button>
              <button className="w-full px-4 py-2.5 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Ghost Button
              </button>
            </div>
          </StyleCard>

          <StyleCard
            title="Input Fields"
            helperText="Text inputs with focus states and placeholders"
          >
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter your startup name..."
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#212427] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#0d5f4e] focus:ring-2 focus:ring-[#0d5f4e]/10 transition-all"
              />
              <textarea
                placeholder="Describe your problem..."
                rows={3}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#212427] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#0d5f4e] focus:ring-2 focus:ring-[#0d5f4e]/10 transition-all resize-none"
              />
            </div>
          </StyleCard>
        </div>

        {/* Components Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <StyleCard
            title="Cards & Panels"
            helperText="Standard card with border and shadow variants"
          >
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-medium text-[#212427] mb-1">Standard Card</p>
                <p className="text-xs text-gray-600">White background with gray border</p>
              </div>
              <div className="bg-white border border-[#0d5f4e] rounded-xl p-4 shadow-sm">
                <p className="text-sm font-medium text-[#212427] mb-1">Active Card</p>
                <p className="text-xs text-gray-600">Emerald border with subtle shadow</p>
              </div>
            </div>
          </StyleCard>

          <StyleCard
            title="Badges & Indicators"
            helperText="Status badges, completion checks, and progress bars"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8F4F1] border border-[#0d5f4e] rounded-full text-xs font-medium text-[#0d5f4e]">
                <Check className="w-3 h-3" />
                Completed
              </div>
              <div className="w-full">
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0d5f4e] rounded-full transition-all duration-500" style={{ width: '65%' }} />
                </div>
                <p className="text-xs text-gray-500 mt-1.5">65% Complete</p>
              </div>
            </div>
          </StyleCard>

          <StyleCard
            title="Icons & Illustrations"
            helperText="Minimal lucide-react icons, diagrams over photos"
          >
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="w-12 h-12 bg-[#E8F4F1] rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-[#0d5f4e]" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Copy className="w-6 h-6 text-gray-600" />
              </div>
              <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center">
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </div>
            </div>
          </StyleCard>
        </div>

        {/* Design Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <StyleCard
            title="Generous Spacing"
            helperText="Ample white space creates calm, premium feel"
          >
            <p className="text-sm text-gray-600 italic leading-relaxed">
              e.g., Wide margins (px-6 lg:px-8), vertical rhythm (space-y-6 lg:space-y-8), 
              breathing room around all elements
            </p>
          </StyleCard>

          <StyleCard
            title="Architectural Layouts"
            helperText="Grid-based, structured, consulting-grade designs"
          >
            <p className="text-sm text-gray-600 italic leading-relaxed">
              e.g., 3-column grids, fixed-width containers (max-w-7xl), 
              aligned sections with clear hierarchy
            </p>
          </StyleCard>

          <StyleCard
            title="Thinking Visuals"
            helperText="Diagrams, flow charts, process maps—not photos"
          >
            <p className="text-sm text-gray-600 italic leading-relaxed">
              e.g., Business model canvas blocks, validation funnels, 
              decision trees, strategic frameworks
            </p>
          </StyleCard>
        </div>

        {/* Forbidden Elements */}
        <div className="bg-white border-2 border-red-200 rounded-xl p-8 mb-12">
          <h2 className="font-serif text-2xl text-[#212427] mb-3 flex items-center gap-3">
            <span className="text-2xl">🚫</span>
            Forbidden Design Elements
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            To maintain brand integrity and premium aesthetic, these must NEVER be used:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#212427]">Colors</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded border-2 border-red-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs">🚫</div>
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded border-2 border-red-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs">🚫</div>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded border-2 border-red-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs">🚫</div>
                </div>
              </div>
              <p className="text-xs text-gray-500">No blues, purples, or reds</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#212427]">Imagery</p>
              <p className="text-xs text-gray-600">
                No stock photos, no decorative icons, no illustrations—only diagrams and charts
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#212427]">Typography</p>
              <p className="text-xs text-gray-600">
                No script fonts, no all-caps body text, no tight line-height
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 lg:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-[#212427] mb-3">
              Ready to validate your canvas?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Export your completed canvas or continue refining your business model with our AI-powered guidance system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={() => onNavigate?.('lean-canvas')}
                className="w-full sm:w-auto px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium rounded-lg transition-colors"
              >
                Save Draft
              </button>
              <button 
                onClick={() => onNavigate?.('lean-canvas')}
                className="w-full sm:w-auto px-8 py-3 bg-[#0d5f4e] hover:bg-[#0a4a3b] text-white text-sm font-medium rounded-lg transition-colors"
              >
                Export Canvas
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Style Card Component
interface StyleCardProps {
  title: string;
  helperText: string;
  children: React.ReactNode;
}

function StyleCard({ title, helperText, children }: StyleCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#0d5f4e] mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {helperText}
        </p>
      </div>
      {children}
    </div>
  );
}

// Color Swatch Component
interface ColorSwatchProps {
  name: string;
  hex: string;
  onCopy: (hex: string) => void;
  copied: boolean;
}

function ColorSwatch({ name, hex, onCopy, copied }: ColorSwatchProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-lg border border-gray-200 flex-shrink-0"
          style={{ backgroundColor: hex }}
        />
        <div>
          <p className="text-sm font-medium text-[#212427]">{name}</p>
          <p className="text-xs text-gray-500">{hex}</p>
        </div>
      </div>
      <button
        onClick={() => onCopy(hex)}
        className="p-2 opacity-0 group-hover:opacity-100 hover:bg-white rounded transition-all"
        title="Copy hex code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-[#0d5f4e]" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}
