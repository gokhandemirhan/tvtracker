export const getShows = (keyword) => {
  return (dispatch, getState) => {
    fetch("https://api.tvmaze.com/search/shows?q=" + keyword)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          dispatch({
            type: "SHOWS_LOADED",
            shows: result,
          });
        },
        (error) => {
          dispatch({
            type: "SHOWS_ERROR",
            error,
          });
        }
      );
  };
};

export const saveShow = (show,isAdd) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const state = getState();
    const userId = state.firebase.auth.uid;
    console.log(show.id);

    let editType = firebase.firestore.FieldValue.arrayUnion(show)
    if(!isAdd){
      editType = firebase.firestore.FieldValue.arrayRemove(show)
    }

    firestore
      .collection("users")
      .doc(userId)
      .update({
        watchlist: editType,
      })
      .then(
        (result) => {
          dispatch({
            type: "SAVE_SHOW_SUCCESS",
            show,
          });
        },
        (error) => {
          dispatch({
            type: "SAVE_SHOW_ERROR",
            error,
          });
        }
      );
  };
};

export const setCurrentShow = (show) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_CURRENT_SHOW",
      show: show,
    });
  };
};
