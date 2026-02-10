'use client'

import { useState, useRef, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { getInitials } from '@/lib/utils'
import { notifications as initialNotifications } from '@/data/mockData'

interface NavbarProps {
  onMenuClick: () => void
  userName?: string
}

// Top navigation bar for app pages
export function Navbar({ onMenuClick, userName = 'John Administrator' }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const panelRef = useRef<HTMLDivElement>(null)

  const unreadCount = notifications.filter((n) => !n.read).length

  // Close panel on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowNotifications(false)
      }
    }
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showNotifications])

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const typeIcon = (type: 'alert' | 'success' | 'info') => {
    switch (type) {
      case 'alert':
        return (
          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        )
      case 'success':
        return (
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )
      case 'info':
        return (
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )
    }
  }

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
          <div className="relative" ref={panelRef}>
            <button
              onClick={() => setShowNotifications((prev) => !prev)}
              className="relative p-2 hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20 rounded-lg"
            >
              <svg className="w-6 h-6 text-brand-muted dark:text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4.5 h-4.5 min-w-[18px] bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Panel */}
            {showNotifications && (
              <>
                {/* Mobile: full-width overlay */}
                <div className="sm:hidden fixed inset-0 top-16 z-50 bg-black/30" onClick={() => setShowNotifications(false)} />
                <div className="fixed left-2 right-2 top-[4.5rem] sm:left-auto sm:right-auto sm:top-auto sm:absolute sm:right-0 sm:top-full sm:mt-2 sm:w-96 bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-brand-muted/10 dark:border-brand-accent/20 overflow-hidden z-50">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-brand-muted/10 dark:border-brand-accent/20">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-brand-primary dark:text-white">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="px-2 py-0.5 text-[11px] font-semibold bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-full">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllRead}
                          className="text-xs font-medium text-brand-accent dark:text-brand-muted hover:text-brand-primary dark:hover:text-white transition-colors"
                        >
                          Mark all read
                        </button>
                      )}
                      <button
                        onClick={() => setShowNotifications(false)}
                        className="sm:hidden p-1 hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20 rounded-lg"
                      >
                        <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Notification list */}
                  <div className="max-h-[60vh] sm:max-h-[360px] overflow-y-auto">
                    {notifications.map((notif) => (
                      <button
                        key={notif.id}
                        onClick={() => markAsRead(notif.id)}
                        className={`w-full flex items-start gap-3 px-4 sm:px-5 py-3.5 text-left transition-colors hover:bg-brand-muted/5 dark:hover:bg-brand-accent/10 ${
                          !notif.read ? 'bg-brand-accent/[0.03] dark:bg-brand-accent/[0.06]' : ''
                        }`}
                      >
                        {typeIcon(notif.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className={`text-sm font-medium truncate ${!notif.read ? 'text-brand-primary dark:text-white' : 'text-brand-muted'}`}>
                              {notif.title}
                            </p>
                            {!notif.read && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-brand-muted mt-0.5 line-clamp-2">{notif.message}</p>
                          <p className="text-[11px] text-brand-muted/70 mt-1">{notif.time}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-brand-muted/10 dark:border-brand-accent/20 px-4 sm:px-5 py-3">
                    <button className="w-full text-xs font-medium text-center text-brand-accent dark:text-brand-muted hover:text-brand-primary dark:hover:text-white transition-colors">
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

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
