import LoadingSpinner from "../components/LoadingSpinner";
import useStatusChange from "../hooks/useStatusChange";
import { useState, useEffect } from "react";

const AllOrders = () => {
  const { orders, loadingOrders, handleStatusChange } = useStatusChange();
  const [searchKey, setSearchKey] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    if (!searchKey) {
      setFilteredOrders([]);
    } else {
      const filtered = orders.filter(
        (order) =>
          order._id.includes(searchKey) ||
          order.customerEmail.includes(searchKey) ||
          order.customerMobile.includes(searchKey)
      );
      setFilteredOrders(filtered);
    }
  }, [orders, searchKey]);

  if (loadingOrders) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        className="input input-bordered input-sm mb-4 text-black w-full"
        placeholder="Search Order by Order ID, Customer Email or Mobile"
      />
      <h2 className="text-3xl font-bold mb-4">
        {searchKey ? `Search Results for ${searchKey}` : "All Orders"}
      </h2>
      {searchKey && filteredOrders.length === 0 && (
        <p className="text-lg">No orders found.</p>
      )}
      <div className="space-y-4">
        {(searchKey ? filteredOrders : orders).map((order) => (
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
