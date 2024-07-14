import { useState } from "react";
import useStatusChange from "../hooks/useStatusChange";

/* eslint-disable react/prop-types */
const SearchOrdersResults = ({ order, i }) => {
  const [searchOrder, setSearchOrder] = useState(order);
  const { handleStatusChange } = useStatusChange();

  const changeStatus = async (orderId, newStatus) => {
    await handleStatusChange(orderId, newStatus);
    setSearchOrder((prevOrder) =>
      prevOrder._id === orderId
        ? { ...prevOrder, status: newStatus }
        : prevOrder
    );
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-8 rounded-full">
            <span className="text-xs">{i + 1}</span>
          </div>
        </div>
        <div className="ml-3 text-black">
          <p>Customer: {searchOrder.customerName}</p>
          <p>Product: {searchOrder.productName}</p>
          <p>Status: {searchOrder.status}</p>
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <button
          className="btn btn-info w-full md:w-fit mr-0 md:mr-2"
          onClick={() => changeStatus(searchOrder._id, "Confirmed")}
        >
          Mark as Confirmed
        </button>
        <button
          className="btn btn-primary w-full md:w-fit mr-0 md:mr-2"
          onClick={() => changeStatus(searchOrder._id, "Shipped")}
        >
          Mark as Shipped
        </button>
        <button
          className="btn btn-success w-full md:w-fit mr-0 md:mr-2"
          onClick={() => changeStatus(searchOrder._id, "Delivered")}
        >
          Mark as Delivered
        </button>
        <button
          className="btn btn-warning w-full md:w-fit mr-0 md:mr-2"
          onClick={() => changeStatus(searchOrder._id, "Cancelled")}
        >
          Mark as Cancelled
        </button>
      </div>
    </div>
  );
};

export default SearchOrdersResults;
