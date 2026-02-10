import { useState } from 'react';

interface ImmersiveBarometerCardProps {
  value: number; // 0-100
  onChange?: (value: number) => void;
}

export function ImmersiveBarometerCard({ value, onChange }: ImmersiveBarometerCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value));
  };
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
        Immersive Barometer
      </h3>
      <p className="text-xs text-gray-600 mb-4">
        Does the use case take place in the real or rather virtual world?
      </p>
      
      {/* Slider */}
      <div className="relative mb-4">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleSliderChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="w-full h-2 bg-gradient-to-r from-[#8B7355] via-[#6b9d89] to-[#4169E1] rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, 
              #8B7355 0%, 
              #6b9d89 50%, 
              #4169E1 100%)`,
          }}
        />
        
        {/* Labels */}
        <div className="flex items-center justify-between mt-2 text-xs">
          <span className="text-[#8B7355] font-medium">Real World</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#4169E1] font-medium">Virtual</span>
        </div>
        
        {/* Tick marks */}
        <div className="flex items-center justify-between mt-1 px-1">
          <span className="text-[10px] text-gray-400">0</span>
          <span className="text-[10px] text-gray-400">25</span>
          <span className="text-[10px] text-gray-400">50</span>
          <span className="text-[10px] text-gray-400">75</span>
          <span className="text-[10px] text-gray-400">100</span>
        </div>
      </div>
      
      {/* Current Value */}
      <div className="bg-[#F5F3EF] rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-[#0E3E1B]">
          {value}
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {value < 33
            ? 'Primarily Real World'
            : value < 67
            ? 'Mixed Reality'
            : 'Primarily Virtual World'}
        </div>
      </div>
    </div>
  );
}
