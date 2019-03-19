import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { german, english } from '../languages';

const AboutPD = (props) => {

  let contentDe = props.contentDe ? 
    props.contentDe[0].content.map((par, index) => {
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

    const lang = props.language === 'DE' ? german : english;

  return (
    <div className='content-wrapper'>
      <div className='paragraph-wrapper'>
        {content}
      </div>
      <div className='pd-links'>
        <h3>{lang.PDlinks}</h3>
        <ul>
          <li>
            <a 
              target="_blank" 
              href='https://www.positivediscipline.org/'
            >
              Positive Discipline Association
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              href='https://www.positivediscipline.com/'
            >
              {lang.PDbooks}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language,
  contentEn: state.firestore.ordered.about_pd_english,
  contentDe: state.firestore.ordered.about_pd_german
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { 
      collection: 'about_pd_english', 
      limit: 1, 
      orderBy: ['createdAt', 'desc'] 
    },
    {
      collection: 'about_pd_german',
      limit: 1,
      orderBy: ['createdAt', 'desc']
    }
  ])
)(AboutPD);