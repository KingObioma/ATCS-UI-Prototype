'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table'
import { employees, departments, statusOptions } from '@/data/mockData'
import { getInitials, getStatusBadgeVariant } from '@/lib/utils'

// Staff/Employees Page - View and manage all employees
export default function StaffPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [] = useState('')

  // Filter employees based on search and filters (UI only - shows all data)
  const filteredEmployees = employees

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Staff Management</h1>
            <p className="text-text-secondary mt-1">
              View and manage all employees in your organization
            </p>
          </div>
          <Button variant="primary">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Employee
          </Button>
        </div>
      </div>

      {/* Filters section */}
      <Card className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search input */}
          <div className="lg:col-span-2">
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Department filter */}
          <Select
            options={departments}
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          />
          {/* Status filter */}
          <Select
            options={statusOptions}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          />
        </div>
      </Card>

      {/* Stats summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-surface rounded-xl p-4 shadow-card">
          <p className="text-sm text-text-secondary">Total Employees</p>
          <p className="text-2xl font-bold text-text-primary mt-1">{employees.length}</p>
        </div>
        <div className="bg-surface rounded-xl p-4 shadow-card">
          <p className="text-sm text-text-secondary">Active</p>
          <p className="text-2xl font-bold text-success mt-1">
            {employees.filter((e) => e.status === 'active').length}
          </p>
        </div>
        <div className="bg-surface rounded-xl p-4 shadow-card">
          <p className="text-sm text-text-secondary">On Leave</p>
          <p className="text-2xl font-bold text-warning mt-1">
            {employees.filter((e) => e.status === 'on-leave').length}
          </p>
        </div>
        <div className="bg-surface rounded-xl p-4 shadow-card">
          <p className="text-sm text-text-secondary">Avg. Performance</p>
          <p className="text-2xl font-bold text-primary mt-1">
            {(employees.reduce((acc, e) => acc + e.performanceScore, 0) / employees.length).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Employees table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Appraisal</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium">
                      {getInitials(employee.name)}
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">{employee.name}</p>
                      <p className="text-xs text-text-secondary">{employee.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(employee.status)}>
                    {employee.status === 'on-leave' ? 'On Leave' :
                      employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${employee.performanceScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{employee.performanceScore}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">{employee.appraisalScore.toFixed(1)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-text-secondary">
            Showing {filteredEmployees.length} of {employees.length} employees
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="primary" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  )
}
