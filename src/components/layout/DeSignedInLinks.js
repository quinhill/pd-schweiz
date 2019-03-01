import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const DeSignedInLinks = (props) => {
  return (
    <div className='auth-background'>
      <div className='auth-tag-background'>
        <a 
          className='auth-tag' 
          onClick={props.signOut}
        >
          Abmelden
        </a>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(DeSignedInLinks);