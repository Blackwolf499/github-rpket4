import { Employee } from '../types/employee';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    email: 'john.doe@company.com',
    status: 'active',
    joinDate: '2023-01-15'
  },
  {
    id: '2',
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
    email: 'jane.smith@company.com',
    status: 'active',
    joinDate: '2023-03-20'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    position: 'UI Designer',
    department: 'Design',
    email: 'mike.johnson@company.com',
    status: 'inactive',
    joinDate: '2022-11-10'
  }
];