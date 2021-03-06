import React from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../store/actions';
import {
  courseSignup, 
  anonCourseSignup
} from '../../store/thunks/courseThunks';
import { german, english } from '../languages';
import { withRouter } from 'react-router-dom';

const ConfirmCourse = (props) => {

  const { 
    isLoading,
    course, 
    language, 
    history,
    newUser,
    name
  } = props;

  const lang = language === 'DE'? german : english;

  const newAccount = newUser ? lang.newUserSignup(name) : null;

  const confirmText = lang.confirmCourse(course.title);

  const confirm = () => {
    if (!course.user) {
      props.courseSignup(course.id);
    } else {
      props.anonCourseSignup(course);
    }
    history.push('/signupmessage');
  };

  const decline = () => {
    props.resetState();
    history.push('/courses');
  }

  if (isLoading) {
    return (
      <div className='loading-container'>
        <p>{lang.loading}</p>
      </div>
    )
  }

  return (
    <div className='signedup-page'>
      <div className='confirm-wrapper'>
        {
          newAccount ? 
            <h5 className='auth-title'>{newAccount}</h5> : 
            null 
        }
        <h5 className='auth-title'>{confirmText}</h5>
        <div className='confirm-button-wrapper'>
          <button
            onClick={confirm}
            className='course-signup-button'
          >
            {lang.confirmButton}
          </button>
          <button
            onClick={decline}
            className='course-signup-button'
          >
            {lang.declineButton}
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  course: state.course,
  language: state.language,
  name: state.firebase.profile.firstName,
  newUser: state.newUser
});

const mapDispatchToProps = (dispatch) => ({
  courseSignup: (id) => dispatch(courseSignup(id)),
  anonCourseSignup: (data) => dispatch(anonCourseSignup(data)),
  resetState: () => dispatch(resetState())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmCourse));