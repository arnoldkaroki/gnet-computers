import React, { useState } from 'react';
import '../css/EditCategoryModal.css';

const AddProductModal = ({ isOpen, onClose, product = {}, onSave }) => {
    const [name, setName] = useState(product.name || ''); // Default to empty string
    const [description, setDescription] = useState(product.description || ''); // Default to empty string
    const [image, setImage] = useState(product.image || null); // Default to null
    const [isActive, setIsActive] = useState(product.isActive || false); // Default to false
    const [price, setPrice] = useState(product.price || ''); // Default to empty string
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

    if (!isOpen || !product) return null; // Ensure category is defined

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Product</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Product Price"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Product Description"
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

export default AddProductModal;
