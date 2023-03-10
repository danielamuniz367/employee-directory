import { CardContent } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store';
import './FeaturedEmployee.css';

const FeaturedEmployee = () => {
  const { data } = useContext(Context);
  // const [featured, setFeatured] = useState<any>({});
  // const { picture, first_name, last_name, department, location } = data;

  useEffect(() => {
    // if (data) {
    //   const randomIdx = Math.floor(Math.random() * data.length);
    //   setFeatured(data[randomIdx]);
    // }
  }, [data]);

  return (
    <div className="featured-employee">
      <h4>Featured Employee</h4>
      {
        data.map((employee: any) => (
          <CardContent>
            <img src={employee.picture} />
            <div>
              {employee.first_name} {employee.last_name}
            </div>
            <div>{employee.department}</div>
            <div>{employee.location}</div>
          </CardContent>
        ))
      }
    </div>
  );
};

export default FeaturedEmployee;
