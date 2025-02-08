import React from 'react';

function Steps() {
  return (
    <div id='services' className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Application Lifecycle</h2>
          <p>
          Navigating the Evolution of an Application: From Ideation to Reality 🚀
          </p>
        </div>
        <div className="video-wrapper">
          <video 
            src="/video/steps.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="responsive-video"
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
