import React from 'react';
import '../css/privacy.css';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>
                At GNet Computers, we are committed to protecting the privacy and security of our customers. This Privacy Policy
                explains how we collect, use, and protect your personal information.
            </p>
            <h2>Information We Collect</h2>
            <p>
                We may collect various types of information from you, including your name, email address, shipping address, and
                payment information. We use this information to process your orders, provide customer support, and improve our
                services.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
                We use your information to fulfill your orders, communicate with you, and improve our products and services. We
                may also use your information for marketing purposes, but you can opt-out of these communications at any time.
            </p>
            <h2>Data Security</h2>
            <p>
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
            </p>
            <h2>Changes to this Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on our website.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@gnetcomputers.com">privacy@gnetcomputers.com</a>.
            </p>
        </div>
    );
};

export default Privacy;