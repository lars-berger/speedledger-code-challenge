export default (state = {}, action) => {
  switch (action.type) {
    case "GET_INVOICES":
      return { ...state };
    case "GET_INVOICES_SUCCESS":
      return { ...state, invoices: action.res };
    default:
      return state;
  }
}
