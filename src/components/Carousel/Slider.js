import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const slideImages = [
  '/alfred.jpg',
  '/jane.jpg',
  '/lynn.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-slide">
            <div style={{
              'backgroundImage': `url(${slideImages[0]})`,
              'height': 'calc(100vh - 70px)',
              'backgroundSize': '150%',
              'backgroundPositionX': '70%',
              'backgroundRepeat': 'no-repeat'
              }}>
              <span>Alfred Adler</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={
              {
                'backgroundImage': `url(${slideImages[1]})`,
                'height': 'calc(100vh - 70px)',
                'backgroundSize': 'cover',
                'backgroundPositionX': '30%'
              }}>
              <span>Dr. Jane Nelsen</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={
              {
                'backgroundImage': `url(${slideImages[2]})`,
                'height': 'calc(100vh - 70px)',
                'backgroundSize': 'cover',
                'backgroundPositionX': '80%'
                }
            }>
              <span>Lynn Lott</span>
            </div>
          </div>
        </Fade>
      </div>
    )
}

export default Slideshow;