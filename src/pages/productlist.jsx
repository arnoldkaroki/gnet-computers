import { useParams } from "react-router-dom";
import products from "../data/products";  // Import product data

export default function ProductPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) return <h1>Product not found!</h1>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
    </div>
  );
}
