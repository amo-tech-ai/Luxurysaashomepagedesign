/**
 * BCG × AI Industry — Infographic Design System
 * 
 * Extracted from "Consumers Trust AI to Buy Better. Brands Must Adapt."
 * BCG CCI, December 2025
 * 
 * Features:
 * - BCG-inspired typography (light weight headlines)
 * - Minimal color palette (90% neutral, green accents only)
 * - Clean data visualizations (no gridlines, no borders)
 * - Generous whitespace and editorial feel
 */

'use client';

import { useState } from 'react';
import { ShoppingCart, Search, TrendingUp, MapPin, FileText, ArrowLeft } from 'lucide-react';

interface InfographicPageProps {
  onNavigate?: (page: string) => void;
}

export default function BCGAIIndustry({ onNavigate }: InfographicPageProps) {
  const [activeExhibit, setActiveExhibit] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="border-b border-[#E6E2DC] bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <button
            onClick={() => onNavigate?.('home-v8')}
            className="flex items-center gap-2 text-[#4A4744] hover:text-[#2D6B4D] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
          
          <div className="flex items-baseline gap-4">
            <h1 className="text-[32px] font-light text-[#1E1E1C]">
              BCG × AI Industry
            </h1>
            <span className="text-[#8A8580] text-sm">Infographic Design System</span>
          </div>
          
          <p className="text-[#4A4744] mt-2 text-[15px] max-w-[600px]">
            Extracted from "Consumers Trust AI to Buy Better. Brands Must Adapt." — BCG Center for Customer Insight, December 2025
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#E6E2DC]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex gap-8">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setActiveExhibit(num)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeExhibit === num
                    ? 'border-[#2D6B4D] text-[#2D6B4D]'
                    : 'border-transparent text-[#8A8580] hover:text-[#2D6B4D]'
                }`}
              >
                EXHIBIT {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Exhibit 1: Key Finding */}
        {activeExhibit === 1 && (
          <div className="bg-white p-12 mb-8">
            <div className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-3">
              KEY FINDING
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-[72px] font-normal text-[#1E1E1C] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  62%
                </div>
                <p className="text-[24px] font-light text-[#4A4744] mb-2">
                  of consumers now use GenAI for research
                </p>
                <p className="text-[16px] text-[#8A8580]">
                  Up 20 percentage points since 2023
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-[200px] h-[200px]">
                  {/* Donut SVG */}
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    {/* Background ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#E5E5E5"
                      strokeWidth="20"
                    />
                    {/* Progress ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#2D6B4D"
                      strokeWidth="20"
                      strokeDasharray={`${2 * Math.PI * 80 * 0.64} ${2 * Math.PI * 80}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[48px] font-normal text-[#2D6B4D]" style={{ fontFamily: 'Georgia, serif' }}>
                        64%
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-[#2D6B4D] text-center mt-4 max-w-[220px]">
                  of consumers who use AI in the purchase journey use it in 3 or more categories
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#E6E2DC]">
              <p className="text-[11px] text-[#8A8580]">
                <span className="font-semibold">Source:</span> BCG CCI GenAI Consumer Usage survey, November 2025. n = 9,000+ consumers across 9 countries
              </p>
            </div>
          </div>
        )}

        {/* Exhibit 2: Adoption Growth */}
        {activeExhibit === 2 && (
          <div className="bg-white p-12 mb-8">
            <div className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-3">
              EXHIBIT 2
            </div>
            
            <h2 className="text-[28px] font-light text-[#1E1E1C] mb-12">
              Consumers Increasingly Use GenAI As Part of Everyday Behaviors
            </h2>

            <div className="grid grid-cols-4 gap-8">
              {[
                { label: 'General information seeking', y2023: 43, y2025: 62, change: 20 },
                { label: 'At work / for work purposes', y2023: 31, y2025: 46, change: 15 },
                { label: 'Researching brands or products', y2023: 0, y2025: 43, change: null },
                { label: 'Language translation', y2023: 26, y2025: 40, change: 14 },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {item.change !== null && (
                    <div className="text-[13px] font-semibold text-[#2D6B4D] mb-2">
                      +{item.change}
                    </div>
                  )}
                  {item.change === null && (
                    <div className="text-[13px] font-semibold text-[#8A8580] mb-2">
                      NA
                    </div>
                  )}
                  
                  <div className="flex gap-1 items-end mb-4">
                    {/* 2023 bar */}
                    {item.y2023 > 0 && (
                      <div
                        className="w-[32px] bg-[#006838] rounded-t-sm flex items-center justify-center"
                        style={{ height: `${item.y2023 * 2.5}px` }}
                      >
                        <span className="text-[13px] font-semibold text-white">
                          {item.y2023}
                        </span>
                      </div>
                    )}
                    
                    {/* 2025 bar */}
                    <div
                      className="w-[32px] bg-[#4CAF50] rounded-t-sm flex items-center justify-center"
                      style={{ height: `${item.y2025 * 2.5}px` }}
                    >
                      <span className="text-[13px] font-semibold text-white">
                        {item.y2025}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-[12px] text-[#666] text-center max-w-[100px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#006838]"></div>
                <span className="text-[12px] text-[#666]">2023</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
                <span className="text-[12px] text-[#666]">2025</span>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#E6E2DC]">
              <p className="text-[11px] text-[#8A8580]">
                <span className="font-semibold">Source:</span> BCG CCI GenAI Consumer Usage survey, November 2025. n = 9,000+
              </p>
              <p className="text-[11px] text-[#8A8580] mt-1">
                <span className="font-semibold">Note:</span> Respondents were asked which GenAI tools they have used in the past year
              </p>
            </div>
          </div>
        )}

        {/* Exhibit 3: Purchase Pathways */}
        {activeExhibit === 3 && (
          <div className="bg-white p-12 mb-8">
            <div className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-3">
              EXHIBIT 3
            </div>
            
            <h2 className="text-[28px] font-light text-[#1E1E1C] mb-16 max-w-[800px]">
              How GenAI Plays a Role Along Purchase Pathways
            </h2>

            {/* Premium Icon Grid */}
            <div className="grid grid-cols-5 gap-8 mb-16">
              {[
                { 
                  icon: ShoppingCart, 
                  label: 'Comparing prices and seeking deals', 
                  bgColor: '#0d5f4e',
                  textColor: '#0d5f4e',
                  gradient: 'from-[#0d5f4e] to-[#0a4d3f]'
                },
                { 
                  icon: Search, 
                  label: 'Searching for recommendations', 
                  bgColor: '#1a7358',
                  textColor: '#1a7358',
                  gradient: 'from-[#1a7358] to-[#156048]'
                },
                { 
                  icon: TrendingUp, 
                  label: 'Comparing products and features', 
                  bgColor: '#3eb489',
                  textColor: '#2D6B4D',
                  gradient: 'from-[#3eb489] to-[#2ca071]'
                },
                { 
                  icon: MapPin, 
                  label: 'Discovering where to buy and locating stores', 
                  bgColor: '#a8e6a1',
                  textColor: '#2D6B4D',
                  gradient: 'from-[#a8e6a1] to-[#8dd185]'
                },
                { 
                  icon: FileText, 
                  label: 'Summarizing reviews', 
                  bgColor: '#9d8b7a',
                  textColor: '#8B7E6E',
                  gradient: 'from-[#9d8b7a] to-[#8a7867]'
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group flex flex-col items-center">
                    {/* Icon Circle with Premium Effects */}
                    <div className="relative mb-6">
                      {/* Outer glow ring */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                        style={{ 
                          backgroundColor: item.bgColor,
                          transform: 'scale(1.1)'
                        }}
                      />
                      
                      {/* Main icon container */}
                      <div
                        className={`relative w-[140px] h-[140px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl bg-gradient-to-br ${item.gradient}`}
                        style={{ 
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {/* Inner subtle ring */}
                        <div className="absolute inset-[6px] rounded-full border border-white/20" />
                        
                        {/* Icon */}
                        <Icon 
                          className="w-14 h-14 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" 
                          strokeWidth={1.5}
                        />
                      </div>
                      
                      {/* Decorative dot indicator */}
                      <div 
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-60"
                        style={{ backgroundColor: item.bgColor }}
                      />
                    </div>
                    
                    {/* Label with Premium Typography */}
                    <div className="text-center px-2">
                      <p
                        className="text-[15px] font-medium leading-[1.4] max-w-[160px] transition-colors duration-300"
                        style={{ color: item.textColor }}
                      >
                        {item.label}
                      </p>
                      
                      {/* Decorative underline on hover */}
                      <div 
                        className="h-[2px] w-0 group-hover:w-12 transition-all duration-500 mx-auto mt-2 rounded-full"
                        style={{ backgroundColor: item.bgColor }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Insights Panel */}
            <div className="bg-gradient-to-br from-[#F7F8F6] to-[#FAFAF8] rounded-lg p-8 border border-[#E6E2DC]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-12 bg-gradient-to-b from-[#2D6B4D] to-[#a8e6a1] rounded-full" />
                <div>
                  <h3 className="text-[13px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-3">
                    KEY INSIGHT
                  </h3>
                  <p className="text-[16px] text-[#4A4744] leading-relaxed max-w-[900px]">
                    GenAI is fundamentally reshaping consumer purchase behavior across all five stages of the buying journey. 
                    From initial price discovery to final review synthesis, AI-powered tools have become the <span className="font-medium text-[#2D6B4D]">second most influential touchpoint</span> in consumer decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Source Footer */}
            <div className="mt-12 pt-6 border-t border-[#E6E2DC]">
              <p className="text-[11px] text-[#8A8580] leading-relaxed">
                <span className="font-semibold">Source:</span> BCG CCI GenAI Consumer Usage survey, November 2025. n = 367
              </p>
              <p className="text-[11px] text-[#8A8580] mt-1 leading-relaxed">
                <span className="font-semibold">Note:</span> Based on large-scale qualitative research analyzed using AI to identify themes and insights
              </p>
            </div>
          </div>
        )}

        {/* Exhibit 4: Category Usage */}
        {activeExhibit === 4 && (
          <div className="bg-white p-12 mb-8">
            <div className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-3">
              EXHIBIT 4
            </div>
            
            <h2 className="text-[28px] font-light text-[#1E1E1C] mb-12">
              AI Is Used Nearly Everywhere, from Electronics to Everyday Essentials
            </h2>

            <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
              {/* Left: Horizontal bars */}
              <div className="space-y-3">
                {[
                  { label: 'Consumer electronics', value: 60 },
                  { label: 'Travel', value: 51 },
                  { label: 'Grocery/food or beverage', value: 44 },
                  { label: 'Apparel/footwear', value: 43 },
                  { label: 'Entertainment', value: 43 },
                  { label: 'Services', value: 41 },
                  { label: 'Beauty/personal care', value: 37 },
                  { label: 'Health care', value: 33 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-[200px] text-[14px] text-[#333]">
                      {item.label}
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <div
                        className="h-[24px] bg-[#2D6B4D] rounded-sm"
                        style={{ width: `${item.value}%` }}
                      ></div>
                      <span className="text-[14px] font-semibold text-[#2D6B4D] min-w-[30px]">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Donut */}
              <div className="flex flex-col items-center">
                <div className="relative w-[180px] h-[180px]">
                  <svg viewBox="0 0 180 180" className="transform -rotate-90">
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#E5E5E5"
                      strokeWidth="20"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#2D6B4D"
                      strokeWidth="20"
                      strokeDasharray={`${2 * Math.PI * 70 * 0.64} ${2 * Math.PI * 70}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[48px] font-normal text-[#2D6B4D]" style={{ fontFamily: 'Georgia, serif' }}>
                      64%
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-[#2D6B4D] text-center mt-4 max-w-[200px]">
                  use AI in 3+ categories
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#E6E2DC]">
              <p className="text-[11px] text-[#8A8580]">
                <span className="font-semibold">Source:</span> BCG CCI GenAI Consumer Usage survey, November 2025. n = 367
              </p>
            </div>
          </div>
        )}

        {/* Design System Documentation */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Typography */}
          <div className="bg-white p-8">
            <h3 className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-4">
              Typography
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-[11px] text-[#8A8580] mb-1">Headlines</div>
                <div className="text-[20px] font-light text-[#1E1E1C]">
                  DM Sans Light 300
                </div>
              </div>
              <div>
                <div className="text-[11px] text-[#8A8580] mb-1">Stat Numbers</div>
                <div className="text-[32px] text-[#1E1E1C]" style={{ fontFamily: 'Georgia, serif' }}>
                  Georgia 400
                </div>
              </div>
              <div>
                <div className="text-[11px] text-[#8A8580] mb-1">Body Text</div>
                <div className="text-[14px] text-[#4A4744]">
                  DM Sans Regular 400
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white p-8">
            <h3 className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-4">
              Color System
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#2D6B4D]"></div>
                <div className="text-[11px]">
                  <div className="text-[#1E1E1C] font-medium">Accent Green</div>
                  <div className="text-[#8A8580]">#2D6B4D</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#1E1E1C]"></div>
                <div className="text-[11px]">
                  <div className="text-[#1E1E1C] font-medium">Text Primary</div>
                  <div className="text-[#8A8580]">#1E1E1C</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#FAFAF8] border border-[#E6E2DC]"></div>
                <div className="text-[11px]">
                  <div className="text-[#1E1E1C] font-medium">Background</div>
                  <div className="text-[#8A8580]">#FAFAF8</div>
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-white p-8">
            <h3 className="text-[12px] font-semibold text-[#2D6B4D] uppercase tracking-wider mb-4">
              Design Principles
            </h3>
            <ul className="space-y-2 text-[13px] text-[#4A4744]">
              <li>• 90% neutral space</li>
              <li>• Light weight headlines (300)</li>
              <li>• No gridlines or borders</li>
              <li>• Green accents only</li>
              <li>• Functional animation</li>
              <li>• Editorial feel</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E6E2DC] bg-white mt-16 py-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-[#8A8580]">
              © 2026 StartupAI. Design system adapted from BCG research.
            </div>
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="text-[12px] text-[#2D6B4D] hover:underline"
            >
              View All Infographics →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}