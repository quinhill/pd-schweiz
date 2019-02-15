import React from 'react';
import { Link } from 'react-router-dom';
import CourseSummary from './CourseSummary';

const CourseList = ({courses}) => {
  return (
    <div>
      { courses && courses.map(course => {
        return (
          <Link to={'/course/' + course.id}>
            <CourseSummary course={course} key={course.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default CourseList;