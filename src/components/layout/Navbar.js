import React from 'react';
import { connect } from 'react-redux';
import SignedInNavLinks from './SignedInLinks';
import SignedOutNavLinks from './SignedOutLinks';
import {
  changeLang,
  makeResponsive
} from '../../store/actions';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { german, english } from '../languages';


const Navbar = (props) => {

  const { responsive } = props;
  const { auth, language } = props;
  const lang = language === 'DE' ? german : english;

  const makeEng = () => {
    props.changeLang('EN');
  }

  const makeGer = () => {
    props.changeLang('DE');
  }

  const displayMenu = () => {
    props.makeResponsive(!responsive)
  }

  const changeClass = responsive ? 'responsive' : null;

  return (
    <nav>
      <div className='home-wrapper'>
        <Link
          to='/'
          id='home-link'
          className='link-tag'
        >
        </Link>
      </div>
      <div className={`navbar ${changeClass}`}>
        <div className={`page-links ${changeClass}`}>
          <NavLink
            className={`link-tag ${changeClass}`}
            to='/courses'
          >
            {lang.courses}
          </NavLink>
          <NavLink
            className={`link-tag ${changeClass}`}
            to='/aboutpd'
          >
            {lang.aboutPD}
          </NavLink>
          <NavLink
            className={`link-tag ${changeClass}`}
            to='/aboutkc'
          >
            {lang.aboutKC}
          </NavLink>
          <NavLink
            className={`link-tag ${changeClass}`}
            to='/contact'
          >
            {lang.contact}
          </NavLink>
        </div>
      </div>
      <div
        className={`auth-language-wrapper ${changeClass}`}
      >
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
      <button
        className='bars-button'
        onClick={displayMenu}
      >
        <i className='bars-icon'></i>
      </button>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    responsive: state.responsive
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => dispatch(changeLang(lang)),
  makeResponsive: (bool) => dispatch(makeResponsive(bool))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));