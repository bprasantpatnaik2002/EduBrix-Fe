import React, { useEffect } from 'react'
import { NavLink } from 'react-router';
import { useData } from '../ContextAPI/DataContext';

function Navbar() {
  
  const API_BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;

  const {setFall,setParent,setServices,setBlogs,setCoupons,setNewsUpdate,setBatches,setReviews}=useData();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const [fallRes, parentRes, servicesRes, blogsRes, couponsRes, newsRes, batchesRes, reviewsRes] = await Promise.all([
                fetch(`${API_BASE_URL}/fall`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/parent`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/services`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/blogs`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/coupons`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/newsUpdates`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/batches`, { credentials: 'include' }).then(res => res.json()),
                fetch(`${API_BASE_URL}/reviews`, { credentials: 'include' }).then(res => res.json()),
            ]);

            setFall(fallRes);
            setParent(parentRes);
            setServices(servicesRes);
            setBlogs(blogsRes);
            setCoupons(couponsRes);
            setNewsUpdate(newsRes);
            setBatches(batchesRes);
            setReviews(reviewsRes);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className='logo'>
                <NavLink className="navbar-brand page-scroll" to="/">
                  <img src="/img/Logofull.png" alt="Logo image" srcSet="" />
                </NavLink>{" "}
              </div>
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
            </div>
    
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/" className="page-scroll">
                    Go Global
                  </NavLink>
                </li>

                
                <li className="dropdown">
                  <NavLink className="page-scroll">
                    What's New <span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/new_category-upcoming-batches">Upcoming Batches</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new_category-news&update">News & Update</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new_category-blogs">Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new_category-discount">Discount</NavLink>
                    </li>
                  </ul>
                </li>


                <li className="dropdown">
                  <NavLink className="page-scroll">
                    Education <span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/education_category-mba">MBA</NavLink>
                    </li>
                    <li>
                      <NavLink to="/education_category-post-graduate">Post Graduate</NavLink>
                    </li>
                    <li>
                      <NavLink to="/education_category-undergraduate">Undergraduate</NavLink>
                    </li>
                  </ul>
                </li>


                <li className="dropdown">
                  <NavLink className="page-scroll">
                    Counselling <span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/counselling_category-study-destination">Study Destination</NavLink>
                    </li>
                    <li>
                      <NavLink to="/counselling_category-stream-selection">Stream Selection</NavLink>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <NavLink  className="page-scroll">
                    Pre-Requisites <span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/prereq_category-competitive&exam-gre">Competitive Exams</NavLink>
                    </li>
                    <li>
                      <NavLink to="/prereq_category-languages&exam-french">Languages</NavLink>
                    </li>
                  </ul>
                </li>
                

                <li>
                  <NavLink to="/predeparture" className="page-scroll">
                    Pre-Departure
                  </NavLink>
                </li>


                <li>
                  <NavLink to="/educational-loan" className="page-scroll">
                    EdLoans
                  </NavLink>
                </li>
                
                <li className="dropdown">
                  <NavLink  className="page-scroll">
                    More <span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                    <NavLink to="/about" className="page-scroll">About us</NavLink>
                    </li>
                    <li>
                    <NavLink to="/login" className="page-scroll">Admin login <span><i class="fa fa-sign-in" aria-hidden="true"></i></span></NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      );
}

export default Navbar