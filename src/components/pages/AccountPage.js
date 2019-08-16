import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import UserPage from '../auth/UserPage';

class AccountPage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render() {

    const { user } = this.props;
    console.log(user)
    
    return (
      <div>
        {
          user.firstName ?
            <UserPage 
              user={user}
            /> :
            <div></div>
        }
      </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    user: state.firebase.profile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'courses' }
  ])
)(AccountPage);