import { ProfileScreen } from './screens/ProfileScreen';
import { AnalysisScreen } from './screens/AnalysisScreen';
import { PitchDeckScreen } from './screens/PitchDeckScreen';
import { ExecutionScreen } from './screens/ExecutionScreen';

interface AppWindowProps {
  activeStep: number;
}

export function AppWindow({ activeStep }: AppWindowProps) {
  return (
    <div className="relative w-full max-w-2xl">
      {/* App Window Shell */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        {/* Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="flex-1 text-center text-sm text-gray-600">
            StartupAI
          </div>
        </div>

        {/* Screen Content Container */}
        <div className="relative bg-white" style={{ minHeight: '500px' }}>
          {/* Crossfade between screens */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: activeStep === 0 ? 1 : 0 }}
          >
            <ProfileScreen />
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
            <PitchDeckScreen />
          </div>

          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: activeStep === 3 ? 1 : 0 }}
          >
            <ExecutionScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
