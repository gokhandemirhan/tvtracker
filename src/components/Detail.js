import React from "react";

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
            {scores.map((score) => {
              return (
                <span class="icon has-text-info">
                  {adjustedRating > score ? (
                    <i class="fas fa-star"></i>
                  ) : (
                    <i class="far fa-star"></i>
                  )}
                </span>
              );
            })}
            <h3>{show.rating.average ? show.rating.average : 0} / 10</h3>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <ul>
              {show.genres &&
                show.genres.map((genre) => {
                  return <li>{genre}</li>;
                })}
            </ul>
            <div className="buttons">
              <a className="button is-primary" target="_blank" href={show.url}>On TVMaze.com</a>
              <a className="button is-link" target="_blank" href={show.officialSite}>Official site</a>
            </div>
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
