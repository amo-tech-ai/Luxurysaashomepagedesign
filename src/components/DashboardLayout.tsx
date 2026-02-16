import { ReactNode, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Shield,
  FileText,
  Calendar,
  KanbanSquare,
  CheckSquare,
  TrendingUp,
  Target,
  Users,
  Presentation,
  Briefcase,
  BarChart3,
  FolderOpen,
  User,
  Settings,
  FlaskConical,
  Glasses,
  Sparkles,
  Eye
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  onNavigate?: (page: string) => void;
  activeNav?: string;
}

const navItems = {
  PRIMARY: [
    { id: 'dashboardv2', label: 'Command Centre', icon: LayoutDashboard },
    { id: 'startup-validator', label: 'Startup Validator', icon: Shield },
    { id: 'lean-canvas', label: 'Lean Canvas', icon: FileText },
    { id: 'lean-canvas-v4', label: 'Lean Canvas V4', icon: FileText },
    { id: 'validate-canvas', label: 'Validation Board', icon: FlaskConical },
    { id: 'value-proposition', label: 'Value Proposition', icon: Target },
    { id: 'immersive-experience-canvas', label: 'Immersive XR Canvas', icon: Glasses },
    { id: 'ai-readiness-canvas', label: 'AI Readiness Canvas', icon: Sparkles },
  ],
  EXECUTION: [
    { id: '90-day-plan', label: '90-Day Plan', icon: Calendar },
    { id: 'kanban', label: 'Kanban Board', icon: KanbanSquare },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'gantt', label: 'Product Roadmap', icon: BarChart3 },
  ],
  INTELLIGENCE: [
    { id: 'market-research-hub', label: 'Market Research', icon: TrendingUp },
    { id: 'opportunity-canvas', label: 'Opportunity Canvas', icon: Target },
    { id: 'validator-report-visual', label: 'Visual Validator', icon: Eye },
    { id: 'validator-report-visual-v2', label: 'Visual Validator V2', icon: Eye },
  ],
  FUNDRAISING: [
    { id: 'investor-strategy', label: 'Investor Strategy', icon: Users },
    { id: 'pitch-deck', label: 'Pitch Deck', icon: Presentation },
    { id: 'crm', label: 'CRM / Investors', icon: Briefcase },
  ],
  LIBRARY: [
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'data-room', label: 'Data Room', icon: FolderOpen },
  ],
  SETTINGS: [
    { id: 'startup-profile', label: 'Profile', icon: User },
    { id: 'workspace', label: 'Workspace', icon: Settings },
  ],
};

export function DashboardLayout({
  children,
  title,
  subtitle,
  lastUpdated,
  onNavigate,
  activeNav,
}: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const currentTime = lastUpdated || new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[#E8E6E1] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate?.('home-v8')}
              className="text-xl font-semibold text-[#0E3E1B] hover:text-[#0d5f4e] transition-colors"
            >
              StartupAI
            </button>
            <button
              onClick={() => onNavigate?.('dashboardv2')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'dashboardv2'
                  ? 'text-[#0d5f4e]'
                  : 'text-gray-600 hover:text-[#0d5f4e]'
              }`}
            >
              Dashboard
            </button>
            <div className="text-lg text-gray-700">{title}</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-500">Last updated: {currentTime}</div>
            <button 
              onClick={() => onNavigate?.('workspace')}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0d5f4e] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#E8F4F1] flex items-center justify-center text-[#0d5f4e] font-medium">
                U
              </div>
              <span>Settings</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar - Collapsible */}
        <aside 
          className={`bg-[#F5F3EF] border-r border-[#E8E6E1] overflow-y-auto transition-all duration-300 ease-in-out relative ${
            isCollapsed ? 'w-16' : 'w-60'
          }`}
        >
          {/* Collapse Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-4 -right-3 w-6 h-6 bg-white border border-[#E8E6E1] rounded-full flex items-center justify-center text-gray-600 hover:text-[#0d5f4e] hover:border-[#0d5f4e] transition-colors z-10 shadow-sm"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>

          {/* Navigation */}
          <div className={`p-4 ${isCollapsed ? 'px-2' : 'px-6'}`}>
            {Object.entries(navItems).map(([section, items]) => (
              <div key={section} className="mb-6">
                {!isCollapsed && (
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {section}
                  </div>
                )}
                {isCollapsed && (
                  <div className="h-px bg-[#E8E6E1] mb-3" />
                )}
                <nav className="space-y-1">
                  {items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left rounded-lg text-sm transition-colors ${
                          isCollapsed ? 'px-2 py-2.5' : 'px-3 py-2 flex items-center gap-3'
                        } ${
                          activeNav === item.id
                            ? 'bg-[#E8F4F1] text-[#0d5f4e] font-medium'
                            : 'text-gray-700 hover:bg-white hover:text-[#0d5f4e]'
                        }`}
                        title={isCollapsed ? item.label : undefined}
                      >
                        {isCollapsed ? (
                          <div className="flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                        ) : (
                          <>
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span>{item.label}</span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {subtitle && (
            <div className="bg-white border-b border-[#E8E6E1] px-8 py-4">
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}