import React from 'react';
import { connect } from 'react-redux';
import { german, english } from '../languages';
import { withRouter } from 'react-router-dom';
import { resetState } from '../../store/actions';
import moment from 'moment';

const SignupMessage = (props) => {

  const lang = props.language === 'DE' ? german : english;

  const resetState = () => {
    props.resetState();
    props.history.push('/courses');
  }

  if (props.isLoading) {
    return (
      <p>{lang.loading}</p>
    )
  }

  if (props.course.firstName) {
    const { firstName, title, date} = props.course;
    const formattedDate = moment(date.toDate()).format('dddd, LL');
    const string = props.course.cancel ? 
      lang.cancelSuccess(firstName, title, formattedDate) : 
      lang.signupSuccess(firstName, title, formattedDate);

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
  isLoading: state.isLoading,
  language: state.language,
  course: state.course,
  cancel: state.cancel
});

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch(resetState())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupMessage));

