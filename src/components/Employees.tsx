import React from 'react';

const Employees = () => {
  return (
    <div className="employee-info">
      <h1>Employee Directory</h1>
      <h3>
        This app contains three child components:
        <ul>
          <li>Employees: fetches data for global store and shows this info</li>
          <li>Employee Grid: shows data in a grid with pictures</li>
          <li>Employee Table: shows data in a table</li>
        </ul>
      </h3>
    </div>
  );
};

export default Employees;
