import React from 'react'

function About_us() {

    const Why= [
        "1-2-1 Counselling",
        "Pre Requisite Test Preparation",
        "University & Course Selection",
        "University & Course Application",
        "Financial Aid"
      ]
    
      const Why2= [
        "Visa Assistance",
        "Pre Departure Briefing",
        "Flight Booking & First Pickup Assistance",
        "Accomodation Assistance",
        "Forex or Education Assistance"
      ]
      
    return (
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                {" "}
                <img src="img/about/about.jpg" className="img-responsive" alt="" />
                {" "}
                <div>
                  <h1>Experience</h1>
    
                  <h2>{new Date().getFullYear()-2008} + Years</h2>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>About Us</h2>
                  <p>
                  <span className="firstPart">Edu</span><span className="secondPart">Brix</span> Overseas Consultancy Private Limited (<span className="firstPart">Edu</span><span className="secondPart">Brix</span>). is a complete end-to-end solution for Global Careers. Our core activities deal with assisting and ensuring that students make the right choice when they decide to pursue education in overseas educational institutions tailoring career paths to suit individual profiles within the required parameters. Since 2008 we have sent hundreds of students to various countries like the USA, UK, Germany, Australia, Canada, New Zealand, Ireland, Poland, etc. We ensure that you get the most hassle-free experience in making the right decision of studying abroad. Most of our counselors have studied, worked, and extensively traveled abroad, each having an average work experience in this industry of {new Date().getFullYear()-2008} years. They are therefore the most reliable, knowledgeable, and experienced in this field of guiding you through this process while always keeping in mind your preferences.
                  </p>
                  <h3>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {Why2.map((d, i) => (
                              <li key={`${d}-${i}`}> {d}</li>
                            ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default About_us