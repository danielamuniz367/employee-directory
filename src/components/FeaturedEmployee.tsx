import { CardContent, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../store';
import './FeaturedEmployee.css';

const FeaturedEmployee = () => {
  const { data } = useContext(Context);

  return (
    <div className="featured-employee">
      <h2>Employee Grid</h2>
      <Grid container spacing={4}>
        {
          data.map((employee: any) => (
            <Grid item xs={3} key={employee.id}>
              <CardContent>
                <img src={employee.picture} />
                <div>
                  {employee.first_name} {employee.last_name}
                </div>
                <div>{employee.department}</div>
                <div>{employee.location}</div>
              </CardContent>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default FeaturedEmployee;
