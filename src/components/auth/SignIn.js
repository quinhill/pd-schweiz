import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/thunks/authThunks';
import { withRouter } from 'react-router-dom';
import { 
  german, 
  english,
  errorCodeDe,
  errorCodeEn
} from '../languages';


class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
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
      this.renderError()
    }
  }

  renderError = () => {
    const { hasErrored, language } = this.props;
    const code = hasErrored.code;
    const errorMessage = language === 'DE' ?
      errorCodeDe(code) :
      errorCodeEn(code);
    this.setState({ errorMessage })
  }

  render() {

    const { language } = this.props;

    const { errorMessage } = this.state;

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
              errorMessage ? 
                <p className='error-message'>
                  {errorMessage}
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