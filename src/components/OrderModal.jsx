import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const OrderModal = ({ product, setShowModal }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (product.price * quantity).toFixed(2);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmOrder = async () => {
    const order = {
      productId: product._id,
      productName: product.name,
      quantity,
      totalPrice,
      status: "Order Placed",
    };

    try {
      const response = await axios.post("http://localhost:5000/orders", order, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Order response:", response.data);
      toast.success("Order Placed!");
      navigate("/dashboard/user/order-history");
      setShowModal(false);
    } catch (error) {
      console.error("Error confirming order:", error);
      alert("Failed to confirm order. Please try again.");
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-bold mb-4">{product.name}</h3>
        <p className="text-lg text-gray-700 mb-4">${product.price}</p>
        <div className="flex items-center justify-between mb-4">
          <button
            className="btn btn-secondary"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="text-xl">{quantity} KG</span>
          <button
            className="btn btn-secondary"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <p className="text-xl font-bold text-gray-900 mb-4">
          Total: ${totalPrice}
        </p>
        <div className="flex justify-end space-x-2">
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
