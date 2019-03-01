import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CourseList from '../courses/CourseList';

const Courses = (props) => {

  return (
    <div>
      <CourseList courses={props.courses} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    courses: state.firestore.ordered.courses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses', orderBy: ['date', 'desc']}
  ])
)(Courses);