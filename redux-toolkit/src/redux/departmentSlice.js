import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  deleteDepartment as removeDepartment,
  getDepartments,
  postDepartment,
  putDepartment
} from '../api';

const initialState = {
  items: []
};

export const fetchDepartments = createAsyncThunk('getDepartments', async () => {
  return await getDepartments();
});

export const addDepartment = createAsyncThunk('addDepartment', async (department) => {
  return await postDepartment(department);
});

export const deleteDepartment = createAsyncThunk('deleteDepartment', async (departmentId) => {
  await removeDepartment(departmentId);
  return departmentId;
});
export const editDepartment = createAsyncThunk('editDepartment', async (department) => {
  return await putDepartment(department);
});

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.items.push(...action.payload);
      })
      .addCase(addDepartment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(editDepartment.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
});

export const { departmentsRequest } = departmentsSlice.actions;
export const departmentsReducer = departmentsSlice.reducer;
