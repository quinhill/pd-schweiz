import React from 'react';
import EnNavbar from './EnNavbar';
import { connect } from 'react-redux';
import DeSignedInLinks from './DeSignedInLinks';
import DeSignedOutLinks from './DeSignedOutLinks';
import EnSignedInLinks from './EnSignedInLinks';
import EnSignedOutLinks from './EnSignedOutLinks';
import { changeLang } from '../../store/actions/languageActions';
import DeNavbar from './DeNavbar';
import { Link } from 'react-router-dom';


const Navbar = (props) => {

  const { auth, language } = props;

  const signedInLinks = language === 'DE' ?
    <DeSignedInLinks /> : <EnSignedInLinks />

  const signedOutLinks = language === 'DE' ?
    <DeSignedOutLinks /> : <EnSignedOutLinks />

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
          {language === 'DE' ? <DeNavbar /> : <EnNavbar />}
        </div>
      <div className='auth-language-wrapper'>
        { auth.uid ? signedInLinks : signedOutLinks }
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