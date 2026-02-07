'use client'

import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
  className?: string
}

// Status badge component with dark mode support
export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className,
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-brand-muted/20 text-brand-secondary dark:bg-brand-muted/30 dark:text-brand-muted',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    info: 'bg-brand-accent/20 text-brand-primary dark:bg-brand-accent/30 dark:text-brand-accent',
  }

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}

// Dot badge for status indicators
interface DotBadgeProps {
  status: 'active' | 'inactive' | 'pending'
  label: string
}

export function DotBadge({ status, label }: DotBadgeProps) {
  const dotColors = {
    active: 'bg-green-500',
    inactive: 'bg-red-500',
    pending: 'bg-amber-500',
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('w-2 h-2 rounded-full', dotColors[status])} />
      <span className="text-sm text-brand-primary dark:text-white capitalize">{label}</span>
    </span>
  )
}
