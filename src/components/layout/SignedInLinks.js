import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { authDe, authEn } from '../languages';

const SignedInLinks = (props) => {

  const lang = props.language === 'DE' ? authDe : authEn;

  return (
    <div className='auth-background'>
      <div className='auth-tag-background'>
        <a 
          className='auth-tag' 
          onClick={props.signOut}
        >
          {lang.signout}
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language
})

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);