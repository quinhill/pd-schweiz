import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { authDe, authEn } from '../languages';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { storeAnonData } from '../../store/actions';
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
      storeAnonData,
      history
    } = this.props;
    event.preventDefault();
    storeAnonData(this.state);
    history.push('/confirmcourse')
  }

  render() {

    const { language } = this.props;
    
    const {
      firstName,
      lastName,
      email,
      cell
    } = this.state;

    const invalid = !firstName.length ||
                     !lastName.length ||
                     !email.length ||
                     cell.length < 7;
    
    const lang = language === 'DE' ? authDe : authEn;
      
    return (
      <div className='auth-page'>
        <form 
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <h5 className='auth-title'>
            {lang.signinText}
            <Link to='/signin'>{lang.signin}</Link>
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
            disabled={invalid}
          >
            {lang.courseSignupButton}
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
  storeAnonData: (data) => dispatch(storeAnonData(data))
})

export default withRouter(compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'courses' }
  ])
)(AnonSignup));