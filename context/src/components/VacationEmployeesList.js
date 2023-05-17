import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';
import { VacationModal } from './VacationModal';
import ListItemText from '@mui/material/ListItemText';

export const VacationEmployeesListItem = ({ data: item }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <ListItem
      sx={{ border: '1px solid grey', padding: '20px', marginBottom: '5px' }}
      key={item.toString()}
      secondaryAction={<Button onClick={() => setIsModalOpen(true)}>edit</Button>}>
      <>
        <VacationModal
          isOpen={isModalOpen}
          toggleOpen={() => setIsModalOpen((p) => !p)}
          employee={item}
        />
        <ListItemText primary={item.firstname} secondary={item.position} />
      </>
    </ListItem>
  );
};

export const VacationEmployeesList = ({ data }) => {
  const items = data.map((item) => <VacationEmployeesListItem data={item} />);
  return <div>{items}</div>;
};
