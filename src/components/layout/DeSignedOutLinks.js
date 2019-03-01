import React from 'react';
import { NavLink } from 'react-router-dom';

const DeSignedInLinks = () => {
  return (
    <div class='auth-background'>
      <div className='auth-tag-background'>
        <NavLink
          className='auth-tag' 
          to='/signin'
        >
          Anmelden
        </NavLink>
      </div>
      <div className='auth-tag-background'>
        <NavLink 
          className='auth-tag' 
          to='/signup'
        >
          Registrieren
        </NavLink>
      </div>
    </div>
  )
}


export default DeSignedInLinks;