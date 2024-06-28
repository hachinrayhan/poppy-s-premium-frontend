import axios from "axios";
import { useEffect, useState } from "react";
import ProductManageCard from "./ProductManageCard";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Update the product list after deletion
  const refetch = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductManageCard
            key={product._id}
            product={product}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
