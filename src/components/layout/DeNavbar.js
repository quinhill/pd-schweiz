import React from 'react';
import { Link } from 'react-router-dom';

const DeNavbar = () => {
  return (
    <div>
      <div className='home-wrapper'>
        <Link 
          to='/' 
          id='home-link' 
          className='link-tag'
        >
          Home
        </Link>
      </div>
      <div className='navbar'>
        <div className='link-background'>
          <Link className='link-tag' to='/courses'>
            Kurse
          </Link>
        </div>
        <div className='link-background'>
          <Link className='link-tag' to='/aboutpd'>
            Über Positive Disziplin
          </Link>
        </div>
        <div className='link-background'>
          <Link className='link-tag' to='/aboutkc'>
            Über KC
          </Link>
        </div>
        <div className='link-background'>
          <Link className='link-tag' to='/contact'>
            Kontakt
          </Link>
        </div>
        <div className='link-background'>
        </div>
      </div>
    </div>
  )
}

export default DeNavbar;