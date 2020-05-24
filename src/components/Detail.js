import React from "react";

const Detail = (props) => {
    const { show } = props.location
  return (
    <div className="details">
      <div className="details__poster"></div>
      <div className="details__content">
          <p className="title is-1">{show.name}</p>
          <p className="subtitle is-3">{show.type}</p>
        </div>
    </div>
  );
};

export default Detail;
