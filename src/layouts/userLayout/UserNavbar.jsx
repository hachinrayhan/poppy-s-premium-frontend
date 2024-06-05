import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/dashboard/user" className="text-xl font-bold">
              User Dashboard
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard/user/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <Link
              to="/dashboard/user/update-profile"
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

export default UserNavbar;
