import React from 'react'
import { NavLink } from 'react-router';
import { useData } from '../ContextAPI/DataContext';

function Discounts() {
    const { coupons } = useData();

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Coupons</h2>
                    <p>Unlock Exclusive Savings with Our Special Coupons!</p>
                </div>
            </div>
            <div className='batches'>
                {Array.isArray(coupons) &&
                   coupons.map((coupon) => (
                        <div className='batch' key={coupon.coupon}>
                            <NavLink to={`https://drive.google.com/file/d/${coupon.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={coupon.img} alt={coupon.coupon} />
                                    <div className="overlay">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{coupon.coupon}</h3>
                                <a href={`https://drive.google.com/file/d/${coupon.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{coupon.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Discounts