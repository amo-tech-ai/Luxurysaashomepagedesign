import React, { useState } from 'react';
import {
  X,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Presentation,
  TrendingUp,
  GraduationCap,
  Book,
  Users,
  BarChart,
  CheckCircle,
} from 'lucide-react';
import {
  productNavigation,
  resourcesNavigation,
  companyNavigation,
} from '@/lib/navigation-data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLinkClick = (route: string, status: string) => {
    if (status === 'active') {
      onNavigate(route);
      onClose();
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedSubsection(null);
  };

  const toggleSubsection = (subsection: string) => {
    setExpandedSubsection(expandedSubsection === subsection ? null : subsection);
  };

  const sectionIcon = (icon: string, className: string = 'w-5 h-5') => {
    const iconProps = { className };
    switch (icon) {
      case 'LayoutDashboard':
        return <LayoutDashboard {...iconProps} />;
      case 'Presentation':
        return <Presentation {...iconProps} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
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
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D2D2D] bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E8E6E1] px-6 py-4 flex items-center justify-between z-10">
          <h2 className="font-serif text-xl text-[#2D2D2D]">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-[#4A4A4A] hover:text-[#0D5F4E] transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Dashboard CTA */}
        <div className="px-6 py-4 border-b border-[#E8E6E1]">
          <button
            onClick={() => handleLinkClick('dashboard', 'active')}
            className="w-full px-6 py-3 bg-[#0D5F4E] text-white rounded-lg font-medium hover:bg-[#0a4a3c] transition-colors duration-200"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="py-2">
          {/* PRODUCT Section */}
          <div className="border-b border-[#E8E6E1]">
            <button
              onClick={() => toggleSection('product')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FAFAF8] transition-colors duration-200"
            >
              <span className="font-medium text-[#2D2D2D]">Product</span>
              {expandedSection === 'product' ? (
                <ChevronUp className="w-5 h-5 text-[#4A4A4A]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#4A4A4A]" />
              )}
            </button>

            {expandedSection === 'product' && (
              <div className="bg-[#FAFAF8] pb-2">
                {/* Build Subsection */}
                <div>
                  <button
                    onClick={() => toggleSubsection('build')}
                    className="w-full px-6 py-3 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                        {sectionIcon(productNavigation.build.icon, 'w-4 h-4')}
                      </div>
                      <span className="text-sm font-medium text-[#2D2D2D]">
                        {productNavigation.build.title}
                      </span>
                    </div>
                    {expandedSubsection === 'build' ? (
                      <ChevronUp className="w-4 h-4 text-[#4A4A4A]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4A4A4A]" />
                    )}
                  </button>
                  {expandedSubsection === 'build' && (
                    <div className="pl-12 pr-6 space-y-1 pb-2">
                      {productNavigation.build.links.map((link, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLinkClick(link.route, link.status)}
                          disabled={link.status !== 'active'}
                          className={`
                            w-full px-3 py-2 text-left text-sm rounded-lg flex items-center justify-between
                            transition-all duration-200
                            ${
                              link.status === 'active'
                                ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                                : 'text-[#A3A3A3] cursor-not-allowed'
                            }
                          `}
                        >
                          <span>{link.name}</span>
                          {link.status === 'active' && (
                            <CheckCircle className="w-3 h-3 text-[#0D5F4E]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Fundraise Subsection */}
                <div>
                  <button
                    onClick={() => toggleSubsection('fundraise')}
                    className="w-full px-6 py-3 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                        {sectionIcon(productNavigation.fundraise.icon, 'w-4 h-4')}
                      </div>
                      <span className="text-sm font-medium text-[#2D2D2D]">
                        {productNavigation.fundraise.title}
                      </span>
                    </div>
                    {expandedSubsection === 'fundraise' ? (
                      <ChevronUp className="w-4 h-4 text-[#4A4A4A]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4A4A4A]" />
                    )}
                  </button>
                  {expandedSubsection === 'fundraise' && (
                    <div className="pl-12 pr-6 space-y-1 pb-2">
                      {productNavigation.fundraise.links.map((link, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLinkClick(link.route, link.status)}
                          disabled={link.status !== 'active'}
                          className={`
                            w-full px-3 py-2 text-left text-sm rounded-lg flex items-center justify-between
                            transition-all duration-200
                            ${
                              link.status === 'active'
                                ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                                : 'text-[#A3A3A3] cursor-not-allowed'
                            }
                          `}
                        >
                          <span>{link.name}</span>
                          {link.status === 'active' && (
                            <CheckCircle className="w-3 h-3 text-[#0D5F4E]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Insights Subsection */}
                <div>
                  <button
                    onClick={() => toggleSubsection('insights')}
                    className="w-full px-6 py-3 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                        {sectionIcon(productNavigation.insights.icon, 'w-4 h-4')}
                      </div>
                      <span className="text-sm font-medium text-[#2D2D2D]">
                        {productNavigation.insights.title}
                      </span>
                    </div>
                    {expandedSubsection === 'insights' ? (
                      <ChevronUp className="w-4 h-4 text-[#4A4A4A]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4A4A4A]" />
                    )}
                  </button>
                  {expandedSubsection === 'insights' && (
                    <div className="pl-12 pr-6 space-y-1 pb-2">
                      {productNavigation.insights.links.map((link, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLinkClick(link.route, link.status)}
                          disabled={link.status !== 'active'}
                          className={`
                            w-full px-3 py-2 text-left text-sm rounded-lg flex items-center justify-between
                            transition-all duration-200
                            ${
                              link.status === 'active'
                                ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                                : 'text-[#A3A3A3] cursor-not-allowed'
                            }
                          `}
                        >
                          <span>{link.name}</span>
                          {link.status === 'active' && (
                            <CheckCircle className="w-3 h-3 text-[#0D5F4E]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Learn Subsection */}
                <div>
                  <button
                    onClick={() => toggleSubsection('learn')}
                    className="w-full px-6 py-3 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                        {sectionIcon(productNavigation.learn.icon, 'w-4 h-4')}
                      </div>
                      <span className="text-sm font-medium text-[#2D2D2D]">
                        {productNavigation.learn.title}
                      </span>
                    </div>
                    {expandedSubsection === 'learn' ? (
                      <ChevronUp className="w-4 h-4 text-[#4A4A4A]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4A4A4A]" />
                    )}
                  </button>
                  {expandedSubsection === 'learn' && (
                    <div className="pl-12 pr-6 space-y-1 pb-2">
                      {productNavigation.learn.links.map((link, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLinkClick(link.route, link.status)}
                          disabled={link.status !== 'active'}
                          className={`
                            w-full px-3 py-2 text-left text-sm rounded-lg flex items-center justify-between
                            transition-all duration-200
                            ${
                              link.status === 'active'
                                ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                                : 'text-[#A3A3A3] cursor-not-allowed'
                            }
                          `}
                        >
                          <span>{link.name}</span>
                          {link.status === 'active' && (
                            <CheckCircle className="w-3 h-3 text-[#0D5F4E]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RESOURCES Section */}
          <div className="border-b border-[#E8E6E1]">
            <button
              onClick={() => toggleSection('resources')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FAFAF8] transition-colors duration-200"
            >
              <span className="font-medium text-[#2D2D2D]">Resources</span>
              {expandedSection === 'resources' ? (
                <ChevronUp className="w-5 h-5 text-[#4A4A4A]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#4A4A4A]" />
              )}
            </button>

            {expandedSection === 'resources' && (
              <div className="bg-[#FAFAF8] pb-2">
                {/* Documentation */}
                <div className="px-6 py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                      {sectionIcon(resourcesNavigation.documentation.icon, 'w-4 h-4')}
                    </div>
                    <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                      {resourcesNavigation.documentation.title}
                    </span>
                  </div>
                  <div className="pl-11 space-y-1">
                    {resourcesNavigation.documentation.links.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleLinkClick(link.route, link.status)}
                        disabled={link.status !== 'active'}
                        className={`
                          w-full px-3 py-2 text-left text-sm rounded-lg
                          transition-all duration-200
                          ${
                            link.status === 'active'
                              ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                              : 'text-[#A3A3A3] cursor-not-allowed'
                          }
                        `}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Community */}
                <div className="px-6 py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                      {sectionIcon(resourcesNavigation.community.icon, 'w-4 h-4')}
                    </div>
                    <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                      {resourcesNavigation.community.title}
                    </span>
                  </div>
                  <div className="pl-11 space-y-1">
                    {resourcesNavigation.community.links.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleLinkClick(link.route, link.status)}
                        disabled={link.status !== 'active'}
                        className={`
                          w-full px-3 py-2 text-left text-sm rounded-lg
                          transition-all duration-200
                          ${
                            link.status === 'active'
                              ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                              : 'text-[#A3A3A3] cursor-not-allowed'
                          }
                        `}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Research */}
                <div className="px-6 py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0D5F4E] bg-opacity-10 flex items-center justify-center text-[#0D5F4E]">
                      {sectionIcon(resourcesNavigation.research.icon, 'w-4 h-4')}
                    </div>
                    <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                      {resourcesNavigation.research.title}
                    </span>
                  </div>
                  <div className="pl-11 space-y-1">
                    {resourcesNavigation.research.links.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleLinkClick(link.route, link.status)}
                        disabled={link.status !== 'active'}
                        className={`
                          w-full px-3 py-2 text-left text-sm rounded-lg
                          transition-all duration-200
                          ${
                            link.status === 'active'
                              ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                              : 'text-[#A3A3A3] cursor-not-allowed'
                          }
                        `}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* COMPANY Section */}
          <div className="border-b border-[#E8E6E1]">
            <button
              onClick={() => toggleSection('company')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FAFAF8] transition-colors duration-200"
            >
              <span className="font-medium text-[#2D2D2D]">Company</span>
              {expandedSection === 'company' ? (
                <ChevronUp className="w-5 h-5 text-[#4A4A4A]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#4A4A4A]" />
              )}
            </button>

            {expandedSection === 'company' && (
              <div className="bg-[#FAFAF8] px-6 py-2 space-y-1">
                {[...companyNavigation.main, ...companyNavigation.legal].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.route, link.status)}
                    disabled={link.status !== 'active'}
                    className={`
                      w-full px-3 py-2 text-left text-sm rounded-lg
                      transition-all duration-200
                      ${
                        link.status === 'active'
                          ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-white cursor-pointer'
                          : 'text-[#A3A3A3] cursor-not-allowed'
                      }
                    `}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
