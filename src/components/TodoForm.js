import React, { Component } from 'react'

export default class TodoForm extends Component {
    state = {
        value: ''
    }

    handleChange = (input) => {
        this.setState({
            value: input
        })
     }

   onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({ value: '' });
    }
      
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>  
             <input 
                type="text" 
                name ="todoitem" 
                placeholder ="Enter todo item ..." 
                onChange = { (e) => this.handleChange(e.target.value)} 
                value= {this.state.value} 
            />
            <input type="submit" value="submit"/>
        </form>
         <p> {this.state.value} </p>
      </div>
    )
  }
}
