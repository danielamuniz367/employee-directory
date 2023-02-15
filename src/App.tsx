import React, {useState} from 'react';
import { Store } from './store';
import './App.css';
import Employees from './components/Employees';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [data, setData] = useState("");
  const updateData = (data: any) => {
    setData(data);
  }

  return (
    <Store>
      <Employees />
      <EmployeeTable />
    </Store>
  )
}

export default App;
