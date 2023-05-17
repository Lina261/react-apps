import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteVacation as removeVacation, getVacations } from '../api';

const initialState = {
  employeeIds: []
};

export const fetchVacation = createAsyncThunk('fetchVacations', async (departmentId) => {
  const vacatingEmployees = await getVacations(departmentId);
  return vacatingEmployees.map((item) => item.id);
});

export const deleteVacation = createAsyncThunk('deleteVacation', async (employee) => {
  await removeVacation(employee);
  return employee.employeeId;
});

const vacationsSlice = createSlice({
  name: 'vacations',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchVacation.fulfilled, (state, action) => {
        state.employeeIds = action.payload;
      })
      .addCase(deleteVacation.fulfilled, (state, action) => {
        state.employeeIds = state.employeeIds.filter((item) => item !== action.payload);
      })
});

export const vacationsReducer = vacationsSlice.reducer;
