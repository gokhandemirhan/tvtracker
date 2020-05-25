import React, { Component } from "react";
import {connect} from "react-redux"
import { signUp } from "../store/actions/authActions"

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
    this.props.signUp(this.state)
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">First name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Your first name"
                id="firstName"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Last name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Your last name"
                id="lastName"
                onChange={this.handleChange}
              />
            </div>
          </div>

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
              <button className="button is-link">Signup</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: (credentials) => dispatch(signUp(credentials))
    }
}

export default connect(null,mapDispatchToProps)(Signup);