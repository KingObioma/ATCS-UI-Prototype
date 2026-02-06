'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'

interface DataPoint {
  name: string
  value: number
  color: string
}

interface DonutChartProps {
  data: DataPoint[]
  height?: number
  innerRadius?: number
  outerRadius?: number
  showLegend?: boolean
}

// Donut chart component for distribution visualization
export function DonutChart({
  data,
  height = 300,
  innerRadius = 60,
  outerRadius = 100,
  showLegend = true,
}: DonutChartProps) {
  // Calculate total for center label
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
          formatter={(value: number, name: string) => [
            `${value} (${((value / total) * 100).toFixed(1)}%)`,
            name,
          ]}
        />
        {showLegend && (
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={10}
            formatter={(value) => (
              <span style={{ color: '#616161', fontSize: '12px' }}>{value}</span>
            )}
          />
        )}
        {/* Center text showing total */}
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-text-primary"
          style={{ fontSize: '24px', fontWeight: 'bold' }}
        >
          {total}
        </text>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-text-secondary"
          style={{ fontSize: '12px' }}
        >
          Total
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}
