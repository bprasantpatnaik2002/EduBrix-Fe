import React from 'react'
import { useState } from "react";
import { useData } from "../ContextAPI/DataContext";

function Admin() {
  const { fall, parent, addFallLink, removeFallLink, addParentLink, removeParentLink ,services, addService, removeService, updateService, addBlog, removeBlog, blogs, addCoupon, removeCoupon, coupons, addNewsUpdate, removeNewsUpdate, newsUpdate, addBatch, removeBatch, batches, addReview, removeReview, reviews } = useData();

    const [newFallLink, setNewFallLink] = useState("");

    const [newParentLink, setNewParentLink] = useState("");

    const [newService, setNewService] = useState({ icon: "", name: "", text: "" ,link: ""});
    const [editIndex, setEditIndex] = useState(null);

    const [newBlog, setNewBlog] = useState({ blog: "", date: "", img: "", link: "" });

    const [newCoupon, setNewCoupon] = useState({ coupon: "", date: "", img: "", link: "" });

    const [newNewsUpdate, setNewNewsUpdate] = useState({ news: "", date: "", img: "", link: "" });

    const [newBatch, setNewBatch] = useState({ course: "", date: "", img: "", link: "" });

    const [newReview, setNewReview] = useState({ name: "", text: "",  link: "" });


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
                {Array.isArray(parent) ?(
                    parent.map((item, index) => (
                        <li key={item._id}>
                            <a href={`https://drive.google.com/uc?id=${item.link}`} target="_blank" rel="noopener noreferrer">
                                {item.link}
                            </a>
                            <button onClick={() => removeParentLink(item._id)}>Remove</button>
                        </li>
                    ))
                ):(<p>No parent links available</p>)}
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
                <button onClick={() => { addService(newService); setNewService({ icon: "", name: "", text: "",link: "" }); }}>
                    Add Service
                </button>
            ) : (
                <button onClick={() => { updateService(editIndex, newService); setEditIndex(null); setNewService({ icon: "", name: "", text: "",link: "" }); }}>
                    Update Service
                </button>
            )}

            <ul>
                { Array.isArray(services) ? (
                services.map((service, index) => (
                    <li key={service._id}>
                        <i className={service.icon}></i> {service.name}: {service.text}
                        <button onClick={() => removeService(service._id)}>Remove</button>
                    </li>
                ))):(<p>No services available</p>)}
            </ul>
            </div>
            
            </div>

            <div className="card">
            <h1>Manage Blogs</h1>
            <div className="input-container">
            <input
                type="text"
                placeholder="Blog Name"
                value={newBlog.blog}
                onChange={(e) => setNewBlog({ ...newBlog, blog: e.target.value })}
            />
            <input
                type="text"
                placeholder="Blog Date"
                value={newBlog.date}
                onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
            />
            <input
                type="text"
                placeholder="Blog Image"
                value={newBlog.img}
                onChange={(e) => setNewBlog({ ...newBlog, img: e.target.value })}
            />
            <input
                type="text"
                placeholder="Blog Google docs file id"
                value={newBlog.link}
                onChange={(e) => setNewBlog({ ...newBlog, link: e.target.value })}
            />
            </div>
            <div >
            <button onClick={() => { addBlog(newBlog); setNewBlog({ blog: "", date: "", img: "", link: "" }); }}>Add Blog</button>
            <ul>
                {Array.isArray(blogs) ? (
                blogs.map((blog, index) => (
                    <li key={blog._id}>
                        {blog.blog} - {blog.date}
                        <button onClick={() => removeBlog(blog._id)}>Remove</button>
                    </li>
                ))):(<p>No blogs available</p>)}
            </ul>
            </div>
            
            </div>

            <div className="card">
            <h1>Manage Coupons</h1>
            <div className="input-container">
            <input
                type="text"
                placeholder="Coupon Name"
                value={newCoupon.coupon}
                onChange={(e) => setNewCoupon({ ...newCoupon, coupon: e.target.value })}
            />
            <input
                type="text"
                placeholder="Coupon Date"
                value={newCoupon.date}
                onChange={(e) => setNewCoupon({ ...newCoupon, date: e.target.value })}
            />
            <input
                type="text"
                placeholder="Coupon Image"
                value={newCoupon.img}
                onChange={(e) => setNewCoupon({ ...newCoupon, img: e.target.value })}
            />
            <input
                type="text"
                placeholder="Coupon Google docs file id"
                value={newCoupon.link}
                onChange={(e) => setNewCoupon({ ...newCoupon, link: e.target.value })}
            />
            </div>
            <div >
            <button onClick={() => { addCoupon(newCoupon); setNewCoupon({ coupon: "", date: "", img: "", link: "" }); }}>Add Coupon</button>
            <ul>
                {Array.isArray(coupons) ? (
                coupons.map((coupon, index) => (
                    <li key={coupon._id}>
                        {coupon.coupon} - {coupon.date}
                        <button onClick={() => removeCoupon(coupon._id)}>Remove</button>
                    </li>
                ))) : (<p>No coupons available</p>)}
            </ul>
            </div>
            
            </div>

            <div className="card">
            <h1>Manage News & Updates</h1>
            <div className="input-container">
            <input
                type="text"
                placeholder="News Name"
                value={newNewsUpdate.news}
                onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, news: e.target.value })}
            />
            <input
                type="text"
                placeholder="News Date"
                value={newNewsUpdate.date}
                onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, date: e.target.value })}
            />
            <input
                type="text"
                placeholder="News Image"
                value={newNewsUpdate.img}
                onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, img: e.target.value })}
            />
            <input
                type="text"
                placeholder="News Google docs file id"
                value={newNewsUpdate.link}
                onChange={(e) => setNewNewsUpdate({ ...newNewsUpdate, link: e.target.value })}
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