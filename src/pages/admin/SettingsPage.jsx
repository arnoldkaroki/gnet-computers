import React, { useState } from 'react';
import { IoIosColorFilter } from 'react-icons/io'; // Import the icon
import '../../css/SettingsPage.css';
import '../../model/user'

const SettingsPage = () => {
    const [themeColor, setThemeColor] = useState('#ffffff');
    const [userRole, setUserRole] = useState('admin');
    const [users, setUsers] = useState([

    ]);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'viewer' });
    const [editingUser, setEditingUser] = useState(null);

    const handleSaveSettings = () => {
        console.log('Settings saved:', { themeColor, userRole });
        alert('Settings saved successfully!');
    };

    const handleAddUser = () => {
        if (editingUser) {
            setUsers(users.map(user => (user.id === editingUser.id ? { ...editingUser, ...newUser } : user)));
            setEditingUser(null);
        } else {
            setUsers([...users, { id: Date.now(), ...newUser }]);
        }
        setNewUser({ name: '', email: '', role: 'viewer' });
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setNewUser({ name: user.name, email: user.email, role: user.role });
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleResetPassword = (email) => {
        alert(`Password reset link sent to ${email}`);
    };

    return (
        <div className="settings-page">
            <h1>Settings</h1>
            <div className="settings-form">
                <label>
                    Theme Color: <IoIosColorFilter />
                    <input
                        type="color"
                        value={themeColor}
                        onChange={(e) => setThemeColor(e.target.value)}
                    />
                </label>

                <label>
                    User Role:
                    <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                    </select>
                </label>
                <button onClick={handleSaveSettings}>Save Settings</button>
            </div>

            <h2>User Management</h2>
            <div className="user-management">
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>
                <button onClick={handleAddUser}>{editingUser ? 'Update User' : 'Add User'}</button>
            </div>

            <div className="user-list">
                <h3>Existing Users</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} ({user.email}) - {user.role}
                            <button onClick={() => handleEditUser(user)}>Edit</button>
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            <button onClick={() => handleResetPassword(user.email)}>Reset Password</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SettingsPage;