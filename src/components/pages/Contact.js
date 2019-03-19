import React from 'react';
import { german, english } from '../languages';
import { connect } from 'react-redux';

const Contact = (props) => {

  const lang = props.language === 'DE' ? german : english;

  return (
    <div className='content-wrapper'>
      <div className='paragraph-wrapper'>
        <h3>{lang.address}</h3>
        <div className='address-wrapper'>
          <p>KC Hill</p>
          <p>Kirchgasse 1</p>
          <p>3865 Meiringen</p>
        </div>
        <div className='phone-wrapper'>
          <p>{lang.phone}: 
            <a href="tel:+41795873842">+41 (0)79 587 38 43</a>
          </p>
        </div>
        <div className='email-wrapper'>
          <p>Email: 
            <a href="mailto:kc.hill@positivedisciplineschweiz.ch">kc.hill@positivedisciplineschweiz.ch</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(mapStateToProps)(Contact);