import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'ATCS - Auto Task Control System',
  description: 'Enterprise Workflow Management Platform - Automated job control, staff appraisal, KPI tracking, reporting, real-time monitoring, and admin oversight.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light-bg dark:bg-dark-bg text-brand-primary dark:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
