import React, { Component } from 'react';
import CourseList from '../dashboard/CourseList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import SignIn from '../auth/SignIn';

class Home extends Component {
  render() {

    const { courses } = this.props;

    return (
      <div>
        <SignIn />
        <CourseList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.firestore.ordered.courses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses' }
  ])
)(Home);