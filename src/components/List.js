import React, { Component } from "react";
import Searchbox from "./Searchbox";
import Card from "./Card";
import { connect } from "react-redux";

//[[],[],[]]

class List extends React.Component {
  prepareData(acc, show, index, shows) {
    const currentRow = acc.pop() || [];
    currentRow.push(show);
    acc.push(currentRow);
    if (currentRow.length === 4) {
      acc.push([]);
    }
    return acc;
  }
  render() {
    const { shows } = this.props;
    const groupedShows = shows.reduce(this.prepareData, []);
    console.log(groupedShows);
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <section className="hero is-medium">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">TV Tracker</h1>
                  <h2 className="subtitle">
                    Add your favorite TV Shows to your list! Sign up to get
                    started.
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <Searchbox />
          </div>
        </div>

        {groupedShows.map((group, index) => {
          return (
            <div className="columns" key={index}>
              {group.map((show, index) => {
                return (
                  <div className="column" key={show.show.id}>
                    <Card show={show.show} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    shows: state.show.shows,
  };
};

export default connect(mapStateToProps)(List);
