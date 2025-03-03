import React from 'react'
import { useData } from '../ContextAPI/DataContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Testimonials() {
    const { reviews } = useData();
      return (
        <div id="testimonials">
          <div className="container">
            <div className="section-title text-center">
              <h2>What our clients say</h2>
            </div>
            <div className="row">
              {Array.isArray(reviews) &&
              reviews.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      <div className="testimonial">
                        
                        <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        </div>
                        
                        
                        <div className="google-image">
                        <div className="testimonial-meta"> - {d.name} </div>
                          <a href={d.link} target="_blank">
                          <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh",
                                backgroundColor: "#f1f1f1",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "50px",
                                  background:
                                    "linear-gradient(90deg, #4285F4 25%, #EA4335 50%, #FBBC05 75%, #34A853 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  display: "inline-block",
                                }}
                              >
                                <FontAwesomeIcon icon={faGoogle} />
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  ))}
            </div>
            {/* <div className="review">
              <img src="https://tse2.mm.bing.net/th?id=OIP.wUXo3aTrQYT5Z4ezTHMQZwHaEs&pid=Api&P=0&h=180" alt="google rating" />
            </div> */}
          </div>
           
        </div>
      );
}

export default Testimonials