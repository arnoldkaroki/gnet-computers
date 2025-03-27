import React, { useState, useEffect } from 'react';
import '../../css/UserPage.css';

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
    };

    const handleAddUser = async () => {
        const newUser = { username, email, role };
        await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        fetchUsers();
        setUsername('');
        setEmail('');
        setRole('user');
    };

    const handleRemoveUser = async (userId) => {
        await fetch(`/api/users/${userId}`, { method: 'DELETE' });
        fetchUsers();
    };

    return (
        <div className="user-page">
            <h1>User Management</h1>
            <div className="add-user-form">
                <h2>Add User</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button onClick={handleAddUser}>Add User</button>
            </div>

            <h2>Current Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserPage;