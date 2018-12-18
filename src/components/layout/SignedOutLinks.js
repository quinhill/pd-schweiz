import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
  return (
    <div>
      <NavLink to='/'>About Positive Discipline</NavLink>
      <NavLink to='/'>Positive Discipline International</NavLink>
      <NavLink to='/'>Books on Positive Discipline</NavLink>
      <NavLink to='/'>Courses</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </div>
  )
}

export default SignedOutLinks;