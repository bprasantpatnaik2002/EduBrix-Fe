import React from 'react'
import { NavLink } from 'react-router'

function Header({ link }) {
  return (
    <header id="header">
      <div className="intro"
      
      style={{
        display: 'table',
        width: '100%',
        padding: 0,
        backgroundImage: `url(${link})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#e5e5e5',
        backgroundSize: 'cover',
      }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  We Don't Design Careers. We Design Lives
                  <span></span>
                </h1>
                <p>World's top universities. Limitless career opportunities. Unmatched student experience. Start your journey with us.</p>
                <NavLink
                  to="https://docs.google.com/forms/d/18ozM17bWEUY9y2G0JoQiAhvQSlE5Q5vtMxODglFCwl0/viewform?edit_requested=true"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </NavLink>{" "}
                <NavLink
                  to="/appointment-schedule&type=booking"
                  className=""
                >
                  <p>Book Your Appointment <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
                </NavLink>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header