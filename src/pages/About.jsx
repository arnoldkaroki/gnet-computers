import React from 'react';
import '../css/About.css'; 


const About = () => {
    return (
        <div className="about-container">
            <h1>About GNet Computers</h1>
            <p>
                GNet Computers is a leading IT services provider based in Nairobi,Kenya, with branches all over Africa. We specialize in delivering high-quality software solutions, including CRM and ERP systems, custom application development, and comprehensive web development services.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to empower businesses through innovative technology solutions that enhance productivity and drive growth. We strive to provide our clients with the tools they need to succeed in a rapidly changing digital landscape.
            </p>
            <h2>Our Services</h2>
            <ul>
                <li>Custom Software Development</li>
                <li>CRM and ERP Solutions</li>
                <li>Web Development and Hosting</li>
                <li>IT Consulting and Support</li>
                <li>Digital Transformation Services</li>
            </ul>
            <h2>Why Choose Us?</h2>
            <p>
                At GNet Computers, we pride ourselves on our commitment to quality and customer satisfaction. Our team of experienced professionals works closely with clients to understand their unique needs and deliver tailored solutions that meet their objectives.
            </p>
            <h2>Contact Us</h2>
            <p>
                For more information about our services or to discuss your project, please <a href="/contact">contact us</a>.
            </p>
            </div>
    );
};

export default About;