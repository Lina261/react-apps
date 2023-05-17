import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { PersonnelPage } from './PersonnelPage';
import { VacationsPage } from './VacationsPage';
import { useEmployeeContext } from '../contexts/employeeContext';
import { useDepartmentContext } from '../contexts/departmentsContext';

export const TabPage = () => {
  const [value, setValue] = useState('1');
  const { fetchEmployees } = useEmployeeContext();
  const { fetchDepartments } = useDepartmentContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchDepartments();
    fetchEmployees();
  }, []);

  return (
    <div>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            width: '70%',
            margin: 'auto',
            marginTop: '5%'
          }}>
          <TabList onChange={handleChange}>
            <Tab label="Personnel" value="1" />
            <Tab label="Vacation" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PersonnelPage />
        </TabPanel>
        <TabPanel value="2">
          <VacationsPage />
        </TabPanel>
      </TabContext>
    </div>
  );
};
