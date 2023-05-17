import React, { createContext, useContext, useState } from 'react';
import * as api from '../api';
import { useEmployeeContext } from './employeeContext';

const VacationContext = createContext({
  employeeIds: [],
  fetchVacations() {},
  deleteVacation() {}
});

export const useVacationContext = () => useContext(VacationContext);

export const VacationContextProvider = ({ children }) => {
  const [employeeIds, setEmployeeIds] = useState([]);
  const { updateLocalEmployee, items } = useEmployeeContext();

  const fetchVacations = async (departmentId) => {
    const data = await api.getVacations(departmentId);
    const ids = data.map((it) => it.id);
    setEmployeeIds(ids);
  };
  const deleteVacation = async ({ departmentId, employeeId }) => {
    const data = await api.deleteVacation({ departmentId, employeeId });
    setEmployeeIds((items) => {
      return items.filter((item) => item !== employeeId);
    });

    const employee = items.find((it) => it.id === employeeId);
    updateLocalEmployee({ ...employee, in_vacation: false });
  };

  return (
    <VacationContext.Provider
      value={{
        employeeIds,
        fetchVacations,
        deleteVacation
      }}>
      {children}
    </VacationContext.Provider>
  );
};
