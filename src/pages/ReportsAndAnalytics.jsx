import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import LoadingSpinner from "../components/LoadingSpinner";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const ReportsAndAnalytics = () => {
  const [orderStatusData, setOrderStatusData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderStatusData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/reports/order-status",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const sortedData = sortOrderStatusData(response.data);
        setOrderStatusData(sortedData);
      } catch (error) {
        console.error("Error fetching order status data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatusData();
  }, []);

  const sortOrderStatusData = (data) => {
    const statusOrder = [
      "Order Placed",
      "Confirmed",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];
    return data.sort(
      (a, b) => statusOrder.indexOf(a._id) - statusOrder.indexOf(b._id)
    );
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const data = {
    labels: orderStatusData.map((status) => status._id),
    datasets: [
      {
        data: orderStatusData.map((status) => status.count),
        backgroundColor: [
          "#45818e", // color for "placed"
          "#674ea7", // color for "confirmed"
          "#a64d79", // color for "shipped"
          "#6aa84f", // color for "delivered"
          "#f1c232", // color for "cancelled"
        ],
        hoverBackgroundColor: [
          "#76a5af",
          "#8e7cc3",
          "#c27ba0",
          "#93c47d",
          "#ffd966",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18,
          },
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Orders Report</h2>
      <div className="chart-container max-w-xl mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;
