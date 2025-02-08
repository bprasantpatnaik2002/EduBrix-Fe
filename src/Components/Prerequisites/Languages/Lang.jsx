import React from 'react'
import { NavLink, useLocation } from 'react-router'

function Lang() {

  const location = useLocation();
    
  const isActiveForFrench = location.pathname.startsWith('/prereq/languages/french');
  const isActiveForGerman = location.pathname.startsWith('/prereq/languages/german');

    return (
      <>
        <div id='prereq' className="container">
            <div>
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2>Languages</h2>
                  <p>With our unwavering support and expertly designed programs, you'll not only master new languages but also discover the confidence to express yourself and thrive in a world full of possibilities.</p>
                  <div className="row">
                      <NavLink to="/prereq/languages/french" className={isActiveForFrench ? 'active' : ''}>French</NavLink>
                      <NavLink to="/prereq/languages/german" className={isActiveForGerman ? 'active' : ''}>German</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
      )
}

export default Lang