import React, { Component, useState, useEffect } from "react";
import { format } from 'date-fns';

// export class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       now: new Date(),
//       format: 'HH:mm:ss',
//     };
//   }

//   componentDidMount() {
//     this._intervalId = setInterval(() => {
//       // this.state.now = new Date();
//       this.setState({
//         now: new Date(),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this._intervalId);
//   }

//   render() {
//     // const props = this.props;

//     return (
//       <div className="Clock">
//         {/* {this.state.now.toLocaleTimeString()} */}
//         {/* {moment(this.state.now).format(this.state.format)} */}
//         {format(this.state.now, this.state.format)}
//       </div>
//     )
//   }
// }

export function Clock() {
  const [now, setNow] = useState(new Date());
  const [formatDate, setFormatDate] = useState('HH:mm:ss');

  useEffect(() => {
    const _intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(_intervalId);
    };
  }, []);

  return (
    <div className="Clock">
      {format(now, formatDate)}
    </div>
  );
}