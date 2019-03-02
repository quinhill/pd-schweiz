import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';

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

    const { authError } = this.props;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <h5>Sign In</h5>
          <input 
            type='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type='password'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button
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
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));