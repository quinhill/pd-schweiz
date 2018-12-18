import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            onChange={this.handleChange}
            name='email'
            value={this.state.email}
          />
          <input
            type='password'
            onChange={this.handleChange}
            name='password'
            value={this.state.password}
          />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}

export default SignIn;