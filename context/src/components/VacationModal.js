import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useVacationContext } from '../contexts/vacationsContext';

export const VacationModal = ({ isOpen, toggleOpen, employee }) => {
  const { deleteVacation } = useVacationContext();

  const onSubmit = () => {
    toggleOpen();
    deleteVacation({
      departmentId: employee.department,
      employeeId: employee.id
    });
  };

  return (
    <Modal open={isOpen} onClose={toggleOpen}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4
        }}>
        <h3>
          {employee.firstname} {employee.lastname}
        </h3>
        <p>{employee.position}</p>
        <p>{employee.email}</p>

        <Divider />
        <h4>Do you want to close this vacation?</h4>
        <ButtonGroup>
          <Button sx={{ margin: '10px' }} variant="contained" onClick={onSubmit}>
            Close vacation
          </Button>
          <Button sx={{ margin: '10px' }} variant="contained" color="error" onClick={toggleOpen}>
            Cancel
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};
