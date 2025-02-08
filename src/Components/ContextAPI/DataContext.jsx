import { createContext, useContext, useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_APP_BACKEND_URL; // Backend URL

export const DataContext = createContext(); // Create Context

export const DataProvider = ({ children }) => {
    const [fall, setFall] = useState([]);
    const [parent, setParent] = useState([]);
    const [services, setServices] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [coupons, setCoupons] = useState([]);
    const [newsUpdate, setNewsUpdate] = useState([]);
    const [batches, setBatches] = useState([]);
    const [reviews, setReviews] = useState([]);

    
    // Common fetch function with authentication headers
    const fetchData = async (endpoint, method, body = null) => {
        try {
            
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: body ? JSON.stringify(body) : null,
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error in ${method} ${endpoint}:`, error.message);
        }
    };

    // CRUD Operations
    const addData = async (endpoint, newData, setData) => {
        const updatedData = await fetchData(endpoint, "POST", newData);
        if (updatedData) setData(updatedData);
    };

    const removeData = async (endpoint, id, setData) => {
        const success = await fetchData(`${endpoint}/${id}`, "DELETE");
        if (success) {
            setData(prevData => prevData.filter(item => item._id !== id));
        }
    };

    return (
        <DataContext.Provider value={{
            fall, parent, services, blogs, coupons, newsUpdate, batches, reviews,
            addFallLink: (newLink) => addData("fall", { link: newLink }, setFall),
            removeFallLink: (id) => removeData("fall", id, setFall),
            addParentLink: (newLink) => addData("parent", { link: newLink }, setParent),
            removeParentLink: (id) => removeData("parent", id, setParent),
            addService: (newService) => addData("services", newService, setServices),
            removeService: (id) => removeData("services", id, setServices),
            addBlog: (newBlog) => addData("blogs", newBlog, setBlogs),
            removeBlog: (id) => removeData("blogs", id, setBlogs),
            addCoupon: (newCoupon) => addData("coupons", newCoupon, setCoupons),
            removeCoupon: (id) => removeData("coupons", id, setCoupons),
            addNewsUpdate: (newNews) => addData("newsUpdates", newNews, setNewsUpdate),
            removeNewsUpdate: (id) => removeData("newsUpdates", id, setNewsUpdate),
            addBatch: (newBatch) => addData("batches", newBatch, setBatches),
            removeBatch: (id) => removeData("batches", id, setBatches),
            addReview: (newReview) => addData("reviews", newReview, setReviews),
            removeReview: (id) => removeData("reviews", id, setReviews),
            setFall, setParent, setServices, setBlogs, setCoupons, setNewsUpdate, setBatches, setReviews
        }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook for consuming context
export const useData = () => useContext(DataContext);
