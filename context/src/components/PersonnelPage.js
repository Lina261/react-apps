import * as React from 'react';
import { Grid } from '@mui/material';
import { DepartmentsSection } from './DepartmentsSection';
import { EmployeesSection } from './EmployeesSection';

export function PersonnelPage() {
  return (
    <Grid
      container
      sx={{ width: '70%', margin: 'auto' }}
      alignItems="center"
      justifyContent="center"
      spacing={2}>
      <EmployeesSection />
      <DepartmentsSection />
    </Grid>
  );
}
