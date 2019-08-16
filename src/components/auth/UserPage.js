import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CourseDetails from '../courses/CourseDetails';
import { german, english } from '../languages';
import EditUser from './EditUser';

class UserPage extends Component {
  constructor() {
    super()
    this.state = {
      edit: false
    }
  }

  editUser = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {

    const lang = this.props.language === 'DE' ? german : english;

    const { courses, user } = this.props;
    const courseIds = user.courses;
    
    const userCourses = courses ? 
      courses.reduce((userCourses, course, index) => {
        if (courseIds) {
          for (let i = index; i < courseIds.length; i++) {
            if (courseIds[i] === course.id) {
              userCourses.push(course)
            }
          }
        }
        return userCourses
      }, []) :
      null;
      
      
    return (
      <div className='user-page'>
      <div>
        {
          this.state.edit ?
            <EditUser 
              user={user}
              editUser={this.editUser}
            /> :
            <div className='user-info'>
              <p>{user.firstName} {user.lastName}</p>
              <p>{user.address}</p>
              <p>{user.zip} {user.city}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <button
                onClick={this.editUser}
                >
                {lang.editUser}
              </button>
            </div>
        }
      </div>
      <div className='user-courses'>
        {
          userCourses ? userCourses.map((course, index) => {
            return (
              <CourseDetails 
              course={course}
              userCourses={courseIds}
              key={index}
              />
              ) 
            }) :
            null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.language,
    courses: state.firestore.ordered.courses
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { 
      collection: 'courses',
    }
  ])
)(UserPage);