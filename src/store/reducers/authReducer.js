const initialState = {
  error: null,
  auth:{}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("AUTH_SUCCESS");
      return {
        ...state,
        error: null,
        auth:action.auth
      };
    case "LOGIN_ERROR":
      console.log("AUTH_ERROR",action.error);
      return {
        ...state,
        error: action.error,
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
        error: action.error,
      };
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        auth:action.auth
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR",action.error);
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
