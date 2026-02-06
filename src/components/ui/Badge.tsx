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

// Status badge component for displaying task/employee status
export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className,
}: BadgeProps) {
  // Variant-specific styles
  const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-gray-100 text-text-secondary',
    success: 'bg-success/10 text-success-dark',
    warning: 'bg-warning/10 text-warning-dark',
    error: 'bg-error/10 text-error-dark',
    info: 'bg-primary/10 text-primary',
  }

  // Size-specific styles
  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
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
    active: 'bg-success',
    inactive: 'bg-error',
    pending: 'bg-warning',
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('w-2 h-2 rounded-full', dotColors[status])} />
      <span className="text-sm text-text-primary capitalize">{label}</span>
    </span>
  )
}
