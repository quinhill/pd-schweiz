import React from 'react';
import { NavLink } from 'react-router-dom';

const DeSignedInLinks = () => {
  return (
    <div>
      <NavLink className='auth-tag' to='/signin'>Anmelden</NavLink>
      <NavLink className='auth-tag' to='/signup'>Registrieren</NavLink>
    </div>
  )
}


export default DeSignedInLinks;