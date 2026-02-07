'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

// Reusable Input component with dark mode support
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-brand-primary dark:text-white mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-all duration-200',
            'bg-white dark:bg-dark-surface',
            'text-brand-primary dark:text-white',
            'placeholder:text-brand-muted dark:placeholder:text-brand-muted',
            'focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-secondary',
            error
              ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
              : 'border-brand-muted/30 dark:border-brand-accent/30 hover:border-brand-accent',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-brand-muted">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
