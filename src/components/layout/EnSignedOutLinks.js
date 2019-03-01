import React from 'react';
import { NavLink } from 'react-router-dom';

const EnSignedInLinks = () => {
  return (
    <div className='auth-container'>
      <div className='auth-tag-background'>
        <NavLink 
          className='auth-tag' 
          to='/signin'
        >
          Sign In
        </NavLink>
      </div>
      <div className='auth-tag-background'>
        <NavLink 
          className='auth-tag' 
          to='/signup'
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  )
}


export default EnSignedInLinks;