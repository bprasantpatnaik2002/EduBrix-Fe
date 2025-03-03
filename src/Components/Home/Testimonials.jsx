import React from 'react'
import { useData } from '../ContextAPI/DataContext';

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
                          <div class="google-g">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google G" /> 
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