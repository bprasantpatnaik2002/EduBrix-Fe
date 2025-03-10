import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useData } from '../ContextAPI/DataContext';

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
    <button className="slick-prev custom-arrow" onClick={onClick}>
        <FaChevronLeft />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="slick-next custom-arrow" onClick={onClick}>
        <FaChevronRight />
    </button>
);

function Blogs() {
    const { blogs } = useData();
    // const blogs=[
    //     {
    //         "_id": "1a2b3c4d5e6f7g8h9i0j",
    //         "title": "The Future of Web Development: Trends to Watch",
    //         "description": "Explore the latest trends in web development, including AI-powered coding, low-code platforms, and the rise of Web3 technologies.",
    //         "author": "John Doe",
    //         "publishedAt": "2024-03-01T12:00:00Z",
    //         "link": "https://example.com/blogs/web-development-trends"
    //     },
    //     {
    //         "_id": "2b3c4d5e6f7g8h9i0j1a",
    //         "title": "Mastering JavaScript: Tips and Tricks",
    //         "description": "Improve your JavaScript skills with these advanced tips, covering performance optimization, async programming, and best practices.",
    //         "author": "Jane Smith",
    //         "publishedAt": "2024-02-25T15:30:00Z",
    //         "link": "https://example.com/blogs/mastering-javascript"
    //     },
    //     {
    //         "_id": "3c4d5e6f7g8h9i0j1a2b",
    //         "title": "Understanding React Server Components",
    //         "description": "A deep dive into React Server Components and how they can improve performance and scalability in modern web applications.",
    //         "author": "Alex Johnson",
    //         "publishedAt": "2024-02-15T10:45:00Z",
    //         "link": "https://example.com/blogs/react-server-components"
    //     },
    //     {
    //         "_id": "4d5e6f7g8h9i0j1a2b3c",
    //         "title": "The Role of UX/UI in Modern Web Applications",
    //         "description": "Learn how effective UX/UI design can enhance user engagement and satisfaction in web applications.",
    //         "author": "Emily White",
    //         "publishedAt": "2024-02-05T18:20:00Z",
    //         "link": "https://example.com/blogs/ux-ui-design"
    //     },
    //     {
    //         "_id": "5e6f7g8h9i0j1a2b3c4d",
    //         "title": "Deploying Full-Stack Applications: Best Practices",
    //         "description": "A guide to deploying full-stack web applications using modern tools like Docker, Kubernetes, and CI/CD pipelines.",
    //         "author": "Michael Brown",
    //         "publishedAt": "2024-01-30T09:00:00Z",
    //         "link": "https://example.com/blogs/fullstack-deployment"
    //     }
    // ]
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides by default
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true, // Ensure arrows are visible
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true, // Fix disappearing arrows
                    infinite: true, // Ensure slides don't break
                    dots: true, 
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // Hide arrows for better mobile UX
                    dots: true,
                }
            }
        ]
    };

    return (

        <div id='whatsnew' className="text-center">
        <div className="container">
            <div className="section-title">
                <h2>Blogs</h2>
                <p>Insights & Ideas: Explore Our Latest Blogs.</p>
            </div>

            <Slider {...settings} className='whatsnew-carousal'>
                {blogs.map((blog) => (
                    <div key={blog._id} className='whatsnew-card'>
                        <div className="whatsnew-info">
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <p><strong><i className="fa fa-calendar" aria-hidden="true"/> Date:</strong> {blog.publishedAt}</p>
                            <p><strong><i className="fa fa-clock-o" aria-hidden="true" /> By:</strong> {blog.author}</p>

                            {/* Conditionally rendering Meet button */}
                            <div className='buttons'>
                            
                            {/* Read More Button */}
                            <div className='read-more'>
                                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
}

export default Blogs;
