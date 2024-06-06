import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-gray-900 mb-4">${product.price}</p>
        <p className="text-lg text-gray-700 mb-4">
          Category: {product.category}
        </p>
        <button className="btn btn-primary w-full">Order Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
