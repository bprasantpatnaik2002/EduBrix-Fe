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
                            <img 
                              src="https://tse3.mm.bing.net/th?id=OIP.VEm0V7-K-_BWB9d7ek5gyAHaHa&pid=Api&P=0&h=180" 
                              
                              alt="Google image link" 
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  ))}
            </div>
            <div className="review">
              <img src="https://tse2.mm.bing.net/th?id=OIP.wUXo3aTrQYT5Z4ezTHMQZwHaEs&pid=Api&P=0&h=180" alt="google rating" />
            </div>
          </div>
           
        </div>
      );
}

export default Testimonials