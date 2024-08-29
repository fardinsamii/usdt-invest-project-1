// Loader.js
import React, { useState, useEffect } from 'react';
import "../../assets/css/custom_loader.css";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Hide loader after 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (!loading) {
        return null; // Don't render anything if loading is false
    }

    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;