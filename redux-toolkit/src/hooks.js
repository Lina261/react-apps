import { useSelector } from 'react-redux';
import { departmentsSelector, employeesSelector, vacationsSelector } from './redux/selectors';

export const useDepartments = () => {
  return useSelector(departmentsSelector);
};

export const useEmployees = () => {
  return useSelector(employeesSelector);
};

export const useVacatingEmployees = () => {
  return useSelector(vacationsSelector);
};
