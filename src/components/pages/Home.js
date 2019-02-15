import React, { Component } from 'react';
import CourseList from '../dashboard/CourseList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import SignIn from '../auth/SignIn';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  render() {

    const { courses, auth } = this.props;

    if (!auth.uid) {
      return <Redirect to='/signin' />
    }

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
    courses: state.firestore.ordered.courses,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses' }
  ])
)(Home);