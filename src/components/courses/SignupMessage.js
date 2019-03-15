import React from 'react';
import { connect } from 'react-redux';
import { courseSignupDe, courseSignupEn } from '../languages';
import { withRouter } from 'react-router-dom';
import { resetState } from '../../store/actions/courseActions';

const SignupMessage = (props) => {

  const lang = props.language === 'DE' ? courseSignupDe : courseSignupEn;

  const resetState = () => {
    props.resetState();
    props.history.push('/courses');
  }

  if (props.course.firstName) {
    const { firstName, title, date} = props.course;

    const string = props.course.cancel ? 
      lang.cancelSuccess(firstName, title, date) : 
      lang.signupSuccess(firstName, title, date);

    return (
      <div className='signedup-page'>
        <h5 className='auth-title'>{string}</h5>
        <button
          className='back-to-home'
          onClick={resetState}
        >
          {lang.courselink}
        </button>
      </div>
    )
  } else {
    return (
      <div className='signedup-page'>
        <h5 className='auth-title'>{lang.loading}</h5>
        <button
          className='back-to-home'
          onClick={resetState}
        >
          {lang.courselink}?
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  language: state.language,
  course: state.course,
  cancel: state.cancel
});

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch(resetState())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupMessage));

