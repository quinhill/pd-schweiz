import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { authDe, authEn } from '../languages';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { anonCourseSignup } from '../../store/actions/courseActions';
import { withRouter } from 'react-router-dom';

class AnonSignup extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      cell: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleSubmit = (event) => {
    const { 
      id, 
      anonCourseSignup,
      history
    } = this.props;
    event.preventDefault();
    const data = {user: {...this.state}, id };
    anonCourseSignup(data);
    history.push('/signupmessage')
  }

  render() {
    
    const {
      firstName,
      lastName,
      email,
      cell
    } = this.state;
    
    const lang = this.props.language === 'DE' ? authDe : authEn;
      
    return (
      <div className='auth-page'>
        <form 
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <h5 className='auth-title'>
            {lang.signinText}
            <Link to='signin'>{lang.signin}</Link>
          </h5>
          <h5 className='auth-title'>{lang.courseSignup}</h5>
          <label>{lang.name}</label>
          <input
            onChange={this.handleChange}
            type='text'
            className='auth-input'
            placeholder={lang.firstName}
            name='firstName'
            value={firstName}
          />
          <input
            onChange={this.handleChange}
            type='text'
            className='auth-input'
            placeholder={lang.lastName}
            name='lastName'
            value={lastName}
          />
          <label>{lang.email}</label>
          <input
            onChange={this.handleChange}
            type='email'
            className='auth-input'
            placeholder={lang.email}
            name='email'
            value={email}
          />
          <label>{lang.cell}</label>
          <input
            onChange={this.handleChange}
            type='text'
            className='auth-input'
            placeholder={lang.cell}
            name='cell'
            value={cell}
          />
          <button 
            type='submit'
            className='auth-button'
          >
            {lang.signup}
          </button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
    language: state.language
})

const mapDispatchToProps = (dispatch) => ({
  anonCourseSignup: (data) => dispatch(anonCourseSignup(data))
})

export default withRouter(compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'courses' }
  ])
)(AnonSignup));