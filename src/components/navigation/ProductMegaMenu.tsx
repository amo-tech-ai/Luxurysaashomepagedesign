import React from 'react';
import {
  LayoutDashboard,
  Presentation,
  TrendingUp,
  GraduationCap,
  CheckCircle,
} from 'lucide-react';
import { productNavigation } from '@/lib/navigation-data';

interface ProductMegaMenuProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}

export function ProductMegaMenu({ onNavigate, onClose }: ProductMegaMenuProps) {
  const handleLinkClick = (route: string, status: string) => {
    if (status === 'active') {
      onNavigate(route);
      onClose();
    }
  };

  const getStatusBadge = (status: string, badge?: string) => {
    if (status === 'active') {
      return (
        <CheckCircle className="w-3 h-3 text-[#0D5F4E] flex-shrink-0" />
      );
    }
    if (badge) {
      return (
        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-[#E8E6E1] text-[#A3A3A3] rounded uppercase tracking-wide">
          {badge}
        </span>
      );
    }
    return null;
  };

  const sectionIcon = (icon: string) => {
    const iconProps = { className: 'w-5 h-5' };
    switch (icon) {
      case 'LayoutDashboard':
        return <LayoutDashboard {...iconProps} />;
      case 'Presentation':
        return <Presentation {...iconProps} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute left-0 right-0 top-full mt-0 bg-white border-t border-[#E8E6E1] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-4 gap-12">
          {/* BUILD Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(productNavigation.build.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {productNavigation.build.title}
                </h3>
                <p className="text-xs text-[#A3A3A3] mt-0.5">
                  {productNavigation.build.description}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              {productNavigation.build.links.map((link, idx) => (
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
                  {getStatusBadge(link.status, link.badge)}
                </button>
              ))}
            </div>
            <div className="text-xs text-[#A3A3A3] pt-2 border-t border-[#E8E6E1]">
              {productNavigation.build.links.length} Tools
            </div>
          </div>

          {/* FUNDRAISE Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(productNavigation.fundraise.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {productNavigation.fundraise.title}
                </h3>
                <p className="text-xs text-[#A3A3A3] mt-0.5">
                  {productNavigation.fundraise.description}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              {productNavigation.fundraise.links.map((link, idx) => (
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
                  {getStatusBadge(link.status, link.badge)}
                </button>
              ))}
            </div>
            <div className="text-xs text-[#A3A3A3] pt-2 border-t border-[#E8E6E1]">
              {productNavigation.fundraise.links.length} Tools
            </div>
          </div>

          {/* INSIGHTS Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(productNavigation.insights.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {productNavigation.insights.title}
                </h3>
                <p className="text-xs text-[#A3A3A3] mt-0.5">
                  {productNavigation.insights.description}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              {productNavigation.insights.links.map((link, idx) => (
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
                  {getStatusBadge(link.status, link.badge)}
                </button>
              ))}
            </div>
            <div className="text-xs text-[#A3A3A3] pt-2 border-t border-[#E8E6E1]">
              {productNavigation.insights.links.length} Reports
            </div>
          </div>

          {/* LEARN Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] bg-opacity-5 flex items-center justify-center text-[#0D5F4E]">
                {sectionIcon(productNavigation.learn.icon)}
              </div>
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider text-[#2D2D2D] font-medium">
                  {productNavigation.learn.title}
                </h3>
                <p className="text-xs text-[#A3A3A3] mt-0.5">
                  {productNavigation.learn.description}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              {productNavigation.learn.links.map((link, idx) => (
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
                  {getStatusBadge(link.status, link.badge)}
                </button>
              ))}
            </div>
            <div className="text-xs text-[#A3A3A3] pt-2 border-t border-[#E8E6E1]">
              {productNavigation.learn.links.length} Tutorials
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
