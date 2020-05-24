import React from "react";
import { Link } from "react-router-dom";

const Card = ({ show }) => {
  return (
    <Link to={{ pathname: `/detail/${show.id}`, show: show }}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://images.unsplash.com/photo-1511920357939-b0464e91583c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
