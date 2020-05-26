import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  state = {
    keyword: "",
  };
  handleSearch = (e) => {
    this.setState({ keyword: e.target.value });
  }
  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/login" />;

    const watchlist = this.props.profile.watchlist;
    const filteredShows = watchlist.filter(
      (show) =>
        this.state.keyword === "" ||
        show.name.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <div className="container">
        <div className="columns is-half">
          <div className="column">
            <p className="title is-1">
              {this.props.profile.firstName} {this.props.profile.lastName}
            </p>
            <p className="subtitle is-3">Email</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <div className="panel">
              <p className="panel-heading">TV Shows I want to watch</p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    onChange={this.handleSearch}
                  />
                  <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
              {filteredShows &&
                filteredShows.map((show) => {
                  return (
                    <a className="panel-block" key={show.id}>
                      <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                      </span>
                      {show.name}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
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
