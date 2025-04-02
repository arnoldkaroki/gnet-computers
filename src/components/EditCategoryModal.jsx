import React, { useState } from 'react';
import '../css/EditCategoryModal.css';

const EditCategoryModal = ({ isOpen, onClose, category, onSave }) => {
    const [name, setName] = useState(category.name);
    const [description, setDescription] = useState(category.description);

    const handleSave = () => {
        onSave({ ...category, name, description });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Category</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Category Name"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Category Description"
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditCategoryModal;