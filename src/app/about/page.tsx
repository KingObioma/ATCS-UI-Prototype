'use client'

import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { companyInfo } from '@/data/mockData'

// About Page - Company information
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-brand opacity-[0.03] dark:opacity-[0.08]" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-accent/10 dark:bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/10 dark:bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 mb-6">
              <span className="w-2 h-2 bg-brand-accent dark:bg-brand-muted rounded-full" />
              <span className="text-sm font-medium text-brand-secondary dark:text-brand-muted">Since 2021</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary dark:text-white leading-tight">
              Built for Teams
              <span className="block gradient-text">That Move Fast</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-muted chioma getting clapped max-w-2xl mx-auto">
              ATCS was born from a simple idea — that managing work should feel effortless, not exhausting. We build the tools that let teams focus on what actually matters.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                value: '500+',
                label: 'Enterprise Clients',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
              },
              {
                value: '50K+',
                label: 'Active Users',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
              },
              {
                value: '99.9%',
                label: 'Uptime SLA',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
              },
              {
                value: '24/7',
                label: 'Support',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                color: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-dark-card rounded-2xl p-5 sm:p-6 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20 text-center"
              >
                <div className={`w-10 h-10 ${stat.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">{stat.value}</p>
                <p className="text-sm text-brand-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-light-bg dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-brand-accent dark:text-brand-muted uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary dark:text-white mt-3 mb-6">
                From Idea to Industry Standard
              </h2>
              <p className="text-lg text-brand-muted mb-4">
                ATCS (Auto Task Control System) started as an internal tool built to solve our own frustrations with scattered spreadsheets and missed deadlines.
              </p>
              <p className="text-lg text-brand-muted mb-4">
                What began as a simple task tracker evolved into a comprehensive enterprise platform — trusted by organizations of all sizes, from lean startups to Fortune 500 companies.
              </p>
              <p className="text-lg text-brand-muted">
                Today, we serve over 500 organizations across 30+ countries, processing millions of tasks every month with 99.9% uptime.
              </p>
            </div>

            {/* Visual timeline */}
            <div className="space-y-6">
              {[
                { year: '2021', title: 'Founded', desc: 'Started as an internal tool to fix broken workflows' },
                { year: '2022', title: 'Public Launch', desc: 'Opened the platform to early adopters and beta users' },
                { year: '2023', title: 'Enterprise Ready', desc: 'SOC2 compliance, SSO, and advanced admin controls' },
                { year: '2024', title: '500+ Clients', desc: 'Crossed 50K active users across 30+ countries' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{item.year.slice(2)}</span>
                    </div>
                    {i < 3 && <div className="w-px h-full bg-brand-muted/20 dark:bg-brand-accent/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs font-semibold text-brand-accent dark:text-brand-muted uppercase tracking-wider">{item.year}</p>
                    <h3 className="text-lg font-semibold text-brand-primary dark:text-white mt-1">{item.title}</h3>
                    <p className="text-sm text-brand-muted mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-accent dark:text-brand-muted uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary dark:text-white mt-3">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light-bg dark:bg-dark-card rounded-2xl p-8 border border-brand-muted/10 dark:border-brand-accent/20">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-3">Our Vision</h3>
              <p className="text-brand-muted leading-relaxed">
                To be the global leader in intelligent workflow management, enabling every organization to achieve operational excellence through innovative technology.
              </p>
            </div>
            <div className="bg-light-bg dark:bg-dark-card rounded-2xl p-8 border border-brand-muted/10 dark:border-brand-accent/20">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-3">Our Mission</h3>
              <p className="text-brand-muted leading-relaxed">
                To empower organizations with powerful yet simple tools that automate routine tasks, provide actionable insights, and foster a culture of continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-light-bg dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-accent dark:text-brand-muted uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary dark:text-white mt-3">Our Services</h2>
            <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">Comprehensive solutions for modern enterprises</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Workflow Automation',
                description: 'Automate repetitive tasks and streamline complex business processes with intelligent workflows.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                color: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
              },
              {
                title: 'Performance Analytics',
                description: 'Gain deep insights into team performance with advanced analytics and customizable dashboards.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
              },
              {
                title: 'Enterprise Integration',
                description: 'Seamlessly integrate with your existing tools and systems through our robust API platform.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
                color: 'bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20 hover:shadow-card-hover transition-all duration-300">
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-primary dark:text-white mb-3">{service.title}</h3>
                <p className="text-brand-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-muted/10 dark:border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-muted text-sm">
            &copy; 2024 ATCS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
