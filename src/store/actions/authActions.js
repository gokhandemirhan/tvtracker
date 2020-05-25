export const signUp = (keyword) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("authAction");
    dispatch({
      type: "SIGNUP_SUCCESS",
      auth: { auth: "SUCCESS" },
    });
  };
};

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("authAction");
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
          auth: { auth: "SUCCESS" },
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
        });
      });
  };
};

export const logOut = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      console.log("authAction");
      const firebase = getFirebase();
  
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({
            type: "LOGIN_SUCCESS",
            auth: { auth: "SUCCESS" },
          });
        })
        .catch((err) => {
          dispatch({
            type: "LOGIN_ERROR",
            err,
          });
        });
    };
  };