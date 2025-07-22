import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Homepage.css';
import { products } from '../data/products';
import categories from '../data/category'; // Ensure this matches your export type
import ProductList from '../components/product-list';

const HomePage = () => {
    return (
        <div>
            

            <section className="banner">
    <h4>Don't Miss Out On Repairs!!!</h4>
    <h2>Up to <span>70% OFF</span> - All Electronics & Accessories</h2>
    <button className="cta-button">
        <Link to="/shop">Explore More</Link>
    </button>
</section>

            <section className="feature"> 
                <Link to="/shop" className='fe-box'>
                    <img src='/images/f1.png' alt="Free Shipping" />
                    <h6>Free Shipping</h6>
                </Link>
                <Link to="/shop" className='fe-box'>
                    <img src='/images/f2.png' alt="Online Order" />
                    <h6>Online Order</h6>
                </Link>
                <Link to="/shop" className='fe-box'>
                    <img src='/images/f3.png' alt="Save Money" />
                    <h6>Save Money</h6>
                </Link>
                <Link to="/shop" className='fe-box'>
                    <img src='/images/f4.png' alt="Promotions" />
                    <h6>Promotions</h6>
                </Link>
                <Link to="/shop" className='fe-box'>
                    <img src='/images/f5.png' alt="Happy Sell" />
                    <h6>Happy Sell</h6>
                </Link>
                <Link to="/contact" className='fe-box'>
                    <img src='/images/f6.png' alt="Support" />
                    <h6>Support</h6>
                </Link>
            </section>
            <section className="top-categories">
                <h2>Top Categories</h2>
                <ul>
                    {categories.map(category => (
                        <li key={category.id}>
                            <Link to={category.link}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="products">
                <ProductList />
            </section>

            <section id="sm-banner" className="section-p1">
                <div className='banner-box'>
                    <h4>Crazy Deals</h4>
                    <h2>50% OFF!</h2>
                    <span>The Best is on Sale at GNET</span>
                    <Link to='/about'><button className='white'>Learn More</button></Link>
                </div>
            </section>
            <section id="sm-banner" className="section-p1">
                <div className='banner-box2'>
                    <h4>Spring/Summer</h4>
                    <h2>New Season</h2>
                    <span>The Best is on Sale at GNET</span>
                    <Link to='/shop'><button className='white'>Collect</button></Link>
                </div>
            </section>
            <section id="sm-banner" className="section-p1">
            <div className='banner-box3'>
                    <h2>HOLIDAY SALE</h2>
                    <h3>50% OFF</h3>
            </div>
            <div className='banner-box4'>
                    <h2>Brand New ELECTRONICS</h2>
                    <h3>#wegotchu</h3>
            </div>
            <div className='banner-box5'>
                    <h2>PHONE SALES</h2>
                    <h3>New Trendy Phones</h3>
            </div>
            </section>

            <section id="newsletter" >
                <div className='newstext'>
                    <h4>Sign Up For Newsletter.</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div className='form'> 
                   <input type="text" placeholder='your e-mail address'></input>
                   <Link to='/register'><button className='cta-button'>Sign Up</button></Link> 
                </div>
            </section>
        </div>
    );
};

export default HomePage;
