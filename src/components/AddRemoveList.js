import React, { Component } from "react";
import { connect } from "react-redux";
import { saveShow } from "../store/actions/showActions";
import { Link } from "react-router-dom";

class AddRemoveList extends Component {
  handleClick = () => {
    const show = this.props.show;
    console.log(this.props)
    const isShowExists = this.props.watchlist.find((s) => s.id === show.id) ? 1 : 0;
    this.props.saveShow({ id: show.id, name: show.name }, !isShowExists);
  };
  render() {
    const show = this.props.show;
    const isShowExists = this.props.watchlist.find((s) => s.id === show.id) ? 1 : 0;
    if (!this.props.isLoggedIn) {
      return <Link to="/login">Login to add this show to your watchlist</Link>;
    }
    return (
      <button
        onClick={this.handleClick}
        className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500"
      >
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          {isShowExists ? (
            <path
              fill="#ea0947"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            ></path>
          ) : (
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          )}
        </svg>
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveShow: (show,isAdd) => dispatch(saveShow(show,isAdd)),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    showAdded: state.show.showAdded,
    isLoggedIn: state.firebase.auth.uid,
    watchlist: state.firebase.profile.watchlist || [],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRemoveList);
