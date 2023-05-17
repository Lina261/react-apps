import { useEmployeeContext } from './contexts/employeeContext';
import { useDepartmentContext } from './contexts/departmentsContext';
import { useVacationContext } from './contexts/vacationsContext';

export const useDepartments = () => {
  return useDepartmentContext().items;
};

export const useEmployees = () => {
  return useEmployeeContext().items;
};

export const useVacatingEmployees = () => {
  const employees = useEmployees();
  const { employeeIds } = useVacationContext();
  return employees.filter((item) => employeeIds.includes(item.id));
};
