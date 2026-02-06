'use client'

import { getInitials } from '@/lib/utils'

interface NavbarProps {
  onMenuClick: () => void
  userName?: string
}

// Top navigation bar component
export function Navbar({ onMenuClick, userName = 'John Administrator' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-surface border-b border-gray-100 h-16">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left side - Menu button (mobile) and search */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Search bar */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none ml-2 w-48 lg:w-64 text-sm text-text-primary placeholder:text-text-secondary"
            />
          </div>
        </div>

        {/* Right side - Notifications and user */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {/* Notification badge */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
          </button>

          {/* User avatar and info */}
          <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-text-primary">{userName}</p>
              <p className="text-xs text-text-secondary">Administrator</p>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {getInitials(userName)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
