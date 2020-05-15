import React, { Component } from 'react';
// import Modal from '../components/Shared/Modal';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      show: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function to add whatever is in the textbox to the list of to-dos
  handleSubmit(event) {
    // make it modal instead
    this.setState({
      show: true
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {

    const LISTITEMS = ['Work', 'Sleep', 'Fun'];

    return (
      <div className='todo-container'>
        <div className='todo-title'>
          <h1>To-Do List:</h1>
        </div>
        
        <div className="new-todo">
          <form>
            <input type='text' placeholder='new task' id='todo-input' />
            <button type='submit' onClick={this.handleSubmit} id='todo-button'>+</button>
          </form>
        </div>

        <div className="todo-list-container">
          <ul className="todo-list">
            {LISTITEMS.map(item => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
        </div>

        {/* <Modal show={this.state.show} /> */}
      </div>
    )
  }
}

export default Todo;
