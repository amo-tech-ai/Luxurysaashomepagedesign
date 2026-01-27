// Animation sequence definitions for each screen

export interface Point {
  x: number;
  y: number;
}

export interface AnimationStep {
  type: 'move' | 'click' | 'hover' | 'drag' | 'wait';
  target?: Point;
  duration: number;
  scale?: number;
  triggerUIState?: string;
}

export interface ScreenSequence {
  steps: AnimationStep[];
  totalDuration: number;
}

// Generate curved bezier path between two points
export function generateCurvedPath(start: Point, end: Point): Point[] {
  const points: Point[] = [];
  const steps = 20;
  
  // Calculate control points for natural curve
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Perpendicular offset for curve (20% of distance)
  const offset = distance * 0.2;
  const perpX = -dy / distance;
  const perpY = dx / distance;
  
  const control1 = {
    x: start.x + dx * 0.3 + perpX * offset,
    y: start.y + dy * 0.3 + perpY * offset,
  };
  
  const control2 = {
    x: start.x + dx * 0.7 + perpX * offset * 0.5,
    y: start.y + dy * 0.7 + perpY * offset * 0.5,
  };
  
  // Generate points along cubic bezier curve
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const point = cubicBezier(start, end, control1, control2, t);
    points.push(point);
  }
  
  return points;
}

function cubicBezier(
  start: Point,
  end: Point,
  control1: Point,
  control2: Point,
  t: number
): Point {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;
  
  return {
    x: uuu * start.x + 3 * uu * t * control1.x + 3 * u * tt * control2.x + ttt * end.x,
    y: uuu * start.y + 3 * uu * t * control1.y + 3 * u * tt * control2.y + ttt * end.y,
  };
}

export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Screen 1: Profile Screen
export const profileSequence: ScreenSequence = {
  totalDuration: 2500,
  steps: [
    { type: 'move', target: { x: 200, y: 130 }, duration: 800 },
    { type: 'hover', duration: 300 },
    { type: 'click', duration: 200, scale: 0.9, triggerUIState: 'focus-url' },
    { type: 'wait', duration: 400 },
    { type: 'move', target: { x: 480, y: 200 }, duration: 600 },
    { type: 'hover', duration: 300 },
    { type: 'move', target: { x: 520, y: 390 }, duration: 600 },
    { type: 'hover', duration: 200 },
    { type: 'click', duration: 200, scale: 0.9, triggerUIState: 'click-continue' },
  ],
};

// Screen 2: Pitch Deck Screen
export const pitchDeckSequence: ScreenSequence = {
  totalDuration: 2000,
  steps: [
    { type: 'move', target: { x: 90, y: 390 }, duration: 800 },
    { type: 'hover', duration: 300 },
    { type: 'click', duration: 200, scale: 0.9, triggerUIState: 'generate-deck' },
    { type: 'wait', duration: 200 },
    { type: 'move', target: { x: 70, y: 140 }, duration: 800 },
    { type: 'hover', duration: 400 },
    { type: 'move', target: { x: 240, y: 390 }, duration: 600 },
    { type: 'hover', duration: 300 },
  ],
};

// Screen 3: Execution Screen  
export const executionSequence: ScreenSequence = {
  totalDuration: 2500,
  steps: [
    { type: 'move', target: { x: 210, y: 150 }, duration: 800 },
    { type: 'hover', duration: 300, triggerUIState: 'hover-card' },
    { type: 'click', duration: 200, scale: 0.95, triggerUIState: 'drag-start' },
    { type: 'drag', target: { x: 370, y: 150 }, duration: 1000, scale: 0.95 },
    { type: 'click', duration: 200, scale: 1, triggerUIState: 'drag-end' },
    { type: 'wait', duration: 200 },
    { type: 'move', target: { x: 300, y: 350 }, duration: 600 },
    { type: 'hover', duration: 300 },
    { type: 'click', duration: 200, scale: 0.9, triggerUIState: 'click-action' },
  ],
};

export const screenSequences = [
  profileSequence,
  null, // Analysis screen - skip or minimal
  pitchDeckSequence,
  executionSequence,
];
