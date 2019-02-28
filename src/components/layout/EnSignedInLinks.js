import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const EnSignedInLinks = (props) => {
  return (
    <div className='link-background'>
      <a className='auth-tag' onClick={props.signOut}>Log Out</a>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(EnSignedInLinks);