import React, {Component} from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

class App extends Component {
  state = { 
    todoValue: '',
    todos: [{
      id: 123,
      title: 'Acheter du pain',
      completed: true,
    }, {
      id: 456,
      title: 'Utiliser Redux',
      completed: false,
    }]
   } 

   handleTodoValueChange = (todoValue) => {
     this.setState({
       todoValue, // todoValue: todoValue
     })
   }
   handleAdd = (todoValue) => {
    this.setState({
      todos: [...this.state.todos, {
        id: Math.floor(Math.random() * 10000),
        title: todoValue,
        completed: false,
      }],
    });
   }
  render() { 
    const { todos, todoValue } = this.state;
    return ( 
      <>
        <TodoForm todoValue={todoValue} onTodoValueChange={this.handleTodoValueChange} onAdd={this.handleAdd} />
        <TodoList todos={todos} />
      </>
     );
  }
}
 
export default App;
