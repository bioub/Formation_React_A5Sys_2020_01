import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <button onClick={this.handleClick}>{count}</button>
      </div>
    );
  }
}