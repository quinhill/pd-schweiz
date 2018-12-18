import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
  return (
    <div>
      <NavLink to='/'>Update Courses</NavLink>
      <NavLink to='/'>Update Homepage</NavLink>
      <NavLink to='/'>Update Contact</NavLink>
    </div>
  )
}

export default SignedInLinks;