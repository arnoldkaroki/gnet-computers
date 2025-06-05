import React, { useState } from 'react';
import '../css/EditCategoryModal.css';

const EditCategoryModal = ({ isOpen, onClose, category = {}, onSave }) => {
    const [name, setName] = useState(category.name || ''); // Default to empty string
    const [description, setDescription] = useState(category.description || ''); // Default to empty string
    const [image, setImage] = useState(category.image || null); // Default to null
    const [isActive, setIsActive] = useState(category.isActive || false); // Default to false

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file); // Set the selected file
        }
    };

    const handleSave = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        if (image) {
            formData.append('image', image); // Append the image file
        }
        formData.append('isActive', isActive);
        
        onSave(formData); // Pass FormData to onSave
        onClose();
    };

    if (!isOpen || !category) return null; // Ensure category is defined

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
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                        />
                        Active
                    </label>
                </div>
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditCategoryModal;
