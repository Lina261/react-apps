export const departmentRequestActionCreator = () => ({
  type: 'departments_request'
});

export const departmentSuccessActionCreator = (items) => ({
  type: 'departments_success',
  payload: items
});

export const departmentFailureActionCreator = () => ({
  type: 'departments_failure'
});

export const addDepartmentRequestActionCreator = (department) => ({
  type: 'add_departments_request',
  payload: department
});

export const addDepartmentSuccessActionCreator = (item) => ({
  type: 'add_departments_success',
  payload: item
});

export const addDepartmentFailureActionCreator = () => ({
  type: 'add_departments_failure'
});

export const deleteDepartmentRequestActionCreator = (department) => ({
  type: 'delete_departments_request',
  payload: department
});

export const deleteDepartmentSuccessActionCreator = (item) => ({
  type: 'delete_departments_success',
  payload: item
});

export const deleteDepartmentFailureActionCreator = () => ({
  type: 'delete_departments_failure'
});

export const editDepartmentRequestActionCreator = (department) => ({
  type: 'edit_departments_request',
  payload: department
});

export const editDepartmentSuccessActionCreator = (item) => ({
  type: 'edit_departments_success',
  payload: item
});

export const editDepartmentFailureActionCreator = () => ({
  type: 'edit_departments_failure'
});

export const employeeRequestActionCreator = () => ({
  type: 'employees_request'
});

export const employeeSuccessActionCreator = (items) => ({
  type: 'employees_success',
  payload: items
});

export const employeeFailureActionCreator = () => ({
  type: 'employees_failure'
});

export const addEmployeeRequestActionCreator = (department) => ({
  type: 'add_employees_request',
  payload: department
});

export const addEmployeeSuccessActionCreator = (item) => ({
  type: 'add_employees_success',
  payload: item
});

export const addEmployeeFailureActionCreator = () => ({
  type: 'add_employees_failure'
});

export const deleteEmployeeRequestActionCreator = (department) => ({
  type: 'delete_employees_request',
  payload: department
});

export const deleteEmployeeSuccessActionCreator = (item) => ({
  type: 'delete_employees_success',
  payload: item
});

export const deleteEmployeeFailureActionCreator = () => ({
  type: 'delete_employees_failure'
});

export const editEmployeeRequestActionCreator = (employee) => ({
  type: 'edit_employees_request',
  payload: employee
});

export const editEmployeeSuccessActionCreator = (item) => ({
  type: 'edit_employees_success',
  payload: item
});

export const editEmployeeFailureActionCreator = () => ({
  type: 'edit_employees_failure'
});

export const vacationsRequestActionCreator = (departmentId) => ({
  type: 'vacations_request',
  payload: departmentId
});

export const vacationsSuccessActionCreator = (items) => ({
  type: 'vacations_success',
  payload: items
});

export const vacationsFailureActionCreator = () => ({
  type: 'vacations_failure'
});

export const deleteVacationRequestActionCreator = (departmentId, employeeId) => ({
  type: 'delete_vacation_request',
  payload: { departmentId, employeeId }
});

export const deleteVacationSuccessActionCreator = (employeeId) => ({
  type: 'delete_vacation_success',
  payload: employeeId
});

export const deleteVacationFailureActionCreator = () => ({
  type: 'delete_vacation_failure'
});
