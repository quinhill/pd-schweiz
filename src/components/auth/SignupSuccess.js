import React from 'react';
import { connect } from 'react-redux';
import { german, english } from '../languages';
import { Link } from 'react-router-dom';

const SignupSuccess = (props) => {
  
  const { 
    isLoading,
    course, 
    profile,
    language
  } = props;

  const lang = language === 'DE' ? german : english;

  const welcomeText = lang.accountCreatedText(profile.firstName);

  const courseSignup = course.id ?
    <div>
      <h5 className='auth-title'>{lang.signupQuestion(course.title)}</h5>
      <Link to='/courses'>{lang.courseLink}</Link>
    </div> :
    null;

  if (isLoading) {
    return (
      <div className='loading-container'>
        <p>{lang.loading}</p>
      </div>
    )
  }

  return (
    <div className='signedup-page'>
      <h5 className='auth-title'>{welcomeText}</h5>
      {
        courseSignup
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  language: state.language,
  course: state.course,
  profile: state.firebase.profile
});

export default connect(mapStateToProps)(SignupSuccess);