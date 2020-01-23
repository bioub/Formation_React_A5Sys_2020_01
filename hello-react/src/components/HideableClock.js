import React, { Component } from "react";
import { Clock } from "./Clock";
import { hideable } from "../hocs/hideable";

// export class HideableClock extends Component {
//   state = {
//     showClock: true,
//   };
//   handleClick = () => {
//     this.setState({
//       showClock: !this.state.showClock,
//     });
//   }
//   render() {
//     const { showClock } = this.state;
//     return (
//       <div class="HideableClock">
//         <button onClick={this.handleClick}>{ showClock ? 'Off' : 'On' }</button>
//         {showClock && <Clock />}
//       </div>
//     )
//   }
// }

export const HideableClock = hideable(Clock);