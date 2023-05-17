export const departmentsSelector = (state) => state.departments.items;
export const employeesSelector = (state) => state.employees.items;
export const vacationsSelector = (state) => {
  return state.employees.items.filter((item) => state.vacations.employeeIds.includes(item.id));
};
