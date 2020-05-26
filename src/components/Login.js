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
    this.props.logIn(this.state)
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    if(this.props.isLoggedIn) return <Redirect to='/' />
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
          <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email input"
                id="email"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Your password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Login</button>
            </div>
          </div>
        </form>
          </div>
          <div className="column is-half">
            {this.props.error && (
              <article className="message is-danger">
                <div className="message-header">
                  <p>Error</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">{this.props.error.message}</div>
              </article>
            )}
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
    error: state.auth.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => dispatch(logIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
