import { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import LoadingSpinner from "../components/LoadingSpinner";

// Register necessary components
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ReportsAndAnalytics = () => {
  const [orderStatusData, setOrderStatusData] = useState([]);
  const [weeklyRegistrationsData, setWeeklyRegistrationsData] = useState([]);
  const [monthlyRegistrationsData, setMonthlyRegistrationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderStatusData = async () => {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/reports/order-status",
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
      }
    };

    const fetchWeeklyRegistrationsData = async () => {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/reports/weekly-registrations",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setWeeklyRegistrationsData(response.data);
      } catch (error) {
        console.error("Error fetching weekly registrations data:", error);
      }
    };

    const fetchMonthlyRegistrationsData = async () => {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/reports/monthly-registrations",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setMonthlyRegistrationsData(response.data);
      } catch (error) {
        console.error("Error fetching monthly registrations data:", error);
      }
    };

    fetchOrderStatusData();
    fetchWeeklyRegistrationsData();
    fetchMonthlyRegistrationsData();
    setLoading(false);
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

  const orderStatusDataConfig = {
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

  const weeklyRegistrationsDataConfig = {
    labels: weeklyRegistrationsData.map((week) => `Week ${week._id}`),
    datasets: [
      {
        label: "Weekly Registrations",
        data: weeklyRegistrationsData.map((week) => week.count),
        backgroundColor: "#42A5F5",
        hoverBackgroundColor: "#64B5F6",
      },
    ],
  };

  const monthlyRegistrationsDataConfig = {
    labels: monthlyRegistrationsData.map((month) => month._id),
    datasets: [
      {
        label: "Monthly Registrations",
        data: monthlyRegistrationsData.map((month) => month.count),
        backgroundColor: "#674ea7",
        hoverBackgroundColor: "#8e7cc3",
      },
    ],
  };

  const orderStatusOptions = {
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

  const weeklyRegistrationsOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          type: "category",
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const monthlyRegistrationsOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          type: "category",
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Orders Report</h2>
      <div className="chart-container max-w-xl mx-auto mb-8">
        <Pie data={orderStatusDataConfig} options={orderStatusOptions} />
      </div>
      <h2 className="text-3xl font-bold mt-10">Registrations Report</h2>
      <div className="chart-container max-w-xl mx-auto my-8">
        <Bar
          data={weeklyRegistrationsDataConfig}
          options={weeklyRegistrationsOptions}
        />
      </div>
      <div className="chart-container max-w-xl mx-auto">
        <Bar
          data={monthlyRegistrationsDataConfig}
          options={monthlyRegistrationsOptions}
        />
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;
