import { FixedSizeList } from 'react-window';
import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import ListItemText from '@mui/material/ListItemText';
import { useDepartments } from '../hooks';
import { DepartmentModal } from './DepartmentModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteDepartmentRequestActionCreator } from '../redux/actions';

export const DepartmentsSection = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const dispatch = useDispatch();

  const departments = useDepartments();

  const renderDepartmentsList = ({ data }) => {
    const items = data.map((item) => (
      <ListItem
        sx={{ border: '1px solid grey', padding: '20px', marginBottom: '5px' }}
        key={item.toString()}
        secondaryAction={
          <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
            <Button
              onClick={() => {
                setSelectedDepartment(item);
              }}>
              edit
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteDepartmentRequestActionCreator(item.id));
              }}>
              delete
            </Button>
          </ButtonGroup>
        }>
        <ListItemText primary={item.name} sx={{ margin: 2 }} />
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
      <DepartmentModal
        isOpen={Boolean(selectedDepartment)}
        toggleOpen={() => {
          setSelectedDepartment(null);
        }}
        department={selectedDepartment}
      />
      <DepartmentModal
        isOpen={isAddModalOpen}
        toggleOpen={() => {
          setIsAddModalOpen((value) => !value);
        }}
      />
      <h3>Departments</h3>
      <FixedSizeList
        height={305}
        width={360}
        itemSize={50}
        itemCount={1}
        overscanCount={5}
        itemData={departments}>
        {renderDepartmentsList}
      </FixedSizeList>
      <Button
        sx={{ margin: '30px' }}
        variant="contained"
        onClick={() => {
          setIsAddModalOpen(true);
        }}>
        Add Department
      </Button>
    </Box>
  );
};
