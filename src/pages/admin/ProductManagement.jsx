import React, { useState } from 'react';
import '../../css/ProductManagement.css';
import initialProducts from '../../data/products'; 
import { MdEdit } from 'react-icons/md'; 
import EditProductModal from '../../components/EditCategoryModal'; 

const ProductManagement = () => {
  const [products, setProducts] = useState(initialProducts); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const saveProduct = (updatedProduct) => {
    const updatedProducts = products.map(prod => 
      prod.name === updatedProduct.name ? updatedProduct : prod
    );
    setProducts(updatedProducts);
  };

  return (
    <section className="product-management">
      <h1>Product Management</h1>

      <div className="actions">
        <button className="add-btn" onClick={() => openEditModal({ name: '', price: '' })}>
          Add Product
        </button>
      </div>

      <h2>Product List</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>Ksh.{product.price}</td>
              <td className="actions-cell">
                <button 
                  className="edit-btn" 
                  onClick={() => openEditModal(product)} 
                  aria-label={`Edit ${product.name}`}
                >
                  <MdEdit />
                </button>
                <button 
                  className="remove-btn" 
                  onClick={() => removeProduct(index)}
                  aria-label={`Remove ${product.name}`}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={currentProduct || {}} 
        onSave={saveProduct} 
      />
    </section>
  );
};

export default ProductManagement;
