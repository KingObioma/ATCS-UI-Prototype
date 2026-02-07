'use client'

import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: string[]
  placeholder?: string
}

// Dropdown select component with dark mode support
export function Select({
  label,
  options,
  placeholder,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-brand-primary dark:text-white mb-1.5"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark-surface',
          'text-brand-primary dark:text-white transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-secondary',
          'border-brand-muted/30 dark:border-brand-accent/30 hover:border-brand-accent',
          'cursor-pointer appearance-none',
          'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%238686AC\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")]',
          'bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option} className="dark:bg-dark-surface">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
