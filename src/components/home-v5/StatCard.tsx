interface StatCardProps {
  number: string;
  label: string;
  color?: 'mint' | 'white';
}

export function StatCard({ number, label, color = 'white' }: StatCardProps) {
  const bgColor = color === 'mint' ? 'bg-[#DCF9E3]' : 'bg-white';
  
  return (
    <div className={`${bgColor} px-6 py-5 rounded-lg border border-gray-200 shadow-sm`}>
      <div className="text-3xl lg:text-4xl font-light text-[#0E3E1B] mb-1">{number}</div>
      <div className="text-xs lg:text-sm text-[#696969]">{label}</div>
    </div>
  );
}
