'use client'

import { useState } from 'react'
import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { companyInfo } from '@/data/mockData'

// Contact Page - Contact form and company info
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-brand opacity-[0.03] dark:opacity-[0.08]" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-brand-accent/10 dark:bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-secondary/10 dark:bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-secondary dark:text-brand-muted">We typically reply within 2 hours</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary dark:text-white leading-tight">
              Let&apos;s Start a
              <span className="block gradient-text">Conversation</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto">
              Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
            </p>
          </div>

          {/* Quick contact cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                label: 'Email Us',
                value: companyInfo.email,
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
              },
              {
                label: 'Call Us',
                value: companyInfo.phone,
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                color: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
              },
              {
                label: 'Visit Us',
                value: 'San Francisco, CA',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: 'bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-dark-card rounded-2xl p-5 sm:p-6 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20 text-center"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-brand-primary dark:text-white">{item.label}</p>
                <p className="text-sm text-brand-muted mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 lg:py-24 bg-light-bg dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-dark-card rounded-2xl p-6 sm:p-8 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-brand-muted max-w-sm mb-6">
                    Thank you for reaching out. Our team will get back to you within 2 business hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-brand-accent dark:text-brand-muted uppercase tracking-wider">Get in Touch</span>
                    <h2 className="text-2xl font-bold text-brand-primary dark:text-white mt-2">
                      Send us a Message
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Your Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <Input
                      label="Subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-brand-primary dark:text-white mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brand-muted/30 dark:border-brand-accent/30 bg-white dark:bg-dark-surface text-brand-primary dark:text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-secondary transition-all duration-200 resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address detail */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20">
                <h3 className="font-semibold text-brand-primary dark:text-white mb-4">Office Address</h3>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">{companyInfo.address}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20">
                <h3 className="font-semibold text-brand-primary dark:text-white mb-4">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', active: true },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', active: true },
                    { day: 'Sunday', hours: 'Closed', active: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-brand-muted">{item.day}</span>
                      <span className={`flex items-center gap-1.5 font-medium ${item.active ? 'text-brand-primary dark:text-white' : 'text-brand-muted'}`}>
                        {item.active && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />}
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ teaser */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20">
                <h3 className="font-semibold text-brand-primary dark:text-white mb-4">Common Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: 'How do I get started?', a: 'Sign up for a free trial — no credit card required.' },
                    { q: 'Is there a free plan?', a: 'Yes, our Starter plan is free for up to 5 team members.' },
                    { q: 'Can I cancel anytime?', a: 'Absolutely. No contracts, cancel with one click.' },
                  ].map((faq, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-brand-primary dark:text-white">{faq.q}</p>
                      <p className="text-xs text-brand-muted mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-brand-muted/10 dark:border-brand-accent/20">
                <div className="h-48 bg-brand-muted/5 dark:bg-brand-accent/5 flex items-center justify-center relative">
                  {/* Decorative map dots */}
                  <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative text-center">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-brand-primary dark:text-white">San Francisco, CA</p>
                    <p className="text-xs text-brand-muted mt-0.5">Enterprise Drive, Suite 500</p>
                  </div>
                </div>
              </div>
            </div>
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
