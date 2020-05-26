import React from "react";
import Searchbox from "./Searchbox";
import Card from "./Card";
import logo from "../images/logo.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../store/actions/authActions";

const Navbar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} />
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {props.isLoggedIn ? (
                <div>
                  <Link to="/profile" className="button is-primary">
                    <strong>{props.profile.firstName}</strong>
                  </Link>
                  <a
                    onClick={props.logOut}
                    to="/login"
                    className="button is-light"
                  >
                    Log out
                  </a>
                </div>
              ) : (
                <div>
                  <Link to="/signup" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    Log in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.firebase.auth.uid,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
