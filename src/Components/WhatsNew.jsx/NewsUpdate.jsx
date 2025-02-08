import React from 'react'
import { NavLink } from 'react-router';
import { useData } from '../ContextAPI/DataContext';

function NewsUpdate() {
    const { newsUpdate } = useData();

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>News & Update</h2>
                    <p>Stay Informed, Stay Ahead: Latest News & Updates!</p>
                </div>
            </div>
            <div className='batches'>
                {Array.isArray(newsUpdate) &&
                    newsUpdate.map((news)=>(
                        <div className='batch' key={news.news}>
                            <NavLink to={`https://drive.google.com/file/d/${news.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={news.img} alt={news.news} />
                                    <div className="overlay">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{news.news}</h3>
                                <a href={`https://drive.google.com/file/d/${news.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{news.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NewsUpdate