import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ATCS - Auto Task Control System',
  description: 'Superb Auto Task Control Platform for employee task submission, KPIs, appraisal, and admin oversight',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary">
        {children}
      </body>
    </html>
  )
}
