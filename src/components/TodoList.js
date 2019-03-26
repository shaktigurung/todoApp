import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default class TodoList extends Component {

  state = {
      todos: [],
  }

  addItem = (input) => {
      const newtodos = this.state.todos;
      this.setState({
          todos: [...newtodos,input],
      })   
  }

  removeItem = (input) => {
      const newtodos = this.state.todos;
      const filtertodos = newtodos.filter(todo =>  todo !== input );
      console.log(filtertodos);
      this.setState({
          todos: filtertodos
      })
  }
  render() {
    return (
      <div>
        <h2> To do list </h2>
        <TodoForm addItem = {this.addItem} />
        <TodoItem todos = {this.state.todos} removeItem = {this.removeItem} />
      </div>
    )
  }
}
