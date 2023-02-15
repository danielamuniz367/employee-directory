import React from 'react';
import { Store } from './store';
import './App.css';
import Employees from './components/Employees';
import EmployeeTable from './components/EmployeeTable';
import FeaturedEmployee from './components/FeaturedEmployee';

function App() {
  return (
    <Store>
      <Employees />
      <FeaturedEmployee />
      <EmployeeTable />
    </Store>
  )
}

export default App;
