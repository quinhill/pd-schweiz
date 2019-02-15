import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            placeholder='First Name'
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            placeholder='Last Name'
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            placeholder='Email'
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            placeholder='password'
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            placeholder='Address'
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.handleChange}
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);