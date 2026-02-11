'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, StatsCard } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table'
import { LineChart } from '@/components/charts/LineChart'
import { BarChart } from '@/components/charts/BarChart'
import { DonutChart } from '@/components/charts/DonutChart'
import {
  dashboardStats,
  taskCompletionTrend,
  departmentPerformance,
  taskStatusDistribution,
  tasks,
} from '@/data/mockData'
import { formatDate, getStatusBadgeVariant } from '@/lib/utils'

// Dashboard Page - Main overview
export default function DashboardPage() {
  const recentTasks = tasks.slice(0, 5)

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-primary dark:text-white">Dashboard</h1>
        <p className="text-brand-muted mt-1">
          Welcome back! Here&apos;s your organization overview.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Tasks Completed"
          value={dashboardStats.tasksCompleted}
          subtitle="This quarter"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          color="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Tasks Pending"
          value={dashboardStats.tasksPending}
          subtitle={`${dashboardStats.tasksOverdue} overdue`}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          color="accent"
        />
        <StatsCard
          title="Performance Avg"
          value={`${dashboardStats.employeePerformanceAvg}%`}
          subtitle="Across all employees"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          color="secondary"
          trend={{ value: 3.2, isPositive: true }}
        />
        <StatsCard
          title="Appraisal Score"
          value={dashboardStats.appraisalScoreAvg.toFixed(2)}
          subtitle="Out of 5.0"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          }
          color="muted"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-brand-primary dark:text-white">Task Completion Trend</h2>
            <p className="text-sm text-brand-muted">Monthly performance over 6 months</p>
          </div>
          <LineChart
            data={taskCompletionTrend}
            xKey="month"
            lines={[
              { dataKey: 'completed', color: '#0F0E47', name: 'Completed' },
              { dataKey: 'pending', color: '#8686AC', name: 'Pending' },
            ]}
            height={280}
          />
        </Card>

        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-brand-primary dark:text-white">Department Performance</h2>
            <p className="text-sm text-brand-muted">Average score by department</p>
          </div>
          <BarChart
            data={departmentPerformance}
            xKey="department"
            bars={[{ dataKey: 'score', color: '#272757', name: 'Performance Score' }]}
            height={280}
            showLegend={false}
            colorByBar={true}
          />
        </Card>
      </div>

      {/* Task distribution and recent tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-brand-primary dark:text-white">Task Distribution</h2>
            <p className="text-sm text-brand-muted">Current status breakdown</p>
            <p className="text-sm text-brand-muted">Current</p>
          </div>
          <DonutChart
            data={taskStatusDistribution}
            height={280}
            innerRadius={50}
            outerRadius={90}
          />
        </Card>

        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-brand-primary dark:text-white">Recent Tasks</h2>
              <p className="text-sm text-brand-muted">Latest task updates</p>
            </div>
            <a href="/tasks" className="text-sm font-medium text-brand-secondary dark:text-brand-accent hover:underline">
              View all
            </a>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Deadline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    <div className="max-w-[200px]">
                      <p className="font-medium truncate">{task.title}</p>
                      <p className="text-xs text-brand-muted truncate">{task.department}</p>
                    </div>
                  </TableCell>
                  <TableCell>{task.assignedToName}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(task.status)}>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(task.deadline)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  )
}
