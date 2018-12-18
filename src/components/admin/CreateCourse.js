import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCourse } from '../../store/actions/courseActions';

class CreateCourse extends Component {
  constructor() {
    super()
    this.state = {
      day: '',
      month: '',
      year: '',
      time: '',
      title: '',
      description: ''
    }
  }

  clearForm = () => {
    this.setState({
      day: '',
      month: '',
      year: '',
      time: '',
      title: '',
      description: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state);
    this.clearForm()
  }

  render() {

    const {
      day,
      month,
      year,
      time,
      title,
      description,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            name='day'
            value={day}
            onChange={this.handleChange}
            placeholder='Day'
          />
          <input 
            name='month'
            value={month}
            onChange={this.handleChange}
            placeholder='Month'
          />
          <input 
            name='year'
            value={year}
            onChange={this.handleChange}
            placeholder='Year'
          />
          <input 
            name='time'
            value={time}
            onChange={this.handleChange}
            placeholder='Time'
          />
          <input 
            name='title'
            value={title}
            onChange={this.handleChange}
            placeholder='Title'
          />
          <textarea 
            name='description'
            value={description}
            onChange={this.handleChange}
            placeholder='In this class you will learn about...'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCourse: course => dispatch(createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse);