import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Dummy Coupon Data
const dummyCoupons = [
    { _id: "1", code: "SUMMER20", discountType: "percentage", discountValue: 20, validUntil: "2025-06-30", isActive: true },
    { _id: "2", code: "WELCOME100", discountType: "fixed", discountValue: 100, validUntil: "2025-07-15", isActive: true },
    { _id: "3", code: "FESTIVE50", discountType: "percentage", discountValue: 50, validUntil: "2025-12-31", isActive: true },
    { _id: "4", code: "NEWUSER10", discountType: "percentage", discountValue: 10, validUntil: "2025-08-10", isActive: true },
];

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

function Coupons() {
    const coupons = dummyCoupons; // Replace with API data if needed

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } }
        ]
    };

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Exclusive Coupons</h2>
                    <p>Unlock savings with our special discount codes!</p>
                </div>

                <Slider {...settings} className='batch-carousel'>
                    {coupons.map((coupon) => (
                        <div key={coupon._id} className='batch-card coupon-bg'>
                            <div className="batch-info">
                                <h3>Coupon Code: <span className="coupon-code">{coupon.code}</span></h3>
                                <p>
                                    <strong>Discount:</strong> {coupon.discountType === "percentage" 
                                        ? `${coupon.discountValue}% OFF` 
                                        : `₹${coupon.discountValue} OFF`}
                                </p>
                                <p><strong>Valid Until:</strong> {coupon.validUntil}</p>

                                <div className="copy-code">
                                    <button onClick={() => navigator.clipboard.writeText(coupon.code)}>
                                        Copy Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Coupons;
