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
        <div className="product-management">
            <h1>Product Management</h1>

            <h2>Edit Products</h2>
            <button onClick={() => openEditModal({ name: '', price: '' })}>
                Add Product
            </button>

            <h2>Product List</h2>
            <table>
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
                            <td>
                                <button onClick={() => openEditModal(product)}>
                                    <MdEdit />                               </button>
                                <button onClick={() => removeProduct(index)}>Remove</button>
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
        </div>
    );
};

export default ProductManagement;