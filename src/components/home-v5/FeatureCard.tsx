import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

export function FeatureCard({ icon, title, description, href, onClick }: FeatureCardProps) {
  return (
    <div 
      className="p-8 lg:p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="text-[#0d5f4e] mb-5">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-light text-[#212427] mb-3">{title}</h3>
      <p className="text-base text-[#696969] leading-relaxed flex-grow">{description}</p>
      {(href || onClick) && (
        <div className="mt-6">
          <span className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] transition-colors inline-flex items-center gap-2 font-medium">
            Learn more <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      )}
    </div>
  );
}
