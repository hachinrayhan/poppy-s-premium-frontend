import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductManageCard = ({ product, refetch }) => {
  const { _id, name, price, description, imageUrl } = product;
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://poppys-premium-backend.vercel.app/products/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      refetch(_id);
      toast.success("Product Deleted");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-info">
            <Link to={`/dashboard/admin/product-update/${_id}`}>Update</Link>
          </button>
          <button onClick={handleDelete} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManageCard;
