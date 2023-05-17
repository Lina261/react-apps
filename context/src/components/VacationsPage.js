import * as React from 'react';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useDepartments, useVacatingEmployees } from '../hooks';
import { FixedSizeList } from 'react-window';
import { VacationEmployeesList } from './VacationEmployeesList';
import { useVacationContext } from '../contexts/vacationsContext';

export const VacationsPage = () => {
  const [departmentId, setDepartmentId] = React.useState('');

  const departments = useDepartments();
  const employees = useVacatingEmployees();

  const { fetchVacations } = useVacationContext();

  return (
    <Grid
      container
      sx={{ width: '70%', margin: 'auto' }}
      alignItems="center"
      justifyContent="center"
      spacing={2}>
      <Box>
        <h3>Vacations</h3>
        <FormControl sx={{ m: 0, width: 300 }}>
          <InputLabel id="demo-select-small">Department</InputLabel>
          <Select
            margin="normal"
            labelId="demo-select-small"
            id="demo-select-small"
            label="Department"
            value={departmentId}
            onChange={(e) => {
              fetchVacations(e.target.value);
              setDepartmentId(e.target.value);
            }}>
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {departmentId ? (
        <Box marginLeft={10}>
          <FixedSizeList
            height={305}
            width={360}
            itemSize={50}
            itemCount={1}
            overscanCount={5}
            itemData={employees}>
            {VacationEmployeesList}
          </FixedSizeList>
        </Box>
      ) : (
        <Box marginRight={10} height={305} width={360} />
      )}
    </Grid>
  );
};
