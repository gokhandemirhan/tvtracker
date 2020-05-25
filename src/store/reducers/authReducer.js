const initialState = {
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("AUTH_SUCCESS");
      return {
        ...state,
        error: null,
      };
    case "LOGIN_ERROR":
      console.log("AUTH_ERROR");
      return {
        ...state,
        error: "AUTH_ERROR",
      };
    case "LOGOUT_SUCCESS":
      console.log("LOGOUT_SUCCESS");
      return {
        ...state,
        error: null,
      };
    case "LOGOUT_ERROR":
      console.log("LOGOUT_ERROR");
      return {
        ...state,
        error: "AUTH_ERROR",
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
