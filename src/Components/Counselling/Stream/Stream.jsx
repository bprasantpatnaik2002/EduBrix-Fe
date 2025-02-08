import React, { useState } from 'react';
import Traditional from './Traditional';
import Undergraduate from './Undergraduate';
import Postgraduate from './Postgraduate';
import NewAge from './NewAge';

function Stream() {
  const components = [<Undergraduate />, <Postgraduate />, <Traditional />, <NewAge />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  return (
    <div id='stream' className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Stream Selection</h2>
          <p>Discover Your Passion. Let Us Guide You to Your Dream Program Abroad.</p>
        </div>
      </div>
      
      <div className="carousel-container">
      <button onClick={prevSlide} className="prev-button">&#10094;</button>
        <div className="carousel-content">{components[currentIndex]}</div>
        <button onClick={nextSlide} className="next-button">&#10095;</button>
      </div>
      
    </div>
  );
}

export default Stream;
