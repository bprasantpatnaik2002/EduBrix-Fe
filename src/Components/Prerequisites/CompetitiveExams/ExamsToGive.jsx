import React from 'react'
import { NavLink} from 'react-router'

function ExamsToGive() {


    return (
          <div id='prereq' className="container">
            <div>
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2>Competitive Exams</h2>
                  <p>With our unwavering support and expert guidance, you’ll gain the skills, confidence, and knowledge to excel in competitive exams and achieve your highest aspirations.</p>
                  <div className="row">
                      <NavLink to="/prereq/competitive/gre">GRE</NavLink>
                      <NavLink to="/prereq/competitive/gmat">GMAT</NavLink>
                      <NavLink to="/prereq/competitive/sat">SAT</NavLink>
                      <NavLink to="/prereq/competitive/toefl">TOEFL</NavLink>
                      <NavLink to="/prereq/competitive/ielts">IELTS</NavLink>
                      <NavLink to="/prereq/competitive/pte">PTE</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
}

export default ExamsToGive