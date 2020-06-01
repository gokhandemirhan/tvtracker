import React from "react";
import { Link } from "react-router-dom";

const Card = ({ show,handleClick }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4" onClick={handleClick}>
      <Link to={{ pathname: `/detail/${show.id}`, show: show }}>
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={show.image ? show.image.original : ""}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {show.type}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {show.name}
          </h2>
          <p className="leading-relaxed text-base">
           
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
