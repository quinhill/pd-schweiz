import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { changeLang } from '../../store/actions/languageActions';


const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  const makeEng = () => {
    props.changeLang('EN');
  }

  const makeGer = () => {
    props.changeLang('DE');
  }

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
        <div>
          <button onClick={makeEng}>EN</button>
          <button onClick={makeGer}>DE</button>
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

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => dispatch(changeLang(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);