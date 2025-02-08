import React from 'react'

function Videos({Heading, subhead,title,testimonials}) {
    return (
        <div id="testimonials-Video">
          <div className="container">
            <div className="section-title text-center">
              <h2>{Heading}</h2>
              <h1>{subhead}</h1>
              <p>{title}</p>
            </div>
            <div className="row">
              {Array.isArray(testimonials) &&
              testimonials.map((d, i) => (
                <div className="col-md-4" key={i+d.link}>
                  <div className="testimonial">
                    <div className="responsive-iframe">
                        <iframe 
                            width="560" 
                            height="315" 
                            src={`https://drive.google.com/file/d/${d.link}/preview`}
                            title="Video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                        </div>
                  </div>
                </div>
              ))}
              
            </div>
            <div className='custom-button'>
              <a
                  href="https://www.youtube.com/@edubrixoverseas"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  For More
                </a>{" "}
              </div>
          </div>
        </div>
      )
}

export default Videos