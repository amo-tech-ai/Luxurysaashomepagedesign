import { useState, useEffect, useRef } from 'react';
import {
  Point,
  AnimationStep,
  ScreenSequence,
  generateCurvedPath,
  easeInOutCubic,
  screenSequences,
} from './cursorSequences';

interface CursorState {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  isVisible: boolean;
}

interface UseCursorAnimationProps {
  activeStep: number;
  isInView: boolean;
  isPaused: boolean;
}

export function useCursorAnimation({
  activeStep,
  isInView,
  isPaused,
}: UseCursorAnimationProps) {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: -100,
    y: -100,
    scale: 1,
    opacity: 0,
    isVisible: false,
  });

  const [uiState, setUIState] = useState<string | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Main animation loop
  useEffect(() => {
    // Don't animate if reduced motion, not in view, or paused
    if (prefersReducedMotion || !isInView || isPaused) {
      setCursorState((prev) => ({ ...prev, isVisible: false, opacity: 0 }));
      return;
    }

    const sequence = screenSequences[activeStep];
    if (!sequence) {
      setCursorState((prev) => ({ ...prev, isVisible: false, opacity: 0 }));
      return;
    }

    // Start animation
    isAnimatingRef.current = true;
    runSequence(sequence);

    return () => {
      isAnimatingRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeStep, isInView, isPaused, prefersReducedMotion]);

  const runSequence = async (sequence: ScreenSequence) => {
    // Fade in cursor at starting position
    setCursorState({
      x: 100,
      y: 80,
      scale: 1,
      opacity: 0,
      isVisible: true,
    });

    await wait(200);
    
    setCursorState((prev) => ({ ...prev, opacity: 1 }));
    await wait(400);

    // Run through all steps
    let currentPosition: Point = { x: 100, y: 80 };

    for (const step of sequence.steps) {
      if (!isAnimatingRef.current) break;

      switch (step.type) {
        case 'move':
          if (step.target) {
            currentPosition = await animateMove(currentPosition, step.target, step.duration);
          }
          break;

        case 'hover':
          await wait(step.duration);
          break;

        case 'click':
          if (step.triggerUIState) {
            setUIState(step.triggerUIState);
          }
          await animateClick(step.scale || 0.9, step.duration);
          break;

        case 'drag':
          if (step.target) {
            currentPosition = await animateDrag(
              currentPosition,
              step.target,
              step.duration,
              step.scale || 0.95
            );
          }
          break;

        case 'wait':
          await wait(step.duration);
          break;
      }
    }

    // Fade out and loop
    if (isAnimatingRef.current) {
      setCursorState((prev) => ({ ...prev, opacity: 0 }));
      await wait(300);
      
      // Reset UI state
      setUIState(null);
      
      // Loop - restart sequence
      if (isAnimatingRef.current) {
        await wait(400);
        runSequence(sequence);
      }
    }
  };

  const animateMove = (from: Point, to: Point, duration: number): Promise<Point> => {
    return new Promise((resolve) => {
      const path = generateCurvedPath(from, to);
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        if (!isAnimatingRef.current) {
          resolve(to);
          return;
        }

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        const index = Math.floor(easedProgress * (path.length - 1));
        const point = path[index] || to;

        setCursorState((prev) => ({
          ...prev,
          x: point.x,
          y: point.y,
        }));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          resolve(to);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    });
  };

  const animateClick = (targetScale: number, duration: number): Promise<void> => {
    return new Promise((resolve) => {
      // Scale down
      setCursorState((prev) => ({ ...prev, scale: targetScale }));

      timeoutRef.current = window.setTimeout(() => {
        // Scale back up
        setCursorState((prev) => ({ ...prev, scale: 1 }));
        timeoutRef.current = window.setTimeout(() => {
          resolve();
        }, duration / 2);
      }, duration / 2);
    });
  };

  const animateDrag = (
    from: Point,
    to: Point,
    duration: number,
    scale: number
  ): Promise<Point> => {
    setCursorState((prev) => ({ ...prev, scale }));
    return animateMove(from, to, duration);
  };

  const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      timeoutRef.current = window.setTimeout(resolve, ms);
    });
  };

  return {
    cursorState,
    uiState,
  };
}