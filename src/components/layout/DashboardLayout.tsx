'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

// Main layout wrapper for authenticated pages
export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar navigation */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="lg:pl-64">
        {/* Top navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
