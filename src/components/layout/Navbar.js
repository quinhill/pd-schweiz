import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { changeLang } from '../../store/actions/languageActions';
import { Link } from 'react-router-dom';
import { navbarDe, navbarEn } from '../languages';
import { selectPage } from '../../store/actions/selectActions';


const Navbar = (props) => {

  const { auth, language, selected } = props;

  const lang = language === 'DE' ? navbarDe : navbarEn;

  const makeEng = () => {
    props.changeLang('EN');
  }

  const makeGer = () => {
    props.changeLang('DE');
  }

  const select = (event) => {
    const { name } = event.target;
    props.selectPage(name);
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
          <div 
            className='link-background'
            id={selected === 'courses' ? 'selected' : 'unselected'}
          >
            <Link 
              className='link-tag' 
              to='/courses'
              name='courses'
              onClick={select}
            >
              {lang.courses}
            </Link>
          </div>
          <div 
            className='link-background'
            id={selected === 'aboutpd' ? 'selected' : 'unselected'}
          >
            <Link 
              className='link-tag' 
              to='/aboutpd'
              name='aboutpd'
              onClick={select}
            >
              {lang.aboutPD}
            </Link>
          </div>
          <div 
            className='link-background'
            id={selected === 'aboutkc' ? 'selected' : 'unselected'}
          >
            <Link 
              className='link-tag' 
              to='/aboutkc'
              name='aboutkc'
              onClick={select}
            >
              {lang.aboutKC}
            </Link>
          </div>
          <div 
            className='link-background'
            id={selected === 'contact' ? 'selected' : 'unselected'}
          >
            <Link 
              className='link-tag' 
              to='/contact'
              name='contact'
              onClick={select}
            >
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
    profile: state.firebase.profile,
    selected: state.selected
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => dispatch(changeLang(lang)),
  selectPage: (page) => dispatch(selectPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);