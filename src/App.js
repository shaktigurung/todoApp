import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> To Do </h1>
       <ToDoList />
      </div>
    );
  }
}

export default App;
