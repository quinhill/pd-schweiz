import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const AboutPD = (props) => {

  console.log(props.content)
  
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  content: state.firestore.ordered.about_pd
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'about_pd', limit: 1, orderBy: ['createdAt', 'desc'] }
  ])
)(AboutPD);