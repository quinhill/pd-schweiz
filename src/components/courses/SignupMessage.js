import React from 'react';
import { connect } from 'react-redux';
import { courseSignupDe, courseSignupEn } from '../languages';
import { withRouter } from 'react-router-dom';
import { resetState } from '../../store/actions/courseActions';
import { selectPage } from '../../store/actions/selectActions';

const SignupMessage = (props) => {

  const lang = props.language === 'DE' ? courseSignupDe : courseSignupEn;

  const resetState = (event) => {
    const { name } = event.target;
    props.resetState();
    props.selectPage(name);
    props.history.push('/courses');
  }

  if (props.course.firstName) {
    const { firstName, title, date} = props.course;

    const string = props.course.cancel ? 
      lang.cancelSuccess(firstName, title) : 
      lang.signupSuccess(firstName, title, date);

    return (
      <div className='signedup-page'>
        <h5 className='auth-title'>{string}</h5>
        <button
          onClick={resetState}
          name='courses'
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
          {lang.homelink}?
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
  resetState: () => dispatch(resetState()),
  selectPage: (page) => dispatch(selectPage(page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupMessage));

