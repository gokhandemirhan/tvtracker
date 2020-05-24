export const getShows = (keyword) => {
  return (dispatch) => {
    fetch("http://api.tvmaze.com/search/shows?q=" + keyword)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
         dispatch({
             type:"SHOWS_LOADED",
             shows:result
         })
        },
        (error) => {
            dispatch({
                type:"SHOWS_ERROR",
                error
            })
        }
      );
  };
};
