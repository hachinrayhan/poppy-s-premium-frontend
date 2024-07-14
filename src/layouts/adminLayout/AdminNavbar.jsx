import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AdminNavbar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    toast.success("You have logged out. See you soon!");
    navigate("/");
  };

  return (
    <div className="md:hidden bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to={"/dashboard/admin"} className="text-md font-bold">
          Admin Dashboard
        </Link>
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
              to="/dashboard/admin/all-orders"
              className="hover:text-gray-400"
            >
              All Orders
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/dashboard/admin/add-product"
              className="hover:text-gray-400"
            >
              Add Product
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/dashboard/admin/products-list"
              className="hover:text-gray-400"
            >
              Products List
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/dashboard/admin/reports-analytics"
              className="hover:text-gray-400"
            >
              View Reports
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="mt-2">
            <button onClick={handleLogout} className="hover:text-gray-400">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
