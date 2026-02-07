'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { users } from '@/data/mockData'
import { getInitials } from '@/lib/utils'

// Profile Page - User settings
export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const user = users.admin

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-primary dark:text-white">My Profile</h1>
        <p className="text-brand-muted mt-1">Manage your account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <Card className="lg:col-span-1">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-32 h-32 gradient-brand rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-4xl">{getInitials(user.name)}</span>
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white dark:bg-dark-surface border-2 border-brand-muted/20 dark:border-brand-accent/20 rounded-xl flex items-center justify-center shadow-lg hover:bg-light-bg dark:hover:bg-dark-card transition-colors">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            <h2 className="mt-4 text-xl font-bold text-brand-primary dark:text-white">{user.name}</h2>
            <Badge variant="info" className="mt-2">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Badge>

            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 bg-light-bg dark:bg-dark-surface rounded-xl">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-brand-primary dark:text-white">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-light-bg dark:bg-dark-surface rounded-xl">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm text-brand-primary dark:text-white">{user.department}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-light-bg dark:bg-dark-surface rounded-xl">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <span className="text-sm text-brand-primary dark:text-white">ID: {user.id}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Account settings */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-brand-primary dark:text-white">Account Information</h2>
            <Button variant={isEditing ? 'primary' : 'outline'} size="sm" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" defaultValue={user.name} disabled={!isEditing} />
            <Input label="Email Address" type="email" defaultValue={user.email} disabled={!isEditing} />
            <Input label="Department" defaultValue={user.department} disabled={!isEditing} />
            <Input label="Role" defaultValue={user.role.charAt(0).toUpperCase() + user.role.slice(1)} disabled />
            <Input label="Phone Number" defaultValue="+1 (555) 123-4567" disabled={!isEditing} />
            <Input label="Employee ID" defaultValue={user.id} disabled />
          </div>

          {/* Password section */}
          <div className="mt-8 pt-6 border-t border-brand-muted/10 dark:border-brand-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-brand-primary dark:text-white">Password</h3>
                <p className="text-sm text-brand-muted">Last changed 30 days ago</p>
              </div>
              <Button variant="outline" onClick={() => setShowPasswordModal(true)}>Change Password</Button>
            </div>
          </div>

          {/* 2FA */}
          <div className="mt-6 pt-6 border-t border-brand-muted/10 dark:border-brand-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-brand-primary dark:text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-brand-muted">Add extra security to your account</p>
              </div>
              <Badge variant="warning">Not Enabled</Badge>
            </div>
            <Button variant="outline" size="sm" className="mt-3">Enable 2FA</Button>
          </div>
        </Card>

        {/* Activity */}
        <Card className="lg:col-span-3">
          <h2 className="text-lg font-semibold text-brand-primary dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Logged in from Chrome on Windows', time: '2 hours ago', icon: 'login' },
              { action: 'Updated profile information', time: '1 day ago', icon: 'edit' },
              { action: 'Changed password', time: '30 days ago', icon: 'password' },
              { action: 'Completed task "Q4 Financial Report"', time: '2 days ago', icon: 'task' },
              { action: 'Logged in from Safari on macOS', time: '3 days ago', icon: 'login' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-light-bg dark:bg-dark-surface rounded-xl">
                <div className="w-10 h-10 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-secondary dark:text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {activity.icon === 'login' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />}
                    {activity.icon === 'edit' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />}
                    {activity.icon === 'password' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />}
                    {activity.icon === 'task' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-brand-primary dark:text-white">{activity.action}</p>
                  <p className="text-xs text-brand-muted">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-brand-primary dark:text-white">Change Password</h2>
              <button onClick={() => setShowPasswordModal(false)} className="p-2 hover:bg-brand-muted/10 dark:hover:bg-brand-accent/20 rounded-lg">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <Input label="Current Password" type="password" placeholder="Enter current password" />
              <Input label="New Password" type="password" placeholder="Enter new password" />
              <Input label="Confirm New Password" type="password" placeholder="Confirm new password" />
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={() => setShowPasswordModal(false)}>Cancel</Button>
                <Button onClick={() => setShowPasswordModal(false)}>Update Password</Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </DashboardLayout>
  )
}
