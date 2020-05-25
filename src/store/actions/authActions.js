export const signUp = (keyword) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("authAction");
    dispatch({
      type: "SIGNUP_SUCCESS",
      auth: { auth: "SUCCESS" },
    });
  };
};
