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
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              <Searchbox />
              
            </p>
          </div>

          {groupedShows.map((group, index) => {
            return (
              <div className="flex flex-wrap -m-4" key={index}>
                {group.map((show, index) => {
                  return <Card show={show.show} />;
                })}
              </div>
            );
          })}
        </div>
      </section>
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
