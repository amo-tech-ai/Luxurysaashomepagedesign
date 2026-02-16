/**
 * SourceCitation Component
 * 
 * Displays attribution text at bottom of infographic sections
 * Simple, accessible, no animations
 */

interface SourceCitationProps {
  text: string;
  className?: string;
}

export function SourceCitation({ text, className = '' }: SourceCitationProps) {
  return (
    <cite className={`mt-16 block text-center text-[12px] text-[#64748B] not-italic ${className}`}>
      Source: {text}
    </cite>
  );
}
