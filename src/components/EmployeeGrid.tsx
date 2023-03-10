import { CardContent, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Context } from '../store';
import { getEmployees } from '../services/employees';
import './EmployeeGrid.css';

const FeaturedEmployee = () => {
  const [data, setData] = useContext(Context);

  useEffect(() => {
    console.log('employees grid rendered');
    getEmployees(setData);
  }, []);

  return (
    <div className="featured-employee">
      <h2>Employee Grid</h2>
      <Grid container spacing={4}>
        {data.map((employee: any) => (
          <Grid item xs={3} key={employee.id}>
            <CardContent>
              <img src={employee.picture} />
              <Typography variant="h6" gutterBottom>
                {employee.first_name} {employee.last_name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <div>{employee.department}</div>
                <div>{employee.location}</div>
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedEmployee;
