import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="hidden md:block w-64 h-full bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/profile"
                className="hover:text-gray-400"
              >
                Profile
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/update-profile"
                className="hover:text-gray-400"
              >
                Update Profile
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/all-users"
                className="hover:text-gray-400"
              >
                All Users
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/all-products"
                className="hover:text-gray-400"
              >
                All Products
              </Link>
            </li>
            {/* Add other admin links here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
