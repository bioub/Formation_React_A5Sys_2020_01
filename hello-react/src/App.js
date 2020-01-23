import React, { Component } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { Clock } from './components/Clock';
import { Counter } from './components/Counter';
import { ContactForm } from './components/ContactForm';
import { Select } from './components/Select'
import { HideableClock } from './components/HideableClock';
import { HideableHello } from './components/HideableHello';

class App extends Component {
  state = {
    prenoms: ['Jean', 'Eric', 'Paul'],
    selectedPrenom: 'Paul'
  };
  handleSelect = (selectedPrenom) => {
    this.setState({
      selectedPrenom,
    });
  }
  render() {
    const helloJsx = this.state.prenoms.map((p) => <Hello name={p} key={p} />);
   
    return (
      <div className="App">
        <Hello name={this.state.selectedPrenom} />
        <HideableClock />
        <HideableHello />
        <Counter />
        <ContactForm onAdd={(contact) => console.log(contact)} />
        {helloJsx}

        <Select
          value={this.state.selectedPrenom}
          onSelect={this.handleSelect} 
          items={this.state.prenoms} 
        />
      </div>
    );
  }
}

export default App;
