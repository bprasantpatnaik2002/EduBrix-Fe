import React from 'react';
import { NavLink } from 'react-router';
import { useData } from '../ContextAPI/DataContext';

function UpcomingBatches() {
    const { batches } = useData();

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Upcoming Batches</h2>
                    <p>Enroll in our upcoming batches and learn from the best in the industry.</p>
                </div>
            </div>
            <div className='batches'>
                {Array.isArray(batches) &&
                    batches.map((batch) => (
                        <div className='batch' key={batch.course}>
                            <NavLink to={`https://drive.google.com/file/d/${batch.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={batch.img} alt={batch.course} />
                                    <div className="overlay">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{batch.course}</h3>
                                <a href={`https://drive.google.com/file/d/${batch.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{batch.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UpcomingBatches;
