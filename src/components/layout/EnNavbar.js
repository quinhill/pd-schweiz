import React from 'react';
import { Link } from 'react-router-dom';

const EnNavbar = (props) => {
  return (
    <div className='page-links'>
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
    </div>
  )
}

export default EnNavbar;