'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, StatsCard } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { BarChart } from '@/components/charts/BarChart'
import { LineChart } from '@/components/charts/LineChart'
import { DonutChart } from '@/components/charts/DonutChart'
import {
  dashboardStats,
  kpiCompletionByDepartment,
  appraisalDistribution,
  taskCompletionTrend,
  employees,
} from '@/data/mockData'

// Reports Page - Analytics and data visualization
export default function ReportsPage() {
  // Get top performer
  const topPerformer = employees.reduce((prev, curr) =>
    curr.performanceScore > prev.performanceScore ? curr : prev
  )

  // Prepare appraisal distribution data for donut chart
  const appraisalDonutData = appraisalDistribution.map((item, index) => ({
    name: item.range,
    value: item.count,
    color: ['#00E676', '#00BCD4', '#2979FF', '#FF9100', '#FF3D00'][index],
  }))

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Reports & Analytics</h1>
            <p className="text-text-secondary mt-1">
              Comprehensive insights into organizational performance and KPIs
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export PDF
            </Button>
            <Button variant="primary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Excel
            </Button>
          </div>
        </div>
      </div>

      {/* Date range filter */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm font-medium text-text-primary">Report Period:</p>
          <div className="flex flex-wrap items-center gap-3">
            <Select
              options={['Last 7 Days', 'Last 30 Days', 'Last Quarter', 'Last Year', 'Custom']}
              className="w-40"
            />
            <Select
              options={['All Departments', 'Engineering', 'Design', 'Marketing', 'HR', 'Finance', 'Operations']}
              className="w-48"
            />
            <Button variant="primary" size="sm">
              Generate Report
            </Button>
          </div>
        </div>
      </Card>

      {/* Summary stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard
          title="Total KPIs Tracked"
          value={dashboardStats.totalKPIs}
          subtitle="This quarter"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
          color="primary"
        />
        <StatsCard
          title="KPI Completion Rate"
          value={`${dashboardStats.kpiCompletionRate}%`}
          subtitle="Overall average"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          }
          color="success"
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatsCard
          title="Avg. Appraisal Score"
          value={dashboardStats.appraisalScoreAvg.toFixed(2)}
          subtitle="Out of 5.0"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          }
          color="secondary"
        />
        <StatsCard
          title="Top Performer"
          value={topPerformer.name.split(' ')[0]}
          subtitle={`${topPerformer.performanceScore}% performance`}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
          color="warning"
        />
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* KPI completion by department */}
        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-text-primary">KPI Completion by Department</h2>
            <p className="text-sm text-text-secondary">Average KPI completion rate per department</p>
          </div>
          <BarChart
            data={kpiCompletionByDepartment}
            xKey="department"
            bars={[{ dataKey: 'completion', color: '#2979FF', name: 'Completion %' }]}
            height={300}
            showLegend={false}
            colorByBar={true}
          />
        </Card>

        {/* Task completion over time */}
        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Task Completion Trend</h2>
            <p className="text-sm text-text-secondary">Monthly task completion over time</p>
          </div>
          <LineChart
            data={taskCompletionTrend}
            xKey="month"
            lines={[
              { dataKey: 'completed', color: '#00E676', name: 'Completed Tasks' },
              { dataKey: 'pending', color: '#FF9100', name: 'Pending Tasks' },
            ]}
            height={300}
          />
        </Card>
      </div>

      {/* Appraisal distribution and top performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Appraisal score distribution */}
        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Appraisal Distribution</h2>
            <p className="text-sm text-text-secondary">Employee appraisal score ranges</p>
          </div>
          <DonutChart
            data={appraisalDonutData}
            height={280}
            innerRadius={50}
            outerRadius={90}
          />
        </Card>

        {/* Top performers table */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">Top Performers</h2>
              <p className="text-sm text-text-secondary">Employees with highest performance scores</p>
            </div>
          </div>
          <div className="space-y-3">
            {employees
              .sort((a, b) => b.performanceScore - a.performanceScore)
              .slice(0, 5)
              .map((employee, index) => (
                <div
                  key={employee.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                      index === 0 ? 'bg-warning' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-400' : 'bg-primary'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">{employee.name}</p>
                      <p className="text-xs text-text-secondary">{employee.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-primary">{employee.performanceScore}%</p>
                      <p className="text-xs text-text-secondary">Performance</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-warning" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold">{employee.appraisalScore.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-text-secondary">Appraisal</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </div>

      {/* Report actions footer */}
      <Card>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-text-primary">Generate Custom Reports</h3>
            <p className="text-sm text-text-secondary">
              Create detailed reports with custom date ranges and filters
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Report
            </Button>
            <Button variant="outline">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Report
            </Button>
            <Button variant="primary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Custom Report
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  )
}
