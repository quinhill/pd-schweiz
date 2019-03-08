import React from 'react';
import { connect } from 'react-redux';
import { courseSignup } from '../../store/actions/courseActions';
import { authDe, authEn } from '../languages';
import { withRouter } from 'react-router-dom';

const ConfirmCourse = (props) => {

  const { course, language, history } = props;

  const lang = language === 'DE'? authDe : authEn;

  const confirmText = lang.confirmCourse(course.title);

  const confirm = () => {
    props.courseSignup(course.id);
    history.push('/signupmessage');
  };

  const decline = () => {
    history.push('/courses');
  }

  return (
    <div className='signedup-page'>
      <div className='confirm-wrapper'>
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
  course: state.course,
  language: state.language
});

const mapDispatchToProps = (dispatch) => ({
  courseSignup: (id) => dispatch(courseSignup(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmCourse));