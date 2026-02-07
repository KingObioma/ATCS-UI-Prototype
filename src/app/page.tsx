'use client'

import Link from 'next/link'
import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { Button } from '@/components/ui/Button'
import { companyInfo } from '@/data/mockData'

// Homepage - Landing page with hero, features, and CTA
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-secondary dark:text-brand-muted">Enterprise Ready</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary dark:text-white leading-tight">
              Streamline Your
              <span className="block gradient-brand bg-clip-text text-transparent">Workflow Management</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 gradient-brand opacity-10 blur-3xl rounded-3xl" />
            <div className="relative bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-brand-muted/10 dark:border-brand-accent/20 overflow-hidden">
              <div className="h-8 bg-brand-muted/5 dark:bg-dark-surface flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Tasks Completed', value: '156', color: 'bg-brand-primary' },
                    { label: 'Tasks Pending', value: '42', color: 'bg-brand-secondary' },
                    { label: 'Performance', value: '89.5%', color: 'bg-brand-accent' },
                    { label: 'Team Members', value: '24', color: 'bg-brand-muted' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-light-bg dark:bg-dark-surface rounded-xl p-4">
                      <div className={`w-10 h-10 ${stat.color} rounded-lg mb-3 opacity-20`} />
                      <p className="text-2xl font-bold text-brand-primary dark:text-white">{stat.value}</p>
                      <p className="text-sm text-brand-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-light-bg dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary dark:text-white">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
              Powerful features to help you manage your team and track performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-card dark:shadow-card-dark hover:shadow-card-hover transition-all duration-300 border border-transparent dark:border-brand-accent/20"
              >
                <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-brand rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of organizations already using ATCS to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90 w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-muted/10 dark:border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <span className="font-bold text-xl text-brand-primary dark:text-white">ATCS</span>
            </div>
            <p className="text-brand-muted text-sm">
              © 2024 ATCS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
