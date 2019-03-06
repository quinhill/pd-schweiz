import React from 'react'
import { withRouter } from 'react-router-dom';

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
    props.signUpCourse(id);
    props.history.push('/signupmessage');
  }

  const handleCancel = (event) => {
    const { id } = event.target;
    props.cancelCourse(id);
    props.history.push('/signupmessage');
  }

  if (course) {
    return (
      <div className="course-wrapper">
        <div className="card-title">
          <h3 className="card-title">{course.title}</h3>
          <p>{course.date}</p>
        </div>
        <p className='card-p'>
          <span className='description-tag'>Ort: </span>
          {course.location}
        </p>
        <p className='card-p'>
          <p className='description-tag'>Beschreibung: </p>
          {course.description}
        </p>
        <p className='card-p'>
          <span className='description-tag'>Preis: </span>
          {course.cost}
        </p>
        <div className='signup-button-wrapper'>
          {
            signedUp ?
              <button
                className='course-signup-button'
                id={course.id}
                onClick={handleCancel}
              >
                Von Kurs abmelden
              </button> :
              <button
                className='course-signup-button'
                id={course.id}
                onClick={handleSignUp}
              >
                Für Kurs anmelden
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