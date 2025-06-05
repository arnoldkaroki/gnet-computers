import React from 'react';
import '../css/ProductPage.css'; 
import { products } from '../data/products'; 
import ProductList from '../components/product-list'; 

const ProductPage = () => {
    return (
        <section id='prodetails' className='section-p1'>
            <div className='single-pro-image'>
                <img src='/images/image(1).jpg' width='100%' id='MainImg' alt=''></img>
              
            </div>
            <div className='single-pro-details'>
                <h6>Home/Laptops</h6>
                <h4>Lenovo</h4>
                <h2>Ksh. 40,000</h2>
                <select>
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>S</option>
                    <option>L</option>
                </select>
                <input type= "number" value="1"></input>
                <button className='btn'>Add To Cart</button>
                <h4>Product Details</h4>
                <span>The Lenovo Laptop is designed to elevate your computing experience, whether you're working from home, attending online classes, or enjoying your favorite entertainment. With its sleek design and powerful performance, this laptop is perfect for anyone seeking reliability and versatility.</span>

            </div>
        </section>
    );
};

export default ProductPage;