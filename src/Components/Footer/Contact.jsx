import React,{useState} from 'react'
import emailjs from "@emailjs/browser";
import { NavLink } from 'react-router';



function Contact(props) {

  return (
    <div>
      <div id="contact">
        <div className="container">
        <div className="col-md-12">
          <div className='row social'>
            <div><img src="/img/Logofull.png" alt="Company Logo" /></div>
            
            EduBrix Overseas Consultancy Private Limited (EduBrix). is a complete end-to-end solution for Global Careers. Our core activities deal with assisting and ensuring that students make the right choice when they decide to pursue education in overseas educational institutions tailoring career paths to suit individual profiles within the required parameters. Since 2008 we have sent hundreds of students to various countries like the USA, UK, Germany, Australia, Canada, New Zealand, Ireland, Poland, etc.  
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 ">
            <div className="contact-item">
              <h3>Links</h3>
              <NavLink to="/">
                Go Global
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="educational-loan">
                EdLoans
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="predeparture">
                Pre Departure
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="about">
                About Us
              </NavLink>
            </div>
            <div className="contact-item">
              <h3>Education</h3>
              <NavLink to="education_category~mba">
                MBA
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="education_category~post-graduate">
                Post Graduation
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="education_category~undergraduate">
                Undergraduation
              </NavLink>
            </div>
          </div>
        <div className="col-md-3 col-md-offset-1 ">
            <div className="contact-item">
              <h3>What's New</h3>
              <NavLink to="new_category~upcoming-batches">
                Upcoming Batches
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="new_category~news&update">
                News & Updates
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="new_category~blogs">
                Blogs
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="new_category~discount">
                Discounts
              </NavLink>
            </div>
            <div className="contact-item">
              <h3>Counselling</h3>
              <NavLink to="counselling_category~study-destination">
                Study Destination
              </NavLink>
            </div>
            <div className="contact-item">
              <NavLink to="counselling_category~stream-selection">
                Stream Selection
              </NavLink>
            </div>
          </div>
          
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Get In Touch</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                A2202, Grandness CHS, Shiv Vallabh Road, Ashokvan, Dahisar East, Mumbai 400068.
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +91 9930454686
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                edubrix.overseas@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <NavLink to="https://www.facebook.com/EdubrixOverseas" target="_blank">
                      <i className="emoji fa fa-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://x.com/EdubrixOverseas" target="_blank">
                      <i className="emoji fa fa-twitter"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.instagram.com/edubrix_overseas/" target="_blank">
                      <i className="emoji fa fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.youtube.com/channel/UCsZXacnJWNkCkPJkc2z9MUA" target="_blank">
                      <i className="emoji fa fa-youtube"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.linkedin.com/company/edubrix-overseas-consultancy/" target="_blank">
                      <i className="emoji fa fa-linkedin"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.google.com/maps/place/Edubrix+Overseas+Consultancy+Pvt+Ltd/@19.2429691,72.8651988,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1a0938dedb1:0x8408bc7c2006c485!8m2!3d19.2429691!4d72.8677737!16s%2Fg%2F11j2jcvn25?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                      <i className="emoji fa fa-map-marker" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} EduBrix | All Rights Reserved 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact