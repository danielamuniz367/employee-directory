import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="text" sx={{fontWeight: 'bold'}}>
      <Link to={ROUTES.LANDING}>Home</Link>
    </Button>
    <Button variant="text" sx={{fontWeight: 'bold'}}>
      <Link to={ROUTES.GRID}>Grid</Link>
    </Button>
    <Button variant="text" sx={{fontWeight: 'bold'}}>
      <Link to={ROUTES.DIRECTORY}>Directory</Link>
    </Button>
  </Stack>
);

export default Navigation;
