import axios from "axios";
import { useEffect, useState } from "react";
import ProductManageCard from "./ProductManageCard";

const ProductsList = () => {
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

  // Update the product list after deletion
  const refetch = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

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
