import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDepartments } from '../hooks';
import { FormControlLabel, Switch } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEmployeeContext } from '../contexts/employeeContext';

export const EmployeeModal = ({ isOpen, toggleOpen, employee }) => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [isVacating, setIsVacating] = React.useState(false);
  const [department, setDepartment] = React.useState('');

  const { addEmployee, editEmployee } = useEmployeeContext();

  const departments = useDepartments();

  useEffect(() => {
    if (employee && isOpen) {
      setFirstname(employee.firstname);
      setLastname(employee.lastname);
      setEmail(employee.email);
      setPosition(employee.position);
      setDepartment(employee.department);
      setIsVacating(JSON.parse(employee.in_vacation));
    }
  }, [isOpen, employee]);

  const onSubmit = () => {
    toggleOpen();
    if (employee) {
      editEmployee({
        ...employee,
        firstname,
        lastname,
        position,
        email,
        department,
        in_vacation: isVacating
      });
      return;
    }
    addEmployee({
      firstname,
      lastname,
      position,
      email,
      department,
      in_vacation: isVacating
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
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4
        }}>
        <TextField
          sx={{ width: '300px' }}
          margin="normal"
          required
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <TextField
          sx={{ width: '300px' }}
          margin="normal"
          required
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <TextField
          sx={{ width: '300px' }}
          margin="normal"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          sx={{ width: '300px' }}
          margin="normal"
          id="outlined-basic"
          label="Position"
          variant="outlined"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <FormControl sx={{ m: 0, width: 300 }}>
          <InputLabel id="demo-select-small">Department</InputLabel>
          <Select
            margin="normal"
            labelId="demo-select-small"
            id="demo-select-small"
            label="Department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}>
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Switch
              checked={isVacating}
              onClick={(e) => {
                setIsVacating(e.target.checked);
              }}
            />
          }
          label={'In vacation'}
        />
        <ButtonGroup>
          <Button sx={{ margin: '30px' }} variant="contained" onClick={onSubmit}>
            {employee ? 'Edit Employee' : 'Add Employee'}
          </Button>
          <Button sx={{ margin: '30px' }} variant="contained" color="error" onClick={toggleOpen}>
            Cancel
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};
