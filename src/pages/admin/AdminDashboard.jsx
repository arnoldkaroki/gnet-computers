import React, { useState } from 'react';
import '../../css/admin.css';
import AdminNavbar from '../../components/AdminNavbar'; 

const AdminDashboard = () => {
    const [isNavVisible, setNavVisible] = useState(true); 

    const toggleNav = () => {
        setNavVisible(!isNavVisible); 
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Dashboard</h1>
                <button className="toggle-nav-button" onClick={toggleNav}>
                    {isNavVisible ? 'Hide' : 'Show'} Navbar
                </button>
            </header>
            <AdminNavbar isNavVisible={isNavVisible} /> 
            <main className="admin-content">
                <section id="products">
                    <h2>Products</h2>
                    <p>Manage your products here. <a href="/admin/products">View Products</a></p>
                </section>
                <section id="Category">
                    <h2>Category</h2>
                    <p>View and manage categories here. <a href="/admin/category">View categories</a></p>
                </section>
                <section id="orders">
                    <h2>Orders</h2>
                    <p>View and manage orders here. <a href="/admin/orders">View Orders</a></p>
                </section>
                <section id="users">
                    <h2>Users</h2>
                    <p>Manage user accounts and permissions. <a href="/admin/users">View Users</a></p>
                </section>
                <section id="settings">
                    <h2>Settings</h2>
                    <p>Adjust your admin settings here. <a href="/admin/settings">Go to Settings</a></p>
                </section>
                <section id="analytics">
                    <h2>Analytics</h2>
                    <p>Manage analytics and performance. <a href="/admin/analytics">View Analytics</a></p>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;