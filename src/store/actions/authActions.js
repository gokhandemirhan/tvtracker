export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        watchlist:[]
      });
    }).then((data)=>{
      console.log(data)
      dispatch({
        type: "SIGNUP_SUCCESS",
        auth: data,
      });
    }).catch(error =>{
      dispatch({
        type: "SIGNUP_ERROR",
        error,
      });
    })


  };
};

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("authAction");
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          auth: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_ERROR",
          error,
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
        .then((data) => {
          dispatch({
            type: "LOGIN_SUCCESS",
            auth: data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "LOGIN_ERROR",
            error,
          });
        });
    };
  };