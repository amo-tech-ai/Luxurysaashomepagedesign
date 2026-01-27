import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { ProductMegaMenu } from './ProductMegaMenu';
import { ResourcesMegaMenu } from './ResourcesMegaMenu';
import { CompanyDropdown } from './CompanyDropdown';
import { MobileMenu } from './MobileMenu';

interface NavigationBarProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function NavigationBar({ onNavigate, currentPage }: NavigationBarProps) {
  const [activeMenu, setActiveMenu] = useState<'product' | 'resources' | 'company' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
    };
    if (activeMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMenuToggle = (menu: 'product' | 'resources' | 'company') => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-200
          ${isScrolled ? 'border-[#E8E6E1] shadow-[0_2px_8px_rgba(0,0,0,0.04)]' : 'border-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => {
                onNavigate('home');
                closeAllMenus();
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0D5F4E] flex items-center justify-center text-white font-bold text-lg transition-transform duration-200 group-hover:scale-105">
                S
              </div>
              <span className="font-serif text-2xl text-[#2D2D2D] tracking-tight">
                StartupAI
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Product Menu */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuToggle('product');
                  }}
                  className={`
                    flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium
                    transition-all duration-200
                    ${
                      activeMenu === 'product'
                        ? 'text-[#0D5F4E] bg-[#0D5F4E] bg-opacity-5'
                        : 'text-[#4A4A4A] hover:text-[#0D5F4E]'
                    }
                  `}
                >
                  Product
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === 'product' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMenu === 'product' && (
                  <ProductMegaMenu onNavigate={onNavigate} onClose={closeAllMenus} />
                )}
              </div>

              {/* Resources Menu */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuToggle('resources');
                  }}
                  className={`
                    flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium
                    transition-all duration-200
                    ${
                      activeMenu === 'resources'
                        ? 'text-[#0D5F4E] bg-[#0D5F4E] bg-opacity-5'
                        : 'text-[#4A4A4A] hover:text-[#0D5F4E]'
                    }
                  `}
                >
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === 'resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMenu === 'resources' && (
                  <ResourcesMegaMenu onNavigate={onNavigate} onClose={closeAllMenus} />
                )}
              </div>

              {/* Company Menu */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuToggle('company');
                  }}
                  className={`
                    flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium
                    transition-all duration-200
                    ${
                      activeMenu === 'company'
                        ? 'text-[#0D5F4E] bg-[#0D5F4E] bg-opacity-5'
                        : 'text-[#4A4A4A] hover:text-[#0D5F4E]'
                    }
                  `}
                >
                  Company
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === 'company' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMenu === 'company' && (
                  <CompanyDropdown onNavigate={onNavigate} onClose={closeAllMenus} />
                )}
              </div>
            </div>

            {/* Dashboard CTA (Desktop) */}
            <button
              onClick={() => {
                onNavigate('dashboard');
                closeAllMenus();
              }}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#0D5F4E] text-white rounded-lg font-medium hover:bg-[#0a4a3c] transition-all duration-200 hover:shadow-lg"
            >
              Go to Dashboard
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#4A4A4A] hover:text-[#0D5F4E] transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate}
      />

      {/* Spacer to prevent content from being hidden under fixed nav */}
      <div className="h-20" />
    </>
  );
}
