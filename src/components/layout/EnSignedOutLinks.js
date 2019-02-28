import React from 'react';
import { NavLink } from 'react-router-dom';

const EnSignedInLinks = () => {
  return (
    <div>
      <NavLink className='auth-tag' to='/signin'>Sign In</NavLink>
      <NavLink className='auth-tag' to='/signup'>Sign Up</NavLink>
    </div>
  )
}


export default EnSignedInLinks;