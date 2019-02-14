import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
  return (
    <div>
      <NavLink to='/signin'>Sign In</NavLink>
      <NavLink to='/account'>Account</NavLink>
    </div>
  )
}


export default SignedInLinks;