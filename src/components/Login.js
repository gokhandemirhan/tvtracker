import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";

import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    password: "",
    email: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.logIn(this.state);
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    if (this.props.isLoggedIn) return <Redirect to="/" />;
    return (
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Everyone loves TV Shows!
            </h1>
            <p className="leading-relaxed mt-4">
              Login to start tracking your favourite ones.
              
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>

            <input
              type="email"
              placeholder="Email input"
              id="email"
              onChange={this.handleChange}
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            />
            <input
              type="password"
              placeholder="Your password"
              id="password"
              onChange={this.handleChange}
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            />

            <button
              onClick={this.handleSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>

            <p className="text-xs text-gray-500 mt-3">
            {this.props.error && (
                <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Error
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{this.props.error.message}</p>
                </div>
              </div>
              )}
            </p>
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
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => dispatch(logIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
