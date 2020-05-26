import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  if (!props.isLoggedIn) return <Redirect to="/login" />;

  return (
    <div className="container">
      <div className="columns">
        <div className="column">Name: {props.profile.firstName}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.firebase.auth.uid,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Profile);
