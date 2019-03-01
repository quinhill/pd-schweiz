import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { courseSignup } from '../../store/actions/courseActions';

const CourseDetails = (props) => {
  const { course, id } = props;

  const handleSignUp = () => {
    props.courseSignup(id)
  }

  if (course) {
    return (
      <div className="container section course-details">
        <div className="card-content">
          <span className="card-title">{course.title}</span>
        </div>
        <div>
          <button
            onClick={handleSignUp}
          >
            Für Kurs registrieren
          </button>
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
  const course = courses ? courses[id] : null;
  return {
    uid: state.firebase.auth.uid,
    course,
    id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    courseSignup: (uid) => dispatch(courseSignup(uid))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'courses'
  }])
)(CourseDetails)