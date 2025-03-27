import React from 'react';
import '../../src/pages/ProductPage'; // Optional: Add styles for the product list

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No products found.</p>; // Handle the case where no products are available
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;