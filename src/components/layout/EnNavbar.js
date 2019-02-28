import React from 'react';
import { Link } from 'react-router-dom';

const EnNavbar = (props) => {
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
            Courses
          </Link>
        </div>
        <div className='link-background'>
          <Link className='link-tag' to='/aboutpd'>
            About Positive Discipline
          </Link>
        </div>
        <div className='link-background'>
          <Link className='link-tag' to='/aboutkc'>
            About KC
          </Link>
        </div>
        <div className='link-background'>
          <Link className='link-tag' to='/contact'>
            Contact
          </Link>
        </div>
        <div className='link-background'>
        </div>
      </div>
    </div>
  )
}

export default EnNavbar;