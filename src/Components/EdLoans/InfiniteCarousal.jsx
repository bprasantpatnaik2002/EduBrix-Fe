import React from 'react'

function InfiniteCarousal({pictures}) {
    return (
        <div id="InfiniteCarousal" className="carousel-container">
          <div className="carousel-track">
            {pictures.map((img, index) => (
              <div className="carousel-item" key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
            {/* Duplicate images for smooth infinite effect */}
            
          </div>
        </div>
      );
}

export default InfiniteCarousal