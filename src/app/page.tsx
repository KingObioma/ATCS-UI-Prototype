'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

// Login Page - Entry point for the application
export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle form submission (simulated login)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to dashboard (no actual auth in prototype)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo and title */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">AT</span>
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold text-text-primary">
          Welcome to ATCS
        </h1>
        <p className="mt-2 text-center text-sm text-text-secondary">
          Auto Task Control System - Superb Employee Management Platform
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {/* Login card */}
        <div className="bg-surface py-8 px-6 shadow-card rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email field */}
            <Input
              label="Email Address"
              type="email"
              placeholder="admin@atcs.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password field */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:text-primary-600"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          {/* Demo credentials hint */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-text-secondary text-center">
              <strong className="text-text-primary">Demo Credentials:</strong>
              <br />
              Email: admin@atcs.com | Password: admin123
            </p>
          </div>

          {/* Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface text-text-secondary">
                Secure enterprise login
              </span>
            </div>
          </div>

          {/* Footer info */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-text-secondary">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
            <span>|</span>
            <span>Support</span>
          </div>
        </div>

        {/* Version info */}
        <p className="mt-6 text-center text-xs text-text-secondary">
          ATCS v2.5.0 - Auto Task Control System
        </p>
      </div>
    </div>
  )
}
