'use client'

import { cn } from '@/lib/utils'

// Table root component
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
    <thead className="bg-gray-50 border-b border-gray-200">
      {children}
    </thead>
  )
}

// Table body
interface TableBodyProps {
  children: React.ReactNode
}

export function TableBody({ children }: TableBodyProps) {
  return <tbody className="divide-y divide-gray-100">{children}</tbody>
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
        'hover:bg-gray-50 transition-colors',
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
        'px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider',
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
    <td className={cn('px-4 py-4 text-sm text-text-primary', className)}>
      {children}
    </td>
  )
}
