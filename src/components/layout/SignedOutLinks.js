import React from 'react';
import { NavLink } from 'react-router-dom';
import { german, english } from '../languages';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {

  const lang = props.language === 'DE' ? german : english;

  const changeClass = props.responsive ? 'responsive' : null;

  return (
    <div className='auth-background'>
      <div className='auth-button-wrapper'>
        <button
          className='user-button'
        >
          {lang.user}
        </button>
      </div>
      <div className={`auth-content ${changeClass}`}>
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
  language: state.language,
  responsive: state.responsive
})

export default connect(mapStateToProps)(SignedInLinks);