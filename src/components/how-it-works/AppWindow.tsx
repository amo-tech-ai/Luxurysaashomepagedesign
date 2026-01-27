import { ProfileScreen } from './screens/ProfileScreen';
import { AnalysisScreen } from './screens/AnalysisScreen';
import { PitchDeckScreen } from './screens/PitchDeckScreen';
import { ExecutionScreen } from './screens/ExecutionScreen';
import { AnimatedCursor } from './AnimatedCursor';

interface AppWindowProps {
  activeStep: number;
  cursorState?: {
    x: number;
    y: number;
    scale: number;
    opacity: number;
    isVisible: boolean;
  };
  uiState?: string | null;
}

export function AppWindow({ activeStep, cursorState, uiState }: AppWindowProps) {
  return (
    <div className="relative w-full max-w-2xl">
      {/* App Window Shell */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Window Header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="flex-1 text-center text-sm text-gray-500 font-light">
            StartupAI
          </div>
        </div>

        {/* Screen Content Container */}
        <div className="relative bg-white" style={{ minHeight: '440px' }}>
          {/* Crossfade between screens */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: activeStep === 0 ? 1 : 0 }}
          >
            <ProfileScreen uiState={uiState} />
          </div>

          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: activeStep === 1 ? 1 : 0 }}
          >
            <AnalysisScreen />
          </div>

          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: activeStep === 2 ? 1 : 0 }}
          >
            <PitchDeckScreen uiState={uiState} />
          </div>

          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: activeStep === 3 ? 1 : 0 }}
          >
            <ExecutionScreen uiState={uiState} />
          </div>

          {/* Animated Cursor */}
          {cursorState && (
            <AnimatedCursor
              x={cursorState.x}
              y={cursorState.y}
              scale={cursorState.scale}
              opacity={cursorState.opacity}
              isVisible={cursorState.isVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
}