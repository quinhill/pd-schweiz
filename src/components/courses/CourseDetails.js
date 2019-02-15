import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const CourseDetails = (props) => {
  const { course } = props;
  console.log(course)
  if (course) {
    return (
      <div className="container section course-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{course.title}</span>
            <p>{course.description}</p>
          </div>
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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const courses = state.firestore.data.courses;
  const course = courses ? courses[id] : null
  return {
    course: course
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'courses'
  }])
)(CourseDetails)