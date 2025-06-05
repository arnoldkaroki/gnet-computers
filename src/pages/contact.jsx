import React, { useState } from 'react';
import '../css/contact.css'; 

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
      
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1>#LetsTalk</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <h6>Name:</h6>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <h6>Email:</h6>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <h6>Message:</h6>
                    <input
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
                 <section id='contact-details' className='section-p1'>
                <div className='details'>
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <i className='fal fa-map'></i>
                            <p>Ruiru,Kiambu,Kenya</p>
                        </li>
                          <li>
                            <i className='fal fa-envelope'></i>
                            <p>Gnetcomputers@gmail.com</p>
                        </li>  <li>
                            <i className='fal fa-phone-alt'></i>
                            <p>0717503038</p>
                        </li>  <li>
                            <i className='fal fa-clock'></i>
                            <p>Monday to Saturday: 0900 - 1700</p>
                        </li>
                    </div>

                </div>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255296.6120812113!2d36.84846310920231!3d-1.1536586283390835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1748329106722!5m2!1sen!2ske" width="600" height="450" Style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </section>
            
        </div>
   
    );
};

export default ContactPage;