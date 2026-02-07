'use client'

import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { getInitials } from '@/lib/utils'

interface NavbarProps {
  onMenuClick: () => void
  userName?: string
}

// Top navigation bar for app pages
export function Navbar({ onMenuClick, userName = 'John Administrator' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg border-b border-brand-muted/10 dark:border-brand-accent/20 h-16">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20 rounded-lg"
          >
            <svg className="w-6 h-6 text-brand-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Search bar */}
          <div className="hidden sm:flex items-center bg-brand-muted/5 dark:bg-brand-accent/10 rounded-xl px-4 py-2">
            <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none ml-2 w-48 lg:w-64 text-sm text-brand-primary dark:text-white placeholder:text-brand-muted"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <button className="relative p-2 hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20 rounded-lg">
            <svg className="w-6 h-6 text-brand-muted dark:text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User avatar */}
          <div className="flex items-center gap-3 pl-3 border-l border-brand-muted/20 dark:border-brand-accent/20">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-brand-primary dark:text-white">{userName}</p>
              <p className="text-xs text-brand-muted">Administrator</p>
            </div>
            <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {getInitials(userName)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
