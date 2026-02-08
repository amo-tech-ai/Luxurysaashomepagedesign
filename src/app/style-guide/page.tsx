import { useState } from 'react';
import { Copy, Check, Eye, Palette, Type, Layout, Zap } from 'lucide-react';

interface StyleGuideProps {
  onNavigate?: (page: string) => void;
}

export default function StyleGuidePage({ onNavigate }: StyleGuideProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'components' | 'layout'>('colors');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

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

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => onNavigate?.('home-v5')}
                className="text-sm text-gray-600 hover:text-[#3B5F52] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="text-sm text-gray-600 hover:text-[#3B5F52] transition-colors"
              >
                Lean Canvas
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DCF9E3] border border-[#3B5F52] rounded-full text-xs font-medium text-[#3B5F52] mb-6">
            <Palette className="w-3.5 h-3.5" />
            Design System
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-[#212427] mb-4">
            LeanAI Style Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A comprehensive visual design system for StartupAI's premium consulting aesthetic. 
            Beige/cream backgrounds with emerald/sage accents—calm, intelligent, trustworthy.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'colors'
                ? 'bg-[#3B5F52] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Palette className="w-4 h-4" />
            Colors
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'typography'
                ? 'bg-[#3B5F52] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Type className="w-4 h-4" />
            Typography
          </button>
          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'components'
                ? 'bg-[#3B5F52] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Eye className="w-4 h-4" />
            Components
          </button>
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'layout'
                ? 'bg-[#3B5F52] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Layout className="w-4 h-4" />
            Layout
          </button>
        </div>

        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="space-y-12">
            {/* Primary Brand Colors */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Primary Brand Colors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorCard
                  name="Emerald Green"
                  hex="#3B5F52"
                  rgb="59, 95, 82"
                  usage="Primary CTAs, focus states, active elements"
                  large
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#3B5F52'}
                />
                <ColorCard
                  name="Emerald Hover"
                  hex="#2D4840"
                  rgb="45, 72, 64"
                  usage="Hover states for primary buttons"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#2D4840'}
                />
                <ColorCard
                  name="Sage Green"
                  hex="#6b9d89"
                  rgb="107, 157, 137"
                  usage="Secondary accents, lighter emphasis"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#6b9d89'}
                />
                <ColorCard
                  name="Medium Emerald"
                  hex="#0d5f4e"
                  rgb="13, 95, 78"
                  usage="Medium emphasis elements"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#0d5f4e'}
                />
                <ColorCard
                  name="Dark Forest"
                  hex="#0E3E1B"
                  rgb="14, 62, 27"
                  usage="High contrast, dark headers"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#0E3E1B'}
                />
                <ColorCard
                  name="Pale Mint"
                  hex="#DCF9E3"
                  rgb="220, 249, 227"
                  usage="Success states, completion badges"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#DCF9E3'}
                />
              </div>
            </section>

            {/* Background Colors */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Background Colors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorCard
                  name="Primary Cream"
                  hex="#FAF9F7"
                  rgb="250, 249, 247"
                  usage="Main page background"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#FAF9F7'}
                />
                <ColorCard
                  name="Secondary Beige"
                  hex="#F5F3EF"
                  rgb="245, 243, 239"
                  usage="Panel backgrounds, sections"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#F5F3EF'}
                />
                <ColorCard
                  name="Tertiary Off-White"
                  hex="#FBF9FA"
                  rgb="251, 249, 250"
                  usage="Special cards, highlights"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#FBF9FA'}
                />
                <ColorCard
                  name="Pure White"
                  hex="#FFFFFF"
                  rgb="255, 255, 255"
                  usage="Cards, inputs, content areas"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#FFFFFF'}
                />
              </div>
            </section>

            {/* Text Colors */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Text Colors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorCard
                  name="Primary Text"
                  hex="#212427"
                  rgb="33, 36, 39"
                  usage="Headings, body text, main content"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#212427'}
                />
                <ColorCard
                  name="Secondary Text"
                  hex="#6B7280"
                  rgb="107, 114, 128"
                  usage="Labels, guidance, descriptions (gray-600)"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#6B7280'}
                />
                <ColorCard
                  name="Tertiary Text"
                  hex="#9CA3AF"
                  rgb="156, 163, 175"
                  usage="Placeholders, disabled text (gray-400)"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#9CA3AF'}
                />
                <ColorCard
                  name="UI Background"
                  hex="#F3F4F6"
                  rgb="243, 244, 246"
                  usage="Input backgrounds (gray-50)"
                  onCopy={copyToClipboard}
                  copied={copiedColor === '#F3F4F6'}
                />
              </div>
            </section>

            {/* Forbidden Colors */}
            <section className="bg-white border-2 border-red-200 rounded-xl p-8">
              <h2 className="text-2xl font-light text-[#212427] mb-4 flex items-center gap-3">
                <span className="text-2xl">🚫</span>
                Forbidden Colors
              </h2>
              <p className="text-gray-600 mb-6">
                To maintain brand integrity and premium aesthetic, these colors must NEVER be used:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <ForbiddenColorCard name="Any Blues" examples={['#0000FF', '#4A90E2', '#3B82F6']} />
                <ForbiddenColorCard name="Any Purples" examples={['#9B51E0', '#8B5CF6', '#A855F7']} />
                <ForbiddenColorCard name="Any Reds" examples={['#FF0000', '#EF4444', '#DC2626']} />
              </div>
            </section>
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === 'typography' && (
          <div className="space-y-12">
            {/* Font Families */}
            <section className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-light text-[#212427] mb-6">Font Families</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#212427] mb-3">Headings (Serif)</h3>
                  <p className="text-gray-600 mb-4">Elegant, premium feel for all headlines</p>
                  <div className="bg-[#FAF9F7] p-4 rounded-lg">
                    <p className="font-serif text-2xl text-[#212427]">The quick brown fox</p>
                    <p className="text-xs text-gray-500 mt-2 font-sans">Georgia, Times, serif</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#212427] mb-3">Body (Sans-serif)</h3>
                  <p className="text-gray-600 mb-4">Clean, modern for all body text</p>
                  <div className="bg-[#FAF9F7] p-4 rounded-lg">
                    <p className="text-base text-[#212427]">The quick brown fox jumps over the lazy dog</p>
                    <p className="text-xs text-gray-500 mt-2">System UI, Helvetica, sans-serif</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Type Scale */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Typography Scale</h2>
              <div className="space-y-6">
                <TypeExample size="5xl" label="Heading 1" example="From strategy to execution" />
                <TypeExample size="4xl" label="Heading 1 (Mobile)" example="Premium AI Platform" />
                <TypeExample size="2xl" label="Heading 2" example="Build your startup with confidence" />
                <TypeExample size="xl" label="Heading 3" example="Key Features & Benefits" />
                <TypeExample size="lg" label="Large Body" example="Intro text and prominent descriptions" />
                <TypeExample size="base" label="Body Text" example="Standard paragraph and content text" />
                <TypeExample size="sm" label="Small Text" example="Labels, captions, and metadata" />
                <TypeExample size="xs" label="Micro Text" example="Timestamps and fine print" />
              </div>
            </section>

            {/* Font Weights */}
            <section className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-light text-[#212427] mb-6">Font Weights</h2>
              <div className="space-y-4">
                <WeightExample weight="light" label="Light (300)" usage="Large headings, premium feel" />
                <WeightExample weight="normal" label="Normal (400)" usage="Body text, standard content" />
                <WeightExample weight="medium" label="Medium (500)" usage="Labels, buttons, emphasis" />
                <WeightExample weight="bold" label="Bold (700)" usage="Strong emphasis (use sparingly)" />
              </div>
            </section>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === 'components' && (
          <div className="space-y-12">
            {/* Buttons */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Buttons</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ComponentCard title="Primary Button">
                  <button className="w-full px-6 py-3 bg-[#3B5F52] hover:bg-[#2D4840] text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Get Started
                  </button>
                  <CodeSnippet code="bg-[#3B5F52] hover:bg-[#2D4840] text-white" />
                </ComponentCard>

                <ComponentCard title="Secondary Button">
                  <button className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors font-medium">
                    Save Draft
                  </button>
                  <CodeSnippet code="bg-gray-100 hover:bg-gray-200 text-gray-900" />
                </ComponentCard>

                <ComponentCard title="Ghost Button">
                  <button className="w-full px-4 py-2 text-gray-700 hover:text-[#3B5F52] hover:bg-gray-50 rounded-lg transition-colors">
                    Learn More
                  </button>
                  <CodeSnippet code="hover:text-[#3B5F52] hover:bg-gray-50" />
                </ComponentCard>
              </div>
            </section>

            {/* Cards */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Cards</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ComponentCard title="Standard Card">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-light text-[#212427] mb-2">Card Title</h3>
                    <p className="text-sm text-gray-600">This is a standard card with white background and gray border.</p>
                  </div>
                  <CodeSnippet code="bg-white border border-gray-200 rounded-xl p-6" />
                </ComponentCard>

                <ComponentCard title="Focused Card">
                  <div className="bg-white border border-[#3B5F52] rounded-xl p-6 shadow-lg shadow-[#3B5F52]/5">
                    <h3 className="text-xl font-light text-[#212427] mb-2">Active State</h3>
                    <p className="text-sm text-gray-600">Card with emerald border and subtle shadow on focus.</p>
                  </div>
                  <CodeSnippet code="border-[#3B5F52] shadow-lg shadow-[#3B5F52]/5" />
                </ComponentCard>
              </div>
            </section>

            {/* Inputs */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Input Fields</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ComponentCard title="Text Input">
                  <input
                    type="text"
                    placeholder="Enter your startup name..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#212427] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#3B5F52] focus:ring-2 focus:ring-[#3B5F52]/10 transition-all"
                  />
                  <CodeSnippet code="focus:border-[#3B5F52] focus:ring-2 focus:ring-[#3B5F52]/10" />
                </ComponentCard>

                <ComponentCard title="Textarea">
                  <textarea
                    placeholder="Describe your problem..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#212427] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#3B5F52] focus:ring-2 focus:ring-[#3B5F52]/10 transition-all resize-none"
                  />
                  <CodeSnippet code="resize-none + same focus styles" />
                </ComponentCard>
              </div>
            </section>

            {/* Badges & Indicators */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Badges & Indicators</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <ComponentCard title="Success Badge">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DCF9E3] border border-[#3B5F52] rounded-full text-sm font-medium text-[#3B5F52]">
                    <Check className="w-4 h-4" />
                    Completed
                  </div>
                  <CodeSnippet code="bg-[#DCF9E3] border-[#3B5F52]" />
                </ComponentCard>

                <ComponentCard title="Progress Bar">
                  <div className="w-full">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3B5F52] rounded-full transition-all duration-500" style={{ width: '65%' }} />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">65% Complete</p>
                  </div>
                  <CodeSnippet code="bg-[#3B5F52] transition-all duration-500" />
                </ComponentCard>

                <ComponentCard title="Completion Check">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#DCF9E3] border border-[#3B5F52] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#3B5F52]" />
                    </div>
                    <span className="text-sm text-gray-700">Task complete</span>
                  </div>
                  <CodeSnippet code="bg-[#DCF9E3] border-[#3B5F52]" />
                </ComponentCard>
              </div>
            </section>
          </div>
        )}

        {/* Layout Tab */}
        {activeTab === 'layout' && (
          <div className="space-y-12">
            {/* Grid System */}
            <section className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-light text-[#212427] mb-6">Grid System</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#212427] mb-3">3-Column Layout (Signature)</h3>
                  <p className="text-sm text-gray-600 mb-4">Primary pattern used across all 10 LeanAI screens</p>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-[#F5F3EF] border border-gray-200 rounded-lg p-6 text-center">
                      <p className="text-sm text-gray-600">Column 1</p>
                    </div>
                    <div className="bg-[#F5F3EF] border border-gray-200 rounded-lg p-6 text-center">
                      <p className="text-sm text-gray-600">Column 2</p>
                    </div>
                    <div className="bg-[#F5F3EF] border border-gray-200 rounded-lg p-6 text-center">
                      <p className="text-sm text-gray-600">Column 3</p>
                    </div>
                  </div>
                  <CodeSnippet code="grid lg:grid-cols-3 gap-6 lg:gap-8" />
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#212427] mb-3">Container</h3>
                  <div className="bg-[#F5F3EF] border border-gray-200 rounded-lg p-6">
                    <p className="text-sm text-gray-600">Max-width: 1600px with responsive horizontal padding</p>
                  </div>
                  <CodeSnippet code="max-w-[1600px] mx-auto px-6 lg:px-12" />
                </div>
              </div>
            </section>

            {/* Spacing */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Spacing Scale</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SpacingCard size="xs" pixels="8px" tailwind="2" />
                <SpacingCard size="sm" pixels="12px" tailwind="3" />
                <SpacingCard size="md" pixels="24px" tailwind="6" />
                <SpacingCard size="lg" pixels="32px" tailwind="8" />
                <SpacingCard size="xl" pixels="48px" tailwind="12" />
                <SpacingCard size="2xl" pixels="64px" tailwind="16" />
                <SpacingCard size="3xl" pixels="96px" tailwind="24" />
                <SpacingCard size="4xl" pixels="128px" tailwind="32" />
              </div>
            </section>

            {/* Border Radius */}
            <section className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-light text-[#212427] mb-6">Border Radius</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="bg-[#3B5F52] h-24 rounded-lg mb-3"></div>
                  <p className="text-sm font-medium text-[#212427]">rounded-lg</p>
                  <p className="text-xs text-gray-600">8px - Buttons, inputs</p>
                </div>
                <div>
                  <div className="bg-[#3B5F52] h-24 rounded-xl mb-3"></div>
                  <p className="text-sm font-medium text-[#212427]">rounded-xl</p>
                  <p className="text-xs text-gray-600">12px - Cards, panels</p>
                </div>
                <div>
                  <div className="bg-[#3B5F52] h-24 rounded-2xl mb-3"></div>
                  <p className="text-sm font-medium text-[#212427]">rounded-2xl</p>
                  <p className="text-xs text-gray-600">16px - Hero sections</p>
                </div>
                <div>
                  <div className="bg-[#3B5F52] h-24 w-24 rounded-full mb-3 mx-auto"></div>
                  <p className="text-sm font-medium text-[#212427]">rounded-full</p>
                  <p className="text-xs text-gray-600">Circle - Badges</p>
                </div>
              </div>
            </section>

            {/* Shadows */}
            <section>
              <h2 className="text-2xl font-light text-[#212427] mb-6">Shadow System</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-sm font-medium text-[#212427] mb-1">shadow-sm</p>
                  <p className="text-xs text-gray-600">Subtle elevation</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-sm font-medium text-[#212427] mb-1">shadow-md</p>
                  <p className="text-xs text-gray-600">Standard cards</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg shadow-[#3B5F52]/5">
                  <p className="text-sm font-medium text-[#212427] mb-1">shadow-lg</p>
                  <p className="text-xs text-gray-600">Focus states with brand tint</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium text-[#212427] mb-1">
                Need the complete documentation?
              </h3>
              <p className="text-sm text-gray-600">
                Access the full design system specification and implementation guide.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors font-medium">
                Download Docs
              </button>
              <button
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="px-6 py-3 bg-[#3B5F52] hover:bg-[#2D4840] text-white rounded-lg transition-colors font-medium"
              >
                View in Action
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Color Card Component
interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  large?: boolean;
  onCopy: (text: string, id: string) => void;
  copied: boolean;
}

function ColorCard({ name, hex, rgb, usage, large, onCopy, copied }: ColorCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
      <div 
        className={`${large ? 'h-32' : 'h-24'}`}
        style={{ backgroundColor: hex }}
      />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-medium text-[#212427] text-sm">{name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">RGB: {rgb}</p>
          </div>
          <button
            onClick={() => onCopy(hex, hex)}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            title="Copy hex code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-[#3B5F52]" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-600 mb-2">{usage}</p>
        <code className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700">{hex}</code>
      </div>
    </div>
  );
}

// Forbidden Color Card
function ForbiddenColorCard({ name, examples }: { name: string; examples: string[] }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <p className="font-medium text-[#212427] text-sm mb-3">{name}</p>
      <div className="flex gap-2">
        {examples.map((color) => (
          <div key={color} className="relative group">
            <div
              className="w-12 h-12 rounded border-2 border-red-300"
              style={{ backgroundColor: color }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl opacity-80">🚫</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Type Example Component
function TypeExample({ size, label, example }: { size: string; label: string; example: string }) {
  const sizeClasses: Record<string, string> = {
    '5xl': 'text-4xl lg:text-5xl',
    '4xl': 'text-4xl',
    '2xl': 'text-2xl',
    'xl': 'text-xl',
    'lg': 'text-lg',
    'base': 'text-base',
    'sm': 'text-sm',
    'xs': 'text-xs'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-xs text-gray-500">{label}</span>
        <code className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700">{sizeClasses[size]}</code>
      </div>
      <p className={`${sizeClasses[size]} font-light text-[#212427]`}>
        {example}
      </p>
    </div>
  );
}

// Weight Example Component
function WeightExample({ weight, label, usage }: { weight: string; label: string; usage: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
      <div>
        <p className={`text-lg text-[#212427] font-${weight}`}>{label}</p>
        <p className="text-xs text-gray-500 mt-1">{usage}</p>
      </div>
      <code className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700">font-{weight}</code>
    </div>
  );
}

// Component Card
function ComponentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-sm font-medium text-[#212427] mb-4">{title}</h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

// Code Snippet
function CodeSnippet({ code }: { code: string }) {
  return (
    <div className="bg-gray-50 rounded px-3 py-2 mt-3">
      <code className="text-xs text-gray-700">{code}</code>
    </div>
  );
}

// Spacing Card
function SpacingCard({ size, pixels, tailwind }: { size: string; pixels: string; tailwind: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <p className="text-sm font-medium text-[#212427] mb-2">{size}</p>
      <div className="bg-[#3B5F52] rounded" style={{ height: pixels }} />
      <div className="mt-3 space-y-1">
        <p className="text-xs text-gray-600">{pixels}</p>
        <code className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700 inline-block">p-{tailwind}</code>
      </div>
    </div>
  );
}
