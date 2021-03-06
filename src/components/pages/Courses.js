import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CourseDetails from '../courses/CourseDetails';
import { 
  courseSignup, 
  courseCancel,
} from '../../store/thunks/courseThunks';
import { addCurrentCourse } from '../../store/actions';

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

  const current = new Date().getTime();

  if (language === 'DE') {
    return (
      <div className='course-page'>
        { courses && courses.map((course, index) => {
          const courseTime = parseInt(`${course.date.seconds}000`)
          if (courseTime > current){
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
          } else {
            return null
          }
        })}
      </div>
    )
  } else {
    return (
    <div className='course-page'>
      <div className='disclaimer-wrapper'>
        <h5 className='auth-title'>
        <span className='description-tag'>For English Speakers:</span> All my scheduled Positive Discipline courses are currently in German. If you are interested in attending a course taught in English, please contact me. -KC 
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
    participants: state.firestore.ordered.course_participants,
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
    { 
      collection: 'courses',
      orderBy: ['date', 'asc']
    },
    { collection: 'course_participants' }
  ])
)(Courses);