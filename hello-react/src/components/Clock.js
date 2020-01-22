import React, { Component } from "react";

export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    this._intervalId = setInterval(() => {
      // this.state.now = new Date();
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    // const props = this.props;

    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    )
  }
}