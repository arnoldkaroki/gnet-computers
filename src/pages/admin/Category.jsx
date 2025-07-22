import React, { useState } from 'react';
import '../../css/Category.css'; 
import initialCategories from '../../data/category';
import { MdEdit } from 'react-icons/md'; 
import EditCategoryModal from '../../components/EditCategoryModal';

const Category = () => {
  const [categories, setCategories] = useState(Array.isArray(initialCategories) ? initialCategories : []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const removeCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const openEditModal = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  const saveCategory = (updatedCategory) => {
    const updatedCategories = categories.map(cat => 
      cat.name === updatedCategory.name ? updatedCategory : cat
    );
    setCategories(updatedCategories);
  };

  return (
    <section className="table-section category-management">
      <h1>Category Management</h1>

      <div className="actions">
        <button 
          className="add-btn" 
          onClick={() => openEditModal({ name: '', description: '' })}
        >
          Add Category
        </button>
      </div>

      <h2>Category List</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(categories) && categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td className="actions-cell">
                <button 
                  className="edit-btn" 
                  onClick={() => openEditModal(category)} 
                  aria-label={`Edit ${category.name}`}
                >
                  <MdEdit />
                </button>
                <button 
                  className="remove-btn" 
                  onClick={() => removeCategory(index)}
                  aria-label={`Remove ${category.name}`}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditCategoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        category={currentCategory || {}} 
        onSave={saveCategory} 
      />
    </section>
  );
};

export default Category;
