import React, { useState, useEffect } from 'react';
import '../../css/OrderManagement.css';

const OrderManagement = () => {
    const [orders, setOrders] = useState([]); // State to store orders
    const [orderId, setOrderId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [orderTotal, setOrderTotal] = useState('');

    // Fetch orders from the backend API
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/orders'); // Replace with your backend URL
                const data = await response.json();
                setOrders(data); // Set the fetched orders in state
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []); // Empty dependency array ensures this runs only once

    const addOrder = () => {
        if (orderId && customerName && orderTotal) {
            const newOrder = { id: orderId, customerName, total: parseFloat(orderTotal).toFixed(2) };
            setOrders([...orders, newOrder]); // Add the new order to the state
            setOrderId('');
            setCustomerName('');
            setOrderTotal('');
        } else {
            alert('Please enter all fields: Order ID, Customer Name, and Order Total.');
        }
    };

    const removeOrder = (index) => {
        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
    };

    return (
        <div className="order-management">
            <h1>Order Management</h1>

            <h2>Add Order</h2>
            <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Order ID"
            />
            <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Customer Name"
            />
            <input
                type="number"
                value={orderTotal}
                onChange={(e) => setOrderTotal(e.target.value)}
                placeholder="Order Total"
            />
            <button onClick={addOrder}>Add Order</button>

            <h2>Order List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order._id || order.id}</td>
                            <td>{order.customerName}</td>
                            <td>${order.total}</td>
                            <td>
                                <button onClick={() => removeOrder(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;