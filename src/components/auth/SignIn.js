import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import { authDe, authEn } from '../languages';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state);
    this.props.history.push('/')
  }

  render() {

    const { authError, language } = this.props;

    const lang = language === 'DE' ? authDe : authEn;

    console.log(lang)

    return (
      <div className='auth-page'>
        <form
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <h5 className='auth-title'>Sign In</h5>
          <label>Email</label>
          <input
            className='auth-input'
            type='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>Email</label>
          <input
            className='auth-input'
            type='password'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button
            className='auth-button'
            type='submit'
          >
            Sign In
          </button>
          <div>
            { authError ? <p>{authError}</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    language: state.language
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));