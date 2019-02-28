import React from 'react';
import EnNavbar from './EnNavbar';
import { connect } from 'react-redux';
import DeSignedInLinks from './DeSignedInLinks';
import DeSignedOutLinks from './DeSignedOutLinks';
import EnSignedInLinks from './EnSignedInLinks';
import EnSignedOutLinks from './EnSignedOutLinks';
import { changeLang } from '../../store/actions/languageActions';
import DeNavbar from './DeNavbar';


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
      {language === 'DE' ? <DeNavbar /> : <EnNavbar />}
      { auth.uid ? signedInLinks : signedOutLinks }
      <div>
        <button onClick={makeEng}>EN</button>
        <button onClick={makeGer}>DE</button>
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