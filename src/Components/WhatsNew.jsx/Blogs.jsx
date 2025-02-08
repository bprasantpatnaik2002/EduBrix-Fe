import React from 'react'
import { NavLink } from 'react-router';
import { useData } from '../ContextAPI/DataContext';

function Blogs() {
    const { blogs } = useData();

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Blogs</h2>
                    <p>Insights & Ideas: Explore Our Latest Blogs.</p>
                </div>
            </div>
            <div className='batches'>
                {Array.isArray(blogs) &&
                    blogs.map((blog) => (
                        <div className='batch' key={blog.blog}>
                            <NavLink to={`https://drive.google.com/file/d/${blog.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={blog.img} alt={blogs.blog} />
                                    <div className="overlay">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{blog.blog}</h3>
                                <a href={`https://drive.google.com/file/d/${blog.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{blog.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Blogs