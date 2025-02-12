import React from 'react';
import '../css/ProductPage.css'; 
import { products } from '../data/products';
import ProductList from '../components/product-list';



const ProductPage = () => {
    return (
        <div>
            <header>
                <h1 className='Our'>Our Products</h1>
            </header>
            <div className="hero">
                <h2>Find the perfect computers for you!</h2>
            </div>
            <div className="products">
               <ProductList />
            </div>
        </div>
    );
};

export default ProductPage;

           