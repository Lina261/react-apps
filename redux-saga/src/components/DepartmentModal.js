import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addDepartmentRequestActionCreator,
  editDepartmentRequestActionCreator
} from '../redux/actions';

export const DepartmentModal = ({ isOpen, toggleOpen, department }) => {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (department && isOpen) {
      setName(department.name);
    }
  }, [isOpen, department]);

  const onSubmit = () => {
    toggleOpen();
    if (department) {
      dispatch(editDepartmentRequestActionCreator({ ...department, name }));
      return;
    }
    dispatch(addDepartmentRequestActionCreator({ name }));
  };

  return (
    <Modal open={isOpen} onClose={toggleOpen}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4
        }}>
        <TextField
          sx={{ width: '300px', marginLeft: '40px' }}
          margin="normal"
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button sx={{ margin: '30px' }} variant="contained" onClick={onSubmit}>
          {department ? 'Edit department' : 'Add Department'}
        </Button>
        <Button sx={{ margin: '30px' }} variant="contained" color="error" onClick={toggleOpen}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};
