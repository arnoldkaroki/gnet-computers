import React, { useState } from 'react';
import '../css/login.css'; 
import { Link } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Invalid email or password.');
            }

          
            alert('Login successful!');
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
<Link to="/login" className="login-link">Login </Link>
    return (
        <div className="login-container">
            <h1 className='log'>Log in</h1>
            {error && <p className="error-message">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='log' htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='log' htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="login-button" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="register-link">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;