import React from "react";
import AddToLists from "./AddToLists";

const Detail = (props) => {
  const { show } = props.location;
  const scores = [1, 2, 3, 4, 5];
  const adjustedRating = show.rating.average / 2;
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths">
          <div className="content is-medium">
            <h1>{show.name}</h1>
            {scores.map((score,index) => {
              return (
                <span className="icon has-text-info" key={index}>
                  {adjustedRating > score ? (
                    <i className="fas fa-star"></i>
                  ) : (
                    <i className="far fa-star"></i>
                  )}
                </span>
              );
            })}
            <h3>{show.rating.average ? show.rating.average : 0} / 10</h3>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <ul>
              {show.genres &&
                show.genres.map((genre,index) => {
                  return <li key={index}>{genre}</li>;
                })}
            </ul>
            <div className="buttons">
              <a className="button is-primary" target="_blank" href={show.url}>On TVMaze.com</a>
              <a className="button is-link" target="_blank" href={show.officialSite}>Official site</a>
            </div>

          {/* User specific buttons*/}
            <AddToLists show={show}/>

          </div>
        </div>
        <div className="column">
          <div className="image">
            <img src={show.image.original} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
