export const getShows = (keyword) => {
  return (dispatch, getState) => {
    fetch("http://api.tvmaze.com/search/shows?q=" + keyword)
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

export const saveShow = (show) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const state = getState();
    const userId = state.firebase.auth.uid;
    console.log(show.id)
    firestore
      .collection("users")
      .doc(userId)
      .update({
        watchlist: firebase.firestore.FieldValue.arrayUnion(show),
      })
      .then(
        (result) => {
          dispatch({
            type: "SAVE_SHOW_SUCCESS",
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
