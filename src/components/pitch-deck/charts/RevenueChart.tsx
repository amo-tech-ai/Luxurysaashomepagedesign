import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueChartProps {
  data?: Array<{ year: string; arr: number }>;
}

export function RevenueChart({ data }: RevenueChartProps) {
  const defaultData = [
    { year: 'Year 1', arr: 1200 },
    { year: 'Year 2', arr: 4500 },
    { year: 'Year 3', arr: 12000 }
  ];

  const chartData = data || defaultData;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="year" 
          stroke="#6b7280" 
          fontSize={12}
          tick={{ fill: '#6b7280' }}
        />
        <YAxis 
          stroke="#6b7280" 
          fontSize={12}
          tick={{ fill: '#6b7280' }}
          tickFormatter={(value) => `$${value}K`}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '12px'
          }}
          formatter={(value: number) => [`$${value}K`, 'ARR']}
        />
        <Bar 
          dataKey="arr" 
          fill="#0d5f4e"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
