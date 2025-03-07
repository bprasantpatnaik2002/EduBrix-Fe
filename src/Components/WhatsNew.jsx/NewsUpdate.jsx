import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useData } from "../ContextAPI/DataContext";


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

function NewsUpdate() {
    const { newsUpdates } = useData();

    // const newsUpdates=[
    //     {
    //         "_id": "1",
    //         "title": "Tech Conference 2025 Announced",
    //         "shortDescription": "The biggest tech conference of the year will be held in July 2025.",
    //         "author": "John Doe",
    //         "link": "https://example.com/tech-conference-2025",
    //         "publishedAt": "2025-03-10"
    //     },
    //     {
    //         "_id": "2",
    //         "title": "New AI Model Revolutionizes Healthcare",
    //         "shortDescription": "A cutting-edge AI model is transforming medical diagnostics and patient care.",
    //         "author": "Jane Smith",
    //         "link": "https://example.com/ai-healthcare",
    //         "publishedAt": "2025-03-08"
    //     },
    //     {
    //         "_id": "3",
    //         "title": "Stock Market Hits Record High",
    //         "shortDescription": "The stock market sees an unprecedented rise, boosting investor confidence.",
    //         "author": "Michael Johnson",
    //         "link": "https://example.com/stock-market-record",
    //         "publishedAt": "2025-03-05"
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
        <div id="batches" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Latest News & Updates</h2>
                    <p>Stay updated with the latest news and announcements.</p>
                </div>

                <Slider {...settings} className="batch-carousel">
                    {Array.isArray(newsUpdates) && newsUpdates.length > 0 ? (
                        newsUpdates.map((news) => (
                            <div key={news._id} className="batch-card">
                                <div className="batch-info">
                                    <h3>{news.title}</h3>
                                    <p>{news.shortDescription}</p>
                                    <p><i className="fa fa-user" aria-hidden="true"/> <strong>Author:</strong> {news.author}</p>
                                    <p><i className="fa fa-calendar" aria-hidden="true" /> <strong>Published on:</strong> {news.publishedAt}</p>

                                    {/* Read More Button */}
                                    {news.link && (
                                        <div className="read-more">
                                            <NavLink to={news.link} target="_blank" rel="noopener noreferrer">
                                                Read More
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No news updates available.</p>
                    )}
                </Slider>
            </div>
        </div>
    );
}

export default NewsUpdate;
