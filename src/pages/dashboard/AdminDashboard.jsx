import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p>
            Manage user accounts, view user activity, and handle user
            permissions.
          </p>
          <Link
            to="/dashboard/admin/all-users"
            className="text-blue-600 hover:underline"
          >
            Manage Users
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Order Management</h2>
          <p>
            View and manage all orders, track order statuses, and handle
            customer inquiries.
          </p>
          <Link
            to="/dashboard/admin/all-orders"
            className="text-blue-600 hover:underline"
          >
            Manage Orders
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Product Management</h2>
          <p>
            Add, update, and remove products, manage inventory, and handle
            product categories.
          </p>
          <Link
            to="/dashboard/admin/products-list"
            className="text-blue-600 hover:underline"
          >
            Manage Products
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Reports and Analytics</h2>
          <p>
            View sales reports, analyze user data, and gain insights into
            business performance.
          </p>
          <Link
            to="/dashboard/admin/reports-analytics"
            className="text-blue-600 hover:underline"
          >
            View Reports
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p>
            Configure system settings, manage notifications, and update admin
            preferences.
          </p>
          <Link
            to="/dashboard/admin/settings"
            className="text-blue-600 hover:underline"
          >
            Go to Settings
          </Link>
        </div>
        {/* Add other cards with quick access links to key features */}
      </div>
    </div>
  );
};

export default AdminDashboard;
