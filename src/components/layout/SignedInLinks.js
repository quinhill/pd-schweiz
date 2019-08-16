import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/thunks/authThunks';
import { german, english } from '../languages';
import { NavLink } from 'react-router-dom';

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
      <button 
          className='auth-tag'
          id='signout-button'
          onClick={props.signOut}
        >
          {lang.signout}
        </button>
      </div>
      <div className='auth-tag-background'>
        <NavLink 
          className='auth-tag' 
          to='/account'
        >
          {lang.account}
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);