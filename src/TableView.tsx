import React, { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../src/services/employees'

type Props = {
  a: string, 
  b: number
}

const  TableView: FC<Props> = ({a, b} : Props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('tabled rendered with', a, b);
  }, []) // only for first time i want to exectute this

  return (
    <React.Fragment>
      <h1>TABLE</h1>
      <Link to="/grid-view"><button className="view-btn">Back to Grid View</button></Link>
    </React.Fragment>
  );
}

export default TableView;
