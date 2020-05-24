import React from "react";
import { Link } from "react-router-dom";

const Card = ({ show }) => {
  return (
    <Link to={{ pathname: `/detail/${show.id}`, show: show }}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={show.image ? show.image.original : ""}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">{show.name}</p>
          <p className="subtitle">{show.type}</p>
          <div className="content">{show.summary}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
