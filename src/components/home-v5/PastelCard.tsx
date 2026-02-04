import { ArrowRight } from 'lucide-react';

interface PastelCardProps {
  variant: 'mint' | 'sage' | 'dark';
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function PastelCard({ variant, title, description, icon, href, onClick }: PastelCardProps) {
  const styles = {
    mint: {
      bg: 'bg-[#DCF9E3]',
      text: 'text-[#212427]',
      textSecondary: 'text-[#212427] opacity-80',
    },
    sage: {
      bg: 'bg-[#E8F5E9]',
      text: 'text-[#212427]',
      textSecondary: 'text-[#212427] opacity-80',
    },
    dark: {
      bg: 'bg-[#212427]',
      text: 'text-white',
      textSecondary: 'text-white opacity-80',
    },
  };

  const style = styles[variant];

  return (
    <div 
      className={`${style.bg} p-12 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg h-full flex flex-col`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <div className={`mb-6 ${style.text}`}>{icon}</div>}
      <h3 className={`text-2xl lg:text-3xl font-light mb-4 ${style.text} leading-tight`}>{title}</h3>
      <p className={`text-base lg:text-lg leading-relaxed ${style.textSecondary} flex-grow`}>{description}</p>
      {(href || onClick) && (
        <div className="mt-8">
          <div className="w-12 h-12 rounded-full bg-[#00C853] hover:bg-[#00B048] flex items-center justify-center transition-colors cursor-pointer">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
