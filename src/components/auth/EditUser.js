import React, { Component } from 'react';
import { english, german } from '../languages';
import { connect } from 'react-redux';
import { updateUser } from '../../store/thunks/authThunks';

class EditUser extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      city: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      zip: '',
      uid: '',
      courses: [],
      createdOn: ''
    }
  }

  componentDidMount() {
    const { user } = this.props;
    console.log(user);
    const {
      address,
      city,
      email,
      firstName,
      lastName,
      phone,
      zip,
      uid,
      courses,
      createdOn,
    } = user;
    this.setState({
      address,
      city,
      email,
      firstName,
      lastName,
      phone,
      zip,
      uid,
      courses,
      createdOn
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUser(this.state);
  }

  cancelChanges = () => {
    this.props.editUser()
  }

  render() {

    const lang = this.props.language === 'DE' ? german : english;

    return (
      <div className='auth-page'>
        <form 
          className='auth-form'
          onSubmit={this.handleSubmit}
        >
          <input
            className='auth-input'
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder={lang.firstName}
            />
          <input
            className='auth-input'
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder={lang.lastName}
            />
          <input
            className='auth-input'
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.handleChange}
            placeholder={lang.address}
            />
          <input
            className='auth-input'
            type='text'
            name='zip'
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder={lang.zip}
            />
          <input
            className='auth-input'
            type='text'
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
            placeholder={lang.city}
            />
          <input
            className='auth-input'
            type='text'
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder={lang.phone}
            />
          <input
            className='auth-input'
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder={lang.email}
            />
          <button 
            className='auth-button'
            id='save-changes-button'
            type='submit'
          >
            {lang.saveChanges}
          </button>
        </form>
        <button
          className='cancel-button'
          onClick={this.cancelChanges}
          alt={lang.cancel}
        >
        </button>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    language: state.language
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (details) => dispatch(updateUser(details))
})

export default connect(mapPropsToState, mapDispatchToProps)(EditUser);