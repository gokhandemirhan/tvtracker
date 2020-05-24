import React from "react";
import Searchbox from "./Searchbox";
import Card from "./Card";
import demoData from "./demo";

const List = () => {
  return (
    <div className="container">
      <Searchbox />
      <div className="columns">
        {demoData.map((tvShow) => {
          return (
            <div className="column" key={tvShow.show.id}>
              <Card show={tvShow.show} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
