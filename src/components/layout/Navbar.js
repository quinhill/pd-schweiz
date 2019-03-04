import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { changeLang } from '../../store/actions/languageActions';
import { Link } from 'react-router-dom';
import { navbarDe, navbarEn } from '../languages';


const Navbar = (props) => {

  const { auth, language } = props;

  const lang = language === 'DE' ? navbarDe : navbarEn;

  const makeEng = () => {
    props.changeLang('EN');
  }

  const makeGer = () => {
    props.changeLang('DE');
  }

  return (
    <nav>
      <div className='navbar'>
        <div className='home-wrapper'>
          <Link
            to='/'
            id='home-link'
            className='link-tag'
          >
            <img
              src='/positive-discipline.png'
              alt='positive discipline'
              className='home-link'
            />
          </Link>
        </div>
        <div className='page-links'>
          <div className='link-background'>
            <Link className='link-tag' to='/courses'>
              {lang.courses}
            </Link>
          </div>
          <div className='link-background'>
            <Link className='link-tag' to='/aboutpd'>
              {lang.aboutPD}
            </Link>
          </div>
          <div className='link-background'>
            <Link className='link-tag' to='/aboutkc'>
              {lang.aboutKC}
            </Link>
          </div>
          <div className='link-background'>
            <Link className='link-tag' to='/contact'>
              {lang.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className='auth-language-wrapper'>
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
        <div className='language-button-wrapper'>
          <button
            onClick={makeEng}
            className='language-button'
          >
            EN
          </button>
          <div id='language-divider'></div>
          <button
            onClick={makeGer}
            className='language-button'
          >
            DE
          </button>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    language: state.language,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => dispatch(changeLang(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);