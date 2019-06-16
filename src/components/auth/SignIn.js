import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/thunks/authThunks';
import { withRouter } from 'react-router-dom';
import { german, english } from '../languages';
import { stat } from 'fs';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.signIn(this.state);
    if (!this.props.auth.isEmpty) {
      this.props.history.push('/courses')
    } else {
      console.log(this.props.hasErrored)
    }
  }

  render() {

    const { hasErrored, language } = this.props;

    const lang = language === 'DE' ? german : english;

    return (
      <div className='auth-page'>
        <form
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <h5 className='auth-title'>{lang.signin}</h5>
          <label>{lang.email}</label>
          <input
            className='auth-input'
            type='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>{lang.password}</label>
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
            {lang.signin}
          </button>
          <div>
            { 
              hasErrored ? 
                <p className='error-message'>
                  {hasErrored.message}
                </p> : 
              null 
            }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.hasErrored,
    language: state.language,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));