import React from 'react';
import categories from '../data/category';
import '../css/Categoryuser.css';

const CategoryUser = () => {
    return (
        <div className="category-user-page">
            <h1>Categories</h1>
            <div className="category-list">
                {categories.map(category => (
                    <details key={category.id} className="category-card">
                        <summary>
                            <div className="category-icon">
                                <img src={category.image} alt={category.name} className="category-image" /> {/* Use the image here */}
                            </div>
                            <h2>{category.name}</h2>
                        </summary>
                        <p>{category.description}</p>
                        <button className="btn btn-primary">View More</button>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default CategoryUser;
