import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { authDe, authEn } from '../languages';

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

    const lang = this.props.language === 'DE' ? authDe : authEn;

    return (
      <div className='auth-page'>
        <form
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <h5 className='auth-title'>{lang.signup}</h5>
          <label>{lang.name}</label>
          <input
            className='auth-input'
            placeholder={lang.signup}
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder={lang.lastName}
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
          />
          <label>{lang.email}</label>
          <input
            className='auth-input'
            placeholder={lang.email}
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <label>{lang.password}</label>
          <input
            className='auth-input'
            placeholder={lang.password}
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder={lang.passwordTwo}
            type='password'
            name='passwordTwo'
            value={passwordTwo}
            onChange={this.handleChange}
          />
          <label>{lang.address}</label>
          <input
            className='auth-input'
            placeholder={lang.address}
            type='text'
            name='address'
            value={address}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder={lang.zip}
            type='text'
            name='zip'
            value={zip}
            onChange={this.handleChange}
          />
          <input
            className='auth-input'
            placeholder={lang.city}
            type='text'
            name='city'
            value={city}
            onChange={this.handleChange}
          />
          <label>{lang.cell}</label>
          <input
            className='auth-input'
            placeholder={lang.cell}
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
            {lang.signup}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.language
})

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);