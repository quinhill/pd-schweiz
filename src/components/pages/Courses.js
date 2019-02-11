import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Courses = (props) => {
  return (
    <div>

    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    courses: state.courses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses' }
  ])
)(Courses);