import React from 'react';
import { NavLink } from 'react-router-dom';

const DeSignedInLinks = () => {
  return (
    <div>
      <NavLink to='/signin'>Anmelden</NavLink>
      <NavLink to='/signup'>Registrieren</NavLink>
    </div>
  )
}


export default DeSignedInLinks;