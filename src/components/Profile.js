import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddRemoveList from "./AddRemoveList";

class Profile extends Component {
  state = {
    keyword: "",
  };
  handleSearch = (e) => {
    this.setState({ keyword: e.target.value });
  };
  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/login" />;

    const watchlist = this.props.profile.watchlist;
    const filteredShows = watchlist.filter(
      (show) =>
        this.state.keyword === "" ||
        show.name.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {this.props.profile.firstName} {this.props.profile.lastName}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={this.handleSearch}
              />
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredShows &&
              filteredShows.map((show) => {
                return (
                  <div className="p-4 lg:w-1/4 md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                     
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                          {show.name}
                        </h2>
                   
                        <AddRemoveList show={show} />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.firebase.auth.uid,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Profile);
