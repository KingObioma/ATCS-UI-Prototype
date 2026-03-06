'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

// Public navbar for landing pages
export function PublicNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-brand-muted/10 dark:border-brand-accent/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AT</span>
            </div>
            <span className="font-bold text-xl text-brand-primary dark:text-white">ATCS</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-brand-secondary dark:text-white'
                    : 'text-brand-muted hover:text-brand-secondary dark:hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-brand-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-brand-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-muted/10 dark:border-brand-accent/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-brand-secondary/10 text-brand-secondary dark:bg-brand-accent/20 dark:text-white'
                      : 'text-brand-muted hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-2 px-4">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">Log In</Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
