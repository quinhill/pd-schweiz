import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CourseDetails from '../courses/CourseDetails';
import { 
  courseSignup, 
  courseCancel 
} from '../../store/actions/courseActions';

const Courses = (props) => {

  const { 
    courses,
    userCourses,
    auth
  } = props;

  const signUpCourse = (id) => {
    props.courseSignup(id)
  }

  const cancelCourse = (id) => {
    props.courseCancel(id);
  }

  return (
    <div className='course-page'>
      { courses && courses.map((course, index) => {
        return (
          <CourseDetails 
            key={index} 
            course={course}
            signUpCourse={signUpCourse}
            cancelCourse={cancelCourse}
            userCourses={userCourses}
            auth={auth}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    courses: state.firestore.ordered.courses,
    userCourses: state.firebase.profile.courses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    courseSignup: (id) => dispatch(courseSignup(id)),
    courseCancel: (id) => dispatch(courseCancel(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'courses', orderBy: ['date', 'desc']}
  ])
)(Courses);