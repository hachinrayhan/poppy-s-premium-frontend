import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/orders/user",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  if (loadingOrders) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-4">Order History</h2>
        <Link
          to={"/products"}
          className="btn btn-outline text-lg text-blue-500"
        >
          {orders.length === 0 ? "Make an order" : "Make another order"}
        </Link>
      </div>
      {orders.length === 0 && (
        <p className="text-lg">You have no orders yet.</p>
      )}
      <div className="space-y-4">
        {orders
          .slice()
          .reverse()
          .map((order) => (
            <div key={order._id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">{order.productName}</h3>
              <p className="text-lg">Quantity: {order.quantity} KG</p>
              <p className="text-lg">Total Price: ${order.totalPrice}</p>
              <p className="text-lg">Status: {order.status}</p>
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderHistory;
