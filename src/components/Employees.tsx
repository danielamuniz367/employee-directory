import React, { useContext, useEffect } from 'react';
import { Context } from '../store';
import { getEmployees } from '../services/employees';

const Employees = () => {
  const [data, setData] = useContext(Context);

  useEffect(() => {
    console.log('employees fetched from context');
    getEmployees(setData);
  }, []);

  return (
    <div className="employee-info">
      <h1>Employee Directory</h1>
      <h3>
        This app contains three child components:
        <ul>
          <li>Employees: Home Page</li>
          <li>Employee Grid: shows data in a grid with pictures</li>
          <li>Employee Table: shows data in a table</li>
        </ul>
      </h3>
    </div>
  );
};

export default Employees;
