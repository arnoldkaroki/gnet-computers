import React, { useState } from 'react';
import '../css/shop.css'; 
import ProductList from '../components/product-list';

const Shop = () => {
    return (
    <div>
        <section id='page-header'>
            <h2>#wegotchu</h2>
            <p>Save more with Coupons & up to 70% off!</p>
        </section>
        <section className="products">
        <ProductList />
    </section>
    <section id='pagination'>
        <a href='#'>1</a>   
        <a href='#'>2</a>
        <a href='#'><i className="fal fa-long-arrow-alt-right"></i></a>
    </section>
    </div>
    );
};

export default Shop;
