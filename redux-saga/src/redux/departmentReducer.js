const initialState = {
  items: []
};

export const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'departments_success':
      return { ...state, items: action.payload };
    case 'add_departments_success':
      return { ...state, items: [...state.items, action.payload] };
    case 'delete_departments_success':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    case 'edit_departments_success':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
