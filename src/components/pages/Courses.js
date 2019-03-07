import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CourseDetails from '../courses/CourseDetails';
import { 
  courseSignup, 
  courseCancel,
  addCurrentCourse
} from '../../store/actions/courseActions';
import { Link } from 'react-router-dom';

const Courses = (props) => {

  const { 
    courses,
    userCourses,
    auth,
    language
  } = props;

  const signUpCourse = (id) => {
    props.courseSignup(id)
  }

  const cancelCourse = (id) => {
    props.courseCancel(id);
  }

  const addCourse = (id) => {
    const course = courses.find(course => course.id === id);
    props.addCurrentCourse(course);
  }

  if (language === 'DE') {
    return (
      <div className='course-page'>
        { courses && courses.map((course, index) => {
          return (
            <CourseDetails 
              key={index} 
              course={course}
              signUpCourse={signUpCourse}
              cancelCourse={cancelCourse}
              addCourse={addCourse}
              userCourses={userCourses}
              auth={auth}
            />
          )
        })}
      </div>
    )
  } else {
    return (
    <div className='course-page'>
      <div className='disclaimer-wrapper'>
        <h5 className='auth-title'>
        <span className='description-tag'>For English Speakers:</span> All Positive Discipline courses are currently in German. If you are interested in attending a course taught in English, please contact KC directly. Information on how to reach KC can be found here 
        <Link 
          className='contact-link' 
          to='/contact'
        >
          Contact
        </Link>
      </h5>
    </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    courses: state.firestore.ordered.courses,
    userCourses: state.firebase.profile.courses,
    language: state.language
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    courseSignup: (id) => dispatch(courseSignup(id)),
    courseCancel: (id) => dispatch(courseCancel(id)),
    addCurrentCourse: (course) => dispatch(addCurrentCourse(course))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'courses', orderBy: ['date', 'desc']}
  ])
)(Courses);