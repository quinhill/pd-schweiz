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
      passwordTwo: '',
      address: '',
      zip: '',
      city: '',
      phone: ''
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

    const {
      firstName,
      lastName,
      email,
      password,
      passwordTwo,
      address,
      zip,
      city,
      phone
    } = this.state;

    const isInvalid = firstName.length < 2 ||
                      lastName.length < 2 ||
                      email.length < 6 ||
                      password.length < 6 ||
                      password !== passwordTwo;

    return (
      <div className='auth-page'>
        <form
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <h5 className='auth-title'>Sign Up</h5>
          <input
            className='auth-input'
            placeholder='First Name'
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='Last Name'
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='Email'
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='Repeat password'
            type='password'
            name='passwordTwo'
            value={passwordTwo}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='Address'
            type='text'
            name='address'
            value={address}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='PLZ'
            type='text'
            name='zip'
            value={zip}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='City'
            type='text'
            name='city'
            value={city}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder='Phone Number'
            type='text'
            name='phone'
            value={phone}
            onChange={this.handleChange}
          />
          <button
            className='auth-button'
            type='submit'
            disabled={isInvalid}
          >
            Sign Up
          </button>
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