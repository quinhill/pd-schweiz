import React from 'react';
import { german, english } from '../languages';
import { connect } from 'react-redux';

const Contact = (props) => {

  const lang = props.language === 'DE' ? german : english;

  return (
    <div className='contact-page'>
      <h3 className='address-title'>{lang.address}</h3>
      <div className='address-wrapper'>
        <p className='contact-p'>KC Hill</p>
        <p className='contact-p'>Kirchgasse 1</p>
        <p className='contact-p'>3865 Meiringen</p>
      </div>
      <div className='address-wrapper'>
        <p>{lang.phone}: 
          <span className='spacing'></span>
          <a 
            href="tel:+41795873842"
          >
            +41 (0)79 587 38 43
          </a>
        </p>
      </div>
      <div className='address-wrapper'>
        <p>Email: 
          <span className='spacing'></span>
          <a 
            href="mailto:kc.hill@positivedisciplineschweiz.ch"
          >
              kc.hill@positivedisciplineschweiz.ch
          </a>
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(mapStateToProps)(Contact);