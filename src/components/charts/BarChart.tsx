'use client'

import { useState, useEffect } from 'react'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { useTheme } from '@/context/ThemeContext'

interface DataPoint {
  [key: string]: string | number
}

interface BarChartProps {
  data: DataPoint[]
  xKey: string
  bars: {
    dataKey: string
    color: string
    name: string
  }[]
  height?: number
  showLegend?: boolean
  colorByBar?: boolean
  colors?: string[]
}

// Bar chart with brand colors and dark mode support
export function BarChart({
  data,
  xKey,
  bars,
  height = 300,
  showLegend = true,
  colorByBar = false,
  colors = ['#0F0E47', '#272757', '#505081', '#8686AC'],
}: BarChartProps) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div style={{ height }} className="flex items-center justify-center bg-brand-muted/5 dark:bg-brand-accent/10 rounded-lg">
        <div className="animate-pulse text-brand-muted">Loading chart...</div>
      </div>
    )
  }

  const gridColor = theme === 'dark' ? '#505081' : '#E5E7EB'
  const textColor = theme === 'dark' ? '#8686AC' : '#616161'

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} opacity={0.3} vertical={false} />
        <XAxis
          dataKey={xKey}
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
        />
        <YAxis
          tick={{ fill: textColor, fontSize: 12 }}
          tickLine={{ stroke: gridColor }}
          axisLine={{ stroke: gridColor }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === 'dark' ? '#1A1A3E' : '#FFFFFF',
            border: `1px solid ${theme === 'dark' ? '#505081' : '#E5E7EB'}`,
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
          labelStyle={{ color: theme === 'dark' ? '#FFFFFF' : '#0F0E47', fontWeight: 600 }}
          cursor={{ fill: theme === 'dark' ? 'rgba(80, 80, 129, 0.2)' : 'rgba(15, 14, 71, 0.05)' }}
        />
        {showLegend && (
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="rect"
            iconSize={12}
          />
        )}
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            fill={bar.color}
            name={bar.name}
            radius={[4, 4, 0, 0]}
          >
            {colorByBar &&
              data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
          </Bar>
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
