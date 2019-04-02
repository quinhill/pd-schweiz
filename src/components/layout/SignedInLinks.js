import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/thunks/authThunks';
import { german, english } from '../languages';

const SignedInLinks = (props) => {

  const lang = props.language === 'DE' ? german : english;

  return (
    <div className='auth-background'>
      <div className='auth-tag-background'>
        <button 
          className='user-button'
          id='signout-button'
          onClick={props.signOut}
        >
          {lang.signout}
        </button>
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