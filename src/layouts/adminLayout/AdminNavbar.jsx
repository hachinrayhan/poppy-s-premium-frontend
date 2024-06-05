import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="md:hidden bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={() =>
            document.getElementById("admin-menu").classList.toggle("hidden")
          }
          className="text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <nav id="admin-menu" className="mt-4 hidden">
        <ul>
          <li className="mt-2">
            <Link to="/dashboard/admin/profile" className="hover:text-gray-400">
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
  );
};

export default AdminNavbar;
