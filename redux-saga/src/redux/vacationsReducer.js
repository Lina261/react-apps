const initialState = {
  employeeIds: []
};

export const vacationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'vacations_success':
      return { ...state, employeeIds: action.payload };
    case 'delete_vacation_success':
      return {
        ...state,
        employeeIds: state.employeeIds.filter((item) => item !== action.payload)
      };
    default:
      return state;
  }
};
