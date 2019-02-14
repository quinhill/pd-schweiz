import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav>
      <Link to='/' className='logo'>Home</Link>
      <div className='navbar'>
        <Link to='/classes'>Classes</Link>
        <Link to='/founders'>Founders</Link>
        <Link to='/literature'>Literature</Link>
        <Link to='/international'>International</Link>
        <Link to='/contact'>Contact</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);