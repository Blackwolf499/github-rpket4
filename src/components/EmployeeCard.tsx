import React from 'react';
import { Employee } from '../types/employee';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">{employee.name}</h2>
        <span className={`px-2 py-1 rounded-full text-sm ${
          employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {employee.status}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-gray-600">Position: {employee.position}</p>
        <p className="text-gray-600">Department: {employee.department}</p>
        <p className="text-gray-600">Email: {employee.email}</p>
        <p className="text-gray-600">Join Date: {employee.joinDate}</p>
      </div>
    </div>
  );
}