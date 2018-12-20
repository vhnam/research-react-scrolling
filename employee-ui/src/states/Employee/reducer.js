const initialState = {
  employees: [],
  pagination: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES_SUCCESS':
      const data = action.payload.data;

      let pagination = action.payload;
      delete pagination.data;

      return {
        ...state,
        employees: [...state.employees, ...data],
        pagination: pagination
      };
    case 'GET_EMPLOYEES_FAILED':
      return Object.assign(
        {},
        {
          error: action.error,
          data: initialState.employees
        }
      );
    default:
      return state;
  }
};

export default reducer;
