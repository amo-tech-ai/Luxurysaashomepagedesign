import { CheckCircle2, Target, BarChart3, Calendar, TrendingUp, FileText, Zap, Shield, Users, AlertCircle, Sparkles, ArrowRight, Clock, Brain, Briefcase, MessageSquare, ArrowDown, Play, Layers, GitBranch, Database, Globe, DollarSign } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function HowItWorksPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const handleNavigate = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercent);

      // Check which sections are visible
      const sections = document.querySelectorAll('[data-section]');
      const newVisibleSections = new Set<string>();
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          newVisibleSections.add(section.getAttribute('data-section') || '');
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] relative">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#1a1a1a] bg-opacity-5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-[#1a1a1a] border-opacity-[0.08] sticky top-0 z-40 backdrop-blur-lg bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')}
            className="text-2xl text-[#1a1a1a] font-normal hover:text-[#0d5f4e] transition-colors duration-300"
          >
            StartupAI
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNavigate('how-it-works')}
              className="text-sm text-[#0d5f4e] font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavigate('events')}
              className="text-sm text-[#1a1a1a] hover:text-[#0d5f4e] transition-colors duration-300"
            >
              Events
            </button>
            <button className="px-5 py-2 bg-[#0d5f4e] text-white text-sm rounded-md hover:bg-[#0a4d3e] transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section 
        className="relative py-32 px-6 lg:px-8 overflow-hidden"
        data-section="hero"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 right-20 w-96 h-96 bg-[#0d5f4e] rounded-full opacity-5 blur-3xl"
            style={{ transform: `translateY(${scrollProgress * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-20 left-20 w-72 h-72 bg-[#6b9d89] rounded-full opacity-5 blur-3xl"
            style={{ transform: `translateY(${-scrollProgress * 0.3}px)` }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('hero') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xs text-[#0d5f4e] font-medium uppercase tracking-wider mb-6 animate-fade-in">
              THE COMPLETE SYSTEM
            </p>
            <h1 className="text-6xl lg:text-8xl text-[#1a1a1a] mb-8 leading-tight font-light">
              How StartupAI <span className="italic text-[#0d5f4e]">works</span>
            </h1>
            <p className="text-2xl text-[#1a1a1a] opacity-60 max-w-3xl mx-auto leading-relaxed">
              From strategy to daily execution and fundraising—one intelligent system
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a] opacity-50">
                <Clock className="w-4 h-4" strokeWidth={2} />
                <span>30 min setup</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#1a1a1a] opacity-20" />
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a] opacity-50">
                <Zap className="w-4 h-4" strokeWidth={2} />
                <span>Instant insights</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#1a1a1a] opacity-20" />
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a] opacity-50">
                <TrendingUp className="w-4 h-4" strokeWidth={2} />
                <span>Continuous guidance</span>
              </div>
            </div>
          </div>

          {/* Animated Flow Overview */}
          <div className="max-w-6xl mx-auto mt-24">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d5f4e] to-transparent opacity-20 hidden lg:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                {[
                  { icon: MessageSquare, label: 'Strategy', color: 'from-[#0d5f4e]', delay: 0 },
                  { icon: Brain, label: 'Intelligence', color: 'from-[#6b9d89]', delay: 100 },
                  { icon: Calendar, label: 'Execution', color: 'from-[#0d5f4e]', delay: 200 },
                  { icon: BarChart3, label: 'Analysis', color: 'from-[#6b9d89]', delay: 300 },
                  { icon: TrendingUp, label: 'Growth', color: 'from-[#0d5f4e]', delay: 400 },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center text-center transition-all duration-700 ${
                      visibleSections.has('hero')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} to-transparent bg-opacity-5 border border-[#0d5f4e] border-opacity-20 flex items-center justify-center mb-4 relative z-10 group hover:scale-110 hover:border-opacity-40 transition-all duration-500 hover:shadow-lg`}>
                      <item.icon className="w-8 h-8 text-[#0d5f4e] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>
                    <p className="text-base text-[#1a1a1a] font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-20">
            <div className="flex flex-col items-center gap-3 text-[#1a1a1a] opacity-40 animate-bounce">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" strokeWidth={2} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Capture Strategy (Enhanced Visual) */}
      <section 
        className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden"
        data-section="step1"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div 
              className={`transition-all duration-1000 ${
                visibleSections.has('step1')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0d5f4e] bg-opacity-5 rounded-full">
                <div className="w-6 h-6 rounded-full bg-[#0d5f4e] text-white flex items-center justify-center text-xs font-medium">
                  1
                </div>
                <p className="text-xs text-[#0d5f4e] font-medium uppercase tracking-wider">
                  FOUNDATION
                </p>
              </div>
              
              <h2 className="text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
                Capture your strategy in <span className="italic text-[#0d5f4e]">30 minutes</span>
              </h2>
              
              <p className="text-xl text-[#1a1a1a] opacity-70 leading-relaxed mb-6">
                Our guided strategy session transforms your vision into a structured, actionable plan.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Vision & Mission', icon: Target },
                  { label: 'Market Position', icon: Globe },
                  { label: 'Growth Priorities', icon: TrendingUp },
                  { label: 'Fundraising Goals', icon: DollarSign },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 transition-all duration-700 ${
                      visibleSections.has('step1')
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0d5f4e]" strokeWidth={2} />
                    </div>
                    <p className="text-lg text-[#1a1a1a]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#fafaf8] rounded-lg border border-[#1a1a1a] border-opacity-5">
                <Clock className="w-5 h-5 text-[#0d5f4e]" strokeWidth={2} />
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">One-time setup</p>
                  <p className="text-xs text-[#1a1a1a] opacity-60">Your strategy becomes a living system</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Visual Card */}
            <div 
              className={`transition-all duration-1000 ${
                visibleSections.has('step1')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-gradient-to-br from-[#fafaf8] to-white border border-[#1a1a1a] border-opacity-[0.08] rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0d5f4e] to-transparent opacity-5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium text-[#1a1a1a]">Strategy Session</h3>
                    <div className="px-3 py-1 bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e] text-xs font-medium rounded-full">
                      In Progress
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-[#1a1a1a] opacity-60">Overall Progress</p>
                      <p className="text-sm text-[#0d5f4e] font-medium">6 of 7 complete</p>
                    </div>
                    <div className="relative w-full bg-white rounded-full h-3 shadow-inner">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-1000 flex items-center justify-end pr-1"
                        style={{ width: visibleSections.has('step1') ? '85%' : '0%' }}
                      >
                        <div className="w-5 h-5 bg-white rounded-full border-2 border-[#0d5f4e]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Company vision & mission', status: 'completed', delay: 0 },
                      { label: 'Target market definition', status: 'completed', delay: 100 },
                      { label: 'Competitive positioning', status: 'completed', delay: 200 },
                      { label: 'Product roadmap priorities', status: 'completed', delay: 300 },
                      { label: 'Growth metrics & KPIs', status: 'completed', delay: 400 },
                      { label: 'Fundraising timeline', status: 'completed', delay: 500 },
                      { label: 'Team & hiring plan', status: 'active', delay: 600 },
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-3 p-4 bg-white rounded-lg border transition-all duration-700 ${
                          item.status === 'completed'
                            ? 'border-[#0d5f4e] border-opacity-20'
                            : 'border-[#1a1a1a] border-opacity-5'
                        } ${
                          visibleSections.has('step1')
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-5'
                        }`}
                        style={{ transitionDelay: `${item.delay}ms` }}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          item.status === 'completed'
                            ? 'bg-[#0d5f4e] scale-100'
                            : 'bg-[#1a1a1a] bg-opacity-5 border-2 border-[#1a1a1a] border-opacity-10 scale-90'
                        }`}>
                          {item.status === 'completed' && (
                            <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                          )}
                          {item.status === 'active' && (
                            <div className="w-2 h-2 rounded-full bg-[#0d5f4e] animate-pulse" />
                          )}
                        </div>
                        <p className={`text-sm ${
                          item.status === 'completed'
                            ? 'text-[#1a1a1a] opacity-60'
                            : 'text-[#1a1a1a] font-medium'
                        }`}>
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 - Living System (Dark with Diagram) */}
      <section 
        className="py-32 px-6 lg:px-8 bg-[#1a1a1a] relative overflow-hidden"
        data-section="system"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#0d5f4e 1px, transparent 1px), linear-gradient(90deg, #0d5f4e 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('system')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl lg:text-7xl text-[#fafaf8] mb-6 leading-tight">
              Your strategy becomes a <br />
              <span className="italic bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">living system</span>
            </h2>
            <p className="text-2xl text-[#fafaf8] opacity-60">
              One source of truth, continuously adapting
            </p>
          </div>

          {/* Interactive System Diagram */}
          <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
            
            {/* Center Core */}
            <div 
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                visibleSections.has('system')
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50'
              }`}
            >
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-[#0d5f4e] mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-lg font-medium text-[#fafaf8]">Your Strategy</p>
                    <p className="text-xs text-[#fafaf8] opacity-50">Living Core</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Elements */}
            {[
              { icon: Calendar, label: 'Daily Tasks', position: 'top', angle: 0, delay: 200 },
              { icon: Zap, label: 'Priorities', position: 'right', angle: 90, delay: 400 },
              { icon: BarChart3, label: 'Analysis', position: 'bottom', angle: 180, delay: 600 },
              { icon: TrendingUp, label: 'Fundraising', position: 'left', angle: 270, delay: 800 },
            ].map((node, index) => {
              const radius = 250;
              const radian = (node.angle * Math.PI) / 180;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              
              return (
                <div
                  key={index}
                  className={`absolute left-1/2 top-1/2 transition-all duration-1000 ${
                    visibleSections.has('system')
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${node.delay}ms`
                  }}
                >
                  {/* Connection Line */}
                  <div 
                    className="absolute left-1/2 top-1/2 w-px bg-gradient-to-r from-[#0d5f4e] to-transparent opacity-30"
                    style={{
                      height: `${radius}px`,
                      transform: `rotate(${node.angle + 180}deg)`,
                      transformOrigin: 'top center'
                    }}
                  />
                  
                  {/* Node Card */}
                  <div className="w-40 h-40 rounded-2xl bg-[#1a1a1a] border border-[#0d5f4e] border-opacity-30 p-6 flex flex-col items-center justify-center text-center hover:border-opacity-60 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0d5f4e]/20 backdrop-blur-sm">
                    <node.icon className="w-8 h-8 text-[#6b9d89] mb-3" strokeWidth={1.5} />
                    <p className="text-sm text-[#fafaf8] font-medium">{node.label}</p>
                    <p className="text-xs text-[#fafaf8] opacity-40 mt-1">Auto-synced</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Section 3 - Daily Priorities (Reversed Layout) */}
      <section 
        className="py-32 px-6 lg:px-8 relative overflow-hidden"
        data-section="step2"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Illustrated Priority List */}
            <div 
              className={`order-2 lg:order-1 transition-all duration-1000 ${
                visibleSections.has('step2')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-1">Today's Priorities</h3>
                    <p className="text-sm text-[#1a1a1a] opacity-50">Monday, January 20, 2026</p>
                  </div>
                  <div className="px-3 py-1 bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e] text-xs font-medium rounded-full">
                    5 tasks
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { task: 'Finalize investor deck Q1 metrics', priority: 'critical', impact: 'fundraising', icon: TrendingUp, delay: 0 },
                    { task: 'Review product roadmap with eng team', priority: 'high', impact: 'strategy', icon: Target, delay: 100 },
                    { task: 'Follow up with 3 warm introductions', priority: 'high', impact: 'fundraising', icon: Users, delay: 200 },
                    { task: 'Update financial model', priority: 'medium', impact: 'analysis', icon: BarChart3, delay: 300 },
                    { task: 'Prepare for board meeting', priority: 'medium', impact: 'strategy', icon: Briefcase, delay: 400 },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`group flex items-start gap-4 p-4 bg-[#fafaf8] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-[#0d5f4e] hover:border-opacity-20 cursor-pointer ${
                        visibleSections.has('step2')
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-5'
                      }`}
                      style={{ transitionDelay: `${item.delay}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        item.priority === 'critical'
                          ? 'bg-red-50 group-hover:bg-red-100'
                          : item.priority === 'high'
                          ? 'bg-[#0d5f4e] bg-opacity-10 group-hover:bg-opacity-20'
                          : 'bg-[#1a1a1a] bg-opacity-5 group-hover:bg-opacity-10'
                      }`}>
                        <item.icon className={`w-5 h-5 ${
                          item.priority === 'critical' ? 'text-red-600' : 
                          item.priority === 'high' ? 'text-[#0d5f4e]' : 'text-[#1a1a1a] opacity-40'
                        }`} strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#1a1a1a] font-medium mb-2 group-hover:text-[#0d5f4e] transition-colors">
                          {item.task}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                            item.priority === 'critical'
                              ? 'bg-red-100 text-red-700'
                              : item.priority === 'high'
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-[#1a1a1a] bg-opacity-5 text-[#1a1a1a] opacity-60'
                          }`}>
                            {item.priority}
                          </span>
                          <span className="text-xs text-[#1a1a1a] opacity-40 capitalize">{item.impact}</span>
                        </div>
                      </div>
                      <div className="text-2xl text-[#0d5f4e] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        →
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-3 border-2 border-dashed border-[#1a1a1a] border-opacity-10 rounded-xl text-sm text-[#1a1a1a] opacity-50 hover:opacity-100 hover:border-[#0d5f4e] hover:border-opacity-30 hover:bg-[#0d5f4e] hover:bg-opacity-5 transition-all duration-300">
                  + Add Custom Task
                </button>
              </div>
            </div>

            {/* Right: Text Content */}
            <div 
              className={`order-1 lg:order-2 transition-all duration-1000 ${
                visibleSections.has('step2')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0d5f4e] bg-opacity-5 rounded-full">
                <div className="w-6 h-6 rounded-full bg-[#0d5f4e] text-white flex items-center justify-center text-xs font-medium">
                  2
                </div>
                <p className="text-xs text-[#0d5f4e] font-medium uppercase tracking-wider">
                  EXECUTION
                </p>
              </div>
              
              <h2 className="text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
                Clear priorities <span className="italic text-[#0d5f4e]">every day</span>
              </h2>
              
              <p className="text-xl text-[#1a1a1a] opacity-70 leading-relaxed mb-6">
                Your priorities are intelligently ranked based on strategic impact, fundraising goals, and market timing.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">AI-Powered Ranking</h3>
                    <p className="text-base text-[#1a1a1a] opacity-60 leading-relaxed">
                      Tasks are automatically prioritized based on strategic alignment and impact potential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Context Aware</h3>
                    <p className="text-base text-[#1a1a1a] opacity-60 leading-relaxed">
                      Your priorities adapt based on fundraising stage, market conditions, and team capacity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4 - AI Insights */}
      <section 
        className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden"
        data-section="step3"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <div 
              className={`transition-all duration-1000 ${
                visibleSections.has('step3')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0d5f4e] bg-opacity-5 rounded-full">
                <div className="w-6 h-6 rounded-full bg-[#0d5f4e] text-white flex items-center justify-center text-xs font-medium">
                  3
                </div>
                <p className="text-xs text-[#0d5f4e] font-medium uppercase tracking-wider">
                  INTELLIGENCE
                </p>
              </div>
              
              <h2 className="text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
                Make better decisions, <span className="italic text-[#0d5f4e]">faster</span>
              </h2>
              
              <p className="text-xl text-[#1a1a1a] opacity-70 leading-relaxed mb-8">
                AI-powered insights surface opportunities, risks, and strategic misalignments before they become problems.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Risk Detection', value: '24/7', icon: Shield },
                  { label: 'Opportunity Alerts', value: 'Real-time', icon: Zap },
                  { label: 'Strategy Alignment', value: 'Continuous', icon: Target },
                  { label: 'Market Signals', value: 'Live', icon: TrendingUp },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className={`p-4 bg-[#fafaf8] rounded-xl border border-[#1a1a1a] border-opacity-5 hover:border-[#0d5f4e] hover:border-opacity-20 transition-all duration-500 ${
                      visibleSections.has('step3')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <stat.icon className="w-6 h-6 text-[#0d5f4e] mb-2" strokeWidth={2} />
                    <p className="text-2xl font-light text-[#1a1a1a] mb-1">{stat.value}</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI Card with Animation */}
            <div 
              className={`transition-all duration-1000 ${
                visibleSections.has('step3')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-2xl blur-2xl opacity-20" />
                
                <div className="relative bg-gradient-to-br from-[#0d5f4e] via-[#0d5f4e] to-[#6b9d89] rounded-2xl p-8 text-white shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-6 h-6 animate-pulse" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">AI Recommendation</p>
                      <p className="text-xs opacity-70">Based on your strategy</p>
                    </div>
                    <div className="ml-auto px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-medium">
                      New
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium mb-6 leading-tight">
                    Consider accelerating your Series A timeline
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      'Revenue growth 40% ahead of plan',
                      'Market conditions favorable Q1 2026',
                      '12 warm investor intros in pipeline',
                      'Team capacity at optimal level'
                    ].map((insight, index) => (
                      <div 
                        key={index}
                        className={`flex items-start gap-3 transition-all duration-700 ${
                          visibleSections.has('step3')
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-5'
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" strokeWidth={2} />
                        <p className="text-sm opacity-90 leading-relaxed">{insight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 bg-white text-[#0d5f4e] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
                      Review Analysis
                    </button>
                    <button className="px-6 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section 
        className="py-32 px-6 lg:px-8 bg-[#fafaf8]"
        data-section="features"
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('features')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
              Everything you need to build and raise
            </h2>
            <p className="text-xl text-[#1a1a1a] opacity-60">
              Six core capabilities, one unified system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Intelligent Prioritization',
                description: 'Auto-ranked tasks based on strategic impact and fundraising goals',
                color: 'from-amber-500',
                delay: 0
              },
              {
                icon: Users,
                title: 'Investor Pipeline',
                description: 'Track intros, meetings, and follow-ups in one organized view',
                color: 'from-blue-500',
                delay: 100
              },
              {
                icon: BarChart3,
                title: 'Strategy Analysis',
                description: 'Continuous assessment of progress against strategic goals',
                color: 'from-green-500',
                delay: 200
              },
              {
                icon: Shield,
                title: 'Risk Detection',
                description: 'Early warnings for strategic drift and execution gaps',
                color: 'from-red-500',
                delay: 300
              },
              {
                icon: TrendingUp,
                title: 'Progress Tracking',
                description: 'Real-time visibility into what\'s working and what\'s not',
                color: 'from-purple-500',
                delay: 400
              },
              {
                icon: FileText,
                title: 'Document Generation',
                description: 'AI-powered decks, memos, and updates aligned to your strategy',
                color: 'from-indigo-500',
                delay: 500
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-2xl p-8 hover:border-opacity-20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has('features')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} to-transparent bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon className="w-7 h-7 text-[#0d5f4e]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 group-hover:text-[#0d5f4e] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-[#1a1a1a] opacity-60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Flow Diagram */}
      <section 
        className="py-32 px-6 lg:px-8 bg-white"
        data-section="flow"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('flow')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              The complete flow
            </h2>
            <p className="text-xl text-[#1a1a1a] opacity-60">
              From strategy to execution to fundraising success
            </p>
          </div>

          {/* Flow Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0d5f4e] to-transparent opacity-20" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: MessageSquare, label: 'Strategy Session', sublabel: '30 min setup', delay: 0 },
                { icon: Brain, label: 'AI Processing', sublabel: 'Instant analysis', delay: 100 },
                { icon: Calendar, label: 'Daily Priorities', sublabel: 'Auto-ranked', delay: 200 },
                { icon: BarChart3, label: 'Progress Tracking', sublabel: 'Real-time', delay: 300 },
                { icon: TrendingUp, label: 'Fundraising Ready', sublabel: 'Always prepared', delay: 400 },
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`relative text-center transition-all duration-1000 ${
                    visibleSections.has('flow')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${step.delay}ms` }}
                >
                  <div className="relative mb-6 mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] p-0.5 hover:scale-110 transition-all duration-500 group cursor-pointer">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#fafaf8] transition-colors">
                      <step.icon className="w-10 h-10 text-[#0d5f4e] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <p className="text-base font-medium text-[#1a1a1a] mb-2">{step.label}</p>
                  <p className="text-sm text-[#1a1a1a] opacity-50">{step.sublabel}</p>
                  
                  {index < 4 && (
                    <ArrowRight className="hidden lg:block absolute top-12 -right-4 w-6 h-6 text-[#0d5f4e] opacity-30" strokeWidth={2} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 lg:px-8 bg-[#1a1a1a] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0d5f4e] rounded-full opacity-10 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6b9d89] rounded-full opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl lg:text-7xl text-[#fafaf8] mb-8 leading-tight">
            Ready to see it <span className="italic text-[#6b9d89]">work</span>?
          </h2>
          <p className="text-2xl text-[#fafaf8] opacity-70 mb-12 leading-relaxed">
            Start with a 30-minute strategy session.<br />No credit card required.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] text-white text-lg rounded-xl hover:shadow-2xl hover:shadow-[#0d5f4e]/30 transition-all duration-500 inline-flex items-center gap-3 group hover:scale-105">
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            Start Your Strategy Session
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-white border-opacity-[0.08] py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-medium text-[#fafaf8] mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavigate('how-it-works')}
                    className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Features
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Pricing
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-[#fafaf8] mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavigate('events')}
                    className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Support
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-[#fafaf8] mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    About
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Careers
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-[#fafaf8] mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Privacy
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#fafaf8] opacity-60 hover:opacity-100 transition-opacity">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white border-opacity-[0.08]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#fafaf8] opacity-40">
                © 2026 StartupAI. All rights reserved.
              </p>
              <button 
                onClick={() => handleNavigate('home')}
                className="text-xl text-[#fafaf8] hover:text-[#6b9d89] transition-colors duration-300"
              >
                StartupAI
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>

    </div>
  );
}