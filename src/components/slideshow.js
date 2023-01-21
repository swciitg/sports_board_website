import { useState,useEffect,useRef,useReducer } from 'react';
import React from 'react';
import img1 from '../images/hm.png'
const colors = [img1,img1];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        
        {colors.map((backgroundImage, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundImage}
           />
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className="slideshowDot"></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;