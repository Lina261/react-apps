import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteEmployee as removeEmployee, getEmployees, postEmployee, putEmployee } from '../api';
import { deleteVacation } from './vacationSlice';

const initialState = {
  items: []
};

export const fetchEmployees = createAsyncThunk('getEmployee', async () => {
  return await getEmployees();
});

export const addEmployee = createAsyncThunk('addEmployee', async (empl) => {
  return await postEmployee(empl);
});

export const deleteEmployee = createAsyncThunk('deleteEmployee', async (employeeId) => {
  await removeEmployee(employeeId);
  return employeeId;
});

export const editEmployee = createAsyncThunk('editEmployee', async (employee) => {
  return await putEmployee(employee);
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.items.push(...action.payload);
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(editEmployee.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(deleteVacation.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, in_vacation: false };
          }
          return item;
        });
      })
});
export const employeeReducer = employeesSlice.reducer;
