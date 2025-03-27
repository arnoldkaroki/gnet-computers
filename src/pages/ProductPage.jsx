import React from 'react';
import '../css/ProductPage.css'; 
import { products } from '../data/products'; // Import the products data
import ProductList from '../components/product-list'; // Import the ProductList component

const ProductPage = () => {
    return (
        <div>
            <header>
                <h1 className='hero'>Our Products.</h1>
            </header>
            <div className="hero">
                <h2>Find the perfect computers for you!</h2>
            </div>
            <div className="products">
                 <ProductList products={products} />
            </div>
        </div>
    );
};

export default ProductPage;