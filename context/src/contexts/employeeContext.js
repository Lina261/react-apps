import React, { createContext, useContext, useState } from 'react';
import * as api from '../api';

const EmployeeContext = createContext({
  items: [],
  fetchEmployees() {},
  addEmployee() {},
  deleteEmployee() {},
  editEmployee() {},
  updateLocalEmployee() {}
});

export const useEmployeeContext = () => useContext(EmployeeContext);

export const EmployeeContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchEmployees = async () => {
    const data = await api.getEmployees();
    setItems(data);
  };
  const addEmployee = async (employee) => {
    const data = await api.postEmployee(employee);
    setItems((items) => [...items, data]);
  };
  const deleteEmployee = async (employeeId) => {
    const data = await api.deleteEmployee(employeeId);
    setItems((items) => items.filter((item) => item.id !== employeeId));
  };

  const editEmployee = async (employee) => {
    const data = await api.putEmployee(employee);
    setItems((items) =>
      items.map((item) => {
        if (item.id === employee.id) {
          return employee;
        }
        return item;
      })
    );
  };

  const updateLocalEmployee = (employee) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === employee.id) {
          return employee;
        }
        return item;
      })
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        items,
        fetchEmployees,
        addEmployee,
        deleteEmployee,
        editEmployee,
        updateLocalEmployee
      }}>
      {children}
    </EmployeeContext.Provider>
  );
};
