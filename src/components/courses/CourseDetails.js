import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CourseDetails = (props) => {

  const { 
    course, 
    userCourses,
    auth
  } = props;

  let signedUp;
  if (userCourses) {
    const checkCourses = userCourses.filter(courseId => courseId === course.id);
    signedUp = checkCourses.length > 0;
  }

  const handleSignUp = (event) => {
    if (!auth.uid) {
      return props.history.push('/coursesignup/' + course.id)
    }
    const { id } = event.target;
    props.signUpCourse(id)
  }

  const handleCancel = (event) => {
    const { id } = event.target;
    props.cancelCourse(id);
  }

  if (course) {
    return (
      <div className="course-wrapper">
        <div className="card-title">
          <h3 className="card-title">{course.title}</h3>
          <p>{course.date}</p>
        </div>
        <div className='course-description'>
          <p>{course.location}</p>
          <p>{course.description}</p>
        </div>
          <p>{course.cost}</p>

        <div>
          {
            signedUp ?
              <button
                id={course.id}
                onClick={handleCancel}
              >
                Von Kurs abmelden
              </button> :
              <button
                id={course.id}
                onClick={handleSignUp}
              >
                Für Kurs registrieren
              </button>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading course...</p>
      </div>
    )
  }
}

export default withRouter(CourseDetails);