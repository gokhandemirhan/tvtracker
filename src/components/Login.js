import React, { Component } from "react";

class Login extends Component {
  state = {
    password: "",
    email: ""
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div className="container">
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
    );
  }
}

export default Login;
