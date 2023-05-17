const initialState = {
  items: []
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'employees_success':
      return { ...state, items: action.payload };
    case 'add_employees_success':
      return { ...state, items: [...state.items, action.payload] };
    case 'delete_employees_success':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    case 'edit_employees_success':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case 'delete_vacation_success':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, in_vacation: false };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
