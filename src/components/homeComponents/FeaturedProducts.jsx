import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Some of Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.imageUrl} alt={product.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {product.name}</h2>
              <h2 className="card-title">Price: ${product.price}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-info">
                  <Link to={`/products/${product._id}`}>See Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
