import React, { Component } from "react";
import { connect } from "react-redux";
import { saveShow } from "../store/actions/showActions";

class Detail extends Component {
  handleClick = (showId) => {
    this.props.saveShow({ id: this.props.show.id, name: this.props.show.name });
  };
  render() {
    return (
      <div className="buttons">
        <a className="button is-danger" onClick={this.handleClick}>
          I want to watch this
        </a>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveShow: (showId) => dispatch(saveShow(showId)),
  };
};
export default connect(null, mapDispatchToProps)(Detail);
