import React, { Component } from 'react';
import './App.css';
import { TodoFormContainer } from './todos/containers/TodoFormContainer';
import { TodoListContainer } from './todos/containers/TodoListContainer';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
