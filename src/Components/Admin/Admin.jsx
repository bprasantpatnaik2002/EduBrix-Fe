import React from 'react'
import { useState } from "react";
import { useData } from "../ContextAPI/DataContext";

function Admin() {
    const { fall, parent, addFallLink, removeFallLink, addParentLink, removeParentLink, services, addService, removeService, updateService, addBlog, removeBlog, blogs, addCoupon, removeCoupon, coupons, addNewsUpdate, removeNewsUpdate, newsUpdate, addBatch, removeBatch, batches, addReview, removeReview, reviews } = useData();

    const [newFallLink, setNewFallLink] = useState("");

    const [newParentLink, setNewParentLink] = useState("");

    const [newService, setNewService] = useState({ icon: "", name: "", text: "", link: "" });
    const [editIndex, setEditIndex] = useState(null);

    const [newBlog, setNewBlog] = useState({ blog: "", date: "", img: "", link: "" });

    const [newCoupon, setNewCoupon] = useState({
        code: "",
        discountType: "percentage", // Default value
        discountValue: "",
        validUntil: "",
        isActive: true, // Default active
    });

    const [newNewsUpdate, setNewNewsUpdate] = useState({
        title: "",
        shortDescription: "",
        author: "",
        link: "",
        publishedAt: ""
    });

    const [newBatch, setNewBatch] = useState({
        course: "",
        desc: "",
        date: "",
        time: "",
        duration: "",
        meet: "",
        link: ""
    });

    const [newReview, setNewReview] = useState({ name: "", text: "", link: "" });


    return (
        <div id='admin' className="container">
            <div className="card">
                <h1>Manage Fall Links</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter new Fall Google drive File link"
                        value={newFallLink}
                        onChange={(e) => setNewFallLink(e.target.value)}
                    />
                    <button onClick={() => { addFallLink(newFallLink); setNewFallLink(""); }}>Add Fall Link</button>
                </div>
                <div className="button-container">
                    <ul>
                        {Array.isArray(fall) ? (
                            fall.map((item, index) => (
                                <li key={item._id}>
                                    <a href={`https://drive.google.com/uc?id=${item.link}`} target="_blank" rel="noopener noreferrer">
                                        {item.link}
                                    </a>
                                    <button onClick={() => removeFallLink(item._id)}>Remove</button>
                                </li>
                            ))
                        ) : (
                            <p>No fall links available</p>
                        )}
                    </ul>
                </div>

            </div>

            <div className="card">
                <h1>Manage Parent Links</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter new Parent Google drive File link"
                        value={newParentLink}
                        onChange={(e) => setNewParentLink(e.target.value)}
                    />
                    <button onClick={() => { addParentLink(newParentLink); setNewParentLink(""); }}>Add Parent Link</button>
                </div>
                <div className="button-container">

                    <ul>
                        {Array.isArray(parent) ? (
                            parent.map((item, index) => (
                                <li key={item._id}>
                                    <a href={`https://drive.google.com/uc?id=${item.link}`} target="_blank" rel="noopener noreferrer">
                                        {item.link}
                                    </a>
                                    <button onClick={() => removeParentLink(item._id)}>Remove</button>
                                </li>
                            ))
                        ) : (<p>No parent links available</p>)}
                    </ul>
                </div>

            </div>

            <div className="card">
                <h1>Manage Services</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Icon Class"
                        value={newService.icon}
                        onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Service Name"
                        value={newService.name}
                        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    />
                    <textarea
                        placeholder="Service Description"
                        value={newService.text}
                        onChange={(e) => setNewService({ ...newService, text: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Service Google docs file id"
                        value={newService.link}
                        onChange={(e) => setNewService({ ...newService, link: e.target.value })}
                    />
                </div>
                <div >
                    {editIndex === null ? (
                        <button onClick={() => { addService(newService); setNewService({ icon: "", name: "", text: "", link: "" }); }}>
                            Add Service
                        </button>
                    ) : (
                        <button onClick={() => { updateService(editIndex, newService); setEditIndex(null); setNewService({ icon: "", name: "", text: "", link: "" }); }}>
                            Update Service
                        </button>
                    )}

                    <ul>
                        {Array.isArray(services) ? (
                            services.map((service, index) => (
                                <li key={service._id}>
                                    <i className={service.icon}></i> {service.name}: {service.text}
                                    <button onClick={() => removeService(service._id)}>Remove</button>
                                </li>
                            ))) : (<p>No services available</p>)}
                    </ul>
                </div>

            </div>

            <div className="card">
                <h1>Manage Batches</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Course Name"
                        value={newBatch.course}
                        onChange={(e) => setNewBatch({ ...newBatch, course: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newBatch.desc}
                        onChange={(e) => setNewBatch({ ...newBatch, desc: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Start Date (e.g., March 10, 2025)"
                        value={newBatch.date}
                        onChange={(e) => setNewBatch({ ...newBatch, date: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Time (e.g., 6:00 PM IST)"
                        value={newBatch.time}
                        onChange={(e) => setNewBatch({ ...newBatch, time: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Duration (e.g., 3 Months)"
                        value={newBatch.duration}
                        onChange={(e) => setNewBatch({ ...newBatch, duration: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Batch Google Meet Link"
                        value={newBatch.meet}
                        onChange={(e) => setNewBatch({ ...newBatch, meet: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Batch Google Docs File ID"
                        value={newBatch.link}
                        onChange={(e) => setNewBatch({ ...newBatch, link: e.target.value })}
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            addBatch(newBatch);
                            setNewBatch({
                                course: "",
                                desc: "",
                                date: "",
                                time: "",
                                duration: "",
                                img: "",
                                link: ""
                            });
                        }}
                    >
                        Add Batch
                    </button>
                    <ul>
                        {Array.isArray(batches) && batches.length > 0 ? (
                            batches.map((batch) => (
                                <li key={batch._id}>
                                    <strong>{batch.course}</strong> - {batch.date} ({batch.duration})
                                    <button onClick={() => removeBatch(batch._id)}>Remove</button>
                                </li>
                            ))
                        ) : (
                            <p>No batches available</p>
                        )}
                    </ul>
                </div>
            </div>

            <div className="card">
                <h1>Manage Coupons</h1>

                {/* Coupon Input Form */}
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        value={newCoupon.code}
                        onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                    />

                    <select
                        value={newCoupon.discountType}
                        onChange={(e) => setNewCoupon({ ...newCoupon, discountType: e.target.value })}
                    >
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Discount Value"
                        value={newCoupon.discountValue}
                        onChange={(e) => setNewCoupon({ ...newCoupon, discountValue: e.target.value })}
                    />

                    <input
                        type="date"
                        placeholder="Valid Until (YYYY-MM-DD)"
                        value={newCoupon.validUntil}
                        onChange={(e) => {
                            const selectedDate = e.target.value.split("T")[0]; // Ensures only YYYY-MM-DD
                            setNewCoupon({
                                ...newCoupon,
                                validUntil: selectedDate,
                            });
                        }}
                    />

 
                    <label>
                        Active <input
                            type="checkbox"
                            checked={newCoupon.isActive}
                            onChange={() => setNewCoupon({ ...newCoupon, isActive: !newCoupon.isActive })}
                        />
                    </label>
                </div>

                {/* Add Coupon Button */}
                <button
                    onClick={() => {
                        addCoupon(newCoupon);
                        setNewCoupon({
                            code: "",
                            discountType: "percentage",
                            discountValue: "",
                            validUntil: "",
                            isActive: true,
                        });
                    }}
                >
                    Add Coupon
                </button>

                {/* Coupon List */}
                <ul>
                    {Array.isArray(coupons) && coupons.length > 0 ? (
                        coupons.map((coupon) => (
                            <li key={coupon._id}>
                                {coupon.code} - {coupon.discountType === "percentage"
                                    ? `${coupon.discountValue}%`
                                    : `₹${coupon.discountValue}`
                                } - Expires on: {coupon.validUntil}
                                <button onClick={() => removeCoupon(coupon._id)}>Remove</button>
                            </li>
                        ))
                    ) : (
                        <p>No coupons available</p>
                    )}
                </ul>
            </div>
            <div className="card">
            <h1>Manage News & Updates</h1>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Title"
                    value={newNewsUpdate.title}
                    onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, title: e.target.value })}
                />
                <textarea
                    placeholder="Short Description"
                    value={newNewsUpdate.shortDescription}
                    onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, shortDescription: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Author Name"
                    value={newNewsUpdate.author}
                    onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, author: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="External Link (Optional)"
                    value={newNewsUpdate.link}
                    onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, link: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Published Date"
                    value={newNewsUpdate.publishedAt}
                    onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, publishedAt: e.target.value })}
                />
            </div>
                <div ><button onClick={() => { addNewsUpdate(newNewsUpdate); setNewNewsUpdate({ news: "", date: "", img: "", link: "" }); }}>Add News & Update</button>
                    <ul>
                        {Array.isArray(newsUpdate) ? (
                            newsUpdate.map((news, index) => (
                                <li key={news._id}>
                                    {news.news} - {news.date}
                                    <button onClick={() => removeNewsUpdate(news._id)}>Remove</button>
                                </li>
                            ))) : (<p>No news updates available</p>)}
                    </ul>
                </div>

            </div>

            <div className="card">
                <h1>Manage Batches</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Batch Course"
                        value={newBatch.course}
                        onChange={(e) => setNewBatch({ ...newBatch, course: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Batch Date"
                        value={newBatch.date}
                        onChange={(e) => setNewBatch({ ...newBatch, date: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Batch Image"
                        value={newBatch.img}
                        onChange={(e) => setNewBatch({ ...newBatch, img: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Batch Google docs file id"
                        value={newBatch.link}
                        onChange={(e) => setNewBatch({ ...newBatch, link: e.target.value })}
                    />
                </div>
                <div >
                    <button onClick={() => { addBatch(newBatch); setNewBatch({ course: "", date: "", img: "", link: "" }); }}>Add Batch</button>
                    <ul>
                        {Array.isArray(batches) ? (
                            batches.map((batch, index) => (
                                <li key={batch._id}>
                                    {batch.course} - {batch.date}
                                    <button onClick={() => removeBatch(batch._id)}>Remove</button>
                                </li>
                            ))) : (<p>No batches available</p>)}
                    </ul>
                </div>


            </div>

            <div className="card">
                <h1>Manage Reviews</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Reviewer Name"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Reviewer Text"
                        value={newReview.text}
                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Review Google link"
                        value={newReview.link}
                        onChange={(e) => setNewReview({ ...newReview, link: e.target.value })}
                    />
                </div>
                <div >
                    <button onClick={() => { addReview(newReview); setNewReview({ name: "", text: "", link: "" }); }}>Add Review</button>
                    <ul>
                        {Array.isArray(reviews) ? (
                            reviews.map((review, index) => (
                                <li key={review._id}>
                                    {review.name} - {review.text}
                                    <button onClick={() => removeReview(review._id)}>Remove</button>
                                </li>
                            ))) : (<p>No reviews available</p>)}
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default Admin