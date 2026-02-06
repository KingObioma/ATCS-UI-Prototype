// Utility functions for ATCS UI Prototype

// Combine class names conditionally
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Format date to readable string
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Get status color class
export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'completed':
    case 'active':
      return 'bg-success text-white'
    case 'pending':
    case 'on-leave':
      return 'bg-warning text-white'
    case 'overdue':
    case 'inactive':
      return 'bg-error text-white'
    default:
      return 'bg-gray-400 text-white'
  }
}

// Get status badge variant
export function getStatusBadgeVariant(status: string): 'success' | 'warning' | 'error' | 'default' {
  switch (status.toLowerCase()) {
    case 'completed':
    case 'active':
      return 'success'
    case 'pending':
    case 'on-leave':
      return 'warning'
    case 'overdue':
    case 'inactive':
      return 'error'
    default:
      return 'default'
  }
}

// Calculate percentage
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0
  return Math.round((value / total) * 100)
}

// Format number with commas
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US')
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
