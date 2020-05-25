const initialState = {
  auth: [],
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("AUTH_SUCCESS");
      return {
        ...state,
      };
    case "LOGIN_ERROR":
      console.log("AUTH_ERROR");
      return {
        ...state,
      };
      case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR");
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
