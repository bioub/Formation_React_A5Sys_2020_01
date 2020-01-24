import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Users } from './users/components/Users';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
