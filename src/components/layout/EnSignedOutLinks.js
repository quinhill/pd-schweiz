import React from 'react';
import { NavLink } from 'react-router-dom';

const EnSignedInLinks = () => {
  return (
    <div>
      <NavLink to='/signin'>Sign In</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  )
}


export default EnSignedInLinks;