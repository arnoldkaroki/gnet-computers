import React from 'react';
import './StarRating.css'; 

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0);

    return (
        <div className="star-rating">
            {stars.map((_, index) => (
                <span key={index} className={index < rating ? 'filled' : 'empty'}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
