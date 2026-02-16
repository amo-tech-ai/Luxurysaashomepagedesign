/**
 * Superside Web Design — Service Grid
 * 
 * Based on: superside.com/web-design-services
 * Sections:
 * - What We Offer: 6 service cards with unique backgrounds
 * - Our Process: Timeline with 6 steps on dark green background
 * 
 * Design System:
 * - Premium card layouts with custom backgrounds
 * - Responsive 3→2→1 column grid
 * - Sophisticated color palette (beige, pastels, teals, greens)
 * - Timeline with vertical connector line
 */

'use client';

import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import heroImage from 'figma:asset/0662f91b3330bc85b2b8577e9567f6ac3f258540.png';

interface ServiceGridPageProps {
  onNavigate?: (page: string) => void;
}

export default function ServiceGrid({ onNavigate }: ServiceGridPageProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Website design',
      description: 'Website UX research, wireframes, responsive design, and high-fidelity UI, tailored to your goals.',
      background: '#ffffff',
      variant: 'light' as const,
      textColor: 'text-gray-900',
      visualType: 'macbook'
    },
    {
      id: 2,
      title: 'Webflow development',
      description: 'Certified Webflow partner offering flexible, scalable builds with CMS integration.',
      background: '#ffffff',
      variant: 'light' as const,
      textColor: 'text-gray-900',
      visualType: 'dashboard'
    },
    {
      id: 3,
      title: 'Landing pages',
      description: 'Funnel-stage pages that launch fast—fully optimized, mobile first, and on brand. Ideal for product launches, paid media, lifecycle marketing, and SEO.',
      background: '#ffffff',
      variant: 'light' as const,
      textColor: 'text-gray-900',
      hasLearnMore: true,
      visualType: 'iphone'
    },
    {
      id: 4,
      title: 'Design systems and UI kits',
      description: 'Reusable component libraries built following the Atomic design methodology to scale with consistency.',
      background: '#ffffff',
      variant: 'light' as const,
      textColor: 'text-gray-900',
      visualType: 'components'
    },
    {
      id: 5,
      title: 'UX/UI audits',
      description: 'Deep research into conversion leaks and usability gaps, plus expert recs to boost performance.',
      background: '#ffffff',
      variant: 'light' as const,
      textColor: 'text-gray-900',
      visualType: 'comparison'
    },
    {
      id: 6,
      title: 'Copy & motion support',
      description: 'Full-stack creative including headlines, content hierarchy, microcopy, and animation.',
      background: '#ffffff',
      variant: 'light' as const,
      textColor: 'text-gray-900',
      visualType: 'typography'
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery and onboarding',
      description: 'Together, we align on your brand, tech stack, audience, and site goals.'
    },
    {
      number: 2,
      title: 'Team assignment',
      description: 'Get your own plug-in creative team: strategists, designers, developers, writers, and animators.'
    },
    {
      number: 3,
      title: 'UX and UI design',
      description: 'Structured process from wireframes to polished UI, always built for outcomes.'
    },
    {
      number: 4,
      title: 'Development',
      description: 'Built in Webflow with CMS, SEO, and speed in mind—modular or fully custom.'
    },
    {
      number: 5,
      title: 'QA and launch',
      description: 'We test and fine-tune across breakpoints, devices, and integrations.'
    },
    {
      number: 6,
      title: 'Continuous optimization',
      description: 'Post-launch audits, CRO improvements, and design updates as you grow.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
            
            <div className="text-lg font-semibold text-gray-900">
              Service Grid — Design System
            </div>

            <button className="px-4 py-2 bg-[#a8e063] text-[#0e6249] rounded-lg text-sm font-semibold hover:bg-[#94c752] transition-colors">
              Book a demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F8F8F4] py-16 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
            WHAT WE OFFER
          </div>
          
          <h1 className="text-[48px] font-semibold text-gray-900 mb-6 max-w-[900px] mx-auto leading-tight">
            Creative web design, ready to{' '}
            <span className="italic font-normal" style={{ fontFamily: 'Georgia, serif' }}>
              scale and convert
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Whether you're optimizing an existing site or launching something entirely new, we give you everything you need to ship confidently, iterate quickly, and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Visual Area - Premium Device Mockups */}
                <div 
                  className="relative rounded-2xl overflow-hidden mb-8 transition-all duration-500"
                  style={{
                    background: '#F9FAFB',
                    boxShadow: hoveredCard === idx 
                      ? '0 20px 50px rgba(0,0,0,0.08)' 
                      : '0 4px 12px rgba(0,0,0,0.04)',
                    transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)'
                  }}
                >
                  <div className="aspect-[4/3] flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
                    
                    {/* Card 1: MacBook Pro with Website */}
                    {service.visualType === 'macbook' && (
                      <div className="w-full max-w-[280px]">
                        {/* MacBook Pro Frame */}
                        <div className="relative">
                          {/* Screen bezel */}
                          <div className="bg-gray-900 rounded-lg p-2 shadow-2xl">
                            {/* Screen content */}
                            <div className="bg-white rounded-sm aspect-[16/10] overflow-hidden">
                              <div className="h-full flex flex-col">
                                {/* Browser chrome */}
                                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                                  <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                  </div>
                                </div>
                                
                                {/* Website content */}
                                <div className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                      <div className="h-2 bg-gray-300 rounded w-20" />
                                      <div className="flex gap-2">
                                        <div className="h-2 bg-gray-200 rounded w-12" />
                                        <div className="h-2 bg-gray-200 rounded w-12" />
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2 mt-6">
                                      <div className="h-3 bg-gray-800 rounded w-32" />
                                      <div className="h-2 bg-gray-300 rounded w-24" />
                                    </div>
                                    
                                    <div className="w-full aspect-video bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg mt-4 flex items-center justify-center">
                                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* MacBook base */}
                          <div className="h-1 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg" />
                        </div>
                      </div>
                    )}

                    {/* Card 2: Dashboard Interface */}
                    {service.visualType === 'dashboard' && (
                      <div className="w-full max-w-[300px]">
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                          {/* Dashboard header */}
                          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">W</div>
                              <div className="text-white text-xs font-semibold">Webflow Studio</div>
                            </div>
                            <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                          </div>
                          
                          {/* Dashboard content */}
                          <div className="p-4 space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                                <div className="text-[8px] text-blue-600 font-semibold mb-1">Pages</div>
                                <div className="text-lg font-bold text-blue-900">24</div>
                              </div>
                              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                                <div className="text-[8px] text-purple-600 font-semibold mb-1">Components</div>
                                <div className="text-lg font-bold text-purple-900">156</div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-[8px] font-semibold text-gray-600">CMS Collections</div>
                                <div className="text-[8px] text-green-600">Active</div>
                              </div>
                              <div className="space-y-1.5">
                                <div className="h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded w-full" />
                                <div className="h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded w-4/5" />
                                <div className="h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded w-3/5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card 3: iPhone with Landing Page */}
                    {service.visualType === 'iphone' && (
                      <div className="relative">
                        {/* iPhone frame */}
                        <div className="w-[140px] h-[280px] bg-gray-900 rounded-[32px] shadow-2xl p-2 relative">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
                          
                          {/* Screen */}
                          <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative">
                            {/* Status bar */}
                            <div className="absolute top-0 left-0 right-0 h-10 flex items-end justify-between px-6 pb-1 text-[8px] z-20">
                              <div className="text-gray-900 font-semibold">9:41</div>
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-2 border border-gray-900 rounded-sm" />
                              </div>
                            </div>
                            
                            {/* Landing page content */}
                            <div className="h-full bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 flex flex-col">
                              <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12">
                                {/* Logo */}
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 flex items-center justify-center">
                                  <div className="text-white text-xl font-bold">A</div>
                                </div>
                                
                                {/* Heading */}
                                <div className="space-y-1 text-center mb-4">
                                  <div className="h-2 bg-gray-800 rounded w-24 mx-auto" />
                                  <div className="h-2 bg-gray-800 rounded w-20 mx-auto" />
                                </div>
                                
                                {/* Subheading */}
                                <div className="space-y-1 mb-6">
                                  <div className="h-1 bg-gray-400 rounded w-28" />
                                  <div className="h-1 bg-gray-400 rounded w-24" />
                                </div>
                                
                                {/* CTA Button */}
                                <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full py-2 mb-4">
                                  <div className="h-1.5 bg-white/90 rounded w-16 mx-auto" />
                                </div>
                                
                                {/* Secondary link */}
                                <div className="h-1 bg-gray-400 rounded w-20" />
                              </div>
                              
                              {/* Bottom decoration */}
                              <div className="h-20 bg-gradient-to-t from-white/60 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card 4: Design System Components */}
                    {service.visualType === 'components' && (
                      <div className="w-full max-w-[300px] space-y-4">
                        {/* Component library grid */}
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                          <div className="text-[9px] font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded flex items-center justify-center text-white text-[10px]">
                              ◆
                            </div>
                            Design System
                          </div>
                          
                          <div className="space-y-2">
                            {/* Buttons */}
                            <div className="flex gap-2">
                              <div className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg py-1.5 flex items-center justify-center">
                                <div className="h-1 bg-white rounded w-8" />
                              </div>
                              <div className="flex-1 border-2 border-gray-300 rounded-lg py-1.5 flex items-center justify-center">
                                <div className="h-1 bg-gray-600 rounded w-8" />
                              </div>
                            </div>
                            
                            {/* Input field */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                              <div className="h-1 bg-gray-300 rounded w-16" />
                            </div>
                            
                            {/* Color palette */}
                            <div className="flex gap-1.5">
                              <div className="w-6 h-6 rounded bg-blue-500 border border-gray-200" />
                              <div className="w-6 h-6 rounded bg-indigo-500 border border-gray-200" />
                              <div className="w-6 h-6 rounded bg-purple-500 border border-gray-200" />
                              <div className="w-6 h-6 rounded bg-pink-500 border border-gray-200" />
                              <div className="w-6 h-6 rounded bg-gray-800 border border-gray-200" />
                            </div>
                            
                            {/* Typography */}
                            <div className="space-y-1 pt-2">
                              <div className="h-2 bg-gray-800 rounded w-full" />
                              <div className="h-1.5 bg-gray-600 rounded w-5/6" />
                              <div className="h-1 bg-gray-400 rounded w-4/6" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card 5: Before/After UX Audit */}
                    {service.visualType === 'comparison' && (
                      <div className="w-full max-w-[300px]">
                        <div className="grid grid-cols-2 gap-2">
                          {/* Before */}
                          <div className="space-y-1">
                            <div className="text-[8px] font-semibold text-red-600 uppercase tracking-wider">Before</div>
                            <div className="bg-white rounded-lg shadow-lg border border-red-100 p-3 h-36">
                              <div className="space-y-2">
                                <div className="h-1.5 bg-gray-200 rounded w-full" />
                                <div className="h-1.5 bg-gray-200 rounded w-4/5" />
                                <div className="h-8 bg-gray-100 rounded mt-3" />
                                <div className="grid grid-cols-2 gap-1.5 mt-2">
                                  <div className="h-4 bg-gray-200 rounded" />
                                  <div className="h-4 bg-gray-200 rounded" />
                                </div>
                                <div className="h-1 bg-gray-100 rounded w-3/4 mt-2" />
                              </div>
                              {/* Red X indicator */}
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">✕</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* After */}
                          <div className="space-y-1">
                            <div className="text-[8px] font-semibold text-green-600 uppercase tracking-wider">After</div>
                            <div className="bg-white rounded-lg shadow-lg border border-green-100 p-3 h-36 relative">
                              <div className="space-y-2">
                                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded w-full" />
                                <div className="h-1.5 bg-gray-800 rounded w-4/5" />
                                <div className="h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded mt-3 border border-blue-100" />
                                <div className="grid grid-cols-2 gap-1.5 mt-2">
                                  <div className="h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded" />
                                  <div className="h-5 bg-gradient-to-br from-blue-400 to-cyan-500 rounded" />
                                </div>
                              </div>
                              {/* Green check indicator */}
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">✓</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card 6: Typography & Motion */}
                    {service.visualType === 'typography' && (
                      <div className="w-full max-w-[280px]">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
                          {/* Background decoration */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50" />
                          
                          <div className="relative space-y-4">
                            {/* Large headline */}
                            <div className="space-y-1">
                              <div className="h-4 bg-gradient-to-r from-gray-900 to-gray-700 rounded w-full" />
                              <div className="h-4 bg-gradient-to-r from-gray-900 to-gray-700 rounded w-4/5" />
                            </div>
                            
                            {/* Body copy */}
                            <div className="space-y-1.5 pt-2">
                              <div className="h-1.5 bg-gray-400 rounded w-full" />
                              <div className="h-1.5 bg-gray-400 rounded w-11/12" />
                              <div className="h-1.5 bg-gray-400 rounded w-10/12" />
                            </div>
                            
                            {/* CTA with motion indicator */}
                            <div className="pt-2 flex items-center gap-2">
                              <div className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full py-2 flex items-center justify-center">
                                <div className="h-1.5 bg-white rounded w-16" />
                              </div>
                              <div className="flex gap-0.5">
                                <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                                <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-75" />
                                <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-150" />
                              </div>
                            </div>
                            
                            {/* Quote or highlight */}
                            <div className="border-l-2 border-purple-500 pl-3 mt-4">
                              <div className="h-1.5 bg-purple-600 rounded w-3/4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Area - Clean Typography */}
                <div className="px-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  {service.hasLearnMore && (
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 group transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#0e6249] py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Intro */}
            <div>
              <div className="text-xs font-medium text-white/80 uppercase tracking-wider mb-4">
                OUR PROCESS
              </div>
              
              <h2 className="text-[40px] font-bold text-white mb-6">
                Website workflows,{' '}
                <span className="italic font-normal" style={{ fontFamily: 'Georgia, serif' }}>
                  minus the friction
                </span>
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-[500px]">
                No more handoffs, holdups, or creative guesswork. Just a proven system for scalable, 
                brand-aligned web design.
              </p>
              
              <button className="px-6 py-3 bg-[#a8e063] text-[#0e6249] rounded-lg font-semibold hover:bg-[#94c752] transition-all hover:scale-105">
                Book a demo
              </button>
            </div>

            {/* Right Column: Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/30" />

              {/* Steps */}
              <div className="space-y-10">
                {processSteps.map((step, idx) => (
                  <div key={step.number} className="relative flex items-start gap-6">
                    {/* Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center">
                        <span className="text-sm font-bold text-[#1a1a2e]">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-white/85 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              © 2026 StartupAI. Inspired by Superside design system.
            </div>
            
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Back to Home →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}