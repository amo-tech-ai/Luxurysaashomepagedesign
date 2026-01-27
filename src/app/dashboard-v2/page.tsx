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
} from 'lucide-react';

interface DashboardV2PageProps {
  onNavigate?: (page: string) => void;
}

export default function DashboardV2Page({ onNavigate }: DashboardV2PageProps) {
  const [activeTab, setActiveTab] = useState<'insights' | 'tasks' | 'activity'>('insights');

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex">
      {/* ============================================
          LEFT PANEL - PRIMARY NAVIGATION (FIXED)
          ============================================ */}
      <aside className="w-64 bg-[#F5F5F3] border-r border-[#E8E6E1] flex flex-col fixed left-0 top-0 h-screen">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="font-serif text-xl text-[#2D2D2D] tracking-tight">
              StartupAI
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active />
          <NavItem icon={<Target className="w-5 h-5" />} label="Onboarding" />
          <NavItem icon={<FolderKanban className="w-5 h-5" />} label="Projects" />
          <NavItem icon={<CheckSquare className="w-5 h-5" />} label="Tasks" />
          <NavItem icon={<Calendar className="w-5 h-5" />} label="Events" />
          <NavItem icon={<Users className="w-5 h-5" />} label="CRM" />
          <NavItem icon={<FileText className="w-5 h-5" />} label="Documents" />
          <NavItem icon={<Grid3x3 className="w-5 h-5" />} label="Lean Canvas" />
          <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Investors" />
          <NavItem icon={<User className="w-5 h-5" />} label="User Profile" />
          <NavItem icon={<Building2 className="w-5 h-5" />} label="Company Profile" />
        </nav>

        {/* Bottom Section */}
        <div className="px-4 pb-6 space-y-4 border-t border-[#E8E6E1] pt-4">
          {/* Strategy Progress */}
          <div className="px-3 py-4 bg-white rounded-lg border border-[#E8E6E1]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-[#4A4A4A]">Strategy Progress</span>
              <span className="text-sm font-semibold text-[#0D5F4E]">68%</span>
            </div>
            <div className="w-full h-2 bg-[#F5F5F3] rounded-full overflow-hidden">
              <div className="h-full bg-[#0D5F4E] rounded-full" style={{ width: '68%' }} />
            </div>
          </div>

          {/* Settings */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[#4A4A4A] hover:bg-white hover:text-[#0D5F4E] transition-all duration-200">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* ============================================
          CENTER PANEL - MAIN DASHBOARD (FOCUS AREA)
          ============================================ */}
      <main className="flex-1 ml-64 mr-80 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-8">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-[#A3A3A3] mb-1">TUESDAY, JANUARY 27</p>
                <h1 className="font-serif text-4xl text-[#2D2D2D] mb-2">
                  Good morning, Sanjiovani.
                </h1>
                <p className="text-[#4A4A4A]">
                  Your command center for growth and fundraising.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <Search className="w-5 h-5 text-[#4A4A4A]" />
                </button>
                <button className="p-2 hover:bg-white rounded-lg transition-colors duration-200 relative">
                  <Calendar className="w-5 h-5 text-[#4A4A4A]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#0D5F4E] rounded-full" />
                </button>
              </div>
            </div>

            {/* Global Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3A3A3]" />
              <input
                type="text"
                placeholder="Search your startup…"
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8E6E1] rounded-lg text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#0D5F4E] transition-colors duration-200"
              />
            </div>
          </header>

          {/* Quick Actions */}
          <section className="mb-10">
            <div className="grid grid-cols-5 gap-4">
              <QuickActionCard icon={<Plus className="w-5 h-5" />} label="New Deck" />
              <QuickActionCard icon={<FileSpreadsheet className="w-5 h-5" />} label="Investor Docs" />
              <QuickActionCard icon={<DollarSign className="w-5 h-5" />} label="Find Capital" />
              <QuickActionCard icon={<Video className="w-5 h-5" />} label="Create Video" />
              <QuickActionCard icon={<FolderOpen className="w-5 h-5" />} label="Data Room" />
            </div>
          </section>

          {/* Key Metrics Snapshot */}
          <section className="mb-10">
            <div className="grid grid-cols-4 gap-4">
              <MetricCard label="Decks" value="12" delta="+2" trend="up" />
              <MetricCard label="Investors" value="8" delta="+1" trend="up" />
              <MetricCard label="Tasks" value="28" delta="-3" trend="down" />
              <MetricCard label="Events" value="3" delta="0" trend="neutral" />
            </div>
          </section>

          {/* Startup Health & Deck Activity */}
          <section className="mb-10">
            <div className="grid grid-cols-2 gap-6">
              {/* Startup Health */}
              <div className="bg-white border border-[#E8E6E1] rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl text-[#2D2D2D]">Startup Health</h3>
                  <button className="text-sm text-[#0D5F4E] hover:underline">
                    View Report
                  </button>
                </div>

                {/* Score Circle */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#F5F5F3"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#0D5F4E"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.59)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#0D5F4E]">59%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#4A4A4A]">Brand Story</span>
                        <span className="text-sm font-semibold text-[#2D2D2D]">80/100</span>
                      </div>
                      <div className="w-full h-2 bg-[#F5F5F3] rounded-full overflow-hidden">
                        <div className="h-full bg-[#0D5F4E] rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#4A4A4A]">Traction</span>
                        <span className="text-sm font-semibold text-[#2D2D2D]">40/100</span>
                      </div>
                      <div className="w-full h-2 bg-[#F5F5F3] rounded-full overflow-hidden">
                        <div className="h-full bg-[#D4A574] rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Tip */}
                <div className="flex items-start gap-3 p-3 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1]">
                  <Lightbulb className="w-4 h-4 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#4A4A4A]">
                    <span className="font-medium text-[#2D2D2D]">AI Tip:</span> Add Monthly Active Users to boost your Traction score.
                  </p>
                </div>
              </div>

              {/* Deck Activity */}
              <div className="bg-white border border-[#E8E6E1] rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl text-[#2D2D2D]">Deck Activity</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#2D2D2D] rounded-sm" />
                      <span className="text-xs text-[#A3A3A3]">Drafts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#EF4444] rounded-sm" />
                      <span className="text-xs text-[#A3A3A3]">Visuals</span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="h-48 flex items-end justify-between gap-3">
                  <BarGroup label="May" draft={80} visual={60} />
                  <BarGroup label="Jun" draft={60} visual={90} />
                  <BarGroup label="Jul" draft={100} visual={40} />
                  <BarGroup label="Aug" draft={90} visual={70} />
                </div>
              </div>
            </div>
          </section>

          {/* Insights / Tasks / Activity Tabs */}
          <section className="mb-10">
            <div className="bg-white border border-[#E8E6E1] rounded-lg overflow-hidden">
              {/* Tab Headers */}
              <div className="flex items-center border-b border-[#E8E6E1]">
                <TabButton
                  label="Insights"
                  count={3}
                  active={activeTab === 'insights'}
                  onClick={() => setActiveTab('insights')}
                />
                <TabButton
                  label="Tasks"
                  count={5}
                  active={activeTab === 'tasks'}
                  onClick={() => setActiveTab('tasks')}
                />
                <TabButton
                  label="Activity"
                  count={8}
                  active={activeTab === 'activity'}
                  onClick={() => setActiveTab('activity')}
                />
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'insights' && (
                  <div className="space-y-4">
                    <InsightCard
                      type="AI Suggestion"
                      title="Update your traction slide to improve credibility"
                      cta="View Suggestion"
                      icon={<Sparkles className="w-4 h-4" />}
                    />
                    <InsightCard
                      type="Perk"
                      title="90% off HubSpot for Startups – new perk available"
                      cta="New Perk Available"
                      icon={<Gift className="w-4 h-4" />}
                    />
                    <InsightCard
                      type="Upcoming Event"
                      title="Founder Networking Night – upcoming event"
                      cta="Upcoming Event"
                      icon={<MapPin className="w-4 h-4" />}
                    />
                  </div>
                )}
                {activeTab === 'tasks' && (
                  <div className="text-center py-8 text-[#A3A3A3]">
                    Task view coming soon
                  </div>
                )}
                {activeTab === 'activity' && (
                  <div className="text-center py-8 text-[#A3A3A3]">
                    Activity view coming soon
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ============================================
          RIGHT PANEL - AI GUIDANCE & CONTEXT (FIXED)
          ============================================ */}
      <aside className="w-80 bg-white border-l border-[#E8E6E1] fixed right-0 top-0 h-screen overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Stage Progress */}
          <div className="pb-6 border-b border-[#E8E6E1]">
            <div className="mb-4">
              <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                Stage Progress
              </span>
              <h3 className="font-serif text-2xl text-[#2D2D2D] mt-2 mb-1">
                Ideation
              </h3>
              <p className="text-sm text-[#4A4A4A]">12% complete</p>
            </div>

            <div className="w-full h-2 bg-[#F5F5F3] rounded-full overflow-hidden mb-4">
              <div className="h-full bg-[#0D5F4E] rounded-full" style={{ width: '12%' }} />
            </div>

            <p className="text-xs text-[#A3A3A3] mb-4">Next stage: Validation</p>

            {/* Milestones */}
            <div className="space-y-3 mb-4">
              <MilestoneItem label="Complete Lean Canvas" status="incomplete" />
              <MilestoneItem label="Complete Startup Profile (59/100)" status="progress" />
              <MilestoneItem label="Customer Interviews (0/20)" status="incomplete" />
            </div>

            <button className="w-full px-4 py-2.5 bg-[#0D5F4E] text-white rounded-lg text-sm font-medium hover:bg-[#0a4a3c] transition-colors duration-200 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Get AI Guidance for Ideation
            </button>
          </div>

          {/* AI Strategic Review */}
          <div className="pb-6 border-b border-[#E8E6E1]">
            <button className="w-full flex items-center justify-between text-left mb-3">
              <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                AI Strategic Review
              </span>
              <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
            </button>
            <p className="text-sm text-[#4A4A4A]">
              No critical insights at the moment. Keep building!
            </p>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-4">
              Upcoming Events
            </h4>

            {/* Event Card */}
            <div className="bg-[#0D5F4E] rounded-lg overflow-hidden mb-4">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center">
                <Calendar className="w-12 h-12 text-white opacity-20" />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-[10px] font-semibold uppercase tracking-wider rounded mb-2">
                  Networking
                </span>
                <h5 className="font-serif text-lg text-white mb-2">
                  Rhythm & Beats Music Festival
                </h5>
                <p className="text-sm text-white text-opacity-80 mb-3">
                  Sunset Park, Los Angeles, CA
                </p>
                <div className="flex items-center gap-2 text-white text-opacity-80 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 20, 2026</span>
                </div>
                <button className="w-full px-4 py-2 bg-white text-[#0D5F4E] rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all duration-200">
                  View Details
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-serif text-base text-[#2D2D2D]">January 2026</h5>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-white rounded transition-colors duration-200">
                    <ChevronRight className="w-4 h-4 text-[#4A4A4A] rotate-180" />
                  </button>
                  <button className="p-1 hover:bg-white rounded transition-colors duration-200">
                    <ChevronRight className="w-4 h-4 text-[#4A4A4A]" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-center text-xs text-[#A3A3A3] font-medium py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 2;
                  const isToday = day === 27;
                  const hasEvent = day === 20;
                  if (day < 1 || day > 31) {
                    return <div key={i} />;
                  }
                  return (
                    <button
                      key={i}
                      className={`
                        aspect-square text-sm rounded-lg transition-all duration-200
                        ${isToday ? 'bg-[#0D5F4E] text-white font-semibold' : ''}
                        ${hasEvent && !isToday ? 'bg-[#0D5F4E] bg-opacity-10 text-[#0D5F4E] font-medium' : ''}
                        ${!isToday && !hasEvent ? 'text-[#2D2D2D] hover:bg-white' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-white border border-[#E8E6E1] text-[#4A4A4A] rounded-lg text-sm font-medium hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all duration-200">
                View All Events →
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

// ============================================
// COMPONENT UTILITIES
// ============================================

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
        ${active ? 'bg-white text-[#0D5F4E] shadow-sm' : 'text-[#4A4A4A] hover:bg-white hover:text-[#0D5F4E]'}
      `}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function QuickActionCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="group bg-white border border-[#E8E6E1] rounded-lg p-4 hover:border-[#0D5F4E] hover:shadow-sm transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E] mb-3 group-hover:bg-[#0D5F4E] group-hover:text-white transition-all duration-200">
        {icon}
      </div>
      <span className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#0D5F4E] transition-colors duration-200">
        {label}
      </span>
    </button>
  );
}

function MetricCard({ label, value, delta, trend }: { label: string; value: string; delta: string; trend: 'up' | 'down' | 'neutral' }) {
  return (
    <div className="bg-white border border-[#E8E6E1] rounded-lg p-5 hover:border-[#0D5F4E] transition-all duration-200 cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#A3A3A3]">{label}</span>
        {trend === 'up' && <ArrowUpRight className="w-4 h-4 text-[#0D5F4E]" />}
        {trend === 'down' && <ArrowDownRight className="w-4 h-4 text-[#EF4444]" />}
      </div>
      <div className="text-3xl font-bold text-[#2D2D2D] mb-1">{value}</div>
      <div className={`text-xs font-medium ${trend === 'up' ? 'text-[#0D5F4E]' : trend === 'down' ? 'text-[#EF4444]' : 'text-[#A3A3A3]'}`}>
        {delta}
      </div>
    </div>
  );
}

function BarGroup({ label, draft, visual }: { label: string; draft: number; visual: number }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="w-full flex items-end justify-center gap-1 mb-2" style={{ height: '160px' }}>
        <div
          className="w-8 bg-[#2D2D2D] rounded-t"
          style={{ height: `${draft}%` }}
        />
        <div
          className="w-8 bg-[#EF4444] rounded-t"
          style={{ height: `${visual}%` }}
        />
      </div>
      <span className="text-xs text-[#A3A3A3]">{label}</span>
    </div>
  );
}

function TabButton({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-4 border-b-2 transition-all duration-200
        ${active ? 'border-[#0D5F4E] text-[#0D5F4E]' : 'border-transparent text-[#A3A3A3] hover:text-[#4A4A4A]'}
      `}
    >
      <span className="text-sm font-medium">{label}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-[#0D5F4E] bg-opacity-10 text-[#0D5F4E]' : 'bg-[#F5F5F3] text-[#A3A3A3]'}`}>
        {count}
      </span>
    </button>
  );
}

function InsightCard({ type, title, cta, icon }: { type: string; title: string; cta: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 cursor-pointer group">
      <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E] flex-shrink-0 group-hover:bg-[#0D5F4E] group-hover:text-white transition-all duration-200">
        {icon}
      </div>
      <div className="flex-1">
        <span className="inline-block text-[10px] font-semibold text-[#0D5F4E] uppercase tracking-wider mb-1">
          {type}
        </span>
        <p className="text-sm text-[#2D2D2D] mb-2">{title}</p>
        <button className="text-xs text-[#0D5F4E] font-medium hover:underline">
          {cta}
        </button>
      </div>
    </div>
  );
}

function MilestoneItem({ label, status }: { label: string; status: 'complete' | 'progress' | 'incomplete' }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`
        w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5
        ${status === 'complete' ? 'border-[#0D5F4E] bg-[#0D5F4E]' : ''}
        ${status === 'progress' ? 'border-[#0D5F4E] bg-white' : ''}
        ${status === 'incomplete' ? 'border-[#E8E6E1] bg-white' : ''}
      `}>
        {status === 'complete' && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {status === 'progress' && (
          <div className="w-2 h-2 rounded-full bg-[#0D5F4E]" />
        )}
      </div>
      <span className={`text-sm ${status === 'incomplete' ? 'text-[#A3A3A3]' : 'text-[#2D2D2D]'}`}>
        {label}
      </span>
    </div>
  );
}