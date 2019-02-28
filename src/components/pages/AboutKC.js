import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const AboutKC = (props) => {

  let contentDe = props.contentDe ? 
    props.contentDe[0].content.map((par, index) => {
      console.log(par)
      return (
        <p key={index}>{par}</p>
      )
    }) : 
    null;

    let contentEn = props.contentEn ? 
    props.contentEn[0].content.map((par, index) => {
      return (
        <p key={index}>{par}</p>
      )
    }) :
    null;

    let content = props.language === 'DE' ? contentDe : contentEn;


  return (
    <div>
      {content}
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language,
  contentEn: state.firestore.ordered.about_kc_english,
  contentDe: state.firestore.ordered.about_kc_german
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { 
      collection: 'about_kc_english', 
      limit: 1, 
      orderBy: ['createdAt', 'desc'] 
    },
    {
      collection: 'about_kc_german',
      limit: 1,
      orderBy: ['createdAt', 'desc']
    }
  ])
)(AboutKC);