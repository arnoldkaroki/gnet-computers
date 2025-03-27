import React, { useState } from 'react';
import '../../css/ProductManagement.css';
import initialProducts from '../../data/products'; // Import the product data

const ProductManagement = () => {
    const [products, setProducts] = useState(initialProducts); // Set initial state from imported products
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const addProduct = () => {
        if (productName && productPrice) {
            const newProduct = { name: productName, price: parseFloat(productPrice).toFixed(2) };
            setProducts([...products, newProduct]);
            setProductName('');
            setProductPrice('');
        } else {
            alert('Please enter both product name and price.');
        }
    };

    const removeProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <div className="product-management">
            <h1>Product Management</h1>

            <h2>Add Product</h2>
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
            />
            <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="Product Price"
            />
            <button onClick={addProduct}>Add Product</button>

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
                                <button onClick={() => removeProduct(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagement;