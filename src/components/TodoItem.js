import React, { Component } from 'react'

export default class TodoItem extends Component {

  onClick = (id)=> {
    this.props.removeItem(id);
    //console.log(" from todoitem ", id);
      
  }
  render() {
    return (
      <div>
        <p> Todo Item </p>
        <ul>
            {this.props.todos.map((todo, index)  => {
               return <li key={index}> {todo} <button onClick= {()=> this.onClick(todo)} >Remove </button></li>
            })}
        </ul>
      </div>
    )
  }
}
