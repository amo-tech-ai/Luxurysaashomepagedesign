import React, { useState } from 'react';
import {
  LayoutDashboard,
  Target,
  FolderKanban,
  CheckSquare,
  Calendar,
  Users,
  FileText,
  Grid3x3,
  TrendingUp,
  User,
  Building2,
  Settings,
  Search,
  Plus,
  FileSpreadsheet,
  DollarSign,
  Video,
  FolderOpen,
  ArrowUpRight,
  ArrowDownRight,
  Lightbulb,
  Gift,
  MapPin,
  ChevronRight,
  Sparkles,
  Home,
  Clock,
  Zap,
  CheckCircle2,
  Bell,
  MoreHorizontal,
  TrendingDown,
} from 'lucide-react';

interface DashboardMainPageProps {
  onNavigate?: (page: string) => void;
  activeView?: string;
}

export default function DashboardMainPage({ onNavigate, activeView = 'main' }: DashboardMainPageProps) {
  const [activeTab, setActiveTab] = useState<'insights' | 'tasks' | 'activity'>('insights');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#FAFAF8] to-[#F5F5F3] flex">
      {/* LEFT PANEL - PRIMARY NAVIGATION (FIXED) */}
      <aside className="w-72 bg-white border-r border-[#E8E6E1] flex flex-col fixed left-0 top-0 h-screen shadow-sm">
        {/* Logo */}
        <div className="px-8 py-8 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center shadow-lg shadow-[#0D5F4E]/20">
              <span className="text-white font-bold text-lg tracking-tight">S</span>
            </div>
            <div>
              <h1 className="font-serif text-xl text-[#2D2D2D] tracking-tight leading-none">
                StartupAI
              </h1>
              <p className="text-xs text-[#A3A3A3] mt-0.5">AI Operating System</p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="px-6 pt-6 pb-4">
          <button
            onClick={() => onNavigate?.('home')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#0D5F4E] hover:bg-[#0D5F4E] hover:bg-opacity-5 transition-all duration-200 group"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="flex-1 text-left">Back to Home</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-6 py-2 space-y-1 overflow-y-auto">
          <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider px-4 mb-3 mt-2">
            Main Menu
          </p>
          <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active={activeView === 'main'} onClick={() => onNavigate?.('dashboard-main')} />
          <NavItem icon={<Target className="w-5 h-5" />} label="Onboarding Wizard" onClick={() => onNavigate?.('onboarding-v2')} />
          <NavItem icon={<FolderKanban className="w-5 h-5" />} label="Projects" badge="3" onClick={() => {}} />
          <NavItem icon={<CheckSquare className="w-5 h-5" />} label="Tasks" badge="12" onClick={() => {}} />
          <NavItem icon={<Calendar className="w-5 h-5" />} label="Events" onClick={() => onNavigate?.('events')} />
          
          <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider px-4 mb-3 mt-6">
            Tools
          </p>
          <NavItem icon={<Users className="w-5 h-5" />} label="CRM" onClick={() => {}} />
          <NavItem icon={<FileText className="w-5 h-5" />} label="Documents" onClick={() => {}} />
          <NavItem icon={<Grid3x3 className="w-5 h-5" />} label="Lean Canvas" onClick={() => onNavigate?.('lean-canvas')} />
          <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Investors" onClick={() => {}} />
          
          <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider px-4 mb-3 mt-6">
            Account
          </p>
          <NavItem icon={<User className="w-5 h-5" />} label="User Profile" onClick={() => {}} />
          <NavItem icon={<Building2 className="w-5 h-5" />} label="Company" onClick={() => {}} />
        </nav>

        {/* Bottom Section */}
        <div className="px-6 pb-6 space-y-4 border-t border-[#E8E6E1] pt-6">
          {/* Strategy Progress */}
          <div className="px-4 py-5 bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 rounded-xl border border-[#0D5F4E]/10">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#0D5F4E]" />
              <span className="text-xs font-semibold text-[#2D2D2D]">Strategy Progress</span>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-[#0D5F4E]">68</span>
              <span className="text-sm text-[#4A4A4A]">%</span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500" style={{ width: '68%' }} />
            </div>
            <p className="text-xs text-[#4A4A4A] mt-3">4 tasks until next milestone</p>
          </div>

          {/* Settings */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#4A4A4A] hover:bg-[#F5F5F3] hover:text-[#0D5F4E] transition-all duration-200 group">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium flex-1 text-left">Settings</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>
      </aside>

      {/* CENTER PANEL - MAIN DASHBOARD (FOCUS AREA) */}
      <main className="flex-1 ml-72 mr-96 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-10 py-10">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                    Tuesday, January 27, 2026
                  </p>
                  <span className="px-2 py-1 bg-[#0D5F4E] bg-opacity-10 text-[#0D5F4E] text-xs font-semibold rounded-full">
                    Ideation Stage
                  </span>
                </div>
                <h1 className="font-serif text-5xl text-[#2D2D2D] mb-3 leading-tight tracking-tight">
                  Good morning,<br />Sanjiovani.
                </h1>
                <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-2xl">
                  Your command center for strategy, execution, and fundraising.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-3 hover:bg-white rounded-xl transition-all duration-200 relative group">
                  <Bell className="w-5 h-5 text-[#4A4A4A] group-hover:text-[#0D5F4E] transition-colors duration-200" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full ring-2 ring-white" />
                </button>
                <button className="p-3 hover:bg-white rounded-xl transition-all duration-200 group">
                  <Calendar className="w-5 h-5 text-[#4A4A4A] group-hover:text-[#0D5F4E] transition-colors duration-200" />
                </button>
              </div>
            </div>

            {/* Global Search */}
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3A3A3] group-focus-within:text-[#0D5F4E] transition-colors duration-200" />
              <input
                type="text"
                placeholder="Search tasks, projects, investors, documents..."
                className="w-full pl-14 pr-6 py-4 bg-white border border-[#E8E6E1] rounded-xl text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E] focus:ring-opacity-10 transition-all duration-200 shadow-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-2 py-1 bg-[#F5F5F3] text-[#A3A3A3] text-xs rounded border border-[#E8E6E1]">⌘</kbd>
                <kbd className="px-2 py-1 bg-[#F5F5F3] text-[#A3A3A3] text-xs rounded border border-[#E8E6E1]">K</kbd>
              </div>
            </div>
          </header>

          {/* Quick Actions */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-[#2D2D2D]">Quick Actions</h2>
              <button className="text-sm text-[#0D5F4E] hover:underline font-medium">
                Customize →
              </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <QuickActionCard icon={<Plus className="w-5 h-5" />} label="New Pitch Deck" description="AI-powered" />
              <QuickActionCard icon={<FileSpreadsheet className="w-5 h-5" />} label="Investor Docs" description="Templates" />
              <QuickActionCard icon={<DollarSign className="w-5 h-5" />} label="Find Capital" description="Matching" />
              <QuickActionCard icon={<Video className="w-5 h-5" />} label="Record Pitch" description="1-click" />
              <QuickActionCard icon={<FolderOpen className="w-5 h-5" />} label="Data Room" description="Secure" />
            </div>
          </section>

          {/* Key Metrics Grid */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-[#2D2D2D]">Key Metrics</h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-xs font-medium text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white rounded-lg transition-all duration-200">
                  This Week
                </button>
                <button className="px-3 py-1.5 text-xs font-medium text-white bg-[#0D5F4E] rounded-lg">
                  This Month
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <MetricCard 
                label="Active Projects" 
                value="12" 
                delta="+2 this week" 
                trend="up"
                percentage={16.7}
              />
              <MetricCard 
                label="Investor Contacts" 
                value="34" 
                delta="+8 this week" 
                trend="up"
                percentage={30.8}
              />
              <MetricCard 
                label="Open Tasks" 
                value="28" 
                delta="-3 completed" 
                trend="down"
                percentage={10.7}
              />
              <MetricCard 
                label="Upcoming Events" 
                value="3" 
                delta="Next: Tomorrow" 
                trend="neutral"
                percentage={0}
              />
            </div>
          </section>

          {/* Startup Health & Performance Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-2 gap-6">
              {/* Startup Health Score */}
              <div className="bg-white border border-[#E8E6E1] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">Startup Health</h3>
                    <p className="text-sm text-[#A3A3A3]">Overall readiness score</p>
                  </div>
                  <button className="text-sm text-[#0D5F4E] hover:underline font-medium flex items-center gap-1">
                    Full Report
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Score Visualization */}
                <div className="flex items-center gap-8 mb-8">
                  <div className="relative">
                    <svg className="w-36 h-36 -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r="64"
                        stroke="#F5F5F3"
                        strokeWidth="10"
                        fill="none"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="64"
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 64}`}
                        strokeDashoffset={`${2 * Math.PI * 64 * (1 - 0.59)}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0D5F4E" />
                          <stop offset="100%" stopColor="#0a4a3c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold text-[#0D5F4E] mb-0.5">59</div>
                      <div className="text-sm text-[#A3A3A3]">/ 100</div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <ScoreBar label="Brand Story" score={80} color="emerald" />
                    <ScoreBar label="Market Validation" score={45} color="amber" />
                    <ScoreBar label="Traction" score={40} color="amber" />
                  </div>
                </div>

                {/* AI Insight */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 rounded-xl border border-[#0D5F4E]/10">
                  <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#2D2D2D] leading-relaxed">
                      <span className="font-semibold">AI Recommendation:</span> Add Monthly Active Users metric to boost your Traction score by 15 points.
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="bg-white border border-[#E8E6E1] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">Activity Overview</h3>
                    <p className="text-sm text-[#A3A3A3]">Last 4 months</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c]" />
                      <span className="text-xs text-[#4A4A4A] font-medium">Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#D4A574] to-[#b8915e]" />
                      <span className="text-xs text-[#4A4A4A] font-medium">Documents</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bar Chart */}
                <div className="h-56 flex items-end justify-between gap-4 mb-4">
                  <BarGroup label="May" project={75} document={55} />
                  <BarGroup label="Jun" project={85} document={70} />
                  <BarGroup label="Jul" project={95} document={45} />
                  <BarGroup label="Aug" project={100} document={80} />
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E6E1]">
                  <div>
                    <p className="text-xs text-[#A3A3A3] mb-1">Peak Month</p>
                    <p className="text-lg font-bold text-[#2D2D2D]">August</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A3A3A3] mb-1">Avg. Growth</p>
                    <p className="text-lg font-bold text-[#0D5F4E]">+18%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A3A3A3] mb-1">Total Items</p>
                    <p className="text-lg font-bold text-[#2D2D2D]">147</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Insights & Activity Feed */}
          <section className="mb-12">
            <div className="bg-white border border-[#E8E6E1] rounded-2xl overflow-hidden shadow-sm">
              {/* Tab Navigation */}
              <div className="flex items-center border-b border-[#E8E6E1] px-2">
                <TabButton
                  label="AI Insights"
                  count={3}
                  active={activeTab === 'insights'}
                  onClick={() => setActiveTab('insights')}
                />
                <TabButton
                  label="Priority Tasks"
                  count={5}
                  active={activeTab === 'tasks'}
                  onClick={() => setActiveTab('tasks')}
                />
                <TabButton
                  label="Recent Activity"
                  count={8}
                  active={activeTab === 'activity'}
                  onClick={() => setActiveTab('activity')}
                />
                <div className="ml-auto px-4">
                  <button className="p-2 hover:bg-[#F5F5F3] rounded-lg transition-colors duration-200">
                    <MoreHorizontal className="w-5 h-5 text-[#A3A3A3]" />
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'insights' && (
                  <div className="space-y-4">
                    <InsightCard
                      type="AI Strategy"
                      title="Update your traction slide to improve investor credibility"
                      description="Based on analysis of 500+ successful pitch decks"
                      cta="Review Suggestions"
                      icon={<Sparkles className="w-4 h-4" />}
                      iconBg="emerald"
                    />
                    <InsightCard
                      type="New Benefit"
                      title="90% off HubSpot for Startups – exclusive partner offer"
                      description="Save $12,000 in your first year"
                      cta="Claim Benefit"
                      icon={<Gift className="w-4 h-4" />}
                      iconBg="purple"
                    />
                    <InsightCard
                      type="Upcoming"
                      title="Founder Networking Night – January 29, 2026"
                      description="Connect with 50+ founders and 10 investors"
                      cta="RSVP Now"
                      icon={<MapPin className="w-4 h-4" />}
                      iconBg="blue"
                    />
                  </div>
                )}
                {activeTab === 'tasks' && (
                  <div className="space-y-3">
                    <TaskCard 
                      title="Complete Lean Canvas"
                      project="Strategy"
                      priority="high"
                      dueDate="Today"
                    />
                    <TaskCard 
                      title="Review investor feedback on pitch deck"
                      project="Fundraising"
                      priority="high"
                      dueDate="Tomorrow"
                    />
                    <TaskCard 
                      title="Update financial projections for Q2"
                      project="Finance"
                      priority="medium"
                      dueDate="Jan 30"
                    />
                    <TaskCard 
                      title="Schedule customer interviews"
                      project="Research"
                      priority="medium"
                      dueDate="Feb 2"
                    />
                    <TaskCard 
                      title="Prepare Q1 board meeting materials"
                      project="Governance"
                      priority="low"
                      dueDate="Feb 15"
                    />
                  </div>
                )}
                {activeTab === 'activity' && (
                  <div className="space-y-4">
                    <ActivityItem 
                      action="created"
                      item="Q4 Pitch Deck v3"
                      time="2 hours ago"
                      user="You"
                    />
                    <ActivityItem 
                      action="commented on"
                      item="Investor Meeting Notes"
                      time="5 hours ago"
                      user="Sarah Chen"
                    />
                    <ActivityItem 
                      action="completed"
                      item="Customer Discovery Interview #12"
                      time="Yesterday"
                      user="You"
                    />
                    <ActivityItem 
                      action="shared"
                      item="Financial Model 2026"
                      time="2 days ago"
                      user="Michael Rodriguez"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* RIGHT PANEL - AI GUIDANCE & CONTEXT (FIXED) */}
      <aside className="w-96 bg-white border-l border-[#E8E6E1] fixed right-0 top-0 h-screen overflow-y-auto shadow-lg">
        <div className="p-8 space-y-8">
          {/* Stage Progress */}
          <div className="pb-8 border-b border-[#E8E6E1]">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-[#0D5F4E]" />
                <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                  Current Stage
                </span>
              </div>
              <h3 className="font-serif text-3xl text-[#2D2D2D] mb-2">
                Ideation
              </h3>
              <p className="text-sm text-[#4A4A4A]">12% complete · 4 weeks in stage</p>
            </div>

            <div className="w-full h-3 bg-[#F5F5F3] rounded-full overflow-hidden mb-5 shadow-inner">
              <div className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500 relative" style={{ width: '12%' }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-full bg-white/30" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#A3A3A3] mb-6">
              <span>Start</span>
              <span className="font-medium text-[#0D5F4E]">Next: Validation</span>
            </div>

            {/* Enhanced Milestones */}
            <div className="space-y-3 mb-6">
              <MilestoneItem label="Complete Lean Canvas" status="incomplete" progress={0} />
              <MilestoneItem label="Startup Profile" status="progress" progress={59} />
              <MilestoneItem label="Customer Interviews" status="incomplete" progress={0} subtitle="0 of 20" />
            </div>

            <button className="w-full px-5 py-3.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-[#0D5F4E]/20 transition-all duration-200 flex items-center justify-center gap-2 group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              Get AI Guidance
            </button>
          </div>

          {/* AI Strategic Review */}
          <div className="pb-8 border-b border-[#E8E6E1]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#2D2D2D]">
                  AI Strategic Review
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
            </div>
            <div className="p-4 bg-[#FAFAF8] border border-[#E8E6E1] rounded-xl">
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Your startup is on track. Focus on completing customer interviews to unlock validation insights.
              </p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-sm font-semibold text-[#2D2D2D]">
                Upcoming Events
              </h4>
              <button className="text-xs text-[#0D5F4E] hover:underline font-medium">
                View All
              </button>
            </div>

            {/* Featured Event Card */}
            <div className="bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl overflow-hidden mb-5 shadow-lg shadow-[#0D5F4E]/20">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#0D5F4E]/80 to-[#0a4a3c] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
                <Calendar className="w-16 h-16 text-white opacity-20" />
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-lg mb-3">
                  Networking
                </span>
                <h5 className="font-serif text-xl text-white mb-2 leading-tight">
                  Rhythm & Beats Music Festival
                </h5>
                <p className="text-sm text-white/80 mb-4">
                  Sunset Park, Los Angeles, CA
                </p>
                <div className="flex items-center gap-2 text-white/90 text-sm mb-5">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Jan 20, 2026 · 7:00 PM</span>
                </div>
                <button className="w-full px-4 py-3 bg-white text-[#0D5F4E] rounded-xl text-sm font-semibold hover:bg-white/95 transition-all duration-200 shadow-lg">
                  View Details
                </button>
              </div>
            </div>

            {/* Mini Calendar */}
            <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-xl p-5">
              <div className="flex items-center justify-between mb-5">
                <h5 className="font-serif text-lg text-[#2D2D2D]">January 2026</h5>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-white rounded-lg transition-colors duration-200">
                    <ChevronRight className="w-4 h-4 text-[#4A4A4A] rotate-180" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded-lg transition-colors duration-200">
                    <ChevronRight className="w-4 h-4 text-[#4A4A4A]" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-center text-xs text-[#A3A3A3] font-semibold py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 2;
                  const isToday = day === 27;
                  const hasEvent = day === 20 || day === 29;
                  if (day < 1 || day > 31) {
                    return <div key={i} />;
                  }
                  return (
                    <button
                      key={i}
                      className={`
                        aspect-square text-sm rounded-lg transition-all duration-200 font-medium
                        ${isToday ? 'bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] text-white shadow-md' : ''}
                        ${hasEvent && !isToday ? 'bg-[#0D5F4E]/10 text-[#0D5F4E] ring-1 ring-[#0D5F4E]/20' : ''}
                        ${!isToday && !hasEvent ? 'text-[#2D2D2D] hover:bg-white' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <button className="w-full mt-5 px-4 py-2.5 bg-white border border-[#E8E6E1] text-[#4A4A4A] rounded-xl text-sm font-medium hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all duration-200 flex items-center justify-center gap-2">
                View All Events
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

// ENHANCED COMPONENT UTILITIES

function NavItem({ icon, label, active = false, badge, onClick }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${active 
          ? 'bg-gradient-to-r from-[#0D5F4E]/10 to-[#0D5F4E]/5 text-[#0D5F4E] shadow-sm ring-1 ring-[#0D5F4E]/10' 
          : 'text-[#4A4A4A] hover:bg-[#F5F5F3] hover:text-[#0D5F4E]'
        }
      `}
    >
      <div className={`${active ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-200`}>
        {icon}
      </div>
      <span className="text-sm font-medium flex-1 text-left">{label}</span>
      {badge && (
        <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
          active 
            ? 'bg-[#0D5F4E] text-white' 
            : 'bg-[#F5F5F3] text-[#A3A3A3] group-hover:bg-[#0D5F4E] group-hover:text-white'
        }`}>
          {badge}
        </span>
      )}
    </button>
  );
}

function QuickActionCard({ icon, label, description }: { icon: React.ReactNode; label: string; description: string }) {
  return (
    <button className="group bg-white border border-[#E8E6E1] rounded-xl p-5 hover:border-[#0D5F4E] hover:shadow-lg transition-all duration-300 text-left">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D5F4E]/10 to-[#0D5F4E]/5 flex items-center justify-center text-[#0D5F4E] mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0D5F4E] group-hover:to-[#0a4a3c] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0D5F4E]/20 transition-all duration-300">
        {icon}
      </div>
      <div className="text-sm font-semibold text-[#2D2D2D] mb-1 group-hover:text-[#0D5F4E] transition-colors duration-200">
        {label}
      </div>
      <div className="text-xs text-[#A3A3A3]">
        {description}
      </div>
    </button>
  );
}

function MetricCard({ label, value, delta, trend, percentage }: { label: string; value: string; delta: string; trend: 'up' | 'down' | 'neutral'; percentage: number }) {
  return (
    <div className="bg-white border border-[#E8E6E1] rounded-xl p-6 hover:border-[#0D5F4E] hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-[#A3A3A3]">{label}</span>
        <div className={`p-2 rounded-lg ${
          trend === 'up' ? 'bg-[#0D5F4E]/10 text-[#0D5F4E]' : 
          trend === 'down' ? 'bg-[#EF4444]/10 text-[#EF4444]' : 
          'bg-[#F5F5F3] text-[#A3A3A3]'
        }`}>
          {trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
          {trend === 'down' && <ArrowDownRight className="w-4 h-4" />}
          {trend === 'neutral' && <TrendingDown className="w-4 h-4 opacity-30" />}
        </div>
      </div>
      <div className="text-4xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#0D5F4E] transition-colors duration-200">
        {value}
      </div>
      <div className={`text-xs font-semibold mb-3 ${
        trend === 'up' ? 'text-[#0D5F4E]' : 
        trend === 'down' ? 'text-[#EF4444]' : 
        'text-[#A3A3A3]'
      }`}>
        {delta}
      </div>
      {percentage > 0 && (
        <div className="w-full h-1.5 bg-[#F5F5F3] rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              trend === 'up' ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c]' : 
              trend === 'down' ? 'bg-gradient-to-r from-[#EF4444] to-[#dc2626]' : 
              'bg-[#A3A3A3]'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
}

function ScoreBar({ label, score, color }: { label: string; score: number; color: 'emerald' | 'amber' }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#4A4A4A]">{label}</span>
        <span className="text-sm font-bold text-[#2D2D2D]">{score}/100</span>
      </div>
      <div className="w-full h-2.5 bg-[#F5F5F3] rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${
            color === 'emerald' 
              ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c]' 
              : 'bg-gradient-to-r from-[#D4A574] to-[#b8915e]'
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function BarGroup({ label, project, document }: { label: string; project: number; document: number }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="w-full flex items-end justify-center gap-2 mb-3" style={{ height: '180px' }}>
        <div className="relative group/bar">
          <div
            className="w-10 bg-gradient-to-t from-[#0D5F4E] to-[#0a4a3c] rounded-t-lg transition-all duration-300 hover:opacity-80"
            style={{ height: `${project}%` }}
          />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#2D2D2D] text-white text-xs rounded opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {project}
          </div>
        </div>
        <div className="relative group/bar">
          <div
            className="w-10 bg-gradient-to-t from-[#D4A574] to-[#b8915e] rounded-t-lg transition-all duration-300 hover:opacity-80"
            style={{ height: `${document}%` }}
          />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#2D2D2D] text-white text-xs rounded opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {document}
          </div>
        </div>
      </div>
      <span className="text-xs font-medium text-[#4A4A4A]">{label}</span>
    </div>
  );
}

function TabButton({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 px-6 py-4 border-b-2 transition-all duration-200 relative
        ${active ? 'border-[#0D5F4E] text-[#0D5F4E]' : 'border-transparent text-[#A3A3A3] hover:text-[#4A4A4A]'}
      `}
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
        active 
          ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white shadow-sm' 
          : 'bg-[#F5F5F3] text-[#A3A3A3]'
      }`}>
        {count}
      </span>
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c]" />
      )}
    </button>
  );
}

function InsightCard({ type, title, description, cta, icon, iconBg }: { 
  type: string; 
  title: string; 
  description: string;
  cta: string; 
  icon: React.ReactNode;
  iconBg: 'emerald' | 'purple' | 'blue';
}) {
  const bgColors = {
    emerald: 'from-[#0D5F4E] to-[#0a4a3c]',
    purple: 'from-[#9333EA] to-[#7e22ce]',
    blue: 'from-[#3B82F6] to-[#2563eb]',
  };

  return (
    <div className="flex items-start gap-5 p-5 bg-[#FAFAF8] border border-[#E8E6E1] rounded-xl hover:border-[#0D5F4E] hover:shadow-md transition-all duration-300 cursor-pointer group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bgColors[iconBg]} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <span className="inline-block text-[10px] font-bold text-[#0D5F4E] uppercase tracking-wider mb-2">
          {type}
        </span>
        <h4 className="text-sm font-semibold text-[#2D2D2D] mb-2 leading-relaxed">
          {title}
        </h4>
        <p className="text-xs text-[#A3A3A3] mb-3 leading-relaxed">
          {description}
        </p>
        <button className="text-xs text-[#0D5F4E] font-semibold hover:underline flex items-center gap-1">
          {cta}
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

function TaskCard({ title, project, priority, dueDate }: { 
  title: string; 
  project: string; 
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}) {
  const priorityColors = {
    high: 'bg-[#EF4444]/10 text-[#EF4444] ring-[#EF4444]/20',
    medium: 'bg-[#D4A574]/10 text-[#D4A574] ring-[#D4A574]/20',
    low: 'bg-[#A3A3A3]/10 text-[#A3A3A3] ring-[#A3A3A3]/20',
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-[#E8E6E1] rounded-xl hover:border-[#0D5F4E] hover:shadow-md transition-all duration-300 group">
      <button className="w-5 h-5 rounded-md border-2 border-[#E8E6E1] hover:border-[#0D5F4E] transition-colors duration-200" />
      <div className="flex-1">
        <h5 className="text-sm font-medium text-[#2D2D2D] mb-1 group-hover:text-[#0D5F4E] transition-colors duration-200">
          {title}
        </h5>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#A3A3A3]">{project}</span>
          <span className="text-xs text-[#E8E6E1]">•</span>
          <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ring-1 ${priorityColors[priority]}`}>
            {priority}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
        <Clock className="w-4 h-4" />
        <span>{dueDate}</span>
      </div>
    </div>
  );
}

function ActivityItem({ action, item, time, user }: {
  action: string;
  item: string;
  time: string;
  user: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        {user.charAt(0)}
      </div>
      <div className="flex-1">
        <p className="text-sm text-[#2D2D2D] mb-1">
          <span className="font-semibold">{user}</span>
          <span className="text-[#A3A3A3]"> {action} </span>
          <span className="font-medium">{item}</span>
        </p>
        <span className="text-xs text-[#A3A3A3]">{time}</span>
      </div>
    </div>
  );
}

function MilestoneItem({ label, status, progress, subtitle }: { 
  label: string; 
  status: 'complete' | 'progress' | 'incomplete';
  progress: number;
  subtitle?: string;
}) {
  return (
    <div className="group">
      <div className="flex items-start gap-3 mb-2">
        <div className={`
          w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200
          ${status === 'complete' ? 'border-[#0D5F4E] bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] shadow-sm' : ''}
          ${status === 'progress' ? 'border-[#0D5F4E] bg-white' : ''}
          ${status === 'incomplete' ? 'border-[#E8E6E1] bg-white group-hover:border-[#0D5F4E]/30' : ''}
        `}>
          {status === 'complete' && (
            <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
          )}
          {status === 'progress' && (
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c]" />
          )}
        </div>
        <div className="flex-1">
          <span className={`text-sm font-medium ${status === 'incomplete' ? 'text-[#A3A3A3]' : 'text-[#2D2D2D]'}`}>
            {label}
          </span>
          {subtitle && (
            <p className="text-xs text-[#A3A3A3] mt-0.5">{subtitle}</p>
          )}
        </div>
        {status === 'progress' && (
          <span className="text-xs font-bold text-[#0D5F4E]">{progress}%</span>
        )}
      </div>
      {status === 'progress' && progress > 0 && (
        <div className="ml-9 w-full h-1.5 bg-[#F5F5F3] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}