import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignedInNavLinks from './SignedInLinks';
import SignedOutNavLinks from './SignedOutLinks';
import { changeLang } from '../../store/actions';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { german, english } from '../languages';


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      responsive: false
    }
  }

  
  makeEng = () => {
    this.props.changeLang('EN');
  }
  
  makeGer = () => {
    this.props.changeLang('DE');
  }
  
  displayMenu = () => {
    this.setState({ responsive: !this.state.responsive })
  }
  
  render() {

    const { responsive } = this.state;

    const changeClass = responsive ? 'responsive' : null;
    console.log(changeClass)

    const { auth, language } = this.props;
    const lang = language === 'DE' ? german : english;
    
    return (
      <nav>
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
        <div className='auth-language-wrapper'>
          {auth.uid ? <SignedInNavLinks /> : <SignedOutNavLinks />}
          <div className='language-button-wrapper'>
            <button
              onClick={this.makeEng}
              className='language-button'
              id={language === 'DE' ? 'lang-null' : 'lang-select'}
              >
              EN
            </button>
            <div id='language-divider'></div>
            <button
              onClick={this.makeGer}
              className='language-button'
              id={language === 'DE' ? 'lang-select' : 'lang-null'}
              >
              DE
            </button>
          </div>
        </div>
        <button
          className='bars-button'
          onClick={this.displayMenu}
          >
          <i className='bars-icon'></i>
        </button>
      </nav>
    )
  }
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