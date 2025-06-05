import React from 'react';
import '../../src/pages/ProductPage';  
import StarRating from '../../src/components/Starrating';

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No products found.</p>; 
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <StarRating rating={product.rating} />
                    <p>Price: ${product.price.toFixed(2)}</p>

                </div>
            ))}
        </div>
    );
};

export default ProductList;