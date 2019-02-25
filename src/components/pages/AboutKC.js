import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const AboutKC = (props) => {

  console.log(props.content)
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  content: state.firestore.ordered.about_kc
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'about_kc', limit: 1, orderBy: ['createdAt', 'desc'] }
  ])
)(AboutKC);