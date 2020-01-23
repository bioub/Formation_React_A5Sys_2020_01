import React, { Component } from 'react';

export function hideable(InnerComponent) {

  class OuterComponent extends Component {
    state = {
      showClock: true,
    };
    handleClick = () => {
      this.setState({
        showClock: !this.state.showClock,
      });
    }
    render() {
      const { showClock } = this.state;
      return (
        <div class="HideableClock">
          <button onClick={this.handleClick}>{ showClock ? 'Off' : 'On' }</button>
          {showClock && <InnerComponent />}
        </div>
      )
    }
  }

  return OuterComponent;

}