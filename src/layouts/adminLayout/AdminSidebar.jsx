import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 hidden lg:block">
      <div className="text-center text-2xl font-bold">
        <Link to="/dashboard/admin">Admin Panel</Link>
      </div>
      <nav>
        <Link
          to="/dashboard/admin/profile"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/admin/update-profile"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Update Profile
        </Link>
        <Link
          to="/dashboard/admin/users"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          All Users
        </Link>
        <Link
          to="/dashboard/admin/products"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          All Products
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
