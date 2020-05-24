import React from "react";

const Searchbox = () => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="text" placeholder="Find a tv show" />
      </div>
      <div className="control">
        <a className="button is-info">Search</a>
      </div>
    </div>
  );
};


export default Searchbox;