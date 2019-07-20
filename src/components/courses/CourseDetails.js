import React from 'react'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/de';

const CourseDetails = (props) => {

  const { 
    course, 
    userCourses,
    auth
  } = props;

  moment.locale('de')
  const date = moment(course.date.toDate()).format('dddd, LL');

  let signedUp;
  if (userCourses) {
    const checkCourses = userCourses.filter(courseId => courseId === course.id);
    signedUp = checkCourses.length > 0;
  }

  const handleSignUp = (event) => {
    const { id } = event.target;
    props.addCourse(id);
    if (!auth.uid) {
      return props.history.push('/coursesignup/' + id)
    }
    props.history.push('/confirmcourse');
  }

  const handleCancel = (event) => {
    const { id } = event.target;
    props.addCourse(id);
    props.history.push('/confirmcancel');
  }

  const courseDates = course.dates ? 
    course.dates.map((date) => {
      if (date.length) {
        const dateString = new Date(date);
        return moment(dateString).format('dddd, LL');
      } else {
        return null
      }
    }) :
    null;

  if (course) {
    return (
      <div className="course-wrapper">
        <div className="card-title">
          <h3 className="card-title">{course.title}</h3>
        </div>
        <p className='card-p'>
          <span className='description-tag'>Ort: </span>
          {course.location}
        </p>
        <p className='description-tag'>Daten:</p>
        {
          courseDates ? 
            courseDates.map((date, index) => {
              return (
                <p 
                  className='card-p'
                  key={index}
                >
                  {date}
                </p>
              )
            }) :
            null
        }
        <p className='card-p'>
          <span className='description-tag'>Beginnt um: </span>
          {course.timeStart}
        </p>
        <p className='card-p'>
          <span className='description-tag'>Endet um: </span>
          {course.timeEnd}
        </p>
        {
          course.description ?
            <p className='card-p'>
              <span className='description-tag'>Beschreibung: </span>
              {course.description}
            </p> :
            null
        }
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
      <div className="loading-container">
        <p>Loading course...</p>
      </div>
    )
  }
}

export default withRouter(CourseDetails);