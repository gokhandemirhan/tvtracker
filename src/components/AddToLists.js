import React, { Component } from "react";
import { connect } from "react-redux";
import { saveShow } from "../store/actions/showActions";

class Detail extends Component {
  handleClick = (showId) => {
    this.props.saveShow({ id: this.props.show.id, name: this.props.show.name });
  };
  render() {
    return (
      <div>
        <div className="buttons">
          <a className="button is-danger" onClick={this.handleClick}>
            I want to watch this
          </a>
        </div>
        {this.props.showAdded && (
          <div className="notification">
            <button className="delete"></button>
            Show added to your watch list
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveShow: (showId) => dispatch(saveShow(showId)),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    showAdded: state.show.showAdded,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
