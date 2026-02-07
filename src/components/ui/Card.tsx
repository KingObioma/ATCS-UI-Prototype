'use client'

import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
}

// Base card wrapper with dark mode support
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-dark-card rounded-xl shadow-card dark:shadow-card-dark p-6 transition-all duration-200 hover:shadow-card-hover border border-transparent dark:border-brand-accent/20',
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
  color?: 'primary' | 'secondary' | 'accent' | 'muted'
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = 'primary',
}: StatsCardProps) {
  const colorStyles: Record<string, string> = {
    primary: 'bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent',
    secondary: 'bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/20 dark:text-brand-muted',
    accent: 'bg-brand-accent/10 text-brand-accent dark:bg-brand-accent/20 dark:text-white',
    muted: 'bg-brand-muted/10 text-brand-muted dark:bg-brand-muted/20 dark:text-brand-muted',
  }

  return (
    <Card className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-text-secondary dark:text-brand-muted text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-brand-primary dark:text-white mt-2">{value}</p>
        {subtitle && (
          <p className="text-text-secondary dark:text-brand-muted text-sm mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className="flex items-center mt-2">
            <span
              className={cn(
                'text-sm font-semibold',
                trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              )}
            >
              {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
            </span>
            <span className="text-text-secondary dark:text-brand-muted text-sm ml-1">vs last month</span>
          </div>
        )}
      </div>
      <div className={cn('p-3 rounded-lg', colorStyles[color])}>
        {icon}
      </div>
    </Card>
  )
}
