import React, { Component } from "react";

class Searchbox extends React.Component {
  state = {
      keyword:''
  };
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit(this.state.keyword)
  }
  handleChange = (e) => {
    this.setState({'keyword':e.target.value})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Find a tv show" onChange={this.handleChange}/>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Searchbox;
