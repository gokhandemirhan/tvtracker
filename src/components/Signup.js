import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";
class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
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
              Do you want to keep track of the shows you watch?
            </h1>
            <p className="leading-relaxed mt-4">
              Signup now to get started.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <input
              type="text"
              placeholder="Your first name"
              id="firstName"
              onChange={this.handleChange}
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            />
            <input
              type="text"
              placeholder="Your last name"
              id="lastName"
              onChange={this.handleChange}
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            />
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
         
              type="email"
              placeholder="Email input"
              id="email"
              onChange={this.handleChange}
            />
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
         
              type="password"
              placeholder="Your password"
              id="password"
              onChange={this.handleChange}
            />

            <button
              onClick={this.handleSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Signup
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
    signUp: (credentials) => dispatch(signUp(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
