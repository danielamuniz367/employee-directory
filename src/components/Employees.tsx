import React, { useContext, useEffect } from 'react';
import { Context } from '../store';
import FeaturedEmployee from './FeaturedEmployee';
import { getEmployees } from '../services/employees';

const Employees = () => {
  const { setData } = useContext(Context);

  useEffect(() => {
    console.log('employees rendered');
    getEmployees(setData);
  }, [setData]);

  return (
    <div className="employee-info">
      <h1>Employee Directory</h1>
      <h3>
        This app so far contains three child components:
        <ul>
          <li>Employees (fetches data for global store and shows this info)</li>
          <li>Featured Employee (shows random featured employee)</li>
          <li>Employee Table (shows fetched data in a table)</li>
        </ul>
      </h3>
      <FeaturedEmployee />
    </div>
  );
};

export default Employees;
