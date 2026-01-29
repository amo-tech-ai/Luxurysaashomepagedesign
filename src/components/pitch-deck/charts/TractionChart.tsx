import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TractionChartProps {
  data?: Array<{ month: string; value: number }>;
}

export function TractionChart({ data }: TractionChartProps) {
  const defaultData = [
    { month: 'Jan', value: 1200 },
    { month: 'Feb', value: 1800 },
    { month: 'Mar', value: 2500 },
    { month: 'Apr', value: 3200 },
    { month: 'May', value: 4500 },
    { month: 'Jun', value: 6300 }
  ];

  const chartData = data || defaultData;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="month" 
          stroke="#6b7280" 
          fontSize={12}
          tick={{ fill: '#6b7280' }}
        />
        <YAxis 
          stroke="#6b7280" 
          fontSize={12}
          tick={{ fill: '#6b7280' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '12px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#0d5f4e" 
          strokeWidth={3}
          dot={{ fill: '#0d5f4e', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
