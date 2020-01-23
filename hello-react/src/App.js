import React, { Component } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { Clock } from './components/Clock';
import { Counter } from './components/Counter';
import { ContactForm } from './components/ContactForm';

class App extends Component {
  state = {
    showClock: true,
    prenoms: ['Jean', 'Eric', 'Paul'],
  };
  handleClick = () => {
    this.setState({
      showClock: !this.state.showClock,
      // list: [...this.state.list, newElt]
    });
  }
  render() {
    const { showClock } = this.state;
    const helloJsx = this.state.prenoms.map((p) => <Hello name={p} key={p} />);
   
    return (
      <div className="App">
        <Hello name="Romain" />
        <button onClick={this.handleClick}>{ showClock ? 'Off' : 'On' }</button>
        {showClock && <Clock />}
        <Counter />
        <ContactForm onAdd={(contact) => console.log(contact)} />
        {helloJsx}

        {/* <Select 
               value={this.state.selectedPrenom}
               onSelect={this.handleSelect} 
               items={this.state.prenoms} 
            /> */}
      </div>
    );
  }
}

export default App;
