import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/orders",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        setOrders(response.data.reverse()); // Reverse the order list
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.patch(
        `https://poppys-premium-backend.vercel.app/orders/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (loadingOrders) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">All Orders</h2>
      {orders.length === 0 && <p className="text-lg">No orders found.</p>}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">{order.productName}</h3>
            <p className="text-lg">Quantity: {order.quantity} KG</p>
            <p className="text-lg">Total Price: ${order.totalPrice}</p>
            <p className="text-lg">Status: {order.status}</p>
            <p className="text-lg">Customer Name: {order.customerName}</p>
            <p className="text-lg">Customer Email: {order.customerEmail}</p>
            <p className="text-lg">Customer Mobile: {order.customerMobile}</p>
            <p className="text-lg">Customer Address: {order.customerAddress}</p>
            <p className="text-lg">
              Order Date:{" "}
              {new Date(order.orderDate).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </p>
            <div className="space-y-2 mt-4">
              <button
                className="btn btn-info w-full md:w-fit mr-0 md:mr-2"
                onClick={() => handleStatusChange(order._id, "Confirmed")}
              >
                Mark as Confirmed
              </button>
              <button
                className="btn btn-primary w-full md:w-fit mr-0 md:mr-2"
                onClick={() => handleStatusChange(order._id, "Shipped")}
              >
                Mark as Shipped
              </button>
              <button
                className="btn btn-success w-full md:w-fit mr-0 md:mr-2"
                onClick={() => handleStatusChange(order._id, "Delivered")}
              >
                Mark as Delivered
              </button>
              <button
                className="btn btn-warning w-full md:w-fit mr-0 md:mr-2"
                onClick={() => handleStatusChange(order._id, "Cancelled")}
              >
                Mark as Cancelled
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
