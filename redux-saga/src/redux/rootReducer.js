import { combineReducers } from '@reduxjs/toolkit';
import { departmentReducer } from './departmentReducer';
import { employeeReducer } from './employeeReducer';
import { vacationsReducer } from './vacationsReducer';

export const rootReducer = combineReducers({
  departments: departmentReducer,
  employees: employeeReducer,
  vacations: vacationsReducer
});