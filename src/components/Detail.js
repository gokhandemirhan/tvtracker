import React from "react";

const Detail = (props) => {
    const { show } = props.location
  return (
    <div className="details">
      <div className="details__poster" 
      style={{ backgroundImage: `url(${show.image.original})` }}>

      </div>
      <div className="details__content">
          <p className="title is-1">{show.name}</p>
          <p className="subtitle is-3">{show.type}</p>
          <p>
            <div className="content" dangerouslySetInnerHTML={{__html: show.summary}} />
          </p>
        </div>
    </div>
  );
};

export default Detail;
