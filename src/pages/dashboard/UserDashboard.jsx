import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <p>
            Manage your personal details, update your profile, and ensure your
            information is up to date.
          </p>
          <Link
            to="/dashboard/user/profile"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Order History</h2>
          <p>
            View your past orders, track current orders, and reorder your
            favorite products.
          </p>
          <Link
            to="/dashboard/user/order-history"
            className="text-blue-600 hover:underline"
          >
            View Orders
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Update Profile</h2>
          <p>
            Edit your profile information, change your password, and manage your
            account settings.
          </p>
          <Link
            to="/dashboard/user/update-profile"
            className="text-blue-600 hover:underline"
          >
            Update Profile
          </Link>
        </div>
        {/* Add other cards with quick access links to key features */}
      </div>
    </div>
  );
};

export default UserDashboard;
