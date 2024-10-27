import React from 'react';
import { Header } from './components/Header';
import { EmployeeList } from './components/EmployeeList';
import { mockEmployees } from './data/mockEmployees';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <EmployeeList employees={mockEmployees} />
      </main>
    </div>
  );
}

export default App;