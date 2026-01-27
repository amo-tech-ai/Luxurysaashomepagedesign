import React from 'react';
import { Book, Users, BarChart, CheckCircle } from 'lucide-react';
import { resourcesNavigation } from '@/lib/navigation-data';

interface ResourcesMegaMenuProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}

export function ResourcesMegaMenu({ onNavigate, onClose }: ResourcesMegaMenuProps) {
  const handleLinkClick = (route: string, status: string) => {
    if (status === 'active') {
      onNavigate(route);
      onClose();
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return <CheckCircle className="w-3 h-3 text-[#0D5F4E] flex-shrink-0" />;
    }
    return null;
  };

  const sectionIcon = (icon: string) => {
    const iconProps = { className: 'w-5 h-5' };
    switch (icon) {
      case 'Book':
        return <Book {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'BarChart':
        return <BarChart {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute left-0 right-0 top-full mt-0 bg-white border-t border-[#E8E6E1] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-3 gap-16">
          {/* DOCUMENTATION Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(resourcesNavigation.documentation.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {resourcesNavigation.documentation.title}
                </h3>
              </div>
            </div>
            <div className="space-y-1">
              {resourcesNavigation.documentation.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.route, link.status)}
                  disabled={link.status !== 'active'}
                  className={`
                    w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-left text-sm
                    transition-all duration-200
                    ${
                      link.status === 'active'
                        ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#0D5F4E] hover:bg-opacity-5 cursor-pointer'
                        : 'text-[#A3A3A3] cursor-not-allowed'
                    }
                  `}
                >
                  <span>{link.name}</span>
                  {getStatusBadge(link.status)}
                </button>
              ))}
            </div>
          </div>

          {/* COMMUNITY Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(resourcesNavigation.community.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {resourcesNavigation.community.title}
                </h3>
              </div>
            </div>
            <div className="space-y-1">
              {resourcesNavigation.community.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.route, link.status)}
                  disabled={link.status !== 'active'}
                  className={`
                    w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-left text-sm
                    transition-all duration-200
                    ${
                      link.status === 'active'
                        ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#0D5F4E] hover:bg-opacity-5 cursor-pointer'
                        : 'text-[#A3A3A3] cursor-not-allowed'
                    }
                  `}
                >
                  <span>{link.name}</span>
                  {getStatusBadge(link.status)}
                </button>
              ))}
            </div>
          </div>

          {/* RESEARCH Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(resourcesNavigation.research.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {resourcesNavigation.research.title}
                </h3>
              </div>
            </div>
            <div className="space-y-1">
              {resourcesNavigation.research.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.route, link.status)}
                  disabled={link.status !== 'active'}
                  className={`
                    w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-left text-sm
                    transition-all duration-200
                    ${
                      link.status === 'active'
                        ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#0D5F4E] hover:bg-opacity-5 cursor-pointer'
                        : 'text-[#A3A3A3] cursor-not-allowed'
                    }
                  `}
                >
                  <span>{link.name}</span>
                  {getStatusBadge(link.status)}
                </button>
              ))}
            </div>
            <div className="pt-4 border-t border-[#E8E6E1]">
              <p className="text-xs text-[#A3A3A3]">
                8 comprehensive reports available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
