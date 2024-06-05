import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/dashboard/admin" className="text-xl font-bold">
              Admin Dashboard
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard/admin/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <Link
              to="/dashboard/admin/update-profile"
              className="hover:text-gray-300"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
