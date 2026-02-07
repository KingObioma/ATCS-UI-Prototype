'use client'

import { cn } from '@/lib/utils'

// Table root component with dark mode support
interface TableProps {
  children: React.ReactNode
  className?: string
}

export function Table({ children, className }: TableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full min-w-[640px]">
        {children}
      </table>
    </div>
  )
}

// Table header
interface TableHeaderProps {
  children: React.ReactNode
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead className="bg-light-bg dark:bg-dark-surface border-b border-brand-muted/20 dark:border-brand-accent/20">
      {children}
    </thead>
  )
}

// Table body
interface TableBodyProps {
  children: React.ReactNode
}

export function TableBody({ children }: TableBodyProps) {
  return <tbody className="divide-y divide-brand-muted/10 dark:divide-brand-accent/10">{children}</tbody>
}

// Table row
interface TableRowProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function TableRow({ children, className, onClick }: TableRowProps) {
  return (
    <tr
      className={cn(
        'hover:bg-brand-muted/5 dark:hover:bg-brand-accent/10 transition-colors',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </tr>
  )
}

// Table header cell
interface TableHeadProps {
  children: React.ReactNode
  className?: string
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <th
      className={cn(
        'px-4 py-3 text-left text-xs font-semibold text-brand-secondary dark:text-brand-muted uppercase tracking-wider',
        className
      )}
    >
      {children}
    </th>
  )
}

// Table data cell
interface TableCellProps {
  children: React.ReactNode
  className?: string
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td className={cn('px-4 py-4 text-sm text-brand-primary dark:text-white', className)}>
      {children}
    </td>
  )
}
