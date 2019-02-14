import React, { Component } from 'react';

class CreateClass extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <form>
          <input 
            type='text'
            placeholder='Class Title'
            name='title'
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea 
            placeholder='Description of class...'
            name='description'
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button type='submit'>Submit Class</button>
        </form>
      </div>
    )
  }
}