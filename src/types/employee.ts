export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  status: 'active' | 'inactive';
  joinDate: string;
}