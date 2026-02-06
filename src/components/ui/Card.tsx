'use client'

import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
}

// Base card wrapper component
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-xl shadow-card p-6 transition-shadow hover:shadow-card-hover',
        className
      )}
    >
      {children}
    </div>
  )
}

// Stats card for dashboard metrics
interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = 'primary',
}: StatsCardProps) {
  // Color mapping for icon backgrounds
  const colorStyles: Record<string, string> = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
  }

  return (
    <Card className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-text-secondary text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-text-primary mt-2">{value}</p>
        {subtitle && (
          <p className="text-text-secondary text-sm mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className="flex items-center mt-2">
            <span
              className={cn(
                'text-sm font-medium',
                trend.isPositive ? 'text-success' : 'text-error'
              )}
            >
              {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
            </span>
            <span className="text-text-secondary text-sm ml-1">vs last month</span>
          </div>
        )}
      </div>
      <div className={cn('p-3 rounded-lg', colorStyles[color])}>
        {icon}
      </div>
    </Card>
  )
}
