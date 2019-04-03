import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const AboutKC = (props) => {

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


  return (
    <div className='content-wrapper'>
      <div id='kc-image'></div>
      <div className='paragraph-wrapper'>
        <div className='text-container'>
          {content}
          <p>
            In 2011 haben wir die Ecole d’Humanité verlassen und sind nach Meiringen gezogen. Dann haben wir die Zertifizierung als Trainer in der Positiven Disziplin erworben. In meinem Werdegang habe ich auch Weiterbildungen gemacht und Erfahrung gesammelt:
          </p>
          <ul>
            <li>in der „Gewaltfreien Kommunikation“ (GFK) von Marshall Rosenberg</li>
            <li>in der „Themenzentrierte Interaktion“ (TZI) von Ruth Cohn</li>
            <li> über ADHS ( Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung ) und ASS (Autismusspektrumstörung)</li>
            <li>über Mobbing.</li>
          </ul>
        </div>
      </div>
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