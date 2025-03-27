import React, {  useContext, useState } from 'react';
import '../css/Checkout.css'
import { CartContext } from '../context/CartContext';
const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        card: '',
        expiry: '',
        cvv: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

       
        if (!validateForm()) {
            setError('Please fill in all fields correctly.');
            setLoading(false);
            return;
        }

        try {
          
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, cartItems }),
            });

            if (!response.ok) {
                throw new Error('Payment failed. Please try again.');
            }

            const result = await response.json();
            alert('Payment successful! Thank you for your purchase.');
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const validateForm = () => {
        return Object.values(formData).every((field) => field.trim() !== '');
    };

    return (
        <div className="checkout-container">
            <h1 className='Check'>Checkout.</h1>
            {error && <p className="error-message">{error}</p>}
            <form className="checkout-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Shipping Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Location" required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip Code:</label>
                    <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" required />
                </div>
                <div className="form-group">
                    <label htmlFor="card">Credit Card Number:</label>
                    <input type="text" id="card" name="card" value={formData.card} onChange={handleChange} placeholder="0000000000" required />
                </div>
                <div className="form-group">
                    <label htmlFor="expiry">Expiry Date:</label>
                    <input type="text" id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="000" required />
                </div>
                <button type="submit" className="checkout-button" disabled={loading}>
                    {loading ? 'Processing...' : 'Complete Purchase.'}
                </button>
            </form>
        </div>
    );
};

export default Checkout;