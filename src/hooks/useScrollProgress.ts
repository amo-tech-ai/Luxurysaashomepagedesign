import { useEffect, useState, useRef } from 'react';

export function useScrollProgress(containerRef: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section has been scrolled through
      const scrollStart = -rect.top;
      const scrollEnd = containerHeight - viewportHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
      
      setProgress(scrollProgress);
      
      // Map progress to steps (0-0.25 = step 0, 0.25-0.5 = step 1, etc.)
      const step = Math.min(3, Math.floor(scrollProgress * 4));
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return { progress, activeStep };
}
