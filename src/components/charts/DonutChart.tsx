'use client'

import { useState, useEffect } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'
import { useTheme } from '@/context/ThemeContext'

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

// Donut chart with brand colors and dark mode support
export function DonutChart({
  data,
  height = 300,
  innerRadius = 60,
  outerRadius = 100,
  showLegend = true,
}: DonutChartProps) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const total = data.reduce((sum, item) => sum + item.value, 0)

  if (!mounted) {
    return (
      <div style={{ height }} className="flex items-center justify-center bg-brand-muted/5 dark:bg-brand-accent/10 rounded-lg">
        <div className="animate-pulse text-brand-muted">Loading chart...</div>
      </div>
    )
  }

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
            backgroundColor: theme === 'dark' ? '#1A1A3E' : '#FFFFFF',
            border: `1px solid ${theme === 'dark' ? '#505081' : '#E5E7EB'}`,
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
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
              <span style={{ color: theme === 'dark' ? '#8686AC' : '#616161', fontSize: '12px' }}>{value}</span>
            )}
          />
        )}
        {/* Center text */}
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            fill: theme === 'dark' ? '#FFFFFF' : '#0F0E47'
          }}
        >
          {total}
        </text>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: '12px',
            fill: theme === 'dark' ? '#8686AC' : '#616161'
          }}
        >
          Total
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}
