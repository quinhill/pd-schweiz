import React from 'react';
import AnonSignup from './AnonSignup';
import SignUp from '../auth/SignUp';
import { german, english } from '../languages';
import { connect } from 'react-redux';

const CourseSignup = (props) => {
  const id = props.match.params.id;

  const lang = props.language === 'DE' ? german : english;

  return(
    <div className='course-signup-wrapper'>
      <div className='signup-wrapper'>
        <AnonSignup id={id} />
        <div className='create-account'>
          <h5 className='auth-title'>{lang.registerText}</h5>
          <SignUp />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language,
})

export default connect(mapStateToProps)(CourseSignup);