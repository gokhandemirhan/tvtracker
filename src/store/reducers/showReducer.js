const initialState = {
  shows: [],
  error: null,
  showAdded:{}
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWS_LOADED":
      console.log("SHOWS_LOADED", action.shows);
      return {
        ...state,
        error:null,
        shows: action.shows,
      };
    case "SHOWS_ERROR":
      console.log("SHOWS_ERROR");
      return {
        ...state,
        error: action.error,
      };
    case "SAVE_SHOW_SUCCESS":
      console.log("SAVE_SHOW");
      return {
        ...state,
        error: null,
        showAdded:action.show
      };
    case "SAVE_SHOW_ERROR":
      console.log("SAVE_SHOW_ERROR");
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default showReducer;
