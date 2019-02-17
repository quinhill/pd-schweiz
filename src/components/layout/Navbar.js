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
          { links }
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);