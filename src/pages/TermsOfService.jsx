import React from 'react';
import '../css/TermsOfService.css';

const TermsOfService = () => {
    return (
        <div className="terms-of-service-container">
            <h1>Terms of Service</h1>
            <h2>Introduction</h2>
            <p>
                Welcome to GNet Computers. By accessing or using our website, mobile application, or any of our services, you
                agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <h2>Use of Our Services</h2>
            <p>
                You agree to use our services only for lawful purposes and in a way that does not infringe on the rights of
                others or restrict or inhibit anyone else's use and enjoyment of our services.
            </p>
            <h2>Intellectual Property</h2>
            <p>
                All content and materials on our website and in our services are the property of GNet Computers or our
                licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
                We will not be liable for any indirect, special, incidental, or consequential damages arising out of or
                related to your use of our services.
            </p>
            <h2>Governing Law and Jurisdiction</h2>
            <p>
                These Terms of Service shall be governed in accordance with the laws of The High Court,
                and any disputes will be resolved in the courts of Kenya.
            </p>
            <h2>Changes to These Terms</h2>
            <p>
                We may update these Terms of Service from time to time. We will notify you of any changes by posting the new
                Terms on our website.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about our Terms of Service, please contact us at{' '}
                <a href="mailto:terms@gnetcomputers.com">terms@gnetcomputers.com</a>.
            </p>
        </div>
    );
};

export default TermsOfService;