import React from 'react';
import { products } from '../data/products';
import '../css/product-card.css';
import ProductCard from './product-card';

const ProductList = () => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard product={product} />
            ))}
        </div>
    );
};

export default ProductList;