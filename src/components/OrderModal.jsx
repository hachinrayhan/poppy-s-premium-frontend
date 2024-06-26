import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const OrderModal = ({ product, setShowModal }) => {
  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerEmail: "",
    customerMobileNumber: "",
    customerAddress: "",
  });

  const { customerName, customerEmail, customerMobile, customerAddress } =
    customerInfo;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (product.price * quantity).toFixed(2);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/email", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { name, email, mobileNumber, address } = response.data;
        setCustomerInfo({
          customerName: name,
          customerEmail: email,
          customerMobile: mobileNumber,
          customerAddress: address,
        });
      } catch (error) {
        console.error("Error fetching customer info:", error);
      }
    };

    fetchCustomerInfo();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmOrder = async () => {
    setError("");
    // Validate customer info
    if (
      !customerName ||
      !customerEmail ||
      !customerMobile ||
      !customerAddress
    ) {
      setError("All fields are required.");
      return;
    }
    const order = {
      productId: product._id,
      productName: product.name,
      quantity,
      totalPrice,
      status: "Order Placed",
      ...customerInfo,
      orderDate: new Date(),
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

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[95vh] overflow-y-auto">
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
        <div className="space-y-4">
          <h2 className="text-center text-2xl font-bold">Customer Details</h2>
          <input
            type="text"
            name="customerName"
            value={customerName}
            onChange={handleChange}
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="customerEmail"
            value={customerEmail}
            onChange={handleChange}
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="customerMobile"
            value={customerMobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="customerAddress"
            value={customerAddress}
            onChange={handleChange}
            placeholder="Address"
            className="input input-bordered w-full"
          />
        </div>
        {error && <p className="text-red-500 font-bold mb-4">{error}</p>}
        <div className="flex justify-end space-x-2 mt-2">
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
