'use client'

import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { companyInfo } from '@/data/mockData'

// About Page - Company information
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About ATCS
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Empowering organizations with intelligent workflow management
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-brand-muted mb-4">
                ATCS (Auto Task Control System) is a leading enterprise workflow management platform designed to help organizations streamline their operations and maximize productivity.
              </p>
              <p className="text-lg text-brand-muted mb-4">
                Founded with a mission to simplify complex business processes, we provide comprehensive solutions for task management, performance tracking, and team collaboration.
              </p>
              <p className="text-lg text-brand-muted">
                Our platform is trusted by organizations of all sizes, from startups to Fortune 500 companies.
              </p>
            </div>
            <div className="bg-light-bg dark:bg-dark-card rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '500+', label: 'Enterprise Clients' },
                  { value: '50K+', label: 'Active Users' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold text-brand-secondary dark:text-brand-accent">{stat.value}</p>
                    <p className="text-sm text-brand-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-light-bg dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-card dark:shadow-card-dark">
              <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-3">Our Vision</h3>
              <p className="text-brand-muted">
                To be the global leader in intelligent workflow management, enabling every organization to achieve operational excellence through innovative technology.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-card dark:shadow-card-dark">
              <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-3">Our Mission</h3>
              <p className="text-brand-muted">
                To empower organizations with powerful yet simple tools that automate routine tasks, provide actionable insights, and foster a culture of continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary dark:text-white">Our Services</h2>
            <p className="mt-4 text-lg text-brand-muted">Comprehensive solutions for modern enterprises</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Workflow Automation',
                description: 'Automate repetitive tasks and streamline complex business processes with intelligent workflows.',
              },
              {
                title: 'Performance Analytics',
                description: 'Gain deep insights into team performance with advanced analytics and customizable dashboards.',
              },
              {
                title: 'Enterprise Integration',
                description: 'Seamlessly integrate with your existing tools and systems through our robust API platform.',
              },
            ].map((service, i) => (
              <div key={i} className="bg-light-bg dark:bg-dark-card rounded-2xl p-6 border border-brand-muted/10 dark:border-brand-accent/20">
                <h3 className="text-xl font-semibold text-brand-primary dark:text-white mb-3">{service.title}</h3>
                <p className="text-brand-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-muted/10 dark:border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-muted text-sm">
            © 2024 ATCS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
