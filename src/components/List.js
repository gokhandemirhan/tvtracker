import React, { Component } from "react";
import Searchbox from "./Searchbox";
import Card from "./Card";
import demoData from "./demo";

class List extends React.Component {
  state = {
    isLoaded: false,
    shows: [],
  };
  handleSearch(keyword) {
    console.log(keyword);
    fetch("http://api.tvmaze.com/search/shows?q=" + keyword)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            shows: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { shows } = this.state;
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <Searchbox handleSubmit={this.handleSearch.bind(this)} />
          </div>
        </div>
        <div className="columns">
          {shows.map((tvShow, index) => {
            return (
              <div className="column" key={tvShow.show.id}>
                <Card show={tvShow.show} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
