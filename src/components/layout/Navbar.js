import React from 'react';
import { connect } from 'react-redux';
import SignedInNavLinks from './SignedInLinks';
import SignedOutNavLinks from './SignedOutLinks';
import { changeLang } from '../../store/actions/languageActions';
import { NavLink, Link, withRouter } from 'react-router-dom';
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
            exact
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
          <NavLink 
            className='link-tag' 
            to='/courses'
          >
            {lang.courses}
          </NavLink>
          <NavLink
            className='link-tag' 
            to='/aboutpd'
          >
            {lang.aboutPD}
          </NavLink>
          <NavLink 
            className='link-tag' 
            to='/aboutkc'
          >
            {lang.aboutKC}
          </NavLink>
          <NavLink 
            className='link-tag' 
            to='/contact'
          >
            {lang.contact}
          </NavLink>
        </div>
      </div>
      <div className='auth-language-wrapper'>
        {auth.uid ? <SignedInNavLinks /> : <SignedOutNavLinks />}
        <div className='language-button-wrapper'>
          <button
            onClick={makeEng}
            className='language-button'
            id={language === 'DE' ? 'lang-null' : 'lang-select'}
          >
            EN
          </button>
          <div id='language-divider'></div>
          <button
            onClick={makeGer}
            className='language-button'
            id={language === 'DE' ? 'lang-select' : 'lang-null'}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));