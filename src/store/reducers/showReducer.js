const initialState = {
  shows:[],
  error:null
}

const showReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SHOWS_LOADED":
        console.log("SHOWS_LOADED", action.shows)
      return {
        ...state,
        shows:action.shows
      };
      case "SHOWS_ERROR":
        console.log("SHOWS_ERROR")
      return {
        ...state,
        error:action.error
      };
    default:
      return state;
  }
};

export default showReducer;
