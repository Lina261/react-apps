import React, { createContext, useContext, useState } from 'react';
import * as api from '../api';

const DepartmentContext = createContext({
  items: [],
  fetchDepartments() {},
  addDepartment() {},
  deleteDepartment() {},
  editDepartment() {}
});

export const useDepartmentContext = () => useContext(DepartmentContext);

export const DepartmentContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchDepartments = async () => {
    const data = await api.getDepartments();
    setItems(data);
  };
  const addDepartment = async (department) => {
    const data = await api.postDepartment(department);
    setItems((items) => [...items, data]);
  };
  const deleteDepartment = async (departmentId) => {
    const data = await api.deleteDepartment(departmentId);
    setItems((items) => items.filter((item) => item.id !== departmentId));
  };

  const editDepartment = async (department) => {
    const data = await api.putDepartment(department);
    setItems((items) =>
      items.map((item) => {
        if (item.id === department.id) {
          return department;
        }
        return item;
      })
    );
  };

  return (
    <DepartmentContext.Provider
      value={{
        items,
        fetchDepartments,
        addDepartment,
        deleteDepartment,
        editDepartment
      }}>
      {children}
    </DepartmentContext.Provider>
  );
};
