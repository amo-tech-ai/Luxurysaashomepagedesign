import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AnimatedCursorProps {
  activeStep: number;
}

interface CursorTarget {
  x: string;
  y: string;
  action: 'click' | 'hover' | 'drag';
  delay: number;
}

const cursorPaths: Record<number, CursorTarget[]> = {
  0: [
    { x: '60%', y: '35%', action: 'click', delay: 600 },
  ],
  1: [
    { x: '65%', y: '70%', action: 'hover', delay: 800 },
  ],
  2: [
    { x: '68%', y: '65%', action: 'hover', delay: 700 },
  ],
  3: [
    { x: '58%', y: '45%', action: 'drag', delay: 800 },
  ],
};

export function AnimatedCursor({ activeStep }: AnimatedCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Show cursor after step changes
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    // Trigger action animation
    const target = cursorPaths[activeStep]?.[0];
    if (target) {
      const actionTimer = setTimeout(() => {
        setShowRipple(true);
        setTimeout(() => setShowRipple(false), 300);
      }, target.delay + 1000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(actionTimer);
      };
    }

    return () => clearTimeout(showTimer);
  }, [activeStep, isMobile]);

  if (isMobile) return null;

  const target = cursorPaths[activeStep]?.[0];
  if (!target) return null;

  return (
    <div className="fixed inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 50 }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: target.x,
              y: target.y,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute"
            style={{
              left: 0,
              top: 0,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Cursor Icon */}
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <path
                  d="M5 3L19 12L12 13L9 21L5 3Z"
                  fill="#1a1a1a"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </svg>

              {/* Click Ripple Effect */}
              <AnimatePresence>
                {showRipple && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-full bg-[#0d5f4e]"
                    style={{
                      width: '48px',
                      height: '48px',
                      left: '-12px',
                      top: '-12px',
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
