import React from 'react';
import {
  LayoutDashboard,
  Terminal,
  TrendingUp,
  Map,
  Lightbulb,
  FileText,
  Settings,
  Home,
  Grid3x3,
  Target,
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, shortcut, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
        transition-all duration-150
        ${
          active
            ? 'bg-[rgba(13,95,78,0.08)] text-[#0D5F4E] font-medium'
            : 'text-[#4A4A4A] hover:bg-[#F5F5F3]'
        }
      `}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {shortcut && (
        <span className="text-xs text-[#A3A3A3] font-mono">{shortcut}</span>
      )}
    </button>
  );
}

interface LeftNavProps {
  activeView?: string;
  onViewChange?: (view: string) => void;
  onNavigate?: (route: string) => void;
}

export function LeftNav({ activeView = 'kanban', onViewChange, onNavigate }: LeftNavProps) {
  const handleNavClick = (view: string, route: string) => {
    onViewChange?.(view);
    // Convert route paths to page identifiers for the App router
    if (route === '/dashboard') {
      onNavigate?.('dashboard');
    } else if (route === '/dashboard/main') {
      onNavigate?.('dashboard-main');
    } else if (route === '/dashboard/roadmap') {
      onNavigate?.('dashboard-roadmap');
    } else if (route === '/dashboard/ideation') {
      onNavigate?.('dashboard-ideation');
    } else if (route === '/onboarding-v2') {
      onNavigate?.('onboarding-v2');
    } else if (route === '/lean-canvas') {
      onNavigate?.('lean-canvas');
    } else {
      // For other routes, just pass the view name
      onNavigate?.(view);
    }
  };

  return (
    <nav className="w-60 bg-[#FAFAF8] border-r border-[#E8E6E1] h-full flex flex-col p-4">
      {/* Home Link */}
      <div className="mb-6 pb-6 border-b border-[#E8E6E1]">
        <button
          onClick={() => onNavigate?.('home')}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-[#0D5F4E] hover:bg-[#0D5F4E] hover:bg-opacity-5 transition-all duration-200 group"
        >
          <Home className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span className="flex-1 text-left">Back to Home</span>
          <span className="text-xs text-[#A3A3A3] font-mono">H</span>
        </button>
      </div>

      {/* Project Section */}
      <div className="mb-6">
        <div className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3 px-3">
          Project
        </div>
        <div className="space-y-1">
          <NavItem
            icon={<Target className="w-4 h-4" />}
            label="Onboarding Wizard"
            shortcut="O"
            active={activeView === 'onboarding-v2'}
            onClick={() => handleNavClick('onboarding-v2', '/onboarding-v2')}
          />
          <NavItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Main Dashboard"
            shortcut="M"
            active={activeView === 'main'}
            onClick={() => handleNavClick('main', '/dashboard/main')}
          />
          <NavItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Kanban Board"
            shortcut="K"
            active={activeView === 'kanban'}
            onClick={() => handleNavClick('kanban', '/dashboard')}
          />
          <NavItem
            icon={<Terminal className="w-4 h-4" />}
            label="Agent Terminals"
            shortcut="A"
            active={activeView === 'agents'}
            onClick={() => handleNavClick('agents', '/dashboard/agents')}
          />
          <NavItem
            icon={<TrendingUp className="w-4 h-4" />}
            label="Insights"
            shortcut="I"
            active={activeView === 'insights'}
            onClick={() => handleNavClick('insights', '/dashboard/insights')}
          />
          <NavItem
            icon={<Map className="w-4 h-4" />}
            label="Roadmap"
            shortcut="R"
            active={activeView === 'roadmap'}
            onClick={() => handleNavClick('roadmap', '/dashboard/roadmap')}
          />
          <NavItem
            icon={<Lightbulb className="w-4 h-4" />}
            label="Ideation"
            shortcut="D"
            active={activeView === 'ideation'}
            onClick={() => handleNavClick('ideation', '/dashboard/ideation')}
          />
          <NavItem
            icon={<Grid3x3 className="w-4 h-4" />}
            label="Lean Canvas"
            shortcut="L"
            active={activeView === 'lean-canvas'}
            onClick={() => handleNavClick('lean-canvas', '/lean-canvas')}
          />
          <NavItem
            icon={<FileText className="w-4 h-4" />}
            label="Content"
            shortcut="C"
            active={activeView === 'content'}
            onClick={() => handleNavClick('content', '/dashboard/content')}
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Settings */}
      <div className="border-t border-[#E8E6E1] pt-4">
        <NavItem
          icon={<Settings className="w-4 h-4" />}
          label="Settings"
          shortcut="⚙"
          active={activeView === 'settings'}
          onClick={() => handleNavClick('settings', '/dashboard/settings')}
        />
      </div>
    </nav>
  );
}