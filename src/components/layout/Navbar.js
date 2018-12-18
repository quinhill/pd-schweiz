import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';


const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/' className='logo'>Home</Link>
        <Link to='/signin'>Sign In</Link>
        <SignedInLinks />
      </div>
    </nav>
  )
}

export default Navbar;