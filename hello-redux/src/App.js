import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterContainer } from './containers/CounterContainer';
import { HelloContainer } from './containers/HelloContainer';
import { SelectPrenomsContainer } from "./containers/SelectPrenomsContainer";


function App() {
  return (
    <div className="App">
      <CounterContainer id={1234} />
      <CounterContainer id={3456}  />
      <CounterContainer id={9876}  />
      <CounterContainer id={1935}  />
      <CounterContainer id={9876}  />
      <HelloContainer />
      <SelectPrenomsContainer items={['Jean', 'Eric', 'Paul']} />
    </div>
  );
}

export default App;
