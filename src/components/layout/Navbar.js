import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='logo'>Home</Link>
      <div className='navbar'>
        <Link to='/classes'>Classes</Link>
        <Link to='/founders'>Founders</Link>
        <Link to='/literature'>Literature</Link>
        <Link to='/international'>International</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;