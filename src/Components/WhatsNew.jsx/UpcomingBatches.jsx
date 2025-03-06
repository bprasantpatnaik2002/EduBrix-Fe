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

function UpcomingBatches() {
    // const batches = [
    //     {
    //         _id: "1",
    //         course: "Full Stack Web Development",
    //         desc: "Learn MERN stack from scratch.",
    //         date: "March 10, 2025",
    //         time: "6:00 PM IST",
    //         duration: "3 Months",
    //         link: "xyz123",
    //         meet: "https://meet.google.com/fwd123"  // Added Meet link
    //     },
    //     {
    //         _id: "2",
    //         course: "Data Science Bootcamp",
    //         desc: "Master Machine Learning and AI.",
    //         date: "April 5, 2025",
    //         time: "7:30 PM IST",
    //         duration: "4 Months",
    //         link: "abc456",
    //         meet: ""  // No meet link for this batch
    //     },
    //     {
    //         _id: "3",
    //         course: "UI/UX Design Fundamentals",
    //         desc: "Become a UI/UX expert with hands-on projects.",
    //         date: "May 1, 2025",
    //         time: "5:00 PM IST",
    //         duration: "2 Months",
    //         link: "def789",
    //         meet: "https://meet.google.com/uiux456"
    //     },
    //     {
    //         _id: "4",
    //         course: "Cybersecurity Essentials",
    //         desc: "Learn the fundamentals of cybersecurity.",
    //         date: "June 10, 2025",
    //         time: "4:00 PM IST",
    //         duration: "3 Months",
    //         link: "ghi101",
    //         meet: ""
    //     }
    // ];

    const { batches }=useData();

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
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Upcoming Batches</h2>
                    <p>Enroll in our upcoming batches and learn from the best in the industry.</p>
                </div>
            
                <Slider {...settings} className='batch-carousel'>
                    {batches.map((batch) => (
                        <div key={batch._id} className='batch-card'>
                            <div className="batch-info">
                                <h3>{batch.course}</h3>
                                <p>{batch.desc}</p>
                                <p><strong>Date:</strong> {batch.date}</p>
                                <p><strong>Time:</strong> {batch.time}</p>
                                <p><strong>Duration:</strong> {batch.duration}</p>

                                {/* Conditionally rendering Meet button */}
                                <div className='buttons'>
                                {batch.meet && (
                                    <div className="meet-link">
                                        <a href={batch.meet} target="_blank" rel="noopener noreferrer">
                                            Join Meeting <i class="fa fa-video-camera" aria-hidden="true"/>
                                        </a>
                                    </div>
                                )}

                                {/* Read More Button */}
                                <div className='read-more'>
                                    <a href={`https://drive.google.com/file/d/${batch.link}/view`} target="_blank" rel="noopener noreferrer">
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

export default UpcomingBatches;
