import React from 'react'

const CourseDetails = (props) => {

  const { 
    course, 
    userCourses 
  } = props;

  let signedUp;
  if (userCourses) {
    const checkCourses = userCourses.filter(courseId => courseId === course.id);
    signedUp = checkCourses.length > 0;
  }

  const handleSignUp = (event) => {
    const { id } = event.target;
    props.signUpCourse(id)
  }

  const handleCancel = (event) => {
    const { id } = event.target;
    props.cancelCourse(id);
  }

  if (course) {
    return (
      <div className="container section course-details">
        <div className="card-content">
          <span className="card-title">{course.title}</span>
        </div>
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

export default CourseDetails;