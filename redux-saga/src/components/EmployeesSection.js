import Box from '@mui/material/Box';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Button } from '@mui/material';
import { EmployeeModal } from './EmployeeModal';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useEmployees } from '../hooks';
import { useDispatch } from 'react-redux';
import { deleteEmployeeRequestActionCreator } from '../redux/actions';

export const EmployeesSection = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const dispatch = useDispatch();
  const employees = useEmployees();

  const renderEmployeesList = ({ data }) => {
    const items = data.map((item) => (
      <ListItem
        sx={{ border: '1px solid grey', padding: '20px', marginBottom: '5px' }}
        key={item.toString()}
        secondaryAction={
          <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
            <Button
              onClick={() => {
                setSelectedEmployee(item);
              }}>
              edit
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteEmployeeRequestActionCreator(item.id));
              }}>
              delete
            </Button>
          </ButtonGroup>
        }>
        <ListItemText primary={item.firstname} secondary={item.position} />
      </ListItem>
    ));
    return <div>{items}</div>;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{
        height: 500,
        bgcolor: 'background.paper',
        width: '50%'
      }}>
      <EmployeeModal
        isOpen={Boolean(selectedEmployee)}
        toggleOpen={() => {
          setSelectedEmployee(null);
        }}
        employee={selectedEmployee}
      />
      <EmployeeModal
        isOpen={isAddModalOpen}
        toggleOpen={() => {
          setIsAddModalOpen((isOpen) => !isOpen);
        }}
      />
      <h3>Employees</h3>
      <FixedSizeList
        height={305}
        width={360}
        itemSize={50}
        itemCount={1}
        overscanCount={5}
        itemData={employees}>
        {renderEmployeesList}
      </FixedSizeList>
      <Button
        sx={{ margin: '30px' }}
        variant="contained"
        onClick={() => {
          setIsAddModalOpen(true);
        }}>
        Add Employee
      </Button>
    </Box>
  );
};
