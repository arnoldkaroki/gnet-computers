import React from 'react';
import '../css/Homepage.css';
import { products } from '../data/products';
import ProductList from '../components/product-list';
const HomePage = () => {
    return (
        <div>
         

            

        
            <section className="hero">
                <h2>Welcome to Our Store.</h2>
                <p className='Shop'>Shop the latest trends and enjoy exclusive discounts!</p>
            </section>

            <section className="products">
                <ProductList />
            </section>

            
        </div>
    );
};

export default HomePage;