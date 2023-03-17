import React, { createContext, useEffect, useState } from 'react';
import { getEmployees } from '../services/employees';

type EmployeeData = [
  data: Array<object>,
  setData: React.Dispatch<React.SetStateAction<Array<object>>>
];

export const Context = createContext<EmployeeData>(
  undefined as unknown as EmployeeData
);

type Props = {
  children: React.ReactNode;
};

export const Store = ({ children }: Props) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    console.log('context data changed');
    getEmployees(setData);
  }, [setData]);

  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};
