import React from 'react';
import '../css/AdminNavbar.css'; 
const AdminNavbar = ({ isNavVisible }) => {
    return (
        <>
            {isNavVisible && (
                <nav className="admin-nav">
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#orders">Orders</a></li>
                        <li><a href="#users">Users</a></li>
                        <li><a href="#settings">Settings</a></li>
                        <li><a href="#analytics">Analytics</a></li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default AdminNavbar;