import React from 'react';
import { Employee } from '../types/employee';
import { EmployeeCard } from './EmployeeCard';

interface EmployeeListProps {
  employees: Employee[];
}

export function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}