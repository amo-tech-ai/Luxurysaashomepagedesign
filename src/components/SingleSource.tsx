import { GitBranch, TrendingUp, RefreshCw, Network, Zap } from 'lucide-react';

export function SingleSource() {
  // Pentagon distribution: 5 nodes at 0°, 72°, 144°, 216°, 288°
  // Radius: 250px from center
  const nodes = [
    { 
      angle: 0, 
      label: 'Foundation', 
      icon: GitBranch,
      // cos(0°) = 1, sin(0°) = 0
      x: 250,
      y: 0
    },
    { 
      angle: 72, 
      label: 'Analysis', 
      icon: TrendingUp,
      // cos(72°) ≈ 0.309, sin(72°) ≈ 0.951
      x: 77.25,
      y: 237.75
    },
    { 
      angle: 144, 
      label: 'Workflow', 
      icon: RefreshCw,
      // cos(144°) ≈ -0.809, sin(144°) ≈ 0.588
      x: -202.25,
      y: 147
    },
    { 
      angle: 216, 
      label: 'Scaling', 
      icon: Network,
      // cos(216°) ≈ -0.809, sin(216°) ≈ -0.588
      x: -202.25,
      y: -147
    },
    { 
      angle: 288, 
      label: 'Momentum', 
      icon: Zap,
      // cos(288°) ≈ 0.309, sin(288°) ≈ -0.951
      x: 77.25,
      y: -237.75
    },
  ];

  return (
    <section className="relative bg-[#fafaf8] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top-left metadata */}
        <div className="absolute top-8 left-8 border-l border-[#0d5f4e]/20 pl-4 py-1">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#0d5f4e]/60 font-medium">
            Variant 2 of 3
          </p>
          <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-light mt-1 italic">
            Orbital Loop Architecture
          </p>
        </div>

        {/* Diagram Container */}
        <div className="relative w-full max-w-[800px] mx-auto h-[600px] lg:h-[800px] flex items-center justify-center">
          
          {/* Dotted orbital path */}
          <div 
            className="absolute rounded-full border border-dotted border-[#0d5f4e]/30"
            style={{
              width: '500px',
              height: '500px',
            }}
          />

          {/* Central Circle - StartupAI Core */}
          <div className="relative z-30 w-56 h-56 bg-[#0d5f4e] rounded-full flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-2xl font-light tracking-[0.3em] mb-1">
              STARTUP<span className="font-semibold">AI</span>
            </h1>
            <div className="w-8 h-[0.5px] bg-white/30 my-2" />
            <p className="text-[9px] uppercase tracking-[0.4em] opacity-70 font-medium">
              Core System
            </p>
          </div>

          {/* Outer nodes */}
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            
            return (
              <div
                key={idx}
                className="absolute w-[100px] h-[100px] flex flex-col items-center justify-center"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${node.x}px), calc(-50% + ${node.y}px))`,
                }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-[0.5px] border-[#0d5f4e]/20">
                  <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1} />
                </div>
                <p className="mt-3 text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase">
                  {node.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}