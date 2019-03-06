import React from 'react';
import { NavLink } from 'react-router-dom';
import { authDe, authEn } from '../languages';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {

  const lang = props.language === 'DE' ? authDe : authEn;

  return (
    <div className='auth-background'>
      <div className='auth-button-wrapper'>
        <button
          className='user-button'
        >
          {lang.user}
        </button>
      </div>
      <div className='auth-content'>
        <div className='auth-tag-background'>
          <NavLink 
            className='auth-tag' 
            to='/signin'
          >
            {lang.signin}
          </NavLink>
        </div>
        <div className='auth-tag-background'>
          <NavLink 
            className='auth-tag' 
            to='/signup'
          >
            {lang.signup}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(mapStateToProps)(SignedInLinks);