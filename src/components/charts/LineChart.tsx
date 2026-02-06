'use client'

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface DataPoint {
  [key: string]: string | number
}

interface LineChartProps {
  data: DataPoint[]
  xKey: string
  lines: {
    dataKey: string
    color: string
    name: string
  }[]
  height?: number
}

// Line chart component for trend visualization
export function LineChart({ data, xKey, lines, height = 300 }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis
          dataKey={xKey}
          tick={{ fill: '#616161', fontSize: 12 }}
          tickLine={{ stroke: '#E5E7EB' }}
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <YAxis
          tick={{ fill: '#616161', fontSize: 12 }}
          tickLine={{ stroke: '#E5E7EB' }}
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
          labelStyle={{ color: '#212121', fontWeight: 600 }}
        />
        <Legend
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
          iconSize={8}
        />
        {lines.map((line) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.color}
            strokeWidth={2}
            dot={{ fill: line.color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
            name={line.name}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}
