// Filter Chip Component
// Clickable filter tag with active/inactive states

interface FilterChipProps {
  label: string;
  color?: string;
  isActive: boolean;
  onClick: () => void;
  fullWidth?: boolean;
}

export default function FilterChip({ 
  label, 
  color, 
  isActive, 
  onClick,
  fullWidth = false 
}: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
        fullWidth ? 'w-full text-left' : ''
      } ${
        isActive
          ? 'bg-[#0d5f4e] text-white border-[#0d5f4e] shadow-sm'
          : 'bg-white text-[#6B7280] border-gray-300 hover:border-[#6b9d89] hover:bg-[#E8F4F1]'
      }`}
    >
      <div className="flex items-center gap-2">
        {/* Color dot indicator */}
        {color && (
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: isActive ? 'white' : color }}
          />
        )}
        <span>{label}</span>
      </div>
    </button>
  );
}
