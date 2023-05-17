import { combineReducers } from '@reduxjs/toolkit';
import { departmentsReducer } from './departmentSlice';
import { employeeReducer } from './employeeSlice';
import { vacationsReducer } from './vacationSlice';

export const rootReducer = combineReducers({
  departments: departmentsReducer,
  employees: employeeReducer,
  vacations: vacationsReducer
});
