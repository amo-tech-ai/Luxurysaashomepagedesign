import React from 'react';
import { companyNavigation } from '@/lib/navigation-data';

interface CompanyDropdownProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}

export function CompanyDropdown({ onNavigate, onClose }: CompanyDropdownProps) {
  const handleLinkClick = (route: string, status: string) => {
    if (status === 'active') {
      onNavigate(route);
      onClose();
    }
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-[#E8E6E1] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Main Links */}
      <div className="py-2">
        {companyNavigation.main.map((link, idx) => (
          <button
            key={idx}
            onClick={() => handleLinkClick(link.route, link.status)}
            disabled={link.status !== 'active'}
            className={`
              w-full px-4 py-2.5 text-left text-sm
              transition-all duration-200
              ${
                link.status === 'active'
                  ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#FAFAF8] cursor-pointer'
                  : 'text-[#A3A3A3] cursor-not-allowed'
              }
            `}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6E1]" />

      {/* Legal Links */}
      <div className="py-2">
        {companyNavigation.legal.map((link, idx) => (
          <button
            key={idx}
            onClick={() => handleLinkClick(link.route, link.status)}
            disabled={link.status !== 'active'}
            className={`
              w-full px-4 py-2.5 text-left text-sm
              transition-all duration-200
              ${
                link.status === 'active'
                  ? 'text-[#4A4A4A] hover:text-[#0D5F4E] hover:bg-[#FAFAF8] cursor-pointer'
                  : 'text-[#A3A3A3] cursor-not-allowed'
              }
            `}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
}
