import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/de';

class CourseDetails extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {

    const expand = this.state.expanded ? 'expand' : 'shrink'

    const { 
      course, 
      userCourses,
      auth
    } = this.props;
  
    moment.locale('de')
  
    let signedUp;
    if (userCourses) {
      const checkCourses = userCourses.filter(courseId => courseId === course.id);
      signedUp = checkCourses.length > 0;
    }
  
    const handleSignUp = (event) => {
      const { id } = event.target;
      this.props.addCourse(id);
      if (!auth.uid) {
        return this.props.history.push('/coursesignup/' + id)
      }
      this.props.history.push('/confirmcourse');
    }
  
    const handleCancel = (event) => {
      const { id } = event.target;
      this.props.addCourse(id);
      this.props.history.push('/confirmcancel');
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
          <div 
            className="card-title-wrapper"
            onClick={this.toggleExpand}
          >
            <h3 
              className="card-title"
            >
              {course.title}
            </h3>
          </div>
          <div className={expand}>
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
            <p className='card-p'>
              <span className='description-tag'>Kosten: </span>
              {course.cost}
            </p>
            {
              course.description ?
                <p className='card-p'>
                  <span className='description-tag'>Beschreibung: </span>
                  {course.description}
                </p> :
                null
            }
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

}

export default withRouter(CourseDetails);