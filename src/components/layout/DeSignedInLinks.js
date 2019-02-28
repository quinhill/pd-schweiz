import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const DeSignedInLinks = (props) => {
  return (
    <div className='link-background'>
      <a className='link-tag' onClick={props.signOut}>Abmelden</a>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(DeSignedInLinks);